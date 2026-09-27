# La maréa site structure, UX review and proposed information architecture

Date 27-09-2026. Stage: review only, no site files changed. The build stage works from this file.

Method: every nav component and `site/src/data/settings.ts` read, 24 pages inventoried with Playwright at 1440 and 390 (notes off), four personas walked through by click, Belle's 14-09-2026 transcript read in full. Scripts: `qa/ux-inventory.mjs`, `qa/ux-flows.mjs`, `qa/ux-personas.mjs`, `qa/ux-text.mjs`. Screenshots and `inventory.json` are in `qa/shots/ux/`.

## 1. What Belle sells, in her words

The structure has to follow the business, so this is the yardstick.

- Her buyers: "my target audience are private groups and corporate groups". The market she wants to grow is interstate.
- Her main sale: "the type of sales I wanna be making are those eight hour immersive full day retreats".
- Her next step for a buyer: "get them to book a discovery call with me to curate their eight hour immersive retreat".
- Her point of difference: "it combines amazing locations on the Fleurieu Peninsula, luxury accommodation, and luxury wellness", plus the food.
- The supporting content she asked for: an experiences slider (guided and self-led), places and stays split coast and vineyard, food and signature culinary experiences, philosophy pillars linked to the science, team, a journal of research and recipes, a gallery, the Rising Tides Collective, the app coming 2027, and testimonials.
- The other formats in the content collection: half day (5 hours), Wake Up To Wellness (3 hours), Sunset Reset (3 hours), personalised retreats and the Women's Wellness Weekend. Sunset Reset and the weekend run as waitlists.

So the site has one product (a curated 8 hour retreat day), two buyers (private groups, corporate teams), three ingredients (experiences and food, places, the Fleurieu) and a layer of trust content (philosophy, team, reviews, story). The current structure treats all of these as peers, which is why it feels busy.

## 2. The current structure

```
Header, 1440 (logo centred, no text Home)
  Private groups | Corporate | The 8 hour day | [logo] | Experiences | Places to Pause | Menu | [Plan your day]
Header, 390
  [logo] ............................................ Menu
  sticky bottom bar after the hero: Plan your day

Menu overlay (same at every width, 17 links)
  01 Private groups and retreats      /private-groups
  02 Corporate teams                  /corporate
  03 The 8 hour day                   /experiences/full-day-retreat
  The retreat:  Experiences, Places to Pause, The Table, Philosophy, Retreat formats
  Discover:     The Fleurieu, Journal, Gallery
  La maréa:     Our story, Team, Rising Tides Collective, The app, FAQs
  [Plan your day]  + contact column

Footer
  Stay close (newsletter)
  Plan a retreat: Private groups, Corporate, The 8 hour day, Retreat formats, Plan your day
  Explore:        Experiences, Places to Pause, The Table, The Fleurieu, Journal
  La maréa:       Our story, Philosophy, Team, Rising Tides Collective, Gift cards, FAQs
  Privacy policy, Terms

Pages
/                                   home, 11 sections, 18,257px tall at 1440
├── /private-groups                 6 sections
├── /corporate                      6 sections
├── /retreats                       "Retreat formats", menu only
├── /experiences                    guided + self-led
│   ├── /experiences/full-day-retreat   the flagship, filed under Experiences
│   └── /experiences/[slug]         16 experiences
├── /places                         "Places to Pause"
│   └── /places/[slug]              4 venues
├── /food                           "The Table"
├── /philosophy
│   └── /philosophy/[pillar]
├── /fleurieu-peninsula-retreats    "The Fleurieu"
├── /journal
│   └── /journal/[slug]             4 stories (1 research, 3 recipes)
├── /gallery                        151 words
├── /our-story
├── /team
│   └── /team/[slug]                9 people
├── /rising-tides-collective        128 words
├── /app                            104 words
├── /faqs
├── /gift-cards                     footer only
├── /waitlist                       reached from /retreats only
├── /guides/[slug]
├── /enquire  →  /enquire/thank-you
└── /privacy-policy, /terms, /404, /styleguide (internal)
```

## 3. What the four personas hit

### A corporate EA booking a day for 15 staff

The EA found Corporate in one click at 1440 and two on the phone (Menu, then Corporate teams). The corporate page never says how many people a day can take. It says "Group sizes vary by venue", then shows an example for 12 guests and venues that "Sleep 6", "Sleep 10" and "Sleep 20+". She cannot tell whether 15 works, or whether sleeping capacity matters for a day that ends at 5pm. The page gives no price signal and no line saying price comes on the call. She meets "Plan your day" three times in the page body, plus the header button.

### A woman planning a birthday retreat for 8 friends

She lands well on Private groups, which opens with "Birthdays, milestone celebrations, sister weekends". The page then shows a corporate style schedule ("group pickup from work office", "3 small groups of 4 guests") because the example day is shared with Corporate. The venues read as places to stay the night, so she wonders whether the day is overnight. The Women's Wellness Weekend that might suit her sits two levels away, through Menu, Retreat formats and then a waitlist.

### An Instagram visitor asking what La maréa is

The hero says "Luxury coastal wellness retreats on the Fleurieu Peninsula". The sentence that explains the product ("8 hour retreats for private groups and corporate teams, south of Adelaide") is the smallest type on screen two. It comes fourth in reading order, under "Restore. Reconnect. Realign." and a paragraph about Belle's approach. At 390 the phone header shows only the logo and Menu, so the visitor gets no clue what the site holds until the menu opens.

### A returning visitor looking for the menu or a recipe

The returning visitor clicks "Menu" expecting food and gets the site navigation. The food menu is "Lunch, course by course", 5,285px down a page called "The Table". Recipes take three steps: Menu, Journal (under "Discover"), then the Recipes filter. Nothing in the header says food, recipes or journal.

## 4. Problems, ranked by how badly they stop a visitor

1. The product is never named plainly at the top. Six heroes use the same line shape ("X on the Fleurieu Peninsula"). `/retreats` and `/fleurieu-peninsula-retreats` share the exact H1 "Wellness retreats on the Fleurieu Peninsula", and the home H1 is nearly the same. The facts that sell (a full day, 8 hours, door to door from Adelaide, for your group) sit in small type or further down. A newcomer cannot say what they would be buying after the first screen.

2. The flagship has too many names. It appears as "The 8 hour day", "Full day retreat, 8 hours", "An 8 hour immersive wellness retreat", "Your group's day", "One day, from 7am to 5pm" and "A day shaped around your group". The audiences appear as "Private groups", "Private groups and retreats", "Corporate" and "Corporate teams". "Retreat formats" lives only in the menu. The flagship sits under the Experiences URL with the breadcrumb Home, Experiences, The 8 hour day, so a format looks like an activity. Jess's "private retreat etc" confusion comes from here.

3. Day or stay is unclear. Venues are sold with "Sleeps 6/10/20+" and accommodation language, but the product is a day without an overnight. Group limits for a day are not stated anywhere, so both the EA (15) and the birthday host (8) hit a dead end on the question they came with. Day capacity per venue is a question for Belle and must not be filled in by us.

4. There is no visible way home. The logo is the only Home link and it carries the word home only in its aria label. The phone menu has no Home item. Breadcrumbs with "Home" show on eight templates but not on any top-level page. This is the "no home page" Jess saw.

5. The same content repeats across pages. The 8 hour timeline appears on seven pages (home, private groups, corporate, full day, retreats, experiences and each venue). The Places to Pause row appears on five and reviews on four. Pages run long because of it: home is 11 sections and about 20 screens at 1440, the full day page is 12,586px and corporate is 9,370px on a phone.

6. The menu overlay works like a second website. It holds 17 links on three tiers: three numbered display items, then three groups titled "The retreat", "Discover" and "La maréa" that tell a newcomer nothing. On a phone the FAQs and the Plan your day button sit below the fold of the open menu.

7. Several labels mean nothing to a newcomer. The Table, Places to Pause, The Fleurieu, Rising Tides Collective, Stay close, and "Menu" for the site navigation on a site that also has food menus. Belle's phrases can stay as page titles, but the navigation needs the plain word beside them.

8. Calls to action compete. Each key page has three "Plan your day" links in the body, plus the header button, plus the phone sticky bar. `/retreats` adds five "Read more" links, two waitlists and "See the full day". Four separate email forms appear across the site (newsletter, corporate guide, waitlists and app interest).

9. Thin pages carry full weight. The app (104 words), Rising Tides Collective (128), gallery (151) and waitlist sit in the main menu at the same level as the pages that sell. The corporate guide is "being finished". The journal holds four stories.

10. Food and recipes are hard to find for people who come back (see the fourth persona). This matters more after launch, when Belle posts recipes to Instagram and sends people to them.

## 5. Proposed structure

### Primary navigation, five items plus one button

```
Desktop 1440
  [logo]   Home   Retreats   Experiences   Venues   About          Menu   [Plan your day]

Phone 390
  [logo] ................................................ Menu
  sticky bottom bar after the hero: Plan your day   (unchanged)
```

- Home is a visible text link on desktop and the first item in the phone menu. The logo still links home.
- Retreats is where every buyer starts: who it is for, the full day, shorter formats and how booking works.
- Experiences holds what happens on the day, the wellness sessions and the food.
- Venues is the plain word. The page keeps Belle's title "Places to Pause" as its heading, with "Our partner venues, on the coast and in the vineyards" under it.
- About holds Belle's story, the philosophy, the team and the difference.

Journal, FAQs and gift cards move to the Menu overlay and the footer. The logo sits left on desktop so the five items read as one row, in the order a first visit needs them. This changes the centred logo layout from build spec section 12. If Belle wants the centred logo kept, split the row as Home, Retreats, Experiences, then the logo, then Venues and About.

### Menu overlay, one list

```
Home
Retreats
   For private groups
   For corporate teams
   The full day retreat
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
[Plan your day]
Contact: belle@, info@, phone, Instagram
```

The overlay keeps two levels only, with no numbered items and no group titles. On a phone the list and the button fit in two screens. The photo panel and the contact column can stay at desktop.

### Footer

```
Stay close: newsletter sign-up (the one general email form)

Retreats                     Explore                       About
  For private groups           Experiences                   Our story
  For corporate teams          Food and sample menus         Our philosophy
  The full day retreat         Venues                        Our team
  Shorter retreats, waitlists  The Fleurieu Peninsula        Rising Tides Collective
  Gift cards                   Journal and recipes           The app, coming 2027
  Plan your day                Past retreats (gallery)       FAQs

Contact, Acknowledgement of Country, Privacy policy, Terms
```

The footer is the complete index. Anything not in the header or menu must be here.

### New tree

```
/  Home
├── Retreats                               /retreats  (hub, rewritten)
│   ├── For private groups                 /private-groups
│   ├── For corporate teams                /corporate
│   ├── The full day retreat               /experiences/full-day-retreat  (URL kept)
│   └── Shorter retreats and weekends      section on /retreats, waitlists at /waitlist
├── Experiences                            /experiences
│   ├── each experience                    /experiences/[slug]
│   └── Food and sample menus              /food
├── Venues  (page title Places to Pause)   /places
│   └── each venue                         /places/[slug]
├── About                                  /our-story  (becomes the About hub)
│   ├── Our philosophy                     /philosophy, /philosophy/[pillar]
│   ├── Our team                           /team, /team/[slug]
│   └── Past retreats                      /gallery
├── Journal and recipes                    /journal, /journal/[slug]   (menu + footer)
├── FAQs                                   /faqs                       (menu + footer)
├── Gift cards                             /gift-cards                 (menu + footer)
├── Footer only: The Fleurieu Peninsula    /fleurieu-peninsula-retreats
│                Rising Tides Collective   /rising-tides-collective
│                The app                   /app
└── Plan your day                          /enquire → /enquire/thank-you → discovery call
```

### Page changes

| Page | Action | Reason |
|---|---|---|
| `/retreats` | Rewrite as the Retreats hub and promote to the header | It is the natural front door for buyers, and today it is hidden in the menu with a duplicate H1 |
| `/private-groups`, `/corporate` | Keep, trim to five sections, remove the full timeline | Each page keeps only what is specific to its buyer |
| `/experiences/full-day-retreat` | Keep the URL, rename to "The full day retreat", breadcrumb Home, Retreats, The full day retreat | This becomes the one place the full timeline lives |
| `/experiences` | Keep, add food as a section that links to `/food`, drop the day summary and the team row | Experiences should mean what you do on the day and nothing else |
| `/food` | Keep, rename "Food", move "Sample menus" to the second section | Returning visitors come for the menu |
| `/places` | Keep, nav label "Venues", title stays "Places to Pause" | The nav gets the plain word and the page keeps Belle's phrase |
| `/our-story` | Becomes the About hub: story, the five differences, philosophy summary, team row, past retreats | This gathers the trust content into one place |
| `/philosophy`, `/team` | Keep, demote under About | These are detail pages, reached from About |
| `/gallery` | Demote to About and the footer | At 151 words it supports trust but does not sell by itself |
| `/fleurieu-peninsula-retreats` | Demote to the footer, keep for search, change the H1 to "Where is the Fleurieu Peninsula?" | Its H1 duplicates `/retreats`, and its job is the interstate search visitor |
| `/journal` | Rename "Journal and recipes", in the menu and footer | This makes recipes findable |
| `/rising-tides-collective`, `/app` | Footer only | Belle's own rule is that you join the Collective by attending, so it serves past guests rather than newcomers |
| `/waitlist` | Reached from the Shorter retreats section only | A waitlist is a follow-up rather than a destination |

Nothing is deleted, so no redirects are needed inside the new build. If `/experiences/full-day-retreat` later moves to `/retreats/full-day`, add one 301 from the old path and change `cta.seeFullDay` in `settings.ts`. Redirects from the old live lamarea.com.au URLs are a separate list and still need building before launch, because no `_redirects` file exists yet.

### Names, before and after

| Where | Before | After |
|---|---|---|
| Header | (logo only) | Home |
| Header, menu, footer | Private groups / Private groups and retreats | For private groups |
| Header, menu, footer | Corporate / Corporate teams | For corporate teams |
| Header, menu, footer | The 8 hour day | The full day retreat (subline: 8 hours, door to door from Adelaide) |
| Menu, footer | Retreat formats | Retreats (hub), with "Shorter retreats and weekends" inside |
| Header | Places to Pause | Venues (page title stays Places to Pause) |
| Menu, footer | The Table | Food and sample menus |
| Food page | Lunch, course by course | Sample menus |
| Menu, footer | Our story | About |
| Menu | Philosophy | Our philosophy |
| Menu | Team | Our team |
| Menu, footer | Journal | Journal and recipes |
| Menu, footer | The Fleurieu | The Fleurieu Peninsula |
| Footer | The app | The app, coming 2027 |
| Menu group titles | The retreat, Discover, La maréa | removed |
| Page body | Your group's day, One day from 7am to 5pm, A day shaped around your group | The full day retreat (one name everywhere) |

"Menu" stays as the phone toggle because it is the convention people look for. The food side stops using the bare word by saying "Sample menus".

### Each page: purpose and first screen

The first screen is what shows at 1440 by 900 and 390 by 844 before any scroll.

| Page | One-line purpose | First screen must say |
|---|---|---|
| Home | Tell a newcomer what La maréa is and send them to the right door | The H1 as now or Belle's tagline, then in body size: "Full day wellness retreats for private groups and corporate teams, on the coast and in the vineyards of the Fleurieu Peninsula, door to door from Adelaide." Two path links: For private groups, For corporate teams |
| Retreats | Choose your retreat and see how booking works | H1 "Retreat days for private groups and corporate teams". The three facts: 8 hours, transport from Adelaide, everything taken care of. Two path links |
| For private groups | Show a group of friends or family what their day looks like | Belle's line "Birthdays, milestone celebrations, sister weekends, family resets". A group size line once Belle confirms it |
| For corporate teams | Give a planner the facts to take to their manager | "A strategic reset for leadership teams". Group size, transport from the office and what is included |
| The full day retreat | Walk through the 8 hours | The four steps Arrive, Move, Nourish, Restore with times, 7am to 5pm |
| Experiences | Show what you do on the day | "Ten guided experiences and six to enjoy at your own pace", with the slider starting on screen one |
| Food | Show the food and the menus | "Plant-based Mediterranean food from Fleurieu producers" and a link to the sample menus |
| Venues | Show where the day happens | "Places to Pause", "On the coast and in the vineyards", the map or the four venue cards |
| Venue page | Show one venue | Name, coast or vineyard, drive time from Adelaide, the group size for a day |
| About | Show who is behind it and why to trust them | Belle's photo and a two line intro in her words |
| Journal and recipes | Give readers research and recipes | The filters All, Research and Recipes, visible without scrolling |

### Home page, seven sections at most, in this order

1. Hero: the video, the H1, the plain sentence about the product and two path links. The hero has no "Plan your day" because the header button already carries it.
2. The full day retreat in brief: the four steps with one photo each and a link "See the full day". The pinned scroll can stay if it runs to four steps rather than the full schedule.
3. Experiences: one slider with the guided and self-led experiences and the two signature culinary experiences. It replaces the current experiences slider and the separate Table section.
4. Places to Pause: coast and vineyard with the map. It replaces the Coast and vineyard mosaic and the separate venues section.
5. Our difference: Belle's five points.
6. In our guests' words: the reviews.
7. Plan your day: the closing band, with the one filled button in the body.

Cut from home: "Restore. Reconnect. Realign." as its own section (fold the words into the hero or section 2), the journal teaser, and the Rising Tides and app band (both move to the footer). This takes home from 11 sections to 7 and should roughly halve its length.

### Key pages, five sections at most

```
Retreats hub                    For private groups / For corporate teams
1 Hero + three facts            1 Hero, who it is for
2 Who it is for (2 cards)       2 What the day includes (5 lines + See the full day)
3 The full day in brief         3 Venues that suit your group
4 Shorter retreats and          4 Reviews from this kind of group
  weekends (waitlists)          5 Questions this group asks + Plan your day
5 How booking works:
  questions, call, your day
  + Plan your day

The full day retreat      Experiences               About
1 Hero + the four steps   1 Hero + slider           1 Belle, in her words
2 The full schedule       2 Self-led afternoon      2 Our difference
3 Morning rotation        3 Food (link to Food)     3 Our philosophy (pillars, link)
4 Where it happens        4 Plan your day           4 Our team (row, link)
5 Plan your day                                     5 Past retreats (gallery link)
```

The corporate guide sign-up sits inside the corporate questions section, as now. The full timeline appears on the full day page only. Every other page shows the four steps at most and links to it.

### One path to Plan your day

```
any page
  │
  ├─ header button "Plan your day" (desktop)  or  sticky bar (phone)
  └─ closing band "Plan your day" (one per page body)
        │
        ▼
/enquire   step 1 "Who is the day for?"   (prefilled when arriving from a group page)
        │
        ▼
/enquire/thank-you   →   "Book a discovery call" with Belle
```

Rules for the build:

- Each page body carries one "Plan your day", in the closing band, plus the header button or the sticky bar. Links in the middle of a page say "See the full day", "See the venues" and the like.
- Arriving from a group page prefills the funnel, as it already does with `?format=` and `?source=`.
- Waitlists only appear in the Shorter retreats section, so a waitlist and "Plan your day" never sit side by side elsewhere.
- The site keeps one general email form, in the footer. The corporate guide and the waitlists keep their own forms because each delivers something specific.

## 6. Questions for Belle before the build

These gaps block the personas and cannot be filled without her. They belong in `build/questions-for-belle-26-09-2026.md`.

1. How many guests can each venue take for a day retreat, as opposed to sleeping? The EA with 15 and the birthday host with 8 both stop here.
2. Is there a smallest group size for the full day?
3. Can the site say that pricing is shared on the discovery call, so price stops being a dead end?
4. Is any retreat overnight today, apart from the Women's Wellness Weekend? The answer decides whether venue cards lead with "Sleeps".
5. Is she happy for the nav to say "Venues" while the page keeps the title "Places to Pause"?
6. Does she want the logo centred (current) or on the left (cleaner with a Home link)?
