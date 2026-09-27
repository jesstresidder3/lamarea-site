---
title: La maréa QA coverage audit of the master site plan
date: 16-09-2026
author: Adversarial QA pass for Jess Tresidder
status: Internal. Not for Belle. Checks plan/11-master-site-plan.md against every section A to W of _context/requirements-register.md and against belle-brain-dump-14-09-2026.md
voice-verbatim-source: Belle Redden brain dump 14-09-2026, quoted verbatim including transcription errors. Register and plan text quoted verbatim where marked.
inputs: STATE-OF-PLAY.md, _context/requirements-register.md (A to W), plan/11-master-site-plan.md (1,524 lines), _context/belle-brain-dump-14-09-2026.md, spot checks in research/06, research/07, research/08, research/09, assets-index/03 and plan/10
---

# La maréa QA coverage audit

# Part 1. Verdict

Plan/11 is fit to build from once the Part 6 fixes are applied, because every Must in A to P has a page, a component and a content status, and the gaps are narrowings and omissions rather than a wrong structure. Across 249 rows (130 register IDs A1 to P13, 107 findings and decisions in Q to W, 12 register notes and open questions) the count is **210 covered, 19 partial, 11 missing and 9 conflict carried**, and the planner's "128 of 130 placed" becomes 117 covered, 7 partial and 6 conflict carried on A1 to P13 alone, with 8 of the 11 missing rows sitting in Q to W, the sections nobody checked. The single most serious gap is that **plan/11 never writes Belle's pillar word "Empower"**: the pillar slug list and decision 1 both say "the sixth word in her list" instead, so a build taken from plan/11 ships seven of her eight pillar words.

---

# Part 2. Coverage table

Status key. **covered**: placed in plan/11 with a component, a page and a content status, even where the content itself is blocked on Belle. **partial**: placed, but part of what the register or Belle asked for is dropped, narrowed or unspecified. **missing**: nowhere in plan/11. **conflict carried**: plan/11 does not deliver it as stated and carries the conflict to a named decision.

Content being blocked on Belle does not make a row partial. A row is partial only when the plan itself falls short.

## Register A to P

| ID | Requirement | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| A1 | Discovery calls converting to 8 hour group retreats | covered | Part 1, 4.1 s5, 4.7, Part 5 | |
| A2 | More calls, bookings, leads | covered | Part 1 primary and secondary conversions, 4.23 | |
| A3 | Interstate and overseas target market | covered | Part 1, 4.1 s4, 4.11 | |
| A4 | Form for corporate and private enquiries | covered | 4.23, Part 5 | |
| A5 | Stepped funnel, not one large form | covered | Part 5 steps 0 to 7 | |
| A6 | Section near the form breaking down how the retreat is customised | partial | T9 on 4.1 s12, 4.2 s9, 4.3 s10, 4.5 s8, 4.7 s14 | T9 is static, "zero interaction, one link", and sits on every page except `/enquire` itself, which is where Belle put it ("near the form"). 4.23 has no customisation section. Belle tied this to "my personalization pillar", which plan/11 does not carry (see Part 3) |
| A7 | Formats menu | covered | 4.5 s4, nav "The Day" | |
| A8 | Two audience paths, split early | covered | Part 1, Part 3 hero doors, 4.2, 4.3, funnel step 1 | |
| B1 | Soft sand dominant background | covered | Part 4 design tokens | Blocked S1 |
| B2 | Sage green for wording and headings | partial | Part 4 design tokens | Tokens allow "a darker text tone if sage fails contrast at body size". That swaps out Belle's stated text colour on a build call. Register U flagged the WCAG risk. It is not in Part 7, so Belle never gets asked |
| B3 | Light, bright, summery, Mediterranean chic | covered | Design tokens "Light and bright" | |
| B4 | Small, simple fonts like Aman and The Tailor | partial | Design tokens, Type row | Families, weights and line height are specified. Size is not. Belle said "small" three times ("nice, small, luxury fonts", "a small font", "the small fonts"). No type scale or body size appears anywhere in plan/11 |
| B5 | White space, minimal, elegant | covered | Design tokens Space, nav note | |
| B6 | Nothing bouncy | covered | Design tokens Motion, header 300ms opacity | |
| B7 | Brand kit is the source of exact values | covered | Part 6 item 1, week one gate S1 | |
| C1 | Big imagery or drone footage on landing | covered | Part 3 hero, 4.1 s2 | |
| C2 | Luxury feel through the whole site | covered | Layout rules, every page opens on media-band or T1 | 4.18 journal and 4.20 gallery open on text only, which breaks the plan's own rule (see Part 4) |
| C3 | Story as a sequence of moments | covered | `base: numbered-moments`, 4.1, 4.7 | |
| C4 | Arrive, move, nourish, restore | covered | Part 1, 4.1, 4.7 s4 | |
| C5 | Experiences, then food, then places | covered | 4.1 s6 to s8 | |
| C6 | Fleurieu as a character | covered | 4.1 s4, 4.11 | |
| C7 | Make the visitor feel something | covered | 4.1 s2 | |
| C8 | Transformation outcome words | covered | 4.1 s3, 4.3 s3, 4.17 s3 | |
| C9 | Counter to hustle culture | covered | 4.1 s3, 4.17 s3 | |
| D1 | Dedicated experiences section | covered | 4.1 s6, 4.6 | |
| D2 | Slider, Tailor and Bathhouse Albion pattern | covered | C6 | |
| D3 | Ten named experiences | covered | Part 2 experience instances, C6 | Three lean, Q3 Q4 Q5 |
| D4 | Imagery and short explanation per experience | covered | C6, 4.8 | S2 imagery |
| D5 | Image sliders and video sliders | covered | C6 active tile video, media handling rule | |
| D6 | Self-led activities slider | covered | 4.1 s9, 4.6 s4, 4.7 s8 | |
| D7 | Names "The Experiences" and "The Spaces" | conflict carried | Decision 26 | |
| E1 | Flagship 8 hour section | covered | 4.1 s5, 4.7 | |
| E2 | Imagery and animation walking through the day | covered | T3 | Stills at launch, Q10 |
| E3 | Tailor slide-in-from-right pattern | covered | T3 | |
| E4 | Ends in a booked discovery call | covered | 4.23, Part 5 | |
| E5 | Beresford reel showing the scheduling | partial | 4.7 s10, `base: media-band` | Placed as a full-bleed media band. Belle's own worry was the format, "I'm not sure how it would look as a, you know, Instagram sort of video reel on the site". A vertical reel in a full-bleed horizontal band either crops or letterboxes, and O10 forbids cropping. No vertical video treatment is specified. Also blocked Q1 |
| F1 | Terminology away from accommodation | covered | "Places to Pause", nav, 4.9 | |
| F2 | Clean index, click through per venue | covered | 4.9, 4.10 | |
| F3 | Belle adds venues without a rebuild | covered | Content collections, 4.26 | |
| F4 | Basq House index, big imagery, mini animation, read more | covered | C4, 4.9 s3 underline sweep | research/06 identifies the underline sweep as the mini animation |
| F5 | Basq House arrow gallery on venue detail | covered | C5, 4.10 s5 | |
| F6 | Coast and vineyard split, CBD held back | covered | C4 filter, 4.26 Adelaide seam | |
| F7 | Four venues and capacities | conflict carried | Venue instances, decision 6 | Q6 |
| F8 | Five star partner signal | covered | 4.1 s8, 4.9 s5, 4.10 s3 | |
| F9 | South Australia map | covered | T4 on 4.9 s4, 4.10 s8, 4.11 s4 | |
| F10 | Enough imagery to read coast or vineyard and surrounds | covered | 4.10 s2 to s6 | Vineyard surrounds needed |
| G1 | Pillars bigger and more luxurious | covered | 4.12 | Decision 1 |
| G2 | Video per pillar plus discover more | conflict carried | 4.12 s5, decision 1 | The recommended eight words have no video. The recommendation and G2 cannot both hold |
| G3 | COMO transition between pillars | covered | 4.12 s5, C6 pillars set | |
| G4 | Less wording, detail behind read more | covered | 4.12 s5, 4.13 | |
| G5 | Each pillar links to science and references | covered | 4.13 s5, s6 | References needed |
| G6 | Mediterranean, science backed, Fleurieu rooted | covered | 4.12 s4 | |
| G7 | Rebuild "our science" | covered | 4.12 s7, 4.13 | |
| G8 | Five differences, shown far better | covered | 4.1 s10 | |
| G9 | South Australian first claim | conflict carried | Decision 3, 4.17 s6 | Overturned by register V |
| G10 | Eight pillar words with definitions | partial | Part 2 pillar instances, decision 1, Part 6 item 44 | Plan/11 never writes the sixth word. The slug list reads "`educate`, the sixth word in Belle's G10 list, `ground`", and decision 1 does the same. A builder working from plan/11 gets seven slugs. The word is **Empower**, and the omission traces to the voice gate noted in register Q. Also carries the decision 1 conflict |
| G11 | Name story paragraph | covered | 4.12 s3 | Spelling query noted |
| H1 | Mediterranean and plant based food section | covered | 4.14 | |
| H2 | Food across a day, breakfast to dessert | conflict carried | 4.14 s4, Unplaced table, Q8 | See Part 4 on whether dinner menus exist |
| H3 | Fine dining and shared eating | covered | 4.14 s5 | |
| H4 | Signature culinary experiences, dining and pasta | covered | 4.14 s6, decision 25 | Pasta blocked Q3 |
| H5 | Example menus on the site | covered | 4.14 s7, decision 8 | |
| H6 | Name local Fleurieu producers | covered | 4.14 s8, 4.11 s8 | |
| H7 | "A journey through the flavours of the Fleurieu" title | conflict carried | Decision 26 | |
| H8 | COMO "eat well, be well" reference | covered | 4.14 s3 | |
| I1 | Wellness and food teams shown separately | covered | 4.15 s4, s5 | |
| I2 | Large imagery, qualifications, bio | covered | C1, 4.16 | Q9 portraits |
| I3 | SHA advisory board carousel | covered | C1 | |
| I4 | Do not copy The Tailor's team layout | covered | T6 not used | See Part 4 on how narrowly this was read |
| I5 | Testimonials, image above, words beneath | covered | T5 | |
| I6 | Existing testimonials and Google reviews | covered | 4.1 s11, Part 6 item 61 | |
| I7 | Weighted to private and corporate | covered | T5 `group_type` filters | |
| I8 | Trust matters for a new business | covered | proof-strip, 4.15, 4.17 | |
| I9 | Gallery of previous retreats | covered | 4.20 | Consent, decision 29 |
| J1 | Research and recipes become a wellness journal | covered | 4.18 | |
| J2 | Belle adds posts herself | covered | 4.18, `/admin` | |
| J3 | Image card, simple wording, click through | covered | T8 cards | |
| J4 | Filter tabs | covered | 4.18 s3 | |
| J5 | COMO journal arrows, smaller | covered | 4.18 s5, 4.19 s6 | |
| K1 | App coming 2027 section | covered | 4.1 s13, 4.22 | |
| K2 | Anticipation and foundational subscriptions | covered | 4.22 s4, s5 | |
| K3 | Rising Tides Collective presence and benefits | covered | 4.1 s13, 4.21 | |
| K4 | Entry earned by attending | covered | 4.21 s5 | |
| K5 | Members area on site or in app | covered | Decision 5, 4.26 seam | |
| K6 | App connected to site or separate | covered | Decision 10 | |
| L1 | Hero video zoom on scroll | covered | T1 | |
| L2 | Elements sliding in from the right | covered | `base: slide-in`, T3 | |
| L3 | Minimal accordions with an arrow | covered | C2 | |
| L4 | SHA pop-up-on-click reveal | covered | C3 | |
| L5 | Filters and tabs from the start | covered | C4, T8, gallery filters | |
| L6 | Slow the drone footage | covered | Media handling | Frame rates unverified |
| M1 | DJI 0604, 0605, 0781 as hero material | covered | 4.1 s2, 4.11 s2 | |
| M2 | Naiko Deep Creek bath shot on the venue page | covered | 4.10 s2 | S4 |
| M3 | Branding pillar videos | covered | 4.12 s2, s5 | |
| M4 | Dolphins, seals, kangaroos | covered | 4.11 s5 | S5 |
| M5 | Footage spread beyond beach | partial | Media handling rule, checks on 4.1, 4.2, 4.3 | The media handling table promises "Each page's media plan below is checked against this". The check appears on three of 25 page sections, 4.1 to 4.3, and nowhere after. Belle's matching instruction, to show nature "as much of that throughout the site as possible", is not carried at all (Part 3) |
| M6 | Easy asset swaps for the summer reshoot | covered | Stream ID plus poster per field | |
| N1 | Unique combination stated plainly | covered | Part 1, 4.1 s3 | |
| N2 | True South, simply placed | covered | Footer, 4.17 s8, decision 23 | |
| N3 | South Australia and local companies throughout | covered | 4.11 s8, 4.14 s8, 4.15 s7 | |
| N4 | SEO | covered | Search and answer engines table | |
| N5 | AEO and GEO | covered | answer-block, schema, `llms.txt` | |
| O1 | Fixed text pane left, items moving right | covered | C6 | |
| O2 | Progress rule under sliders | covered | T2, C5, C6 | |
| O3 | Per-slide art direction | covered | C6, week two content collections from research/06 | Mechanism (`variant`, `emphasis`) lives in research/06 only. Plan/11 cites the ID without restating it |
| O4 | Hover states | covered | Layout rules | |
| O5 | Cross-fade between tiles | covered | Layout rules | |
| O6 | Horizontal slide with vertical expand | covered | T3 | |
| O7 | Click to expand in place | covered | C3 | |
| O8 | Art-directed column splits | covered | Design tokens Space, `base: text-pair` | |
| O9 | Fluid margins | covered | Design tokens Space | |
| O10 | No cropping at any width | covered | Layout rules | E5 vertical reel is the exception nobody checked |
| O11 | One layout that reflows | covered | Layout rules | |
| O12 | Galaxy and Pixel tablets, zero horizontal scroll | covered | Layout rules, week four | |
| O13 | Parallax | covered | `base: media-band` | |
| O14 | Full-bleed blog cards with title overlaid | covered | T8, 4.18 | |
| O15 | Data storage, co-ownership, SEO shown | covered | Editing ownership and data, week one prototype | |
| P1 | Belle edits the site herself | covered | `/admin`, Part 4 editing table | |
| P2 | Her full editing list including formatting and mobile | partial | Part 4 editing table | Plan/11 states "Formatting and mobile are handled by the design system, not by Belle". Belle named both. That narrows her list without a decision in Part 7. It may be the right call, and Belle still has to hear it before she finds out in the handover |
| P3 | Leave Wix entirely | covered | Editing table, decision 16, cutover | |
| P4 | Supabase replaces Jotform for health records | covered | `/questionnaire/<token>` | |
| P5 | Lead source, timestamp, funnel fields | covered | Part 5 enquiries table | |
| P6 | Email capture to Klaviyo | covered | Part 5 Klaviyo handoff | |
| P7 | Gated lead magnets | covered | 4.24 | |
| P8 | Standalone URLs for ManyChat and Instagram | covered | Part 2 P8 list | |
| P9 | App or site owns guest records | covered | Decision 10, register W | |
| P10 | AB Performance Nutrition phase two | covered | Unplaced table, recorded as out of scope | |
| P11 | Shopify correction | covered | Unplaced table | No site surface |
| P12 | Corporate client name confirmation | covered | 4.3 s7, decision 11 | |
| P13 | Fix the competitor audit faults | covered | Layout rules, redirects, 410s, decisions 16 and 22 | |
| P-price-550 | Settle the Claude editing price | covered | Decision 20 | |
| P-quote-700 | The roughly $700 workshop quote in action items | missing | Nowhere | Register P asks Jess to confirm whether it is live, spent or superseded before anything goes to Belle. Plan/11 is silent |
| P-openQ-wix-cost | Current Wix cost and renewal date | partial | Week one email names "current Wix cost" | Renewal date is absent. Part 8 keeps Wix "paid until 12-11-2026" as the rollback without knowing when Wix renews or what it costs |
| P-openQ-summer-target | Target number of retreats for summer | missing | Nowhere | Listed in register P open questions. Not in Part 6, Part 7 or the week one email |
| P-openQ-other | Registrar, Workspace, editing model, Jotform, Klaviyo list, gift cards, Movement, venue permission, form fields | covered | Part 6 items 5, 6, 71, 72, 74, decisions 7, 10, 16, 19 | |
| Reg-open-decisions | Register open decisions 1 to 8 | covered | Part 7 last column | |
| Reg-gap-nav | Navigation model | covered | Part 3 | |
| Reg-gap-mobile | Mobile behaviour across every named interaction | partial | T1, T2, T3, nav, C3 hover only | Mobile or touch behaviour is stated for T1, T2, T3 and the menu. It is not stated in plan/11 for C4, C5, C6, T4, T9 or `base: slide-in`. research/06 covers some of these, and plan/11 does not point to it |
| Reg-gap-accessibility | Accessibility | partial | Scattered: 44px targets, `aria-pressed`, reduced motion, TalkBack and VoiceOver in week four | No conformance target (for example WCAG 2.2 AA) is set. The sage on sand contrast risk from register U is not a test anywhere |
| Reg-gap-wireframe | Page by page wireframe | partial | Part 3 hero and nav, Part 5 thank-you | Part 4 is section tables. Only the hero, the nav and the thank-you page are drawn. That is enough to build from, and it is not a wireframe |
| Reg-gap-copy-deck | Copy deck | missing | Nowhere | Part 6 is a content inventory, which records where copy comes from. No copy deck exists and none is scheduled in Part 8 |
| Reg-gap-launch-checklist | Launch checklist | partial | Part 8 cutover paragraph, week four table | Cutover is one paragraph. No checklist with owners, and no rollback trigger beyond keeping Wix paid |

## Register Q, product facts and blockers

| ID | Requirement, decision or finding | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| Q-arc-confirm | The sourced arc must be confirmed with Belle before it drives a section | covered | Part 6 item 15 | |
| Q-arc-times | 7am pick up, 8am to 4pm, 5pm drop off | covered | 4.7 s5, 4.4 s4 | |
| Q-arc-rotation | Twelve guests in three groups of four through massage, contrast therapy, workshop | covered | 4.3 s4, 4.7 s6 | |
| Q-arc-mapping | Arc maps onto arrive, move, nourish, restore | covered | 4.7 s4 | |
| Q-people | Courtney Selfe, Jaimi Baker, Luca Guiotto named | covered | 4.15, Part 6 items 57 to 60 | |
| Q-producers | Only two producers against H6 | covered | 4.14 s8, Part 6 item 55 | |
| Q-price-899 | $899 per guest, introductory | covered | Decision 4 | |
| Q-price-min-max | Minimum ten, maximum fourteen | covered | Decision 2, Part 6 item 22 | |
| Q-price-deposit | 50% deposit | missing | Nowhere | Not in `/terms`, `/faqs`, the full day page or Part 6 item 75. A buyer planning a corporate day asks about deposit terms, and the guide already states one |
| Q-price-per-venue | Whether $899 applies at Beresford and The Vineyard Retreat (research/09 question 13) | missing | Nowhere | Decision 4 treats price as one number. Part 6 item 24 does not ask whether it varies by venue |
| Q1 | Beresford folder unreachable | covered | Part 6 item 2, week one email | |
| Q2 | No durations anywhere | covered | Part 6 items 16, 17, 30 | |
| Q3 | Pasta masterclass has no source copy | covered | Part 6 item 27, decision 25, internal conflicts table | Plan/11 correctly records that research/07 contradicts this |
| Q4 | Consultations have no source copy | covered | Part 6 item 29 | |
| Q5 | Gut health workshop naming | covered | Part 6 item 28 | |
| Q6 | The Vineyard Retreat capacity 10 against 16 | conflict carried | Decision 6 | |
| Q7 | Three corporate client names | covered | Decision 11, Part 6 item 63 | Decision 11 writes "Ray White Projects SA" as one name. Register Q7 counts Ray White and Projects SA as two. Belle confirms which |
| Q8 | No dinner or dessert menus | conflict carried | 4.14 s4, Part 6 item 53 | See Part 4, Belle says some menus are in her retreat guide |
| Q9 | No headshots or bios | covered | Part 6 items 58, 59, internal conflicts table | research/09 question 22 also asks for Zoe Buttery. Plan/11 4.15 s3 asks for Zoe's portrait, so she is carried |
| Q10 | No photography of the rotation stations running | partial | 4.1 s5, 4.3 s4, 4.7 s6 as page notes | No Part 6 item asks for it. The register's action, "Add to her summer shoot list", has no home, because plan/11 starts a shot list in week one without saying what is on it |
| Q-22-questions | The 22 questions in research/09 | partial | Part 6 cites questions 3, 9, 10, 17, 18, 19 | Question 12 (is there a second menu), question 13 (price per venue) and question 21 (station photography) are not carried into Part 6 or Part 7 |
| Q-gated-words | Source words blocked by the voice gate, one of them a pillar word | partial | Part 2 pillar instances, decision 1 | The gate stripped the pillar word from plan/11 itself. See G10 |

## Register R, URL structure and positioning

| ID | Requirement, decision or finding | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| R-market-gap | Home leads on the designed day, not venues or treatments | covered | Part 1 sentence 2, 4.1 s5 | |
| R-search-baseline | Absent from three commercial probes, re-run after launch | covered | Search table, week four probes | |
| R-URL-corporate | `/corporate` | covered | Page 3, 4.3 | |
| R-URL-offsite | `/corporate/fleurieu-offsite` | covered | Page 4, 4.4 | Launch, lean |
| R-URL-retreats | Home plus `/retreats` | covered | Pages 1 and 5 | |
| R-URL-fleurieu | `/fleurieu-peninsula-retreats` | covered | Page 11, 4.11 | |
| R-URL-full-day | `/experiences/full-day-retreat` | covered | Page 7, 4.7 | |
| R-URL-private | `/private-groups` | covered | Page 2, 4.2 | |
| R-URL-beresford | `/places/beresford-estate` | covered | Venue instances | Gated Q1 and permission. The McLaren Vale cluster has no fallback page if Beresford is not approved at launch |
| R-URL-experiences | One page each under `/experiences/` | covered | Experience instances | |
| R-A8-real-pages | Two paths as real pages, not a toggle | covered | Part 1 | |
| R-truesouth-no-claim | No accreditation or endorsement claimed | covered | Decision 23, 4.17 s8 | |
| R-truesouth-own-words | Practices described against the four pillars in her words | covered | 4.17 s8, footer | |
| R-travel-for-nature | Travel for Nature option | covered | Decision 23 | |
| R-ATDW-register | Register on ATDW | covered | Decision 23 | |
| R-ATDW-category | Tour or Attraction category, Event listings for dated retreats | missing | Nowhere | Decision 23 says "register on ATDW this month" without the category choice or Event listings, both of which register R names |
| R-ATDW-eligibility | Eligibility unclear from partner venues | covered | Decision 23 | |
| R-truesouth-EOI | Register interest through the SATC expression of interest form | missing | Nowhere | Named in register R as Belle's action. Not in decision 23 |

## Register S, assets and the colour blocker

| ID | Requirement, decision or finding | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| S-hex-routes | Three routes to clear the colour blocker | covered | Part 6 item 1, week one gate | |
| S-confirmed-only | Only sand background and sage text are confirmed | covered | Design tokens, week one gate stand-in palette | |
| S-video-weight | 2.46GB of examples, all need compression | covered | Media handling, 4.1 s2 | |
| S-pillar-13 | Thirteen branding pillar files | covered | 4.12, Part 6 item 48 | |
| S-naiko-jpegs | Roughly 400 files in "la marea naiko jpegs", one of the two strongest photo sets | missing | Nowhere | Plan/11 cites NAIKO ACCOM (22 files) and Naiko At The Bluff Content (16 files) for every Naiko section and never mentions the 400 file set. The strongest Naiko photography is not in the page plans |
| S-sunset-reset | 223 files as the gallery candidate | covered | 4.20 s4 | |
| S-bath-candidates | Two bath shot candidates | covered | 4.10 s2 | |
| S1 | Brand hex and fonts | covered | Part 6 item 1 | |
| S2 | Zero experience imagery | covered | 4.1 s6, Part 6 item 34 | |
| S3 | The Vineyard Retreat has no imagery | covered | Part 6 item 37 | |
| S4 | Naiko shoots not split | covered | Part 6 item 38 | |
| S5 | Nature footage not found | covered | 4.11 s5, Part 6 item 4 | |
| S-reshare-before-21-09 | One consolidated re-share request before the app call | covered | Week one email | |

## Register T, current site audit

| ID | Requirement, decision or finding | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| T-placeholders-urgent | Tell Belle today about the placeholder pages | covered | Part 2 410 list, week one note | |
| T-five-differences | Five differences verbatim | covered | 4.1 s10 | |
| T-typos | Fix "upon on" and "Mediteranean" with Belle told | covered | Decision 21 | |
| T-pillar-sets | Six, ten or eight pillar sets | covered | Decision 1 | |
| T-schema | No LocalBusiness, Organization or Review schema | covered | Search table | Review schema is not in plan/11's schema list, although register T names its absence. Google limits self-serving review markup, so this may be deliberate, and plan/11 does not say so |
| T-H1 | Missing and stray H1s | covered | Search table | |
| T-CWV | Core Web Vitals not measured, retry before delivery | missing | Nowhere | Plan/11 relies on a Lighthouse score. Register T asks for a Core Web Vitals before measurement so the before and after comparison holds. No week holds that task |
| T-GBP-reviews | 18 reviews, 15 need manual pull | covered | Part 6 item 61 | |
| T-from-zero | State plainly that D1, E1 and K3 are builds from zero | missing | Nowhere | Register T asks for this "so the four week estimate is understood correctly". Plan/11 Part 8 does not say it |
| T-redirects | 33 live URLs mapped | covered | Part 2 redirect map | |
| T-bio-value | Bio pages carry the most inbound value | covered | 4.16 conflict note | |
| T-410 | Placeholders return 410 | covered | Part 2, decision 17 | Register T text says six. Eight is correct, see X4 |

## Register U, interaction build specs

| ID | Requirement, decision or finding | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| U-T1 | Hero zoom | covered | Components table, 4.1 s2 | |
| U-T2 | Slider with progress rule | covered | Components table | Autoplay dropped on touch, a recorded deviation |
| U-T3 | Horizontal wipe, no pin on mobile | covered | Components table, 4.1 s5, 4.7 s4 | |
| U-T4 | Map | covered | 4.9 s4 | |
| U-T5 | Testimonials, attribution as a descriptor | covered | Components table | |
| U-T6 | Team via SHA pattern, not The Tailor | covered | C1 | |
| U-T7 | Accordion | conflict carried | Internal conflicts table, C2 wins | |
| U-T8 | Filter tabs | covered | 4.18 s3 | |
| U-T9 | Question circles | covered | See A6 for the placement gap | |
| U-T10 | Fixed pane with moving items | covered | C6 | |
| U-stack | No heavy animation stack needed | covered | GSAP on two pages only | |
| U-aman-sand | Sand background proven at Aman's class | covered | Design tokens | |
| U-sage-contrast | Sage on sand may fail WCAG at body size | partial | Design tokens | Carried as a silent build fallback, not a test and not a decision for Belle. See B2 |
| U-T3-stills | Stills in T3 at launch | covered | 4.1 s5, 4.7 s4 | |

## Register V, language and naming

| ID | Requirement, decision or finding | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| V-G9-overturned | Drop the South Australian first claim | covered | Decision 3 | |
| V-replacement-line | "Curated luxury wellness retreats on the Fleurieu Peninsula, for private groups and teams" | covered | Part 1, 4.1 s2 | |
| V-founder-story | First-mover sentiment in first person only | covered | 4.17 s6 | |
| V-raise-directly | Raise with Belle directly, she asked twice | covered | Decision 3 is in the top three | |
| V-rename-sections | Neither "The Spaces" nor "The Experiences" | covered | Decision 26 | |
| V-places-to-pause | "Places to Pause" for venues | covered | Nav, 4.9 | |
| V-the-day | "The Day" for the formats | partial | Nav, 4.5 | Plan/11 also uses "The Day" as the name of the T3 walk-through on home s5 and full day s4, and 4.5 is titled "The Day, formats" while 4.7 is the day. One label now names two different things. The nav item "The Day" goes to the formats hub, not the day |
| V-four-words | Scroll story on Arrive, Move, Nourish, Restore | covered | Part 1, 4.1 | |
| V-lexicon | 25 lexicon candidates | covered | Hero lines on 4.2, 4.3, decisions 15 and 26 | |
| V-exclusions | Excluded words: temple, agora, sanctuary, haven, container, recalibrate, resonance, embodiment | missing | Nowhere | No copy rule carries the exclusion list. Two live collisions: Belle's own Restore definition says "nervous system recalibration", and the live home meta description calls La maréa "a coastal sanctuary". Neither is flagged |
| V-her-words-match | Tell Belle her wording ideas match Scorpios | covered | Decision 26 reason | |
| V-trimmed-quotes | Source quotes trimmed by the voice gate | covered | Team 4.15 s2 notes Belle's own word | |

## Register W, technical architecture

| ID | Requirement, decision or finding | Status | Where in plan/11 | Note |
|---|---|---|---|---|
| W-stack | Astro 5 static, Cloudflare Pages, repo in Belle's name | covered | Editing table, week one | |
| W-collections | Collections make a fifth venue data entry | covered | 4.26 | |
| W-vercel-out | Vercel ruled out | covered | Inherited from plan/10 | No site surface |
| W-stream | Cloudflare Stream at about $8 USD a month, an estimate | covered | Editing table | |
| W-real-cost | Belle hears the real ongoing number | covered | Editing table | |
| W-sveltia | Sveltia at `/admin`, GitHub backend, R2 media | covered | Page 32, editing table | |
| W-decap-out | Decap ruled out on CVE | covered | Inherited from plan/10 | |
| W-cms-in-scope | CMS inside the $2,900 | covered | Decision 20 | |
| W-addon-550 | Add-on at $550 once | covered | Decision 20 | |
| W-supabase-owns | Supabase owns guest records | covered | Editing table, decision 10 | |
| W-movement | Movement export and API unverified | covered | Decision 10 | |
| W-privacy-correction | The exemption has no 10-12-2026 end date, ADM transparency starts that day | covered | 4.25 privacy policy ADM statement | |
| W-privacy-health | Build as covered by the Privacy Act because health information is collected | partial | Questionnaire, privacy policy, 4.23 s5 | A collection notice appears only on `/enquire`. The newsletter, guide, waitlist and app capture points (`base: lead-capture`) carry consent and no collection notice. Funnel step 7 has a free-text "Anything else" field that will collect injuries and dietary needs from some visitors and emails them to Belle, outside the separate-consent path the plan builds for health information. Retention is set for questionnaires only, not enquiries or subscribers |
| W-risk-footage | Footage may not carry the site | covered | Grading, stills in T3 | |
| W-risk-domain | Registrar unconfirmed | covered | Decision 19 | |
| W-risk-scope | More than sixty Musts in four weeks | partial | Launch lean, seams, week two phase two list | No cut order if a week slips. Gates say what blocks, not what gets dropped |

---

# Part 3. Brain dump sweep

Every line of the brain dump was read against the register and plan/11. The items below appear in neither. Quotes are verbatim from the transcription, errors included.

## Said by Belle, in neither the register nor the plan

| # | What Belle said, verbatim | Why it matters | Proposed register ID |
|---|---|---|---|
| 1 | "coming back to my personalization pillar and making guests feel like they can really customize their retreat and journey with us" | Belle names **Personalisation** as her pillar while describing the customise section. Personalisation is one of the ten live "Science" pillars and is not one of the eight brain dump words. The live retreats page says the same, "Guided by our personalisation pillar" (research/07 line 271). This is direct evidence that the ten are live in her thinking, and it weakens decision 1's recommendation further than the video finding does. It also ties A6 to a pillar, which plan/11 misses | X7 |
| 2 | "Once again, I think on the trailer, the travel stories, and they've got recent inspiring stories. I think that sort of set out with the slider, and, you know, you can click on it and explore more. I think, yeah, something like that could be quite cool for the the blog." | Belle asked for the journal in a **slider**, from The Tailor's stories page. The register records The Tailor's filter tabs (J4) and COMO's arrows (J5) only. Plan/11 shows journal posts on home as three static cards and on the index as a grid | X8 |
| 3 | "I'm not sure how it would look as a, you know, Instagram sort of video reel on the site, but, um, it sort of shows, like, the scheduling" | The Beresford content is a **vertical Instagram reel**. Register E5 records the reel, not the format concern. Plan/11 places it in a full-bleed horizontal media band, which crops or letterboxes a 9:16 video | X9 |
| 4 | "I think, yeah, nature is a a big component of this of of La Miraya, and therefore, why I wanna really showcase nature and the ocean and hiking and as much of that throughout the site as possible in and around, yeah, those other wellness experiences and offerings." | A site-wide instruction: **nature, ocean and hiking throughout**, not confined to one page. Register M3 records the pillar videos and C6 the peninsula, neither records "throughout the site as possible". In plan/11, nature footage sits on `/fleurieu-peninsula-retreats` s5 and hiking appears only as a self-led tile | X10 |
| 5 | "Luxury South Australian wellness experiences - curated to form La maréa." | A line Belle wrote under the Bathhouse Albion reference, in the typed section rather than the dictation. It reads as a positioning or section line in her own words, and it uses "curated", the same verb as the register V replacement line. Not recorded as a wording idea anywhere | X11 |
| 6 | "there's a pen where it sort of pans to the left, um, and you sort of, yeah, see those those heels." | A second hero candidate Belle described without a file number, a left pan across the hills. Register M1 and plan/11 name only DJI_0604, DJI_0605 and DJI_0781 | X12 |

## Captured, but narrowed or lost on the way into the plan

| # | What Belle said, verbatim | What happened |
|---|---|---|
| 7 | "maybe a dinner, a menu example. Um, I've got some of them in my guide, my retreat guide" | Register H5 records this. Register Q8 then says "No dinner or dessert menus exist in any source", and plan/11 asks Belle to supply them. Belle says **she already has menus in her retreat guide**. The Encounter Bay guide is a day guide with lunch only, so the menus most likely sit in the Beresford folder (Q1) or a weekend guide. The request to Belle should be for that guide, not for new menus |
| 8 | "obviously, don't want to, um, you know, copy too much of the tailor's site and set out. So maybe we find sort of a different way to set the team out." | Register I4 reads this as applying to the team section only, and plan/11 follows. The first half of the sentence is broader. Plan/11 takes The Tailor's header, hero zoom (T1), slider (T2), wipe (T3), map (T4), testimonials (T5), journal cards and filters (T8) and question circles (T9). Belle asked for most of those by name, so this is not a contradiction. It is a risk to test in the prototype walkthrough on 21-09-2026 |
| 9 | "showcasing what an eight hour immersive private group retreat with us could look like at Barisfoot Estate" | Register Q1 frames Beresford as the venue that "carries the corporate story", and plan/11 leans Beresford toward corporate (4.3 s2 and s6, 4.4 s2). Belle's only statement about a Beresford day calls it a **private group** retreat |
| 10 | "La Miraya, the sage green potentially, to sort of try and keep the site a little bit more brighter and summery" | Recorded at B2. Plan/11 allows a darker text tone on a build decision if sage fails contrast, without asking Belle (see Part 2, B2 and U-sage-contrast) |
| 11 | "They have nice, small, luxury fonts." and "And then like a small font. I like a... yeah. I like the small fonts that I use in some of the reference sites." | Recorded at B4. Plan/11 specifies font families and weights and never a size (see Part 2, B4) |

---

# Part 4. Contradictions

## Plan/11 against itself

| # | Contradiction | Where |
|---|---|---|
| 1 | **A pillar word is missing.** The pillar slug list gives seven slugs and "the sixth word in Belle's G10 list" in place of `empower`. Decision 1 lists "Educate, the sixth word in her list, Ground". 4.3 s3 refers to "the sixth pillar word". The plan tells the builder to make eight pages and names seven | Part 2 line 193, 4.3 s3, decision 1 |
| 2 | **"The Day" names two things.** The nav item "The Day" and page 4.5 are the formats hub (`/retreats`). The T3 walk-through on home s5 and full day s4 is also titled "The Day". A visitor who clicks "The Day" in the header expecting the day arrives at a formats menu | Part 3 nav, 4.1 s5, 4.5, 4.7 s4 |
| 3 | **Every page opens on imagery, except where it does not.** The layout rule says "Every page opens on `base: media-band` or T1". The journal index opens on a text heading ("no hero video"), the gallery on "One line, no hero video", and `/enquire`, `/guides/<slug>` and all of 4.25 open on headers and text | Layout rules, 4.18 s2, 4.20 s2, 4.23, 4.24, 4.25 |
| 4 | **The per-page media check stops after page three.** The media handling table says "Each page's media plan below is checked against this". The check exists on 4.1, 4.2 and 4.3 only | Media handling, 4.1 to 4.25 |
| 5 | **Home may run two videos against a one loop budget.** The 4.1 budget allows one autoplay loop. The hero is a T1 video. C6 in s6 plays the active tile's video. The media rule says a C6 tile "counts as the page's loop only when the hero is a still", which leaves home undecided. The conflict is listed under home and not resolved | 4.1 budget, 4.1 s6, media handling |
| 6 | **Funnel pre-empts decision 26.** Step 4 offers "yoga or pilates" as one answer while Part 2 builds `yoga` and `pilates` as two pages, and decision 26 is still open on merging them | Part 5 step 4, Part 2 experience instances |
| 7 | **Pasta source status differs inside the plan.** The experience instance table marks pasta "Blocked, Q3" and cites the live bios. Part 6 item 27 says source "None" then cites the same bios. The internal conflicts table resolves it as "Partial source". One status should hold | Part 2 instances, Part 6 item 27, Part 7 internal conflicts |
| 8 | **Unverified claim in a Belle-facing reason.** Decision 20 says "$550 is the highest she has heard, so it is not an increase". Register P records four figures "across the record", not four figures Belle heard. If Belle only heard $350 or $400, the reason is wrong in front of the client | Decision 20 |
| 9 | **Coverage claim is overstated.** "128 of 130 register requirement IDs (A1 to P13) are placed" counts a partial placement as placed, and says nothing about Q to W. See Part 1 for the real count | Unplaced requirements |

## Plan/11 against the register

| # | Contradiction | Register | Plan/11 |
|---|---|---|---|
| 10 | Register Q8 says no dinner or dessert menu exists in any source. Belle says "I've got some of them in my guide, my retreat guide" | Q8, H5 | Part 6 item 53 asks Belle to supply menus rather than the guide that holds them |
| 11 | Register Q3 says the pasta masterclass has no source copy anywhere. research/07 lines 410 and 412 record "Mediterranean Pasta-Making Masterclass (2 hrs)" in Malissa Fedele's live bio and "private pasta-making classes" in Luca Guiotto's | Q3 | Plan/11 is right, the register is stale. Fixed by X2 |
| 12 | Register Q7 counts Ray White and Projects SA as two names and P12 adds "Burnside". Decision 11 and Part 6 item 63 write "Ray White Projects SA" as one client | Q7, P12 | Decision 11 |
| 13 | Register T says "Six fully public, indexed pages" and lists eight URLs. research/07 line 660 also says six | T | Plan/11 410s all eight, which is correct. Fixed by X4 |
| 14 | Register Q9 says no bios are in hand. research/07 captured seven live bios with qualifications | Q9 | Plan/11 internal conflicts table corrects it. Register not yet updated |
| 15 | Register U T2 specifies autoplay at 3000ms. Plan/11 drops autoplay on touch and C6 drops it everywhere | U | A defensible change for B6, recorded in the components table, not raised with Belle |

## Later register sections not carried into the plan

| # | Later section | What it decided or found | State in plan/11 |
|---|---|---|---|
| 16 | V overturns G9 | Drop the "first" claim | Carried, decision 3 |
| 17 | V renames D7 | Places to Pause, The Day | Carried, decision 26, with the "The Day" collision in row 2 |
| 18 | V excluded words | temple, agora, sanctuary, haven, container, recalibrate, resonance, embodiment | **Not carried.** Belle's own Restore definition uses "recalibration" and the live home meta description calls La maréa "a coastal sanctuary" |
| 19 | U T7 superseded by research/06 C2 | Native `details` accordion | Carried |
| 20 | U sage contrast | Sage on sand may fail WCAG | Carried only as a silent build fallback |
| 21 | T Core Web Vitals | Not measured, retry before delivery | **Not carried** |
| 22 | T builds from zero | Say plainly that D1, E1 and K3 start from nothing | **Not carried** |
| 23 | S "la marea naiko jpegs" | Roughly 400 files, one of the two strongest sets | **Not carried**, every Naiko section cites the 22 and 16 file folders |
| 24 | R ATDW category, Event listings, True South expression of interest | Belle's actions | **Not carried** into decision 23 |
| 25 | W health information | Build as covered by the Privacy Act | Carried for the questionnaire only. Other capture points and the enquiry free-text field are not treated to the same standard |
| 26 | W decisions on stack, Stream, Sveltia, Supabase ownership, $550 | | Carried |

## Plan/10 against plan/11, verified for the register

Verified against `plan/10-technical-architecture.md` on 16-09-2026. Plan/11 lists most of these in its internal conflicts table. Rows 30 and 31 are not in that table.

| # | Plan/10 | Plan/11 |
|---|---|---|
| 27 | Venue URLs `/the-places/<slug>` (lines 114, 821, 822) and team anchors `/the-team#slug` (line 820) | `/places/<slug>` and `/team/<slug>` per register R |
| 28 | `/waitlist` 301 to `/enquire` (line 831) | `/waitlist` is its own page |
| 29 | Cutover "Tuesday 07-10-2026" (line 984). 07-10-2026 is a Wednesday | Tuesday 13-10-2026 recommended |
| 30 | Redirect examples use `/practitioners/sarah-x` and `/accommodation`, which are not live URLs. The live URLs are `/courtney-selfe` and the six other bio slugs, and `/accommodation-partners` (research/07) | Uses the real live URLs. **Not listed** in plan/11's conflicts table |
| 31 | "The six-step enquiry funnel" (line 971) with step 3 over the pillars (line 655) | Seven question steps plus arrival, step 4 over experiences. The step count difference is **not listed** |

---

# Part 5. Degradation check

## First five pages in Part 4

| Page | Sections | Depth markers |
|---|---|---|
| 4.1 Home | 15 | Job, audience, page weight budget, length target, scroll story diagram, per-section assets with filenames, media balance check, conflicts carried |
| 4.2 Private groups | 10 | Job, keyword cluster, page shape source, verbatim copy per section, media balance check |
| 4.3 Corporate | 12 | Job, keyword clusters, verbatim copy, named blockers per section, media balance check |
| 4.4 Fleurieu offsite | 7 | Job, ship status, keyword cluster. Short by design, launch lean |
| 4.5 The Day, formats | 9 | Job, keyword cluster, verbatim format names and durations, decisions named per section |

## Last five pages in Part 4

| Page | Sections | Depth markers |
|---|---|---|
| 4.21 Rising Tides Collective | 8 | Job, an architecture decision paragraph, verbatim copy. Holds up |
| 4.22 App | 7 | Job. Three of seven content cells are "needed from Belle" and four asset cells are "None". Thin because content does not exist, which is acceptable |
| 4.23 Enquire | 6 | Delegates to Part 5, which is the most detailed part of the plan. Holds up |
| 4.24 Guide download template | 4 | No keyword, no assets beyond a cover, no audience split between the two guides. **Thinner** |
| 4.25 Supporting pages | 8 pages in 8 rows | No job line, no section table, no assets column, no per-section register IDs. **Much thinner** |

## Pages that got thinner treatment

**4.25 is the clear degradation.** Eight pages share one table, and three of them carry more risk than their single row allows.

- `/questionnaire/<token>` collects injuries, medical notes and a waiver. It is the page register W says puts La maréa inside the Privacy Act, and it gets one row, with no field list beyond "from `plan/10`", no error, save or expiry behaviour for the token, and no retention or practitioner access detail beyond the Part 5 table.
- `/faqs` is one of the main AEO surfaces for N5 and gets one row. No question list, no mapping from the research/08 question list, and Part 2 says "existing twelve answers" with no inventory of them.
- `/admin` is one row, "Sveltia CMS". P2's full editing list lives in the site-wide editing table, which is acceptable, but nothing says which collections Belle sees, in what order, or what she cannot touch.

4.24 is thinner than its job. Two further patterns show fatigue from 4.5 onward: the footer row is pasted identically ("Newsletter, contact, True South line, full navigation") on every page, and the budget line appears on 4.1 and 4.7 only. The middle of Part 4 (4.7, 4.10, 4.12, 4.14) is as deep as the opening, so the degradation is concentrated at the end rather than a steady slope.

---

# Part 6. Fixes

Edits plan/11 needs, for Jess to approve. Plan/11 and plan/10 are not edited by this audit. Line numbers refer to plan/11 as at 16-09-2026.

## Fix first, these change what gets built

1. **Line 193, Part 2 pillar instances.** Replace "`educate`, the sixth word in Belle's G10 list, `ground`, `nourish`" with "`educate`, `empower`, `ground`, `nourish`".
2. **Line 1313, decision 1 options.** Replace "Educate, the sixth word in her list, Ground" with "Educate, Empower, Ground".
3. **Line 554, 4.3 s3.** Replace "The Educate pillar and the sixth pillar word read naturally here" with "The Educate and Empower pillars read naturally here".
4. **Decision 1, trade-off row.** Add: "Belle also refers to 'my personalization pillar' in the brain dump, and the live retreats page says 'Guided by our personalisation pillar'. Personalisation is one of the ten, not the eight. Both the videos and her own language point to the ten still being live in her thinking." Change the recommendation from "The eight words" to "Belle chooses. Present the eight and the ten side by side with the video match and the personalisation quote, and make no recommendation until she has seen both."
5. **4.23 Enquire, new section between s2 and s3.** Add "How we shape your day. The three T9 question circles, static, showing how Belle customises the retreat to the group. Component T9. Content: Belle's three questions, needed from Belle. Register A6, X7." Keep the existing T9 instances on the other pages.
6. **Design tokens, Colour row.** Replace "a darker text tone if sage fails contrast at body size" with "sage for headings and text. Contrast of sage on sand measured against WCAG 2.2 AA in week one once S1 clears. If body text fails, Belle chooses between sage at large sizes only with a darker body tone, or a deeper sage. Decision 30." Add decision 30 to Part 7 with register B2 and U.
7. **Design tokens, Type row.** Add "A type scale with a small body size in the register of Aman and The Tailor, measured from both sites, because Belle asked for small fonts three times (B4)."
8. **Part 4 editing table, first row.** Remove "Formatting and mobile are handled by the design system, not by Belle" from the row and add decision 31 to Part 7: "What Belle edits and what the design system fixes. Recommendation: Belle edits copy, images, video, offers, pages from blocks, form questions, journal, links, CTAs and SEO fields. Formatting and mobile layout are fixed by the design system so the site cannot break on a phone. Reason: O10 to O12 are sign-off tests she will run herself. Register P1, P2."
9. **4.7 s10, the Beresford reel.** Change the component from `base: media-band` to "a contained 9:16 video frame inside a `base: text-pair`, video one third, schedule text two thirds, controls on, never full-bleed". Add O10 and X9 to the register column.
10. **Part 4, add "Copy rules" under Site-wide systems.** One table: register V exclusion list (temple, agora, sanctuary, haven, container, recalibrate, resonance, embodiment), plus two flags for Belle: her Restore definition uses "recalibration", and the live meta description uses "coastal sanctuary". Neither is changed without her agreement.
11. **"The Day" collision.** In decision 26, add: "'The Day' is the formats hub label per register V. The T3 section on home s5 and full day s4 takes the heading 'Arrive. Move. Nourish. Restore.' instead." Apply the same heading at lines 507 and 635.
12. **`base: lead-capture` definition, Part 4 base components.** Add "a one-line collection notice linking to `/privacy-policy`" to the component, so every newsletter, guide, waitlist and app capture carries it (register W).
13. **Part 5 step 7.** Add to the "Anything else" field: "Helper text: please leave out health or medical details, we ask for those privately after booking." Add retention periods for `enquiries` and `subscribers` to the `/privacy-policy` row in 4.25 and to the Part 5 table list.
14. **Unplaced requirements, line 1504.** Replace the "128 of 130" sentence with "Coverage across register A to W is audited in `plan/12-qa-coverage-audit.md`: 210 covered, 19 partial, 11 missing, 9 conflict carried."

## Add to Part 6 content inventory

15. **After item 24.** "Deposit and payment terms (guide p.24 states a 50% deposit). Pages: terms, FAQs, full day. Needed from Belle."
16. **After item 24.** "Whether $899 applies at Beresford and The Vineyard Retreat (`research/09` question 13). Needed from Belle, decision 4."
17. **Item 53.** Replace the source "None" with "Belle: 'I've got some of them in my guide, my retreat guide'. Likely the Beresford folder (Q1) or a weekend guide", status "In hand, blocked", supplies "Belle sends the retreat guide that holds them".
18. **After item 54.** "Whether a second example menu exists (`research/09` question 12). Needed from Belle."
19. **After item 34.** "Photography of the three rotation stations running, guests in frame (Q10, `research/09` question 21). Summer shoot list. Needed from Belle."
20. **After item 6.** "Current Wix cost and renewal date. Launch, decision 16. Needed from Belle."
21. **After item 50.** "ATDW category (Tour or Attraction) and Event listings for dated retreats, and the SATC True South expression of interest. Belle, decision 23."
22. **New item.** "Target number of retreats for summer (register P open questions). Needed from Belle."
23. **New item.** "Journal home section and index as a slider, per Belle's Tailor stories reference (X8). Belle confirms in the prototype walkthrough."

## Page and asset edits

24. **Naiko asset cells.** In 4.1 s8, 4.2 s2, 4.9 s2, 4.10 s2 and the per venue table rows for Naiko Deep Creek and Naiko Encounter Bay, add "la marea naiko jpegs (about 400 files, `assets-index/03`)" as the first photography source, ahead of NAIKO ACCOM and Naiko At The Bluff Content.
25. **4.1 s14 and 4.18 s5.** Change the component on home s14 from "T8 cards, no filter" to "T2 slider of T8 cards" and add X8 to the register column. On 4.18 keep the grid and add a T2 "Recent stories" slider above it.
26. **Media handling, M5 row.** Either add a media balance check line to 4.4 through 4.25, or change "Each page's media plan below is checked against this" to "Checked on 4.1 to 4.3. Remaining pages checked in week three". Add a second line: "Nature, ocean and hiking appear on every image-led page, not only the Fleurieu hub (X10)."
27. **Layout rules, "Luxury feel carried through every page" row.** Add the exceptions by name, 4.18, 4.20, 4.23, 4.24 and 4.25, with the reason for each, or give 4.18 and 4.20 an image-led opening.
28. **Media handling, autoplay row.** Add "On home the T1 hero is the one loop. C6 tiles on home show posters only and play video on `/experiences` alone."
29. **Part 5 step 4.** Replace "yoga or pilates" with "yoga, pilates (merged into one answer if decision 26 merges the pages)".
30. **4.25.** Expand `/questionnaire/<token>`, `/faqs` and `/admin` into full section tables with the same columns as 4.1, including the token expiry and error states, the FAQ question inventory, and the CMS collection list Belle sees.
31. **Search and answer engines table.** Add a row "Core Web Vitals measured on the live Wix site before cutover, retried per register T, so the before and after comparison holds. Week one, repeated week four."
32. **Part 8 opening.** Add "The experiences section, the 8 hour walk-through and the Rising Tides Collective are builds from zero, not improvements, because the live site has almost nothing for any of them (register T)." Add a cut order under the gates: which lean sections drop first if a week slips.
33. **Part 4, add an accessibility row to Layout rules.** "Target WCAG 2.2 AA. Tests: contrast (decision 30), keyboard, reduced motion, TalkBack and VoiceOver in week four."
34. **Part 4, add a mobile behaviour table.** One row per component, C3, C4, C5, C6, T4, T9 and `base: slide-in`, stating touch behaviour and pointing at the research/06 section that specifies it.

## Part 7 edits

35. **Decision 11.** Replace "Ray White Projects SA, YNG Adelaide, and whether 'Burnside' is a third" with "Ray White, Projects SA, YNG Adelaide, and whether Burnside and Projects SA are parts of Ray White or separate clients (register P12, Q7)".
36. **Decision 20, reason.** Remove "$550 is the highest she has heard, so it is not an increase" unless Jess confirms which figures Belle actually heard.
37. **Internal conflicts table.** Add rows for the roughly $700 workshop quote (register P, confirm live, spent or superseded), `plan/10` redirect examples using `/practitioners/` and `/accommodation` instead of the live URLs, and `plan/10`'s "six-step" funnel against plan/11's seven question steps.
38. **Decision 26.** Add the risk from Part 3 row 8: confirm with Belle in the 21-09-2026 walkthrough that the number of The Tailor patterns does not read as copying, given her "don't want to, um, you know, copy too much of the tailor's site and set out".
39. **Decision 2 or the venue table.** Record that Belle's only statement about a Beresford day calls it "an eight hour immersive private group retreat", so the Beresford page and reel serve both paths rather than corporate alone.
