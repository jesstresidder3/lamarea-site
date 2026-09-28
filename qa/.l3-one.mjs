import { chromium } from 'playwright';
const [,, path, out, w='1440', wait='5000'] = process.argv;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 } });
const errs=[]; p.on('pageerror', e=>errs.push(e.message)); p.on('console', m=>{ if(m.type()==='error') errs.push('console: '+m.text()); });
await p.goto('http://localhost:4322'+path, { waitUntil: 'load' }); await p.waitForTimeout(+wait);
await p.screenshot({ path: out }); console.log(JSON.stringify(errs)); await b.close();
