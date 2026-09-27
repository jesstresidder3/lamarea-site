// Zero horizontal scroll check (register O12, P13).
// Serves dist/ and measures scrollWidth against clientWidth on every built page at ten widths.
// Usage: npm run build && npm run check:scroll
import { createRequire } from 'node:module';
import { readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { spawn } from 'node:child_process';

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); }
catch { ({ chromium } = require('/opt/node22/lib/node_modules/playwright')); }

const WIDTHS = [320, 360, 390, 412, 768, 800, 1024, 1180, 1280, 1440, 1920];
const DIST = new URL('../dist/', import.meta.url).pathname;
const PORT = 4399;

function pages(dir) {
  const out = [];
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) out.push(...pages(p));
    else if (f === 'index.html') out.push('/' + relative(DIST, dir).replace(/\\/g, '/'));
  }
  return out.map((p) => (p.endsWith('/') ? p : p + '/')).map((p) => p.replace('//', '/'));
}

// Detached so the whole process group (npx and the astro child) can be stopped at the end.
const server = spawn('npx', ['astro', 'preview', '--port', String(PORT)], { stdio: 'ignore', detached: true });
const stopServer = () => { try { process.kill(-server.pid, 'SIGTERM'); } catch {} };
process.on('exit', stopServer);
await new Promise((r) => setTimeout(r, 9000));
const browser = await chromium.launch();
const failures = [];
const list = pages(DIST);
for (const w of WIDTHS) {
  const ctx = await browser.newContext({ viewport: { width: w, height: 900 } });
  const page = await ctx.newPage();
  for (const path of list) {
    await page.goto(`http://localhost:${PORT}${path}`, { waitUntil: 'load' });
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 30)); }
      window.scrollTo(0, 0);
    });
    const r = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, cw: document.documentElement.clientWidth }));
    if (r.sw > r.cw) failures.push(`${w}px ${path} scrollWidth ${r.sw} > clientWidth ${r.cw}`);
  }
  await ctx.close();
}
await browser.close();
stopServer();
if (failures.length) { console.log('Horizontal overflow found:\n' + failures.join('\n')); process.exit(1); }
console.log(`No horizontal overflow on ${list.length} pages at ${WIDTHS.length} widths.`);
