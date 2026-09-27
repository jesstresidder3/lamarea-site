import type { MediaSlot } from '../media-types';

/*
  Owner: page builder B (the 8 hour day, the experiences pages, philosophy and the pillar page, The Table).
  One entry per image or video slot. Leave `src` empty until Belle's file is in public/media/.
  `suggested` names the file or folder in Belle's inventory (plan/11 Part 4 asset columns and the
  content harvest). Where nothing exists yet it says so and names the gap.

  Pages also reuse slots owned by others where the same frame belongs (the experience tiles, the
  pillar videos, the team portraits, the food moments, the journal images).
*/

/** Grading rule carried on every slot (pre-build review item 28). */
const GRADE = 'Grade: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.';
const pillarVideos = 'Branding pillar videos folder (13 files, ungraded, plan/11 item 48)';

const raw: MediaSlot[] = [
  /* ------------------------------------------------ /experiences/full-day-retreat, the 8 hour day */
  {
    id: 'day-hero',
    type: 'video',
    alt: 'A La maréa retreat day on the Fleurieu Peninsula, from movement on the deck to the shared table',
    aspect: '16 / 9',
    suggested: '"retreat banner.mp4" from Belle’s retreats page, cut to one slow shot rather than a banner of many (BD-75). Alternate: DJI_0604.MP4, the pan away from the coastline',
    note: 'The page’s one autoplay loop. Portrait crop for phones. Words sit lower left, over calm sea or sky.',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'day-reel',
    type: 'video',
    alt: 'Belle’s reel of an 8 hour private group day at Beresford Estate, McLaren Vale',
    aspect: '9 / 16',
    suggested: 'The Beresford 8 hour reel (Instagram, 9:16, BD-126). Beresford Drive folder did not open; may sit in "Marketing, La maréa x Beresford" (plan/11 Q1)',
    note: 'Contained 9:16 frame with controls. Never full-bleed, never autoplay. Needs a poster frame.',
    tone: 'dusk',
  },
  {
    id: 'day-rotation-massage',
    type: 'image',
    alt: 'An individual restorative massage during the morning rotation',
    aspect: '5 / 4',
    suggested: 'No photograph of the rotation running yet (plan/11 Q10). Ask Courtney Selfe (The Earth House and Spa) for a treatment still, or the summer shoot',
    tone: 'salt',
  },
  {
    id: 'day-rotation-contrast',
    type: 'image',
    alt: 'Guests moving from the sauna to the cold plunge in a guided contrast therapy session',
    aspect: '5 / 4',
    suggested: 'No confirmed contrast therapy frame (S2, Q10). First look: a still from sleep.mp4 in the ' + pillarVideos,
    tone: 'sea',
  },
  {
    id: 'day-rotation-workshop',
    type: 'image',
    alt: 'Belle leading the lifestyle wellness workshop for a small group',
    aspect: '5 / 4',
    suggested: 'Belle presenting her session, A Sunset Reset set (May 2026, Joe’s Henley, 223 JPEGs). Guest consent needed for anyone identifiable',
    tone: 'sand',
  },
  {
    id: 'day-afternoon',
    type: 'image',
    alt: 'The pool below the deck at Naiko at the Bluff, the ocean beyond in late afternoon light',
    aspect: '21 / 9',
    suggested: 'Naiko At The Bluff Content (16 files), the pool and the sea in afternoon light. Alternate: the Beresford plunge pool terrace from Beresford Accom images',
    note: 'Full-bleed band with a slow parallax. Nature and water in frame (X10).',
    tone: 'sea',
    grade: 'A',
  },

  /* ------------------------------------------------ /experiences */
  {
    id: 'experiences-hero',
    type: 'video',
    alt: 'A group yoga flow on a deck above the Fleurieu coast in morning light',
    aspect: '16 / 9',
    suggested: 'movement.mp4 in the ' + pillarVideos + '. Resolve the duplicate Movement.mp4 first (plan/11 item 80)',
    note: 'The page’s one autoplay loop until the experience tiles play.',
    tone: 'salt',
    grade: 'B',
  },
  {
    id: 'experiences-together',
    type: 'image',
    alt: 'A retreat day at Beresford Estate, mats on the lawn and the long table set beyond',
    aspect: '3 / 2',
    suggested: 'Beresford Accom images (9 professional files), a wide frame of the estate. Alternate: Food folder 229A8255.jpg',
    tone: 'sand',
    grade: 'A',
  },

  /* ------------------------------------------------ /philosophy and /philosophy/<pillar> */
  {
    id: 'philosophy-hero',
    type: 'video',
    alt: 'Belle’s ten pillars in one slow film: the coast, the table, movement, rest and connection',
    aspect: '16 / 9',
    suggested: '"MAIN COMPILATION.mp4" in the ' + pillarVideos,
    note: 'Slowed in post only if the frame rate allows. Portrait crop for phones.',
    tone: 'salt',
    grade: 'B',
  },
  {
    id: 'philosophy-tide',
    type: 'image',
    alt: 'The tide moving over the rocks below the Fleurieu cliffs, green water from above',
    aspect: '4 / 5',
    suggested: 'A still from DJI_0781.MP4 (bird’s eye along the coast, rocks and water). Alternate: DJI_0604.MP4',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'pillar-hero-sleep-and-recovery',
    type: 'video',
    alt: 'Rest and recovery on a retreat: the sauna, cold water and a quiet room at the end of the day',
    aspect: '21 / 9',
    suggested: 'sleep.mp4 in the ' + pillarVideos + '. Alternate still: the bedroom image credited "Naiko, Deep Creek" on the live sleep article',
    tone: 'dusk',
  },

  /* ------------------------------------------------ /food, The Table */
  {
    id: 'food-hero',
    type: 'image',
    alt: 'A long Mediterranean table set for lunch, seasonal plates shared between guests',
    aspect: '16 / 9',
    suggested: 'Food folder 229A8255.jpg. Alternate 229A8436.CR2 (RAW, convert), or the nutrition.mp4 poster. Food photography is thin (assets-index gap 7)',
    note: 'Full-bleed. Light and warm, never a dark restaurant shot.',
    tone: 'sand',
  },
  {
    id: 'food-fine-dining',
    type: 'image',
    alt: 'A plated course of the chef curated Mediterranean lunch, close up',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8436.CR2 (RAW, convert), a plated detail. Aromi Dining lunch photographs if Belle has them',
    tone: 'salt',
  },
  {
    id: 'food-shared-table',
    type: 'image',
    alt: 'Guests passing plates along one long shared table',
    aspect: '3 / 2',
    suggested: 'Food folder 229A8255.jpg, or the long-table lunch from a 2026 corporate retreat (Instagram feed). Guest consent needed for faces',
    tone: 'sand',
  },
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
