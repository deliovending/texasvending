// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';
import criticalCss from './integrations/critical-css.mjs';

// Paths kept out of the sitemap (matches the path and anything below it)
const SITEMAP_EXCLUDE = ['/thank-you', '/404', '/admin'];

// Service and service-area pages (changefreq monthly, priority 0.8)
const SERVICE_PATHS = ['/our-services', '/alliance-texas-vending-services'];

const matchesPath = (pathname, base) => pathname === base || pathname.startsWith(`${base}/`);

// https://astro.build/config
export default defineConfig({
  site: 'https://texasvending.com',
  output: 'static',
  // Google Fonts are downloaded at build time and served from this site (no third-party requests)
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Raleway',
      cssVariable: '--font-raleway',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Fjalla One',
      cssVariable: '--font-fjalla-one',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Space Mono',
      cssVariable: '--font-space-mono',
      weights: [400, 700],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['monospace'],
    },
  ],
  // Matches Vercel's trailingSlash: true. Old-URL 301 redirects live in vercel.json.
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return !SITEMAP_EXCLUDE.some((base) => matchesPath(pathname, base));
      },
      serialize: (item) => {
        const { pathname } = new URL(item.url);
        if (pathname === '/') {
          item.priority = 1.0;
        } else if (SERVICE_PATHS.some((base) => matchesPath(pathname, base))) {
          item.changefreq = 'monthly';
          item.priority = 0.8;
        } else if (matchesPath(pathname, '/blog')) {
          item.changefreq = 'weekly';
          item.priority = 0.6;
        }
        return item;
      },
    }),
    mdx(),
    // Keep last: rewrites the final HTML of every page
    criticalCss(),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
