/**
 * Simple prerendering script without Puppeteer
 * Generates static HTML files for each route
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = ['/', '/about', '/classes', '/events', '/portal', '/contact'];
const distPath = path.join(__dirname, 'dist');
const indexHtmlPath = path.join(distPath, 'index.html');

// Read the base index.html
const baseHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

// SEO metadata for each route
const routeMeta = {
  '/': {
    title: 'Dance With SNN | Sree Narthana Natyalaya | Bharatanatyam Classes in Texas',
    description: 'Join Dance With SNN (Sree Narthana Natyalaya) for Bharatanatyam classes in Texas. Learn Indian classical dance under Guru Shree Nandini. Classes for beginners, kids, and advanced students.',
    canonical: 'https://dancewithsnn.com/',
  },
  '/about': {
    title: 'About Sree Narthana Natyalaya | Bharatanatyam School in Texas',
    description: 'Learn about Sree Narthana Natyalaya, a Bharatanatyam dance school in Texas led by Guru Shree Nandini.',
    canonical: 'https://dancewithsnn.com/about',
  },
  '/classes': {
    title: 'Bharatanatyam Classes in Spring Texas | Sree Narthana Natyalaya',
    description: 'Join Bharatanatyam classes in Spring, Texas at Sree Narthana Natyalaya under Guru Shree Nandini. Training for beginners and advanced students.',
    canonical: 'https://dancewithsnn.com/classes',
  },
  '/events': {
    title: 'Events | Sree Narthana Natyalaya',
    description: 'Upcoming events and performances at Sree Narthana Natyalaya dance school in Texas.',
    canonical: 'https://dancewithsnn.com/events',
  },
  '/portal': {
    title: 'Student Portal | Sree Narthana Natyalaya',
    description: 'Access the student portal for Sree Narthana Natyalaya dance classes.',
    canonical: 'https://dancewithsnn.com/portal',
  },
  '/contact': {
    title: 'Contact Us | Sree Narthana Natyalaya',
    description: 'Get in touch with Sree Narthana Natyalaya for Bharatanatyam classes in Texas. Enroll today!',
    canonical: 'https://dancewithsnn.com/contact',
  },
};

function updateMetaTags(html, meta) {
  let updatedHtml = html;

  // Update title
  updatedHtml = updatedHtml.replace(
    /<title>.*?<\/title>/,
    `<title>${meta.title}</title>`
  );

  // Update description
  updatedHtml = updatedHtml.replace(
    /<meta\s+name="description"\s+content="[^"]*"/,
    `<meta name="description" content="${meta.description}"`
  );

  // Update canonical
  updatedHtml = updatedHtml.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"/,
    `<link rel="canonical" href="${meta.canonical}"`
  );

  // Update OG tags
  updatedHtml = updatedHtml.replace(
    /<meta\s+property="og:title"\s+content="[^"]*"/,
    `<meta property="og:title" content="${meta.title}"`
  );

  updatedHtml = updatedHtml.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"/,
    `<meta property="og:description" content="${meta.description}"`
  );

  updatedHtml = updatedHtml.replace(
    /<meta\s+property="og:url"\s+content="[^"]*"/,
    `<meta property="og:url" content="${meta.canonical}"`
  );

  return updatedHtml;
}

console.log('🚀 Starting prerendering...\n');

routes.forEach((route) => {
  const meta = routeMeta[route];
  const updatedHtml = updateMetaTags(baseHtml, meta);

  let filePath;
  if (route === '/') {
    filePath = indexHtmlPath;
  } else {
    const routePath = path.join(distPath, route);
    fs.mkdirSync(routePath, { recursive: true });
    filePath = path.join(routePath, 'index.html');
  }

  fs.writeFileSync(filePath, updatedHtml);
  console.log(`✅ Generated: ${route} → ${filePath}`);
});

console.log('\n✨ Prerendering complete!');
