import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://data-recovery-journal.pages.dev',
  integrations: [sitemap()],
});