import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.ondaritual.co.uk',
  output: 'static',
  integrations: [sitemap()],
});