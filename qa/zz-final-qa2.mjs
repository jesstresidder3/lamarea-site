import { chromium } from 'playwright';
import fs from 'fs';
const BASE = 'http://localhost:4322';
const b = await chromium.launch();
// 1. crawl
const seen = new Set(process.argv.slice(2)); const queue = [];
{ const p = await b.newPage();
  while (queue.length) { const u = queue.shift();
    try { await p.goto(BASE + u, { waitUntil: 'domcontentloaded' }); } catch { continue; }
    const links = await p.evaluate(() => [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')));
    for (let h of links) { if (!h || !h.startsWith('/') || h.startsWith('//')) continue; h = h.split('#')[0].split('?')[0]; if (!h || /\.(pdf|jpg|png|mp4|svg|xml|txt)$/.test(h) || h.startsWith('/styleguide')) continue; if (!h.endsWith('/')) h += '/'; if (!seen.has(h)) { seen.add(h); queue.push(h); } }
  } await p.close(); }
const paths = [...seen].sort();
fs.writeFileSync('shots/rebuild/final/paths2.txt', paths.join('\n'));
const out = [];
async function check(path, w, rm) {
  const ctx = await b.newContext({ viewport: { width: w, height: w < 800 ? 844 : 900 }, reducedMotion: rm ? 'reduce' : 'no-preference' });
  const p = await ctx.newPage(); const errs = [];
  await p.route(/type=style/, (r) => r.abort());
  p.on('pageerror', (e) => errs.push('pageerror: ' + e.message.slice(0, 160)));
  p.on('console', (m) => { if (m.type() === 'error' && !/type=style|ERR_FAILED|ERR_ABORTED/.test(m.text())) errs.push('console: ' + m.text().slice(0, 160)); });
  p.on('response', (r) => { if (r.status() >= 400 && !/type=style/.test(r.url())) errs.push('http ' + r.status() + ' ' + r.url().replace(BASE, '')); });
  const resp = await p.goto(BASE + path, { waitUntil: 'load' }).catch(e => null);
  await p.waitForTimeout(1500);
  const H = await p.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < H; y += 700) { await p.evaluate((y) => window.__lenis ? window.__lenis.scrollTo(y, { immediate: true }) : scrollTo(0, y), y); await p.waitForTimeout(120); }
  await p.waitForTimeout(1500);
  const r = await p.evaluate((rm) => {
    const de = document.documentElement;
    const res = { ox: de.scrollWidth - de.clientWidth, broken: [], noalt: [], invisible: [], wide: [] };
    for (const img of document.querySelectorAll('img')) {
      if (!img.hasAttribute('alt')) res.noalt.push(img.currentSrc || img.src);
      if (img.complete && img.naturalWidth === 0 && getComputedStyle(img).display !== 'none' && (img.currentSrc || img.src)) res.broken.push((img.currentSrc || img.src).replace(location.origin, ''));
    }
    if (res.ox > 0) { for (const el of document.querySelectorAll('body *')) { const b = el.getBoundingClientRect(); if (b.right > de.clientWidth + 1 && b.width > 0) { const cs = getComputedStyle(el); res.wide.push(el.tagName + '.' + [...el.classList].join('.') + ' r=' + Math.round(b.right)); if (res.wide.length > 6) break; } } }
    if (rm) {
      const main = document.querySelector('main'); if (main) for (const el of main.querySelectorAll('h1,h2,h3,h4,p,li,a,figcaption,img,video,dd,dt,blockquote')) {
        if (!el.getClientRects().length) continue;
        if (el.closest('[aria-hidden="true"],[hidden],[inert]')) continue;
        let o = 1, n = el, vis = true; while (n && n !== document.body) { const cs = getComputedStyle(n); o *= +cs.opacity; if (cs.visibility === 'hidden') vis = false; const cp = cs.clipPath; if (cp && /inset\(100%|inset\(0px 0px 100%|inset\(0px 100%/.test(cp)) vis = false; n = n.parentElement; }
        const txt = (el.textContent || el.getAttribute('alt') || '').trim();
        if ((o < 0.1 || !vis) && (txt || el.tagName === 'IMG' || el.tagName === 'VIDEO')) res.invisible.push(el.tagName + ' "' + txt.slice(0, 40) + '" o=' + o.toFixed(2) + (vis ? '' : ' hidden'));
        if (res.invisible.length > 8) break;
      }
    }
    return res;
  }, rm);
  const line = { path, w, rm, status: resp?.status(), errs: [...new Set(errs)], ...r };
  await ctx.close();
  return line;
}
const jobs = [];
for (const path of paths) { jobs.push([path, 1440, false], [path, 390, false], [path, 390, true], [path, 1440, true]); }
let i = 0;
async function worker() { while (i < jobs.length) { const j = jobs[i++]; try { out.push(await check(...j)); } catch (e) { out.push({ path: j[0], w: j[1], rm: j[2], fail: String(e).slice(0, 200) }); } } }
await Promise.all([worker(), worker(), worker(), worker()]);
fs.writeFileSync('shots/rebuild/final/qa2.json', JSON.stringify(out, null, 1));
for (const l of out) { const bad = l.fail || l.status >= 400 || l.errs?.length || l.ox > 0 || l.broken?.length || l.noalt?.length || l.invisible?.length; if (bad) console.log(JSON.stringify(l)); }
console.log('pages', paths.length, 'checks', out.length);
await b.close();
