/**
 * SSG (Static Site Generation) prerender script.
 *
 * Runs after `vite build` + `vite build --ssr`:
 *   1. Loads the SSR bundle (dist/entry-server.js)
 *   2. Calls render(url) for every route → gets real React HTML + critical MUI CSS
 *   3. Injects both into the client-built index.html template
 *   4. Writes one HTML file per route (Google gets full content without running JS)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = ['/', '/about', '/classes', '/events', '/portal', '/contact'];
const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');
const serverEntryPath = path.join(__dirname, 'dist-ssr/entry-server.js');

// Per-route SEO meta — injected into the static HTML so every page
// has the correct title, description, and canonical even before JS runs.
const routeMeta = {
  '/': {
    title: 'Sree Narthana Natyalaya | Bharatanatyam Classes in Texas | Dance With SNN',
    description:
      'Join Sree Narthana Natyalaya for Bharatanatyam classes in Texas. Learn Indian classical dance under Guru Shree Nandini. Classes for beginners, kids, and advanced students.',
    canonical: 'https://dancewithsnn.com/',
    ogTitle: 'Sree Narthana Natyalaya | Bharatanatyam Classes in Texas',
    ogUrl: 'https://dancewithsnn.com/',
  },
  '/about': {
    title: 'About Sree Narthana Natyalaya | Bharatanatyam School in Texas',
    description:
      'Learn about Sree Narthana Natyalaya, a Bharatanatyam dance school in Spring, Texas led by Guru Shree Nandini.',
    canonical: 'https://dancewithsnn.com/about',
    ogTitle: 'About Sree Narthana Natyalaya | Bharatanatyam School Texas',
    ogUrl: 'https://dancewithsnn.com/about',
  },
  '/classes': {
    title: 'Bharatanatyam Classes in Spring Texas | Sree Narthana Natyalaya',
    description:
      'Join Bharatanatyam classes in Spring, Texas at Sree Narthana Natyalaya under Guru Shree Nandini. Training for beginners and advanced students.',
    canonical: 'https://dancewithsnn.com/classes',
    ogTitle: 'Bharatanatyam Classes in Spring Texas | Sree Narthana Natyalaya',
    ogUrl: 'https://dancewithsnn.com/classes',
  },
  '/events': {
    title: 'Events & Performances | Sree Narthana Natyalaya | Bharatanatyam Events Texas',
    description:
      'Explore Bharatanatyam performances and cultural events by Sree Narthana Natyalaya in Texas. Stay updated with recitals and showcases.',
    canonical: 'https://dancewithsnn.com/events',
    ogTitle: 'Bharatanatyam Events | Sree Narthana Natyalaya Texas',
    ogUrl: 'https://dancewithsnn.com/events',
  },
  '/portal': {
    title: 'Student Portal | Sree Narthana Natyalaya',
    description: 'Access the student portal for Sree Narthana Natyalaya dance classes.',
    canonical: 'https://dancewithsnn.com/portal',
    ogTitle: 'Student Portal | Sree Narthana Natyalaya',
    ogUrl: 'https://dancewithsnn.com/portal',
  },
  '/contact': {
    title: 'Contact Sree Narthana Natyalaya | Bharatanatyam Classes in Spring Texas',
    description:
      'Contact Sree Narthana Natyalaya in Spring, Texas for Bharatanatyam classes under Guru Shree Nandini. Enroll today!',
    canonical: 'https://dancewithsnn.com/contact',
    ogTitle: 'Contact Sree Narthana Natyalaya',
    ogUrl: 'https://dancewithsnn.com/contact',
  },
};

function injectMeta(html, meta) {
  let out = html;

  out = out.replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`);

  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );

  out = out.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"/,
    `<link rel="canonical" href="${meta.canonical}"`
  );

  out = out.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"/,
    `<meta property="og:title" content="${meta.ogTitle}"`
  );

  out = out.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  );

  out = out.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"/,
    `<meta property="og:url" content="${meta.ogUrl}"`
  );

  return out;
}

async function main() {
  // Verify the SSR bundle exists
  if (!fs.existsSync(serverEntryPath)) {
    console.error(`❌ SSR bundle not found at ${serverEntryPath}`);
    console.error('   Run "vite build --ssr src/entry-server.jsx" first.');
    process.exit(1);
  }

  const template = fs.readFileSync(indexHtmlPath, 'utf-8');

  // Dynamic import of the SSR bundle (built by vite build --ssr)
  const { render } = await import(`file://${serverEntryPath}`);

  console.log('🚀 Starting SSG prerender...\n');

  for (const url of routes) {
    const { appHtml, emotionStyleTags } = render(url);
    const meta = routeMeta[url];

    let html = template;

    // 1. Inject real React HTML (what Googlebot will read)
    html = html.replace('<!--app-html-->', appHtml);

    // 2. Inject critical MUI/emotion CSS (prevents CLS — Core Web Vitals)
    html = html.replace('<!--emotion-styles-->', emotionStyleTags || '');

    // 3. Inject correct per-page meta tags
    if (meta) {
      html = injectMeta(html, meta);
    }

    // 4. Write file
    let filePath;
    if (url === '/') {
      filePath = indexHtmlPath;
    } else {
      const routeDir = path.join(distPath, url);
      fs.mkdirSync(routeDir, { recursive: true });
      filePath = path.join(routeDir, 'index.html');
    }

    fs.writeFileSync(filePath, html);
    console.log(`✅ ${url.padEnd(12)} → ${filePath}`);
  }

  console.log('\n✨ SSG complete — all routes have real HTML content for Googlebot.');
}

main().catch((err) => {
  console.error('❌ Prerender failed:', err);
  process.exit(1);
});
