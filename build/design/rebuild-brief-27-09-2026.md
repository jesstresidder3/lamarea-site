---
title: Whole-site rebuild, brief for every agent
date: 27-09-2026
status: Internal. Read in full before touching the site. Not for Belle.
---

# Whole-site rebuild, 27-09-2026

## What Jess asked for, summarised faithfully

The site "feels like a website template. I want it to feel like a brand." Rebuild the whole site so it is much better: cooler, more wow factor, more helpful for the audience to understand what La maréa is, more luxury, elegant and unique. It should feel like a high-end travel publication plus a luxury hospitality brand plus an editorial magazine, told cinematically. Photography does the emotional work: big imagery, cinematic crops, layered typography that interacts with the photographs, deliberate whitespace, subtle movement, sections that break the grid and overlap, transitions between sections that feel intentional. Expensive without gold, heavy gradients or luxury clichés. Avoid the pattern "hero, paragraph, three cards, testimonials, CTA". Avoid huge generic SaaS headlines. The scroll is a story unfolding.

The home opening is already rebuilt (`src/components/hero/Opening.astro`, `src/scripts/opening.ts`): a full-bleed summer aerial that parts into two worlds, private groups (arch) and corporate teams (frame). Keep it and match the rest of the site to it. Every inner page should open with the same confidence (full-bleed or near full-bleed photograph, type layered over it, a tide-like reveal), never a small image beside a block of text.

## What Belle asked for (never contradict)

Read `build/reviews/belle-vision-brief-27-09-2026.md` first. The short version: light and bright, soft sand as the base, sage for words, nothing dark or Balinese. Small elegant type, lots of white space, big imagery first, slow motion with nothing bouncy. Mediterranean summer. The Tailor for motion (video zooms on scroll, things sliding in from the right, sliders), Aman for type and calm. The sale is an 8 hour immersive retreat for private groups and corporate teams, ending in a discovery call with Belle. Price sits behind the call.

Primary sources, in order: `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt`, `_context/project-brief-shared.md`, `research/02-correspondence-record.md`, `build/reviews/belle-vision-brief-27-09-2026.md`, `build/questions-for-belle-26-09-2026.md`.


## Media found on 28-09-2026 (read before the media section below)

Belle's drone footage is in her Google Drive folder "WEBSITE" (ID 1OehLPGl5rojCdvqkii-NqNVmXdF3JAFG, reachable through the Google Workspace tools as jesstresidder3@gmail.com, subfolders Home page, Our partners, Contact, Lifestyle wellness blogs & recipes, The science behind la maréa, Retreats events & bookings, Our Story). The source clips DJI_0604.MP4 (112 seconds, 4K: blue sky over golden cliffs, then a long top-down pass over emerald water to a rock edge with boats) and DJI_20251109100906_0030_D.MP4 (45 seconds, 4K 50fps: a slow pan across Naiko Deep Creek above the turquoise cove) are in `media-pool/incoming/`. DJI_0605.MP4 (a pan in on a swimmer) is downloading to ~/Downloads. Already cut for the web in `site/public/media/`: `hero-emerald-shallows-drone.mp4` (+ `-portrait.mp4`, posters), now playing in the home opening, and `naiko-deep-creek-drone-pan.mp4` (+ poster), not yet used anywhere, meant for the Naiko Deep Creek place page and the Places to Pause moments. Other good passages of DJI_0604 worth cutting: seconds 0 to 25 (cliffs, white beach, boats, blue sky) and 54 to 62 (the coastline receding). The Dropbox folder "Belle" from Georgia Evans (23 GB, probably the professional shoot) cannot be opened because Jess's free Dropbox has 2 GB; Jess must ask for a view-only link or upgrade. Never touch it.

## Hard rules

1. Copy: Belle's words stay verbatim. New lines are allowed only where a section needs one, kept short, and marked with `data-draft` (or the component's draft flag). No em dashes anywhere. Australian English. Follow the banned-word list and banned structures in the workspace CLAUDE.md. Never invent facts, prices, capacities, names or claims. The "South Australian first" claim stays dropped.
2. Italic is for place names only in headings (build spec section 12, `emphasis()` in `src/components/base/text.ts`), plus Cormorant italic for captions and quotes.
3. Palette and type are fixed: `src/styles/tokens.css` (Sand, Salt, Sage, HV Muse display, Jost body, Cormorant italic). No new colours beyond tints of these, no dark sections, no all-caps or `text-transform: uppercase`, no gold. Type on photographs is allowed now (Jess's direction) with soft local shading only where the words sit, salt ink on image, and it must pass contrast.
4. Motion: two easings in tokens (`--ease-tide`, `--ease-settle`), nothing bounces or overshoots, `prefers-reduced-motion` always gets a complete static version. Use GSAP ScrollTrigger and Lenis as the existing code does (`src/scripts/motion.ts`). One authored motion idea per section, not the same fade on everything.
5. Phones matter as much as desktop. Check 390 and 1440 wide. No horizontal scroll.
6. Accessibility: real headings in order, alt text on every image, links name their destination, keyboard focus visible.
7. Never run `astro build` (it wipes `site/.astro` and breaks the dev server; if it happens run `./node_modules/.bin/astro sync` in `site/`). Never commit. Never send anything to Belle or anyone.
8. If a hook blocks a write (voice gate, impeccable gate), do what it asks (read the named files or invoke the named skill) and retry. Do not bypass it.

## Lanes: who owns which files

Agents run in parallel in one working tree. Edit only files your lane owns. If you need a change to a file another lane owns, append a short request to `build/notes/requests.md` with your lane name instead.

| Lane | Pages | Owns |
|---|---|---|
| L1 Home and system | `/` and every shared piece | `src/pages/index.astro`, `src/styles/*`, `src/layouts/*`, `src/components/layout/*`, `src/components/base/*`, `src/components/media/*`, `src/components/hero/*`, `src/components/home/*` (create new home sections here), `src/components/day/*`, `src/components/slider/*`, `src/components/testimonials/*`, `src/components/experiences/ExperienceGallery.astro`, `src/components/venues/PlacesArches.astro`, `src/scripts/*`, `src/data/media/slots-foundation.ts`, `src/data/media/slots-systems.ts`, `src/content/testimonials/*` |
| L2 Buyers' path | `/private-groups`, `/corporate`, `/retreats`, `/experiences/full-day-retreat`, `/enquire`, `/enquire/thank-you`, `/gift-cards`, `/waitlist`, `/404` | those page files, `src/pages/_parts/*`, `src/components/pages/a/*`, `src/data/media/slots-page-a.ts` (leave the four `home-world-*` slots as they are), `src/content/formats/*` |
| L3 Experiences, places, food | `/experiences`, `/experiences/[slug]`, `/places`, `/places/[slug]`, `/food`, `/fleurieu-peninsula-retreats` | those page files, `src/components/experiences/PaneSlider.astro`, `src/components/venues/*` except PlacesArches, `src/components/food/*`, `src/components/map/*`, `src/components/pages/c/*`, `src/data/media/slots-page-c.ts`, `src/content/experiences/*`, `src/content/venues/*` |
| L4 Story and proof | `/our-story`, `/philosophy`, `/philosophy/[pillar]`, `/team`, `/team/[slug]`, `/journal`, `/journal/[slug]`, `/guides/[slug]`, `/faqs`, `/rising-tides-collective`, `/app`, `/gallery`, `/privacy-policy`, `/terms` | those page files, `src/components/pillars/*`, `src/components/team/*`, `src/components/journal/*`, `src/components/pages/b/*`, `src/components/pages/d/*`, `src/data/media/slots-page-b.ts`, `src/data/media/slots-page-d.ts`, `src/content/people/*`, `src/content/journal/*`, `src/content/faqs/*` |

A lane that wants a page-level component in the new visual language (for example a full-bleed inner-page opener) builds it inside its own folder. L1 may later lift the best one into `src/components/base/` for everyone.

## Media

Photos live in `site/public/media/` with width variants made by `node site/scripts/media-variants.mjs` (check its header for usage). The full pool of Belle's photos is `media-pool/full/` (catalogue in `media-pool/catalogue.tsv` and `catalogue-described.md`), video in `media-pool/video/`, her original folder `~/Downloads/lamarea-website 2/`. Use the strongest, brightest, most atmospheric image for each moment and crop it cinematically. If a slot has no strong photo, choose a better treatment (type-led, a detail crop) rather than forcing a weak one. `build/media-sweep-27-09-2026.md` lists what the media sweep found.

## Tools

Dev server: http://localhost:4322 (already running, hot reloads). Do not start another. Screens: `MAX=<px> node qa/zz-steps-tmp.mjs <path> <out-prefix> <width> <step-px>` takes a screenshot every step of scroll (Lenis-aware, uses port 4322 unless `BASE` is set). `BASE=http://localhost:4322 node qa/shot-full-many.mjs <width> <outdir> <path...>` takes full-page shots (pinned sections look empty in these). Put shots in `qa/shots/rebuild/`. Look at your own screenshots before you finish.
