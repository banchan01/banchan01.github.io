import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://banchan.io',
  base: '/',
  integrations: [vue(), tailwind()],
});