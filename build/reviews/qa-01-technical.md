# Technical QA 01, built site

Date: 26-09-2026. Build: `npx astro build --outDir /tmp/qa-dist` from `site/`, 61 pages, zero build warnings. Served with `http-server -s` on port 4470 (no compression) and tested in Playwright Chromium, plus Lighthouse 13.5 on five pages. Photos and video are placeholders by design, so every finding about media is about the placeholder layer or the text laid over it.

Bottom line: no blockers. Three major defects: keyboard focus hides behind the phone "Plan your day" bar, `/enquire` jumps on load at phone widths (CLS up to 0.49), and white text over the light placeholders fails contrast on several hero headings. Everything else is minor. Zero horizontal scroll across 671 page and width combinations, zero broken links, zero console errors on load, zero em or en dashes, zero uppercase transforms.

## Summary

| Area | Result | Defects |
|---|---|---|
| 1. Overflow and cropped content, 11 widths | Pass on horizontal scroll (0 of 671). Minor cropping | 4 minor |
| 2. Console, failed requests, links, anchors | Pass | 1 minor (expected 405 on funnel submit) |
| 3. Navigation, header, menu, sticky CTA, footer, skip link | Pass | 0 |
| 4. Component interactions and the enquiry funnel | Pass | 1 minor |
| 5. Keyboard only | Fail | 1 major, 1 minor |
| 6. Reduced motion | Pass | 0 |
| 7. Accessibility basics | Fail | 1 major, 4 minor |
| 8. SEO basics | Pass | 3 minor |
| 9. Performance | Fail on one page | 1 major, 1 minor |
| 10. Copy lint | Pass | 0 (55 banned-word hits, all inside verbatim source copy) |
| Build hygiene | Note | 1 minor |

Totals: 0 blockers, 3 major, 16 minor.

## What was tested and how

1. Overflow. Every built page at 320, 360, 390, 412, 768, 800, 1024, 1180, 1280, 1440 and 1920, scrolled top to bottom in 0.8 viewport steps, recording `scrollWidth` against `clientWidth` at each step, then a text-node scan for boxes past the viewport and text cut by an `overflow: hidden` or `clip` ancestor. Horizontal scroll tracks were separated out by hand afterwards.
2. Every `href` and `src` on every page resolved against the build, every fragment checked against the target page's ids, plus console errors, page errors, failed requests and 4xx responses on 122 live loads (61 pages at 1440 and 390).
3. Header at all 11 widths on a hero page and a sand page, menu open, focus, Tab cycling (70 presses plus Shift+Tab), Escape, wheel and End key while open, focus return, skip link.
4. Scripted interactions on every component listed in the brief at 1440x900 and 390x844, with scroll-through screenshots of the hero, zoom mosaic and pinned day.
5. Tab through 19 key pages at 1440 and 390, checking reach, wrap, focus style, visibility and whether a fixed bar covers the focused element.
6. All 61 pages at 1440 and 390 with `prefers-reduced-motion: reduce`.
7. Computed contrast for every visible text node against its composited background, then pixel-sampled contrast (text hidden, background measured) wherever text sits over media.
8. Titles, descriptions, canonicals, Open Graph, Twitter tags, JSON-LD parse and type check, sitemap against noindex, robots.txt, llms.txt links.
9. Page weight from the build, network transfer per page, Lighthouse mobile and desktop on `/`, `/philosophy`, `/experiences/full-day-retreat`, `/enquire`, `/faqs`.
10. Built HTML text, `alt`, `aria-label`, `title`, `placeholder` and meta `content`, plus every CSS and JS asset.

## Defects, major

### M1. Keyboard focus hides behind the sticky "Plan your day" bar on phones

- Pages: every page that shows the bar, 18 of the 18 tested (all except `/enquire` and the thank-you page, which leave it out).
- Widths: every width below 760px (tested 390).
- Steps: open any page at 390x844, press Tab repeatedly.
- Evidence: the element under the centre of the focused control is the sticky bar, so the focus ring is invisible. Examples: `/` "Discover Places to Pause", map pill "Deep Creek", "Our philosophy", "See past retreats", the footer "The 8 hour day", "Retreat formats", "Plan your day", "Journal", phone and Instagram links. `/gallery` all three filter buttons. `/journal` the "Keep me posted" submit. `/philosophy` the last accordion summary. Fails WCAG 2.2 criterion 2.4.11 (focus not obscured).
- Cause: `site/src/styles/base.css` line 45 sets `scroll-padding-top` for the header but nothing reserves the bar's height at the bottom, so the browser scrolls focused elements to sit under it.
- Likely fix location: `site/src/styles/base.css` (a `scroll-padding-bottom` of `var(--sticky-cta-h)` plus the safe area under 760px) or `site/src/components/layout/StickyCta.astro`.

### M2. `/enquire` shifts its layout after first paint on phones

- Page: `/enquire`, and every prefilled entry to it (`?audience=corporate` is the worst).
- Widths: 390 (CLS 0.221), 390 with `?audience=corporate` (CLS 0.493), 1440 (0.018). Lighthouse mobile reports CLS 0.223, the only failing Core Web Vital across the five audited pages.
- Steps: load `/enquire/?audience=corporate` at 390x844 with a layout-shift observer.
- Evidence: about 90ms after load `.funnel__actions` moves from y 261 to 559 and `aside.funnel__aside` from y 382 to 680 (no prefill). With an audience prefill both collapse from their first-paint position to zero height. The funnel paints once before the script decides which step to show.
- Why it matters: every path page, venue page and experience page sends its "Plan your day" button here with prefills, so this is the first thing every lead sees on a phone.
- Likely fix location: `site/src/components/pages/a/Funnel.astro` and `funnel.ts` (render the first visible step server side or reserve its height, and keep the aside out of flow until the step is known).

### M3. White text over the light placeholders fails contrast on hero headings, header links and journal cards

- Pages and measured ratios (median, then the lightest 5 per cent of background pixels). Large text needs 3:1, small text 4.5:1.
  - `/private-groups` h1 at 1440: 2.14, worst 1.87.
  - `/experiences/full-day-retreat` h1 at 1440: 2.33, worst 2.03.
  - `/404` h1 at 1440: 2.05, worst 1.80.
  - `/corporate` h1 at 390: 2.86, worst 2.41.
  - `/places/naiko-deep-creek` h1: 3.07 at 1440, 3.35 at 390, worst 2.68.
  - Header nav links over the home hero at 1440 (13px text): 3.42.
  - `/journal` card titles: 3.05 at 1440 and 2.62 at 390, featured title worst 2.84.
  - Passing for reference: home h1 6.45, Menu label 4.78 to 5.24, pinned day Restore heading 3.56.
- Steps: load the page with reduced motion, measure the element region with and without its text.
- Evidence: screenshot at 1440 of `/private-groups` shows the top line of the h1 and the header links fading into the light sand placeholder. The only scrim is `--scrim-soft`, 0.22 on the bottom third, which will not rescue bright sky or sea in the real footage either.
- Likely fix location: the over-media hero on path pages and venue pages (`site/src/components/pages/a/PathPage.astro`, the venue and Day page heroes), the placeholder tones for over-media slots in `site/src/components/media/Media.astro` and `site/src/data/media.ts`, `site/src/components/journal/JournalCards.astro`, and the over state in `site/src/components/layout/Header.astro`. Belle will see the placeholders in the walkthrough, so this matters now as well as after the photo swap.

## Defects, minor

### m1. `--sage-60` used for small text below 4.5:1

- `/` and `/enquire` customise prompt numbers `span.prompt__num`: 3.9 on `--sand-40`, 4.2 on `--sand-30` (Lighthouse flags it).
- `/` and `/experiences/full-day-retreat` pinned day `span.pd__beat-num`: 4.2 to 4.42.
- `/private-groups` and `/corporate` `span.dib__num`: 4.43.
- `/privacy-policy` and `/terms` `span.legal__toc-num` at 0.75 opacity: 3.52.
- Placeholder notes layer, `span.flag__k` and `span.review-note__label` at 0.8 opacity: 3.69 to 4.06 on 40 pages.
- The token table says `--sage-60` is for text only where it passes 4.5:1 at its size. Files: `CustomisePrompts.astro`, `day/PinnedDay.astro`, `pages/a/DayInBrief.astro`, `pages/d/LegalDocument.astro`, `pages/b/Flag.astro`, `pages/d/ReviewNote.astro`.

### m2. PaneSlider dims the tiles that are not leading to 0.42 opacity

- Pages: `/`, `/experiences`, every width. At 1440 the third tile sits in view; at 390 the peeking tile does.
- Evidence: `tile__title` 1.89:1 (a link), `tile__line` 2.19:1, `tile__by` and `tile__flag` 1.89:1.
- File: `site/src/components/experiences/PaneSlider.astro`. A lighter dim (about 0.7) or dimming the media only would keep the effect and pass.

### m3. Filter and tab rows cut a label mid-word on the narrowest phones

- `/places`, `/private-groups`, `/experiences/full-day-retreat` at 320: the VenueIndex row shows "In the viney".
- `/` at 320, 390, 412: the Testimonials filter row cuts its last button ("Sunset Retreat", "Private groups" at 320).
- `/team` at 320: the tab "Food and hospitality" is cut at the right edge.
- The rows scroll sideways (`overflow-x: auto`), so the buttons are reachable, but there is no cue and the brief says no content cropped at 320. Files: `venues/VenueIndex.astro`, `testimonials/Testimonials.astro`, `team/TeamCarousel.astro` (wrap the row below about 420px, or fade the right edge).

### m4. "Refreshments" overflows its column in The Table at 1024

- Page: `/food` at 1024 only. The collapsed MealMoments column is narrower than the word, which is clipped by `li.meal` and touches the Lunch column.
- File: `site/src/components/food/MealMoments.astro`.

### m5. Pillar icon label 1px past the viewport at 320

- Page: `/philosophy` at 320, "Personalisation" in the icon row ends at x 321. Clipped by `body { overflow-x: clip }`, so no scroll, but the last letter is shaved.
- File: `site/src/components/pages/b/PillarIcons.astro`.

### m6. Placeholder captions cut off inside small frames

- `/` zoom mosaic at 320, 360 and 800, and `/fleurieu-peninsula-retreats` at 320 and 360: `.ph-suggested` text ("Food folder 229A8255.jpg. Alternate Food folder...") is cut vertically by the frame.
- Placeholder layer only, but it reads as broken in a walkthrough. File: `site/src/components/hero/ZoomMosaic.astro` (`showNote={false}` on the small tiles) or the `.ph-note` sizing in `Media.astro`.

### m7. FlexShowcase arrows come before the pillars in the Tab order

- Page: `/philosophy` at 900px and up. The "Previous pillar" and "Next pillar" arrows sit visually under the row (y 3240) but receive focus before the ten pillar triggers (y 2603).
- File: `site/src/components/pillars/FlexShowcase.astro` (move the arrows after the row in the DOM).

### m8. Funnel step 2 is named with the private question for corporate visitors

- Page: `/enquire`. `section[data-step="2"]` has `aria-labelledby="q2"`, and only the private heading carries `id="q2"`. The corporate heading has no id, so a screen reader announces "What's the occasion?" for the team question.
- File: `site/src/components/pages/a/Funnel.astro` lines 87 to 107.

### m9. Funnel submit logs a 405 before routing to thank-you

- Page: `/enquire`, final step. The stub POSTs to `/api/enquiry`, the static host answers 405 and the console shows "Failed to load resource". The stub then stores the answers and routes to `/enquire/thank-you` as intended.
- Expected until Dom's Pages Function exists. Worth confirming the fallback stays silent in production. File: `site/src/components/pages/a/funnel.ts`.

### m10. Thank-you page assumes a private group when no answers are stored

- Page: `/enquire/thank-you` visited directly or after storage is cleared. It shows "Thank you." and "Your private group guide". Corporate visitors who reopen the page in a new tab get the private guide.
- Files: `site/src/components/pages/a/ThankYou.astro`, `thank-you.ts` (a neutral line when the audience is unknown).

### m11. JSON-LD types that Google will reject

- Every experience page and `/experiences/full-day-retreat` use `Product` with an `Offer` that has no `price`, which the Rich Results test treats as an error. Home also publishes `LocalBusiness` with no `address`, a required property.
- Files: `site/src/components/base/schema.ts`, `pages/experiences/[slug].astro`, `pages/experiences/full-day-retreat.astro`, `pages/index.astro`. `Service` suits an unpriced experience, and home can keep `Organization` alone until an address publishes.

### m12. JSON-LD URLs drop the trailing slash the canonicals use

- Example: `/experiences/massage` has canonical `https://www.lamarea.com.au/experiences/massage/` but its `Product.url`, `Offer` and breadcrumb items use `.../experiences/massage` and `.../experiences`. Same on venues, team, journal and guides.
- File: `site/src/components/base/schema.ts`.

### m13. The 404 page declares a canonical

- `/404.html` carries `<link rel="canonical" href="https://www.lamarea.com.au/404/">`. It is noindex, so low risk, but the canonical should be left out. Files: `site/src/components/layout/Seo.astro`, `site/src/pages/404.astro`.

### m14. Heading levels skip

- `/journal/the-importance-of-sleep`: h1 then h3, and later h3 then h5, from the harvested article markdown. File: `site/src/content/journal/` (the sleep post).
- `/styleguide` has two h1 elements (dev only, noindex).
- Every other page has exactly one h1 and no skipped levels.

### m15. Inline SVG makes the heaviest pages heavy

- `/` document is 383KB uncompressed, of which 207KB is 121 inline SVGs (the map coastline and pillar icons repeated). `/philosophy` 326KB with 219KB of SVG, `/team` 230KB with 141KB. Gzip brings home to 75KB, so this is moderate, and Lighthouse mobile LCP on home is 4.6s against an uncompressed local server (desktop 1.0s).
- Files: `site/src/components/base/Icon.astro`, `site/src/components/map/FleurieuMap.astro`, `site/src/components/pages/b/PillarIcons.astro` (one `<symbol>` sprite with `<use>` for repeated icons).

### m16. Build output picks up content internals with an external outDir

- Building with `--outDir /tmp/qa-dist` also wrote `collections/*.schema.json`, `content-assets.mjs` and `content-modules.mjs` into the output root. The project's own `dist/` does not contain them. Only matters if a deploy ever builds to a custom outDir.

## Results by area

### 1. Overflow and cropped content

`scrollWidth` never exceeded `clientWidth` on any of the 61 pages at any of the 11 widths, at the top, at any scroll step or at the bottom. The text scan found only the four minor crops above (m3 to m6). Offscreen text in the zoom mosaic at 768 and up is the surrounding stills leaving the frame at the end of the zoom, by design. Slider tracks, the PaneSlider, testimonials, customise prompts and the afternoon slider all peek a partial slide at the right edge inside their own scroll track, as specified.

### 2. Console, requests, links and anchors

- 0 console errors or page errors on 122 page loads.
- 0 failed requests and 0 4xx responses for assets, fonts and scripts.
- 0 broken internal links across every `href` and `src` on all 61 pages.
- 0 fragments pointing at a missing id. All ten `/philosophy#science-<id>` targets exist; nine are linked from pillar "Discover more" links (Sleep and recovery links to its own page instead).
- A missing URL returns status 404 with the designed 404 page.

### 3. Navigation

- Header at 1180 and up: Private groups, Corporate, The 8 hour day, centred logo, Experiences, Places to Pause, Menu, filled "Plan your day". No overlaps at any width.
- 768 to 1179: logo left, Menu and "Plan your day" right. 320 to 412: logo and Menu only, as specified. Logo is never clipped (92 by 22px at 320, 134 by 32px at 1920).
- Header is transparent over heroes and becomes the sand strip after the hero; it stays put on scroll.
- Menu overlay: `role="dialog"` with `aria-modal="true"`, focus moves to the first link on open, Tab and Shift+Tab stay inside for 70 presses at every width, Escape closes and returns focus to the Menu button, `aria-expanded` toggles, the page cannot be scrolled by wheel or End while open, and `clientWidth` does not change (headless Chromium uses overlay scrollbars, so the scrollbar-gutter path was not exercised; `menu.ts` pads for the scrollbar).
- Sticky phone CTA appears once the hero has passed, sits 52px tall at the bottom, hides with the menu open, is absent on `/enquire`, and is hidden from 760px up where the header carries the button. The focus problem is M1.
- Skip link is the first Tab stop on every page, visible when focused, moves focus to `main`, and the next Tab moves into main.
- Footer links: all resolve.

### 4. Interactions

- Hero, 1440x900: H1 and both doors in the first viewport, header over the hero, placeholder note top right. At 390x844 the media fills the top 65 per cent with the H1 and doors on sand beneath, as specified.
- Zoom mosaic, 1440: five stills around the centre frame, the zoom fills the screen, the three drive facts arrive from the right. At 390 four stills and the same sequence. No horizontal overflow at any step.
- Pinned day, 1440: time rail across the top, panels arrive from the right in order Arrive, Move, Nourish, Restore, the rail marks progress, Restore is the full-bleed panel with "See the full day" and "Plan your day". At 390 it is a swipe row with a "01 / 04" counter and working arrows (scrollLeft 0 to 390 per step).
- PaneSlider: counter and track move together (01 to 02 on next, 03 after a swipe) at both sizes; the phone and desktop arrow sets swap cleanly.
- Slider (`/experiences` self-led): arrows step to the end, `aria-disabled` flips at both ends, Arrow Left on the focused track scrolls back.
- FlexShowcase: clicking pillar 5 gives it `aria-expanded="true"` and counter "05"; Next moves to 06. Hidden pillar bodies are `inert` and invisible, so their links are out of the Tab order until opened. Phone view steps with arrows.
- VenueIndex: All, On the coast and In the vineyards filter correctly with `aria-pressed`. The venue panel is a modal `<dialog>`, focus starts on Close, Escape closes it and focus returns to the card.
- FleurieuMap: three markers, arrows step 01 to 03 with `aria-pressed` following and `aria-disabled` at the ends, clicking a marker jumps to it.
- SteppedGallery (`/places/naiko-deep-creek`): steps 01 to 03, stops at the end with Next disabled.
- Testimonials: All, Corporate teams, Private groups (shows the marked placeholder card) and Sunset Retreat filter correctly; "Read the full review" toggles `aria-expanded` with a valid `aria-controls`.
- TeamCarousel: Next moves the active person, tabs switch panels with `aria-selected`, Arrow Left moves between tabs, bios open in place through native `<details>` (open by default on phones).
- JournalCards: All, Sleep and recovery and Recipes filter correctly with `aria-pressed`.
- Accordions: `/faqs` single-open with `name`, Enter toggles. Deep links `/philosophy#science-nutrition`, `#science-sleep-and-recovery`, `#science-luxury-and-heartfelt-hospitality` and `#science-wellness-education` open the right item and scroll it just below the header at both sizes.
- ExpandTiles (home, Signature culinary experiences): expand in place, `aria-expanded` true, region fully visible, Escape collapses.
- Enquiry funnel, end to end at both sizes: empty Continue shows an inline error and focuses the field; each step validates; Back returns to the previous step with answers kept; invalid email and missing name set `aria-invalid`; submit routes to `/enquire/thank-you`, which summarises every answer and shows the one calendar button. Prefills: `?audience=corporate` skips to step 2 and shows "Planning for your team or organisation. Change" with the count "Question 1 of 6"; `?format=full-day` ticks the full day; `?venue=naiko-deep-creek` ticks the coast and adds "You were looking at Naiko Deep Creek."; `?experience=massage` ticks massage; `?step=5` opens the setting question; a bogus audience and `step=99` fall back to step 1.

### 5. Keyboard

All 19 pages tested at both sizes are fully reachable with Tab, wrap back to the top, and trap nothing outside the menu and venue dialog. Every focused control has a visible indicator (outline, double border, or the map marker's ring); the automated check flagged PaneSlider tile titles and map markers, and screenshots confirmed both show a ring. Custom radio and checkbox inputs are visually hidden but their boxes show focus. Defects: M1, m7.

### 6. Reduced motion

With `prefers-reduced-motion: reduce` on all 61 pages at 1440 and 390: no GSAP pin spacer, no sticky stage for the zoom mosaic, no scroll-driven animation timelines, no infinite animation (the placeholder tide stops), and no main-content text left below full opacity except the deliberate PaneSlider dim (m2). The pinned day renders as a static stack. Sticky elements that remain are side columns (funnel aside, schedule reel, recipe ingredients, legal contents, team portraits), none of them scroll-bound motion. The zoom mosaic shows its opening composition as the static state rather than the zoomed frame, which reads fine.

### 7. Accessibility basics

- One h1 on every public page (m14 for the exceptions).
- 1,598 media placeholders across the site, every one `role="img"` with an `aria-label`. No `<img>` without `alt`.
- Every visible form control has an accessible name, and the honeypots are `tabindex="-1"`.
- No duplicate ids, no `aria-controls`, `aria-labelledby` or `aria-describedby` pointing at a missing id.
- Sliders are `role="group"` with a label, arrows are named buttons with `aria-controls` and `aria-disabled`, tabs carry `aria-selected` and `aria-controls`, disclosures carry `aria-expanded`.
- Landmarks: one `main`, labelled `nav` elements, header and footer on every page, `lang="en-AU"`.
- Lighthouse accessibility: 96 to 100 on the five audited pages, losing points only on contrast.
- Defects: M3, m1, m2, m8, m14.

### 8. SEO basics

- 53 indexable pages, all with a unique title (25 to 59 characters) and a unique description (105 to 154 characters), a self-referencing canonical with trailing slash, full Open Graph (1200 by 630 default image), Twitter card and `lang="en-AU"`.
- Every JSON-LD block on every page parses. Types: Organization site-wide, plus LocalBusiness, Service, FAQPage, ItemList, Product, LodgingBusiness, Recipe, BlogPosting, Person, TouristDestination, AboutPage, WebPage and BreadcrumbList where relevant.
- Sitemap: 53 URLs, exactly the indexable set. The 8 noindex pages (thank-you, waitlist, gift cards, both guides, both styleguide pages, 404) are left out.
- robots.txt allows all, disallows `/styleguide/`, `/admin/` and `/questionnaire/`, and points at the sitemap index. No public page links to the styleguide.
- llms.txt is 4.6KB and every site URL in it resolves.
- Lighthouse SEO 100 on all five audited pages. Defects: m11, m12, m13.

### 9. Performance

| Page | HTML | CSS | JS | GSAP |
|---|---|---|---|---|
| `/` | 383KB | 114KB | 132KB | yes |
| `/experiences/full-day-retreat` | 216KB | 102KB | 131KB | yes |
| `/philosophy` | 326KB | 76KB | 10KB | no |
| `/team` | 230KB | 66KB | 9KB | no |
| `/enquire` | 113KB | 69KB | 21KB | no |
| Typical content page | 90 to 125KB | 52 to 85KB | 6 to 15KB | no |

(Uncompressed. The heaviest page, `/styleguide/systems`, is dev only at 623KB.)

- GSAP core (71KB) and ScrollTrigger (44KB) load only on `/`, `/experiences/full-day-retreat` and `/styleguide`, the three pages that render PinnedDay. No other page ships them.
- JS elsewhere is small: a 1.5KB MediaBand loader on most pages, a 3KB slider library where sliders exist, the 13KB funnel script on `/enquire`. `/faqs`, `/gallery`, the legal pages and the utility pages ship only the shared 5 to 7KB of inline menu and header script.
- Fonts: 60 files in the build (woff2 and woff for Cyrillic, Latin extended and Latin subsets), 878KB on disk, but `unicode-range` means a page downloads only 3 to 5 Latin woff2 files, 42 to 89KB.
- Lighthouse, served uncompressed from localhost (a real CDN with Brotli will do better on mobile FCP):

| Page | Mobile perf | Desktop perf | Mobile LCP | CLS mobile |
|---|---|---|---|---|
| `/` | 72 | 98 | 4.6s | 0 |
| `/philosophy` | 81 | 99 | 3.7s | 0 |
| `/experiences/full-day-retreat` | 84 | 99 | 3.5s | 0.011 |
| `/enquire` | 83 | 100 | 2.6s | 0.223 |
| `/faqs` | 97 | 100 | 2.3s | 0.018 |

Best practices 100 everywhere. Mobile scores are held back by render-blocking CSS (8 stylesheets on home) and document size, both of which improve with compression. Defects: M2, m15.

### 10. Copy lint

- Em dashes: 0 in built HTML, alt text, aria labels, meta content, CSS or JS.
- En dashes: 0.
- `text-transform: uppercase` and small caps: 0 in every CSS file and inline style.
- Banned words: 55 hits across 17 public pages, counting meta description and Open Graph repeats. Every one sits inside verbatim source copy:
  - Guest reviews (Google, verbatim): `honestly` x2, `genuinely` x1, `journey` x1, on `/` and `/private-groups`.
  - Belle's live-site copy: `journey` on `/our-story` (x2), `/faqs` (her booking terms), and in the Empower definition and the Luxury pillar line on `/philosophy` (already flagged there for Belle); `indulged` in the Luxury pillar line.
  - Belle's journal post `/journal/the-importance-of-sleep`: `actually` x4, `genuinely` x1.
  - Team bios from the harvest: `seamless` (Zoe Buttery), `haven` and `indulgent` (Courtney Selfe), `journey` (Kristian Ryan), on `/team` and each person page including their meta descriptions.
  - Partner venue copy quoted from the venue websites: `nestled` (Beresford Grand Reserve Suites and Beresford House, Deep Creek parks), `elevated` (Naiko at the Bluff) on `/places`, the venue pages, `/corporate` and `/experiences/full-day-retreat`.
- Flag for the orchestrator: the venue lines are the partners' marketing copy rather than Belle's words. They are verbatim, so the exemption may cover them, but Belle and Jess should decide before launch. The dev-only `/styleguide` also shows Belle's line "wellbeing is not indulgence, it is foundation", which uses the banned not X, it is Y shape; it does not appear on any public page.
