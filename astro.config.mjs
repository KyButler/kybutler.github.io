// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://ky.butlerhq.com',
  vite: {
    plugins: [tailwindcss()]
  },
});