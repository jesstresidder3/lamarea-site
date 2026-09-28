# Feedback round, 28-09-2026: verification

Every item from `build/notes/jess-feedback-28-09-2026.md`, checked on the dev server at 1440 and 390.

## Everywhere

- G1 done. Text over photos and video sits on the shared sand glass panels (`utilities.css`, `.on-media-panel`). Measured on real pixels on every lane: small text 8.1 to 10:1, headings 4.8 to 6.3:1. The header strip was the last failure (wordmark 3.7 to 4.45:1 over dark openers). This pass raised it from 72% to 86% opaque in `layout/Header.astro`, and it now measures 4.8 to 5.4:1 on the worst pages (/experiences/relaxing-by-the-fire, /fleurieu-peninsula-retreats, /private-groups).
- G2 done. One grade for every photo and clip from `Media.astro`, values in `tokens.css`. No component sets its own image filter.
- G3 done. Header shows 'Plan your day' and 'Contact us', one split pill under 640px.
- G4 done. `base/CtaPair.astro` on header, menu, every closing, CtaBand, PinnedDay, PlanClose, DayInBrief.
- G5 done. No subtext under any main button.
- G6 done. No phone number, `tel:` link or `contact.phone` anywhere in `src`.
- G7 done. /contact, linked from header, menu and footer.
- G8 done. Testimonials moved up on home, /private-groups, /corporate, /experiences/full-day-retreat and venue pages.
- G9 done, except Natalie Jane (blocked, below). Empty frames filled on the funnel, two venue bands, Zoe and Sarah's profiles and the pasta page.

## Home

- H1 done. Opening clip re-cut to 13 seconds.
- H2 done. Headline on title panels, 6.7:1.
- H3 done. 'Choose the one that suits your group' prompt (data-draft) and a pill button on each world label.
- H4 done. New calm sea clip, words sit over water, 4.9:1 and up.
- H5 done. Experiences straight after the story, larger heading, softer frames.
- H6 done. The day moved to just before the close, framed as an example. This pass also changed the shared label in `settings.ts` and the experience pages to 'See an example of the full day'.
- H7 done. Our difference straight after experiences, then food and Places to Pause.
- H8 done. 'Restore. Reconnect. Realign.' kept, button pair, no line under it.

## Retreats, private groups, corporate

- R1 done. First photos below the opener load eagerly, the 8 hour block no longer waits on a reveal. Page never rendered blank in any test.
- R2 done. 'Choose your retreat' straight after the opener, day block trimmed.
- P1 to P4 done. One-column FAQ with lists for long answers, 'Questions' headings gone, guide line gone, no subtext.
- C1 done. 3 opener facts, detail photo removed, lighter statement, includes list in its own band.

## Journal

- J1 done. Only eyebrow and masthead on the photo, both on panels, intro moved below.
- J2 partly done. The four articles on the site are fixed (duplicate references, title panels, recipe layout). Blocked: 'A message from Preventive Health' and 'South Australia brings you the simple pleasure of a long lunch' are not on the new site. They look like live lamarea.com.au articles and need Belle's text.

## Plan your day

- E1 to E4 done. Calmer aside with the testimonial kept, auto-advance after single answers, 'Next' button, vineyard and thank-you photos filled.

## Delivery

- D1 done. Built site in `static-html/` with a README. Serve it with `npx serve static-html`.

## Checks this pass

26 pages at 1440 and 390, normal and reduced motion (`qa/zz-final-sweep.mjs`): no page or console errors, no sideways scroll, no broken images, no missing alt. Under reduced motion the only hidden text is inactive slides in one-at-a-time sliders (guest words, places, food, philosophy), each with a visible sibling and controls.

## For Jess to decide

1. Home order. L1 put guests' words after Our difference (5th) so G8 is met. To match the order given in the brief exactly, move `<GuestWords>` in `src/pages/index.astro` to just before `<ClosingTide>`.
2. New short lines marked data-draft need Belle's yes: the /contact sentence and headings, 'Choose the one that suits your group', 'An example of one of our 8 hour days on the Fleurieu', 'Example day', and the Zoe and Sarah caption.
3. Ask Belle for the two missing journal articles and a portrait of Natalie Jane.
4. The /contact form saves to the browser only until Dom's endpoint exists. Keep it off any public link until then.
