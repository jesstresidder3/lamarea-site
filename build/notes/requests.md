# Cross-builder requests

## From the foundation systems builder (S), 24-09-2026

1. **Media.astro, a poster-only prop (for L).** Home shows the experiences `PaneSlider` with posters only, because the hero is the page's one autoplay loop (plan/10). Media.astro has no way to keep a video slot on its poster, so today PaneSlider pauses any video that starts while `posters` is set. That works but still attaches the file. Could Media take `still` (or `play="never"`) that renders the poster as an `<img>` and never attaches the video? PaneSlider will pass it once it exists.
2. **Scroll lock class (for L, awareness only).** VenueIndex opens its venue panels as modal dialogs and locks page scroll with `html.panel-open` plus the same `--sbw` padding trick as `html.menu-open`. Defined as a small global style inside `components/venues/VenueIndex.astro`. If the menu lock moves into a shared utility, `panel-open` can use it too.
3. **`html.js` (for L, awareness only).** The pillars row and the testimonials read-more rely on the `js` class Base.astro sets before paint for their no-script fallbacks. Please keep it.
4. **Venue hero slots (for page builder C).** The venue collection names `card_media`, `map_media` and one slot per feature (all in `slots-systems.ts`). Venue page heroes are yours to add to `slots-page-c.ts`; Belle's bath shot belongs on the Naiko Deep Creek hero (BD-111).

## From the foundation layout builder (L), 24-09-2026

- For page builder A (the funnel): the customise prompts (`QuestionCircles`) link to `/enquire?step=1`, `?step=2` and `?step=5` (plan/11 Part 5 numbering), plus any prefill params passed in. The funnel should open at `step`. Every "Plan your day" from the 8 hour day uses `/enquire?format=full-day`.
- For the orchestrator (tokens.css is yours): base.css defines `--font-ui` (Jost, kept when `?body=serif` swaps `--font-body`), `--header-compact` (the sand strip height after the hero) and `--sticky-cta-h`. Move them into tokens.css if you prefer; nothing else depends on where they live.
- For S, done: `Media` now takes `still` (a video slot renders its poster as an `<img>` and never attaches the file; a missing poster shows the placeholder). base.css also locks scroll for `html.panel-open` with the same `--sbw` padding as `html.menu-open`, so VenueIndex can drop its own copy if it likes. `html.js` stays.

## From page builder C, 24-09-2026

- **For every page builder (awareness).** Astro reads a `slot` attribute on a *direct child of a component* as a named slot. `<MediaBand slot="x" />` placed straight inside `<Base>`, or `<Media slot="x" />` placed straight inside `<SlideIn>`, `<Reveal>` or any other component, renders nothing and throws no error. Wrap it in a plain element (`<div><Media slot="x" /></div>`), or for page heroes use a wrapper that takes the id under another name (page C uses `components/pages/c/Band.astro`, `media="x"`). Worth a line in the MediaBand and Media headers (L).

## From page builder B, 24-09-2026

(The first, second and fourth items below were done by the orchestrator in c6307b4.)

- **Content, for the orchestrator or S (`src/content/experiences/mediterranean-table.json`).** The tile shows `short` "Shared chef curated Mediterranean lunch provided by Beresford" and then "With Aromi Dining" from `business`, so one tile on home and `/experiences` says two different kitchens made the lunch. Suggest `short` becomes the guide p.12 general line "Shared private chef curated Mediterranean-inspired lunch" (keeps Aromi Dining, which is the signature experience), or drop `business` from this record.
- **Content, for the orchestrator or S (`src/content/menus/lunch.json`, `breakfast.json`).** The times come from the Beresford example day and the lunch words from the Encounter Bay guide (Luca Guiotto), so `MealMoments` shows "12:30 to 2:00pm" beside a lunch that was not the one served at that time (CD review D1). On `/food` it is flagged in the notes layer; the cleaner fix is `time: null` on the menus and a kicker that says "Morning" or "Midday".
- **Content (`src/content/experiences/coastal-hiking.json`).** `short` is the Nature immersion pillar line, so the coastal hiking tile reads as the pillar. A one-line description from Belle is still needed (flagged on the page).
- **Helper, for S (`lib/content.ts` `pillarHref`).** On `/philosophy` the FlexShowcase "Discover more" for the nine pillars without a page links to `/philosophy#<id>`, which is the pillar it sits in, so the link does nothing visible. `/philosophy` now carries each pillar's published evidence in an accordion item with the id `science-<id>`. Suggest `pillarHref` returns `/philosophy#science-<id>` for pillars without a page (and the Accordion opening a `details` whose id matches the hash, for L).
- **Awareness, every builder: an Astro compiler quirk.** In a page with `getStaticPaths`, a template literal holding HTML with a nested template literal inside the frontmatter (for example `` `<ul>${items.map((c) => `<li>${c}</li>`).join('')}</ul>` ``) made the compiler leave a second copy of `getStaticPaths` in the component body, and the page failed with `Unexpected "export"`. Moving the HTML builder into a `.ts` file fixed it (`components/pages/b/copy.ts`, `listHtml`).
- **Awareness.** The example menu has 7 dishes as published (plan/11 said nine). No review in `testimonials` has `format: full_day`, so the Day page proof is the marked placeholder.

## From page builder D, 24-09-2026

- **For the orchestrator (harvest).** `/terms` renders Belle's live terms verbatim from the harvester's full-page capture (Playwright, 24-09-2026, kept only in the session scratchpad), because `build/03-content-harvest.md` section 17 records the headings alone. The full text now lives in `site/src/components/pages/d/terms.ts` with its source and every change listed. Worth copying into the harvest so it survives the scratchpad.
- **For L (`LeadCapture`).** plan/12 fix 12 asks for a one-line collection notice linking to `/privacy-policy` under every capture. D's pages add it through a wrapper (`components/pages/d/ListCapture.astro`); the footer newsletter and home capture do not have it yet. Moving the line into LeadCapture would cover every page.
- **For Dom (payload).** D's captures send LeadCapture's payload with a specific `list`: `app` (subscribers.subscription_interest), `waitlist:sunset-reset`, `waitlist:womens-wellness-weekend`, `waitlist:retreat-releases` (subscribers.list), `guide:private-group-guide`, `guide:corporate-group-guide` (downloads.magnet_slug). Documented in `ListCapture.astro`.
- **For the creative director (decision).** `/terms` publishes clause 2.2 ("We do not currently take deposits... full payment at the time of booking") because the brief asked for the live terms verbatim, while build spec 12 says no deposit term publishes anywhere. Flagged on the page in the notes layer; one of the two rules has to give.

## From page builder A, 24-09-2026

- **For S (`VenueIndex`), check in a real browser.** In headless Chromium screenshots the first venue card sometimes shows two black squares behind the top corners of its arch (seen on `/styleguide/systems` and `/private-groups`, never on the other cards). Probably a compositing glitch from `overflow: hidden` plus `isolation: isolate` plus the arch radius on the placeholder layer. Also, each card link's accessible name currently includes the placeholder note text ("Photograph to come..."), which goes away once real images carry alt text.
- **For L (`LeadCapture`).** The `list` prop is typed as four values; the path pages send `guide:private-group-guide` and `guide:corporate-group-guide` (matching D's `downloads.magnet_slug` values) through a cast. Widening the type to `string` would tidy it.
- **For L (`Base`), optional.** plan/11 Part 5 wants `landing_page` as the first page of the session. The funnel records the same-site page the visitor came from (`previous_page`), any external referrer, UTM values and the `/enquire` URL. A two-line script in Base that stores `location.href` in `sessionStorage['lm-landing']` on the first page view would let the funnel send the true landing page.
- **For the orchestrator, content gaps on A's pages (all marked on the page).** Belle's reply time after an enquiry (thank-you page); approval of every funnel question and answer label; one line and who it suits for the half day retreat and personalised retreats; who leads the pasta masterclass; a review from a private group day (the private page shows Sunset Retreat and women's retreat reviews, attributed as such); the private and corporate guide PDFs; Belle's portrait for the thank-you page.
- **For Dom.** `site/functions/api/enquiry.js` is the documented stub: payload shape, validation, Turnstile, the Supabase `enquiries` insert (plan/10 columns), Klaviyo only with consent, no logging of free text. Three suggested columns: `source`, `previous_page`, `format_requested`.

## Orchestrator, 26-09-2026

- The media prop is now `media`, not `slot`, on Media, MediaBand, Hero and ReelFrame (Astro reserves `slot` on child components, which made nested media vanish silently). All 81 usages renamed. Wrappers like `pages/c/Band.astro` are no longer needed but still work.
