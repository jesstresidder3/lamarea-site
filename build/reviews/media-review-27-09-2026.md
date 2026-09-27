# Media review, 27-09-2026

Media reviewer. Scope: photos, video, logos and icons in imagery, and scroll-driven motion on photos and video. Screenshots are in `qa/shots/media/`. The build passes (61 pages). Checks ran against a static serve of the build on port 4398 because the dev server on 4321 serves stale CSS modules (see "Dev server" below). Playwright's bundled Chromium has no H.264, so video playback was checked in desktop Chrome through Playwright's `chrome` channel.

## Slot count

**127 of 191 slots have real media**, the same as the imagery pass. No empty slot has an honest fit in the 71-photo pool. Every frame of a building shows the one curved-roof house Belle names as Deep Creek, so nothing can stand in for Encounter Bay, Beresford or The Vineyard Retreat. There are no portraits apart from Luca's, no Sunset Reset set, no breakfast, bedroom, pool or infrared sauna, and no wildlife, reel or drone video. With notes off, the empty slots show the sand arch and monogram placeholder and read as intentional at 390 and 1440 (`sheet390-*.jpg`).

## Scroll motion built

| Where | What moves | How |
|---|---|---|
| Home hero (`components/hero/Hero.astro`) | The photo scales from 1 to 1.15 as the visitor scrolls the hero away, on top of the existing 14% downward drift. This is Belle's "that video when you scroll down, and then it sort of zooms in" (T53). A drone clip dropped into `home-hero` zooms the same way | CSS `animation-timeline` on the hero's view timeline, linear. A small rAF fallback sets the same values where scroll-driven animation is missing (Firefox). Off under reduced motion |
| Every page-opening photo band (`MediaBand` with `hero`): places, philosophy, Fleurieu, food, story, team, path pages, journal posts | Scales 1 to 1.12 as it leaves | Same method, photos only |
| Every other parallax band (the Table on `/food`, the afternoon band on the day page and others) | A slow Ken Burns: settles from 1.08 to 1 while crossing the screen, with the existing drift | Same method, photos only |
| Video (the bath clip) | No added zoom, because the clip already pushes in (alignment review) | Plays only on screen |

Only `scale` and `translate` animate, so all motion stays on the compositor. Measured mid-scroll: home hero 1.05 at 300px, 1.10 at 600px, 1.14 at 850px (`hero-zoom-1440-*.jpg`, `sheet-hero-zoom-1440.jpg`), 1.08 at 280px on a phone (`hero-zoom-390-280.jpg`), and none at all with reduced motion (`hero-reduced-1440-*.jpg`). The afternoon band on the day page runs 1.08, 1.068, 1.046, 1.024, 1.003, 1.0 at 300px steps (`band-settle-day-afternoon.jpg`). The zoom mosaic and the pinned Day were already scroll-bound and are unchanged.

## Issues and fixes

| # | Issue | Fix | Screenshots |
|---|---|---|---|
| 1 | The home hero did not zoom on scroll, only a 38 second breathing loop | Scroll-bound zoom above | `sheet-hero-zoom-1440.jpg` |
| 2 | The zoom mosaic ends with its centre frame filling the screen, and that frame was the overcast, brown hills aerial | Centre is now the bright bay with the walker on the clifftop track (`homepage12`), turquoise water and green hills. Still not a beach close-up | `m390-home-03.jpg`, `sheet-home1440-a.jpg` (before) |
| 3 | The mosaic's bath tile was the darkest photo on the site (a guest in the bath at dusk, brightness 81 of 255) beside bright frames | Now the empty bath by the tall window (`home-page-home-page`, Belle's Home page folder), lifted and warmed. `bath-cliff-candle.jpg` deleted | `sheet-home1440-a.jpg` (before) |
| 4 | The bath video was cool grey beside warm frames, and it jumped back to the start every 10 seconds | Warmed (5500K at half strength), shadows lifted, saturation plus 8%, then cut to an 8.8 second loop that dissolves its last 1.2 seconds into its first, so the push-in never visibly restarts. The wide clip is 1.6 MB and the phone clip 0.9 MB. New poster from the graded clip | `video-deep-creek-1440.jpg`, `video-deep-creek-390.jpg` |
| 5 | Six more frames sat dark or cool: the glass yoga room (Move panel), the treed coastal trail, the fireside room, the bath by the window and both hills aerials | Gentle curve lift and warm shift with ffmpeg, compared before and after. The water stays turquoise | `sheet-home-day.jpg` |
| 6 | Home's map pane for Deep Creek showed the dark backlit headland | Lifted into warm late light rather than swapped, because it is the only frame of the house from that side and every alternative repeats a photo already on home or `/places` | `m390-home-10.jpg` |
| 7 | Repeats: `hills-coast-drone` was needed twice after the mosaic change, and the menu's corporate image (chef with guests) repeated the pasta tile on 16 pages | `home-difference-01` takes the graded hills aerial. `menu-corporate` is a new, unused frame (229A8752, two women setting the long table with the sea behind). No photo repeats in page content on any page now. The menu's default and private groups images still match one frame on home, the day page and our story, but only inside the closed menu overlay | `audit-after.json` |
| 8 | Weight. 23 photos were over 400 KB (the largest 885 KB), every visitor got 2000px files, and images had no intrinsic size | Every photo re-encoded with mozjpeg at quality 78 (about half the weight, checked at 100% on the hero with no visible loss). Each has 640, 1024 and 1600px variants, and `Media.astro` now writes `srcset`, `sizes`, `width` and `height`. Largest full-bleed file is now 401 KB (the surf from above), heroes 321 to 387 KB, cards 45 to 200 KB. Below-the-fold images were already lazy and the hero eager with high priority | `scripts/media-variants.mjs` |
| 9 | Alt text | Rewritten for every slot whose photo changed. The content reviewer checked the other alts and asked for no changes | |
| 10 | The DJI_0210 car crop | Checked again, no part of the car is in `sauna-cold-tubs-cliff.jpg` at either width | `sheet390-experiences.jpg` |

## Video placements judged

| Placement | Verdict |
|---|---|
| `/places/naiko-deep-creek` hero | Keep. Belle placed the bath shot here herself (T55). Plays, loops, pauses off screen, phone clip on phones, poster only under reduced motion and save-data |
| Sleep and recovery pillar tile on `/philosophy` and the pillar page hero | Keep. The subject matches, and each is the only video on its page |
| Restore panel of the 8 hour day (home, corporate, private groups, day page) | Keep for now, because it is home's only moving image and it sits well below the fold. Two cautions: the salt text over the pale room is hard to read (request logged for the design reviewer), and the example day is at Beresford while the bath is Naiko, which the content reviewer also noted. Swap it for Beresford footage when Belle sends it |
| Home hero | Correctly not the bath, per Belle's "that isn't, like, a summary travel vibes" (T55) |

No page has more than one video, and none has a video above the fold except the two pages where it is the hero.

## Branding in imagery

Favicon (lm submark in sand on sage 80) holds at 32px, the apple touch icon is crisp, the OG card is the bright bay with the wordmark reversed in sand, and the logo PNGs are sage 40 as the guide specifies. Icons are SVG, so they stay sharp at 2x. No change needed.

## Dev server

The running dev server on 4321 serves stale Vite CSS modules for edited components: the HTML carries the new rules but the style module the page loads afterwards still has the old ones. The new motion may not show there until the server restarts. The build is correct. Logged in `build/notes/requests.md`.

## What Belle must supply

1. **The drone clips she named**, DJI_0781 (along the coast) and DJI_0604 (pan away from the coast), slowed to about 0.6x. The hero zoom is built to take a video, so her clip drops into `home-hero` and zooms as she described.
2. Beresford Estate, The Vineyard Retreat and Encounter Bay photos.
3. Team portraits and a portrait of Belle.
4. The Beresford 8 hour reel, the ten pillar videos, and the dolphin, seal and whale footage.
5. The Sunset Reset set, a breakfast frame, a bedroom, the pool and the infrared sauna.
6. Guest consent for recognisable faces (as the imagery pass listed).
