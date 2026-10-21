// src/pages/sitemap.xml.ts — /sitemap.xml (the address robots.txt and Google
// Search Console already use). Lists every public page; no lastmod dates, so
// routine republishes never claim pages changed when they didn't.
import type { APIRoute } from 'astro';

const PAGES = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.8' },
  { path: '/classes', priority: '0.8' },
  { path: '/events', priority: '0.8' },
  { path: '/policies', priority: '0.4' },
  { path: '/contact', priority: '0.7' },
];

export const GET: APIRoute = () => {
  const urls = PAGES.map((p) =>
    `  <url>\n    <loc>https://dancewithsnn.com${p.path}</loc>\n    <priority>${p.priority}</priority>\n  </url>`
  ).join('\n');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
};
