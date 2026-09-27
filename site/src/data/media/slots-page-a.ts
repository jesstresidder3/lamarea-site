import type { MediaSlot } from '../media-types';

/*
  Owner: page builder A (home, private groups, corporate, enquire and thank-you, retreat formats).
  One entry per image or video slot. Leave `src` empty until Belle's file is in public/media/.
  `suggested` names real files and folders from Belle's inventory (plan/11 Part 4 asset columns,
  build/03-content-harvest.md). Home allows one autoplay loop (the hero), so every slot here is a
  still. Slots already defined by the foundation (hero, zoom, the day panels) and the systems builder
  (experiences, venues, testimonials, journal, food) are reused by id and not repeated here.
*/

/** Grading rule carried on every slot (pre-build review item 28). */
const GRADE = 'Grade: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.';
const CONSENT = 'Guest consent needed before any retreat photograph with faces is used.';

const raw: MediaSlot[] = [
  // Home, moment 6: the shared table beside the two signature culinary experiences ----------
  {
    id: 'home-table-shared', src: '/media/long-table-overhead.jpg', position: '50% 45%',
    type: 'image',
    alt: 'A shared lunch table from above, plates, lemons and herbs along green linen',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8255.jpg, the shared table. Alternate Food folder 229A8436.CR2 (RAW, convert)',
    note: 'Belle: "shared eating to showcase, you know, connection, team bonding, shared meals" (BD-85).',
    tone: 'sand',
  },
  {
    id: 'home-table-pasta', src: '/media/tortelli-plate.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bowl of tortelli with peas and greens on an orange table',
    aspect: '4 / 5',
    suggested: 'Copy of Say Cheese-Pasta Party-Arne Studio-103 3.JPG (provenance unconfirmed), or a still from the corporate pasta masterclass once permission is given',
    tone: 'salt',
  },

  // Home, moment 8: one small image beside each of Belle's five differences ----------------
  {
    id: 'home-difference-01', src: '/media/hills-coast-drone.jpg', position: '40% 60%',
    type: 'image',
    alt: 'Farmland and hills meeting the rocky coast of the Fleurieu Peninsula, seen from the air',
    aspect: '4 / 5',
    suggested: 'Still from DJI_0604.MP4 (pan away from the coastline over green water)',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'home-difference-02', src: '/media/table-setting-two.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Two women setting a long table with lemons and linen in a bright room',
    aspect: '4 / 5',
    suggested: 'nutrition.mp4 poster frame (branding pillar video), or Food folder breakfast still',
    tone: 'sand',
  },
  {
    id: 'home-difference-03', src: '/media/breathwork-verandah.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A facilitator standing over a group lying on mats under a verandah',
    aspect: '4 / 5',
    suggested: 'la marea naiko jpegs, a practitioner at work (Jaimi Baker or Belle). Portraits from the team shoot once it exists',
    note: CONSENT,
    tone: 'salt',
  },
  {
    id: 'home-difference-04', src: '/media/olive-oil-bread.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bottle of extra virgin olive oil with bread and herbs set out before lunch',
    aspect: '4 / 5',
    suggested: 'Food folder, local produce before service. No producer named until Belle confirms who supplies',
    tone: 'sand',
  },
  {
    id: 'home-difference-05', src: '/media/beach-walk-bright.jpg', position: '50% 60%',
    type: 'image',
    alt: 'Two people walking along a beach below the cliffs in bright afternoon sun',
    aspect: '4 / 5',
    suggested: 'A Fleurieu family image from Belle (McLaren Vale, Moana or Myponga Beach, as in her Our story copy)',
    tone: 'dusk',
  },

  // Private groups -----------------------------------------------------------------------
  {
    id: 'private-hero', src: '/media/table-three-women-sea.jpg', position: '50% 42%',
    type: 'image',
    alt: 'Three women together at a long table set with lemons, the sea beyond the windows',
    aspect: '16 / 9',
    suggested: 'A Sunset Reset (May 2026 Joe’s Henley) group image, or a Naiko At The Bluff Content deck image',
    note: `Open decision 4: one impactful video where graded footage allows. ${CONSENT}`,
    tone: 'sea',
  },

  // Corporate ----------------------------------------------------------------------------
  {
    id: 'corporate-hero', src: '/media/long-table-overhead-group.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A group sharing lunch around one long table, seen from above',
    aspect: '16 / 9',
    suggested: 'Beresford Accom images (9 professional files), a wide morning frame. The Ray White shoot replaces it only once the Dropbox opens and the client gives written permission',
    note: 'No client names or logos in frame until permission is confirmed (plan/11 item 63).',
    tone: 'dusk',
    grade: 'A',
  },

  // Retreat formats ------------------------------------------------------------------------
  {
    id: 'retreats-hero', src: '/media/beach-walk-bright.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Two people walking along a beach below the cliffs in bright afternoon sun',
    aspect: '16 / 9',
    suggested: '"retreat banner.mp4" as one impactful video (open decision 4, BD-75), a still from it at launch. Alternate NAIKO ACCOM, a coastal walk',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'retreats-flagship', src: '/media/deck-stretch-sea.jpg', position: '50% 45%',
    type: 'image',
    alt: 'A woman in a side stretch on the deck, the sea and the grassy headland beyond',
    aspect: '4 / 5',
    suggested: 'movement.mp4 poster frame, or Beresford Accom images with the group on the lawn',
    tone: 'salt',
  },
  {
    id: 'retreats-format-half-day', src: '/media/breathwork-verandah.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A facilitator standing over a group lying on mats under a verandah',
    aspect: '4 / 5',
    suggested: 'Corporate retreat photographs from the Instagram feed. No client named or visible logo until permission is given',
    note: CONSENT,
    tone: 'salt',
  },
  {
    id: 'retreats-format-wake-up', src: '/media/mats-glass-room-sea.jpg', position: '50% 60%',
    type: 'image',
    alt: 'A group resting on mats in a glass-walled room above the sea',
    aspect: '4 / 5',
    suggested: 'Beresford Estate, Womens Wake Up To Wellness Retreat (home page 2026 gallery)',
    note: CONSENT,
    tone: 'sand',
  },
  {
    id: 'retreats-format-sunset', src: '/media/beach-dusk-drone.jpg', position: '62% 80%',
    type: 'image',
    alt: 'Two people running at the water\'s edge on a beach at dusk, seen from the air',
    aspect: '4 / 5',
    suggested: 'A Sunset Reset (May 2026 Joe’s Henley) images',
    note: CONSENT,
    tone: 'dusk',
  },
  {
    id: 'retreats-format-weekend', src: '/media/coast-cove-house-drone-late.jpg', position: '32% 50%',
    type: 'image',
    alt: 'The retreat house on a green hillside above the cliffs and a turquoise cove, seen from the air',
    aspect: '4 / 5',
    suggested: 'NAIKO ACCOM (22 files), the house at dusk',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'retreats-format-personalised', src: '/media/journal-pen-candle.jpg', position: '50% 45%',
    type: 'image',
    alt: 'A hand writing in a notebook, a candle glowing beyond',
    aspect: '4 / 5',
    suggested: 'la marea naiko jpegs, a detail of the welcome table or the retreat guide',
    tone: 'salt',
  },

  // Enquire -------------------------------------------------------------------------------
  {
    id: 'enquire-coast', src: '/media/bay-cliff-walk-drone.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bright bay with turquoise water below grassy cliffs, a walker on the track above',
    aspect: '4 / 3',
    suggested: 'NAIKO ACCOM, the coast from the deck, or a still from DJI_0781.MP4',
    tone: 'sea',
  },
  {
    id: 'enquire-vineyard',
    type: 'image',
    alt: 'Rows of vines at Beresford Estate, McLaren Vale',
    aspect: '4 / 3',
    suggested: 'Beresford Accom images, the vineyard',
    tone: 'sand',
    grade: 'A',
  },
  {
    id: 'enquire-thanks',
    type: 'image',
    alt: 'Belle Redden, founder of La maréa, on the coast of the Fleurieu Peninsula',
    aspect: '4 / 5',
    suggested: 'Portrait of Belle needed (plan/11 4.23). Same shoot as the team portraits',
    tone: 'salt',
  },
];

export const slots: MediaSlot[] = raw.map((s) => ({ ...s, note: s.note ? `${s.note} ${GRADE}` : GRADE }));
