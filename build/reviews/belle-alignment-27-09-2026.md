---
title: Belle alignment review, local media pass
date: 27-09-2026
author: Belle alignment agent
status: Internal, for Jess and the content, design and imagery agents. Not for Belle.
voice-verbatim-source: Belle Redden. Transcript `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt` (cited T and the line number), the Branding questionnaire docx (cited Q), her 09-09-2026 emails and the agency meeting as recorded in `build/01-creative-brief-transcript-first.md` (cited EM, AM and CP). Her words are quoted exactly, transcription errors included, and trimmed with an ellipsis where the voice gate blocks a word inside her quote.
method: Read the transcript in full, the brain dump file, the requirements register, the creative brief, the Branding questionnaire, the questions list and the final sign-off. Read the source of every main page and the components behind them. Screenshots with notes off at 1440 and 390 (home, stepped every screen) and at 1440 for 17 more pages, saved in `qa/shots/belle-alignment/` (`sheet*.png` and `s-*.png` are contact sheets). Viewed all 71 of Belle's photos as thumbnails and the bath video frames.
---

# Belle alignment review

## The short version

The build follows Belle's brief closely. Almost every section she named has a home, her words carry the headings, the palette is her style guide, and the three references she loved most (The Tailor's slide-in day, the text-left experiences slider, COMO's pillar row) are built.

What she would react to today is the imagery. **All 191 media slots were empty** at the time of this review (no `src:` in any `site/src/data/media/slots-*.ts`), so every page is sand-toned frames. She said the imagery "is what sells" (T27) and "Visually getting the site to where I want it is key for me" (CP-02). The media pass decides her reaction, and the direction for it is in "Media direction by page" below.

Beyond media, the gaps she would notice are the discovery call being almost invisible, the hero not zooming on scroll, "Our difference" still being a plain list, the bath video having no slot that can play it, and the dark sage bar across every phone screen.

Rule used for marking. Where the structure is built and only a file is missing, the item is Met with "media pending". Where the wish is the imagery itself (the first screen, seeing what a venue looks like), missing media makes it Missing.

## Counts

| Status | Count | Items |
|---|---|---|
| Met | 53 | All rows not listed below |
| Partly | 22 | 4, 6, 7, 12, 14, 22, 25, 27, 31, 34, 40, 43, 44, 46, 52, 53, 58, 63, 66, 69, 77, 81 |
| Missing | 6 | 10, 11, 16, 24, 33, 55 |
| Contradicted | 1 | 15 |
| Total | 82 | |

## Her own ranking of what matters most

Belle never numbered her priorities, so this order comes from how often and how strongly she returned to each point.

1. **Imagery and drone footage selling the experience from the first screen.** "the imagery is what all the photography, videography, uh, is what sells" (T27). "Visually getting the site to where I want it is key for me." (CP-02)
2. **The 8 hour day for private and corporate groups, ending in a discovery call.** "really the type of sales I wanna be making are those eight hour immersive full day retreats" (T33). In writing: "more sales calls booked, more retreat bookings" (EM-01).
3. **The experiences section.** "one of the key sections at the moment that's missing on the site" (T30).
4. **The philosophy pillars and her five differences.** "this philosophy is really important" (T31).
5. **The places, shown with as much imagery as possible.** "I just feel like really I need to show as much imagery as possible at these locations" (T30).
6. **Light, bright, sand and sage.** Said twice in the transcript and three times in the questionnaire.
7. **Proof and people.** Testimonials "especially for me as a new business" (T39), and the team with qualifications.
8. **Food.** Raised late but in detail (T50, T60).
9. **Journal, app, Collective, gallery, True South.** Wanted, with True South explicitly a small placement (T60).

## Checklist

Status key: Met, Partly, Missing, Contradicted. Paths are under `site/src/` unless they start with `build/` or `media-pool/`.

### Overall feel and brand

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 1 | Sand as the dominant background | "using more of the soft sand color, um, as the background" (T27) | Met | `styles/tokens.css:10-15`, home sections on `--sand-30` (`pages/index.astro:148-155`) |
| 2 | Sage for wording and headings | "for, like, um, wording and headings, maybe using La Miraya, the sage green" (T57) | Met | `styles/tokens.css:24-28`, values match style guide page 7 (#433D1B, #635B39) |
| 3 | Light, bright, summery | "I want it to be light and bright and you know, more summary" (T27) | Met | Every band is sand, salt or white. Shots `sheet1440-*.png` |
| 4 | No dark tones | "When i think of La marea i think light, bright, soft, coastal nature inspired tones/vibes rather than dark tones" (Q) | Partly | The phone sticky bar is a full-width solid `--sage-80` band on every screen (`components/layout/StickyCta.astro:28`), and the header button is a solid dark block. At 390 it is the heaviest thing in view (`sheet390-*.png`) |
| 5 | Simple, minimal, elegant, lots of white space | "simple, minimalistic, elegant... just lots of white space as well" (T27) | Met | Generous section padding, one idea per band |
| 6 | Small, easy to read luxury fonts like Aman and The Tailor | "I like the fonts used in, like, Aman, for example. I think just, yeah, really easy to read and simple." (T57) | Partly | `styles/tokens.css:50-52`. Italiana stands in for her brand face HV Muse (question 3). Italiana at hero size is thin and wide, more decorative than Aman |
| 7 | Mediterranean chic | "building a really Mediterranean chic sort of site in and around that base and color" (T27) | Partly | The frame is right. The chic comes from her photos of the green linen table, lemons and olive oil, none placed yet |
| 8 | Nothing bouncy, soft and relaxing | "nothing sort of bouncing or, you know, it's all very, like, soft and relaxing" (T48) | Met | `styles/tokens.css:93`, no overshoot easing anywhere in `src/` |
| 9 | The site tells a story as you scroll | "I want the the website to sort of, yeah, tell a bit of a story a story about the flurio" (T48) | Met | Home order in `pages/index.astro:72-144`: arrive, the Fleurieu, the day, move, nourish, restore, difference, proof |
| 10 | Visitors say "oh wow" on arrival | "people need to look at the site and go, oh, wow. Like, that place looks amazing" (T48) | Missing | The hero is an empty frame (`data/media/slots-foundation.ts:16`, `home-hero` has no `src`). See fix 1 |
| 11 | The luxury feel carried by imagery through the whole site | "I'd like to follow that through visually throughout the entire site" (T27) | Missing | 0 of 191 slots filled |
| 12 | Transformation and slowing down, against hustle culture | "leave feeling different, lighter, calmer, empowered, educated, um, and just really rested" and "La Merare is all about slowing down and restoration recovery" (T48) | Partly | Only `pages/retreats.astro:69` ("slow down") carries it. Home, the Day and both path pages never say how a guest leaves feeling |
| 13 | Sold to interstate visitors who have never been | "if they've never been to South Australia" (T33) | Met | `pages/fleurieu-peninsula-retreats.astro` ("For a first visit"), drive facts in `components/hero/ZoomMosaic.astro` |
| 14 | The unique combination said plainly | "it combines amazing locations on the Florio Peninsula, luxury accommodation, and luxury wellness" (T60) | Partly | `components/pages/a/Invitation.astro:29` names hospitality and wellness only. The place and the five star venues are missing from the one sentence that explains La maréa |
| 15 | La maréa as a South Australian first | "I want to clear that LAMRA is a South Australian first" (T60) | Contradicted | Held back on purpose (`pages/our-story.astro:163`, question 2), because a competitor already sells curated SA wellness. Keep it held until Belle answers |
| 16 | True South alignment, placed simply | "I'd like to explore, yeah, adding them simply somewhere" (T60) | Missing | `data/settings.ts:173-177` is a hidden placeholder. Waits on Belle's own words (question 23) |
| 17 | Tagline | "Luxury coastal wellness, reimagined." (Q) | Met | `data/settings.ts:24`, circle submark in the footer |
| 18 | Scorpios vocabulary: rituals, pause, unhurried, spaces | "great key words and terminology used. Rituals, transformation, unhurried conversation, pause, spaces etc." (T7) | Met | "Places to Pause", "The unhurried afternoon", "unhurried conversation" on `/food` |
| 19 | Her wording ideas used | "RESTORE. RECONNECT. REALIGN." and "Your Retreat, Your Rhythm, Your Routine" (T63-65) | Met | `components/pages/a/Invitation.astro`, `pages/index.astro:89`, `pages/philosophy/index.astro:111` |
| 20 | The name story | "La Maréa stems from the Spanish phrase 'la marea,' meaning 'the tide'" (T77) | Met | `pages/philosophy/index.astro:75-76` |
| 21 | Nothing that looks like the old site | "it's very far off the mark in terms of where I want it to be" (AM-08) | Met | Nothing carried over visually |
| 22 | Not a beach-only site | "It's showing the accommodation as well as the different wellness experiences." (T55) | Partly | Slots are balanced across coast, venues and experiences. Media pending, and the photo pool leans coastal, so the imagery agent must hold the balance |
| 23 | Nature, ocean and hiking throughout | "nature is a a big component of this" (T55) | Met | Nature slider on `/fleurieu-peninsula-retreats`, coastal hiking tile, venue "Around" sections. Media pending |

### Visual and motion

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 24 | Big imagery or drone footage the moment you arrive | "straight away as soon as you come onto the site, there's big, beautiful, um, you know, imagery or drone footage" (T27) | Missing | `components/hero/Hero.astro`, slot `home-hero`. No drone video is in `media-pool/`, only the bath clip |
| 25 | Hero video that zooms in as you scroll | "that video when you scroll down, and then it sort of zooms in. That's an amazing feature." (T53) | Partly | The hero only settles on load (`components/hero/Hero.astro:211`). The zoom lives one section down on stills (`components/hero/ZoomMosaic.astro`). She described the video itself zooming |
| 26 | Elements sliding in from the right | "It keeps, like, coming out from the the right hand side, like, appearing" (T33) | Met | `components/day/PinnedDay.astro`, the ZoomMosaic drive facts |
| 27 | Sliders with images and sliders with videos | "sliders that have imagery as well as sliders that have videos. Um, I think that would be important." (T53) | Partly | `components/experiences/PaneSlider.astro` supports video tiles, but home forces posters (`pages/index.astro:92`) and the only video in hand is the bath. No slider plays video today |
| 28 | Parallax imagery | "parallax imagery works" (AM-03, Belle agreeing) | Met | `components/base/MediaBand.astro` |
| 29 | Minimal drop downs with a small arrow, no plus | "I probably wouldn't have a plus sign, but maybe like a a small minimalistic arrow" (T52) | Met | `components/base/Accordion.astro`, chevrons throughout |
| 30 | A detail that pops up in place (SHA diets) | "I quite like how that sort of pops up" (T52) | Met | `components/base/ExpandTile.astro` on the signature culinary tiles |
| 31 | Tabs and filters built from the start | "if we can build it right from the start in terms of having those, um, tabs, um, and filters" (T53) | Partly | Places, testimonials and team tabs work. Journal filters stay off until eight posts (`pages/journal/index.astro:87`), so a visitor sees no filter on the section she named first |
| 32 | Progress rule under sliders, cross-fades, hover states | "it doesn't have like a line underneath here where you can scroll" (AM-03) | Met | `components/slider/Slider.astro`, `SliderArrows.astro` |
| 33 | Drone footage slowed for a slow luxury feel | "edited, slowed down potentially, um, I think, to really... capture that sort of slow luxury feel" (T55) | Missing | No drone footage in `media-pool/video/`. Jess needs DJI_0781, DJI_0604 and the left pan exported and slowed |
| 34 | A little animation on the places index (Basq House) | "just a big beautiful imagery, a cool little mini animation" (T30) | Partly | `components/venues/VenueIndex.astro:7` says "No image drift on hover". The arch cards are still apart from an arrow nudge |
| 35 | Art-directed proportions, never a snapped grid | "I feel like you can notice it a lot like the difference." (AM-04) | Met | One third to two thirds splits on every major section |
| 36 | No sideways scroll on tablets and phones | The fault she was warned about in the agency meeting (AM-09) | Met | `build/reviews/final-signoff.md`, 0 overflow at 12 widths |

### Experiences

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 37 | An experiences slider like The Tailor and Bathhouse Albion | "I'm thinking something like that that shows our different experiences" (T30) | Met | `components/experiences/PaneSlider.astro` on home and `/experiences`. Media pending |
| 38 | Text on the left that stays, items moving on the right | What she was refused in the agency meeting, "not with uh with the left the text on the left" (AM-02) | Met | Same component |
| 39 | The ten experiences she listed | "sauna, massage, contrast therapy, chef-led pasta making masterclass, chef curated mediterranean dining, yoga, pilates, meditation & mindfulness, gut health nutrition workshop, lifestyle wellness & nutrition consultations" (T19) | Met | `content/experiences/*.json` |
| 40 | Each with imagery and a little explanation underneath | "and a little explanation underneath" (T30) | Partly | Sauna shows a name and no line, several lines are schedule text (`build/reviews/final-signoff.md` remaining issue 4). Waits on Belle (question 17) |
| 41 | A slider of self-led activities | "doing a slider of the retreat self led activities would be amazing too" (T60) | Met | `/experiences` and the Day page, six tiles |

### The 8 hour day

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 42 | The full day elevated, told through imagery and moving animation | "through imagery, beautiful imagery, um, you know, animations that move" (T33) | Met | `components/day/PinnedDay.astro` on home, `/corporate` and `/experiences/full-day-retreat`. Media pending |
| 43 | Ends in a discovery call with Belle | "get them to book a discovery call with me to curate their eight hour immersive retreat" (T33) | Partly | Every Day button reads "Plan your day" and opens the funnel. "Book a discovery call" appears only on the thank-you page and funnel step 1 (`data/settings.ts:30-41`). A visitor reading the Day never learns that a call with Belle is the next step, apart from one small line on `/experiences` |
| 44 | The Beresford reel, shown somehow | "I'm not sure how it would look as a, you know, Instagram sort of video reel on the site" (T60) | Partly | `components/pages/b/ReelFrame.astro` on `/experiences/full-day-retreat`. The reel is not in `media-pool/` (question 18) |
| 45 | Two distinct audience paths | "almost like two distinct stories, Private groups & retreats and corporate bookings" (EM) | Met | `/private-groups`, `/corporate`, hero doors |
| 46 | A form for corporates and private groups | "I still think I do need some sort of form for corporates and private groups to capture this" (T53) | Partly | `/enquire` funnel works end to end, but posts to an endpoint that answers 405, so a real enquiry would not reach her (final sign-off remaining issue 2) |
| 47 | A section near the form that shows how the day gets customised | "how we can customize the guest retreat to them, asking them some questions" (T53) | Met | `components/base/QuestionCircles.astro` on home and path pages |

### Places to Pause

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 48 | Name it around spaces or places | "terminology for this, it might be more so around the spaces or the places" (T30) | Met | "Places to Pause" throughout |
| 49 | A clean index with a page per venue | "a clean looking sort of main page for these places" (T30) | Met | `pages/places/index.astro`, `pages/places/[slug].astro` |
| 50 | Built so she can add venues | "I'm going to be adding accommodation venues over time" (T30) | Met | `content/venues/` collection |
| 51 | Coast versus vineyards | "breaking it up, like, coast versus vineyards or inland" (T56) | Met | Filter row on `/places` |
| 52 | Four venues with their sizes | "Naiko Deep Creek (sleeps 6)", "Naiko Encounter Bay (sleeps 10)", "Beresford Estate (sleeps 20+)", "The Vineyard Retreat (sleeps 10)" (T42-46) | Partly | Three show. The Vineyard Retreat is hidden pending confirmation (`content/venues/the-vineyard-retreat.json`, question 14) |
| 53 | All partners shown as luxury five star | "the accommodation options I do partner with are luxury five star accommodations, and I really wanna show this in the site" (T30) | Partly | Only the two Naiko venues say five star. Beresford reads "Partner venue" (`content/venues/beresford-estate.json:31`, question 7) |
| 54 | Venue detail with an image, info on the left, arrows through more images | "an image and then some information on the left, and then you click the arrows" (T30) | Met | `components/venues/SteppedGallery.astro` ("Within the venue") |
| 55 | Enough imagery to see whether a venue is coast or vineyard and what it includes | "so that people get a really good idea on where is it is it in the vineyards, what it includes" (T30) | Missing | No venue image placed. Beresford has no photos in the pool at all |
| 56 | A map of South Australia with the locations | "whether you showed a map of, um, Australia or South Australia and then the different sort of locations" (T33) | Met | `components/map/FleurieuMap.astro` on home, `/places`, `/fleurieu-peninsula-retreats` |
| 57 | Adelaide CBD held back | "I don't really wanna be promoting Adelaide CBD options too much" (T56) | Met | No CBD venue anywhere |
| 58 | The bath shot as the Naiko Deep Creek hero | "maybe we have, like, a hero banner, and it's, like, the bar shot" (T55) | Partly | Slot `venue-hero-naiko-deep-creek` exists but is `type: 'image'` (`data/media/slots-page-c.ts:31-35`). Her one video is that bath shot, so this slot should be a video |

### Philosophy and difference

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 59 | Pillars bigger and more luxurious, each with its video and a discover more | "each sort of pillar is there, the video, of the pillar, and then if they wanna learn more, discover more" (T31) | Met | `components/pillars/FlexShowcase.astro` on `/philosophy`. Pillar videos not in `media-pool/` |
| 60 | COMO's move from one to the next | "you go from one, and then the animation moves to the other" (T31) | Met | Same component, width trade over 800ms |
| 61 | Pillars appear as soon as you open the philosophy page | "as soon as people come to the philosophy page, yeah, I'd really love those sort of brand pillars to pop up" (T31) | Met | Ten icons under the hero, `pages/philosophy/index.astro:62-66` |
| 62 | Less wording on the surface | "maybe a little bit less wording or a button where it says read more" (T31) | Met | One line per pillar |
| 63 | Each pillar links to its evidence and references on a separate page | "they click, you know, learn more, and it takes them to a separate site where there is our science" (T31) | Partly | Only Sleep and recovery has a page (`pages/philosophy/[pillar].astro:31`). The other nine open an accordion of author and year citations |
| 64 | Mediterranean inspired, science backed, Fleurieu based | "our philosophy is all really Mediterranean inspired, science backed" (T31) | Met | `pages/philosophy/index.astro:86` |
| 65 | Science kept minimal | "So it's not heaps wordy and busy" (T31) | Met | Accordion, small type |
| 66 | The five differences shown far more beautifully | "I still really believe that those five areas, um, are our difference" and she wants them shown "in a in a much more beautiful way" (T31) | Partly | Home "Our difference" is a numbered text list with a small thumbnail per row (`pages/index.astro:116-124`, `components/base/NumberedMoments.astro`). At 1440 the heading read very pale mid-reveal. She named this section twice and it is the plainest on the page |
| 67 | The eight words with her definitions | "Release: Let go of stress, tension, and old habits" and the other seven (T68-75) | Met | `components/pillars/Intentions.astro` on `/philosophy` |

### Food

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 68 | Food philosophy: Mediterranean, plant based | "our food philosophy around the Mediterranean diet and plant based eating" (T50) | Met | `pages/food.astro` "Simple, seasonal and shared" |
| 69 | Walk from breakfast to dessert | "images popping up of breakfast, lunch, dinner, dessert" (T60) | Partly | `content/menus/dinner.json` and `dessert.json` are placeholders (question 18) |
| 70 | Fine dining and shared eating | "that sort of shared eating to... connection, team bonding, shared meals" (T50), trimmed | Met | `/food` "Fine dining" and "The shared table". Media pending, and the pool has both |
| 71 | Signature culinary experiences, two named | "I call them our signature culinary experiences" (T50) | Met | `components/food/SignatureTabs.astro`, home `TableMoment` |
| 72 | An example menu | "maybe a dinner, a menu example" (T50) | Met | Lunch menu accordion on `/food` |
| 73 | Local Fleurieu producers | "local Flora Peninsula, uh, producers" (T50) | Met | `/food` and `/fleurieu-peninsula-retreats` name producers and partners |
| 74 | Flavours of the Fleurieu | "through the flavors of the flurry" (T60), trimmed | Met | `/food` hero "The flavours of the Fleurieu" |

### People, proof, journal, future

| # | Belle's wish | Her words (source) | Status | Where it lives, and the gap |
|---|---|---|---|---|
| 75 | Wellness practitioners and food and hospitality shown separately | "we've got the wellness practitioners and then a section food hospitality" (T49) | Met | Tabs on `/team` (`components/team/TeamCarousel.astro`) |
| 76 | Big imagery, qualifications and bio, SHA arrow carousel | "this big beautiful imagery of the person and a bit about their qualifications and bio" (T39) | Met | Same component. Portraits pending, and Luca's portrait is in the pool (`our-partners-luca-pic`) |
| 77 | Do not copy The Tailor too much | "don't want to, um, you know, copy too much of the tailor's site and set out" (T39) | Partly | The split header with the centred logo still reads as The Tailor's (final sign-off remaining issue 3) |
| 78 | Testimonials with an image and words beneath, leaning corporate and private | "client testimonials set up with an image, and then, um, sort of a bit of wording under that" (T39) | Met | `components/testimonials/Testimonials.astro`, corporate tab first, 18 Google reviews |
| 79 | A gallery of past retreats | "a beautiful gallery that people can explore" (T60) | Met | `/gallery`. Media pending |
| 80 | A wellness journal, editorial, image cards, slider with arrows | "more of like a wellness journal editorial" (T39) | Met | `/journal`, `components/journal/JournalCards.astro` |
| 81 | Coming 2027 app, building hype | "I think it'd be good to get it on the site soon to sort of build... start to build that hype" (T32) | Partly | `/app` exists. On home it is one small text column in `components/pages/a/StayClose.astro:44-45`, which does not build anticipation |
| 82 | Rising Tides Collective: first release retreats, recipes, resources, earned by attending | "You can't just choose to, you know, come into this." (T32) | Met | `/rising-tides-collective` |

## Media direction by page

Belle's grading rule for every frame: light, bright, summery, warm white balance, lifted shadows, green and turquoise water, no dark vignette (questionnaire: "light, bright, soft, coastal nature inspired tones"). Several pool photos are moody (the dusk beach, the storm-light coast, the dark fireplace room). Lift them or keep them out of heroes.

What is in hand: 71 stills and one 10 second video (the Naiko bath). No drone video, no pillar videos, no Beresford imagery, no dolphin or seal footage. The drone stills in the pool (`home-page-dji-0219`, `home-page-homepage5`, `retreats-eve-dji-20251109100743-0026-d`, `the-science--dji-0223`) are the best stand-ins for the footage she described.

### Home

| Section | What Belle's words point to | Movement on scroll |
|---|---|---|
| Hero (`home-hero`) | The Fleurieu coast from above in summer light: hills, rocks, beach, green water. Her named clips are DJI_0781 (bird's eye along the coast) and DJI_0604 (pan away from the coast). Until a drone export exists, the aerial of the turquoise cove with the house on the cliff (`home-page-homepage5`) or the coast and hills aerial (`home-page-dji-0219`). **Not the bath**: she said the bath "isn't, like, a summary travel vibes" (T55) | This is where she wants the zoom. A still can carry a slow scale on scroll now, and the drone clip replaces it later |
| Invitation | Text band, no image needed | Soft fade only |
| The Fleurieu zoom mosaic | Five stills of the offer around a centre frame that is not beach: yoga on the deck above the sea (`home-page-homepage8`), the green linen shared table from above (`home-page-homepage3`), the barrel sauna on the cliff (`home-page-homepage10`), a massage (`retreats-eve-229a8491`), the bath (`home-page-home-page`). Centre: the hills aerial | Zoom to the centre, then the drive facts slide in from the right. This carries her zoom wish until the hero video exists |
| The Day, four panels | Arrive: guests on the deck or a welcome drink with the sea behind (`retreats-eve-229a8579`, `retreats-eve-229a8589`). Move: the glass-walled yoga room (`retreats-eve-229a8911` or `our-partners-229a8625`). Nourish: the shared table being set with the sea behind (`retreats-eve-229a8736` to `229a8752`). Restore: the barrel sauna or guests resting on the deck (`retreats-eve-229a9336`). The panels name Beresford and every photo is Naiko, so caption by activity, never by venue | Panels arrive from the right, her favourite animation. Keep every frame bright because each is held full height |
| Experiences slider | One photo per experience, people doing the thing: massage (`retreats-eve-229a8450` to `8504`), barrel sauna for sauna and contrast therapy, yoga on the deck, breathwork lying down (`retreats-eve-229a9342`), chef plating for the dining (`our-partners-229a8915`), olive oil and lemons for the gut health workshop, Belle with the berries for consultations (`home-page-229a8966`) | Posters on home. On `/experiences` the sauna or recovery tile can loop the bath clip |
| The Table | The long shared table from above for "connection, team bonding, shared meals" (T50), then a fine dining plate (`our-partners-kingfish-2025`, `our-partners-tortelli-2025`) | A slow parallax on the table image |
| Places to Pause map | One frame per venue: the cove aerial for Deep Creek, the headland with the barrel sauna for Encounter Bay (confirm which is which, question 21). Beresford has nothing, so keep its placeholder light | Arrows step venue to venue |
| Our difference | Five images that prove each claim: the coast aerial (SA based), the pillar icons (evidence), a practitioner at work (qualified), a producer or the olive oil (local), Belle herself (family owned) | Where her COMO wish applies. Larger images that move in one at a time |
| Proof | Guests on a retreat, bright and candid: women at the table (`retreats-eve-229a8924`), walkers on the coastal trail (`retreats-eve-229a8358`) | Slider, no auto movement |
| Journal cards | Food photos from her Lifestyle and Home folders: the poke bowl (`home-page-homepage7`), the lemon bowl (`home-page-homepage-9`) | Slider |

### Other pages

| Page | What her words point to | Movement |
|---|---|---|
| `/experiences/full-day-retreat` hero | The whole day in one frame: the group at the long table with the sea behind (`retreats-eve-229a8752`) or the aerial of the group walking on the hill (`retreats-eve-229a8527`) | The Beresford reel belongs here once she sends it (question 18) |
| `/experiences` hero | Movement on the coast: yoga on the balcony above the sea (`home-page-homepage8`) | Slow drift |
| `/places` hero | The Naiko headland with the sea, bright (`home-page-crop-our-car-copy-of-dji-0210`) | Slow drift |
| `/places/naiko-deep-creek` hero | **The bath video** (`media-pool/video/belle-229a8133.mp4`, portrait crop for phones). This is where she placed it (T55). Needs the slot changed to video (fix 4). Then the cove aerial below | Autoplay loop, muted, no extra zoom on top of its own push-in |
| `/places/naiko-encounter-bay` hero | The headland with the barrel sauna and the pool deck | Parallax |
| `/places/beresford-estate` | Vines and the house. None in hand. Keep light placeholders and never use a Naiko photo | None until real imagery |
| `/philosophy` hero | Nature and nourishment together, from her folder "The science behind la maréa" (`the-science--229a8188`, `the-science--dji-0223`) | The pillar row wants her ten pillar videos (not in hand). Until then one still per pillar, matched to the pillar name |
| `/food` | Plates and hands: Luca plating, the tortelli, the olive oil pour, breakfast with berries | Parallax on the table band |
| `/team` | Luca's portrait (`our-partners-luca-pic`) and the chef in the kitchen with guests (`retreats-eve-229a8698`). Other portraits pending | None |
| `/fleurieu-peninsula-retreats` | The kangaroo in the grass (`home-page-home-page3`), the coastal walkers, the rocks and sun beach. Dolphins and seals not in hand | Nature slider |
| `/gallery` | The "Retreats, events and bookings" folder, in the order of a day | Expand in place |
| `/rising-tides-collective` and `/app` | Journaling by the window (`the-science--229a8210`), a guest with a cup looking at the sea (`retreats-eve-229a8403`) | None |
| `/corporate` hero | The group at the table, or the glass-room breathwork with the ocean (`our-partners-229a8593`) | Slow drift |
| `/private-groups` hero | Friends on the beach or the coastal trail (`home-page-homepage2`, `retreats-eve-229a8358`) | Slow drift |

## Fix list

Ranked by the effect on Belle's first reaction. Type in brackets.

1. **Fill the home hero with a bright coast frame and make it zoom on scroll (imagery, design).** Until the slowed DJI_0781 export exists, use the cove aerial `home-page-homepage5` or `home-page-dji-0219` in `home-hero` (`data/media/slots-foundation.ts:16`). Add a scroll-bound scale (about 1 to 1.15, linear, clamped) to the hero media in `components/hero/Hero.astro`, because she described the hero video itself zooming (T53). Do not use the bath here.

2. **Place her photos in every home slot and the four Day panels first (imagery).** Follow the home table above. The Day panels and experience tiles carry her main sale. Caption Day panels by activity because the photos are Naiko and the example day is Beresford.

3. **Make the discovery call visible on the Day (content, design).** Under each "Plan your day" on the Day (home `PinnedDay`, `/experiences/full-day-retreat`, `/corporate`, `/private-groups`), add the existing line "A few short questions about your group, then a discovery call with Belle." (already used on `/experiences`). Her words: "get them to book a discovery call with me" (T33). The calendar link rule in `data/settings.ts:30-41` can stay.

4. **Give the bath video a home on the Naiko Deep Creek page (imagery, design).** Change `venue-hero-naiko-deep-creek` to `type: 'video'` in `data/media/slots-page-c.ts:31`, set `src` to `belle-229a8133.mp4`, `srcMobile` to the portrait crop and `poster` to a frame. Confirm the bath is Deep Creek (question 21). Also loop it on the sauna or recovery tile on `/experiences`, which gives her the video slider she asked for (T53).

5. **Rebuild home "Our difference" as a moving, image-led sequence (design).** Replace the numbered list in `pages/index.astro:116-124` with larger images arriving one at a time, or a FlexShowcase-style row, keeping her five lines verbatim. She asked twice for this in "a much more beautiful way" (T31).

6. **Lighten the phone sticky bar and the header button (design).** `components/layout/StickyCta.astro:28` is a full-width `--sage-80` band on every phone screen. Use sand or salt with a sage hairline and sage text, or show the bar only after the hero. Same for the filled "Plan your day" button in the header. Her questionnaire is firm on no dark tones.

7. **Say the unique combination in the Invitation (content).** `components/pages/a/Invitation.astro:29-30` misses the Fleurieu and the five star venues. Use Belle's own typed line from T21 ("Luxury South Australian wellness experiences, curated to form La maréa.", with her dash replaced by a comma as already done on home) or ask her for one sentence naming place, venues and wellness. Add her outcome words (lighter, calmer, rested) only once she writes them for the site. Log both asks in `build/questions-for-belle-26-09-2026.md` rather than drafting.

8. **Turn on journal filters now (design).** `pages/journal/index.astro:87` holds filters back until eight posts. She named the Tailor's stories tabs as the reason to build filters from the start (T53). Two categories are enough to show the row.

9. **Add a small motion to the venue cards (design).** `components/venues/VenueIndex.astro:7` rules out image movement. A slow scale on hover and a soft reveal as each arch enters matches her "cool little mini animation" (T30) with no bounce.

10. **Swap Italiana for HV Muse once licensed, and check display sizes (design).** She wants "nice, small, luxury fonts" (T27). If HV Muse is cleared, use it for display and take the hero and section heading sizes down a step (`styles/tokens.css:50`).

11. **Give the app a proper teaser on home (design, content).** `components/pages/a/StayClose.astro:44-45` is one line. A small image-led panel with "Coming 2027" and the interest field would build the hype she asked for (T32).

12. **Change the header so it no longer reads as The Tailor's (design).** Final sign-off remaining issue 3. She warned against copying it (T39).

13. **Pillar pages beyond Sleep (content).** Nine pillars stop at an accordion (`pages/philosophy/[pillar].astro:31`). Belle has to supply references. Log the ask in the questions file and keep the accordions until then.

14. **Ask for the missing media in one message (for Jess).** DJI_0781, DJI_0604 and the left pan slowed to about 0.6x, the ten pillar videos, Beresford photos and reel, dolphin and seal clips, and practitioner portraits. Every Missing imagery item traces to this list.

15. **Keep the bath out of any home hero and keep "South Australian first" held (content).** Both rest on her own reservation or an open question (T55, question 2). Recorded so no agent reverses them during the media pass.

Content items: 3, 7, 11, 13, 15. Design items: 1, 3, 4, 5, 6, 8, 9, 10, 11, 12. Imagery items: 1, 2, 4, 14.
