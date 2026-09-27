# La maréa luxury redesign direction

Date 27-09-2026. Written after walking every main page at 1440 and 390 (shots in `qa/shots/designer/`, mid-scroll views in `qa/shots/designer/steps/`). This document sets the direction for the build stage. It changes no copy and adds no facts. Every word on the page stays Belle's.

## Salt and Sun, the concept

La maréa means the tide. The site should move the way a slow day on the Fleurieu moves: pale morning light on the water, long pauses, a table in the afternoon sun, a warm bath at dusk. **Salt and Sun** is the working name. Salt is the page: bright limestone and sand, huge margins, small refined type. Sun is the warmth that arrives through the photographs and a light grade that warms as you scroll through the day.

The reference feeling is a printed travel magazine in a Positano hotel room. Few words per spread, one great photograph, a small caption in italic, and a lot of paper.

```
 Morning (top of page)        Midday                     Dusk (bottom of page)
 salt-25, cool light   --->   sand-30, full sun   --->   sand-60, warm glow
 wide aerials, water          the table, lemons          the bath, candles
 small type, lots of air      mixed editorial grid       one closing invitation
```

## Frank critique of the current site

### The five biggest problems

1. **The home hero looks cheap.** HV Muse is a fine, wide hairline face. Set at 48px in white with tracking over a busy, overcast, green and grey drone shot of rock and scrub, the hairlines break apart and the line reads as a template overlay. The shade gradient behind it muddies the water, which was the most beautiful part of the photo. Six nav links, a Menu toggle and a boxed sand button sit over the sky at the same time, so the top of the page has three competing rows of type before anything calm happens. Every inner page repeats the same pattern (photo, white headline bottom left, scrim), so the problem shows on twelve pages, and on the venue page the hero is an empty placeholder.

2. **One rhythm, repeated everywhere.** Almost every section on every page is the same unit: a 12px tracked Jost label, a 28 to 38px HV Muse heading, a 16px paragraph, an arrow link, all hung off the same left gutter. There is no scale contrast. The biggest heading on the site is 48px on a 1440px screen, so nothing ever commands the page and nothing ever whispers either. The result is flat and polite, which is the look of a theme rather than a studio.

3. **Photos are treated as thumbnails.** Belle's photography is the product (her words: "the imagery is what sells"). Right now most images sit in cards 300 to 450px wide, cropped to the same ratios, inside the same grid. There are almost no full-bleed moments after the hero, no editorial pairing of a tall portrait with a small detail, and no captions. The blank monogram placeholders on the journal, team, places, venue and 'Our difference' sections read as unfinished and pull the whole site down.

4. **Too long, with dead air in the wrong places.** The home page is 18,257px at 1440 across twelve sections. The pinned collage and pinned day leave a full screen of empty sand while they wait for scroll, which feels broken rather than restful. Meanwhile the useful white space is missing where it matters: headlines sit tight against rules, and the culinary cards collapse into a narrow column mid-animation. Luxury pacing is fewer sections with longer pauses between them, and each pause has a reason.

5. **Stock UI chrome and stock motion.** Boxed sand buttons with borders, hairline rules under every row, chevron 'Read more' toggles, dotted timelines, arrow links repeated ten times a page, and the same progress bar plus arrow pair on four different sliders. Motion is a generic fade-up on everything plus a scattered collage whose layout looks random. Nothing is wrong on its own, but together it says 'built from components'.

### Page by page

- **Home.** Hero as above. The Invitation block is good copy set too small with too little space. The zoom collage (six photos floating at random sizes) lacks a grid and reads as clutter; the Tailor zoom Belle loved works because one image grows, while here six compete. The 8 hour day is the strongest idea on the site but the timeline UI (dots, underline, '5pm' floating alone) looks like a form stepper. The experiences slider works but the massage card sits in a sand box while the sauna card does not, so the row looks inconsistent. The culinary block is text heavy and its two cards are small. 'Places to Pause' has a map tile and a huge empty sand panel beside it. 'Our difference' has five numbered rows with long Cormorant lines at 30px, which reads like a feature list. The testimonials carry food photos unrelated to the quotes. The journal row shows placeholders. The footer is tidy and can stay close to as is.
- **Retreats, private groups, corporate.** Identical hero treatment. Below it, the 'Who it is for' split puts a lone 12px label in a 400px empty column. The day section on private groups and corporate is a heading with a full screen of blank sand under it before the pin starts. The retreat format cards are narrow portraits with tiny text.
- **Experiences.** The hero yoga silhouette is strong. The two sliders below use the same card and the same controls, and four of six afternoon cards are placeholders.
- **Places and venue.** The arch cards on /places are the best brand move on the site and should become the signature shape. Two of three arches are empty. The venue page opens on a placeholder hero and a spec table that looks like a data grid.
- **Food.** Lovely photography let down by a text-first layout and a menu accordion that reads like an FAQ. The chef section is a CV block.
- **Philosophy.** The pillar icons are charming but set at 40px in a row they read as a toolbar. Belle asked for the pillars to be bigger.
- **Our story and team.** Our story has a beautiful aerial hero but the note from Belle is set in 15px Cormorant in a narrow column with no portrait. Team shows two large placeholders.
- **Journal.** A good featured story tile, then a four-up grid of equal cards. It needs a magazine cover moment.
- **Enquire.** The best-behaved page. The arch prompt cards are good. The Continue button is the same stock boxed button.
- **Mobile.** The home hero on phones already puts text on sand below the image, which is the right instinct and proves the fix. The inner pages still set white type over photos. The sticky 'Plan your day' bar is heavy and covers content.

## Palette rules

Belle's guide gives three families: Sage (#433D1B), Sand (#E6D6A4) and Salt (#E9E5D6), with their tints. The redesign keeps to them. The Mediterranean warmth comes from the photographs (lemons, olive linen, turquoise water, sunset cliffs) and from a light warm grade, never from new brand colours.

| Role | Token | Use |
|---|---|---|
| Page, morning sections | salt-25 #FAF9F5 | Top of every page, hero panel, generous space |
| Page, main | sand-30 #F8F3E4 | Default ground, about 60 percent of the site |
| Warm band | sand-60 #F0E5C7 | Food, dusk sections, footer, one band per page at most |
| Accent fill | sand-100 #E6D6A4 | Tiny amounts only: the button hover fill, active dot, selection colour |
| Headings | sage-80 #635B39 | All display type |
| Body | sage-100 #433D1B | Paragraphs, captions, nav |
| Hairlines and icons | sage-40 #AAA38B | Rules at 40 percent opacity, pillar icons |

Rules:

- **No dark sections.** No sage-filled bands. The one dark surface allowed is a photograph.
- **No white type on photos anywhere on the site.** Type sits on sand or salt. This removes every scrim.
- **The warm grade.** On the home page the page ground drifts from salt-25 at the top to sand-60 near the bottom, driven by scroll, so the site warms from morning to dusk. The shift is subtle (about 4 percent luminance) and uses only guide colours.
- **Mediterranean accents.** Terracotta, olive and lemon are absent from Belle's guide, so they stay out of the UI. Olive is already present as sage-80. If Belle wants one warm accent, a terracotta at 8 percent tint could mark the dusk hour in the 8 hour day. That is a question for Belle and stays off by default.
- **Paper grain.** A 3 percent monochrome noise texture over sand grounds, fixed to the viewport, so flat sand reads as paper rather than a flat hex value.
- **Photo grade.** Lift shadows, warm white balance, keep water green and turquoise, no vignette (from the media brief). The overcast drone frames move out of lead positions.

## Type system

Three faces, each with one job.

| Face | Job | Sizes at 1440 (phone) | Tracking | Notes |
|---|---|---|---|---|
| HV Muse | Display only | Hero 88px (40px), section display 64px (34px), h2 44px (30px), place names 56px (32px) | 0.01em at display, 0 at h2 | Fine hairline weight, so it only appears at 30px and up, always sage-80 on sand, never on photos. Line height 1.02 to 1.08 |
| HV Muse Italic | One flourish per heading | Same as its line | 0 | Place names and one key word only, for example *Fleurieu Peninsula*. Never a whole sentence |
| Cormorant Garamond | Editorial voice | Lead 24px (20px), pull quotes 32px italic (24px), captions 15px italic | 0 | Quotes, captions, Belle's note, card titles at 22 to 26px |
| Jost | Utility | Body 16px (16px), small 14px, labels 11.5px | Body 0.01em, labels 0.12em | Nav, times, labels, buttons. Weight 400 for body, 300 never |

Rules:

- **Scale contrast is the luxury.** Each page gets one or two very large moments (64 to 88px) and everything else stays small. Nothing between 40 and 60px except place names.
- **Line length.** Leads 32 to 38 characters wide, body paragraphs 60 to 68 characters (max 34rem). Display lines break by hand into two or three lines with a balanced rag (`text-wrap: balance`).
- **Labels cut by two thirds.** The small tracked label currently heads every section. It stays only where it adds information (a time, a place, a count). Sections are announced by the heading alone.
- **Numerals.** Times in the day use Cormorant old-style figures at 20px, so '8:15am' feels printed rather than typed.
- **Captions.** Every lead photograph gets a caption in the magazine style: Cormorant italic 15px, sage-80, set 12px under the image's left edge. Content is the place or moment, taken from what the site already says (for example 'Naiko Deep Creek, Fleurieu Peninsula'). No invented captions.

## Grid and spacing

- **12 columns at 1440**, 24px gutters, side margin 6vw (86px), content max 1320px. Full-bleed images ignore the grid.
- **8 columns at tablet, 4 at phone** with 20px margins.
- **Vertical rhythm.** Section spacing doubles: 200px between sections at 1440 (120px on phones). Inside a section, 40px from heading to body, 64px from body to images.
- **Asymmetry.** Alternate section anchors: text on columns 2 to 5 with image on 7 to 12, then a centred single column, then a full bleed. Never three sections in a row with the same anchor.
- **Mixed ratios.** Pair a tall 4:5 portrait with a small 1:1 detail offset 120px lower, or a wide 3:2 frame with a 2:3 arch. Ratios used: 16:9 full bleed, 4:5, 3:2, 1:1, and the arch (2:3 with a half-circle top).
- **Home page trimmed to eight sections.** Hero, Invitation, The 8 hour day, Experiences, The table, Places to Pause, In our guests' words, Plan your day, then the footer. 'Our difference' moves to /our-story and /philosophy where its facts already live. The journal row becomes a single featured story above the footer. Target height at 1440 is about 11,000px.

```
 Home, new order
 [1 Hero: framed horizon]              salt
 [2 Invitation: centred, big air]      salt
 [3 The 8 hour day: sticky split]      salt -> sand (dawn to dusk grade)
 [4 Experiences: pinned gallery]       sand
 [5 The table: editorial spread]       sand-60 warm band
 [6 Places to Pause: arches + map]     sand
 [7 Guests' words: one quote at a time] sand
 [8 Plan your day: bath video close]   sand-60
 [one journal story + footer]
```

## Image treatment

- **Full-bleed cinematic.** At least one full-bleed image or video per page, 100vw by 90 to 100svh, with no text on it.
- **Arches as the signature frame.** The half-round swatch from Belle's guide becomes the one frame shape: venue cards, the Places to Pause section, the enquiry prompts, and the portrait of Belle. Used at most twice per page so it stays special.
- **Editorial pairs.** Big image plus small detail, offset, with a caption. The table spread on /food and the home 'table' section use this.
- **No placeholders in public view.** Where a photo is missing, the layout drops that image and the text reflows. The monogram tile is removed from public pages.
- **Lead photo choice.** Lead with the brightest frames: the overhead beach aerial (`home-page-homepage11.jpg`), the coastal path aerial (`home-page-homepage12.jpg`), the lemon table from above (`home-page-homepage3.jpg`), the beach walk (`home-page-homepage2.jpg`), the bath (`home-page-home-page.jpg`) and Belle's bath video. The darker indoor yoga and overcast cliff frames move to supporting roles.

## The home hero, rebuilt

The type moves off the photo and onto sand. The image becomes a framed window that opens to full bleed as you scroll.

```
 Load (1440)                                   After 60vh of scroll
 +------------------------------------------+  +------------------------------------------+
 |  Menu        La maréa     Plan your day  |  |                                          |
 |                                          |  |                                          |
 |      Luxury coastal wellness retreats    |  |        full-bleed image, no text         |
 |      on the *Fleurieu Peninsula*         |  |        (slow 1.08 -> 1.0 settle)         |
 |                                          |  |                                          |
 |   +----------------------------------+   |  |                                          |
 |   |   overhead beach aerial, inset   |   |  |                                          |
 |   |   in a frame 84vw x 58svh        |   |  |                                          |
 |   +----------------------------------+   |  |                                          |
 |   Private groups ->   Corporate teams -> |  +------------------------------------------+
 +------------------------------------------+
```

- **Top 42 percent of the viewport** is salt-25. The existing headline ('Luxury coastal wellness retreats on the *Fleurieu Peninsula*') is centred in HV Muse at 72 to 88px, sage-80, two lines, with the place name in italic. Above it sit only the centred wordmark, a quiet Menu and the Plan your day pill.
- **The image** sits below as an inset window (84vw wide, 58svh tall, square corners). It is the brightest aerial, so the first impression is pale sand, white foam and turquoise water.
- **The two doors** ('Private groups and retreats', 'Corporate teams') sit under the frame as small Jost links aligned to its left and right edges.
- **On scroll** the frame's clip-path opens from `inset(0 8vw)` to `inset(0)` and the image eases from scale 1.08 to 1.0, reaching full bleed after 60vh (the zoom Belle loved on the Tailor). The headline drifts up 40px and fades to 0 over the same distance.
- **Video.** When Belle supplies the summer drone clip she named (DJI_0604), it replaces the still in the same frame, slowed and looped with a poster. Until then the still has a 20 second Ken Burns drift of 3 percent.
- **Phone.** Headline at 40px on salt, frame 100vw by 62svh directly under it, doors under the frame. No sticky bottom bar on first view.
- **Reduced motion.** The frame renders at full width with no clip or scale change, and the headline stays put.

Inner pages use a quieter version: headline on sand at 56 to 64px, the image as a 16:9 frame below it that widens to full bleed on scroll. No text over any image.

## Signature features

Timings use two easings throughout. **Tide ease** `cubic-bezier(0.65, 0, 0.35, 1)` for anything that travels, **settle ease** `cubic-bezier(0.22, 1, 0.36, 1)` for anything that arrives. Nothing bounces or overshoots. All motion honours `prefers-reduced-motion: reduce`.

| # | Feature | How it works | Where | Timing | Reduced motion |
|---|---|---|---|---|---|
| 1 | **Opening curtain** | A salt panel covers the page; the La maréa submark draws in (SVG stroke, 900ms), the wordmark fades up, then the panel lifts like a tide going out (translateY -100%). Once per session only (sessionStorage) | First load of any page | Total 1.8s, lift 900ms tide ease | Skipped. Page renders directly |
| 2 | **Framed horizon hero** | As specified above. GSAP ScrollTrigger scrubs clip-path and scale | Home, then a lighter version on inner pages | Scrub over 60vh, smoothing 0.6 | Static full-width frame |
| 3 | **Inertial scroll** | Lenis with `lerp: 0.09`, synced to ScrollTrigger. Native scroll on touch devices | Site-wide | Continuous | Lenis off, native scroll |
| 4 | **Line reveal headings** | Display headings split into lines (GSAP SplitText, now free), each line masked and rising from 105% to 0 | Every display heading, once, on entry | 1100ms per line, 90ms stagger, settle ease | Headings shown at rest |
| 5 | **Image mask reveal** | Images enter through a clip-path from `inset(100% 0 0 0)` to `inset(0)` while scaling 1.12 to 1.0, like a blind lifting | Every lead image | 1400ms, tide ease, starts at 80% of viewport | Images at rest, 300ms fade only |
| 6 | **The 8 hour day, sticky split** | Left half sticks and holds the photo for the current hour, crossfading between photos. Right half scrolls Belle's timetable. The hour changes as each time block crosses the centre line | Home, /retreats, /private-groups, /corporate, /experiences/full-day-retreat | Crossfade 900ms | Stacked: photo then timetable per hour, no sticking |
| 7 | **Tide line** | One hand-drawn wave line in sage-40 runs down the day timetable and draws itself (stroke-dashoffset) as you scroll, with the times sitting on it. Replaces the dotted stepper | The 8 hour day | Scrubbed to scroll | Drawn in full, static |
| 8 | **Dawn to dusk grade** | The page ground and a soft overlay on the day photos move from cool salt at 7am to warm sand-60 at 5pm. CSS custom properties interpolated by ScrollTrigger | The 8 hour day, then the home page ground overall | Scrubbed | Fixed midday tone |
| 9 | **Pinned experience gallery** | The section pins while ten experience cards travel horizontally. Cards mix three sizes; images inside move at 0.85 speed for parallax depth. A counter ('03 / 10') and a thin tide line show progress | Home, /experiences | Pinned for about 250vh, scrub 0.8 | Native horizontal scroll with snap and visible arrows |
| 10 | **Hover-reveal experience tiles** | On hover the image scales 1.0 to 1.04 and Belle's one-line description slides up from under the title. On touch, a tap reveals the same line | Experience cards, retreat formats | 600ms settle ease | Description always visible |
| 11 | **Image cursor** | Over interactive images a 72px salt disc with a small Jost word ('View', 'Drag') follows the pointer at 0.15 lerp. Default cursor elsewhere. Pointer devices only | Galleries, sliders, venue arches | 300ms scale in | Off, normal cursor |
| 12 | **Slow word marquee** | Belle's ten pillar names (Nutrition, Movement, Sleep and recovery and the rest) drift across the page in HV Muse at 64px, sage-40, with her pillar icons between words. One pass every 60 seconds. Pauses on hover | Once on home, once on /philosophy, as the pause between two sections | 60s linear loop | Static centred row |
| 13 | **Arch venue windows** | Places to Pause shows each venue in a tall arch. The image inside moves at 0.8 speed. The map pin for that venue glows as its arch crosses centre | Home, /places | Parallax scrub, pin glow 400ms | Static arches, all pins visible |
| 14 | **Full-screen menu with previews** | Menu opens as a salt sheet that wipes down (tide ease, 800ms). Links in HV Muse at 48px, left column. Hovering a link crossfades its photograph into a large arch on the right | Site-wide | Open 800ms, preview crossfade 500ms | Opens instantly, previews static |
| 15 | **Sand wipe transitions and magnetic Plan your day** | Astro view transitions: a sand-60 panel sweeps up and away between pages (700ms). 'Plan your day' becomes a text link with a fine underline inside a sand pill; the pill drifts up to 6px towards the pointer and fills with sand-100 on hover | Site-wide | Wipe 700ms tide ease, magnet 400ms settle ease | Crossfade 200ms, no magnet |

Supporting details built alongside the list:

- **Header.** Centred wordmark, 'Menu' left, 'Plan your day' right. The six inline nav links move into the full-screen menu, which clears the top of every page. The header is transparent on salt and hides on scroll down, returning on scroll up (500ms).
- **Guests' words.** One quote at a time in Cormorant italic at 32px, centred, with the guest line in Jost below and a small counter. The unrelated food photos come off the quotes.
- **Closing invitation.** Belle's bath video as a full-bleed loop, then 'Plan your day' set on sand beneath it. The home page ends at dusk, which completes the day.
- **Buttons.** No bordered boxes. The primary action is the sand pill. Secondary actions are text links with a 1px underline that draws left to right on hover (400ms). Chevrons on 'Read more' become a small plus that turns to a minus.
- **Phone.** No sticky bottom bar. 'Plan your day' lives in the header. Sliders use native swipe with snap.

## What stays exactly as Belle asked

- Sand dominant, sage wording, light and bright, summery. No dark sections.
- Video and imagery that moves as you scroll, the zoom-on-scroll moment, sliders for experiences.
- Her copy verbatim, her facts, her ten pillars, her venue details, her 8 hour day timetable.
- HV Muse as the brand face, the arch shape from her guide, her pillar icons.
- Anything uncertain (the terracotta accent, captions not already on the site, the DJI_0604 clip) goes to `build/questions-for-belle-26-09-2026.md`.

## Build order

1. Tokens, type scale, grain, header and menu (features 3, 14, 15).
2. Home hero and inner page heroes (feature 2), removing every scrim.
3. Reveal system (features 4, 5) applied site-wide.
4. The 8 hour day (features 6, 7, 8).
5. Experiences gallery and tiles (features 9, 10, 11).
6. Places arches and map, marquee, guests' words, closing video (features 12, 13).
7. Opening curtain last (feature 1), so it wraps a finished site.
8. Screenshot every page at 1440 and 390 with notes off, check reduced motion, and run `npx astro build`.
