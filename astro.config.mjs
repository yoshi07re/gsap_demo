// eslint-disable-next-line n/file-extension-in-import
import { defineConfig } from 'astro/config';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  site: "https://yoshi07re.github.io/",
  base: '/gsap_demo',
});
