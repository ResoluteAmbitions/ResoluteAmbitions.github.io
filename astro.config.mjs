import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://resoluteambitions.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
