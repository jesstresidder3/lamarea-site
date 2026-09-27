---
title: La maréa website build spec
date: 24-09-2026
status: Internal. Written by the orchestrator from plan/11 (with the plan/12 fixes applied), the transcript-first creative brief and the reference visual study. Where this spec and plan/11 disagree, this spec wins, and every such change is listed in section 9.
---

# La maréa build spec

Read `build/00-orchestration-brief.md` first. Then `build/01-creative-brief-transcript-first.md` (the brief the build is judged against), `build/02-reference-visual-study.md` (the measured design cues) and `build/03-content-harvest.md` plus `build/content-seed/` (the real copy). This file tells you what to build and who owns which files.

## 1. Stack and project

- Astro 5.18, static output, in `site/`. Fonts from @fontsource (already installed). GSAP 3 installed, used only in the pinned day component.
- Global CSS: `site/src/styles/base.css` imports `tokens.css`. Component styles live in each `.astro` file's scoped `<style>`. Shared utility classes go in `site/src/styles/utilities.css` (owned by the foundation layout builder).
- Media: `site/src/components/media/Media.astro` and the manifest `site/src/data/media.ts` already exist. Every image and video on every page goes through `<Media slot="..." />`. Add your page's slots to `media.ts` in one block per page, with a `suggested` asset from Belle's inventory (plan/11 Part 4 asset columns name real files) and a `tone`. Do not edit `Media.astro` unless you own it (foundation layout builder).
- Brand vectors: `site/src/assets/brand/` (logo, tagline lockup, submarks, ten pillar icons, all `currentColor`). Import them with `?raw` and inline, so colour follows CSS.
- Quality gates every builder runs before reporting done: `npx astro build` passes with no warnings you introduced, `npm run check:scroll` passes (zero horizontal overflow at 11 widths), a grep of your files finds no em dash, no en dash, no `text-transform: uppercase` and no banned word from the orchestration brief, and every animated thing you built has a reduced-motion rule.

## 2. Pages in this build

| Tier | URL | Page | Owner |
|---|---|---|---|
| 1 | `/` | Home | Page builder A |
| 1 | `/private-groups` | Private groups | Page builder A |
| 1 | `/corporate` | Corporate | Page builder A |
| 1 | `/enquire`, `/enquire/thank-you` | Stepped enquiry funnel and completion | Page builder A |
| 1 | `/experiences/full-day-retreat` | The Day, the 8 hour flagship | Page builder B |
| 1 | `/experiences`, `/experiences/[slug]` x10 | Experiences index and detail | Page builder B |
| 1 | `/philosophy`, `/philosophy/[pillar]` x10 | Philosophy and pillar science pages | Page builder B |
| 1 | `/places`, `/places/[slug]` x4 | Places to Pause and venue pages | Page builder C |
| 2 | `/food` | The Table | Page builder B |
| 2 | `/team`, `/team/[slug]` | Team and people | Page builder C |
| 2 | `/journal`, `/journal/[slug]` x4 | Wellness journal | Page builder C |
| 2 | `/fleurieu-peninsula-retreats` | The Fleurieu | Page builder C |
| 2 | `/our-story` | Our story | Page builder C |
| 2 | `/retreats` | Retreat formats | Page builder A |
| 3 | `/corporate/fleurieu-offsite` | Fleurieu offsite | Page builder A |
| 3 | `/rising-tides-collective`, `/app` | Collective and app (coming 2027) | Page builder C |
| 3 | `/gallery`, `/faqs`, `/waitlist`, `/gift-cards`, `/privacy-policy`, `/terms`, `/guides/[slug]` x2, `/404` | Supporting pages | Page builder C |

A dev-only `/styleguide` page (noindex, not linked) shows every component with placeholder content. The foundation builders own it.

## 3. Global layout (foundation layout builder)

**Header** (`components/layout/Header.astro`). Logo centred, navigation split either side (The Tailor pattern). Left: Private groups, Corporate, The Day. Right: Experiences, The Table, Places to Pause, Philosophy. Far right: a quiet "Menu" control and the persistent "Plan your day" link. Below about 1180px the six links fold into the menu. At narrow widths: logo left, "Plan your day" and "Menu" right. Over a hero it is transparent with light text; after the hero it becomes sand with sage text and a hairline; it hides on scroll down and returns on scroll up, opacity and transform only, 300 to 450ms, soft easing. Logo displayed in full at every width, never clipped. Current page marked with `aria-current`.

**Menu overlay** (`components/layout/Menu.astro`). Full-height sand overlay, all widths. Two columns on desktop: the two paths and The Day large in the display serif, then grouped links (Experiences, Places to Pause, The Table, Philosophy, Retreat formats, The Fleurieu, Team, Our story, Journal, Gallery, Rising Tides Collective, The app, FAQs), contact details, Instagram, and the tagline lockup or circle submark. Opens with a soft fade and a small upward settle, locks body scroll without layout shift, traps focus, closes on Escape.

**Footer** (`components/layout/Footer.astro`). Plan a retreat, Explore, La maréa, Stay close columns per plan/11 Part 3, newsletter lead capture (email, separate unticked marketing consent, posts to `/api/subscribe` stub), belle@lamarea.com.au and info@lamarea.com.au (confirm against the harvest), phone only if the harvest confirms it is published, Instagram @lamarea_retreats, one True South line placeholder in Belle's words (flagged), privacy and terms, the circle submark "luxury coastal wellness reimagined". A final quiet line crediting nothing, no agency credit.

**Base layout** (`layouts/Base.astro`). `lang="en-AU"`, title and description props, canonical, Open Graph, `Organization` JSON-LD site-wide plus a `jsonLd` prop for page schema, skip link, header, main, footer, `html[data-media-notes='on']` while placeholders are in use.

## 4. Components

Owner key: **L** = foundation layout builder, **S** = foundation systems builder.

| Code | Component | Owner | What it is | Register |
|---|---|---|---|---|
| base | `TextPair` | L | Eyebrow, heading with optional italic emphasis, 30 to 60 word body, art-directed one third to two thirds split (not 50/50). Variants: left, right, centred, narrow | B5 O8 |
| base | `Eyebrow`, `SectionHead` | L | Small sentence-case tracked label, heading, optional intro | B4 |
| base | `ArrowLink` | L | La maréa's own link affordance, not The Tailor's circled arrow (creative brief F12): a fine line arrow drawn at the stroke weight of Belle's pillar icons, extending a few pixels on hover, with a hairline underline that sweeps in from the left. No filled buttons except the header CTA and form submits | O4 |
| base | `MediaBand` | L | Full-bleed `Media` with optional parallax (CSS scroll-driven, IO fallback) and text overlaid or beneath | O13 C2 |
| base | `SlideIn` | L | Wrapper that brings children in from the right on scroll (`animation-timeline: view()`, IO fallback, `overflow-x: clip` parent) | L2 O12 |
| base | `Reveal` | L | Soft fade and 16px rise on entry, staggered siblings | B6 |
| base | `NumberedMoments` | L | Numbered items (01 to 05), short title, one sentence of feeling. Used for the five differences, inclusions, Collective benefits | C3 |
| base | `CtaBand` | L | One line and one link into the funnel with prefill parameters | A1 E4 |
| base | `LeadCapture` | L | Email, separate consent, honeypot, posts to a stub endpoint, calm inline success state | P5 P6 P7 |
| base | `AnswerBlock` | L | Question heading, 40 to 60 word answer, FAQ schema ready | N5 |
| base | `Breadcrumbs` | L | For template pages reached cold from Instagram | P8 |
| C2 | `Accordion` | L | Native `details` with `name` for single-open, a small rotating chevron (never a plus), height transition with max-height fallback | L3 |
| C3 | `ExpandTile` | L | Tile that expands in place to reveal detail, never navigates away, SHA "design of our diets" pop-up feel | O7 L4 |
| T9 | `QuestionCircles` | L | Three overlapping rings with a question in italic serif and a hint beneath, hover lift, one link to `/enquire`. Stacks on phones | A6 |
| T1 | `HeroZoom` | L | Full-bleed hero video scaling 1 to about 1.6 on scroll (cap by source resolution, 1.3 on phones), hero line and two audience doors in the first viewport, caption fades as the zoom completes, poster under reduced motion | L1 C1 C7 A8 |
| T3 | `PinnedDay` | L | Four full-viewport panels (Arrive, Move, Nourish, Restore) arriving from the right with rotated spine labels stacking on the right edge, each panel's detail opening downward after it settles, outgoing content cross-fading. GSAP ScrollTrigger pin above 900px, vertical stack below 900px and under reduced motion. Panel backgrounds step through sand lightness like The Tailor's one-hue ramp | E1 E2 E3 O5 O6 L2 |
| C6 | `FlexShowcase` | S | **Pillars only** (COMO's wellness experiences flex, which Belle tied to the philosophy). Heading and intro above or in a left pane, flex row where the active pillar takes `flex: 3` and the rest `flex: 1` showing Belle's line icon and a rotated name, transition `flex 0.8s ease-out 0.2s`, the active pillar's video slot, one line and "discover more" beneath, cross-fade. Ten pillars, arrows plus hover or tap to activate. Below 900px becomes a scroll-snap track | G1 G2 G3 G4 O5 |
| D | `PaneSlider` | S | **Experiences and self-led activities.** The text-left layout Belle lost in the agency meeting: a fixed pane in the left third (eyebrow, heading, 30 to 45 word intro, counter "01 / 10", arrows) that stays put while a `Slider` track in the right two thirds moves. Tiles are image or video (video plays only on the tile in view, posters only on home), name and a short explanation beneath, thin progress rule under the track, per-tile art direction (`full_bleed`, `inset`, `split`, different text treatments), cross-fade on captions. Below 900px the pane sits above and the track shows 1.2 tiles | D1 to D6 O1 O2 O3 O5 O8 |
| T2 | `Slider` | S | Scroll-snap track, arrows plus a thin progress rule under it (O2), image or video slides, 1.2 tiles on phones, no autoplay on touch, cross-fade captions. Used for self-led activities, journal, testimonials, the wild side, the Beresford day | D5 D6 O2 X8 |
| C4 | `VenueIndex` | S | Venue cards with a filter (All, By the coast, In the vineyards), capacity first, five star partner tag, "Discover" link with underline sweep, a small image drift on hover (the Basq House mini animation) | F2 F4 F6 F8 L5 |
| C5 | `SteppedGallery` | S | Image with information on the left, arrows stepping both together, counter and rule, cross-fade. Venue rooms and spaces, the food day, the morning rotation | F5 F10 O2 O5 |
| T4 | `FleurieuMap` | S | Inline SVG of the Fleurieu Peninsula and Adelaide with a small inset of Australia showing where South Australia is, pins for each venue from coordinates, arrows stepping venue to venue, detail pane (name, coast or vineyard, sleeps, one image, link). Coastline from Natural Earth (public domain) or another public domain source, simplified | F9 C6 A3 |
| T5 | `Testimonials` | S | Image above, words beneath, attribution as a descriptor ("Private group, Beresford Estate"), filter by group type, T2 slider. Only verbatim testimonials. Where none exist, render a marked placeholder card, never an invented quote | I5 I6 I7 I8 |
| C1 | `TeamCarousel` | S | SHA advisory board pattern: portrait that grows when active, name, credentials, bio opening in place, arrows with a pill progress indicator. Two instances (wellness, food and hospitality) | I1 I2 I3 |
| T8 | `JournalCards` | S | Full-bleed image card, title over the image in the display serif, category and date small, 3:4 portrait. Filter row of toggle buttons with `aria-pressed`. Grid and slider variants | J3 J4 J5 O14 |
| G | `Intentions` | S | Belle's eight words with definitions. Quiet typographic treatment, each word revealing its definition on hover or tap | G10 C8 |

Every component: a reduced-motion rule, hover plus tap equivalents under `(hover: hover)`, 44px minimum targets, visible focus, keyboard operable, and no content cropped at 320px.

## 5. Content model (foundation systems builder)

`site/src/content.config.ts` with Astro content layer `glob` or `file` loaders over `site/src/content/`. Zod schemas. Seeds come from `build/content-seed/*.json` (real harvested content only). Every collection has `status: draft | published | hidden`. Collections: `venues`, `experiences` (with `kind: guided | self_led`, `art_direction`, `pillar`, `duration` nullable), `pillars` (the ten, with `icon` file name, `line`, `video` slot, `evidence[]`, `references[]`), `intentions` (the eight), `people` (`team: hosts | wellness | food_hospitality`), `journal` (markdown posts), `testimonials` (`group_type`, `venue`, `source`), `formats`, `faqs`, `menus`, plus `site/src/data/settings.ts` (nav, contact, booking link, social, the True South line, differences) and `site/src/data/day.ts` (the 8 hour day). Nothing is invented: unknown fields are null and the UI shows a marked placeholder or hides the field.

## 6. Home page, section by section (page builder A)

Follow `build/01-creative-brief-transcript-first.md` section D exactly. Summary, in order:

1. **Arrive, hero** (`HeroZoom`). `home-hero` drone slot. Eyebrow "Fleurieu Peninsula, South Australia". H1 "Luxury coastal wellness retreats on the Fleurieu Peninsula" (from Belle's own positioning). Draft sub-line: "8 hour wellness retreats for private groups and corporate teams, south of Adelaide." Two doors: "Private groups and retreats" and "Corporate teams", each with one line of her live copy.
2. **An invitation to pause** (`TextPair`). Her line "Restore. Reconnect. Realign." as the display heading, then 40 to 60 words of her own copy (the invitation to pause, wellbeing as foundation, slowing down, the combination of place, five star partner venues, practitioners and the Mediterranean table).
3. **The Fleurieu** (`MediaBand` with parallax, three `SlideIn` facts, a small wildlife frame, link to the Fleurieu page). Coast and vineyard together, never beach alone.
4. **The Day** (`PinnedDay`, "Arrive. Move. Nourish. Restore."). Ends with "Book a discovery call" (routed through the funnel, see section 7) and "See the full day".
5. **Move: Your retreat, your rhythm, your routine** (`PaneSlider`, ten experiences, posters only on home).
6. **Nourish: The Table** (two lines, a shared table image, heading "Signature culinary experiences", two `ExpandTile`s, link to `/food`).
7. **Restore: Places to Pause** (`FleurieuMap`, venues stepped by arrow, coast and vineyard, "five star partner venue", link to `/places`).
8. **Restore: the unhurried afternoon** (`Slider`, six self-led activities). First cut if the page reads long.
9. **Our difference** (`NumberedMoments` with `SlideIn`, the five differences verbatim, each linking to its proof).
10. **Our philosophy** (`FlexShowcase`, ten pillars, compact).
11. **Proof** (`Testimonials`, private and corporate first, marked placeholders where no approved quote exists).
12. **Customise your day** (`QuestionCircles`, then "Plan your day").
13. **Coming 2027 and the Rising Tides Collective** (two `TextPair`s, `LeadCapture` for app interest).
14. **From the wellness journal** (`JournalCards` slider).
15. Footer.

The eight words do not appear on home beyond the single "Restore. Reconnect. Realign." line. They live on the Day page ("How you leave") and the philosophy page, never labelled as pillars. "Intentions" is a data label only, not public copy.

## 7. Other pages

**Call to action routing (creative brief F7).** "Plan your day" goes to `/enquire`. Every "Book a discovery call" button goes to `/enquire` with prefill parameters (for example `/enquire?format=full-day`), so every call arrives with answers and a lead source (P5). The funnel ends on `/enquire/thank-you`, where "Book a discovery call" opens Belle's calendar. The only direct calendar links are that thank-you button and a small text link under step 7, "Rather talk first? Book a call with Belle".

**Question circles** also sit on `/enquire` beside step 1, carrying Belle's Personalisation line icon (creative brief F16).

**No copied reference lines.** Distinctive Scorpios headings and sentences are not used ("Space for transformation", "Guiding principles", "Meaningful gatherings", "Tailored to the occasion", "An invitation to the water", "Our team will reach out to finalise the details"). Write in Belle's words.

**Serif body variant.** Belle's two font references set body copy in a serif. Add `?body=serif` (persisted in sessionStorage) that switches `--font-body` to the display serif at 17px, so Jess can show Belle both in the walkthrough.

Build from plan/11 Part 4 (sections 4.2 to 4.25) with the plan/12 Part 6 fixes, the creative brief, and these specifics:

- **Private groups and corporate**: same layout, different language (plan/11 4.2, 4.3). Proof beside the ask. The Beresford day is presented as serving both paths (Belle's only Beresford statement is a private group day). Corporate proof renders anonymised until names and permission are confirmed.
- **The Day** (4.7, and creative brief D, The Day page table): the T3 panels, a "How you leave" moment with the eight words (Empower present), an hour by hour table from sourced times only (7am pick up, 8am to 4pm, 5pm drop off, with gaps marked "to confirm with Belle"), the morning rotation in SteppedGallery, inclusions as NumberedMoments, the unhurried afternoon Slider, where it can happen (VenueIndex), the Beresford reel in a contained 9:16 frame beside the schedule text (never full-bleed, O10), questions (Accordion), proof, QuestionCircles, "Book a discovery call".
- **Experiences index and detail** (4.6, 4.8). Detail pages lean where the harvest has no copy.
- **Places to Pause and venues** (4.9, 4.10): VenueIndex (Basq House style cards lead this page), FleurieuMap, five star partners text. Venue page: hero (Naiko Deep Creek uses the bath shot slot), at a glance, about, within the venue (SteppedGallery), what is around it (coast walks, conservation parks, or cellar doors), a day here, mini map, proof, plan your day here. Venues publish only when `partner_approved` is true, and for this prototype all four render with a visible "partner approval pending" note in the placeholder layer only.
- **Philosophy** (4.12 with section 5 item 5 of the orchestration brief): hero, the name story (verbatim), Mediterranean inspired science backed rooted in the Fleurieu, the ten pillars in FlexShowcase with icons and discover more, the eight intentions, where each pillar lives in the day (Accordion), the science and references. Pillar pages per 4.13 with evidence and references as marked placeholders except where the harvest has them (the sleep article).
- **The Table** (4.14): eat well, be well structure, the day at the table (SteppedGallery: breakfast, refreshments, lunch, then dinner and dessert marked as to come from Belle's retreat guide), fine dining and the shared table, signature culinary experiences, an example menu (Accordion, from the harvest), local producers, the chef, dietary needs.
- **Journal**: filter row, featured post, grid, plus a "Recent stories" slider (X8). Posts: hero with title over image, body, references, related posts with arrows.
- **Enquire**: seven steps per plan/10 section 6 and plan/11 Part 5, one question per screen, progress, back link, answers kept in `sessionStorage`, prefill from URL parameters, step 7 helper text asking people to leave health details out, collection notice, then `/enquire/thank-you` summarising answers with "Book a discovery call" as the main action. Payload shape documented in a comment for Dom.

## 8. Copy rules for builders

Use Belle's verbatim copy from the harvest wherever it exists and cite the source in the content file. Where you must draft, keep it short (captions, not columns), plain, warm, in Belle's register (her vocabulary list is in the creative brief section G), and mark the record `status: draft` or add `data-draft` to the element so Jess can find every drafted line. Never invent facts, names, numbers, prices, durations or quotes.

## 9. Changes from plan/11

1. The nav label "The Day" goes to the 8 hour flagship, and the formats hub is "Retreat formats" (fixes the plan/12 collision).
2. The ten pillars lead the philosophy, the eight words become the intentions (orchestration brief 5.5). Decision 1 still Belle's.
3. The journal gets a slider on home and a "Recent stories" slider on the index (X8).
4. The Beresford reel sits in a contained vertical frame (X9, O10).
7. Experiences use `PaneSlider` (a slider in a fixed-pane layout), not the COMO flex, which moves to the pillars only (creative brief F2).
8. The home Places to Pause moment is the map, and the cards lead `/places` (creative brief F11).
9. The Table joins the primary nav (creative brief F10).
10. Discovery call buttons route through the funnel (creative brief F7).
5. Nature, ocean and hiking appear on every image-led page, not only the Fleurieu hub (X10).
6. T1 zoom ceiling set per source resolution, starting at 1.6 (research/04 warns 2.18 on 1080p shows artefacts).

## 10. Reconciliation of the creative brief and the visual study (orchestrator decisions, 24-09-2026)

The creative brief (01) and the visual study (02) agree on almost everything. Where they differ, the brief wins because it is the transcript speaking, and the study supplies the measured values.

1. **Links.** La maréa's own affordance, not The Tailor's circled arrow (brief F12 over study B9): a fine line arrow at the stroke weight of Belle's pillar icons (about 1px at 88 x 14px for slider arrows, a short 28 x 10px arrow before or after a link label), extending 6px on hover, with a hairline underline drawing from the left over 300ms. The header "Plan your day" is the one filled element on screen: `--sage-80` fill, `--sand-30` text, square corners, 13px Jost tracked sentence case. On phones it becomes a slim sticky bar at the bottom after the hero (study E), hidden on `/enquire`.
2. **Hero and zoom are two moments** (study correction 1). Moment 1 is the full-bleed drone hero (`Hero`, `100svh`, H1, sub-line, two text doors, all in the first viewport at 390 x 844 too). Moment 3, the Fleurieu, becomes the true Tailor zoom (`ZoomMosaic`): five of Belle's stills arranged asymmetrically on sand around a centre tile (a second drone clip or a still at launch, since home allows one autoplay loop), the whole group scaling linearly with scroll until the centre tile fills the viewport (about 1 to 2.2 over at most 1,600px, a 400px hold at full frame, 900px on phones with three or four tiles), then the three Fleurieu facts slide in from the right over the full frame and the section releases. CSS `animation-timeline` where supported, GSAP ScrollTrigger scrub fallback. Reduced motion: the mosaic at rest.
3. **Experiences** use `PaneSlider` (brief F2), not the COMO flex (study D4).
4. **Pillars** combine both references Belle named for the philosophy: Aman's split with the left third holding only the label, heading and a 25-word statement (Mediterranean inspired, science backed, based on the Fleurieu), and COMO's flex row on the right with Belle's ten line icons (study D5 plus brief F2). The row rests with the first pillar active, never on equal tiles. Under it, ten 1px segments with the active one in `--sage-80`. Hover, focus, click and arrows activate. The active pillar shows its video slot, one line and "Discover more". Phones: three visible, slivers at least 44px, copy below.
5. **The Day** per study D3: base panel with "Arrive. Move. Nourish. Restore." and 40 words, four 64px spines with rotated beat names, pin for 400 per cent, panels arriving linearly from the right with a 150px hold, and the COMO vertical half inside each settled panel (image block shortens to 60 per cent while the text rises 24px into the space, 700ms, 150ms delay). Ramp: Arrive `--salt-25`, Move `--sand-40`, Nourish `--sand-60`, Restore `--sage-80` with `--sand-30` text. Each panel carries its time of day only from sourced times (content-seed/day.json holds the published Beresford corporate day for 12 guests; its "12 : 20 AM" is a typo for 12:20 PM, render 12:20pm and log it for Belle) and one of Belle's pillar icons at 40px. Below 900px and under reduced motion: stacked panels in the same ramp, no pin, full copy.
6. **Header** per study B5, **menu** per study B6 (sand overlay, a `--sage-80` left column with the reversed logo, submark and contact, Cormorant primary list at 30 to 34px, one photograph slot crossfading as primary links are hovered, a 44px close control drawn with a thin cross).
7. **Places to Pause index** per study D6: "On the coast" and "In the vineyards" tabs plus All, 4:5 cards, and a panel sliding in from the right with the venue's gallery and essentials, focus trapped, Escape closes, "See the full venue" to the venue page.
8. **Map** per study D7 using the public domain data in `site/src/data/map/` (Fleurieu land paths with place label coordinates, and an Australia inset with state paths). Line-drawn in `--sage-40` on sand, real `<button>` markers, venue pills below the map on phones.
9. **Food** per study D8 (four meal moments with the SHA grow and a sample menu inside an inset frame, signature culinary experiences as a tabbed block). Dinner and dessert show as marked placeholders until Belle's retreat guide arrives.
10. **Team** per study D9 (two tabs, SHA carousel). **Testimonials** per study D10 using the real reviews in `content-seed/testimonials.json` verbatim, attributed by descriptor, "Read the full review" behind a link. **Journal** per study D11. **Question circles** per study D12, each circle a button opening the funnel at its step, the Personalisation icon above the heading, questions marked as drafts for Belle.
11. **Tokens** now carry the study's measured spacing, type and easing (`site/src/styles/tokens.css`). Body copy is Jost 400 at 16/1.6 for readability; leads are Cormorant 400 at about 20px. No bold anywhere.

## 11. File ownership during the foundation wave

Two foundation builders work at the same time. Never edit a file you do not own. If you need something from the other builder, write the need in `build/notes/requests.md` and work around it.

| Owner | Files |
|---|---|
| Foundation layout builder (L) | `src/layouts/**`, `src/components/layout/**` (Header, Menu, Footer, StickyCta, Seo), `src/components/base/**` (TextPair, SectionHead, Eyebrow, ArrowLink, MediaBand, SlideIn, Reveal, NumberedMoments, CtaBand, LeadCapture, AnswerBlock, Breadcrumbs, Accordion, ExpandTile, QuestionCircles, DataTable), `src/components/hero/**` (Hero, ZoomMosaic), `src/components/day/**` (PinnedDay), `src/components/media/Media.astro`, `src/data/settings.ts`, `src/data/day.ts`, `src/data/media/slots-foundation.ts`, `src/styles/base.css`, `src/styles/utilities.css`, `src/scripts/**`, `src/pages/styleguide/index.astro`, `public/**` |
| Foundation systems builder (S) | `src/content.config.ts`, `src/content/**`, `src/components/experiences/**` (PaneSlider), `src/components/slider/**` (Slider), `src/components/pillars/**` (FlexShowcase, Intentions), `src/components/venues/**` (VenueIndex, VenuePanel, SteppedGallery), `src/components/map/**` (FleurieuMap), `src/components/testimonials/**`, `src/components/team/**`, `src/components/journal/**`, `src/components/food/**` (MealMoments, SignatureTabs), `src/lib/**`, `src/data/media/slots-systems.ts`, `src/pages/styleguide/systems.astro` |
| Nobody during this wave | `src/pages/*` other than the styleguide pages, `src/styles/tokens.css` (orchestrator only) |

## 12. Pre-build creative director review, decisions (24-09-2026)

Source: `build/reviews/cd-review-01-prebuild.md`. All 14 Musts are accepted. These override anything earlier in this spec and in plan/11.

**Type.** `--font-display` is now **Italiana** (the closest free match to HV Muse and the logo), used only for headings at 28px and above. `--font-serif` is **Cormorant Garamond**, for leads (about 20px), card titles, testimonial quotes, anything serif under 28px, and the one italic flourish. `--font-body` stays Jost. Italiana has no true italic, so never italicise it.

**Italic only on place names.** Fleurieu, Deep Creek, Encounter Bay, McLaren Vale, Adelaide, Victor Harbor, Beresford Estate: set them in `--font-serif` italic 500 inside headings (a `<span class="place">`). No other italic emphasis words.

**Hero** (review items 1, 2). No full-frame scrim; `--scrim` is gone, use `--scrim-soft` (a bottom-third gradient at 0.22) behind hero text only, and place the text where the clip has calm sea or sky. No eyebrow. H1 "Luxury coastal wellness retreats on the <span class="place">Fleurieu Peninsula</span>" at `--fs-display` (36 to 56px). Two short door labels only: "Private groups and retreats" and "Corporate teams" (their descriptors move to the path pages). The sub-line moves into moment 2. Below 700px the video fills the top 65svh and the H1 and doors sit on `--sand-30` beneath it.

**Header** (items 15, 16). Left: Private groups, Corporate, The 8 hour day. Right: Experiences, Places to Pause, then Menu and the filled "Plan your day". The Table, Philosophy and everything else live in the menu. The header does not hide on scroll: over the hero it is transparent, after the hero it is a compact sand strip that stays. Phones: logo and Menu in the header, "Plan your day" in the sticky bottom bar only.

**CTA labels** (item 16, 17). Every in-page button that opens the funnel reads "Plan your day". "Book a discovery call" appears only where the calendar actually opens: the thank-you page button, and a small text link on step 1 of the funnel, "Rather talk first? Book a discovery call with Belle".

**Home, 12 moments** (item 5): 1 Hero. 2 Invitation to pause: "Restore. Reconnect. Realign." and about 40 words in Belle's words, including transformation (her word, review B1) and the sub-line. 3 The Fleurieu zoom: the five surrounding stills are the offer (yoga on a deck, the shared table, the plunge pool, a massage, the bath shot), the centre frame is not beach (the left pan across the hills or a Beresford vineyard frame), capped at 1,000px of scroll plus a 300px hold on desktop and 700px on phones, then three drive facts. 4 "An 8 hour day on the Fleurieu": the pinned example day with the time rail, Belle's line "(Note we can curate a personalised retreat to suit your group)", "See the full day" and "Plan your day". 5 Experiences (`PaneSlider`, posters only). 6 The Table, signature culinary experiences. 7 Places to Pause, image-led map. 8 Our difference: five items, with the ten pillar icons in a quiet row under difference 2 linking to `/philosophy`. 9 Proof, tagged by format, with "See past retreats" to `/gallery`. 10 Plan your day: the customise prompts. 11 Stay close: the journal slider, one line each for the Rising Tides Collective and the app, one email field. 12 Footer. Cut from home: the self-led slider, the compact pillars row, the two-panel app and Collective section.

**The Day page, 10 moments** (item 6): 1 one video, H1 naming the 8 hour immersive wellness retreat on the Fleurieu Peninsula. 2 forty words and the personalisation line. 3 the pinned example day. 4 the Beresford reel in its 9:16 frame beside the full schedule table, one moment. 5 the morning rotation (`SteppedGallery`). 6 the unhurried afternoon (self-led slider). 7 where it can happen (venue cards). 8 proof, full day reviews only, or a marked placeholder. 9 questions (`Accordion`), with "What is included" as one item. 10 `CtaBand` "Plan your day". No eight words on this page.

**PinnedDay** (items 3, 4). One real day: "An example day at Beresford Estate, 12 guests", from `content-seed/day.json`, with Belle's personalisation line. Beats: Arrive = steps 1 and 2; Move = steps 3, 5 and 6 (yoga or pilates, breathwork and meditation, the rotation); Nourish = steps 4, 7 and 8 (breakfast, refresh, the shared lunch); Restore = steps 9 to 11 (afternoon, closing, the drive home). Lunch copy is "Shared chef curated Mediterranean lunch provided by Beresford", no chef named. "12 : 20 AM" renders as 12:20pm and is logged for Belle. Panels slide in from the right and settle; nothing moves inside a settled panel. No rotated spines: a thin time rail across the top carries the example's times and the four beat names, and marks progress. Surfaces `--salt-25` and `--sand-30` only; Restore is a full-bleed venue photograph slot in late light with a local gradient under its text. Below 900px: a horizontal scroll-snap row of four full-width panels the visitor swipes (the slide from the right survives), with the rail above it. Reduced motion: a static stack. Section heading "An 8 hour day on the <span class="place">Fleurieu</span>".

**Facts** (items 7, 9, 10, 11). The Vineyard Retreat is `hidden` (Belle: "another one I'm gonna be partnering with"). No venue count in copy. On the map, one McLaren Vale marker opens a pane that lists every published vineyard venue. McLaren Vale is about 50 minutes from Adelaide (venue site); Deep Creek about 90 minutes (venue site); "90 to 120 minutes" is the airport transfer time only. No deposit or payment term publishes anywhere. No "member access opens in 2027" and no login reference. "Five star" appears only on Naiko venues, where a rating exists; Beresford is a "partner venue" until Belle confirms.

**Testimonials** (item 8). Every record gets `group_type` and `format` from what the review says (Wake Up to Wellness morning, Sunset Retreat, full day retreat, women's retreat, unknown). Attribution shows the format ("Corporate team, Wake Up to Wellness morning"). Full day proof shows only full day reviews.

**Drafted copy** (item 12). No drafted outcome promises in our voice. Where the site needs "how guests leave", use a real review line with its format. Use Belle's personalisation line instead of promising a pick-your-own menu of experiences.

**Mediterranean shape** (item 20, Belle decides, built so it can be switched off). The arch-topped swatch from style guide page 7 becomes the one frame shape, used in three places only: the two hero door images where present, the `/places` venue cards, and the three customise prompts, which replace The Tailor's overlapping rings. One custom property, `--arch: 999px 999px 0 0`, drives it, and setting it to `0` squares everything.

**Components** (items 18, 19, 22, 23, 25, 26, 27, 28). Customise prompts on `/enquire` and home moment 10 only; path pages and the Day page end on a `CtaBand`. The map on home, `/places` and the Fleurieu page only. No pillar icons on the doors. The map's venue name is 40px upright, not a large italic. Belle's eight words appear once, on `/philosophy` under "Restore. Reconnect. Realign.", as visible word and definition pairs (Empower included), never called pillars, never hover-only. Pillar pages publish only where evidence exists (Sleep and recovery at launch); the other "Discover more" links open that pillar on `/philosophy` via an anchor. `/corporate/fleurieu-offsite` is off the launch list. Name the local businesses behind the day (The Earth House and Spa, PEAQ Performance, Aromi Dining, Third Spaces, from the harvest) on experience tiles and team cards, and link difference 4 to them. "See past retreats" beside every proof section. No image drift on venue cards. Every media slot note carries the grading rule: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.

**Prototype gate** (item 13). Nothing goes to Belle until the hero, the zoom mosaic, the four Day panels and six or more experience tiles carry her real stills. This is for Jess; the build still ships with placeholders.
