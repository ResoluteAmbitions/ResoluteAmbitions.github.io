import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://staging.resoluteambitions.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
