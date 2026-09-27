---
title: Page builder common instructions
date: 24-09-2026
---

# Page builder common instructions

Every page builder reads this file after `build/00-orchestration-brief.md`.

## Read, in this order

1. `build/00-orchestration-brief.md` (rules).
2. `build/04-build-spec.md`, especially sections 7, 10 and **12** (section 12 overrides everything earlier and overrides plan/11).
3. `build/01-creative-brief-transcript-first.md` sections A, B, D, E, F, G and the H checklist items for your pages.
4. `build/reviews/cd-review-01-prebuild.md` (the creative director's reading of what Belle wants, especially D and E).
5. The transcript, `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt`, in full. Belle's words are the specification.
6. `build/03-content-harvest.md` and `site/src/content/**` (the real copy, already in content collections) and `site/src/data/settings.ts`, `site/src/data/day.ts`.
7. `plan/11-master-site-plan.md` Part 4 for your pages' section tables (then apply section 12 overrides).
8. The component library: read the source of `site/src/components/**` and look at `/styleguide/` and `/styleguide/systems/` in the browser. Read `build/notes/requests.md` for component notes. Use the library; do not rebuild components that exist.

## How pages are built

- `<Base title description headerTone jsonLd noindex>` from `src/layouts/Base.astro`. A page that opens on media uses `<Hero/>` or `<MediaBand hero/>` with `headerTone="over-media"`, because the header follows `[data-hero]`. Otherwise `headerTone="solid"`.
- Place names in heading props wrap in `*asterisks*` and render as the `.place` italic. Italic nowhere else.
- Every link or button that opens the funnel reads "Plan your day" (`cta.planFullDay` or `CtaBand params={{...}}`). "Book a discovery call" only where Belle's calendar opens.
- Content helpers in `src/lib/content.ts` (for example `getVenues`, `getExperiences('guided' | 'self_led')`, `getPillars`, `pillarHref`, `getIntentions`, `teamTabs`, `getTestimonials({ format })`, `getJournal`, `getMealMoments`, `signatureItems`). Full-bleed sliders sit straight inside a section, not inside `.wrap`.
- Every image or video goes through `<Media slot="..." />`. Add your slots to your own file in `src/data/media/` with a real `suggested` asset (plan/11 Part 4 asset columns and the harvest name real files), an alt, a tone and the grading note ("Grade: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.").
- Page-specific components go in `src/components/pages/<your letter>/`.
- Titles and meta descriptions: plain, naming the offer and the place, under 60 and 155 characters. One H1 per page. JSON-LD per plan/11 Part 4 search table where it applies (use the helpers in `components/base/schema.ts`).

## Copy

Belle's verbatim copy wherever it exists (the collections and the harvest carry it with sources). Where you must draft, keep it to captions of 20 to 45 words, in her vocabulary (creative brief section G), mark it with `data-draft` so Jess can find it, and never invent facts, prices, durations, names, quotes or outcomes. No banned words or structures (orchestration brief section 4). Australian English. No em or en dashes anywhere, including code comments.

## Shared files

You own only your pages, your `src/components/pages/<letter>/` folder and your media slots file. Shared components, `settings.ts`, `day.ts`, `base.css`, `tokens.css` and the collections belong to others. If a shared component has a bug that blocks you, make the smallest possible fix, re-read the file first because another builder may have just changed it, and log the change in `build/notes/shared-edits.md` (file, what, why). Never restyle a shared component for one page; wrap it or pass props instead. Content changes to collections go in `build/notes/requests.md` for the orchestrator.

## Quality gates before you report done

1. `cd site && npx astro build` passes with no new warnings.
2. `npm run check:scroll` passes (zero horizontal overflow, 11 widths).
3. Screenshots of every page you built at 1440x900 and 390x844, full page, looked at with the Read tool, and fixed where anything looks unfinished, crowded, generic, too dark, too wordy or unlike Aman and The Tailor in restraint. Use your own preview port and kill your server when done.
4. Grep your files: no em dash, no en dash, no `text-transform: uppercase`, no banned words in drafted copy, Empower present wherever Belle's eight words appear.
5. Keyboard: tab through each page; focus is visible and order makes sense.
6. Every animated thing respects `prefers-reduced-motion`.

Do not commit to git. Report back in under 300 words: pages built, how verified, content gaps and anything the creative director should look at first.
