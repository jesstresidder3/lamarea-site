// L4 audit: console errors, sideways scroll, empty media frames, testimonial position. node qa/zz-l4g-audit.mjs <width> <path...>
import { chromium } from 'playwright';
const [,, w, ...paths] = process.argv;
const b = await chromium.launch();
for (const path of paths) {
  const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 } });
  const errs = [];
  p.on('pageerror', e => errs.push(e.message.slice(0,120)));
  p.on('console', m => { if (m.type() === 'error') errs.push(m.text().slice(0,120)); });
  const res = await p.goto('http://localhost:4322'+path, { waitUntil: 'load' });
  await p.waitForTimeout(1500);
  const r = await p.evaluate(() => {
    const H = document.documentElement.scrollHeight;
    const media = [...document.querySelectorAll('main .media')];
    const empty = media.filter(m => !m.classList.contains('media--real')).map(m => { const r = m.getBoundingClientRect(); return `${m.className.replace('media ','').slice(0,40)}@${Math.round(r.top+scrollY)} ${Math.round(r.width)}x${Math.round(r.height)}`; }).filter(s => !/ 0x|x0$/.test(s));
    const broken = [...document.querySelectorAll('main img')].filter(i => i.complete && i.naturalWidth === 0 && i.getAttribute('src')).map(i => i.getAttribute('src'));
    const quotes = [...document.querySelectorAll('main [class*="testimon"], main [class*="guest"], main [class*="gw__"], main [class*="review"]')].slice(0,1).map(e => Math.round((e.getBoundingClientRect().top+scrollY)/H*100)+'%');
    return { H, ox: document.documentElement.scrollWidth - innerWidth, empty, broken, quotes, h1: document.querySelectorAll('h1').length };
  });
  console.log(path, res.status(), JSON.stringify(r), errs.length ? 'ERRS ' + JSON.stringify(errs) : '');
  await p.close();
}
await b.close();
