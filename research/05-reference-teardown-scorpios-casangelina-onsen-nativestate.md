---
title: Reference site teardown, Scorpios, Casa Angelina, Onsen, Native State
project: La maréa website rebuild
agent: reference-site teardown agent 2 of 3
date: 16-09-2026
method: WebFetch only, no browser automation. Every quoted string is verbatim from the fetched page.
---

# Reference teardown 2, Scorpios, Casa Angelina, Onsen, Native State

All copy in double quotes below is verbatim from the named page, fetched 16-09-2026. Where WebFetch could not resolve something (CSS variables, scroll behaviour, animation, image treatment, exact scroll order inside a JavaScript-rendered section), it is marked as needing browser inspection rather than guessed.

Two caveats on this document before anyone builds from it.

None of the four sites exposed hex values or font-family declarations in the markup WebFetch returned, because all four load styles from compiled or external stylesheets. Every palette and typography question in this document therefore needs browser inspection, and no colour or font claim should be taken from this file into the build.

A small number of quotes are trimmed with [...] where the source sentence contains a word banned by the workspace lint. The page is named in every case, so the full sentence can be checked at source.

---

## 1. Scorpios

Pages fetched: `/bodrum-ritual-space`, `/` (home), `/mykonos`, `/wellbeing`, `/agora-experience`, `/bodrum-private-events`, `/mykonos-spa`, `/program`.

### 1.1 Global architecture

Top-level nav, identical across every page: Bodrum, Mykonos, Program, Wellbeing, Bazaar, Music Label, Art, Stories, Agora Experience, plus a persistent "Reserve" control.

Location sub-nav, Bodrum: Bodrum Home, Terrace, Restaurant, Beach House, Ritual Space, Agora Experience, Private Events.
Location sub-nav, Mykonos: Mykonos Home, Program, Restaurant, Terrace, Beach, Spa, House, Private Events.

The single most transferable structural idea on this site is that the booking control is a space picker rather than a form. The "Reserve" panel opens on "Select a space" and lists every bookable space as a named option, each carrying a one-line sensory description. The options are: Restaurant, Beach, Sunset beach, Terrace Music Rituals, Private Event Request, Soho Roc House, Spa, Beach House, Beach House Restaurant, Ritual Space Program, Ritual Space Treatments, Sunset Lounge, and "Check availability".

Note that "Private Event Request" sits inside the same picker as a casual beach booking. The high-value private enquiry is not banished to a contact page, it is one option among the spaces.

### 1.2 Home page, section inventory in scroll order

1. Hero statement, set in capitals: "WE LIVE TO INSPIRE AND BE INSPIRED, TO EXPAND BEYOND LABELS AND BOUNDARIES. WE FIND BEAUTY WHERE CULTURES MEET, NATURE REIGNS AND CREATIVITY RUNS FREE"
2. Positioning paragraph: "Scorpios is a place for inspirational gatherings, born anew by every member of our growing community as we come together in deep connection and fearless openness of mind."
3. Culture paragraph: "The Scorpios way of life is guided by an eclectic [...] stream of ideas, stories and creative talent making their mark across the board, from music and travel to art and design."
4. Spaces grid, each space named with a one-line description.
5. Footer brand statement: "Scorpios is a gathering place where free spirits, artists, and changemakers come together to celebrate, collaborate, and recalibrate to the cadence of nature and the beat of our times."

Visual treatment, scroll behaviour and video handling all need browser inspection.

### 1.3 Mykonos page, section inventory in scroll order

1. Hero: "MYKONOS, GREECE - Our contemporary agora for shared celebration set against the Cycladic sunset and the soulful beat of Scorpios."
2. "What's On" strip, three cards: a program highlight, a Bazaar feature, a new music release.
3. Spa teaser: "Massages and treatments awaken the senses through touch, texture and botanicals."
4. Spaces section, headed "The Source. The Sound. The Sunset", with body copy: "Our spaces are designed for moments of festivity and mindfulness, each imbued with their own energetic potential. The rapture of dancing barefoot in the sand, the joy of deep conversations around a communal table, or the shared awe of an immersive live set, this is where it all happens." (The source uses an em dash before "this is where it all happens".)
5. Restaurant section, "A Taste of Our Culture", CTA "Explore".
6. Bazaar section, headed with a craftsmanship and creativity line, CTA "Discover More".
7. Soho Roc House partner section, CTA "Visit".
8. Newsletter, "Join the Community".
9. Footer.

### 1.4 Ritual Space page, section inventory in scroll order

1. Eyebrow "Bodrum", title "The Ritual Space".
2. Definition paragraph: "Blending temple-like architecture, circular forms and natural stones, the Ritual Space is a serene contemporary sanctuary. A network of versatile spaces designed to integrate sound and wellbeing and support the shift from outer to inner worlds."
3. Section "PROGRAM".
4. Section "Agora Experience", with the subheading "Your Rhythm, Your Routine" and CTA "Learn More".
5. Section "Places to Pause and Reconnect", a numbered list of twelve spaces: 01 Reception, 02 Cold Plunge, 03 Pool, 04 Sauna, 05 Lounge Area, 06 Temple, 07 Watsu Pool, 08 Sound Dome, 09 Herbal Bar, 10 Treatments Rooms, 11 Thai Massage Room, 12 Biohacking Room.
6. Section "The Design", crediting architects and naming awards.
7. Section "RITUAL ELEMENTS".
8. Section "Wellbeing", subheading "Get to Know Our Philosophy", CTA "Learn More".
9. Dated retreat card: "JULY 17–19, 2026 / Scorpios Neuro-Alchemy Retreat", CTA "Learn More".
10. Footer.

Belle has already lifted "Places to Pause and Reconnect" from this page. It is worth her knowing that it is Scorpios' name for a numbered facilities list, because reusing the same phrase for a different job weakens it.

### 1.5 Wellbeing page, section inventory in scroll order

1. "SCORPIOS WELLBEING" with two positioning paragraphs.
2. "PHILOSOPHY" and "Guiding Principles", three named principles each with two paragraphs: Resonance, Embodiment, Transformation.
3. "The Ritual Space", eyebrow "BODRUM", CTA "Discover More".
4. "Unhurried Pleasures", eyebrow "MYKONOS", CTA "Discover More".
5. "Agora Experience", CTA "Learn More".
6. "Scorpios Retreats", subheading "Space for Transformation", CTA "Learn More".
7. Footer.

This is the single best page for Belle to study, because it is a philosophy page that does commercial work. Every principle section ends by routing the reader to a bookable thing.

### 1.6 Agora Experience page, section inventory in scroll order

1. Hero line: "Where the rhythm of scorpios becomes personal practice."
2. "Learn About Your Wellbeing with the Agora Pass".
3. "ABOUT THE AGORA EXPERIENCE".
4. "Join the Agora", subheading "Step into a shared rhythm of practice and discovery."
5. "Daily & Weekly Pass", inclusions numbered 01 and 02, each an all-caps inclusion title with a sentence of sensory detail under it.
6. "Seasonal Pass Additional Inclusions", numbered 01 to 04, then a second block numbered 01 to 03.
7. "Passes", price block. MONTHLY € 600. SEASONAL, and for couples, € 2.200 / € 4.200. "10% Reduction for Soho House Members".
8. Footer.

The inclusions pattern here is directly reusable for Belle's 8 hour retreat: numbered, an all-caps title, then one sentence of what it feels like, never a bullet list of items. Verbatim example: "02 UNLIMITED ACCESS TO WELLNESS FACILITIES / Cold plunges, saunas and infinity pool overlooking the ocean, as well as all-day access to Scorpios' award-winning Ritual Space and herbal elixir bar."

Typos are present in the source ("EXERIENCE", "continuosly", "Craftmanship", "citsy"), which matters only as evidence that even this tier ships imperfect copy.

### 1.7 Private Events page, section inventory in scroll order

This is the closest analogue to Belle's primary conversion and the most important page in this teardown.

1. Title "Private Events, Bodrum".
2. Subheading "Private Events in Bodrum, Tailored to the Occasion".
3. Body: "A versatile setting for weddings and meaningful gatherings, Scorpios Bodrum offers an elemental [...] of sea, stone and sky. Welcome guests in a location that is both intimate and grand, with award-winning architecture and unforgettable views. These spaces can be booked for private events and ceremonies, as can the whole of Scorpios Bodrum depending on the type of request."
4. Contact line: "Contact us at +90 850 818 0008 or request your event below."
5. CTA "Plan your event".
6. Five capability cards, each an all-caps title plus one sentence: UNIQUE LOCATION, CULINARY EXCELLENCE, MUSIC & ENTERTAINMENT, ATMOSPHERIC STYLING, SIGNATURE WELLBEING EXPERIENCE.
7. Areas and offerings, six named spaces each with a sentence of capacity and feeling: Beach House, Ritual Space, Sunset Lounge, Terrace, Restaurant, House.
8. "Celebrate at Scorpios Bodrum" with CTA "Download Brochure".
9. "Host Your Gathering at the Beach House Restaurant" with CTA "Discover the Beach House".
10. Footer.

Four structural lessons for La maréa come off this page. The phone number sits above the form rather than in the footer, so high-value enquiries get a human channel. The CTA is a verb plus the guest's own event, "Plan your event", not "Enquire" or "Contact us". A downloadable brochure sits alongside the form as a lower-commitment capture. The enquiry form itself is hosted externally on JotForm (`jotform.com/243532542562959`), so its field structure needs browser inspection, and since Belle's build goes to Supabase this is a pattern reference only.

One capability sentence is worth taking almost wholesale for Belle's corporate path: "Wellness and mindfulness practice to inspire connection and enhance your gathering."

### 1.8 Mykonos Spa page, section inventory in scroll order

1. "Care & Remedy Spa", two paragraphs.
2. Reassurance line before the CTA: "Our team will reach out to finalize the details of your booking." Then CTA "Plan your visit".
3. Three treatment categories, each all-caps with a paragraph: MASSAGE, SKINCARE, RITUAL.
4. Four named treatments, each with a paragraph and a "BOOK NOW": SEA BREEZE ESCAPE, SACRED HERBAL MASSAGE, SPORTS RENEWAL, AFTER SUN BLISS.
5. Cross-sell to "The Beach, Mykonos", headed "An Invitation to the Water", CTA "Read More".
6. Footer.

The line "Our team will reach out to finalize the details of your booking" is the exact expectation-setting sentence Belle's enquiry funnel needs, because her sale is a call rather than an instant booking.

### 1.9 Scorpios copy patterns

Every space is defined by feeling rather than by facilities. There are no square metres, no capacity numbers and no inclusion lists in the space descriptions, only lines like "A naturally secluded setting with uninterrupted views of turquoise water" and "The perfect place to lose track of time and linger all day".

The brand presents itself as a container rather than a provider, in the line "Scorpios is a container for individual wellbeing [...] practiced through community". The guest is the actor and the venue is the setting.

Time of day is treated as a named material. Sunset, morning, afternoon, evening, "all day", "longer stretches of time" and "unhurried" all do structural work in the copy.

Section names run to two or three words and almost never contain a verb: "The Design", "Ritual Elements", "Guiding Principles", "Unhurried Pleasures", "The Agora Experience".

Headlines use possessive second person. "Your Rhythm, Your Routine", "Tailored to the Occasion", "An Invitation to the Water".

A statement of belief always precedes the offer. The Wellbeing page states the philosophy in three named principles before it sells a single thing.

Palette and typography need browser inspection. The copy describes the architecture as using "soft natural materials, earthy palettes, and organic forms", but that is Scorpios describing its buildings, not its website.

---

## 2. Casa Angelina

Page fetched: `https://www.casangelina.com/` (home).

### 2.1 Section inventory in scroll order

1. Language toggle (English / Italiano), "angelina's letters", "book now".
2. Hero, letter-spaced across two lines: "L O O K / BEYOND LIMITS." then "FIND / TRUE PERFECTION."
3. Scroll prompt: "scroll down to start the experience" on desktop, "swipe up to start the experience" on mobile.
4. Positioning: "Tastemakers of Understated Chic Luxury", then three paragraphs.
5. "e t h o s" section, with the line "Understated chic is our design ethos and subtle details are our raison d'être." and CTA "concept".
6. "Suites", "private / retreats", "Angelina Suite".
7. "Guest Services / that count / the extras": Wellbeing, Pool, Beach, The Grounds, Our Boats, Concierge.
8. "Dining / experience / gourmet", seven named venues each with a lowercase descriptor.
9. "t a s t e" section.
10. "memorable e x p e r i e n c e s", four packaged experiences each with a name, an all-caps sub-line and a paragraph: Chef on Board, Fine Driving on the Amalfi Coast, Romance Retreat, Body & Soul.
11. "I N S T A G R A M @CASANGELINA".
12. Booking panel with "Why book direct:" and an "Important Note:".
13. Footer with address, "Hotel at a Glance", and full sub-navigation carrying a descriptor under every link.
14. Credits page naming the agency (Mediasoul) and four photographers.

### 2.2 Copy patterns

The letter-spaced lowercase section headers ("e t h o s", "t a s t e", "e x p e r i e n c e s") are a typographic device rather than a copy device, and they are both the most imitable and the most dated thing on the site. My recommendation is that La maréa does not copy them, because they read as 2019.

The strongest pattern on the site is that every navigation item carries a descriptor. Not "Wellbeing" but "Wellbeing: me time in style". Not "Terrace" but "Terrace: slow living". Not "Concierge" but "Concierge: let us look after you". This is directly usable for Belle's formats menu.

Packaged experiences follow a three-part shape: a name, a promise in capitals, then one paragraph of substance. "Body & Soul / GETTING BACK TO YOUR BEST SELF / Decompress with this three-night wellness package, which is all about making you feel fit, healthy and stress-free." That shape is exactly what Belle's retreat formats need.

Luxury is proved through sensory specificity rather than adjectives. The site names "the pillowy white Etro cotton sheets dressing your bed" and "garden-grown herb garnishes on your plate": a named brand, a named source, a physical texture, and no adjective stacking.

Slow-living vocabulary carries the register: "rediscover the forgotten rhythms of long, drawn-out days and easy, lingering evenings", "an oasis of peace and quiet", "an airy refuge", "barefoot luxury", "sublime modern minimalism".

The booking panel is unusually transparent, with a "Why book direct:" list and an "Important Note:" that states constraints plainly (adults only from 12 years, no pets). Belle should copy this honesty pattern for the things that constrain her retreats.

### 2.3 Palette and type

Both need browser inspection. The copy repeatedly describes a white-based aesthetic ("a fresh, white-washed aesthetic", "Clean lines and lashings of white [...] the rich tones of nature's palette") but no CSS values were visible in the fetched markup. There is a live weather widget in the footer, which is a small warmth device worth noting.

---

## 3. Onsen Hot Pools & Day Spa

Page fetched: `https://www.onsen.co.nz/` (home).

### 3.1 Section inventory in scroll order

1. Brand line: "Onsen Hot Pools & Day Spa Queenstown's Iconic Retreat". Nav: Experiences, About, Gift Vouchers, Contact, Book, Waitlist.
2. A persistent availability notice, repeated five times through the page: "As our website is a live system, any cancellations will show up on the website as standard availability. We have currently released availability up until 28th February 2027."
3. Hero: "Queenstown Hot Pools & Day Spa" with the line "Pause the adventure and step into something a little more luxurious".
4. Experience cards, each with name, duration, guest count and a paragraph. Verbatim durations and party sizes:
   - Original Onsen + Treatment, "45–minute hot pool + treatment / 2 Guests"
   - Original Onsen Soak Only, "60-minute hot pool 1-4 Guests"
   - Oval Onsen + Treatment, "45–minute hot pool + treatment / 1-2 Guests"
   - Oval Onsen Soak Only, "60-minute hot pool / 1-2 Guests"
   - Tri-Bathe Only, "60-minute steam / hot pool / cold plunge / 1-2 Guests"
   - Treatment only, "Indulge in 1-2 hour Treatments / 2 Guests", flagged "NO SOAK INCLUDED"
   - Pool for Charity, "60-minute hot pool – 100% of the proceeds donated to a local charity / 1-4 Guests"
5. Narrative section headed "Some places you visit. Others become part of your story. Onsen is one of them." with one long positioning paragraph.
6. "Designed by nature, _perfected_ by us." (the italic word is emphasised in the source).
7. "The ultimate in _relaxation._"
8. Three brand pillars in capitals: "BALANCED IN BODY", "GROUNDED IN NATURE", "EMBRACED BY WARMTH".
9. "Our guests say it best", with eight five-star reviews quoted in full.
10. "#ONSENHOTPOOLS" with "SHARE YOUR EXPERIENCE. GET FEATURED."
11. Newsletter signup.
12. Footer: Getting Here with "Complimentary Shuttle" and "Self Drive", hours "Open 9am to 11pm", phone, freephone "0508 UNWIND", email.
13. Closing CTA: "Some things in life are worth planning for. This is one of them." with buttons "Waitlist" and "Book".
14. Credential badges: 2025 World Luxury Spa Awards, Sustainable Tourism (T2025), Qualmark Gold. Credit line "Website and Brand by Whitelaw Mitchell".

### 3.2 Copy patterns and what Belle should take

The experience card is the unit of this site. Name, duration, party size, one paragraph of feeling, book. Every offering is rendered in the identical shape, which makes this the closest working model to Belle's formats menu and the one operating at her scale.

Party size is stated on every card: "1-4 Guests", "1-2 Guests", "2 Guests". Belle's retreats are group products, so her site should do the same, because group size is the first question a private or corporate enquirer has.

Scarcity is handled honestly rather than artificially. The live-availability notice explains why the calendar looks the way it does and names a real date, and a "Waitlist" runs as a parallel CTA to "Book" so a sold-out slot still captures a lead. Belle's booking calendar should have both.

The three-word pillar triad, "BALANCED IN BODY / GROUNDED IN NATURE / EMBRACED BY WARMTH", is directly comparable to Belle's "RESTORE. RECONNECT. REALIGN." and is a useful test, because Onsen's version pairs a state with its source and therefore does more work than three bare verbs.

The page is bookended in the same emotional register, opening with "Pause the adventure and step into something a little more luxurious" and closing with "Some things in life are worth planning for. This is one of them."

Third-party credentials sit in the footer as awards and tourism certification. Belle has partner venues, press coverage and a client list, and none of it currently does this job on her site.

A charity offering doubles as a values signal. "Pool for Charity" donates 100% of proceeds and is sold with the same card shape as everything else.

### 3.3 Palette and type

Both need browser inspection. Cedar, alpine and warmth language dominates the copy, and the brand is credited to Whitelaw Mitchell, but no CSS values were exposed.

---

## 4. Native State

Pages fetched: `/` (home), `/bathhouse/`, `/membership/`, `/events/`, `/contact/`.

### 4.1 Home page, section inventory in scroll order

1. Nav: The Bathhouse, The Studio, Membership, Private Coaching, Events & Workshops, Mentorship, Gift Vouchers, Articles, Contact. Two persistent CTAs, "Book Bathhouse Visit" and "Book Studio Class".
2. Hero: "Where luxury, wellbeing, and peak performance coexist in perfect harmony", with "Join us for a casual session or immerse yourself as a member" and "The Gold Coast's premier bathhouse and studio gym".
3. Three price-led entry cards:
   - Bathhouse, "Casual session from $49", "Indulge in opulent relaxation within our [...] European-inspired bathhouse"
   - Studio, "Casual session from $35", "Re-align and strengthen your body & mind within our premium holistic studio"
   - Membership, "Membership from $60 per week", "Become a Member and enjoy a tailored package to suit your specific [needs]"
4. Four service cards: Private Coaching, Events, Gift Vouchers, Membership.
5. "Articles to inspire and enlighten", three numbered articles (028, 027, 026).
6. Instagram feed, "Follow us on Instagram – @yournativestate".
7. "What our customers say".
8. Footer: address, phone, email, socials, "JOIN THE TEAM", newsletter. "Website by Studio Odea".

### 4.2 Copy patterns

The register is plainer and more transactional than the other three sites, and benefit-led rather than atmosphere-led: "Look, feel, sleep and move better with the Gold Coast's ultimate wellness membership."

The pattern worth taking is that price appears on the home page on every product: "from $49", "from $35", "from $60 per week". This qualifies visitors before they enquire.

Their social copy sits closer to Belle's register than their website copy does: "Energy isn't always about doing more. Sometimes, it's about knowing when to pause. We create space to slow down, reset and reconnect, helping you step away from the demands of the day and return feeling restored, recharged and ready."

### 4.3 Palette and type

Both need browser inspection.

---

## 5. Scorpios lexicon

Word bank harvested from the eight Scorpios pages fetched. Page key: RS = /bodrum-ritual-space, H = home, MY = /mykonos, W = /wellbeing, AG = /agora-experience, PE = /bodrum-private-events, SP = /mykonos-spa.

### 5.1 Nouns for a space

| Term | Verbatim phrase | Page |
|---|---|---|
| Ritual Space | "The Ritual Space" | RS |
| Sanctuary | "a serene contemporary sanctuary" | RS |
| Temple | "a contemporary temple for serenity and resonance" | MY, RS |
| Haven | "A secluded haven dedicated to wellness" | MY, W |
| Container | "Scorpios is a container for individual wellbeing" | W |
| Gathering place | "Scorpios is a gathering place where free spirits... come together" | all footers |
| Agora | "Our contemporary agora for shared celebration" | MY |
| Network of spaces | "A network of versatile spaces" | RS |
| Setting | "A naturally secluded setting" | MY |
| Escape | "A quiet escape, right by the Terrace" | PE |
| Getaway | "a scenic getaway to the water" | PE |
| Stage | "A multidisciplinary stage" | MY |
| Lounge Area | "05 Lounge Area" | RS |
| Sound Dome | "08 Sound Dome" | RS |
| Herbal Bar | "09 Herbal Bar" | RS |
| Cold Plunge | "02 Cold Plunge" | RS |
| Reception | "01 Reception" | RS |
| Elemental | "an elemental [...] of sea, stone and sky" | PE |

### 5.2 Nouns for an experience or offering

| Term | Verbatim phrase | Page |
|---|---|---|
| Ritual | "immerse yourself in our bespoke Sunset Rituals" | MY |
| Ritual Elements | "RITUAL ELEMENTS" | RS |
| Practice | "a steady rhythm of practice across the season" | RS |
| Personal practice | "Where the rhythm of scorpios becomes personal practice." | AG |
| Program | "PROGRAM" | RS |
| Retreat | "Scorpios Retreats" / "Space for Transformation" | W |
| Treatment | "restorative body treatments" | MY |
| Offering | "a variety of wellbeing offerings" | MY |
| Experience | "the Agora Experience" | AG |
| Pass | "Daily and Weekly Passes" | AG |
| Session | "one-on-one sessions" | AG |
| Ceremony | "Ideal for intimate ceremonies" | PE |
| Gathering | "weddings and meaningful gatherings" | PE |
| Immersive ritual | "A wide range classes and immersive rituals" | AG |
| Contrast therapy | "sound healing and contrast therapy" | AG |
| Ice immersion | "ceremonial performance, ice immersion and silk fan movement" | RS |
| Routine | "establishing flexible routines" | W |
| Habit | "cultivate new habits" | RS, AG |
| Guided journal | "WELCOME SET & GUIDED JOURNAL" | AG |
| Experience host | "DEDICATED EXERIENCE HOST" (sic) | AG |

### 5.3 Nouns for a moment or a state

| Term | Verbatim phrase | Page |
|---|---|---|
| Moment | "moments of festivity and mindfulness" | MY |
| Shared moment | "unwind between shared moments" | PE |
| Resonance | "Resonance" (guiding principle) | W |
| Embodiment | "Embodiment" (guiding principle) | W |
| Transformation | "Transformation" (guiding principle) | W |
| Serenity | "serenity and resonance" | MY |
| Slowness | "we welcome slowness" | SP |
| Quiet contemplation | "an atmosphere of quiet contemplation" | RS |
| Contemplation | "ignite contemplation and creative experimentation" | RS |
| Release | "occasions for embodied joy and release" | W |
| Expansion | "as you exhale and embrace expansion" | W |
| Recovery | "support energy, balance and recovery" | RS |
| Rest | "a sustained moment of rest" | SP |
| Clarity | "restore mental clarity" | SP |
| Harmony | "help to restore harmony" | SP |
| Connection | "the [...] connection between mind and body" | SP |
| Unscripted connection | "spontaneity, creativity and unscripted connection" | W |
| Awe | "the shared awe of an immersive live set" | MY |
| Cadence | "recalibrate to the cadence of nature" | all footers |
| Rhythm | "A day spent with us syncs to your rhythm" | W |
| Energy flow | "improving circulation, flexibility and energy flow" | SP |

### 5.4 Nouns for a meal or nourishment

| Term | Verbatim phrase | Page |
|---|---|---|
| Sharing plates | "large communal tables and sharing plates" | MY |
| Communal table | "deep conversations around a communal table" | MY |
| Lighter plates | "serving lighter plates with a focus on seafood" | MY |
| Flavors | "Home to a broad range of flavors that inspire lasting connections" | MY |
| Functional blends | "crafts functional blends from tea sommeliers" | RS |
| Herbal elixir bar | "Scorpios' award-winning Ritual Space and herbal elixir bar" | AG |
| Aperitif | "long outdoor tables invite carefree aperitifs and festive dinners" | PE |
| Mezze | "bite-size mezze" | PE |
| Menu for shared moments | "A menu for shared moments" | PE |
| Time-honored techniques | "inspired by Mediterranean traditions and time-honored techniques" | PE |

### 5.5 Nouns for a time of day

| Term | Verbatim phrase | Page |
|---|---|---|
| Sunset | "until the sunset steals the show" | MY |
| Sunrise-facing | "Sunset and sunrise-facing spaces" | PE |
| Morning | "move intuitively between morning classes" | AG |
| Afternoon | "afternoons by the water" | AG |
| Evening | "evenings shaped by sound" | AG |
| Easing into the evening | "Perfect for easing into the evening after a day by the water" | PE |
| All day | "linger all day" | MY |
| A day spent with us | "A day spent with us syncs to your rhythm" | W |
| The day in its entirety | "See the day as something to embrace in its entirety" | W |
| Longer stretches of time | "over longer stretches of time" | W |
| Across the season | "settle into a steady rhythm of practice across the season" | RS |

### 5.6 Verbs

| Verb | Verbatim phrase | Page |
|---|---|---|
| Pause | "Places to Pause and Reconnect" | RS |
| Reconnect | "Places to Pause and Reconnect" | RS |
| Recalibrate | "recalibrate to the cadence of nature" | footer |
| Recentre | "a space to recentre and recharge" | SP |
| Recharge | "a space to recentre and recharge" | SP |
| Restore | "restore harmony" | SP |
| Release | "an invitation to release" | W |
| Unwind | "wellness facilities to unwind between shared moments" | PE |
| Linger | "lose track of time and linger all day" | MY |
| Drift | "Drift from lounger to lunch as the mood strikes" | W |
| Savor | "set aside some time to savor a nourishing treatment" | W |
| Settle | "settle into a steady rhythm of practice" | RS |
| Return | "Scorpios is a place to return" | W |
| Exhale | "somewhere to hold you as you exhale" | W |
| Emerge | "allowing these quiet parts to emerge" | W |
| Gather | "The ultimate place of gathering" | MY |
| Come together | "new ways of connecting and coming together" | RS |
| Immerse | "immerse yourself in our bespoke Sunset Rituals" | MY |
| Cultivate | "invites you to cultivate new habits" | RS |
| Nurture | "at the intersection of pleasure and nurture" | RS |
| Nourish | "savor a nourishing treatment" | W |
| Awaken | "Massages and treatments awaken the senses" | SP |
| Soothe | "gently soothe and awaken the skin" | SP |
| Quieten | "By releasing tension and quietening noise" | SP |
| Align | "align your energy with the natural pacing of each day" | SP |
| Deepen | "deepen your wellbeing" | AG |
| Host | "Host Your Gathering at the Beach House Restaurant" | PE |
| Plan | "Plan your event" / "Plan your visit" | PE, SP |
| Welcome | "Welcome guests in a location that is both intimate and grand" | PE |

### 5.7 Section names, verbatim

RS: "PROGRAM", "Agora Experience", "Your Rhythm, Your Routine", "Places to Pause and Reconnect", "The Design", "RITUAL ELEMENTS", "Wellbeing", "Get to Know Our Philosophy".

W: "SCORPIOS WELLBEING", "PHILOSOPHY", "Guiding Principles", "Resonance", "Embodiment", "Transformation", "Unhurried Pleasures", "Scorpios Retreats", "Space for Transformation".

MY: "The Source. The Sound. The Sunset", "A Taste of Our Culture", "Join the Community".

AG: "Learn About Your Wellbeing with the Agora Pass", "ABOUT THE AGORA EXPERIENCE", "Join the Agora", "Passes".

PE: "Private Events in Bodrum, Tailored to the Occasion", "UNIQUE LOCATION", "CULINARY EXCELLENCE", "MUSIC & ENTERTAINMENT", "ATMOSPHERIC STYLING", "SIGNATURE WELLBEING EXPERIENCE", "Celebrate at Scorpios Bodrum".

SP: "Care & Remedy Spa", "MASSAGE", "SKINCARE", "RITUAL", "An Invitation to the Water".

Global: "Select a space", "Reserve", "Check availability".

---

## 6. The 30 strongest candidates for La maréa

Ranked. Each with its Scorpios source and the La maréa section it could name.

| # | Term or phrase | Source | Could name |
|---|---|---|---|
| 1 | Select a space | Scorpios booking panel | The booking and formats picker. Replaces a form with a choice of venue, and Belle's choice is real: coastal or vineyard. |
| 2 | Plan your day | after "Plan your event", "Plan your visit" (PE, SP) | Primary CTA sitewide. Belle sells an 8 hour day, so this is literally accurate. |
| 3 | The Day | after "A day spent with us syncs to your rhythm" (W) | The 8 hour retreat section. Her hero product deserves a definite-article name. |
| 4 | Your Rhythm, Your Routine | RS, verbatim | Belle has already floated "Your Retreat, Your Rhythm, Your Routine". Scorpios owns the two-part version, so the three-part version is hers and is stronger for it. |
| 5 | Places to Pause | RS, from "Places to Pause and Reconnect" | The venues section. Halve the Scorpios phrase so it is not a straight lift. |
| 6 | An Invitation to the Water | SP, verbatim | The coastal venues, Naiko Deep Creek and Naiko Encounter Bay. Site-specific, so no clash. |
| 7 | Unhurried | W, from "Unhurried Pleasures" | A section name or a governing adjective. Belle flagged this word herself. |
| 8 | Gathering | PE, "weddings and meaningful gatherings" | The private groups path. Warmer than "groups", less corporate than "events". |
| 9 | Tailored to the Occasion | PE, verbatim | The corporate path subheading. |
| 10 | The Ritual | RS, SP | A named format, or the name for the recurring sequence inside every retreat. |
| 11 | Arrive | Belle's own arc, supported by "Welcome guests" (PE) | First chapter of the scroll story. |
| 12 | Move | Belle's own arc, supported by the movement language in W | Second chapter. |
| 13 | Nourish | W, "savor a nourishing treatment", plus Belle's pillar word | Third chapter, the food and Mediterranean nutrition section. |
| 14 | Restore | SP, "restore harmony", plus Belle's pillar word | Fourth chapter, recovery and treatments. |
| 15 | The Table | MY, "large communal tables and sharing plates" | The food section. One noun does the whole job. |
| 16 | Sharing plates | MY, verbatim | Food copy. Describes exactly what Belle serves and signals the social shape of the day. |
| 17 | Guiding Principles | W, verbatim | The philosophy section, where RESTORE. RECONNECT. REALIGN. lives. |
| 18 | The Philosophy | W, "PHILOSOPHY" | Shorter alternative to the above. |
| 19 | Get to Know Our Philosophy | RS, verbatim | The about section link label, for Belle's own story. |
| 20 | Space for Transformation | W, verbatim | The corporate retreat pitch. Corporate buyers buy team change, not massages. |
| 21 | Meaningful gatherings | PE, verbatim | Private group path descriptor. |
| 22 | Versatile settings for your special occasions and private gatherings | PE, verbatim | The venues intro line, near-usable as is. |
| 23 | Wellness and mindfulness practice to inspire connection | PE, verbatim | The corporate value proposition in one line. |
| 24 | Come Together | RS, "new ways of connecting and coming together" | The corporate or private group section name. |
| 25 | The Source | MY, from "The Source. The Sound. The Sunset" | A venues section, or the local produce and place story. |
| 26 | Elemental | PE, "an elemental [...] of sea, stone and sky" | Adjective for the Fleurieu coastline, since sea, cliff and sky is Belle's exact setting. |
| 27 | Settle | RS, "settle into a steady rhythm" | Opening verb for the arrival moment. |
| 28 | Drift | W, "Drift from lounger to lunch as the mood strikes" | Copy verb for the unstructured middle of the day. |
| 29 | Our team will reach out to finalise the details | SP, verbatim, spelling localised | The line directly under the enquiry form. |
| 30 | Check availability | Scorpios booking panel | The secondary CTA next to "Plan your day". |

Deliberately excluded: temple, agora, ritual space, sanctuary, haven, container, recalibrate, resonance, embodiment, biohacking, sound dome. These are either Scorpios-owned, Greek, or belong to a spiritual register that will read as borrowed on a South Australian coastal site. "Sanctuary" in particular is the most over-used word in Australian wellness marketing and should not appear on La maréa.

### 6.1 Verdict on "The Spaces" and "The Experiences"

Neither should be used, because Belle can do better and Scorpios itself does better.

Scorpios never uses "The Spaces" as a section heading. It uses "Select a space" as a booking instruction and names every space individually. A plural abstract noun is a category label, and category labels are what you write when you have not decided what the section is for.

"The Experiences" is worse. It is the default heading of nearly every wellness site built since 2020, including Native State's "Experiences" nav item and Onsen's "View All Experiences". Using it puts La maréa in the same bucket as a Queenstown hot pool and a Gold Coast gym.

Three specific problems apply to both.

They describe the website's information architecture rather than the guest's day. Belle's agreed direction is "a series of moments rather than a list of inclusions", and "The Experiences" is a list of inclusions with a nicer noun on it.

They force a flat grid. Once a section is called "The Experiences", every offering inside it becomes a tile of equal weight, and Belle's 8 hour private and corporate retreat stops outranking a yoga class.

They do no selling. Compare "The Spaces" against "Places to Pause", or "The Experiences" against "The Day". The second in each pair tells the visitor what happens to them.

Recommended instead, using Belle's own words wherever possible:

| Belle's section | Instead of | Use | Why |
|---|---|---|---|
| Venues and partner accommodation | The Spaces | Places to Pause | Her own shortlisted phrase, from "Places to Pause and Reconnect". Names the benefit, not the asset. |
| The retreat formats menu | The Experiences | The Day, or Choose Your Day | Her product is an 8 hour day. Naming it that makes the scale concrete and the price legible. |
| The four-part scroll story | nothing currently | Arrive. Move. Nourish. Restore. | Already hers, already agreed, and a sequence rather than a category, which is the point of the redesign. |
| The philosophy block | nothing currently | Guiding Principles, holding RESTORE. RECONNECT. REALIGN. | Gives her eight pillar words a home without cluttering the nav. |
| Private group path | The Experiences | Meaningful Gatherings, or Come Together | Speaks to the buyer's occasion: hens, milestone birthday, friends. |
| Corporate path | The Experiences | Space for Transformation, or Bring Your Team | Corporate buyers are purchasing a team outcome. |

On "RESTORE. RECONNECT. REALIGN.", it works, and the closest comparison across these four sites is Onsen's "BALANCED IN BODY / GROUNDED IN NATURE / EMBRACED BY WARMTH". Onsen's triad pairs a state with its source, which carries more than three bare verbs do. If Belle wants to strengthen hers without abandoning it, the same move is available: Restore the body. Reconnect with each other. Realign with the coast. That is a recommendation for her to accept or reject, not a rewrite.

On her eight pillar words (Release, Reconnect, Restore, Realign, Educate, and the word directly after Educate in her list, then Ground, Nourish), eight is too many for a headline and right for a philosophy section. Four of them, Restore, Reconnect, Ground and Nourish, are directly attested in the Scorpios lexicon and read naturally in this register. Educate and the word after it do not, because they are corporate training words that will flatten the atmosphere if they appear in the hero. They belong in the corporate path copy, where they are an asset.

---

## 7. Native State competitive read

### 7.1 What they sell

Two products under one roof in Coolangatta, Queensland, sold as one membership. The Bathhouse holds an infrared sauna, a heated vitality pool at 38°C, a steam room, a cold plunge pool, a traditional cedar sauna and a meditation lounge. The Studio is a "premium holistic studio" gym. Their positioning lines are "Where luxury, wellbeing, and peak performance coexist in perfect harmony" and "The Gold Coast's premier bathhouse and studio gym".

Around those two sit Private Coaching, Events & Workshops, Mentorship, Gift Vouchers, and a content library headed "Articles to inspire and enlighten", numbered to 028.

This is a recurring-visit local wellness venue rather than a retreat business, and that distinction is the whole competitive story.

### 7.2 How they price

Everything transactional is published, which is the sharpest thing about the site.

| Product | Price, verbatim |
|---|---|
| Bathhouse casual | "$49" |
| 3 casual sessions, 45 min | "$129" / "$43 per visit" |
| 3 casual sessions, 90 min | "$199" / "$66 per visit" |
| 10 casual sessions, 45 min | "$389" / "$39 per visit" |
| 10 casual sessions, 90 min | "$599" / "$59 per visit" |
| Studio casual | "Casual session from $35" |
| Membership | "Membership from $60 per week" |
| Event, Triggerpoint Release Masterclass | "$49.00" |
| Event, Seaside Sweat | "$35.00", free for members |
| Event, Friday Knock Offs | "FREE (bookings essential)" |

Four membership tiers are named, The Ultimate, The Essential, The Studio and The Bathhouse, with full inclusion lists, but no membership prices appear on the membership page. The only membership figure anywhere is "from $60 per week" on the home page. Every tier ends in "Enquire" and "Book a Tour". That is a deliberate lead-capture gate on the high-value product, and it is the one pricing decision on the site that matches Belle's situation.

### 7.3 How they handle private and corporate group enquiry

They barely do, and this is the opening.

There is no corporate page, no private hire page and no venue hire page anywhere in the navigation. The contact form has five fields: First Name, Last Name, Email, Phone Number, Message. There is no enquiry type, no group size, no date and no budget.

The contact page copy is written entirely for individual membership: "Not sure which plan or session is right for you? Complete the form and a Native State Wellness Consultant will be in touch to discuss the best membership option for you".

Group bookings appear only as an FAQ answer on the Bathhouse page: "Do we accept group bookings? Yes, please contact us at hello@nativestate.com.au to learn more."

The Events page enquiry form asks "What makes you happy?", "What are you interested in discovering through our workshops?" and "How did you hear about us?" That is a consumer workshop form, not a group enquiry form.

A corporate buyer with a twenty-person budget arrives at nativestate.com.au and finds a $49 casual soak and an email address inside an FAQ.

### 7.4 What their site does better than Belle's current one

Price is visible before the enquiry, with three prices on the home page. Belle's current site makes a visitor enquire to learn anything commercial.

Two booking CTAs persist in the header, "Book Bathhouse Visit" and "Book Studio Class", so the transaction is one click from anywhere on the site.

Every product uses one card shape: name, price, one line. The whole offer is scannable in seconds.

The tiered bundle ladder is explicit, with the per-visit maths done for the visitor at "$39 per visit". That is how they lift average order value without a discount conversation.

A content engine runs behind the site, with 28 numbered articles on topics carrying real search intent, including "Finding Focus With ADHD" and "Postpartum Recovery Tips". That is their organic acquisition, and the SEO and AEO work already in Belle's scope is the equivalent lever.

"Book a Tour" runs as a soft CTA next to "Enquire" on every membership tier, giving an undecided buyer a lower-commitment step.

A human is named on the other end, since "a Native State wellness consultant will be in touch". That sets the expectation that a conversation follows, which is exactly Belle's funnel.

### 7.5 Where La maréa's opening is

The group enquiry itself is the biggest gap. Native State's group path is an email address in an FAQ, while Belle's entire business is the group booking. A purpose-built enquiry funnel that asks group size, date, coastal or vineyard, and occasion, then routes to a discovery call, beats their form outright, and it is already in scope.

The corporate buyer is unserved. There is no corporate page, no team-outcome language, no capability list, no capacity numbers and no invoice or tax framing. Belle can own the corporate register in a category where the nearest comparable operator has none.

Venue variety can become a product. Native State has one building, while Belle has four partner venues across coast and vineyard sleeping 6, 10, 10 and 20 or more. Native State cannot answer "where should we do this", and Belle can make that the first question her site asks.

The whole-day format sits in a different category. Native State sells 45 and 90 minute slots, Belle sells eight hours, and she should never be priced against a casual soak.

Her footage is better raw material. Native State's site runs on Instagram tiles, while Belle has drone footage, professional photography from Beresford Estate and a corporate retreat shoot from Ray White, subject to the quality caveat in her own brief.

What she should take from them, plainly: publish a from-price on every format, keep the high-value private and corporate retreat behind "Enquire", and put two persistent CTAs in the header.

### 7.6 The "first in South Australia" claim

Belle wants to claim she is "the first business in South Australia that are curating these types of luxury wellness experiences".

My assessment is that the claim is not defensible as written and should not be published.

The blocking evidence is Beyond Wellness Co (beyondwellnessco.com.au), a South Australian operator listed by the Barossa regional tourism body and by southaustralia.com. Their own copy on `/wellness-retreats` describes "curated experiences across South Australia with everything from bespoke private escapes and corporate wellbeing getaways to group retreats", alongside "Workplace Wellbeing Solutions", and they name luxury venues including Kingsford The Barossa and Monarto Safari Resort. That is the same sentence Belle wants to claim, using the same three words: curated, luxury, corporate.

Other South Australian operators sit in adjacent territory. Untamed Escapes (untamedescapes.com.au) runs a four-day Fleurieu Peninsula wellness adventure from Adelaide and states they can "handcraft a beautiful wellness escape to suit your private group", on the same peninsula as La maréa. Sequoia Lodge in the Adelaide Hills is listed by southaustralia.com as an "Exclusive Adults Luxury Retreat". Hahndorf Creek Wellness Spa sells five-hour and full-day spa packages. Weemilah Luxury Retreat in McLaren Vale and Barossa Grand Retreats both sell luxury property for corporate retreats and wellness weekends.

Three problems sit underneath the competitor evidence.

"First" is a factual assertion about a date, so Belle would need a founding date for La maréa earlier than every operator above, and none of those dates are established. Beyond Wellness Co publishes no founding year on the page fetched, so the claim cannot even be checked from the public record.

Every load-bearing word is undefined. "These types", "luxury", "curating" and "wellness experiences" have no boundary, so any competitor can rebut the claim by pointing at their own site.

It is a legal exposure as well as a marketing one. An unqualified "first" that a competitor can disprove is a misleading representation under Australian Consumer Law. This is a flag for Belle to take advice on, not a legal opinion.

Safest accurate phrasing, in descending order of strength. All four are defensible from facts already in the brief.

1. "South Australia's only luxury coastal wellness retreat curated end to end on the Fleurieu Peninsula." Narrow and geographic, but it still needs Belle to confirm no Fleurieu competitor before it ships.
2. "Curated luxury wellness retreats on the Fleurieu Peninsula, for private groups and teams." No superlative at all, and the strongest of the four, because it describes the product instead of arguing about rank.
3. "Pioneering luxury coastal wellness retreats in South Australia." "Pioneering" is a character claim rather than a date claim, and is far harder to rebut than "first".
4. If Belle wants a first-mover note in her own voice, it belongs in her founder story as a personal account rather than a site-wide badge. She started doing this on the Fleurieu when nobody else was, and a first-person recollection in an about section carries the same message without functioning as a comparative advertising claim.

What would settle it: a documented La maréa trading start date, plus founding dates for Beyond Wellness Co and for Untamed Escapes' wellness line. Until those three dates exist, "first" should not appear anywhere on the site.

---

## 8. Open items needing browser inspection

1. Palette hex values and font families for all four sites, since none were exposed in fetched markup.
2. Scorpios scroll and transition behaviour, including how the space picker opens and whether the home page uses full-bleed video.
3. The Scorpios private events JotForm (`jotform.com/243532542562959`), its field order and its conditional logic. This is the closest public reference to Belle's smart enquiry funnel.
4. Casa Angelina's hero animation and the "scroll down to start the experience" interaction.
5. Onsen's live booking calendar and waitlist flow.
6. Native State membership prices, which are gated behind "Enquire".
7. The Scorpios `/program` rendered event list, which did not resolve to WebFetch and is probably JavaScript-rendered.
