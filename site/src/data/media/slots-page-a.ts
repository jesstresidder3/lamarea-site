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
  // Home opening, redesign 27-09-2026: the two worlds the scene divides into, and the frame each
  // world turns to when the visitor hovers it.
  {
    id: 'home-world-private', src: '/media/table-three-women-sea.jpg', position: '50% 45%',
    type: 'image',
    alt: 'Three friends setting a long table with lemons, one pouring water, the sea bright beyond the windows',
    aspect: '2 / 3', suggested: 'A private group together at the table or on the deck', tone: 'sand',
  },
  {
    id: 'home-world-private-alt', src: '/media/hillside-walk-three.jpg', position: '50% 45%',
    type: 'image',
    alt: 'Three women walking together up a sunlit grassy hill',
    aspect: '2 / 3', suggested: 'Friends walking together on the coast', tone: 'sand',
  },
  {
    id: 'home-world-corporate', src: '/media/long-table-overhead-group.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A group gathered around a long table set with lemons and shared plates, seen from directly above',
    aspect: '3 / 2', suggested: 'A corporate team at the shared table', tone: 'salt',
  },
  {
    id: 'home-world-corporate-alt', src: '/media/deck-breathwork-sky.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Guests lying on towels along a timber deck under a wide bright sky',
    aspect: '3 / 2', suggested: 'A team resting together on the deck', tone: 'salt',
  },

  // Home closing band, redesign 27-09-2026: the page ends at dusk.
  {
    id: 'home-close', src: '/media/beach-dusk-drone.jpg', position: '50% 60%',
    type: 'image',
    alt: 'Two people at the water’s edge on a long beach in the last evening light, seen from the air',
    aspect: '16 / 9',
    suggested: 'Summer drone footage at dusk, slowed',
    tone: 'dusk',
  },

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
    id: 'private-hero', src: '/media/table-lemons-sea-2.jpg', position: '50% 40%',
    type: 'image',
    alt: 'Two women setting a long table with lemons and olive linen, the sea bright beyond the windows',
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
    id: 'retreats-hero', src: '/media/deck-sea-guests.jpg', position: '50% 40%',
    type: 'image',
    alt: 'Guests talking on a sunlit timber deck above turquoise sea, Fleurieu Peninsula',
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
    id: 'retreats-format-half-day', src: '/media/deck-breathwork-sky.jpg', position: '50% 60%',
    type: 'image',
    alt: 'Guests lying on towels along a timber deck under a wide bright sky',
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
    id: 'retreats-format-weekend', src: '/media/coast-cove-house-drone.jpg', position: '30% 55%',
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
    // Filled 28-09-2026 (Jess E4: the coast answer had a photo, the vineyard answer none).
    id: 'enquire-vineyard', src: '/media/beresford-estate-vines-sky.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Rows of vines running up to Beresford Estate under a bright sky, Blewitt Springs, McLaren Vale',
    aspect: '4 / 3',
    suggested: 'Beresford Accom images, the vineyard',
    tone: 'sand',
    grade: 'A',
  },
  {
    // Filled 28-09-2026 with Belle's portrait from Our story (same file as person-belle-redden).
    id: 'enquire-thanks', src: '/media/belle-redden-portrait.jpg', position: '50% 30%',
    type: 'image',
    alt: 'Belle Redden in white, seated by the deck with the sea behind her',
    aspect: '4 / 5',
    suggested: 'Portrait of Belle needed (plan/11 4.23). Same shoot as the team portraits',
    tone: 'salt',
  },
  // Lane L2 rebuild 28-09-2026: openers, pairs, quotes, panels and closing frames on the buyers' path.
  {
    // Belle's own retreat edit (28-09-2026): the long lemon table, hands, fire, bowls, guests laughing at sunrise.
    id: 'a-private-opener-film', src: '/media/retreat-day-edit.mp4', srcMobile: '/media/retreat-day-edit-portrait.mp4', poster: '/media/retreat-day-edit-poster-open.jpg',
    type: 'video',
    alt: 'Moments from a La maréa retreat day: hands reaching across a long table set with lemons, a fire burning, shared bowls, and guests laughing together at sunrise',
    aspect: '16 / 9', suggested: 'Belle\'s retreat edit', tone: 'sand', grade: 'A',
  },
  {
    id: 'a-private-opener', src: '/media/deck-sea-guests.jpg', position: '50% 40%',
    type: 'image',
    alt: 'Three friends talking over fruit and drinks on a sunlit timber deck above a turquoise sea, clouds in a blue sky',
    aspect: '16 / 9', suggested: 'A private group together at the table', tone: 'sand',
  },
  {
    id: 'a-private-opener-phone', src: '/media/table-three-women-sea.jpg', position: '64% 42%',
    type: 'image',
    alt: 'Three friends setting a long table with lemons, one pouring water, the sea bright beyond the windows',
    aspect: '4 / 5', suggested: 'A private group together at the table', tone: 'sand',
  },
  {
    id: 'a-corporate-opener', src: '/media/long-table-overhead-group.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A group sharing lunch around one long green table set with lemons, seen from directly above',
    aspect: '16 / 9', suggested: 'A corporate team at the shared table. The Ray White shoot only with written permission', tone: 'salt', grade: 'A',
  },
  {
    id: 'a-private-walk', src: '/media/hillside-walk-three.jpg', position: '50% 45%',
    type: 'image',
    alt: 'Three women walking together up a sunlit grassy hill',
    aspect: '4 / 5', suggested: 'Friends together on the coast', tone: 'sand',
  },
  {
    id: 'a-detail-oil-bread', src: '/media/olive-oil-bread.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bottle of extra virgin olive oil with bread and herbs set out before lunch',
    aspect: '4 / 5', suggested: 'A detail from the shared table', tone: 'sand',
  },
  {
    id: 'a-corporate-rest', src: '/media/barrel-sauna-cliff.jpg', position: '50% 60%',
    type: 'image',
    alt: 'A barrel sauna with towels and a cold tub on the clifftop above the sea',
    aspect: '4 / 5', suggested: 'Contrast therapy on the clifftop', tone: 'sea',
  },
  {
    id: 'a-detail-bowls', src: '/media/bowls-hands-overhead.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Hands reaching across a table to build bowls from carrot, edamame, cabbage and nori',
    aspect: '4 / 5', suggested: 'A detail from the nutrition workshop', tone: 'sand',
  },
  {
    id: 'a-quotes-private', src: '/media/deck-stretch-sea.jpg', position: '50% 45%',
    type: 'image',
    alt: 'A woman in a side stretch on the deck, the sea and the grassy headland beyond',
    aspect: '3 / 4', suggested: 'A Sunset Reset photograph once Belle sends the set', tone: 'salt',
  },
  {
    id: 'a-quotes-corporate', src: '/media/deck-breathwork-sky.jpg', position: '50% 82%',
    type: 'image',
    alt: 'Guests lying on towels along a timber deck under a wide bright sky',
    aspect: '3 / 4', suggested: 'A corporate retreat photograph with permission', tone: 'sea',
  },
  {
    id: 'a-day-opener', src: '/media/naiko-deep-creek-drone-pan.mp4', poster: '/media/naiko-deep-creek-drone-pan-poster.jpg',
    type: 'video',
    alt: 'A slow drone pan across Naiko Deep Creek, the retreat house on the green hill above a turquoise cove',
    aspect: '16 / 9', suggested: 'DJI_20251109100906_0030_D, the Naiko Deep Creek pan', tone: 'sea', grade: 'A',
  },
  {
    id: 'a-rotation-massage', src: '/media/massage-towel-rest.jpg', position: '50% 62%',
    type: 'image',
    alt: 'A guest resting under a towel on the treatment table, light through an oval window',
    aspect: '16 / 10', suggested: 'A treatment still from the summer shoot', tone: 'salt',
  },
  {
    id: 'a-rotation-sauna', src: '/media/barrel-sauna-cliff.jpg', position: '50% 62%',
    type: 'image',
    alt: 'A barrel sauna with towels and a cold tub on the clifftop above the sea',
    aspect: '16 / 10', suggested: 'Contrast therapy on the clifftop', tone: 'sea',
  },
  {
    id: 'a-rotation-workshop', src: '/media/bowls-hands-overhead.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Hands reaching across a table to build bowls from carrot, edamame, cabbage and nori',
    aspect: '16 / 10', suggested: 'Belle presenting her session, with guest consent', tone: 'sand',
  },
  {
    id: 'a-retreats-opener', src: '/media/drone-golden-hills-blue-sky.jpg', position: '50% 30%',
    type: 'image',
    alt: 'Golden summer hills above dark cliffs and a thin line of emerald water, under a clear blue sky, Fleurieu Peninsula',
    aspect: '16 / 9', suggested: 'DJI_0604, cliffs and white beach', tone: 'sea', grade: 'A',
  },
  {
    id: 'a-retreats-opener-phone', src: '/media/fleurieu-cliffs-white-beach-drone-poster-portrait.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Golden hills and dark cliffs above a white beach and emerald water under a clear blue sky, Fleurieu Peninsula',
    aspect: '4 / 5', suggested: 'DJI_0604, portrait cut', tone: 'sea', grade: 'A',
  },
  {
    id: 'a-retreats-day', src: '/media/deck-stretch-sea.jpg', position: '50% 40%',
    type: 'image',
    alt: 'A woman in a side stretch on the deck, the sea and the grassy headland beyond',
    aspect: '16 / 9', suggested: 'The 8 hour immersive retreat, movement on the deck', tone: 'salt',
  },
  {
    id: 'a-close-cliffs', src: '/media/fleurieu-cliffs-white-beach-drone.mp4', srcMobile: '/media/fleurieu-cliffs-white-beach-drone-portrait.mp4', poster: '/media/fleurieu-cliffs-white-beach-drone-poster.jpg',
    type: 'video',
    alt: 'A slow drone drift along golden hills and dark cliffs above a white beach and emerald water, boats moored in the bay',
    aspect: '16 / 9', suggested: 'DJI_0604, seconds 0.5 to 11.5', tone: 'sea', grade: 'A',
  },
  {
    id: 'a-close-emerald', src: '/media/drone-emerald-water-boats-top-down.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Emerald shallows and three white boats beside a rock edge, seen from directly above',
    aspect: '16 / 9', suggested: 'DJI_0604 still', tone: 'sea', grade: 'A',
  },
  {
    id: 'a-close-coast', src: '/media/drone-coastline-deep-blue.jpg', position: '50% 50%',
    type: 'image',
    alt: 'The Fleurieu coastline receding into a deep blue bay, emerald water near the shore',
    aspect: '16 / 9', suggested: 'DJI_0604 still', tone: 'sea', grade: 'A',
  },
  {
    id: 'a-close-hills', src: '/media/drone-golden-hills-blue-sky.jpg', position: '50% 40%',
    type: 'image',
    alt: 'Golden summer hills above dark cliffs and a thin line of emerald water, under a clear blue sky',
    aspect: '16 / 9', suggested: 'DJI_0604 still', tone: 'sea', grade: 'A',
  },
  {
    id: 'a-enquire-arch', src: '/media/coast-cove-house-drone.jpg', position: '34% 50%',
    type: 'image',
    alt: 'The retreat house on a green hillside above the cliffs and a turquoise cove at Deep Creek, seen from the air',
    aspect: '3 / 4', suggested: 'A calm coastal frame', tone: 'sea',
  },
  {
    id: 'a-thanks-bath', src: '/media/bath-window-sea.jpg', position: '50% 60%',
    type: 'image',
    alt: 'The freestanding bath beside a tall window onto the hills and sea at Naiko Deep Creek, a candle on the stool',
    aspect: '4 / 5', suggested: 'Belle’s portrait replaces this once it arrives', tone: 'salt',
  },
  {
    id: 'a-gift-large', src: '/media/olive-oil-wine-bread.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Local olive oil, red wine and bread set out on a small table in a bright room',
    aspect: '4 / 5', suggested: 'A styled, bright gift box shot from Belle', tone: 'sand',
  },
  {
    id: 'a-gift-box', src: '/media/gift-box.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A La maréa gift box with wine, a candle and small wellness gifts',
    aspect: '4 / 5', suggested: 'A styled, bright gift box shot from Belle', tone: 'sand',
  },
  {
    id: 'a-waitlist-opener', src: '/media/bay-cliff-walk-drone.jpg', position: '50% 55%',
    type: 'image',
    alt: 'A bright bay with turquoise water below grassy cliffs, a walker on the track above',
    aspect: '16 / 9', suggested: 'A bright coastal frame', tone: 'sea',
  },
  {
    id: 'a-waitlist-opener-phone', src: '/media/beach-walk-bright.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Two people walking along a beach below the cliffs in bright afternoon sun',
    aspect: '16 / 9', suggested: 'A bright beach frame', tone: 'sea',
  },
  {
    id: 'a-waitlist-sunset', src: '/media/beach-dusk-drone.jpg', position: '62% 80%',
    type: 'image',
    alt: 'Two people at the water’s edge on a long beach in the evening light, seen from the air',
    aspect: '3 / 4', suggested: 'A Sunset Reset photograph', tone: 'dusk',
  },
  {
    id: 'a-waitlist-weekend', src: '/media/coast-cove-house-drone.jpg', position: '30% 55%',
    type: 'image',
    alt: 'The retreat house on a green hillside above the cliffs and a turquoise cove, seen from the air',
    aspect: '3 / 4', suggested: 'The Women’s Wellness Weekend', tone: 'sea',
  },
  {
    id: 'a-waitlist-releases', src: '/media/drone-hidden-cove-white-sand.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A hidden white-sand cove inside pale cliffs above a turquoise reef, seen from the air',
    aspect: '3 / 4', suggested: 'Retreat releases', tone: 'sea',
  },
  {
    id: 'a-404', src: '/media/drone-emerald-water-boats-top-down.jpg', position: '40% 50%',
    type: 'image',
    alt: 'Emerald shallows and three white boats beside a rock edge, seen from directly above',
    aspect: '16 / 9', suggested: 'A calm coastal frame', tone: 'sea',
  },
];

export const slots: MediaSlot[] = raw.map((s) => ({ ...s, note: s.note ? `${s.note} ${GRADE}` : GRADE }));
