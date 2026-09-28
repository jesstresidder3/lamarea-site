---
title: Media sweep
date: 28-09-2026
status: Internal. For the rebuild lanes. Not for Belle.
---

# Media sweep, 28-09-2026

## Where things stand

The biggest gap was bright summer drone footage, and it is now filled. Four new drone clips and six new 4K drone stills are in `site/public/media/`. All of them are blue sky and emerald water, which the photo set lacked (most of the existing drone photos are overcast or late light).

Every one of the 71 photos in Belle's Drive folder "WEBSITE" is already in `media-pool/full/`. Only five pool photos were not yet on the site. Two of them were worth adding and three were too dark or too weak.

Belle's named home-hero clip, DJI_0781 ("bird's eye along the coast"), is still missing. It is not in her Drive folder, not in Jess's Drive and not in ~/Downloads. See the last section.

Contact sheets used for this sweep are in `qa/shots/rebuild/media/` (`pool-0.jpg`, `pool-1.jpg`, `public-in-use.jpg`, `sheet-f604.jpg`, `sheet-f605.jpg`, `sheet-f0030.jpg`, `stills-sheet.jpg`, `video-posters.jpg`).

## New video in site/public/media

All clips are H.264, no audio, faststart, 1920x1080 under 6 MB, with a 1080x1350 portrait crop for phones and a poster jpg for each (`-poster.jpg`, `-poster-portrait.jpg`, with width variants). DJI_0604 and DJI_0605 are 30fps sources, so they are slowed to 0.8x (24 effective frames a second) rather than 0.6x, which would stutter at 18. DJI_0030 is 50fps and is slowed to 0.6x.

| File | Source and passage | What it shows | Length | Strength | Best moment on the site |
|---|---|---|---|---|---|
| `fleurieu-cliffs-white-beach-drone.mp4` | DJI_0604, 0.5 to 11.5s | Slow drift along dark cliffs and golden hills, a white beach at their foot, three boats on emerald water, clear blue sky | 13.7s | 10 | Hero of `/fleurieu-peninsula-retreats` (L3). Also the strongest candidate for the home Fleurieu band |
| `fleurieu-coastline-receding-drone.mp4` | DJI_0604, 50 to 61s | The drone pulls back and the coastline recedes into distance, water turning from emerald to deep blue, boats small at the cliff base | 13.7s | 9 | Hero of `/places` or `/experiences` (L3). Also a quiet closing band before the enquiry CTA |
| `hidden-cove-reveal-drone.mp4` | DJI_0605, 21 to 29.5s | Top-down over a turquoise reef, then the camera tilts up to reveal a hidden white-sand cove inside the cliffs | 10.6s | 8 | Hero of `/our-story` or `/philosophy` (L4), or the nature pillar opener. Poster is taken at 7.5s so the still shows the cove |
| `naiko-deep-creek-to-open-sea-drone.mp4` | DJI_20251109100906_0030_D, 27 to 35s | The retreat house on the green hill, basalt cliffs and the cove, turning out to the open sea | 13.3s | 8 | Second moment on `/places/naiko-deep-creek` (L3) after the existing `naiko-deep-creek-drone-pan.mp4`, or the Places to Pause band. It overlaps the start of the existing pan, so use one of the two per page |

I did not recut `229A8133.MOV`. It is already on the site as `bath-naiko-deep-creek.mp4` (plus portrait and poster), cut from the same 10 second source.

## New photos in site/public/media

All are 2000px on the long edge, with width variants from `media-variants.mjs`.

| File | Source | What it shows | Orientation | Strength | Best moment on the site |
|---|---|---|---|---|---|
| `drone-cliffs-white-beach-boats.jpg` | DJI_0604 frame at 1.5s | Cliffs, white beach, boats, emerald water, blue sky | Wide | 10 | Poster-quality still for the Fleurieu page, the home Fleurieu band, and social cards |
| `drone-emerald-water-boats-top-down.jpg` | DJI_0604 frame at 106s | Top-down emerald shallows, three white boats, rock edge on the right | Wide | 9 | Full-bleed break between sections. Plenty of calm water for type on image |
| `drone-hidden-cove-white-sand.jpg` | DJI_0605 frame at 24s | Hidden white-sand cove inside pale cliffs, turquoise reef below | Wide | 9 | Nature pillar, Places to Pause, journal post header |
| `drone-golden-hills-blue-sky.jpg` | DJI_0604 frame at 30s | Golden summer hills over dark cliffs, thin line of emerald water | Wide | 8 | Wide band with type in the sky. The sky is empty, so headings sit cleanly |
| `drone-coastline-deep-blue.jpg` | DJI_0604 frame at 57s | Coastline receding, deep blue bay, emerald near the shore | Wide | 8 | Map section backdrop, FAQs header, 404 |
| `drone-naiko-cove-open-sea.jpg` | DJI_0030 frame at 38s | Naiko Deep Creek house, basalt cliffs, cove and white water opening to the sea | Wide | 8 | Naiko Deep Creek venue card and place page |
| `bath-surf-below-candle.jpg` | 229A8188 | Guest in the freestanding bath, candle, surf breaking on rocks below the window | Wide | 7 | Rest detail on the Naiko Deep Creek page. It is moody, so use it small beside sand, never as a full-bleed opener |
| `chef-green-oil-detail.jpg` | 229A8911 | Chef squeezing green oil onto plated fish | Portrait | 7 | A detail frame in the food story (`/food`, signature dining) |

Not added: homepage6 (downward dog in a very dark room, 5), homepage14 (bath with wine, dark, 6), 229A8838 (hands on an olive oil bottle, 6). All three break Belle's "nothing dark" rule or add nothing the site does not already have.

## Top 20 photos by strength

Ranked for a bright, cinematic, luxury editorial site. Site filename first, Belle's original in brackets.

1. `coast-cove-house-drone.jpg` (homepage5). House on the green hill above the turquoise cove.
2. `drone-cliffs-white-beach-boats.jpg` (DJI_0604). New.
3. `bay-cliff-walk-drone.jpg` (homepage12). Bright bay, walker on the clifftop.
4. `surf-rocks-from-above.jpg` (homepage11). Waves onto a small beach, top-down.
5. `drone-emerald-water-boats-top-down.jpg` (DJI_0604). New.
6. `deck-sea-guests.jpg` (229A8579). Guests on the sunlit deck, big sky.
7. `deck-stretch-sea.jpg` (homepage8). Side stretch silhouette against sea and headland.
8. `table-lemons-sea.jpg` (229A8736). Two women setting the table, sea beyond.
9. `long-table-overhead-group.jpg` (DJI_20251108132519_0437). Group around the table from above.
10. `drone-hidden-cove-white-sand.jpg` (DJI_0605). New.
11. `barrel-sauna-cliff.jpg` (homepage10). Sauna, towels and cold tub on the clifftop.
12. `long-table-overhead.jpg` (homepage3). Long table from above, lemons and herbs.
13. `kingfish-plate.jpg` (Kingfish 2025).
14. `tortelli-plate.jpg` (Tortelli 2025).
15. `deck-breathwork-sky.jpg` (229A9336). Guests lying along the deck under a big sky.
16. `beach-walk-bright.jpg` (229A9426). Couple on a sunlit beach under cliffs.
17. `luca-guiotto.jpg` (Luca pic).
18. `hillside-walk-three.jpg` (229A8527). Three women walking up the green hill.
19. `tuna-plate.jpg` (Tuna pic 2).
20. `drone-golden-hills-blue-sky.jpg` (DJI_0604). New.

## Weak photos in use and what to replace them with

| In use | Problem | Replace with |
|---|---|---|
| `hills-coast-drone.jpg`, `hills-coast-drone-wide.jpg` (DJI_0219, DJI_0223) | Overcast, flat, brown. They read as winter, the opposite of Belle's Mediterranean summer | `drone-golden-hills-blue-sky.jpg` or `drone-coastline-deep-blue.jpg` |
| `headland-late-light-drone.jpg` (homepage13) | Backlit and moody, heavy grade | `drone-coastline-deep-blue.jpg`. Keep the late light only for a sunset moment |
| `beach-dusk-drone.jpg` (DJI_0903) | Dusk, dark water | `drone-emerald-water-boats-top-down.jpg`, unless the slot is about evening |
| `beach-cliff-sun.jpg`, `beach-cliff-sun-seated.jpg` (229A9409, 229A9408) | Deep shadows, dramatic grade, near duplicates of each other | `beach-walk-bright.jpg` for the beach, or `drone-hidden-cove-white-sand.jpg` |
| `coast-cove-house-drone-late.jpg` (DJI_20251109100743_0026) | Flatter twin of the best photo on the site | `coast-cove-house-drone.jpg` or `drone-naiko-cove-open-sea.jpg` |
| `living-fire-sea.jpg` (229A9365) | Dim interior | Keep only for "relaxing by the fire" in the self-led slider. It is the only fire image |
| `gift-box.jpg` (229A9248) | Flat overhead on grey concrete, no atmosphere | Type-led treatment on sand for `/gift-cards` until Belle sends a styled gift shot |
| `breathwork-verandah.jpg` and `-close` (229A9328, 229A9323) | Cluttered, mixed light, practitioner's face | `deck-breathwork-sky.jpg` for breathwork |
| `trail-trees-sea.jpg` (229A8358) | Shaded, brown | `hillside-walk-three.jpg` or `bay-cliff-walk-drone.jpg` for hiking |
| `table-lemons-sea`, `-2`, `-3`, `table-set-sea-light`, `table-setting-two`, `table-three-women-sea` | Six frames of the same moment. Used close together they read as padding | Use at most two per page. Swap the rest for `chef-green-oil-detail.jpg`, `fish-mussels-plate.jpg` or `long-table-overhead-group.jpg` |

## Email and Drive findings

Gmail was not searched again this pass. The brief's section "Media found on 28-09-2026" covers the email search.

Belle's Drive folder "WEBSITE" (1OehLPGl5rojCdvqkii-NqNVmXdF3JAFG) was walked in full:

| Subfolder | Photos | Video | Notes |
|---|---|---|---|
| Home page | 20 | 0 | Drive originals run up to 19.6 MB (homepage12, homepage5), larger than the 2400px copies in media-pool/full. Pull an original only if a slot needs more than 2400px |
| Our partners | 12 | 0 | |
| Retreats, events & bookings | 30 | 0 | |
| The science behind la maréa | 6 | 0 | |
| Lifestyle wellness blogs & recipes | 3 | 0 | |
| Contact | 0 | 0 | Empty |
| Our Story | 0 | 0 | Empty |
| Root | 0 | 0 | One spreadsheet, "Copy of ROI CALCULATOR TEMPLATE" |

That makes 71 photos, and all 71 match `media-pool/full/` by name. Nothing new to pull. The folder holds no video.

Belle's video sits outside that folder in Drive:

| File | Drive ID | Size | Status |
|---|---|---|---|
| DJI_0604.MP4 | 1CUS66m95Fz5mcJ4anGWtGPoNV_fPXB3N | 1.30 GB | In `media-pool/incoming/`, cut |
| DJI_0605.MP4 | 13J_VZm0VBd-qUe9F-Dez2rOF7hPvZSxp | 359 MB | Complete in ~/Downloads, cut. No swimmer is visible at contact-sheet size. It is a reef and cove pass |
| DJI_20251109100906_0030_D.MP4 | 1P4AJKNsUUJGk91clU2CQYieE4d6wKyAD | 578 MB | In `media-pool/incoming/`, cut |
| 229A8133.MOV | 12Zt7GrYKW8jXujJEy-QjxnHgPgRxx2zd | 224 MB | Already on the site as the bath clip |

A Drive-wide search also found clips named DJI_20260913160256_0781_D, DJI_20260913162225_0782_D and DJI_20260914083717_0800_D, plus IMG_4830.MOV. I downloaded them to check because the 0781 number matched Belle's hero clip. They turned out to be Jess's own phone footage from a dinner and two events, with no connection to La maréa. I deleted the local copies. The Drive originals are untouched.

The Dropbox folder "Belle" (from Georgia Evans, 23 GB, probably the professional shoot) was not opened. Jess's free Dropbox has 2 GB, and the brief says not to touch it.

## Still missing: what Belle must send

1. **DJI_0781.MP4**, the bird's eye along the coast that she named for the home hero. It is not in any folder she shared.
2. The **pan to the left over the hills** she described in the brain dump. It may be part of DJI_0604 or a clip she has not shared.
3. **Dolphin, seal and kangaroo footage** (iPhone). She said she would share it. None has arrived.
4. **Branding pillar videos** (nutrition, movement, nature). She said she would share these for the philosophy section. None has arrived.
5. **Beresford Estate reel** and any Beresford Estate stills. There is no Beresford imagery in the pool, so the vineyard half of the Fleurieu band has no photo.
6. **The professional shoot in Dropbox.** Jess needs a view-only link that fits her plan, or a Drive or WeTransfer copy of the selects.
7. A **styled gift card or gift box shot** in light, bright conditions.

## Added 28-09-2026, from Belle's drone folder in Drive (ID 17Vku458GY8NaBOb0YpW4mNaFEr1zbpYH)

Three more web-ready clips in `site/public/media/`, each with a poster jpg. Use them in the refine round.

| File | What it shows | Best use |
|---|---|---|
| `retreat-day-edit.mp4` (+ `-portrait.mp4`, `-poster.jpg`), 18.7 seconds | Belle's own edited retreat banner: hands reaching across the long lemon-set table, the fire, shared bowls, two guests laughing at sunrise on the rocks | The strongest human footage on the site. Home "the day" moment, `/private-groups` opener, or `/experiences/full-day-retreat` opener |
| `naiko-bluff-encounter-bay-film.mp4` (+ poster), 20 seconds | The venue's own 4K film of Naiko at the Bluff: sunset over Encounter Bay, the bedroom, the living room, the deck at dusk | `/places/naiko-encounter-bay` opener. Its dusk exterior is dark, so cut before it or keep it small |
| `coast-ochre-cliffs-topdown-drone.mp4` (+ poster), 14 seconds | DJI_0781, the "bird's eye view along the coast" Belle named: top-down along ochre cliffs with a strip of emerald water | `/fleurieu-peninsula-retreats` or a section handover. Earthy rather than bright, so do not use it as a first screen |

A background agent is also pulling every still from that folder (Beresford, Naiko, food, wellness experiences, partners) into `media-pool/incoming/drive/` and ranking them in `build/media-drive-pull-28-09-2026.md`. Read that file too if it exists.
