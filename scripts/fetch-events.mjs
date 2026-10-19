#!/usr/bin/env node
// scripts/fetch-events.mjs — runs before `astro build`.
// Copies the events published from the portal admin (and their photos) into
// the site, so the static website never calls the portal at visit time.
//
//   EVENTS_FEED_URL  default https://portal.dancewithsnn.com/portal/api/public/events
//   CI=true          (set by GitHub Actions) → if the feed can't be read, FAIL the
//                    build so the site already online stays as it is.
//   Locally          → keep the last downloaded events, or build without events.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const FEED = process.env.EVENTS_FEED_URL || 'https://portal.dancewithsnn.com/portal/api/public/events';
const STRICT = process.env.CI === 'true';
const OUT_JSON = path.resolve('src/data/events.json');
const MEDIA_DIR = path.resolve('public/event-media');
const MAX_IMAGE_BYTES = 15 * 1024 * 1024;
const EXT = { 'image/jpeg': 'jpg', 'image/png': 'png', 'image/webp': 'webp', 'image/gif': 'gif', 'image/avif': 'avif' };

function fail(msg) {
  if (STRICT) { console.error(`✗ ${msg} — stopping so the live site stays unchanged.`); process.exit(1); }
  if (fs.existsSync(OUT_JSON)) { console.warn(`! ${msg} — keeping the last downloaded events.`); process.exit(0); }
  console.warn(`! ${msg} — building without events.`);
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify({ generatedAt: null, events: [] }, null, 2));
  process.exit(0);
}

async function download(url, eventId) {
  const res = await fetch(url, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  const type = (res.headers.get('content-type') || '').split(';')[0].trim();
  const ext = EXT[type] || (url.match(/\.(jpe?g|png|webp|gif|avif)(?:$|\?)/i)?.[1].toLowerCase().replace('jpeg', 'jpg'));
  if (!ext) throw new Error(`not an image (${type || 'unknown type'}): ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length > MAX_IMAGE_BYTES) throw new Error(`image too large: ${url}`);
  const name = crypto.createHash('sha1').update(url).digest('hex').slice(0, 16) + '.' + ext;
  const dir = path.join(MEDIA_DIR, eventId);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, name), buf);
  return `/event-media/${eventId}/${name}`;
}

let feed;
try {
  const res = await fetch(FEED, { signal: AbortSignal.timeout(30_000), headers: { Accept: 'application/json' } });
  if (!res.ok) fail(`events feed answered ${res.status}`);
  feed = await res.json();
  if (!Array.isArray(feed?.events)) fail('events feed returned an unexpected format');
} catch (e) {
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
    posterUrl: await local(ev.posterUrl, ev.id),
    coverUrl: await local(ev.coverUrl, ev.id),
    photos,
  });
}

fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
fs.writeFileSync(OUT_JSON, JSON.stringify({ generatedAt: feed.generatedAt ?? new Date().toISOString(), events }, null, 2));
console.log(`✓ ${events.length} public event(s), ${imageCount} image(s) copied into the site`);
