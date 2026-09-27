// Usage: node qa/design-menu.mjs <width> <out.png>  opens the menu on home and captures it (notes off)
import { chromium } from 'playwright';
const [,, w, out] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: +w < 800 ? 844 : 900 } });
await p.goto((process.env.BASE || 'http://localhost:4321') + '/private-groups', { waitUntil: 'networkidle' });
await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
await p.click('[data-menu-open]');
await p.waitForTimeout(1500);
await p.screenshot({ path: out });
await b.close();
