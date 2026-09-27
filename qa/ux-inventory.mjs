// UX IA inventory: node qa/ux-inventory.mjs  -> qa/shots/ux/inventory.json + first-screen shots
import { chromium } from 'playwright';
import fs from 'fs';
const pages = ['/', '/private-groups', '/corporate', '/experiences/full-day-retreat', '/experiences', '/experiences/sauna', '/places', '/places/naiko-encounter-bay', '/retreats', '/food', '/philosophy', '/philosophy/nutrition', '/fleurieu-peninsula-retreats', '/journal', '/journal/mediterranean-gnocchi', '/gallery', '/our-story', '/team', '/rising-tides-collective', '/app', '/faqs', '/gift-cards', '/waitlist', '/enquire'];
const b = await chromium.launch();
const out = {};
for (const w of [1440, 390]) {
  const p = await b.newPage({ viewport: { width: w, height: w < 800 ? 844 : 900 } });
  for (const path of pages) {
    const r = await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.documentElement.setAttribute('data-media-notes', 'off'));
    await p.waitForTimeout(500);
    const name = path === '/' ? 'home' : path.slice(1).replace(/\//g, '_');
    await p.screenshot({ path: `qa/shots/ux/${name}-${w}.png` });
    const info = await p.evaluate((vh) => {
      const vis = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
      const txt = (el) => (el.innerText || '').replace(/\s+/g, ' ').trim();
      const main = document.querySelector('main') || document.body;
      const h1 = [...document.querySelectorAll('h1')].map(txt);
      const h2 = [...main.querySelectorAll('h2')].filter(vis).map(txt);
      const sections = main.querySelectorAll(':scope > section, :scope > * > section, :scope > div > section').length;
      const topSections = [...main.children].filter(vis).length;
      const ctas = [...main.querySelectorAll('a')].filter(vis).filter(a => /btn|cta|button|link--arrow|more/i.test(a.className)).map(a => txt(a) + ' -> ' + a.getAttribute('href'));
      const plan = [...document.querySelectorAll('a')].filter(vis).filter(a => /plan your day/i.test(txt(a))).length;
      // first screen text
      const firstScreen = [...main.querySelectorAll('h1,h2,h3,p,a,span.eyebrow,[class*=eyebrow],[class*=kicker]')].filter(el => { const r = el.getBoundingClientRect(); return vis(el) && r.top < vh && r.bottom > 0; }).map(txt).filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).slice(0, 15);
      const header = [...document.querySelectorAll('header a, header button')].filter(vis).map(a => txt(a) || a.getAttribute('aria-label'));
      const emptySlots = [...main.querySelectorAll('[data-media-empty], .media--empty, [data-empty]')].length;
      return { title: document.title, h1, h2, sections, topSections, ctas, plan, firstScreen, header, words: txt(main).split(' ').length, height: document.documentElement.scrollHeight, emptySlots };
    }, w < 800 ? 844 : 900);
    info.status = r.status();
    out[`${path}@${w}`] = info;
  }
  await p.close();
}
fs.writeFileSync('qa/shots/ux/inventory.json', JSON.stringify(out, null, 1));
await b.close();
