import { defineConfig } from 'vite';

export default defineConfig({
  // This site is served from the root of the custom domain lucasrenan.com
  // (see public/CNAME), so the base path is '/'.
  //
  // If you ever drop the custom domain and serve from
  // https://lucasrenan.github.io/lucasrenan/, change this to '/lucasrenan/'.
  base: '/',
});
