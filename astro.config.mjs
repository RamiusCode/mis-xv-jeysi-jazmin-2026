// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mis-xv-jeysi-jazmin-2026.vercel.app',
  vite: {
    plugins: [tailwindcss()]
  }
});
