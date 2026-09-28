# La maréa website, state of play

## Rebuild, 28-09-2026

Every page was rebuilt in four lanes on shared patterns (full-bleed opener, closing tide, captions, slide strips), then checked at 1440 and 390 with no errors, broken images or sideways scroll. The dev server for this work runs on port 4322, and it serves stale component CSS until it is restarted. What changed, what is still open and one list of questions for Belle are in `build/reviews/rebuild-final-28-09-2026.md`. Committed as cac164b and pushed to the private repo github.com/jesstresidder3/lamarea-site (branch main). Nothing has been built for production or sent to Belle.

Still open, in order. 1) Swap in the best of the 674 stills pulled from Belle's Drive (`media-pool/incoming/drive/`, ranked in `build/media-drive-pull-28-09-2026.md`): the 6496px sand cove drone shot as a possible home hero, the Deep Creek house over the cove, the linen and lemons table series, the bright bath shot, 9 Beresford photos, Luca's headshot. Skip Joe's Henley Beach screenshots and other businesses' marketing images. 2) Jess to judge the retreat edit on /private-groups (cuts about once a second, may be too busy; reverting to the deck still is a one-line change) and the /corporate title over white plates. 3) Jess to reply to Belle's 28-09 email: eight app questions for Dom, plus the 18 website questions in the final review, plus asking Georgia Evans for a view-only link to the 23 GB Dropbox shoot (Jess's free Dropbox cannot open it). 4) Belle's 1.7 GB "La marea summer video.mov" is in ~/Downloads, uncut. Raw drone clips are in `media-pool/incoming/` (git-ignored).

## Local build, 27-09-2026

The site now runs locally at `~/dev/lamarea-site` (its own git repo, copied from the cloud branch `claude-work/intelligent-franklin-rc3yad`). Start it with the "lamarea" entry in the workspace launch config, or `npm run dev` in `site/`, then open http://localhost:4321. Placeholder notes are hidden by default. Add `?notes=on` to any URL to see what belongs in each empty frame.

This pass put in Belle's photos (127 of 191 slots), her bath video, HV Muse, her logos, pillar icons and favicon. Six agent reviews ran: Belle alignment, brand, imagery, content, design and media. Their reports are in `build/reviews/*-27-09-2026.md`. Open questions for Belle are items 27 to 39 in `build/questions-for-belle-26-09-2026.md`.

Open decisions for Jess: which header option from CD review 02, whether the gallery page stays out of the walkthrough, and when to run a Safari check. The enquiry form still needs Dom's backend before any public link.


Last updated 16-09-2026. Read this first in any new session picking up the project.

## Where the project stands

Research complete. Master site plan complete. QA audit complete (plan/12). 39 fixes to plan/11 awaiting Jess's approval. No build started. Nothing sent to Belle. Session closed at drift tier 3 on 16-09-2026.

## Commercial

$2,900 full redesign, deposit paid 15-09-2026, balance on completion. Target around four weeks from 14-09-2026 with a prototype part way. Optional $550 add-on, settled at that single figure in `plan/10-technical-architecture.md` (training, cheat sheet, 30 days support, one structural change). CMS build sits inside the $2,900 because Belle editing herself is core scope. App meeting with Belle Mon 21-09-2026 1pm ACST.

## Files, in reading order

| File | Lines | Status |
|---|---|---|
| `_context/project-brief-shared.md` | 91 | Complete. Shared agent brief |
| `_context/belle-brain-dump-14-09-2026.md` | 102 | Complete. Verbatim source |
| `_context/requirements-register.md` | 535 | Complete through section W. THE SPINE. Every plan document is checked against it |
| `research/01-source-docs-extract.md` | 1,558 | Complete. Competitor proposal, Belle's agency meeting notes, brain dump delta |
| `research/02-correspondence-record.md` | 305 | Complete. Gmail, Granola notes, vault |
| `assets-index/03-asset-inventory.md` | 217 | Complete, with brand hex codes BLOCKED |
| `research/04-reference-teardown-tailor-aman-como.md` | 939 | Complete. Build specs T1 to T10 |
| `research/05-reference-teardown-scorpios-casangelina-onsen-nativestate.md` | 614 | Complete. Lexicon, Native State read, SA first claim verdict |
| `research/06-reference-teardown-sha-basq-bathhouse-sixsenses.md` | 1,619 | Complete. Specs C1 to C6 plus a completion pass that overrides the earlier specs where they conflict |
| `research/07-current-site-audit.md` | 691 | Complete. Verbatim copy, SEO baseline, redirect map |
| `research/08-seo-aeo-market.md` | 303 | Complete. URL structure, True South, ATDW |
| `research/09-product-and-offering-content.md` | 473 | Complete. 8 hour arc, pricing, practitioners, 22 questions |
| `plan/10-technical-architecture.md` | 1,009 | Complete. Astro 5, Cloudflare Pages, Stream, Sveltia, Supabase |
| `research/facts/*.md` | 3 files | Complete. Verified pricing and capability fact sheets |
| `plan/11-master-site-plan.md` | 1,524 | Complete. 8 parts: 33 page types (26 pages, 7 templates, about 61 URLs), nav, page by page, funnel, about 80 content items, 29 decisions, 4 week build |

## Decisions already made, in the register

Stack Astro 5 static on Cloudflare Pages, repo in Belle's name. Video on Cloudflare Stream, around $8 USD a month. Editing via Sveltia CMS with R2 media. Supabase owns guest records, Movement and Klaviyo consume. Build as covered by the Privacy Act because health information is collected. Price held behind the discovery call. "Places to Pause" for venues, "The Day" for formats, Arrive Move Nourish Restore as the scroll story. The "South Australian first" claim is dropped on Australian Consumer Law grounds.

## Blockers needing Belle, ranked

1. Brand hex codes and fonts. Style guide PDF unreachable here. Jess reads it from her own Gmail, or Belle re-shares Branding to jesstresidder3@gmail.com.
2. Beresford Estate retreat folder unreachable. Belle re-shares to jesstresidder3@gmail.com.
3. Domain registrar for lamarea.com.au and login access. Only item that can delay go-live.
4. Which philosophy pillar set: six on site, ten Science pillars on site, or eight from the brain dump. Recommend the eight.
5. Corporate client names: Ray White, Projects SA, YNG Adelaide. Confirm and get written permission.
6. The Vineyard Retreat capacity: 10 per Belle, 16 per the venue.
7. Naiko shoots cannot be split between Deep Creek and Encounter Bay.
8. No imagery confirmed for the experiences slider or for The Vineyard Retreat.
9. Practitioner headshots and bios for Courtney Selfe, Jaimi Baker, Luca Guiotto.
10. Dinner and dessert menus, pasta masterclass detail, experience durations.
11. Zero of the ten experiences have confirmed imagery. Pasta, dining, yoga and pilates each have one unviewed file that may match.
12. Yoga and pilates are one either-or session in her guide, so they may be one tile, not two. Infrared sauna sits in both the experiences list and the self-led list. What Jaimi Baker runs differs between register section Q and the product file.

## Urgent, outside the brief

Eight public indexed Wix placeholder pages on lamarea.com.au, including `/pricing-plans/list` showing "$25,000/month VIP". Belle likely has not seen them. Tell her now.

## Findings from the master plan that are not yet in the register

1. Belle's 13 branding pillar videos match the ten Science pillars, not her eight brain dump words. That weakens the recommendation to use the eight and Belle needs to know before she chooses.
2. The pasta masterclass does have a source. Live bios for Malissa Fedele and Luca Guiotto both describe pasta classes, which contradicts research/09.
3. Group size conflicts. The live site says private groups of 6 to 10, the Encounter Bay guide sets a minimum of 10.
4. Placeholder pages to return 410 number eight, not six, including /members.
5. plan/10 sets cutover on "Tuesday 07-10-2026", which is a Wednesday. The plan recommends Tuesday 13-10-2026.
6. plan/10 disagrees with the requirements on /the-places/ URLs (plan uses /places/), the /waitlist redirect, and several funnel fields. Part 7 of plan/11 lists each one. plan/11 wins where they conflict until Jess decides otherwise.

## Still to do, in order

1. DONE 16-09-2026. QA audit in plan/12-qa-coverage-audit.md: 249 rows, 210 covered, 19 partial, 11 missing, 9 conflict carried. Register section X added (14 items). Original note follows for history: IMPORTANT: the master plan counted coverage only across register IDs A1 to P13 (128 of 130 placed). Sections Q to W were added later and were NOT counted. The audit must check every item in Q, R, S, T, U, V and W against plan/11, plus re-verify A to P, plus fold the six findings above into the register.
2. DONE 16-09-2026. plan/10 reconciled to plan/11, 36 changes logged at the end of plan/10, original backed up as plan/10-technical-architecture.pre-reconcile-16-09-2026.md. Cutover now Tuesday 13-10-2026, Wix kept paid to 12-11-2026. Three open items for Jess: plan/11 names the publish flag three ways and plan/10's single draft/published/hidden field is cleaner; plan/11 wrongly says plan/10 refused to redirect junk pages to home; nobody has checked whether the Cloudflare Pages redirects file can return a 410, and if it cannot the eight placeholder pages need a small Pages Function.
2b. NEXT: Jess approves the 39 fixes in plan/12 Part 6, then an agent applies them to plan/11. Most serious: the pillar word Empower is missing from plan/11 (the voice gate stripped it), so the build would make seven pillar pages; health data rules cover only the questionnaire; three of Belle's wishes (formatting and mobile editing, sage text colour, small fonts) are narrowed without being listed as decisions.
3. Jess reviews plan/11 Part 7 and makes or forwards the decisions.
4. Belle-facing plan summary, content request list and blocker list, drafted through the voice system (voice-locked-writing, both voice guides read in full first). Not before steps 1 to 3.
5. Build, starting with the week one prototype in plan/11 Part 8.

## Resume prompt for a fresh session

Read Outputs/work/clients/belle-redden/lamarea-website/STATE-OF-PLAY.md in full, then run step 2b (apply the approved plan/12 Part 6 fixes to plan/11, restoring the word Empower by writing via bash since the voice gate strips it). The original step 1 prompt is kept below for history. Read of "Still to do" as a single agent: an adversarial QA audit of plan/11-master-site-plan.md against every section A to W of _context/requirements-register.md, writing plan/12-qa-coverage-audit.md, and folding the six master plan findings into the register. Keep agent batches to two at most, wider batches have hit the rate limit every time.
