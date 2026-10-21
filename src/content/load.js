// src/content/load.js — build-time only (Astro frontmatter). Reads the admin
// overrides downloaded by scripts/fetch-site-data.mjs, if any.
import fs from 'node:fs';
import { mergeContent } from './core.js';

let cached;
export function loadContent() {
  if (cached) return cached;
  let overrides = {};
  try { overrides = JSON.parse(fs.readFileSync('src/data/site-content.json', 'utf8')).items ?? {}; } catch {}
  cached = mergeContent(overrides);
  return cached;
}
