// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shreyas.dev',
  output: 'static',
  vite: {
    // Astro exposes these CommonJS accessibility maps internally. Keeping them
    // out of Vite's dependency optimizer avoids esbuild's Windows path resolver
    // misreading their extensionless relative requires.
    optimizeDeps: {
      exclude: ['aria-query', 'axobject-query'],
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    sitemap(),
  ],
});
