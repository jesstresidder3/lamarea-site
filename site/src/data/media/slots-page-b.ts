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
    id: 'day-hero', src: '/media/deck-breathwork-sky.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Guests lying on towels along the deck under a big sky, the sea beyond the rail',
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
    id: 'day-rotation-massage', src: '/media/massage-towel-rest.jpg', position: '50% 60%',
    type: 'image',
    alt: 'A guest resting under a towel on the treatment table, light through an oval window',
    aspect: '5 / 4',
    suggested: 'No photograph of the rotation running yet (plan/11 Q10). Ask Courtney Selfe (The Earth House and Spa) for a treatment still, or the summer shoot',
    tone: 'salt',
  },
  {
    id: 'day-rotation-contrast', src: '/media/sauna-cold-tubs-cliff.jpg', position: '55% 60%',
    type: 'image',
    alt: 'A barrel sauna and two cold tubs on the clifftop above the sea',
    aspect: '5 / 4',
    suggested: 'No confirmed contrast therapy frame (S2, Q10). First look: a still from sleep.mp4 in the ' + pillarVideos,
    tone: 'sea',
  },
  {
    id: 'day-rotation-workshop', src: '/media/bowls-hands-overhead.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Hands reaching across a table to build bowls from carrot, edamame, cabbage and nori',
    aspect: '5 / 4',
    suggested: 'Belle presenting her session, A Sunset Reset set (May 2026, Joe’s Henley, 223 JPEGs). Guest consent needed for anyone identifiable',
    tone: 'sand',
  },
  {
    id: 'day-afternoon', src: '/media/headland-late-light-drone.jpg', position: '50% 45%',
    type: 'image',
    alt: 'Late sun breaking over the sea above a grassy headland and the retreat house',
    aspect: '21 / 9',
    suggested: 'Naiko At The Bluff Content (16 files), the pool and the sea in afternoon light. Alternate: the Beresford plunge pool terrace from Beresford Accom images',
    note: 'Full-bleed band with a slow parallax. Nature and water in frame (X10).',
    tone: 'sea',
    grade: 'A',
  },

  /* ------------------------------------------------ /experiences */
  {
    id: 'experiences-hero', src: '/media/deck-stretch-sea.jpg', position: '50% 45%',
    type: 'image',
    alt: 'A woman in a side stretch on the deck, the sea and the grassy headland beyond',
    aspect: '16 / 9',
    suggested: 'movement.mp4 in the ' + pillarVideos + '. Resolve the duplicate Movement.mp4 first (plan/11 item 80)',
    note: 'The page’s one autoplay loop until the experience tiles play.',
    tone: 'salt',
    grade: 'B',
  },
  {
    id: 'experiences-together', src: '/media/table-lemons-sea.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Two women setting a long table with lemons beside windows onto the sea',
    aspect: '3 / 2',
    suggested: 'Beresford Accom images (9 professional files), a wide frame of the estate. Alternate: Food folder 229A8255.jpg',
    tone: 'sand',
    grade: 'A',
  },

  /* ------------------------------------------------ /philosophy and /philosophy/<pillar> */
  {
    id: 'philosophy-hero', src: '/media/bay-cliff-walk-drone.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bright bay with turquoise water below grassy cliffs, a walker on the track above',
    aspect: '16 / 9',
    suggested: '"MAIN COMPILATION.mp4" in the ' + pillarVideos,
    note: 'Slowed in post only if the frame rate allows. Portrait crop for phones.',
    tone: 'salt',
    grade: 'B',
  },
  {
    id: 'philosophy-tide', src: '/media/surf-rocks-from-above.jpg', position: '40% 50%',
    type: 'image',
    alt: 'Waves rolling onto a small beach between dark rocks, seen from above',
    aspect: '4 / 5',
    suggested: 'A still from DJI_0781.MP4 (bird’s eye along the coast, rocks and water). Alternate: DJI_0604.MP4',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'pillar-hero-sleep-and-recovery', src: '/media/bath-naiko-deep-creek.mp4', srcMobile: '/media/bath-naiko-deep-creek-portrait.mp4', poster: '/media/bath-video-poster.jpg',
    type: 'video',
    alt: 'A freestanding bath filling beside floor-to-ceiling windows over the sea, candles and a tea tray set beside it',
    aspect: '21 / 9',
    suggested: 'sleep.mp4 in the ' + pillarVideos + '. Alternate still: the bedroom image credited "Naiko, Deep Creek" on the live sleep article',
    tone: 'dusk',
  },

  /* ------------------------------------------------ /food, The Table */
  {
    id: 'food-hero', src: '/media/table-lemons-sea.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Two women setting a long table with lemons beside windows onto the sea',
    aspect: '16 / 9',
    suggested: 'Food folder 229A8255.jpg. Alternate 229A8436.CR2 (RAW, convert), or the nutrition.mp4 poster. Food photography is thin (assets-index gap 7)',
    note: 'Full-bleed. Light and warm, never a dark restaurant shot.',
    tone: 'sand',
  },
  {
    id: 'food-fine-dining', src: '/media/kingfish-plate.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Slices of kingfish with orange, dill and green oil on a speckled plate',
    aspect: '4 / 5',
    suggested: 'Food folder 229A8436.CR2 (RAW, convert), a plated detail. Aromi Dining lunch photographs if Belle has them',
    tone: 'salt',
  },
  {
    id: 'food-shared-table', src: '/media/lunch-table-glasses.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Guests at the lunch table with plates, wine and lemons',
    aspect: '3 / 2',
    suggested: 'Food folder 229A8255.jpg, or the long-table lunch from a 2026 corporate retreat (Instagram feed). Guest consent needed for faces',
    tone: 'sand',
  },

  /* ------------------------------------------------ L4 rebuild, 28-09-2026 (Story and proof lane) */
  /* Openers */
  {
    id: 'story-opener', src: '/media/belle-kitchen-fruit.jpg', position: '62% 42%',
    type: 'image',
    alt: 'Belle Redden in a bright white kitchen, a table of watermelon, citrus and greens in front of her',
    aspect: '16 / 9',
    suggested: 'Belle’s own portrait from lamarea.com.au/our-story (Wix media 6ffd4a_218f8468)',
    tone: 'salt',
  },
  {
    id: 'story-cove-video', src: '/media/hidden-cove-reveal-drone.mp4', srcMobile: '/media/hidden-cove-reveal-drone-portrait.mp4', poster: '/media/hidden-cove-reveal-drone-poster.jpg',
    type: 'video',
    alt: 'The drone tilts up from a turquoise reef to a hidden white sand cove inside pale cliffs',
    aspect: '21 / 9',
    suggested: 'DJI_0605.MP4, seconds 21 to 29.5',
    tone: 'sea',
  },
  {
    id: 'story-beach-bright', src: '/media/beach-walk-bright.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Two people walking a sunlit beach beneath pale cliffs',
    aspect: '4 / 5',
    suggested: 'Pool 229A9426',
    tone: 'sea',
  },
  {
    id: 'story-kangaroo', src: '/media/kangaroo-paddock.jpg', position: '50% 60%',
    type: 'image',
    alt: 'A kangaroo standing in long grass beneath the trees',
    aspect: '1 / 1',
    suggested: 'Pool, kangaroo in the paddock',
    tone: 'sand',
  },
  {
    id: 'story-table-sea', src: '/media/table-lemons-sea.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Two women setting a long table with lemons beside windows onto the sea',
    aspect: '4 / 5',
    suggested: 'Pool 229A8736',
    tone: 'sand',
  },
  {
    id: 'story-oil-bread', src: '/media/olive-oil-bread.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Olive oil poured beside torn bread on the table',
    aspect: '1 / 1',
    suggested: 'Pool, olive oil and bread',
    tone: 'sand',
  },
  {
    id: 'story-hosts-photo', src: '/media/hosts-belle-zoe-sarah.jpg', position: '50% 40%',
    type: 'image',
    alt: 'Belle seated on the left, her sister Zoe on the right and Sarah standing behind them, all in white by a window',
    aspect: '4 / 5',
    suggested: 'The hosts photograph from lamarea.com.au/our-story (Wix media 6ffd4a_b52439de)',
    tone: 'salt',
  },
  {
    id: 'philosophy-opener', src: '/media/bay-cliff-walk-drone.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bright bay with turquoise water below grassy cliffs, a walker on the track above',
    aspect: '16 / 9',
    suggested: 'Pool homepage12',
    tone: 'sea',
  },
  {
    id: 'team-opener', src: '/media/yoga-deck-rail-sea.jpg', position: '50% 38%',
    type: 'image',
    alt: 'A yoga teacher in a standing pose on the deck, one arm raised, the sea and a golden headland beyond the rail',
    aspect: '16 / 9',
    suggested: 'Drive, Wellness Partners, Photos - Jaimi Baker (yoga), 229A8622',
    tone: 'sea',
  },

  /* People: portraits from Belle's Drive (Wellness Partners folders) and her live site */
  { id: 'person-belle-redden', src: '/media/belle-redden-portrait.jpg', position: '50% 30%', type: 'image', alt: 'Belle Redden in white, seated by the deck with the sea behind her', aspect: '4 / 5', tone: 'salt', suggested: 'lamarea.com.au/our-story (Wix media 6ffd4a_da04ab1a)' },
  { id: 'person-jaimi-baker', src: '/media/yoga-deck-rail-sea.jpg', position: '50% 45%', type: 'image', alt: 'A yoga pose on the deck, one arm raised towards the sea', aspect: '4 / 5', tone: 'sea', suggested: 'Drive, Photos - Jaimi Baker (yoga), 229A8622. Belle to confirm a portrait of Jaimi' },
  { id: 'person-kristian-ryan', src: '/media/kris-ryan-third-spaces.jpg', position: '50% 35%', type: 'image', alt: 'A facilitator in a black tee talking with his hands, firewood stacked behind him', aspect: '4 / 5', tone: 'salt', suggested: 'Drive, Photos - Kris - Third Spaces Wellness, 229A9311' },
  { id: 'person-luca-guiotto', src: '/media/luca-clifftop-apron.jpg', position: '50% 35%', type: 'image', alt: 'Luca Guiotto in his Aromi apron on the clifftop, the sea behind him', aspect: '4 / 5', tone: 'sea', suggested: 'Drive, Photos - Luca Aromi Dining, 229A8660' },
  { id: 'person-courtney-selfe', src: '/media/courtney-selfe-earth-house.jpg', position: '50% 35%', type: 'image', alt: 'Courtney Selfe in a linen shirt and apron at The Earth House', aspect: '4 / 5', tone: 'sand', suggested: 'lamarea.com.au/partners (Wix media 6ffd4a_25cc764a)' },
  { id: 'person-malissa-fedele', src: '/media/malissa-fedele-portrait.jpg', position: '50% 30%', type: 'image', alt: 'Malissa Fedele smiling in a red top in a bright kitchen', aspect: '4 / 5', tone: 'salt', suggested: 'lamarea.com.au/partners (Wix media 6ffd4a_c26a82ca)' },

  /* What each person leads, at full image size */
  { id: 'work-jaimi-yoga', src: '/media/yoga-side-bend-window.jpg', position: '50% 40%', type: 'image', alt: 'Guests in a side bend by the window, arms reaching over', aspect: '4 / 5', tone: 'salt', suggested: 'Drive, Photos - Jaimi Baker (yoga), 229A8619' },
  { id: 'work-kris-breathwork', src: '/media/breathwork-floor-hills.jpg', position: '50% 55%', type: 'image', alt: 'Guests lying on mats under the verandah as a facilitator walks past, green hills beyond', aspect: '4 / 5', tone: 'salt', suggested: 'Drive, Photos - Kris - Third Spaces Wellness, 229A9330' },
  { id: 'work-kris-sauna', src: '/media/barrel-sauna-towels-sea.jpg', position: '50% 55%', type: 'image', alt: 'Guests with towels beside the barrel sauna on the clifftop, the sea beyond', aspect: '4 / 5', tone: 'sea', suggested: 'Drive, Photos - Kris - Third Spaces Wellness, 229A9314' },
  { id: 'work-luca-plating', src: '/media/luca-plating-window.jpg', position: '50% 40%', type: 'image', alt: 'Luca plating at the kitchen bench by the window, glasses set out beside him', aspect: '4 / 5', tone: 'salt', suggested: 'Drive, Photos - Luca Aromi Dining, 229A8880' },
  { id: 'work-luca-cooking', src: '/media/luca-cooking-guests.jpg', position: '50% 40%', type: 'image', alt: 'Luca at the kitchen bench as two guests watch him cook', aspect: '4 / 5', tone: 'sand', suggested: 'Drive, Photos - Luca Aromi Dining, 229A8705' },
  { id: 'work-courtney-massage', src: '/media/courtney-massage-earth-house.jpg', position: '50% 45%', type: 'image', alt: 'A therapist giving a back massage in a warm, softly lit room', aspect: '4 / 5', tone: 'sand', suggested: 'Drive, Courtney Selfe / Earth House & Spa, earthhouse-22' },
  { id: 'work-malissa-pasta', src: '/media/malissa-pasta-class.jpg', position: '55% 45%', type: 'image', alt: 'Fresh pasta sheets lifted from the machine at a bench of flour and lemons', aspect: '4 / 5', tone: 'salt', suggested: 'Drive, Malissa Fedele, Say Cheese Pasta Party 103' },

  /* The ten pillar films (Drive, Branding pillar videos, 9:16, 720x1280 web cuts) */
  ...([
    ['nutrition', 'nutrition', 'A chef plating at the bench, tea beside lemons, plates of crudo set out and a bowl of edamame passed across the table'],
    ['movement', 'movement', 'Guests walking through golden grass, a yoga pose in the glass room above the sea and two friends on the clifftop'],
    ['sleep-and-recovery', 'sleep', 'A fire glowing, a guest in a cold tub, the bath filling and a back massage'],
    ['psychological-wellbeing', 'psychological', 'A hand writing in a journal, guests resting with their eyes closed and a face mist during a treatment'],
    ['nature-immersion', 'nature', 'Sun through the grass on the headland, a kangaroo in the paddock, the cove from above'],
    ['connection', 'connection', 'Guests laughing together outdoors, a head massage, two friends on the clifftop and conversation in the living room'],
    ['balance', 'balance', 'Berries scattered over a bowl, a stretch, brownies passed across the table and a glass of rosé poured'],
    ['personalisation', 'personalisation', 'Close portraits of guests in quiet moments across the day'],
    ['wellness-education', 'wellness-education', 'Talk around the lunch table, the chef at the kitchen bench, a guest reading on the sofa and a group stretch by the windows'],
    ['luxury-and-heartfelt-hospitality', 'luxury', 'A pillow smoothed, tea lifted by the window, the bath filling and salt poured from a spoon'],
  ] as const).map(([pillar, file, alt]): MediaSlot => ({
    id: `pv-${pillar}`,
    src: `/media/pillar-${file}.mp4`,
    poster: `/media/pillar-${file}-poster.jpg`,
    type: 'video',
    alt,
    aspect: '9 / 16',
    suggested: 'Drive, Branding pillar videos, ' + file + '.mp4 (9:16, 25fps, cut for the web at 720x1280)',
    tone: 'salt',
  })),
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
