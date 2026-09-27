// node step.mjs <path> <width> <prefix> <nsteps>  (notes off, stepped viewport shots)
import { chromium } from 'playwright';
const [,, path='/', w='1440', prefix='x', n='12'] = process.argv;
const b = await chromium.launch();
const h = +w < 800 ? 844 : 900;
const p = await b.newPage({ viewport: { width: +w, height: h } });
await p.goto('http://localhost:4321' + path, { waitUntil: 'load', timeout: 120000 });
await p.evaluate(() => document.documentElement.setAttribute('data-media-notes','off'));
const total = await p.evaluate(() => document.body.scrollHeight);
const steps = Math.min(+n, Math.ceil(total / h));
const stride = Math.max(h, Math.floor((total - h) / Math.max(1, steps - 1)));
for (let i = 0; i < steps; i++) {
  const y = Math.min(i * stride, total - h);
  await p.evaluate(async (y) => { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 900)); }, y);
  await p.screenshot({ path: `${prefix}-${String(i).padStart(2,'0')}.png` });
}
console.log('height', total, 'steps', steps);
await b.close();
