import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace this with your deployed site URL.  It is used when generating
  // canonical links, sitemaps and the RSS feed.
  site: 'https://bgrk005.github.io/servicenow-blog/',
  // When deploying to GitHub Pages under a project sub-path you must also
  // configure the base so assets and links resolve correctly.
  base: '/servicenow-blog',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
