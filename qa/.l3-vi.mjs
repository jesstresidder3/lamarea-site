import { chromium } from 'playwright';
const b = await chromium.launch();
for (const w of [1440,390]) { const p = await b.newPage({ viewport:{width:w,height:900} });
for (const path of ['/private-groups/','/corporate/','/places/','/experiences/full-day-retreat/']) {
  await p.goto('http://localhost:4322'+path,{waitUntil:'load'});
  const r = await p.evaluate(async()=>{ const els=[...document.querySelectorAll('.vcard__frame')]; for (const e of els){ e.scrollIntoView(); await new Promise(r=>setTimeout(r,400)); } return els.map(e=>{ const pic=e.querySelector('picture,img'); return Math.round(e.getBoundingClientRect().height)+'/'+(pic?Math.round(pic.getBoundingClientRect().height):'none');}); });
  console.log(w, path, r.join(' '));
} await p.close(); }
await b.close();
