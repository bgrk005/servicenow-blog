import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace this with your deployed site URL.  It is used when generating
  // canonical links, sitemaps and the RSS feed.
  site: 'https://<your-username>.github.io/<your-repo>',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
