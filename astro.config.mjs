import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://resoluteambitions.github.io',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
