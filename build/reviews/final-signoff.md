---
title: La maréa final sign-off, creative direction and QA
date: 26-09-2026
author: Final sign-off reviewer
status: Internal, for Jess. Not for Belle.
voice-verbatim-source: Belle Redden, `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt`. Double quotes mark her words.
read: build/00 section 4, the transcript, reviews/cd-review-02-built-site.md, reviews/qa-01-technical.md, notes/shared-edits.md, notes/requests.md
method: `npx astro build --outDir /tmp/final-dist` (61 pages, exit 0), served with http-server on port 4490, Playwright Chromium. Overflow and cropped-text scan of 59 public pages at 12 widths (320, 360, 390, 412, 768, 800, 1024, 1180, 1280, 1440, 1600, 1920). Stepped viewport captures, notes on and off, of home and the Day page at 1440 and 390, home at 768 and 1600, 15 more pages at 1440 with notes off and six at 390 with notes on. Scripted runs of every interaction, the funnel end to end at 390, 800 and 1440, CLS over 30 loads of `/enquire`, 829 Tab stops under the phone bar, reduced motion, pixel-sampled contrast, and static lint over the built HTML, CSS and JS. Two fixes made, then rebuilt and re-verified.
---

# La maréa final sign-off

## Verdict

Ready for Jess to add Belle's media, and ready to show Belle once the hero, the mosaic, the four Day panels and the first six experience tiles carry her stills and the walkthrough build runs with the notes layer off. Every Must from CD review 02 that the build team could act on is fixed, all three QA majors are closed (M2 needed one more line, made here), and nothing scrolls sideways at any width from 320 to 1920. The site now reads light and calm with the notes off, which is what Belle asked for ("light and bright and, you know, more summery"). What stays open is either Belle's content (feeling lines for the experience tiles, a full day review, the True South line), Jess's call (the header, the walkthrough gate), or Dom's backend (the enquiry endpoint).

## Pass or fail by area

| Area | Result | Notes |
|---|---|---|
| CD review 02, Musts 1 to 8 | Pass, with item 2 open for Jess | 1, 3, 4, 5, 6 and 7 verified. Item 8 was still failing in Chromium and is fixed here. Item 2 is the walkthrough gate, a Jess decision (see remaining issue 1) |
| CD review 02, Shoulds 9 to 24 | Pass on 14 of 16 | 13 (header) left for Jess by design. 11 is built, the lines themselves wait on Belle |
| QA 01, 3 majors | Pass | M1: 0 of 829 focus stops covered. M2: fixed here, 0.000 CLS in 30 loads. M3: hero and card text now 7.4:1 to 10:1 |
| QA 01, 16 minors | Pass on 15 | m9 (a 405 in the console on submit) stays until Dom's endpoint exists |
| Content against the transcript | Pass | Every section she named has a home; her words carry the headings; Empower present wherever the eight words appear |
| Copy lint | Pass | 0 em or en dashes in HTML, CSS, JS, text or XML. 0 uppercase transforms. Every banned-word hit is verbatim guest, partner or Belle copy |
| Structure and navigation | Pass | Header at every width, menu dialog traps and returns focus, skip link, footer links, slim header and footer on `/enquire` |
| CTAs | Pass | Every "Plan your day" on all 61 pages is a link to `/enquire` (none is a button or goes elsewhere). The two "Book a discovery call" links both open Belle's Google calendar in a new tab and nothing else does |
| Visual design and imagery placeholders | Pass | Every placeholder tone light, sage ink over placeholders, no dark field anywhere. Notes off hides every "To come" box, flag and gap block |
| Typography | Pass | Italiana, Cormorant and Jost only. Numerals in Cormorant. Sentence case throughout |
| Responsiveness 320 to 1920 | Pass | 0 horizontal overflow on 708 page and width combinations, including 768, 800 and 1600. Cropped-text hits were all mid-animation reveals or intended slider peeks, checked by eye |
| Mobile | Pass | Hero on sand under the video, Day swipe sized to the panel in view, sticky bar never covers focus |
| Interactions | Pass | Zoom mosaic hands over to the three drive facts at 390, 768 and 1440. Pinned day arrives from the right in order. Pane slider, self-led slider, pillars flex row, venue filter and panel, map arrows and pills, testimonial and journal tabs, team tabs, expand tiles and accordions all respond and keep their ARIA state |
| Funnel | Pass | Seven steps, inline error on an empty step, corporate label on step 2, prefills, tile click selects on step 4, thank-you summary, guide link per audience |
| Reduced motion | Pass | No pin spacers, no infinite animations, the Day renders as a stack and the mosaic as its opening composition |

## What I fixed

Both are logged in `build/notes/shared-edits.md`.

1. **Black arch corners (CD item 8).** The sand background added earlier did not cure it. The first venue card still showed two black squares above its arch whenever it scrolled into view at 1440 and 390, on `/places`, `/private-groups` and the Day page. I traced it to the grain's multiply blend compositing through the rounded clip while the tide drifts. One rule in `VenueIndex.astro` isolates the placeholder, which has an opaque background, so the look is unchanged. Black sample points went from 818 to 0 on both pages.
2. **Funnel layout shift (QA M2).** Still intermittent: `/enquire/?audience=corporate` at 390 scored 0.48 in two of three loads, because Chromium sometimes painted before the inline script chose the step. One rule in `Funnel.astro` keeps the actions and aside hidden until that script has run. After the rebuild: 0.000 in 30 loads across five entry URLs, and the funnel still runs end to end at three widths.

## Remaining issues, by severity

1. **The walkthrough gate (CD Must 2, Jess).** Nothing should go to Belle until the hero, mosaic, four Day panels and first six experience tiles carry her stills. The notes layer is on by default and there is no URL switch, so the walkthrough build needs `mediaNotes` set to `'off'` in `site/src/layouts/Base.astro`, or a query toggle added.
2. **The enquiry does not reach Belle yet.** The form posts to `/api/enquiry`, the static host answers 405, and the answers stay in the visitor's browser. The thank-you page handles it cleanly with notes off, but a real lead would be lost. Dom's Pages Function and the Supabase insert are needed before any public link. The console shows one 405 on submit until then.
3. **The header still reads as The Tailor's (CD Should 13).** Left for Jess to choose between the two options in CD review 02 before anyone changes it.
4. **Experience tile lines (CD Should 11).** Tiles are 332px wide at 1440 now and the placeholders hide with notes off, but Sauna shows a name with no line, several lines are still schedule text, and three tiles have no named practitioner. All ten feeling lines need to come from Belle in one message.
5. **Safari is unverified.** The arch fix and the pinned day were only checked in Chromium. One pass in Safari on a Mac and an iPhone before Belle sees it.
6. **Verbatim copy that will read oddly (Belle decides, add to `build/questions-for-belle-26-09-2026.md` if missing).** Luca Guiotto's bio opens in partial capitals ("ITALIAN FLAVOURS WITH A CONTEMPORARY TWIST") on `/team`, his page and his page's meta description. FAQ 1 links the capitalised word "HERE". The team page says "In 2026 we are looking to explore partnerships", which dates quickly. Kristian Ryan's bio still calls him "Chris".
7. **Day page repetition, smaller now.** The full schedule sits in an accordion, but the morning rotation still gets its own section after the panels, so 10am to 12:20pm is told twice. Subjective; worth a look once the rotation photographs exist.
8. **Notes layer only.** On phones the note on "The unhurried afternoon" band sits tight against the "2pm to 3:45pm" label. Harmless with notes off.
9. **Small design notes from CD review 02 section E that were not on the fix list.** The mosaic's three fact cards are still plain white boxes, and inset tiles in the experiences slider carry no numeral while their neighbours do. Neither blocks the walkthrough.

## Checked and closed from the earlier reviews

CD review 02: light placeholder tones and sage ink (1), venue copy rewritten as plain facts with no "unparalleled", "nestled", "oasis", "world-class" or "elevated" (3), the Naiko bushfire line held back in the notes layer only (4), descriptors reduced to group type and format (5), True South and thank-you boxes hidden with notes off (6, 7), arch corners (8, fixed here), Nourish rail reads "9am and 12:30pm" and the phone swipe fits the panel in view (9), schedule in a "See the full schedule" accordion, empty proof hidden, the Justin Kurenda line under the panels (10), no closing heading repeats "on the Fleurieu" more than the three recipe pages and six self-led pages share (12), text tabs with an underline and journal chips moved under the date (14), Cormorant numerals (15), one email capture on home (16), slim footer on `/enquire` and whole-tile targets on step 4 (17), eyebrows that repeated headings removed (18), home runs on sand with one salt section (19), the name story on `/philosophy` only and the `/our-story` opening restored (20), journal shows the featured post and one slider (21), map at about 40 per cent on `/places` with a larger inset on phones (22), Belle in a line above the practitioner row (23), tablet widths covered in this pass (24).

QA 01: M1, M2, M3, and m1 to m8 and m10 to m16, each re-tested in the built site. Home now publishes Organization only, experience pages use Service, the Day page TouristTrip; JSON-LD URLs carry the trailing slash; the 404 has no canonical; one h1 and no skipped levels on every public page.
