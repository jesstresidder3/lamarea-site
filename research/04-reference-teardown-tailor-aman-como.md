---
title: Reference site teardown, The Tailor, COMO Shambhala, Aman
project: La maréa website rebuild, client Belle Redden
agent: reference-site teardown agent 1 of 3
date: 16-09-2026
status: complete
---

# Reference site teardown for The Tailor, COMO Shambhala and Aman

Everything below was observed directly in the browser on 16-09-2026 by reading the live DOM, computed styles and the theme JavaScript. Where a detail could not be observed it is written as "not detected" rather than guessed.

One note on naming. The Tailor's own section labels use a word that is banned in La maréa's writing rules, so those sections are named descriptively here rather than quoted. The exclusive-itineraries slider and the customise-your-experience circles are the two affected.

---

## 1. The Tailor, thetailor.com

Belle's most-referenced site by a distance. Nine of her named interactions come from here.

### 1.1 Detected animation stack

Read from `document.querySelectorAll('script[src]')` on the home page, 16-09-2026.

| Layer | Library | Path |
|---|---|---|
| Platform | WordPress, custom theme `the-tailor` | `/wp-content/themes/the-tailor/` |
| DOM | jQuery 3.6.0 | `themes/the-tailor/js/jquery-3.6.0.min.js` |
| Scroll scenes | ScrollMagic | `js/scrollmagic/js/ScrollMagic.js` |
| Tweening | GSAP TweenMax (GSAP 1.x/2.x era) plus `animation.gsap.js` bridge plus `ScrollToPlugin` | `js/scrollmagic/js/` |
| Carousels | Slick Carousel | `js/slick.js` |
| Lightbox | Magnific Popup | `js/jquery.magnific-popup.js` |
| Charts | ECharts, used for weather charts on destination pages | `js/echarts.min.js` |
| Truncation | readmore.js | `js/readmore.min.js` |
| Select styling | Selectr | `js/selectr.js` |
| All site animation code | one theme file, 147 kB | `js/app.js` |
| Performance layer | NitroPack, its `nitro-lazy` and `nitro-offscreen` classes sit on nearly every section | inline |

Not detected on this site: Lenis, Locomotive Scroll, Framer Motion, Barba, Embla, Swiper, AOS, Three.js. No smooth-scroll hijack library is present, the page uses native scroll.

The practical read for La maréa is that this is a 2021-era jQuery stack. Every effect Belle likes is reproducible on a modern stack, either GSAP 3 with ScrollTrigger or the browser's own scroll-driven animations plus IntersectionObserver, with less code and better mobile behaviour. Nothing here requires copying their approach, only their result.

### 1.2 Home page section inventory in scroll order

Read from the live DOM, top-level `<section>` elements in document order.

| # | Class | What it is |
|---|---|---|
| 1 | `.-header` | Fixed header, logo centred, nav split left and right |
| 2 | `.topofLargeVideo.common-left-content-right-image-layout.pt130` | Eyebrow, heading and body on the left, image on the right. Also the start anchor for the video zoom |
| 3 | `.LargeVideo` | The full-bleed video that zooms on scroll. Belle's L1 |
| 4 | `.LargeVideo_bottomofLargeVideo.common-needle-and-thread.pt100` | Why choose us. A vertical stitched-line graphic with two value blocks, Excellence and Authenticity, hung off it. Also the end anchor for the zoom |
| 5 | `.common-our-exclusive-journeys.black-bg.pt130` | The exclusive-itineraries slider, dark background, 16 itineraries |
| 6 | `.unique-australian-experiences.wipe-horizontal-animation` | Best of Australia. Three pinned panels wiping in from the right |
| 7 | `.explore-map` | Inline SVG map of Australia, region detail stepped by arrows |
| 8 | `.common-testimonials-lists.one-line.common-bg-gray` | Testimonials, image above and wording beneath |
| 9 | `.our-team.pt100.pb100` | Meet our team, a Slick slider of 8 people |
| 10 | `.home-contact-us.pt100.pb100` | Contact details block |
| 11 | `.travel-stories.pt130.pb130` | Recent stories, editorial cards in a slider |
| 12 | `.our-awards-and-recognition` | Logo slider showing Forbes, Condé Nast Traveler, Financial Review, Travel + Leisure |
| 13 | `.ttq` | Questions travellers ask, an FAQ accordion |
| 14 | `.footer.pt120.pb20` | Footer with newsletter signup |

The stories page at `/stories/` adds `.common-blog-lists`, which is the filter tabs plus card grid, and `.customise-your-journey` before the awards and footer.

### 1.3 Typography with real computed values

| Role | Family | Size | Weight | Letter spacing | Line height | Case |
|---|---|---|---|---|---|---|
| Display heading, h1 and h2 | Martina Plantijn, a serif | 44px | 300 | normal | 52.8px, ratio 1.2 | sentence |
| Section heading in a narrower block | Martina Plantijn | 40px | 300 | normal | 48px, ratio 1.2 | sentence |
| Emphasis inside a heading | Martina Plantijn italic | same as parent | 300 | normal | same | sentence |
| Eyebrow label | Söhne, a grotesque | 11.5px | 400 | 2.3px | 15.25px | uppercase |
| Nav and small links | Söhne | 12px | 400 | 1.2px | 16.25px | sentence |
| Body copy | Martina Plantijn | 16px | 300 | normal | 24px, ratio 1.5 | sentence |
| Secondary sans | Jost | varies | 400 | not detected | not detected | sentence |

Three measurable things carry the luxury signal Belle is responding to, and all three are cheap to copy. A light-weight serif set at 300 rather than 400. A display line height of 1.2 against a body line height of 1.5. Uppercase eyebrows at 11.5px with 2.3px tracking, which is roughly 0.2em. Every heading italicises one or two words for emphasis and never uses bold.

Martina Plantijn and Söhne are both licensed commercial faces. The same effect is available to La maréa free from Google Fonts, using a light-weight transitional serif for display against a neutral grotesque for labels.

### 1.4 Colour with real values

| Token | Value | Use |
|---|---|---|
| Page background | `rgb(248, 247, 244)`, `#F8F7F4` | Warm off-white, the dominant surface |
| Ink | `rgb(62, 42, 46)`, `#3E2A2E` | Headings and body. A warm near-black plum, never pure black |
| Panel 1 | `#3E2A2E` | Best of Australia |
| Panel 2 | `rgb(110, 95, 98)`, `#6E5F62` | Enriching Encounters |
| Panel 3 | `rgb(158, 148, 150)`, `#9E9496` | Five-Star Luxury |
| Reversed text | `rgb(252, 252, 251)`, `#FCFCFB` | On dark panels |

The three wipe panels are one hue stepping lighter, not three different colours (this was the surprise of the teardown, since on screen it reads as three designed sections rather than one colour ramp). That is why the sequence feels like a single continuous move. It transfers directly. Soft sand and sage at three lightness steps would do the same job for La maréa.

### 1.5 Copy patterns

Headings run 3 to 6 words with one or two of them italicised. The italic always carries the adjective and the roman carries the noun. Their headings include "Our _Exclusive_ Itineraries", "_Meet_ our team", "_Don't just_ take our word for it" and "Recent _inspiring_ stories".

Body blocks run 25 to 45 words, one or two sentences, always in a narrow measure directly under the heading. One verbatim example, "Our carefully curated itineraries offer unrivalled access to Australia's most sought-after people, places, and experiences, often unseen by most."

Verb choice is possessive and service-led. Craft, curate, hand-craft, select, navigate, adapt. The subject is nearly always "we" or "our" and the object is the traveller's experience. Nothing is described as included, only as accessed.

Calls to action are two words in uppercase Söhne with a circled arrow to the left, such as "EXPLORE MORE" and "CONTACT US". There are no filled buttons anywhere on the site. The arrow circle is the only affordance.

---

## 2. The Tailor rebuild spec, T1 to T10

Each item gives the DOM structure, the trigger, what moves and how far, timing and easing, mobile behaviour, the reduced-motion fallback, the content fields, a build-difficulty verdict, and a frank read on whether Belle's amateur drone footage can carry it. The source is the live theme's `app.js` unless noted.

---

### T1. Hero video that zooms in on scroll, covering Belle's L1 and C1

Build difficulty is easy.

#### How it works

Three cooperating sections do the work, not one. `.topofLargeVideo` sits above, `.LargeVideo` contains `#LargeVideo_middleofLargeVideo` and the zooming element `.LargeVideo_change`, and `.LargeVideo_bottomofLargeVideo` sits below. A scroll handler computes the following, verbatim in structure from `app.js`:

```
distanceToTop = (scrollTop + windowHeight) - (topAnchor.offsetTop + topAnchor.outerHeight)
track         = middleSection.height() - 200
scale         = 1 + (distanceToTop / track) * 1.25      // clamped at 2.18
element.style.transform = `translateX(-50%) translateY(-50%) scale(${scale})`
```

The video is absolutely positioned, centred by a 50 per cent translate pair, and scaled from 1 up to a hard ceiling of 2.18. The effect begins when the bottom of the viewport passes the bottom of the section above it, and stays live while `distanceToTop > -500` and the bottom anchor is still greater than -100 from the viewport top. A floating caption element `.LargeVideo_float` is toggled between `LargeVideo_show` and `LargeVideo_hide` on those same two conditions, so the text disappears as the zoom completes.

#### What triggers it

A native `window.scroll` listener, recomputed on every scroll event with no throttle. That lack of throttling is the one thing not to copy.

#### What moves and how far

Scale runs from 1 to 2.18 over roughly one viewport height of scroll. Nothing translates, because the centring transform is constant.

#### Timing and easing

There is none. The scale is bound directly to scroll position, so the easing is whatever the visitor's own scroll does. That is why it feels expensive, it tracks the finger exactly.

#### How to rebuild it

Use a CSS scroll-driven animation where the browser supports it, with a GSAP ScrollTrigger `scrub: true` fallback where it does not.

```css
@supports (animation-timeline: view()) {
  .hero-video {
    animation: heroZoom linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 60%;
  }
  @keyframes heroZoom {
    from { transform: translate(-50%, -50%) scale(1); }
    to   { transform: translate(-50%, -50%) scale(2.18); }
  }
}
```

This runs off the main thread, with no scroll handler and no jank.

#### Mobile behaviour

Cap the scale lower on phones, somewhere between 1.4 and 1.5, because on a 390px viewport a 2.18x scale on a 1080p source is a visible pixel crop. Serve a shorter, lower-bitrate video with a `poster` frame. Autoplay must carry `muted` and `playsinline` or iOS will refuse it.

#### Reduced-motion fallback

Inside `@media (prefers-reduced-motion: reduce)`, freeze the scale at 1 and show the poster frame. The section still reads correctly, it simply does not move.

#### Content fields each instance needs

`video_webm`, `video_mp4`, `poster_image`, `alt_text`, `float_caption_eyebrow`, `float_caption_heading`, `max_scale` with a default of 2.18 and a mobile value of 1.45.

#### Can Belle's drone footage carry it

Yes, and this is the most forgiving effect in the whole set. Scaling in hides shake at the edges of frame, and the visitor never sees a static composition long enough to judge it. DJI 0781, the bird's eye along the coast, suits this position, slowed to roughly 0.6x per requirement L6. One risk remains. A 2.18x scale on 1080p footage shows compression artefacts. If her source clips are 4K the 2.18 ceiling holds. If they are 1080p, cap at 1.5 until the summer reshoot.

---

### T2. The exclusive-itineraries slider, covering Belle's D2, D5 and O2

Build difficulty is easy.

#### How it works

Slick Carousel runs on `#our-exclusive-journeys`. The configuration is verbatim from `app.js`:

```js
autoplay: true, autoplaySpeed: 3000, dots: false, arrows: false,
slidesToShow: 4, slidesToScroll: 1, focusOnSelect: true,
swipeToSlide: true, infinite: true,
responsive: [ {breakpoint: 601,  settings:{slidesToShow:2, slidesToScroll:1}},
              {breakpoint: 800,  settings:{slidesToShow:2, slidesToScroll:1}},
              {breakpoint: 1200, settings:{slidesToShow:3, slidesToScroll:1}} ]
```

On `beforeChange` a progress indicator moves along a track rather than growing:

```js
$(".progress-bar2").css({ left: ((nextSlide / slick.slideCount) * 100) + "%" });
```

That is the scroll-progress rule Belle asked for at O2. It is a thin element whose `left` is set to the slide fraction. A second variant exists in the same file for a vertical rule, setting `height` to `(1 / slideCount) * 100 + "%"`.

#### What triggers it

Autoplay every 3000ms, plus swipe, plus a click on any visible tile because `focusOnSelect` is true.

#### What moves and how far

The track translates by exactly one tile width per step. Slick's default transition of 300ms with `ease` applies, since no `speed` value was set.

#### How to rebuild it

A CSS scroll-snap track beats a carousel library here. It needs no dependency, gives native momentum on touch, and the progress rule falls straight out of `scrollLeft / (scrollWidth - clientWidth)`. Show four tiles at desktop, two at tablet, and 1.2 at mobile so the next tile peeks and the visitor understands to swipe.

#### Mobile behaviour

Show 1.2 tiles and snap on each. Switch the 3000ms autoplay off entirely on touch devices, where it fights the finger.

#### Reduced-motion fallback

Disable autoplay, set the track transition to 0ms, keep the arrows and the progress rule.

#### Content fields each instance needs

Per slide, `image` or `video`, `media_type`, `eyebrow`, `title`, `subtitle`, `link`. Per slider, `heading`, `intro`, `slides_desktop`, `autoplay_ms`.

#### How this applies to La maréa

This is the build for D2 and D3, the ten named experiences. D5 requires both an image variant and a video variant, so the slide template takes a `media_type` field and renders either `<video muted playsinline loop>` or `<img>` from one component. D6, the self-led activities slider, is a second instance of the same component with different content.

#### Can Belle's drone footage carry it

Yes, with one caveat. In a four-across slider each tile is roughly 320px wide on desktop, so weaker footage reads as texture rather than as a shot to be judged. Video tiles carry more risk than image tiles, because four autoplaying videos on one screen is a bandwidth and battery problem. The recommendation is image tiles by default, with video playing only on the current or hovered tile.

---

### T3. Best of Australia, elements sliding in from the right, covering Belle's E3, L2, O1 and O6

Build difficulty is hard. This is the signature interaction of the whole build.

#### How it works

The code is verbatim from `app.js`:

```js
var title_width = 30;
if ($("body").width() >= 768) { title_width = 60; }

var controller = new ScrollMagic.Controller();

var wipeAnimation = new TimelineMax()
  .fromTo(panel0, 0.5, {opacity:1}, {opacity:2})
  .fromTo(panel0, 1,   {x: panel0.width() - title_width*3}, {x: 0,             ease: Linear.easeNone})
  .fromTo(panel0, 0.5, {opacity:2}, {opacity:1})
  .fromTo(panel1, 1,   {x: panel1.width() - title_width*2}, {x: title_width,   ease: Linear.easeNone})
  .fromTo(panel1, 0.5, {opacity:1}, {opacity:2})
  .fromTo(panel2, 1,   {x: panel2.width() - title_width},   {x: title_width*2, ease: Linear.easeNone})
  .fromTo(panel2, 0.5, {opacity:1}, {opacity:2});

new ScrollMagic.Scene({ triggerElement: ".wipe-horizontal-animation",
                        triggerHook: "onLeave",
                        duration: "300%" })
  .setPin(".wipe-horizontal-animation")
  .setTween(wipeAnimation)
  .addTo(controller);
```

#### DOM structure, measured live at a 1440px viewport

```
section.unique-australian-experiences.wipe-horizontal-animation   1433 x 812, one full viewport
  └ .panel  (three of them)  each position:absolute, left:0, top:0, 1433 x 812
       ├ .spine      rotated vertical title, 60px wide, at the panel's left edge
       └ .content    eyebrow, italic serif heading, 40 word body, arrow link, full-bleed image right
```

All three panels are absolutely stacked at `left:0; top:0`. They are separated purely by their `x` transform. Panel backgrounds step lighter through `#3E2A2E`, `#6E5F62` and `#9E9496`.

#### What triggers it

The section pins when its top reaches the top of the viewport, which is what `triggerHook: "onLeave"` means, and stays pinned for `duration: "300%"`, three viewport heights of scroll. At an 812px viewport that consumes 2,436px of scroll.

#### What moves and how far

Each panel starts fully off to the right at `x = panelWidth - (title_width * n)` and travels left to rest at `x = title_width * (3 - n)`. On a 1433px panel with `title_width` at 60:

| Panel | Start x | End x | Distance travelled |
|---|---|---|---|
| 0, Best of Australia | 1253px | 0px | 1253px |
| 1, Enriching Encounters | 1313px | 60px | 1253px |
| 2, Five-Star Luxury | 1373px | 120px | 1253px |

Each panel rests 60px further right than the one before it, which leaves a stack of rotated vertical title spines visible down the right edge. That visible stack is the whole trick. The visitor can see two panels still to come, so the pin never feels like a trap.

#### Timing and easing

The timeline runs 5 units long, mapped across the 300 per cent scroll duration, so the ratio of scroll to movement stays fixed. Easing on every horizontal move is `Linear.easeNone`, deliberately, because scroll position supplies the feel. The `opacity: 1` to `opacity: 2` tweens are not real opacity changes, since any value above 1 clamps to 1 in the browser. They are being used as timeline spacers that hold each panel still for half a unit before the next one moves. Replicate the pause, not the opacity trick.

#### Where the vertical expand comes in, which is Belle's O6

Belle's O6 is the horizontal slide combined with a vertical expand. The vertical expand is a separate mechanic on the same site, living in `.common-left-content-right-image-layout`. Its handler is verbatim:

```js
detail.style.height = "auto";
height = detail.getBoundingClientRect().height + 20;
detail.style.height = 0;
detail.style.transition = '0.6s';
detail.getBoundingClientRect();        // forced reflow so the transition takes effect
detail.style.height = height + 'px';
```

It measures at auto, snaps back to zero, forces a reflow, then animates to the measured pixel height over 600ms. That is a correct and still-current way to animate an unknown height. The composite interaction Belle reacted to is a panel that arrives horizontally, whose detail block then opens vertically beneath the heading.

#### How to rebuild it for La maréa

For the 8 hour retreat covering E1 to E4, build four pinned panels on the arrive, move, nourish, restore arc from C4.

1. Pin the section for `400%`, one viewport height per panel.
2. Each panel is a full-viewport absolute layer with a rotated spine on its left edge carrying the panel name.
3. Panel n starts at `x = 100%` and ends at `x = spineWidth * (total - 1 - n)`. Use percentages rather than measured pixels so O9 and O11 hold at every viewport width.
4. On the current panel, expand the detail block vertically from 0 to its measured height over 600ms with `cubic-bezier(.22, 1, .36, 1)`, starting 150ms after the horizontal move settles. Use `interpolate-size: allow-keywords` with `height: 0` to `height: auto` where supported, and the measure-and-set fallback above where not.
5. Cross-fade the outgoing panel's content opacity from 1 to 0 over the last 20 per cent of its move, which satisfies O5.

#### Mobile behaviour

Do not pin on mobile. Belle's O11 requires continuous reflow, and a pinned horizontal scroll-jack on a phone is the worst pattern in this entire reference set. It eats the back gesture, breaks the address bar collapse, and traps the finger. Below roughly 900px, unpin and render the same four panels as a vertical stack, each entering with a 40px upward translate and an opacity fade on IntersectionObserver, with the detail block expanded by default. Same content, same order, no scroll-jack. The Tailor halves `title_width` to 30 on mobile but keeps the pin, and that is the specific part not to copy.

#### Reduced-motion fallback

No pin, no horizontal travel. Render the four panels as a static vertical stack with every detail block visible. The section must read correctly with all transforms removed.

#### Content fields each instance needs

Per panel, `spine_label` at 1 to 3 words since it is the rotated title, `eyebrow`, `heading` with an `emphasis` span, `body` at 35 to 50 words, `detail_blocks[]` each with a `title` and `body` since that is the vertically expanding part, `media`, `cta_label`, `cta_link`, and `panel_bg` set to a lightness step of the sand or sage token.

#### Can Belle's drone footage carry it

This is where the footage matters most and where the answer is a qualified no. Each panel shows one piece of media at full viewport height for several seconds of scroll, unmoving, while the visitor reads. That is the longest and most scrutinised look any asset gets on the site, and it is exactly the condition under which amateur drone footage fails, through visible horizon drift, exposure shifts and an unplanned subject wandering into frame. The recommendation for the prototype is still photography here, using the Beresford Estate and Naiko professional stills, with video reserved for T1 where the zoom masks motion problems. Build the media field to accept video from day one and swap after the summer reshoot noted at M6. Say this to Belle plainly, because it is a sequencing decision rather than a limitation of the build.

---

### T4. Map of Australia with locations stepped by arrows, covering Belle's F9

Build difficulty is moderate.

#### How it works

The section is `.explore-map`, structured as measured live:

```
section.explore-map
  ├ .background + .mask          full-bleed image behind, darkened
  └ .box
      ├ .left                    inline <svg> map of Australia, one <path> per state,
      │                          plus .map-mobile-menu > .ul > .items, one per region,
      │                          the current one carrying class "active"
      └ .right                   eyebrow, region title, 45 word description,
                                 .common-arrow-buttonV4 arrows, and a Slick slider
                                 #map-img-slide holding that region's images
```

The map is a real inline SVG with hit areas per state. It is not an image map and not an embedded Google map. 85 `<img>` elements sit inside the section, holding the per-region photography.

The Slick configuration for the image slider inside it is verbatim:

```js
$("#map-img-slide").slick({ autoplay: true, autoplaySpeed: 1000000, dots: false,
  arrows: false, slidesToShow: 1, slidesToScroll: 1, infinite: true, adaptiveHeight: true });
$(".free-arrow .arrow-left").click(()  => $('#map-img-slide').slick('slickPrev'));
$(".free-arrow .arrow-right").click(() => $('#map-img-slide').slick('slickNext'));
```

An `autoplaySpeed` of 1000000 is autoplay switched off by making the interval sixteen minutes (a hack, not a setting, and worth knowing before anyone copies the config wholesale). The arrows are wired manually with an `unbind` first, so the handler survives the slider being destroyed and rebuilt when a new region is chosen, which happens via `slick('unslick')` and a re-init. On mobile the SVG is replaced by `.map-mobile-menu`, a plain list of region names.

#### What triggers it

A click or tap on an SVG state path, on a mobile menu item, or on the left and right arrows.

#### What moves and how far

The current SVG path changes fill. The right pane's text cross-fades. The image slider steps one slide over 300ms.

#### Timing and easing

Not detected as an explicit value. Slick's 300ms `ease` default applies to the slider. The map fill change is a CSS `fill` transition whose duration was not detected.

#### How to rebuild it for La maréa

Belle's F9 asks for South Australia rather than Australia, with the four partner venues on it, which is far simpler than The Tailor's seven regions. Draw the Fleurieu Peninsula coastline as a single inline SVG path with four markers. Clicking a marker or an arrow swaps the right pane to that venue, showing its name, a coast or vineyard tag, the sleeps count, one image and a link to the venue page. With only four venues, arrows plus markers beat a full region system.

#### Mobile behaviour

Keep the SVG, it is small. Below 700px, stack the map above and the detail beneath and keep the arrows. Do not fall back to a plain list. The map is the point, because it shows an interstate visitor where the Fleurieu sits, which is requirement C6.

#### Reduced-motion fallback

Instant swaps with no cross-fade. Arrows and markers continue to work.

#### Content fields each instance needs

Per location, `name`, `region_tag` set to coast or vineyard, `sleeps`, `marker_x` and `marker_y` as percentages of the SVG viewBox, `images[]`, `short_description` at 30 to 45 words, and `venue_page_link`.

#### Can Belle's drone footage carry it

Yes. Each location needs one strong still rather than video, and Belle already has professional Beresford Estate photography plus the Naiko material. This section carries low risk.

---

### T5. Testimonials with an image and wording beneath, covering Belle's I5, I6 and I7

Build difficulty is easy.

#### How it works

The section is `.common-testimonials-lists.one-line.common-bg-gray`, a Slick slider running one line of cards. Each card places an image above and the quote beneath, with attribution given as a short descriptor rather than a name. The four live examples are "Couple from New Zealand", "Family from United States", "Family from Taiwan" and "Couple from Australia". There are no star ratings, no company logos and no headshots.

The heading follows the house pattern, with "what our clients say" as the uppercase eyebrow and "Our latest _client Testimonials_" as the italic-emphasised serif heading.

#### What triggers it

Slick autoplay plus swipe. The exact interval for this instance was not detected.

#### What moves and how far

The track translates one card width over 300ms.

#### How to rebuild it for La maréa

Belle has almost twenty Google reviews per I6 and wants private and corporate group testimonials weighted first per I7. Copy the descriptor-not-name pattern, which reads more discreet and solves her privacy problem at the same time. Something like "Corporate group, Adelaide" or "Private group of 12, Beresford Estate". Pair each with a photo from that same retreat, which is what makes it credible for a new business per I8.

#### Mobile behaviour

One card at full width with swipe. Cap the quote at roughly 45 words with the remainder behind a read-more, because a 90 word quote on a phone is a wall of text.

#### Reduced-motion fallback

No autoplay, arrows only.

#### Content fields each instance needs

`quote` at 25 to 60 words, `attribution` as a descriptor rather than a name, `group_type` set to private, corporate or retreat, `venue`, `image`, `date`.

#### Can Belle's drone footage carry it

Yes, and this is the best home for the iPhone-quality material noted at M4, including the Dropbox content from Georgia Evans. Candid, slightly imperfect images read as real here, where polished stock would read as fake.

---

### T6. Meet the team, covering Belle's I1, I2, I3 and I4

Build difficulty is easy.

#### How it works

`#our-team-slider` runs Slick with this verbatim configuration:

```js
autoplay: true, autoplaySpeed: 10000, dots: false, arrows: false,
slidesToShow: 1, slidesToScroll: 1, focusOnSelect: true,
swipeToSlide: true, infinite: true, responsive: []
```

One person shows at a time for ten seconds, with arrows wired externally to `.our-team .arrow-left` and `.arrow-right`. Eight people appear, name and title only, with no bios on the home page. The `responsive` array is present but every breakpoint inside it is commented out, so the slider stays one-up at every width.

#### Belle's explicit instruction not to copy this

Requirement I4 says not to copy The Tailor's team layout. Her stated pattern is SHA Wellness's scientific advisory board, which is a photo, name, certifications, then information, stepped by arrow, per I3, split into wellness practitioners and food and hospitality as two separate groups per I1.

#### How to rebuild it for La maréa

Build two labelled groups, each an arrow-stepped carousel. The card face carries a portrait, name, a one-line role and certifications as a short comma list. Clicking expands the bio in place using the T3 vertical expand mechanic, which also satisfies O7, a click-to-expand tile that expands within a gallery without navigating away.

#### Mobile behaviour

One card, swipe to move, bio expanded inline on tap.

#### Reduced-motion fallback

No autoplay and no expand animation. The bio shows or hides instantly.

#### Content fields each instance needs

`portrait`, `name`, `role`, `certifications[]`, `bio` at 60 to 120 words, `group` set to wellness or food and hospitality, and `order`.

#### Can Belle's drone footage carry it

Not applicable, this section needs portraits rather than drone footage. Flag to Belle that consistent portraits of every practitioner against the same background is the cheapest credibility upgrade available on the site, and she does not have them yet. It is a half-day shoot.

---

### T7. About page accordions, covering Belle's L3 and section G

Build difficulty is easy.

#### How it works

Two variants exist in the same theme.

The first is the measured height transition used in `.common-left-content-right-image-layout`, verbatim:

```js
if ($(this).hasClass("active")) {
    $(this).removeClass("active");
    detail.style.height = 0;
} else {
    $(this).addClass("active");
    detail.style.height = "auto";
    height = detail.getBoundingClientRect().height + 20;
    detail.style.height = 0;
    detail.style.transition = '0.6s';
    detail.getBoundingClientRect();
    detail.style.height = height + 'px';
}
```

It runs for 600ms with no easing specified, so the CSS `ease` default applies. The `+ 20` bakes bottom breathing room into the measurement.

The second is jQuery `slideUp()` and `slideDown()` at their 400ms default, used in `.common-lists-slideup-down`, `.common-lists-weather` and `.common-list-download`.

The FAQ block `.ttq` uses its own structure of `.ttq-item > .ttq-q > .ttq-qbtn` with a `.ttq-mark` indicator and a `.ttq-a` panel. The mark renders as a plus sign.

#### Belle's variation on it

Requirement L3, verbatim, is "I probably wouldn't have a plus sign, but maybe a small minimalistic arrow". So use a chevron rotating 180 degrees on open rather than a plus becoming a minus.

#### How to rebuild it for La maréa

Build one accordion component and use it for the awards equivalent, the FAQ, and the philosophy and science detail in section G.

```html
<div class="acc">
  <button class="acc-q" aria-expanded="false" aria-controls="p1">
    <span>Heading</span><svg class="acc-chev" aria-hidden="true">…</svg>
  </button>
  <div class="acc-p" id="p1" role="region" hidden>…</div>
</div>
```

Animate `height` from 0 to auto using `interpolate-size: allow-keywords` over 600ms with `cubic-bezier(.22, 1, .36, 1)`, keeping the measure-and-set fallback for older browsers. Rotate the chevron 180 degrees over 300ms on the same trigger. The `aria-expanded` attribute is mandatory, since The Tailor's implementation carries no ARIA at all.

#### Mobile behaviour

Identical. This is the one pattern needing no mobile variant. Keep the tap target at a minimum of 44px tall.

#### Reduced-motion fallback

Toggle the `hidden` attribute with no height transition, and flip the chevron instantly.

#### Content fields each instance needs

`question` or `heading`, `answer` as rich text, `group`, `order`, and a `default_open` boolean.

---

### T8. Stories page with filter tabs, covering Belle's J1, J3, J4, L5 and O14

Build difficulty is moderate.

#### How it works

The page is `/stories/`, structured as:

```
section.common-blog-lists
  ├ .common-header                    eyebrow, "THE TAILOR TRAVEL STORIES"
  ├ .common-title-44px                the serif heading
  ├ .top-menu.blog-travel-stories-filter > .ul > .li   the tabs, current one has class "active"
  └ .ul.blogs-travel-stories-wrapper > .li             the cards
        └ .shelf > .img  |  .text2 > .subtitle, .date, .mark, .mask
```

The tab labels are verbatim ALL, HAVE YOU EVER, TIPS AND TRICKS, TOP PICKS and TRAVEL GUIDES. Belle recalled the third as "tips and trips", and the live label is "tips and tricks".

Filtering is server-side Ajax rather than a client-side hide and show. `app.js` holds `loadBlogs(cate, action)` with `travel_stories_filter_page = 2` seeded, because page one is rendered by PHP and later pages are appended. The tabs therefore re-query the server and the list paginates rather than filtering a fixed DOM. A `waterFall("item", 20)` call exists in the same file for a masonry layout with 20px gutters, though `.lists-waterFall` is not present on this page.

Card anatomy is an image with a `.mask` overlay, a `.mark` category badge, a `.subtitle` title and a `.date`. That is already exactly Belle's O14, a full-bleed image with the title overlaid.

#### What triggers it

Clicking a tab fires an Ajax fetch and the list is replaced. Scrolling to the bottom appends the next page.

#### What moves and how far

Not detected. No transition is applied to the tab change or to the card insert in the code that was read.

#### How to rebuild it for La maréa

Keep the same shape with modern plumbing. Build the tabs as real `<button role="tab">` elements inside a `role="tablist"`, filtering by category. Because Belle's post count will be small at launch, filter client-side and use the View Transitions API for the reorder, moving to server-side pagination only past roughly 40 posts. Her categories are hers to name rather than The Tailor's, and L5 says to build the tab system before the content exists so it never needs retrofitting.

The card is a full-bleed image with the category badge top left, the title overlaid bottom left in the display serif, and the date in the small sans. Use a 3:4 portrait aspect ratio, which is more editorial than 16:9 and handles her vertical phone photography.

#### Mobile behaviour

Tabs become a horizontally scrolling row with `scroll-snap-type: x proximity` and an edge fade. Never a dropdown. Cards go to one column.

#### Reduced-motion fallback

No view transition, filter instantly.

#### Content fields each instance needs

Per post, `hero_image`, `title`, `category`, `date`, `excerpt`, `body`, `slug` and `read_time`. The category list must be editable, which is what makes J2 work.

#### Can Belle's drone footage carry it

Yes. Cards are small and image-led, and Belle is producing this content herself over time per J2.

---

### T9. Question circles leading to contact, covering the commercial target and Belle's E4

Build difficulty is easy.

#### How it works

The section is `.customise-your-journey`, present on `/stories/` and other inner pages, over a background of `rgb(248, 247, 244)`.

It is a two-column layout. The left column holds an eyebrow reading "CONTACT US", a serif heading with its first word italicised, body copy reading "Take delivery of your tailor-made holiday! Just answer a few simple questions.", and a circled-arrow link labelled "CONTACT US".

The right column holds three `.circle1.circle` elements, each measured at 248 by 248px with `margin-left: -22.78px` so they overlap into a Venn-like row. Each carries a question in italic serif and an answer hint in uppercase letter-spaced sans:

| Circle | Question | Hint |
|---|---|---|
| 1 | Who is travelling? | FIRST-TIME TRAVELLER, FAMILY, COUPLE, GROUP, SOLO… |
| 2 | Why do you want to travel? | ADVENTURE, RELAXATION, EDUCATION, CELEBRATION… |
| 3 | How can we help? | YOUR PERSONAL TRAVEL DESIGNER WILL ORGANISE THE REST |

The ring is not a CSS border. Computed `border-width` reads `0px` and `border-radius` reads `0px`, so the outline is drawn as a background image or an SVG sitting behind the text. Which of the two was not detected.

#### What triggers it

Nothing. There is no interaction. Nothing expands and nothing is clickable except the single "CONTACT US" link. The circles are a picture of a conversation rather than a form.

#### Why this matters for La maréa

Belle's primary conversion is a booked discovery call, per the commercial target in the shared brief, and her structural direction asks for "a smart enquiry funnel that asks relevant questions step by step rather than one giant form upfront". The Tailor's circles are the promise of that funnel sitting one click before it. Build both, the circles as reassurance and the stepped form behind the link.

#### How to rebuild it

Use three circles sized with `clamp()` rather than a fixed 248px so O9 and O11 hold, for example `width: clamp(180px, 17vw, 248px)`. Overlap by roughly 9 per cent of the diameter. Draw the ring with `border: 1px solid` and `border-radius: 50%` on a real element, which is simpler than The Tailor's background-image approach and scales cleanly. The three questions should be written by Belle herself. One candidate set from her own material is who the group is, what she wants the day to do for them, and when and where.

Add the hover state Belle was refused at O4, where the ring darkens and the circle lifts 4px over 200ms.

#### Mobile behaviour

Below roughly 760px, stack the three circles vertically with a smaller overlap, or drop the overlap and space them 24px apart. Do not shrink three overlapping 248px circles into a 390px viewport, because the text becomes unreadable.

#### Reduced-motion fallback

Remove the hover lift and keep the ring darkening.

#### Content fields each instance needs

Per circle, `question` and `hint_text`. Per section, `eyebrow`, `heading` with an `emphasis` span, `body`, `cta_label` and `cta_link`.

---

### T10. The side-by-side section with a fixed text pane and moving items, covering Belle's O1, O5, D1 and D4

This one item carries two references, because COMO Shambhala and Aman build the same structure two different ways and Belle named both. COMO supplies the transition from one item to the next. Aman supplies the fixed-pane-left, carousel-right proportion. Together they are requirement O1, the thing Belle lost in her meeting with the other agency.

Build difficulty is moderate for both variants.

#### The COMO variant, how it works

The section is `.experiences-carousel.acm-block.fade-on-scroll.slideshow`. Measured live at a 1434px wrapper width:

```
section.experiences-carousel.acm-block.fade-on-scroll.slideshow
  ├ .experiences-header.center-column
  │    ├ .right-side > .section-title        "WELLNESS EXPERIENCES"
  │    └ .left-side  > .section-descr        the intro paragraph
  ├ .experiences-wrapper                      display: flex
  │    └ .experiences-item  (four of them, one carrying class "active")
  │         ├ .image-wrapper > .image-container > .object-fit
  │         ├ .experience-counter             "1", "2", "3", "4"
  │         └ .content-wrapper > .title, .copy
  ├ .counter-info                             reads as 1, a long dash, then 4
  └ .content-clone-container.slideshow-wrapper > .experiences-slide   the cloned copy beneath
```

The four items are Multi-Night Experiences, Movement, Treatments and COMO Shambhala Kitchen. Belle named three of those four verbatim.

#### What moves and how far

This is a flex-basis accordion, which is the cleanest version of this effect anywhere in the reference set. Measured computed styles:

| State | `flex` | Measured width in a 1434px wrapper |
|---|---|---|
| Current item | `3 1 0%` | 717px |
| Each other item | `1 1 0%` | 239px |

Three parts to one, across six parts total, so the current item takes exactly half the row and the other three split the rest. Nothing translates. The flex ratio alone does all the work, which means the layout stays correct at any width with no measurement in JavaScript.

#### Timing and easing

Read directly from the computed style, `transition: flex 0.8s ease-out 0.2s`. Eight hundred milliseconds with `ease-out` and a 200ms delay before it starts. The delay is what makes it feel unhurried rather than twitchy, and it is the single value most worth copying to La maréa.

#### What triggers it

Not detected with certainty. The `.fade-on-scroll` class on the section and the `active` class on one item point to an IntersectionObserver plus either hover or an auto-advance timer. The site runs Swiper and jQuery, with no GSAP, Lenis or Locomotive Scroll detected.

#### The Aman variant, how it works

The section is `.paragraph-id-134101.layout-text-left.paragraph--type--text-and-carousel-of-cards`, headed "Seasonal Experiences". Measured live at a 1440px section width:

```
section.paragraph--type--text-and-carousel-of-cards.layout-text-left
  └ .layout.aman-one-two-thirds.container.gutter
      ├ .layout--1-2-from-desktop__first    442px   fixed text pane
      │    └ .hgroup.hgroup--limited > .heading-h, .hgroup__intro
      └ .layout--1-2-from-desktop__second   884px   the carousel
           └ .carousel.slider-3up.slider-3up--right
                └ .slick-list.draggable > .slick-track
                     └ .card.slider-3up__slide.card--centered   326 x 563, image 326 x 326
                          ├ .aman-responsive-image--square
                          ├ .subtitle          uppercase property name
                          ├ .heading-h         the experience title
                          └ .cta__link         "Discover more"
```

Six cards sit in the track, three visible at a time, the images square. The split is 442 against 884 inside 1440, which is one third against two thirds rather than a grid-snapped half. That is precisely Belle's O8, art-directed column widths rather than a 50/50 that she can see and rejects.

Aman runs Slick Carousel and jQuery. Not detected: GSAP, ScrollTrigger, Lenis, Locomotive Scroll, Swiper, Embla, Barba, Framer Motion, React, Next.js. The platform is Drupal, visible in the `paragraph--type--` and `views-exposed-form` class names.

#### How to rebuild it for La maréa

Take the Aman proportion and the COMO transition, which makes a better section than either site has on its own.

1. Split the section one third against two thirds using `grid-template-columns: minmax(0, 1fr) minmax(0, 2fr)` with a fluid gutter, satisfying O8 and O9.
2. The left pane holds the eyebrow, the heading, a 30 to 45 word intro, a counter and the two arrows. It stays put while the right side moves, which is O1.
3. The right side holds the ten named experiences from D3 as a flex row. The current item gets `flex: 3 1 0%` and the rest `flex: 1 1 0%`, transitioning `flex 0.8s ease-out 0.2s`, exactly COMO's values.
4. The current item reveals its title and its short explanation beneath the image, which is D4. Inactive items show a rotated title only, the same spine idea as T3, so the section reads as one family with the 8 hour retreat.
5. Cross-fade the outgoing item's copy over 300ms as the flex transition runs, satisfying O5.
6. Allow per-item art direction on the tile, which is O3. The reason Belle was refused this on Wix is that a repeater template forces one structure. A component taking an optional `layout_variant` field removes the limit entirely.

Ten items at `flex: 1` each is too many for one row, so run six at a time with arrows stepping the set, or widen the current item to `flex: 4 1 0%` against `1 1 0%` for the others.

#### Mobile behaviour

A flex accordion does not survive a 390px viewport, since ten items at 39px each is unreadable. Below roughly 900px, convert to the T2 scroll-snap track at 1.2 tiles visible, with the title and explanation always shown beneath the current tile. The left pane moves above the track and the counter and arrows move below it. Continuous reflow, no separate mobile build, which is O11.

#### Reduced-motion fallback

Remove the flex transition so the expansion is instant, and remove the cross-fade. No auto-advance under any circumstances.

#### Content fields each instance needs

Per item, `image`, an optional `video`, `media_type`, `title`, `explanation` at 20 to 40 words, `spine_label`, an optional `layout_variant`, an optional `link`, and `order`. Per section, `eyebrow`, `heading`, `intro`, `advance_ms` and a `total_visible` count.

#### Can Belle's drone footage carry it

Yes for the current item, which is displayed at roughly half the row width and around 600px tall, so it needs a strong asset. Not a problem for the nine inactive items, which are narrow vertical slivers where the image reads as colour and texture. This is the ideal home for the branding pillar videos noted at M3, covering nutrition and food, movement and nature immersion, since those were shot deliberately rather than experimentally.

---

## 3. COMO Shambhala, comoshambhala.com

### 3.1 Detected animation stack

| Layer | Library | Note |
|---|---|---|
| Carousels | Swiper | `window.Swiper` present, `.swiper-slide` and `.swiper-button-prev/next` throughout |
| DOM | jQuery | present |
| Maps | Leaflet 1.9.4 | `unpkg.com/leaflet@1.9.4` |
| Social wall | Curator.io | `cdn.curator.io/5.0/curator.embed.js` |
| Tag management | Adobe DTM | `assets.adobedtm.com` |
| Platform | a hospitality CMS serving from `/skins/skin-prodcomoshambhala/` | inferred from the asset path |
| Scroll reveals | CSS classes only, `fade-on-scroll` on most sections | no library detected |

Not detected: GSAP, ScrollTrigger, Lenis, Locomotive Scroll, Embla, Barba, Framer Motion, AOS, React, Next.js.

The interesting finding is that COMO's best effect, the one Belle singled out, runs on a CSS flex transition and nothing else. No animation library is involved at all.

### 3.2 Section inventory in scroll order

| # | Class | What it is |
|---|---|---|
| 1 | hero | "WELCOME TO COMO SHAMBHALA", "WELLNESS BEGINS WITHIN" |
| 2 | `.exquisite-destinations.fade-on-scroll` | A destination selector with a custom dropdown and a Swiper of location tiles, each with `.tile-info`, `.location` and two tertiary buttons |
| 3 | `.acm-block.landscape-hero-image-carousel.fade-on-scroll` | Full-width image carousel, "WATCH OUR FILM" |
| 4 | `.experiences-carousel.acm-block.fade-on-scroll.slideshow` | Wellness experiences. The flex accordion specified at T10 |
| 5 | `.acm-block.stories-section` plus `.stories-slideshow` | Wellness journal |
| 6 | `.right-image-with-text.acm-block.fade-on-scroll` | Text and image pair |
| 7 | `.booking-widget` | Enquiry and booking |

### 3.3 The journal section with arrows, covering Belle's J5

The section is `.acm-block.stories-section` containing `.stories-slideshow`. Structure:

```
.stories-slideshow
  ├ .slideshow-controls > .swiper-button.swiper-button-prev / .swiper-button-next   labelled Previous and Next
  └ .story-slide.swiper-slide
       └ .slide-inner-wrap
            ├ .thumb > .object-fit
            └ .slide-content > .cat-name, the title, .button-tertiary.iron   "READ MORE"
```

Sixteen slides are present. Each measured 1274px wide, which is nearly the full content width, and that is exactly what Belle objected to when she said she likes the journal section but does not love its size. Her instinct is right. A near-full-width slide means one story occupies a whole screen, so the reader never sees that a library sits behind it.

The category system is visible in the `.cat-name` values, which are MOVEMENT, HOLISTIC WELLNESS, NUTRITION and SKINCARE. Post titles run 3 to 5 words in the same uppercase treatment, such as "RESTORING THE PLUMB LINE", "THE WISDOM OF AYURVEDA", "THE REIMAGINED CLEANSE PROGRAMME" and "THE ARCHITECTURE OF ALIGNMENT".

For La maréa, take the category system and the arrow control and drop the slide width. Three cards visible at desktop per T8, in the editorial full-bleed card form of O14. Belle's own categories become the equivalent of MOVEMENT and NUTRITION here.

### 3.4 Typography with real computed values

| Role | Family | Size | Weight | Letter spacing | Line height | Case |
|---|---|---|---|---|---|---|
| Hero h1 | Gill Sans Nova | 96px | 200 | 2px | 80px | uppercase |
| Section title | Gill Sans Nova | 50px | 300 | 2px | 58px | uppercase |
| Item title | Gill Sans Nova | 40px | 300 | 2px | 39px | uppercase |
| Body copy | Gill Sans Nova | 16px | 600 | normal | 30px | sentence |
| Category label | Gill Sans Nova | 14px | 600 | 2.1px | 20px | uppercase |
| Tertiary button | Gill Sans Nova | 14px | 600 | 2.4px | 20px | uppercase |

One family covers everything, differentiated by weight and tracking alone. The display weights are extremely light at 200 and 300, while the small text is 600. That inversion is the whole typographic idea, enormous thin headings set against small heavy labels.

Two things here do not transfer to La maréa. Every heading is uppercase, and Belle's own workspace rules ban all-caps headings in visual output, so use sentence case at the same weights. And the hero line height of 80px against a 96px size is negative leading, which is beautiful at 96px and unusable below about 40px, so clamp it rather than carrying the ratio down.

### 3.5 Colour with real values

| Token | Value | Use |
|---|---|---|
| Stories section background | `rgb(249, 248, 246)`, `#F9F8F6` | The warm off-white surface |
| Ink | `rgb(0, 0, 0)` | Pure black for headings and body |
| Muted label | `rgb(118, 118, 118)`, `#767676` | Category names |

COMO uses pure black, The Tailor and Aman do not. For a soft sand and sage palette, follow The Tailor and Aman and use a warm near-black rather than `#000`.

### 3.6 The food philosophy section, covering Belle's section H

The "eat well, be well" framing Belle remembers is not on the home page. It lives in COMO's cuisine and nutrition pages, and the group's own published description is that the COMO Shambhala Kitchen philosophy has been about balancing nutrition with exceptional taste, developed over 25 years by a network of nutritionists, with cooking techniques that preserve nutrient bioavailability and dishes low in sugar and salt and free of artificial additives. Sources, [COMO Shambhala Kitchen Explained](https://www.comohotels.com/stories/como-shambhala-kitchen-explained) and [COMO Shambhala Nutrition](https://www.comoshambhala.com/nutrition).

The pattern worth taking is the structure rather than the words. A named philosophy, a stated number of years behind it, a short list of concrete rules about how the food is made, and the people who developed it. Belle has a chef-led Mediterranean dining offer and a gut health nutrition workshop in D3, plus a nutrition qualification of her own. The same four-part shape would carry her section H without borrowing a syllable of COMO's copy.

### 3.7 Copy patterns

Headings are 2 to 4 words, uppercase, abstract and declarative. "WELLNESS BEGINS WITHIN". "WELLNESS EXPERIENCES". Titles favour the definite article and a noun phrase, as in "THE WISDOM OF AYURVEDA" and "THE SCIENCE OF GOOD SKIN".

Body blocks run 25 to 40 words. Verb choice is restorative and clinical at once, using restore, balance, nourish, support, preserve and cleanse. The reader is addressed as "you" far more than The Tailor addresses them, where the subject is nearly always "we".

---

## 4. Aman, aman.com

### 4.1 Detected animation stack

| Layer | Library | Note |
|---|---|---|
| Platform | Drupal | `paragraph--type--*` and `views-exposed-form` class names |
| Carousels | Slick Carousel | `.slick-list.draggable`, `.slick-track`, `.slick-slide.slick-current.slick-active` |
| DOM | jQuery | present |
| Lazy loading | bLazy | `.b-lazy.b-responsive` on every image |
| Video | Brightcove | `bc-player--` class on the hero video section |
| Analytics | Quantum Metric, RudderStack, StackAdapt, Bing, LINE, Impact | many, and heavy |

Not detected: GSAP, ScrollTrigger, Lenis, Locomotive Scroll, Swiper, Embla, Barba, Framer Motion, AOS, React, Next.js.

Aman and The Tailor arrive at the same carousel library, and neither runs a modern animation stack. Belle's sense that these sites feel expensive is not coming from their technology (which is, in both cases, close to a decade old), it is coming from restraint, proportion and type.

### 4.2 Home page section inventory in scroll order

| # | Class | What it is |
|---|---|---|
| 1 | header, `.aman-booking-bar-section` | Nav and booking bar |
| 2 | `.paragraph--type--video` | Full-bleed Brightcove video, eyebrow "AMANJENA, MOROCCO", serif title, "Discover more" |
| 3 | `.paragraph--type--slider-cards` | Hotels and resorts, "Explore the World of Aman" |
| 4 | `.paragraph--type--text-and-carousel-of-cards.layout-text-left` | Seasonal Experiences, the section Belle named. Specified at T10 |
| 5 | `.paragraph--type--basic` | Seasonal experiences intro repeated as a text block |
| 6 | `.paragraph--type--carousel-o…card-image-style--square` | A second square-card carousel |
| 7 | `.paragraph-id-188026.highlighted.bg-sand-grey` | Aman Residences, on a sand-grey band |
| 8 | `.paragraph--type--slider-cards` | The world of Aman, gift cards, essentials, at sea |
| 9 | newsletter and footer | Registration of interest |

### 4.3 The seasonal experiences section

Specified in full at T10. The six cards observed on 16-09-2026 covered a Japan itinerary, an Amanzoe exhibition, Aman Villas, urban escapes, a Novak Djokovic wellness programme and remote camp and safari stays. Each card carries an uppercase property name as `.subtitle`, a serif title as `.heading-h`, and a "Discover more" link.

### 4.4 Typography with real computed values

Belle's note on this site was that the fonts are "really easy to read and simple". Here is what that resolves to.

| Role | Family | Size | Weight | Letter spacing | Line height | Case |
|---|---|---|---|---|---|---|
| Section heading | Lyon Text Web, a serif | 31.08px | 400 | 0.5px | 45.07px, ratio 1.45 | sentence |
| Section intro | Lyon Display Web | 14px | 400 | 0.8px | 20.3px, ratio 1.45 | sentence |
| Card title | Lyon Text Web | 19.6px | 400 | 0.98px | 28.42px, ratio 1.45 | sentence |
| Card eyebrow | WhitneySSm, a grotesque | 10.11px | 400 | 2px | 14.66px | uppercase |
| Small uppercase label | WhitneySSm | 9.8px | 400 | normal | 14.21px | uppercase |
| Link, "Discover more" | WhitneySSm | 13px | 400 | 0.8px | 18.85px | sentence |

Four observations follow, because this table is the answer to what Belle liked.

Aman's headings are small. A section heading is 31px where The Tailor's is 44px and COMO's is 50px. The restraint she is reading as easy and simple is literally a smaller type size.

Everything is weight 400. There is no light weight and no bold anywhere on the page. The hierarchy is carried by size and by family alone.

Line height is a constant 1.45 across headings, intros and card titles. That single ratio, applied everywhere, is why the page reads as calm.

Letter spacing scales inversely with size, running 0.5px at 31px, 0.98px at 19.6px and 2px at 10px. Small text gets more air and large text gets almost none.

For La maréa this is the most copyable typography in the whole reference set, and it is the cheapest to implement. One serif at 400 for everything editorial, one grotesque at 400 for uppercase labels, a fixed 1.45 line height, and tracking that grows as size shrinks.

### 4.5 Colour with real values

| Token | Value | Use |
|---|---|---|
| Page background | `rgb(243, 238, 231)`, `#F3EEE7` | A warm sand, applied to `<body>` |
| Ink | `rgb(49, 49, 49)`, `#313131` | A soft charcoal for all text, never pure black |
| Highlight band | `.bg-sand-grey` | A darker sand used to separate one section |

This is the most directly useful finding for Belle's brand direction. Aman's whole site sits on `#F3EEE7`, a warm sand, with `#313131` text. Belle asked for soft sand as the dominant background colour with sage green for text and headings. Aman proves the sand background works at scale on a site of this class, and it gives a tested starting value. Her sage would replace the `#313131`, which will need a contrast check, since sage at a normal lightness against sand will not reach 4.5:1 and the text tone may have to be darkened.

### 4.6 Copy patterns

Headings are sentence case, 2 to 5 words, concrete and place-anchored. "Seasonal Experiences", "Aman Residences", "Explore the World of Aman". Never uppercase, which is the visible difference from COMO.

Body blocks run 20 to 35 words, one sentence, and nearly always name a place inside the sentence. One verbatim example, "Impeccable homes for a select few, Aman Residences span more than 20 destinations."

The card structure is fixed and never varies. An uppercase property name, a sentence-case serif title, then "Discover more". Every card on the site follows it. That consistency is part of why the pages feel composed.

Verb choice is exploratory and permissive, using uncover, discover, explore, venture and gather. Aman writes the guest as the subject far more than The Tailor does.

---

## 5. What to take from each site

Three sites offer three separate lessons, and they do not overlap.

The Tailor supplies the motion. Nine of Belle's ten named interactions come from there, and the two mechanics that matter are the pinned horizontal panel wipe at T3 and the measured height expand that pairs with it. That pairing is O6, the signature of the build, and it is the only hard item on the list.

COMO supplies the transition value. One line, `transition: flex 0.8s ease-out 0.2s`, with a 3-to-1 flex ratio. It is the most elegant single effect across all three sites and it needs no JavaScript library at all.

Aman supplies the type and the colour. A serif at 400 held to a 1.45 line height, small headings at 31px, tracking that grows as size shrinks, and `#F3EEE7` sand under `#313131` text. That is Belle's stated brand direction already working on a live site of the class she is aiming at.

One caution is worth carrying into the build. None of these three sites runs a modern animation stack, and all three still feel expensive. Restraint is doing more of the work than technology is. The La maréa build should spend its animation budget on T3 and T10 and leave every other section still.
