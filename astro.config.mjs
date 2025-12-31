// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import yaml from '@rollup/plugin-yaml';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages configuration
  site: 'https://hmhss.github.io', 
  base: '/', 
  
  vite: {
    plugins: [
      tailwindcss(),
      yaml()
    ]
  },

  integrations: [sitemap()]
});
