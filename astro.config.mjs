// astro.config.mjs — dancewithsnn.com public website
// Static site (plain HTML/CSS/JS files) — built here or by GitHub Actions and
// uploaded to Hostinger. No server, no logins, no student data on this site.
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

const shim = (name) => fileURLToPath(new URL(`./src/shims/${name}`, import.meta.url));

export default defineConfig({
  site: 'https://dancewithsnn.com',
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'directory' },      // /about → about/index.html (matches .htaccess)
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        // The section components were written for a single-page React app.
        // These tiny stand-ins let them run unchanged on a multi-page site.
        'react-router-dom':  shim('react-router-dom.jsx'),
        'react-helmet-async': shim('react-helmet-async.jsx'),
      },
    },
    ssr: {
      // MUI / emotion must be bundled for server rendering
      noExternal: ['@mui/material', '@mui/system', '@mui/styled-engine', '@emotion/react', '@emotion/styled'],
    },
  },
});
