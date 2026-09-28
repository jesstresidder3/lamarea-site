import type { MediaSlot } from '../media-types';

/*
  Owner: page builder D (Rising Tides Collective, app, gallery, FAQs, waitlist, gift cards, privacy,
  terms, guides, 404). One entry per image or video slot. Leave `src` empty until Belle's file is in
  public/media/. `suggested` names real folders and files from Belle's inventory (plan/11 Part 4 asset
  columns, 4.20 gallery row, the live home page "2026 La maréa retreats" cards).
  Every photograph with a guest in frame needs that guest's written consent before it is used
  (health-adjacent business, register W, plan/11 decision 29). The note says so on each such slot.
*/
const GRADE = 'Grade: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.';
const CONSENT = 'Guest consent needed from everyone in frame before this is used.';
const SUNSET = 'A Sunset Reset (May 2026 Joe’s Henley), 223 JPEGs plus a VIDS subfolder';

const raw: MediaSlot[] = [
  // Rising Tides Collective ------------------------------------------------
  {
    id: 'collective-hero', src: '/media/beach-dusk-drone.jpg', position: '50% 70%',
    type: 'image',
    alt: 'Two people running at the water\'s edge on a beach at dusk, seen from the air',
    aspect: '16 / 9',
    suggested: `${SUNSET}, a wide frame of the group together at sunset`,
    note: `${CONSENT} Text sits lower left, so keep the calm sky or water there.`,
    tone: 'dusk',
  },
  {
    id: 'collective-first-release',
    type: 'image',
    alt: 'The house at Beresford Estate among the vines in morning light',
    aspect: '4 / 5',
    suggested: 'Beresford Accom images (9 professional files), the house among the vines',
    tone: 'salt',
    grade: 'A',
  },
  {
    id: 'collective-recipes', src: '/media/pasta-lemons-overhead.jpg', position: '40% 50%',
    type: 'image',
    alt: 'A bowl of filled pasta on pea purée beside fresh lemons and leaves',
    aspect: '4 / 5',
    suggested: 'Journal recipe photograph, Mediterranean Gnocchi (live /post/mediterranean-gnocchi)',
    tone: 'sand',
  },
  {
    id: 'collective-resources', src: '/media/gift-box.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A gift box of olive oil, tea and treats packed in straw',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the recipe and information sheets or the take-home goodie bags`,
    tone: 'salt',
  },
  {
    id: 'collective-join', src: '/media/long-table-overhead-2.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A shared lunch table from above, plates, lemons and herbs along green linen',
    aspect: '4 / 5',
    suggested: 'la marea naiko jpegs, guests together at the shared table. Alternate: Food folder 229A8255.jpg',
    note: CONSENT,
    tone: 'sand',
  },

  // The app -----------------------------------------------------------------
  {
    id: 'app-hero',
    type: 'image',
    alt: 'A still from La maréa’s nutrition film, seasonal food on a sunlit bench',
    aspect: '4 / 5',
    suggested: 'App visual needed from Belle after the app decision (plan/11 item 70). Until then, a poster frame from nutrition.mp4 or movement.mp4 (branding pillar videos)',
    tone: 'salt',
  },

  // Gallery -----------------------------------------------------------------
  {
    id: 'gallery-intro-1', src: '/media/mats-glass-room-sea.jpg', position: '50% 60%',
    type: 'image',
    alt: 'A group resting on mats in a glass-walled room above the sea',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the mats set out facing the water before guests arrive`,
    tone: 'dusk',
  },
  {
    id: 'gallery-intro-2', src: '/media/coast-cove-house-drone.jpg', srcMobile: '/media/coast-cove-house-drone-mobile.jpg', position: '45% 50%',
    type: 'image',
    alt: 'The retreat house on a green hillside above a turquoise cove and dark cliffs, seen from the air',
    aspect: '3 / 2',
    suggested: 'Beresford Accom images, a wide vineyard frame',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'gallery-intro-3', src: '/media/long-table-overhead-2.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A shared lunch table from above, plates, lemons and herbs along green linen',
    aspect: '1 / 1',
    suggested: 'Food folder 229A8255.jpg, or a table frame from the 2026 retreats',
    tone: 'sand',
  },
  {
    id: 'gallery-sunset-1',
    type: 'image',
    alt: 'Mats and bolsters laid out overlooking the beach as the sun lowers',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the room set before guests arrive`,
    tone: 'dusk',
  },
  {
    id: 'gallery-sunset-2',
    type: 'image',
    alt: 'Guests in a gentle yoga flow beside large windows, the sea beyond',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the yoga reset with Jaimi`,
    note: CONSENT,
    tone: 'sea',
  },
  {
    id: 'gallery-sunset-3',
    type: 'image',
    alt: 'Belle leading the nutrition session on the Mediterranean way of eating',
    aspect: '4 / 5',
    suggested: `${SUNSET}, Belle’s nutrition session`,
    note: CONSENT,
    tone: 'salt',
  },
  {
    id: 'gallery-sunset-4',
    type: 'image',
    alt: 'A Mediterranean bowl of chickpeas and quinoa served for dinner',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the dinner bowls and the protein balls, herbal teas and tonics on arrival`,
    tone: 'sand',
  },
  {
    id: 'gallery-sunset-5',
    type: 'image',
    alt: 'Goodie bags and a Fleurieu candle set out for guests to take home',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the goodie bags and the Fleurieu candle`,
    tone: 'salt',
  },
  {
    id: 'gallery-beresford-womens',
    type: 'image',
    alt: 'Guests at the women’s Wake Up To Wellness retreat at Beresford Estate',
    aspect: '4 / 5',
    suggested: 'Live home page, "2026 La maréa retreats" card image for Beresford Estate, Womens Wake Up To Wellness Retreat. Belle’s full set to follow',
    note: CONSENT,
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'gallery-private-wutw',
    type: 'image',
    alt: 'A private group of professionals during a Wake Up To Wellness morning',
    aspect: '4 / 5',
    suggested: 'Live home page, "2026 La maréa retreats" card image for Private group of professionals, Wake Up To Wellness Retreat',
    note: CONSENT,
    tone: 'salt',
  },
  {
    id: 'gallery-corporate-mclaren-flat',
    type: 'image',
    alt: 'A corporate team at a long-table lunch after a pasta-making masterclass in McLaren Flat',
    aspect: '4 / 5',
    suggested: 'Live home page, "2026 La maréa retreats" card image for the corporate group. The Ray White shoot replaces it once the Dropbox opens and the client gives written permission (plan/11 item 63)',
    note: `${CONSENT} Client stays unnamed until permission is given.`,
    tone: 'dusk',
  },

  // FAQs --------------------------------------------------------------------
  {
    id: 'faqs-intro', src: '/media/beach-walk-cliffs.jpg', position: '50% 60%',
    type: 'image',
    alt: 'Two people walking along a pebbled beach below the cliffs',
    aspect: '3 / 2',
    suggested: 'la marea naiko jpegs or Naiko At The Bluff Content, the coastal walk below the property',
    tone: 'sea',
    grade: 'A',
  },

  // Waitlist ----------------------------------------------------------------
  {
    id: 'waitlist-intro', src: '/media/beach-cliff-sun-seated.jpg', position: '60% 50%',
    type: 'image',
    alt: 'Sun breaking through the clouds over the sea, two people seated on the sand below a rock face',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the water at sunset with no guests in frame`,
    tone: 'dusk',
  },

  // Gift cards --------------------------------------------------------------
  {
    id: 'giftcards-intro', src: '/media/gift-box.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A gift box of olive oil, tea and treats packed in straw',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the goodie bags and Fleurieu candle, or a styled still of the luxury wellness gift bag (Encounter Bay guide p.15)`,
    tone: 'sand',
  },

  // Guides ------------------------------------------------------------------
  {
    id: 'guide-private-cover',
    type: 'image',
    alt: 'Cover of the La maréa private group guide',
    aspect: '3 / 4',
    suggested: 'Private group guide cover, needed from Belle with the PDF (plan/11 item 25). The Encounter Bay retreat guide cover shows the style',
    tone: 'salt',
  },
  {
    id: 'guide-corporate-cover',
    type: 'image',
    alt: 'Cover of the La maréa corporate group guide',
    aspect: '3 / 4',
    suggested: 'Corporate group guide cover, needed from Belle with the PDF (plan/11 item 25). The Encounter Bay retreat guide cover shows the style',
    tone: 'dusk',
  },

  // 404 ---------------------------------------------------------------------
  {
    id: 'notfound-calm', src: '/media/hills-coast-drone-wide.jpg', position: '30% 50%',
    type: 'image',
    alt: 'Grassy hills running down to a calm sea along the Fleurieu coast',
    aspect: '16 / 9',
    suggested: 'Naiko At The Bluff Content, the sea from the deck in morning light, no people. Alternate: a still from DJI_0604.MP4',
    note: 'Text sits lower left over calm water.',
    tone: 'sea',
  },

  // L4 rebuild, 28-09-2026: journal images from the live posts on lamarea.com.au, and new openers
  { id: 'jr-lasagna', src: '/media/journal-lasagna.jpg', position: '50% 55%', type: 'image', alt: 'A vegetable lasagne fresh from the oven in a glass dish on a wooden board', aspect: '4 / 5', tone: 'sand', suggested: 'The live post\'s image, lamarea.com.au/post/med-inspired-vegetable-lasagna' },
  { id: 'jr-gnocchi', src: '/media/journal-gnocchi.jpg', position: '50% 50%', type: 'image', alt: 'A bowl of Mediterranean gnocchi with roasted vegetables, cherry tomatoes, goat cheese and parsley', aspect: '4 / 5', tone: 'sand', suggested: 'The live post\'s image, lamarea.com.au/post/mediterranean-gnocchi' },
  { id: 'jr-sleep', src: '/media/naiko-bedroom-bath-sea.jpg', position: '50% 55%', type: 'image', alt: 'A made bed facing floor-to-ceiling windows, a freestanding bath and the sea and headland beyond', aspect: '4 / 5', tone: 'salt', suggested: 'The live post\'s image, credited "Naiko, Deep Creek" (lamarea.com.au/post/the-importance-of-sleep)' },
  { id: 'collective-opener', src: '/media/drone-emerald-water-boats-top-down.jpg', position: '50% 50%', type: 'image', alt: 'Emerald shallows from directly above, three white boats moored beside a rock edge', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_0604.MP4 frame at 106 seconds' },
  { id: 'gallery-opener', src: '/media/coast-cove-house-drone.jpg', srcMobile: '/media/coast-cove-house-drone-mobile.jpg', position: '45% 50%', type: 'image', alt: 'The retreat house on a green hillside above a turquoise cove and dark cliffs, seen from the air', aspect: '16 / 9', tone: 'sea', suggested: 'Pool homepage5' },

  // L4 rebuild, 28-09-2026: the gallery wall, frames from the Naiko Deep Creek retreat shoot (Belle's Drive)
  { id: 'gallery-wall-1', src: '/media/mats-glass-room-sea.jpg', type: 'image', alt: 'Mats laid out in a glass room above the sea', aspect: '3 / 4', tone: 'salt', suggested: 'Pool, mats-glass-room-sea' },
  { id: 'gallery-wall-2', src: '/media/deck-sea-guests.jpg', type: 'image', alt: 'Guests on the sunlit deck, a big sky and the sea beyond the rail', aspect: '4 / 3', tone: 'salt', suggested: 'Pool, deck-sea-guests' },
  { id: 'gallery-wall-3', src: '/media/table-three-women-sea.jpg', type: 'image', alt: 'Three women around the long table by the windows onto the sea', aspect: '4 / 5', tone: 'salt', suggested: 'Pool, table-three-women-sea' },
  { id: 'gallery-wall-4', src: '/media/yoga-side-bend-window.jpg', type: 'image', alt: 'Guests in a side bend by the window, arms reaching over', aspect: '2 / 3', tone: 'salt', suggested: 'Pool, yoga-side-bend-window' },
  { id: 'gallery-wall-5', src: '/media/long-table-overhead-group.jpg', type: 'image', alt: 'A group sharing lunch around one long table, seen from above', aspect: '1 / 1', tone: 'salt', suggested: 'Pool, long-table-overhead-group' },
  { id: 'gallery-wall-6', src: '/media/deck-breathwork-sky.jpg', type: 'image', alt: 'Guests lying along the deck under a big sky, the sea beyond the rail', aspect: '4 / 3', tone: 'salt', suggested: 'Pool, deck-breathwork-sky' },
  { id: 'gallery-wall-7', src: '/media/barrel-sauna-towels-sea.jpg', type: 'image', alt: 'Guests with towels beside the barrel sauna on the clifftop, the sea beyond', aspect: '3 / 4', tone: 'salt', suggested: 'Pool, barrel-sauna-towels-sea' },
  { id: 'gallery-wall-8', src: '/media/luca-plating-window.jpg', type: 'image', alt: 'Luca plating at the kitchen bench by the window, glasses set out beside him', aspect: '4 / 5', tone: 'salt', suggested: 'Pool, luca-plating-window' },
  { id: 'gallery-wall-9', src: '/media/hillside-walk-three.jpg', type: 'image', alt: 'Three women walking up a green hillside in the sun', aspect: '3 / 2', tone: 'salt', suggested: 'Pool, hillside-walk-three' },
  { id: 'gallery-wall-10', src: '/media/bath-window-sea.jpg', type: 'image', alt: 'The freestanding bath beside a tall window onto the hills and sea, a candle on the stool', aspect: '4 / 5', tone: 'salt', suggested: 'Pool, bath-window-sea' },
  { id: 'gallery-wall-11', src: '/media/kingfish-plate.jpg', type: 'image', alt: 'Slices of kingfish with orange and herb oil on a white plate', aspect: '1 / 1', tone: 'salt', suggested: 'Pool, kingfish-plate' },
  { id: 'gallery-wall-12', src: '/media/breathwork-floor-hills.jpg', type: 'image', alt: 'Guests lying on mats under the verandah as a facilitator walks past, green hills beyond', aspect: '3 / 4', tone: 'salt', suggested: 'Pool, breathwork-floor-hills' },
  { id: 'gallery-wall-13', src: '/media/cup-sea-view.jpg', type: 'image', alt: 'A woman holding a cup, looking out over the grassy headland to the sea', aspect: '4 / 5', tone: 'salt', suggested: 'Pool, cup-sea-view' },
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
