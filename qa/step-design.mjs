// Usage: node qa/step-design.mjs <outdir> <width> <path...>
// Viewport captures stepped down the page (notes off), then a contact sheet per page via qa/sheet.py.
import { chromium } from 'playwright';
import { execSync } from 'node:child_process';
const [,, outdir, wStr, ...paths] = process.argv;
const w = +wStr, h = w < 800 ? 844 : 900;
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: w, height: h } });
const p = await ctx.newPage();
for (const path of paths) {
  const base = (path === '/' ? 'home' : path.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '_')) + '-' + w;
  for (let t = 0; t < 3; t++) { try {
    await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle', timeout: 60000 });
    await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off')); break;
  } catch (e) { await p.waitForTimeout(1500); } }
  const total = await p.evaluate(() => document.documentElement.scrollHeight);
  const sw = await p.evaluate(() => document.documentElement.scrollWidth);
  const files = [];
  let i = 0;
  for (let y = 0; y < total; y += Math.round(h * 0.85)) {
    try { await p.evaluate((yy) => { document.documentElement.setAttribute('data-media-notes', 'off'); window.scrollTo(0, yy); }, y); } catch (e) { await p.waitForTimeout(1500); }
    await p.waitForTimeout(700);
    const f = `${outdir}/${base}-s${String(i).padStart(2, '0')}.png`;
    await p.screenshot({ path: f });
    files.push(f); i++;
    if (i > 40) break;
  }
  execSync(`python3 qa/design-sheet.py ${outdir}/${base}-sheet.jpg ${w < 800 ? 6 : 4} ${files.join(' ')}`);
  if (!process.env.KEEP) execSync(`rm ${files.join(' ')}`);
  console.log(base, 'steps', i, 'height', total, sw > w ? 'OVERFLOW ' + sw : 'no-overflow');
}
await b.close();
