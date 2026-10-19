// src/content/core.js — editable website content: defaults + admin overrides.
// Shared by the Astro pages (build time) and the React sections (browser).
//
// Keys:   "home.hero.title"            → text
//         "home.hero.image"            → image URL, "home.hero.image#alt" → its alt text
//         "seo:/about.title"           → page title (also .description .ogTitle .keywords .image)
//         "kw:/:hero"                  → extra search keywords for one section (added to the page's)
import schema from './schema.json';

export { schema };
export const SEO_FIELDS = ['title', 'description', 'ogTitle', 'keywords', 'image'];
export const DEFAULT_SHARE_IMAGE = 'https://dancewithsnn.com/Logo.png';

/** Every editable key with its default value. */
export function defaultContent() {
  const map = {};
  for (const page of schema.pages) {
    if (page.seo) for (const f of SEO_FIELDS) map[`seo:${page.path}.${f}`] = page.seo[f] ?? '';
    for (const section of page.sections) {
      if (page.seo) map[`kw:${page.path}:${section.id}`] = '';
      for (const field of section.fields) {
        map[field.key] = field.default ?? '';
        if (field.type === 'image') map[`${field.key}#alt`] = field.altDefault ?? '';
      }
    }
  }
  return map;
}

/** Defaults with admin overrides applied ({ key: { value, alt } }). Empty values fall back to defaults. */
export function mergeContent(overrides = {}) {
  const map = defaultContent();
  for (const [key, o] of Object.entries(overrides || {})) {
    if (!(key in map)) continue;                       // unknown/retired keys are ignored
    if (typeof o?.value === 'string' && o.value.trim() !== '') map[key] = o.value;
    if (`${key}#alt` in map && typeof o?.alt === 'string' && o.alt.trim() !== '') map[`${key}#alt`] = o.alt;
  }
  return map;
}

/** Only the keys a page needs (its own + site-wide), to keep each page's HTML small. */
export function contentForPage(map, path) {
  const prefix = path === '/' ? 'home.' : `${path.slice(1)}.`;
  const out = {};
  for (const [k, v] of Object.entries(map)) {
    if (k.startsWith(prefix) || k.startsWith('site.') || k.startsWith('footer.')) out[k] = v;
  }
  return out;
}

/** Page keywords + every section's keywords, de-duplicated, comma-separated. */
export function keywordsFor(map, path) {
  const parts = [map[`seo:${path}.keywords`] ?? ''];
  for (const [k, v] of Object.entries(map)) if (k.startsWith(`kw:${path}:`)) parts.push(v);
  const seen = new Set();
  return parts.join(',').split(',').map((w) => w.trim().replace(/\s+/g, ' ')).filter((w) => {
    const low = w.toLowerCase();
    if (!w || seen.has(low)) return false;
    seen.add(low); return true;
  }).join(', ');
}

export function seoFor(map, path) {
  const get = (f) => map[`seo:${path}.${f}`] ?? '';
  return {
    title: get('title'),
    description: get('description'),
    ogTitle: get('ogTitle') || get('title'),
    keywords: keywordsFor(map, path),
    image: get('image') || DEFAULT_SHARE_IMAGE,
  };
}
