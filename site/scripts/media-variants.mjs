// Media reviewer, 27-09-2026. Recompresses every photo in public/media and writes responsive width
// variants (name-w640.jpg, -w1024, -w1600) plus src/data/media/image-sizes.json, which Media.astro
// reads for srcset, width and height. Run from site/: node scripts/media-variants.mjs
// Safe to re-run: variants are rebuilt from the main file, and the main file is only replaced when
// the new encode saves at least 10 per cent.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const dir = 'public/media';
const WIDTHS = [640, 1024, 1600];
const MAX = 2000;
const Q = 78;
const out = {};
const files = fs.readdirSync(dir).filter((f) => f.endsWith('.jpg') && !/-w\d+\.jpg$/.test(f)).sort();
for (const f of files) {
  const p = path.join(dir, f);
  const input = fs.readFileSync(p);
  const meta = await sharp(input).metadata();
  const long = Math.max(meta.width, meta.height);
  const resized = long > MAX ? sharp(input).resize({ width: meta.width >= meta.height ? MAX : undefined, height: meta.height > meta.width ? MAX : undefined }) : sharp(input);
  const main = await resized.jpeg({ quality: Q, mozjpeg: true, progressive: true }).toBuffer();
  // Replace only on a real saving, so re-runs do not compound JPEG generation loss.
  if (main.length < input.length * 0.9) fs.writeFileSync(p, main);
  const m2 = await sharp(p).metadata();
  const variants = [];
  for (const w of WIDTHS) {
    if (w >= m2.width - 80) continue;
    const buf = await sharp(p).resize({ width: w }).jpeg({ quality: Q, mozjpeg: true, progressive: true }).toBuffer();
    fs.writeFileSync(path.join(dir, f.replace(/\.jpg$/, `-w${w}.jpg`)), buf);
    variants.push(w);
  }
  out[`/media/${f}`] = { w: m2.width, h: m2.height, variants };
  console.log(f, `${Math.round(input.length / 1024)}K -> ${Math.round(fs.statSync(p).size / 1024)}K`, m2.width, 'x', m2.height, variants.join(','));
}
fs.writeFileSync('src/data/media/image-sizes.json', JSON.stringify(out, null, 1) + '\n');
