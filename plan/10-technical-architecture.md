---
title: La maréa technical architecture
date: 16-09-2026
author: Jess Tresidder
status: Decision document, internal. Not for Belle in this form.
sources: research/facts/video-hosting-facts-16-09-2026.md, research/facts/cms-and-editing-facts-16-09-2026.md, research/facts/motion-and-maps-facts-16-09-2026.md, _context/requirements-register.md, _context/project-brief-shared.md
---

# La maréa technical architecture

Every section ends in a decision. Where a number is an estimate it is marked **[estimate]**. Where something is unverified it is marked **[not verified]** and the thing that would settle it is named.

Prices are USD unless marked AUD, and exclude GST.

---

## Summary of decisions

| # | Decision | Ongoing cost |
|---|---|---|
| 1 | Astro 5, static output, hand-written CSS, hosted on Cloudflare Pages | $0 |
| 2 | Content lives in the git repo as Markdown collections. Guest and enquiry data lives in Supabase | $0 repo, $0 Supabase Free at launch |
| 3 | Belle edits through Sveltia CMS at `/admin`, backed by GitHub. Claude is the escape hatch, not the interface | $0 |
| 4 | Video on Cloudflare Stream. Images self-hosted as AVIF plus WebP in the repo | ~$8/mo **[estimate]** |
| 5 | CSS scroll-driven animation as the base, GSAP ScrollTrigger only for the signature interaction. No Lenis | $0 |
| 6 | Stepped enquiry funnel writing to Supabase through Cloudflare Pages Functions, Turnstile on every POST, Klaviyo synced server-side | $0 |
| 7 | Cloudflare DNS, Cloudflare Pages hosting, email untouched at the current provider | domain renewal only |
| 8 | The site owns guest records. Movement consumes them | n/a |

Total ongoing platform cost at launch is roughly **$8/month USD plus the domain renewal** **[estimate]**. That is the straight answer to "no ongoing subscription". It is not zero, it is about 5% of a Wix Business plan, and no vendor can raise it on her.

---

## 1. Stack recommendation

### The constraints that decide this

Five constraints narrow the field to one answer before any preference gets a say.

```
CONSTRAINT                        RULES OUT
--------------------------------  ------------------------------------------
No ongoing platform subscription  Webflow, Wix Studio, Squarespace, Framer,
(P3)                              Vercel Pro, Sanity paid, Contentful

Belle edits everything (P1, P2)   A hand-written HTML site with no CMS,
                                  which is Jess's normal build

Adding a fifth venue is data      Anything page-per-venue hand-built.
entry, not a build (F3)           Seven hand-built practitioner pages is
                                  the exact fault P13 must fix

Dom writes HTML and does          React, Next.js, any framework where the
security, not React               markup is buried in JSX

Video-heavy, four-week build,     Anything with a server to keep alive,
$2,900                            patch and pay for
```

Vercel is out on a term, not a preference. Vercel's fair use guidelines define commercial use to include "receiving payment to create, update, or host the site" and "advertising the sale of a product or service" (video-hosting fact sheet, https://vercel.com/docs/limits/fair-use-guidelines). A paid retreat site on Hobby breaches that. Pro is a per-seat monthly subscription, which is the thing Belle is leaving Wix to escape. Jess's own sites run on Vercel and that habit has to be set aside here.

### The recommendation

Build the site on **Astro 5 in static output mode**, with hand-written CSS and no UI framework, deployed to Cloudflare Pages from a GitHub repo in Belle's name.

Astro rather than raw HTML, which is how Jess normally builds, for four reasons.

Content collections are the venue answer. A venue is a Markdown file with frontmatter, one template renders all of them, and Belle adding Naiko Yankalilla in March 2027 is filling in a form. The index page, the map pin, the sitemap entry and the schema all update themselves. That closes F3 and F2 permanently and fixes the seven hand-built practitioner pages in P13.

Astro ships zero JavaScript by default. It renders to static HTML at build time and only sends the JS you explicitly ask for (https://docs.astro.build/en/concepts/why-astro/), which matters on a site whose weight is already committed to video.

The output is plain HTML and CSS, so Dom can read it, audit it and patch it without learning a component framework in four weeks.

View-source returns indexable HTML, which is the literal evidence O15 asks for on SEO.

Cloudflare Pages rather than Vercel or Netlify, for four more.

Cloudflare is already in the written promise to Belle alongside Supabase, so she gets one account, one bill and one asset she owns. Pages Free serves static assets with requests "free and unlimited" per Cloudflare's own Functions pricing page (fact sheet), and no per-seat subscription exists on the Free plan. Pages Functions run the form endpoints, so there is no separate API host to pay for or secure. Cloudflare has been ISO 27001 certified since 2019 and holds SOC 2 Type II (https://www.cloudflare.com/trust-hub/compliance-resources/soc-2/, https://blog.cloudflare.com/cloudflare-certifications/), which evidences half of what Jess promised in writing.

Three platform limits shape the build, all from the fact sheet. Pages caps a static asset at 25 MiB, so no video file goes in the repo and video goes to Stream. Pages Free allows 20,000 files per site, which a four-venue site with a journal will not approach. Pages Free allows 500 builds per month, and Belle saving a blog post triggers a build, so she would have to save 16 times a day every day to hit it. Watch that ceiling only if the CMS turns out to be chatty.

Jess builds the front end, Dom reviews the Pages Functions and the Supabase policies, and the repo sits in Belle's GitHub account from day one.

---

## 2. Content model

### Where each thing lives, and why

```
  GIT REPO (Markdown + JSON)          SUPABASE (Postgres)
  --------------------------          -------------------
  Everything a visitor reads          Everything a person submits

  venues, experiences, formats,       enquiries, questionnaires,
  practitioners, journal posts,       waivers, lead magnet downloads,
  testimonials, menus, faqs,          newsletter consents
  lead magnets, pillars, gallery,
  site settings

  Versioned, diffable, free,          Encrypted at rest, RLS,
  rolls back in one click,            access-controlled, auditable,
  rebuilt into static HTML            never in the public build
```

The split is the privacy line. Public editorial material is a file in the repo and gets baked into HTML. Anything a human typed about themselves is a row in Postgres behind Row Level Security and never touches the static build. That is also the clean answer to Belle's O15 question about where guest data is stored.

### The schemas

All content collections are defined in `src/content.config.ts` with Zod schemas, so a missing required field fails the build with a readable error instead of shipping a broken page. That is the safety net under "what happens when Belle breaks something".

Venues cover F2, F3, F5, F6, F7, F8, F10 and F9.

```yaml
slug: naiko-encounter-bay          # becomes /places/naiko-encounter-bay
name: Naiko Encounter Bay
region: coastal                    # enum: coastal | vineyard | city
                                   # city is Adelaide CBD, held back by a site
                                   # setting with no public filter (plan/11 4.26)
status: published                  # enum: draft | published | hidden
sleeps: 10
day_capacity: "10 to 14"           # plan/11 4.10 at a glance, guide p.24
distance_from_adelaide: null       # plan/11 4.10 at a glance
location_label: Encounter Bay, Fleurieu Peninsula
coordinates: { lat: -35.5742, lng: 138.6053 }   # drives the SVG map pin
partner_name: Naiko
partner_approved: true             # F7 and open decision 8. The build refuses
                                   # to publish a venue where this is false
five_star: true                    # F8 badge
intro: "One paragraph, 40 words max."
body: markdown                     # the long-form description
gallery:                           # F5 arrow-stepped detail gallery
  - { src: /img/venues/naiko-eb-01.avif, alt: "...", caption: "..." }
features: [ "Ocean frontage", "Infrared sauna", "Chef's kitchen" ]
nearby: markdown                   # F10, what is around it
hero_video: { stream_uid: "abc123", poster: /img/... }   # optional
seo: { title, description, og_image }
order: 10
```

Adding a fifth venue means copying the file, changing the fields and dropping images in. The index page, the coast and vineyard filter, the map, the sitemap, the `Resort` and `Place` schema and the internal links all derive from the collection, with zero template work. F3 is satisfied in the literal sense Belle asked for.

Experiences cover D1, D3, D4, D5, D6, O1 and O3.

```yaml
slug: contrast-therapy             # becomes /experiences/contrast-therapy
title: Contrast Therapy
status: published                  # enum: draft | published | hidden. Pasta making,
                                   # gut health and consultations stay lean (plan/11 Part 2)
kind: guided                       # enum: guided | self_led  (D3 vs D6)
short: "One line under the image."  # D4
body: markdown
media_type: image                  # enum: image | video   (D5, two slider forms)
media: [ { src | stream_uid, poster, alt } ]
art_direction: full_bleed          # enum: full_bleed | inset | split
                                   # O3, per-slide treatment. This field is
                                   # the answer to "every tile must share
                                   # one structure"
pillar: restore                     # links the experience to a philosophy pillar,
                                    # blocked on decision 1 in plan/11
duration: null                     # Q2, needed from Belle
session_steps: []                  # plan/11 4.8 "What happens in a session"
practitioners: []                  # references to people, plan/11 4.8 "Who leads it"
venues: []                         # references to venues, plan/11 4.8 "Where it happens"
faqs: []                           # plan/11 4.8 questions per experience
order: 30
```

The `art_direction` field exists because the other agency told Belle per-slide art direction was impossible. Making it a first-class field is how the build proves otherwise.

Formats cover A7 and E1 to E4, holding both the retreat formats menu and the flagship 8 hour day.

```yaml
slug: full-day-retreat               # flagship renders /experiences/full-day-retreat
name: Full Day Retreats
audience: [ private, corporate ]   # A8, drives the two-path split
duration_hours: 8
group_size: null                   # decisions 2 and 14 in plan/11. Published per
                                   # venue until Belle sets a figure
summary: markdown
timeline:                          # E2, the day walked through
  - { time: "8:00", title: "Arrive", body: "...", media: {...} }
                                   # guide p.24: pick up about 7am, retreat 8am
                                   # to 4pm, drop off 5pm. Hour by hour is Q2
dates: []                          # dated retreats only, renders /retreats/<slug>
                                   # with Event schema (plan/11 4.26 seam)
price_from: null                   # open decision 5. null renders no price
cta: { label: "Plan your day", href: "/enquire?format=full-day" }
                                   # label is decision 15 in plan/11
featured: true
```

The `timeline` array is what the signature scroll interaction in O6 iterates over, so Belle editing the day means editing rows in a repeatable field rather than touching animation code.

Practitioners cover I1, I2, I3 and the P13 fix for seven hand-built pages.

```yaml
slug: belle-redden                 # becomes /team/belle-redden
name: Belle Redden
team: wellness                     # enum: hosts | wellness | food_hospitality  (I1)
                                   # hosts is the Belle and Zoe section, plan/11 4.15
role: Founder and Nutritionist
qualifications: [ "BSc Nutrition", "..." ]   # I2
bio: markdown
portrait: { src, alt }
order: 1
```

Testimonials cover I5, I6 and I7.

```yaml
quote: "..."
attribution: "Sarah M."
group_type: corporate              # enum: private | corporate | individual (I7)
                                   # plan/11 filters T5 on group_type
venue: null                        # reference to venues, plan/11 4.10 proof by venue
source: google                     # enum: google | direct | email  (I6)
source_url: https://...            # nullable, for the Google review link
image: { src, alt }                # I5, image plus wording beneath
featured_on: [ home, corporate ]   # controls placement without a code change
```

The journal collection covers J1 to J5 and O14.

```yaml
title: "..."
slug: "..."
date: 2026-09-16
category: research                 # enum: research | recipes | travel | tips
                                   # J4 filter tabs derive from this enum.
                                   # Provisional, decision 24 in plan/11
hero: { src, alt }                 # O14, full-bleed with title overlaid
excerpt: "..."
body: markdown
author: belle-redden               # reference to practitioners
pillar: null                       # plan/11 4.13, posts tagged to a pillar
recipe: null                       # servings, prep and cook time, ingredients,
                                   # method, nutrition (plan/11 4.19)
references: []                     # research posts (plan/11 4.19)
end_cta: null                      # a lead magnet slug or the funnel, per post
seo: { title, description, og_image }
draft: false
```

Menus cover H2, H4 and H5.

```yaml
slug: three-course-mediterranean
name: Three Course Mediterranean Dining
service: lunch                     # enum: breakfast | refreshments | lunch
                                   #     | dinner | dessert   (H2)
signature: true                    # H4
courses: [ { name, description, producers: [ "..." ] } ]   # H6
gallery: [...]
public: true                       # open decision 3. false keeps it in the
                                   # retreat guide only, with no rebuild needed
```

FAQs are a small collection with a large SEO return.

```yaml
question: "..."
answer: markdown
topic: booking                     # enum: booking | corporate | dietary
                                   #     | venues | what_to_bring | transfers
order: 10
```

They render as `<details name="faq">` per the motion fact sheet, plus `FAQPage` JSON-LD, which is direct value against N4 and N5.

Lead magnets cover P7 and P8.

```yaml
slug: private-group-guide          # second instance: corporate-group-guide
title: "..."
description: "..."
cover: { src, alt }
file: /downloads/private-group-guide.pdf      # never linked publicly
klaviyo_list_id: "XYZ123"
landing_url: /guides/private-group-guide      # P8, standalone addressable URL
                                              # for ManyChat and Instagram
```

Pillars cover G1 to G5, G7 and G10 and render `/philosophy/<pillar>`. The slugs wait on decision 1 in plan/11.

```yaml
slug: restore                      # becomes /philosophy/restore
name: Restore
definition: "..."                  # G10, Belle's wording
video: { stream_uid, poster }      # G2, matching branding pillar video, nullable
day_moment: markdown               # plan/11 4.13, the moment in the day that carries it
experiences: []                    # references to experiences
evidence: [ { claim, explanation } ]   # G5, three to five items
references: [ "..." ]              # G5, plain reference list
status: draft                      # enum: draft | published | hidden
order: 10
```

The gallery covers I9 and drives the filters and tiles on `/gallery`.

```yaml
retreat: "A Sunset Reset"
year: 2026                         # plan/11 4.20 filter by year
venue: null                        # reference to venues, filter by venue
images: [ { src, alt, caption } ]  # C3 tile opens in place to the caption
guest_consent: false               # decision 29 in plan/11, written consent from
                                   # anyone identifiable
status: draft                      # enum: draft | published | hidden
```

One settings file holds nav, footer, social links, contact details, the booking link, the held-back city region switch and the global SEO defaults, so Belle changes her phone number once rather than eleven times.

### Supabase tables

```
enquiries                            questionnaires (replaces Jotform)
------------------------------       --------------------------------
id                   uuid pk         id             uuid pk
created_at           timestamptz     enquiry_id     uuid fk -> enquiries
status               enum            booking_ref    text
audience             enum            guest_name     text
lead_source          text  (P5)      guest_email    citext
utm_*                text  (P5)      dietary        jsonb   SENSITIVE
referrer             text            injuries       jsonb   SENSITIVE
landing_page         text            medical_notes  text    SENSITIVE
occasion             text            waiver_accepted bool
team_outcome         text            waiver_version text
org                  text            waiver_ip      inet
group_size_band      text            waiver_at      timestamptz
experiences          text[]          consent_health_at timestamptz
setting              text            retention_until date
venue_slug           text
preferred_month      text
format_slug          text
budget_band          enum, optional, off at launch (decision 27)
name                 text
email                citext
phone                text
message              text
marketing_consent    bool
marketing_consent_at timestamptz
step_reached         int
completed            bool
klaviyo_synced       bool
notified_at          timestamptz
owner                text            Belle updates the fields from
call_booked_at       date            owner down, per her P5 reporting
call_completed_at    date            chain (plan/11 Part 5)
follow_up_at         date
value_aud            numeric

status enum: new | call_booked | call_completed | proposal_sent | won | lost

downloads                  subscribers
-------------              -----------
id, created_at             id, created_at
magnet_slug                email
email                      source
lead_source                list  (which waitlist, from /waitlist)
klaviyo_synced             subscription_interest  (from /app)
                           consent_at
                           klaviyo_synced
```

Enquiries and questionnaires are deliberately separate tables. An enquiry is marketing data. A questionnaire is health information under the Privacy Act and carries a higher bar, a shorter retention and a tighter policy. Merging them into one wide table would drag the marketing data up to the health standard and make every future export a privacy problem.

Editorial content lives in git as typed Astro collections, submitted data lives in Supabase, and the boundary between them is the privacy boundary. Venues, experiences, formats, practitioners, pillars, journal posts, testimonials, menus, FAQs, lead magnets and the gallery are all collections, so all of them are data entry from launch day.

---

## 3. How Belle edits

### What P2 asks for

Her list runs copy, images, video, offers, landing pages, forms, blogs, formatting, mobile, links, CTAs and SEO. Those are not one problem, they are four.

```
1. CONTENT      copy, images, video, blogs, offers, links, CTAs, SEO fields
                -> she edits this, daily, in a form

2. STRUCTURE    landing pages
                -> she assembles this from pre-built blocks, occasionally

3. PRESENTATION formatting, mobile
                -> she never touches this. The design system does it.
                   Telling her she will "control formatting" sets her up
                   to break the site

4. LOGIC        forms
                -> she edits the questions. She does not edit the schema
                   or the policies. Jess or Dom does that.
```

Being straight about item 3 is the most useful thing we can do for her. Every CMS that lets a non-designer control formatting is a CMS that lets a non-designer break a luxury site. The offer to make is that she controls everything the visitor reads and sees, and the site guarantees it stays beautiful at every width.

### The options weighed

| Option | Covers P2? | Setup cost | Ongoing | Simplicity for Belle | Risk |
|---|---|---|---|---|---|
| Claude editing only | Partly. Needs Jess's stack on her machine | Low | $0 plus her Claude sub | Poor. She was overwhelmed by the AI workshop on 08-09-2026 | Every edit is a prompt, an unpredictable diff and a deploy she cannot read |
| Decap CMS | Yes | Medium. Needs a GitHub OAuth proxy on Cloudflare | $0 | Good | Stored XSS CVE-2025-57520 up to 3.8.3 with no patched version listed (CMS fact sheet). Rules it out |
| Pages CMS | Yes | Low. Hosted free at app.pagescms.org, GitHub App auth | $0 | Good | Some admin actions need a real GitHub identity. Self-host path not confirmed serverless **[not verified]** |
| TinaCMS | Yes, with visual editing | Medium | $0 up to 2 users, then $29/mo | Very good | The free tier is the whole business case. A pricing change is a subscription she was promised she would not have |
| Keystatic | Yes | Medium. Needs a custom GitHub App and a Node runtime for its API routes | $0 | Good | Cloudflare Pages Functions is workerd, not Node. Architectural mismatch with the hosting decision |
| **Sveltia CMS** | **Yes** | **Low. One script tag and a config file** | **$0** | **Very good** | **Beta, 1.0 GA scheduled late 2026** |

### The recommendation

Put **Sveltia CMS at `lamarea.com.au/admin`**, backed by GitHub, with Cloudflare R2 as the media store.

It wins on three things, in order of weight.

Sveltia has native Cloudflare R2 media integration (CMS fact sheet). Belle uploads a 40 MB drone still or a venue gallery and it goes straight to the same R2 bucket the site serves from, never into the git repo, never against the 25 MiB Pages asset limit. No other option on the list solves the media problem as cleanly, and media is most of what she will do.

Its config is Decap-compatible, and the fact sheet describes migration as often a one-line script-tag swap. That caps the beta risk. If Sveltia stalls, the same `config.yml` points at a maintained alternative in an afternoon rather than a rebuild.

The whole app is under 500 KB served from CDN with no server to run, so there is nothing to patch, nothing to pay for and nothing to keep alive. Dom inherits no new attack surface beyond the GitHub app permissions.

One item stays open into week one. Whether Sveltia needs a separate OAuth proxy or accepts a GitHub token directly is **[not verified]** on its primary docs, and testing it on day two settles it. If a proxy is needed it is one Cloudflare Worker, and the community implementations for Decap's proxy are already proven (CMS fact sheet). Budget half a day.

### Where Claude fits

Claude is not the editing interface. It is the escape hatch for the two things a CMS cannot do: structural change, such as "add a corporate landing page for the Adelaide market", and recovery, such as "the venue page will not build, fix it". Set it up as a repo-level `CLAUDE.md` plus a short SOP so any Claude session that opens the repo already knows the conventions. Belle uses it monthly at most, and she uses Sveltia weekly.

### What happens when she breaks something

```
Belle saves a bad edit in Sveltia
        |
        +- Schema violation (missing required field, wrong type)
        |     -> Astro build FAILS. The live site does not change.
        |        Cloudflare keeps serving the last good deployment.
        |        Belle gets an email saying the build failed.
        |        Nothing is broken. Nothing is lost.
        |
        +- Valid but wrong (typo, wrong image, bad copy)
        |     -> It deploys. It is one commit in git.
        |        Cloudflare Pages keeps every prior deployment.
        |        Rollback is one click in the Pages dashboard,
        |        live again in seconds.
        |
        +- She deletes something
              -> Nothing is ever deleted. It is a git commit.
                 `git revert` restores it exactly.
```

Two guardrails make that true. Zod schemas on every collection mean a broken edit cannot reach production, which is worth saying to her in one sentence: you cannot break the live site from the editor. And every collection carries a `draft` or `status` field, so she can write a page and keep it out of the build until she flips it.

### The price

The record carries $350, roughly $400, roughly $500 and $550. Quoting a fifth number is worse than any of them.

Quote **$550, once**, and change what it buys.

The reason is P1. Belle raised self-editing before any quote existed, and the register now marks it Must in core scope. So the CMS build sits inside the $2,900 and is not optional. Selling her the ability to edit her own site as an extra, after she told us it was a requirement, is the kind of thing that costs a referral.

What $550 buys, stated as deliverables:

- A recorded walkthrough, roughly 40 minutes, covering every collection she will touch, done on her real content rather than a demo.
- A one-page printed cheat sheet: how to add a venue, add a journal post, swap a video, change a CTA, roll back.
- 30 days of unlimited "I think I broke it" support with guaranteed rollback.
- One structural change of her choosing inside those 30 days, built by Jess, so she sees what the escape hatch looks like.

$550 holds up because it is the highest figure she has already heard, so quoting it is not an increase on anything said to her, and it is the only one of the four that covers real work now that the build itself has moved into core scope. The line to use with her is that the editor is included and the training is the add-on.

---

## 4. Video and image pipeline

This is the hardest problem on the build and the one most likely to blow either the budget or the page weight. Three separate problems get conflated: source quality, encoding, and delivery.

### Source triage

Belle has said plainly that some of the drone material is her husband experimenting (M6), and she expects to reshoot over summer. So every asset gets graded before anything is encoded.

```
GRADE A   Professional. Beresford Estate stills, Georgia Evans footage,
          branding pillar videos (M3).
          -> Hero positions. Full-bleed. Autoplay loops.

GRADE B   Good drone, usable with work. DJI 0604, 0605, 0781 (M1).
          -> Section backgrounds, slowed, colour-matched, short loops.

GRADE C   Amateur or shaky. Nature iPhone footage (M4).
          -> Small frames inside a composition, never full-bleed,
             never behind text. Or a still frame pulled from it.

GRADE D   Unusable.
          -> A still. Belle is told which ones and why, so the
             summer shot list writes itself.
```

The build must degrade gracefully where the footage is weak, and swap easily later (M6). Both are solved by the same thing. Every video reference in a content file is a `stream_uid` plus a poster, so replacing the summer footage is changing one string in the CMS.

### The slow-down problem (L6)

Belle wants footage "slowed down potentially, to really capture that slow luxury feel". How it is done decides whether it looks luxurious or looks broken.

```bash
# BEST: source shot at 60fps, conformed to a 24fps timeline.
# True slow motion, every frame real, no artefacts. 2.5x slower.
ffmpeg -i DJI_0604.MP4 -filter:v "setpts=2.5*PTS" -r 24 -an out.mp4

# ACCEPTABLE: source at 30fps, mild slow-down only. Beyond about
# 1.4x this judders.
ffmpeg -i clip.MP4 -filter:v "setpts=1.35*PTS" -r 30 -an out.mp4

# AVOID: motion interpolation to fake frames.
# minterpolate warps water, rotor blur and moving people. On drone
# coastline footage it produces the exact artefact a luxury brand
# cannot ship.
```

Check the frame rate of every DJI file before promising a slow-down. The frame rates of DJI 0604, 0605 and 0781 are **[not verified]**, reading the file metadata settles it, and it has to happen in week one because it decides what is achievable.

### Encode targets

| Use | Resolution | Codec | Bitrate | Audio | Length |
|---|---|---|---|---|---|
| Hero loop, desktop | 1920x1080 | H.264 High, faststart | ~3.5 Mbps cap | none, stripped | 8 to 14 s |
| Hero loop, mobile | 1080x1350 or 720x1280 | H.264 High | ~1.8 Mbps | none | same |
| Section background loop | 1280x720 | H.264 High | ~1.8 Mbps | none | 6 to 10 s |
| Long-form (pillars, experiences, 8 hour day) | up to 1080p | Cloudflare Stream ABR, HLS | Stream decides | kept | 30 to 90 s |
| Poster frame | 2x the display box | AVIF with WebP fallback | q 55 to 65 | n/a | n/a |

Ship H.264 MP4 as the fallback source in every case. The fact sheet is explicit that AV1 is partial in Safari from 17.0 and hardware-dependent, HEVC is partial in Chromium, and both headline support figures are inflated by "partial" (https://caniuse.com/av1, https://caniuse.com/hevc). On a site whose target market is interstate and overseas travellers browsing on iPhones (A3), H.264 is the only source safe to ship alone.

```bash
# Hero loop, desktop
ffmpeg -i graded.mov -c:v libx264 -profile:v high -crf 22 \
  -maxrate 3500k -bufsize 7000k -pix_fmt yuv420p \
  -vf "scale=1920:-2" -movflags +faststart -an hero-1920.mp4

# Poster frame, pulled from the exact first displayed frame so there
# is no flash when the video starts
ffmpeg -i hero-1920.mp4 -vframes 1 -q:v 2 poster.png
avifenc --min 20 --max 30 -s 4 poster.png poster.avif
cwebp -q 78 poster.png -o poster.webp
```

### Autoplay, the three attributes that are not optional

```html
<video autoplay muted playsinline loop preload="none"
       poster="/img/hero-poster.avif"
       aria-hidden="true">
  <source src="https://videodelivery.net/<uid>/manifest/video.m3u8"
          type="application/x-mpegURL">
  <source src="/video/hero-1920.mp4" type="video/mp4">
</video>
```

`autoplay`, `muted` and `playsinline` are required together. Without `playsinline` iOS takes the video fullscreen, without `muted` autoplay is blocked, and removing the attribute is the only way to disable it because `autoplay="false"` does nothing (https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/video).

### Loading strategy

```
ABOVE THE FOLD (one video, home page hero only)
  poster  -> <link rel="preload" as="image" fetchpriority="high">
             The poster IS the LCP element. It must arrive first.
  video   -> preload="metadata", starts after the poster paints
             Never preload="auto". Never two autoplaying videos
             in one viewport.

BELOW THE FOLD (every other video on every page)
  poster  -> loading="lazy", decoding="async", width+height set
  video   -> preload="none", src attached by IntersectionObserver
             at rootMargin: "200px". Plays when 50% visible,
             pauses when it leaves. A video scrolled past is a
             video that has stopped costing money.

IMAGES
  Astro <Image> / <Picture>, AVIF first, WebP fallback,
  explicit width and height on every one (CLS),
  srcset at 480 / 768 / 1200 / 1920,
  sizes written per layout, not copied between components.
```

### Mobile behaviour

Mobile gets a different video, not the same video scaled. A 1920-wide horizontal drone shot cropped to a phone is a shot of the sky. Portrait crops are art-directed per hero, delivered with `<source media="(max-width: 767px)">`, and capped at 1.8 Mbps.

For the connection Belle's interstate visitor might be on, check `navigator.connection.saveData` and `effectiveType`. On `save-data` or `2g` and `slow-2g`, the poster stays and the video never attaches. The page still looks right, because the poster was art-directed as a still in its own right.

### prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  video[data-decorative] { display: none; }
  .hero { background-image: var(--poster); }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Decorative loops do not play at all under reduced motion, they resolve to their poster. Long-form content video keeps its controls and simply does not autoplay. This also reads straight off B6, "nothing sort of bouncing, it's all very soft and relaxing". A visitor who has asked their operating system for less motion is the visitor La maréa is selling calm to.

### Hosting choice and cost

| Option | Monthly at the modelled load | Notes |
|---|---|---|
| **Cloudflare Stream** | **~$8** | $5/mo minimum storage block, $1 per 1,000 delivered minutes |
| Bunny Stream | ~$3 | $1/mo minimum, but Oceania CDN delivery is $0.03/GB on Standard, not the $0.005 headline, which is the 10-PoP Volume tier |
| Mux | higher | Priced per encoded minute with resolution multipliers |
| R2 self-hosted MP4 | ~$1 | Zero egress fees, but no ABR, no HLS, no transcoding. Every visitor gets the full-bitrate file |
| Vercel | ~$160 per TB | $0.16/GB Fast Data Transfer in Sydney, and commercial use requires Pro |

The model **[estimate]**, laid out so the assumptions can be checked and challenged:

- 45 minutes of source video stored across the whole site. Stream bills storage in 1,000-minute blocks, so this is the $5 minimum.
- 2,000 sessions per month **[estimate, no analytics on the current Wix site to base it on]**, averaging 1.5 minutes of video watched. That is 3,000 delivered minutes, at $1 per 1,000, so $3.
- Total roughly **$8/month USD**, about $12 AUD.

Delivery only exceeds $10/month once the site passes roughly 10,000 delivered video minutes, which at 1.5 minutes per session is about 6,700 sessions. If La maréa gets there, the site has paid for itself many times over.

Use **Cloudflare Stream**. It costs $5/month more than Bunny at this volume, and it buys adaptive bitrate without a transcoding pipeline to maintain, one account and one invoice alongside Pages and R2, and a straight answer when Belle asks who holds her assets. Bunny is the named fallback if video volume grows enough that the gap becomes real money.

Images do not go to Stream or to a paid image service. Astro's Sharp-backed pipeline optimises them at build time and Pages serves them free. R2 holds the CMS-uploaded originals so Belle is never limited by the 25 MiB Pages asset cap.

### Page weight budget, hard

This is a build gate, not an aspiration. A page over budget does not ship.

| Page | To LCP | Full page, scrolled to bottom, excluding streamed segments | Autoplay loops allowed |
|---|---|---|---|
| Home | 1,100 KB | 2,800 KB | 1 |
| The Day, formats | 900 KB | 2,200 KB | 1 |
| Places to Pause index | 900 KB | 2,400 KB | 1 |
| Venue detail | 900 KB | 2,600 KB | 1 |
| Philosophy | 1,000 KB | 2,600 KB | 1 |
| Journal index | 700 KB | 1,800 KB | 0 |
| Journal post | 600 KB | 1,600 KB | 0 |
| Enquiry funnel | 400 KB | 700 KB | 0 |

Sub-budgets apply to every page. CSS caps at 40 KB gzipped in one file with no framework. JS caps at 60 KB gzipped including GSAP and ScrollTrigger. Fonts run to 2 families, 4 weights, woff2, subset to Latin plus the accented é, `font-display: swap`, self-hosted, 90 KB total, and self-hosting rather than Google Fonts removes a third-party request and a privacy disclosure. The hero poster caps at 180 KB AVIF and any single below-fold image at 120 KB.

Targets are LCP under 2.5 s on a simulated Moto G4 over 4G, CLS under 0.05, and Lighthouse performance 90 or better on mobile. That Lighthouse number is the evidence O15 asks for and it goes in the prototype walkthrough.

---

## 5. Animation stack

### What has to be delivered

Sections L and O ask for a hero video zoom on scroll (L1), elements sliding in from the right (L2), minimal arrow accordions (L3), filters and tabs (L5), scroll-progress rules under sliders (O2), cross-fade between tiles (O5), horizontal slide combined with vertical expand (O6), click-to-expand in place (O7), parallax (O13) and hover states (O4). Under all of it sits B6: "nothing sort of bouncing, it's all very soft and relaxing."

### The layered answer

```
LAYER 0   CSS only, 0 KB
          hover states (O4), cross-fade (O5), accordions (L3),
          parallax on capable browsers (O13), scroll-progress rule (O2)

LAYER 1   CSS scroll-driven animations, 0 KB
          animation-timeline: view() for slide-in-from-right (L2),
          scroll() for the progress rule (O2) and hero zoom (L1)
          ~85% support. Chrome/Edge 115+, Safari 18+.
          Firefox has it fully implemented but behind a flag in stable
          as at Firefox 152, June 2026.
          Progressive enhancement: author the finished state as the
          default, layer the animation on top.
          https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
          https://caniuse.com/mdn-css_properties_animation-timeline_scroll

LAYER 2   IntersectionObserver, ~1 KB hand-written
          The universal fallback for every reveal. Adds a class,
          CSS does the rest. Works everywhere, including Firefox.

LAYER 3   GSAP + ScrollTrigger, ~50 KB gzipped, loaded on 2 pages only
          O6 ONLY: horizontal slide combined with vertical expand,
          plus the pinned 8 hour day timeline (E2, E3).
          GSAP and every former Club plugin are free for commercial
          use since April 2025 under Webflow.
          https://webflow.com/blog/gsap-becomes-free
          https://gsap.com/community/standard-license/

NOT USED  Lenis. No smooth-scroll library at all.
```

### Why no Lenis

The motion fact sheet lists six documented ScrollTrigger-plus-Lenis failures: asymmetric snap, a required scrollerProxy wiring, offsets shifting on window resize, `end: "+=800px"` leaving the page unable to reach true bottom, pinning silently breaking, and laggy mobile. Each one is a day of debugging inside a four-week build. The fact sheet's own recommendation is native `scroll-behavior: smooth` for anchor easing at zero cost, reaching for Lenis only where scroll-linked animation must stay in sync with GSAP.

There is a second reason. O12 makes verified rendering on Samsung Galaxy and Pixel tablets a sign-off criterion Belle has been primed to run herself, and Lenis plus GSAP is reported laggy on mobile. Shipping the known-laggy combination into a test Belle will personally run on Android hardware is an avoidable way to fail a handover. Ship no smooth-scroll library.

### The accordions (L3)

Use `<details>` and `<summary>` with the `name` attribute for exclusive single-open behaviour, zero JS, 91.11% support back to Safari 17.2 and Firefox 130, with `::details-content` styling the collapsible region at 87.63%. A small rotating arrow, never a plus sign, per Belle's exact words.

The gap is `interpolate-size: allow-keywords`, Chromium-only at 72.21% with no Firefox or Safari support, and it is the piece that lets height transition to auto. Use a fixed `max-height` transition instead, which animates everywhere, degrades to an instant open on older browsers, and needs revisiting only when Safari and Firefox ship `interpolate-size`.

### The map (F9)

Use an inline SVG with hotspots. Four to six venue pins with light interactivity does not justify a tile library. A CC0 South Australia outline from freesvg.org carries no attribution obligation and no share-alike (https://freesvg.org/south-australia-outline). Zero bundle cost, styled directly in the sand and sage palette, and pins driven by the `coordinates` field so a fifth venue puts its own pin on the map. Mapbox's free tier of 50,000 monthly map loads would cost nothing, but it adds a library, a tile dependency and an account for a feature Belle rated Explore.

### Tablet behaviour and O9 to O12

The fluid margin requirement is not an animation problem but it lives in the same code, so the build rule belongs here.

```css
:root {
  /* O9: margins scale continuously, no breakpoint steps */
  --gutter: clamp(1.25rem, 5vw, 7rem);
  /* O8: art-directed splits, per section, never a snapped grid */
}
html { overflow-x: clip; }   /* O12 backstop, not the fix */
```

Every horizontal margin is a `clamp()` on `vw` rather than a media-query step, so margins scale at every width, which is what O9 asks for and what Belle can see the difference in. One layout reflows for O11, using container queries for components and `grid-template-columns` with `minmax()` and `auto-fit`, with no separate mobile build.

Zero horizontal scroll under O12 is verified, not assumed. Horizontal scroll on a site like this comes from three places: `100vw` on a page with a scrollbar, transformed elements sliding in from the right that no ancestor clips, and unconstrained media. Every slide-in-from-right animation (L2, O6) sits inside a wrapper with `overflow-x: clip`, `overflow-x: clip` on `<html>` is the backstop, and the real test is a CI check measuring `document.documentElement.scrollWidth` against `clientWidth` at 320, 360, 390, 412, 768, 800, 1024, 1180, 1280 and 1440 px. Belle will run this herself on her own Galaxy and Pixel, so it needs to pass before she does.

Every hover state under O4 gets a tap equivalent, and `@media (hover: hover)` guards hover-only reveals so nothing is unreachable on a tablet. GSAP ScrollTrigger pinning is disabled under 900 px and the sequence becomes a vertical stack of the same content, because pinning on touch devices is where Android tablets misbehave.

The total JS budget is 60 KB gzipped, with most pages under 10 KB.

---

## 6. Forms, data and privacy

### The stepped funnel (A5)

Seven steps, each writing on advance so a drop-off is still a lead. The question set follows plan/11 Part 5.

```
STEP 0  Arrival, no question    reads audience, format, venue, experience
                                and utm from the URL, referrer and first
                                page from the session
STEP 1  Who is the day for?     private | corporate            -> A8 split
                                skipped and shown as confirmed when the
                                visitor came from /private-groups or /corporate
STEP 2a What's the occasion?    private path                   -> occasion
STEP 2b What should the day     corporate path, organisation   -> team_outcome
        do for your team?       asked here as optional
STEP 3  Roughly how many?       band: under 10 | 10 to 14 | 15 to 20
                                | more than 20 | not sure      -> group_size_band
STEP 4  What draws you?         multi-select over the          -> experiences[]
                                experiences, not the pillars,
                                until decision 1 clears
STEP 5  Coast or vineyard?      coast | vineyards | help me    -> setting,
                                choose. Prefilled from a          venue_slug
                                venue page
STEP 6  When, and which format? month over the next 12 months  -> preferred_month,
                                or flexible, plus format          format_slug
STEP 7  Your details            name, email, phone, org if not given at 2b,
                                anything else, separate unticked marketing
                                box, collection notice
        + Turnstile + consent

Row is INSERTED after step 1 with lead_source, utm, referrer and
landing_page captured (P5). Every later step UPDATEs the same row.
A person who leaves at step 4 is a lead with three useful answers.
```

No dietary question and no budget question at launch. Dietary needs are health information and belong on the questionnaire after booking, and budget stays off until decision 27 turns it on.

No step asks for an email before step 7. Asking early raises the completion rate on paper and lowers the quality of what Belle receives.

### Table design and RLS

RLS is enabled on every table and the default is deny.

```sql
alter table public.enquiries          enable row level security;
alter table public.questionnaires     enable row level security;
alter table public.downloads          enable row level security;
alter table public.subscribers        enable row level security;

-- No policy grants anon or authenticated any access to any of them.
-- Deny by default is the policy.
```

Every write goes through a Cloudflare Pages Function using the Supabase service role key, held as an encrypted environment variable in Cloudflare and never present in the built site. The browser talks to `/api/enquiry` on Belle's own domain and never talks to Supabase. The Supabase anon key is not published in the front end at all, because the front end has no reason to read the database.

That matters more than the usual reason. The standard pattern of a public anon key plus a permissive insert policy would let anyone on the internet write rows into a table holding dietary requirements, injuries and waivers. Routing every write through a server function with Turnstile in front of it means no public path to that data exists.

Belle's own access is through the Supabase dashboard as project owner, plus a weekly CSV export. She does not need a custom admin UI in this build, and building one would consume a week the video pipeline needs.

```sql
-- Health data is separated at the storage layer, not just logically
revoke all on public.questionnaires from anon, authenticated;

-- Retention is a column, so deletion is a scheduled job rather than
-- a memory exercise
alter table public.questionnaires
  add column retention_until date
  generated always as ((created_at + interval '24 months')::date) stored;
```

### Spam protection

Cloudflare Turnstile sits on every POST, verified server-side in the Pages Function before the insert runs. Turnstile's Managed, non-interactive and invisible modes are free with unlimited sitekeys and unlimited verification requests (https://blog.cloudflare.com/turnstile-ga/, https://prosopo.io/tools/cloudflare-turnstile-pricing/). Managed mode is invisible to a real visitor almost always, which matters on a luxury site where a checkbox reads cheap. Layer it with a honeypot field, a minimum time-on-form of 3 seconds, and Cloudflare rate limiting on `/api/*`.

### Notifications

The Pages Function emails Belle on every completed enquiry through Cloudflare Email Routing or Resend's free tier, carrying the answers and the lead source. It does not send from her domain until SPF and DKIM alignment have been checked, because a new sending path on a domain with existing email is how a business starts landing in spam.

Belle's inbound path today is a Google Calendar booking link (project brief), so the notification email carries that link and she replies in one click. Automatic calendar booking is out of scope for four weeks.

### Klaviyo (P6)

Sync server-side only, from the Pages Function, using a private API key held in Cloudflare environment variables. Post to `/api/profile-subscription-bulk-create-jobs` with the `Authorization: Klaviyo-API-Key` header (https://developers.klaviyo.com/en/docs/collect_email_and_sms_consent_via_api).

Klaviyo's `/client` endpoints use a public 6-character site ID and are documented as client-side only and not for server-side use. They are also not for this build, because a public key in the front end is a key anyone can use to write into her list.

Three things must be settled with Belle before this is wired: which list, whether La maréa and AB Performance Nutrition share an account, and what consent language she wants under the field. Only the email address, the source and the consent timestamp are synced, and health information never goes to Klaviyo.

### The Jotform replacement (P4)

This is the highest-risk item on the build and it is worth being blunt about internally.

Today a guest fills a Jotform on an off-domain URL, which P13 already names as a launch fault. It collects dietary needs, injuries and waivers. That is health information about identifiable people, held by a third party, on a domain that is not hers.

After the rebuild the questionnaire is a page on `lamarea.com.au` behind a per-booking token, writing to the `questionnaires` table with RLS denying all public access, retention set at insert, and consent captured with a timestamp and the waiver version.

Five things that requires, none of them optional:

1. Explicit consent at the point of collection. Health information is sensitive information under APP 3.3 and generally requires consent. That means a tick box with its own label, not bundled into a general terms acceptance, and the consent timestamp stored.
2. A stated purpose and a stated retention. "We use this to plan your retreat safely. We delete it 24 months after your retreat."
3. Encryption at rest and in transit. Supabase provides both, and TLS is enforced end to end.
4. Access limited to Belle and the practitioner delivering that retreat. Practitioner access in this build is a CSV Belle sends, not a login. Practitioner logins are phase two and should be said out loud rather than implied.
5. A versioned waiver, with `waiver_version` stored on the row, so what a guest agreed to is reconstructable.

### Australian Privacy Act, what applies

Australian IT marketing widely repeats the claim that the small business exemption ends on 10 December 2026. That is not what the OAIC says. Its small business guidance carries no end date for the exemption and the $3 million turnover threshold still stands (https://www.oaic.gov.au/privacy/privacy-guidance-for-organisations-and-government-agencies/organisations/small-business). What commences on 10 December 2026 under the Privacy and Other Legislation Amendment Act 2024 is the automated decision-making transparency obligation, requiring APP entities that use personal information in ADM which could affect a person's rights or interests to say so in their privacy policy (https://www.oaic.gov.au/engage-with-us/consultations/consultation-on-guidance-for-transparency-in-automated-decision-making). Do not repeat the exemption-ends claim to Belle. It is wrong, and being wrong about privacy law in front of a client who asked an unprompted data question (O15) is expensive.

What does apply is more direct. The small business exemption does not cover a health service provider, whatever the turnover, and the OAIC's own list includes complementary therapists and allied health professionals. La maréa delivers nutrition consultations, wellness consultations and practitioner-led treatments, and collects injuries and dietary needs in order to deliver them. Belle also runs AB Performance Nutrition. Treat La maréa as covered by the Privacy Act and the 13 Australian Privacy Principles now rather than as exempt, and put the confirmation question to her accountant or lawyer rather than ruling on it ourselves.

On that basis the build carries six obligations:

- APP 1 requires a clear, current privacy policy on the site. It names Supabase, Cloudflare, Klaviyo and Cloudflare Stream as processors, says what is collected, why, how long it is kept and how to get access or correction. If any AI sorts, scores or routes enquiries, that gets disclosed too, and the disclosure is due by 10-12-2026.
- APP 3.3 requires consent for sensitive information, collected separately and timestamped.
- APP 5 requires a collection notice at the point of collection, not only in the policy.
- APP 8 covers cross-border disclosure. Supabase, Cloudflare and Klaviyo all process data outside Australia and the policy must say so. Set the Supabase project region to ap-southeast-2 (Sydney) anyway, because data residency is the first thing a corporate client's procurement team asks about, and corporate bookings are the sale (A1).
- APP 11 requires reasonable security steps: RLS, service-role-only writes, Turnstile, TLS, and a retention policy that deletes.
- The Notifiable Data Breaches scheme requires an eligible breach to be assessed and reported, so a one-page response plan is a deliverable rather than a nice-to-have.

---

## 7. Hosting, domains, DNS and email

### The registrar problem

The La maréa registrar is unconfirmed (project brief, and open question 6), and section P names it as the only open item that can delay go-live. It has to be answered in week one before anything else here can be scheduled.

Ask Belle three questions in this order. Who do you pay for lamarea.com.au, and when does it renew? Is your email on Google Workspace, Microsoft 365, or something else? Can you log in to that account today?

The third question is the one that bites. Domains registered years ago by a since-departed web person are the most common cause of a launch slipping. AB Performance Nutrition is on Crazy Domains (project brief), so that is the first place to look, but it stays an assumption until she confirms.

### The migration, zero downtime

The new site goes live and gets proven before a single DNS record changes. Wix keeps serving until cutover and stays paid for 30 days afterwards as the rollback.

```
WEEK 1   Repo created, Cloudflare Pages project live at
         lamarea.pages.dev. Belle can see it. Wix untouched.

WEEK 3   staging.lamarea.com.au points at Pages.
         ONE CNAME added at the registrar. Nothing existing changes.
         Wix still serving www. Belle reviews on her own domain,
         on her own phone, on her Galaxy and her Pixel.
         Password-protect it so it is not indexed.

WEEK 4, T-72h
         Export every MX, TXT (SPF, DKIM, DMARC, verifications)
         and CNAME from the current zone. Screenshot it. Save it
         to the repo. This is the file that saves the launch if
         something goes wrong.
         Drop the TTL on the A and CNAME records for the apex and
         www to 300 seconds. Leave every mail record alone.

WEEK 4, T-24h
         Full crawl of the live Wix site. Every URL, every title,
         every image. This is the redirect map source and the
         only chance to capture it.

WEEK 4, CUTOVER (Tuesday morning, never Friday)
         1. Add lamarea.com.au and www to the Pages project.
         2. Change the apex and www records to point at Pages.
            Change NOTHING else. MX, SPF, DKIM, DMARC and every
            verification TXT stay exactly as they are.
         3. Watch for the certificate. Cloudflare usually issues
            in minutes. If port 80 returns 200 and HTTPS does not
            within ~10 minutes, force issuance rather than waiting.
            (Precedent: jesstresidder.com, 09-09-2026, where
            auto-issuance did not fire within 6 minutes and forcing
            it fixed it instantly.)
         4. Test: apex, www, HTTP to HTTPS, www to apex, every
            redirect and 410, the enquiry form end to end, a test
            email to and from belle@lamarea.com.au.
         5. Submit the new sitemap in Search Console. Use Change
            of Address only if the domain changes, which it does not.
         6. De-index the old Wix site so no duplicate copy is live.

T+30 DAYS
         Cancel Wix, once 404s in Search Console are flat and
         nothing is missing.
```

Two rules hold the whole thing together. Never touch an MX record during a website migration, because mail and web are separate records on the same domain and the only reason a website move breaks email is somebody replacing the whole zone. And do not move nameservers to a host. The pattern that has worked on Jess's own domains is nameservers stay where the mail records live and only the A and CNAME records change.

Cloudflare complicates that slightly, because using Cloudflare DNS means moving nameservers to Cloudflare and recreating every mail record in the Cloudflare zone. It is worth doing, since it unlocks Turnstile analytics, rate limiting, security headers and Email Routing in one account Belle owns. Make it a deliberate step with every record exported first, done at least 48 hours before the web cutover so mail is proven stable before the site moves. Two changes, two days apart, never both at once.

### The roughly 35 dead URLs (P13)

Redirects live in `public/_redirects`, which Cloudflare Pages reads natively. Every redirect is a 301, and the eight Wix placeholder pages return 410 instead. The full map is in plan/11 Part 2.

```
# Live Wix paths to their new homes (examples, full map in plan/11 Part 2)
/sarah-mclachlan            /team/sarah-mclachlan            301
/accommodation-partners     /places                          301
/luxury-retreats            /retreats                        301
/partners                   /team                            301
/contact                    /enquire                         301
/blog                       /journal                         301

# Migrated posts. The sleep post moves to a new slug, so its own
# rule sits above this line once that slug is set
/post/*                     /journal/:splat                  301

# Wix Store retreat products, pending decision 13 in plan/11.
# They may point at /retreats/<slug> instead
/product-page/*             /retreats                        301

# /gift-cards keeps its URL. How sold Wix gift cards are honoured
# is decision 16 in plan/11, settled with Belle before launch.

# /waitlist is its own page, not a redirect. Off-domain Jotform
# waitlist links cannot be redirected from this file, so Belle
# swaps them in her Instagram bio and emails.

# The eight Wix placeholder pages, including /members, return
# 410 Gone, never a 301 to home. Whether _redirects can return
# a 410 is [not verified]. If it cannot, a Pages Function does.
```

Three rules govern the map. Every redirect points to the closest equivalent page, because bulk-redirecting 35 URLs to the homepage tells Google the old pages are gone and discards whatever authority they had. The 404 page is beautiful and offers the three main paths, because some of the 35 will have no equivalent. And the whole map is verified with a crawl after cutover, every old URL requested, every response logged, the list handed to Belle. Ticking off a fault she has already seen in someone else's audit is worth more than describing it.

The other P13 faults are build items rather than migration items. The sideways scroll and clipped logo are covered by O9 to O12, the keyword-stuffed title tag by a proper title on every page, the three brand spellings by a single spelling in `settings.json` used everywhere, and the seven hand-built practitioner pages by the practitioners collection.

### Email

Belle's email is out of scope beyond preserving it. If she is on Google Workspace, the MX records move across to Cloudflare DNS unchanged and nothing else happens. The only new sending path is transactional notification mail from the Pages Function, and that gets its own subdomain or a dedicated service rather than being bolted onto her existing setup.

---

## 8. 2027 readiness

### The question that decides everything

P9 asks whether the app or the site owns guest records. **The site owns guest records, and Movement consumes them.**

Four reasons, in order.

Ownership. Belle asked, unprompted, whether she co-owns the backend (O15). If the guest record lives in Movement, she rents it. Movement's own positioning is "your own branded app and website, not a profile on someone else's platform" (https://movement.so/pricing), which answers branding and says nothing about data portability. Supabase is Postgres, so she can export it, take it anywhere, or hand a successor platform a dump.

She has already paid for it. Supabase sits inside the $2,900 and will hold every enquiry, questionnaire and waiver from launch. Making Movement the owner in 2027 means migrating a year of records into a platform whose export path is **[not verified]**.

Health information. The questionnaires table holds dietary needs, injuries and waivers. Moving that store of record into a community app in 2027 restarts the entire privacy assessment, while keeping it in Supabase means the assessment done in week two holds.

The app is not decided. Movement is a candidate under P9, not a decision. An architecture that assumes it is the owner has to be rebuilt if she picks something else, while an architecture where Supabase owns the record treats any app as swappable.

```
                    +------------------------------+
                    |      SUPABASE (Postgres)     |
                    |      store of record         |
                    |                              |
                    |  guests, enquiries,          |
                    |  questionnaires, waivers,    |
                    |  attendance, memberships     |
                    +---+----------+-----------+---+
                        |          |           |
                 reads/writes    sync       export
                        |          |           |
                  +-----+----+ +---+-----+ +---+------+
                  |   SITE   | | MOVEMENT| | KLAVIYO  |
                  |  2026    | |  2027   | |          |
                  |          | | app +   | | email    |
                  | enquiry, | |community| | only     |
                  | members  | | content | |          |
                  +----------+ +---------+ +----------+

   Every consumer is replaceable. The record is not.
```

### K5, members area on the site or only in the app

Build it on the site with a login, in 2027, not in this build.

Rising Tides Collective entry is earned by attending a retreat (K4), which is a status the site already knows because attendance sits in Supabase. Supabase Auth with magic links is the natural fit and costs nothing on the Free plan. Building it now would spend a week of a four-week budget on a feature with no members yet.

What this build does instead is create a `guests` table with a `collective_member` boolean and a `joined_at` timestamp, populated from launch. On the day Belle wants the members area, the membership list already exists with real history and nothing needs backfilling.

### The three 2027 bolt-ons

| 2027 feature | Needed now | Cost now |
|---|---|---|
| La maréa app (K1, K6) | Guest records in Supabase with stable UUIDs, a documented schema, `ap-southeast-2` region | included |
| Rising Tides Collective (K3, K4, K5) | `guests` table with `collective_member` and `joined_at`, populated from every retreat | roughly 2 hours |
| Foundational subscriptions (K2) | A `subscription_interest` capture on the home page coming-soon section and on `/app`, writing to Supabase with source | roughly 2 hours |
| Payments | Nothing. Do not build Stripe now. Dom knows Stripe (project brief) and it bolts onto Supabase in a week when there is something to sell | $0 |

The coming-soon section under K1 should capture interest rather than only announce. A section that says "coming 2027" and takes an email builds the launch list for free, while a section that only says "coming 2027" is a dead end on a page meant to convert.

### What would make this decision wrong

If Movement turns out to have no usable export or API, and Belle commits to it as the primary guest-facing surface, then a two-way sync becomes ongoing maintenance she is paying for. Settle it on the 21-09-2026 app call by asking Movement two questions: does it have a documented API for reading and writing member records, and can a full member export be taken at any time in a standard format. Both are **[not verified]** today.

---

## 9. Risk register

Ranked by expected damage, which is likelihood multiplied by what recovery costs.

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | The footage does not carry a luxury site. Belle has said some is her husband experimenting (M6), and a Mediterranean luxury aesthetic is unforgiving of shaky, badly exposed or oddly framed drone footage | High | Severe. It is the core promise | Grade every asset in week one, A to D, and show Belle the grading before design starts. Design so hero video is one slot per page, replaceable by a still with no layout change. Ship the summer shot list as a deliverable so the weakness becomes a plan |
| 2 | Domain registrar access unknown, unconfirmed as at 15-09-2026, named as the only item that can delay go-live | Medium-high | Severe. Nothing launches | First question in the first week one email. If she cannot log in, start the recovery process immediately, because registrar account recovery takes days to weeks, not hours |
| 3 | Scope. The register holds over 90 numbered requirements, more than 60 marked Must, in four weeks at $2,900 | High | High. Late delivery, or thin delivery of the things that matter | Rank the Musts against A1, booked discovery calls. Ship the top tier fully. Carry the rest into a phase two list given to Belle in writing in week two, before she finds it herself. The register is the tool for that conversation |
| 4 | Health information without proper consent handling. Dietary needs, injuries and waivers move from Jotform to a system we built, and La maréa is likely covered by the Privacy Act on the health service provider ground whatever its turnover | Medium | Severe. Regulatory, reputational, and it is the thing she raised in O15 | Separate table, RLS deny-by-default, service-role writes only, explicit and separate consent with timestamp, generated retention column, ap-southeast-2. Tell Belle to confirm her Privacy Act position with her own adviser, in writing |
| 5 | Belle cannot or will not use the CMS. She was overwhelmed by her own AI workshop on 08-09-2026, and P1 makes self-editing a core requirement | Medium | High. The no-subscription argument depends on it | Sveltia over anything requiring git knowledge. Recorded walkthrough on her real content. One-page cheat sheet. Build gate so she cannot break the live site. 30 days of support. Make her add a journal post herself in week four while Jess watches |
| 6 | Sveltia is beta, with 1.0 GA scheduled late 2026 | Medium | Medium | Its config is Decap-compatible, so the exit is a script-tag swap. Pages CMS named as the fallback now, not after a failure. Test the auth path on day two, since whether it needs an OAuth proxy is unverified |
| 7 | Page weight kills mobile performance. The site is video-heavy by design and O12 makes tablet rendering a sign-off criterion Belle runs herself | Medium | High. Fails her acceptance test and undermines the SEO claim in O15 | Per-page budgets as a build gate. One autoplay loop per page. Poster-first. Art-directed mobile encodes, not scaled desktop ones. Lighthouse run on every deploy, and the number shown to Belle in the prototype walkthrough |
| 8 | Horizontal scroll from the slide-in-from-right animations. O6 and L2 are the signature interactions and the most common cause of the fault O12 tests for, which P13 already records on the current site | Medium | High. Visible, embarrassing, and a fault she was told about by a competitor | Every slide-in wrapped in an `overflow-x: clip` ancestor. `overflow-x: clip` on `<html>` as backstop. Automated scrollWidth check at 10 widths on every build. Test on real Android hardware before she does |
| 9 | Corporate proof cannot be published. P12 flags Ray White, Burnside and Projects SA all appearing in the material, and the guide names Ray White Projects SA and YNG Adelaide (plan/11 decision 11), all unconfirmed | Medium | Medium. Corporate is half the sale (A8) and trust is thin for a new business (I8) | Confirm the client name with Belle in week one. Build the corporate case study module so it renders with or without a named client, using an anonymised version until permission is in writing |
| 10 | Venue permission. Four partner venues, permission to use their imagery and brand names unconfirmed (open decision 8) | Medium | Medium. A venue pulled after launch | `partner_approved` boolean on the venue schema, and the build refuses to publish a venue where it is false. Belle chases permission in week one with a one-line email template written for her |
| 11 | Two people, one four-week window. Jess does design, content and build, Dom does backend and security, neither full time | Medium | Medium | Dom's work (Pages Functions, RLS policies, Turnstile, security headers) is specified in week one and independent of the front end, so it runs in parallel and is not blocked by design decisions |
| 12 | The $2,900 has no contingency. Four editing prices, a possibly-live $700 workshop quote and an unquoted app all sit in the same record | Medium | Medium. Margin, and an awkward conversation | Settle the editing price at $550 and the workshop quote status before anything is quoted again. Phase two list in writing in week two so additional scope has somewhere to go that is not free |
| 13 | Video costs run above the estimate. The $8/month model rests on a 2,000-session assumption with no analytics on the current site to check it against | Low | Low | Set a Cloudflare billing alert at $25/month. At the break point of roughly 6,700 sessions the site is already paying for itself. Bunny is the named cheaper fallback |
| 14 | Klaviyo account structure unknown, including which list and whether both businesses share an account | Low | Low | One question in week one. The sync is one function either way |

---

## 10. Build sequence

Four weeks from 14-09-2026. Week one ends 21-09-2026, which is also the app call. Week four ends 12-10-2026.

### Week one, to 21-09-2026: prototype in her hands

The promise was a first prototype part way through. Bringing it forward to week one is the cheapest way to de-risk everything else, because every assumption about the aesthetic gets tested before four weeks of work depend on it.

What ships by 21-09-2026 is a live, password-protected URL at `lamarea.pages.dev` carrying the home page header, hero and the next three sections, down to The Day (plan/11 Part 8). Real drone footage, the real sand and sage palette if S1 clears by Friday 18-09-2026 and a labelled neutral stand-in if it does not, the hero zoom (L1), one slide-in-from-right (L2), the signature horizontal-slide-plus-vertical-expand (O6) in first form, fluid margins at every width (O9), and a Lighthouse score visible on the page.

That prototype answers three of Belle's questions at once: what the aesthetic feels like, that the animation the other agency called impossible is running, and that the SEO claim is measurable rather than asserted (O15).

Running in parallel the same week:

- One email of blocking questions to Belle: registrar and login access, email provider, Klaviyo list, corporate client name (P12), venue permissions (open decision 8), current Wix cost and renewal date.
- Asset grading, A to D, across every file in both Drive folders and both Dropbox folders. Frame rates read off the DJI files so the slow-down (L6) is promised only where it is achievable. Summer shot list started.
- Dom starts: Supabase project in ap-southeast-2 in Belle's name, schema for all six tables, RLS deny-by-default, Cloudflare account in her name, Turnstile keys.
- Repo created in Belle's GitHub, Pages project connected, Sveltia auth path tested.
- Full crawl of the current Wix site, saved, for the redirect map.

### Week two, to 28-09-2026: content model and the spine

- All eleven content collections defined with Zod schemas.
- Venue detail template built once, all four venues entered as data (F2, F5, F7, F10), coast and vineyard split (F6), inline SVG map with pins from the coordinates field (F9).
- Experiences section: fixed left pane with scrolling right (O1), ten guided plus six self-led (D3, D6), per-slide art direction (O3), scroll-progress rule (O2), cross-fade (O5).
- The 8 hour immersive timeline (E1 to E4) with the GSAP pinned sequence.
- Video pipeline running: grading, encoding, slow-downs, Stream uploads, posters.
- Dom: Pages Functions for the enquiry endpoint, Turnstile verification, Klaviyo sync.
- Privacy policy and collection notice drafted.
- Phase two list to Belle in writing, so the conversation about what does not fit happens now.

### Week three, to 05-10-2026: everything else, then staging

- Philosophy and pillars (G1 to G11), science references on their own pages.
- Food (H1 to H8), team (I1 to I4), testimonials (I5 to I7), journal with filter tabs (J1 to J5, O14).
- The seven-step enquiry funnel, end to end, writing to Supabase with lead source.
- Questionnaire and waiver pages behind tokens. Jotform retired.
- Lead magnet gating and standalone URLs for ManyChat (P7, P8).
- Redirect map written, all roughly 35 URLs, plus the 410 list for the eight placeholder pages.
- SEO and AEO: schema on every collection, sitemap, `llms.txt`, titles, meta.
- `staging.lamarea.com.au` live, so Belle reviews on her own domain, on her own Galaxy and Pixel (O12).
- Nameservers moved to Cloudflare, mail records exported and verified first.

### Week four, to 12-10-2026: revisions and handover, cutover the next day

- Belle's feedback from staging, applied.
- Cross-device verification: the scrollWidth check at 10 widths, real Android tablet testing, reduced-motion pass, keyboard navigation, alt text.
- Page weight budgets enforced, anything over budget fixed.
- Cutover on Tuesday 13-10-2026 morning, the day after week four ends, so Belle's staging feedback is applied before go-live. Redirect crawl verification, sitemap submitted, forms tested end to end on the live domain.
- Handover: Belle adds a journal post herself in Sveltia while Jess watches, plus the recorded walkthrough and the cheat sheet. Ownership transfer confirmed on Supabase, Cloudflare and GitHub, which closes O15 properly.
- Wix stays paid until 12-11-2026 as the rollback.

### What is deliberately not in four weeks

Named now so it reads as a plan rather than a shortfall: members area login, practitioner logins to questionnaires, Stripe and deposits, automatic calendar booking, a custom admin dashboard over Supabase, the Movement integration, and the AB Performance Nutrition site. All of it bolts onto what is built here without a rebuild, which is the point of section 8.

---

## Unresolved, and what would settle each

| Item | What settles it |
|---|---|
| Domain registrar and login access | Belle, week one. Blocking |
| Sveltia auth path, OAuth proxy or direct token | Testing it, day two |
| DJI source frame rates, which decide the slow-down | Reading the file metadata, week one |
| Movement API and export capability | Two questions on the 21-09-2026 app call |
| Corporate client names, Ray White Projects SA, YNG Adelaide, and whether Burnside is a third | Belle, week one. Blocks the corporate case study |
| Venue permissions, all four | Belle, week one. `partner_approved` gates publication |
| Klaviyo list and account structure | Belle, week one |
| Wix Store gift cards, outstanding balances | Belle, before the redirect map is final |
| Traffic volume, which the video cost estimate rests on | No analytics exist on the current site. Umami or Cloudflare Web Analytics from day one, and revisit the estimate at 30 days |
| Whether La maréa is a health service provider under the Privacy Act | Belle's accountant or lawyer. Build as though yes |
| Supabase SOC 2 Type 2 report access, which is Team and Enterprise only | Supabase is SOC 2 Type 2 certified as a company and the report document needs a paid plan. The written promise to Belle stands on the certification. Do not promise her the report itself |
| ISO 27001 for Supabase | Not stated in Supabase's own SOC 2 documentation **[not verified]**. Cloudflare's ISO 27001 is verified and dates to 2019. When restating the promise, attribute each certification to the right vendor |

---

## Reconciliation log, 16-09-2026

This section aligns plan/10 with `plan/11-master-site-plan.md`. The rule: where the two conflict, plan/11 wins until Jess decides otherwise. The original is saved as `plan/10-technical-architecture.pre-reconcile-16-09-2026.md`. Weekdays were checked with Python: 07-10-2026 is a Wednesday and 13-10-2026 is a Tuesday. plan/11 and the requirements register were not edited.

### URLs and redirects

| # | Section | Before | After | Reason |
|---|---|---|---|---|
| 1 | 2, venues | `# becomes /the-places/naiko-encounter-bay` | `# becomes /places/naiko-encounter-bay` | plan/11 Part 2 and register R set venue URLs at `/places/<slug>` |
| 2 | 7, redirects | `/practitioners/sarah-x  /the-team#sarah-x`, `/accommodation  /the-places`, `/accommodation/:venue  /the-places/:venue`, `/blog/:slug  /journal/:slug`, `/our-science  /philosophy` | `/sarah-mclachlan  /team/sarah-mclachlan`, `/accommodation-partners  /places`, `/luxury-retreats  /retreats`, `/partners  /team`, `/contact  /enquire`, `/blog  /journal` | The old examples used paths that are not on the live site and targets plan/11 does not use. The new lines are taken from the plan/11 Part 2 redirect map, which comes from the sitemap crawl. People get `/team/<slug>` pages, not anchors (plan/11 4.16) |
| 3 | 7, redirects | `/_partials/*  /  301` under "Wix system junk" | Removed. A comment says the eight placeholder pages, including `/members`, return 410 Gone | plan/11 Part 2 and decision 17 return 410 and reject any 301 to home. `/_partials/*` is not in the crawl |
| 4 | 7, redirects | `/post/*  /journal/:splat` with no note | Same rule, with a comment that the sleep post needs its own rule above it | plan/11 Part 2 moves the sleep post to a new slug |
| 5 | 7, redirects | `/waitlist  /enquire  301` | Removed. A comment says `/waitlist` is its own page and Belle swaps the off-domain Jotform links | plan/11 page 26 and 4.25: a waitlist join is not an enquiry |
| 6 | 7, redirects | `/product-page/*  /gift-cards  301` | `/product-page/*  /retreats  301`, pending decision 13. `/gift-cards` keeps its URL, decision 16 | plan/11 Part 2 maps both store products to `/retreats` or `/retreats/<slug>` and keeps `/gift-cards` |
| 7 | 7, intro | "Every one is a 301." | "Every redirect is a 301, and the eight Wix placeholder pages return 410 instead. The full map is in plan/11 Part 2." | Matches the 410 list |
| 8 | 7, cutover step 4 | "12 redirects" | "every redirect and 410" | plan/11 Part 8 cutover crawls redirects and 410s |
| 9 | 7, cutover | Five steps | Step 6 added: de-index the old Wix site | plan/11 Part 4 search table and Part 8 cutover |

### Content model

| # | Section | Before | After | Reason |
|---|---|---|---|---|
| 10 | 2, diagram | "lead magnets, site settings" | "lead magnets, pillars, gallery, site settings" | New collections, see 25 and 26 |
| 11 | 2, venues | `region` enum `coastal \| vineyard \| adelaide` | `coastal \| vineyard \| city`, held back by a site setting | plan/11 4.26 names the `city` region value |
| 12 | 2, venues | No day capacity or distance field | `day_capacity` and `distance_from_adelaide` added | plan/11 4.10 section 3 shows both at a glance |
| 13 | 2, venues | "the `LodgingBusiness` schema" | "the `Resort` and `Place` schema" | plan/11 Part 4 search table sets `Resort` and `Place` on venues |
| 14 | 2, experiences | No status field, no URL comment | `status` enum added, and the slug comment shows `/experiences/contrast-therapy` | plan/11 Part 2 ships three experience pages lean, which needs the flag |
| 15 | 2, experiences | `pillar` with no note. No duration, steps, people, venues or questions | Pillar marked blocked on decision 1. `duration`, `session_steps`, `practitioners`, `venues` and `faqs` added | Each field feeds a section of the plan/11 4.8 template |
| 16 | 2, formats | `slug: eight-hour-immersive`, `name: The 8 Hour Immersive` | `slug: full-day-retreat`, `name: Full Day Retreats` | plan/11 page 7 is `/experiences/full-day-retreat`. The name is the live format name in plan/11 4.5 |
| 17 | 2, formats | `group_size: { min: 6, max: 20 }` | `group_size: null`, published per venue | plan/11 decisions 2 and 14. The figures are in conflict across sources |
| 18 | 2, formats | `time: "8:30"` | `time: "8:00"`, with the guide p.24 times noted | plan/11 4.7 and Part 7: "8:30" has no source |
| 19 | 2, formats | No dates field | `dates: []` renders `/retreats/<slug>` with `Event` schema | plan/11 4.26 dated retreat seam |
| 20 | 2, formats | `cta: { label: "Book a discovery call", href: "/enquire?format=eight-hour" }` | `cta: { label: "Plan your day", href: "/enquire?format=full-day" }` | plan/11 decision 15 and the 4.7 prefill `format=full-day` |
| 21 | 2, practitioners | `team` enum `wellness \| food_hospitality` | `hosts \| wellness \| food_hospitality`, and the slug comment shows `/team/belle-redden` | plan/11 4.15 section 3 has a hosts instance for Belle and Zoe. Page 16 is `/team/<slug>` |
| 22 | 2, testimonials | `context:` enum, no venue | `group_type:` with the same values, plus `venue` | plan/11 filters T5 on `group_type` (4.2, 4.3) and by venue (4.10) |
| 23 | 2, journal | Category enum with no status note. No pillar, recipe, references or end CTA fields | Enum marked provisional, decision 24. `pillar`, `recipe`, `references` and `end_cta` added | plan/11 4.13 section 7, 4.19 sections 4, 5 and 7, Part 6 item 67 |
| 24 | 2, FAQs | `topic` enum without transfers | `transfers` added | plan/11 4.25 lists transfers as an FAQ group |
| 25 | 2, lead magnets | `retreat-planning-guide` slug, file and landing URL | `private-group-guide`, second instance `corporate-group-guide` | plan/11 Part 2 guide instances |
| 26 | 2, new | No pillars collection. No gallery collection | Pillars collection for `/philosophy/<pillar>`. Gallery collection for `/gallery` | Every plan/11 template needs a collection. Pillar detail (4.13) and gallery tiles and filters (4.20) had none |
| 27 | 2, settings | "the booking link and the global SEO defaults" | Adds "the held-back city region switch" | plan/11 4.26 |
| 28 | 2, closing line | "Venues, experiences, practitioners, journal posts, testimonials, menus, FAQs and lead magnets" | Adds formats, pillars and the gallery | Matches the collection list |

### Funnel and Supabase fields

| # | Section | Before | After | Reason |
|---|---|---|---|---|
| 29 | 2, enquiries table | `group_size int`, `preferred_date date`, `budget_band enum`. No occasion, outcome, experiences, setting, consent or P5 tracking fields | `group_size_band`, `preferred_month`, `budget_band` optional and off. Added `occasion`, `team_outcome`, `experiences text[]`, `setting`, `marketing_consent`, `marketing_consent_at`, `owner`, `call_booked_at`, `call_completed_at`, `follow_up_at`, `value_aud`, the status enum values, and `list` and `subscription_interest` on subscribers | plan/11 Part 5, "What writes to Supabase" and "Other tables". plan/11 names these fields without types, so the types for the new columns are proposals for Dom to confirm |
| 30 | 6, funnel | Six steps: who, how many, what draws you over the pillars, when, coast or vineyard, details. "No step asks for an email before step 6" | Step 0 plus seven steps: who, occasion or team outcome, guest band, experiences, coast or vineyard, month and format, details. No dietary or budget question. "before step 7" | plan/11 Part 5 steps table |

### Dates, names and schedule

| # | Section | Before | After | Reason |
|---|---|---|---|---|
| 31 | 10, week four | "Cutover on Tuesday 07-10-2026 morning". Heading "revisions, cutover, handover". "Wix stays paid until 06-11-2026" | "Cutover on Tuesday 13-10-2026 morning, the day after week four ends". Heading "revisions and handover, cutover the next day". Wix paid until 12-11-2026 | 07-10-2026 is a Wednesday. plan/11 Part 8 recommends 13-10-2026 so Belle's staging feedback lands first. 12-11-2026 is 30 days after cutover. Jess decides before it is quoted to Belle |
| 32 | 10, weeks two and three | "All nine content collections", "The six-step enquiry funnel", "all roughly 35 URLs" | "All eleven", "The seven-step", adds the 410 list | Follows changes 26, 30 and 3 |
| 33 | 10, week one | "the home page hero and the first two scroll sections", "the real sand and sage palette" | Header, hero and the next three sections down to The Day. Real palette only if S1 clears by Friday 18-09-2026, otherwise a labelled neutral stand-in | plan/11 Part 8 prototype table and week one gates |
| 34 | 4, page weight | "Retreat formats", "The Places index" | "The Day, formats", "Places to Pause index" | Page names decided in register V and used in plan/11 |
| 35 | 8, bolt-ons | `subscription_interest` "on the coming-soon section" | "on the home page coming-soon section and on `/app`" | plan/11 4.22 gives the app its own page |
| 36 | 9 risk 9, and Unresolved | "Ray White, Burnside and Projects SA" | Adds "Ray White Projects SA and YNG Adelaide (plan/11 decision 11)" and asks whether Burnside is a third | plan/11 decision 11 |

### plan/11 may be wrong here

Nothing below was changed in either document. Jess decides.

1. **The publish flag has three names in plan/11.** It says "the `draft` flag" (Part 2), "a draft or published flag" (Part 4) and "`published: false`" (Part 8, week two). plan/10 uses one `status` enum, `draft | published | hidden`, on venues, and adds `hidden`, which a boolean cannot express. plan/10's single enum looks right. plan/11 should name `status` in all three places.
2. **plan/11 says plan/10 rejects redirecting junk to home.** plan/11 Part 2 says "Register T and `plan/10` both reject redirecting junk to home." The original plan/10 sent `/_partials/*` to `/` with a 301. plan/10 was wrong there and is now fixed (change 3), but plan/11 misdescribes the original.
3. **410 responses may not work from `_redirects`.** plan/11 returns 410 for eight URLs and puts them in the redirect map. plan/10 builds all redirects in `public/_redirects`. Whether Cloudflare Pages `_redirects` accepts a 410 status is **[not verified]** in either document or the fact sheets. If it does not, the 410s need a Pages Function. This is a gap in both documents, flagged so the week three redirect task does not assume it.

### Not changed, noted for Jess

- Week one in section 10 says Dom builds "schema for all six tables". Section 2 and section 8 define five: enquiries, questionnaires, downloads, subscribers and guests. RLS in section 6 covers four and leaves out `guests`. plan/11 does not settle the count, so the figure stays until Dom confirms.
- The "roughly 35 dead URLs" figure stays. plan/11 Part 2 notes the sitemap crawl found 33 and leaves the difference to the week one crawl.
