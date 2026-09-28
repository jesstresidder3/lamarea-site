import { chromium } from 'playwright';
const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
p.on('response', (r) => { if (r.status() >= 400) console.log(r.status(), r.url()); });
await p.goto('http://localhost:4322/nope-404'); await p.waitForTimeout(3000); await b.close();
