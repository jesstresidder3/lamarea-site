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
    // Home opening: Belle's DJI_0604 (from her WEBSITE Drive folder), seconds 91 to 104 (13 seconds; re-cut
    // 28-09-2026 one second shorter at the start, Jess H1), a top-down glide from reef shadow into turquoise
    // shallows ending at the rock edge with two boats. 1600 wide and 720x1280 portrait (crop 1215:2160:2625:0).
    id: 'home-hero-video', src: '/media/hero-emerald-shallows-drone.mp4', srcMobile: '/media/hero-emerald-shallows-drone-portrait.mp4', poster: '/media/hero-emerald-shallows-poster.jpg',
    type: 'video',
    alt: 'Looking straight down from the air over clear emerald water, reef shadows giving way to bright turquoise shallows beside a rocky shore where two small boats are moored, Fleurieu Peninsula',
    aspect: '16 / 9',
    suggested: 'DJI_0604.MP4, seconds 91 to 104',
    tone: 'sea',
    grade: 'A',
  },
  {
    // The still the two halves of the opening hold as the scene parts (the video's first frame, second 91).
    id: 'home-hero-still', src: '/media/hero-emerald-shallows-poster.jpg', srcMobile: '/media/hero-emerald-shallows-poster-portrait.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Clear emerald water seen from directly above, reef shadows beneath the surface, Fleurieu Peninsula',
    aspect: '16 / 9',
    suggested: 'DJI_0604.MP4 frame at 91 seconds',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'home-hero', src: '/media/bay-cliff-walk-drone.jpg', position: '64% 55%',
    type: 'image',
    alt: 'A bright bay of turquoise water and white surf below a grassy headland, with two walkers on the clifftop track, Fleurieu Peninsula, seen from the air',
    aspect: '16 / 9',
    suggested: 'Drone video DJI_0781.MP4, bird’s eye along the coast. Alternates DJI_0604.MP4 (pan away from the coastline) or the unnumbered left pan across the hills',
    note: 'Slow to about 0.6x only if the source frame rate allows. Portrait crop for phones. One autoplay loop per page.',
    tone: 'salt',
    grade: 'B',
  },

  // Menu overlay photograph, crossfading per primary link ------------------
  {
    id: 'menu-default', src: '/media/coast-cove-house-drone.jpg', position: '45% 60%',
    type: 'image',
    alt: 'The retreat house on a green hillside above a turquoise cove, Fleurieu Peninsula, seen from the air',
    aspect: '4 / 5',
    suggested: 'Naiko At The Bluff Content, a coastal view from the deck',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'menu-private-groups', src: '/media/table-three-women-sea.jpg', position: '50% 40%',
    type: 'image',
    alt: 'Three women around the long table by the windows onto the sea',
    aspect: '4 / 5',
    suggested: 'la marea naiko jpegs, a group moment. Alternate: A Sunset Reset (May 2026 Joe’s Henley) group image',
    note: 'Guest consent needed before any retreat photograph with faces is used.',
    tone: 'sand',
  },
  {
    id: 'menu-corporate', src: '/media/long-table-overhead-group.jpg', position: '52% 50%',
    type: 'image',
    alt: 'A group sharing lunch around the long table, seen from above',
    aspect: '4 / 5',
    suggested: 'Beresford Accom images (9 professional files). The Ray White shoot replaces it once the Dropbox opens and permission is given',
    tone: 'dusk',
    grade: 'A',
  },
  {
    id: 'menu-the-day', src: '/media/deck-sea-guests.jpg', position: '50% 45%',
    type: 'image',
    alt: 'Guests settling on the sunlit deck of the retreat house, the sea and sky beyond',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8255.jpg',
    tone: 'sand',
  },

  // Zoom mosaic (build spec section 12): the centre frame is NOT beach, and the five stills around
  // it are the offer itself.
  {
    id: 'zoom-centre', src: '/media/bay-cliff-walk-drone.jpg', position: '55% 55%',
    type: 'image',
    alt: 'A walker on the clifftop track above a bright bay of turquoise water and white sand, seen from the air',
    aspect: '16 / 10',
    suggested: 'The unnumbered left pan across the hills (BD-107, X12). Alternate: a Beresford Accom images vineyard frame',
    note: 'Launch as a still (the hero is the page’s one autoplay loop). This frame ends at full screen, so use the full-resolution frame. Not a beach shot.',
    tone: 'dusk',
    grade: 'B',
  },
  {
    id: 'zoom-yoga', src: '/media/deck-stretch-sea.jpg', position: '50% 45%',
    type: 'image',
    alt: 'A woman in a side stretch on the deck, the sea and the grassy headland beyond',
    aspect: '4 / 5',
    suggested: 'movement.mp4 poster frame (branding pillar video), yoga on a deck',
    tone: 'salt',
  },
  {
    id: 'zoom-table', src: '/media/long-table-overhead-group.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A group sharing lunch around one long table, seen from above',
    aspect: '3 / 2',
    suggested: 'Food folder 229A8255.jpg. Alternate Food folder 229A8436.CR2 (RAW, convert)',
    tone: 'sand',
  },
  {
    id: 'zoom-plunge', src: '/media/hillside-walk-three.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Three women walking up a grassy hillside in the sun',
    aspect: '4 / 5',
    suggested: 'Beresford Accom images, the plunge pool',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'zoom-massage', src: '/media/massage-face.jpg', position: '50% 55%',
    type: 'image',
    alt: 'A therapist\'s hands resting on a guest\'s forehead during a treatment',
    aspect: '1 / 1',
    suggested: 'la marea naiko jpegs, a massage in the rotation. No confirmed file yet (plan/11 Q10)',
    tone: 'dusk',
  },
  {
    id: 'zoom-bath', src: '/media/bath-window-sea.jpg', position: '50% 72%',
    type: 'image',
    alt: 'A freestanding bath beside a tall window onto the hills and sea, a candle lit on the stool',
    aspect: '16 / 10',
    suggested: 'Bath shot landscape.jpg, Naiko Deep Creek',
    tone: 'salt',
  },

  // The Day, pinned panels (spec 10.2 moment 4, stills at launch) ----------
  {
    id: 'day-base', src: '/media/hills-coast-drone-wide.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Grassy hills running down to the sea along the Fleurieu coast',
    aspect: '4 / 5',
    suggested: 'Still from the unnumbered left pan across the hills (BD-107), or DJI_0604.MP4',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'day-arrive', src: '/media/deck-sea-guests.jpg', position: '50% 45%',
    type: 'image',
    alt: 'Guests settling on the sunlit deck of the retreat house, the sea and sky beyond',
    aspect: '4 / 5',
    suggested: 'Beresford Accom images, the arrival or the house in morning light',
    note: 'Video can swap in after the summer shoot.',
    tone: 'salt',
    grade: 'A',
  },
  {
    id: 'day-move', src: '/media/deck-breathwork-sky.jpg', position: '50% 60%',
    type: 'image',
    alt: 'Guests lying on towels along the sunlit deck under a big sky',
    aspect: '16 / 10',
    suggested: 'movement.mp4 poster frame (branding pillar video), yoga or mat pilates',
    note: 'No photograph yet of the three rotation stations running (plan/11 Q10).',
    tone: 'sand',
  },
  {
    id: 'day-nourish', src: '/media/long-table-overhead-group.jpg', position: '52% 50%',
    type: 'image',
    alt: 'A group sharing lunch around the long table, seen from above',
    aspect: '16 / 10',
    suggested: 'Food folder 229A8255.jpg',
    tone: 'sand',
  },
  {
    // Redesign 27-09-2026: Belle does not want the bath as a home image (T55, "that isn't, like, a summary
    // travel vibes"). Restore now shows guests by the fire, which is one of the Restore lines in her schedule.
    id: 'day-restore', src: '/media/deck-rest-faces.jpg', position: '50% 45%',
    type: 'image',
    alt: 'Guests resting with their eyes closed on the sunlit deck',
    aspect: '16 / 9',
    suggested: 'Beresford Accom images, the venue in late light (full-bleed panel, text sits lower left)',
    tone: 'sand',
    grade: 'A',
  },

  // Styleguide demonstrations only ---------------------------------------
  {
    id: 'sg-band', src: '/media/hills-coast-drone.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Farmland and hills meeting the rocky coast of the Fleurieu Peninsula, seen from the air',
    aspect: '21 / 9',
    suggested: 'Still from DJI_0604.MP4, paired with Beresford Accom images so the band is coast and vineyard together',
    tone: 'sea',
  },
  {
    id: 'sg-pair', src: '/media/trail-trees-sea.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Two women walking a track through the trees towards the sea',
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
    id: 'sg-dining', src: '/media/fish-mussels-plate.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A group sharing lunch around the long table, seen from above',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8255.jpg',
    tone: 'sand',
  },
  {
    id: 'sg-pasta', src: '/media/tortelli-plate.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bowl of tortelli with peas and greens on an orange table',
    aspect: '4 / 5',
    suggested: 'Copy of Say Cheese-Pasta Party-Arne Studio-103 3.JPG (provenance unconfirmed)',
    tone: 'dusk',
  },
  {
    id: 'sg-thumb-1', src: '/media/surf-rocks-from-above.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Waves rolling onto a small beach between dark rocks, seen from above',
    aspect: '4 / 5',
    suggested: 'Naiko At The Bluff Content',
    tone: 'sea',
  },
  {
    id: 'sg-thumb-2', src: '/media/bowl-held.jpg', position: '50% 55%',
    type: 'image',
    alt: 'A bowl of rice, edamame, carrot, red cabbage and nori held in two hands',
    aspect: '4 / 5',
    suggested: 'nutrition.mp4 poster frame (branding pillar video)',
    tone: 'sand',
  },
  {
    id: 'sg-thumb-3', src: '/media/breathwork-verandah.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A facilitator standing over a group lying on mats under a verandah',
    aspect: '4 / 5',
    suggested: 'connection.mp4 poster frame (branding pillar video)',
    tone: 'salt',
  },
  // Rebuild round 1, 28-09-2026 (L1): the home story and the shared closing ------------------
  {
    // Home, the story begins: DJI_0604, seconds 64 to 77, the calm open sea from above with the sun on
    // the water. Re-cut 28-09-2026 (Jess H4, "move the text off the rock onto the ocean"): the earlier
    // cliffs and white beach passage (0.5 to 11.5) left under a fifth of the frame as water, so Belle's
    // line sat on rock. 1600x900 and 720x1280 portrait (crop 1215:2160:1312:0), 13 seconds, 30fps.
    // The cliffs clip still opens /fleurieu-peninsula-retreats and closes the full day page.
    id: 'home-fleurieu-video', src: '/media/home-calm-sea-drone.mp4', srcMobile: '/media/home-calm-sea-drone-portrait.mp4', poster: '/media/home-calm-sea-drone-poster.jpg',
    type: 'video',
    alt: 'Looking down from the air on calm turquoise sea off the Fleurieu Peninsula, the sun glittering across the water',
    aspect: '16 / 9',
    suggested: 'DJI_0604.MP4, seconds 64 to 77',
    tone: 'sea',
    grade: 'A',
  },
  {
    // P5 ClosingTide default, every page: DJI_0604, 50 to 61 seconds, the coastline pulling away.
    id: 'closing-tide', src: '/media/fleurieu-coastline-receding-drone.mp4', srcMobile: '/media/fleurieu-coastline-receding-drone-portrait.mp4', poster: '/media/fleurieu-coastline-receding-drone-poster.jpg',
    type: 'video',
    alt: 'The Fleurieu coastline pulling away into the distance from the air, the water turning from emerald near the shore to deep blue, small boats at the foot of the cliffs',
    aspect: '16 / 9',
    suggested: 'DJI_0604.MP4, seconds 50 to 61',
    tone: 'sea',
    grade: 'A',
  },
  {
    // /contact opener (Jess G7, 28-09-2026): the coastline under open sky, calm top-left for the title.
    id: 'contact-opener', src: '/media/drone-coastline-deep-blue.jpg', position: '30% 50%',
    type: 'image',
    alt: 'Golden headlands dropping into emerald and deep blue water under a clear sky, the Fleurieu coastline seen from the air',
    aspect: '16 / 9',
    suggested: 'DJI_0604.MP4, the coastline receding',
    tone: 'sea',
    grade: 'A',
  },
  {
    // The same ending as a still, for pages that already carry a video.
    id: 'closing-tide-still', src: '/media/drone-hidden-cove-white-sand.jpg', position: '50% 55%',
    type: 'image',
    alt: 'A hidden white-sand cove inside pale cliffs above a turquoise reef, Fleurieu Peninsula, seen from the air',
    aspect: '16 / 9',
    suggested: 'DJI_0605.MP4 frame at 24 seconds',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'home-difference', src: '/media/drone-hidden-cove-white-sand.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A hidden white-sand cove inside pale cliffs above a turquoise reef, Fleurieu Peninsula, seen from the air',
    aspect: '4 / 5',
    suggested: 'DJI_0605.MP4 frame at 24 seconds',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'home-difference-detail', src: '/media/kangaroo-paddock.jpg', position: '50% 60%',
    type: 'image',
    alt: 'A kangaroo standing in long grass under the trees',
    aspect: '1 / 1',
    suggested: 'Wildlife still from the Fleurieu',
    tone: 'sand',
  },
  // Home, the food beat (T48, "to the food, and what that looks like")
  { id: 'home-food-table', src: '/media/long-table-overhead.jpg', position: '50% 50%', type: 'image', alt: 'The long table from above, set with green linen, lemons, herbs and shared plates', aspect: '3 / 4', suggested: 'homepage3', tone: 'sand', grade: 'A' },
  { id: 'home-food-kingfish', src: '/media/kingfish-plate.jpg', position: '50% 50%', type: 'image', alt: 'Slices of kingfish with orange and herb oil on a white plate', aspect: '1 / 1', suggested: 'Kingfish 2025', tone: 'sand', grade: 'A' },
  { id: 'home-food-chef', src: '/media/chef-green-oil-detail.jpg', position: '50% 55%', type: 'image', alt: 'A chef finishing plated fish with a line of green herb oil', aspect: '3 / 2', suggested: '229A8911', tone: 'sand', grade: 'A' },
  { id: 'home-food-tortelli', src: '/media/tortelli-plate.jpg', position: '50% 50%', type: 'image', alt: 'Handmade tortelli in a speckled bowl beside yellow flowers', aspect: '1 / 1', suggested: 'Tortelli 2025', tone: 'sand', grade: 'A' },
  { id: 'home-food-sweet', src: '/media/balance-brownies-berries.jpg', position: '50% 40%', type: 'image', alt: 'A woman smiling as she is handed a plate of brownies and fresh berries', aspect: '3 / 4', suggested: 'Balance pillar image', tone: 'sand', grade: 'A' },
  // Home, guests' words: one photograph per kind of day, never a plate
  { id: 'home-experiences-lead', src: '/media/deck-stretch-sea.jpg', position: '50% 45%', type: 'image', alt: 'A guest in a side stretch on the deck, the sea and headland beyond', aspect: '4 / 5', suggested: 'homepage8', tone: 'salt', grade: 'A' },
  { id: 'home-guests-retreat', src: '/media/beach-walk-bright.jpg', position: '50% 60%', type: 'image', alt: 'Two people walking along a sunlit beach below the cliffs', aspect: '4 / 5', suggested: '229A9426', tone: 'salt', grade: 'A' },
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
