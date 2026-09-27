---
title: La maréa creative director review 02, the built site
date: 26-09-2026
author: Creative director and independent reviewer
status: Internal, for Jess and the builders. Not for Belle. No site file was edited.
voice-verbatim-source: Belle Redden, `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt` (dictated 14-09-2026, transcription errors kept); her meeting with Flow Cre8tive as quoted in `research/01-source-docs-extract.md`; her email as quoted in `_context/project-brief-shared.md`. Double quotes mark verbatim words. Everything else is mine.
read: the transcript (every line), project-brief-shared.md, research/02, research/01 (the "NOT in the brain dump" section), requirements-register.md (A to X), build/04 sections 1 to 12, build/01 sections E and H, cd-review-01-prebuild.md, build/02 sections A, C, D and E, reference shots (Tailor wipe and itineraries, Aman seasonal), style guide page 7, brand-voice.md and jess-writing-voice-guide.md
method: built with `npx astro build --outDir /tmp/cd-dist` (61 pages, exit 0), served on port 4460, Chromium via Playwright. Full-page captures of 25 pages at 1440 x 900 and 390 x 844 (every tier 1 and 2 page, plus the Collective, app, gallery, FAQs, the sleep pillar page, a team page and the 404). Viewport captures every 700px down home and the Day page at both widths, every 250px through the pinned day, the home page again with the placeholder notes switched off, the menu open at both widths, and the enquiry funnel clicked from step 1 to the thank-you page at both widths. Scripted checks for horizontal overflow, dashes, uppercase and banned words over the built HTML.
---

# La maréa creative director review 02, the built site

## A. Verdict

1. Yes, this is the site Belle described: every section in her transcript has a home, her own words carry the structure ("Your retreat, your rhythm, your routine", "Signature culinary experiences", "Places to Pause", "Restore. Reconnect. Realign.", the name story), and all 29 items from review 01 were built or deliberately parked.
2. The mechanics she asked for work: the zoom mosaic scales and hands over to the Fleurieu facts, the day slides in from the right under a time rail, the experiences pane holds still while tiles move, the funnel runs seven steps to a thank-you page with no errors, and nothing scrolls sideways at 390 or 1440.
3. It will pass the "oh, wow" test only if the first screen and the Restore panel carry bright footage. As built, both render as a dark olive field (the hero slot's placeholder tone is `sage`), so the first thing anyone sees reads khaki and heavy, which is the opposite of "light and bright and, you know, more summery".
4. The copy is mostly hers and every drafted line is marked, but three things would embarrass her on a partner's or a guest's first read: Beresford Estate's own marketing copy republished word for word on her venue panel, a Naiko bushfire note that may no longer be true, and descriptor labels on reviews that nobody wrote ("Retreat guest, on the lunch").
5. It is still long (home 17,449px on a laptop, about 19 screens; the Day page tells the same schedule three times), and the recurring "on the *Fleurieu*" italic heading has turned from a signature into a tic. Fix the ten items at the top of section G and it is ready for Belle's first walkthrough once her stills are in.

## B. Against the transcript

Status key: Delivered, Partly, Missing, Misread, Invented.

| Her words, verbatim | Status | What the build does |
|---|---|---|
| "big, beautiful, um, you know, imagery or drone footage that straight away is showing you, um, sort of that luxury travel, wellness, spa sort of vibe" | Partly | Full-bleed hero, one line, two doors, nothing else in the first screen. The mosaic three screens down carries the spa and wellness stills, as review 01 asked. The placeholder is dark olive, so the first screen currently says "moody", not "spa". |
| "lots of white space" and "nice, small, luxury fonts" | Delivered | Hero line 56px, section headings about 40px, body Jost 16px, generous section padding. Italiana headings sit well beside the logo. |
| "using more of just that real soft sand color as the base" and "for, like, um, wording and headings, maybe using La Miraya, the sage green" | Delivered | `--sand-30` page, brand sage 80 and 100 for type, exact hexes from style guide page 7. Bands alternate sand, salt and sand-40 almost every section, which reads striped (see E). |
| "the tailor's website ... exclusive journeys, you you have that sort of slider" and Bathhouse "ten immersive spaces" | Delivered | `PaneSlider`: fixed left pane, counter "01 / 10", arrows, progress rule, ten tiles in her names, mixed image and video, per-tile art direction. |
| "a little explanation underneath" | Partly | Seven of ten tiles have a line. Sauna shows "A one line description from Belle" and three tiles say "Who delivers this is to confirm with Belle". The lines that exist read as inclusions ("Individual therapeutic massage experience with Earth House & Spa"), which is the "here is what's included" register she and Jess agreed to leave behind. |
| "sliders that have imagery as well as sliders that have videos" | Delivered | Video slots on experiences, the self-led slider and the pillars. |
| "doing a slider of the retreat self led activities would be amazing too" | Delivered | "The unhurried afternoon", six tiles, on the Day page and `/experiences`. |
| "what a example sort of full day, eight hour immersive wellness retreat with us looks like" | Delivered | Home moment 4 and the Day page, one real day ("An example day at Beresford Estate, 12 guests"), times verbatim, 12:20pm corrected and flagged. |
| "It keeps, like, coming out from the the right hand side, like, appearing" | Delivered | Four panels arrive from the right under a time rail on desktop; a four-panel swipe on phones. Settled panels are clean at every 250px sample. |
| "get them to book a discovery call with me" | Delivered | Every button says "Plan your day" and opens the funnel; "Book a discovery call" appears on the thank-you page and as "Rather talk first? Book a discovery call with Belle" beside step 1. |
| "the places or the stays ... a clean looking sort of main page for these places" | Delivered | `/places` with arch cards, coast and vineyard filter, three venues, a slide-in panel per venue, and a page per venue. |
| "you click the arrows, and it, like, sort of takes you through different images" (Basq House) | Delivered | `SteppedGallery` on each venue page: text left, image right, arrows, counter, rule. |
| "the map, um, of Australia ... but for South Australia" | Delivered | Line-drawn Fleurieu map with an Australia inset, three markers, arrows, venue pills on phones. The map column is narrow on home and `/places` (about one third) and the Australia inset is tiny at 390. |
| "breaking it up, like, coast versus vineyards" and "I don't really wanna be promoting Adelaide CBD options" | Delivered | "On the coast" and "In the vineyards" filters. "Adelaide CBD" appears nowhere. |
| "we partner with top accommodation venues in South Australia" and "luxury five star accommodations" | Partly | "Five star partner venue" on the two Naiko venues, "Partner venue" on Beresford, per review 01. Correct, and Belle will notice Beresford looks demoted. She decides. |
| "I really like the bath shot ... maybe we have, like, a hero banner" at Naiko Deep Creek | Delivered | The Deep Creek hero slot names the bath shot. |
| "these need to be bigger and, um, yeah, more more luxurious" (the pillars) | Delivered | Full-size COMO flex row on `/philosophy` with her ten line icons; icon row under difference 2 on home. |
| "each of these pillars need to link to that evidence and those references somewhere. But in a really beautiful, minimalistic way" | Partly | Sleep and recovery has its own evidence page (21 references). The other nine open an accordion on `/philosophy` holding the live site's claims. Correct for launch, but nine of ten "Discover more" links land on a list, not a page. |
| "our difference ... I'd like to show this in a in a much more beautiful way" | Partly | Five differences verbatim, numbered, one image slot each, linked to their proof. The numerals are set in Italiana, where "01" reads as the letter O and 1. |
| "we are the first business in South Australia" | Held, correctly | Not stated anywhere. Our story carries a marked place for her first-person note. Still Belle's decision. |
| "the Rising Tides Collective ... You actually need to attend a wellness retreat" | Delivered | Home line, its own page with "Membership cannot be bought or chosen. You join by attending", no login anywhere. |
| "coming twenty twenty seven and the Lamaria app" | Delivered | Home line, `/app`, email capture for foundational subscriptions. |
| "the key is a big, um, or an image with, um, yeah, some simple wording" (journal) | Delivered | Title over image, category chip, date, filter tabs (All, Sleep and recovery, Recipes), featured post, "Recent stories" slider, home slider. |
| "who are our key wellness practitioners, who are our lead sort of food and hospitality team" | Delivered | `/team` with hosts, then two tabs (Wellness practitioners, Food and hospitality) in the SHA carousel. Every portrait is a placeholder. |
| "client testimonials set up with an image, and then, um, sort of a bit of wording under that" | Delivered | Image above, words beneath, filter chips, format in the attribution, "See past retreats" beside it. |
| "signature culinary experiences ... a three course Mediterranean chef curated dining experience and a past making masterclass" | Delivered | Verbatim heading on home and `/food`, two expandable tiles, tabbed block on `/food`. |
| "breakfast to refreshments, um, to ... lunches ... and maybe a dinner, a menu example" | Partly | Breakfast, refreshments, lunch, then dinner and dessert as marked placeholders; lunch menu in an accordion. Correct given the missing menus. |
| "local Flora Peninsula, uh, producers" | Partly | Two producers named, a marked gap for more, local businesses named on team and experience cards. |
| "some nice looking drop downs ... maybe like a a small minimalistic arrow" | Delivered | Chevron accordions throughout, never a plus. |
| "it's really easy for people to filter through" | Delivered | Filters on venues, journal, testimonials and gallery. |
| "customize your journey ... who's traveling, why do you want to travel" | Delivered, well | Three arch prompts beside step 1 of the funnel and as the home closing moment. The arch swap for The Tailor's rings is the best single design decision on the site. |
| "a beautiful gallery that people can explore" | Delivered | `/gallery` with retreat and venue filters, tiles that open in place. |
| "we align with true South principles ... not major" | Partly | A dashed "To come" box in every footer. It reads as unfinished on every page of the site. |
| "nothing sort of bouncing ... it's all very soft and relaxing" | Delivered | Soft fades and slides only, no overshoot seen in any sampled frame. |
| "leave feeling different, lighter, calmer, empowered, educated" and "transform how they feel" | Partly | "Transformative" appears once, in her live line in moment 2. The eight words sit on `/philosophy` only. No real guest line about how people leave is used on the Day page, which review 01 asked for (the Justin Kurenda review is on home only). |
| "dolphins in the ocean ... seals ... kangaroo footage" | Delivered as slots | "The wild side" slider on the Fleurieu page, all placeholders. |
| "I've got some reels ... I'm not sure how it would look as a, you know, Instagram sort of video reel" | Delivered | Contained 9:16 frame beside the hour-by-hour table on the Day page. |

Missing: nothing she asked for is absent. Misread: nothing structural. Invented: see section F.

## C. Against the emails, the agency meeting, the plans and review 01

**Emails and correspondence.** Two paths from early on ("almost like two distinct stories") are delivered as hero doors, header links and `/private-groups` and `/corporate` built on one layout with different language. The stepped funnel ("asking relevant questions step by step") is delivered: one question per screen, progress, back link, a running "Your day so far" summary, prefill from `?format=full-day` (the step 6 "Which kind of day" arrived pre-set to "The 8 hour day"), health-details warning and collection notice on step 7, and a summary with "Book a discovery call" on the thank-you page. The thank-you page still says "Prototype: this enquiry is held in this browser until the live form is connected", so P5 (lead source and timestamp into Supabase) is not live. Klaviyo (P6) is a stub. The phone number 0411 354 356 publishes in every footer, on step 7 and on the thank-you page; build/04 section 3 said phone only if the harvest confirms it is published. Confirm with Belle.

**The agency meeting (research/01, items 1 to 16).** Fixed text pane with moving tiles (1), progress rule (2), per-tile art direction (3), hover states (4), cross-fades (5), the slide from the right (6), expand in place on culinary tiles, gallery and testimonials (7), arrow carousels (8), art-directed splits rather than 50/50 (9), fluid margins (10), no cropping (11), true reflow (12), no horizontal scroll at 390 and 1440 (13, not tested at Galaxy or Pixel tablet widths in this pass), parallax bands (14), full-bleed blocks (15) and title-over-image journal cards (16): all present.

**Review 01 Musts, checked one by one.**

| Must | Delivered? |
|---|---|
| 1 No full-frame scrim, text on sand below 700px | Yes in code (`--scrim-soft`, phone hero puts the H1 and doors on sand). Undermined by the hero placeholder tone `sage`, which paints the whole frame dark olive. |
| 2 No eyebrow, labels-only doors, `--fs-display` 36 to 56px | Yes on home. The Day page and path pages still carry an eyebrow over the H1 ("The 8 hour day", "Private groups and retreats"), which is acceptable on inner pages. |
| 3 No in-panel collapse, time rail, two surfaces, Restore as a photograph, phone swipe | Yes. The Restore placeholder is a dark field, so today it looks like the `--sage-80` panel review 01 removed. |
| 4 One real day at Beresford, arc beats, lunch without a chef, 12:20pm | Yes. The Nourish panel lists 9am breakfast after the Move panel's 9:30am and 10am rows, so the day reads out of order (see E). |
| 5 Home in 12 moments | Yes, in the right order. |
| 6 Day page in 10 moments | Mostly. It now runs panels, then the full hour-by-hour table, then the morning rotation, so the same 10am to 12:20pm rotation is told three times in a row. |
| 7 Vineyard Retreat hidden, no venue count, one McLaren Vale marker | Yes. |
| 8 `group_type` and `format` on reviews | Yes on the records. The descriptors themselves are partly invented (see F). |
| 9 Drive times | Yes: "About 50 minutes", "About 90 minutes", "Transfers typically take 90 to 120 minutes" for the airport only. |
| 10 No deposit term | Yes on the Day page and FAQs. `/terms` reproduces her live clause 2.2 ("We do not currently take deposits") verbatim with a note for Belle. Acceptable, since it is her live text. |
| 11 No member login or 2027 access line | Yes. |
| 12 Drafted outcome lines replaced, transformation in vocabulary | Partly. No drafted outcome promise remains; the Day page still has no real guest line about how people leave. |
| 13 Nothing to Belle until the hero, mosaic, Day panels and six tiles carry real stills | Still open, and the most important line in this review. |
| 14 Mosaic stills are the offer, centre frame not beach, capped scroll | Yes. Five offer stills around a hills or vineyard centre, the three facts over the full frame. |

Shoulds from review 01: nav of five plus paths was overridden by build/04 section 12 (left: Private groups, Corporate, The 8 hour day; right: Experiences, Places to Pause), header stays visible, sticky "Plan your day" bar on phones only after the hero and hidden on `/enquire`. All built as decided. Italic only on place names: built, and now overused (see E). Customise prompts only on `/enquire` and home: built. Local businesses named: built on team, experience tiles and the Fleurieu page. "See past retreats" beside proof: built. No image drift on venue cards: built.

## D. Against the references

**Borrowed well.** The Aman split on the experiences pane (a quiet left third, tiles bleeding off the right edge with a hairline progress rule) is the closest the site gets to Aman's restraint, and it is good. COMO's flex row on the pillars, with her own line icons in the slivers, is distinct from the experiences mechanic, as build/01 F2 required. Basq House's text-left stepped gallery on the venue pages is faithful and calm. The arch frame from style guide page 7 on venue cards and the three customise prompts is original to La maréa and does more to make the site feel Mediterranean than any photograph will.

**Too literal, mostly The Tailor.** Four visible signatures still say "The Tailor" on sight:

1. The header: centred logotype, three links left, links right, "Menu" with a hamburger and one filled button top right. That is The Tailor's header with the orange pill recoloured. Aman, her font reference, runs "Menu" left, logo centre, one button right, with no split link rows.
2. Journal cards with a darkened lower gradient, a boxed category chip in the top-left corner and the title over the image are The Tailor's itinerary cards (compare `tailor-home-itineraries-01-desktop.jpg`, where the chip reads "14 DAYS"). The gradient is also what makes these cards read brown.
3. Boxed filter chips with a filled first chip ("All") on testimonials, journal and venues repeat The Tailor's stories filter. Aman and COMO use plain text tabs with an underline for the active item.
4. The recurring italic place name in a centred closing heading ("A day on the *Fleurieu*, shaped around your group", "Curate your day on the *Fleurieu*", "Gather around the table on the *Fleurieu*", "Bring your group to the *Fleurieu*", "Spend a day with us on the *Fleurieu*", "Begin with a day on the *Fleurieu*", "Plan a day of your own on the *Fleurieu*", "Shape your day on the *Fleurieu*") is The Tailor's one-italic-word heading, now with a fixed word. Eight pages end the same way.

The zoom mosaic and the slide from the right are also The Tailor's, and they stay because Belle named both.

**Not yet at their restraint.** Aman's seasonal section puts 20 words in the left column and leaves 600px empty beneath them; La maréa puts an eyebrow, a heading, an intro, a personalisation line in parentheses, a counter, arrows and a text link in the same column. Aman runs on two colours; this site alternates sand, salt and sand-40 bands almost every section, which reads as stripes when scrolled quickly. The Tailor and Aman label a section once; here nearly every section carries an eyebrow ("Move", "Nourish", "Restore", "What sets us apart", "Guest reviews", "Wellness journal") above a heading that already says the same thing. Words per screen on the Day page's hour-by-hour table and the corporate "Who it is for" block run well above the 66 to 93 build/02 measured.

## E. Look and feel, page by page

**Every page**
- The hero placeholder on home, the Day page, `/philosophy` and Restore renders as a dark olive field (`home-hero` has `tone: 'sage'` in `site/src/data/media/slots-foundation.ts`, and the Day Restore slot uses a dark tone too). With the notes switched off, the first screen of the site is khaki. Every hero placeholder should use the lightest tone so the prototype reads bright until her footage arrives.
- The footer carries a dashed "To come" box for the True South line on all 61 pages. Hide it until Belle writes the line, or put her line in now.
- Nearly every CTA band ends on "… on the *Fleurieu*" (list in D). Rewrite at least half without the place name.
- Section eyebrows repeat their headings. Drop the eyebrow wherever the heading says the same thing.
- The footer tagline "From chaos to calm, stress to serenity / Let the tide guide you home." is hers and fine. The acknowledgement names only the Kaurna people; Deep Creek and Encounter Bay are Ngarrindjeri (Ramindjeri) country, which the Naiko page itself mentions. Belle decides the wording, since it is her live text.
- Placeholder notes are long technical strings ("plan/11 S2", RAW file names). Useful for Jess, but the notes layer must be off for any walkthrough; with it off, the sand placeholders read as intentional, calm frames.

**Home, 1440**
- Hero: fine structure, dark placeholder. The two doors sit bottom right with the H1 bottom left, balanced.
- Invitation: the best screen on the site. "Restore. Reconnect. Realign." against "La maréa was created as an invitation to pause." has Aman's calm.
- Zoom mosaic: works, releases cleanly. The three fact cards over the full frame are plain white boxes with italic place names; they look like form fields. Use a single sand panel with hairline dividers.
- The Day: settled panels are clean. The Nourish panel opens with "9am Nourishing wholefood seasonal organic breakfast" after Move's 10am rotation, and the rail puts Nourish at 12:30pm. Either move breakfast into Move with a short note, or head each panel's rows "Across the day" so the order does not look wrong.
- Experiences: tile images are small against the pane (about 240 x 250px at 1440) and the section leaves a large empty band beneath the rail. Tiles at about 320px wide would carry the photography Belle is buying this site for.
- Places to Pause: the map column is about one third and reads as a thumbnail. Review 01 asked for the photograph to take two thirds; that was done, and the map now needs its own moment to be read.
- Our difference: Italiana numerals read "O1", "O2". Set numerals in Cormorant.
- Proof: good. Chips should be text tabs.
- Stay close: two email fields back to back (the app capture, then the footer "Stay close" capture) with near-identical consent text. Keep one on home.

**Home, 390**
- Hero on sand below 65svh of video: correct.
- The Day swipe works; the Arrive panel has about 300px of empty space because panels share the tallest height. Let panel height follow content, or put the image first on phones.
- The experiences placeholder notes cover most of each tile at this width, fine with notes off.
- About 19 phone screens. Acceptable for the brief, and the sticky bar keeps the action one tap away.

**`/private-groups` and `/corporate`**
- Clean and short. The corporate intro ("Corporate retreats are designed for teams who understand that sustainable performance requires recovery, clarity and nervous system regulation, not just output.") is her live copy and carries the banned "not just X" antithesis. Ask Belle if she will trim "not just output".
- The private groups proof ends with a "To come" box under three reviews. Remove the box when reviews exist beside it.

**The Day page**
- Hour by hour directly after the pinned day repeats the same eleven rows, and the morning rotation repeats 10am to 12:20pm a third time. Fold the table into an accordion item ("See the full schedule") beside the reel, so the reel and the panels carry the story.
- "What guests say" shows one hatched placeholder card and a "To come" note. Hide the section until a full day review exists; the page is stronger without an empty proof block.
- "The unhurried afternoon" band is another dark placeholder field; on phones its placeholder note sits over the "2pm to 3:45pm" eyebrow.

**`/experiences` and an experience page**
- Index: the pane, the afternoon slider and "One day, from 7am to 5pm" are good. The practitioner row lists "La maréa, Belle Redden, Founder and lead host" as a practitioner beside four partner businesses; Belle belongs in a line above the row.
- `/experiences/contrast-therapy`: the "At a glance" table (In the day, Duration, Pillar) is tidy. Two "Note for Belle" flags sit in the first answer block; the page is thin until she supplies who leads it.

**`/places` and venue pages**
- The first arch card renders black in both top corners in Chromium (seen on `/places` and the Day page), from the `overflow: hidden` plus `isolation` on `.vcard__frame` over an unloaded media layer. Check in Chrome and Safari and paint the frame's background `--sand-30`.
- The Beresford panel reproduces Beresford Estate's own marketing copy ("Delivering unparalleled luxury, the Grand Reserve Suites are nestled in 70-acres of rolling vineyard", "your very own oasis wrapped in natures tranquillity", "world-class wine region"). It is the partner's voice, it carries four words the guardrails ban, and publishing a partner's copy verbatim is duplicate content for search. Rewrite in Belle's register from the facts, or quote it as the venue's own description with attribution.
- Naiko Deep Creek: "Following recent bushfires in the region, Naiko is undergoing careful landscape restoration, with bookings now open for late 2026" publishes as fact. It is late September 2026. Confirm with Belle or remove.
- "Around *Deep Creek*" and "A day at *Deep Creek*" are good sections; "A day here" is a "To come" box, the only unfinished block on an otherwise complete page.

**`/philosophy`**
- The icon row under the hero, the name story, the three-part "Mediterranean inspired, science backed, rooted in the Fleurieu" and the flex row are the right sequence. The eight words sit in a quiet grid, visible, never hover-only: correct.
- The name story appears here (brain dump version) and again on `/our-story` (a longer live-site version ending "the continual cycle of endings and new beginnings"). Build/01 E says "The tide ... once". Keep one.

**`/food`**
- "The day at the table" row (one open breakfast card and four narrow vertical strips) is the SHA pop-up she liked, and it works. The hero placeholder here is the lightest on the site, which shows how the others should look.
- "Our chef and local producers" is strong.

**`/team`**
- Hosts pair, then the tabbed carousel: correct and distinct from The Tailor. Kristian Ryan's bio calls him "Chris" ("Chris will guide you safely"); make the name consistent or leave it for Belle.

**`/journal` and a post**
- Featured post plus "Recent stories" plus a filtered grid shows the same four posts three times on one page. With four posts, drop the grid until there are eight.
- The sleep post is long (about 21 screens on a phone) and reads cleanly; it is her article.

**`/our-story`**
- Opens on "Not to step away from ambition, but to support it more sustainably.", an orphan fragment that reads as the end of a missing sentence. Check the harvest for the sentence before it.

**`/retreats`, `/rising-tides-collective`, `/app`, `/gallery`, `/faqs`, `/404`**
- All consistent and calm. The gallery renders correctly in a real scroll. The Collective's three numbered benefits with a thumbnail each repeat the Our difference pattern exactly; a quieter list would separate them.

**`/enquire` and `/enquire/thank-you`**
- The funnel is the most finished experience on the site: one question per screen, a live summary, prefill, back link, clear consent text. Two fixes: the full site footer (tagline, sitemap, email capture) runs under the form and pulls attention from the only task on the page; use a slim footer. And step 4's experience checkboxes sit at the bottom right of each image, a long way from the label on phones; make the whole tile the target and mark selection on the tile.
- Thank-you: "Thank you, Test." with a summary and "Book a discovery call" is right. The two "To come" boxes (reply time, prototype storage note) must go before Belle sees it.

**Menu**
- Sage column with the circle submark and contact, the three primary paths large in Italiana, grouped links, one photograph slot. Good at both widths, focus returns to the Menu button on Escape.

## F. Copy

**Dashes and uppercase.** Zero em or en dashes in the built HTML. Zero `text-transform: uppercase`. Clean.

**Banned words in visible text.** Every hit traces to someone else's words, which is why they got through:
- Beresford Estate's copy on `/places`: "unparalleled luxury", "nestled" (twice), "oasis", "world-class". Must rewrite (see E).
- Naiko Encounter Bay's copy: "a calm and elevated environment", and "an elevated coastal retreat". Rewrite with the Beresford copy.
- Courtney Selfe's business bio on `/team`: "a holistic haven", "indulgent". Partner text; ask Belle or trim.
- Zoe Buttery's bio: "seamless guest experience". Belle's live text; ask her.
- Belle's live copy: "journey" in the Empower definition, the Personalisation pillar line, Our story and the FAQs; "transformative" in moment 2; "Bespoke" throughout. Hers, verbatim, allowed. Review 01 already queued "journey" in Empower for her.
- Reviews: "honestly", "genuinely", "journey". Verbatim guest words, keep.
- The sleep article: "actually" four times. Her article, keep.

**Invented or drafted lines a visitor would read as fact.**
- Review descriptors written by us and presented as attribution: "Retreat guest, on the lunch", "Retreat guest, on the yoga", "Wellness experience guest", "First-time retreat guest", "Group guest, wellness workshop". A descriptor should state the format from the review ("Guest, Sunset Retreat"); "on the lunch" reads like a caption the guest chose. Use format and date only.
- "Be the first to know about new retreats and exclusive offers." Her live footer line, but "exclusive offers" is discount language on a luxury site. Ask Belle.
- The funnel's occasion options ("A hens weekend or celebration", "A family reset") trace to her formats copy. Fine.
- "More places will join the collection over time, each one chosen the same way." and "Tell us who is coming, and we will suggest the place" (both drafted, marked). Fine in register.
- "Three questions to begin. We curate the rest with you." (drafted, marked). Fine.
- The Kaurna-only acknowledgement and the Naiko "Ramindjeri word for Mother" line are cultural claims; both are flagged for Belle in the notes layer. Keep them flagged.

**Her words used where they exist.** Yes, almost everywhere: the invitation to pause, the five differences, the name story, the eight words, her pillar lines, her live private and corporate copy, "Luxury South Australian wellness experiences, curated to form La maréa." (her typed line, X11), "(Note we can curate a personalised retreat to suit your group)". Two places still reach past her: the experience tile lines are schedule text rather than her voice, and the Day page has no guest line about how people leave.

**Australian English.** -ise spellings, sentence case, DD-MM dates in notes, "Recipes" and "Sleep and recovery" tabs. No US spellings found in drafted copy. The eight words keep her "centeredness", already flagged.

**Brand spelling.** "La maréa" in all drafted copy. "La Maréa" survives in the name story on `/philosophy` (verbatim, flagged) and "La Marea" in reviews (verbatim). Correct handling.

## G. Prioritised fix list

Ordered by what Belle would notice first. Must = before her first walkthrough. Should = before launch. Belle decides = goes on her question list.

| # | Priority | File(s) | Exact change |
|---|---|---|---|
| 1 | Must | `site/src/data/media/slots-foundation.ts` (`home-hero` `tone: 'sage'`, and every other hero and the Day Restore slot); `site/src/data/media/slots-systems.ts` and any page slot blocks with dark tones | Set every hero, band and Restore placeholder to the lightest tone (`salt` or `sand`) so the site reads light and bright until footage lands. Check the H1 and door contrast on the light placeholder and switch the hero text to `--sage-100` while the placeholder shows. |
| 2 | Must | `build/00-orchestration-brief.md` 5.9 gate (Jess) | Unchanged from review 01 item 13: nothing goes to Belle until the hero, the mosaic, the four Day panels and six experience tiles carry her real stills, and the walkthrough runs with `data-media-notes="off"` (set `mediaNotes` default to `'off'` in `site/src/layouts/Base.astro` for the walkthrough build). |
| 3 | Must | `site/src/content/venues/beresford-estate.json`, `site/src/content/venues/naiko-encounter-bay.json`, `site/src/components/venues/VenuePanel.astro` source text | Replace Beresford's and Naiko's own marketing copy with short lines in Belle's register built from the facts (suites, bathhouse, plunge pool, 70 acres, Blewitt Springs). Remove "unparalleled", "nestled", "oasis", "world-class", "elevated". |
| 4 | Must | `site/src/content/venues/naiko-deep-creek.json`, `site/src/components/pages/c/venue-extras.ts` | Remove the bushfire and "bookings now open for late 2026" sentence from the public page until Belle confirms it; keep it in the notes layer. |
| 5 | Must | `site/src/content/testimonials/*.json` (`home-megan`, `google-meg-hansen` and every record with an invented descriptor) | Attribution shows group type and format only ("Guest, Sunset Retreat", "Corporate team, Wake Up to Wellness morning"). Delete "on the lunch", "on the yoga", "First-time", "Wellness experience guest". |
| 6 | Must | `site/src/components/layout/Footer.astro`, `site/src/data/settings.ts` | Hide the True South "To come" box when notes are off, or render nothing until Belle's line exists. |
| 7 | Must | `site/src/components/pages/a/ThankYou.astro`, `thank-you.ts` | Hide both "To come" boxes when notes are off. Wire the enquiry to the Supabase stub Dom will replace so the prototype note is not needed. |
| 8 | Must | `site/src/components/venues/VenueIndex.astro` (`.vcard__frame`) | Add `background: var(--sand-30)` to the arch frame and confirm the black top corners on the first card are gone in Chrome and Safari at 1440 and 390. |
| 9 | Should | `site/src/components/day/PinnedDay.astro`, `site/src/data/day.ts` | Fix the order within Nourish: either move the 9am breakfast row into Move (after 8:15am) and keep Nourish for 12:20pm and 12:30pm, or retitle the rail time for Nourish to "9am and 12:30pm". Let panel height follow content on phones so Arrive does not carry 300px of empty space. |
| 10 | Should | `site/src/pages/experiences/full-day-retreat.astro` | Move the hour-by-hour table into a "See the full schedule" accordion beside the reel. Hide "What guests say" until a full day review exists. Add one real guest line about how people leave, with its format (Justin Kurenda, Wake Up to Wellness), under the panels. |
| 11 | Should | `site/src/content/experiences/*.json` (`sauna`, `massage`, `contrast-therapy`, `pasta-making`, `yoga`) and `site/src/components/experiences/PaneSlider.astro` | Replace schedule-register tile lines with one feeling line each in Belle's words (ask her for all ten in one message); hide "Who delivers this is to confirm with Belle" and "A one line description from Belle" when notes are off. Remove the "with Malissa" versus "to confirm" contradiction on the pasta tile. Widen tiles to about 320px at 1440. |
| 12 | Should | CTA headings in `site/src/pages/private-groups.astro`, `corporate.astro`, `food.astro`, `places/[slug].astro`, `our-story.astro`, `gallery.astro`, `rising-tides-collective.astro`, `retreats.astro`, `experiences/index.astro`, `experiences/[slug].astro` | Rewrite at least five of the eight "… on the *Fleurieu*" closing headings without the place name, so the italic place name stays special. |
| 13 | Should | `site/src/components/layout/Header.astro` | Break The Tailor's header signature: move "Menu" to the far left beside the first links, or drop the split link rows to one quiet row right of the logo. Keep the filled "Plan your day". Show Jess both before changing. |
| 14 | Should | `site/src/components/journal/JournalCards.astro`, `site/src/components/testimonials/Testimonials.astro`, `site/src/components/venues/VenueIndex.astro` | Replace boxed filter chips with plain text tabs and an underline for the active one. On journal cards, drop the corner chip onto the category line under the date, and lighten the lower gradient to 0.22 alpha like the hero. |
| 15 | Should | `site/src/components/base/NumberedMoments.astro` | Set numerals in `--font-serif` (Cormorant), not Italiana, so "01" does not read as "O1". |
| 16 | Should | `site/src/pages/index.astro`, `site/src/components/pages/a/StayClose.astro` | One email capture on home: fold the app interest checkbox into the footer capture, or remove the footer capture on home only. |
| 17 | Should | `site/src/pages/enquire/index.astro`, `site/src/layouts/Base.astro` | Slim footer on `/enquire` and `/enquire/thank-you` (logo, privacy, contact line). Make each step 4 image tile the checkbox target and mark selection on the tile. |
| 18 | Should | Section eyebrows across `site/src/pages/index.astro` and the tier 1 pages | Delete eyebrows that restate the heading ("Guest reviews" over "In our guests' words", "Wellness journal" over "From the wellness journal", "What sets us apart" over "Our difference"). Keep the arc labels (Move, Nourish, Restore) only where they add the story. |
| 19 | Should | Band backgrounds in page files and `site/src/components/pages/c/Band.astro` | Reduce band alternation on home to sand with at most two salt sections (proof and the Day), so the page stops reading striped. |
| 20 | Should | `site/src/pages/our-story.astro`, `site/src/pages/philosophy/index.astro` | Keep the name story on `/philosophy` only; on `/our-story` link to it. Fix the orphan opening "Not to step away from ambition, but to support it more sustainably." by restoring the sentence it answers from the harvest, or cutting it. |
| 21 | Should | `site/src/pages/journal/index.astro` | With four posts, show the featured post and one slider, and hide the grid until there are eight posts. |
| 22 | Should | `site/src/components/map/FleurieuMap.astro` | Give the map at least 40 per cent of the section on `/places` and the Fleurieu page, and double the Australia inset at 390. |
| 23 | Should | `site/src/pages/experiences/index.astro` | Move "La maréa, Belle Redden, Founder and lead host" out of the practitioner row into a line above it. |
| 24 | Should | Test pass (builders) | Run `npm run check:scroll` at Samsung Galaxy Tab and Pixel Tablet widths (800, 1280, 1600 and their portrait sizes), which Belle was told to check herself. Not covered in this review. |
| 25 | Belle decides | Question list | Publish 0411 354 356 on every page, or email only? |
| 26 | Belle decides | Question list | "Five star" on Naiko only while Beresford shows "Partner venue": happy with that, or does Beresford hold a rating? |
| 27 | Belle decides | Question list | Acknowledgement of Country: Kaurna only, or Kaurna and Ngarrindjeri to cover Deep Creek and Encounter Bay? |
| 28 | Belle decides | Question list | "Exclusive offers" in the footer line, "not just output" in the corporate intro, "seamless" in Zoe's bio, "haven" and "indulgent" in Courtney's: keep or trim? |
| 29 | Belle decides | Question list | The arch frame (style guide page 7) is now on the venue cards and the customise prompts. Keep it as La maréa's shape? |
