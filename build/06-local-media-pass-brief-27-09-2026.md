# La maréa local media pass, shared agent brief

Date 27-09-2026. Every agent in this pass reads this file first.

## What happened before

A cloud session built the full Astro 5 site (61 pages) with no access to Belle's photos, video or font files. Every photo and video frame is a placeholder slot that names the asset that belongs there. Read `site/README.md` and `build/reviews/final-signoff.md` for the state it left.

Jess now has Belle's real media and brand files locally. This pass puts them in, makes the site look like Belle's brand at its most beautiful, and runs specialist reviews over the finished pages.

## Where things are

- Project root: `/Users/jesstresidder/dev/lamarea-site/` (a local git repo. Commit your work with a clear message when you finish. Never push, there is no remote).
- Site: `site/` (Astro 5). The dev server is already running at http://localhost:4321 with hot reload. Do not start or stop it.
- Build check: `cd site && npx astro build --outDir /tmp/lm-dist-<yourname>` must exit 0 before you finish.
- Screenshots: `node qa/shot.mjs <path> <width> <out.png> [--full] [--notes-off]` run from the project root (Playwright). Save them under `qa/shots/<your-agent-name>/` and look at them with the Read tool. Use `--notes-off` to see the site as a visitor sees it.
- Belle's own words: `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt` is the verbatim transcript and the highest authority. Also `_context/belle-brain-dump-14-09-2026.md` and `_context/requirements-register.md`.
- Brand: `_context/la-marea-design-style-guide.pdf` is the Ponder Designs style guide. `media-pool/brand/` holds the logo files, the HV Muse font files in `fonts/`, pillar icons in sage and sand, Instagram highlight covers, six infographics and `moodboard-small.jpg`.
- Belle's photos: `media-pool/full/` has 71 web-ready JPGs at 2400px on the long edge, and `media-pool/thumb/` has 640px copies (view these first to save effort). `media-pool/catalogue.tsv` maps each file to the folder Belle sorted it into and its original filename. Her folders are Home page, Retreats events and bookings, Our partners, Lifestyle wellness blogs and recipes, and The science behind la maréa. Her folder names tell you where she wants each photo, so treat them as a strong hint.
- Belle's video: `media-pool/video/belle-229a8133.mp4` is 1920x1080 and 10 seconds long. It is a slow push towards a steaming freestanding bath beside floor-to-ceiling windows over the sea at Naiko, with candles and a tea tray. It has no audio. There is also a 9:16 phone crop `belle-229a8133-portrait.mp4` and still frames `frame-*.jpg`.
- Media slots: `site/src/data/media/slots-*.ts` hold 191 slots, typed in `site/src/data/media-types.ts`. Setting `src` replaces the placeholder automatically. Video slots also take `poster`, and any slot can take `srcMobile` for a phone crop.

## Belle's direction (verify against the transcript)

She asked for the site to feel "light and bright" and summery, with sand as the dominant background and sage for wording. She loves video and imagery that moves as you scroll. The brand is luxury coastal wellness on the Fleurieu Peninsula, calm and never dark. Every photo should read with lifted shadows and warm white balance, with the water kept green and turquoise and no dark vignette.

## House rules for anything written

Australian English. No em dashes or en dashes anywhere. No all caps and no `text-transform: uppercase`. Sentence case. Belle's verbatim copy stays verbatim. Never invent facts, prices, names, testimonials or claims. Anything uncertain goes into `build/questions-for-belle-26-09-2026.md` rather than onto the page.

## Coordination

Several agents work at the same time. Stay inside the files your brief names. If you need a change in a file another agent owns, write it to `build/notes/requests.md` with your agent name instead of editing it. Log every change you make in `build/notes/shared-edits.md`, one line per change with your agent name, the file and the reason.
