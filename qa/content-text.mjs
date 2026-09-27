// Usage: node qa/content-text.mjs <outdir> [paths...]  Visible text, headings and image alts per page with notes off (content reviewer helper)
import { chromium } from 'playwright';
import fs from 'fs';
const [,, outdir, ...paths] = process.argv;
fs.mkdirSync(outdir, { recursive: true });
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
for (const path of paths) {
  await p.goto('http://localhost:4321' + path, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.documentElement.setAttribute('data-media-notes','off'));
  await p.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 900) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 40)); } });
  const data = await p.evaluate(() => {
    const vis = (el) => { const s = getComputedStyle(el); return s.display !== 'none' && s.visibility !== 'hidden' && el.getClientRects().length; };
    const heads = [...document.querySelectorAll('h1,h2,h3,h4')].filter(vis).map(h => h.tagName + ' ' + h.innerText.replace(/\s+/g,' ').trim());
    const imgs = [...document.querySelectorAll('img')].filter(vis).map(i => (i.getAttribute('src')||'').split('/').pop() + ' :: ' + i.alt);
    const vids = [...document.querySelectorAll('video')].map(v => 'VIDEO ' + (v.getAttribute('aria-label')||v.title||'') + ' ' + (v.currentSrc||v.querySelector('source')?.src||'').split('/').pop());
    return { title: document.title, desc: document.querySelector('meta[name=description]')?.content, heads, imgs, vids, text: document.body.innerText };
  });
  const name = path === '/' ? 'home' : path.replace(/^\/|\/$/g,'').replace(/\//g,'__');
  fs.writeFileSync(`${outdir}/${name}.txt`, `TITLE ${data.title}\nDESC ${data.desc}\n\n## HEADINGS\n${data.heads.join('\n')}\n\n## IMAGES\n${data.imgs.join('\n')}\n${data.vids.join('\n')}\n\n## TEXT\n${data.text}\n`);
}
await b.close();
