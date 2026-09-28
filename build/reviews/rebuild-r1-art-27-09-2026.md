---
title: Rebuild round 1, art direction review
date: 27-09-2026 (walked 28-09-2026)
role: Luxury editorial art director
status: Internal. Not for Belle.
shots: qa/shots/rebuild/art-director/ (raw/ holds stepped screens, sheets/ holds contact sheets per page and width, media-candidates.jpg holds the lead photo shortlist, menu-open-1440.png)
---

# Rebuild round 1, art direction review

## What this review says

1. **The opening sets a bar that nothing below it meets.** From the second screen of the home page onwards, and on every inner page, the site returns to the old unit: a small tracked label, a headline on sand, and a photograph inset below it or set beside a text column. Every inner page opens with the same "headline left, sentence right, 16:9 photo inset below" block, which is the template tell Jess named.

2. **Photographs are still treated as thumbnails, and 97 empty frames sit on public pages.** The probe (`qa/shots/rebuild/art-director/probe.mjs`) found placeholders on 22 of 37 pages: 15 on /private-groups, 14 on /places, 13 on /experiences/full-day-retreat, 8 on /team, 8 on /gallery. With notes hidden they read as blank sand rectangles, which reads as broken, not as calm. Beresford Estate has no photograph at all.

3. **Every page ends the same way, twice.** A sand CtaBand ("Curate your 8 hour immersive retreat") then the footer motto band ("From chaos to calm") sit back to back on 23 pages with no image between them. The day, which the home page promises runs to dusk, ends on two flat sand panels.

The fix is a small shared vocabulary, built once by L1 and used by every lane. The patterns are below, then the findings by lane.

## The shared patterns (L1 builds, everyone uses)

All live in `src/components/base/`. Each has one authored motion, uses only `--ease-tide` and `--ease-settle`, and ships a complete static version for reduced motion.

```
 P1 Opener            P2 Offset pair         P3 Caption          P4 Handover          P5 Closing tide
 +----------------+   +--------+             Cormorant italic    frame  ->  bleed     +----------------+
 | Big            |   |  4:5   |  +----+     15px, sage-80,      [ inset ] [      ]   |  bath / dusk   |
 |   line over    |   |        |  |1:1 |     12px under the      clip opens as the    |  video, CTA    |
 |     the sea    |   |        |  +----+     image left edge     next image arrives   |  on its lower  |
 | caption  place |   +--------+  text       place, moment       or ground drifts     |  third         |
 +----------------+    runs across the gap                        sand-30 -> sand-60   +----------------+
```

### P1 `PageOpener.astro`, the inner-page opener

The Opening, simplified for inner pages. Full bleed, 100svh at 1440 (min 38rem), 88svh at 390. The heading in HV Muse at 72 to 88px (44px on phones), salt ink, broken by hand into two or three lines at three indents like `Opening.astro` (`op__line--1/2/3`). A soft local shade sits only behind the words (reuse the `op__shade` radial recipe, anchored to the corner the words sit in, never a full scrim). Bottom left, the page's one-line sentence in Jost 15px salt. Bottom right, a P3 caption naming the place. Motion: the image washes up from the bottom edge like the opening (clip `inset(100% 0 0 0)` to `inset(0)`, 1400ms tide), then on scroll the lines lift at three speeds (0.9, 0.75, 0.6) while the image settles from scale 1.06 to 1. Props: `media`, `lines[]`, `sub`, `caption`, `shadeAt` ('top-left' | 'bottom-left'), `video`. Replaces the `MediaBand text="below"` pattern and `pages/d/PageIntro.astro` as page openers.

### P2 `OffsetPair.astro`, the editorial pair

A tall 4:5 photograph on columns 1 to 6, a 1:1 detail on columns 8 to 10 dropped 120px lower, and the text block overlapping the large image's right edge by one column on a sand-30 ground so the words sit half on paper, half on the photograph's edge. Motion: the two images move at different scroll speeds (0.92 and 1.08), so the pair breathes apart by about 60px across the viewport. Phones: large image full width, detail inset 40vw at the right, overlapping the large image's bottom edge by 48px. Props: `large`, `detail`, `caption`, slot for text, `side`.

### P3 `Caption.astro`, the caption system

Cormorant italic 15px, sage-80, 12px under the image's left edge, a 24px hairline in sage-40 before it. Content is only the place or moment the site already states (for example 'Naiko Deep Creek, Fleurieu Peninsula', 'Arrive, 7am'). The home 8 hour day already does this. Make it one component and use it under every lead image.

### P4 `Handover.astro` and a `data-ground` hook, the section handover

Two handovers so sections stop stacking as rectangles. First, the frame opening: a section's closing image starts as an inset frame (`inset(0 8vw)`) and opens to full bleed as the next section's heading scrolls over its lower edge (the heading overlaps the image by 20vh on a sand-30 panel that rises over it). Second, the ground drift: sections declare `data-ground="salt|sand|warm"` and a ScrollTrigger interpolates `--page-ground` between them, so colour changes are a tide, never a hard edge. This removes every visible horizontal seam (the salt-25 and sand-60 panel edges now visible on /retreats, /experiences, /faqs, /our-story and most pages).

### P5 `ClosingTide.astro`, one ending for every page

Replaces `CtaBand` plus the footer motto. The home `PlanClose` already has the right material: a full-bleed loop of `bath-naiko-deep-creek.mp4` (or the still `headland-late-light-drone.jpg` for lighter pages), 80svh, with the page's closing line and 'Plan your day' in salt over a local shade on the lower third, then the footer begins directly on sand-60. Motion: the video frame opens from an arch (Belle's guide shape, clip-path `ellipse` top) to full bleed as it enters. The footer's "From chaos to calm, stress to serenity" moves into this band as the small italic line, so it is said once.

### P6 `SlideStrip.astro`, the Tailor slide-in

For any row of three to ten items (experiences, formats, venues, related experiences). Mixed widths (tall 3:4, square, wide 3:2 in a repeating five-beat rhythm), items enter from the right on scroll with 80ms stagger and 64px travel, drag and native swipe with snap, a P3 caption as the title. Replaces the four equal cards in "More experiences", the five narrow format cards on /retreats and the three venue cards.

### P7 Placeholder policy

In production view `Media.astro` renders nothing for a missing slot and adds `data-empty` to its parent, and every layout that holds an image reflows when that attribute is present (the text takes the full width, a pair becomes a single). Notes stay visible only with `?notes=1`. This is the single biggest quality gain available in a day.

## Findings, L1 Home and system

1. **Must. Inner-page opener.** Every inner page opens with headline on sand plus a 16:9 inset. Build P1 and hand it to every lane. Seed it with the three shade corners and the three-indent line split so lanes pass only copy and media.

2. **Must. Placeholders in public view.** 97 empty frames across 22 pages. Build P7 in `Media.astro` and the reflow hook in base layout CSS.

3. **Must. Double ending on 23 pages.** Build P5 and replace `CtaBand` plus the footer motto band site-wide. On home, fold `PlanClose` into it so home and inner pages end the same way.

4. **Must. Home 8 hour day.** The day after the opening is a 520px photo beside a timetable with a hairline, which reads as a form stepper, and the section starts with a screen of empty sand beside "An 8 hour day on the Fleurieu". Make the photo column full height and flush to the left edge (50vw by 100svh, no margin), crossfading hour photos: `deck-sea-guests.jpg` (Arrive), `deck-breathwork-sky.jpg` (Move), `long-table-overhead-group.jpg` (Nourish, wide crop centred on the table), `beach-dusk-drone.jpg` (Restore, replacing the dim `living-fire-sea.jpg`). Set each part name ('Arrive', 'Move') at 88px HV Muse so its first letters run over the photo's right edge in salt and the rest continues on sand in sage-80 (two copies of the word, each clipped to its side). Drive the P4 ground drift from salt-25 at 7am to sand-60 at 5pm across the section.

5. **Must. Home experiences gallery.** The pinned horizontal gallery floats 14 small images at random heights on empty sand, and the pin leaves a near-empty first screen ("Your retreat, your rhythm, your routine" cut off at the left edge). Rebuild with P6 at larger scale: first item `deck-stretch-sea.jpg` at 60vh tall, then a rhythm of 3:4, 1:1 and 3:2, all bottom-aligned to one baseline so the row reads as a horizon line, and the heading pinned at the left in 64px while the strip passes under its last word. Caption each with P3.

6. **Should. Places to Pause on home.** One arch, a list and a thumbnail map float in a wide sand field, and the list sits beside the photo rather than with it. Set three arches side by side at 28vw each (`coast-cove-house-drone.jpg` cropped to the house and cove for Deep Creek, `surf-rocks-from-above.jpg` for Encounter Bay until Belle sends Naiko At The Bluff, and Beresford's arch dropped per P7 until real vineyard photos exist), venue names in 56px HV Muse set across the arch bases. Each image moves at 0.8 speed inside its arch. The map becomes a full-width line drawing behind the arches at 12 per cent opacity.

7. **Should. 'Our difference' on home.** Five hairline rows of 30px Cormorant with small links on the right read as a feature list, and the direction doc already moved it off home. Remove it from home and let L4 carry the rows on /our-story, where the facts live.

8. **Should. Guests' words.** One centred quote floats on an otherwise empty screen above a lone '01 / 08' counter. Pair it with P2: `beach-walk-bright.jpg` at 4:5 on the left third, the quote at 32px Cormorant italic overlapping the image's right edge, and the quote changing by a horizontal tide wipe (clip from the right, 900ms). No food photos on quotes.

9. **Should. Header on inner pages.** Six inline links, Menu and the pill sit in one row at 12px over sand, so the top of every inner page is a nav bar before anything else. With P1 in place the header should run transparent over the photograph with only Menu, the wordmark and 'Plan your day' (the menu already carries the full list and is strong). Hide on scroll down, return on scroll up.

10. **Should. Menu preview image is soft.** The arch preview in the open menu renders a low width variant, visibly soft at 1440. Use the w1600 variant with `sizes="40vw"`. Also drop the italic hover on menu links, since italic is reserved for place names.

11. **Could. Opening sub-line box.** The salt box behind "8 hour retreats for private groups and corporate teams" at bottom left reads as a UI chip against the open sea. Remove the box, set the line in salt Jost 15px on the existing shade, aligned to the third heading indent.

12. **Could. Paper and grain.** Flat sand hex fields dominate every sheet. Add the 3 per cent fixed grain from the direction doc to sand grounds so deliberate space reads as paper.

## Findings, L2 Buyers' path

1. **Must. /private-groups and /corporate openers.** Headline on sand, sentence right, photo inset below. Use P1. Private groups: `table-three-women-sea.jpg`, crop 16:9 at 1440 from the upper two thirds so the three faces sit on the left third and the sea fills the right, heading 'Private group retreats' over the sea at top right. Corporate: `long-table-overhead-group.jpg`, cropped tight on the table (Belle asked to zoom up further), heading set over the green linen in salt, lines at three indents. Phones: portrait crops of the same images (the table shot as a 4:5 centre crop).

2. **Must. Placeholder squares in testimonials and venue cards.** /private-groups shows three blank testimonial squares (Sunset Reset photos not supplied) and two blank venue cards. Until photos arrive, set the testimonials as text only in a P2 arrangement with one real photo (`deck-stretch-sea.jpg`), and show venue cards without images per P7. /corporate pairs quotes with unrelated plates (tortelli, tuna); take the plates off the quotes.

3. **Must. 'Who it is for' dead screen.** On /private-groups the section renders a lone 'Who it is for' label in an otherwise empty 1440 by 900 screen before its content reveals. Start the reveal earlier (`start: 'top 85%'`) and anchor the paragraph in a P2 with `table-lemons-sea.jpg` large and `olive-oil-bread.jpg` as the detail, so the section has an image while the text arrives.

4. **Must. /retreats opener and format cards.** The opener crops `deck-sea-guests.jpg` to a grey-sky band. Use P1 with `bay-cliff-walk-drone.jpg` (the brightest summer frame), heading 'Retreat days for private groups and corporate teams' in three lines over the sky. The five narrow format cards at 170px wide with 12px text become a P6 strip, each card at least 28vw, with the format name at 32px over the lower edge of each photo.

5. **Must. /experiences/full-day-retreat.** This is the product page, and it runs 12,763px of sand with four inset photos and two long timetables (the schedule appears twice: the day section, then 'See the full schedule'). Open with P1 using the drone clip `naiko-deep-creek-drone-pan.mp4` (poster `naiko-deep-creek-drone-pan-poster.jpg`), heading 'The 8 hour immersive retreat'. Use L1's rebuilt 8 hour day component, and collapse the full schedule into one accordion under it. The four stat cells ('8am to 4pm', '7am to 5pm') become a single line of P3 captions under the opener.

6. **Should. The morning rotation slider.** A small massage photo beside a list, with a thin progress rail. Rebuild as three full-height panels that slide in from the right (P6 at 70vw per panel): `massage-towel-rest.jpg`, `barrel-sauna-cliff.jpg`, `bowls-hands-overhead.jpg`, each station name at 56px across the photo base.

7. **Should. /enquire.** The best-behaved page, but it is a form on flat sand with arch outlines. Give the right column one real arch with `table-lemons-sea.jpg` inside at 0.85 parallax, and let the three prompt arches become captions below it. The Continue button follows the pill spec.

8. **Should. /enquire/thank-you.** A blank 4:5 placeholder where Belle's portrait belongs. Until the portrait arrives, use `bath-window-sea.jpg` in an arch with a P3 caption ('Naiko Deep Creek'), and the thank-you set beside it at 88px.

9. **Should. /gift-cards.** `gift-box.jpg` is flat and grey on concrete, and it leads the page. Lead with a type-led opener (heading at 88px on salt, no image), and set the gift box as a small P2 detail beside the terms, paired with `olive-oil-wine-bread.jpg` as the large image.

10. **Should. /waitlist.** `beach-cliff-sun-seated.jpg` is backlit and dark for the brand. Use P1 with `beach-walk-bright.jpg` cropped wide from the top half (sky and sunlit sand), and set the three waitlists as three tall panels in a P6 strip instead of stacked form cards.

11. **Could. /404.** The overcast `hills-coast-drone-wide.jpg` inset with salt type is close to the right idea. Make it full bleed P1 with `surf-rocks-from-above.jpg` (bright, top-down tide), keep the line 'This page has drifted', and animate a slow 20 second drift of the image.

12. **Could. FAQ and guide block on audience pages.** The guide card sits in a white box beside the FAQ like a sidebar widget. Remove the box, set the guide as a single line with a text link under the FAQ heading.

## Findings, L3 Experiences, places, food

1. **Must. /experiences opener.** `deck-stretch-sea.jpg` is a strong image but inset under a headline. Use P1 with it full bleed, cropped so the figure sits on the right third and the sea runs behind, heading 'The experiences' over the sea at top left.

2. **Must. /experiences/[slug] layout.** Every detail page is a 520px photo on the left and a spec table on the right, which is the most template-like block on the site. Use P1 with the experience's lead image full bleed and the name at 88px over it (yoga: `deck-breathwork-sky.jpg`; sauna: `barrel-sauna-cliff.jpg` cropped so the barrel sits left of centre with the sea right; pasta making: `chef-kitchen-guests.jpg`; massage: `massage-towel-rest.jpg`; coastal hiking: `trail-trees-sea.jpg`; ocean swimming: `beach-walk-bright.jpg`). The spec rows ('In the day', 'With', 'Pillar') become P3 captions under the opener.

3. **Must. Placeholders on experience pages.** Yoga shows three blank practitioner squares, massage and coastal hiking show blanks. Per P7, show practitioner names as text rows until portraits arrive.

4. **Must. Beresford Estate has no photographs.** The page is text, a spec grid and blank slider frames. Lead with a type-led P1 variant (heading at 88px on sand-30, P3 caption 'Blewitt Springs, McLaren Vale') and remove the slider until Beresford's images arrive. Ask Belle for the Beresford Accom set through `build/questions-for-belle-26-09-2026.md`.

5. **Must. /places/naiko-deep-creek opener.** The bath interior (`bath-video-poster.jpg`) is grey in a 16:9 inset. Open with the drone clip `naiko-deep-creek-drone-pan.mp4` in P1 (the brief names it for this page), heading 'Naiko Deep Creek' over the sky. Move the bath video to a P4 frame opening mid-page, so the page goes from coast to bath, the order a guest experiences it.

6. **Should. /places opener and venue cards.** The opener crops the sauna barrel into the corner of a cliff shot. Use P1 with `coast-cove-house-drone.jpg` (the 10 out of 10 frame), heading 'Places to Pause'. The three venue cards become arches (the direction doc's signature), one per venue, matching L1 finding 6.

7. **Should. The spec grid on venue pages.** A five-cell data table ('Setting', 'Sleeps') under the opener reads like a listing site. Set the facts as one line of P3 captions separated by thin sage-40 dots.

8. **Should. /food opener and the menu accordion.** The opener insets `table-lemons-sea.jpg`. Use P1 with `long-table-overhead.jpg` in a wide crop from its centre (plates, lemons, linen), heading 'The flavours of the Fleurieu' over the linen. The sample menu accordion reads like an FAQ: set each course as a menu card on salt with the dish names in Cormorant 22px, paired with one plate photo per course (`tortelli-plate.jpg`, `kingfish-plate.jpg`, `tuna-plate.jpg`) sliding in from the right.

9. **Should. /food 'Signature culinary experiences' and meal moments.** The chef section is a square photo beside a CV block, and the meal moments panel is a white box plus two narrow images. Use P2: `chef-pouring-oil.jpg` large, `kingfish-plate.jpg` detail, and turn breakfast, refreshments and lunch into a P6 strip.

10. **Should. /experiences 'The unhurried afternoon'.** Six small images scattered at random heights with large gaps. Use P6 bottom-aligned, or a 2 by 3 editorial grid with one tall image spanning two rows (`trail-trees-sea.jpg`).

11. **Should. /fleurieu-peninsula-retreats.** Three placeholder videos (dolphins, seals, whales) and a Belle portrait leave blank frames, and the 'wild side' row is a strip of small squares. Per P7 drop the empty items, and set the three real images (`kangaroo-paddock.jpg`, `surf-rocks-from-above.jpg`, `trail-trees-sea.jpg`) as an offset trio at 4:5 with P3 captions. Opener P1 with `bay-cliff-walk-drone.jpg`.

12. **Could. 'More experiences' rows.** Four equal cards at the end of every experience page. Use P6 so the row reads as a continuation of the day, not a related-posts widget.

## Findings, L4 Story and proof

1. **Must. /our-story has one photograph across eight phone screens.** Long text columns on sand, with four placeholders (family images, Sardinia, hosts) hidden. Open with P1 using `surf-rocks-from-above.jpg` (the tide from above, which is what la marea means), heading 'Our story'. Break Belle's note and 'Growing up on the Fleurieu' with two P2 pairs: `beach-walk-cliffs.jpg` large with `kangaroo-paddock.jpg` detail for the Fleurieu childhood, `table-lemons-sea.jpg` with `olive-oil-bread.jpg` for the Mediterranean part. Set 'A note from Belle' as a letter: Cormorant 22px, 34rem measure, the first line in italic.

2. **Must. /team portraits.** Eight portrait placeholders, only Luca real. Until Belle sends portraits, set the team as a typographic list (names at 44px HV Muse, roles in Jost) with `luca-guiotto.jpg` as the one image in an arch, and keep the opener as P1 with `breathwork-verandah.jpg` (currently cropped to a man's legs and torso; recrop to the facilitator and the verandah). Ask Belle for portraits.

3. **Must. /gallery is mostly empty frames.** Eight placeholders make the page read as broken. Show only real images now, in an editorial masonry of mixed ratios (`mats-glass-room-sea.jpg`, `long-table-overhead-2.jpg`, `coast-cove-house-drone.jpg`, `table-three-women-sea.jpg`, `beach-dusk-drone.jpg`), and hide retreat entries with no photos per P7.

4. **Must. /journal cover moment.** A left-aligned 330px portrait of `rest-eyes-closed.jpg` and two blank cards. Make the featured story a magazine cover: `rest-eyes-closed.jpg` full bleed at 90svh, cropped on the face and white top, the title set over the bright wall area at 64px in sage-80 (the image is light enough to carry dark ink), a P3 caption with date and reading time. Posts with no image render as type-led cards.

5. **Must. /philosophy pillar icons.** The ten icons at 40px in a row read as a toolbar, and Belle asked for bigger pillars. Set them as a vertical sequence of ten full-width rows, each icon at 120px in sage-40, pillar name at 64px and one line of description, each row sliding in from the right. Or use L1's marquee as the pause between sections.

6. **Should. /philosophy opener.** `bay-cliff-walk-drone.jpg` inset under 'Our philosophy'. Use P1 with it full bleed, the walker kept in the bottom right third and the heading over the sea.

7. **Should. /philosophy/[pillar].** The sleep pillar opens with the grey bath still and then a long references list. Open with P1 using the bath video (`bath-naiko-deep-creek.mp4`, the calmest clip on the site), heading 'Sleep and recovery'. Move the references into a closed accordion near the foot.

8. **Should. /team/[slug].** Belle's page has no portrait and a 110px workshop thumbnail under 'What Belle leads'. Until the portrait arrives use a type-led opener, and set what each person leads as a P6 strip of experience images at full size.

9. **Should. /journal/[slug] article.** The sticky sidebar repeats the full table of contents on every screen and the body images sit at column width. Let one image per article break out to full bleed (the bath still in the sleep article), give the article a P1 opener, and shorten the sidebar to 'In this story' plus the current heading.

10. **Should. /rising-tides-collective.** The sunset still (`beach-dusk-drone.jpg`) is a good choice but inset. Use P1 with it full bleed. The 'What members receive' rows carry 60px thumbnails; drop them and pair the section with a P2 (`pasta-lemons-overhead.jpg` large, `long-table-overhead-2.jpg` detail).

11. **Should. /app.** A blank placeholder fills the right half of the opener. Make it type-led (the heading at 88px centred on salt with the form beneath), no image until Belle supplies an app visual.

12. **Could. /faqs opener.** `beach-cliff-sun.jpg` is backlit and busy beside the heading. Use a type-led opener with a P3 caption, then the category index as large 44px HV Muse words that scroll to each group.

## Motion, one authored idea per section

The site currently fades or line-reveals almost everything the same way. After this round each section declares one move from this list, and no two adjacent sections share a move.

```
 tide wash in       opener images, closing tide        clip from bottom, 1400ms tide
 frame opening      handovers, bath video              inset(0 8vw) -> inset(0), scrubbed
 slide from right   strips, rotation panels, quotes    64px travel, 80ms stagger, settle
 speed split        offset pairs, arches               0.8 / 0.92 / 1.08 parallax
 ground drift       whole page                         --page-ground interpolated, scrubbed
 line lift          headings over photographs          three speeds, as the opening does
```

## Media notes

- The public files top out at 2000px wide (`coast-cove-house-drone.jpg` is 2000 by 1125). At 1440 on a 2x screen, full bleed softens them. Regenerate lead images from `media-pool/full/` at 2880 wide with `site/scripts/media-variants.mjs` before P1 ships.
- Brightest leads, in order: `coast-cove-house-drone.jpg`, `bay-cliff-walk-drone.jpg`, `surf-rocks-from-above.jpg`, `table-three-women-sea.jpg`, `long-table-overhead.jpg`, `deck-stretch-sea.jpg`, `beach-walk-bright.jpg`. Keep `living-fire-sea.jpg`, `beach-cliff-sun-seated.jpg` and `gift-box.jpg` out of lead positions.
- The two unused DJI_0604 passages the brief names (0 to 25 seconds, 54 to 62 seconds) should be cut for the /retreats and /fleurieu-peninsula-retreats openers.
