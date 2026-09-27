# La maréa structure build log

Date 27-09-2026. This log records how the structure in `build/design/ux-information-architecture-27-09-2026.md` was built, with Belle's vision brief taking priority where the two differ. Visual design, the Header, Menu and Footer components and the home page belong to the designer. This pass changed the navigation data and the inner pages only.

## The product name

The flagship is now **"The 8 hour immersive retreat"** on every inner page, in page titles, breadcrumbs, meta descriptions and the nav. The name comes from Belle's own sentence: "get them to book a discovery call with me to curate their eight hour immersive retreat" (T33). The UX document suggested "The full day retreat". Belle's vision brief overrides it, and she uses "eight hour immersive" every time she names the sale. The closing band on the buyer pages reads "Curate your 8 hour immersive retreat". The name is exported as `flagshipName` in `site/src/data/settings.ts`. Question 46 asks Belle to confirm it.

## Navigation, before and after

```
Before, header 1440
  Private groups | Corporate | The 8 hour day | [logo] | Experiences | Places to Pause | Menu | [Plan your day]

After, header 1440 (centred logo kept, UX fallback layout)
  Menu | Home | Retreats | Experiences | [logo] | Venues | About | [Plan your day]

After, phone 390
  [menu] ......... [logo] ......... [Plan your day]
```

```
Before, menu overlay (17 links, three tiers)
  01 Private groups and retreats / 02 Corporate teams / 03 The 8 hour day
  The retreat: Experiences, Places to Pause, The Table, Philosophy, Retreat formats
  Discover: The Fleurieu, Journal, Gallery
  La maréa: Our story, Team, Rising Tides Collective, The app, FAQs

After, menu overlay (menuTree, two levels)
  Home
  Retreats
     For private groups
     For corporate teams
     The 8 hour immersive retreat
     Shorter retreats and weekends
  Experiences
     Food and sample menus
  Venues
  About
     Our philosophy
     Our team
  Journal and recipes
  FAQs
  Gift cards
  [Plan your day], contact
```

```
Before, footer                          After, footer
  Plan a retreat | Explore | La maréa     Retreats | Explore | About
  The 8 hour day, Retreat formats,        For private groups, For corporate teams,
  The Table, The Fleurieu, Journal ...    The 8 hour immersive retreat, Shorter retreats
                                          and waitlists, Gift cards, Plan your day |
                                          Experiences, Food and sample menus, Venues,
                                          The Fleurieu Peninsula, Journal and recipes,
                                          Past retreats | Our story, Our philosophy,
                                          Our team, Rising Tides Collective,
                                          The app, coming 2027, FAQs
```

Every page is still reachable from the footer. The Fleurieu page, the Collective, the app and the gallery are footer-only as the UX document asks.

## Each page's first screen

| Page | H1 | Purpose line under it |
|---|---|---|
| `/retreats` | Retreat days for private groups and corporate teams | 8 hour immersive retreats on the Fleurieu Peninsula, with transport from Adelaide and everything taken care of. |
| `/private-groups` | Private group retreats | Birthdays, milestone celebrations, sister weekends, family resets or simply time with people who matter. (Belle, verbatim) |
| `/corporate` | Corporate wellness retreats | A strategic reset for leadership teams and high-performing professionals. (Belle, verbatim) |
| `/experiences/full-day-retreat` | The 8 hour immersive retreat | One curated day on the Fleurieu Peninsula for your private or corporate group, 7am to 5pm, door to door from Adelaide. |
| `/experiences` | The experiences | What you do on the day: ten guided experiences, six to enjoy at your own pace, and the food. |
| `/food` | The flavours of the Fleurieu | Belle's line "Inspired by the elements of a Mediterranean lifestyle ...", with a link "See the sample menus" |
| `/places` | Places to Pause | Our partner venues for the 8 hour immersive retreat, on the coast and in the vineyards of the Fleurieu Peninsula. |
| `/our-story` (About) | Our story | A family owned business originating from the Fleurieu Peninsula, founded by Belle Redden. |
| `/team` | Our team | The hosts and qualified wellness practitioners who run your day. |
| `/fleurieu-peninsula-retreats` | Where is the Fleurieu Peninsula? | The coast and vineyards south of Adelaide where every La maréa retreat happens, for guests coming from interstate. |
| `/journal` | Wellness journal and recipes | Belle's journal intro, unchanged |

No two pages share an H1. The build check found one duplicate, between the home page and the internal styleguide, which is not linked from the site. Drafted lines carry `data-draft` so the notes layer marks them for Belle.

## Sections removed or moved

- **`/retreats`**: the five tile links that each said "Plan your day" now say "Ask about a half day" and the like. The page gained a "Who it is for" section with the two paths. The waitlists sit only here, under `#shorter`.
- **`/private-groups` and `/corporate`**: went from seven sections to five. The example day with its timeline was cut, which also removes the corporate schedule lines ("group pickup from work office", "3 small groups of 4 guests") that confused the birthday host. A list of five inclusions from Belle's guide takes its place, with the retreat times and "See the full day". Reviews now come before questions.
- **`/experiences/full-day-retreat`**: went from eleven sections to six. The guest quote, the unhurried afternoon, the reviews band and the questions band were cut. The full schedule is now open by default, with "What is included" under it. This is the one full copy of the timeline on the site.
- **`/experiences`**: the "One day, from 7am to 5pm" block and the team row were cut. A food block linking to `/food` was added.
- **`/food`**: went from nine sections to seven. The intro line moved into the food philosophy, and the chef and producers section was cut (the chef is on `/team`). "Lunch, course by course" is now "Sample menus" and sits second.
- **`/our-story`**: "The name" band was cut, because the philosophy link covers it. "Our difference" was added with Belle's five lines, each linking to its page.
- **Timeline repetition**: it now appears in full on the full day page only. Venue pages keep a short "A day here" of four lines at most, which links to the full day. Experience pages show the one schedule step they belong to.
- **One "Plan your day" per page body**: this holds on every inner page except `/experiences/full-day-retreat`, where PinnedDay carries its own link. That component belongs to the designer, and a request to hide the link is in `build/notes/requests.md`. The journal index gained its closing band. The waitlist page no longer puts "Plan your day" beside the waitlist form.

## Redirects

None. No URL changed. `/experiences/full-day-retreat` keeps its path, and the breadcrumb now reads Home, Retreats, The 8 hour immersive retreat. `site/public/_redirects` was not created. Redirects from the old lamarea.com.au URLs are still a separate job before launch.

## Persona walk

The walk used `qa/ux-build-personas.mjs` on a static serve of the build, because the dev server was reloading while the designer worked. Screenshots are in `qa/shots/ux-build/`. Every persona reached `/enquire` at both 1440 and 390.

| Persona | Path | Result |
|---|---|---|
| Corporate EA, 15 staff | Home, Retreats, For corporate teams, Plan your day | The page opens on "For corporate teams" and Belle's line, then lists five inclusions and the times. There is one Plan your day in the body, and the funnel arrives prefilled (`audience=corporate`). The number 15 is still unanswered, because the page says "Group sizes vary by venue" until Belle answers question 40. |
| Birthday host, 8 friends | Menu, For private groups, Plan your day | The page opens on "Birthdays, milestone celebrations ...". No corporate schedule lines show. The funnel arrives prefilled. Group size waits on Belle, as above. |
| Instagram visitor | Home, Retreats, See the full day, Plan your day | The Retreats hub says what is sold and who it is for on the first screen, and the full day page names the product in its H1. Two Plan your day links show in the body until the PinnedDay prop lands. |
| Returning visitor | Menu, Food and sample menus, then Journal and recipes | Food and recipes are now named in the menu. Sample menus is the second section on `/food`. The journal H1 names recipes. |

## Still open

- **Belle**: questions 40 to 46 in `build/questions-for-belle-26-09-2026.md`, covering day capacity, the smallest group, whether price is shared on the call, overnight stays, the "Venues" label, the logo position and the product name.
- **The designer**: the requests in `build/notes/requests.md` are the PinnedDay and DayInBrief "Plan your day" prop, the menu nesting from `menuTree`, and the old labels in `funnel-options.ts` and on the home page.
