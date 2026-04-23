import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://mgsalvage.com',
  integrations: [
    tailwind({
      configFile: './tailwind.config.mjs'
    }),
    sitemap({
      filter: (page) => !page.includes('/admin') && !page.includes('/api/'),
      changefreq: 'weekly',
      priority: 0.7
    })
  ],
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: true
    }
  }
});
