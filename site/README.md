# La maréa website

Custom Astro 5 site for La maréa, luxury coastal wellness retreats on the Fleurieu Peninsula. Static output for Cloudflare Pages (plan/10).

## Run it

```
npm install
npm run dev              # http://localhost:4321
npm run build            # static site in dist/
npm run preview          # serve dist/
npm run check:scroll     # zero horizontal overflow check, every page at 11 widths
```

Useful views while Belle's media is still to come:

- Placeholder notes are on by default: every photo or video frame says what belongs there. Hide them to see the site as a visitor will: set `data-media-notes="off"` on `<html>` in `src/layouts/Base.astro` (this also hides every "To come" box and draft marker).
- `?body=serif` switches body copy to the serif, so Belle can compare it with the sans.
- `/styleguide/` and `/styleguide/systems/` show every component (noindex, not linked).

## Adding Belle's photos and video

1. Put the file in `public/media/` (for example `public/media/home-hero.mp4`).
2. Find the slot. Every placeholder shows its asset note, and every slot lives in `src/data/media/slots-*.ts` by id (for example `home-hero`).
3. Set `src` (and `poster` for video, and `srcMobile` for a portrait phone crop). The placeholder is replaced automatically.

Grade every file the same way: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette. Slow drone footage in the edit, not in the player. Compress video before it goes in (plan/10 section 4 has the ffmpeg settings); long-form video belongs on Cloudflare Stream.

Nothing should go to Belle until the hero, the zoom mosaic, the four day panels and at least six experience tiles carry her real stills.

## Editing content

Copy lives in content collections in `src/content/` (venues, experiences, pillars, people, testimonials, journal posts, formats, FAQs, menus) and in `src/data/settings.ts` and `src/data/day.ts`. Every record carries its source and a `status` (draft, published, hidden). The Vineyard Retreat is `hidden` until Belle confirms the partnership. A fifth venue is a new file in `src/content/venues/`.

## Type and colour

Colours are Belle's style guide swatches (`src/styles/tokens.css`). Headings use Italiana as a stand-in for HV Muse, her brand face, until the web licence is confirmed; swap `--font-display` in `tokens.css`. The arch frame is one token, `--arch`; set it to `0` to square every frame.

## Backend (Dom)

`functions/api/enquiry.js` is a documented Cloudflare Pages Function stub for the funnel: Turnstile, Supabase insert, Klaviyo only with consent, never logs health text. Until it is live, the funnel falls back to the thank-you page and the browser logs a 405.

## Where the thinking lives

`../build/` holds the orchestration brief, the transcript-first creative brief, the reference study, the content harvest, the build spec and every review. `../build/notes/` holds builder requests and shared edits.
