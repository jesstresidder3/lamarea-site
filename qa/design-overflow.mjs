// Same check as site/scripts/check-overflow.mjs, against an already served build.
// Usage: DIST=/tmp/lm-dist-design BASE=http://localhost:4398 node qa/design-overflow.mjs
import { chromium } from 'playwright';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
const DIST = process.env.DIST, BASE = process.env.BASE;
const WIDTHS = [320, 360, 390, 412, 768, 800, 1024, 1180, 1280, 1440, 1920];
const pages = (dir) => readdirSync(dir).flatMap((f) => { const p = join(dir, f); return statSync(p).isDirectory() ? pages(p) : f === 'index.html' ? ['/' + relative(DIST, dir) + '/'] : []; }).map((p) => p.replace('//', '/'));
const list = pages(DIST).filter((p) => !p.startsWith('/styleguide'));
const b = await chromium.launch(); const fails = [];
for (const w of WIDTHS) {
  const ctx = await b.newContext({ viewport: { width: w, height: 900 } }); const p = await ctx.newPage();
  for (const path of list) {
    await p.goto(BASE + path, { waitUntil: 'load' });
    await p.evaluate(async () => { document.documentElement.setAttribute('data-media-notes', 'off'); for (let y = 0; y < document.body.scrollHeight; y += 700) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); } scrollTo(0, 0); });
    const r = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
    if (r.sw > r.cw) fails.push(`${w}px ${path} ${r.sw} > ${r.cw}`);
  }
  await ctx.close();
}
await b.close();
console.log(fails.length ? 'Overflow:\n' + fails.join('\n') : `No horizontal overflow on ${list.length} pages at ${WIDTHS.length} widths.`);
