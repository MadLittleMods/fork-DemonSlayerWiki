// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://madlittlemods.github.io',
  base: '/fork-DemonSlayerWiki',
  build: {
    // The wiki was authored as flat .html files and links between pages that
    // way throughout (nav links, and ~115 relative links inside page content).
    // 'file' keeps those URLs correct -- `about.astro` serves at `/about.html`
    // rather than Astro's default `/about/`.
    format: 'file',
  },
});
