---
title: Design review, local media pass
date: 27-09-2026
author: Design reviewer
status: Internal, for Jess. Not for Belle.
method: Every public page captured with the notes layer off, stepped one viewport at a time down the page, at 390 and 1440, and home plus 29 main pages again at 768, 1024 and 1920. Section and single-frame captures for the details. Checked against Belle's transcript (T27, T30, T31, T32, T33, T53, T57), her questionnaire, the style guide and the moodboard. After the edits, the site was built to `/tmp/lm-dist-design`, served on port 4398 and captured again. Heading order and text contrast were checked by script on all 59 public pages, and horizontal overflow at 11 widths.
screenshots: before in `qa/shots/design/` (contact sheets `<page>-<width>-sheet.N.jpg` and single frames `x-*.png`), after in `qa/shots/design/after/` and `qa/shots/design/after-*.png`
---

# Design review

## Summary

Belle's photos changed the site from sand frames to real imagery, and most of it now holds up. The problems were in the places where the old build assumed an empty light frame: white text laid over bright photographs, a few dark sage blocks that now read heavy beside sunny images, and empty slots that looked broken next to real photos.

22 issues found, 22 fixed. Three items are left for Jess or Belle to decide (end of this file).

The five most visible changes:

1. **"Our difference" is image-led.** On desktop a large photograph holds still while Belle's five lines pass, and each line brings in its own photo. On phones it is a swipeable row of photo cards.
2. **No dark blocks left.** The phone sticky bar, the header button, every filled button and the menu's side column are now sand with sage ink.
3. **Empty slots read as designed.** With notes off, a slot still waiting on a photo shows a quiet sand panel with the lm submark, photo-only bands step aside, and empty venue heroes are shorter.
4. **Words over photographs are legible.** The Restore panel sits on a sand glass panel, journal titles moved beneath their photos, and page heroes and the header got a soft local glow.
5. **Quieter type.** Every heading size came down a step for HV Muse, closer to the "nice, small, luxury fonts" Belle asked for (T27, T57).

## Issues and fixes

Paths are under `site/src/` unless they start with `qa/` or `build/`.

### 1. Phone sticky bar was a dark sage band

- Page and width: every page, 390 (all widths under 760).
- Before: `qa/shots/design/home-390-sheet.0.jpg`. A full-width sage 80 bar sat across the bottom of every phone screen, the heaviest thing in view.
- Fix: `components/layout/StickyCta.astro`. Sand 60 at 96 per cent with a light blur, a sage 40 hairline on top and sage 100 ink (8.6:1). The arrow nudges on tap.
- After: `qa/shots/design/after/home-390-sheet.0.jpg`. The bar reads as part of the sand page.

### 2. Header "Plan your day" and every filled button were dark blocks

- Page and width: every page, 768 and up (header), all widths (form submits).
- Before: `qa/shots/design/home-1440-sheet.0.jpg`.
- Fix: `styles/utilities.css`, `.btn-filled`. Belle's sand (Pantone 468, `--sand-100`) with a sage 40 hairline and sage 100 ink (7.6:1). Hover and press deepen to sage 80 with sand ink.
- After: `qa/shots/design/after/home-1440-sheet.0.jpg`. Still clearly a button, and light over photos and sand alike.

### 3. Menu side column was sage 80

- Page and width: menu overlay, 1024 and up (the column is the contact block on phones).
- Before: the sage 80 column recorded in `build/reviews/brand-pass-27-09-2026.md` (reversed logo).
- Fix: `components/layout/Menu.astro`. Sand 100 column with the sage logo and sage ink, the guide's "dark sage logo on sand" use from page 4.
- After: `qa/shots/design/after/menu-1440.png`, `qa/shots/design/after/menu-390.png`.

### 4. "Our difference" was a plain numbered list

- Page and width: home, all widths.
- Before: `qa/shots/design/home-1440-sheet.1.jpg`, `qa/shots/design/home-390-sheet.0.jpg`. Hairline rows with 90px thumbnails, and no images at all on phones. Belle asked twice for this "in a much more beautiful way" (T31).
- Fix: new `components/pages/a/Differences.astro`, used in `pages/index.astro`. From 960px the heading and a large 4:5 photograph stay pinned on the left while the five lines pass on the right. The line crossing the middle of the screen (or the one hovered or focused) is full sage and its photograph cross-fades in with a slow settle. The others rest in sage 60 (4.2:1 at 23 to 30px). A small "03 / 05" count sits under the photo. Below 960px it is a swipeable row of photo cards with the next card peeking. Her five lines, the ten pillar icons and the proof links are unchanged. Reduced motion switches the photo with no fade.
- After: `qa/shots/design/after-diff-1440-sheet.0.jpg`, `qa/shots/design/after-diff-390-sheet.0.jpg`.

### 5. Venue cards had no motion

- Page and width: `/places`, `/private-groups`, `/corporate`, `/experiences/full-day-retreat`, all widths.
- Before: the component header said "No image drift on hover". Belle asked for "a cool little mini animation" (T30).
- Fix: `components/venues/VenueIndex.astro`. The arches rise in turn (140ms apart) as the row enters, each photograph settling from 1.08 to 1 over 1.6s, and the photograph eases in by 4 per cent on hover. No bounce, off under reduced motion and in print.
- After: `qa/shots/design/after-vcards-1440-0.png` (the final frame of the entry).

### 6. Heading sizes were a step too large for HV Muse

- Page and width: every page, largest at 1440 and up.
- Before: hero line up to 56px, h1 58px, h2 44px (`qa/shots/design/home-1440-sheet.0.jpg`).
- Fix: `styles/tokens.css`. Hero line 32 to 48px, h1 34 to 48px, h2 28 to 38px, h3 26 to 30px, large place names 36 to 52px. The Day's beat headings in `components/day/PinnedDay.astro` came down to match (30 to 42px).
- After: `qa/shots/design/after/home-1440-sheet.0.jpg`. The photographs lead and the headings sit calmly in the whitespace.

### 7. The app teaser on home was one line of text

- Page and width: home, all widths.
- Before: `qa/shots/design/home-1440-sheet.1.jpg` (the strip under the journal).
- Fix: `components/pages/a/StayClose.astro`. A sand 60 panel with a 4:5 frame for the `app-hero` image and a large HV Muse "2027" above the existing heading, line and link. The copy is unchanged. Until Belle's app image exists the frame shows the lm panel from item 8.
- After: `qa/shots/design/after-stay-1440-0.png`, `qa/shots/design/after-stay-390-0.png`.

### 8. Empty slots looked broken next to real photos

- Page and width: 64 slots on about 40 pages, all widths. Worst on `/places/beresford-estate`, `/places/naiko-encounter-bay`, `/gallery`, `/our-story`, `/team`.
- Before: `qa/shots/design/places_beresford-estate-1440-sheet.0.jpg`. Tidal lines and an inner hairline frame read as a failed image once real photos sat beside them.
- Fix: `styles/utilities.css`. With the notes layer off, an empty slot is a soft sand field with Belle's lm submark in sage 40 at the centre, and no tidal lines or inner frame. Nothing is invented. The notes layer keeps the full placeholder. `components/media/` was not touched.
- After: `qa/shots/design/after/places_beresford-estate-1440-sheet.0.jpg`, `qa/shots/design/x-team.png`.

### 9. Empty photo-only bands and full-screen empty heroes

- Page and width: `/places/beresford-estate`, `/places/naiko-encounter-bay`, the lasagne and gnocchi journal posts, all widths.
- Before: `qa/shots/design/places_naiko-encounter-bay-1440-sheet.0.jpg`. A 900px empty hero, then a 783px empty band.
- Fix: `components/base/MediaBand.astro`. With notes off, a band that is only a photograph steps aside until the photo exists, and a band carrying words over it drops to 24 to 40rem tall.
- After: `qa/shots/design/after/places_naiko-encounter-bay-1440-sheet.0.jpg`, `qa/shots/design/after/journal_med-inspired-vegetable-lasagna-390-sheet.0.jpg`.

### 10. The home map opened on Beresford, the one venue with no photo

- Page and width: home, `/places`, `/fleurieu-peninsula-retreats`, all widths.
- Before: `qa/shots/design/home-1440-sheet.1.jpg`, `qa/shots/design/home-390-sheet.0.jpg`. A large empty frame beside the map.
- Fix: `components/map/FleurieuMap.astro`. The map opens on the first place whose photograph is in (Deep Creek today). The north to south order and the arrows are unchanged, and it will open on Beresford again by itself once that photo exists and sits first.
- After: `qa/shots/design/after/home-1440-sheet.1.jpg`.

### 11. An empty 9:16 reel frame on the Day page

- Page and width: `/experiences/full-day-retreat`, all widths.
- Before: `qa/shots/design/experiences_full-day-retreat-1440-sheet.0.jpg` ("Belle's reel" beside the schedule).
- Fix: `pages/experiences/full-day-retreat.astro`. With notes off and no reel, the frame hides and the schedule takes a 46rem column. The frame returns when the reel arrives.
- After: `qa/shots/design/after/experiences_full-day-retreat-1440-sheet.0.jpg`.

### 12. Reviews with no photo showed an empty square

- Page and width: home, `/private-groups`, the three Sunset Retreat reviews, all widths.
- Fix: `components/testimonials/Testimonials.astro`. The empty photo shows a large HV Muse open quote in sage 40 on sand in place of the submark.
- After: `qa/shots/design/after/proof-1440-0.png`, `qa/shots/design/after/proof-1440-1.png`.

### 13. White words over bright photographs on page heroes

- Page and width: home, `/corporate`, `/food`, `/private-groups`, `/retreats`, `/philosophy`, 700px and up.
- Before: `qa/shots/design/heroes-1440.0.jpg`, `qa/shots/design/heroes-1440.1.jpg`. The words sat on white linen, plates and surf. The brand pass logged the weak home line over the surf.
- Fix: `components/hero/Hero.astro` (this edit went into the media reviewer's commit d030bd7, which picked up the working file) and `components/base/MediaBand.astro`. A faint pool of shade under the lower left, where the words sit, and a soft glow on the words. No full-frame scrim, and the photographs stay bright. Placeholders still get sage ink with no glow.
- After: `qa/shots/design/after-heroes-1440.0.jpg`, `qa/shots/design/x-crop-pg.png`, `qa/shots/design/x-crop-home.png`.

### 14. Header links over bright sky

- Page and width: every page that opens on a photograph, 1180 and up.
- Fix: `components/layout/Header.astro`. A soft glow on the salt links, the Menu label and lines, and the logo, only while the header sits over a photo.
- After: `qa/shots/design/after-heroes-1440.0.jpg`.

### 15. Page titles slid under the transparent header

- Page and width: every page with a title over its hero, 1440 (all desktop widths).
- Before: `qa/shots/design/x-beresford-765.png`. "Beresford Estate" ran under the nav links.
- Fix: `scripts/header.ts`. When the page title sits over the hero, the header turns into the sand strip as the title reaches it.
- After: `qa/shots/design/after/beresford-765.png`.

### 16. Large headings ghosted through the header strip

- Page and width: every page, all widths.
- Before: `qa/shots/design/x-team-crop.png`.
- Fix: `components/layout/Header.astro`. The compact strip is solid sand 30 (it was 97 per cent).

### 17. The Restore panel's words were unreadable over the bath clip

- Page and width: the Day on home, `/private-groups`, `/corporate`, `/experiences/full-day-retreat`, all widths.
- Before: `qa/shots/design/home-1440-sheet.0.jpg`, the Restore frame. "04 of 04" and the schedule disappeared into the window light.
- Fix: `components/day/PinnedDay.astro`. With a real photo or clip in, the words sit on a sand glass panel in sage, and the clip stays bright around it. On phones the panel sits over the lower part of the frame.
- After: `qa/shots/design/after/restore-1440.png`, `qa/shots/design/after/restore-390.png`.

### 18. Journal titles over bright photos

- Page and width: home, `/journal`, every journal post (Keep reading), all widths.
- Before: `qa/shots/design/after/jcards-1440-0.png` (captured before this fix). "The Importance of Sleep" was lost on the white towel.
- Fix: `components/journal/JournalCards.astro`. Titles, dates and categories now sit beneath the photograph on sand, Aman's journal pattern. No gradient on the photos. The photo still eases in on hover and focus.
- After: `qa/shots/design/after/journal-1440-sheet.0.jpg` and the home journal row in `qa/shots/design/after/home-1440-sheet.1.jpg`.

### 19. Journal filters only appeared at eight posts

- Page and width: `/journal`, all widths.
- Before: `qa/shots/design/journal-1440-sheet.0.jpg`. No filter row. Belle wanted tabs and filters built from the start (T53).
- Fix: `pages/journal/index.astro`. Under eight posts the page shows the latest story, then every story with its filter row (All, Sleep and recovery, Recipes), then the email band. The Recent stories slider returns from eight posts, so no story shows three times.
- After: `qa/shots/design/after/journal-1440-sheet.0.jpg`.

### 20. The mosaic's fact cards were plain white boxes (final sign-off issue 9)

- Page and width: home zoom mosaic, all widths.
- Fix: `components/hero/ZoomMosaic.astro`. Sand glass with a light blur, a sage 40 hairline on the leading edge and a soft shadow. Reduced motion shows them on sand 40.
- After: `qa/shots/design/after/home-1440-sheet.0.jpg`, the "Adelaide Airport" card.

### 21. Inset tiles in the experiences slider had no numeral (final sign-off issue 9)

- Page and width: home and `/experiences`, all widths.
- Fix: `components/experiences/PaneSlider.astro`. Inset tiles carry their numeral beside the name, like their neighbours ("02 Massage").
- After: `qa/shots/design/after/restore-a.png`.

### 22. The "2027" in the app teaser was too faint

- Fix: `components/pages/a/StayClose.astro`. Sage 60 (4.2:1 at 40 to 68px) instead of sage 40.

## Checks

- **Build.** `astro build` passes, 61 pages, followed by `astro sync` for the dev server.
- **Sideways scroll.** None. Results are in `qa/shots/design/after/overflow.txt` (58 public pages at 11 widths from 320 to 1920, notes off).
- **Headings.** One h1 on every page and no skipped levels on any of the 59 public pages (`qa/design-a11y.mjs`).
- **Contrast.** Every flagged pair on solid backgrounds was a false positive (salt header links measured before the photo behind them, or visually hidden text). Body text is sage 100 on sand (9.5:1 and up). Sage 60 is used only at 23px and up.
- **Focus.** The global 1.5px sage outline holds. The venue cards, difference lines and journal cards all show focus on the frame, and focus on a difference line also chooses its photo.
- **Reduced motion.** Differences, venue cards, the fact cards, the sticky bar and the button colour changes all switch to their end state with no transition.
- **House rules.** No em dashes, no uppercase transforms and no fonts other than HV Muse, Cormorant Garamond and Jost in anything added.
- **Tap targets.** The sticky bar is 52px tall, the menu control 44px, and venue and journal cards are whole-card links.

## Also noticed, for other owners

- **Stale styles on the dev server (all agents).** Port 4321 is serving old CSS for some edited components (seen on `StayClose.astro`). The page HTML carries the new rules, but Vite's style module swaps the old ones back in the browser. Screenshots from 4321 can show outdated styling. Logged in `build/notes/requests.md`. Every "after" shot here comes from a static build.
- **Media reviewer.** The Deep Creek map photo on home (`venue-naiko-deep-creek-map`) is the storm-light headland. It is now the first place photo on home, and a brighter frame would suit it. Logged in `build/notes/requests.md`.

## For Jess or Belle to decide

1. **The header still reads as The Tailor's** (final sign-off issue 3, CD review 02 Should 13). It is left for Jess to choose between the two options in CD review 02, as the sign-off asked. The lighter button already makes it less like theirs.
2. **`/gallery` has almost no photos.** Only the intro collage is filled, and every past retreat tile shows the lm panel. Either keep the gallery out of the walkthrough until the Sunset Reset photos arrive, or approve Naiko retreat photos for their own group.
3. **The Day page tells the morning twice** (final sign-off issue 7). The morning rotation still has its own section after the panels. It is a content and structure call, worth making once the rotation photographs exist.

Final sign-off issue 8 is in the notes layer only and a visitor never sees it, so no change was made.
