import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the final domain once the client registers it.
export default defineConfig({
  site: 'https://gforgefoods.com',
  integrations: [sitemap()],
});
