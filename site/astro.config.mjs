// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

/*
  Sitemap (register N5, plan/11 search table). Owner of this block: page builder D.
  The sitemap leaves out the dev-only styleguide and every page that renders
  <meta name="robots" content="noindex">, so a page only has to pass `noindex` to <Base> to drop
  out of it (the waitlist, gift cards, guides, thank-you, 404 and any later utility page).
  The check reads the built HTML, so it follows the page, not a list that can go stale.
*/
/** @type {URL | undefined} */
let outDir;
const captureOutDir = {
  name: 'lm-out-dir',
  hooks: {
    /** @param {{ config: { outDir: URL } }} options */
    'astro:config:done': ({ config }) => {
      outDir = config.outDir;
    },
    /*
      With an outDir outside the project, Astro also writes its content layer internals into the
      output root (QA m16). They are build internals, never served, so they are removed here.
      A no-op for the default dist/.
    */
    'astro:build:done': async ({ dir }) => {
      const { rm } = await import('node:fs/promises');
      for (const name of ['collections', 'content-assets.mjs', 'content-modules.mjs']) {
        await rm(new URL(name, dir), { recursive: true, force: true });
      }
    },
  },
};

/** @param {string} page absolute page URL from the sitemap integration */
function isNoindex(page) {
  if (!outDir) return false;
  const path = new URL(page).pathname.replace(/\/?$/, '/');
  try {
    const html = readFileSync(new URL(`.${path}index.html`, outDir), 'utf8');
    return /<meta[^>]+name="robots"[^>]+content="[^"]*noindex/i.test(html);
  } catch {
    return false;
  }
}

// Static output for Cloudflare Pages (plan/10 section 1).
export default defineConfig({
  site: 'https://www.lamarea.com.au',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  integrations: [
    captureOutDir,
    sitemap({
      filter: (page) => !new URL(page).pathname.startsWith('/styleguide') && !isNoindex(page),
    }),
  ],
});
