import type { MediaSlot } from '../media-types';

/*
  Owner: foundation layout builder (hero, zoom mosaic, the day panels, menu imagery, styleguide).
  `suggested` names real files and folders from Belle's inventory (plan/11 Part 4 asset columns and
  the venue asset table in 4.10). Leave `src` empty until the file is in public/media/.
  Home allows one autoplay loop (plan/10), so every video slot here other than the hero launches as
  a still: set `poster` first, `src` later.
*/
/** Grading rule carried on every slot (pre-build review item 28). */
const GRADE = 'Grade: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.';

const raw: MediaSlot[] = [
  // Hero ------------------------------------------------------------------
  {
    id: 'home-hero',
    type: 'video',
    alt: 'Drone footage moving along the Fleurieu Peninsula coastline, hills, rocks and green water below',
    aspect: '16 / 9',
    suggested: 'Drone video DJI_0781.MP4, bird’s eye along the coast. Alternates DJI_0604.MP4 (pan away from the coastline) or the unnumbered left pan across the hills',
    note: 'Slow to about 0.6x only if the source frame rate allows. Portrait crop for phones. One autoplay loop per page.',
    tone: 'salt',
    grade: 'B',
  },

  // Menu overlay photograph, crossfading per primary link ------------------
  {
    id: 'menu-default',
    type: 'image',
    alt: 'The coast below Naiko at the Bluff, Encounter Bay, in morning light',
    aspect: '4 / 5',
    suggested: 'Naiko At The Bluff Content, a coastal view from the deck',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'menu-private-groups',
    type: 'image',
    alt: 'A private group together on the deck at Naiko, Fleurieu Peninsula',
    aspect: '4 / 5',
    suggested: 'la marea naiko jpegs, a group moment. Alternate: A Sunset Reset (May 2026 Joe’s Henley) group image',
    note: 'Guest consent needed before any retreat photograph with faces is used.',
    tone: 'sand',
  },
  {
    id: 'menu-corporate',
    type: 'image',
    alt: 'A team gathered at Beresford Estate among the vineyards of McLaren Vale',
    aspect: '4 / 5',
    suggested: 'Beresford Accom images (9 professional files). The Ray White shoot replaces it once the Dropbox opens and permission is given',
    tone: 'dusk',
    grade: 'A',
  },
  {
    id: 'menu-the-day',
    type: 'image',
    alt: 'A shared Mediterranean table set for lunch during a La maréa day',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8255.jpg',
    tone: 'sand',
  },

  // Zoom mosaic (build spec section 12): the centre frame is NOT beach, and the five stills around
  // it are the offer itself.
  {
    id: 'zoom-centre',
    type: 'video',
    alt: 'Drone footage panning left across the green hills of the Fleurieu Peninsula',
    aspect: '16 / 10',
    suggested: 'The unnumbered left pan across the hills (BD-107, X12). Alternate: a Beresford Accom images vineyard frame',
    note: 'Launch as a still (the hero is the page’s one autoplay loop). This frame ends at full screen, so use the full-resolution frame. Not a beach shot.',
    tone: 'dusk',
    grade: 'B',
  },
  {
    id: 'zoom-yoga',
    type: 'image',
    alt: 'A morning yoga flow on the deck, the coast beyond',
    aspect: '4 / 5',
    suggested: 'movement.mp4 poster frame (branding pillar video), yoga on a deck',
    tone: 'salt',
  },
  {
    id: 'zoom-table',
    type: 'image',
    alt: 'Seasonal Mediterranean dishes shared along a long table',
    aspect: '3 / 2',
    suggested: 'Food folder 229A8255.jpg. Alternate Food folder 229A8436.CR2 (RAW, convert)',
    tone: 'sand',
  },
  {
    id: 'zoom-plunge',
    type: 'image',
    alt: 'The plunge pool at Beresford Estate, vines beyond',
    aspect: '4 / 5',
    suggested: 'Beresford Accom images, the plunge pool',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'zoom-massage',
    type: 'image',
    alt: 'An individual restorative massage during the morning rotation',
    aspect: '1 / 1',
    suggested: 'la marea naiko jpegs, a massage in the rotation. No confirmed file yet (plan/11 Q10)',
    tone: 'dusk',
  },
  {
    id: 'zoom-bath',
    type: 'image',
    alt: 'A bath running beside the window at Naiko Deep Creek, trees beyond',
    aspect: '16 / 10',
    suggested: 'Bath shot landscape.jpg, Naiko Deep Creek',
    tone: 'salt',
  },

  // The Day, pinned panels (spec 10.2 moment 4, stills at launch) ----------
  {
    id: 'day-base',
    type: 'image',
    alt: 'The hills of the Fleurieu Peninsula rolling down to the sea',
    aspect: '4 / 5',
    suggested: 'Still from the unnumbered left pan across the hills (BD-107), or DJI_0604.MP4',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'day-arrive',
    type: 'image',
    alt: 'Morning arrival at Beresford Estate, the house among the vines',
    aspect: '4 / 5',
    suggested: 'Beresford Accom images, the arrival or the house in morning light',
    note: 'Video can swap in after the summer shoot.',
    tone: 'salt',
    grade: 'A',
  },
  {
    id: 'day-move',
    type: 'image',
    alt: 'A group vinyasa flow on mats in soft morning light',
    aspect: '16 / 10',
    suggested: 'movement.mp4 poster frame (branding pillar video), yoga or mat pilates',
    note: 'No photograph yet of the three rotation stations running (plan/11 Q10).',
    tone: 'sand',
  },
  {
    id: 'day-nourish',
    type: 'image',
    alt: 'The shared lunch table, plates of seasonal food passed between guests',
    aspect: '16 / 10',
    suggested: 'Food folder 229A8255.jpg',
    tone: 'sand',
  },
  {
    id: 'day-restore',
    type: 'image',
    alt: 'Beresford Estate in late afternoon light, the vines beyond',
    aspect: '16 / 9',
    suggested: 'Beresford Accom images, the venue in late light (full-bleed panel, text sits lower left)',
    tone: 'sand',
    grade: 'A',
  },

  // Styleguide demonstrations only ---------------------------------------
  {
    id: 'sg-band',
    type: 'image',
    alt: 'Vineyard hills meeting the coast on the Fleurieu Peninsula',
    aspect: '21 / 9',
    suggested: 'Still from DJI_0604.MP4, paired with Beresford Accom images so the band is coast and vineyard together',
    tone: 'sea',
  },
  {
    id: 'sg-pair',
    type: 'image',
    alt: 'Guests walking the coastal path near Deep Creek',
    aspect: '4 / 5',
    suggested: 'NAIKO ACCOM (22 files), a coastal walk',
    tone: 'salt',
  },
  {
    id: 'sg-reel',
    type: 'video',
    alt: 'Belle’s reel of a private group day at Beresford Estate',
    aspect: '9 / 16',
    suggested: 'The Beresford 8 hour reel (Instagram, 9:16), location unconfirmed (plan/11 Q1)',
    note: 'Contained frame with controls, never full-bleed, never autoplay.',
    tone: 'dusk',
  },
  {
    id: 'sg-dining',
    type: 'image',
    alt: 'A three course Mediterranean lunch plated at a long shared table',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8255.jpg',
    tone: 'sand',
  },
  {
    id: 'sg-pasta',
    type: 'image',
    alt: 'Hands shaping fresh pasta on a floured board',
    aspect: '4 / 5',
    suggested: 'Copy of Say Cheese-Pasta Party-Arne Studio-103 3.JPG (provenance unconfirmed)',
    tone: 'dusk',
  },
  {
    id: 'sg-thumb-1',
    type: 'image',
    alt: 'The coastline near Deep Creek, Fleurieu Peninsula',
    aspect: '4 / 5',
    suggested: 'Naiko At The Bluff Content',
    tone: 'sea',
  },
  {
    id: 'sg-thumb-2',
    type: 'image',
    alt: 'A seasonal wholefood breakfast laid out on linen',
    aspect: '4 / 5',
    suggested: 'nutrition.mp4 poster frame (branding pillar video)',
    tone: 'sand',
  },
  {
    id: 'sg-thumb-3',
    type: 'image',
    alt: 'A La maréa practitioner leading a breathwork session',
    aspect: '4 / 5',
    suggested: 'connection.mp4 poster frame (branding pillar video)',
    tone: 'salt',
  },
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
