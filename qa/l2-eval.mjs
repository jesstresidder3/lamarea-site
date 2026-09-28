import { chromium } from 'playwright';
const [,, path, w='1440', expr] = process.argv;
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: +w<800?844:900 } });
await p.goto('http://localhost:4322'+path); await p.waitForTimeout(3000);
console.log(JSON.stringify(await p.evaluate(expr)));
await b.close();
