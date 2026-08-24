// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  site: 'https://sylvie-sylv-sylv.github.io',
  base: '/Sidetrek',

  integrations: [
    mdx(),
    react(),
    UnoCSS(),
  ],
});