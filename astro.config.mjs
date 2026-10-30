import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jciyennega.org',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://jciyennega.org/' || item.url === 'https://jciyennega.org/en/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } else if (
          item.url.includes('/a-propos') ||
          item.url.includes('/about') ||
          item.url.includes('/nos-axes') ||
          item.url.includes('/programs')
        ) {
          item.priority = 0.9;
        } else if (item.url.includes('/devenir-amazone') || item.url.includes('/join')) {
          item.priority = 0.8;
        }
        return item;
      },
    }),
  ],
});