---
title: Rebuild round 1, audience clarity and conversion review
date: 27-09-2026 (walked 28-09-2026 on localhost:4322)
role: audience clarity and conversion reviewer
status: Internal. Review only, no site files changed.
shots: qa/shots/rebuild/audience/ (first-<width>-<page>.png for every page at 1440 and 390, stepped runs home-1440, home-390, pg-1440, corp-390, fdr-1440, exp-1440, ndc-390, story-390, contact sheets m-*.png, menu-390.png, corp-venues-*.png, page text in audit.json)
---

# Audience review, round 1

## The short version

The IA from `ux-information-architecture-27-09-2026.md` is mostly in. The header, the phone menu, the Retreats hub, the full day facts row and the home hero sentence all answer "what is this" well. Three things still stop the visitors this review played.

1. Group size and price are dead ends. Every buyer page says "Group sizes vary by venue." and nothing anywhere says when price comes up. The EA with a team of 15 and the sister-weekend planner both leave on the question they came with. Both need Belle (questions 12, 40, 41 and 42 in `build/questions-for-belle-26-09-2026.md`).

2. The day reads as a stay and as a corporate day. Venue cards lead with "Sleeps 6 / 10 / 20+", the home schedule says "group pickup from work office", and the private groups hero promises "sister weekends". A woman from Melbourne cannot tell whether she is booking a night or a day, or where she sleeps.

3. Two visible bugs sit on the buyer pages. Venue card photos for Beresford Estate and Naiko Encounter Bay render at 0px height on /private-groups, /corporate and /experiences/full-day-retreat, at both widths (`corp-venues-500.png`). Testimonial cards show empty sand boxes where photos should be (`pg-1440-004.png`).

## How each visitor got on

```
                         what  where  who  day  hours  stay  getting  group  price  next
                                                             there    size   talk   step
Interstate sister trip   ok    ok     ok   ok*  ok     NO    weak     NO     NO     ok
Adelaide EA, offsite     ok    ok     ok   ok*  ok     n/a   ok       NO     NO     ok
Instagram, 10 seconds    ok    ok     ok   -    ok     -     -        -      -      ok

* the example day is written for a corporate group (work office pickup)
```

### The interstate woman planning a sister weekend

Home tells her what La maréa is in the first screen ("8 hour retreats for private groups and corporate teams, south of Adelaide"). She clicks Private groups, which opens with "sister weekends", then finds a day that ends at 5pm with no word on where the group sleeps or whether a weekend exists. The one page built for her, "Where is the Fleurieu Peninsula?", with drive times and the Adelaide Airport transfer time, is linked only from the footer. The airport transfer answer sits only on /faqs.

### The Adelaide EA finding a leadership offsite

Corporate is one click from the header and the inclusions list is clear. She then needs a number: how many people fit, and roughly what it costs to take to her manager. The page gives her "Group sizes vary by venue." and a guide that is "being finished". Belle's own phrase that answers her logistics question, "group pickup from work office", appears only in the home and full day schedules and never on /corporate.

### The Instagram visitor with ten seconds

This visitor gets the answer. The H1, the chip under it and the two doors (Private groups, Corporate teams) do the job at 1440, and at 390 the chip still shows above the fold. The phone header shows only a menu icon with no word, and the chip is the smallest type on the screen.

## L1 Home and system

| # | Priority | Finding | Proposal |
|---|---|---|---|
| L1-1 | Must | The home day section (`components/day/*`) is Belle's corporate schedule, with "group pickup from work office" at 7am and "drop off to work office at 5pm". Its line "An example day at Beresford Estate, 12 guests" does not say it is a corporate example, so the sister-weekend visitor thinks the day is not for her. | Change the line to "An example corporate day at Beresford Estate, 12 guests", taken from Belle's own schedule caption "bespoke luxury corporate wellness day, 12 guests" (mark it `data-draft`). Move her note "(Note we can curate a personalised retreat to suit your group)" directly under it at body size, instead of a small italic aside on the right. |
| L1-2 | Must | Home Places to Pause (`PlacesArches`) leads each venue with "Sleeps 6 / 10 / 20+", which tells an interstate visitor the product is an overnight stay. Naiko Encounter Bay has no drive time. The map is clipped on the right at 1440, with the Adelaide label on the edge (`home-1440-013.png`). | Order the meta line as setting, drive time, then sleeps, with sleeps in the lighter secondary style, and keep the wording until Belle answers question 43 (overnight stays). Belle or the venue must supply the Encounter Bay drive time, and nothing is invented meanwhile. Widen the map column so the whole peninsula and Adelaide sit inside it. Under "See the venues", add a quiet second link "Where is the Fleurieu Peninsula?" (that page's own H1) to /fleurieu-peninsula-retreats. |
| L1-3 | Should | The hero chip in `Opening.astro` reads "8 hour retreats for private groups and corporate teams, south of Adelaide." It is the clearest sentence on the site, but at 1440 it sits in 14px type in the bottom-left corner of a busy video, and it leaves out the fact interstate buyers need most. | Use the words already approved on the full day page: "8 hour retreats for private groups and corporate teams, door to door from Adelaide." Set it one step up the type scale (body large) and keep the soft local shade. |
| L1-4 | Should | Nowhere on the site says how price works. The closing band (`CtaBand`, on every page) says "A few short questions about your group, then a discovery call with Belle." and stops there. | When Belle says yes to question 42, extend the band line to "A few short questions about your group, then a discovery call with Belle, where pricing is shared." and mark it `data-draft`. This one change in `base/` removes the dead end on every page. |
| L1-5 | Should | The testimonials component shows three empty sand rectangles above the quotes on /private-groups (`pg-1440-004.png`), which reads as broken. | When a review has no photo, render the card as text only, with the quote in Cormorant italic and the byline, and no image box. Keep the photo only on the card that has one. |
| L1-6 | Should | The phone header shows the menu icon with no word, while 1440 shows "Menu". The Instagram visitor on a phone gets no hint of what the site holds until she opens it. | Show the word "Menu" beside the icon at 390, as the IA decided. It fits beside the logo and the Plan your day pill. |
| L1-7 | Could | The home page ends with three sign-offs in a row: the "Restore. Reconnect. Realign." band with its own Plan your day, the "From chaos to calm" footer line, and the footer (`home-1440-017` to `019`). The IA asked for the Restore band to be folded in. | Merge the Restore band into the closing band. Belle's three words become the band heading, then "La maréa was created as an invitation to pause.", then the one Plan your day, so the page has one ending instead of three. |

## L2 Buyers' path

| # | Priority | Finding | Proposal |
|---|---|---|---|
| L2-1 | Must | /private-groups and /corporate never state a group size. The includes list ends "Group sizes vary by venue.", so the EA with 15 staff and the host with 8 friends both stop here. | Put the full day page's four-fact row (8am to 4pm at the venue, 7am to 5pm door to door, who it is for, coast or vineyards) directly under each audience hero, and add a fifth cell "Group size". Until Belle answers questions 12, 40 and 41, the cell reads "12 guests in our example day" and links to /experiences/full-day-retreat, which is sourced. Belle must settle the conflict between the live site's 6 to 10 and the guide's 10 to 14. |
| L2-2 | Must | The price conversation is missing from /enquire, /enquire/thank-you, /private-groups and /corporate. A planner who needs a number for her manager cannot tell when she will get one. | Once Belle says yes to question 42, extend the /enquire intro to "A few questions, one at a time, then a call with Belle to shape your day and share pricing." (`data-draft`), and add the same fact on the thank-you page under "Book a discovery call". Flag this to Belle. |
| L2-3 | Must | /enquire contradicts itself, with "Question 1 of 7" beside a panel headed "Three questions to begin." | Change the panel line to the page's own subline, "A few questions, one at a time", or relabel the three panel items as the three stages the seven questions fall into. The counter and the panel must agree. |
| L2-4 | Should | /private-groups promises "sister weekends" but only sells a day that ends at 5pm. The Women's Wellness Weekend is two pages away, and nothing says where an interstate group sleeps. | Add a quiet line after the includes list, "Looking for a weekend? See shorter retreats and weekends", linking to the /retreats section (the menu already uses that label). Ask Belle question 43 about overnight stays, and if she offers nights at the partner venues, her answer replaces that line. |
| L2-5 | Should | Interstate guests get no travel help on /private-groups. Its questions cover location, fitness, food, children and packing, but not flights. | Swap "What should I pack?" for Belle's existing FAQ "Do you arrange airport transfers to and from your guest meeting spot?" (`faq-12`). Under the questions, add the link "Where is the Fleurieu Peninsula?" to /fleurieu-peninsula-retreats, which gives the Adelaide Airport transfer time. |
| L2-6 | Should | The /corporate includes list says "Luxury private return group transport from Adelaide". The phrase an EA is looking for, "group pickup from work office", is Belle's own and appears only in the schedules. | Replace the transport line on /corporate with Belle's verbatim "Luxury private transfer, group pickup from work office", so the planner sees door to door from her building in the first list. |
| L2-7 | Should | Every buyer page opens with a title block above a boxed photo (`m-first-1440.png` frames 0, 1, 4 and 5, and `pg-1440-000`). It reads as a template, and the audience line sits beside the H1 in small type. | Build one full-bleed opener in `components/pages/a/`: the photo edge to edge, the H1 and Belle's audience line laid over it with a soft local shade, and the fact row from L2-1 on the lower edge. Suggested photos are the two women at the table above the sea for /private-groups (current), `long-table-overhead-group` for /corporate, the Naiko deck for /retreats and the yoga deck for the full day page. |
| L2-8 | Should | /enquire/thank-you shows an empty sand box where Belle's portrait should be at 1440, and it offers two guides that are "being finished". | Put Belle's team portrait in the slot, because a face before the call builds trust. Hide the two guide links until the guides exist, and replace them with "See the full day" so the wait has something real in it. |
| L2-9 | Could | /retreats has five "Read more" links that do not name their destination, which is unclear for sighted users and fails for screen readers. | Name each one, for example "About half day retreats", "About Wake Up To Wellness", "About Sunset Reset", "About personalised retreats" and "About the Women's Wellness Weekend". |

## L3 Experiences, places, food

| # | Priority | Finding | Proposal |
|---|---|---|---|
| L3-1 | Must | In `VenueIndex` the Beresford Estate and Naiko Encounter Bay photos render at 0px height (the `picture` element measures 0) on /corporate, /private-groups and /experiences/full-day-retreat, at 1440 and 390. Only Naiko Deep Creek shows (`corp-venues-500.png`, `corp-390-003`). | Fix the image sizing or lazy loading in `VenueIndex.astro`, and give each card a fixed aspect-ratio box so it never collapses. Check /places and each venue's "Other Places to Pause" block as well. |
| L3-2 | Must | Venue cards and venue pages lead with "Sleeps 6 / 10 / 20+". For a product that is a day, this is the main cause of the "day or stay?" confusion. Naiko Encounter Bay has no drive time anywhere. | Order the card meta as setting (On the coast, In the vineyards), drive time from Adelaide, then sleeps in the lighter style. Hold the wording until Belle answers question 43. Belle or the venue supplies the Encounter Bay drive time. |
| L3-3 | Should | Venue page first screens do not match. /places/beresford-estate opens with a fact row (setting, sleeps, location, from Adelaide, partner) and no photo, while /places/naiko-deep-creek opens with a photo and no facts until well down the page on a phone (`ndc-390`). | Give every venue page the same opener: a full-bleed photo with the name laid over it, then the Beresford-style fact row on the lower edge. Naiko Deep Creek has the drone pan `naiko-deep-creek-drone-pan.mp4` waiting for this slot. |
| L3-4 | Should | /experiences does not say which experiences come in the day and which are extras, and Belle's FAQ mentions paid "add ons". A visitor cannot tell whether the massage and the pasta masterclass are included. | Under the hero line, add a quiet link "See how they fit into the 8 hour day" to /experiences/full-day-retreat. Ask Belle which experiences are standard and which are add-ons, then carry a small "In the day" or "Add on" label on each slider card, as the detail pages already do with "In the day 10am to 12:20pm". |
| L3-5 | Should | /fleurieu-peninsula-retreats is the best page on the site for the interstate visitor (drive times, 90 to 120 minutes from Adelaide Airport, dolphins, whales, Belle's Fleurieu), but no page in the main flow links to it. | Link it from /places under the map, using its own H1 "Where is the Fleurieu Peninsula?". The home and /private-groups links are in L1-2 and L2-5. |
| L3-6 | Should | The "How far is it from Adelaide?" section on /fleurieu-peninsula-retreats buries the flight fact in the third sentence of a paragraph. | Pull a quiet at-a-glance line out above the paragraph from its own sourced words: "McLaren Vale about 50 minutes, Deep Creek about 90 minutes, Adelaide Airport transfer 90 to 120 minutes." Keep the paragraph under it. |
| L3-7 | Could | Blank `h3` headings sit on /places, /food, /experiences/full-day-retreat and the venue pages (see the heading lists in `audit.json`). Screen readers announce empty headings, and the outline stops making sense. | Give each heading its text, or make the element a `p` or `div` where it is decorative. |

## L4 Story and proof

| # | Priority | Finding | Proposal |
|---|---|---|---|
| L4-1 | Should | /our-story is now the About hub, but its first screen shows an aerial of rocks and no Belle (`story-390-000`, `m-first-1440` frame 14). The trust page does not show the person the visitor will speak to on the call. | Open on Belle's portrait in a cinematic full-bleed crop, with her existing line "A family owned business originating from the Fleurieu Peninsula, founded by Belle Redden." laid over it. Move the aerial down to "Growing up on the Fleurieu". |
| L4-2 | Should | /faqs has no answer on booking or price and none on group size, although its Booking and Teams and groups sections are exactly where visitors look. | Add "How do I book, and how much does a retreat cost?" and "How many guests can come?" to those sections once Belle answers questions 40 to 42. Leave them out until then instead of inventing an answer. |
| L4-3 | Should | Two FAQ answers describe a product the site no longer sells. `faq-04` says "Currently we can only cater for 'pairs'" and `faq-07` begins "Our weekend retreats are relatively structured". Next to the 8 hour day for groups, they confuse both buyers. | Flag both to Belle for review and keep her wording until she changes it. Until then, move them out of the Booking and Teams and groups sections. |
| L4-4 | Should | /app shows an empty sand placeholder box in its first screen at 390 (`first-390-app.png`). | Fill the box with a real photo (a journaling or recipe detail from the pool), or remove it so the type leads. |
| L4-5 | Could | On /journal the filters (All, Research, Recipes) sit below the first screen at 390. The IA wanted them visible without scrolling, for returning recipe hunters. | Move the filter row directly under the H1 and intro, above the lead image. |

## Only Belle can supply

- Group size for a day, per venue, the smallest group, and the answer to the 6 to 10 versus 10 to 14 conflict (questions 12, 40 and 41).
- Whether the site may say pricing is shared on the discovery call (question 42).
- Whether any retreat is overnight apart from the Women's Wellness Weekend, and where interstate guests stay (question 43).
- The drive time to Naiko Encounter Bay.
- Which experiences are part of the day and which are add-ons.
- A review of FAQ answers 04 (pairs only) and 07 (weekend retreats).
- The private and corporate group guides, which the thank-you page and /corporate promise.
