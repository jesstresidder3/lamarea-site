import { chromium } from 'playwright';
const b = await chromium.launch(); const ctx = await b.newContext({ viewport:{width:1440,height:900}, reducedMotion:'reduce' });
const p = await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message));
for (const path of ['/experiences/yoga/','/food/','/experiences/','/places/naiko-deep-creek/','/fleurieu-peninsula-retreats/']) {
  await p.goto('http://localhost:4322'+path,{waitUntil:'load'}); await p.waitForTimeout(800);
  const r = await p.evaluate(()=>{ const q=s=>[...document.querySelectorAll(s)].map(e=>getComputedStyle(e).opacity); return {fs:q('.fs__item').join(','), mc:q('.mc__plate').join(','), ms:q('.ms__item').join(','), po:q('.pp__frame--a, .po__frame').map(x=>x).join(',')}; });
  console.log(path, JSON.stringify(r));
}
console.log(errs); await b.close();
