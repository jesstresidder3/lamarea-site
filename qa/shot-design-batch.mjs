// Usage: node qa/shot-design-batch.mjs <outdir> <widths csv> <path1> [path2...]
// Same capture as qa/shot.mjs (notes off, full page) with one browser for many shots.
import { chromium } from 'playwright';
const [,, outdir, widths, ...paths] = process.argv;
const b = await chromium.launch();
for (const w of widths.split(',').map(Number)) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 800 ? 844 : 900 } });
  const p = await ctx.newPage();
  for (const path of paths) {
    const name = (path === '/' ? 'home' : path.replace(/^\//, '').replace(/\/$/, '').replace(/\//g, '_')) + '-' + w + '.png';
    try {
      await p.goto((process.env.BASE || 'http://localhost:4321') + path, { waitUntil: 'networkidle', timeout: 60000 });
      await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
      await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
      await p.waitForTimeout(800);
      const sw = await p.evaluate(() => document.documentElement.scrollWidth);
      await p.screenshot({ path: `${outdir}/${name}`, fullPage: true });
      console.log(name, sw > w ? `OVERFLOW ${sw}` : 'ok');
    } catch (e) { console.log(name, 'ERR', e.message.slice(0, 80)); }
  }
  await ctx.close();
}
await b.close();
