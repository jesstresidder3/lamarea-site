import { chromium } from 'playwright';
const [,, path = '/', w = '1440', sel = 'main > *'] = process.argv;
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: +w, height: 900 } });
await p.route(/type=style/, (r) => r.abort());
await p.goto('http://localhost:4322' + path, { waitUntil: 'load' });
await p.waitForTimeout(2500);
const r = await p.evaluate((sel) => Array.from(document.querySelectorAll(sel)).map((e) => {
  const b = e.getBoundingClientRect();
  return `${e.tagName.toLowerCase()}.${(e.className || '').toString().split(' ')[0]} top=${Math.round(b.top + scrollY)} h=${Math.round(b.height)} disp=${getComputedStyle(e).display} vis=${getComputedStyle(e).visibility} op=${getComputedStyle(e).opacity}`;
}), sel);
console.log(r.join('\n'));
await b.close();
