import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://banchan01.github.io',
  base: '/',
  integrations: [vue(), tailwind()],
});