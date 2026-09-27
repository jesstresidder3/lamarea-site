// Usage: node qa/shot.mjs <path> <width> <out.png> [--full] [--notes-off]
import { chromium } from 'playwright';
const [,, path='/', w='1440', out='shot.png', ...flags] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.goto('http://localhost:4399' + path, { waitUntil: 'networkidle' });
if (flags.includes('--notes-off')) await p.evaluate(() => document.documentElement.setAttribute('data-media-notes','off'));
// scroll through to trigger reveals and lazy media
await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, 0); });
await p.waitForTimeout(800);
await p.screenshot({ path: out, fullPage: flags.includes('--full') });
await b.close();
