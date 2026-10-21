// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// Paths kept out of the sitemap (matches the path and anything below it)
const SITEMAP_EXCLUDE = ['/thank-you', '/404', '/admin'];

// Service and service-area pages (changefreq monthly, priority 0.8)
const SERVICE_PATHS = ['/our-services', '/alliance-texas-vending-services'];

const matchesPath = (pathname, base) => pathname === base || pathname.startsWith(`${base}/`);

// https://astro.build/config
export default defineConfig({
  site: 'https://texasvending.com',
  output: 'static',
  // Old live-site URLs that moved
  redirects: {
    '/about-us/cities/alliance': '/alliance-texas-vending-services/',
  },
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
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});
