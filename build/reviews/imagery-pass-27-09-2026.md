# Imagery pass, 27-09-2026

Imagery agent. Belle's 71 photos and her bath video are now in the site. **127 of 191 slots have real media.** The other 64 keep their placeholder because no honest photo exists in the pool for them (list below). Build passes (`astro build`, 61 pages, exit 0). `site/public/media/` is 26 MB.

## What went where, in short

- **Home hero:** `homepage5`, the drone frame of the retreat house on the green hill above the turquoise cove. It is the brightest and most striking frame in the pool, and it matches Belle's "light and bright" and "drone imagery straight away" direction. Phones get their own portrait crop (house and cove). The photo now has a very slow 38 second scale (1 to 1.07) on top of the existing scroll drift, motion-safe only.
- **Video:** the bath clip went to four places, each the page's only autoplay loop:
  1. **The Restore panel of the 8 hour day** (home, private groups, corporate and the day page). The home hero is a still, so this is the home page's one moving moment.
  2. **The Naiko Deep Creek venue hero.** Belle asked for exactly this in the transcript: a hero banner of the bath shot for Deep Creek, where "you can see the teas".
  3. **The Sleep and recovery pillar page hero.**
  4. **The Sleep and recovery tile** in the philosophy showcase. It plays when that pillar is opened.
  Every placement uses `frame-0.5.jpg` as the poster and the 9:16 clip on phones. Reduced motion and save-data keep the poster, which `Media.astro` already handled. I checked in desktop Chrome that it plays; Playwright's bundled Chromium has no H.264, so it shows the poster there.
- **Grading:** 11 darker or cooler frames got a gentle lift (curves lifting shadows about 4 per cent, saturation plus 4 per cent, half-strength 6000K warm). The water stays turquoise. I compared each one before and after. `homepage6` (yoga by the fire) is too dark and turns muddy and noisy when lifted, so I left it out.
- **Car crop:** the DJI_0210 drone frame is cut to the left 1440 pixels (`sauna-cold-tubs-cliff.jpg`). I checked it at full size and no part of the car is left.
- **Crops:** slots take a new optional `position` field, rendered as `object-position`. It is set on every filled slot so heads, horizons and subjects stay in frame. One photo got a second, tighter crop (`deck-stretch-close.jpg`) so it can appear twice on home without looking repeated.

## Ten strongest placements

1. `home-hero`: the cove and house from the air.
2. `places-hero` and the Deep Creek arch cards: the same scene. The arch crop keeps the house at the top and the cove below.
3. `day-restore`: the bath video, full bleed.
4. `venue-hero-naiko-deep-creek`: the bath video, as Belle asked.
5. `day-arrive`: guests on the sunlit deck above the sea.
6. `corporate-hero`: the long table from above, a mixed group. Cropped tighter because Belle's filename says "zoom up further, connection".
7. `food-hero`: two women setting the long table with lemons, the sea behind.
8. `philosophy-hero` and `fleurieu-hero`: the bright bay with a walker on the clifftop track.
9. `zoom-yoga`, `retreats-flagship` and `experiences-hero`: the side stretch silhouetted against the sea.
10. `team-luca-guiotto` and `food-fine-dining`: Luca's portrait and his kingfish, from Belle's "Our partners" folder.

## Belle's folder intent

- **"The science behind la maréa"** folder: its frames carry the philosophy pillars (balance, personalisation, psychological wellbeing, connection) and the zoom mosaic bath.
- **"Our partners"** folder: carries the food partner slots (Luca, kingfish, tuna, tortelli) and the olive oil.
- **"Home page"** folder: carries the home hero, the differences and the mosaic.
- **"Retreats, events and bookings"** folder: carries the day, formats and testimonials.

## Empty slots and why

**Encounter Bay (9 slots).** Every frame in the pool shows one house: the curved-roof house above the cove with the bath Belle named as Deep Creek. Putting it on Encounter Bay would show the wrong venue. That covers the hero, around band, card, map, living, pool, recovery, walk and villa.

**Beresford Estate (8) and The Vineyard Retreat (5).** There is no vineyard or estate photo in the pool, and a coastal frame would misrepresent the venue. The same reason empties `enquire-vineyard`, `fleurieu-vines` and `collective-first-release`. `gallery-intro-2` asked for vines. It now shows the cove, and its alt says so.

**Team (8).** There are no headshots for Belle, Zoe, Sarah, Kristian, Jaimi, Natalie, Courtney or Malissa. Only Luca's portrait exists.

**Belle and her story (6).** The pool has no portrait of Belle, no family or childhood beach photos and no hosts photograph. Empty slots: `enquire-thanks`, `fleurieu-belle`, `story-moana`, `story-myponga`, `story-mediterranean`, `story-hosts`. `story-hero` is filled with a plain coastal frame and an alt that says so.

**Sunset Reset (8).** That retreat was at Henley, and the 223 JPEG set is not in the pool. Empty slots: `testimonial-sunset-1` to `3` and `gallery-sunset-1` to `5`.

**Named past retreats on the gallery (3).** These need the live-site card images: `gallery-beresford-womens`, `gallery-private-wutw`, `gallery-corporate-mclaren-flat`.

**No matching subject (9):**

- `venue-naiko-deep-creek-bedrooms`: there is no bedroom photo.
- `experience-infrared-sauna`: the barrel sauna is a wood-fired trailer sauna, not the venue's infrared one.
- `experience-pool-swimming`: there is no pool photo.
- `food-breakfast`: there is no breakfast photo.
- `journal-lasagna` and `journal-gnocchi`: these need the live post images.
- `app-hero`: waits on the app decision.
- `guide-private-cover` and `guide-corporate-cover`: need the guide PDFs.

**Wildlife video (3).** Belle's iPhone footage is not in the pool: `fleurieu-wild-dolphins`, `fleurieu-wild-seals`, `fleurieu-whales`.

**The Beresford 8 hour reel (2).** `day-reel` and `sg-reel`. The reel is not in the pool.

## What Belle must supply

This list is also added to `build/questions-for-belle-26-09-2026.md` as items 27 to 31.

**Answers:**

- Whether every frame is Naiko Deep Creek.
- Guest consent for recognisable faces. Clearest cases: `deck-rest-faces`, the three women at the table, the massage frames and the facilitator on the verandah.
- Whether the chef in the Aromi apron is Luca.

**Photos:**

- Beresford Estate and The Vineyard Retreat images.
- Encounter Bay images.
- A bedroom, pool and infrared sauna.
- Breakfast.
- The Sunset Reset set.
- Team portraits and a portrait of Belle.
- Family beach photos and the hosts photograph.
- The two guide covers.
- The lasagne and gnocchi images.

**Footage:**

- The drone clips she named (DJI_0604, DJI_0781, DJI_0605, the left pan).
- Dolphin, seal and whale footage.

The drone clips would let the home, Fleurieu and zoom mosaic heroes move.

## Other things I noticed, outside my files

- The home map pane opens on Beresford Estate, which has no photo, so a large placeholder shows beside the map on home. Opening on Deep Creek would show the cove.
- At 1440 the header links sit over bright cloud on the home hero and read faintly.
- The shared dev server on 4321 was serving pages without global CSS during this pass (body font Times, no tokens), most likely mid-edit by the brand agent. My checks used a static serve of my own build on port 4399.

## Slot to file

Source names are in `media-pool/full/`. Descriptions of every file are in `media-pool/catalogue-described.md`.

| Slot | File in `public/media/` | Source |
|---|---|---|
| `home-hero` | `coast-cove-house-drone.jpg` | `home-page-homepage5.jpg` |
| `menu-default` | `hills-coast-drone-wide.jpg` | `the-science--dji-0223.jpg` |
| `menu-private-groups` | `table-lemons-sea-2.jpg` | `retreats-eve-229a8739.jpg` |
| `menu-corporate` | `chef-kitchen-guests.jpg` | `retreats-eve-229a8698.jpg` |
| `menu-the-day` | `long-table-overhead-3.jpg` | `retreats-eve-dji-20251108142617-0452-d.jpg` |
| `zoom-centre` | `hills-coast-drone.jpg` | `home-page-dji-0219.jpg` |
| `zoom-yoga` | `deck-stretch-sea.jpg` | `home-page-homepage8.jpg` |
| `zoom-table` | `long-table-overhead-group.jpg` | `the-science--zoom-up-further-connection-copy-of-dji-20251108132519-0437-d.jpg` |
| `zoom-plunge` | `hillside-walk-three.jpg` | `retreats-eve-229a8527.jpg` |
| `zoom-massage` | `massage-face.jpg` | `retreats-eve-229a8491.jpg` |
| `zoom-bath` | `bath-cliff-candle.jpg` | `the-science--229a8188.jpg` |
| `day-base` | `hills-coast-drone-wide.jpg` | `the-science--dji-0223.jpg` |
| `day-arrive` | `deck-sea-guests.jpg` | `retreats-eve-229a8579.jpg` |
| `day-move` | `mats-glass-room-sea.jpg` | `our-partners-229a8593.jpg` |
| `day-nourish` | `fish-mussels-plate.jpg` | `retreats-eve-229a8923.jpg` |
| `day-restore` | `bath-naiko-deep-creek.mp4 (video, poster and 9:16 phone clip)` | `belle-229a8133.mp4` |
| `sg-band` | `hills-coast-drone.jpg` | `home-page-dji-0219.jpg` |
| `sg-pair` | `trail-trees-sea.jpg` | `retreats-eve-229a8358.jpg` |
| `sg-dining` | `fish-mussels-plate.jpg` | `retreats-eve-229a8923.jpg` |
| `sg-pasta` | `tortelli-plate.jpg` | `our-partners-tortelli-2025.jpg` |
| `sg-thumb-1` | `surf-rocks-from-above.jpg` | `home-page-homepage11.jpg` |
| `sg-thumb-2` | `bowl-held.jpg` | `home-page-homepage7.jpg` |
| `sg-thumb-3` | `breathwork-verandah.jpg` | `our-partners-229a9328.jpg` |
| `home-table-shared` | `long-table-overhead.jpg` | `home-page-homepage3.jpg` |
| `home-table-pasta` | `tortelli-plate.jpg` | `our-partners-tortelli-2025.jpg` |
| `home-difference-01` | `coast-cove-house-drone-late.jpg` | `retreats-eve-dji-20251109100743-0026-d.jpg` |
| `home-difference-02` | `table-setting-two.jpg` | `retreats-eve-229a8728.jpg` |
| `home-difference-03` | `breathwork-verandah.jpg` | `our-partners-229a9328.jpg` |
| `home-difference-04` | `olive-oil-bread.jpg` | `lifestyle-we-229a8854.jpg` |
| `home-difference-05` | `beach-walk-bright.jpg` | `retreats-eve-229a9426.jpg` |
| `private-hero` | `table-three-women-sea.jpg` | `retreats-eve-229a8796.jpg` |
| `corporate-hero` | `long-table-overhead-group.jpg` | `the-science--zoom-up-further-connection-copy-of-dji-20251108132519-0437-d.jpg` |
| `retreats-hero` | `beach-walk-bright.jpg` | `retreats-eve-229a9426.jpg` |
| `retreats-flagship` | `deck-stretch-sea.jpg` | `home-page-homepage8.jpg` |
| `retreats-format-half-day` | `breathwork-verandah.jpg` | `our-partners-229a9328.jpg` |
| `retreats-format-wake-up` | `mats-glass-room-sea.jpg` | `our-partners-229a8593.jpg` |
| `retreats-format-sunset` | `beach-dusk-drone.jpg` | `home-page-dji-0903.jpg` |
| `retreats-format-weekend` | `coast-cove-house-drone-late.jpg` | `retreats-eve-dji-20251109100743-0026-d.jpg` |
| `retreats-format-personalised` | `journal-pen-candle.jpg` | `the-science--229a8210.jpg` |
| `enquire-coast` | `bay-cliff-walk-drone.jpg` | `home-page-homepage12.jpg` |
| `day-hero` | `deck-breathwork-sky.jpg` | `retreats-eve-229a9336.jpg` |
| `day-rotation-massage` | `massage-towel-rest.jpg` | `retreats-eve-229a8504.jpg` |
| `day-rotation-contrast` | `sauna-cold-tubs-cliff.jpg` | `retreats-eve-dji-0210-crop-out-car.jpg` |
| `day-rotation-workshop` | `bowls-hands-overhead.jpg` | `retreats-eve-229a8246.jpg` |
| `day-afternoon` | `headland-late-light-drone.jpg` | `home-page-homepage13.jpg` |
| `experiences-hero` | `deck-stretch-sea.jpg` | `home-page-homepage8.jpg` |
| `experiences-together` | `table-lemons-sea.jpg` | `retreats-eve-229a8736.jpg` |
| `philosophy-hero` | `bay-cliff-walk-drone.jpg` | `home-page-homepage12.jpg` |
| `philosophy-tide` | `surf-rocks-from-above.jpg` | `home-page-homepage11.jpg` |
| `pillar-hero-sleep-and-recovery` | `bath-naiko-deep-creek.mp4 (video, poster and 9:16 phone clip)` | `belle-229a8133.mp4` |
| `food-hero` | `table-lemons-sea.jpg` | `retreats-eve-229a8736.jpg` |
| `food-fine-dining` | `kingfish-plate.jpg` | `our-partners-kingfish-2025.jpg` |
| `food-shared-table` | `lunch-table-glasses.jpg` | `retreats-eve-229a8924.jpg` |
| `places-hero` | `coast-cove-house-drone.jpg` | `home-page-homepage5.jpg` |
| `venue-hero-naiko-deep-creek` | `bath-naiko-deep-creek.mp4 (video, poster and 9:16 phone clip)` | `belle-229a8133.mp4` |
| `venue-around-naiko-deep-creek` | `coast-cove-house-drone-late.jpg` | `retreats-eve-dji-20251109100743-0026-d.jpg` |
| `fleurieu-hero` | `bay-cliff-walk-drone.jpg` | `home-page-homepage12.jpg` |
| `fleurieu-wild-kangaroos` | `kangaroo-paddock.jpg` | `home-page-home-page3.jpg` |
| `fleurieu-wild-ocean` | `surf-rocks-from-above.jpg` | `home-page-homepage11.jpg` |
| `fleurieu-wild-hiking` | `trail-trees-sea.jpg` | `retreats-eve-229a8358.jpg` |
| `fleurieu-table` | `olive-oil-wine-bread.jpg` | `our-partners-229a8851.jpg` |
| `team-hero` | `table-setting-two.jpg` | `retreats-eve-229a8728.jpg` |
| `journal-sleep-bath` | `bath-video-poster.jpg` | `video frame-0.5` |
| `story-hero` | `hills-coast-drone-wide.jpg` | `the-science--dji-0223.jpg` |
| `collective-hero` | `beach-dusk-drone.jpg` | `home-page-dji-0903.jpg` |
| `collective-recipes` | `pasta-lemons-overhead.jpg` | `home-page-homepage-9.jpg` |
| `collective-resources` | `gift-box.jpg` | `our-partners-229a9248.jpg` |
| `collective-join` | `long-table-overhead-2.jpg` | `lifestyle-we-dji-20251108142610-0450-d.jpg` |
| `gallery-intro-1` | `mats-glass-room-sea.jpg` | `our-partners-229a8593.jpg` |
| `gallery-intro-2` | `coast-cove-house-drone.jpg` | `home-page-homepage5.jpg` |
| `gallery-intro-3` | `long-table-overhead-2.jpg` | `lifestyle-we-dji-20251108142610-0450-d.jpg` |
| `faqs-intro` | `beach-walk-cliffs.jpg` | `home-page-homepage2.jpg` |
| `waitlist-intro` | `beach-cliff-sun-seated.jpg` | `retreats-eve-229a9408.jpg` |
| `giftcards-intro` | `gift-box.jpg` | `our-partners-229a9248.jpg` |
| `notfound-calm` | `hills-coast-drone-wide.jpg` | `the-science--dji-0223.jpg` |
| `experience-sauna` | `barrel-sauna-cliff.jpg` | `home-page-homepage10.jpg` |
| `experience-massage` | `massage-towel-rest.jpg` | `retreats-eve-229a8504.jpg` |
| `experience-contrast-therapy` | `sauna-cold-tubs-cliff.jpg` | `retreats-eve-dji-0210-crop-out-car.jpg` |
| `experience-pasta-making` | `chef-kitchen-guests.jpg` | `retreats-eve-229a8698.jpg` |
| `experience-mediterranean-table` | `table-lemons-sea-3.jpg` | `retreats-eve-229a8748.jpg` |
| `experience-yoga` | `deck-breathwork-sky.jpg` | `retreats-eve-229a9336.jpg` |
| `experience-pilates` | `mat-stretch.jpg` | `our-partners-229a8640.jpg` |
| `experience-meditation-and-mindfulness` | `deck-rest-faces.jpg` | `retreats-eve-229a9342.jpg` |
| `experience-gut-health` | `bowls-hands-overhead.jpg` | `retreats-eve-229a8246.jpg` |
| `experience-nutrition-consultations` | `journal-pen-candle.jpg` | `the-science--229a8210.jpg` |
| `experience-coastal-hiking` | `bay-cliff-walk-drone.jpg` | `home-page-homepage12.jpg` |
| `experience-ocean-swimming` | `beach-walk-cliffs.jpg` | `home-page-homepage2.jpg` |
| `experience-journaling-and-reading` | `cup-sea-view.jpg` | `retreats-eve-229a8403.jpg` |
| `experience-relaxing-by-the-fire` | `living-fire-sea.jpg` | `retreats-eve-229a9365.jpg` |
| `pillar-nutrition` | `bowl-held.jpg` | `home-page-homepage7.jpg` |
| `pillar-movement` | `hillside-walk-three.jpg` | `retreats-eve-229a8527.jpg` |
| `pillar-sleep-and-recovery` | `bath-naiko-deep-creek.mp4 (video, poster and 9:16 phone clip)` | `belle-229a8133.mp4` |
| `pillar-psychological-wellbeing` | `breathwork-verandah-close.jpg` | `the-science--229a9323.jpg` |
| `pillar-nature-immersion` | `kangaroo-paddock.jpg` | `home-page-home-page3.jpg` |
| `pillar-connection` | `long-table-overhead-group.jpg` | `the-science--zoom-up-further-connection-copy-of-dji-20251108132519-0437-d.jpg` |
| `pillar-balance` | `balance-brownies-berries.jpg` | `the-science--balance.jpg` |
| `pillar-personalisation` | `journal-pen-candle.jpg` | `the-science--229a8210.jpg` |
| `pillar-wellness-education` | `bowls-hands-overhead.jpg` | `retreats-eve-229a8246.jpg` |
| `pillar-luxury-and-heartfelt-hospitality` | `table-lemons-sea.jpg` | `retreats-eve-229a8736.jpg` |
| `venue-naiko-deep-creek-card` | `coast-cove-house-drone-late.jpg` | `retreats-eve-dji-20251109100743-0026-d.jpg` |
| `venue-naiko-deep-creek-map` | `headland-late-light-drone.jpg` | `home-page-homepage13.jpg` |
| `venue-naiko-deep-creek-deck` | `glass-cliff-sea.jpg` | `retreats-eve-229a8589.jpg` |
| `venue-naiko-deep-creek-bath` | `bath-window-sea.jpg` | `home-page-home-page.jpg` |
| `venue-naiko-deep-creek-beach` | `surf-rocks-from-above.jpg` | `home-page-homepage11.jpg` |
| `venue-naiko-deep-creek-trails` | `trail-trees-sea.jpg` | `retreats-eve-229a8358.jpg` |
| `team-luca-guiotto` | `luca-guiotto.jpg` | `our-partners-luca-pic.jpg` |
| `testimonial-corporate-1` | `pasta-lemons-overhead.jpg` | `home-page-homepage-9.jpg` |
| `testimonial-corporate-2` | `lunch-table-glasses.jpg` | `retreats-eve-229a8924.jpg` |
| `testimonial-corporate-3` | `chef-plating.jpg` | `our-partners-229a8915.jpg` |
| `testimonial-corporate-4` | `tuna-plate.jpg` | `our-partners-tuna-pic-2.jpg` |
| `testimonial-table` | `chef-pouring-oil.jpg` | `lifestyle-we-229a8909.jpg` |
| `testimonial-yoga` | `deck-stretch-close.jpg` | `home-page-homepage8.jpg` |
| `testimonial-workshop` | `breathwork-verandah-close.jpg` | `the-science--229a9323.jpg` |
| `testimonial-contrast` | `barrel-sauna-cold-tubs.jpg` | `retreats-eve-229a9318.jpg` |
| `testimonial-retreat-1` | `massage-room-oval-window.jpg` | `retreats-eve-229a8450.jpg` |
| `testimonial-retreat-2` | `table-lemons-sea-2.jpg` | `retreats-eve-229a8739.jpg` |
| `testimonial-retreat-3` | `beach-dusk-drone.jpg` | `home-page-dji-0903.jpg` |
| `testimonial-retreat-4` | `beach-cliff-sun.jpg` | `home-page-229a9409.jpg` |
| `testimonial-retreat-5` | `kingfish-plate.jpg` | `our-partners-kingfish-2025.jpg` |
| `journal-sleep` | `rest-eyes-closed.jpg` | `home-page-229a8642.jpg` |
| `journal-poke-bowl` | `bowl-held.jpg` | `home-page-homepage7.jpg` |
| `food-refreshments` | `glass-cliff-sea.jpg` | `retreats-eve-229a8589.jpg` |
| `food-lunch` | `long-table-overhead.jpg` | `home-page-homepage3.jpg` |
| `food-dinner` | `tuna-plate.jpg` | `our-partners-tuna-pic-2.jpg` |
| `food-dessert` | `balance-brownies-berries.jpg` | `the-science--balance.jpg` |
| `food-signature-dining` | `chef-plating.jpg` | `our-partners-229a8915.jpg` |
| `food-signature-pasta` | `tortelli-plate.jpg` | `our-partners-tortelli-2025.jpg` |

## Reuse count per photo

This counts live pages only; the styleguide is excluded. Photos used three or more times are the strongest frames, and they are spread across different pages. Each page is checked so the same photo never appears twice on one page, with one exception. On home, the side stretch appears in the zoom mosaic and, as a separate tighter crop, in the yoga testimonial. The pool ran out there because home carries 62 slots. Near twins (the same scene shot a second apart) count as separate files here.

| File | Slots |
|---|---|
| `hills-coast-drone-wide.jpg` | 4 |
| `bath-naiko-deep-creek.mp4 (video, poster and 9:16 phone clip)` | 4 |
| `coast-cove-house-drone-late.jpg` | 4 |
| `bay-cliff-walk-drone.jpg` | 4 |
| `coast-cove-house-drone.jpg` | 3 |
| `deck-stretch-sea.jpg` | 3 |
| `long-table-overhead-group.jpg` | 3 |
| `mats-glass-room-sea.jpg` | 3 |
| `beach-dusk-drone.jpg` | 3 |
| `journal-pen-candle.jpg` | 3 |
| `bowls-hands-overhead.jpg` | 3 |
| `table-lemons-sea.jpg` | 3 |
| `surf-rocks-from-above.jpg` | 3 |
| `table-lemons-sea-2.jpg` | 2 |
| `chef-kitchen-guests.jpg` | 2 |
| `hillside-walk-three.jpg` | 2 |
| `long-table-overhead.jpg` | 2 |
| `tortelli-plate.jpg` | 2 |
| `table-setting-two.jpg` | 2 |
| `breathwork-verandah.jpg` | 2 |
| `beach-walk-bright.jpg` | 2 |
| `deck-breathwork-sky.jpg` | 2 |
| `massage-towel-rest.jpg` | 2 |
| `sauna-cold-tubs-cliff.jpg` | 2 |
| `headland-late-light-drone.jpg` | 2 |
| `kingfish-plate.jpg` | 2 |
| `lunch-table-glasses.jpg` | 2 |
| `kangaroo-paddock.jpg` | 2 |
| `trail-trees-sea.jpg` | 2 |
| `pasta-lemons-overhead.jpg` | 2 |
| `gift-box.jpg` | 2 |
| `long-table-overhead-2.jpg` | 2 |
| `beach-walk-cliffs.jpg` | 2 |
| `bowl-held.jpg` | 2 |
| `breathwork-verandah-close.jpg` | 2 |
| `balance-brownies-berries.jpg` | 2 |
| `glass-cliff-sea.jpg` | 2 |
| `chef-plating.jpg` | 2 |
| `tuna-plate.jpg` | 2 |
| `long-table-overhead-3.jpg` | 1 |
| `hills-coast-drone.jpg` | 1 |
| `massage-face.jpg` | 1 |
| `bath-cliff-candle.jpg` | 1 |
| `deck-sea-guests.jpg` | 1 |
| `fish-mussels-plate.jpg` | 1 |
| `olive-oil-bread.jpg` | 1 |
| `table-three-women-sea.jpg` | 1 |
| `olive-oil-wine-bread.jpg` | 1 |
| `bath-video-poster.jpg` | 1 |
| `beach-cliff-sun-seated.jpg` | 1 |
| `barrel-sauna-cliff.jpg` | 1 |
| `table-lemons-sea-3.jpg` | 1 |
| `mat-stretch.jpg` | 1 |
| `deck-rest-faces.jpg` | 1 |
| `cup-sea-view.jpg` | 1 |
| `living-fire-sea.jpg` | 1 |
| `bath-window-sea.jpg` | 1 |
| `luca-guiotto.jpg` | 1 |
| `chef-pouring-oil.jpg` | 1 |
| `deck-stretch-close.jpg` | 1 |
| `barrel-sauna-cold-tubs.jpg` | 1 |
| `massage-room-oval-window.jpg` | 1 |
| `beach-cliff-sun.jpg` | 1 |
| `rest-eyes-closed.jpg` | 1 |
