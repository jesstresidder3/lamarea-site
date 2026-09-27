---
title: La maréa website, content harvest
date: 24-09-2026
status: Internal. Built by the content harvester for the website build. Not for Belle.
voice-verbatim-source: lamarea.com.au live site, the Encounter Bay 8 hour retreat guide, Belle's transcript of 14-09-2026, the four venue websites
---

# La maréa content harvest

Everything the new site can use that already exists in Belle's own words, organised by the new site's sections. Each item carries its verbatim text, where it came from and a status. The JSON seeds in `build/content-seed/` hold the same content in a form the build can load.

## How to read this file

Statuses: **in hand** means the text exists and can be used as is. **In hand but needs Belle's check** means the text exists but is stale, conflicts with another source, names a person or client, or carries a claim or typo Belle should approve. **Not found** means nothing exists in any source.

Quoted text (the lines starting with >) is client copy, verbatim as published on 24-09-2026, typos and punctuation included. That means Belle's own em and en dashes appear inside the quotes. They are hers, not ours, and the JSON seeds replace them (ranges with "to", unspaced word joins with a hyphen, everything else with a comma) and say so in a `dash_note` field on each changed record. Everything outside the quotes is my note.

The live site was harvested with Playwright on 24-09-2026. Wix hides a lot behind interactions, so the FAQ answers, the ten "science" panels and the testimonial slideshow were opened one by one, and the text inside images (the 8 hour schedule, the Rising Tides Collective banner, venue award badges) was read from the full-size image files.

## What opened and what did not

| Source | Result |
|---|---|
| lamarea.com.au, 26 content URLs from the eight child sitemaps plus `/terms-conditions` (linked in the footer, missing from the sitemap) | Opened. All text captured, including hidden accordions, the slideshow and text inside images |
| Encounter Bay 8 hour guide, Drive file 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB | Opened as text through the Drive reader, 29 pages. Image-only content (pages 26 and 27, the Ray White Projects SA and YNG Adelaide case study pages, and any graphic on p.17) did not come through. The PDF is 43 MB, too large to pull down and render page by page here |
| Beresford Estate 8 hour folder, Drive 1IRVPnQQZ4Yeg2DHVODE6fglNbRpYwc_F | Did not open. `get_file_metadata` returned "Requested entity was not found." A listing with `parentId = '1IRVPnQQZ4Yeg2DHVODE6fglNbRpYwc_F'` returned an empty result, and a Drive search for "Beresford" found no retreat files. The live site's Beresford schedule image covers much of the same ground (see The 8 hour day) |
| naikoretreat.com.au | Home page opened. Sub-pages (about, walking trails, FAQs, pampering) returned the host's firewall page "This request was blocked" |
| naikoatthebluff.com.au | Home page opened. Location, about, villa and FAQ pages blocked the same way, so no distance from Adelaide was captured |
| beresfordestate.com.au | Opened: home, /pages/accommodation, /pages/venues, /pages/story |
| The Vineyard Retreat | thevineyardretreat.com.au does not resolve. The official site is thevineyardmv.com.au, found by web search. Opened: home, /stay/, /about-us/, /frequently-asked-questions/ |

## 1. Home

### Hero and opening
> Transforming luxury lifestyle wellness in South Australia through holistic, bespoke retreats and experiences.
>
> La maréa curates bespoke wellness retreats for those who understand that wellbeing is not indulgence — it is foundation.
>
> Set along the Fleurieu coastline, our experiences combine Mediterranean-inspired nourishment, movement, recovery, education and refined heartfelt hospitality.
>
> Each experience is shaped around our guests attending and designed to feel intimate, considered, and quietly transformative.

Source: https://www.lamarea.com.au/ (opening block under the hero video)  
Status: in hand but needs Belle's check  
Note: Hero video has no text overlay beyond the logo and tagline "luxury coastal wellness reimagined" (an image). The first line uses "Transforming luxury lifestyle wellness in South Australia", close to the "first" claim held back by build decision 7.

### Buttons on the live home page
> Enquire About a Bespoke Retreat
>
> Download Private Group Guide
>
> Download Corporate Group Guide
>
> Enquire Within
>
> Join 2026 Waitlist
>
> Discover accommodation partners
>
> Our story
>
> Our philosophy
>
> Partner with us

Source: https://www.lamarea.com.au/  
Status: in hand  
Note: Both "Download ... Group Guide" buttons carry no link or file in the rendered page on 24-09-2026. The guide PDFs are not found (plan/11 item 25).

### 2026 retreats gallery captions
> 2026 La maréa retreats
>
> Beresford Estate - Womens Wake Up To Wellness Retreat
>
> Ray White Projects SA Group -  High Performance Half Day Retreat
>
> Private group of professionals - Wake Up To Wellness Retreat

Source: https://www.lamarea.com.au/ ("2026 La maréa retreats" section, each caption with an "Enquire about..." button)  
Status: in hand but needs Belle's check  
Note: Names a corporate client (Ray White Projects SA). Written permission is plan/11 item 63. The Ray White caption says "High Performance Half Day Retreat" while the Instagram post about the same client calls it "Wake Up To Wellness".

### Experience La maréa (the two paths and the day option)
> Experience La maréa
>
> La maréa is designed to meet you in different seasons and settings. Whether you’re gathering privately, bringing a team together, or exploring a single-day wellness experience, each offering is grounded in the same principles of restoration, connection and considered hospitality.
>
> Private Group Retreats
>
> Intimate, privately curated retreats for friends, families and aligned groups seeking meaningful time away together. Each experience is tailored to your group and hosted across our luxury coastal and vineyard partner properties.
>
> Team & Corporate Retreats
>
> Structured retreats for founders and aligned teams who want to step out of the day-to-day and return with greater clarity, cohesion and sustainable wellbeing practices.
>
> Wellness Day Experiences
>
> A single-day reset designed for groups seeking guided restoration without an overnight stay. Expressions of interest are open for upcoming dates and bespoke bookings.

Source: https://www.lamarea.com.au/  
Status: in hand but needs Belle's check  
Note: Home calls the corporate path "Team & Corporate Retreats" and the day option "Wellness Day Experiences". The retreats page calls them "Corporate Retreats" and "Bespoke Wellness Days".

### Accommodation partners teaser
> Our luxury accommodation partners
>
> La maréa collaborates with a select collection of luxurious South Australian properties, each chosen for privacy, architectural integrity and connection to landscape.
>
> Where aligned in values and guest experience, we are open to curating retreats at other luxury venues upon request. If you have a setting in mind, we welcome the conversation to explore suitability.

Source: https://www.lamarea.com.au/  
Status: in hand

### Our difference (the five differences)
> 01 South Australian based luxury lifestyle wellness retreats & experiences
>
> 02 Built upon on evidence-based lifestyle wellness pillars that support holistic wellness & inspired by the Mediteranean lifestyle
>
> 03 Run by qualified health professionals & experts in their chosen field
>
> 04 Partner with local South Australian companies, supporting local Fleurieu Peninsula farmers, producers & communities
>
> 05 Family owned business originating from the Fleurieu Peninsula

Source: https://www.lamarea.com.au/ ("Our difference")  
Status: in hand but needs Belle's check  
Note: Verbatim, including "Built upon on" and "Mediteranean" in 02. Seed: `differences.json`. Fixing the typos needs Belle's agreement (decision 21).

### Story and philosophy teasers
> Our story
>
> Our bespoke lifestyle wellness retreats & experiences are built upon science.
>
> Our philosophy

Source: https://www.lamarea.com.au/  
Status: in hand  
Note: The line "Our bespoke lifestyle wellness retreats & experiences are built upon science." sits between the Our story and Our philosophy buttons.

### Partners line
> We partner closely with local South Australian producers, food artisans, and wellness experts, celebrating community while delivering authentic, deeply meaningful experiences for our guests.

Source: https://www.lamarea.com.au/  
Status: in hand

### Instagram feed on the home page
A live Instagram widget shows six recent posts from @lamarea_retreats. Their captions are Belle's words and include the only published write-ups of client retreats. They change as she posts, so they are listed under Testimonials and Corporate below rather than treated as fixed copy.

Source: https://www.lamarea.com.au/ (Instagram feed widget, captions read from the image alt text)  
Status: in hand but needs Belle's check

## 2. Private groups

### Retreats page, Private Group Retreats
> Private Group Retreats
>
> For friends and families seeking meaningful time together in a setting that restores rather than overwhelms.
>
> Private Group Retreats are designed for those who want to step away together. Not to fill a schedule, but to create space. Birthdays, milestone celebrations, sister weekends, family resets or simply time with people who matter.
>
> Across a weekend, the environment does much of the work. Ocean air, open landscape, nourishing food and guided movement begin to soften the pace of conversation and daily urgency. Sleep deepens. Meals stretch longer. Devices are put down.
>
> La maréa retreats are grounded in evidence-based lifestyle wellness principles — nutrition, movement, sleep & recovery, nature immersion and connection — but delivered in a way that feels intuitive and unforced. The result is not just a beautiful weekend away, but a subtle recalibration and transformation.
>
> You return home feeling calm, clearer, and more connected to your wellbeing, to yourself and to one another.
>
> Ideal for 6–10 guests, depending on property.

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand but needs Belle's check  
Note: The live group size (6 to 10 guests) conflicts with the guide (10 minimum, 14 maximum at Naiko Encounter Bay). Decision 14. The copy describes a weekend, while the commercial focus is the 8 hour day.

### Home page, Private Group Retreats
> Private Group Retreats
>
> Intimate, privately curated retreats for friends, families and aligned groups seeking meaningful time away together. Each experience is tailored to your group and hosted across our luxury coastal and vineyard partner properties.

Source: https://www.lamarea.com.au/  
Status: in hand

### Instagram, private group posts
> The girls weekend that finally made it out of the group chat!
>
> Whether you’re celebrating a birthday, hens weekend, milestone, engagement, reunion, end-of-year celebration, pre-wedding weekend — or simply want an excuse to get your favourite women together... our team curates private luxury wellness retreats designed entirely for your group!
>
> Think:
>
> • beautiful luxury accomodation across South Australia • yoga, pilates & guided movement • sauna, cold immersion & breathwork • restorative massage & spa experiences • nourishing Mediterranean-inspired food • long-table lunches & private chef curated dining • nature immersion, hiking & coastal walks • wellness workshops with qualified practitioners • plenty of space to slow down, laugh, connect and actually spend quality time together ✨
>
> From a few restorative hours to a full-day retreat or an entire wellness weekend, our La maréa team takes care of the details so you can simply arrive and enjoy!
>
> Your next girls’ weekend could look and feel very special.
>
> Private group retreats now booking for spring & summer.

Source: https://www.lamarea.com.au/ (Instagram feed widget)  
Status: in hand but needs Belle's check  
Note: Useful source for the private group occasions list. Hashtags and the "link in our bio" line are left out.

> Wake Up To Wellness ~ A Private Group Retreat
>
> It was a pleasure to curate this experience for a private group of young professionals, creating space for guests to step away from the demands of their fast-paced working lives, recharge, and explore the foundations of high-performance wellbeing.
>
> Together, we explored an important part of sustainable high performance: how capacity needs to be supported by lifestyle wellness habits. The physical, cognitive and emotional resources you have available to meet the demands of your work are shaped by how you sleep, move, nourish, recover and regulate stress!
>
> Through yoga, a seasonal healthy breakfast, nervous system regulation practices, breathwork and evidence-based wellbeing education, we explored practical lifestyle wellness strategies to support energy, stress resilience, recovery and sustainable workplace performance.
>
> And what a dreamy location to host this morning retreat at @kurralta.house ✨

Source: https://www.lamarea.com.au/ (Instagram feed widget)  
Status: in hand but needs Belle's check  
Note: Names a venue (Kurralta House) that is not one of the four partner venues.

### Encounter Bay guide, founder note for private groups
> La maréa was created as an invitation to pause. Not to step away from ambition, but to support it more sustainably.
>
> The Fleurieu Peninsula has always been home for me. It shaped my early connection to the ocean, movement and nourishing food long before I formally studied exercise and nutrition science. Those formative years immersed in nature, combined with my professional background working in high performance sport and evidence based lifestyle wellness, form the foundation of La maréa.
>
> Over time, I’ve seen that true health and high performance are not built through intensity or quick fixes. They are built through realistic, sustainable and restorative wellbeing habits that protect energy, capacity and resilience.
>
> My private group bespoke retreats brings those principles together. We create space for your group to step away from the demands of everyday life, reconnect as a team, and return with practical tools that support sustainable wellbeing and performance long after the retreat ends.
>
> Inside these pages, you’ll find everything you need to know about what your Private Group Full Day Retreat at Naiko could look like. I look forward to curating this experience for you and your team.. your luxury retreat booking with us is waiting!
>
> With gratitude,
>
> Belle Redden
>
> Founder, La maréa

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.5 "A note from Belle"  
Status: in hand but needs Belle's check  
Note: Strongest first-person copy Belle has written for the paths. The guide cover (p.2) says "Private Corporate & Team Retreat" and p.4 says "Private Group Retreat", so the document serves both.

## 3. Corporate

### Retreats page, Corporate Retreats
> Corporate Retreats
>
> A strategic reset for leadership teams and high-performing professionals.
>
> Corporate retreats are designed for teams who understand that sustainable performance requires recovery, clarity and nervous system regulation — not just output.
>
> Drawing from La maréa’s ten evidence-based pillars each retreat integrates structured movement, restorative wellness practices, Mediterranean-inspired nourishment and practical lifestyle wellness education. The experience is private by design, creating psychological safety and space for meaningful conversation without distraction.
>
> This is not a conference and not a bootcamp. It is an intentional luxury reset for teams who carry significant responsibility.
>
> When leaders return regulated and restored, decision-making sharpens, communication strengthens and long-term resilience improves.
>
> Suitable for leadership teams and groups of up to 20, depending on venue.

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand but needs Belle's check  
Note: "This is not a conference and not a bootcamp" is an antithesis the build's own copy must not copy, but it is Belle's published line. "groups of up to 20" conflicts with the guide's 14 maximum at Encounter Bay.

### Home page, Team & Corporate Retreats
> Team & Corporate Retreats
>
> Structured retreats for founders and aligned teams who want to step out of the day-to-day and return with greater clarity, cohesion and sustainable wellbeing practices.

Source: https://www.lamarea.com.au/  
Status: in hand

### Contact page, corporate and private line
> Planning a Retreat for Your Team or Private Group
>
> Whether it's a corporate offsite designed around recovery and sustainable performance, or a private retreat for family and friends, every La maréa experience is built around you — your people, your goals, your pace. Book a discovery call with our team below to explore whats possible.
>
> Book a Discovery Call

Source: https://www.lamarea.com.au/contact  
Status: in hand

### Corporate case studies
> La maréa x Ray White Projects SA ~
>
> Our team loved curating a luxury wellness retreat for the Ray White Projects SA team yesterday — creating space for guests to step away from the demands of everyday work, recover, connect as a team and simply enjoy being present together.
>
> Through movement, nourishment, breathwork, recovery and evidence-based wellbeing education, the morning explored the key foundations of wellbeing and practical strategies to:
>
> → Manage stress → Improve energy & focus → Build resilience and capacity → Reduce burnout risk → Support overall wellbeing → Sustain high performance, both professionally and personally
>
> High performance requires recovery.
>
> Because when you have the energy, capacity and resilience to look after yourself, you’re better equipped to show up as the best version of yourself — at work and in life!
>
> And collectively, this creates a stronger, more connected and resilient team — better equipped to thrive and perform together.
>
> Wellbeing isn’t separate from performance — it’s the foundation of it.
>
> A beautiful morning in McLaren Flat with a wonderful team. Thank you to Ray White Projects SA for inviting La maréa to curate this experience for your group!

Source: https://www.lamarea.com.au/ (Instagram feed widget)  
Status: in hand but needs Belle's check  
Note: Client named. Permission needed (plan/11 item 63).

> Wake Up To Wellness ~ an immersive luxury retreat designed for a high-performing team. @raywhiteprojectssa
>
> It was a pleasure for our team to curate this luxury wellness experience for the Ray White Projects SA team last week, creating space for guests to step away from the demands of real estate, recharge, reconnect and invest in their wellbeing.
>
> The morning brought together yoga, a wholesome seasonal breakfast, breathwork, contrast therapy, massage and evidence-based wellbeing education, before finishing for an interactive pasta-making masterclass and nourishing long-table lunch — creating space to explore the foundations of wellbeing that support energy, focus, stress resilience and sustainable workplace performance.
>
> What a fabulous morning this was ✨

Source: https://www.lamarea.com.au/ (Instagram feed widget)  
Status: in hand but needs Belle's check

Guide pages 26 and 27 carry the headings "2 0 2 6 C O R P O R A T E G R O U P R E T R E A T S | R A Y W H I T E P R O J E C T S S A" and "... | Y N G A D E L A I D E". The rest of each page is imagery the Drive reader did not return. Status: **not found** beyond the headings. Belle supplies the case study words, photos and permission for both clients (plan/11 item 63).

### Corporate testimonials
Four Google reviews name a corporate retreat: Alyse Hean, Chelsea Casey, Justin Kurenda and Levi Sigston (team bonding, contrast therapy). Full text under Testimonials.

### The corporate offsite page
Source: None  
Status: not found  
Note: No corporate offsite or Fleurieu offsite copy exists beyond the above. Hero lines for the two paths are decision 26.

## 4. The 8 hour day ("The Day")

### The live example: Beresford Estate, corporate, 12 guests
This is the "really basic sort of example on the retreats page" Belle mentions in the transcript. It is a single image, so none of it is indexable text today. Transcribed from the full-size PNG, keeping its separators as shown (some time ranges use an en dash, some a hyphen).

> EXAMPLE FULL DAY (8 HOUR) RETREAT SCHEDULE
>
> BESPOKE LUXURY CORPORATE WELLNESS DAY - 12 guests
>
> (Note we can curate a personalised retreat to suit your group)
>
> **7 : 00 AM – 8 : 00 AM**  Luxury private transfer - Group pickup from work office at 7:00 am
>
> **8 : 00 AM – 8 : 15 AM**  Arrival to Beresford Estate / Warm welcome drinks, refreshments & group connection
>
> **8 : 15 AM – 9 : 00 AM**  Energising Group Vinyasa Yoga Flow or Mat Pilates Session
>
> **9 : 00 AM – 9 : 30 AM**  Nourishing wholefood seasonal breakfast & beverages, group connection time
>
> **9 : 30 AM - 10 : 00 AM**  Group guided breathwork, meditation, mindfulness & nervous system regulation session
>
> **10 : 00 AM - 12 : 20 AM**  Premium wellness rotations commence (40 minutes per rotation, 10 min changeovers - split into 3 small groups of 4 guests): / Experience 1: Individual Restorative Massage Therapy / Experience 2: Contrast Therapy Experience (sauna, breathwork & cold plunge) / Experience 3: Lifestyle Wellness Workshop: The Foundations of High Performance Wellbeing: Build Lifestyle Habits for Energy, Focus & Burnout Prevention
>
> **12 : 20 AM – 12 : 30 PM**  Refresh & recovery transition, drinks & refreshments / (showers available, change in preparation for group culinary experience)
>
> **12 : 30 PM - 2 : 00 PM**  Shared chef curated Mediterranean lunch provided by Beresford
>
> **2 : 00 PM - 3 : 45 PM**  Recovery Time / Unstructured restorative time as a group for team bonding with access to; / Vineyard Hiking / Plunge Pool swimming / Relaxing By The Fire / Accessing Recovery Lounge Equipment
>
> **3 : 45 PM – 4 : 00 PM**  Closing reflection & wellness gift bags presented upon departure at 4:00 pm
>
> **4 : 00 PM – 5 : 00 PM**  Luxury private transfer back to Adelaide - Group drop off to work office at 5:00 pm

Source: image "_FULL DAY RETREAT BERESFORD 2026.png" on https://www.lamarea.com.au/luxury-retreats (Wix media 6ffd4a_17ef8fbebcce4d19b21507bd826ca383)  
Status: in hand but needs Belle's check  
Note: "12 : 20 AM" appears twice where 12:20 PM is meant. The heading block is set in capitals in the image; the build must not reproduce that. The " / " separators are mine, marking line breaks inside each time slot. Every stated time: 7:00, 8:00, 8:15, 9:00, 9:30, 10:00, 12:20, 12:30, 2:00, 3:45, 4:00 and 5:00, with 40 minute rotations and 10 minute changeovers.

### Encounter Bay guide, flow and times
> Full Day 8 hr Retreat - 12 guests
>
> Here’s an example of what you can expect during your luxury private wellness retreat with us at Naiko Encounter Bay.
>
> Overview of Experience Design & Flow
>
> Full-day wellness immersion experience designed around movement, recovery, nourishing food, education, connection & nervous system support
>
> Three-tier wellness rotation system over the morning (4 guests per station) including massage, contrast therapy & wellness workshop
>
> Private chef-led Mediteranean lunch in the middle of the day
>
> Unstructured restorative time in the afternoon with access to pool, sauna, ocean, coastal walks, relaxing by a fire & team connection

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.17  
Status: in hand but needs Belle's check  
Note: The p.17 text layer has no hour-by-hour times. If the page carries a timed graphic, it did not come through the Drive reader.

> RETREAT TIME: 8AM-4PM (APPROX. PICK UP 7AM, DROP OFF 5PM)
>
> 12 GUESTS, NAIKO ENCOUNTER BAY
>
> 2026 DATES & AVAILABILITY TBD.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.24  
Status: in hand

### Morning movement and the rotation
Movement: "Energising Group Vinyasa Yoga Flow or Mat Pilates" (guide p.23, Beresford example), "Group guided energising yoga or mat pilates session" (guide p.15). Rotation: "Three-tier wellness rotation system over the morning (4 guests per station) including massage, contrast therapy & wellness workshop" (guide p.17); at Beresford, "40 minutes per rotation, 10 min changeovers - split into 3 small groups of 4 guests". The three stations are massage, contrast therapy and The Foundations of High Performance Wellbeing workshop. Status: in hand but needs Belle's check. plan/11 item 17 asks about rotation length, how many times through, yoga before or after the rotation and breakfast timing. The Beresford example answers all four for that day (40 minutes, once through, yoga first, breakfast at 9:00). The Encounter Bay text answers none of them.

### Inclusions
> This retreat is designed to feel seamless. From the moment you arrive you are completely looked after by our team.
>
> Everything to follow is included in your day, unless marked as optional.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.10  
Status: in hand

> Your luxury retreat includes a curated day program designed around movement, recovery, nourishing food, nervous system support, nature immersion, education and connection. All sessions are delivered by qualified health and wellness practitioners in South Australia and can be tailored to suit your groups objectives.
>
> INCLUDED WELLNESS SESSIONS AND EXPERIENCES
>
> Group guided energising yoga or mat pilates session
>
> Group guided meditation, mindfulness, breathwork & nervous system regulation session
>
> Group guided contrast therapy experience (infrared sauna & cold plunge)
>
> Individual therapeutic massage experience with Earth House & Spa
>
> Lifestyle wellness workshop: The Foundations of High Performance Wellbeing: Build Lifestyle Habits for Energy, Capacity, Stress Management & Burnout Prevention
>
> Luxury wellness gift bag valued at over $50
>
> Take home educational resources to support a healthy sustainable lifestyle post retreat

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.15 "Lifestyle Wellness Experiences Included"  
Status: in hand but needs Belle's check  
Note: Gift bag "valued at over $50" here and "(value $50+)" on p.23. The sleep journal post says the gift bags include a Canningvale silk eye mask. Transport from Adelaide is included (p.23) and matches the FAQ.

> GUEST AMENITIES
>
> Full-day exclusive hire of Naiko Villa, Encounter Bay
>
> Luxury recovery environment including sauna, plunge pool, recovery lounge & relaxation zones
>
> Premium wellness equipment and complete setup (yoga mats, props, bolsters, towels, therapy stations)
>
> Shower, change and reset facilities

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.16 "Guest Amenities Included"  
Status: in hand but needs Belle's check  
Note: "Full-day exclusive hire" is the exclusive hire wording.

> Summary of Full Day (8 hr) Retreat Inclusions
>
> This is a complete curated La maréa experience, refer to the retreat schedule seen on p. 17 for reference on how the day will flow. Designed for teams and groups seeking the full integration of luxury recovery, food, movement, and wellness education - within a 5 star venue and flexibility to refine select elements to align with your team’s priorities.
>
> SUMMARY INCLUSIONS PER PERSON - SEE P.24 FOR QUOTE.
>
> **Wellness Experiences**
>
> Energising Group Vinyasa Yoga Flow or Mat Pilates
>
> Guided Group Breathwork, Meditation, Mindfulness & Nervous System Regulation
>
> Individual Restorative Massage Therapy
>
> Guided Group Contrast Therapy Experience
>
> Group Lifestyle Wellness Workshop
>
> **Food, Beverage & Culinary Experience**
>
> Nourishing wholefood seasonal organic breakfast
>
> Private shared 3 course Mediterranean-inspired lunch with award-winning chef Luca Guiotto
>
> Fresh, local and seasonal wholefood snacks & refreshments over the day
>
> Coffee, herbal tea, mineral water, tonics and organic cold-pressed juices
>
> (note wine can be discussed as an option to be paired with Lunch)
>
> Mediterranean-inspired menu over the day with an emphasis on plant-based whole foods
>
> **Guest Amenities & Transport**
>
> Luxury private return group transport from Adelaide
>
> Full-day exclusive use of 5 star venue: Naiko at the Bluff, Encounter Bay
>
> Access to luxury recovery environment including sauna, plunge pool & relaxation zones
>
> Easy coastal access for hiking and ocean swimming
>
> Premium wellness equipment and complete setup provided
>
> Shower and change facilities
>
> Luxury wellness gift bag to take home (value $50+)
>
> **Retreat Curation & Expert Facilitation**
>
> Hosted and facilitated by qualified wellness practitioners and experienced industry professionals
>
> Bespoke retreat itinerary curated around the needs, goals and wellbeing priorities of the team or group
>
> Expert-led small-group experiences designed to provide a personalised experience for every guest
>
> Dedicated La maréa hosts throughout the retreat
>
> Full retreat coordination and event management
>
> Premium hospitality and guest service from arrival through to departure

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.23  
Status: in hand but needs Belle's check

> This is an all-inclusive 8 hour luxury wellness retreat delivered by qualified health and wellness practitioners, as per this retreat guide and schedule on p.17.
>
> A completely curated luxury experience where everything is taken care of — venue, meals, wellness sessions, experiences, and clean-up — allowing your group to simply arrive, relax, and enjoy quality time together.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.24  
Status: in hand

### Group size and minimums
> 10 guests minimum are required for a booking.
>
> 14 guests maximum at this venue.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.24  
Status: in hand but needs Belle's check  
Note: Conflicts with the live retreats page, which says private groups suit 6 to 10 guests and corporate groups run up to 20, depending on venue. Both worked examples are 12 guests. Decision 14.

### Booking terms in the guide
> Kindly note that this quote is valid for two weeks from the date issued and booking will be pending team and venue availability.
>
> Upon booking we require a 50% group booking deposit to secure the venue and book our team in to your chosen dates.
>
> Kindly note that this quote is valid for two weeks from the date issued and bookings will be pending team availability.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.4 and p.24  
Status: in hand but needs Belle's check  
Note: The 50% deposit conflicts with the live Terms & Conditions, 2.2: "We do not currently take deposits due to the way our experiences are run, we require full payment at the time of booking."

### Price (internal, not for publication)
> **EXCLUSIVE INTRODUCTORY LA MARÉA X NAIKO RATE:**
>
> **$899 PER GUEST**
>
> **BASED ON A 12-GUEST PRIVATE RETREAT — $10,788 TOTAL**

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.24  
Status: in hand, **not for publication**  
Note: Recorded for Jess only. Build decision 10 keeps prices off the site; `price_internal` in the seeds carries `for_publication: false`.

### Next steps and sign-off in the guide
> Next Steps
>
> For groups who value meaningful, quality experiences and are ready to slow down, reset, and realign in a supportive, elevated environment.
>
> Here’s what’s next:
>
> BOOK A CALL
>
> If you’d like to talk through whether this retreat is the right fit for your group or have any questions at all, you’re welcome to book a call with Belle and the La maréa team.
>
> SECURE YOUR BOOKING
>
> If your group is ready to secure your venue and retreat booking, please arrange to pay your 50% deposit via emailing Belle directly belle@lamarea.com.au.
>
> GET IN TOUCH
>
> For any quick questions, clarifications or special circumstances, contact us directly.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.28  
Status: in hand  
Note: "BOOK A CALL" links to calendly.com/belle-lamarea/30min, not the Google Calendar link on the live site.

> Restore. Realign. Reconnect.
>
> We can’t wait to welcome your private group to Naiko at Encounter Bay, where we’ll curate your bespoke La maréa retreat experience.
>
> If you’re ready to restore, realign, and reconnect, now is the time to take inspired action.
>
> Your most restorative weekend of 2026 awaits. We look forward to seeing your group arrive, exhale, and fully unwind together — while we guide and empower you all with the tools for sustainable, healthy living.
>
> Warmly,
>
> the La maréa hosting team xx

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.29  
Status: in hand  
Note: Says "weekend" in an 8 hour day guide.

### Not found for the day
An hour-by-hour run sheet for Encounter Bay; whether the Beresford example is typical; what the day looks like at Naiko Deep Creek for 6 guests; the Beresford Drive folder and its reel. Seed: `day.json`.

## 5. Experiences

Heading from Belle's wording ideas: "Your Retreat, Your Rhythm, Your Routine" (transcript, Wording ideas). The ten guided experiences are named in Belle's transcript note on the Bathhouse Albion reference: "sauna, massage, contrast therapy, chef-led pasta making masterclass, chef curated mediterranean dining, yoga, pilates, meditation & mindfulness , gut health nutrition workshop, lifestyle wellness & nutrition consultations". The six self-led activities come from the guide p.15 list and the transcript. No experience has a finished description written for the purpose. What exists is the line items below, spread across the guide, the schedule image, practitioner bios and the science panels. Seed: `experiences.json`.

### Ten guided experiences

#### 1. sauna
Name as published: Infrared sauna (guide p.15, self-led list); sauna within contrast therapy  
Practitioners as published: Kristian Ryan, Third Spaces (live bio)  

> Sleep optimisation, relaxation and use of recovery modalities such as a sauna, contrast therapy & massage

Source: https://www.lamarea.com.au/philosophy (Sleep & Recovery pillar)

> - Heat or Cold Therapy Sessions (Traditional Finnish wood-fired sauna protocols, with the sauna temperature holding at 80-100 Celsius and Ice bath )

Source: https://www.lamarea.com.au/kristian-ryan (Services & offerings)

> Sauna & Heat Therapy
>
> Regular infrared/Finnish sauna bathing benefits cardiovascular and rheumatological health, and exercise recovery. (Hussain & Cohen, 2018)
>
> Lowers cardiovascular events and mortality; improves vascular function, blood pressure, and stress. (Laukkanen et al., 2018; Hussain & Cohen, 2018)
>
> Improves self-reported well-being and sleep. (Laukkanen et al., 2024)
>
> Supports recovery and relaxation via autonomic mechanisms. (Ferreira et al., 2022)

Source: https://www.lamarea.com.au/philosophy (The Science, Sleep & Recovery)

> Infrared sauna

Source: Encounter Bay guide p.15 (OPTIONAL SELF LED ACTIVITIES DURING UNSTRUCTURED RESTORATION TIME)

Status: in hand but needs Belle's check  
Note: No standalone sauna description exists. Conflict carried from plan/11: the transcript says "sauna" in the guided list and "infrared sauna" in the self-led list. Whether La maréa brings a mobile sauna is plan/11 item 19.

#### 2. massage
Name as published: Individual Restorative Massage Therapy  
Duration as published: 40 minutes per rotation (Beresford example); 60 or 45 minutes (Courtney Selfe services)  
Practitioners as published: Courtney Selfe, The Earth House and Spa  

> Individual therapeutic massage experience with Earth House & Spa

Source: Encounter Bay guide p.15

> Individual Restorative Massage Therapy

Source: Encounter Bay guide p.23

> Experience 1: Individual Restorative Massage Therapy

Source: image "_FULL DAY RETREAT BERESFORD 2026.png" on https://www.lamarea.com.au/luxury-retreats

> Remedial Massage & A Good Nights Sleep

Source: https://www.lamarea.com.au/luxury-retreats (What a weekend with us looks like...)

> 60 or 45 minute deep tissue remedial massage
>
> 60 or 45 minute restoration & relaxation massage

Source: https://www.lamarea.com.au/courtney-selfe (Services & offerings)

> Massage & Relaxation Therapies
>
> Reduces muscle pain, joint discomfort, and DOMS. (Weerapong et al., 2005; Moyer et al., 2004)
>
> Lowers anxiety, perceived stress, and depressive symptoms. (Fritz et al., 2014; Hou et al., 2017)
>
> Improves recovery, sleep quality, and relaxation. (Field, 2016; Pugh et al., 2017)

Source: https://www.lamarea.com.au/philosophy (The Science, Sleep & Recovery)

Status: in hand but needs Belle's check

#### 3. contrast therapy
Name as published: Contrast Therapy Experience  
Duration as published: 40 minutes per rotation (Beresford example); 60 or 90 minutes (Kristian Ryan services)  
Practitioners as published: Kristian Ryan, Third Spaces (live partners page); Jaimi Baker, PEAQ Performance (guide p.21 says she delivers contrast therapy)  

> Group guided contrast therapy experience (infrared sauna & cold plunge)

Source: Encounter Bay guide p.15

> Guided Group Contrast Therapy Experience

Source: Encounter Bay guide p.23

> Experience 2: Contrast Therapy Experience (sauna, breathwork & cold plunge)

Source: image "_FULL DAY RETREAT BERESFORD 2026.png" on https://www.lamarea.com.au/luxury-retreats

> Contrast Therapy (Sauna & Ice Bath)

Source: https://www.lamarea.com.au/luxury-retreats (What a weekend with us looks like...)

> - Guided 60 or 90 minute Contrast Therapy Sessions (Rotating between Finnish Sauna & Ice bath)
>
> Experience the powerful benefits of alternating heat and cold. Sessions include guided rotations between Finnish barrel sauna (80-100 degrees Celsius) and ice bath immersion.

Source: https://www.lamarea.com.au/kristian-ryan (Services & offerings)

> Cold-Water Immersion & Contrast Therapy
>
> Reduces muscle soreness (DOMS), perceived fatigue, and improves subjective recovery (first 24–72h post-exercise). (Xiao et al., 2023; Machado et al., 2016)
>
> Contrast therapy reduces post-exercise fatigue and soreness, enhancing perceived recovery. (Machado et al., 2016; Higgins et al., 2017)
>
> May reduce post-exercise inflammation and markers of muscle damage; timing, temperature, and duration matter. (Bleakley et al., 2012; Machado et al., 2016)
>
> Can improve mood, reduce stress, and enhance well-being; benefits similar for women. (Knechtle et al., 2020; Higgins et al., 2017)

Source: https://www.lamarea.com.au/philosophy (The Science, Sleep & Recovery)

Status: in hand but needs Belle's check  
Note: Who runs contrast therapy differs between the live site and the guide. Belle to confirm (plan/11 item 60).

#### 4. chef-led pasta making masterclass
Name as published: Mediterranean Pasta-Making Masterclass (Malissa Fedele bio); pasta-making masterclass (Instagram)  
Duration as published: 2 hours (Malissa Fedele bio)  
Practitioners as published: Malissa Fedele (live bio); Luca Guiotto, Aromi Dining (live bio mentions private pasta-making classes)  

> Mediterranean Pasta-Making Masterclass (2 hours)
>
> Hands-on, interactive sessions where guests learn to make authentic Italian pasta from scratch with Malissa.
>
> Includes: Fresh egg pasta, Traditional Mediterranean sauces, Cooking demonstration + guided practice, Tasting + shared meal
>
> Ideal for group bonding and creating a memorable retreat experience

Source: https://www.lamarea.com.au/malissa-fedele (Services & Offerings)

> Luca curates a variety of private dining experiences, including individually plated or shared 3-, 4-, and 5-course lunches and dinners, as well as exclusive private pasta-making classes.

Source: https://www.lamarea.com.au/luca-guiotto (Services & Offerings)

> Mediterranean Cooking Class

Source: https://www.lamarea.com.au/luxury-retreats (Bespoke wellness additions)

> The morning brought together yoga, a wholesome seasonal breakfast, breathwork, contrast therapy, massage and evidence-based wellbeing education, before finishing for an interactive pasta-making masterclass and nourishing long-table lunch

Source: https://www.lamarea.com.au/ (Instagram feed widget)

Status: in hand but needs Belle's check  
Note: Neither bio confirms who runs it for La maréa (plan/11 Q3). Two Google reviews mention a pasta-making class at a corporate retreat.

#### 5. chef curated mediterranean dining
Name as published: Signature culinary experience: private shared 3 course Mediterranean-inspired lunch  
Duration as published: 12:30 PM to 2:00 PM in the Beresford example  
Practitioners as published: Luca Guiotto, Aromi Dining (guide p.13); Beresford (Beresford example)  

> SIGNATURE CULINARY EXPERIENCE INCLUDED
>
> Private shared 3 course mediterranean-inspired lunch with Award-Winning Chef, Luca Guiotto of Aromi Dining. Enjoy a fresh, seasonal, plant-forward lunch showcasing the finest local South Australian ingredients, where every course tells a story through bold flavours and elegant presentation.

Source: Encounter Bay guide p.13

> Shared chef curated Mediterranean lunch provided by Beresford

Source: image "_FULL DAY RETREAT BERESFORD 2026.png" on https://www.lamarea.com.au/luxury-retreats

> 3 Course Mediteranean-Inspired Lunch with Private Chef

Source: https://www.lamarea.com.au/luxury-retreats (What a weekend with us looks like...)

Status: in hand but needs Belle's check  
Note: Example menu in menu.json.

#### 6. yoga
Name as published: Energising Group Vinyasa Yoga Flow or Mat Pilates  
Duration as published: 8:15 AM to 9:00 AM in the Beresford example  
Practitioners as published: Jaimi Baker, PEAQ Performance; Natalie Jane; Kristian Ryan (private group yoga classes, 30 or 60 minutes)  

> Group guided energising yoga or mat pilates session

Source: Encounter Bay guide p.15

> Energising Group Vinyasa Yoga Flow or Mat Pilates

Source: Encounter Bay guide p.23

> Energising Group Vinyasa Yoga Flow or Mat Pilates Session

Source: image "_FULL DAY RETREAT BERESFORD 2026.png" on https://www.lamarea.com.au/luxury-retreats

> Vinyasa, a dynamic breath-led flow that builds heat and strength.
>
> Yin, a slow, meditative practice with long holds that target deep connective tissues.
>
> Roll & Release, a mobility-focused practice using props to ease tension and enhance movement.
>
> Chair Yoga, a supportive, accessible option ideal for beginners, seniors, or those with limited mobility.

Source: https://www.lamarea.com.au/jaimi-baker

> Yoga
>
> Reduces depression, anxiety, stress, and blood-pressure markers.
>
> Improves balance, mobility, breathing efficiency, and mind–body awareness. (White et al., 2024)

Source: https://www.lamarea.com.au/philosophy (The Science, Movement)

Status: in hand but needs Belle's check  
Note: Yoga and pilates are one either-or session in both sources (plan/11 item 31, one tile or two).

#### 7. pilates
Name as published: Mat Pilates  
Practitioners as published: Natalie Jane; Sarah McLachlan (certification in progress)  

> Group guided energising yoga or mat pilates session

Source: Encounter Bay guide p.15

> Pilates — Mat Pilates (beginner to advanced)

Source: https://www.lamarea.com.au/natalie-jane

> Pilates
>
> Improves chronic low-back pain, functional ability, and quality of life.
>
> Enhances core strength, mobility, and movement control. (Yu et al., 2023)

Source: https://www.lamarea.com.au/philosophy (The Science, Movement)

Status: in hand but needs Belle's check  
Note: No standalone pilates description exists.

#### 8. meditation & mindfulness
Name as published: Guided Group Breathwork, Meditation, Mindfulness & Nervous System Regulation  
Duration as published: 9:30 AM to 10:00 AM in the Beresford example  
Practitioners as published: Jaimi Baker; Natalie Jane; Kristian Ryan  

> Group guided meditation, mindfulness, breathwork & nervous system regulation session

Source: Encounter Bay guide p.15

> Guided Group Breathwork, Meditation, Mindfulness & Nervous System Regulation

Source: Encounter Bay guide p.23

> Group guided breathwork, meditation, mindfulness & nervous system regulation session

Source: image "_FULL DAY RETREAT BERESFORD 2026.png" on https://www.lamarea.com.au/luxury-retreats

> Meditation & Relaxation

Source: https://www.lamarea.com.au/luxury-retreats (What a weekend with us looks like...)

> Guided Meditation & Pranayama, breathwork and mindfulness techniques to calm the mind and regulate the nervous system.

Source: https://www.lamarea.com.au/jaimi-baker

> - 30 or 60 minute Guide Breathwork & Meditation sessions

Source: https://www.lamarea.com.au/kristian-ryan (Services & offerings)

> Mindfulness, meditation and breathwork practices that help manage stress, deepen purpose and foster a grounded sense of self.

Source: https://www.lamarea.com.au/philosophy (Psychological, Emotional & Spiritual Wellbeing pillar)

Status: in hand but needs Belle's check

#### 9. gut health nutrition workshop
Name as published: Lifestyle Wellness Workshop: The Foundations of High Performance Wellbeing  
Duration as published: 40 minutes per rotation (Beresford example)  
Practitioners as published: Belle Redden (guide p.21, nutrition education)  

> Lifestyle wellness workshop: The Foundations of High Performance Wellbeing: Build Lifestyle Habits for Energy, Capacity, Stress Management & Burnout Prevention

Source: Encounter Bay guide p.15

> Experience 3: Lifestyle Wellness Workshop: The Foundations of High Performance Wellbeing: Build Lifestyle Habits for Energy, Focus & Burnout Prevention

Source: image "_FULL DAY RETREAT BERESFORD 2026.png" on https://www.lamarea.com.au/luxury-retreats

> Group Lifestyle Wellness Workshop

Source: Encounter Bay guide p.23

> Wellness Education Session (with key guest speaker)

Source: https://www.lamarea.com.au/luxury-retreats (Bespoke wellness additions)

> Enhances gut health by increasing microbial diversity and SCFA production. (Estruch et al., 2022)

Source: https://www.lamarea.com.au/philosophy (The Science, Nutrition)

Status: not found  
Note: No workshop called "gut health" is published anywhere. The only sourced workshop is The Foundations of High Performance Wellbeing, whose subtitle differs between the guide and the Beresford example. Whether they are the same is plan/11 Q5.

#### 10. lifestyle wellness & nutrition consultations
Name as published: Personalised Individual Nutrition & Lifestyle Consultation & Plan  
Duration as published: 60 minutes (Malissa Fedele bio)  
Practitioners as published: Malissa Fedele (live bio)  

> Personalised Individual Nutrition & Lifestyle Consultation & Plan (created post weekend retreat)

Source: https://www.lamarea.com.au/luxury-retreats (Bespoke wellness additions)

> 1:1 Mood Boosting Nutrition Consultation (60 minutes)
>
> Private, tailored session designed to provide deeper support during retreat stays.
>
> Perfect for guests seeking clarity, guidance, and a supportive plan designed just for them.

Source: https://www.lamarea.com.au/malissa-fedele (Services & Offerings)

Status: in hand but needs Belle's check  
Note: Listed as a paid bespoke addition, not an inclusion. Inside a day or sold separately is plan/11 Q4.

### Six self-led activities
> OPTIONAL SELF LED ACTIVITIES DURING UNSTRUCTURED RESTORATION TIME
>
> Coastal hiking
>
> Infrared sauna
>
> Pool swimming
>
> Ocean swimming
>
> Journaling & reading
>
> Relaxing by the fire

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.15  
Status: in hand but needs Belle's check  
Note: Belle's transcript lists the same six ("close to hiking, infrared sauna, pool swimming, ocean swimming, journaling and reading, relaxing by the fire"). At Beresford the list is "Vineyard Hiking, Plunge Pool swimming, Relaxing By The Fire, Accessing Recovery Lounge Equipment". No descriptions exist for any of the six beyond the supporting lines in `experiences.json`.

> Unstructured restorative time in the afternoon with access to pool, sauna, ocean, coastal walks, relaxing by a fire & team connection

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.17  
Status: in hand

> There is space to rest, journal, explore the coastline, or simply unwind.

Source: https://www.lamarea.com.au/faqs  
Status: in hand

### Bespoke additions (paid extras)
> Bespoke wellness additions: individual & group offerings
>
> Relaxation Waterlily Rose Facial
>
> Personalised Individual Nutrition & Lifestyle Consultation & Plan (created post weekend retreat)
>
> Australian Native Ingredient Tour
>
> Mediterranean Cooking Class
>
> Wellness Education Session
>
> (with key guest speaker)
>
> *please note all bespoke additions must be booked and paid for prior to attending your retreat or experience

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand but needs Belle's check  
Note: Which additions still run is plan/11 item 23.

## 6. Places to Pause

Heading from Belle's wording idea "Places to Pause and Reconnect". Belle's list, verbatim from the transcript:
> Partner Accomodation / locations:
>
> Coastal:
>
> - Naiko Deep Creek (sleeps 6)
>
> - Naiko Encounter Bay (sleeps 10)
>
> Vineyard:
>
> - Beresford Estate (sleeps 20+)
>
> - The Vineyard Retreat (sleeps 10)

Source: Transcript, "Partner Accomodation / locations"  
Status: in hand

### Index page copy
> Our accommodation partners
>
> We collaborate with a select collection of exceptional luxury South Australian properties, each chosen for privacy, architectural integrity and deep connection to landscape. Every venue is selected for its capacity to support restoration, meaningful connection and nervous system regulation.
>
> Guided by our personalisation pillar, each retreat location is carefully matched to the group and the retreat intention. The environment is deliberately chosen to complement the energy, structure and desired outcome of the experience.

Source: https://www.lamarea.com.au/accommodation-partners  
Status: in hand

> Our South Australian accommodation partner collection
>
> Alongside Naiko, La maréa collaborates with a small number of premium South Australian venues across the Fleurieu Peninsula and McLaren Vale.

Source: https://www.lamarea.com.au/accommodation-partners  
Status: in hand

> Curated partnerships
>
> La maréa retreats are intentionally limited and venue selection is highly considered.
>
> We are open to collaborating with other luxury South Australian properties that align with our values of privacy, design integrity and connection to landscape.
>
> If you are a property owner or have a venue in mind for your retreat, we invite you to enquire and discuss suitability.

Source: https://www.lamarea.com.au/accommodation-partners ("Curated partnerships")  
Status: in hand

### Five star wording
> 5 Star Unique Eco-friendly Coastal Luxury Accomodation in Deep Creek, South Australia;
>
> with exceptional attention to detail, amenities & guest experiences.

Source: https://www.lamarea.com.au/accommodation-partners (under the Naiko Retreat copy)  
Status: in hand but needs Belle's check  
Note: The only "5 Star" wording on the live site. The guide uses "5-Star Luxury Venue" (p.11) and "5 star venue" (p.23) for Naiko at the Bluff. Belle wants all partners shown as five star (transcript), but only Naiko has published wording or badges. Badges shown beside the Naiko copy, read from the images: "starratingsaustralia 2025 GOLD LIST of Australian Accommodation"; "Sustainable Tourism, Quality Tourism Accredited Business", five stars, "Accredited Self Catering"; "2023 South Australian Tourism Awards HALL OF FAME 2021, 2022, 2023".

### Naiko Deep Creek
> Primary partner
>
> Naiko Retreat’s luxurious, remote coastal setting offers the ultimate escape to disconnect, reconnect, and embrace nature
>
> Perched on the cliffs of Deep Creek in the Fleurieu Peninsula, Naiko Retreat offers an exclusive coastal escape. A private, secluded beach lies just steps from your luxury accommodation, with crystal-clear waters perfect for swimming, relaxation, and soaking in the serene beauty of the coast.
>
> “Naiko,” a Ramindjeri word for “Mother,” honours the rich indigenous heritage of this land. Partnering with Naiko felt natural and allows us to offer an immersive wellness experience that connects guests to land.
>
> Following recent bushfires in the region, Naiko is undergoing careful landscape restoration, with bookings now open for late 2026 as the coastline continues its natural regeneration.

Source: https://www.lamarea.com.au/accommodation-partners ("Primary partner")  
Status: in hand but needs Belle's check  
Note: The bushfire and "bookings now open for late 2026" line needs Belle to confirm it still holds (plan/11 item 42).

Venue facts, verbatim from https://naikoretreat.com.au/ (home page, the only page the host allowed):
> Nestled between Deep Creek National Park and Talisker Conservation Park, Naiko Retreat (pronounced Nay-co) is located approximately 90 minutes from Adelaide, South Australia on the tourist treasure Fleurieu Peninsula.
>
> Situated on a 2000-acre farm known as “Rarkang”, the Retreat is set majestically on a cliff overlooking its own pristine and secluded beach and beyond with uninterrupted views across the Southern Ocean to Kangaroo Island.
>
> The eco conscious and secluded Retreat sleeps a maximum of six guests in three spacious, identical king bedrooms each with its own luxury ensuite bathroom.  The king beds can be split into king single beds.
>
> Designed by Max Pritchard, Naiko Retreat is an Eco-Accredited retreat and was constructed to have as little impact on the environment as possible.
>
> The Retreat is completely off-grid with power supplied by a solar and battery system with a back-up generator.
>
> The expansive front deck, with comfortable outdoor lounge furniture, overlooking the beach is perfect for relaxing with a book, letting your mind wander as you stare out to sea or and enjoy nibbles and drinks while the sun goes down.
>
> An efficient, low-emission wood-burning heater keeps you warm on those cold nights and heat can be ducted through to the bedrooms.
>
> Guests are just a short stroll to Naiko’s own secluded beach with its crystal clear aquamarine waters which are perfect for swimming.
>
> Naiko Retreat is a luxury self-contained single unit sleeping a maximum of six guests in three well-appointed king bedrooms, each with luxurious spa bathrooms.  The free-standing bath is perfect for a long soak while gazing out to sea.
>
> Guests have exclusive use of the Retreat and the four bespoke walking trails on the property. The only people you may see are the occasional walkers on the Heysen Trail which passes through the property.
>
> The local pod of dolphins are regularly spotted lazily swimming near the rocks of Naiko’s beach and from May through to October guests have a front row seat to whale watching.
>
> The Futuro is not part of the retreat accommodation and is only available to guests who book a massage with one of Naiko’s preferred therapists.
>
> The Retreat is part of a working sheep farm situated between two national parks and pets are strictly prohibited

Source: https://naikoretreat.com.au/  
Status: in hand  
Note: Address in the page footer: "Naiko Retreat | 333 Rarkang Road, Deep Creek, South Australia | 0415 095 644". Sleeps six (venue and Belle agree). About 90 minutes from Adelaide. No pool, sauna or plunge pool is mentioned on the venue page.

### Naiko Encounter Bay (Naiko at the Bluff)
> Naiko at The Bluff, Encounter Bay
>
> Refined coastal architecture with expansive ocean views. Designed for privacy and immersion in landscape.

Source: https://www.lamarea.com.au/accommodation-partners  
Status: in hand

> Naiko at The Bluff, Encounter Bay
>
> Positioned along the dramatic coastline of the Fleurieu Peninsula, Naiko at the Bluff offers a refined, private coastal retreat experience with expansive ocean views and contemporary architectural design.
>
> Designed for comfort, privacy and immersion in nature, the property provides a calm and elevated environment for groups seeking space to reset and reconnect. Open plan living areas, generous outdoor entertaining spaces and uninterrupted coastal outlooks create a sense of openness and perspective.
>
> Moments from the shoreline and surrounded by the natural beauty of the Fleurieu, Naiko at the Bluff offers the ideal setting for focused conversation, restoration and shared wellness retreat experiences.
>
> A beautiful coastal walk at the bottom of the Naiko property

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.7  
Status: in hand  
Note: The guide links to "naikoatthebluff.com.au".

> 5-Star Luxury Venue
>
> NAIKO AT THE BLUFF, ENCOUNTER BAY
>
> Enjoy exclusive use of Naiko at the Bluff, an elevated coastal retreat designed for both connection and deep rest. Light-filled open plan living flows effortlessly to expansive outdoor spaces, inviting shared and relaxed moments by the pool, in the sauna or by the fire with ocean views beyond.
>
> Large windows invite in natural light and ocean views, creating a seamless connection to the surrounding environment. Whether you’re sipping tea on the deck, laying in the sun by the plunge pool or gathering indoors by the fire after a day of guided wellness experiences, movement and connection, this is a space intentionally held for you to slow down, reset, and reconnect.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.11  
Status: in hand but needs Belle's check  
Note: Mentions a pool, a sauna, a plunge pool and a fire. The venue home page mentions the pool and deck but not a sauna.

Venue facts, verbatim from https://naikoatthebluff.com.au/ (home page only):
> The Villa at Naiko at the Bluff redefines luxury accommodation in Victor Harbor, offering a private escape with no close neighbouring properties to disturb your stay. Designed by the acclaimed Max Pritchard Gunner Architects, this stunning family accommodation blends contemporary architecture with the natural beauty of Encounter Bay.
>
> Built for luxury accommodation for families or friends travelling together, The Villa, including the double carport and the storerooms, makes up an impressive 305 square meters and can comfortably accommodate up to 10 guests across two wings, each featuring a master bedroom with ensuite bathrooms.
>
> Set on a working sheep farm, this beautifully appointed luxury family villa offers sweeping views of The Bluff and Encounter Bay where the charm of country life meets high-end coastal living.
>
> For added flexibility, the fourth bedroom features high-end, custom-designed bunk beds that can accommodate up to four additional guests, making it possible to extend the capacity to four couples and comfortably cater to a total of 10 guests for the entire villa.
>
> Below the deck, the pool is ideal for cooling off during warm summer days or simply relaxing by the water with views of the ocean stretching before you.
>
> The expansive front deck, designed to be the heart of outdoor gatherings, features a Weber electric BBQ
>
> In 2026, Stage 2 will unveil four high-end luxury one-bedroom retreats and a two-bedroom retreat, all set in a breathtaking location surrounded by beautiful farmland and overlooking The Bluff and the blue expanse of the Southern Ocean. These adults-only retreats will offer unparalleled privacy, with no nearby neighbours, ensuring a secluded and luxurious escape.

Source: https://naikoatthebluff.com.au/  
Status: in hand  
Note: Address: "28 Jagger Rd, Encounter Bay, South Australia 5211". Sleeps up to 10 (venue and Belle agree); the guide caps a day retreat at 14 guests. Distance from Adelaide not captured (location page blocked). Stage 2 retreats are adults only. The venue's own tagline is family accommodation.

### Beresford Estate, McLaren Vale
> Beresford Estate, McLaren Vale
>
> Vineyard setting with contemporary accommodation and event spaces suited to larger leadership groups and extended retreats.

Source: https://www.lamarea.com.au/accommodation-partners  
Status: in hand

> Beresford Estate - Womens Wake Up To Wellness Retreat

Source: https://www.lamarea.com.au/ (2026 retreats gallery)  
Status: in hand

Venue facts, verbatim from beresfordestate.com.au:
> Beresford Estate is a 70-acre vineyard located in the world-class wine region of Blewitt Springs, McLaren Vale.

Source: https://www.beresfordestate.com.au/

> Delivering unparalleled luxury, the Grand Reserve Suites are nestled in 70-acres of rolling vineyard. Boasting galley kitchenette, private bedroom, indoor & outdoor living spaces and private bathhouse.

Source: https://www.beresfordestate.com.au/pages/accommodation

> Unwind in your outdoor terrace featuring a secluded private plunge pool and outdoor lounging area, creating your very own oasis wrapped in natures tranquillity.

Source: https://www.beresfordestate.com.au/pages/accommodation

> Soak in your imported Italian freestanding bathtub pampering yourself with luxury Australian made organic skincare then book your in-room massage or indulge in our extensive range of onsite experiences.

Source: https://www.beresfordestate.com.au/pages/accommodation

> GRAND RESERVE SUITES 2-6; SUITE 1 - Accessible (No Bath); THE RESERVE SUITES 7-15; SHIRAZ VILLA; GRENACHE VILLA

Source: https://www.beresfordestate.com.au/pages/accommodation

> The Grenache Villa is a clever remodelling of the original 19th century cottage that sleeps six.

Source: https://www.beresfordestate.com.au/pages/accommodation

> Beresford House, a luxury retreat nestled within the majestic vineyards of Beresford Estate.

Source: https://www.beresfordestate.com.au/pages/venues

> Nestled amongst the vineyards in the heart of our estate is Beresford House; a luxurious homestead comprising two exquisite living quarters, an open-plan gallery room and an underground cellar. The bell tower deck provides 360-degree views of the estate property.

Source: https://www.beresfordestate.com.au/pages/story

> Established in 1985 in the heart of McLaren Vale, Beresford Estate is family-owned and passionately South Australian.

Source: https://www.beresfordestate.com.au/pages/venues

> Tasting Pavilion ... Open 7 days, 10 am – 5 pm

Source: https://www.beresfordestate.com.au/pages/venues

> Vale Restaurant & Bar

Source: https://www.beresfordestate.com.au/pages/venues

Source: beresfordestate.com.au  
Status: in hand but needs Belle's check  
Note: Belle says sleeps 20+; the venue publishes no whole-property total and no street address on the pages fetched. Distance from Adelaide not stated. The Beresford retreat folder did not open.

### The Vineyard Retreat, McLaren Vale
No La maréa copy exists for this venue anywhere: not on the live site, not in the guide. Status: **not found** for La maréa copy.

Venue facts, verbatim from thevineyardmv.com.au:
> Just 50 minutes from Adelaide, The Vineyard Retreat offers eight private guest houses across two distinctive McLaren Vale locations.

Source: https://thevineyardmv.com.au/

> Stay among the vines at our 15-acre working vineyard in Blewitt Springs, where six individual guest houses enjoy sweeping views, space and privacy. Or settle into village life at Main Street Retreat in McLaren Flat, home to two private one-bedroom guest houses within easy reach of cellar doors, restaurants and local favourites.

Source: https://thevineyardmv.com.au/

> Set at the highest point of the property, our guest wellness area brings together a sauna, cold plunge and Jacuzzi with sweeping views across the vines to the Willunga hills, d'Arenberg Cube and Gulf St Vincent beyond.

Source: https://thevineyardmv.com.au/

> The wellness area is exclusively available to guests staying at The Vineyard.

Source: https://thevineyardmv.com.au/

> Tranquility, privacy, nature, space, stunning views, fireplaces, complimentary mini bar & breakfast provisions, self check-in.

Source: https://thevineyardmv.com.au/

> Each stay includes locally sourced breakfast provisions and a complimentary minibar, with private decks or outdoor spaces overlooking the surrounding vines and landscape.

Source: https://thevineyardmv.com.au/about-us/

> The Vineyard Retreat is entering an exciting new chapter under the ownership of Valtteri Bottas and Tiffany Cromwell.

Source: https://thevineyardmv.com.au/about-us/

> Adelaide CBD and Adelaide Airport are approximately 50 minutes away, depending on traffic.

Source: https://thevineyardmv.com.au/frequently-asked-questions/

> The Vineyard is approximately eight minutes by car from McLaren Vale township and around two minutes from McLaren Flat. Willunga and the coast are approximately 15 minutes away.

Source: https://thevineyardmv.com.au/frequently-asked-questions/

> Cadole Avalon: 1 King bed, 2
>
> Cadole Sierra: 1 King bed, 2
>
> The Ardmore: 1 King bed, 2
>
> The Highland: 2 King beds, 2 or 4
>
> The Manhattan: 2 King beds, 2 or 4
>
> The Strand: 1 King bed, 2
>
> The Catalina (Main Street, McLaren Flat): 1 King bed, 2
>
> The Hermosa (Main Street, McLaren Flat): 1 King bed, 2

Source: https://thevineyardmv.com.au/stay/ (house cards, laid out as a list by me)  
Status: in hand but needs Belle's check  
Note: Address: "165 Whitings Road, Blewitt Springs, South Australia 5171". The venue publishes no total. The six vineyard houses add up to 16 at most, which is where the register's "16" comes from, against Belle's 10 (Q6). New owners named on the About page. Nightly prices exist on the venue site and are not recorded here.

## 7. The Fleurieu

Nothing on the live site is written as a Fleurieu destination section. These are the pieces that exist.

> For Belle, the founder of La maréa, the Fleurieu Peninsula coastline wasn’t just a backdrop - it was home. She grew up in McLaren Vale on thirteen acres of land, spending most of her childhood outdoors, training for swimming and surf lifesaving at Moana Beach.
>
> Her love for the Fleurieu Peninsula was nurtured from a young age, with her summers filled with long days at Myponga Beach - family, water activities, sunshine, and afternoons enjoying freshly caught squid. It was in these simple, joyful moments that her lifelong passion for health, movement, food, and lifestyle wellness was born.

Source: https://www.lamarea.com.au/our-story  
Status: in hand  
Note: Belle's own Fleurieu places: McLaren Vale, Moana Beach, Myponga Beach.

> Nature immersion is good for us.
>
> and increasingly, the research is catching up.
>
> Blue space refers to natural water environments — like oceans, beaches, rivers and lakes — with research linking time spent around them with mental wellbeing, stress reduction and restoration.
>
> You just feel the benefit before you can put it into words.
>
> Watching dolphins? Our favourite kind of therapy.
>
> Spring and summer retreats mean warmer water, longer days and plenty of time by the ocean ✨

Source: https://www.lamarea.com.au/ (Instagram feed widget, caption on blue space and dolphins)  
Status: in hand but needs Belle's check

> “Naiko,” a Ramindjeri word for “Mother,” honours the rich indigenous heritage of this land.

Source: https://www.lamarea.com.au/accommodation-partners  
Status: in hand but needs Belle's check  
Note: Cultural claim. Belle to confirm with Naiko before it moves to a Fleurieu page.

> We acknowledge that the land we are on belongs to the Kaurna people as the Traditional Owners and custodians of the land on which we work. We acknowledge the Traditional Custodians of country throughout Australia and their connections to land, sea and community. We pay our respects to their Elders past and present.

Source: https://www.lamarea.com.au (footer, every page)  
Status: in hand

Transcript intent for this section (not copy): showcase the Fleurieu to interstate and overseas guests, dolphins, seals and kangaroos, coast versus vineyards, a map of South Australia with the venues, and alignment with True South. Status for finished Fleurieu copy, distances and a map: **not found**.

## 8. Philosophy and pillars

### Philosophy intro
> Our Philosophy
>
> At La  maréa, we believe in holistic, multi-dimensional wellness.  Our bespoke lifestyle retreats are grounded in science and inspired by years of research and hands-on practice working in evidence-based wellness and high performance sport.
>
> We’ve curated 10 key pillars that guide every retreat, drawing from longevity research, the Blue Zones, and the Mediterranean way of life. By combining luxurious, heartfelt hospitality with holistic, science-backed wellness practices, we create transformative experiences that nourish mind, body, and soul.
>
> Our retreats educate and empower, supporting your physical, psychological, and social wellbeing, while helping you embrace a healthy, sustainable lifestyle - one that truly lasts.

Source: https://www.lamarea.com.au/philosophy  
Status: in hand

### Name story
> "Inspired by the elements of a Mediterranean lifestyle; plant based nourishment, connection, community & longevity"
>
> La maréa, meaning ‘the tide,’ in Spanish reflects life’s natural rhythm: the ebbs and flows, the balance between stillness and movement, the transformations that unfold over time and the continual cycle of endings and new beginnings.

Source: https://www.lamarea.com.au/our-story  
Status: in hand

> Inspired by the Mediterranean, La Maréa stems from the Spanish phrase ‘la marea,’ meaning ‘the tide,’ and reflects life’s natural rhythm: the ebbs and flows, the balance between stillness and movement, and the transformations that occur over time. Here, we invite you to release what no longer serves you and embrace new habits that nourish body, mind, and soul.

Source: Transcript, closing paragraph  
Status: in hand  
Note: Belle's newer version of the name story. Spells the brand "La Maréa".

### The ten philosophy pillars, as published
> **Nutrition**  Seasonal, local and predominantly organic plant-based nourishment, guided by a paddock to plate philosophy and the Mediterranean dietary pattern
>
> **Movement**  Yoga, pilates, swimming, hiking in nature & resistance training
>
> **Sleep & Recovery**  Sleep optimisation, relaxation and use of recovery modalities such as a sauna, contrast therapy & massage
>
> **Psychological, Emotional & Spiritual Wellbeing**  Mindfulness, meditation and breathwork practices that help manage stress, deepen purpose and foster a grounded sense of self.
>
> **Nature Immersion**  Nurturing by nature through forest bathing, hiking, swimming and listening to the sounds of the sea
>
> **Connection**  Fostering social connection with others, connection to local community, to self, to country, land & nature
>
> **Personalisation**  Bespoke experiences curated for all stages and seasons of life, designed to meet you wherever you are on your wellness journey
>
> **Balance**  The harmony between movement and rest, between nourishing whole foods and ‘soul foods,’ supporting sustainable habits and happiness
>
> **Evidence-Based Lifestyle Wellness Education**  Science-based lifestyle wellness education delivered by local experts, empowering sustainable, purposeful health journeys.
>
> **Luxury & Heartfelt Hospitality**  Where refined elegance meets genuine warmth, offering accommodation that makes you feel both indulged and at home

Source: https://www.lamarea.com.au/philosophy (pillar grid)  
Status: in hand but needs Belle's check  
Note: Order as published. Icons for all ten are in `assets-brand/icons/`. Which set leads is decision 1.

### The Science (ten panels)
Heading as published: "The Science". Each panel opens to a list of claims with author and year citations. No panel links to full references; only the sleep journal post has a reference list. Panel names differ from the grid for two pillars ("Psychological Wellbeing", "Wellness Education").

#### Nutrition
> The Mediterranean Diet:
>
> Reduces cardiovascular disease, CVD events, and all-cause mortality. (Martinez-Lacoba et al., 2018; Pant et al., 2023)
>
> Lowers risk of age-related cognitive disorders including dementia and AD. (Fekete et al., 2021)
>
> Improves mood and reduces depression risk via anti-inflammatory and gut-microbiome pathways. (Lai et al., 2023)
>
> Enhances gut health by increasing microbial diversity and SCFA production. (Estruch et al., 2022)
>
> Plant-based diets
>
> Reduce risk of major chronic diseases. (Wang et al., 2023)
>
> Organic diets
>
> Lower pesticide exposure and may improve select metabolic/reproductive markers. (Jiang et al., 2024)

#### Movement
> Resistance & Strenth Training
>
> Reduces all-cause mortality and risk of CVD, cancer, and type 2 diabetes.
>
> Preserves muscle mass, metabolic rate, and functional independence. (Shailendra et al., 2022)
>
> Swimming & Aerobic Exercise
>
> Improves cardiorespiratory fitness, body composition, and cardiometabolic markers.
>
> Swimming is low-impact and highly effective. (Lahart & Metsios, 2018)
>
> Pilates
>
> Improves chronic low-back pain, functional ability, and quality of life.
>
> Enhances core strength, mobility, and movement control. (Yu et al., 2023)
>
> Yoga
>
> Reduces depression, anxiety, stress, and blood-pressure markers.
>
> Improves balance, mobility, breathing efficiency, and mind–body awareness. (White et al., 2024)
>
> Nature-Based Physical Activity (Hiking, Open-Water Swimming)
>
> Combines exercise benefits with restorative effects of nature.
>
> Improves mood, reduces stress, and increases adherence when enjoyable and social. (White et al., 2024)

#### Sleep & Recovery
> Short, long, or irregular sleep increases cardiometabolic risk and mortality.
>
> Sleep quality and regularity predict cognition, immunity, hormonal balance, and recovery.
>
> Optimising sleep duration and timing is foundational for health and performance. (Cappuccio et al., 2010)
>
> Sauna & Heat Therapy
>
> Regular infrared/Finnish sauna bathing benefits cardiovascular and rheumatological health, and exercise recovery. (Hussain & Cohen, 2018)
>
> Lowers cardiovascular events and mortality; improves vascular function, blood pressure, and stress. (Laukkanen et al., 2018; Hussain & Cohen, 2018)
>
> Improves self-reported well-being and sleep. (Laukkanen et al., 2024)
>
> Supports recovery and relaxation via autonomic mechanisms. (Ferreira et al., 2022)
>
> Cold-Water Immersion & Contrast Therapy
>
> Reduces muscle soreness (DOMS), perceived fatigue, and improves subjective recovery (first 24–72h post-exercise). (Xiao et al., 2023; Machado et al., 2016)
>
> Contrast therapy reduces post-exercise fatigue and soreness, enhancing perceived recovery. (Machado et al., 2016; Higgins et al., 2017)
>
> May reduce post-exercise inflammation and markers of muscle damage; timing, temperature, and duration matter. (Bleakley et al., 2012; Machado et al., 2016)
>
> Can improve mood, reduce stress, and enhance well-being; benefits similar for women. (Knechtle et al., 2020; Higgins et al., 2017)
>
> Massage & Relaxation Therapies
>
> Reduces muscle pain, joint discomfort, and DOMS. (Weerapong et al., 2005; Moyer et al., 2004)
>
> Lowers anxiety, perceived stress, and depressive symptoms. (Fritz et al., 2014; Hou et al., 2017)
>
> Improves recovery, sleep quality, and relaxation. (Field, 2016; Pugh et al., 2017)

#### Psychological Wellbeing
> Meditation, Breathwork & Mindfulness
>
> Reduces anxiety, depression, and chronic pain. (Goyal et al., 2014; Khoury et al., 2015)
>
> Enhances emotional regulation, resilience, and subjective well-being. (Creswell, 2017; Goldberg et al., 2018)
>
> Improves physiological markers: lowers heart rate, blood pressure, and inflammation. (Pascoe et al., 2017; Black & Slavich, 2016)
>
> Meaning, purpose, and spirituality support mental health, resilience, and lower chronic disease risk. (Hill & Turiano, 2014; Kim et al., 2019)
>
> Breathwork acutely reduces stress, sympathetic activity, and improves autonomic balance. (Zaccaro et al., 2018; Jerath et al., 2015)

#### Nature Immersion
> Forest bathing and nature immersion reduce anxiety, depression, stress, and improve physiological stress markers (cortisol, HRV). (Hansen et al., 2017; Oh et al., 2017; Antonelli et al., 2019)
>
> Support mood and subjective well-being. (Shin et al., 2017; Antonelli et al., 2019)
>
> Blue space exposure (coasts, oceans, rivers) improves mood, reduces stress, and enhances well-being. (White et al., 2021; Britton et al., 2020; Finlay et al., 2015)
>
> Benefits strongest when immersive, multisensory, and socially or mindfully engaged. (Hunter et al., 2019; White et al., 2021)

#### Connection
> Strong social ties lower premature mortality; isolation increases risk of CVD, dementia, depression. (Holt-Lunstad et al., 2010; Pantell et al., 2013)
>
> Community and culturally anchored connection, including land and ceremony, supports mental health, resilience, and wellbeing. (AIHW, 2020; Kirmayer et al., 2014)
>
> Connection to country and native foods enhances wellbeing, nutrition, and mental health; improves antioxidant intake, dietary diversity, and gut microbiome. (Brown et al., 2021; Lee et al., 2019; Gu et al., 2020)
>
> Social and cultural connection buffers stress, fosters purpose, and enhances engagement. (Holt-Lunstad et al., 2010; Kirmayer et al., 2014)

#### Personalisation
> Tailored interventions (nutrition, exercise, recovery) improve adherence, engagement, diet quality, and cardiometabolic outcomes versus generic advice. (Celis-Morales et al., 2017; Zeevi et al., 2015; Ordovas et al., 2018)
>
> Personalisation enhances effectiveness by accounting for individual variability in physiology, lifestyle, preferences, and goals. (Zeevi et al., 2015; Celis-Morales et al., 2017; Roberts et al., 2019)
>
> Tailored wellness interventions increase engagement, satisfaction, and likelihood of sustained behaviour change. (Ordovas et al., 2018; OUP Academic, 2023; MDPI, 2022)
>
> Personalised exercise and recovery strategies improve cardiovascular, metabolic, and musculoskeletal outcomes. (Buchheit & Laursen, 2013; Montero & Lundby, 2017; Roberts et al., 2019)

#### Balance
> Realistic programs balancing structure, flexibility, and enjoyment improve adherence and outcomes. (Michie et al., 2011; GOV.UK, 2021)
>
> Balanced nutrition (minimally processed, culturally meaningful foods) supports long-term adherence and metabolic health. (Reicks et al., 2014; Sacks et al., 2009; GOV.UK, 2021)
>
> Movement-rest balance is essential for recovery, mental health, and sustainable performance. (Garber et al., 2011; Saunders et al., 2017)
>
> Combining structure with enjoyment enhances engagement, satisfaction, and long-term health. (Michie et al., 2011; GOV.UK, 2021)

#### Wellness Education
> Structured lifestyle education (diet, activity, sleep, stress) using behaviour-change techniques improves cardiometabolic risk. (Knowler et al., 2002; Lindström et al., 2013; Uusitupa et al., 2019)
>
> Programs produce sustained benefits: reduced diabetes incidence, improved weight management, and lasting behaviour change. (Diabetes Prevention Program Research Group, 2009; Lindström et al., 2013; Ali et al., 2012)
>
> Personalisation and follow-up increase adherence and effectiveness. (Ali et al., 2012; Greaves et al., 2011; Uusitupa et al., 2019)

#### Luxury & Heartfelt Hospitality
> Supportive, person-centred hospitality improves psychological comfort, stress reduction, satisfaction, recovery, sleep, pain perception, and adherence. (Dwamena et al., 2012; Beach et al., 2006; PMC, 2023)
>
> Person-centred care models prioritising empathy, respect, and responsiveness improve engagement and outcomes. (Kitson et al., 2013; McCormack et al., 2010; Edvardsson et al., 2010)
>
> Warm, culturally respectful hospitality enhances trust, safety, and uptake of interventions. (Beach et al., 2006; O’Donnell et al., 2021; PMC, 2023)
>
> Attention to comfort, personalised service, and cultural sensitivity complements wellness pillars by fostering engagement and readiness for positive behaviour change. (McCormack et al., 2010; Dwamena et al., 2012)

Source: https://www.lamarea.com.au/philosophy ("The Science" accordion, each panel opened)  
Status: in hand but needs Belle's check  
Note: Includes "Resistance & Strenth Training" (typo) and sources such as "PMC, 2023", "OUP Academic, 2023" and "MDPI, 2022" that name a publisher rather than a paper. Full references per pillar are not found (plan/11 item 47).

### Belle's eight words (wording ideas)
> RESTORE. RECONNECT. REALIGN.
>
> Release: Let go of stress, tension, and old habits; create space for renewal.
>
> Reconnect: Reconnect to self, others, and nature; cultivate purpose, presence and belonging.
>
> Restore: Reset body and mind through sleep, recovery, and nervous system recalibration.
>
> Realign: Bring habits, routines, and lifestyle into effortless balance.
>
> Educate: Learn evidence-based wellness practices to support long-term vitality.
>
> Empower: Leave equipped and confident to sustain your wellness journey.
>
> Ground: Find stability, calm, and inner centeredness; connect deeply with the earth and ocean..
>
> Nourish: Holistic nourishment for body, mind, and soul through seasonal, plant-based Mediterranean cuisine.

Source: Transcript, "Wording ideas"  
Status: in hand but needs Belle's check  
Note: All eight kept, including Empower. Decision 1 decides whether they lead.

### Other pillar mentions
> La maréa retreats are grounded in evidence-based lifestyle wellness principles — nutrition, movement, sleep & recovery, nature immersion and connection — but delivered in a way that feels intuitive and unforced.

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand  
Note: A five-pillar shorthand. Belle's pillar videos match the ten, per plan/11.

## 9. Food and menus ("The Table")

> Meals and Beverages
>
> At La maréa, food is a central part of the experience. It is designed to be nourishing, Mediterranean-inspired, and practical, with a touch of chef-led luxury. You will learn and taste meals that feel enjoyable and realistic to continue at home.
>
> WHAT TO EXPECT
>
> Fresh, local, and seasonal whole-food meals, thoughtfully prepared using local organic fruit and vegetables.
>
> A Mediterranean inspired menu with a strong emphasis on plant based whole foods, plus locally sourced seafood
>
> Meals designed in alignment with Belle’s evidence based approach to nutrition and lifestyle wellness
>
> Shared dining that encourages connection and unhurried conversation
>
> RETREAT MEAL INCLUSIONS
>
> Nourishing wholefood seasonal organic breakfast
>
> Shared private chef curated Mediterranean-inspired lunch
>
> Refreshments & wholefood snacks provided over the day
>
> SAMPLE MEAL ELEMENTS
>
> Examples may include Greek yoghurt, seeded granola, seasonal organic fruit, local seafood, and organic fresh vegetables. Menu items vary depending on seasonality and produce availability.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.12  
Status: in hand

> SIGNATURE CULINARY EXPERIENCE INCLUDED
>
> Private shared 3 course mediterranean-inspired lunch with Award-Winning Chef, Luca Guiotto of Aromi Dining. Enjoy a fresh, seasonal, plant-forward lunch showcasing the finest local South Australian ingredients, where every course tells a story through bold flavours and elegant presentation.
>
> BEVERAGES INCLUDED
>
> Coffee, herbal tea, mineral water, tonics and cold-pressed juices
>
> DIETARY REQUIREMENTS
>
> We aim to source produce locally wherever possible and require dietary requirements at least two weeks prior to the retreat via the pre arrival questionnaire. If anyone in your group has severe allergies, complex dietary needs, or medical requirements that impact food intake, please contact us as early as possible so we can confirm suitability.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.13  
Status: in hand  
Note: Belle's own phrase "signature culinary experiences" (transcript) matches the guide heading.

> Example Menu
>
> **Entrée**
>
> Poached beetroot carpaccio style, local goats cheese, kohlrabi, white balsamic dressing, macadamia, mint
>
> House-made hummus, organic vegetables crudité, “Peninsula Providore” marinated olives and Greek pita bread
>
> **Mid-course**
>
> Baked eggplant parmigiana, “La Vera” fresh mozzarella, rich house-made tomato sugo, basil pesto
>
> **Main course & sides**
>
> Locally caught yellow eyed mullet, fennel velouté, kalamata, burnt oranges, salmoriglio dressing
>
> Double cooked organic potatoes, parmigiano, chives
>
> Miso baked pumpkin, pepitas, freshly picked herbs
>
> Sauteed greens, preserved lemons, toasted almonds
>
> Inspired by the elements of a Mediterranean lifestyle; plant based nourishment, connection, community & longevity.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.14  
Status: in hand but needs Belle's check  
Note: Seven dishes as published (plan/11 said nine). Named producers: Peninsula Providore (olives) and La Vera (mozzarella). Chef: Luca Guiotto of Aromi Dining (p.13). Whether the menu is published is decision 8.

> Food and nutrition are integral to our philosophy.
>
> Our lifestyle wellness retreats are deeply inspired by the Mediterranean way of living - where nourishment is simple, seasonal, and shared. The recipes you’ll find here follow the same philosophy: plant-based, vibrant, wholesome dishes that celebrate real ingredients and the joy of eating well.
>
> The Mediterranean dietary pattern is widely recognised as one of the healthiest in the world. It’s built on an abundance of fresh vegetables and fruits, whole grains, legumes, nuts, quality olive oil, herbs, and seafood - along with a naturally relaxed approach to mealtimes. It’s as much about how you eat as what you eat: slowly, socially, and with gratitude.
>
> These recipes are crafted to nourish your body, mind and taste buds! May they bring a touch of La Maréa into your kitchen - wherever you may be.

Source: https://www.lamarea.com.au/blog (intro block, also on the category page)  
Status: in hand  
Note: The best existing food philosophy copy on the live site.

> The meals we provide are plant-forward and Mediterranean-inspired. We aim to use local, seasonal and organic produce in our meals where possible.

Source: https://www.lamarea.com.au/faqs  
Status: in hand

### Producers and food partners
- Peninsula Providore: Marinated olives in the example menu; olive oil brand recommendation in the Mediterranean Gnocchi recipe; "providore logo" on /partners
- La Vera: Fresh mozzarella in the example menu
- Aromi Dining: Luca Guiotto's business; "aromi logo" on /partners (https://www.aromidining.com)
- Feather and Peck: Logo on /partners, Food, Beverage & Supplement Partners (https://www.featherandpeck.com.au/)
- Fleurieu Milk Company: Logo on /partners (https://www.fleurieumilkco.com.au/)
- Beach Organics: Logo on /partners (https://www.beachorganics.com.au/)
- Lemon and Sage: Logo on /partners (https://lemonandsage.com.au/)
- Harvest the Fleurieu: Logo on /partners (https://www.harvestthefleurieu.com.au/)
- Happy Way: Logo on /partners (http://www.happyway.com.au)
- Bowlsome: Logo on /partners (https://www.bowlsome.com.au/)
- ORTC: Logo on /partners (alt text "ORTC logo"), what ORTC stands for is not published (http://www.ortc.com.au)
- Latosca: Gnocchi brand recommendation in the Mediterranean Gnocchi recipe
- Garden Fresh: Herbs and spices brand recommendation in the Mediterranean Gnocchi recipe
- Canningvale: Silk eye mask included in La maréa luxury gift bags, per the sleep journal post

> We partner with local South Australian companies to support local producers, suppliers & communities, many of which are based on the Fleurieu Peninsula! This ensures we bring our guests the freshest quality food and high quality wellness products.
>
> Partnering with local brands and communities ensures we can not only enhance our guest experiences with but it boosts SA economic sustainability by supporting local livelihoods, and helps us to build stronger, more integrated relationships with our local communities. We hope this approach creates unique, meaningful experiences for our guests and ensures our retreats contribute positively to this special local area's cultural and economic health.

Source: https://www.lamarea.com.au/partners ("Food, Beverage & Supplement Partners", with 14 partner logos)  
Status: in hand but needs Belle's check  
Note: Logos shown: providore, Feather and Peck, Fleurieu Milk Company, Beach Organics, Lemon and Sage, Harvest the Fleurieu, Happy Way, Bowlsome, Third Spaces, The Earth House, PEAQ, Malissa Fedele, Aromi, ORTC. The copy says many are Fleurieu based without saying which. "ensures we can not only enhance our guest experiences with but it boosts" is published with a word missing.

### Not found for food
Dinner and dessert menus, breakfast dishes as a menu, a pasta masterclass menu, and which producers are Fleurieu based. Seed: `menu.json`.

## 10. Team

> Meet Your Retreat Hosts
>
> With Belle, the Founder (left), bringing expertise in nutrition, exercise science, and lifestyle wellness coaching, supported by Zoe her sister (right), and Sarah (back), both with a background in events management, you can be assured that your retreat will be thoughtfully curated and truly unforgettable.
>
> Our mission is to combine holistic lifestyle wellness practices with luxury heartfelt hospitality, and our team is dedicated to creating personalised experiences that cater to your individual needs and wellness journey.
>
> From our family to yours, we can’t wait to share our special retreats and experiences with you soon.

Source: https://www.lamarea.com.au/our-story ("Meet Your Retreat Hosts")  
Status: in hand but needs Belle's check  
Note: Names Belle, Zoe (her sister) and Sarah as hosts. The guide p.20 names Belle, Zoe Buttery and Jaimi Baker as hosts.

> La maréa is a family run business with a small team who prioritise calm, genuine hospitality. Your hosts are present across the entire day, ensuring every detail is thoughtfully managed while you feel supported, comfortable and completely at ease.
>
> Full facilitation of your day occurs by a range of qualified wellness practitioners on site.

Source: Encounter Bay guide ("FULL DAY (8HR) RETREAT NAIKO ENCOUNTER BAY 2026.pdf", Drive 1TjuiJJkcDsksmHCkUO71rRSCST_9CSjB), p.19  
Status: in hand

> We partner closely with local South Australian accomodation, producers, food artisans, and wellness experts, celebrating community while delivering authentic, deeply meaningful experiences for our guests.

Source: https://www.lamarea.com.au/partners (intro)  
Status: in hand  
Note: "accomodation" misspelt as published.

### Partners page groups and titles
> Lifestyle Wellness Partners
>
> Sarah McLachlan, Retreat Host & Pilates Instructor
>
> Kristian Ryan, Contrast Therapy & Breathwork Facilitator
>
> Jaimi Baker, Yoga & Breathwork Facilitator
>
> Natalie Jane, Yoga & Pilates Instructor
>
> Food & Hospitality Partners
>
> Malissa Fedele, MasterChef Australia Finalist & Nutritionist
>
> Luca Guiotto, Award-Winning Contemporary Italian Chef
>
> Massage & Beauty Partner
>
> Courtney Selfe, Remedial Massage Therapist & Day Spa Owner

Source: https://www.lamarea.com.au/partners (names and titles joined with a comma by me)  
Status: in hand but needs Belle's check  
Note: Roster is decision 12.

### Belle Redden
Title as published: Performance Nutritionist | Exercise Scientist | Lifestyle Wellness Retreat Host  
Business: La maréa; AB Performance Nutrition  

Qualifications:
> B.Ex.S., B.Nut.Food Sci. (journal byline)
>
> Her degrees in Exercise & Sports Science and Nutrition & Food Sciences forged a path that led to work in high-performance sport and nutrition. Coaching athletes and active individuals, she developed expertise in lifestyle wellness education and collaborating in multi-disciplinary teams - teaching others how to build sustainable habits that optimise health and performance in everyday life.
>
> Accredited Sports Nutritionist and Exercise Scientist (Encounter Bay guide p.20)

Services:
> Nutrition education and curation of overall experience design (guide p.20)
>
> Lifestyle wellness & nutrition education sessions (guide p.21)

Bio:
> Founder of La maréa. Belle is an Accredited Sports Nutritionist and Exercise Scientist with experience across evidence based lifestyle wellness, nutrition & high-performance. Belle is your lead retreat host and provides nutrition education and curation of overall experience design.
>
> La maréa & AB Performance Nutrition. Nutritionist & Exercise Scientist, delivering lifestyle wellness & nutrition education sessions. Lead on-site retreat host & coordinator.
>
> Annabelle Redden is a Performance Nutritionist, Exercise Scientist, Lifestyle Wellness Retreat Host, and founder of La maréa and AB Performance Nutrition. Her work brings together evidence-based nutrition, movement and lifestyle wellbeing to support health, recovery and performance.

Source: https://www.lamarea.com.au/our-story; Encounter Bay guide p.20 (Your Retreat Hosts); Encounter Bay guide p.21 (Key Practitioners and Partners); https://www.lamarea.com.au/post/the-importance-of-sleep-for-wellbeing-recovery-performance-how-to-create-a-pre-bed-routine-that (About the Author)  
Status: in hand but needs Belle's check  
Note: Published as "Belle Redden" (guide, FAQ), "Annabelle Redden" (journal) and, in an image alt text on /our-story, "annabelle buttery founder of la maréa luxury retreats". The founder story itself lives in the Our story section of the harvest. Qualification wording differs between sources (degrees on /our-story, "Accredited Sports Nutritionist" in the guide). Belle to confirm the exact wording and whether "Accredited" is current.

### Zoe Buttery
Title as published: Events lead and retreat host  

Bio:
> Events lead and retreat host. Zoe brings a background in marketing and events, with a focus on thoughtful curation and seamless guest experience. Zoe oversees the retreat flow, logistics and on the ground support throughout the day.
>
> With Belle, the Founder (left), bringing expertise in nutrition, exercise science, and lifestyle wellness coaching, supported by Zoe her sister (right), and Sarah (back), both with a background in events management, you can be assured that your retreat will be thoughtfully curated and truly unforgettable.

Source: Encounter Bay guide p.20 (Your Retreat Hosts); https://www.lamarea.com.au/our-story (Meet Your Retreat Hosts)  
Status: in hand but needs Belle's check  
Note: No bio page on the live site. /our-story calls her "Zoe her sister". Not on the partners page.

### Sarah McLachlan
Title as published: Retreat Host, Pilates Instructor (in progress) & Founding partner of Happy Melon Studios  
Business: Happy Melon Studios (founding partner)  

Qualifications:
> Bachelor of Business, Entrepreneurship - RMIT
>
> Founding Partner - Happy Melon Studios
>
> Marketing & Events - Bird in Hand
>
> Matwork & Reformer Certification (in progress) - Breathe Education

Bio:
> Sarah brings extensive experience in PR, Marketing, Events and Brand Communications, with a special passion for partnering with brands in the wellness space. She is currently completing her certification in Group Mat and Reformer Pilates, further aligning her professional skills with her personal interests.
>
> Living on a farm with her young family, Sarah understands the art of the juggle but remains committed to prioritising her health and wellbeing. She loves spending time outdoors, traveling, exercising, and cheering on her kids at their weekend sports.
>
> Due to Sarah's extensive background and experience she is one of our key La maréa retreat hosts!

Source: https://www.lamarea.com.au/sarah-mclachlan; https://www.lamarea.com.au/partners; https://www.lamarea.com.au/our-story (Meet Your Retreat Hosts)  
Status: in hand but needs Belle's check  
Note: Pilates certification listed as "in progress". Not listed as a host in the Encounter Bay guide (p.20 names Belle, Zoe and Jaimi). Belle to confirm her current role (decision 12).

### Kristian Ryan
Title as published: Founder of Third Spaces, Contrast Therapy & Breathwork Facilitator, Yoga Instructor  
Business: Third Spaces (https://www.thirdspaces.au)  

Qualifications:
> Nationally Accredited Yoga Instructor
>
> Certified RYS Yoga Alliance 200 - hour Vinyasa teacher teacher training
>
> Specializing in stress reduction and mindful movement
>
> Emphasis on breath-body connection and nervous system regulation
>
> Certified Wim Hof Method Instructor training
>
> Certified in the three pillars: breathing, cold exposure, and mindset
>
> Experienced in guiding individuals through controlled stress exposure
>
> Focused on building resilience and enhancing human performance
>
> Oxygen Advantage® Instructor training
>
> Trained in functional breathing for health and performance
>
> Specialized in breathing biochemistry and respiratory muscle training
>
> Expert in BOLT (Body Oxygen Level Test) assessment and improvement
>
> XPT (Extreme Performance Training) Instructor training
>
> Experienced in performance optimization and recovery protocols
>
> Focused on building mental resilience through physical challenges

Services:
> - Guided 60 or 90 minute Contrast Therapy Sessions (Rotating between Finnish Sauna & Ice bath)
>
> Experience the powerful benefits of alternating heat and cold. Sessions include guided rotations between Finnish barrel sauna (80-100 degrees Celsius) and ice bath immersion.
>
> - Heat or Cold Therapy Sessions (Traditional Finnish wood-fired sauna protocols, with the sauna temperature holding at 80-100 Celsius and Ice bath )
>
> - 30 or 60 minute Guide Breathwork & Meditation sessions
>
> - 30 or 60 minute Private group yoga classes (meditation and breathwork integration)

Bio:
> Chris believes in the power of "feeling is understanding"- a phenomenological principle that experiencing something in your body creates deeper knowledge than intellectual learning alone. Every session he guides is designed to help you feel the immediate effects of these practices, creating embodied knowledge that becomes part of who you are.
>
> His approach integrates:
>
> -Evidence-based techniques grounded in current research
>
> -Personalized instruction adapted to your unique needs and goals
>
> -Progressive development that honors where you are while challenging you to grow
>
> - Holistic integration that connects physical practices with mental and emotional well-being
>
> Whether you're seeking stress relief, performance enhancement, personal growth, or simply curious about these powerful practices, Chris will guide you safely and effectively on your journey. Every session is designed not just to help you feel better in the moment, but to equip you with tools and knowledge you can use for the rest of your life. This is education through experience - learning that lives in your body and becomes part of who you are.

Source: https://www.lamarea.com.au/kristian-ryan; https://www.lamarea.com.au/partners  
Status: in hand but needs Belle's check  
Note: The bio text calls him "Chris" and the meta description "Kris". Not named in the Encounter Bay guide, which credits contrast therapy to Jaimi Baker (PEAQ). Belle to confirm who runs contrast therapy.

### Jaimi Baker
Title as published: Yoga & Breathwork Facilitator, Founder of PEAQ Performance Centre  
Business: PEAQ Performance Centre (https://www.peaq.com.au/)  

Qualifications:
> Business Owner, PEAQ Performance
>
> B. Psych Science (Hons), University of Adelaide
>
> 200hr Yoga Teacher Training
>
> Oxygen Advantage Functional Breathing Trainer

Services:
> Vinyasa, a dynamic breath-led flow that builds heat and strength.
>
> Yin, a slow, meditative practice with long holds that target deep connective tissues.
>
> Guided Meditation & Pranayama, breathwork and mindfulness techniques to calm the mind and regulate the nervous system.
>
> Roll & Release, a mobility-focused practice using props to ease tension and enhance movement.
>
> Chair Yoga, a supportive, accessible option ideal for beginners, seniors, or those with limited mobility.

Bio:
> Jaimi offers a blend of dynamic, restorative, and accessible movement practices designed to support both physical performance and emotional wellbeing. Her teaching draws on evidence-based psychology, functional breathing, and yoga philosophy to create grounded, intentional sessions suitable for a wide range of bodies and experience levels.
>
> Jaimi offers a range of class styles including:

Source: https://www.lamarea.com.au/jaimi-baker; https://www.lamarea.com.au/partners; Encounter Bay guide p.20 (Your Retreat Hosts); Encounter Bay guide p.21 (Key Practitioners and Partners)  
Status: in hand but needs Belle's check  
Note: Guide p.20: "Yoga & breathwork facilitator, Jaimi is part of the La maréa hosting team and supports guest experience across the day." Guide p.21: "PEAQ Performance. Yoga instructor, Recovery and Breathwork facilitator, delivering yoga, breathwork, contrast therapy and meditation sessions." Reviews spell her Jaimi, Jaimee, Jaime and Jamie.

### Natalie Jane
Title as published: Yoga & Mat Pilates Instructor, Breathwork & Meditation Facilitator  

Qualifications:
> 200 hour Yoga Teacher Training
>
> Studio Pilates Matwork Pilates
>
> Studio Pilates Advanced Matwork Pilates
>
> Breathwork facilitator
>
> Meditation facilitator
>
> Counsellor in training (Institute for Applied Psychology)

Services:
> Yoga — Vinyasa and Hatha
>
> Pilates — Mat Pilates (beginner to advanced)
>
> Breathwork
>
> Meditation
>
> Counselling — currently in training

Bio:
> Nat believes that breath, movement, and stillness are the gateway to a calm and peaceful existence. She believes that when we intentionally explore our edges in a controlled and supportive environment, we expand our capacity for resilience and raise our baseline for stress management in everyday life.
>
> Her offerings are designed to meet individuals where they are and support both physical, mental and emotional wellbeing. Nat’s services include:

Source: https://www.lamarea.com.au/natalie-jane; https://www.lamarea.com.au/partners  
Status: in hand but needs Belle's check  
Note: No business named. Not in the Encounter Bay guide.

### Malissa Fedele
Title as published: MasterChef Australia Finalist & Clinical Nutritionist  
Business: The Mood Boosting Nutritionist™ (malissafedele.com) (https://www.malissafedele.com)  

Qualifications:
> BHSc, Clinical Nutritionist (complementary nutrition)
>
> MasterChef Australia Season 15 Finalist
>
> Recipe developer and media personality with expertise in Food & Mood
>
> Featured on The Morning Show, Sunrise, major publications, podcasts, and wellness events
>
> Background in Italian cooking and evidence-based nutrition, blending culinary skill with emotional wellbeing

Services:
> Mediterranean Pasta-Making Masterclass (2 hours)
>
> Hands-on, interactive sessions where guests learn to make authentic Italian pasta from scratch with Malissa.
>
> Includes: Fresh egg pasta, Traditional Mediterranean sauces, Cooking demonstration + guided practice, Tasting + shared meal
>
> Ideal for group bonding and creating a memorable retreat experience
>
> Mood-Boosting Cooking Class (90 minutes)
>
> A nourishing, interactive cooking session focused on simple, mood-supportive meals.
>
> Options include: Anti-inflammatory meals, Gut-loving bowls, Seasonal Mediterranean dishes, Energy-boosting recipes.
>
> Guests receive recipes, nutrition education, and a delicious meal to enjoy.
>
> 1:1 Mood Boosting Nutrition Consultation (60 minutes)
>
> Private, tailored session designed to provide deeper support during retreat stays.
>
> In this consultation, Malissa helps guests:
>
> -Establish personal health and nutrition goals
>
> - Understand unique Food × Mood patterns
>
> - Identify factors impacting energy, digestion, hormones, or emotional wellbeing
>
> - Break down current eating habits and highlight simple, impactful changes
>
> - Create a personalised action plan with practical recommendations and mood-boosting strategies
>
> Perfect for guests seeking clarity, guidance, and a supportive plan designed just for them.

Bio:
> Malissa is a Clinical Nutritionist, MasterChef Australia Finalist, recipe developer and media personality known as The Mood Boosting Nutritionist™. With a background in Italian cooking and evidence-based nutrition, she blends culinary skill with emotional wellbeing, specialising in the Food x Mood connection. Malissa has been featured on The Morning Show, Sunrise, across major publications and podcast platforms, and leads sought-after cooking classes, pasta-making masterclasses, corporate workshops and wellness events. Her work blends nutrition science with joyful, mood-boosting cooking.

Source: https://www.lamarea.com.au/malissa-fedele; https://www.lamarea.com.au/partners  
Status: in hand but needs Belle's check  
Note: Lists a 2 hour Mediterranean Pasta-Making Masterclass and a 60 minute 1:1 consultation. Not in the Encounter Bay guide. Belle to confirm whether she still runs the pasta masterclass for La maréa.

### Luca Guiotto
Title as published: Internationally Renowned and Award-Winning Chef  
Business: Aromi Dining (https://www.aromidining.com)  

Qualifications:
> Veneto-born chef, internationally renowned and award-winning head chef
>
> 10 years in Michelin-starred restaurants in Italy (Cinzia & Valerio, Casin del Gamba)
>
> Experience in luxury 5-star hotels in Switzerland, including Badrutt Palace, St. Moritz
>
> Awards: Ospitalità Italiana Overseas Excellence, 2016; TAA Top 3 Lifestyle Hotel in Asia & Pacific, 2016; SMH Good Food Guide, 1 Hat, 2017; TAA Chef of the Year Finalist, 2019

Services:
> Luca creates menus that showcase Italian-inspired flavours while aligning perfectly with your vision. Whether you’re craving classic dishes, exploring modern interpretations, or accommodating dietary requirements, each dish is thoughtfully curated to suit your needs.
>
> Using the finest local and seasonal South Australian ingredients, Luca ensures every course tells a story through bold flavours, elegant presentation, and meticulous attention to detail.
>
> Luca curates a variety of private dining experiences, including individually plated or shared 3-, 4-, and 5-course lunches and dinners, as well as exclusive private pasta-making classes.

Bio:
> "ITALIAN FLAVOURS WITH A CONTEMPORARY TWIST, brought TO LIFE THROUGH PERSONALITY, INSTINCT and finesse."
>
> Luca brings Italian flavours with a contemporary twist to the table, infused with personality, instinct, and finesse. At the heart of his culinary philosophy is the belief that every dining experience should be as unique as the individuals enjoying it. He designs tailored menus to reflect your tastes, preferences, and the occasion you’re celebrating.

Source: https://www.lamarea.com.au/luca-guiotto; https://www.lamarea.com.au/partners; Encounter Bay guide p.13 (Signature culinary experience); Encounter Bay guide p.21 (Key Practitioners and Partners)  
Status: in hand but needs Belle's check  
Note: Guide p.21: "Aromi Dining. Contemporary Italian award winning chef and founder of Aromi Dining, delivering private dining and chef led experiences." The home page testimonial calls him "Lucas". The quote line is published in mixed capitals and is kept verbatim.

### Courtney Selfe
Title as published: Remedial Massage & Beauty Therapist, Founder of Earth House and Spa  
Business: The Earth House and Spa (https://www.earthhousespa.com/)  

Qualifications:
> Diploma in remedial massage therapy
>
> Diploma in beauty and advanced treatments

Services:
> 60 or 45 minute deep tissue remedial massage
>
> 60 or 45 minute restoration & relaxation massage
>
> 60 minute waterlily rose infusion facials

Bio:
> Courtney founded The Earth House and Spa; a space created with a clear vision to offer a holistic haven where clients can unwind and feel deeply looked after.
>
> Courtney is a qualified remedial therapist and entrepreneur with over a decade of experience in the beauty and day spa industry. She is a dedicated remedial and beauty therapist with extensive knowledge of healing the skin from the inside out. She provides deeply nourishing spa rituals that leave you floating out the door. The spa reflects her deep commitment to high-quality care and genuine connection.
>
> As a mother and business owner, Courtney understands the importance of self-care that is both indulgent and impactful. Her team of skilled practitioners offer a blend of remedial and therapeutic massage, beauty therapy, advanced skin treatments, naturopathy, and Reiki healing. All designed to help you look and feel your best. In a world that moves fast, The Earth House Spa is a place to slow down, reconnect and embrace self-care with purpose.

Source: https://www.lamarea.com.au/courtney-selfe; https://www.lamarea.com.au/partners; Encounter Bay guide p.15; Encounter Bay guide p.21 (Key Practitioners and Partners)  
Status: in hand but needs Belle's check  
Note: Guide p.21: "Earth House and Spa. Qualified remedial and beauty therapist, delivering restorative massage treatments alongside her team." Business name appears as "Earth House and Spa", "The Earth House and Spa", "Earth House & Spa" and "The Earth House Spa".

Portraits for every person: **not found** as confirmed files (plan/11 item 59). Seed: `people.json`.

### Partner call-out on /partners
> Lifestyle Wellness Partners
>
> In 2026 we are looking to explore partnerships with other local experts and practitioners to create unique experiences for our guests, if you work in any of the following fields please reach out, we’d love to hear from you!
>
> Mind-Body Therapeutic
>
> Creative & Art Therapy
>
> Music Therapy / Sound Healing
>
> Dance / Movement Therapy
>
> Mindfulness-Based Stress Reduction (MBSR)
>
> Meditation (guided, Vedic, transcendental, Zen, etc.)
>
> Personal Growth, Mindset & Team Building
>
> Goal setting & journaling workshops
>
> Mindset coaching
>
> Stress management
>
> Burnout recovery sessions
>
> Leadership & high-performance workshops
>
> Team-building workshops
>
> Nature & Movement Experiences
>
> Coastal Hiking & Nature Walks
>
> Aqua movement / ocean-based movement sessions
>
> Somatic stretching / mobility sessions
>
> Forest bathing (shinrin-yoku)
>
> Nutrition & Culinary Wellness
>
> Cooking classes / demonstrations
>
> Farm-to-table dining experiences
>
> Foraging walks exploring Australian native bush foods
>
> Fermentation workshops
>
> Are you a local SA company who aligns with our values?
>
> We’d love to connect! Express your interest below

Source: https://www.lamarea.com.au/partners  
Status: in hand  
Note: Recruitment copy for future practitioners, not guest-facing.

### Our story (the founder story, for the Our story page)
> "Inspired by the elements of a Mediterranean lifestyle; plant based nourishment, connection, community & longevity"
>
> La maréa, meaning ‘the tide,’ in Spanish reflects life’s natural rhythm: the ebbs and flows, the balance between stillness and movement, the transformations that unfold over time and the continual cycle of endings and new beginnings.
>
> born.
>
> For Belle, the founder of La maréa, the Fleurieu Peninsula coastline wasn’t just a backdrop - it was home. She grew up in McLaren Vale on thirteen acres of land, spending most of her childhood outdoors, training for swimming and surf lifesaving at Moana Beach.
>
> Her love for the Fleurieu Peninsula was nurtured from a young age, with her summers filled with long days at Myponga Beach - family, water activities, sunshine, and afternoons enjoying freshly caught squid. It was in these simple, joyful moments that her lifelong passion for health, movement, food, and lifestyle wellness was born.
>
> As Belle grew older, so did her horizons. In her travels, she was always drawn to the coast - both in Australia and around the world—deepening her love for the outdoors and her belief in the restorative power of the sea.
>
> Her degrees in Exercise & Sports Science and Nutrition & Food Sciences forged a path that led to work in high-performance sport and nutrition. Coaching athletes and active individuals, she developed expertise in lifestyle wellness education and collaborating in multi-disciplinary teams - teaching others how to build sustainable habits that optimise health and performance in everyday life.
>
> Adulthood, however, also revealed life’s challenges. Belle witnessed family and friends face chronic disease, pain, grief, addiction, workplace stress, and mental health struggles. She felt the strain herself: long hours behind screens, the pull of social media, and the disconnection that comes from a technology-driven world. The contrast to her own childhood, where she was immersed outdoors, was striking. Life seemed much more busy but sedentary, more stressful, disconnected, and less aligned with the simple rhythms of nature.
>
> It was through this reflection that the vision for La maréa began to take shape. Belle started exploring how people could reclaim their health and wellbeing through nutrition, movement, and holistic lifestyle wellness experiences - grounded in nature, connection, and the Fleurieu Peninsula - where her own wellness journey as a child began.
>
> Belles travels through the Mediterranean, especially along the Sardinian coastline - a Blue Zone where people live longer, healthier lives, paired with her deep knowledge of the Mediterranean diet, its evidence-based health benefits, and its joyful, communal approach to food, it felt only natural that La maréa would carry a Mediterranean influence.
>
> Today La maréa retreats are inspired by the elements of a Mediterranean lifestyle; plant based nourishment, connection, community and lessons of longevity flow into every retreat experience.

Source: https://www.lamarea.com.au/our-story  
Status: in hand but needs Belle's check  
Note: The standalone word "born." is published as its own line, probably the end of a display heading. "Belles travels" is missing an apostrophe. The paragraph on family and friends facing "chronic disease, pain, grief, addiction" is personal; Belle confirms it stays. The first-person note on starting La maréa on the Fleurieu (build decision 7) is **not found**.

## 11. Testimonials

Twenty testimonials are on the live site: two in the home page slideshow and eighteen in the Google reviews widget (a floating "5.0, 18 REVIEWS" badge on every page that opens a list showing each reviewer's name and date). Sixteen of the eighteen Google reviews have text; two are ratings only. All are five stars. Seed: `testimonials.json` (verbatim, attribution as shown). No testimonial carries a photo, a retreat tag or recorded permission.

### Home page slideshow
> Lucas’ lunch was stunning. The use and caretaking of local ingredients was so encouraging to see. The pasta was a stand out with complex and yet somehow, delicate flavours. Delicious. He was also very engaging which added greatly to the whole experience.
>
> **Megan**

Source: https://www.lamarea.com.au/ (testimonial slideshow)  
Status: in hand but needs Belle's check  
Note: Edited version of the Google review by Meg Hansen (19-02-2026): the Google text says "so exciting to see", this slide says "so encouraging to see". The chef named "Lucas" appears to be Luca Guiotto. Belle to confirm which wording is approved.

> I cannot recommend Jaimi's yoga session more highly. I hadn't practiced regular yoga for many years and was in a group with younger, more regular yoga devotees. Jaimi easily accommodated the different abilities within the group and quietly modified any movements that might have been more difficult for me over the course of the session. I came away feeling refreshed and revived and keen to get back into regular yoga!
>
> **Helen**

Source: https://www.lamarea.com.au/ (testimonial slideshow)  
Status: in hand but needs Belle's check  
Note: Edited version of the Google review by Helen Ford (19-02-2026): the Google text spells the instructor "Jamie", this slide spells "Jaimi".

### Google reviews widget (as displayed: name, then date)
> (rating only, no text)
>
> **Sara Natasha**, 2026-08-27, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand  
Note: Five-star rating with no written review.

> I had such a lovely morning with Belle and La Marea, as part of our corporate Wake Up to Wellness experience. The morning included yoga, breakfast, a nutrition session, massage, pasta making and lunch, the perfect mix of wellness, relaxation and connection.
>
> Everything was beautifully organised, and all the little details were so thoughtfully considered. The La Marea team created such a welcoming and enjoyable experience for our group, and it was a great opportunity to step away from the office and spend quality time together.
>
> I would highly recommend La Marea for a corporate retreat or wellness experience.
>
> **Alyse Hean**, 2026-08-24, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> The wellness workshop with La Maréa was relaxing, informative and so much fun! Belle and the team are so welcoming and knowledgeable, and they curated the event for our group so that everyone felt like it resonated - and the goodies throughout the day were so yummy! Thanks so much Belle
>
> **Emma Hockney**, 2026-08-23, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> I had an amazing experience, and this is coming from someone who has never done anything like this ever before, so it was all very new to me. The yoga, breath work and mindfulness, as well as lifestyle advice was really insightful, and the hot/cold therapy was an exhilarating experience. Highly recommend.
>
> **Matthew Lindblom**, 2026-08-14, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> Recently attended a corporate retreat with Belle and the La Marea team, and from start to finish, it was absolutely wonderful!
>
> Everything was so thoughtfully planned and organised, with every little detail taken care of. I absolutely loved my massage, and the pasta-making class was such a fun experience.
>
> I couldn’t recommend the La Marea team highly enough for anyone looking to organise a corporate retreat or getaway.
>
> **Chelsea Casey**, 2026-08-13, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> We spent a wonderful morning with Belle and her team. Our corporate team particiapted in the Wake Up to Wellness program and we left feeling relaxed, recovered, and empowered! Would highly reccommend.
>
> **Justin Kurenda**, 2026-08-13, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> Belle goes above and beyond with her level of services. She tailored the experience to suit what we needed and went in depth with ways we can better our wellness and nutrition. We also did contrast therapy going from the sauna to cold pool with breathing exercises. I felt so refreshed and motivated after the retreat and have already started implementing my learnings from the experience. It was a great opportunity for team bonding!!
>
> **Levi Sigston**, 2026-08-13, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> During and after this retreat, I felt calm, nourished, and informed about prioritising my wellness. I’m forever grateful for this experience and truly valued the time to rest, connect with myself, and do something just for me ❤️
>
> **Emma Knight**, 2026-08-03, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> Belle has created a beautiful space for women to come authentically as themselves, in whatever season in life they are, and in the knowledge they will be completely supported. Give yourself permission to take a moment of time at a La Marèa retreat experience, bring your energy back within, breathe and let go, and meet some wonderful people along the way. Your soul will thank you, endlessly.
>
> **Belinda Angus**, 2026-08-02, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> What a beautiful way to spend a Sunday evening.
>
> From the moment we walked in, we were completely taken care of. Everything had been thoughtfully prepared, delicious protein balls, herbal teas, relaxing tonics, and all the yoga mats and bolsters laid out ready for us overlooking the beach as we waited for the sunset.
>
> The evening began with breathwork, which helped me slow down, focus, and reconnect with myself. This flowed into a beautiful yoga reset, followed by an informative nutrition session on the Mediterranean way of eating and its benefits for health and wellbeing.
>
> Throughout the evening, we were nurtured with more delicious snacks and a gorgeous Mediterranean bowl of chickpeas and quinoa for dinner.
>
> The whole experience felt calming, restorative, and incredibly nourishing. I left feeling relaxed, grounded, and completely cared for. A truly special evening that I would highly recommend to anyone needing a little reset and some time to refill their cup. 💗
>
> **Donna Giannetta**, 2026-05-31, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> The Sunset Retreat experience with Belle and Jaimi was truly wonderful. A nurturing experience, from the warmth I felt from the onset of arriving and right thru. Belle, your considered planning and vision to make us feel special is a credit to you. I left grounded, inspired, cared for and mindful of my body and how treating myself with kindness is the best investment inside and out. Keep shining with your beautiful heart x
>
> **Janelle Hueppauff**, 2026-05-29, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> I recently attended the Sunset Retreat and honestly had such a beautiful experience. From the moment I arrived, everything felt so calming and thoughtfully planned. The venue itself was stunning — the large glass windows overlooking the beach while watching the sunset created the most peaceful atmosphere. It was absolutely beautiful.
>
> The little details made the experience feel extra special. I loved the sweet treat ball and the delicious health drink on arrival. The aesthetic of the whole event was gorgeous, from the colour scheme to the beautiful Fleurieu candle and the amazing goodie bags.
>
> As a busy working and studying mum, I rarely take time to properly relax or do something just for myself, so I’m really glad I chose to attend. The yoga practice was incredible — gentle, grounding and accessible without being too difficult. It gave my body such a needed stretch and release. The breathwork session and the empowering words Jaimee shared were such a beautiful reminder to slow down and reconnect with myself. It’s honestly not often that my body fully relaxes, but after the practice I felt calm, lighter and genuinely relaxed.
>
> The group of women attending was also lovely. The environment felt welcoming and wholesome, never intimidating. Jaimee and Belle both made such an effort to personally greet everyone and create a warm, inclusive space.
>
> I also really enjoyed Belle’s nutrition education talk. I took away some valuable tips and I loved the recipes and information sheets that were provided to continue learning afterwards.
>
> Overall, it was such a nourishing and thoughtfully curated experience. I would absolutely recommend the Sunset Retreat to others and I’m already looking forward to attending the next event.
>
> **Alysha Mines**, 2026-05-28, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand  
Note: Contains "honestly" and names Jaimi as "Jaimee". Verbatim as published.

> What an amazing retreat. A beautiful night, well organised. The Yoga by Jaime was just what we needed. Education and food by Belle was great. We will definitely book in again. 🫶❤️
>
> **Maria Turnbull**, 2026-05-28, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand  
Note: Names Jaimi as "Jaime". Verbatim as published.

> Professional and knowledgeable - this was a beautifully curated experience that left me feeling calm and nurtured. The setting by the beach was perfect and listening to the waves during the yoga session delivered by Jaimi added to the serenity. Jaimi’s yoga session was so calming and I loved the breath work. Belles session on Mediterranean diet and lifestyle was informative and full of so many practical and useful tips to easily integrate into daily life on how to improve my wellbeing. The take home goody bag was full of top quality products and very generous! Highly recommend Lamarea as part of your wellness journey.
>
> **Melissa Brown**, 2026-05-24, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> (rating only, no text)
>
> **Taylah G**, 2026-05-24, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand  
Note: Five-star rating with no written review.

> Beautiful wellness experience to nurture the soul and clear the mind. Loved it, thank you.
>
> **Nicky Orchard**, 2026-05-24, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand

> I cannot recommend Jamie's yoga session more highly. I hadn't practiced regular yoga for many years and was in a group with younger, more regular yoga devotees. Jamie easily accommodated the different abilities within the group and quietly modified any movements that might have been more difficult for me over the course of the session. I came away feeling refreshed and revived and keen to get back into regular yoga!
>
> **Helen Ford**, 2026-02-19, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand  
Note: Original of the home page "Helen" slide.

> Lucas’ lunch was stunning. The use and caretaking of local ingredients was so exciting to see. The pasta was a stand out with complex and yet somehow, delicate flavours. Delicious. He was also very engaging which added greatly to the whole experience.
>
> **Meg Hansen**, 2026-02-19, 5 stars

Source: Google reviews widget on https://www.lamarea.com.au  
Status: in hand  
Note: Original of the home page "Megan" slide.

Google business name shown in the widget: "La maréa Luxury Wellness Retreats". The guide p.25 links to the Google listing for reviews. Naiko Retreat's own site carries a guest quote about Naiko; it is the venue's, not La maréa's, and is not included.

## 12. Journal

> Food and nutrition are integral to our philosophy.
>
> Our lifestyle wellness retreats are deeply inspired by the Mediterranean way of living - where nourishment is simple, seasonal, and shared. The recipes you’ll find here follow the same philosophy: plant-based, vibrant, wholesome dishes that celebrate real ingredients and the joy of eating well.
>
> The Mediterranean dietary pattern is widely recognised as one of the healthiest in the world. It’s built on an abundance of fresh vegetables and fruits, whole grains, legumes, nuts, quality olive oil, herbs, and seafood - along with a naturally relaxed approach to mealtimes. It’s as much about how you eat as what you eat: slowly, socially, and with gratitude.
>
> These recipes are crafted to nourish your body, mind and taste buds! May they bring a touch of La Maréa into your kitchen - wherever you may be.

Source: https://www.lamarea.com.au/blog (index intro, page title "Research & Recipes")  
Status: in hand

Four posts. Full bodies in `journal.json` as markdown, with the sleep post's reference list also split out by group. Dates are from each post's schema (the on-page date element is hidden).

| Post | Author (schema) | Published | Excerpt on index | References |
|---|---|---|---|---|
| The Importance of Sleep for Wellbeing, Recovery & Performance: How to Create a Pre-Bed Routine That Works for You | Annabelle Redden | 01-09-2026 | yes | 21 |
| Honey Soy Salmon Poke Bowl | Susie Styler | 06-12-2025 | yes | 0 |
| Med-Inspired Vegetable Lasagna | Susie Styler | 06-12-2025 | yes | 0 |
| Mediterranean Gnocchi | Annabelle Redden | 21-11-2025 | yes | 0 |

Source: https://www.lamarea.com.au/post/... (four URLs in the sitemap)  
Status: in hand  
Note: the recipe posts list "Susie Styler" as author in the schema only, with no visible byline. The sleep post byline is "Written By Annabelle Redden, Performance Nutritionist | Exercise Scientist | Lifestyle Wellness Retreat Host, B.Ex.S., B.Nut.Food Sci." Category "Sleep & Recovery" exists; its page shows "Posts Coming Soon". Category names for the new journal are decision 24.

### The sleep post, opening and author note (full text in the seed)
> We often talk about nutrition, exercise and stress management when it comes to feeling and performing at our best — but **sleep is one of the foundations that ties all of these together.**
>
> Sleep isn't simply “rest”. It's when your body and brain have an opportunity to recover, repair, reset and adapt.
>
> For athletes, sleep supports physical recovery, training adaptation, reaction time, decision-making and performance. Research in competitive athletes suggests that sleep can be particularly important for areas such as speed, technical skill and tactical decision-making, but sleep is just as important outside of sport.

> Annabelle Redden is a Performance Nutritionist, Exercise Scientist, Lifestyle Wellness Retreat Host, and founder of La maréa and AB Performance Nutrition. Her work brings together evidence-based nutrition, movement and lifestyle wellbeing to support health, recovery and performance.

Source: https://www.lamarea.com.au/post/the-importance-of-sleep-for-wellbeing-recovery-performance-how-to-create-a-pre-bed-routine-that  
Status: in hand

### References in the sleep post
> **Sleep, health & performance**
>
> 1. Australian Government Department of Health, Disability and Ageing. Australian 24-hour movement guidelines for adults (18–64 years) and older adults (65+ years). 2026.
>
> 2. Sleep Health Foundation. How much sleep do you really need? 2024.
>
> 3. Cappuccio FP, D'Elia L, Strazzullo P, Miller MA. Sleep duration and all-cause mortality: a systematic review and meta-analysis of prospective studies. Sleep. 2010;33(5):585–592.
>
> 4. Cappuccio FP, Cooper D, D'Elia L, Strazzullo P, Miller MA. Sleep duration predicts cardiovascular outcomes: a systematic review and meta-analysis of prospective studies. European Heart Journal. 2011;32(12):1484–1492.
>
> 5. Chaput JP, Dutil C, Sampasa-Kanyinga H. Sleeping hours: what is the ideal number and how does age impact this? Nature and Science of Sleep. 2018.
>
> 6. Kirschen GW, Jones JJ, Hale L. The impact of sleep duration on performance among competitive athletes: a systematic literature review. Clinical Journal of Sport Medicine. 2020;30(5):503–512.
>
> 7. Chaput JP, Dutil C, Featherstone R, et al. Sleep timing, sleep consistency, and health in adults: a systematic review. Applied Physiology, Nutrition, and Metabolism. 2020;45:S232–S247.
>
> 8. Kalkanis A, Lenkens D, Steiropoulos P, Testelmans D. Sleep regularity as an important component of sleep hygiene: a systematic review. Sleep Medicine Reviews. 2025;84:102203.
>
> **Sleep routine, circadian rhythm & environment**
>
> 1. Sleep Health Foundation. Sleep Hygiene: Good Sleep Habits. 2024.
>
> 2. De Pasquale C, El Kazzi M, Sutherland K, et al. Sleep hygiene – What do we mean? A bibliographic review. Sleep Medicine Reviews. 2024;75:101930.
>
> 3. Haghayegh S, Khoshnevis S, Smolensky MH, Diller KR, Castriotta RJ. Before-bedtime passive body heating by warm shower or bath to improve sleep: a systematic review and meta-analysis. Sleep Medicine Reviews. 2019;46:124–135.
>
> 4. Scullin MK, Krueger D. To-do lists promote sleep. Journal of Experimental Psychology: Applied. 2018;24(1):1–11.
>
> 5. Afshari A, et al. The efficacy of eye masks and earplugs interventions for sleep promotion in critically ill patients: a systematic review and meta-analysis. Frontiers in Psychiatry. 2021;12:791342.
>
> **Nutrition & sleep**
>
> 1. Arab A, Lempesis IG, et al. Sleep and the Mediterranean diet: a systematic review and meta-analysis. Sleep Medicine Reviews. 2025;80:102071.
>
> 2. Saidi O, Rochette E, Dambel L, St-Onge MP, Duché P. Chrono-nutrition and sleep: lessons from the temporal feature of eating patterns in human studies – a systematic scoping review. Sleep Medicine Reviews. 2024;76:101953.
>
> 3. Lin HH, Tsai PS, Fang SC, Liu JF. Effect of kiwifruit consumption on sleep quality in adults with sleep problems. Asia Pacific Journal of Clinical Nutrition. 2011;20(2):169–174.
>
> 4. Barforoush F, et al. The effect of tart cherry on sleep quality and sleep disorders: a systematic review. Food Science & Nutrition. 2025;13(9).
>
> 5. Gardiner C, et al. The effect of caffeine on subsequent sleep: a systematic review and meta-analysis. Sleep Medicine Reviews. 2023.
>
> 6. Gardiner C, et al. The effect of alcohol on subsequent sleep in healthy adults: a systematic review and meta-analysis. Sleep Medicine Reviews. 2025;80:102030.
>
> 7. Rackard G, Madigan SM, Connolly J, Keaver L, Ryan L, Doherty R. Nutrition strategies to promote sleep in elite athletes: a scoping review. Sports. 2025;13(10):342.
>
> **Australian clinical guidance**
>
> 1. Sweetman A, Putland S, Meaklim H, et al. Management of adult insomnia in Australia: a joint position statement of the Australasian Sleep Association, Sleep Health Foundation, Royal Australian College of General Practitioners, Australian Psychological Society, Pharmaceutical Society of Australia, and Australian Primary Health Care Nurses Association. SLEEP Advances. 2026.

Source: Same post, "References"  
Status: in hand  
Note: 21 references in four groups.

## 13. Rising Tides Collective

> Rising Tides Collective
>
> A private space for those who’ve already experienced La maréa, through one of our retreats or experiences, and looking to stay close between them.

Source: https://www.lamarea.com.au/luxury-retreats (the name is text inside a banner image, "Email headers to use moving forward (1).png", with a two hands line icon; the sentence sits under it)  
Status: in hand but needs Belle's check  
Note: The only Collective copy on the live site. No Collective page, login or link exists anywhere on the site.

> I've created what's called the Rising Tides Collective, which is for the community. So at the moment, I don't really have a section for this. But, basically, you know, they get access to first release retreats, you know, information, like recipes, resources, just sort of more of that, like, exclusive community ... You can't just choose to, you know, come into this. You actually need to attend a wellness retreat, and then you automatically sort of, you know, come into this private collective and private space.

Source: Transcript, Rising Tides Collective paragraph (spoken, trimmed with an ellipsis by me)  
Status: in hand  
Note: Benefits named: first release retreats, recipes, resources. Joining rule: attend a retreat. One sentence per benefit is **not found** (plan/11 item 69).

## 14. App

> a section that says coming twenty twenty seven and the Lamaria app
>
> we do have, um, a wellness app coming, and there's a, um, going to be you know, foundational subscriptions with this

Source: Transcript, app paragraph (spoken fragments)  
Status: in hand but needs Belle's check  
Note: Nothing about the app is on the live site or in the guide. Name, description, visual and subscription wording are **not found** (plan/11 item 70, after the 21-09-2026 app meeting).

## 15. FAQs

Twelve questions, each answer opened on the live page. Heading as published: "Frequently Asked Questions". Seed: `faqs.json` (answers as paragraph arrays). Groups for the new FAQ page are not set by Belle.

### 1. What’s included in your wellness retreats and what can I expect?
> This will depend on what type of lifestyle wellness retreat you have chosen but generally there will be a range of transportation, dining, wellness, spa/beauty and education inclusions.
>
> On top of this there are ‘add ons’ you can pay for on top of your retreat to include in your experience.
>
> Our retreats offer a balance between rest, movement, activities and free time. You can expect a welcoming and supportive environment where you are completely looked after from the moment you arrive to embark on a wellness retreat with us.
>
> Our retreats are designed to nurture your body, mind and soul through evidence based strategies.
>
> They allow you to slow down and reclaim your health and wellbeing through nature, human connection, and lifestyle wellness experiences & education.
>
> Please head HERE to view some of the activities you’ll find on a La Maréa wellness retreat.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check  
Note: Refers to "Please head HERE" but HERE is not a link in the published answer.

### 2. Do I need to be experienced with yoga, meditation, or fitness? Am I fit enough to attend a retreat?
> You do not need any experience in these activities, our retreats are bespoke and will be personalised to you and your level of fitness. If you want to participate fully in all aspects of the retreat i.e the hiking, then we do recommend a moderate level of fitness.
>
> However, the hikes can always be shortened, and activities swapped out for time spent relaxing at the private beach, on the deck or in the bath.
>
> It is not compulsory to partake in anything so if you wish to opt out on any activity you don't feel comfortable with you are very welcome to do so!

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check

### 3. What kind of food is provided, and can dietary requirements be accommodated?
> The meals we provide are plant-forward and Mediterranean-inspired. We aim to use local, seasonal and organic produce in our meals where possible.
>
> Dietary requirements will of course be catered for whether you are gluten-free, dairy-free, or have allergies. Please note your dietary requirements will need to be given in your ‘pre-retreat’ health screening form at least 2 weeks prior to you commencing on a retreat with us!

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check

### 4. Is the retreat suitable for solo travellers?
> Solo retreat guests must feel safe and comfortable.
>
> Ours will depend on where we are hosting our retreats and how many rooms we have available.
>
> Currently we can only cater for ‘pairs’ due to our accommodation partners however we hope to offer solo retreats in the near future.
>
> For now, we invite you to share the experience with someone special, such as a friend, your partner or your daughter.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check  
Note: Says La maréa can only cater for pairs. plan/11 flags that Belle must confirm this still holds.

### 5. What should I pack?
> We will send you a ‘Preparing for La maréa’’ document with a full outline of what to bring and what not to bring prior to your retreat experience.
>
> We recommend being prepared for all seasons as coastal weather can be unpredictable!

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check

### 6. Where is the retreat located, and how do I get there?
> This will be unique to our accommodation partner, but generally our retreats will be held on the Fleurieu Peninsula, South Australia.
>
> We cover your transport from Adelaide, meeting spot details for pick up/drop off will be provided to you prior to your retreat.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check  
Note: Says transport from Adelaide is covered.

### 7. Is there free time, or is the schedule full?
> Our weekend retreats are relatively structured; however, you are welcome to pick which activities you wish to participate in. Nothing is compulsory, your retreat - your choice!
>
> Our wish is that you get whatever you need out of this experience; if it means choosing to sauna or relax in the bath instead of hiking, then that is perfect.
>
> There is space to rest, journal, explore the coastline, or simply unwind.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check

### 8. Will I have internet access?
> All guests attending a retreat will have access to the internet at our partner's accommodation.
>
> However, we encourage you to switch your devices off and disconnect as much as possible to embrace the digital detox.
>
> With this in mind, we also ask you to please respect others who are wishing to embrace a digital detox, therefore discourage the use of phones and Wi-Fi in any of the public spaces.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check

### 9. Are children allowed?
> Unfortunately we are not able to cater for children under the age of 16 years old.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check

### 10. What is the cancellation, refund and credit policy?
> At La maréa we design every retreat as a bespoke experience, working closely with carefully selected partners, local artisans, and service providers to ensure a truly unique and immersive wellness journey. Due to the nature of these arrangements, all bookings are non-refundable.
>
> If you need to cancel your booking, we are happy to offer a credit for a future retreat or experience. This credit can be applied to any upcoming retreat within 2 years of your original booking date.
>
> We understand that life happens and schedules can change. While we are unable to provide refunds, we aim to be as flexible as possible in helping you reschedule or transfer your credit to another retreat or guest, subject to availability.
>
> By booking a retreat with us, you acknowledge and accept that your payment is a commitment to your experience and to our local partners, who dedicate their time and resources to make each retreat exceptional.
>
> For questions regarding rescheduling or transferring your credit, please contact us at info@lamarea.com.au and we’ll be happy to assist. For more information on our policy please read our terms and conditions.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check  
Note: Says credit applies within 2 years. The live Terms & Conditions page (3.2) says credits are valid for 12 months. Conflict for Belle.

### 11. Can I pay in installments?
> We are currently in the process of setting up Afterpay. Please contact us to express your interest.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check  
Note: Says Afterpay is being set up. Belle to confirm.

### 12. Do you arrange airport transfers to and from your guest meeting spot?
> We may be able to offer airport transfers for guests travelling from interstate, depending on availability and retreat scheduling.
>
> Transfers are not automatically included in your booking.
>
> How do I request an airport transfer?
>
> If you require a transfer, please contact us before purchasing your retreat ticket so we can confirm whether we can accommodate your arrival and departure times.
>
> Email: info@lamarea.com.au
>
> Belle Redden Phone: 0411354356
>
> Which airports do you service?
>
> We primarily service Adelaide Airport (ADL).
>
> If you plan to arrive via another airport, please get in touch so we can advise your best travel options.
>
> How much does the transfer cost?
>
> Transfer pricing varies depending on:
>
> Your arrival and departure times
>
> Number of guests travelling
>
> Vehicle availability
>
> We will provide a quote when you enquire if we need to charge you for this service.
>
> What if you cannot accommodate my airport transfer?
>
> If we’re unable to provide a transfer for your retreat dates, we will guide you through alternate options, such as:
>
> Private car services
>
> Local transfer companies
>
> Rental car recommendations
>
> Taxi or rideshare availability
>
> Do you offer shared transfers with other guests?
>
> If multiple guests arrive around the same time, we may be able to coordinate a shared transfer at a reduced rate.
>
> We’ll let you know if this is an option when you enquire.
>
> How far is La Maréa & Naiko Retreat from the airport?
>
> La Maréa is located at various locations on the Fleurieu Peninsula.
>
> Transfer time from Adelaide Airport is typically 90-120 minutes, depending on traffic and time of day.
>
> What information do I need to provide when requesting a transfer?
>
> To help us confirm availability, please include:
>
> Your full name
>
> Retreat date
>
> Flight number
>
> Arrival and departure times
>
> Number of guests requiring transfer
>
> Where will my driver meet me?
>
> If your transfer is confirmed, your driver will meet you at the designated meeting point in the arrivals area. We will send you exact instructions before your travel day.
>
> Can I change my transfer details later?
>
> Yes, where possible. Please contact us as soon as your flight details change so we can adjust your transfer arrangements.

Source: https://www.lamarea.com.au/faqs  
Status: in hand but needs Belle's check  
Note: Long answer with sub-questions, kept as paragraphs. Contains Belle's phone number 0411354356 and "La Maréa & Naiko Retreat". Transfer time given as 90-120 minutes.

## 16. Formats

### Retreats page intro
> Curated lifestyle wellness retreats designed for meaningful restoration.
>
> There are different seasons that call us to pause — time with friends, time with family, time to reconnect as a team.
>
> La maréa has been designed to meet each of these moments with intention. From private group retreats to corporate immersions and focused wellness days, every pathway is grounded in our evidence-based philosophy and shaped by the natural rhythm of the Fleurieu Peninsula coastline.
>
> Explore our retreat options below and discover what a La maréa experience could look like for you.

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand

### Format list on the retreats page
> Full Day Retreats (8 hour)
>
> Half Day Retreats (5 hour)
>
> Wake Up To Wellness (3 hour)
>
> Sunset Reset (3 hour)
>
> Personalised Retreats
>
> Women's Wellness Weekend

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand but needs Belle's check  
Note: Names and durations only. No descriptions, prices or links sit behind them. Which formats still sell is decision 13.

### Bespoke Wellness Days
> Bespoke Wellness Days
>
> A one-day wellness immersion.
>
> For those who do not require an overnight stay, Bespoke Wellness Days offer a focused and highly curated experience delivered at one of our partner properties or at a suitable external venue.
>
> These days are structured around nervous system support, movement, nourishing food and practical lifestyle wellbeing education. They are intentionally designed to allow space between sessions, ensuring the experience feels restorative rather than demanding.
>
> Whether shared with friends, extended family or colleagues, a Bespoke Wellness Day creates a private luxury environment for restoration and transformation. It is a chance to reset or build upon wellbeing habits and return to daily life feeling empowered and educated.
>
> Wellness Days can be brought to you subject to your situation and location. Express your interest or enquire about a bespoke Wellness Day below.

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand

### Sunset Reset
> Sunset Reset Wellness Experiences
>
> Join La maréa for bespoke Sunset Reset experiences designed to help you slow down, reconnect, and restore by the sea.
>
> Each curated evening brings together gentle movement, breathwork, nourishing food, meaningful connection, and beautiful coastal settings at sunset.
>
> Gather a family member, friend or private group and experience an intentional evening of holistic wellness and calm.
>
> Place your name on our waitlist to be the first to hear about upcoming exclusive Sunset Reset experiences, and future La maréa experience offerings.

Source: https://www.lamarea.com.au/ ("Sunset Reset Wellness Experiences")  
Status: in hand but needs Belle's check  
Note: Waitlist copy. Button "Join 2026 Waitlist" goes to Jotform 261441165546860.

### Women's Wellness Weekend
> Women's Wellness Weekend
>
> For women seeking space to restore, reconnect and return to rhythm.
>
> Our Women’s Wellness Weekend is designed for those ready to step away from constant output and immerse themselves in a guided, restorative wellness experience. This is not a retreat built around performance or perfection, but around nourishment, movement, nature, education and meaningful connection.
>
> Across the weekend, the environment and structure work together. Ocean air, expansive landscape, Mediterranean-inspired meals and evidence-based wellness sessions begin to soften the pace of daily life. Sleep deepens. Conversation opens. Devices are set aside. The nervous system begins to settle.
>
> Grounded in La maréa’s ten wellness pillars — including nutrition, movement, recovery, psychological wellbeing, connection and nature immersion — the experience is both restorative and practical. Women leave not only feeling recalibrated, but equipped with sustainable tools they can integrate into everyday life.
>
> You return home feeling clearer, calmer and more connected to your wellbeing.
>
> Join the waitlist to receive upcoming dates and early access to bookings.

Source: https://www.lamarea.com.au/luxury-retreats  
Status: in hand but needs Belle's check  
Note: Waitlist copy: "Join the waitlist to receive upcoming dates and early access to bookings." Button goes to Jotform 253041258182856.

> What a weekend with us looks like...
>
> 3 Course Mediteranean-Inspired Lunch with Private Chef
>
> Meditation & Relaxation
>
> Nature Immersion & Coastal Hiking
>
> Contrast Therapy (Sauna & Ice Bath)
>
> Remedial Massage & A Good Nights Sleep
>
> Evidence-Based Lifestyle Wellness Education
>
> Connection With Other Like-Minded Individuals
>
> We invite you to experience the restorative power of this extraordinary coastal retreat - a weekend to calm your nervous system, nourish your mind, body, and soul, and return home feeling reconnected, inspired, and deeply renewed.

Source: https://www.lamarea.com.au/luxury-retreats ("What a weekend with us looks like...")  
Status: in hand

### Past store products
> 2026 Wellness Retreats & Experiences
>
> MARCH 20-22
>
> Mediterranean Women's Wellness Weekend ($3150 pp)
>
> Price
>
> $6,300.00
>
> MARCH 21
>
> Mediterranean Women's Wellness Day ($999 pp)
>
> Price
>
> $1,998.00
>
> Terms & Conditions
>
> FAQS
>
> "Inviting you to wash away your stresses, release what no longer serves you, and welcome new health habits - nourishing body, mind and spirit within an atmosphere of refined elegance & genuine warmth"
>
> Join Our Waitlist

Source: https://www.lamarea.com.au/category/2026-retreats  
Status: in hand but needs Belle's check  
Note: Public prices on the live store: $3150 pp (weekend, sold as a $6,300 duo) and $999 pp (day, sold as a $1,998 duo). These are published today, unlike the $899 guide rate. Full product copy is in `formats.json`.

### Waitlist copy elsewhere
> Join our retreat waitlist so you never miss out on retreat releases!
>
> Join The Waitlist

Source: https://www.lamarea.com.au/contact  
Status: in hand

Seed: `formats.json` (13 records: three pathways, six formats, the home page day option, two past products, the bespoke additions).

## 17. Contact and footer

| Item | As published | Source | Status |
|---|---|---|---|
| Email | info@lamarea.com.au | /contact, /faqs, /gift-cards, /privacy-policy | in hand |
| Email | belle@lamarea.com.au | /contact, /privacy-policy, guide p.5 | in hand |
| Phone | 0411354356 ("Belle Redden Phone: 0411354356") | /faqs, /privacy-policy | in hand but needs Belle's check |
| Phone | +61 411 354 356 | guide p.5 | in hand but needs Belle's check |
| Instagram | @lamarea_retreats, instagram.com/lamarea_retreats | footer, home | in hand |
| Booking link | "Book a Discovery Call", https://calendar.app.google/jiKYpzKFiG5XZV9x9 | /contact | in hand |
| Booking link (guide) | "BOOK A CALL", https://calendly.com/belle-lamarea/30min | guide p.28 | in hand but needs Belle's check |
| Waitlist | https://form.jotform.com/261441165546860 ("Join 2026 Waitlist") | home | in hand |
| Waitlist | https://form.jotform.com/253041258182856 ("Join The Waitlist", "Join the waitlist") | /contact, /luxury-retreats | in hand |
| Street or postal address, ABN | none published | | not found |

### Contact page
> Planning a Retreat for Your Team or Private Group
>
> Whether it's a corporate offsite designed around recovery and sustainable performance, or a private retreat for family and friends, every La maréa experience is built around you — your people, your goals, your pace. Book a discovery call with our team below to explore whats possible.
>
> Book a Discovery Call
>
> Join our retreat waitlist so you never miss out on retreat releases!
>
> Join The Waitlist
>
> Contact Us
>
> info@lamarea.com.au
>
> belle@lamarea.com.au
>
> First Name
>
> Last Name
>
> Email
>
> Message
>
> Send

Source: https://www.lamarea.com.au/contact  
Status: in hand

### Footer (every page)
> From chaos to calm, stress to serenity..
>
> Let the tide guide you home.
>
> Join our lifestyle wellness community & be the first to know about new retreats & exclusive offers!
>
> I want to subscribe to La maréas mailing list.
>
> We acknowledge that the land we are on belongs to the Kaurna people as the Traditional Owners and custodians of the land on which we work. We acknowledge the Traditional Custodians of country throughout Australia and their connections to land, sea and community. We pay our respects to their Elders past and present.

Source: https://www.lamarea.com.au (footer)  
Status: in hand  
Note: Consent line missing an apostrophe, as published. Footer links: Retreats, Accommodation, Our Story, Philosophy, Partners, Research & Recipes, Gift Cards, Privacy Policy, FAQS, Terms & Conditions. Header nav adds "Enquire".

### Gift cards
> eGift Card
>
> Give the gift of wellbeing with a La maréa gift card.
>
> These versatile gift cards have no restrictions and can be used for our retreats, experiences or wellness days. Redeemable for up to 2 years.
>
> Gift card expires 24 months after purchase.
>
> * Please note - Gift cards are non-refundable, non-transferrable and only valid for 2 years from the purchase date. If our retreats or experiences are fully booked the recipient will need to wait until our next available retreat date.
>
> Please contact us to inquire about retreat availability if needed info@lamarea.com.au

Source: https://www.lamarea.com.au/gift-cards ("Read more" opened)  
Status: in hand but needs Belle's check  
Note: Gift cards say valid 2 years; the terms say credits last 12 months. Decision 16.

### Privacy policy headings
> La Maréa Privacy Policy
>
> How we collect, use and protect your information.
>
> Your Privacy Matters to Us
>
> What Information We Collect
>
> Why We Collect It
>
> How We Keep Your Information Safe
>
> Who We Share It With
>
> Your Choices & Rights
>
> Photography & Media
>
> How Long We Keep Your Information
>
> Questions or Concerns?

Source: https://www.lamarea.com.au/privacy-policy  
Status: in hand but needs Belle's check  
Note: Headings only, as asked. The policy says it follows the Australian Privacy Principles and collects "Medical or wellness information relevant to retreat activities". The Privacy Act position is plan/11 item 78.

### Terms and conditions headings
> La maréa – Terms & Conditions
>
> 2.1 Booking Confirmation
>
> 2.2 Deposits & Final Payments
>
> 2.3 Pricing
>
> 2.4 Payment Methods & Surcharges
>
> 3.1 No Refunds
>
> 3.2 Cancellation by Participant
>
> 3.3 Transfer to Another Person
>
> 3.4 Cancellation by La Maréa
>
> 5.1 Travel Insurance
>
> 5.2 Medical Insurance
>
> 6.1 Medical Disclosure
>
> 6.2 Right to Refuse Participation
>
> 6.3 Non-Medical Disclaimer
>
> 7.1 Assumption of Risk
>
> 7.2 Liability Waiver
>
> 7.3 Third-Party Providers
>
> 9.1 Food Safety
>
> 9.2 Guest Responsibility
>
> 12.1 Use by La maréa
>
> 12.2 Privacy of Other Guests
>
> 12.3 Technology Use

Source: https://www.lamarea.com.au/terms-conditions (linked from the footer, not in the sitemap)  
Status: in hand but needs Belle's check  
Note: Headings only. Key conflicts with other copy: no deposits (2.2) against the guide's 50% deposit; credits valid 12 months (3.2) against the FAQ's 2 years and the gift card's 2 years.

## 18. Page titles and meta descriptions (live site)

| URL | Title | Meta description |
|---|---|---|
| /accommodation-partners | Accommodation Partners \| La maréa Luxury Retreats \| Fleurieu Peninsula | Discover La maréa’s curated South Australian accommodation partners, including Naiko Retreat, matched to private and corporate wellness retreats. |
| /blog | Research & Recipes \| La Marea Luxury Retreats | Dive into the thinking behind our ten wellbeing pillars, from nutrition and sleep to nature immersion and psychological health. Enjoy coastal-inspired recipes, research notes and practical tools designed to support everyday balance and wellbeing at home. |
| /blog/categories/sleep-recovery | Sleep & Recovery | none |
| /category/2026-retreats | 2026 Retreats \| La Marea Luxury Retreats | none |
| /contact | Contact \| La maréa Luxury Retreats \| South Australia | Get in touch with La maréa for bookings, retreat details or media enquiries. We’ll help you plan a coastal stay focused on rest, nourishment and time in nature. |
| /courtney-selfe | Courtney Selfe \| La maréa Luxury Retreats | Restore tired muscles with Courtney, our remedial massage therapist who offers tailored treatments to support relaxation, recovery and a deeper sense of ease during your retreat. |
| /faqs | FAQS \| La maréa Luxury Retreats | Find answers to common questions about booking, retreats, facilities, inclusions, what to pack and what to expect during your coastal stay at La Maréa. |
| /gift-cards | Gift Cards \| La maréa Luxury Retreats | Share the gift of rest and nourishment with a La Maréa gift card. Perfect for birthdays, celebrations or someone who could use a coastal escape with wellness, good food and time to breathe. |
| / | La maréa luxury retreats \| luxury retreats south australia \| Fleurieu Peninsula, Inman Valley SA, Australia | La Maréa Luxury Retreats is a coastal sanctuary in Deep Creek South Australia. Our ten wellness pillars shape every stay, blending nourishing food, gentle movement, nature immersion and thoughtful luxury for a calm and restorative coastal escape. |
| /jaimi-baker | Jaimi Baker \| La maréa Luxury Retreats | Jaimi guides guests through grounding yoga practices shaped by the coast, movement science and mindful connection. Her sessions support mobility, calm and clarity, forming a key part of our movement and psychological wellbeing pillars. |
| /kristian-ryan | Kristian Ryan \| La Marea Luxury Retreats | Kris guides guests through contrast therapy to support recovery, resilience and mental clarity. His sessions form a key part of our sleep, recovery and psychological wellbeing pillars, helping guests unwind and reset by the coast. |
| /luca-guiotto | Luca Guiotto \| La maréa Luxury Retreats | Luca brings global culinary experience to La Maréa, crafting coastal-inspired menus that nourish and delight. His approach celebrates our nutrition pillar through vibrant, seasonal dishes that support both energy and recovery. |
| /luxury-retreats | Retreats \| La maréa Luxury Retreats \| Fleurieu Peninsula | Explore coastal retreats crafted around our ten pillars of wellbeing: nutrition, movement, nature immersion, luxury, connection, psychological wellness, sleep and education. Each stay in Deep Creek brings together expert-led sessions, nourishing food and quiet moments in nature, giving you space to reset in comfort. |
| /malissa-fedele | Malissa Fedele \| La Marea Luxury Retreats | Malissa combines evidence-based nutrition with a creative food philosophy. Her workshops empower guests to understand nourishment through practical tools, delicious coastal produce and insights aligned with our education and nutrition pillars. |
| /natalie-jane | Natalie Jane \| La maréa Luxury Retreats | Move with Natalie, a Pilates and yoga instructor who focuses on mindful strength, balanced mobility and gentle coastal inspired flow that suits all experience levels. |
| /our-story | Our Story \| La maréa Luxury Retreats \| South Australia | Learn how La maréa began. Inspired by the coastline of the Fleurieu Peninsula and a love of wellbeing, we’ve created coastal retreats where nourishment, connection and beautifully crafted spaces come together for a slower, more grounded stay. |
| /partners | Partners \| La maréa Luxury Retreats \| South Australia | Meet the local chefs, guides and wellbeing partners who help shape our coastal retreats. Their knowledge and craft bring depth, flavour and care to every La maréa experience. |
| /philosophy | Philosophy \| La maréa Luxury Retreats | Our philosophy blends ten pillars of wellbeing, from nutrition and movement to psychological support, nature immersion and restorative sleep. At La Maréa, every coastal retreat is shaped with intention, care and personalisation, creating space for guests to feel grounded, nourished and inspired long after they leave. |
| /post/honey-soy-poke-bowl | Honey Soy Salmon Poke Bowl | A fresh and vibrant poke bowl with honey soy salmon, crisp veggies and a coastal feel. Ideal for quick lunches or light dinners with plenty of flavour. |
| /post/med-inspired-vegetable-lasagna | Med-Inspired Vegetable Lasagna | A cosy vegetable lasagne layered with Mediterranean ingredients, rich tomato flavours and plenty of veggies. Comforting, balanced and great for sharing. |
| /post/mediterranean-gnocchi | Mediterranean Gnocchi \| La maréa Retreats | A bright Mediterranean gnocchi filled with fresh herbs, coastal flavours and nourishing whole foods. Simple to cook at home and perfect for a relaxed night in. |
| /post/the-importance-of-sleep-for-wellbeing-recovery-performance-how-to-create-a-pre-bed-routine-that | The Importance of Sleep for Wellbeing, Recovery & Performance: How to Create a Pre-Bed Routine That Works for You | none |
| /privacy-policy | Privacy Policy \| La Marea Luxury Retreats | none |
| /product-page/bespoke-bestfriends-womens-wellness-day-2-x-tickets | Mediterranean Women's Wellness Day ($999 pp) \| La Marea Luxury Retreats | none |
| /product-page/mediterranean-womens-wellness-weekend-3150-pp | Mediterranean Women's Wellness Weekend ($3150 pp) \| La Marea Luxury Retreats | none |
| /sarah-mclachlan | Sarah McLachlan \| La maréa Luxury Retreats | Feel supported by Sarah, your retreat host and Pilates instructor who brings steady encouragement, mindful movement and a warm approach to guest care throughout your stay. |
| /terms-conditions | Terms & Conditions \| La Marea Luxury Retreats | none |

Status: in hand. Several descriptions place the business "in Deep Creek" or call it "a coastal sanctuary", which no longer matches four venues across coast and vineyards. The home title says "Inman Valley SA". These are for reference, not reuse.

## 19. Wix placeholder pages (list only, no content)

- https://www.lamarea.com.au/inquiry-services-page
- https://www.lamarea.com.au/pricing-plans/list
- https://www.lamarea.com.au/service-page/ashtanga
- https://www.lamarea.com.au/service-page/gentle-yoga
- https://www.lamarea.com.au/challenge-page/40349a10-e96c-48b2-88f8-682973d42432
- https://www.lamarea.com.au/challenge-page/b6851c31-0b6a-40be-9bee-a16769378ccd
- https://www.lamarea.com.au/challenge-page/de44bc63-73a7-40a4-a6d6-c831e8ef9fae
- https://www.lamarea.com.au/members

All eight are still listed in the live sitemaps on 24-09-2026 (`/inquiry-services-page` and `/members` in pages-sitemap.xml, the rest in the online-programs, booking-services and pricing-plans sitemaps). Not opened for content.

## 20. Conflicts found during the harvest

- Group size: 6 to 10 guests for private groups and up to 20 for corporate (live retreats page) against "10 guests minimum" and "14 guests maximum at this venue" (guide p.24). Both worked examples are 12 guests.
- Deposits: the guide asks for a 50% deposit (p.24, p.28); the live terms say no deposits and full payment at booking (2.2).
- Credit period: FAQ says credit within 2 years; terms say credits valid 12 months; gift cards say 2 years.
- Contrast therapy practitioner: live partners page credits Kristian Ryan (Third Spaces); the guide credits Jaimi Baker (PEAQ) with contrast therapy and does not mention Kristian.
- Hosts: /our-story names Belle, Zoe and Sarah; the guide names Belle, Zoe Buttery and Jaimi Baker.
- Wake Up To Wellness: "3 hour" on the retreats page; the guide p.4 title is "Immersive 8 hr Wake Up To Wellness Private Group Retreat"; the home gallery calls the Ray White day a "High Performance Half Day Retreat" while Instagram calls it Wake Up To Wellness.
- Workshop subtitle: "Build Lifestyle Habits for Energy, Capacity, Stress Management & Burnout Prevention" (guide p.15) against "Build Lifestyle Habits for Energy, Focus & Burnout Prevention" (Beresford example).
- Sauna at Naiko at the Bluff: in the guide (p.11, p.16, p.17), not on the venue home page.
- The Vineyard Retreat capacity: Belle 10; venue per-house figures add up to 16 at The Vineyard.
- Booking link: Google Calendar on the live site, Calendly in the guide.
- Founder name: Belle Redden, Annabelle Redden, and "annabelle buttery" in an image alt text.
- Testimonial wording: the two home slides are edited versions of Google reviews ("encouraging" for "exciting", "Jaimi" for "Jamie").
- Example menu dish count: seven in the guide text, nine in plan/11 item 54.
- Kristian Ryan is called "Chris" in his bio and "Kris" in its meta description.

## 21. Content that does not exist anywhere and must come from Belle

- A first-person note on starting La maréa on the Fleurieu, for Our story, replacing the "South Australian first" claim (build decision 7).
- Hero lines for the private group and corporate paths, and her choice of section names (decision 26).
- An hour-by-hour run sheet for Naiko Encounter Bay, and confirmation that the Beresford schedule is the model day.
- The Beresford 8 hour folder and reel, re-shared so it opens (Drive returned "Requested entity was not found").
- Guide pages 26 and 27 as words and photos: the Ray White Projects SA and YNG Adelaide case studies, plus written permission to name both clients.
- The private and corporate group guide PDFs behind the two "Download ... Group Guide" buttons (the buttons link nowhere today).
- A description, duration and practitioner for each of the ten experiences. Specifically: who runs the pasta masterclass for La maréa, whether the gut health workshop is The Foundations of High Performance Wellbeing, whether consultations sit inside a day, and whether yoga and pilates are one tile or two.
- A description for each of the six self-led activities.
- Whether La maréa brings its own sauna and plunge, and whether Naiko at the Bluff has a sauna.
- La maréa copy for The Vineyard Retreat (none exists), its capacity to publish, imagery, and written permission from all four venues to use their names and images.
- Street address and a firm day maximum for Beresford Estate; distance from Adelaide for Naiko at the Bluff and Beresford (not captured from their sites).
- Whether the Naiko Deep Creek bushfire note still holds.
- Fleurieu section copy: why the Fleurieu, what interstate guests should know, and whether La maréa aligns with True South.
- Full reference lists for each of the ten pillars (only the sleep post has one), and her choice of pillar set (decision 1).
- Dinner and dessert menus, or a decision that the food story stays day-length; which producers are Fleurieu based; producer names beyond Peninsula Providore and La Vera.
- The team roster, current titles and portraits; bios for Zoe Buttery (no bio page exists) and confirmation of Sarah McLachlan's role.
- Testimonial permissions, which retreat each came from, matching photos, and which version of the two edited slides she prefers.
- Rising Tides Collective: one sentence per member benefit and how members access it.
- The app: name, description, visual and the foundational subscription wording.
- Which formats still sell, and which waitlists stay (decisions 13 and 22).
- Journal category names (decision 24) and whether "Susie Styler" or Belle is credited on the recipe posts.
- A single deposit and credit policy that the FAQ, terms, gift cards and guide all agree on.
- Response time to promise after an enquiry, and whether the phone number is published.

Seeds written: `differences.json` (5), `pillars.json` (10 plus 8), `experiences.json` (10 plus 6), `venues.json` (4), `people.json` (9), `faqs.json` (12), `formats.json` (13), `testimonials.json` (20), `journal.json` (4), `day.json`, `menu.json`, `contact.json`. Every record carries a `source`; unsourced fields are `null`.
