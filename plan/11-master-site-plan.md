---
title: La maréa master site plan
date: 16-09-2026
author: Jess Tresidder, lead planner synthesis
status: Internal build plan. Not for Belle in this form. Every section traces to `_context/requirements-register.md`.
voice-verbatim-source: quoted client copy from the Encounter Bay retreat guide, the live lamarea.com.au pages and Belle Redden brain dump 14-09-2026. Asset filenames are verbatim.
inputs: STATE-OF-PLAY.md, requirements-register.md (A to W), belle-brain-dump-14-09-2026.md, research/01, 02 (P5 fields only), 04, 05, 06 (C1 to C6 mapping at lines 16 to 21, plus the completion pass finished during synthesis), 07, 08, 09, assets-index/03, plan/10
---

# La maréa master site plan

## How to read this document

Every section in Part 4 names the register IDs it satisfies. Register IDs are the letter and number codes in `_context/requirements-register.md`, for example A1 or O6. Blockers use the register's own Q and S numbers. Component codes T1 to T10 come from register section U and `research/04`. Component codes C1 to C6 come from the mechanic map in `research/06`, lines 16 to 21:

```
C1  SHA advisory board carousel     -> team and practitioners (I1 I2 I3)
C2  SHA pillar accordion, arrow     -> philosophy and science detail (G, L3)
C3  SHA design of our diets         -> click to expand in place (O7, L4)
C4  Basq House our rooms index      -> venue index (F2 F4)
C5  Basq House arrow gallery        -> venue detail, text and image stepped together (F5 F10)
C6  Bathhouse Albion ten spaces     -> experience tiles with scrim, arrows and progress rule (D1 to D4)
```

Sections that need a building block outside T1 to T10 and C1 to C6 use a named base component, written as `base: name`. The base set is defined once in Part 4.

Content status uses three labels only.

- **In hand**: the exact content exists in a source file and can be used as written.
- **In hand, blocked**: the content exists but needs access, permission, a decision, grading or Belle's sign-off before use. Copy that Jess drafts from sourced facts always sits here until Belle approves it.
- **Needed from Belle**: no source holds it. Nothing is written in its place.

Where two source files disagree, the conflict is written into the section as **Conflict** and carried to Part 7. Nothing is silently chosen.

"Decision N" refers to the numbered decisions in Part 7. "Open decision N" refers to the register's own list of eight open decisions, which Part 7 maps.

Sections no register ID asks for are marked **Jess recommendation** with the reason.

---

# Part 1. The site in one page

## Positioning, three sentences

1. **Curated luxury wellness retreats on the Fleurieu Peninsula, for private groups and teams.** This is the replacement line recorded in register V, and it replaces the "South Australian first" claim (G9).
2. La maréa designs and hosts the whole day, an 8 hour immersive retreat at a five star partner venue on the coast or in the vineyards, bringing practitioners, a chef-led Mediterranean table and time to rest into one booking. This sentence is assembled from N1, A1, F6 and F8 and from the market gap in register R, "nobody in South Australia sells a designed day". Status: in hand, blocked, until Belle approves the wording.
3. It is built for people who have never been to South Australia, and every path ends in a discovery call with Belle. Sources A3, A1 and E4. Status: internal framing, not public copy.

The scroll story runs on Belle's own four words, **Arrive. Move. Nourish. Restore.** (C4, register V).

## The two audience paths

| Path | Page | Who it serves | Register |
|---|---|---|---|
| Private groups | `/private-groups` | Friends, families, milestone birthdays, sister weekends, family resets, per the live retreats page copy | A8, A1, R cluster 6 |
| Corporate | `/corporate` | Leadership teams and professional groups, per the live retreats page copy | A8, A1, R clusters 1 and 2 |

The two paths split in the first viewport of the home page and stay separate until the enquiry funnel, where the first question confirms the path (A8, A5).

## The primary conversion

A **booked discovery call** that converts to an 8 hour immersive full day retreat (A1, A2, E4). The mechanism is the stepped enquiry funnel at `/enquire` (A4, A5), which writes to Supabase with lead source and timestamp (P5), then offers Belle's booking link, https://calendar.app.google/jiKYpzKFiG5XZV9x9, on the completion page.

Secondary conversions, each also a lead record: guide downloads (P7), waitlist joins (P13), app interest (K2), newsletter sign-up (P6).

## The whole site

```
                                   Home  /
                 hero video zoom, one line, two doors in the first viewport
                                       |
                +----------------------+----------------------+
                |                                             |
        Private groups                                    Corporate
        /private-groups                                   /corporate
                |                                   /corporate/fleurieu-offsite
                |                                             |
                +----------------------+----------------------+
                                       |
          the scroll story both paths share, in Belle's order (C4, C5)
                                       |
   Arrive -------------> Move ---------------> Nourish ----------> Restore
   the Fleurieu          the experiences        the table           places to pause
   /fleurieu-            /experiences           /food               /places
    peninsula-retreats   /experiences/<slug>    signature culinary  /places/<venue>
                         /experiences/           experiences         self-led time
                          full-day-retreat
                          (The Day, flagship)
                                       |
            supporting pages, each with a route back into the funnel
   /retreats (The Day, formats)   /philosophy  /philosophy/<pillar>   /team
   /our-story   /journal  /journal/<slug>   /gallery   /faqs
   /rising-tides-collective   /app (2027)   /guides/<slug>   /waitlist
                                       |
                                       v
                 /enquire  stepped funnel, path confirmed at step 1
                 row written to Supabase at step 1 with source and time
                                       |
                                       v
                 /enquire/thank-you
                 answers summarised, booking link, discovery call
                                       |
                                       v
               Discovery call with Belle  ->  8 hour retreat booked
```

Every page on the site carries the persistent header call to action into `/enquire`. Every venue, experience and format page prefills the funnel with what the visitor was looking at, so no path reaches the call with less information than it started with.

---

# Part 2. Sitemap

## Launch position

The site ships with **33 page types**: 26 single pages and 7 templates. At launch the templates produce roughly 35 further URLs (10 experiences, 4 venues, 8 pillars, team members, 4 migrated journal posts, 2 guides), about **61 public URLs** in total. Two further page types are designed now as seams for later.

URL rule: flat, readable, one topic per URL, and every page works cold from an Instagram or ManyChat link with no navigation context (P8, register R).

**Conflict, URL slugs.** Register R and `research/08` set venue URLs at `/places/<slug>`. `plan/10` uses `/the-places/<slug>` and `/the-team#slug` in its schema comments and redirect examples. Register R is marked "now a requirement", so this plan uses `/places/` and `/team/`. `plan/10` needs its examples aligned before build. This is internal and does not go to Belle.

## Page table

Ship column: **Launch** means live at go-live. **Launch, lean** means live with the sections that have content, the rest hidden by the `draft` flag until Belle supplies it. **Seam** means the data model and route exist now, the page ships later.

| # | URL | Page | Job in one line | Audience | Keyword cluster owned (08) | Register IDs | Ship |
|---|---|---|---|---|---|---|---|
| 1 | `/` | Home | Make a stranger feel the Fleurieu, split them into the right path, and sell the designed day | Both | 3, luxury wellness retreat South Australia | A1 A2 A3 A8 C1 to C9 D1 E1 F2 G8 I5 K1 K3 L1 L2 N1 | Launch |
| 2 | `/private-groups` | Private groups | Turn a milestone or gathering idea into a group enquiry | Private | 6, private group wellness retreat | A1 A4 A8 I7 P7 P8 | Launch |
| 3 | `/corporate` | Corporate | Let a decision-maker justify a team day and enquire | Corporate | 1, corporate wellness retreat SA and Adelaide. 2, corporate offsite | A1 A4 A8 I7 P7 P8 P12 | Launch |
| 4 | `/corporate/fleurieu-offsite` | Fleurieu offsite | Answer "what would we do for eight hours" for offsite searches | Corporate | 2, corporate offsite SA and Fleurieu | A8 N4 N5 P8 | Launch, lean |
| 5 | `/retreats` | The Day, formats | A simple menu of formats for people who want to browse directly | Both | 3, with home | A7 E1 | Launch |
| 6 | `/experiences` | Experiences index | The dedicated experiences section Belle says is missing | Both | 8, aggregate | D1 D2 D3 D4 D5 D6 D7 O1 O2 O3 O5 O8 | Launch |
| 7 | `/experiences/full-day-retreat` | The 8 hour flagship | Show exactly what the day looks like and end in a call | Both | 5, day retreat and full day | E1 E2 E3 E4 E5 O6 C3 C4 | Launch |
| 8 | `/experiences/<slug>`, 10 instances | Experience detail template | One addressable, citable page per experience | Both | 8, experience long tail | D3 D4 P8 N5 | Launch, 7 of 10. Pasta making, gut health and consultations lean until Q3, Q4, Q5 clear |
| 9 | `/places` | Places to Pause index | Clean index of partner venues split by coast and vineyard | Both | 4 and 7, supporting | F1 F2 F3 F4 F6 F8 F9 L5 | Launch |
| 10 | `/places/<slug>`, 4 instances | Venue detail template | Show a venue so a guest knows where it is and what surrounds it | Both | 4 (Naiko pages), 7 (Beresford, Vineyard) | F5 F7 F8 F10 M2 E5 | Launch, gated per venue by `partner_approved` |
| 11 | `/fleurieu-peninsula-retreats` | The Fleurieu | Sell the peninsula as a wellness destination to interstate visitors | Both | 4, Fleurieu Peninsula retreat hub | C6 A3 M4 M5 N3 F9 | Launch |
| 12 | `/philosophy` | Philosophy | Present the pillars as the core difference, bigger and calmer than today | Both | none, brand and AEO support | G1 G2 G3 G4 G6 G7 G10 G11 | Launch |
| 13 | `/philosophy/<pillar>`, 8 instances | Pillar detail template | Link each pillar to its science and references, minimal and clean | Both | none, citable evidence | G5 G7 G4 | Launch, lean. References needed |
| 14 | `/food` | The Table | Food philosophy, the day at the table, signature culinary experiences | Both | 8, Mediterranean table and pasta making, supporting | H1 to H8 N3 L4 | Launch |
| 15 | `/team` | Team | Practitioners and the food and hospitality team, separately | Both | none, E-E-A-T support | I1 I2 I3 I4 I8 | Launch |
| 16 | `/team/<slug>` | Team member template | A proper person page per practitioner, replacing seven hand-built pages | Both | none, `Person` entities | I2 P13 N5 | Launch. **Conflict** with `plan/10` anchors, see Part 7 |
| 17 | `/our-story` | Our story | Founder story, family business, how La maréa works on the Fleurieu | Both | none | G9 G11 I8 N2 N3 C9 | Launch |
| 18 | `/journal` | Wellness journal index | Editorial, image-led catalogue Belle adds to herself | Both | 8, informational layer | J1 J2 J3 J4 J5 L5 O14 | Launch |
| 19 | `/journal/<slug>` | Journal post template | Research, blogs and recipes, full post | Both | 8, informational layer | J2 J3 G5 | Launch, 4 migrated posts |
| 20 | `/gallery` | Gallery | Explorable record of past retreats, for credibility | Both | none | I9 I8 O7 L5 | Launch, lean. Guest photo consent needed |
| 21 | `/rising-tides-collective` | Rising Tides Collective | Show what members get and that entry is earned by attending | Past guests, and prospects | none | K3 K4 K5 | Launch |
| 22 | `/app` | La maréa app, coming 2027 | Build anticipation and capture subscription interest | Both | none | K1 K2 K6 P9 | Launch |
| 23 | `/enquire` | Enquiry funnel | Stepped questions, path confirmed, lead written to Supabase | Both | none, noindex not needed | A4 A5 A6 A8 P5 P6 P8 | Launch |
| 24 | `/enquire/thank-you` | Enquiry complete | Summarise answers and put the discovery call booking link in front of them | Both | noindex | E4 A1 A2 | Launch |
| 25 | `/guides/<slug>`, 2 instances | Guide download template | Gated guide, standalone for ManyChat and Instagram | Private, corporate | none | P7 P8 P5 P6 | Launch, blocked on the two guide PDFs |
| 26 | `/waitlist` | Waitlists | On-domain waitlists replacing off-domain Jotform | Both | noindex | P13 P5 P6 | Launch. **Conflict** with `plan/10` redirect of `/waitlist` to `/enquire` |
| 27 | `/faqs` | FAQs | Existing twelve answers, structured for search and AI answers | Both | 3 and 5, supporting | L3 N4 N5 | Launch |
| 28 | `/gift-cards` | Gift cards | Honour existing gift cards and sell new ones, pending decision | Both | none | P13 | Seam until Belle decides. Holding page at launch |
| 29 | `/privacy-policy` | Privacy policy | APP 1 policy naming every processor | Both | noindex not needed | O15 P4 | Launch |
| 30 | `/terms` | Terms and conditions | The live FAQ refers to terms that need a home. **Jess recommendation**, because the cancellation answer links to them | Both | none | P13 | Launch, needed from Belle |
| 31 | `/questionnaire/<token>` | Guest questionnaire and waiver | Replace Jotform for dietary needs, injuries and waivers | Booked guests | noindex, token only | P4 O15 | Launch, week three |
| 32 | `/admin` | Sveltia CMS | Belle edits the site herself | Belle | noindex | P1 P2 P3 M6 F3 J2 | Launch |
| 33 | `/404` | Not found | Offer the three main paths to anyone arriving on a dead link | Both | none | P13 | Launch |
| 34 | `/retreats/<slug>` | Dated retreat template | Dated retreats such as the Women's Wellness Weekend, with `Event` schema and waitlist | Both | 3, events | A7 N5 | Seam, pending Belle's call on which dated products still sell |
| 35 | `/rising-tides-collective/members` | Collective member area | Login for past guests, Supabase Auth | Members | noindex | K5 K6 P9 | Seam, 2027 |

## Experience detail instances

Slugs from register R where R names them. The other five follow the same pattern and are a Jess recommendation, because D3 names ten experiences and P8 needs each shareable on its own.

| Slug | Experience (D3 wording) | Source copy | Ship |
|---|---|---|---|
| `contrast-therapy` | Contrast therapy | In hand, guide p.15 and p.17 | Launch |
| `infrared-sauna` | Sauna. **Conflict**: D3 says sauna, D6 and R say infrared sauna. One page, titled as Belle chooses | In hand, guide p.15 and p.16 | Launch |
| `massage` | Massage | In hand, guide p.15, p.23 | Launch |
| `yoga` | Yoga | In hand, guide p.15, p.23 | Launch |
| `pilates` | Pilates | In hand, thin, guide p.15 | Launch, lean |
| `meditation-and-mindfulness` | Meditation and mindfulness | In hand, guide p.15, p.23 | Launch |
| `mediterranean-table` | Chef curated Mediterranean dining | In hand, guide p.13 | Launch |
| `pasta-making` | Chef-led pasta making masterclass | Blocked, Q3. The live site bio for Malissa Fedele lists a "Mediterranean Pasta-Making Masterclass (2 hrs)" and Luca Guiotto's lists "private pasta-making classes". Neither confirms who runs it for La maréa | Launch, lean |
| `gut-health` | Gut health nutrition workshop | Blocked, Q5. Same or different from "The Foundations of High Performance Wellbeing" | Launch, lean |
| `nutrition-consultations` | Lifestyle wellness and nutrition consultations | Blocked, Q4. The live Malissa Fedele bio lists a 60 minute 1:1 consultation, the retreats page lists a post-retreat consultation and plan | Launch, lean |

## Venue instances

| Slug | Venue | Region | Capacity to publish | Ship |
|---|---|---|---|---|
| `naiko-deep-creek` | Naiko Deep Creek | Coast | Sleeps 6, Belle and venue agree | Gated by permission and S4 |
| `naiko-encounter-bay` | Naiko Encounter Bay, marketed by the venue as Naiko at the Bluff | Coast | Sleeps 10, day retreat 10 to 14 (guide p.24) | Gated by permission and S4 |
| `beresford-estate` | Beresford Estate, McLaren Vale | Vineyard | Belle 20+, venue publishes no group total | Gated by permission and Q1 |
| `the-vineyard-retreat` | The Vineyard Retreat, McLaren Vale | Vineyard | **Conflict** Q6: Belle 10, venue 16 | Gated by permission, Q6 and S3, no imagery anywhere |

Adelaide CBD is held back as a region value in the schema and has no public filter or page (F6).

## Pillar instances

Eight slugs if Belle confirms the eight words (G10): `release`, `reconnect`, `restore`, `realign`, `educate`, the sixth word in Belle's G10 list, `ground`, `nourish`. The set is not final until decision 1 in Part 7 clears.

## Guide instances (P7)

| Slug | Guide | Status |
|---|---|---|
| `private-group-guide` | The "Download Private Group Guide" on the live home page | The PDF itself is needed from Belle. The live button destination was not confirmed by the audit |
| `corporate-group-guide` | The "Download Corporate Group Guide" on the live home page | As above |

## Standalone addressable URLs for ManyChat and Instagram (P8)

Every one of these renders complete without navigation context, carries `BreadcrumbList` schema, and preserves UTM parameters into the funnel.

```
/private-groups                  /corporate                  /corporate/fleurieu-offsite
/experiences/full-day-retreat    /experiences/<each slug>    /places/<each venue>
/fleurieu-peninsula-retreats     /guides/private-group-guide /guides/corporate-group-guide
/enquire                         /enquire?audience=private   /enquire?audience=corporate
/waitlist                        /app                        /rising-tides-collective
```

## The 410 list, Wix placeholder pages (register T)

**Conflict.** Register T counts "six" placeholder pages, then lists eight URLs including `/members`. The audit (07) lists seven placeholder URLs plus `/members`. The audit's redirect map suggests a blanket 301 to home as "the safer default". Register T and `plan/10` both reject redirecting junk to home. This plan follows register T and returns **410 Gone** for all eight, because nothing on them is worth preserving and a 301 to home tells Google the home page is a template placeholder.

| URL | What is on it today | Response |
|---|---|---|
| `/inquiry-services-page` | Unedited Wix service template | 410 |
| `/pricing-plans/list` | Placeholder tiers to "$25,000/month VIP" | 410 |
| `/service-page/ashtanga` | Unedited Wix Bookings service | 410 |
| `/service-page/gentle-yoga` | Unedited Wix Bookings service, "$15" | 410 |
| `/challenge-page/40349a10-e96c-48b2-88f8-682973d42432` | "108 Sun Salutations Challenge", $100 | 410 |
| `/challenge-page/b6851c31-0b6a-40be-9bee-a16769378ccd` | Unedited Wix Challenges page | 410 |
| `/challenge-page/de44bc63-73a7-40a4-a6d6-c831e8ef9fae` | Unedited Wix Challenges page | 410 |
| `/members` | Blank Wix login widget | 410. The Collective lives at a new URL and nothing here holds content |

Belle hears about these today, separately from this plan (STATE-OF-PLAY, urgent).

## Redirect map, every other live URL (P13)

All 301 unless marked. Source list is the audit sitemap crawl of 16-09-2026.

| Current URL | New URL | Note |
|---|---|---|
| `/` | `/` | |
| `/our-story` | `/our-story` | |
| `/philosophy` | `/philosophy` | |
| `/luxury-retreats` | `/retreats` | The private and corporate sections move to their own pages, the hub keeps the formats |
| `/partners` | `/team` | |
| `/accommodation-partners` | `/places` | |
| `/contact` | `/enquire` | |
| `/faqs` | `/faqs` | |
| `/gift-cards` | `/gift-cards` | Pending decision 16 |
| `/privacy-policy` | `/privacy-policy` | |
| `/courtney-selfe`, `/kristian-ryan`, `/luca-guiotto`, `/jaimi-baker`, `/sarah-mclachlan`, `/natalie-jane`, `/malissa-fedele` | `/team/<same slug>` | Only for people Belle keeps on the roster (decision 12). Anyone removed redirects to `/team` |
| `/blog` | `/journal` | |
| `/blog/categories/sleep-recovery` | `/journal?category=<Belle's category>` | Category names needed from Belle |
| `/post/the-importance-of-sleep-for-wellbeing-recovery-performance-how-to-create-a-pre-bed-routine-that` | `/journal/<new slug>` | Full content migrates |
| `/post/honey-soy-poke-bowl` | `/journal/honey-soy-poke-bowl` | |
| `/post/med-inspired-vegetable-lasagna` | `/journal/med-inspired-vegetable-lasagna` | |
| `/post/mediterranean-gnocchi` | `/journal/mediterranean-gnocchi` | |
| `/product-page/bespoke-bestfriends-womens-wellness-day-2-x-tickets` | `/retreats` or `/retreats/<slug>` | Pending decision 13 |
| `/product-page/mediterranean-womens-wellness-weekend-3150-pp` | `/retreats` or `/retreats/<slug>` | Pending decision 13 |
| `/category/2026-retreats` | `/retreats` | |
| Off-domain Jotform waitlists | `/waitlist` | Jotform links in Instagram bios and emails get swapped by Belle |

The architecture's "roughly 35 dead URLs" figure comes from the competitor audit. The sitemap crawl found 33. The difference is not established and is checked by the full crawl in week one (`plan/10`, section 7).

---

# Part 3. Navigation

## Primary navigation, desktop

Logo centred with navigation split either side, the header pattern recorded on The Tailor (04, section 1.2). The two audience paths sit first on the left, so they are the first words a visitor reads after the logo (A8). One persistent call to action sits at the far right on every page (A1, A2).

```
+------------------------------------------------------------------------------------------+
|  Private groups   Corporate   The Day        la maréa        Places to Pause   Philosophy |
|                                                                   Journal   [Plan your day]|
+------------------------------------------------------------------------------------------+
     path A          path B      /retreats      home            /places           /philosophy
     /private-groups /corporate                                 /journal          /enquire
```

| Item | URL | Register | Note |
|---|---|---|---|
| Private groups | `/private-groups` | A8 | |
| Corporate | `/corporate` | A8 | |
| The Day | `/retreats` | A7, register V | Label decided in register V for formats. Dropdown lists the formats and the flagship |
| Places to Pause | `/places` | F1, F2, register V | Dropdown groups venues under Coast and Vineyard (F6) |
| Philosophy | `/philosophy` | G1 | Dropdown lists the pillars once decision 1 clears |
| Journal | `/journal` | J1 | |
| Plan your day | `/enquire` | A1, A5, E4 | **Decision 15.** "Plan your day" is lexicon item 2 in `research/05`. The competitor audit found four drifting CTA phrasings on the live site, so one phrase is used everywhere. Belle chooses between "Plan your day" and "Book a discovery call" |

Dropdown panels open on hover where `(hover: hover)` matches and on click everywhere, with the chevron from C2 rather than a plus (L3, O4). Nothing in the header animates beyond a 300ms opacity change (B6).

**Jess recommendation.** Experiences, Food and Team are not in the primary bar. They sit inside the home scroll story, the Day dropdown and the footer. Seven items plus a CTA is the ceiling before the header stops reading as minimal (B5). Belle may prefer Experiences in the bar, since D1 calls it the biggest missing section. That swap costs nothing, and the choice is hers.

## Primary navigation, phone and portrait tablet

```
+----------------------------------+
|  la maréa          [Plan]  [menu] |
+----------------------------------+
            | tap menu
            v
+----------------------------------+
|  Private groups                  |
|  Corporate                       |
|  ------------------------------  |
|  The Day                     v   |
|  Places to Pause             v   |
|  Philosophy                  v   |
|  Journal                         |
|  ------------------------------  |
|  Experiences   Food   Team       |
|  Our story     Gallery   FAQs    |
|  ------------------------------  |
|  [Plan your day]                 |
+----------------------------------+
```

Full-height overlay on sand, one column, chevron disclosures on native `details` (C2, L3). Tap targets at least 44px. One layout that reflows, no separate mobile build (O11). The overlay locks body scroll without shifting layout, so no horizontal scroll appears when it opens (O12).

## Footer navigation

```
+------------------------------------------------------------------------------------------+
|  Plan a retreat          Explore                  La maréa                Stay close      |
|  Private groups          Experiences              Our story               Newsletter      |
|  Corporate               The 8 hour day           Philosophy               [email] [join] |
|  Fleurieu offsite        Food                     Team                    Rising Tides    |
|  The Day, formats        Places to Pause          Gallery                  Collective     |
|  Plan your day           The Fleurieu Peninsula   Journal                 The app, 2027   |
|  Guides                  FAQs                     Gift cards              Waitlists       |
|                                                                                           |
|  belle@lamarea.com.au   info@lamarea.com.au   phone   Instagram @lamarea_retreats          |
|  One line on how La maréa works on the Fleurieu, linking to /our-story (N2)               |
|  Privacy policy   Terms   (c) La maréa                                                    |
+------------------------------------------------------------------------------------------+
```

| Footer element | Register | Status |
|---|---|---|
| Newsletter field, server-side Klaviyo sync with separate consent | P6, P5 | Klaviyo list needed from Belle |
| Contact emails and phone | A1 | In hand from the live FAQ and contact pages. Belle confirms the phone number is public |
| Instagram handle | P8 | In hand, @lamarea_retreats |
| True South line, one sentence, no logo | N2 | Needed from Belle, her own words about her practices (register R) |
| Rising Tides Collective and app links | K1, K3 | In hand as links |

## How the two paths surface in the first viewport

The home hero holds three things only: the drone video, one positioning line, and two doors. Nothing else competes (C1, C7, A8, and the "one frame" pattern recorded in the competitor proposal, `research/01` addition 24).

```
+------------------------------------------------------------------------------------------+
| header                                                                                    |
|                                                                                           |
|                                                                                           |
|                         full-bleed drone video, DJI_0781 candidate                       |
|                         zooms 1 to 2.18 on scroll (T1, L1), 1.45 on phones               |
|                                                                                           |
|              Curated luxury wellness retreats on the Fleurieu Peninsula,                  |
|                              for private groups and teams.                               |
|                                                                                           |
|       +-------------------------------+     +-------------------------------+            |
|       |  For private groups        -> |     |  For your team             -> |            |
|       |  /private-groups              |     |  /corporate                   |            |
|       +-------------------------------+     +-------------------------------+            |
|                                                                                           |
|                                  scroll cue, soft fade                                   |
+------------------------------------------------------------------------------------------+
```

The two doors are real links with hover states (O4) and tap states. On phones they stack, both above the fold at 390 by 844. The door labels are drafts built from Belle's own audience words and sit at "in hand, blocked" until she approves them.

The doors stay visible while the T1 zoom runs, then the floating caption fades as the zoom completes, per the T1 spec in `research/04`. A visitor who scrolls past without choosing meets the two paths again in the header and in the funnel's first question.

---

# Part 4. Page by page

## Components used in this part

### From register U and research/04

| Code | Component | Notes that change how it is used here |
|---|---|---|
| T1 | Hero video zoom on scroll | CSS scroll-driven, 1 to 2.18, 1.45 on phones, poster under reduced motion |
| T2 | Slider with progress rule | Scroll-snap track, arrows plus progress rule (O2). **No autoplay on touch** |
| T3 | Pinned horizontal wipe with vertical expand | The signature interaction (O6). Pinned only above roughly 900px, vertical stack below. GSAP loads on two pages only, home and the full day page (`plan/10`, section 5) |
| T4 | South Australia map with stepped locations | Inline SVG, pins from venue coordinates |
| T5 | Testimonials, image above, words beneath | Attribution as a descriptor, per `research/04` |
| T6 | Not used | Belle said not to copy The Tailor's team (I4). C1 replaces it |
| T7 | Accordion | **Superseded by C2** per the completion pass in `research/06`. Cited only where a register line names T7 |
| T8 | Journal filter and editorial cards | Filters are toggle buttons with `aria-pressed`, not a tablist, per `research/06` decision 2 |
| T9 | Question circles | Static picture of the funnel, one link, hover lift (O4) |
| T10 | Fixed text pane with moving items | **Built as C6** for experiences. Reused as a C6 instance for the philosophy pillars |

### From research/06

| Code | Component | Notes |
|---|---|---|
| C1 | Team carousel, SHA pattern | Two instances, wellness and food and hospitality |
| C2 | Chevron disclosure accordion on native `details` | Every accordion on the site, FAQs included |
| C3 | Click-to-expand image tile | Expands in place, never navigates (O7, L4) |
| C4 | Venue index carousel with coast and vineyard filter | Hides arrows and rule when all cards fit |
| C5 | Paired text and image gallery with counter and rule | Venue detail. Reused for the food day and the full day rotation |
| C6 | Experiences, fixed pane and windowed flex row | D1 to D6, O1 to O5, O8. No autoplay. Only the active tile's video plays |

### Base components

Plain building blocks no reference names. None of them adds motion beyond a Y-axis fade in (L2 is served by T3, C6 and the slide-in variant below).

| Name | What it is | Register it serves |
|---|---|---|
| `base: header` | Split navigation, logo centred, persistent call to action | A8, O4, B5 |
| `base: footer` | Footer navigation, newsletter, contact, True South line | P6, N2 |
| `base: media-band` | Full-bleed image or video, optional parallax (O13), text beneath or overlaid | C2, O13, M5 |
| `base: text-pair` | Eyebrow, heading, 30 to 60 word body, one third to two thirds split (O8) | B5, O8, O9 |
| `base: slide-in` | A text-pair or image entering from the right on scroll through `animation-timeline: view()`, with an `overflow-x: clip` parent | L2, O12 |
| `base: answer-block` | Question as heading, 40 to 60 word answer beneath, `FAQPage` or `speakable` ready | N5 |
| `base: numbered-moments` | Numbered items, short title, one sentence of what it feels like. The Scorpios inclusions pattern, `research/05` 1.6 | C3 |
| `base: cta-band` | One line and one button into the funnel with prefill parameters | A1, E4 |
| `base: lead-capture` | Email field, separate marketing consent, Turnstile, writes to Supabase and Klaviyo | P5, P6, P7 |
| `base: proof-strip` | One line of credentials in rotation, no logos. Bathhouse Albion marquee, `research/06` 3a | I8 |
| `base: table` | Accessible data table, used for the hour by hour day | E1, N5 |
| `base: form-step` | One funnel question per screen with progress | A5 |

## Site-wide systems

These are not page sections, but several register IDs live only here, so each is written out with its IDs.

### Design tokens

| System | What it holds | Register | Status |
|---|---|---|---|
| Colour | Soft sand as the dominant background, sage for headings and text, a darker text tone if sage fails contrast at body size (Aman runs `#F3EEE7` sand under `#313131` text, `research/04` 4.5) | B1, B2, B3, B7 | **In hand, blocked, S1.** No hex value is chosen until the style guide PDF is read |
| Type | One serif at weight 400 for editorial text, one grotesque for small labels, constant 1.45 line height, tracking growing as size shrinks (Aman, `research/04` 4.4). Sentence case only, no uppercase transforms | B4, B5 | **In hand, blocked, S1.** Brand fonts come from the style guide. Self-hosted, 2 families, 4 weights, 90 KB cap |
| Space | Fluid gutters `clamp(1.25rem, 5vw, 7rem)`, art-directed splits per section, never a snapped grid | B5, O8, O9 | In hand, spec in `plan/10` section 5 |
| Motion | Nothing bounces. Easing from the recorded references only: COMO `0.8s ease-out 0.2s`, SHA `cubic-bezier(0.25, 0.1, 0.25, 1)`. Every animation has a reduced-motion fallback that shows the finished state | B6, O5 | In hand |
| Light and bright | Sand surface throughout, dark bands avoided except for image-led sections | B3, C2 | In hand, blocked, S1 |

### Layout rules that hold on every page

| Rule | Register | Test |
|---|---|---|
| One layout reflows at every width, no separate mobile build | O11 | Code review |
| Margins scale continuously | O9 | Visual check at 10 widths |
| Nothing crops at any width | O10 | Build check opens every C2 item at 320px, image `object-fit` reviewed per crop |
| Zero horizontal scroll | O12, P13 | CI measures `scrollWidth` against `clientWidth` at 320, 360, 390, 412, 768, 800, 1024, 1180, 1280 and 1440px. Real Samsung Galaxy and Pixel tablet test before Belle runs hers |
| Hover states on every interactive element, with tap equivalents | O4 | Code review under `(hover: hover)` |
| Cross-fade, never a hard cut, between tiles | O5 | C5, C6, T2 specs |
| Parallax on image bands where the section is image-led | O13 | `base: media-band` |
| Luxury feel carried through every page, not only home | C2 | Every page opens on `base: media-band` or T1 |
| Logo displayed in full at every width | P13 | Visual check at 320px |

### Media handling

| Rule | Register | Status |
|---|---|---|
| Every video is a Cloudflare Stream ID plus a poster, swapped by changing one field in the CMS | M6 | In hand, `plan/10` section 4 |
| Footage graded A to D before design starts. Drone footage slowed in post, never in the player, and only where the source frame rate allows | L6, M1, M6 | In hand, blocked. Frame rates of DJI_0604, DJI_0605 and DJI_0781 not verified |
| Footage spread across beach, venues and experiences, not weighted to beach. Each page's media plan below is checked against this | M5 | Checked per page in this part |
| One autoplay loop per page. **Conflict**: D5 asks for video sliders. Resolved by C6's rule that only the active tile plays, and it counts as the page's loop only when the hero is a still | D5, `plan/10` page budget | Carried to build |
| Amateur footage never full-bleed behind text, and never in T3 panels at launch (`research/04` T3 verdict) | M6, E2 | In hand |

### Search and answer engines

| System | Register | Status |
|---|---|---|
| One brand spelling, "La maréa", in title tags, schema `name`, and `alternateName` for "La Marea" and "Lamarea" | N4, N5, P13 | In hand. Belle confirms the canonical spelling |
| Plain title tag per page naming offer and place, replacing the 124 character keyword stack | N4, P13 | Drafted per page in the build |
| One H1 per page that describes the page (two live pages have none, two have a stray sentence) | N4 | Build check |
| Schema: `Organization` site-wide, `LocalBusiness` on home, `TouristAttraction` on the Fleurieu hub, `Resort` and `Place` on venues, `Product` and `Offer` on formats and experiences, `Event` on dated retreats, `FAQPage`, `Person`, `BreadcrumbList`, `Article` and `Recipe` on the journal | N4, N5 | In hand, `research/08` section 3. `Recipe` is a Jess recommendation because three migrated posts are recipes |
| `llms.txt`, sitemap, robots | N5 | In hand |
| Alt text on every image, where 35 to 54 per cent is missing today | N4 | Build check |
| Lighthouse score and view-source HTML shown in the prototype walkthrough, plus the four search probes re-run after launch | O15, N4 | In hand, `research/08` probes table |
| Canonical 40 word description reused on ATDW, Google Business Profile and schema | N5 | Needed from Belle, approval of the description |
| Old Wix site removed or de-indexed at cutover so no duplicate copy is live | N4, `research/01` addition 21 | Week four |

### Editing, ownership and data

| System | Register | Status |
|---|---|---|
| Sveltia CMS at `/admin` covering copy, images, video, offers, pages from blocks, form questions, journal, links, CTAs and SEO fields. Formatting and mobile are handled by the design system, not by Belle | P1, P2 | In hand, `plan/10` section 3. Auth path tested day two |
| Every collection has a draft or published flag, and a schema error fails the build without touching the live site | P2, F3 | In hand |
| Repo, Cloudflare account and Supabase project in Belle's name | O15, P3 | In hand, week one |
| Leaving Wix entirely, with the real ongoing cost stated as about $8 USD a month plus domain | P3 | In hand |
| Supabase owns guest records, the site and the 2027 app consume them | P9, K5, K6 | In hand, register W |
| Health information collected only on the questionnaire, with separate consent, stored apart from enquiries | P4, O15 | In hand, `plan/10` section 6 |
| Privacy policy names every processor and cross-border disclosure | O15, P4 | Drafted week two |

---

## 4.1 Home, `/`

**Job.** Make a visitor who has never been to South Australia feel the Fleurieu, split them into the right path, and sell the designed day. **Audience** both paths. **Budget** 1,100 KB to LCP, 2,800 KB full, one autoplay loop (`plan/10`). **Length** the competitor proposal set roughly a third of today's 2,300 words, and Belle wrote that she is "happy to retire wording" (`research/01`).

The scroll story is Belle's four words. Arrive is the peninsula, Move is the experiences, Nourish is the table, Restore is the places to pause and the unhurried afternoon. That order is C4 and also C5, Belle's own flow from experiences to food to places.

```
 Arrive                       Move                 Nourish             Restore                    Then
 hero, intro, the Fleurieu -> The Day -> Your     -> The Table      -> Places to Pause,         -> difference, proof,
                              retreat, your rhythm                     the unhurried afternoon     customise, future, journal
```

| # | Section, decided lexicon | What it does | Component | Content and status | Assets from the inventory | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths first, persistent Plan your day | `base: header` | In hand | Logo, **needed from Belle** (no logo file found, `assets-index/03` brand section) | A8, A1, O4 |
| 2 | Arrive, hero | Big drone footage the moment the page opens, zooming on scroll, one line, two doors | T1 | Line: V replacement line, in hand, blocked until Belle approves. Door labels drafted from her audience words, in hand, blocked | First choice DJI_0781.MP4 (T1 verdict in `research/04`). Alternates DJI_0604.MP4, "La marea summer video.mov", "NEW HOME PAGE BRANDING PILLAR VID.MOV". All in hand, blocked: ungraded, frame rate unverified, 1.3GB class files need encoding | C1, C7, L1, L6, M1, A8, B3, R market gap |
| 3 | Arrive, an invitation to pause | States the unique combination in one short block and names what La maréa is against: slowing down, not hustle | `base: text-pair`, one third to two thirds | In hand, verbatim: "La maréa curates bespoke wellness retreats for those who understand that wellbeing is not indulgence, it is foundation." (live home page) and "La maréa was created as an invitation to pause." (guide p.5). The combination sentence from Part 1, in hand, blocked | None, type only on sand | N1, C8, C9, G6, B5 |
| 4 | Arrive, the Fleurieu Peninsula | The peninsula as a character for people who have never been. Where it is, how far from Adelaide, coast and vineyard in one place | `base: media-band` with parallax, plus `base: slide-in` for three short facts | Facts in hand: transfer from Adelaide Airport "typically 90 to 120 minutes" (live FAQ), McLaren Vale "40 minutes south of Adelaide city" (Vineyard Retreat site). Coast and vineyard towns named, Victor Harbor, Deep Creek, McLaren Vale (register R). Copy drafted, in hand, blocked | Still from DJI_0604.MP4 or Beresford Accom images (vineyard) paired with Naiko At The Bluff Content (coast), so the band is not all beach. Link to `/fleurieu-peninsula-retreats` | C6, A3, N3, O13, M5 |
| 5 | The Day | The flagship. Four panels arrive from the right, Arrive, Move, Nourish, Restore, and each panel's detail opens downward. Ends in the full day page and the funnel | T3, pinned 400 per cent above 900px, vertical stack below | Panel copy from the Encounter Bay arc, in hand (guide p.10, p.15, p.17, p.24). **Hour by hour grid needed from Belle** (Q2). Panel detail blocks drafted from sourced lines, in hand, blocked | Stills only at launch per the T3 verdict. Candidates: Beresford Accom images (Arrive), movement.mp4 poster frame (Move), Food folder 229A8255.jpg (Nourish), "Bath shot landscape.jpg" or Naiko At The Bluff Content deck shot (Restore). **Q10: no photograph exists of the three rotation stations running** | E1, E2, E3, E4, O6, O5, L2, C3, C4, A1, R cluster 5 |
| 6 | Move, Your retreat, your rhythm, your routine | The experiences section Belle calls missing. Fixed text pane on the left, ten experiences moving on the right, each with an image and a short explanation beneath | C6, `set: experiences` | Pane heading uses Belle's own wording idea "Your Retreat, Your Rhythm, Your Routine". **Conflict** D7 asks for "The Experiences", register V recommends against it, decision 26. Tile descriptions in hand for 7 of 10 (`research/06` mapping table). Pasta making, gut health and consultations **needed from Belle** (Q3, Q4, Q5). Durations **needed from Belle** (Q2) | **S2: 0 of 10 tiles have confirmed imagery.** Unviewed candidates: movement.mp4 (yoga, pilates), nutrition.mp4 (dining), Food folder 229A8255.jpg, "Copy of Say Cheese-Pasta Party-Arne Studio-103 3.JPG" (pasta, provenance unconfirmed). Every tile links to `/experiences/<slug>` | D1, D2, D3, D4, D5, D7, O1, O2, O3, O5, O8, M3, L2 |
| 7 | Nourish, The Table | The food philosophy in two lines and the two signature culinary experiences, each tile opening in place to reveal what it is | `base: text-pair` then C3, two tiles | Philosophy line in hand verbatim: "At La maréa, food is a central part of the experience." (guide p.12). Mediterranean dining tile in hand (p.13). Pasta making tile **needed from Belle** (Q3). Section title **decision 26**, "The Table" (lexicon) against Belle's H7 working title | Food folder 229A8255.jpg, 229A8436.CR2 (RAW, convert). Pasta party image, provenance unconfirmed. **Food photography is thin** (`assets-index/03` gap 7) | H1, H3, H4, H8, L4, O7, C5 |
| 8 | Restore, Places to Pause | The four partner venues as a clean index, coast or vineyard, sleeps count first, five star partner signal | C4, filter All, Coast, Vineyard | One line per venue drafted from venue facts, in hand, blocked. Capacities in hand except The Vineyard Retreat (**Conflict** Q6). Five star wording in hand, live accommodation page: "5 Star Unique Eco-friendly Coastal Luxury Accomodation" (typo in source) | Beresford Accom images, Naiko At The Bluff Content, NAIKO ACCOM. **The Vineyard Retreat has no imagery anywhere (S3).** **Naiko sets not split (S4).** Each card publishes only when `partner_approved` is true (open decision 8) | F1, F2, F4, F6, F7, F8, F3, C5, M5 |
| 9 | Restore, the unhurried afternoon | The six self-led activities as a slider, so the day reads as rest as well as program | T2, or C6 `set: self_led` | In hand verbatim, guide p.15: coastal hiking, infrared sauna, pool swimming, ocean swimming, journaling and reading, relaxing by the fire. **Conflict** infrared sauna also sits in section 6 (STATE-OF-PLAY blocker 12), decision 26 | DJI_0605.MP4 (ocean swimmer) as the one match. Everything else **needed from Belle** or the summer shoot (`assets-index/03` table) | D6, D5, C8 |
| 10 | Our difference | Belle's five differences, shown as five numbered moments that arrive one by one | `base: numbered-moments` with `base: slide-in` | In hand verbatim from the live home page, with two typos in point 2 ("upon on", "Mediteranean") fixed only with Belle's agreement (decision 21). The "South Australian first" line is **not** shown here, per register V (decision 2) | One supporting image per difference is a Jess recommendation, not required. Branding pillar videos poster frames: luxury.mp4, evidence.mp4, connection.mp4 | G8, G9 (overturned, carried), N1, N3, I8 |
| 11 | Proof | Testimonials with an image above and words beneath, weighted to private and corporate groups | T5, plus `base: proof-strip` above it (**Jess recommendation**, because a new business needs proof before the offer, I8) | One on-site testimonial in hand ("Megan", likely Meg Hansen on Google). Three Google reviews partly captured. **The other 15 Google reviews needed from Belle** as an export. **Corporate testimonials needed from Belle** with permission. Proof-strip facts in hand: 18 Google reviews at 5.0, four partner venues, named practitioners | "A Sunset Reset (May 2026 Joe's Henley)" images paired with that retreat's quotes, **guest consent needed** | I5, I6, I7, I8 |
| 12 | Customise your day | Three question circles that picture the funnel, one link into `/enquire` | T9 | Three questions **needed from Belle**, per the T9 spec. A candidate set drawn from her material: who the group is, what the day should do for them, when and where. In hand, blocked | None | A6, A5, A4, E4 |
| 13 | Rising Tides Collective and the app | Two panels side by side. The Collective, earned by attending. The app, coming 2027, with an interest field | `base: text-pair` twice, second with `base: lead-capture` | Collective sentence in hand verbatim, live retreats page: "A private space for those who've already experienced La maréa, through one of our retreats or experiences, and looking to stay close between them." Benefits in hand (K3 wording). App copy **needed from Belle** after the 21-09-2026 app call | Sunset Reset gallery image for the Collective. App visual **needed from Belle** | K1, K2, K3, K4, P5, P6 |
| 14 | From the journal | Three latest posts as full-bleed image cards with the title over the image | T8 cards, no filter | In hand, 4 migrated posts | Post hero images from the live blog, in hand | J1, J3, O14 |
| 15 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

**Media balance check, M5.** Beach and coast carry sections 2, 4 (half) and 9. Venues carry 8 and part of 4. Experiences carry 5, 6 and 7. The page is not weighted to beach, provided the section 6 imagery exists, which S2 says it does not yet.

**Conflicts carried on this page.** D7 against register V on the experiences heading. G9 overturned by register V. Infrared sauna in two sets. Q6 capacity. One autoplay loop against D5 video tiles.

---

## 4.2 Private groups, `/private-groups`

**Job.** Turn a gathering idea into a group enquiry. **Audience** private. **Keyword cluster** 6, private group wellness retreat. **Page shape** follows the competitor proposal's "same layout, different language" for the two paths (`research/01` addition 26), which Belle received and did not dispute.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | | `base: header` | In hand | | A8 |
| 2 | Hero, Meaningful gatherings | One image or one video and one line naming the path. H1 names the offer and the place in plain words | `base: media-band` | Hero line from lexicon item 21 "Meaningful gatherings" or 24 "Come Together", decision 26. H1 drafted, in hand, blocked | Sunset Reset (May 2026 Joe's Henley) group image, or a Naiko At The Bluff Content deck image. **Open decision 4** asks whether a hero is one impactful video. Recommendation: one video where graded footage allows | A8, C1, C2, N4 |
| 3 | Who it is for | The occasions, in Belle's own words | `base: text-pair` | In hand verbatim, live retreats page: "Birthdays, milestone celebrations, sister weekends, family resets or simply time with people who matter." Group size line **Conflict**: live page "Ideal for 6 to 10 guests, depending on property", guide p.24 "10 guests minimum". Decision 14 | None | A1, A8 |
| 4 | What the day feels like | The four beats of the day, told for friends and family, arriving one by one from the right | `base: numbered-moments` with `base: slide-in`, four items, links to the full day page | Drafted from guide p.17 arc, in hand, blocked. The existing weekend copy ("Sleep deepens. Meals stretch longer. Devices are put down.") describes a weekend, **Conflict** with A1's day retreat. Decision 13 | One still per beat, reuse home section 5 stills | C3, C4, E1, L2, C8 |
| 5 | Places to Pause for your group | Venues filtered to those that fit a private group | C4, prefiltered by capacity | In hand, blocked, same as home section 8 | Same as home section 8 | F2, F6, F7, F8 |
| 6 | Proof from private groups | Testimonials tagged private only, placed beside the ask (**Jess recommendation**, `research/01` addition 43, proof at the decision point) | T5, filtered `group_type: private` | Needed from Belle, tagged private group quotes and permission. Emma Knight Google review in hand, partial | Sunset Reset set | I5, I6, I7, I8 |
| 7 | The private group guide | Email for the guide download | `base: lead-capture` linking to `/guides/private-group-guide` | **Guide PDF needed from Belle** | Guide cover, needed | P7, P5, P6 |
| 8 | Questions private groups ask | Group-specific answers, open one at a time | C2 | In hand from the live FAQ: children under 16, solo travellers, fitness level, dietary. Transfers from Adelaide in hand | None | L3, N5 |
| 9 | Customise your day | Question circles, prefilled to private | T9 then `base: cta-band` to `/enquire?audience=private` | Questions needed from Belle (as home section 12) | None | A4, A5, A6, E4 |
| 10 | Footer | | `base: footer` | | | P6 |

**Media balance check, M5.** People and venue imagery lead. No section relies on beach drone footage.

---

## 4.3 Corporate, `/corporate`

**Job.** Let a decision-maker justify a team day and enquire. **Audience** corporate. **Keyword clusters** 1 and 2, the highest commercial intent on the site and absent from all three commercial probes today (register R).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | | `base: header` | In hand | | A8 |
| 2 | Hero, Space for transformation | One image or video, one line, H1 naming corporate wellness retreats in South Australia | `base: media-band` | Hero line lexicon item 20 "Space for Transformation" or item 9 "Tailored to the Occasion", decision 26. H1 drafted, in hand, blocked | Ray White corporate retreat Dropbox shoot is **in hand, blocked**: Dropbox inaccessible and client name unconfirmed (P12). Fallback Beresford Accom images | A8, A1, C1, C2, N4 |
| 3 | A strategic reset | The case for a team day in Belle's existing corporate copy | `base: text-pair` | In hand verbatim, live retreats page: "A strategic reset for leadership teams and high-performing professionals." and "Corporate retreats are designed for teams who understand that sustainable performance requires recovery, clarity and nervous system regulation, not just output." The Educate pillar and the sixth pillar word read naturally here (`research/05` 6.1) | None | A1, C8, C9, G10 |
| 4 | A designed day, not a venue hire | Why this is an operated day: the morning rotation, twelve guests in three groups of four, moving through massage, contrast therapy and a workshop | C3, three tiles, one per station | In hand, guide p.17. **Conflict** the live corporate copy describes "groups of up to 20", the guide sets 10 to 14 at Encounter Bay. Decision 14 | **Q10, no photography of the stations running.** Stills from Beresford Accom images as placeholders only | A1, N1, E1, D3, O7, R market gap |
| 5 | The day for teams | The four beats with corporate language, as a static sequence | `base: numbered-moments` with `base: slide-in` | Drafted from guide p.15 to p.17, in hand, blocked | Reuse home section 5 stills | C3, C4, E1, E2, L2 |
| 6 | Venues that fit your team | Venues ordered by capacity, largest first | C4 | In hand, blocked. Beresford 20+ **needed from Belle** as a firm day maximum (09 question 17) | Beresford Accom images, Naiko At The Bluff Content | F2, F6, F7, F8 |
| 7 | Teams we have hosted | A corporate case study that renders with or without a named client | T5 filtered `group_type: corporate`, plus a case study variant | **In hand, blocked, P12 and Q7.** Ray White Projects SA and YNG Adelaide both appear in the guide (p.26, p.27) with no body copy. Names, permission and quotes **needed from Belle**. Anonymised version ready if permission is refused | Ray White Dropbox folder, inaccessible. Guide case pages are image-only | I5, I7, I8, P12 |
| 8 | Practical answers for planners | Cost, capacity, distance, transport, dietary, without accommodation | C2, `topic: corporate` | In hand: transport from Adelaide included (guide p.23), retreat hours 8am to 4pm (p.24), dietary process (p.13). **Needed from Belle**: whether a day runs without accommodation, invoicing terms. Price answer depends on decision 4 | None | L3, N5, R |
| 9 | The corporate group guide | Email for the guide | `base: lead-capture` to `/guides/corporate-group-guide` | **Guide PDF needed from Belle** | Guide cover, needed | P7, P5, P6 |
| 10 | Plan your team's day | Question circles prefilled to corporate, then the funnel | T9, `base: cta-band` to `/enquire?audience=corporate` | Questions needed from Belle | None | A4, A5, A6, E4 |
| 11 | Fleurieu offsite link | One line into the offsite page | `base: cta-band`, secondary | Drafted, in hand, blocked | None | A8, N4, R cluster 2 |
| 12 | Footer | | `base: footer` | | | P6 |

**Media balance check, M5.** Venue and people imagery lead. The weakest point is section 4, which has no station photography.

---

## 4.4 Fleurieu offsite, `/corporate/fleurieu-offsite`

**Job.** Answer "what would we do for eight hours" for corporate offsite searches, cold from a link. **Ship** launch, lean. **Keyword cluster** 2.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | Context for a cold visit | `base: header` | In hand | | P8 |
| 2 | Hero | Vineyard or coast image, H1 on a corporate offsite on the Fleurieu | `base: media-band` | H1 drafted, in hand, blocked | Beresford Accom images, including the two McLaren Vale winery shots | A8, N4 |
| 3 | What is a Fleurieu offsite day | Answer in the first 40 to 60 words | `base: answer-block` | Drafted from guide p.17 and p.24, in hand, blocked | None | N5 |
| 4 | The day, hour by hour | A real table, because answer engines extract tables cleanly | `base: table` | **Needed from Belle, Q2.** Only 8am to 4pm, pick up 7am and drop off 5pm are sourced | None | E1, N5 |
| 5 | How far from Adelaide | Logistics for people who have never been | `base: answer-block` | In hand, live FAQ and Vineyard Retreat site | Map from T4, reused | A3, C6, N5 |
| 6 | Venues | | C4 | As corporate section 6 | As corporate section 6 | F2, F7 |
| 7 | Plan your team's day | | `base: cta-band` | In hand | | E4 |

---

## 4.5 The Day, formats, `/retreats`

**Job.** A simple menu of formats for visitors who want to browse. **Audience** both. **Keyword cluster** 3, with home.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | | `base: header` | | | A8 |
| 2 | Hero, The Day | One impactful video or image, not a multi-experience banner | `base: media-band` | Title "The Day" decided in register V. Intro in hand verbatim, live retreats page: "There are different seasons that call us to pause. Time with friends, time with family, time to reconnect as a team." | "retreat banner.mp4" candidate. **Open decision 4** | A7, C1 |
| 3 | The flagship | The 8 hour immersive retreat featured first and largest | `base: text-pair` with image, links to `/experiences/full-day-retreat` | In hand, guide p.17 | Reuse home section 5 still | A1, E1 |
| 4 | Choose your day, the formats menu | One card per format: name, duration, group size, one line, link into the right path. Onsen's card shape (`research/05` 3.2) | C3 tiles or `base: text-pair` grid, **Jess recommendation** C3 so detail opens in place | Format names and durations in hand, live retreats page: Full Day Retreats (8 hour), Half Day Retreats (5 hour), Wake Up To Wellness (3 hour), Sunset Reset (3 hour), Personalised Retreats. Bespoke Wellness Days copy in hand. **Which formats still sell, needed from Belle, decision 13.** Group size per format needed from Belle | Sunset Reset set for Sunset Reset. Others needed | A7, O7 |
| 5 | Dated retreats | Women's Wellness Weekend and Day, with waitlist, if they still sell | `base: text-pair` with `base: lead-capture` to `/waitlist` | In hand verbatim, live product pages and retreats page. Price shown today at $3,150 and $999 per person on Wix. **Decision 13 and decision 4** | Naiko imagery | A7, P13 |
| 6 | Price | Either a "from" figure or a line saying pricing is tailored on the call | `base: text-pair` | **Decision 4.** Register records "price held behind the discovery call" as decided, and `research/08` and `research/09` both argue for a from-price. $899 per guest is an introductory rate (guide p.24) | None | A1, N5 |
| 7 | Bespoke additions | The optional additions currently listed | C2 | In hand verbatim, live retreats page list of five additions. **Needed from Belle**: which still run | None | L3 |
| 8 | Customise your day | | T9, `base: cta-band` | Questions needed from Belle | | A5, A6, E4 |
| 9 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.6 Experiences index, `/experiences`

**Job.** The dedicated experiences section Belle names as the single biggest gap, as a full page. **Audience** both. **Keyword cluster** 8 in aggregate.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Hero | One full-bleed image or video of an experience running | `base: media-band` | Title **decision 26**. Kicker drafted, in hand, blocked | **S2, none confirmed.** Candidate movement.mp4 | D1, C1, C2 |
| 3 | Your retreat, your rhythm, your routine | All ten guided experiences, fixed pane left, flex row right, video on the active tile only | C6 `set: experiences` | As home section 6. Pane intro 30 to 45 words drafted from Bathhouse Albion's register ("Ten immersive spaces. Move through them at your own pace." is Albion's, not reused), in hand, blocked | As home section 6 | D1, D2, D3, D4, D5, D7, O1, O2, O3, O4, O5, O8 |
| 4 | The unhurried afternoon | The six self-led activities | C6 `set: self_led` | In hand, guide p.15 | DJI_0605.MP4 for ocean swimming. Rest needed | D6, D5 |
| 5 | How they come together | One short block linking the experiences to the full day and the morning rotation | `base: text-pair`, link to `/experiences/full-day-retreat` | In hand, guide p.15 framing sentence: "Your luxury retreat includes a curated day program designed around movement, recovery, nourishing food, nervous system support, nature immersion, education and connection." | None | E1, A1 |
| 6 | Who delivers them | Practitioners linked from each experience | C1, single mixed instance, **Jess recommendation**, because naming qualified people is the E-E-A-T evidence `research/08` asks for | Roster **decision 12**. Q9 headshots needed | Wellness Partners subfolder, unopened | I1, I2, I8, N5 |
| 7 | Plan your day | | `base: cta-band` | In hand | | E4 |
| 8 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.7 The 8 hour flagship, `/experiences/full-day-retreat`

**Job.** Show exactly what a full day, 8 hour immersive retreat looks like, then book the call to curate one. This is the strongest single page on the site for search (`research/08`, cluster 5) and the page Belle names as the focus (E1). **Budget** GSAP loads here.

```
 hero -> what is a full day retreat -> The Day (T3, four panels) -> hour by hour table
      -> the morning rotation (C5) -> what is included -> the unhurried afternoon
      -> where it can happen -> the Beresford reel -> price -> questions -> proof -> plan your day
```

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | | `base: header` | In hand | | P8 |
| 2 | Hero | One impactful video, H1 naming a full day wellness retreat near Adelaide | `base: media-band` | H1 drafted, in hand, blocked. Title line from the guide cover "Immersive 8 hr Wake Up To Wellness Private Group Retreat" is in hand but carries a format name, decision 13 | "retreat banner.mp4" candidate, ungraded | E1, C1, N4 |
| 3 | What is a full day wellness retreat | The answer in 40 to 60 words, for search and AI answers | `base: answer-block` | Drafted from guide p.15 and p.17, in hand, blocked | None | N5, R cluster 5 |
| 4 | The Day, Arrive. Move. Nourish. Restore. | The signature: four pinned panels arriving from the right with a rotated spine label, detail opening downward on the current panel, outgoing content cross-fading | T3 | Panel content mapped to the day in `research/09`: Arrive (pick up, welcome, exclusive use begins), Move (yoga or mat pilates, breathwork, meditation, nervous system regulation), Nourish (chef-led three course Mediterranean lunch at a shared table), Restore (massage and contrast therapy in the rotation, then the unstructured afternoon). In hand, blocked on Belle's sign-off. **`research/09` flags two restore beats that must stay apart**, carried into panel 4 detail blocks | Stills only at launch (T3 verdict). Beresford Accom images, Naiko At The Bluff Content, Food folder 229A8255.jpg, "Bath shot landscape.jpg". Video swapped in after the summer shoot (M6) | E1, E2, E3, E4, O6, O5, L2, C3, C4, M6 |
| 5 | The day, hour by hour | A real table | `base: table` | **Needed from Belle, Q2.** Sourced: pick up approx 7am, retreat 8am to 4pm, drop off 5pm (p.24). **Conflict**: `plan/10` schema example shows "8:30 Arrive", which is not sourced. Use the guide times | None | E1, N5 |
| 6 | The morning rotation | Three stations, four guests each, stepped with image and text together | C5, `section` instance | In hand, guide p.15 and p.17. Station length **needed from Belle** (09 question 3). Whether the workshop is the gut health workshop, **Q5** | **Q10, no station photography.** Placeholders only | D3, E1, O2, O5 |
| 7 | What is included | Numbered moments, not a bullet list of inclusions | `base: numbered-moments` | In hand verbatim, guide p.15 and p.16: sessions list, "Luxury wellness gift bag valued at over $50", "Take home educational resources", "Full-day exclusive hire", "Luxury private return group transport from Adelaide" (p.23). **Q18 needed from Belle**: whether La maréa brings mobile sauna and plunge equipment | None, or small detail stills | C3, E1 |
| 8 | The unhurried afternoon | Self-led activities | T2 | In hand, p.15 | DJI_0605.MP4 | D6, D5 |
| 9 | Where it can happen | The venues | C4 | As home section 8 | As home section 8 | F2, F7 |
| 10 | The day at Beresford Estate | Belle's existing reel showing the scheduling | `base: media-band`, video with controls, not autoplay | **In hand, blocked, Q1.** The Beresford 8 hour folder cannot be opened. The reel may sit in "Marketing - La maréa x Beresford", unopened | Reel, location unconfirmed | E5 |
| 11 | Price | From figure or "tailored on your call" | `base: text-pair`, `Product` and `Offer` schema only if a price is published | **Decision 4** | None | A1, N5 |
| 12 | Questions | Fitness, food, children, what to bring, weather | C2 | In hand, live FAQ answers (fitness, dietary, children under 16, packing, internet). Dietary handling in hand, guide p.13 | None | L3, N5 |
| 13 | Proof | Testimonials from full day retreats | T5 | Needed from Belle, tagged quotes | Sunset Reset set | I5, I7 |
| 14 | Plan your day | Question circles then the funnel, prefilled `format=full-day` | T9, `base: cta-band` | Questions needed from Belle | | E4, A5, A6 |
| 15 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.8 Experience detail template, `/experiences/<slug>`

**Job.** One addressable, citable page per experience, shareable from Instagram and ManyChat (P8, R cluster 8). Built once, filled ten times from the experiences collection.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | Context for a cold visit | `base: header` | In hand | | P8 |
| 2 | Hero | The experience running | `base: media-band` | Title from the collection | **S2 per experience**, see the instance table in Part 2 | D4, C2 |
| 3 | What is it | Answer in 40 to 60 words, for example "What is contrast therapy, and what does a session involve" (`research/08` question list) | `base: answer-block` | In hand for 7 of 10, blocked for pasta making, gut health and consultations (Q3, Q4, Q5) | None | N5, D4 |
| 4 | What happens in a session | Step through the session with image and text together | C5, **Jess recommendation** so detail pages share the venue gallery pattern | Session steps **needed from Belle**. Durations **needed from Belle** (Q2) | Per experience, mostly needed | D3, D4 |
| 5 | Who leads it | The practitioner card, opening to a bio | C1, single person | **Q9 and decision 12.** Jaimi Baker's roles differ between register Q and `research/09` (STATE-OF-PLAY blocker 12) | Portraits needed | I2, I3, N5 |
| 6 | Why it matters | Short evidence summary linking to the matching pillar page | C2, one to three items, link to `/philosophy/<pillar>` | References **needed from Belle**. Pillar mapping from `research/09` table, in hand, blocked on decision 1 | None | G5, G7 |
| 7 | Where it happens | Which venues offer it | C4, filtered | In hand, blocked, Q18 on sauna and plunge | As home section 8 | F2 |
| 8 | Questions | | C2 | Needed from Belle per experience | | L3, N5 |
| 9 | Plan your day | Prefilled with this experience | `base: cta-band` to `/enquire?experience=<slug>` | In hand | | E4, A6 |

**Conflict on this template.** Yoga and pilates run as one either-or session in the guide (p.15), so two pages may describe one session (STATE-OF-PLAY blocker 12). Decision 26 settles whether they merge.

---

## 4.9 Places to Pause index, `/places`

**Job.** A clean index of partner venues, split by coast and vineyard, each clicking through. **Audience** both. **Keyword clusters** 4 and 7 in support.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Hero, Places to Pause | One image of a partner venue, the name decided in register V | `base: media-band` | Intro in hand verbatim, live accommodation page: "We collaborate with a select collection of exceptional luxury South Australian properties, each chosen for privacy, architectural integrity and deep connection to landscape." Belle's wording idea "Places to Pause and Reconnect" in hand | Beresford Accom images drone shot, or Naiko At The Bluff Content exterior | F1, F8, C2 |
| 3 | Our partner venues | Venue cards, filter All, Coast, Vineyard, capacity first, read more with the underline sweep | C4 | One line per venue drafted from venue site facts, in hand, blocked. `research/09` recommends capacity leading the card because a corporate buyer asks first whether they fit | See the venue asset table in 4.10 | F2, F3, F4, F6, F7, F8, L5, O4 |
| 4 | Where they are | South Australia map with four pins, arrows stepping venue to venue, detail pane with name, region, sleeps, one image, link | T4 | Coordinates in hand from venue addresses (28 Jagger Rd Encounter Bay, 333 Rarkang Road Deep Creek). Beresford publishes no street address, **needed from Belle or the venue**. Vineyard Retreat "40 minutes south of Adelaide" in hand | CC0 South Australia outline (freesvg.org, `plan/10` section 5). One still per venue | F9, C6, A3 |
| 5 | Five star partners | Why these venues, and that Belle is open to others | `base: text-pair` | In hand verbatim, live accommodation page: "La maréa retreats are intentionally limited and venue selection is highly considered." and the "open to collaborating" lines | None | F8, F3 |
| 6 | Plan your day at a venue | | `base: cta-band` | In hand | | E4 |
| 7 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.10 Venue detail template, `/places/<slug>`

**Job.** Show a venue so a guest understands whether it is coast or vineyard, what it includes and what surrounds it (F10). Built once, four instances at launch, a fifth is data entry (F3). No venue publishes while `partner_approved` is false (open decision 8).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | | `base: header` | In hand | | P8 |
| 2 | Hero | The venue's defining image or footage. For Naiko Deep Creek, the bath shot | `base: media-band` | Venue name, region, sleeps | Per venue, table below. Bath shot M2 **in hand, blocked, S4**: "Bath shot landscape.jpg", "Woman in bath.jpeg", "Woman in bath1.jpeg" are not confirmed as Deep Creek | M2, F10, C2 |
| 3 | The venue at a glance | Region tag, sleeps, day retreat capacity, location label, distance from Adelaide, five star partner | `base: text-pair` | Per venue, table below | None | F7, F8, F10 |
| 4 | About the place | Venue framing in two or three paragraphs, practical constraint last (Basq House copy pattern) | `base: text-pair` | Encounter Bay in hand verbatim, guide p.7. Others drafted from venue site facts, in hand, blocked | None | F10 |
| 5 | Within the venue | Image with information on the left, arrows stepping through the rooms, pool, deck, bath, with counter and progress rule | C5 | Room and amenity names from venue sites, in hand, blocked | Per venue, table below | F5, F10, O2, O5, O8 |
| 6 | What is around it | Walking trails, beach, conservation parks, cellar doors | `base: media-band` with `base: slide-in` | Deep Creek in hand from venue site: between Talisker and Deep Creek Conservation Parks, private beach, exclusive walking trails. Encounter Bay in hand: working sheep farm, views of The Bluff, coastal walk at the bottom of the property (guide p.7 caption). Vineyard venues **needed from Belle** | Coast venues: DJI_20251109100906_0030_D.MP4 (Naiko Deep Creek folder). Nature footage M4 **not found, S5** | F10, C6, M4, M5 |
| 7 | A day here | The day at this venue, if it differs | C2, or a link to the full day page | Encounter Bay in hand, the guide. Beresford **blocked, Q1**. Deep Creek **needed from Belle**, it sleeps 6 against a 10 guest minimum (09 question 19). Vineyard Retreat needed | Beresford reel, blocked Q1 | E1, E5 |
| 8 | Where it is | Mini map with this venue's pin | T4, single location | Coordinates per venue | SVG | F9 |
| 9 | Proof from this venue | Testimonial from a retreat held here | T5, filtered by venue | Needed from Belle | Per venue | I5, I7 |
| 10 | Plan your day here | Prefilled with the venue | `base: cta-band` to `/enquire?venue=<slug>` | In hand | | E4, F6 |
| 11 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

### Per venue content and assets

| Venue | Capacity | Copy source | Photography | Video | Blockers |
|---|---|---|---|---|---|
| Naiko Deep Creek | Sleeps 6 (Belle and venue agree) | Venue site facts, in hand. Live accommodation page "primary partner" copy in hand verbatim, including the Ramindjeri meaning of "Naiko" and the bushfire restoration note, which is time-sensitive and **needs Belle to confirm it is still true** | NAIKO ACCOM (22 files) or Naiko At The Bluff Content (16 files), not split. Bath shot candidates | DJI_20251109100906_0030_D.MP4, the only file in the Naiko deep creek subfolder. "Copy of naiko_web_banner_-_4k (2160p).mp4", property unconfirmed | S4, permission, day format undefined at 6 guests. **Jess note**: the helicopter landing area is the strongest luxury detail across all four venues and is used nowhere today (`research/09`) |
| Naiko Encounter Bay | Sleeps 10. Day retreat 10 to 14 | Guide p.7 and p.11 in hand verbatim, one marked omission. Venue site facts in hand | Same two unsplit Naiko folders | Naiko banner, property unconfirmed | S4, permission. Venue name on the site is Naiko at the Bluff, decision on which name to publish |
| Beresford Estate | 20+ per Belle, no public group total | Venue site facts in hand. Live accommodation page line in hand. Retreat content **blocked, Q1** | Beresford Accom images, 9 professional files. Beresford Dropbox professional photos, inaccessible | Reel, blocked Q1 | Q1, permission, firm day maximum |
| The Vineyard Retreat | **Conflict Q6**: Belle 10, venue 16 | Venue site facts in hand. Not on the live La maréa site at all | **None anywhere, S3** | None | S3, Q6, permission. Belle confirms the partnership is ready to publish |

---

## 4.11 The Fleurieu, `/fleurieu-peninsula-retreats`

**Job.** Sell the peninsula as a wellness destination to people who have never been, and own the location searches (C6, A3, R cluster 4).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | | `base: header` | | | P8 |
| 2 | Hero | The coast from above, slowed | T1, second instance, **Jess recommendation**, because this page's job is the same feeling as the home hero. Or `base: media-band` if page weight requires | H1 on Fleurieu Peninsula wellness retreats, drafted, in hand, blocked | DJI_0781.MP4 or DJI_0604.MP4, whichever the home hero does not use | C6, C1, L1, L6, M1 |
| 3 | Where is the Fleurieu Peninsula | Answer block for people who do not know the word Fleurieu | `base: answer-block` | Facts in hand: south of Adelaide, 90 to 120 minutes from Adelaide Airport (live FAQ), McLaren Vale 40 minutes from the city. Towns named: Victor Harbor, Encounter Bay, Deep Creek, McLaren Vale (register R) | None | A3, C6, N5 |
| 4 | Coast and vineyard | The two settings on one map | T4 | As `/places` section 4 | SVG | F9, F6 |
| 5 | The wild side | Dolphins, seals, kangaroos, the ocean and hiking, iPhone quality in small frames | T2, image and video tiles, small format only (grade C footage rule, `plan/10`) | Captions **needed from Belle** | **M4 footage not found, S5.** Likely in Dropbox. "Copy of IMG_6075.MOV" is iPhone footage, content unviewed | M4, M5, C6 |
| 6 | Best time to come | Seasonal answer for planners | `base: answer-block` | **Needed from Belle** (`research/08` question list) | None | N5 |
| 7 | Belle's Fleurieu | Short founder line connecting her childhood on the peninsula to La maréa | `base: text-pair`, link to `/our-story` | In hand verbatim, live Our Story: McLaren Vale, Moana Beach, Myponga Beach lines | None | C6, N3, I8 |
| 8 | Local producers and partners | South Australian companies tied into the retreat | `base: text-pair` with a name list | Two producers in hand (Peninsula Providore, La Vera), not verified as Fleurieu based. More **needed from Belle** (H6) | None | N3, H6 |
| 9 | Places and experiences | Links onward | C4 then `base: cta-band` | In hand | | F2, D1, E4 |
| 10 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.12 Philosophy, `/philosophy`

**Job.** Present the pillars as La maréa's core difference, bigger and more luxurious than today, with less wording on the surface and the science one click away (G1, G4, G7). The current page has no H1, six described pillars, ten named ones and no video.

**The pillar set is the gating decision for this page (decision 1).** One finding changes the trade-off: the 13 branding pillar videos (balance, connection, evidence, luxury, movement, nature, nutrition, personalisation, psychological, sleep, plus a compilation and a home page cut) match the **ten** "Science" pillars on the live site, not Belle's eight words. G2 asks for a video per pillar. The eight words have definitions and no video. The ten have videos and no definitions.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Hero | The pillar compilation as one slow video, pillars popping up as the visitor arrives | `base: media-band`, video | Title line option from Belle's wording ideas, "Restore. Reconnect. Realign.", in hand. H1 needed (the live page has none) | "MAIN COMPILATION.mp4" in Branding pillar videos, ungraded | G1, G2, C1, N4 |
| 3 | The name | La marea, Spanish for the tide, ebbs and flows, stillness and movement | `base: text-pair` | In hand verbatim, brain dump wording ideas paragraph beginning "Inspired by the Mediterranean, La Maréa stems from the Spanish phrase 'la marea'". **Spelling inside it differs from the canonical "La maréa"**, Belle confirms | None, or a slow water still | G11 |
| 4 | Mediterranean inspired, science backed, rooted in the Fleurieu | The three claims in one block, tying the philosophy back to South Australia for interstate visitors | `base: text-pair` with `base: slide-in` | In hand verbatim, live philosophy page: "Our bespoke lifestyle retreats are grounded in science and inspired by years of research and hands-on practice working in evidence-based wellness and high performance sport." Fleurieu line from the live Our Story, in hand | Coast still, DJI_0604.MP4 poster frame | G6, N3, A3 |
| 5 | Guiding principles, the pillars | Pillars in a fixed pane with the active pillar's video opening wide and the others as narrow slivers, a short definition beneath and a discover more link. COMO's transition from one to the next | C6 instance, `set: pillars`, built on T10 | Eight definitions in hand verbatim (G10, brain dump). Ten names in hand without definitions. Six descriptions in hand (live page). **Blocked on decision 1.** Heading "Guiding Principles" from lexicon item 17 | Branding pillar videos for the ten. **No video for the eight words** (`assets-index/03`). Duplicate "movement.mp4" and "Movement.mp4" resolved before use | G1, G2, G3, G4, G10, O1, O5, M3 |
| 6 | Where each pillar lives in the day | Shows the philosophy and the product are the same thing: each pillar mapped to a moment in the 8 hour day | C2, one item per pillar | In hand, `research/09` mapping table for the eight words (sourced page references). Blocked on decision 1 | None | G1, E1, C3 |
| 7 | The science | How evidence shapes the retreats, minimal, with each pillar linking to its own page | `base: text-pair` then link list to `/philosophy/<pillar>` | Intro in hand verbatim, live philosophy page: "We've curated 10 key pillars that guide every retreat, drawing from longevity research, the Blue Zones, and the Mediterranean way of life." (wording changes if eight are chosen). Evidence per pillar **needed from Belle** | None | G5, G7 |
| 8 | Plan your day | | `base: cta-band` | In hand | | E4 |
| 9 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

**Conflict on this page.** G1 and G10 cannot both hold while three pillar sets are live (register T). Carried to decision 1.

---

## 4.13 Pillar detail template, `/philosophy/<pillar>`

**Job.** Link each pillar to its evidence and references in a minimal, clean way (G5). Built once, one instance per pillar.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | | `base: header` | | | P8 |
| 2 | Pillar hero | The pillar's video | `base: media-band` | Pillar name | Matching branding pillar video where one exists (decision 1) | G2, M3 |
| 3 | The pillar | Word and definition, large, very little else | `base: text-pair` | In hand for the eight words (G10). Needed for the ten if chosen | None | G10, G4 |
| 4 | On a retreat | The moment in the day that carries it, and links to those experiences | `base: text-pair` with experience links | In hand, `research/09` mapping, blocked on decision 1 | Experience stills where they exist | E1, D3 |
| 5 | The evidence | Three to five short claims, each opening to its explanation | C2 | **Needed from Belle.** The one in-hand exemplar is the sleep article on the live blog, with a full reference list (Restore) | None | G5, G7, L3 |
| 6 | References | A plain, minimal reference list | `base: text-pair`, small type | **Needed from Belle** per pillar. Sleep article references in hand | None | G5 |
| 7 | Read more in the journal | Posts tagged with this pillar | T8 cards | In hand for Restore (sleep post). Others grow over time | Post images | J2, J3 |
| 8 | Plan your day | | `base: cta-band` | In hand | | E4 |

---

## 4.14 The Table, food and signature culinary experiences, `/food`

**Job.** Show the Mediterranean and plant based food philosophy, walk the guest through the food across a day, and present the two signature culinary experiences (H1 to H4).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Hero | A chef-led table, fine dining detail | `base: media-band` | Title **decision 26**: "The Table" (lexicon item 15) or Belle's H7 working title about the flavours of the Fleurieu. H1 drafted | Food folder 229A8255.jpg, or 229A8436.CR2 converted. nutrition.mp4 poster. **Thin** | H1, H7, H8, C1 |
| 3 | Eat well, be well | The food philosophy, structured the way COMO structures theirs: a named philosophy, the rules of how food is made, the people behind it. COMO's words are not used | `base: text-pair` then `base: numbered-moments` | In hand verbatim, guide p.12: "At La maréa, food is a central part of the experience. It is designed to be nourishing, Mediterranean-inspired, and practical, with a touch of chef-led luxury." plus the four "what to expect" lines. Live blog intro on the Mediterranean dietary pattern in hand | None | H1, H8, G6 |
| 4 | The day at the table | Breakfast, refreshments, lunch, dinner, dessert, stepped with image and text together | C5, `section: food-day` | Breakfast in hand ("Nourishing wholefood seasonal organic breakfast", p.12, sample elements p.12). Refreshments in hand (p.12, p.13 beverages). Lunch in hand (p.13). **Dinner and dessert needed from Belle, Q8.** **Conflict**: the day retreat has no dinner. The step list follows Belle's answer to 09 question 9 | Food folder stills, thin. **Summer shoot: breakfast, dessert, shared table** | H2, H7, O2, O5 |
| 5 | Fine dining and the shared table | Two sides of the same meal: chef-led plates and a long table for connection and team bonding | `base: text-pair` with two images, art-directed split | In hand verbatim, guide p.12: "Shared dining that encourages connection and unhurried conversation" | Food folder, pasta party image (provenance unconfirmed). Needed | H3, O8 |
| 6 | Signature culinary experiences | The two named experiences, each tile opening in place | C3, two tiles, linking to `/experiences/mediterranean-table` and `/experiences/pasta-making` | Title in hand, Belle's words (H4). Mediterranean dining in hand (p.13). **Pasta making masterclass needed from Belle (Q3)**, including who runs it (Malissa Fedele and Luca Guiotto both list pasta classes on the live site) | "Copy of Say Cheese-Pasta Party-Arne Studio-103 3.JPG", rights unconfirmed | H4, L4, O7 |
| 7 | An example menu | Entrée, mid-course, main and sides, each course opening to its dishes | C2 | In hand verbatim, guide p.14, nine dishes. **Decision 8** (register open decision 3) on whether menus go public. `public` flag in the menus collection keeps it switchable | None | H5, L3 |
| 8 | Local producers | Named South Australian producers behind the food | `base: text-pair` with a name list | In hand: Peninsula Providore (olives), La Vera (mozzarella), both from the menu. Latosca and Garden Fresh named in the live gnocchi recipe. **None verified as Fleurieu based.** More names **needed from Belle** (09 question 10) | Producer imagery needed | H6, N3 |
| 9 | The chef | Luca Guiotto, and any other food and hospitality team | C1, food and hospitality instance, filtered | Luca in hand: guide p.21 and the live bio with awards. Headshot **needed, Q9** | Food & Beverage Partners subfolder, unopened | I1, I2 |
| 10 | Dietary needs | How requirements are handled | C2 | In hand verbatim, guide p.13 and live FAQ | None | L3, N5 |
| 11 | Recipes from the journal | Recipe posts | T8 cards filtered to recipes | In hand, three migrated recipes | Post images | J2, J3 |
| 12 | Plan your day | | `base: cta-band` | In hand | | E4 |
| 13 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.15 Team, `/team`

**Job.** Show the people behind the retreats, wellness practitioners and the food and hospitality team separately, each with a large portrait, qualifications and a bio (I1, I2). Not The Tailor's layout (I4).

**The roster is a decision (12).** The live site lists seven partners: Sarah McLachlan, Kristian Ryan, Jaimi Baker, Natalie Jane, Malissa Fedele, Luca Guiotto, Courtney Selfe. The Encounter Bay guide names Belle Redden, Zoe Buttery, Jaimi Baker, Courtney Selfe and Luca Guiotto. Q9 asks for Courtney, Jaimi and Luca at minimum.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Hero and intro | That a qualified team curates every retreat | `base: media-band` then `base: text-pair` | In hand verbatim, guide p.19: "La maréa is a family run business with a small team who prioritise calm, genuine hospitality." (the word "genuine" is Belle's source copy). Live Our Story mission line in hand | Sunset Reset set, team at work | I1, I8 |
| 3 | Your hosts | Belle and Zoe, as founder and events lead | C1, hosts instance, or `base: text-pair` pair | In hand verbatim, guide p.19 and p.20 descriptions. Portraits **needed from Belle**. The live Our Story also names "Sarah" as a host, a different Sarah from Sarah McLachlan, decision 12 | Portraits needed | I1, I2 |
| 4 | Wellness practitioners | Portrait growing as it becomes active, name, credentials, bio opening in place, arrows with a pill progress indicator | C1, `team: wellness` | In hand from the live bio pages: qualifications and services for Jaimi Baker, Kristian Ryan, Natalie Jane, Sarah McLachlan, Courtney Selfe. Guide descriptions for Jaimi and Courtney in hand. **Roster and current accuracy needed from Belle**. **Jaimi Baker's roles differ between sources** | Wellness Partners subfolder, unopened. **Headshots needed, Q9** | I1, I2, I3, I4, O2, O7 |
| 5 | Food and hospitality | Same component, second instance | C1, `team: food_hospitality` | In hand from the live bio pages: Luca Guiotto (awards list), Malissa Fedele (credentials and services). **Roster needed from Belle** | Food & Beverage Partners subfolder, unopened. Headshots needed | I1, I2, I3 |
| 6 | Qualified, named, local | One line on why named practitioners matter for a health-adjacent business, and the `Person` schema behind each card | `base: text-pair` | Drafted from the live difference 3, "Run by qualified health professionals & experts in their chosen field", in hand | None | I8, N5, G8 |
| 7 | Partner with us | The live page's call for local practitioners and producers | `base: text-pair` with a mailto link | In hand verbatim, live partners page. **Decision 28** on whether it stays. **Jess recommendation**: a single line and an email link, not the live form | None | N3 |
| 8 | Plan your day | | `base: cta-band` | In hand | | E4 |
| 9 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.16 Team member template, `/team/<slug>`

**Job.** A proper person page per practitioner, generated from the collection, replacing seven hand-built pages (P13) and giving answer engines named credentials (N5).

**Conflict.** `plan/10` redirects the seven old pages to anchors on `/team`. `research/08` says to rebuild them as `Person` pages, and register T notes the bio pages carry the most inbound value. This plan builds the pages because the collection makes them free, and keeps the anchors as a fallback if Belle wants fewer URLs.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | | `base: header` | | | P8 |
| 2 | Portrait and name | Large portrait, name, one-line role, business | `base: text-pair`, one third image | In hand for live roster names and roles | **Portrait needed, Q9** | I2 |
| 3 | Qualifications | Credentials as a short list | `base: text-pair` | In hand from live bio pages for seven people | None | I2, N5 |
| 4 | About | Bio | `base: text-pair` | In hand from live bio pages, needs Belle's check for currency | None | I2 |
| 5 | What they lead on a retreat | Linked experiences | Experience links | In hand, blocked on roster and role conflicts | Experience stills | D3, I3 |
| 6 | Plan your day | | `base: cta-band` | In hand | | E4 |

---

## 4.17 Our story, `/our-story`

**Job.** The founder story, the family business, and how La maréa works on the Fleurieu. **No register ID asks for this page directly.** It exists on the live site, it is the right home for three requirements that need one (G9's first-person note, G11, N2), and it carries trust for a new business (I8).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Hero | Belle on the Fleurieu coast | `base: media-band` | Pull line in hand verbatim, live Our Story: "Inspired by the elements of a Mediterranean lifestyle; plant based nourishment, connection, community & longevity" | Portrait of Belle **needed** | I8 |
| 3 | An invitation to pause | Belle's welcome note | `base: text-pair` | In hand verbatim, guide p.5, four paragraphs. `research/09` calls it website-ready | None | C9, C8, I8 |
| 4 | Growing up on the Fleurieu | Belle's story | `base: text-pair` with `base: slide-in` images | In hand verbatim, live Our Story, long. Belle has given permission to cut wording (`research/01` addition 50). The stray "born." line and blank spacer lines are removed | Family or childhood imagery **needed from Belle** | C6, N3, I8 |
| 5 | The name | La marea, the tide | `base: text-pair` | In hand, same source as philosophy section 3. Shown once only if philosophy carries it, **Jess recommendation** to keep it on philosophy and link here | None | G11 |
| 6 | Where it started | Any first-mover sentiment, told in the first person as Belle's experience, never as a market claim | `base: text-pair` | **Needed from Belle**, in her words. Register V places the sentiment here in place of G9's claim | None | G9, carried |
| 7 | Family owned | Hosts and family | `base: text-pair` | In hand verbatim, live difference 5 and the hosts paragraph | Hosts photo from live site, **in hand, blocked** (file not in the inventory) | I8, G8 |
| 8 | How we work on the Fleurieu | Belle's own practices against the four True South pillars, stated as intent, never as accreditation, no SATC logo | `base: text-pair`, four short items | **Needed from Belle** in her own words (register R). Travel for Nature is one concrete option to name if she joins (decision 23) | None | N2, N3 |
| 9 | Plan your day | | `base: cta-band` | In hand | | E4 |
| 10 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.18 Wellness journal index, `/journal`

**Job.** Turn the research and recipes section into an editorial, image-led wellness journal Belle adds to herself (J1, J2), built with filters from the start because content will keep growing (L5).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Journal heading | Eyebrow and a short serif heading, no hero video (0 autoplay loops on this page, `plan/10`) | `base: text-pair` | Title "Wellness journal" is Belle's wording (J1). Intro in hand verbatim, live blog: "Food and nutrition are integral to our philosophy." | None | J1 |
| 3 | Filters | All plus Belle's categories, as toggle buttons | T8 filter row, toggle buttons with `aria-pressed` per `research/06` decision 2 | **Category names needed from Belle.** `plan/10` proposes research, recipes, travel, tips. The live site has one category, "Sleep & Recovery", with no posts. The Tailor's real labels are All, Have you ever, Tips and tricks, Top picks, Travel guides (Belle remembered "tips and trips") | None | J4, L5 |
| 4 | Featured post | The newest or pinned post, full-bleed image, title over the image | T8 card, large | In hand, migrated sleep article | Live blog hero image | O14, J3 |
| 5 | All posts | Portrait cards three across on desktop, one on phones, title over the image, category badge, date. Smaller than COMO's near full-width slides, which Belle said she does not love the size of | T8 cards | In hand, 4 migrated posts. New posts added by Belle in `/admin` | Live blog images | J3, J5, O14, J2 |
| 6 | Newsletter | Journal updates by email | `base: lead-capture` | Klaviyo list **needed from Belle** | None | P6, P5 |
| 7 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.19 Journal post template, `/journal/<slug>`

**Job.** Full post for research, blogs and recipes, readable, citable and editable by Belle.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header and breadcrumb | | `base: header` | | | P8 |
| 2 | Hero | Full-bleed image with the title over it | T8 card treatment at hero scale | Per post | Per post | O14, J3 |
| 3 | Post details | Category, date, read time, author linked to their team page | `base: text-pair`, small type | Per post. Author for migrated posts in hand: "Annabelle Redden", with the live author bio | None | N5, I2 |
| 4 | Body | Long-form text, or for recipes: servings, prep and cook time, ingredients, method, nutrition panel where present | Markdown body, `Recipe` or `Article` schema | In hand for 4 posts, full text captured in the audit crawl | Inline images per post | J2 |
| 5 | References | Academic references for research posts | `base: text-pair`, small type | In hand for the sleep article | None | G5 |
| 6 | Related posts | Three related posts with arrows, COMO's arrow control at a smaller card size | T8 cards with arrows | Generated from category | Post images | J5, J3 |
| 7 | Guide or plan your day | One lead magnet or the funnel, chosen per post in the CMS | `base: lead-capture` or `base: cta-band` | Per post | None | P7, E4 |
| 8 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.20 Gallery, `/gallery`

**Job.** An explorable gallery of past retreats to build credibility and trust (I9). **Ship** launch, lean.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Gallery heading | One line, no hero video | `base: text-pair` | Drafted, in hand, blocked | None | I9 |
| 3 | Filters | By retreat, venue or year | Toggle buttons, as T8 filter row | Retreat names and dates **needed from Belle** beyond Sunset Reset May 2026 | None | L5, I9 |
| 4 | Past retreats | Image tiles, each opening in place to a caption about that retreat, without leaving the page | C3, grid | Captions **needed from Belle** | "A Sunset Reset (May 2026 Joe's Henley)", 223 JPEGs plus VIDS subfolder, in hand, blocked: needs a cull and **written consent from guests who appear** (health-adjacent business, Privacy Act position in register W). The live retreat cards also name Beresford Estate Women's retreat, Ray White Projects SA group, private group of professionals (live home page) | I9, O7, I8 |
| 5 | Plan your day | | `base: cta-band` | In hand | | E4 |
| 6 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.21 Rising Tides Collective, `/rising-tides-collective`

**Job.** Give the Collective a presence for the first time, show what members get, and make clear the only way in is attending a retreat (K3, K4). The live site has one unlabelled sentence and a blank Wix members page.

**Architecture decision carried.** Supabase owns guest records. A `guests` table with `collective_member` and `joined_at` is populated from every retreat from launch, so the member list exists before any login does. The login itself is a 2027 seam on the site with Supabase Auth, not in this build (register W, `plan/10` section 8). Belle has not yet chosen between a site login and an app-only community (K5), so the page is written to work either way.

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Hero | Past guests together at a retreat | `base: media-band` | Name in hand, "The Rising Tides Collective" | Sunset Reset set, **guest consent needed** | K3 |
| 3 | What it is | A private space for people who have already been | `base: text-pair` | In hand verbatim, live retreats page: "A private space for those who've already experienced La maréa, through one of our retreats or experiences, and looking to stay close between them." | None | K3 |
| 4 | What members receive | First release retreats, recipes, resources | `base: numbered-moments`, three items | In hand as a list from Belle's words (K3). One sentence per item **needed from Belle** | None | K3 |
| 5 | How you join | Entry is earned by attending a retreat, it cannot be bought or chosen | `base: text-pair` | In hand from Belle's words (K4). Wording drafted, in hand, blocked | None | K4 |
| 6 | Already a member | Where members go today, and that member access opens in 2027 | `base: text-pair` with a link to `/app` | **Decision 5 and K6.** Wording depends on the 21-09-2026 app call | None | K5, K6, P9 |
| 7 | The only way in | Route to a retreat | `base: cta-band` to `/enquire` | In hand | | E4, K4 |
| 8 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.22 La maréa app, coming 2027, `/app`

**Job.** Start building anticipation and flag foundational subscriptions (K1, K2), and turn interest into a list rather than a dead end (`plan/10` section 8). **Jess recommendation** that this is its own page as well as a home section, because ManyChat and Instagram need a URL to send people to (P8).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | Two paths, persistent Plan your day | `base: header` | In hand, see Part 3 | Logo, needed from Belle | A8, O4 |
| 2 | Coming 2027 | The announcement | `base: media-band` | "Coming 2027" and "the La maréa app" in hand, Belle's words (K1) | App visual **needed from Belle** | K1 |
| 3 | What it will hold | The planned content | `base: text-pair` | **Needed from Belle**, after the 21-09-2026 app call | None | K1, K6 |
| 4 | Foundational subscriptions | That early subscriptions exist, without prices | `base: text-pair` | **Needed from Belle** (K2) | None | K2 |
| 5 | Register your interest | Email, separate consent, writes `subscription_interest` to Supabase with source, syncs to a Klaviyo list | `base: lead-capture` | Klaviyo list **needed from Belle** | None | K2, P5, P6 |
| 6 | For past guests | Link to the Collective | `base: cta-band` | In hand | | K3 |
| 7 | Footer | Newsletter, contact, True South line, full navigation | `base: footer` | See Part 3 | None | P6, N2 |

---

## 4.23 Enquire, `/enquire`, and enquiry complete, `/enquire/thank-you`

Full question-by-question specification is Part 5. The page sections are:

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Minimal header | Logo and a quiet exit link only, so the funnel has no competing paths. **Jess recommendation**, the conventional pattern for a form that carries the primary conversion | `base: header`, reduced | In hand | | A5 |
| 2 | Plan your day | One line on what happens next, and that it takes a couple of minutes | `base: text-pair` | Expectation line from lexicon item 29, "Our team will reach out to finalise the details", in hand, localised. Response time **needed from Belle** | None | A5, A6 |
| 3 | The stepped questions | One question per screen, progress shown, answers saved on each step | `base: form-step` | Part 5. Question wording in hand, blocked, on Belle's approval | None | A4, A5, A6, A8, P5 |
| 4 | Beside the form | One testimonial from the visitor's own path, and a human channel: Belle's email and phone | T5, single, filtered by `audience` | Testimonial needed from Belle, tagged. Contact in hand | One image | I7, I8 |
| 5 | Collection notice | What is collected, why, where it is stored, link to the privacy policy | `base: text-pair`, small | Drafted week two from `plan/10` section 6 | None | O15, P4 |
| 6 | Enquiry complete (`/enquire/thank-you`) | Thanks by name, answers summarised, the discovery call booking link as the main action, the matching guide as a second action | `base: text-pair`, `base: cta-band` | Booking link in hand: https://calendar.app.google/jiKYpzKFiG5XZV9x9. Guide PDFs needed | Belle's portrait, needed | E4, A1, A2, P7 |

---

## 4.24 Guide download template, `/guides/<slug>`

**Job.** A gated guide page that works cold from a ManyChat link and records the lead (P7, P8).

| # | Section | What it does | Component | Content and status | Assets | Register |
|---|---|---|---|---|---|---|
| 1 | Header | | `base: header` | | | P8 |
| 2 | The guide | Cover, title, three lines on what is inside | `base: text-pair` | **Needed from Belle**, both guides | Cover image needed | P7 |
| 3 | Get the guide | Email, separate marketing consent, Turnstile. Writes `downloads` with lead source and UTM, syncs to Klaviyo if consented, then delivers the file on the page and by email. The PDF is never linked publicly | `base: lead-capture` | In hand as a mechanism. PDF needed | None | P7, P5, P6, P8 |
| 4 | Where to next | The matching path page and Plan your day | `base: cta-band` | In hand | | A8, E4 |

---

## 4.25 Supporting pages

| Page | Sections in order | Components | Content and status | Register |
|---|---|---|---|---|
| `/waitlist` | Header. Heading. Choose a waitlist: Sunset Reset, 2026 retreats, Women's Wellness Weekend (only those Belle keeps). Email and consent. Footer | `base: text-pair`, `base: lead-capture` with a waitlist choice | Waitlist copy in hand verbatim, live home and retreats pages. Which waitlists stay, **decision 22**. **Conflict** with `plan/10` redirecting `/waitlist` to `/enquire`: a waitlist join is not an enquiry and should not start the funnel | P13, P5, P6 |
| `/faqs` | Header. Heading. Groups: booking, corporate, dietary, venues, what to bring, transfers. Each question opens in place. Plan your day. Footer | C2 per group, `FAQPage` schema | In hand verbatim: the live FAQ page's answers, including the long airport transfer answer. The live answer on solo travellers ("pairs") and the Afterpay answer need Belle to confirm they still hold. New questions from `research/08` **needed from Belle** | L3, N4, N5 |
| `/gift-cards` | Header. Holding line and contact email for existing gift card holders. Footer | `base: text-pair` | In hand verbatim, live gift card terms. **Decision 16**: how sold Wix gift cards are honoured and whether new ones sell | P13 |
| `/privacy-policy` | Header. The APP 1 policy: what is collected, why, processors (Supabase, Cloudflare, Cloudflare Stream, Klaviyo), cross-border disclosure, retention, access and correction, health information, automated decision-making statement if any. Footer | `base: text-pair` | Drafted week two from `plan/10` section 6. The live policy headings in hand as a base. Belle confirms her Privacy Act position with her adviser | O15, P4 |
| `/terms` | Header. Booking, cancellation and credit terms. Footer | `base: text-pair` | Cancellation and credit wording in hand verbatim, live FAQ. Full terms **needed from Belle**. **Jess recommendation**, because the live FAQ links to terms that have no page | P13 |
| `/questionnaire/<token>` | Minimal header. Booking reference. Dietary requirements. Injuries and medical notes. Waiver with version. Separate health consent tick with its own label. Submit. Noindex | `base: form-step` | Field list from `plan/10` questionnaires table. Current Jotform questions and waiver text **needed from Belle** | P4, O15 |
| `/admin` | Sveltia CMS | Sveltia | In hand as a decision | P1, P2 |
| `/404` | Header. One line. Three paths: Private groups, Corporate, Plan your day. Footer | `base: text-pair`, `base: cta-band` | Drafted, in hand, blocked | P13 |

## 4.26 Seams designed now, built later

| Seam | What exists at launch | What is added later | Register |
|---|---|---|---|
| `/retreats/<slug>` dated retreats | The formats collection accepts dates, and `Event` schema is in the template | Pages publish when Belle sells a dated retreat | A7, N5 |
| `/rising-tides-collective/members` | `guests` table with `collective_member` and `joined_at`, populated from launch | Supabase Auth magic link login, 2027 | K5, K6, P9 |
| Fifth venue and beyond | Venue collection, map pins from coordinates | Belle adds a file in `/admin` | F3 |
| Adelaide region | `city` region value held back by a site setting | Belle switches the setting when she finds a venue | F6 |
| Practitioner access to questionnaires | CSV export from Supabase | Practitioner logins, phase two | P4 |
| Stripe deposits, automatic calendar booking, custom admin over Supabase | Nothing | Phase two list, `plan/10` section 10 | None. Recorded so the build does not block it |

---

# Part 5. The enquiry funnel

## Where the question set comes from

Three sources describe the funnel and they do not match, so the plan reconciles them openly.

| Source | Steps or fields |
|---|---|
| Belle and Jess, agreed 09-09-2026 (A5) | Relevant questions step by step, not one giant form |
| `plan/10` section 6 | Who is this for, how many, what draws you (over the pillars), when, coast or vineyard, your details |
| Competitor proposal Belle forwarded (`research/01` addition 29) | "I'm enquiring about" choice, then group size, occasion or goals, preferred format, location, dates, experiences of interest |
| Jess's open question list (`research/02`) | Group size, dates, occasion, budget, dietary, location |
| Belle's own reporting chain (P5, `research/02`) | Leads generated, lead source, who owns the lead, calls booked, calls completed, conversion rate, sales, revenue, outstanding follow-ups |

Reconciled choices, each carried to Part 7 where it is Belle's call:

- **"What draws you" asks about experiences, not pillars.** The pillar set is undecided (decision 1), and experiences are concrete to a buyer. Source: competitor field "experiences of interest".
- **Occasion for private, outcome for corporate**, as the step that branches.
- **No dietary question.** Dietary needs are health information and belong on the questionnaire after booking (`research/09` note on p.13, register W).
- **Budget is optional and off by default** until Belle says she wants it (decision 27).
- **Email comes last.** No step asks for contact details before the final step (`plan/10`).

## The steps

Every step is one screen, with a progress indicator, a back link and the answer saved on advance.

| Step | Question | Answers | Path | Stored as | Register |
|---|---|---|---|---|---|
| 0 | Arrival, no question | Reads `audience`, `format`, `venue`, `experience` and UTM parameters from the URL. Reads referrer and first page visited from the session | Both | Held in the session until step 1 | P5, P8 |
| 1 | Who is the day for? | A private group. My team or organisation | Splits | `audience`: private or corporate. Skipped and prefilled when the visitor came from `/private-groups` or `/corporate`, and shown as a confirmed answer they can change | A8, A4 |
| 2a | What's the occasion? | Birthday or milestone. Time with friends. Family time. Hens or celebration. Something else, with a short text field | Private | `occasion` | A6, A4 |
| 2b | What would you like the day to do for your team? | Reset and recovery. Reconnect as a team. Leadership offsite. Wellbeing education. Something else, with a short text field | Corporate | `team_outcome`. Organisation name also asked here as optional | A6, A4 |
| 3 | Roughly how many guests? | Under 10. 10 to 14. 15 to 20. More than 20. Not sure yet | Both | `group_size_band`. Bands follow the venue capacity ladder (6, 10, 10 to 16, 20+). **Decision 14** sets what the page says under "Under 10" | A4, F7 |
| 4 | What draws you to a La maréa day? | Multi-select over the experiences, with images: massage, contrast therapy, sauna, yoga or pilates, meditation and mindfulness, chef-led Mediterranean lunch, pasta making, gut health and nutrition, time to rest | Both | `experiences[]`. Prefilled from `experience` parameter | A6, D3 |
| 5 | Coast or vineyard? | By the coast. In the vineyards. Help me choose | Both | `setting`, and `venue_slug` when prefilled from a venue page | F6, A6 |
| 6 | When are you thinking? | Month picker over the next 12 months, plus "Flexible". Format choice: the 8 hour day, a shorter day, not sure | Both | `preferred_month`, `format_slug`. Format list follows decision 13 | A7, A4 |
| 7 | Your details | Name. Email. Phone. Organisation (corporate, if not given at 2b). Anything else. A separate, unticked box to receive La maréa news by email. Collection notice. Turnstile, invisible | Both | Contact fields, `marketing_consent` with timestamp | A4, P6, O15 |
| Complete | `/enquire/thank-you` | Answers summarised. Booking link button. Guide for their path | Both | `completed = true`, `notified_at` | E4, A1 |

## The flow

```
  any page ----(audience, format, venue, experience, utm in the URL)----+
                                                                        |
                                                                        v
                                                        Step 0  read parameters, referrer,
                                                                first page visited
                                                                        |
                                                                        v
                                                        Step 1  who is the day for?
                                                        (skipped if the path is already known)
                                                                        |
                                                   Insert enquiries row: created_at, lead_source,
                                                   utm_*, referrer, landing_page, audience,
                                                   step_reached = 1, status = new
                                                                        |
                                    +-----------------------------------+-----------------------+
                                    |                                                           |
                               private                                                     corporate
                                    |                                                           |
                          Step 2a  what's the occasion?                      Step 2b  what should the day do?
                                    |                                         organisation, optional
                                    +-----------------------------------+-----------------------+
                                                                        |
                                                  every later step updates the same row
                                                                        |
                                                        Step 3  how many guests?
                                                        Step 4  what draws you?  (experiences)
                                                        Step 5  coast or vineyard?
                                                        Step 6  when, and which format?
                                                        Step 7  your details, consent, Turnstile
                                                                        |
                                           POST /api/enquiry (Cloudflare Pages Function)
                                           Turnstile verified, honeypot, 3 second minimum
                                                                        |
                         +----------------------------+-----------------+--------------------------+
                         |                            |                                            |
               Update enquiries               email to Belle                       marketing consent ticked?
               completed = true               answers, lead source,                   |               |
               step_reached = 7               booking link                           yes              no
                                                                                      |               |
                                                                         Klaviyo subscribe job    nothing sent
                                                                         email, source, consent   to Klaviyo
                                                                         timestamp only
                                                                         klaviyo_synced = true
                                                                        |
                                                                        v
                                                   /enquire/thank-you
                                                   "Thanks, <name>." Your answers, summarised.
                                                   [ Book your discovery call ]  -> calendar.app.google/jiKYpzKFiG5XZV9x9
                                                   Your group guide  -> /guides/<path>-group-guide
                                                                        |
                                                                        v
                                                        Discovery call with Belle
```

## What writes to Supabase

All writes go through the Pages Function with the service role key. The browser never talks to Supabase. Row Level Security denies all public access (`plan/10` section 6). Region `ap-southeast-2`.

### `enquiries` table, fields from `plan/10` with the P5 additions

| Field | Written at | Source | Register |
|---|---|---|---|
| `id`, `created_at` | Step 1 insert | Database default. **The timestamp P5 asks for** | P5 |
| `lead_source` | Step 1 | Derived: `utm_source` if present, else referrer domain, else "direct". ManyChat links carry `utm_source=instagram&utm_medium=manychat` | P5, P8 |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_content` | Step 1 | URL | P5 |
| `referrer`, `landing_page` | Step 1 | Session | P5 |
| `audience` | Step 1 | Answer or prefill | A8 |
| `occasion` or `team_outcome` | Step 2 | Answer | A6 |
| `org` | Step 2b or 7 | Answer | A4 |
| `group_size_band` | Step 3 | Answer. **Replaces** `group_size int` in `plan/10`, because the step asks for a band | A4 |
| `experiences` | Step 4 | Answer, text array. **Addition** to `plan/10` | A6 |
| `setting`, `venue_slug` | Step 5 | Answer or prefill | F6 |
| `preferred_month`, `format_slug` | Step 6 | Answer. **Replaces** `preferred_date date` in `plan/10` | A7 |
| `name`, `email`, `phone`, `message` | Step 7 | Answer | A4 |
| `marketing_consent`, `marketing_consent_at` | Step 7 | Answer. **Addition** to `plan/10` | P6 |
| `budget_band` | Step 3 or 7, only if decision 27 turns it on | Answer | Decision 27 |
| `step_reached`, `completed` | Every step | Function | A5 |
| `klaviyo_synced`, `notified_at` | Completion | Function | P6 |
| `status` | Belle updates | Enum: new, call booked, call completed, proposal sent, won, lost. **Maps Belle's own chain** from calls booked to conversion | P5 |
| `owner` | Belle updates | Who owns the lead. **Addition**, named in Belle's chain | P5 |
| `call_booked_at`, `call_completed_at`, `follow_up_at` | Belle updates | Dates. **Additions** | P5 |
| `value_aud` | Belle updates | Booking value when won, for revenue. **Addition** | P5 |

**Two limits to state plainly to Belle.** The Google Calendar booking link cannot write "call booked" back into Supabase on its own, so in this build Belle updates `status` herself in the Supabase dashboard or a weekly export. Automatic calendar booking is out of scope for four weeks (`plan/10` section 6). Second, a visitor who leaves before step 7 is a row with answers and no contact details. That row is useful for reporting drop-off and for seeing which pages send people into the funnel, and it cannot be followed up.

### Other tables the funnel's neighbours write

| Table | Written by | Register |
|---|---|---|
| `downloads` | `/guides/<slug>` | P7, P5 |
| `subscribers` | Footer newsletter, `/waitlist` (with `list` value), `/app` (with `subscription_interest`) | P6, K2, P13 |
| `questionnaires` | `/questionnaire/<token>` after booking, separate consent, 24 month retention | P4 |
| `guests` | Belle or a scheduled job after each retreat, `collective_member`, `joined_at` | K3, K4, K5 |

## The Klaviyo handoff (P6)

- Server-side only, from the Pages Function, with a private key in Cloudflare environment variables. No public Klaviyo key in the front end.
- Sent only when `marketing_consent` is true. An enquiry without consent is answered by Belle personally and never enters a marketing list, which keeps La maréa inside the Spam Act.
- Fields sent: email, source, consent timestamp. Audience (private or corporate) as a profile property **if Belle wants segmented lists**, decision 18. No health information and no free-text answers ever go to Klaviyo.
- List per source is **needed from Belle**: enquiries, guides, waitlists, app interest, newsletter. Whether La maréa and AB Performance Nutrition share one account is also needed.

## What the visitor sees on completion

```
+--------------------------------------------------------------------------+
|  Thank you, <first name>.                                                |
|                                                                          |
|  Here is what you told us                                                |
|    A private group of 10 to 14, a milestone birthday                     |
|    Drawn to contrast therapy, the Mediterranean lunch, time to rest      |
|    By the coast, around March, the 8 hour day                            |
|                                                                          |
|  The next step is a short discovery call with Belle to shape your day.   |
|                                                                          |
|              [ Book your discovery call ]                                |
|                                                                          |
|  <response time line, needed from Belle>                                 |
|                                                                          |
|  While you wait:  Your private group guide  ->                           |
+--------------------------------------------------------------------------+
```

The example answers above show the layout only. Every line of copy on this page is in hand, blocked, until Belle approves it.

## Where the discovery call booking link sits

| Place | Link | Why |
|---|---|---|
| `/enquire/thank-you`, primary button | https://calendar.app.google/jiKYpzKFiG5XZV9x9 | The moment of highest intent, the pattern Belle received in the competitor proposal (`research/01` addition 30) |
| Belle's notification email for every completed enquiry | Same link, so she can send it in one click | `plan/10` section 6 |
| `/enquire` step 7, a small text link under the submit button, "Rather talk first? Book a call" | Same link | **Jess recommendation**, so a ready buyer is not forced through the form. Visitors who use it arrive without answers, which Belle may not want, decision 15 |
| Site settings file | Single source for the link | Belle changes it once if she moves booking tools (`plan/10` section 2) |

The link is not in the global header. The header sends everyone through the funnel first, because the funnel is what captures lead source for P5.

---

# Part 6. Content inventory

Every content item the site needs. "Supplies" names who acts. Jess drafts only from sourced facts, and every draft needs Belle's approval before it ships. Items marked **needed from Belle** become the list Jess sends her, after it goes through the voice system.

## Access and brand, clear these first

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 1 | Brand hex codes, fonts, logo files and usage rules | Every page | "La Marea_Design Style Guide (1).pdf", Gmail message 1a084806096fc434 | In hand, blocked, S1 | Jess opens it from her own Gmail, or Belle re-shares Branding to jesstresidder3@gmail.com |
| 2 | Beresford Estate 8 hour retreat folder | Full day, Beresford venue, corporate | Drive folder 1IRVPnQQZ4Yeg2DHVODE6fglNbRpYwc_F | In hand, blocked, Q1 | Belle re-shares to jesstresidder3@gmail.com |
| 3 | "2025 LA MAREA WEBSITE IMAGES WEBSITE" folder | All image sections | Shared to a Jess account that is not connected | In hand, blocked | Belle re-shares to jesstresidder3@gmail.com |
| 4 | Dropbox: Beresford professional photos, Ray White corporate retreat, Georgia Evans "Belle" folder, nature footage | Beresford, corporate, Fleurieu hub, testimonials | Dropbox links in the brief | In hand, blocked, S5 | Belle moves them to Drive |
| 5 | Domain registrar, renewal date and login | Launch | Not established | Needed from Belle | Belle, week one, only item that can delay go-live |
| 6 | Email provider (Google Workspace or other) | Launch | Not established | Needed from Belle | Belle |
| 7 | Canonical brand spelling, "La maréa" | Every page, schema, ATDW | Register P13, `research/08` | In hand, blocked | Belle confirms |

## Positioning, and the decisions copy depends on

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 8 | Positioning line, "Curated luxury wellness retreats on the Fleurieu Peninsula, for private groups and teams." | Home hero, schema, meta | Register V | In hand, blocked | Belle approves |
| 9 | Canonical 40 word description | Meta, schema, ATDW, Google Business Profile | `research/08` section 3 | Needed, Jess drafts from sourced facts | Jess drafts, Belle approves |
| 10 | Pillar set choice (six, ten or eight) | Philosophy, pillar pages, full day, experiences | Register T, G10 | Needed from Belle | Belle, decision 1 |
| 11 | Section names: experiences, food, private and corporate hero lines | Home, experiences, food, paths | Register V, D7, H7 | Needed from Belle | Belle, decision 26 |
| 12 | Public pricing or not | Formats, full day, corporate FAQ | Register W, `research/08`, `research/09` | Needed from Belle | Belle, decision 4 |
| 13 | CTA phrase, "Plan your day" or "Book a discovery call" | Every page | `research/05`, `research/01` addition 36 | Needed from Belle | Belle, decision 15 |
| 14 | First-person first-mover note for the founder story, replacing the "first" claim | Our story | Register V | Needed from Belle | Belle writes it in her words |

## The day and the formats

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 15 | 8 hour arc (arrive, move, nourish, restore) | Home, full day, paths | Encounter Bay guide p.10, p.15, p.17, p.24 | In hand, blocked on Belle confirming the arc | Belle confirms |
| 16 | Hour by hour run sheet | Full day, offsite | Guide has only 7am, 8am to 4pm, 5pm | Needed from Belle, Q2 | Belle |
| 17 | Rotation station length, once or twice through, yoga before or after rotation, breakfast timing | Full day | `research/09` questions 3 to 5 | Needed from Belle | Belle |
| 18 | Inclusions list | Full day | Guide p.15, p.16, p.23 | In hand | None |
| 19 | Whether La maréa brings mobile sauna and plunge | Full day, sauna page, venues | `research/09` question 18 | Needed from Belle | Belle |
| 20 | Beresford day and reel | Full day, Beresford venue | Q1 folder | In hand, blocked | Belle re-shares |
| 21 | Which formats still sell: half day, Wake Up To Wellness, Sunset Reset, Personalised, Women's Wellness Weekend and Day | Formats hub, funnel step 6, redirects | Live retreats page and store | Needed from Belle | Belle, decision 13 |
| 22 | Group size per format, and the private group minimum (6 to 10 on the live site, 10 minimum in the guide) | Paths, formats, funnel | Live retreats page, guide p.24 | Needed from Belle | Belle, decision 14 |
| 23 | Bespoke additions still offered | Formats hub | Live retreats page | In hand, blocked | Belle confirms |
| 24 | Price or price band | Formats, full day | Guide p.24, $899 introductory | In hand, blocked | Belle, decision 4 |
| 25 | Private and corporate group guide PDFs | Paths, guides, thank-you | Live home page buttons | Needed from Belle | Belle |

## Experiences

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 26 | Descriptions for sauna, massage, contrast therapy, Mediterranean dining, yoga, pilates, meditation | Home, experiences, detail pages | Guide p.13, p.15, p.16, p.23 | In hand | None |
| 27 | Pasta making masterclass: who runs it, length, what guests make, add-on or alternative | Experiences, food, detail page | None. Live bios for Malissa Fedele and Luca Guiotto mention pasta classes | Needed from Belle, Q3 | Belle |
| 28 | Gut health workshop: same as "The Foundations of High Performance Wellbeing" or separate | Experiences, detail page, rotation | Guide p.15 | Needed from Belle, Q5 | Belle |
| 29 | Consultations: inside a day or sold separately, who, how long | Experiences, detail page | Live retreats page, Malissa Fedele bio | Needed from Belle, Q4 | Belle |
| 30 | Durations for every experience | Detail pages, full day | None | Needed from Belle, Q2 | Belle |
| 31 | Yoga and pilates as one tile or two, infrared sauna in guided or self-led set | Experiences, home | Guide p.15, STATE-OF-PLAY blocker 12 | Needed from Belle | Belle, decision 26 |
| 32 | Session steps and questions per experience | Detail pages | None | Needed from Belle | Belle |
| 33 | Self-led activities list | Home, experiences, full day | Guide p.15 | In hand | None |
| 34 | Imagery for all ten experiences and six self-led activities | Home, experiences, detail pages | S2, 0 of 10 confirmed | Needed from Belle, or summer shoot | Belle identifies clips, or shoots |

## Places to Pause

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 35 | Written permission from each venue to use its name and imagery | Venue pages, index, map | Open decision 8 | Needed from Belle | Belle, template email written for her in week one |
| 36 | The Vineyard Retreat capacity to publish | Venue page, index, funnel bands | Q6 | Needed from Belle | Belle, decision 6 |
| 37 | The Vineyard Retreat imagery | Venue page, index | S3, none anywhere | Needed from Belle | Belle or the venue |
| 38 | Which Naiko shoot is Deep Creek and which is Encounter Bay | Two Naiko pages, bath shot | S4 | Needed from Belle | Belle |
| 39 | Beresford firm day maximum and street address for the map | Beresford page, corporate, map | `research/09` question 17 | Needed from Belle | Belle |
| 40 | What a Deep Creek day looks like at 6 guests | Deep Creek page | `research/09` question 19 | Needed from Belle | Belle |
| 41 | Surrounds for the two vineyard venues | Venue pages | Venue sites partly | In hand, blocked | Jess drafts, Belle confirms |
| 42 | Whether the Naiko Deep Creek bushfire restoration note still holds | Deep Creek page | Live accommodation page | Needed from Belle | Belle |
| 43 | Published venue name for Encounter Bay (Naiko Encounter Bay or Naiko at the Bluff) | Venue page | Brain dump, venue site | Needed from Belle | Belle |

## Philosophy and science

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 44 | Eight pillar words and definitions | Philosophy, pillar pages | Brain dump | In hand, blocked on decision 1 | Belle confirms |
| 45 | Name story paragraph | Philosophy | Brain dump | In hand | None |
| 46 | Philosophy intro and science intro | Philosophy | Live philosophy page | In hand | None |
| 47 | Evidence summary and references per pillar | Pillar pages, experience detail | Only the sleep article has references | Needed from Belle, G5 | Belle |
| 48 | Branding pillar videos graded and deduplicated | Philosophy, pillar pages | Branding pillar videos folder, 13 files | In hand, blocked on grading and decision 1 | Jess grades |
| 49 | Five differences, with two typos fixed | Home | Live home page | In hand, blocked | Belle agrees to the fixes, decision 21 |
| 50 | True South practices in Belle's words, and whether she joins Travel for Nature | Our story, footer | Register R | Needed from Belle | Belle, decision 23 |

## Food

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 51 | Food philosophy and what to expect | Food, home | Guide p.12 | In hand | None |
| 52 | Breakfast, refreshments, lunch detail | Food | Guide p.12, p.13 | In hand | None |
| 53 | Dinner and dessert menus, or a decision that the food story stays day-length | Food | None | Needed from Belle, Q8 | Belle |
| 54 | Example menu, nine dishes | Food | Guide p.14 | In hand, blocked on open decision 3 | Belle, decision 8 |
| 55 | Producer names beyond Peninsula Providore and La Vera, and whether any are Fleurieu based | Food, Fleurieu hub | Guide p.14, live gnocchi recipe | Needed from Belle, H6 | Belle |
| 56 | Food photography across a day, shared table and fine dining | Food, home, experiences | Food folder, 5 files | Needed from Belle, or summer shoot | Belle |

## People and proof

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 57 | Team roster, who appears and in which group | Team, experiences, detail pages | Live partners page (seven), guide p.19 to p.21 (five) | Needed from Belle | Belle, decision 12 |
| 58 | Bios and qualifications for the roster | Team, member pages | Live bio pages, guide | In hand, blocked on roster and currency check | Belle confirms |
| 59 | Portraits for every person, consistent background | Team, member pages, full day | None confirmed. Partner subfolders unopened | Needed from Belle, Q9. A half-day shoot | Belle |
| 60 | Jaimi Baker's roles | Team, yoga, meditation, contrast therapy pages | Register Q against `research/09` | Needed from Belle | Belle |
| 61 | Full Google review export, 18 reviews | Home, paths, full day | 3 of 18 captured | Needed from Belle, I6 | Belle exports from Google Business Profile |
| 62 | Testimonials tagged private, corporate or venue, with a photo from the same retreat and permission | Home, paths, venue pages, funnel | One on site | Needed from Belle, I5 to I7 | Belle |
| 63 | Corporate client names and written permission (Ray White Projects SA, YNG Adelaide) | Corporate, gallery | Guide p.26, p.27 | Needed from Belle, P12, Q7 | Belle |
| 64 | Gallery cull and guest consent for identifiable photos | Gallery, Collective, testimonials | Sunset Reset set, 223 images | In hand, blocked | Belle confirms consent, Jess culls |
| 65 | Founder portrait and family or childhood imagery | Our story, thank-you page | None | Needed from Belle | Belle |

## Journal, Collective, app

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 66 | Four existing posts, full text and images | Journal | Live blog, audit crawl | In hand | None |
| 67 | Journal category names | Journal filters, redirects | `plan/10` proposal, live category | Needed from Belle, decision 24 | Belle |
| 68 | Collective description and joining rule | Collective, home | Live retreats page, K3, K4 | In hand | None |
| 69 | One sentence per member benefit | Collective | K3 list | Needed from Belle | Belle |
| 70 | App description, visual and foundational subscription wording | App page, home | K1, K2 | Needed from Belle, after 21-09-2026 | Belle |

## Integrations and operations

| # | Item | Pages | Source | Status | Supplies |
|---|---|---|---|---|---|
| 71 | Klaviyo account, lists per source, consent wording | Every capture point | P6 | Needed from Belle | Belle, decision 18 |
| 72 | Current Jotform questionnaire questions and waiver text | Questionnaire | P4 | Needed from Belle | Belle |
| 73 | Which waitlists stay | Waitlist, formats | Live pages | Needed from Belle | Belle, decision 22 |
| 74 | Gift card balances outstanding and the plan for them | Gift cards, redirects | Live Wix store | Needed from Belle | Belle, decision 16 |
| 75 | Full terms and conditions | Terms | Live FAQ references terms | Needed from Belle | Belle |
| 76 | Response time to promise after an enquiry | Funnel, thank-you | None | Needed from Belle | Belle |
| 77 | Public phone number confirmation | Footer, funnel | Live FAQ shows 0411354356 | In hand, blocked | Belle confirms |
| 78 | Privacy Act position confirmed with her adviser | Privacy policy, questionnaire | Register W | Needed from Belle | Belle's accountant or lawyer |
| 79 | Frame rates of DJI_0604, DJI_0605 and DJI_0781, and grading of all footage | Every video section | File metadata | In hand, blocked | Jess, week one |
| 80 | Duplicate files resolved: two DJI_0606.MP4, movement.mp4 and Movement.mp4 | Media library | Inventory | In hand, blocked | Jess |

---

# Part 7. Decisions for Belle

Numbered for reference from the rest of this plan. The register's own "open decisions" list is numbered 1 to 8 and is mapped in the last column. Recommendations are Jess's, each with the reason. Belle decides.

## The three that block the most work

### 1. Which philosophy pillar set

| | |
|---|---|
| **Options** | Six described pillars on the live philosophy page. Ten named "Science" pillars on the live page. Eight words with definitions from the brain dump: Release, Reconnect, Restore, Realign, Educate, the sixth word in her list, Ground, Nourish |
| **Recommendation** | The eight words, as register T recommends |
| **Reason** | Belle wrote a definition for each, they are her most recent thinking, and every one maps to a real, sourced moment in the 8 hour day (`research/09`), which lets the philosophy and the product read as one thing |
| **Trade-off she needs to hear** | Her 13 branding pillar videos match the ten, not the eight. G2 asks for a video per pillar. Choosing the eight means either pairing each word with the closest existing video, which is her call on which pairs, or shooting pillar footage over summer |
| **Blocks** | Philosophy, eight pillar pages, pillar mapping on the full day and experience pages, funnel wording |
| **Register** | G1, G2, G10, register T. Register open decision: none, raised in T |

### 2. Which formats still sell, and the minimum group size

| | |
|---|---|
| **Options** | The live site lists Full Day (8 hour), Half Day (5 hour), Wake Up To Wellness (3 hour), Sunset Reset (3 hour), Personalised Retreats, Bespoke Wellness Days, and a Women's Wellness Weekend and Day on the Wix store. Group size reads "6 to 10 guests" for private groups and "up to 20" for corporate on the live site, and "10 guests minimum, 14 maximum" at Encounter Bay in the guide |
| **Recommendation** | Lead with the 8 hour day on every path, keep shorter formats on the formats hub only if they still sell, and publish group size per venue rather than one site-wide figure |
| **Reason** | A1 says the 8 hour day is the sale. The live private copy describes a weekend ("Sleep deepens. Meals stretch longer."), which contradicts that. Capacity varies from 6 to 20+ by venue, so a single number will be wrong somewhere |
| **Blocks** | Formats hub, both path pages, funnel steps 3 and 6, redirects for the two store products, dated retreat seam |
| **Register** | A1, A7, F7, decisions 13 and 14 in this plan |

### 3. What replaces "the first business in South Australia"

| | |
|---|---|
| **Recommendation** | "Curated luxury wellness retreats on the Fleurieu Peninsula, for private groups and teams." as the site line, plus a first-person note in her founder story about starting this on the Fleurieu |
| **Reason** | Beyond Wellness Co already sells curated private and corporate wellness across South Australia, and Untamed Escapes runs private group wellness on the Fleurieu. No founding dates are public, so "first" cannot be evidenced, and an unqualified superlative a competitor can disprove is a misleading representation risk under Australian Consumer Law. The market gap is a stronger position anyway: nobody in South Australia sells a designed day (register R) |
| **Blocks** | Home hero, our difference, our story, schema description |
| **Register** | G9 (overturned, register V), N1 |

## Every other decision

| # | Decision | Recommendation | Reason | Register | Register open decision |
|---|---|---|---|---|---|
| 4 | Public pricing | Hold price behind the discovery call at launch, as the register records, and build the `price_from` field so a from-figure can switch on without a rebuild. Revisit at 30 days | $899 is labelled introductory in the guide, so publishing it commits Belle to a number she may move. `research/08` and `research/09` both argue a corporate buyer who cannot find a number often does not enquire, and "what does it cost" is a question answer engines are asked constantly. **Conflict carried**: the register lists this as decided, the research recommends the opposite | A1, N5, register W | 5 |
| 5 | Members area location | On the site with a login in 2027, through Supabase Auth, not in this build. Collect membership status from launch | Entry is earned by attending (K4), and attendance already lives in Supabase. Building the login now spends a week of a four-week build on a feature with no members | K5, P9 | 1 |
| 6 | The Vineyard Retreat capacity | Publish the size of group La maréa runs there, and say so in those words, rather than the venue's sleeping total | Belle's 10 may be the configuration she books, the venue's 16 is six separate guest houses. The venue card leads with capacity, so the wrong number is the first thing a corporate buyer reads | F7, Q6 | none |
| 7 | Venue permissions | Email all four venues in week one using a template Jess writes. The site will not publish a venue without it | A venue pulled after launch breaks the index, the map and the funnel prefill | F7, F8 | 8 |
| 8 | Example menu on the public site | Publish the nine dish Encounter Bay menu as one example, labelled seasonal | It is the only menu that exists, it is good enough to publish close to verbatim, and the collection's `public` flag hides it without a rebuild | H5 | 3 |
| 9 | Retreats page hero, one video or a multi-experience banner | One video, graded | One idea per frame is the pattern on every reference she named, and one autoplay loop is the page weight budget | C1 | 4 |
| 10 | Is the app connected to the site | Connected through shared guest records in Supabase, with the site and the app as separate front ends | Supabase is the store of record. Movement's export and API are unverified, so it cannot own the records. Settle two questions with Movement on 21-09-2026 | K6, P9 | 2 |
| 11 | Corporate client names | Confirm the exact names (Ray White Projects SA, YNG Adelaide, and whether "Burnside" is a third) and get written permission. Use an anonymised case study until then | A named client is the strongest corporate proof, and naming one without permission is the one proof mistake that cannot be undone | P12, Q7, I7 | none |
| 12 | Team roster and person pages | One page per person on the roster, generated from the collection. Belle chooses who is on it and in which group | Seven people on the live site and five in the guide overlap only partly. Person pages keep the old bio URLs' inbound value and carry credentials for search | I1, I2, P13 | none |
| 13 | Formats and weekend retreats | See decision 2 | | A7 | none |
| 14 | Minimum group size | See decision 2 | | A1, F7 | none |
| 15 | One call to action phrase | "Plan your day" in the header and on buttons, "Book your discovery call" on the completion page | The live site drifts across four phrasings. "Plan your day" names what the buyer is doing, and the call is named where it is booked. Also whether a small "book a call first" link sits in the funnel | A1, E4 | none |
| 16 | Wix gift cards | Honour every outstanding card by email from Belle, and relaunch gift cards later on a simple payment link if she wants them | A redirect cannot honour a sold gift card. The store is the last thing keeping Wix alive (P3) | P3, P13 | none |
| 17 | Placeholder pages | 410 for all eight, including `/members` | Nothing on them is worth preserving, and they show "$25,000/month VIP" today | P13, register T | none |
| 18 | Klaviyo lists | One list per capture source, audience stored as a profile property | Belle already builds campaigns and lead magnets in Klaviyo, and source-level lists let her see which page produces subscribers (P5) | P6 | none |
| 19 | Domain registrar | Confirm who holds lamarea.com.au and log in this week | The only item that can delay go-live. Registrar recovery takes days to weeks | Launch | 6 |
| 20 | The $550 add-on | Offer it once at $550: recorded walkthrough, cheat sheet, 30 days support, one structural change. The editor itself is included | P1 made self-editing core scope. Four prices have been floated, and $550 is the highest she has heard, so it is not an increase | P1, P2 | 7 |
| 21 | Typos in her five differences | Fix "upon on" and "Mediteranean" with her agreement | They are her words, so she sees the change rather than finding it | G8 | none |
| 22 | Waitlists | Keep only waitlists for retreats she will run in the next 12 months, all on `/waitlist` | Off-domain Jotform waitlists are a live fault (P13). An empty waitlist is a promise she has to keep | P13 | none |
| 23 | True South, Travel for Nature and ATDW | Describe her own practices against the four True South pillars in her words, with no badge or logo. Consider joining Travel for Nature. Register on ATDW this month | True South is not a credential and claiming one is a misleading representation. ATDW is free, feeds southaustralia.com, and is the fastest route into AI answers for a business nobody interstate has heard of. Eligibility needs checking because she runs from partner venues | N2, N5 | none |
| 24 | Journal categories | Four categories she will post into at least monthly, for example research, recipes, the Fleurieu, and retreat life | Filters with empty categories read as abandoned, which is the live "Sleep & Recovery" page today | J4, L5 | none |
| 25 | Pasta making masterclass | Confirm who runs it (Malissa Fedele and Luca Guiotto both list pasta classes on the live site), how long, and whether it replaces lunch or adds to the day | It is one of her two signature culinary experiences and has no source copy | H4, Q3 | none |
| 26 | Section names | Places to Pause for venues and The Day for formats, as the register records. For experiences, her own "Your Retreat, Your Rhythm, Your Routine". For food, "The Table" or her own title about the flavours of the Fleurieu. Merge yoga and pilates into one tile if they run as one session, and keep infrared sauna in one set only | "The Spaces" and "The Experiences" are the default headings on the operators closest to her, which puts La maréa in the same bucket. Two of her own wording ideas already match the reference she liked most for language | D7, F1, H7, register V | none |
| 27 | Budget question in the funnel | Leave it out at launch | Asking budget before the call can put off a buyer who has not yet seen what the day includes. Belle can switch it on if she wants to qualify harder | A4, A5 | none |
| 28 | Partner recruitment form | Replace with one line and an email link on the team page | It is not a guest-facing requirement and a form adds a data flow to maintain | N3 | none |
| 29 | Guest photos | Confirm written consent from anyone identifiable in gallery, Collective and testimonial images | A health-adjacent business showing guests at a retreat needs consent on record | I9, P4 | none |


## Internal conflicts, for Jess before anything goes to Belle

| Conflict | Files | Resolution in this plan |
|---|---|---|
| Venue and team URLs, `/places/` and `/team/<slug>` against `/the-places/` and `/the-team#slug` | Register R, `research/08` against `plan/10` | Register R wins. Align `plan/10` examples |
| `/waitlist` redirects to `/enquire` | `plan/10` section 7 | Waitlist is its own page. Align `plan/10` |
| `plan/10` schema example shows an "8:30 Arrive" time | `plan/10` section 2 | Not sourced. Use guide times until Q2 clears |
| `group_size int` and `preferred_date date` in the enquiries table | `plan/10` section 2 | Replaced by `group_size_band` and `preferred_month` to match the steps |
| Funnel step 3 over pillars | `plan/10` section 6 | Experiences instead, until decision 1 clears |
| Cutover "Tuesday 07-10-2026" | `plan/10` section 10 | 07-10-2026 is a Wednesday. See Part 8 |
| Accordion mechanics, T7 measured height against C2 native `details` | Register U against `research/06` completion pass | C2 wins, per the completion pass |
| Placeholder count, "six" against eight URLs | Register T against audit | 410 all eight |
| Q9 says no bios are in hand, the audit captured seven live bios with qualifications | Register Q against `research/07` | Bios in hand, headshots and roster not |
| `research/09` says the pasta masterclass has no source anywhere, the audit found it in two live bios | `research/09` against `research/07` | Partial source, still needs Belle |

---

# Part 8. Build sequence

Four weeks from 14-09-2026, aligned to `plan/10` section 10. Week one ends Monday 21-09-2026, the day of the app call. Week four ends Monday 12-10-2026.

**Date correction.** `plan/10` sets cutover for "Tuesday 07-10-2026". 07-10-2026 is a Wednesday. Tuesday 06-10-2026 falls before week four's feedback round, and Tuesday 13-10-2026 falls one day after the four week target. This plan recommends **Tuesday 13-10-2026**, so Belle's staging feedback is applied before go-live, with Wix kept paid until 12-11-2026 as the rollback. Jess decides before it is quoted to Belle.

```
 Week 1  16-09 to 21-09   prototype in her hands, blocking questions out, Dom starts
    |
 Week 2  22-09 to 28-09   content model, the day, experiences, venues, funnel endpoint
    |
 Week 3  29-09 to 05-10   philosophy, food, team, journal, funnel end to end, staging
    |
 Week 4  06-10 to 12-10   Belle's feedback, device tests, budgets, handover prep
    |
 Cutover Tuesday 13-10-2026 (recommended), Wix paid to 12-11-2026
```

## Week one, to Monday 21-09-2026: the early prototype

**What ships.** A live, password-protected URL at `lamarea.pages.dev` carrying the top of the home page:

| Prototype piece | Home section (4.1) | Proves | Register |
|---|---|---|---|
| Header with the two paths | 1 | The split is the first thing read | A8 |
| Hero drone video zooming on scroll, one line, two doors | 2 | The luxury feel on arrival | C1, C7, L1, M1 |
| An invitation to pause | 3 | Type, white space, sand and sage | B1 to B5 |
| The Fleurieu band with one slide-in from the right | 4 | Soft motion, parallax, no horizontal scroll | L2, O13, O12 |
| The Day, four panels arriving from the right with the vertical expand, in first form with stills | 5 | The animation the other agency called custom-code-only is running | O6, E3, O5 |
| Fluid margins at every width and a Lighthouse score shown on the page | All | SEO shown, not asserted | O9, O11, O15, N4 |

**Running in parallel.**

- One email of blocking questions to Belle: registrar and login, email provider, Klaviyo lists, corporate client names, venue permission template, current Wix cost, the re-share of the Branding, Beresford and website images folders, Dropbox to Drive. Written through the voice system.
- The separate note to Belle about the eight placeholder pages, sent now (register T).
- Asset grading A to D across Drive, frame rates read from DJI_0604, DJI_0605 and DJI_0781, duplicates resolved, summer shot list started.
- Dom: Supabase in `ap-southeast-2` in Belle's name, tables including the P5 additions in Part 5, RLS deny-by-default, Cloudflare account in her name, Turnstile keys.
- Repo in Belle's GitHub, Pages connected, Sveltia auth path tested on day two.
- Full crawl of the live Wix site saved for the redirect map.

**Gates on week one.**

| Gate | What it blocks | If it does not clear by Friday 18-09-2026 |
|---|---|---|
| S1, brand hex codes and fonts | The real palette and type in the prototype | Prototype ships in a neutral, clearly labelled stand-in palette, and no guessed sand or sage is shown, per `assets-index/03`. The aesthetic test moves to week two |
| Frame rates of the three named DJI files | The slowed hero loop (L6) | Hero ships at native speed and the slow-down is promised only once the rate is known |

## Week two, to Monday 28-09-2026: the spine

| Work | Pages | Register | Gated by |
|---|---|---|---|
| All content collections with Zod schemas, including the experiences, venues, venue gallery, people and disclosure schemas from the `research/06` completion pass | All | F3, P2 | None |
| The 8 hour flagship page with T3, the rotation C5, inclusions, hour by hour table | 4.7 | E1 to E4, O6 | **Q2** run sheet for the table and panel detail. **Q1** for the Beresford section. Page ships lean without them |
| Experiences C6, both sets, and the experience detail template | 4.6, 4.8 | D1 to D6, O1 to O5, O8 | **S2** imagery, **Q2** durations, **Q3 Q4 Q5** for three pages, **decision 26** on yoga, pilates and sauna |
| Places to Pause index, venue template, four venues as data, map | 4.9, 4.10 | F1 to F10 | **Decision 7** permissions, **S4** Naiko split, **S3 and decision 6** for The Vineyard Retreat. Unapproved venues stay `published: false` |
| Private groups and corporate pages | 4.2, 4.3 | A8, A1 | **Decision 2** for group size copy. **Decision 11** for corporate proof, anonymised fallback built |
| Video pipeline: grade, slow, encode, Stream upload, posters | All | M1, M5, M6, L6 | Week one grading |
| Dom: `/api/enquiry` Pages Function, Turnstile, notification email, Klaviyo sync | 4.23, Part 5 | P5, P6 | **Decision 18** Klaviyo lists |
| Privacy policy and collection notice drafted | 4.25 | O15, P4 | None to draft. **Content item 78** before publishing |
| Phase two list to Belle in writing | None | Scope risk in `plan/10` | None |

## Week three, to Monday 05-10-2026: everything else, then staging

| Work | Pages | Register | Gated by |
|---|---|---|---|
| Philosophy and pillar template, science pages | 4.12, 4.13 | G1 to G11 | **Decision 1** pillar set. **Content item 47** references, pages ship lean without them |
| The Table | 4.14 | H1 to H8 | **Q8** dinner and dessert, **Q3** pasta, **decision 8** menu, **content item 55** producers |
| Team and member template | 4.15, 4.16 | I1 to I4 | **Decision 12** roster, **Q9** portraits |
| Testimonials and proof sections across pages | 4.1, 4.2, 4.3, 4.7 | I5 to I8 | **Content items 61 to 63**, Google export, tagged quotes, corporate permission |
| Journal index and post template, four posts migrated | 4.18, 4.19 | J1 to J5, O14 | **Decision 24** categories |
| Formats hub, Fleurieu hub, offsite, our story, gallery, Collective, app, FAQs, waitlist, gift cards, terms, 404 | 4.4, 4.5, 4.11, 4.17, 4.20 to 4.22, 4.25 | A7, C6, K1 to K5, I9, N2 | **Decision 2** formats, **decision 22** waitlists, **decision 16** gift cards, **decision 29** guest consent, app copy after 21-09-2026 |
| The stepped funnel end to end with completion page and booking link | 4.23, Part 5 | A4, A5, A6, E4, P5 | Question wording approved by Belle |
| Guide pages and gating | 4.24 | P7, P8 | **Content item 25**, the two guide PDFs |
| Questionnaire and waiver behind tokens, Jotform retired | 4.25 | P4 | **Content item 72** current questions and waiver |
| Redirect map and 410 list | Part 2 | P13 | **Decision 13** store products, **decision 16** gift cards |
| Schema, sitemap, `llms.txt`, titles, meta, one H1 per page | All | N4, N5 | Canonical description approved |
| `staging.lamarea.com.au` live for Belle on her own Galaxy and Pixel | All | O12 | **Decision 19** registrar access. Without it, staging stays on `lamarea.pages.dev` |
| Nameservers to Cloudflare, mail records exported and verified first | Launch | P3 | **Decision 19** and email provider |

## Week four, to Monday 12-10-2026: revisions and handover preparation

| Work | Register | Gated by |
|---|---|---|
| Belle's staging feedback applied | C2, all | Belle's review turnaround |
| Device verification: scrollWidth check at ten widths, real Android tablet test, reduced motion, keyboard, screen reader on TalkBack and VoiceOver, alt text | O10, O11, O12, P13 | None |
| Page weight budgets enforced | `plan/10` section 4 | None |
| Four search probes run by hand in ChatGPT, Claude, Perplexity and Google AI Mode for the before record | O15, N5 | None |
| Belle adds a journal post herself in Sveltia while Jess watches, recorded walkthrough, cheat sheet if the $550 add-on is taken | P1, P2 | **Decision 20** |
| Ownership confirmed on Supabase, Cloudflare and GitHub | O15, P3 | None |

## Cutover, Tuesday 13-10-2026 (recommended)

Apex and www to Pages, nothing else changed, certificate forced if not issued in ten minutes, redirects and 410s crawled and logged, the funnel tested end to end on the live domain, email tested to and from belle@lamarea.com.au, sitemap submitted, Wix de-indexed so no duplicate copy is live. Wix cancelled after 30 days once Search Console 404s are flat. Gated by **decision 19**, the registrar.

## What ships at launch and what is a seam

```
 Launch, full                         Launch, lean (draft sections hidden)      Seam, later
 -------------------------------      -------------------------------------     ------------------------------
 home, private groups, corporate      Fleurieu offsite                          dated retreat pages
 formats hub, experiences index       pasta making, gut health,                 Collective member login (2027)
 full day flagship                     consultations pages                      practitioner questionnaire logins
 7 experience pages                   pillar pages (references pending)         Stripe deposits
 places index, approved venues        gallery (consent pending)                 automatic calendar booking
 Fleurieu hub, philosophy, food       gift cards (holding page)                 custom Supabase admin
 team and member pages, our story     guide pages (PDFs pending)                Adelaide region venues
 journal and 4 posts, Collective,
 app, enquire, thank-you, waitlist,
 FAQs, privacy, terms, questionnaire,
 admin, 404, redirects and 410s
```

---

# Unplaced requirements

**128 of 130 register requirement IDs (A1 to P13) are placed** in Parts 3, 4 and 5. Every register blocker (Q1 to Q10, S1 to S5) and all eight register open decisions are carried in Parts 6 and 7.

| ID | Requirement | Why it has no place on the site |
|---|---|---|
| P10 | AB Performance Nutrition phase two priorities: subscriptions and high school services | Out of scope for La maréa. Recorded so nothing in this build blocks it: Supabase, Klaviyo and the repo pattern all transfer, and nothing here assumes one business per account |
| P11 | Correction: AB Performance Nutrition runs on Shopify, not Squarespace | A correction to the shared brief, with no site surface |

## Requirements placed only as a carried conflict

These are placed, and the plan does not deliver them as Belle first stated them. Each needs her agreement before build.

| ID | As Belle stated it | Where it sits | Decision |
|---|---|---|---|
| G9 | State plainly that La maréa is a South Australian first | Removed from public claims. Sentiment moves to a first-person note on `/our-story` | 3 |
| D7 | Section naming "The Experiences" and "The Spaces" | Places to Pause and The Day as decided in register V, experiences heading from her own wording idea | 26 |
| H2 | Food across a day including dinner and dessert | The day at the table stops at lunch until dinner and dessert menus exist, and the day retreat has no dinner | Q8, 26 |
| F7 | The Vineyard Retreat sleeps 10 | Capacity held until confirmed against the venue's 16 | 6 |

## Source-backed items used that are not register IDs

These come from the competitor proposal Belle forwarded (`research/01`, additions 1 to 58) and are marked as Jess recommendations where used: proof beside the ask (43), thank-you step carrying the booking link (30), audience-tagged testimonials (32), formats menu with durations (27), same layout with different language for the two paths (26), CTA wording unified (36), homepage cut to about a third (35), old site de-indexed at cutover (21). The competitor's six beats (arrive, move, nourish, restore, gather, rest) are **not** used, because Belle named four (C4).
