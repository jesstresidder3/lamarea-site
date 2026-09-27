---
title: Content review, local media pass
date: 27-09-2026
author: Content reviewer
status: Internal, for Jess and the design and media reviewers. Not for Belle.
voice-verbatim-source: Belle Redden, transcript `_context/la-marea-website-brain-dump-transcript-14-09-2026.txt` (cited T and the line number). Double quotes mark her words.
method: Read the shared brief, the Belle alignment review, the full transcript, the questions file, the final sign-off and the requests file. Built the site to /tmp/lm-dist-content (61 pages, exit 0) and linted every HTML file for dashes, banned words, capitals, h1 count, titles and descriptions. Saved the visible text, headings and image alts of all 60 public pages with notes off from the dev server (`qa/content-text.mjs`) and read them page by page. Screenshots of the changed sections at 1440 and 390 in `qa/shots/content/`.
---

# Content review

## Where the words stand

With notes off the site is clean on the house rules. There are **no em or en dashes** in any built HTML file. Every page has **one h1**, a title and a meta description, and no two pages share either. No "To come", placeholder or lorem text shows to a visitor. "South Australian first" appears only inside a notes-layer flag on `/our-story`, which is held back as intended.

Every banned-word hit a visitor can see sits inside Belle's own published copy, a partner bio or a guest review: Our story, one of her eight word definitions, the bios of Kristian Ryan and Zoe, the places intro and the Encounter Bay intro from her live site, her sleep article and one review. They stay verbatim, and the ones she may want to change are in the questions file (item 9 and item 35).

Every visible image has alt text that matches the file and reads naturally. None is empty and none names a venue the photograph does not show, so there is nothing to send the media reviewer.

The biggest gap was the one the alignment review found. **A visitor reading the Day never learned that a call with Belle comes next.** That is fixed on every page that shows the Day or ends in "Plan your day".

## The three changes that matter most

1. **The discovery call is now visible wherever the day is sold.** One line, "A few short questions about your group, then a discovery call with Belle.", now sits under "Plan your day" in the home Day, the corporate and private Day in brief, and every closing band. Belle's words: "get them to book a discovery call with me to curate their eight hour immersive retreat" (T33).
2. **Seven experience tiles now have a line.** Sauna, infrared sauna, pool swimming and relaxing by the fire had no line, and the gut health, journaling and coastal hiking lines were a schedule title or another section's words. All seven are drafted from Belle's words about slowing down, restoration and nature (T48, T55), marked draft and listed for her approval.
3. **The home invitation now names the place and the venues.** Belle said La maréa is "these wellness experiences done in beautiful locations at five star luxury accommodation" (T55). The invitation said none of that.

## Every issue, with the fix or why it waits

### Call to action path

| # | Issue | Before | After |
|---|---|---|---|
| 1 | Discovery call missing from the home Day (alignment fix 3) | Restore panel ended on "See the full day" and "Plan your day" | Adds "A few short questions about your group, then a discovery call with Belle." under the links (`components/day/PinnedDay.astro`) |
| 2 | Same gap in the corporate and private Day in brief | Ended on the two links | Same line under the links (`components/pages/a/DayInBrief.astro`) |
| 3 | Closing bands on the corporate and private pages repeated Belle's personalisation note, already shown with the example day above | "(Note we can curate a personalised retreat to suit your group)" twice per page | The call line in the closing band (`components/pages/a/PathPage.astro`) |
| 4 | The same repeat on the philosophy page, the pillar page, `/food`, `/faqs`, `/retreats` and all 16 experience pages | Belle's note under a "Plan your day" that has nothing to do with the example day | The call line |
| 5 | Venue pages ended on "Plan your day" with no line | No line | The call line (`pages/places/[slug].astro`) |
| 6 | The call line was typed out by hand on two pages | Two hard-coded copies | One setting, `cta.callNote` in `data/settings.ts`, used on 30 pages |

The rule in `data/settings.ts` stays. "Book a discovery call" still opens the calendar only on the thank-you page and funnel step 1, because a visitor who books a call before the funnel skips the questions Belle uses to shape the day.

### Alignment with Belle

| # | Issue | Before | After, or why it waits |
|---|---|---|---|
| 7 | The invitation left out the Fleurieu and the venues (alignment fix 7, item 14) | "8 hour wellness retreats for private groups and corporate teams, south of Adelaide." | "Wellness experiences in beautiful locations on the Fleurieu Peninsula, hosted at luxury partner accommodation. 8 hour retreats for private groups and corporate teams, south of Adelaide." Marked draft. It says "luxury" and holds "five star" back until Belle answers question 7 on Beresford. Questions item 33 |
| 8 | No page says how a guest leaves feeling (alignment item 12) | Nothing on home, the Day or the path pages | Waits on Belle. The alignment review asks for her own sentence before her outcome words go on the page in her name. Questions item 34 offers a starting line |
| 9 | "South Australian first" (alignment fix 15) | Held in the notes layer | Still held. Checked in the built HTML |
| 10 | True South (alignment item 16) | Hidden placeholder | Still hidden, waits on question 23 |
| 11 | Pillar pages beyond Sleep (alignment fix 13) | Nine pillars end in an accordion | Waits on Belle's references. Questions item 39 |
| 12 | App teaser on home (alignment fix 11) | One line in `StayClose` | Left as it is. More words would need facts about the app that nobody has yet (plan/11 item 70). The panel itself is a design item |

### Experience tiles (final sign-off issue 4)

| Tile | Before | After |
|---|---|---|
| Sauna | No line | "Time in the heat to slow down, rest and recover." (draft) |
| Massage | "Individual therapeutic massage experience with Earth House & Spa" above "With The Earth House and Spa" | "Individual restorative massage therapy" (her guide, p.23) |
| Yoga | "Group guided energising yoga or mat pilates session", so the yoga tile offered pilates | "Energising group vinyasa yoga flow" (her guide) |
| Pilates | "Pilates, Mat Pilates (beginner to advanced)" | "Mat pilates, from beginner to advanced" (her words, reordered) |
| Gut health nutrition workshop | The 25 word title of the High Performance Wellbeing workshop | "Learn evidence-based nutrition and lifestyle habits for long-term vitality, with Belle." (draft, built on her Educate line) |
| Infrared sauna | No line | "Time in the infrared sauna at your own pace, in the unhurried afternoon." (draft) |
| Pool swimming | No line | "A slow swim in the plunge pool, in the unhurried afternoon." (draft) |
| Relaxing by the fire | No line | "Settle in by the fire and let the afternoon slow right down." (draft) |
| Journaling and reading | The section intro repeated word for word | "Quiet time to write, read and reflect in a corner of your own." (draft) |
| Coastal hiking | The Nature immersion pillar line, so the tile read as the pillar | "Walk the coastal trails and take in the Fleurieu from the clifftops." (draft) |

Each draft carries `source.type: draft_for_belle` and a review note with the old line, and the tile shows the draft marker in the notes layer. Coastal hiking, journaling and massage also use this line as the first answer on their own pages. Who runs contrast therapy and whether the gut health workshop is the High Performance workshop both stay open (questions 13 and plan/11 Q5).

### House rules and verbatim copy

| # | Issue | Before | After, or why it waits |
|---|---|---|---|
| 13 | Luca's quote in capitals on `/team`, his page and his meta description (final sign-off issue 6) | Mixed capitals | Sentence case with the words unchanged. The original is in the harvest. Questions item 36 |
| 14 | FAQ 1 links a capitalised word | The link word in capitals | The same word in lower case. Questions item 36 |
| 15 | "In 2026 we are looking to explore partnerships" on `/team` will date | As published | Kept verbatim, questions item 35 |
| 16 | Kristian Ryan's bio calls him "Chris" | As published | Kept verbatim, questions item 35 |
| 17 | The hosts paragraph on `/our-story` points to "(left)", "(right)" and "(back)" in a photograph the page does not have yet | As published | Kept verbatim until the hosts photograph arrives or Belle trims it, questions item 35 |
| 18 | Ground ends in a double full stop and uses a US spelling | As published | The record says to ask before changing, so it is asked in questions item 37 |
| 19 | "can be tailored to suit your groups objectives" on the Day page | Missing apostrophe | Already flagged in the notes layer and in questions item 10 |
| 20 | Typos in guest reviews ("particiapted", "reccommend", "Lucas") | As written | Guest words stay verbatim |

### SEO basics

| # | Issue | Result |
|---|---|---|
| 21 | One h1 per page | Pass on all 61 files |
| 22 | Unique title and description | Pass. No duplicates. Descriptions run 106 to 157 characters |
| 23 | `/app` title has no "| La maréa" | By design. `Seo.astro` skips the suffix when the title already names La maréa. No change |
| 24 | Organisation logo in JSON-LD was the SVG favicon (brand agent request) | Now `/brand/logo-primary-sage.png`, 1200px wide |
| 25 | Visible "To come" or placeholder text | None with notes off |

### Requests from other agents

| # | Request | Result |
|---|---|---|
| 26 | Brand agent, the pillar infographic on `/philosophy` | Held. Two of its pillar names differ from the site and the style guide, and the brand agent asked for Belle to confirm first. Questions item 38. The file also has to be copied into `public/`, which belongs to the media or brand owner. Noted in `build/notes/requests.md` |
| 27 | Brand agent, raster logo in `settings.ts` | Done (row 24) |

### Left for others or for later

| # | Issue | Owner |
|---|---|---|
| 28 | The morning rotation is told twice on the Day page (final sign-off issue 7) | Left. It reads better once the rotation photographs exist, and cutting it is a layout call |
| 29 | Home "Our difference" is still a plain list (alignment fix 5). Belle's five lines stay verbatim | Design |
| 30 | The Restore panel of the Beresford example day shows the Naiko bath | Media, noted in requests |
| 31 | The two new call lines use existing classes and no new CSS | Design, noted in requests |

## Waiting on Belle

Questions items 32 to 39 were added today: the seven tile drafts, the invitation line, a line about how guests leave feeling, four verbatim oddities, two case changes, the Ground typo, the infographic pillar names and the pillar references. Earlier items 7, 9, 10, 13, 17 and 23 still hold.

## Build

`astro build` exits 0 with 61 pages, and `astro sync` was run afterwards so the dev server keeps working.
