// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // `site` and `base` are deliberately not set here. Locally the wiki serves
  // from the root, so `import.meta.env.BASE_URL` is just '/'. CI passes
  // `--site`/`--base` on the build command to publish it under the GitHub
  // Pages project path (https://madlittlemods.github.io/fork-DemonSlayerWiki),
  // where the same `BASE_URL` becomes '/fork-DemonSlayerWiki/' -- slash
  // included, so that `${import.meta.env.BASE_URL}foo.html` joins cleanly in
  // both cases. See .github/workflows/deploy.yaml.

  build: {
    // The wiki was authored as flat .html files and links between pages that
    // way throughout (nav links, and ~115 relative links inside page content).
    // 'file' keeps those URLs correct -- `about.astro` serves at `/about.html`
    // rather than Astro's default `/about/`.
    format: 'file',
  },
});
