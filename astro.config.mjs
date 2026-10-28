// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://fernandoarmengol.com',
  output: 'static',
  trailingSlash: 'always',
  integrations: [icon(), sitemap()],
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  // Spanish now lives at the root; keep old /es/ links working.
  redirects: {
    '/es': '/',
    '/es/proyectos/[slug]': '/proyectos/[slug]',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
