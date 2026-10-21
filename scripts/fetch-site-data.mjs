#!/usr/bin/env node
// scripts/fetch-site-data.mjs — runs before `astro build`.
// Copies what admins publish in the portal into the site, so the static
// website never calls the portal at visit time:
//   • events (admin → Events, "Public") and their photos
//   • website text, pictures and SEO settings (admin → Website)
//
//   EVENTS_FEED_URL   default https://portal.dancewithsnn.com/portal/api/public/events
//   CONTENT_FEED_URL  default https://portal.dancewithsnn.com/portal/api/public/site-content
//   CI=true          (set by GitHub Actions) → if the feed can't be read, FAIL the
//                    build so the site already online stays as it is.
//   Locally          → keep the last downloaded events, or build without events.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const FEED = process.env.EVENTS_FEED_URL || 'https://portal.dancewithsnn.com/portal/api/public/events';
const STRICT = process.env.CI === 'true';
const OUT_JSON = path.resolve('src/data/events.json');
const CONTENT_FEED = process.env.CONTENT_FEED_URL || 'https://portal.dancewithsnn.com/portal/api/public/site-content';
const OUT_CONTENT = path.resolve('src/data/site-content.json');
const SITE_MEDIA_DIR = path.resolve('public/site-media');
const MEDIA_DIR = path.resolve('public/event-media');
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;
const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/avif': 'avif' };

class FeedError extends Error {}
function fail(msg) { throw new FeedError(msg); }

/** Feed unreachable: CI stops (live site unchanged); locally keep last copy or use defaults. */
function handleFeedError(what, err, outFile, empty) {
  if (!(err instanceof FeedError)) throw err;
  if (STRICT) { console.error(`✗ ${what}: ${err.message} — stopping so the live site stays unchanged.`); process.exit(1); }
  if (fs.existsSync(outFile)) { console.warn(`! ${what}: ${err.message} — keeping the last downloaded copy.`); return; }
  console.warn(`! ${what}: ${err.message} — building with defaults.`);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, JSON.stringify(empty, null, 2));
}

async function download(url, subdir, mediaRoot = MEDIA_DIR, publicBase = '/event-media') {
  const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  const type = (res.headers.get('content-type') || '').split(';')[0].trim();
  const ext = EXT[type] || (url.match(/\.(jpe?g|png|webp|gif|avif)(?:$|\?)/i)?.[1].toLowerCase().replace('jpeg', 'jpg'));
  if (!ext) throw new Error(`not an image (${type || 'unknown type'}): ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length > MAX_IMAGE_BYTES) throw new Error(`image too large: ${url}`);
  const name = crypto.createHash('sha1').update(url).digest('hex').slice(0, 16) + '.' + ext;
  const dir = path.join(mediaRoot, subdir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, name), buf);
  return `${publicBase}/${subdir}/${name}`;
}

async function fetchEvents() {
  let feed;
  try {
    const res = await fetch(FEED, { signal: AbortSignal.timeout(30_000), headers: { Accept: 'application/json' } });
    if (!res.ok) fail(`events feed answered ${res.status}`);
    feed = await res.json();
    if (!Array.isArray(feed?.events)) fail('events feed returned an unexpected format');
  } catch (e) {
    if (e instanceof FeedError) throw e;
    fail(`could not reach the events feed (${e.message})`);
  }

  fs.rmSync(MEDIA_DIR, { recursive: true, force: true });
  const cache = new Map();
  let imageCount = 0;
  const local = async (url, eventId) => {
    if (!url) return null;
    if (cache.has(url)) return cache.get(url);
    try {
      const p = await download(url, eventId);
      cache.set(url, p); imageCount++;
      return p;
    } catch (e) {
      if (STRICT) { console.error(`✗ image download failed: ${e.message}`); process.exit(1); }
      console.warn(`! skipped image: ${e.message}`);
      cache.set(url, null);
      return null;
    }
  };

  const events = [];
  for (const ev of feed.events) {
    if (!/^[0-9a-f-]{36}$/i.test(ev.id)) continue;
    const photos = [];
    for (const ph of ev.photos ?? []) {
      const url = await local(ph.url, ev.id);
      if (url) photos.push({ url, alt: ph.alt ?? null, isCover: !!ph.isCover });
    }
    events.push({
      ...ev,
      keywords: typeof ev.keywords === 'string' ? ev.keywords.slice(0, 500) : '',
      posterUrl: await local(ev.posterUrl, ev.id),
      coverUrl: await local(ev.coverUrl, ev.id),
      photos,
    });
  }

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify({ generatedAt: feed.generatedAt ?? new Date().toISOString(), events }, null, 2));
  console.log(`✓ ${events.length} public event(s), ${imageCount} image(s) copied into the site`);
}

// ── Website text / pictures / SEO ─────────────────────────────────────────────
async function fetchContent() {
  const schema = JSON.parse(fs.readFileSync(path.resolve('src/content/schema.json'), 'utf8'));
  const imageKeys = new Set(['__none']);
  for (const page of schema.pages) {
    if (page.seo) imageKeys.add(`seo:${page.path}.image`);
    for (const s of page.sections) for (const f of s.fields) if (f.type === 'image') imageKeys.add(f.key);
  }
  let feed;
  try {
    const res = await fetch(CONTENT_FEED, { signal: AbortSignal.timeout(30_000), headers: { Accept: 'application/json' } });
    if (!res.ok) fail(`content feed answered ${res.status}`);
    feed = await res.json();
    if (!feed || typeof feed.items !== 'object') fail('content feed returned an unexpected format');
  } catch (e) {
    if (e instanceof FeedError) throw e;
    fail(`could not reach the content feed (${e.message})`);
  }
  fs.rmSync(SITE_MEDIA_DIR, { recursive: true, force: true });
  const items = {};
  let images = 0;
  for (const [key, item] of Object.entries(feed.items)) {
    if (!/^[a-z0-9:/._#-]+$/i.test(key)) continue;
    const out = { value: typeof item?.value === 'string' ? item.value : '', alt: typeof item?.alt === 'string' ? item.alt : '' };
    if (imageKeys.has(key) && /^https:\/\//.test(out.value)) {
      try {
        out.value = await download(out.value, 'img', SITE_MEDIA_DIR, '/site-media');
        images++;
      } catch (e) {
        if (STRICT) { console.error(`✗ website image download failed: ${e.message}`); process.exit(1); }
        console.warn(`! skipped website image: ${e.message}`);
        out.value = '';                                  // falls back to the default picture
      }
    }
    items[key] = out;
  }
  fs.mkdirSync(path.dirname(OUT_CONTENT), { recursive: true });
  fs.writeFileSync(OUT_CONTENT, JSON.stringify({ generatedAt: feed.generatedAt ?? null, items }, null, 2));
  console.log(`✓ ${Object.keys(items).length} website setting(s), ${images} picture(s) copied into the site`);
}

try { await fetchEvents(); } catch (e) { handleFeedError('events', e, OUT_JSON, { generatedAt: null, events: [] }); }
try { await fetchContent(); } catch (e) { handleFeedError('website content', e, OUT_CONTENT, { generatedAt: null, items: {} }); }
