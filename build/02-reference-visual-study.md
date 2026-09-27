---
title: La maréa reference visual study
date: 24-09-2026
role: Reference site researcher
status: Internal, for the design system builder, page builders and creative director. Not for Belle.
voice-verbatim-source: Belle's words in blockquotes are verbatim from _context/la-marea-website-brain-dump-transcript-14-09-2026.txt, speech-to-text errors kept
reads: build/00-orchestration-brief.md, the transcript, research/04, research/05, then live browsing
---

# La maréa reference visual study

This study records what the reference sites do, measured in a real browser on 24-09-2026, and how each mechanic becomes La maréa rather than a copy. Nothing from these sites (images, video, copy, fonts, code) goes onto the La maréa site. We take mechanics, proportion, pacing and restraint.

## How this was observed

Chromium 141 through Playwright 1.56.1, desktop at 1440 x 900 and mobile at 390 x 844 with a touch profile, en-AU locale, cookie banners and newsletter pop-ups dismissed. Every number below comes from `getComputedStyle`, `getBoundingClientRect` or the site's own stylesheet rules, read on the day. Scroll-driven effects were captured by stepping the scroll position in 50 to 150px increments and sampling transforms at each step, so the motion is described from measurements rather than from memory of the frames.

Screenshots are in `build/reference-shots/` (69 files, 5.2 MB, JPEG quality 70). They are internal reference only.

Four things could not be observed and are marked in the frames:

1. **Video did not decode.** Playwright's Chromium build has no H.264 decoder, so The Tailor's zoom tile and COMO's hero video render empty. The Tailor frames carry a labelled sand placeholder at the video tile's exact size and position, so the geometry is still true.
2. **Aman's hero video was blocked.** It is a Vimeo embed and `player.vimeo.com` returned 403 through the session proxy. The frame shows a labelled placeholder at the embed's real size.
3. **COMO's images returned 403 to the browser** (but 200 to curl), so they were fetched through Playwright's request API and handed back to the page. The images are COMO's own, unaltered.
4. **'Eat well, be well' was not found.** I searched the text of comoshambhala.com home, /nutrition, /about, /stories and the comohotels.com Kitchen Explained story. The phrase is on none of them. The nutrition page is the closest structure and is documented below.

## Corrections to research/04

Research/04 is mostly right and its measured values held up. Eight findings differ, and the designers should build from these.

1. **The Tailor's zoom is a mosaic.** Seven tiles (six stills around a central video) sit in a fixed layer that the page scrolls away from. The whole group scales from 0.98 to 2.18 over about 3,300px of scroll at 1440, and at 2.18 the centre video tile exactly fills the viewport (measured at -2, -1, 1444 x 903). Its final frame is the clip at viewport size, so a 1080p source is enough at 1440 wide. The 2.18 is a layout ratio: at full scale the video is shown at viewport size and no larger.
2. **The map is drawn in an ECharts canvas (698 x 656).** Research/04 describes it as inline SVG. On mobile there is no map at all: it is replaced by a wrapped row of outlined state pills.
3. **Nothing expands vertically inside the Best of Australia wipe.** Panel contents, image sizes and paragraph heights were sampled every 100px of scroll across the whole pin and never changed. What looks like a reveal in frame 04 is the right-hand paragraph column arriving on screen with its panel. The only vertical growth on the home page is the mosaic zoom directly above the wipe, which expands outward in every direction. If O6 ('left to right and then also this kind of expand up and down', from the other agency's meeting) stays a requirement, the vertical half has to be sourced from COMO's tile, where the image height collapses from 720 to 360px while the tile widens (section A3). Tell Jess this before anyone promises Belle a Tailor mechanic that The Tailor does not have.
4. **The wipe has four layers.** A static sand panel ('Looking for a once-in-a-lifetime Australian experience?') sits underneath, and three coloured panels slide over it.
5. **The Tailor has filled buttons in the header.** An orange filled pill labelled Enquire sits top right at every scroll position. The page body has no filled buttons, which is where research/04's claim holds. Aman does the same thing with one charcoal Reserve button in the header, and on mobile it becomes a full-width bar fixed to the bottom of the screen.
6. **The Tailor's palette has grown.** Beside the plum ramp there is now a forest green band `rgb(55, 72, 52)` for the needle-and-thread section and an orange band `rgb(229, 103, 63)` for the team, and the same orange is used for day tags, the drag cursor and link hovers.
7. **COMO's experiences row is hover-driven and rests with all four tiles equal.** At rest each tile is 360px wide. Hovering one sets it to 720 and the others to 240. There was no auto-advance in ten seconds of idle, and when the pointer leaves, the row returns to four equal tiles.
8. **COMO's journal crossfades between groups.** Each 'slide' is a group of three stories (one 620 x 404 lead image plus two narrow portrait images) and the arrows fade between groups over 2 seconds with `ease`.

---

## A. Site by site

### A1. The Tailor, thetailor.com

Belle's anchor site. Frames: `tailor-home-*`, `tailor-stories-*`, `tailor-about-*`.

> think you may, um, wire the sites that stands out from an animation standpoint is the tailor. And I think, yeah, I think it's just that combination of really amazing, um, like, luxury travel imagery with the animations.

> I like the fonts used in the tailor as well. I think they're quite cool.

#### Global measurements at 1440

| Item | Value |
|---|---|
| Page backgrounds | `#F8F7F4` warm off-white, `#F1EEE9` stone for testimonials, stories and awards, plum `#3E2A2E`, green `rgb(55, 72, 52)`, orange `rgb(229, 103, 63)` |
| Side margin | 80px padding at 1024, 1440 and 1920 alike. 20px at 390. No max content width, so at 1920 the content runs 1760px wide |
| Section padding | 130/130, 130/90, 120/60, 100/100, 50/50 at desktop. At 390 the 130s become 50 and the 100s become 33 top and 50 bottom |
| Vertical rhythm inside a block | eyebrow to heading 20px, heading to body 30 to 50px, body to CTA 40 to 50px, CTA to slider progress rule 70px |
| Display heading | Martina Plantijn 44px, weight 300, line height 52.8px (1.2), one or two words in italic. 40px at 1024, 30px (36px line) at 390 |
| Body | Martina Plantijn 16px, weight 300, 24px line (1.5) at every width |
| Eyebrow | Söhne 11.5px, 2.3px tracking (0.2em), uppercase |
| Nav | Söhne 11.5 to 12px, 1.15 to 1.2px tracking, uppercase |
| CTA | 34px circle, 1px ring, 17 x 12 arrow inside, label Söhne 12px 0.2em uppercase. Small variant 20px circle |
| Corners | Square on every image and card. 2px on filter tabs, 6px on award boxes |

#### Header

Transparent over the hero with white text: phone number and search at left, nav split either side of a centred wordmark, the orange Enquire pill and a 34px round menu button at right. Once the page scrolls, the header becomes a fixed 90px bar in `#F8F7F4` with plum text and a soft shadow `rgba(0, 0, 0, 0.08) 0 10px 30px 2px`. Scrolling down sets `top: -120px` so the bar slides out of view. Scrolling up by any amount sets `top: 0` and it slides back. The only transition is `top 0.5s` with the default ease. Frames `tailor-home-hero-01` and `tailor-home-intro-header-01`.

#### Menu overlay

The menu is a full-screen panel that drops from `top: -1800px` to `0` over 0.5s. A plum column on the left holds the logo and contact details. The main list is in the serif at about 16px with small chevrons, then Learn and Resources lists in the sans at 12px, with 10px uppercase group labels in `rgb(158, 148, 150)`. Hovered links turn orange. The right two thirds of the panel is an empty stone field in the frame, and it may fill with imagery on hover, which I did not observe. Mobile keeps the same structure in one column. Frames `tailor-home-menu-01-desktop` and `-mobile`.

#### Hero

A full-bleed still (aerial beach and granite) at 1440 x 900 with the brand name set as a 149px-tall wordmark across the full width at the bottom, and a three-line tagline in small spaced capitals between the two words. The hero is not a video. The wordmark's class name (`comout-left-right`) suggests the two words slide in from the sides on load; that was not observed.

#### The zoom (Belle's L1)

> on the main page, yeah, that video when you scroll down, and then it sort of zooms in. That's an amazing feature.

What it does, frame by frame (`tailor-home-zoom-01` to `04`):

1. The intro section scrolls up and away, revealing a fixed layer beneath it. The layer holds a mosaic: Kakadu and Sydney Harbour stills in a column on the left, a still above and below a centre video tile and two stills on the right. At this point the scale is about 1.0 and the centre tile is 650 x 407px (16:10) in the middle of the screen.
2. Scale grows linearly with scroll, about 0.11 per 300px (0.00037 per px). At scroll 2,000 it is 1.22, at 2,300 it is 1.31, at 3,200 it is 1.64. The outer stills slide outward past the viewport edges as the group grows.
3. At scroll 4,700 the scale reaches its ceiling of 2.18 and the centre tile covers the viewport exactly. It holds there for about 1,200px of scroll while the page behind catches up.
4. The fixed layer switches to a hidden class and the green 'Why choose us' section scrolls up over it.

There is no easing because the scale is bound to scroll position. On mobile the same mosaic runs in a portrait arrangement: scale 1.21 at 300px before the section and 1.92 at 1,500px into it, with the video tile a tall portrait.

Take: the idea that the hero clip is revealed by zooming into a composed grid of stills, so the visitor sees the range of the offer and then falls into one moment. Scale tied to scroll with no easing. Take the hold at full size before the next section arrives.
Leave: the unthrottled scroll handler, the 3,300px of scroll it costs (too long for a site whose job is a booked call) and the six-plus-one grid proportions.

#### Why choose us, the needle and thread

Green band, centred 'Your dedicated Travel Designer' heading, then a single white line drawing of a needle trailing a looping thread down the left half, with two value blocks (Excellence, Authenticity, about 25 words each) hung off the curve. The same thread drawing returns, faint, behind the contact section. In my frames the line is static; whether it draws itself on scroll was not observed. Frame `tailor-home-thread-01`.

Take: one hand-drawn line motif that belongs to the brand name and recurs. La maréa has the equivalent already in Belle's line icons and the tide in the name.

#### Itineraries slider (Belle's D2, and O2 for the progress rule)

> when you go down to their exclusive journeys, you you have that sort of slider there. I'm thinking something like that that shows our different experiences.

Plum band, 130px padding. Left: eyebrow, 44px heading, 48-word intro, circled-arrow link at right. Then a full-width 1px hairline `rgb(183, 182, 182)` from the 80px margin to the right edge of the screen, and on it a 3px tall, 30px wide segment in `rgb(236, 234, 234)` whose `left` is set to slide index over slide count with `transition: 0.5s`. Then the track: 412px slots holding 392 x 549 portrait cards (5:7), 3.3 cards visible, the last one cut by the screen edge. Each card is a full-bleed image with a dark gradient, an orange '14 days' tag top right, a title in the serif at 28px weight 200 with part of it italic and a small circled-arrow 'Explore more'. Hovering a card blurs its lower layer (`filter: blur(2px)`). Frame `tailor-home-itineraries-01-desktop`.

Over the slider the cursor becomes a 140px orange ring with 'Drag' and two chevrons, following the pointer (`transition: width 0.4s cubic-bezier(0.36, 0, 0.66, 0), transform 0.4s ease-in-out`). Research/04 records Slick autoplay at 3,000ms; autoplay paused while my pointer was over the slider.

Mobile: 296 x 387 cards (about 3:4), 1.3 visible, the progress segment shrinks to 8px. Frame `tailor-home-itineraries-01-mobile`.

Take: portrait cards at 5:7, the peek of the next card at the edge, a hairline progress rule with a short segment rather than a filling bar, the drag cursor as a desktop nicety.
Leave: the orange tags, the blur on hover, autoplay.

#### Best of Australia wipe (Belle's E1 to E4, O6)

> you scroll down and then it sort of takes you to looking for a once in a lifetime Australian experience and then you slide, and it sort of... yeah. It keeps, like, coming out from the the right hand side, like, appearing. I don't know what animation you called that, but that's quite a cool animation

> it has, you know, the best of Australia. You keep sliding in those sort of elements from the side pop out, and then you keep sliding, and it's the map.

Measured at 1440 x 900, sampled every 100px (frames `tailor-home-wipe-01` to `06`):

| Scroll from pin start | What happens |
|---|---|
| 0 | The section's top meets the viewport top and pins. Visible: the sand base panel (eyebrow, 44px question heading with 'once-in-a-lifetime' in italic, 48-word paragraph, circled arrow, a pink salt-lake image 612px wide at right) and, on the far right, three coloured spines 60px wide each: plum 'Best of Australia', mid plum 'Enriching Encounters', pale plum 'Five-Star Luxury', rotated 90 degrees, serif at 37px, sentence case |
| 0 to 320 | Hold. Nothing moves |
| 320 to 860 | Plum panel travels from x = 1260 to x = 0, linear with scroll (2.33px of travel per px of scroll). Its spine leads and the panel face follows, covering the base panel from the right |
| 860 to 1130 | Hold on 'Best of Australia': heading at 44px, 36 words, image at right |
| 1130 to 1670 | Mid plum panel travels from 1320 to 60, leaving the first spine visible at the left edge |
| 1670 to 1940 | Hold on 'Enriching Encounters': heading top left, 68-word paragraph top right, wide 1100 x 410 image below (about 2.7:1) |
| 1940 to 2480 | Pale plum panel travels from 1380 to 120, leaving two spines at the left |
| 2480 to 2700 | Hold on 'Five-Star Luxury': near-square image left, 30 words right |
| 2700 on | Pin releases and the whole stack scrolls up as the map section rises beneath |

Total pin: 2,700px of scroll, which is 300 per cent of the viewport height. The three panels are one hue stepping lighter: `#3E2A2E`, `#6E5F62`, `#9E9496`. Each panel has a different internal layout (text left and image right, text split across the top with a wide image below, image left and text right), so the sequence never repeats itself. Clicking a spine did nothing.

On mobile it still pins (2,532px of scroll) with 30px spines, the text stacked above the image in each panel and the paragraphs swapped for shorter mobile variants that end in an ellipsis mid-sentence. Frames `tailor-home-wipe-01` to `03-mobile`.

Take: the stacked spines that show what is still to come, the hold between each panel, one colour ramp stepping lighter, a different composition per panel, linear motion bound to scroll.
Leave: the pin on mobile (it costs truncated copy, which breaks our no-cropping rule), the 320px hold before anything moves and the plum.

#### Map (Belle's F9)

> I really like how they've got the map, um, of Australia, and then they've got sort of the different on the right there, um, locations. So, you know, Perth, the Kimberly room, and you click the arrow, and it sort of takes you to the different locations. I'm wondering if something like this, but for South Australia, um, could work.

A full-bleed section 1000px tall. The background is a full-bleed aerial photograph of the current region under a 50 per cent black mask. Left: a translucent white outline map of Australia drawn in an ECharts canvas, state lines as hairlines, a white dot and a spaced uppercase label per state. Right, in a 662px column: eyebrow, the region name in Martina Plantijn italic at 84px weight 300 with 84px line height, a 45 to 60-word paragraph, a circled arrow, then a row of portrait image cards with the place name in italic, stepped by two small arrows beneath. Clicking South Australia swapped the background to vineyard rows, the heading to 'South Australia' and the cards to Adelaide, Kangaroo Island and the Flinders Ranges. Frames `tailor-home-map-01` and `02-desktop` (02 shows South Australia selected).

Mobile: no map. A wrapped set of outlined pills with every state name, then the same text and a card row. Frame `tailor-home-map-01-mobile`.

Take: region selected by clicking the map or stepping arrows, the right-hand pane swapping in place, one large italic place name, portrait cards per place.
Leave: the dark photographic background (Belle wants light and bright), the canvas map (not accessible), dropping the map on mobile.

#### Testimonials (Belle's I5)

> I quite like how they've got their client testimonials set up with an image, and then, um, sort of a bit of wording under that.

Stone band `#F1EEE9`, 130px padding. Five columns at 246px with 20px gaps. Images alternate between square (246 x 246) and 5:7 portrait (246 x 349), so the quotes start at two different heights and the row reads as a stagger. Quote below the image in Söhne 13px weight 300, 15.6px line, 28 to 75 words. Attribution is a small flag and a descriptor such as 'Couple from New Zealand' in 11px uppercase 0.2em tracking. No names, no stars, no logos. Frame `tailor-home-testimonials-01`. Mobile: two columns at 164px. The wall of quotes puts 261 words into one viewport, the densest screen on the site.

Take: image above, words below, descriptor rather than name, the alternating image heights.
Leave: five across, and the tiny sans quote size.

#### Team (Belle's I1 to I4, which she asked us not to copy)

> I also think, yeah, the meet the team section is is nice and simple and clear. Um, obviously, don't want to, um, you know, copy too much of the tailor's site and set out.

Orange band. One portrait at a time, 240 x 301 (4:5), centred under 'Meet our team', role and name below in 11px uppercase. Arrows are 102 x 14px hairline SVGs in a pale coral `#F2B39F` at the far left and right edges of the section, lightening on hover. Research/04 records autoplay at 10 seconds. Frame `tailor-home-team-01`. Mobile shows a larger portrait with the same edge arrows.

#### Recent stories slider and stories page (Belle's J1, J3, L5)

> on the trailer, the travel stories, and they've got recent inspiring stories. I think that sort of set out with the slider, and, you know, you can click on it and explore more.

> on their stories page, I quite like how at the top you can kinda click on all have you ever tips and trips, top picks, travel guides.

Home slider: heading and 27-word intro left, two 102px hairline arrows `#B7B6B6` top right (darkening to black on hover), then 412px slots with 392 x 231 images (1.7:1), date in 10px uppercase, title in the serif at 20px weight 300 with an italic phrase, small circled arrow. Hovering a card scales its image to 1.06 over 0.5s. Frame `tailor-home-stories-01`.

Stories page: centred eyebrow, a two-line heading with italic phrases, then five filter tabs (All, Have you ever, Tips and tricks, Top picks, Travel guides). Tabs are 1px outlined rectangles, 2px radius, 8 x 20px padding, Söhne 12px 1.2px tracking uppercase, the active tab filled plum. Below, a three-column grid of 393 x 448 cards (about 7:8) with the title overlaid in italic serif at 24px and a small orange category tag. Research/04 found the tabs re-query the server. On mobile the tabs wrap onto two rows and cards go to one column at 350 x 399. Frames `tailor-stories-tabs-01-desktop` and `-mobile`.

#### Customise-your-trip circles (Belle's A6)

> it says customize your journey, take delivery of your tailor made holiday, just answer a few simple questions. And then on the right has, you know, who's traveling, why do you want to travel, how can we help in those sort of circles

Left: 'Contact us' eyebrow, italic heading, a 12-word line, circled-arrow CTA. Right: three 249px circles with a thin ring, each overlapping the one before by 22.9px (9 per cent of the diameter). Inside each: a question in italic serif at 28.8px (34.6px line) and an answer hint in small spaced capitals. Nothing in the circles is interactive. Mobile: 210px circles stacked vertically 30px apart with no overlap, below the text. Frames `tailor-stories-circles-01-desktop` and `-mobile`.

#### About page accordions (Belle's L3)

> when you go to about, um, it says more about the Tyler, and then it has our wards, agents info, responsible Australian travel, and then you click on each one. And then it's like that drop down.

Plum band, italic heading 'More About The Tailor', then three rows 40px tall separated by 1px rules `rgb(227, 222, 212)`, labels in small spaced capitals, an 8px plus sign at the far right. Clicking opens the row with a jQuery slide-down: measured heights 47, 156, 234, 253px at 100, 200, 300 and 450ms, so about 400ms with a slow start and slow finish. Content is serif 14px on a 21px line, about 40 to 95 words per row, then a small underlined text link. Frames `tailor-about-accordion-01-desktop` and `-mobile`.

#### CTA and hover detail

At rest the CTA is a 34px outlined circle with an arrow and a spaced label to its right. On hover the circle's width animates to 100 per cent, becoming an outlined pill around the whole label, and the arrow slides from 9px to 18px, over 0.3s. Frame `tailor-home-cta-hover-01-desktop`.

---

### A2. Aman, aman.com

Frames: `aman-home-*`.

> coming back to Oman that reference site, I think that home page, um, in terms of the seasonal experiences, how that set up, that's really, um, beautiful and cool. So whether we set the philosophy up like that, um, where, yeah, each sort of pillar is there, the video, of the pillar, and then if they wanna learn more, discover more, I think something like that could could look really beautiful.

> I like the fonts used in, like, Aman, for example. I think just, yeah, really easy to read and simple.

#### Global measurements

| Item | Value |
|---|---|
| Background | `#F3EEE7` on the body, white only in the footer |
| Ink | `#313131` everywhere, never black |
| Gutter | 24.5px at every width from 390 to 1440. Content capped at 1440 and centred, so at 1920 there are 240px margins |
| Space between blocks | 65px margin above and below each block, plus 80 to 83px internal padding on banded blocks |
| Section heading | Lyon Text 31.08px, weight 400, 0.5px tracking, 45.07px line (1.45). 24.1px at 390 |
| Intro and card copy | Lyon Display 14px, 0.8px tracking, 20.3px line (1.45) |
| Card title | Lyon Text 19.6px, 0.98px tracking, 28.4px line |
| Eyebrow | Whitney 10.1px, 2px tracking, uppercase |
| Link | Whitney 13px, 0.8px tracking, sentence case 'Discover more' with a 1px underline drawn as a pseudo-element, 14px padding below |
| Weight | 400 everywhere. No light weight and no bold on the page |

#### Header and menu

A sticky 88px sand bar that never becomes transparent and never hides: hamburger and 'Menu' left, search, the wordmark centred, a language link, then one charcoal filled 'Reserve' button 140 x 42px (square corners, `transition: background-color 0.4s`). The menu opens a pale `#FDF9F5` drawer from the left with the nav in Whitney at about 16px, a second group of links below a gap and a panel of three outlined region buttons, over a 70 per cent black overlay on the rest of the page. Frames `aman-home-menu-01-desktop` and `-mobile`.

#### Hero

The hero video is not full-bleed on desktop. It sits inside the 24.5px gutters as a 1391 x 784 box (16:9), starting 178px below the header, with the eyebrow, a seven-word serif heading at 31px and 'Discover more' set below the video rather than over it. On mobile it runs edge to edge. Frames `aman-home-hero-01` and `02-desktop`, `aman-home-hero-01-mobile`.

The next block pairs one wide image with one narrow one (about two thirds and one third), each with an eyebrow, a serif title, a one-sentence line and a link. Frame `aman-home-hero-02-desktop` shows it.

#### Seasonal experiences, the section Belle named

Measured at 1440: a first column 442px wide from x = 25, a 64px gap, then an 884px carousel column from x = 531 that bleeds past the right gutter to the screen edge. The left column holds only a 31px heading and a 20-word intro; its bottom 600px are empty sand. The carousel shows square 326 x 326 images on 326 x 563 cards with 48px between cards: eyebrow, 19.6px title, 25 to 30 words, 'Discover more'. Two and a half cards fit in the column. Cards outside the active set sit at 40 per cent opacity (`transition: opacity 200ms 300ms`), so the peeking card at the edge is faded rather than cut off hard.

Beneath the cards, a centred segmented rule: one 88 x 28px hit area per slide, each drawing a 1px line in `#DAD9D7`, the active one `#82847F`, with `transition: background 600ms`. Clicking a segment slides the track 374px per card over 0.5s with Slick's default `ease`. No arrows are shown. Frames `aman-home-seasonal-01` and `02-desktop`.

Mobile: text stacked above, 281px square images, one card and a sliver of the next visible, a full-width sticky 'Reserve' bar at the bottom of the screen. Frame `aman-home-seasonal-01-mobile`.

Viewport measurement on this section at 1440: images cover 20 per cent of the screen, text line boxes 5.3 per cent, and about 75 per cent is empty sand. 88 words are in view.

Take: the one-third to two-thirds split with the carousel bleeding off the right edge, the empty lower two thirds of the text column, the faded peek, the segmented hairline progress, 1.45 line height, tracking that grows as the size shrinks, 400 weight throughout, sentence-case links with a hairline underline.
Leave: Whitney and Lyon (licensed), the uppercase eyebrows, a hero video boxed inside gutters (Belle wants her footage full-bleed on arrival).

---

### A3. COMO Shambhala, comoshambhala.com

Frames: `como-*`.

> coming to Como as well, the colocham bala site, like, their wellness experiences section is awesome. I love how... yeah. Like, you go from one, and then the animation moves to the other movements to treatments. to kitchen, and then it has information under.

> I quite like the journal, um, section as well. Like, I don't love particularly the the size of that, but just in terms of how there's, like, arrows, and it's clear. So editorial sort of style.

> on the Como website, there was a section and it said sort of eat well, be well, food's a big part of our philosophy. and, um, yeah, that sort of a section where you can draw inspiration from potentially.

#### Global measurements

| Item | Value |
|---|---|
| Background | White, with `#F9F8F6` for the journal band and `#ECDFCE` sand for the footer |
| Ink | Pure black, with `#767676` for category labels |
| Content frame | 1440 max, 80px side padding (60px at 1024), centred at 1920 with 320px to the text. The experiences row is full-bleed at every width |
| Type | Gill Sans Nova only. Section titles 50px weight 300, 2px tracking, 58px line, uppercase. Tile titles 40px weight 300. Body 16px weight 600 on a 30px line. Labels 14px weight 600, 2.1px tracking |
| Reveal on scroll | `.fade-on-scroll`: from 50px below and opacity 0 to rest, 750ms `ease` |
| Tertiary link | A 32px hairline, 16px gap, spaced uppercase label. Hover: the gap grows to 20px and the label goes to weight 500, 0.3s |

#### Header

At the top of the page: a 160px transparent header with the drop logo centred and the nav in a translucent band beneath it. After 300px of scroll: a 48px white bar with a small logo at left and the nav in a row, `transition: background-color 0.3s`. It stays visible when scrolling up or down. Mobile: 60px, 30 per cent white over the hero, then solid white. Frame `como-home-hero-01-desktop`.

#### Wellness experiences, the flex row

A header row with the title left and a 29-word description right, then a full-bleed row of four tiles 720px tall. Measured timeline at 1440 (frames `como-home-experiences-01` to `04-desktop`):

| Moment | State |
|---|---|
| Rest, pointer elsewhere | Four tiles 360px each, full-height portrait images, a large white numeral (50px) on each |
| Pointer enters tile 1 | After a 200ms delay, tile 1 grows to 720 (`flex: 3 1 0%`) and the others shrink to 240 (`flex: 1 1 0%`) over 800ms `ease-out`. At the same time the tile's image box shortens from 720 to 360px (`height 0.8s ease-out 0.2s`), so the photo becomes a 2:1 band across the top half. After 500ms, the title (40px) and 32 to 44 words of copy rise 180px into the empty lower half and fade in over 1s |
| Pointer moves to tile 3 | Widths at 150ms steps: 720/240/240/240, then 625/240/335/240, 498/240/462/240, 391/240/569/240, 267/240/693/240, then 240/240/720/240 at about 1,000ms. Tile 3's copy opacity reads 0.09 at 614ms, 0.60 at 849ms, 0.97 at 1,313ms |
| Pointer leaves the row | All four return to 360 |

So the motion Belle describes ('you go from one, and then the animation moves to the other') is two tiles trading width at the same time, the new photo cropping from a tall portrait to a wide band as it grows and the words arriving last. The horizontal and vertical changes happen together, which makes this the closest observed match to O6.

Mobile: the row survives. The active tile takes `flex: 7` (273px) and the other three are 39px slivers, all 444px tall, with the title and copy printed in a separate block under the row and a '1, 4' counter. Frame `como-home-experiences-01-mobile`.

Viewport measurement at rest: images cover 60 per cent of the screen, text 5.8 per cent, 35 words in view.

Take: the 3:1 width trade with the 200ms delay, the image height collapse to 2:1 on the active tile, the copy rising 180px with a 500ms delay, numerals on inactive tiles, the row surviving on mobile at 7:1.
Leave: returning to four equal tiles when the pointer leaves (the section then shows no words at all), uppercase titles, pure black, weight 600 body.

#### Wellness journal

`#F9F8F6` band with 120px padding. Centred 'Discover' eyebrow and 50px title, two long hairline arrows (115 x 48px) top right at 50 per cent opacity. Each group is three stories: one 620 x 404 lead image (about 3:2) and two narrow portrait images, each with a grey category label, a two to five-word uppercase title and a hairline 'Read more'. The arrows crossfade to the next group over 2s with `ease`. On mobile it is one story at a time with the next image peeking. Frames `como-home-journal-01` and `02-desktop`, `como-home-journal-01-mobile`.

Belle likes the arrows and the editorial clarity and does not like the size. The measured reason: the lead image and its group span 1,280px, so one viewport holds three stories and the reader never sees more of the library.

Take: long hairline arrows top right, a category label above every title, the clarity of one row.
Leave: the 2s crossfade of whole groups, the 1,280px group width, uppercase titles.

#### Nutrition page, the closest match to 'eat well, be well'

Structure in scroll order: a full-bleed food image hero with 'COMO Shambhala Kitchen'; a 43-word centred intro that names the philosophy, the number of years behind it and who developed it; a slider of programmes (image left, place names, title, about 45 words of text with inline links, hairline 'Explore locations'); then a tabbed block with three tabs (Concept, Expertise, Cookbook, spaced capitals, the active one underlined, flanked by hairlines), a 426 x 515 image left and 'Our culinary philosophy' right in about 100 words; then a gallery slider. Frames `como-nutrition-intro-01-desktop`, `como-nutrition-philosophy-01-desktop` and `-mobile`.

Take: the order (named idea, why it is credible, what you can book, the rules of the food, then images), the tabs for depth without a long page, the 43-word intro.
Leave: the words. Research/04 section 3.6 already says take the shape and not a syllable of the copy.

---

### A4. The Bathhouse, Albion

Frames: `bathhouse-albion-spaces-01-desktop` and `-mobile`.

> 10 immersive spaces section - i see something like this potentially to set my immersive wellness experiences up like this

> They've got ten immersive spaces, move through them at your own pace, and you can sort of see each experience there, and it's sort of on a slider again there. in terms of what they've got and their different options and a little explanation underneath.

Near-black brown band. A centred two-line heading at 38px (Domaine Display), then a Swiper track of portrait cards: 307px wide, image 307 x 433 (5:7), the space name centred over the image in the display serif at about 30px and 25 to 45 words of explanation underneath in a spaced sans. 4.2 cards visible at 1440, the fifth cut by the screen edge. No arrows, dots or progress were found; it is drag and swipe only. Mobile: 297px cards, 1.2 visible, heading at 28px.

Take: one portrait card per experience, its name over the image and a short explanation under it. This is exactly the shape of the La maréa experiences list, and it agrees with The Tailor's 5:7 card.
Leave: the dark band, the missing controls (no keyboard or visible affordance).

### A5. Basq House, basqhouse.com.au

Frames: `basq-home-*`.

> if you go onto their main page and you've got our... there... or says our rooms, and I've got, like, pool studio, pool room, town room, and just a big beautiful imagery, a cool little mini animation.

> they've got a function where it says, like, heated pull and then an image and then some information on the left, and then you click the arrows, and it, like, sort of takes you through different images.

**Our rooms index.** Pink band. A small 'Our rooms' label left and two small filled arrow buttons (60 x 29px, 6px radius) right. A Swiper of room cards 467 x 583 (4:5) with 6px rounded corners, each a full image with the room name in a serif, a one-line description in tiny capitals and 'Read more'. The 'mini animation' Belle mentions is the click: the card opens a room panel 1,152px wide (80 per cent of the screen) that slides in from the right over 1.25s with `cubic-bezier(0.4, 0, 0.2, 1)`, dimming the page. The panel holds a close button, the room name centred, an image gallery with its own arrows, then 'Essential information' (size, count, balcony, bed, inclusions). Frames `basq-home-rooms-01-desktop` (index) and `basq-home-rooms-02-desktop` (panel mid-slide, then settled).

**Heated pool feature gallery.** Maroon band, 50/50 split: left a label pair ('Experiences' and 'Within the house'), the feature name in Plantin at 28px and an 85-word description; right a 640 x 508 image (about 5:4) with a small 'Pictured' caption. Two synced Swipers, the text one fading, the image one sliding, both at 300ms `ease`. Fifteen dots and two small arrows bottom left. Frame `basq-home-feature-01-desktop`.

**Illustrated locale map.** A hand-drawn line map of Byron's streets with small line icons (palms, surfboards, wine glasses, a market tractor, a cow) and tiny labels, the hotel as one dark medallion. Frame `basq-home-locale-map-01-desktop`. Belle did not name this, but it is the strongest precedent in the set for the La maréa map because it is drawn in the same way as her pillar icons.

Take: the index of portrait cards that opens a side panel without leaving the page (this satisfies O7, expand in place), the essential-information list, the text-left image-right gallery with a 'Pictured' caption, the line-drawn map.
Leave: rounded corners, the filled arrow buttons, the 85-word block.

### A6. SHA Wellness Clinic, shawellness.com

Frames: `sha-*`.

> it has Shah's scientific advisory board, and it sort of has, like, all the team or the board members there. And you click an arrow and sort of scroll across as a photo of everyone, and then the name, their certifications, and then information about them.

> you click on that, the little plus sign, and then underneath it, it sort of like a drop down. So I'm not sure, like, for simplicity throughout the site, maybe some nice looking drop downs could work potentially where we need to still show information for guests who are looking for more information. But overall, from first glance, it looks just more simplistic. So that's just a thought in terms of a a drop down. I probably wouldn't have a plus sign, but maybe like a a small minimalistic arrow

> I quite like how they've got design of our diets, and then they've got cushy diet, byelite diet, and shower menu. And as you click on it, um, I quite like how that sort of pops up, the animation of, you know, what that is and, um, how it pops up.

**Scientific advisory board (home).** Pale blue-grey band. Heading and a 30-word intro top left. Below, a row of portraits: previous members small (205 x 277, about 3:4) on the left, the current member larger to their right and beside it the name in Graphik 32px weight 300, the role and a 26 to 59-word bio in italic. Controls are dots (the active one a 24 x 10 pill, the others 10 x 10) and two chevrons. Frame `sha-home-advisory-01-desktop`.

**Integrative method pillar accordion.** On the nutrition and gut health page: heading 'Health & Nutrition', three rows (Functional Nutrition open by default, Personalized Health Plan, Emotional Eating Session), 18px weight 500 labels, a 14px plus drawn from two bars that rotates into a minus over 0.3s, the body opening with `height 0.4s, padding 0.4s`. The markup sets `aria-expanded` correctly. Image right. Frame `sha-nutrition-accordion-01-desktop`.

**Design of our diets 'pop-up'.** A row of three tall cards (465 x 580, about 4:5, 4px radius) each with a food photo and a centred title with a plus. On hover, the hovered card grows from `flex: 1` to `flex: 1.5`, a dark overlay insets 15px from the edge at 65 per cent black, the photo scales to 1.1, the plus disappears and the description fades in, all over 0.3s `ease-out` (the text with a 0.2s delay). On touch a tap triggers it. Frame `sha-nutrition-diets-01-desktop` shows Kushi Diet open.

Take: the large current portrait with smaller neighbours, name then role then bio, the pillar accordion with correct ARIA, the diet row as a second flex-grow pattern (1 to 1.5, simpler than COMO's) with a framed inset overlay.
Leave: the plus sign (Belle asked for a small arrow instead), the dark overlay colour.

### A7. Scorpios, the Ritual Space page

Frame: `scorpios-ritual-space-hero-01-desktop`. Tone and language only.

> this site is cool - great key words and terminology used. Rituals, transformation, unhurried conversation, pause, spaces etc.

> love how its seeling more rituals and experiences rather than rooms.

Warm off-white `rgb(249, 247, 239)`, near-black text. A 70px Galliard page title with -1.05px tracking and a 68px line, a 26px serif intro of about 35 words on a tight 28px line, a spaced 12px sub-nav with the current item underlined and a monospaced 11px label style. Section names on the page: 'Your Rhythm, Your Routine', 'Places to Pause and Reconnect' (a numbered list of twelve spaces, 01 Reception to 12 Biohacking Room), 'The Design', 'Get to Know Our Philosophy'. Research/05 already notes that Belle's 'Places to Pause and Reconnect' and 'Your Retreat, Your Rhythm, Your Routine' echo this page closely.

Take: rituals and moments over rooms and inclusions, numbered lists with two-digit numerals, belief stated before the offer.
Leave: the phrases themselves where they duplicate Scorpios. 'Places to Pause' is already locked in the brief; it is worth Jess knowing the full phrase is Scorpios' section title.

---

## B. Design cue table

Values in the 'La maréa' column are recommendations built from the measurements and the brief's locked decisions. Names in `code` are suggested custom properties.

### B1. Spacing

| Cue | Reference measurement | La maréa |
|---|---|---|
| Base scale | Tailor steps 20, 30, 40, 50, 70, 90, 100, 120, 130. Aman 24.5, 48, 65, 80 | 4, 8, 12, 20, 32, 48, 72, 96, 136 |
| Section padding | Tailor 130 (100 on dark bands) at 1440, 50 at 390. COMO 120. Aman 65 between blocks | `--section-y: clamp(64px, 9vw, 136px)`. Gives 130 at 1440 and 64 at 390 |
| Side gutter | Tailor 80 fixed from 1024 up, 20 at 390. Aman 24.5 everywhere. COMO 60 to 80 | `--gutter: clamp(20px, 5.5vw, 96px)`. Fluid, so O9 holds with no steps |
| Max content width | Tailor none. Aman and COMO 1440 centred | Text grids capped at 1440. Photography and sliders bleed to the screen edge |
| Label to heading | Tailor 20 | 20 |
| Heading to body | Tailor 30 to 50 | 32 |
| Body to link | Tailor 40 to 50 | 40 |
| Text to slider | Tailor 50 to 70 | 56 |
| Card gap | Tailor 20, Aman 48, Bathhouse 24 | 24 in sliders, 48 in open grids |

### B2. Type scale

La maréa rules apply: no uppercase anywhere, labels in sentence case with tracking. Cormorant Garamond sets visibly smaller than Martina Plantijn or Lyon at the same pixel size, so sit near the top of each range and check by eye.

| Role | Tailor | Aman | COMO | La maréa |
|---|---|---|---|---|
| Hero line | 149px wordmark | 31px under the video | 96px uppercase | Cormorant 400, `clamp(40px, 5vw, 76px)`, line 1.1 |
| Section heading | 44/52.8, weight 300, italic emphasis | 31/45, weight 400 | 50/58, weight 300 | Cormorant 400, `clamp(30px, 2.4vw + 10px, 44px)`, line 1.2, one italic word |
| Large place or pillar name | 84 italic | not used | 40 | Cormorant italic 400, `clamp(40px, 4vw, 60px)` |
| Card title | 20 to 28, weight 200 to 300 | 19.6/28.4 | 40 uppercase | Cormorant 500, 22 to 26px, line 1.25 |
| Intro or lead | serif 16 | serif 14/20.3 | 16/30 weight 600 | Cormorant 400, 20px, line 1.45 |
| Body | serif 16/24, weight 300 | 14/20.3 | 16/30 | Jost 300, 16/1.6 (locked) |
| Small copy | Söhne 13 | 14 | 14 | Jost 300, 14/1.55 |
| Label | Söhne 11.5, 0.2em, uppercase | Whitney 10.1, 2px, uppercase | 14, 2.1px, uppercase | Jost 400, 12.5px, 0.14em, sentence case, `--sage-60` or `--sage-80` |
| Link | Söhne 12, 0.2em, uppercase | Whitney 13, 0.8px, sentence | 14, 2.4px, uppercase | Jost 400, 13px, 0.08em, sentence case |
| Weights in use | 200, 300, 400 | 400 only | 300 and 600 | Cormorant 400 and italic 400, 500 for small titles only. Jost 300 and 400. No bold |
| Tracking rule | wider as smaller | 0.5px at 31, 2px at 10 | fixed 2px | 0 at display sizes, 0.02em at 20px, 0.08 to 0.14em at 12 to 13px |
| Line height rule | 1.2 display, 1.5 body | 1.45 everywhere | varies | 1.2 headings, 1.45 leads and cards, 1.6 body |

### B3. Colour roles

| Role | Reference | La maréa token |
|---|---|---|
| Page | Tailor `#F8F7F4`, Aman `#F3EEE7` | `--sand-30 #F8F3E4` |
| Alternate band | Tailor `#F1EEE9`, COMO `#F9F8F6` | `--sand-40 #F4EAD3` or `--salt-25 #FAF9F5` |
| Card surface | Aman sand, COMO white | `--salt-25` on sand, `--sand-60` for quiet cards |
| Text | Aman `#313131`, Tailor plum | `--sage-100 #433D1B` body, `--sage-80 #635B39` headings and links |
| Hairlines and rules | Tailor `rgb(183, 182, 182)`, `rgb(227, 222, 212)`; Aman `#DAD9D7` | `--sage-20 #CBC6B7` track, `--sage-80` active segment |
| Dark band | Tailor plum ramp, green, orange | Sage fill only for image-led moments and the dusk panel of the day. Never the base |
| Accent | Tailor orange | `--sand-100 #E6D6A4` in small doses (tags, focus rings) |

### B4. Image aspect ratios per component

| Component | Measured reference | La maréa |
|---|---|---|
| Hero | Tailor 1440 x 900 still. Aman 16:9 inset. COMO full-bleed | Full-bleed, `100svh`, drone clip with a poster, focal point set per clip |
| Zoom mosaic centre tile | Tailor 650 x 407 (16:10), ending at viewport size | 16:10 tile, ends at viewport size |
| Experience cards | Tailor 392 x 549 (5:7). Bathhouse 307 x 433 (5:7) | 5:7 |
| Experience flex tile | COMO 720 tall; active image 2:1; slivers 1:3 | Row height `min(72vh, 680px)`; active image 2:1 over a copy band |
| Pillar cards | Aman square 1:1 | 1:1 with a looping pillar video |
| Venue index cards | Basq 4:5 | 4:5 |
| Venue feature gallery | Basq about 5:4 | 5:4 |
| Map place cards | Tailor portrait, about 4:5 by eye | 4:5 |
| Day panels | Tailor near-square 612 x 630 and wide 1100 x 410 (2.7:1) | One near-square and one wide per panel, alternating |
| Testimonial images | Tailor 1:1 alternating with 5:7 | 1:1 alternating with 4:5 |
| Team portraits | Tailor 240 x 301 (4:5). SHA 205 x 277 (about 3:4) | 4:5 current, 3:4 neighbours |
| Journal cards | Tailor home 1.7:1, stories page about 7:8, COMO lead 3:2 | 4:5 in the slider and grid (research/04 proposed 3:4; 4:5 holds more of a phone photo's width) |
| Food cards | SHA 4:5. COMO philosophy image about 5:6 | 4:5 |
| Corners | Tailor, Aman, COMO square. Basq 6px, SHA 4px | Square on all images. 2px only on small controls |

### B5. Header behaviour

| Site | Over hero | After scroll | Hide on scroll down | Transition |
|---|---|---|---|---|
| The Tailor | Transparent, white text | Fixed 90px sand bar, plum text, soft shadow | Yes, `top: -120px`, back on any scroll up | `top 0.5s` |
| Aman | Never over the hero | Sticky 88px sand bar | No | none |
| COMO | 160px transparent, logo centred above nav | 48px white bar, logo left | No | `background-color 0.3s` |

La maréa: The Tailor's behaviour. Transparent over the drone hero with `--salt-25` text and the white logo variant, becoming a `--sand-30` bar about 80px tall with `--sage-80` text and a 1px `--sage-20` bottom rule in place of the shadow. Hides on scroll down after the hero, returns on any scroll up. `transform: translateY` rather than `top`, 500ms `--ease-soft`. 'Plan your day' is the header's only filled element (see B9).

### B6. Menu overlay

| Site | Pattern |
|---|---|
| The Tailor | Full-screen panel dropping from above in 0.5s. Plum column left with logo and contact. Serif primary list, small sans secondary lists, 10px group labels |
| Aman | Pale drawer from the left, 70 per cent black overlay over the rest |
| COMO | Not captured |

La maréa: a full-screen `--sand-30` overlay that fades in and rises 16px over 500ms. Left column in `--sage-80` with the reversed logo, the submark and contact details. Primary list in Cormorant 400 at 30 to 34px, secondary lists in Jost 14px, group labels in the 12.5px tracked label style. The right column shows one photograph that crossfades as each primary link is hovered (our own addition; The Tailor's right field was empty in the frame). Close is a 44px round button with a thin cross, matching the circled-arrow family.

### B7. Arrows, progress rule, cursor

| Element | Reference | La maréa |
|---|---|---|
| Slider arrows | Tailor 102 x 14px hairline SVG arrows `#B7B6B6`, darker on hover. COMO 115 x 48px at 50 per cent opacity. Basq 60 x 29 filled buttons (avoid). SHA chevrons | 88 x 14px hairline arrows, 1px stroke, `--sage-40` at rest, `--sage-80` on hover over 300ms, 44px tall hit area |
| Progress | Tailor 1px track plus 3px x 30px segment that moves, 0.5s. Aman one 1px segment per slide, active darker, 600ms | 1px `--sage-20` track across the slider's full width, a 2px `--sage-80` segment whose width is visible fraction and whose position is scroll fraction, updated live from `scrollLeft`, no transition while dragging, 500ms `--ease-soft` after an arrow click. For the ten pillars, use Aman's one-segment-per-item rule instead |
| Counter | COMO '1, 4' | Two-digit numerals, '03 of 10', Jost 12.5px tracked |
| Cursor | Tailor 140px orange ring with 'Drag' | Optional, desktop only: a 96px `--sage-80` ring with two chevrons over sliders, 300ms. Hidden for touch and reduced motion |

### B8. Hover states

| Element | Reference | La maréa |
|---|---|---|
| Circled-arrow link | Tailor: circle widens into a pill around the label, arrow shifts 9 to 18px, 0.3s | Same mechanic in `--sage-80`, 400ms `--ease-soft` |
| Image card | Tailor stories: image scale 1.06 over 0.5s. SHA: 1.1 | Scale 1.04 over 700ms `--ease-soft`, image clipped by its frame |
| Tertiary link | COMO: hairline plus gap growing 16 to 20px | Hairline underline that draws from left, 300ms |
| Peek card | Aman: 0.4 opacity, `200ms 300ms` | 0.5 opacity on cards outside the visible set |
| Diet card or door | SHA: `flex 1` to `1.5`, 15px inset overlay, text fades in | Used for the two audience doors (D2) |
| Nav link | Tailor: turns orange | `--sage-60` to `--sage-100` with an underline |
| Focus | not observed on any reference | 2px `--sand-100` outline offset 3px on every control |

### B9. Calls to action

The Tailor: a circled arrow with a spaced label and no filled buttons in the page body, plus one orange filled pill in the header. Aman: underlined sentence-case links in the body, one charcoal filled button in the header and a sticky bottom bar on mobile. COMO: hairline and label.

La maréa: the circled arrow is the in-page CTA everywhere. One filled element exists, 'Plan your day' in the header, filled `--sage-80` with `--sand-30` text, square corners or a full pill, 13px tracked sentence case. On mobile it moves to a slim sticky bar at the bottom after the hero, which Aman proves works for a single conversion action. 'Book a discovery call' uses the circled arrow at larger size (44px circle) in the flagship section and the funnel end.

### B10. Transitions and easing

| Motion | Reference measurement | La maréa token |
|---|---|---|
| Colour and opacity hovers | Tailor 0.2 to 0.3s, SHA 0.3s ease-out | 300ms `--ease-soft` |
| CTA pill | Tailor 0.3s | 400ms |
| Header hide and show | Tailor 0.5s | 500ms |
| Slider step | Tailor 300ms (research/04), Aman 500ms ease, Basq 300ms ease | 600ms `--ease-soft` |
| Crossfade between groups | COMO journal 2s ease | 900ms, opacity only |
| Accordion | Tailor about 400ms swing, SHA 400ms | 600ms `--ease-soft` with `interpolate-size: allow-keywords` |
| Flex trade | COMO `flex 0.8s ease-out 0.2s` | 800ms `--ease-soft`, 200ms delay |
| Copy arriving in a tile | COMO 1s with 0.5s delay, rising 180px | 700ms, 400ms delay, rising 24px |
| Side panel | Basq 1.25s `cubic-bezier(0.4, 0, 0.2, 1)` | 900ms `--ease-soft` |
| Scroll reveal | COMO 50px, 750ms ease | 24px, 700ms, once per element |
| Scroll-bound (zoom, day pin) | Tailor linear, bound to scroll | Linear, bound to scroll, no smoothing library |

`--ease-soft: cubic-bezier(0.22, 1, 0.36, 1)` (a long ease-out that never overshoots). `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)`. No spring, bounce or back easing anywhere, per the brief. Every item above collapses to its end state under `prefers-reduced-motion: reduce`.

### B11. Video framing

The Tailor puts video only in the zoom tile; its hero is a still. Aman boxes its hero video inside 24.5px gutters with the words below it. COMO, Basq and Bathhouse run the hero video full-bleed. Belle's instruction is footage first ('as soon as you come onto the site, there's big, beautiful, um, you know, imagery or drone footage'), so La maréa runs the drone clip full-bleed at `100svh` with `object-fit: cover`, a poster frame that is itself a strong still, `muted playsinline loop`, slowed in the edit rather than with `playbackRate` and at most one short line and the logo over it. Anything longer sits below the fold, Aman-style.

### B12. Copy per section, measured

| Section | Words |
|---|---|
| Tailor intro | 47 + 31 |
| Tailor itineraries intro | 48 |
| Tailor wipe panels | 48, 36, 68, 30 |
| Tailor stories intro | 27 |
| Tailor testimonials | 28 to 75 each |
| Tailor circles line | 14 |
| Aman hero heading | 7 |
| Aman seasonal intro | 20 |
| Aman card copy | 25 to 30 |
| COMO experiences intro | 29 |
| COMO tile copy | 32 to 44 |
| COMO nutrition intro | 43 |
| COMO culinary philosophy | about 100 |
| Bathhouse card | 25 to 45 |
| Basq feature | 85 |
| SHA bios | 26 to 59 |

La maréa targets: section intro 20 to 45 words, card or tile copy 25 to 40, day panels 35 to 50, testimonials trimmed to 45 on cards with the rest behind a link and anything longer on a detail page or inside an accordion.

---

## C. What makes these sites feel expensive, measured

1. **Headings are small against the screen.** Aman's section heading is 31px, 2.2 per cent of a 1440 viewport's width. The Tailor's is 44px, 3.1 per cent. The only big type on The Tailor is the wordmark and one 84px place name. COMO is the outlier at 50px uppercase, and it is the one Belle did not praise for type.
2. **Light weights and no bold.** Aman uses weight 400 for everything. The Tailor uses 300 for headings and body and 200 for card titles. Not one bold word appears on either home page.
3. **One line-height ratio.** Aman holds 1.45 across headings, intros and card titles. The Tailor holds 1.2 for display and 1.5 for body. Nothing in between.
4. **Tracking grows as size shrinks.** Aman runs 0.5px at 31px, 0.98px at 19.6px and 2px at 10px. The Tailor's labels sit at 0.2em.
5. **Photography takes the space and text barely does.** Share of the viewport covered by images, then by text line boxes: Tailor intro 41 and 8.4 per cent, Tailor itineraries 43 and 6.2, Tailor stories 24 and 7.9, Aman hotels 59 and 0.2, Aman seasonal 20 and 5.3, COMO experiences 60 and 5.8, COMO journal 35 and 9.0. Text never passes 10 per cent of the screen except on The Tailor's testimonial wall (13 per cent, 261 words), which is the least calm screen on that site.
6. **Empty space is left empty.** On Aman's seasonal section about 75 per cent of the screen is neither image nor text. The left column carries 20 words and 600px of nothing beneath them.
7. **Few words per screen.** Typical screens hold 66 to 93 words on The Tailor, 88 on Aman's seasonal section and 35 on COMO's experiences row.
8. **Generous and consistent section padding.** 100 to 130px at 1440, about 9 per cent of the viewport width, with the same values repeated down the page.
9. **Few colours.** Aman runs on two (sand and charcoal) plus photography. The Tailor sits on off-white with a single plum ramp for its long sequence. Neither Aman nor The Tailor sets text in pure black.
10. **Square corners.** Tailor, Aman and COMO use no radius on images or cards. The two sites with rounded corners (Basq at 6px, SHA at 4px) are the two Belle cited for single features rather than for their overall look.
11. **Motion is rare and slow.** The Tailor home has two scroll-bound effects (zoom and wipe); everything else moves only on hover, click or drag. Measured durations run 0.3 to 0.8s with ease or ease-out, 1.25s at the long end, and no overshoot anywhere in the set.
12. **One filled button per screen, always the conversion action, always in the header.**
13. **Slider edges bleed.** Every carousel in the set runs off the right edge of the screen with a partly visible card, so the visitor sees there is more without an instruction.

The pattern under all thirteen: restraint that is visible in numbers. Size, weight, colour count, words per screen and motion count are all low, and photography scale is high.

---

## D. Translation notes for the La maréa signature sections

The ground rules for every section: sand is the page and sage is the ink; Belle's ten line icons from `assets-brand/icons/` are the only illustration style; the Fleurieu is named and shown, never generic 'coast'; motion is soft and every effect has a finished-state fallback; placeholders for missing media use the media manifest and look intentional.

One brand note for Jess: page 7 of the style guide shows a small arch-topped swatch under the sage ramp. If Belle confirms it as a brand shape, it could frame the door images or the question circles. It has not been confirmed, so no section below depends on it.

### D1. Hero with drone footage and the zoom

Reference: Aman's restraint, The Tailor's zoom.
Build: the page opens on a full-bleed drone clip (DJI_0781, the bird's eye along the coast, slowed) with the white logo small at the top, the tagline 'luxury coastal wellness reimagined' from `logo-tagline.svg` and one line of Cormorant at no more than 76px. Below the fold, a short intro in the Aman manner (heading at about 40px, 30 words) sits on sand. Then the zoom: a composition of five stills chosen from Belle's inventory in the media manifest (the Naiko Deep Creek bath shot she named and the professional Beresford Estate retreat photography are the obvious starting points) around a second drone clip such as DJI_0604, the pan away from the coastline, arranged asymmetrically rather than on The Tailor's three-column grid. It scales from 1 to about 2.2 over no more than 1,600px of scroll with a 400px hold at full frame, then the audience doors arrive. Scale is linear and bound to scroll via `animation-timeline: view()` with a ScrollTrigger scrub fallback.
Make it La maréa: the stills sit on `--sand-30` with 24px gutters between them, square corners and a caption in the label style under the centre tile naming the place ('Encounter Bay, Fleurieu Peninsula', only if the clip is from there). No wordmark stunt; the logo is small and sage-tinted when not over video.
Reduced motion: the mosaic at rest, the centre clip replaced by its poster.

### D2. Two audience doors (private groups and retreats, corporate)

Reference: SHA's diet cards and Aman's two-up of unequal images.
Build: two tall 4:5 images side by side at a 7:5 width ratio, each with its label, a Cormorant heading and a circled arrow. On hover or focus, the chosen door grows from `flex: 1` to `flex: 1.4` over 800ms `--ease-soft`, a 12px inset frame in `--salt-25` at 30 per cent opacity appears inside its edge, and a 25-word line fades in beneath the heading. The other door stays visible.
Make it La maréa: no dark overlay; the frame is sand-light, the text sits on a `--sand-30` band under the image rather than over it, so the images stay bright. Each door uses one of Belle's pillar icons above its heading (Connection for private groups, Evidence-based education or Balance for corporate, Belle to confirm).
Mobile: two full-width stacked cards with the line always visible.

### D3. The 8 hour day, a pinned horizontal sequence (Arrive, Move, Nourish, Restore)

Reference: The Tailor's wipe, with COMO supplying the vertical half.
Build: a base panel on `--sand-30` introduces the day ('Arrive. Move. Nourish. Restore.' as the heading, 40 words). On its right edge, four spines 64px wide carry the beat names rotated 90 degrees in Cormorant 400 at 32px, sentence case. The section pins for 400 per cent of the viewport height. Each panel travels from the right edge to rest one spine-width further right than the last, linear with scroll, with a 150px hold between panels (The Tailor holds 220 to 320px). Inside each panel, once it settles, the image block shortens from full height to 60 per cent while the time-of-day text rises 24px into the space it leaves, over 700ms with a 150ms delay. That is the 'expand up and down' half of O6, sourced from COMO's tile.
Make it La maréa: the four panels step through the light of a day rather than one plum. Suggested ramp: Arrive on `--salt-25` (morning), Move on `--sand-40`, Nourish on `--sand-60`, Restore on `--sage-80` with `--sand-30` text (dusk, 6.13:1 contrast). Each panel uses a different composition, as The Tailor does, and carries its pillar icon at 40px beside the beat name. Times appear only if Belle's run sheet supplies them; do not invent them. The final panel ends on 'Book a discovery call'.
Mobile, below about 900px: no pin. Four stacked panels in the same colour ramp, each entering with a 24px rise, image above and full text below. The Tailor keeps its pin on phones and has to truncate every paragraph with an ellipsis to fit, which breaks our no-cropping rule.
Reduced motion: the four panels stacked and static at every width.

### D4. Experiences: fixed text pane with a COMO-style flex row

Reference: Aman's one-third to two-thirds split, COMO's flex trade, Bathhouse's card content.
Build: a text column of `minmax(0, 1fr)` holding the label, 'Your retreat, your rhythm, your routine' (Belle's line), a 30-word intro, the counter and the two hairline arrows, stays put. The right column of `minmax(0, 2fr)` bleeds to the screen edge and holds a flex row of five visible tiles from the ten experiences, `min(72vh, 680px)` tall. At rest the first tile is already active (COMO rests on four equal tiles with no words, which is the one thing to avoid). The active tile is `flex: 4 1 0%`, others `1 1 0%`, trading over 800ms with a 200ms delay. The active image shortens to a 2:1 band and the experience name plus 25 to 40 words rise into the copy band. Inactive tiles show the name rotated and a two-digit numeral. Hover, focus, click and the arrows all change the active tile; the arrows step the window of five across the ten. No autoplay.
Make it La maréa: the copy band is `--sand-40`, the numerals are Cormorant italic, the progress rule under the row is the B7 hairline. Per-tile art direction (O3) through an optional `layout_variant` on each item.
Mobile: the row survives as COMO's does, but at 3 tiles visible (active `flex: 6`, slivers at least 44px wide for touch), with the name and copy printed below the row, the arrows and counter under that.

### D5. The ten philosophy pillars

Reference: Aman's seasonal experiences (Belle named it for this), The Tailor's about accordion, SHA's pillar accordion.
Build: Aman's split. The left third holds the label, heading, a 25-word statement that the philosophy is Mediterranean inspired, science backed and based on the Fleurieu (Belle's three points) and nothing else, leaving the lower two thirds empty. The right two thirds is a carousel of ten square cards, 2.5 visible, each with the pillar's line icon at 32px, the pillar name in Cormorant at 24px, one line and 'Discover more' to the pillar's science page. The square media is the pillar video looping muted when the card is in view, poster otherwise. Cards outside the visible set at 0.5 opacity. Under the carousel, ten 1px segments, the active one `--sage-80`.
Make it La maréa: the icons are Belle's own drawings, so this section looks like no other site. Empower appears wherever her eight words appear (brief rule), and the Luxury pillar's full name is 'Luxury and heartfelt hospitality' if space allows.
Science pages: SHA's accordion pattern with a 10px chevron that rotates 180 degrees (Belle asked for an arrow, not a plus), 44px minimum rows, 1px `--sage-20` rules, correct `aria-expanded`.

### D6. Places to Pause index and venue gallery

Reference: Basq's rooms index and side panel, Basq's feature gallery, The Tailor's stories tabs.
Build, index: a label, heading and two tabs, 'On the coast' and 'In the vineyards' (Belle's own split), styled as the B7 tab (sentence case, 1px outline, active filled `--sage-80`). Below, 4:5 venue cards, three visible with a peek, each with the venue name in Cormorant, the region tag, 'sleeps' from Belle's list and a circled arrow. Clicking a card opens a panel from the right at 80 per cent width over 900ms `--ease-soft` with the venue's gallery, an essential information list (setting, sleeps, what is on site) and 'See the full venue' to the venue page. Escape and a 44px close button dismiss it; focus is trapped while open. This satisfies O7 and Belle's 'click through on and see everything' without a page load, while the venue page still exists for search.
Build, venue page gallery: Basq's split. Left: a label pair ('Places to Pause' and the venue name), the feature name (the plunge pool, the rooms, the outdoor space), 40 to 60 words, a counter and hairline arrows. Right: a 5:4 image with a small 'Pictured' caption. Text crossfades while the image slides, both 600ms.
Make it La maréa: sand panel rather than maroon, square corners, no filled arrow buttons. Flag to Jess: The Vineyard Retreat's capacity conflicts between sources (10 per Belle, 16 per the venue, STATE-OF-PLAY blocker 6).

### D7. The South Australia map

Reference: The Tailor's map for the interaction, Basq's illustrated map for the drawing.
Build: a line-drawn map of the Fleurieu Peninsula and its coast, drawn in the same stroke weight and hand as Belle's pillar icons, in `--sage-40` on `--sand-30`, with a small inset of Australia showing where the Fleurieu sits (the interstate visitor's first question). Four markers for Naiko Deep Creek, Naiko Encounter Bay, Beresford Estate and The Vineyard Retreat. Right-hand pane: region tag, the venue name in Cormorant italic at up to 60px, 30 to 45 words, a circled arrow and a row of 4:5 place cards stepped by hairline arrows. Clicking a marker, a card or an arrow swaps the pane with a 400ms crossfade.
Make it La maréa: no dark photographic background (The Tailor's darkens each region under a 50 per cent black mask; Belle wants light and bright). Photography lives in the cards. The map is inline SVG with real buttons for markers, so it is keyboard and screen-reader accessible, which The Tailor's canvas map is not.
Mobile: keep the map (The Tailor drops it). Map above at full width, the four venues as outlined pills below it as the accessible control, pane below that.

### D8. The food day, 'The Table'

Reference: COMO's nutrition page order, SHA's diet cards.
Build: a full-bleed food image; a 40-word intro naming the idea ('the flavours of the Fleurieu', Belle's), why it is credible (Belle's nutrition qualification and the Mediterranean diet evidence, cited) and who cooks; then a row of four meal moments (breakfast, refreshments, lunch, dinner, Belle's own sequence) as 4:5 cards using SHA's mechanic: the hovered or tapped card grows to `flex: 1.4`, and its sample menu fades in on a `--salt-25` panel inside a 12px inset frame. Then Belle's two signature culinary experiences (the three-course Mediterranean chef-led dining experience and the pasta making masterclass) as a COMO-style tabbed block with a 5:6 image left and 100 words right.
Make it La maréa: sand-light panels, not SHA's 65 per cent black. Producer names only as placeholders until Belle supplies them (brief rule).
Mobile: the four cards stack with menus shown open.

### D9. Team carousel

Reference: SHA's advisory board (Belle's own choice), with two groups per her I1.
Build: two tabs, 'Wellness practitioners' and 'Food and hospitality'. One current person large (4:5, about 380px wide at 1440) with the previous and next people small (3:4) either side, name in Cormorant 30px, role in the label style, qualifications as a short line, a 50 to 80-word bio with the rest in a one-row accordion. Hairline arrows and the one-segment-per-person rule below. No autoplay.
Make it La maréa: portraits against one consistent background (research/04 already flags that Belle needs a half-day portrait shoot), pillar icons beside each practitioner's specialties. Placeholders name who goes there and where the bio comes from.
Mobile: one person at a time, swipe, bio accordion open by default.

### D10. Testimonials

Reference: The Tailor's image above, words below.
Build: four columns at 1440 (not five), images alternating 1:1 and 4:5 so the quotes start at two heights, quote in Cormorant italic 19px on a 1.45 line, trimmed to 45 words with 'Read the full review', attribution as a descriptor in the label style (group type and venue), a small Google mark only if the quote is from Google.
Make it La maréa: images from the same retreat as the quote. Never invent a quote; placeholders say 'Google review from a private group, to be selected by Belle'.
Mobile: a horizontal scroll-snap row at 1.2 cards with the hairline progress rule, not The Tailor's two cramped columns at 164px.

### D11. Journal slider with filter tabs

Reference: The Tailor's stories page and home slider, COMO's arrows.
Build, home: label, heading, 25-word intro left, hairline arrows right, then a slider of 4:5 cards, three and a peek visible, title overlaid bottom left in Cormorant 24px on a soft gradient, category and date in the label style, image scale 1.04 on hover. Arrows step one card at 600ms (not COMO's 2s crossfade of whole groups). This keeps Belle's arrows and fixes the size she disliked.
Build, journal page: tabs from day one (L5), sentence case, 1px outline, active filled `--sage-80`, horizontally scrollable on mobile with an edge fade (The Tailor wraps to two rows, which pushes the first story down). Three-column grid of 4:5 cards, client-side filtering with a View Transition.
Make it La maréa: category names are Belle's (recipes, research, movement and so on), no orange tags; the category label sits on a `--salt-25` chip.

### D12. Question circles before the enquiry funnel

Reference: The Tailor's customise circles.
Build: text left (label, heading, 15 words, circled arrow 'Plan your day'), three circles right at `clamp(180px, 17vw, 248px)`, overlapping 9 per cent, 1px `--sage-40` ring. Each holds a question in Cormorant italic at about 26px and a hint in the label style. Unlike The Tailor's, each circle is a button that opens the funnel at that step. Hover: ring to `--sage-80` and the circle fills `--salt-25`, 300ms, no lift beyond 2px.
Make it La maréa: the three questions come from Belle and match the funnel's first three steps; do not write them for her. One pillar icon, Personalisation, sits above the heading, because Belle connected this section to her personalisation pillar.
Mobile: stacked vertically 24px apart without overlap, exactly as The Tailor does at 390.

---

## E. Mobile, 390 x 844

| Section | The Tailor at 390 | Aman at 390 | COMO at 390 | La maréa |
|---|---|---|---|---|
| Header | Transparent over hero, round icons left, Enquire pill right, then sand bar that hides on scroll down | Sticky sand bar, hamburger left, logo centre, search right, no Reserve | 60px, 30 per cent white over hero, then white | Transparent over hero, then sand bar, hides on scroll down. Logo centre, menu right, no header button |
| Primary action | Enquire pill in header | Full-width sticky Reserve bar at the bottom | not observed | Slim sticky 'Plan your day' bar at the bottom after the hero, hidden while the funnel is open |
| Menu | One column, serif list, dividers between items | Drawer with region buttons at the bottom | not captured | Full-screen sand, Cormorant list, contact at the bottom |
| Hero | Portrait crop of the still, wordmark at the bottom | Video full-bleed, heading below | Full-bleed | Full-bleed portrait crop of the drone clip with its own mobile poster and focal point |
| Zoom | Runs, portrait mosaic, scale about 1.2 to 1.9 | n/a | n/a | Runs, three to four tiles only, shorter (about 900px of scroll), scale capped where the centre tile fills the screen |
| Card sliders | 296 x 387 cards, 1.3 visible, progress segment 8px | 281px squares, 1.2 visible | Journal one card with a peek | 1.2 cards visible, scroll-snap, hairline progress, arrows below the row |
| Horizontal day sequence | Still pinned, 30px spines, paragraphs truncated with an ellipsis | n/a | n/a | Not pinned. Four stacked panels in the colour ramp, full copy |
| Experiences flex row | n/a | n/a | Survives: active 273px at `flex: 7`, slivers 39px, copy printed below | Survives at three visible, slivers at least 44px, copy below |
| Map | Removed, replaced by wrapped state pills | n/a | n/a | Kept, map above, venue pills below it |
| Testimonials | Two columns at 164px | n/a | n/a | One snap row at 1.2 cards |
| Team | One larger portrait, edge arrows | n/a | n/a | One person, swipe, bio open |
| Filter tabs | Wrap to two rows, 5 x 10px padding | n/a | n/a | One scrollable row with an edge fade |
| Circles | 210px, stacked 30px apart, no overlap | n/a | n/a | Same, stacked with no overlap |
| Accordions | Same as desktop | n/a | n/a | Same, 44px rows |
| Side gutter | 20px | 24.5px | not measured | `clamp(20px, 5.5vw, 96px)`, 21.5px at 390 |
| Section padding | 50, and 33 top on 100px sections | 65 between blocks | 56 top, 75 bottom on the journal | 64 via the clamp |
| Type | Heading 30/36, body 16/24, eyebrow unchanged at 11.5 | Heading 24.1 | not measured | Heading 30, lead 18, body 16/1.6, label 12.5 |

---

## Shot index

| File | Shows |
|---|---|
| tailor-home-hero-01-desktop, -mobile | Hero still, wordmark, transparent header |
| tailor-home-intro-header-01-desktop | Fixed sand header revealed on scroll up over the intro section |
| tailor-home-zoom-01 to 04-desktop, 01 to 02-mobile | Mosaic zoom at scale 1.22, about 1.35, about 1.68 and 2.18; mobile at 1.21 and 1.92 (video tile shown as a labelled placeholder) |
| tailor-home-thread-01-desktop | Needle and thread line drawing on the green band |
| tailor-home-itineraries-01-desktop, -mobile | Slider, hairline progress segment, drag cursor |
| tailor-home-wipe-01 to 06-desktop, 01 to 03-mobile | Pinned wipe: base panel, plum panel travelling, plum settled, mid panel travelling, mid settled, pale panel settled |
| tailor-home-map-01-desktop, 02-desktop, 01-mobile | Western Australia, then South Australia selected; mobile pills |
| tailor-home-testimonials-01-desktop, -mobile | Image above, words below, alternating image heights |
| tailor-home-team-01-desktop, -mobile | Single portrait with edge arrows |
| tailor-home-stories-01-desktop, -mobile | Recent stories slider |
| tailor-home-menu-01-desktop, -mobile | Menu overlay |
| tailor-home-cta-hover-01-desktop | Circled arrow at rest and on hover |
| tailor-stories-tabs-01-desktop, -mobile | Filter tabs and card grid |
| tailor-stories-circles-01-desktop, -mobile | Question circles |
| tailor-about-accordion-01-desktop, -mobile | About accordion with the third row open |
| aman-home-hero-01-desktop, -mobile, 02-desktop | Hero video frame (placeholder), headline below, two-up |
| aman-home-seasonal-01 to 02-desktop, 01-mobile | Seasonal experiences split, before and after stepping |
| aman-home-menu-01-desktop, -mobile | Menu drawer |
| como-home-hero-01-desktop | Transparent 160px header over the hero |
| como-home-experiences-01 to 04-desktop, 01-mobile | Flex row at rest, tile 1 active, mid-trade to tile 3 at 600ms, tile 3 settled; mobile 7:1 |
| como-home-journal-01 to 02-desktop, 01-mobile | Journal groups and arrows |
| como-nutrition-intro-01-desktop | Intro and programmes slider |
| como-nutrition-philosophy-01-desktop, -mobile | Tabbed culinary philosophy |
| bathhouse-albion-spaces-01-desktop, -mobile | Ten immersive spaces slider |
| basq-home-rooms-01-desktop | Our rooms index |
| basq-home-rooms-02-desktop | Room panel sliding in from the right |
| basq-home-feature-01-desktop | Heated pool feature gallery |
| basq-home-locale-map-01-desktop | Illustrated line map |
| sha-home-advisory-01-desktop | Scientific advisory board carousel |
| sha-nutrition-accordion-01-desktop | Pillar accordion, first row open |
| sha-nutrition-diets-01-desktop | Diet cards with Kushi open on hover |
| scorpios-ritual-space-hero-01-desktop | Ritual Space page opening, type and tone |

## Not observed

The Tailor's zoom video content and COMO's hero video (no H.264 in the test browser). Aman's hero video (Vimeo 403). Whether The Tailor's thread draws on scroll. What fills the right side of The Tailor's menu on hover. The Tailor's wordmark load animation. The Tailor's enquiry drawer (an 838px panel parked off-canvas to the right, not opened). COMO's menu. The phrase 'eat well, be well' on any COMO page checked. Any focus styles on any reference site.
