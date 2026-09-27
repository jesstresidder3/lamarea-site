---
title: La maréa website build, orchestration brief for every agent
date: 24-09-2026
status: Internal. Read this file in full before any other file. Not for Belle.
---

# La maréa website build, orchestration brief

Every agent on this build reads this file first, then the files named for its role. The project root is `Outputs/work/clients/belle-redden/lamarea-website/` inside the repo at `/home/user/jess-workspace`. All paths below are relative to that root unless they start with `/`.

## 1. What we are building

A custom website for La maréa, Belle Redden's (Annabelle Buttery) luxury coastal wellness retreat business on the Fleurieu Peninsula, South Australia. It replaces her Wix site at lamarea.com.au. The commercial job of the site is booked discovery calls that turn into 8 hour immersive full day retreats for private groups and corporate groups. Everything else is supporting cast.

The site has to feel like a story as you scroll, a series of moments rather than a list of inclusions: two audience paths early (private groups and retreats, corporate), then the day unfolding through Belle's own arc, Arrive, Move, Nourish, Restore, with the photography and drone footage doing as much of the storytelling as the copy. It ends in a stepped enquiry funnel that asks one question at a time, then offers the discovery call. A simple formats menu exists for people who want to browse. Aim: less "here is what is included", more "this is what your day could feel like".

## 2. Source hierarchy, in this order, every time

1. **Belle's transcript** is the primary source of truth. `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt` (the same words are in `_context/belle-brain-dump-14-09-2026.md` with headings). Read it in full. Her words beat every other document when they conflict, except where following them would publish something false or legally risky, in which case we flag it rather than silently change it.
2. **Emails and correspondence**: `_context/project-brief-shared.md`, `research/02-correspondence-record.md`, `research/01-source-docs-extract.md` (her meeting with the other agency, where she was told most of what she wants was impossible on Wix).
3. **Plans**: `_context/requirements-register.md` (the numbered spine, IDs like A1, O6), `plan/11-master-site-plan.md`, `plan/12-qa-coverage-audit.md` (its Part 6 fixes are approved for this build), `plan/10-technical-architecture.md`, `STATE-OF-PLAY.md`.
4. **Reference sites**: The Tailor, Aman, COMO Shambhala first. `research/04-reference-teardown-tailor-aman-como.md` and `research/05-...` hold measured specs. The reference sites inform the aesthetic. The transcript tells us what La maréa needs. Do not let the site drift into a generic luxury hotel or wellness template.
5. **Brand**: `_context/la-marea-design-style-guide.pdf` (by Ponder Designs), extracted into `assets-brand/`.

## 3. The team

| Role | Output | Reads |
|---|---|---|
| Transcript and requirements analyst | `build/01-creative-brief-transcript-first.md` | Everything in section 2, transcript first |
| Reference site researcher | `build/02-reference-visual-study.md` plus screenshots in `build/reference-shots/` | This brief, the transcript, research/04 and 05, then live browsing |
| Content harvester | `build/03-content-harvest.md` plus `build/content-seed/*.json` | This brief, the transcript, the live lamarea.com.au site, the two Google Drive retreat links |
| Creative director and reviewer | `build/reviews/*.md` | Transcript first, then emails and plans, then references, then the running site |
| Design system and foundation builder | `site/` foundation, components | Brief, creative brief, visual study, build spec |
| Page builders | Assigned pages in `site/src/pages/` | Same, plus their page spec |
| QA agent | `build/reviews/qa-*.md` | The running site at every width |

## 4. Non-negotiable rules for every agent

- Australian English. -ise, -our. No Oxford comma by default.
- **Zero em dashes anywhere**, in copy, code comments, markdown and alt text. Use a comma or a new sentence. En dashes in number ranges are also out, write "10 to 14".
- **No uppercase transforms.** No `text-transform: uppercase`, no all-caps labels or headings in the site. Small labels are sentence case with letter-spacing. This overrides the reference sites, which all use uppercase eyebrows.
- Dates DD-MM-YYYY. Filenames title first, date last if dated.
- **Never invent a fact.** No invented testimonials, names, prices, durations, awards, capacities, producer names or quotes. Where content does not exist, render a clearly marked placeholder that says what goes there and where it comes from. Belle's own words are used verbatim and cited in the content files.
- Banned words in any copy we write (Belle's verbatim source text is exempt): journey, unlock, leverage, game-changer, revolutionise, ecosystem, landscape (as metaphor), sanctuary, haven, honest/honestly, actually, genuinely, stuff, seamless, elevate, curated experiences as filler, nestled, indulge. Banned structures: "It's not X, it's Y", "not just X but Y", question-then-answer, rhetorical questions, staccato three-word fragments for drama, rule-of-three padding, stated moral endings.
- Belle's own pillar word **Empower** must appear wherever her eight words appear. A previous tool stripped it. Check for it.
- Motion is soft. "nothing sort of bouncing... it's all very soft and relaxing." No spring or overshoot easing. Every animation has a `prefers-reduced-motion` fallback that shows the finished state.
- No horizontal scroll at any width from 320px to 1920px. No content cropped at any width. Margins scale fluidly, not in breakpoint steps.
- Banned fonts: Syne, Manrope, Playfair, Inter, Poppins, Roboto, Arial.

## 5. Locked build decisions (made by the orchestrator, reversible, all flagged to Jess)

1. **Stack**: Astro 5, static output, hand-written CSS with custom properties, no UI framework. Content collections for venues, experiences, pillars, people, journal, testimonials, formats, FAQs. GSAP plus ScrollTrigger only for the pinned 8 hour day (T3). Everything else is CSS plus a few hundred lines of vanilla JS. Deploys later to Cloudflare Pages per plan/10.
2. **Colour, from Belle's style guide** (page 7). Belle wants soft sand as the dominant background and sage for wording and headings, light and bright, moving away from green as the base.

   | Token | Hex | Use |
   |---|---|---|
   | `--sand-30` | `#F8F3E4` | Dominant page background (the guide's "Sand primary shade 30%") |
   | `--sand-40` | `#F4EAD3` | Alternate warm bands |
   | `--sand-60` | `#EFE0C0` | Occasional deeper band, cards |
   | `--sand-100` | `#E6D6A4` | Sand 100%, Pantone 468CP. Accents only, never body background |
   | `--salt-25` | `#FAF9F5` | Lightest surface, cards on sand |
   | `--salt-100` | `#E9E5D6` | Salt 100%, Pantone 7527CP, hairlines and quiet bands |
   | `--sage-100` | `#433D1B` | Sage 100%, Pantone 7771CP. Body text (9.85:1 on sand-30) |
   | `--sage-80` | `#635B39` | Headings and links (6.13:1 on sand-30) |
   | `--sage-60` | `#7D7455` | Secondary text on light surfaces only if it passes 4.5:1 at its size |
   | `--sage-40` | `#AAA38B` | Logo tint, rules, icons, decorative only. Fails as text (2.28:1) |
   | `--sage-20` | `#CBC6B7` | Hairlines, placeholder textures |

   Dark or sage-filled bands are allowed sparingly for image-led moments and the reversed logo, never as the base.
3. **Type**. The brand face is **HV Muse** (commercial, web licence not established). The build uses **Cormorant Garamond** (400, 500, italic 400) as a labelled stand-in for display type, and **Jost** (300, 400, 500) for body and small labels, which sits close to the guide's Geosans Light and Avenir Next. Self-hosted via @fontsource. Swap to HV Muse by changing one custom property once Belle confirms the licence. Scale follows Belle's "nice, small, luxury fonts": Aman sizes rather than oversized hero type. Body 16px at 1.6. Small labels 12 to 13px, sentence case, tracking about 0.14em. Section headings roughly 30 to 44px with one italic emphasis word allowed, in The Tailor's manner. Display lines never above about 64px except the hero line.
4. **Logo and icons**: real vectors extracted from the style guide are in `assets-brand/` (`logo-primary.svg`, `logo-tagline.svg` "luxury coastal wellness reimagined", `submark-lm.svg`, `submark-circle.svg`, and ten pillar line icons in `assets-brand/icons/`). All use `currentColor`. Use them. Never redraw the logo.
5. **Pillars**. Three sets exist (register T, plan/11 decision 1). The transcript refers to "our key sort of pillars that I've put together in our philosophy" on the current site, to "my branding pillar videos... nutrition and food, movements, nature immersion" and to "my personalization pillar". The style guide's ten icons are the same ten: Nutrition, Movement, Sleep and recovery, Psychological wellbeing, Nature immersion, Connection, Balance, Personalisation, Evidence-based lifestyle wellness education, Luxury (and heartfelt hospitality). **Build choice**: the ten are the philosophy pillars, each with its icon, a video slot, a short line and a "discover more" page for the science and references. Belle's eight words from her wording ideas (Release, Reconnect, Restore, Realign, Educate, Empower, Ground, Nourish) carry the transformation she describes ("leave feeling different, lighter, calmer, empowered, educated, and just really rested") and appear as the eight intentions of a La maréa day. Belle still makes decision 1. The data model lets either set lead.
6. **Names**. Venues: "Places to Pause" (her own wording idea, "Places to Pause and Reconnect"). The 8 hour flagship: "The Day", which is also its nav label. Formats hub: "Retreat formats". Experiences: nav label "Experiences", section heading her own "Your retreat, your rhythm, your routine". Food: "The Table", with her idea carried as "the flavours of the Fleurieu". The four-beat walk-through is headed "Arrive. Move. Nourish. Restore."
7. **"South Australian first"**. Belle asked for it twice. It is held back from public claims because a competitor already sells curated private and corporate wellness in SA and an unprovable "first" is a misleading representation risk under Australian Consumer Law (register V). Her five differences appear verbatim instead, and the Our story page carries a placeholder for her first-person note about starting this on the Fleurieu. Flag, do not bury.
8. **CTA wording**. Header and buttons: "Plan your day" to `/enquire`. The flagship section, the funnel end and the thank-you page: "Book a discovery call" to Belle's booking link `https://calendar.app.google/jiKYpzKFiG5XZV9x9`. Belle chooses the final phrase (decision 15).
9. **Media placeholders**. Jess has Belle's photos and video and will add them later. Every image and video slot renders from one media manifest (`site/src/data/media.ts`) keyed by a slot id, carrying type, aspect, alt, the suggested source asset from Belle's inventory (for example `DJI_0781.MP4`, bird's eye along the coast, slowed), and notes. An empty `src` renders a designed placeholder in brand tones with a small caption naming what goes there. Swapping in real media is filling in `src` and `poster`. Placeholders must still look intentional and luxurious at a glance, never grey boxes.
10. **Pricing** is not published (plan/11 decision 4). The data model has a nullable `price_from`.
11. **Enquiry funnel** is a real front-end stepped form (plan/11 Part 5, seven steps) that posts to `/api/enquiry`. The Cloudflare Pages Function and Supabase write are Dom's. The front end ships with a stub that stores answers in `sessionStorage` and routes to the thank-you page, with the payload shape documented for Dom.

## 6. Output locations

- Research and planning docs: `build/`
- Reference screenshots: `build/reference-shots/` (internal reference only, never used on the site)
- Reviews: `build/reviews/`
- The site: `site/` (Astro project). Run `npm run dev` or `npm run build && npm run preview` inside `site/`.
- Nothing from the reference sites (images, video, copy, fonts, code) is copied onto the La maréa site. We take mechanics, proportion and restraint.

## 7. Reporting back

Write findings to your assigned file. Return a short summary to the orchestrator (under 300 words): what you produced, the three most important findings, and anything that blocks the next step. Do not paste the full file back.
