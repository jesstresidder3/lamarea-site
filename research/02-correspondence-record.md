---
voice-verbatim-source: Gmail threads 1a073fec79d4a3c2 and 1a079c015428a75a, Granola meetings 471ab6a3 (08-09-2026) and dfeaaa37 (10-09-2026), plus the vault files listed below
note: Internal correspondence record for the La maréa website rebuild. Everything outside the brain dump and outside the main website thread 1a083c0e6c44918e. Belle's words are quoted verbatim. Nothing here is invented.
---

# La maréa correspondence record

Sources covered, all read 16-09-2026.

- Gmail thread `1a073fec79d4a3c2`, the 1:1 AI session correspondence, 05-09-2026 to 09-09-2026.
- Gmail thread `1a079c015428a75a`, Belle's workshop prep form answers submitted through untwisted.com.au/belle on 07-09-2026.
- Gmail search "lamarea OR marea OR Annabelle OR abperformancenutrition" returned 13 threads. Everything not listed here is a calendar invite, a Drive share notice or unrelated.
- Granola `dfeaaa37-a40a-4d93-bd73-0ca5ba6ce72a`, "La Maraya website redesign, pricing, setup, and Claude editing", 10-09-2026.
- Granola `471ab6a3-aab4-411e-9d8e-df6383899bc8`, the 1:1 AI workshop, 08-09-2026.
- `Outputs/work/clients/belle-redden/belle-website-call-prep-10-09-2026.html`
- `Outputs/work/clients/belle-redden/deliverables/belle-session-recap-source-08-09-2026.html`
- `Brain/life/meetings/claude-ai-implementation-projects-connectors-and-automation-setup-with-annabelle-08-09-2026.md`
- `Brain/life/` grep for "marea" and "Annabelle", which hit `people.md`, `daily-log.md`, `daily/2026-09-10.md`, `meetings/_action-items.md`, and the email captures for 06-09, 08-09 and 09-09-2026.

One caveat on the call material. Both Granola meetings sit on the free tier, so `get_meeting_transcript` returns "Transcripts are only available to paid Granola tiers". Everything attributed to the 08-09 and 10-09 calls comes from Granola's own notes and its query layer, which quotes the transcript without exposing it in full. Where a line is Granola's summary wording rather than Belle's, that is stated. Confirm anything load-bearing with Belle before it goes in the build.

---

## Timeline

All dates DD-MM-YYYY, all times ACST.

| Date | Interaction |
|---|---|
| 05-09-2026 | Belle enquires through the form on jesstresidder.com as Annabelle Buttery, belle@lamarea.com.au: "Hey! Looking for a private session". |
| 06-09-2026 | Jess quotes a $595 two hour private AI workshop with a refund guarantee. Belle accepts the same morning: "Happy with pricing no worries". |
| 06-09-2026 | Jess proposes Tue 08-09, 1pm to 3pm, online, asks Belle to install Claude Pro desktop, and sends the four question prep form at untwisted.com.au/belle. |
| 06-09-2026 | Belle confirms the time and says "i've got no idea on tools so very happy to go with what you suggest - Claude pro!". |
| 07-09-2026 | Jess sends Belle a free Claude Pro week referral link. |
| 07-09-2026, 12:13pm | Belle submits the workshop prep form, roughly 2,800 words on how she runs both businesses. This is the richest operator document in the file. |
| 08-09-2026, 9:08am | Belle emails her pre-session questions, covering AI across seven business areas, tenders and grants, website design tools, video content, and building a La maréa wellness app on Movement App Software. |
| 08-09-2026, 10:04am | Jess replies, asks her to add Claude connectors beforehand, and confirms she will record and transcribe the session. |
| 08-09-2026, 1:00pm to 3:00pm | The 1:1 AI workshop runs. Two Claude accounts, connectors, projects, skills, scheduled tasks. The website rebuild comes up for the first time, quoted at roughly $700 against a web company's $3k to $7k. |
| 08-09-2026, 6:44pm | Jess sends the Zoom recording, the recap page at untwisted.com.au/annabelle (password JessxBelle), the prompt library PDF and the invoice. |
| 09-09-2026, 8:35am | Belle pays the invoice, leaves a Google review, and asks the two questions that shape this build, data protection and how she edits the site herself. |
| 09-09-2026, 12:30pm | Jess answers data and privacy in writing, covering Claude Pro and SOC 2 Type II, Supabase as the single client database, 2FA, and the Claude API as a scoped connection. She offers either an admin area or Claude editing, "your preference". |
| 09-09-2026 | Belle meets the competing agency, Flow Cre8tive (Danielle Mountford). The website quote thread `1a083c0e6c44918e` starts the same day. |
| 10-09-2026, 12:00pm | The 30 minute website redesign call covers scope, the Wix exit, domain ownership, Claude editing, pricing, timeline, and AB Performance Nutrition as phase two. |
| 10-09-2026 | Jess writes the call prep document that morning, including the Flow Cre8tive tier analysis and the site audit faults. |
| 14-09-2026 to 15-09-2026 | Brain dump, Drive folders, deposit invoice #306 and payment. The shared brief covers all of this, so it is not repeated here. |
| 15-09-2026, 10:12am | Belle sends a calendar invite for "La maréa app discussion", Mon 21-09-2026 1pm to 1:30pm, from belle@abperformancenutrition.com.au. |

---

## Requirements found outside the brain dump and outside the main email thread

Every item below has been cross-checked against register sections A to O, and only new material is listed. Where an item sharpens an existing requirement rather than adding one, that is said in the entry.

### P1. Belle must be able to edit the site herself

Her words, in the email of 09-09-2026 on thread `1a073fec79d4a3c2`:

> "I would just need to understand how client data is protected if i'm using an AI site and how i can go in and easily edit the site and update it etc."

No register item covers editing at all, and the shared brief treats the $550 Claude editing setup as optional. Belle raised self-editing unprompted, before any quote existed, as a condition of going ahead. It belongs in the register as a Must rather than an add-on.

### P2. The editing setup has to cover the changes she already makes herself

From the workshop prep form, 07-09-2026, answer 1, section 10:

> "I make website changes myself rather than having a full-time web/design team. For La maréa I use Wix, and for ABPN I use Shopify. Tasks include: Updating website copy. Adding/changing images and videos. Updating offers/packages. Creating landing pages. Adding forms. Updating blogs. Fixing formatting. Improving mobile layouts. Creating lead-generation pages. Updating links and CTAs. Thinking about SEO. Trying to improve the overall customer journey."

That list is the acceptance test for the editing handover. Copy, images, video, offers, landing pages, forms, blog posts, links and CTAs all need to be hers to change. Landing pages and forms are the hard two, and both are on her list.

### P3. Leaving Wix entirely is the requirement, not an option

Granola's rendering of Belle's words on the 10-09-2026 call:

> "There's no point if I don't need to keep paying Wix"

Her condition, per the same notes, is confidence in the security and in keeping the site if AI changes. Gift cards, the two Jotform waitlists and whatever sits in the Wix backend all have to be dealt with before the plan is cancelled, which is covered under constraints below.

### P4. Guest data has to stop being spread across tools, and the site is where that starts

From the workshop prep form, answer 1, section 5:

> "For La maréa I currently use Jotform for questionnaires and collecting guest information. I need a better long-term solution for storing: Guest details, Contact information, Dietary requirements, Injuries/limitations, Retreat questionnaires, Preferences, Forms/waivers, Retreat attendance/history, Feedback, Notes, Future communication/marketing information"

> "Ideally, I don't want guest information spread across Jotform + Gmail + Excel + Notion + the app + random folders."

Register item O15 covers where guest data is stored as a trust objection. This is a bigger ask. She wants the new backend to replace Jotform as the store of record for guest questionnaires, dietary requirements, injuries and waivers. That is a data model decision for the Supabase build, and it costs twice if it is made after launch.

### P5. Site enquiries have to arrive somewhere she can track

From the prep form, answer 2 and answer 1 section 2:

> "also a streamlined CRM dashboard for each businesses with easy to understand lead tracking etc. - all over the place and nothing is in one spot atm!!"

> "Leads generated → lead source → who owns the lead → discovery/roadmapping calls booked → calls completed → conversion rate → new clients/sales → revenue → outstanding follow-ups."

The stepped enquiry funnel in A5 needs to write a lead source and a timestamp into Supabase rather than only emailing her. She has already named the fields she wants to report on, so there is no guesswork in the schema.

### P6. Email capture on the site connects to Klaviyo

From the prep form, answer 1, section 9:

> "Both businesses use Klaviyo. My tasks include creating campaigns, writing emails, choosing images, building lead magnets, creating sign-up forms, managing lists"

Klaviyo appears nowhere in the register. Any newsletter signup, lead magnet download or post-enquiry nurture already has a home, and it is not a new tool she has to learn.

### P7. Gated lead magnet downloads are part of the site's job

From the prep form, answer 1, section 1:

> "Create lead magnets and then promote them through social media/email."

The call prep names a private guide as a download on the private retreats page. One mechanism serves P5, P6 and P7 together: gated download, Klaviyo list, lead record in Supabase.

### P8. Instagram and ManyChat are a live inbound path the site has to receive

From the prep form, answer 1, section 1:

> "For La maréa, I am also exploring ManyChat to turn Instagram engagement into automated conversations, lead capture, downloads and bookings."

Traffic arriving from a ManyChat flow arrives on a link, not the home page. The lead magnet and enquiry pages therefore need to be addressable on their own, with tracking that survives an Instagram referral.

### P9. The app may be built on Movement, and she wants to know whether it holds the guest records

From her email of 08-09-2026:

> "I'd also love to explore building out a La maréa wellness app this year - i'm looking at Movement App Software"

From the prep form, answer 1, section 5:

> "I am exploring launching a white-labelled wellness app using the software Movement, and I would love to understand whether this could become part of the guest management/onboarding system or whether I need a separate CRM/database."

Register items K5 and K6 record the app decisions as open. This names the candidate platform, a white-labelled product at movement.so, and reframes the question. The decision is not only whether the app connects to the site, it is whether the app or the site owns guest records. ABPN already runs a white-labelled app called Kahunas, so she has lived with this pattern before. This is the substance of the 21-09-2026 call.

### P10. AB Performance Nutrition's phase two priorities are already on record

Granola notes from the 10-09-2026 call, quoting Belle:

> "The key things… I want to push are the subscriptions and the high school services."

The same notes say AB is a simpler refresh with less visual intensity, the content priority is nutrition education sessions and workshops for high schools and sports clubs plus ongoing one to one nutrition subscriptions, ebooks and some meal plans may stay, and the conversion mechanism is unresolved (enquire, submit a form, or buy the subscription outright). She hoped for it by year end.

### P11. The brief has ABPN on the wrong platform

The shared brief records AB Performance Nutrition as Squarespace. Two independent sources say Shopify. Belle in the prep form, answer 1, section 10: "For La maréa I use Wix, and for ABPN I use Shopify." The 08-09 workshop notes list Shopify among the connectors set up, and the 10-09 call notes say AB is currently on Shopify. The phase two quote depends on the platform, so the brief needs correcting before that quote goes out.

### P12. The corporate proof has a name, and two spellings of it

Register item I7 says to weight testimonials toward private and corporate groups. The asset is a corporate retreat for Ray White Burnside, a group of 5, running roughly three weeks from 08-09-2026, plus the Ray White Dropbox folder already in the brief. The call prep names "Ray White Projects SA" as the corporate proof point. One of those two is going on a page, so confirm which before it does.

### P13. Site faults surfaced by the competitor's audit

These came from Flow Cre8tive and are recorded in the call prep. They are facts about the current site rather than requirements Belle stated, and Jess's own note says to attribute them lightly. They still have to be handled at launch.

- Elements sit outside the page grid, so every page scrolls sideways and the logo is clipped in the header. Same failure as O12.
- The homepage title tag is a keyword pile: "La maréa luxury retreats | luxury retreats south australia | Fleurieu Peninsula, Inman Valley SA, Australia".
- The brand name appears in three spellings across the web, La maréa, La Maréa and La Marea, which splits the entity signal for Google and for AI answers. Fixing it is part of N5.
- Two waitlists run on Jotform, taking visitors off her own domain.
- Members area, Store, online programs and pricing plans were installed and never used, roughly 35 URLs.
- Gift cards currently run on the Wix Store.
- Seven practitioner profiles are seven hand-built pages, which should be one template and one collection. That sharpens I1 through I3.
- Searches for "luxury wellness retreat South Australia" return southaustralia.com, Well Traveller and her own partner Naiko ahead of her.

---

## Commitments Jess has made

Quoted with the source, so the build cannot under-deliver on any of them.

On ownership, from the 10-09-2026 call notes:

> "Once you have your website, you should have your website and you should have full control over it."

On not being locked to AI, the same call notes record Jess saying that if Belle no longer has AI access, "that's fine because you've still got a website", with manual file-based edits still possible. She had said the same about tools generally in her email of 06-09-2026:

> "note: we'll build the systems + context so you're never locked into one AI tool & can easily move!"

On how Belle edits, from the email of 09-09-2026:

> "For the website/app, we can explore building a simple admin area where you can log in and change your own services, pricing, photos and text without needing to touch the code or we can set it up within your Claude (so you can edit within claude - your preference, which I can run through in detail later)"

Two models were promised there and the choice was handed to Belle. She has not chosen either one in writing.

On data and privacy, from the same email:

> "with Claude Pro/enterprise accounts, Anthropic has SOC 2 Type II certification and commercial Claude conversations aren't used to train models by default."

> "Keep client information in one secure database (e.g. Supabase), rather than across AI chats"

> "your database holds the client information securely (i.e. form answers or client info), the website = collects/displays infomation (like the form for clients to fill in), and Claude only accesses what it needs to do the job (less data risk, better for privacy)"

She also committed to the API pattern, scoped access rather than whole-database access, and to 2FA with unique passwords across Claude, email, website and database.

On the workshop, from the email of 06-09-2026:

> "My private AI workshops are $595 (2 hours), and I'm confident it'll pay for itself in the time you get back Belle (quite literally within a week) otherwise I'll refund you!"

Belle has paid and left a review, so the guarantee is spent, but the standard it set carries into this build.

On AB Performance Nutrition, the 10-09-2026 notes record Jess saying she would consult Dom and send a separate quote and timeline within a week. That week has passed. As at 16-09-2026 the brief records AB as quoted at $2,900 bundled and not proceeding, pending the app quote.

On the process, the same notes describe an iterative build: Jess and Dom produce a first version, Belle gives feedback in the form "I like this, I don't like this. Can we change this? Can we add that?", and a final handover call covers both manual and Claude editing.

And a standing offer, from the email of 08-09-2026:

> "Please don't be a stranger, Belle - feel free to email me anytime with questions or if I can help further with AI, your website, apps or systems setup etc."

---

## Constraints and unknowns

Belle told the competing agency in writing that her budget was $1,500 to $2,000 (call prep, 10-09-2026). She has since paid a 50% deposit on $2,900, and the Granola note records her as open to increasing the budget for the full scope. Her own retreat economics are the justification Jess planned to use: a weekend retreat at $3,150 per person, so one private group of six is $18,900. The AB site and the app sit behind the same budget, which is why she wants the app quoted before committing to AB.

There is a $700 problem sitting in the file. At the 08-09 workshop Jess quoted roughly $700 to rebuild the La maréa site in Claude and Vercel, against the web company's $3k to $7k. The action item in `_action-items.md` still reads "Confirm the La Marea website rebuild with Jess (~$700 in Claude/Vercel, full edit control going forward)". Jess's own call prep flags it: "You said ~$700 in the 08-09 session. That was for a straight rebuild of the existing site... Name the difference out loud before she does." The final figure is $2,900. Confirming in writing what changed keeps it from resurfacing at the balance invoice.

The Claude editing price is recorded four different ways. Roughly $500 and then roughly $400 on the 10-09 call, $350 in the call prep, $550 in the shared brief. Nothing has gone to Belle in writing yet, so one number needs picking before it is quoted.

Domain ownership is still open. On the 10-09 call Belle said she was "pretty sure" she owns the domain but needed to check whether it is independent or held through Wix. Granola renders the domain as `lamaraya.com.au`, which is a transcription error for `lamarea.com.au`. AB Performance Nutrition is on Crazy Domains. The La maréa registrar is unconfirmed as at 16-09-2026, and it is the one item that can delay go-live on its own.

The Wix plan is a black box. Renewal date, annual cost, and what is stored in the backend (contacts, past enquiries, gift card records) are all unknown. So is whether her email runs on Google Workspace or on Wix, which decides whether the MX records get touched at all.

Gift cards sell through the Wix Store today, and no plan exists for them off Wix. Two Jotform waitlists are live and collecting people off-domain, with no answer on where those contacts go or whether they migrate.

The app decision waits on the 21-09-2026 call. Until it is quoted, Belle will not commit budget to AB. The site has to carry the 2027 coming soon section in K1 without depending on an app nobody has chosen yet.

The AB Nutrition decision sits behind the app. Quoted at $2,900 bundled, not proceeding, priorities are subscriptions and high school services, platform is Shopify, conversion mechanism undecided, and her hope was year end.

On assets, some drone footage is her husband experimenting rather than a professional shoot, and the Naiko raw video is still on a hard drive. She expects to reshoot over summer. Partner permission to use venue footage and venue brand names has not been confirmed for any of the four venues.

One date to design around: from 10-12-2026 the Australian privacy reforms apply, and the privacy policy needs to name where guest data is stored and who processes it. Cheap at build time, expensive afterwards.

---

## Belle as an operator

She is not a website client who will disappear until launch, and she is not a technical one either. Two things are true at once. She is capable, and she is at capacity.

She runs two businesses alone and switches context constantly. From the prep form:

> "I run two very different small businesses simultaneously, so there isn't really a 'typical' day for me."

> "At the moment, I feel like I'm juggling a lot and wearing every hat across both businesses. I can move from answering a nutrition client email, to creating an Instagram Reel, to contacting a retreat venue, to writing client consultation notes, to building a retreat proposal, to following up a lead.. sometimes within the same hour!"

Her core frustration is working in the business rather than on it:

> "I feel like I spend so much time working IN the businesses - emails, admin, content, proposals, Canva, logistics and reactive tasks that I don't have enough protected time to work ON the businesses."

> "At the moment, I feel like the admin and content creation required to keep two businesses running is actually taking time away from the activities most likely to grow them!!"

The website is one of those growth activities. Every minute the new site costs her to maintain comes back out of the time it was bought to create.

She is a self-aware beginner with AI and says so plainly, in the emails of 06-09-2026:

> "i am such an amateur when it comes to AI"

> "i've got no idea on tools so very happy to go with what you suggest"

The workshop overwhelmed her, and she said so cheerfully the next morning:

> "Wow yesterday was amazing - thank you so much!! Yes feeling overwhelmed but really excited!!"

Granola's summary of the same session describes her as overwhelmed, wearing too many hats, and unsure where to start with AI. Jess had pre-empted it in the recap email: "it's completely normal to feel a little overwhelmed... we packed a LOT in".

That shapes the editing handover more than anything else in this document. She left a two hour workshop with roughly twenty prompts, five scheduled tasks, two Claude accounts, a connector list, a ChatGPT memory migration and a Jotform build on her list. The website editing setup arrives on top of all of it. It has to be one mechanism she can describe in a sentence. If it needs a cheat sheet, it will go unused and she will email Jess instead, which is the $120 per month care plan by accident.

She has also told us she does not want more software:

> "I don't necessarily need to add lots more software. I need to work out how to connect, simplify and automate what I already have, remove repetitive tasks and create better systems across both businesses."

> "I'd particularly like to identify tasks that AI can do 80–90% of for me, leaving me to review, personalise and approve the final output rather than starting everything from scratch."

That 80 to 90 percent framing is the right shape for the editing setup too. She reviews and approves, she does not start from a blank page.

She is poor at file management and knows it:

> "information is spread across Gmail, Notion, Excel, forms, apps and desktop folders. I need better systems in place for storing files and info - i'm so bad at this!!"

Anything the build hands back as a folder of files will go missing. The asset swapping in M6 needs to work from a place she already opens.

Three worries come up repeatedly, and the competing agency planted all three: editing, guest data security, and whether Google will still find her. She has now put all three to Jess directly. They are objections to close in the prototype walkthrough rather than features to add.

She moves fast when she trusts someone. Enquiry to paid workshop in one day. Workshop to paid website deposit in six days. Review left unprompted. Two calendar invites sent by her, not chased. She also tells the truth about money, since she gave the competitor her real budget in writing.

She will not accept a compromise on the look. Her line to the competitor, recorded in the call prep, is that the site done late last year is very far off the mark, and she would rather wait than do a mini redesign and have it still be a bit meh.

---

## Open questions for Belle

Ordered by what blocks the build soonest. Items already sitting in the register's open decisions are not repeated.

1. Where is lamarea.com.au registered, through Wix or a separate registrar? This is the only unknown that can delay go-live, and she has been asked once already.
2. What is she paying Wix a year, and when does it renew? If the domain is bundled, we either transfer it out or keep the plan alive for the domain alone.
3. Does her email run on Google Workspace? The answer decides whether MX records get touched at all.
4. Which editing model does she want, a login admin area or Claude editing in plain English? Jess offered both on 09-09-2026 and gave her the choice. It changes the build and the price.
5. Does she want Jotform replaced? Guest questionnaires, dietary requirements, injuries and waivers either live in the new database or stay where they are, and the answer shapes the schema.
6. Should site signups flow into Klaviyo, and onto which list?
7. Are the two Jotform waitlists still collecting, and where do those contacts live?
8. Is she selling gift cards, and how many? That decides whether we rebuild the gift card flow or park it.
9. Is the app being built on Movement, and if so, does the app or the website hold guest records? That is the 21-09-2026 call, and it settles K5 and K6.
10. Does she have written permission from Naiko, Beresford Estate and The Vineyard Retreat to use their property footage and brand names on her own site?
11. What does she need to know before a discovery call? Group size, dates, occasion, budget, dietary, location. That list is the enquiry form, and nobody has written it down yet.
12. What booking tool sits at the end of the funnel? Her signature carries a Google Calendar booking link, so confirm it stays.
13. Is the corporate retreat client Ray White Burnside or Ray White Projects SA? Both appear in the file and one of them is going on a page.
14. Is she happy for Jess to rewrite copy, or does she want her existing words kept? Her FAQ and philosophy copy are already strong.
15. What does the site have to do by summer for her to call this money well spent? A number is the answer here: enquiries per month, calls booked, groups closed.
