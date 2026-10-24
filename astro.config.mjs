import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://staging.resoluteambitions.com',
  trailingSlash: 'never',
  redirects: {
    '/about': '/our-story',
    '/programs': '/how-it-works',
    '/donate': '/give',
  },
  build: {
    format: 'file',
  },
});
