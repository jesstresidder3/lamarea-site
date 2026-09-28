---
title: Rebuild, final QA and handover
date: 28-09-2026
status: Internal, for Jess. Not for Belle. Nothing was sent, committed or built.
dev server: http://localhost:4322
---

# Rebuild, final QA and handover (28-09-2026)

## Where it stands

All 57 linked pages plus /enquire/thank-you and the 404 page load with **no console errors, no page errors, no broken images, no missing alt text and no sideways scroll** at 1440 and 390. With reduced motion switched on, no heading, text or image in `<main>` stays invisible. The results are in `qa/shots/rebuild/final/qa.json` and `qa2.json`, and the screenshots from this pass are in the same folder.

One thing to know before looking: the dev server still serves stale CSS for some components (noted by three earlier reviewers). The QA scripts block those stale files so the shots show the current CSS. **If a page looks wrong in a normal browser on 4322, restart the dev server first.**

## What changed, page by page

- **Home.** L1 rebuilt everything below the opening: the Fleurieu coast film with "La maréa was created as an invitation to pause.", the pinned 8 hour day, the experiences slider, the food strip, Places to Pause arches, Our difference, the pillar drift, guest words and the closing tide. In this pass I fixed the Places to Pause arches: with three venues now photographed, each arch was about 150px wide and the names spilled across the neighbouring arch. Names now size to their arch and the arch column is wider when there are three. On phones the map's "Adelaide" label sat on the heading, so it is hidden under 900px.
- **/private-groups.** Opens on Belle's own retreat edit (`retreat-day-edit.mp4`, portrait cut on phones), opening from the arch shape it had on home. The poster is the film's first frame (bare feet on the shoreline), not the lemon table, because /corporate already opens on that table. The shade behind the title is the stronger one, because the edit cuts through bright frames.
- **/corporate, /private-groups, /experiences/full-day-retreat.** The venue panels now show the venues' own photographs (they read the venue's `card_media`). Encounter Bay and Beresford Estate were empty sand panels before.
- **/retreats.** Stronger shade under the title and audience line, which sat on busy cliff rock.
- **L2 pages (/private-groups, /corporate, /retreats, the 8 hour page, /waitlist, 404).** The L2 opener now matches the shared one: the same eyebrow (Cormorant italic), line height, caption (the shared Caption with its hairline), line reveal timing and photo settle, and the same scroll motion (lines lift at different speeds and the photo settles). The arch and frame openings on /private-groups and /corporate are kept, so they still carry on from the home opening. The L2 facts strip stays.
- **Endings.** /private-groups, /corporate, /retreats, the 8 hour page and /gift-cards now end on the shared ClosingTide, like every other page: the arch that opens to full bleed, the "Plan your day" pill, the call note and Belle's motto said once. L2's own `pages/a/ClosingTide.astro` is no longer used by any page.
- **/fleurieu-peninsula-retreats.** Opens on DJI_0781, Belle's named coast clip (`coast-ochre-cliffs-topdown-drone.mp4`). It was first tried on home under "La maréa was created as an invitation to pause." and looked worse there: brown and darker, and the line crossed the ochre cliff tops, where the current DJI_0604 clip gives blue sky, a white beach and emerald water. The Fleurieu page used to open on the same DJI_0604 clip as home, so it now has its own.
- **/places/naiko-encounter-bay.** Unchanged. Its opener (the bright coast below the Bluff) is stronger than the venue's film, whose dusk exterior is dark. The film is registered as `c-naiko-encounter-bay-film` in `slots-page-c.ts`, ready if a place wants it.
- **L3 pages (experiences, places, food, Fleurieu).** Venue openers and photographs from Belle's Drive (Naiko at the Bluff, Deep Creek NAIKO-JUL23, Beresford), the venue meta reordered to setting, drive, then sleeps, and video tiles in the experiences slider.
- **L4 pages (story, philosophy, team, journal, FAQs, gallery and the rest).** Shared opener and closing on every page, Belle's ten pillar films on /philosophy, and real portraits for Belle, Jaimi, Kristian, Luca, Courtney and Malissa.

## Shared patterns (in `src/components/base/`, usage table at the top of `build/notes/shared-edits.md`)

1. P1 `PageOpener`, full-bleed photo or clip with the salt title at three indents, soft local shade and a tide reveal.
2. P2 `OffsetPair`, a large photo and a small detail with the words on an overlapping panel.
3. P3 `Caption`, a place or moment only, Cormorant italic after a short hairline.
4. P4 `Handover` and `data-ground`, a photo that opens to full bleed while the next section's words rise over it, and a page ground that eases from one section colour to the next.
5. P5 `ClosingTide`, the one ending for every page.
6. P6 `SlideStrip`, any row of three to ten items.
7. P7 hide and reflow, so a missing photo leaves no empty frame.

L2's `pages/a/PageOpener.astro` stays separate because it carries the arch and frame openings and the facts strip, but it now looks and moves like P1.

## Checks run

| Check | Result |
|---|---|
| Console and page errors, every page, 1440 and 390 | None |
| Sideways scroll (scrollWidth against clientWidth) | None |
| Broken images, missing alt | None |
| Reduced motion, content left invisible | None |
| Em dashes in `src/` | None |
| `text-transform: uppercase` in `src/` | None (only comments saying "never uppercase") |
| Hex colours not in `tokens.css` | Only light in-between tints of sand and salt in the placeholder tones (`Media.astro`, hidden with notes off), the day tints in `PinnedDay.astro` and the dawn to dusk tone in `motion.ts`, plus `#000` inside a mask. All are tints of the palette, so none were changed |

## Still open

- **Dev server restart.** Stale component CSS on 4322 (see above). Jess's call.
- **The retreat edit cuts quickly.** Belle asked for slow motion. The edit is her own and cuts about once a second, so on the /private-groups opener it is busier than anything else at the top of a page. If Jess or Belle find it too fast, a slower re-cut of three or four of its longest shots, or the deck still (`a-private-opener`, still registered), goes back with one line in `pages/private-groups.astro`. Headless Chrome cannot play H.264, so the moving version was not screenshotted, only its poster.
- **/corporate title legibility.** "retreats" crosses white plates on the lemon table photo at 1440. It passes at a glance but it is the weakest title on the site.
- **Places to Pause arches on desktop** are still small (about 200px each) beside the list. They read correctly now. A larger treatment is a design choice, not a defect.
- **Unused files.** `components/pages/a/ClosingTide.astro`, `components/pages/a/PathPage.astro`, and the slots `c-fleurieu-opener`, `a-private-opener` and `a-private-opener-phone`. Safe to delete once Jess is happy.
- **Dropbox shoot.** The 23 GB "Belle" folder from Georgia Evans (probably the professional shoot) cannot be opened on Jess's free Dropbox (2 GB). It needs a view-only link from Georgia or Belle, or an upgrade. Nobody has touched it.
- **Other Drive media not yet cut:** DJI_0605 (swimmer), "La marea summer video.mov" (1.7 GB), Naiko's "Naiko Retreat website video.mp4".

## Questions for Belle (one list, deduplicated)

Numbers in brackets refer to `build/questions-for-belle-26-09-2026.md` where the question already exists.

1. **Group size.** What is the smallest and largest group for a day, per venue? The live site says 6 to 10 and the guide says 10 to 14. The site shows "12 guests in our example day" until she answers (12, 40, 41).
2. **Pricing on the call.** May the site say pricing is shared on the discovery call? One line would then go on the closing band, /enquire, the thank-you page and the FAQs (42).
3. **Overnight stays.** Apart from the Women's Wellness Weekend, is any retreat overnight, and where do interstate guests sleep? The venue pages show "Sleeps" figures, which read as a stay (43).
4. **Practitioner photos.** Who is in each practitioner frame pulled from the "Wellness Partners" folders, and may the site name them? Portraits are still needed for Zoe, Sarah and Natalie.
5. **Guest consent.** Do the guests who can be recognised in the retreat photos and in her retreat edit agree to appear on the site (28)?
6. **Beresford Estate.** Permission to use the Beresford photos, and which building is which (the glass pavilion, any suite, the plunge pool, Beresford House). Nothing is captioned as a suite, pool or house until she says (30).
7. **Naiko photos.** Permission from Naiko to use their photographs and film for both Deep Creek and Encounter Bay, and confirmation of which Naiko is "Naiko Encounter Bay" (27).
8. **Encounter Bay drive time** from Adelaide. It is the only venue with none, and nothing has been invented.
9. **Standard or add-on.** Which experiences are part of every 8 hour day and which are paid add-ons, so each experience can carry "In the day" or "Add on".
10. **How guests leave.** One line in her words for how guests feel at the end of the day, for the closing section (34).
11. **Food captions.** Are the dish names under the food photos right (for example "Kingfish", "Finished at the pass", "The long table"), and which were served at which venue?
12. **Pillar names.** Her infographic says "Mental, Emotional & Spiritual Wellbeing" and "Heartfelt Hospitality & Luxury", the style guide says "Psychological Wellbeing" and "Luxury". Which are current (38)?
13. **Evidence pages.** References for the nine pillars that do not yet have a page (only Sleep and recovery has one) (39).
14. **Past retreat photos.** Photos from the Sunset Reset and the three named retreats for /gallery, or approval to show the Naiko retreat photos as "2025 retreats".
15. **Wildlife footage.** May her iPhone dolphin, seal and whale clips be used as they are on the Fleurieu page?
16. **Local businesses.** Which of the partner businesses are Fleurieu based? The site does not say until she confirms.
17. **Calls to action.** Should the buttons say "Plan your day" or name the discovery call with her (5)?
18. **Dropbox.** A view-only link to the Georgia Evans shoot, since the folder is too large for Jess's free Dropbox.

Belle asked on 28-09 whether we have questions and access to everything we need. That reply is the natural place for this list. Nothing has been drafted or sent.
