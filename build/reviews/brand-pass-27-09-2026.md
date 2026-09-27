# Brand pass, 27-09-2026

Brand agent. Scope: tokens, fonts, logos, icons, favicon and OG image. Screenshots are in `qa/shots/brand-agent/before/` and `qa/shots/brand-agent/after/`, and comparison renders are in `qa/shots/brand/`. The build passes (61 pages).

## What the style guide specifies

The guide is by Ponder Designs and runs to seven pages. Text was read from the PDF itself, so the values below are exact.

### Colour

Page 7 prints these values.

| Name | Pantone | CMYK | RGB | Hex printed |
|---|---|---|---|---|
| Sage | 7771CP | 35 38 86 77 | 67 61 27 | #433D1B |
| Sage primary shade 40% | | | 170 163 139 | #AAA38B |
| Sage secondary shade 80% | | | 99 91 57 | #635B39 |
| Sand | 468CP | 6 13 41 4 | 230 214 164 | #E6D6A4 |
| Sand primary shade 30% | | | 248 243 228 | #F8F3E4 |
| Salt (complementary) | 7527CP | 3 4 14 8 | 233 229 214 | #E9E5D6 |
| Salt primary shade 25% | | | 250 249 245 | #FAF9F5 |

The swatches also show 100, 80, 60, 40 and 20% steps for each colour with no printed hex. A small arch-topped swatch sits under the sage ramp.

### Type

Page 6 names one suggested face, HV Muse Regular. The guide's own captions are set in Geosans Light (with Geosans Light Oblique for the colour names), and the Ponder footer is in Avenir Next. Pillar names under the icons are HV Muse Regular, upright, in sage 40. No italic is shown anywhere in the guide.

### Logos

Pages 3 and 4 show the primary wordmark, the reversed wordmark, the wordmark with the tagline "luxury coastal wellness reimagined", and two submarks (the "lm" monogram and the circular tagline). The logo is sage 40 (#AAA38B) on light grounds and sand (#F7F3E4) when reversed. The clear space rule is the "L" of the logo on all four sides, stated as the absolute minimum, which works out at roughly one logo height. Page 4 shows reversed use on sage 40, on a portrait photo, on a darker sage, on a coastal photo, and a dark sage logo on sand. The guide states no minimum size.

### Icons and imagery

Page 3 shows ten single-weight line drawings: Nutrition, Movement, Sleep and Recovery, Psychological Wellbeing, Nature Immersion, Connection, Balance, Personalisation, Evidence-based Lifestyle Wellness Education and Luxury.

The mood board on page 2 has warm skin and linen, sculptural cream forms, a curved stone house on bare hills, a green cove and women on white sand. Page 5 is a full-bleed aerial of women floating in pale turquoise water, softly grained. The direction is light, warm and sun-bleached, never dark.

## What changed and why

### Colour

All seven printed hex values were already correct in `tokens.css`. The unprinted steps had been sampled from the PDF render, which comes out darker than the printed hex at every printed step (sage 80 renders #5C5331 against a printed #635B39). I lifted the unprinted sand, salt and sage 20 steps by that measured gap so they sit on the same scale as the printed values:

```
sand-80  #ead8ae -> #ebdeb6      salt-60  #eeeade -> #f1eee4
sand-60  #efe0c0 -> #f0e5c7      salt-40  #f3f1e8 -> #f5f4ec
sand-40  #f4ead3 -> #f5efda      sage-20  #cbc6b7 -> #d3cec0
sand-20  #f9f4e7 -> #faf7ec      sage-60  unchanged, #7d7455
```

Sage 60 stays at the darker read because the lifted value (#857C5D) drops to 3.3:1 on sand 60 and under 3:1 on sand 100. The warm sections (`--bg-warm`, `--bg-deep`) are now a shade lighter, which suits Belle's "light and bright". Body text contrast holds: sage 100 on sand 40 is 9.5:1 and sage 80 is 5.9:1.

### Fonts

Belle's HV Muse Regular and Italic are converted to woff2 (28 KB and 30 KB) in `site/public/fonts/`, loaded with `font-display: swap`, and the regular weight is preloaded. `--font-display` is now HV Muse, so every h1 to h3, the hero line, the menu list and the CTA bands use Belle's face. Italiana is no longer loaded.

- HV Muse was tested from 14 to 58px in sage 80 on sand 30 (`qa/shots/brand/type-scale.png`). It looks its best from about 24px up. At 22px and under its hairlines thin out and the counters close, so h4, leads, card titles, quotes and small labels stay in Cormorant Garamond.
- HV Muse Italic is now the one italic flourish. It carries place names inside h1 to h3 and `.display`, for example "the Fleurieu Peninsula" in the home hero. Place names in small text (venue facts, map labels, glance lists) stay in Cormorant italic 500, which holds up at 16px where HV Muse Italic does not.
- The guide sets pillar names upright in HV Muse, so pillar names at heading size use HV Muse Regular through the heading styles. The small names under the icons live in a page builder file, so that change is a request.
- HV Muse is wide with open spacing, so heading tracking moved from 0.01em to -0.005em.
- Body copy stays in Jost. The guide's secondary face is Geosans Light, a thin geometric sans in the Futura family, and Jost is the closest open-licence match. Avenir Next stays as the fallback.

### Logos

The cloud build's SVGs were extracted from the style guide's own vector paths rather than traced by hand. Rendered against Belle's PNGs, they match to three decimal places in proportion and 97 to 98% in pixel overlap for the wordmarks. The circle submark scores 86%, all of it anti-aliasing on hairline letters, and the overlay in `qa/shots/brand/diff-submark-circle.svg.png` shows no drawing difference. The SVGs stay, because they are crisper than any PNG at every size and follow CSS colour. Placement now checks out as follows.

- The header shows the sage 80 wordmark on sand and salt over photos, as in the page 4 examples.
- The menu shows the reversed wordmark on the sage 80 column, now in the guide's sand (#F7F3E4) rather than salt.
- The footer shows the sage 80 wordmark on sand 40 with generous space above.
- The favicon is rebuilt as the lm submark in sand on a sage 80 tile, with a 32px PNG and a 180px apple-touch-icon. The bare hairline mark vanished at 16px.
- The OG image is now Belle's cove photo with the primary wordmark reversed in sand over the sea, the treatment on guide page 4. The previous sand card is kept at `public/brand/og-logo-card.jpg`.
- `public/brand/` now holds 1200px raster logos (primary sage, primary sand, tagline sage), the SVG wordmark and a 512px icon for schema and press.

### Icons

The ten SVG icons also come from the guide's vector paths. Against Belle's sage PNGs every one matches in proportion (within 0.5%) and in drawing, and the overlays show offsets of one or two pixels only. They stay as SVG so colour follows the background and the hairline stays one pixel at every size. Belle's PNGs remain the reference if an icon ever needs checking.

### Hero and header legibility

HV Muse is finer than Italiana, so the soft bottom scrim (`--scrim-soft`) is a little deeper and the header's top gradient over photos went from 0.22 to 0.3. Neither is a vignette.

## Before and after

- On home at 1440, the Italiana hero line on a placeholder is now an HV Muse line with HV Muse Italic "Fleurieu Peninsula" on Belle's photo. The line still sits over white surf and reads weaker than it should, and a request is logged.
- On home at 390, the heading sits on sand below the photo and reads cleanly in HV Muse at 36px.
- On /philosophy, "Our philosophy" is in HV Muse over the cove, and the ten icons are unchanged and faithful.
- On /our-story and /places, the HV Muse titles over photos read well where the frame behind is calm.
- On /enquire, "Who is the day for?" in HV Muse is the clearest improvement and now looks like the brand.
- On /styleguide, "An 8 hour day on the Fleurieu" shows the regular and italic pairing at its best.

## Infographics and highlight covers

The six infographics show the ten icons arranged around the logo, three on sage 40 and three on sand, with and without names and ripple rings. Infographic `04-06` (sand, named, with rings) explains the pillars in one picture and suits `/philosophy`. The placement is written to `build/notes/requests.md` for the content reviewer. Its labels use "Mental, Emotional & Spiritual Wellbeing" and "Heartfelt Hospitality & Luxury", which differ from the guide.

The ten highlight covers each show one icon in sand on a sage 40 square. They are Instagram assets and are not placed on the site, but they confirm sand on sage 40 as Belle's reversed icon treatment.

## Open items for Belle

1. The site now self-hosts HV Muse, and Belle needs to confirm her licence covers web embedding (the font files carry a 2020 copyright notice). If it does not, one line in `tokens.css` switches the site back to Cormorant Garamond.
2. The guide names two pillars "Psychological Wellbeing" and "Luxury", while the infographics say "Mental, Emotional & Spiritual Wellbeing" and "Heartfelt Hospitality & Luxury". Belle should say which names are current.
3. The guide's minimum clear space is one "L" (about one logo height) on every side. The header gives the logo roughly its own height side to side but less above and below once it compacts, and Belle or Ponder should say whether the header is an accepted exception.
4. The arch swatch on page 7 is used as a frame on `/places` and `/enquire`, and Belle should confirm it is a brand shape.
5. If Belle wants the guide's exact secondary face, Geosans Light could replace Jost in one line once its licence is checked.
