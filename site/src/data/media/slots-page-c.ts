import type { MediaSlot } from '../media-types';

/*
  Owner: page builder C (Places to Pause and the venue pages, the Fleurieu, team, journal, our story).
  One entry per image or video slot. Leave `src` empty until Belle's file is in public/media/.
  `suggested` names the real file or folder from Belle's inventory (plan/11 Part 4 asset columns, the
  venue asset table in 4.10, the content harvest). Where nothing exists yet it says so and names the gap.
  The venue cards, map frames, venue feature galleries, team portraits and journal heroes are the
  systems builder's slots (slots-systems.ts); these are the page-level heroes and bands around them.
*/

/** Grading rule carried on every slot (build spec 12, pre-build review item 28). */
const GRADE = 'Grade: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.';
const consent = 'Guest consent needed for anyone identifiable (plan/11 decision 29).';

const raw: MediaSlot[] = [
  /* ------------------------------------------------------------------ /places */
  {
    id: 'places-hero',
    type: 'image',
    alt: 'Naiko at the Bluff above Encounter Bay, farmland running down to the Southern Ocean',
    aspect: '16 / 9',
    suggested: 'Naiko At The Bluff Content, the villa exterior with the sea. Alternate: Beresford Accom images, the drone shot over the vines (plan/11 4.9)',
    note: 'A partner venue in its landscape, never a room interior. Wide frame, the building small in the land.',
    tone: 'sea',
    grade: 'A',
  },

  /* ------------------------------------------------------------------ /places/<slug> heroes */
  {
    id: 'venue-hero-naiko-deep-creek',
    type: 'image',
    alt: 'The free-standing bath at Naiko Retreat, Deep Creek, filling beside a window onto the trees and sea',
    aspect: '16 / 9',
    suggested: 'Bath shot landscape.jpg, Naiko Deep Creek (Belle, BD-111: "if we\'re showcasing Nicodeap Creek, maybe we have, like, a hero banner, and it\'s, like, the bath shot"). Confirm it is Deep Creek, not the Bluff (S4)',
    note: 'The bath shot belongs here and never on the home hero.',
    tone: 'dusk',
    grade: 'A',
  },
  {
    id: 'venue-hero-naiko-encounter-bay',
    type: 'image',
    alt: 'Naiko at the Bluff on the headland above Encounter Bay, the pool below the deck and the ocean beyond',
    aspect: '16 / 9',
    suggested: 'Naiko At The Bluff Content (16 files), the exterior from the farm side with the sea. Alternate: a still from "Copy of naiko_web_banner_-_4k (2160p).mp4" once the property is confirmed',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'venue-hero-beresford-estate',
    type: 'image',
    alt: 'Beresford Estate from above, rows of vines around the house in Blewitt Springs, McLaren Vale',
    aspect: '16 / 9',
    suggested: 'Beresford Accom images (9 professional files), the aerial or the house among the vines. Beresford Dropbox professional photos are not yet accessible',
    tone: 'sand',
    grade: 'A',
  },

  /* ------------------------------------------------------------------ /places/<slug> "what is around it" */
  {
    id: 'venue-around-naiko-deep-creek',
    type: 'video',
    alt: 'Drone footage over the cliffs and secluded beach below Naiko Retreat at Deep Creek',
    aspect: '21 / 9',
    suggested: 'DJI_20251109100906_0030_D.MP4, the only file in the Naiko deep creek folder (plan/11 4.10)',
    note: 'Band with a soft parallax. Poster frame first, video after grading.',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'venue-around-naiko-encounter-bay',
    type: 'image',
    alt: 'The coastal walk at the bottom of the Naiko property, The Bluff and Encounter Bay beyond',
    aspect: '21 / 9',
    suggested: 'The guide p.7 photograph, "A beautiful coastal walk at the bottom of the Naiko property". Alternate: Naiko At The Bluff Content, a coastal view',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'venue-around-beresford-estate',
    type: 'image',
    alt: 'Vineyard rows across the hills of Blewitt Springs, McLaren Vale, in late afternoon light',
    aspect: '21 / 9',
    suggested: 'Beresford Accom images, a vineyard landscape. Summer shoot if none is wide enough for a band',
    tone: 'sand',
    grade: 'A',
  },

  /* ------------------------------------------------------------------ /fleurieu-peninsula-retreats */
  {
    id: 'fleurieu-hero',
    type: 'video',
    alt: 'Drone footage panning away from the Fleurieu coastline, the hills behind and green water below',
    aspect: '16 / 9',
    suggested: 'DJI_0604.MP4, the pan away from the coastline over the hills and green water (BD-106). The home hero uses DJI_0781, so this page takes the other clip',
    note: 'Slow to about 0.6x in post only if the frame rate allows. Portrait crop for phones. The page\'s one autoplay loop.',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'fleurieu-wild-dolphins',
    type: 'video',
    alt: 'A pod of dolphins moving through clear water off the Fleurieu coast',
    aspect: '4 / 5',
    suggested: 'Belle\'s iPhone footage of dolphins (BD-123), not yet located (S5, likely Dropbox). "Copy of IMG_6075.MOV" is iPhone footage, content unviewed',
    note: 'Small frame only (grade C footage rule). Plays only while in view.',
    tone: 'sea',
    grade: 'C',
  },
  {
    id: 'fleurieu-wild-seals',
    type: 'video',
    alt: 'Seals resting on the rocks at the water\'s edge on the Fleurieu Peninsula',
    aspect: '4 / 5',
    suggested: 'Belle\'s iPhone footage of seals (BD-123), not yet located (S5)',
    note: 'Small frame only.',
    tone: 'salt',
    grade: 'C',
  },
  {
    id: 'fleurieu-wild-kangaroos',
    type: 'video',
    alt: 'Kangaroos grazing on a farm paddock above the coast in the early evening',
    aspect: '4 / 5',
    suggested: 'Belle\'s kangaroo footage (BD-123, "there\'s some kangaroo footage"), not yet located (S5)',
    note: 'Small frame only.',
    tone: 'dusk',
    grade: 'C',
  },
  {
    id: 'fleurieu-wild-ocean',
    type: 'video',
    alt: 'A swimmer in clear green water off the Fleurieu coast, seen from above',
    aspect: '4 / 5',
    suggested: 'DJI_0605.MP4, the pan inwards as a swimmer moves through the water (BD-109). Belle doubts its quality for a hero, so it lives in a small frame',
    note: 'Small frame only.',
    tone: 'sea',
    grade: 'C',
  },
  {
    id: 'fleurieu-wild-hiking',
    type: 'image',
    alt: 'A walking trail along the cliff tops of the Fleurieu Peninsula above the Southern Ocean',
    aspect: '4 / 5',
    suggested: 'NAIKO ACCOM, trail or cliff-top frames (the Heysen Trail crosses the Naiko property). Summer shoot if none',
    tone: 'sea',
  },
  {
    id: 'fleurieu-whales',
    type: 'video',
    alt: 'A whale surfacing in the Southern Ocean off the Fleurieu coast in winter',
    aspect: '4 / 5',
    suggested: 'Whale footage from Belle, if any exists (Naiko: "from May through to October guests have a front row seat to whale watching"). Not in the inventory',
    note: 'Small frame only. Drop the slide if no footage exists.',
    tone: 'salt',
    grade: 'C',
  },
  {
    id: 'fleurieu-belle',
    type: 'image',
    alt: 'Belle Redden on the beach at the Fleurieu Peninsula where she grew up',
    aspect: '4 / 5',
    suggested: 'A portrait of Belle on the Fleurieu coast (Moana or Myponga Beach if possible). Portrait of Belle needed (plan/11 4.17)',
    tone: 'salt',
  },
  {
    id: 'fleurieu-table',
    type: 'image',
    alt: 'Seasonal South Australian produce set out on a long table for a retreat lunch',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8255.jpg, or Aromi Dining lunch photographs. Producer photography is thin (assets-index gap 7)',
    tone: 'sand',
  },
  {
    id: 'fleurieu-vines',
    type: 'image',
    alt: 'Vineyards of McLaren Vale rolling towards the sea',
    aspect: '3 / 2',
    suggested: 'Beresford Accom images, a vineyard frame with distance in it. Pairs with the coast so the page is never beach alone (BD-112)',
    tone: 'sand',
    grade: 'A',
  },

  /* ------------------------------------------------------------------ /team */
  {
    id: 'team-hero',
    type: 'image',
    alt: 'Belle and the La maréa team setting up mats and a long table before guests arrive on the coast',
    aspect: '16 / 9',
    suggested: 'A Sunset Reset (May 2026, Joe\'s Henley), 223 JPEGs, the team at work before guests arrive (plan/11 4.15). ' + consent,
    tone: 'salt',
  },

  /* ------------------------------------------------------------------ /journal/<slug> */
  {
    id: 'journal-sleep-bath',
    type: 'image',
    alt: 'A warm bath drawn at Naiko Retreat, Deep Creek, in the evening',
    aspect: '3 / 2',
    suggested: 'The image in the live sleep post credited "Naiko Retreat, Deep Creek" (lamarea.com.au blog), likely the Naiko bath shot',
    tone: 'dusk',
  },

  /* ------------------------------------------------------------------ /our-story */
  {
    id: 'story-hero',
    type: 'image',
    alt: 'Belle Redden, founder of La maréa, on the Fleurieu Peninsula coast',
    aspect: '16 / 9',
    suggested: 'Belle on the Fleurieu coast (plan/11 4.17). No portrait of Belle is in the inventory yet; the half-day portrait shoot covers it',
    note: 'Belle small in a wide coastal frame, room for the heading in calm sky or sea.',
    tone: 'sea',
  },
  {
    id: 'story-moana',
    type: 'image',
    alt: 'Moana Beach on the Fleurieu Peninsula, where Belle trained for swimming and surf lifesaving',
    aspect: '4 / 5',
    suggested: 'Family or childhood imagery from Belle (plan/11 4.17), Moana Beach or the McLaren Vale property. Not in the inventory',
    tone: 'sea',
  },
  {
    id: 'story-myponga',
    type: 'image',
    alt: 'Summer at Myponga Beach, a long day by the water',
    aspect: '3 / 2',
    suggested: 'Family or childhood imagery from Belle, Myponga Beach summers. Not in the inventory. Alternate: a present-day still of Myponga Beach',
    tone: 'sand',
  },
  {
    id: 'story-mediterranean',
    type: 'image',
    alt: 'The Sardinian coastline from Belle\'s travels through the Mediterranean',
    aspect: '4 / 5',
    suggested: 'Belle\'s own photograph from Sardinia, if she has one. Not in the inventory',
    tone: 'salt',
  },
  {
    id: 'story-hosts',
    type: 'image',
    alt: 'Belle with her sister Zoe and Sarah, the La maréa hosts',
    aspect: '3 / 2',
    suggested: 'The hosts photograph from the live Our story page (Belle left, Zoe right, Sarah back). The file is not in the inventory',
    note: 'The hosts paragraph refers to this photograph by position, so it needs this exact frame.',
    tone: 'sand',
  },
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
