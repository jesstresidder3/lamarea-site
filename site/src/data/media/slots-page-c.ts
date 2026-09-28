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
    id: 'places-hero', src: '/media/sauna-cold-tubs-cliff.jpg', position: '50% 48%',
    type: 'image',
    alt: 'A cedar barrel sauna and cold tubs on a clifftop above turquoise water under a bright sky, Fleurieu Peninsula',
    aspect: '16 / 9',
    suggested: 'Naiko At The Bluff Content, the villa exterior with the sea. Alternate: Beresford Accom images, the drone shot over the vines (plan/11 4.9)',
    note: 'A partner venue in its landscape, never a room interior. Wide frame, the building small in the land.',
    tone: 'sea',
    grade: 'A',
  },

  /* ------------------------------------------------------------------ /places/<slug> heroes */
  {
    id: 'venue-hero-naiko-deep-creek', src: '/media/bath-naiko-deep-creek.mp4', srcMobile: '/media/bath-naiko-deep-creek-portrait.mp4', poster: '/media/bath-video-poster.jpg',
    type: 'video',
    alt: 'A freestanding bath filling beside floor-to-ceiling windows over the sea at Naiko, Deep Creek, candles and a tea tray beside it',
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
    id: 'venue-around-naiko-deep-creek', src: '/media/drone-naiko-cove-open-sea.jpg', position: '50% 55%',
    type: 'image',
    alt: 'Naiko Deep Creek from the air, the house above basalt cliffs and a cove opening to the sea',
    aspect: '21 / 9',
    suggested: 'DJI_20251109100906_0030_D.MP4, the only file in the Naiko deep creek folder (plan/11 4.10)',
    note: 'Band with a soft parallax. Poster frame first, video after grading.',
    tone: 'sea',
    grade: 'B',
  },
  {
    id: 'venue-around-naiko-encounter-bay', src: '/media/naiko-bluff-encounter-bay-film-poster.jpg', position: '50% 62%',
    type: 'image',
    alt: 'The sun low over Encounter Bay beyond the curved roofs of Naiko at the Bluff, The Bluff on the right and green paddocks running down to the water',
    aspect: '21 / 9',
    suggested: 'Filled 28-09-2026 (L3, Jess G9): Naiko At The Bluff Content, "Exterior evening back" (the poster of the Encounter Bay film). The coastal-walk photograph already opens the page, so the band takes the bay at sunset',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'venue-around-beresford-estate', src: '/media/beresford-pavilion-dusk.jpg', position: '50% 58%',
    type: 'image',
    alt: 'The charred-timber pavilion at Beresford Estate lit at dusk, its glass wall open to the lawn under tall gums',
    aspect: '21 / 9',
    suggested: 'Filled 28-09-2026 (L3, Jess G9): Beresford Accom images, 004.jpg. The only vineyard landscape (BERE_Vintage20) already opens the page and fills the card, so the band takes the pavilion at dusk',
    tone: 'sand',
    grade: 'A',
  },

  /* ------------------------------------------------------------------ /fleurieu-peninsula-retreats */
  {
    id: 'fleurieu-hero', src: '/media/bay-cliff-walk-drone.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A bright bay with turquoise water below grassy cliffs, a walker on the track above',
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
    id: 'fleurieu-wild-kangaroos', src: '/media/kangaroo-paddock.jpg', position: '50% 70%',
    type: 'image',
    alt: 'A kangaroo standing in long grass beneath the trees',
    aspect: '4 / 5',
    suggested: 'Belle\'s kangaroo footage (BD-123, "there\'s some kangaroo footage"), not yet located (S5)',
    note: 'Small frame only.',
    tone: 'dusk',
    grade: 'C',
  },
  {
    id: 'fleurieu-wild-ocean', src: '/media/surf-rocks-from-above.jpg', position: '35% 50%',
    type: 'image',
    alt: 'Waves rolling onto a small beach between dark rocks, seen from above',
    aspect: '4 / 5',
    suggested: 'DJI_0605.MP4, the pan inwards as a swimmer moves through the water (BD-109). Belle doubts its quality for a hero, so it lives in a small frame',
    note: 'Small frame only.',
    tone: 'sea',
    grade: 'C',
  },
  {
    id: 'fleurieu-wild-hiking', src: '/media/trail-trees-sea.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Two women walking a track through the trees towards the sea',
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
    id: 'fleurieu-table', src: '/media/olive-oil-wine-bread.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Olive oil, wine and bread on a tiered stand at a long lunch table',
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
    id: 'team-hero', src: '/media/breathwork-verandah.jpg', position: '50% 55%',
    type: 'image',
    alt: 'A practitioner standing over guests resting on mats on a verandah, the hills beyond',
    aspect: '16 / 9',
    suggested: 'A Sunset Reset (May 2026, Joe\'s Henley), 223 JPEGs, the team at work before guests arrive (plan/11 4.15). ' + consent,
    tone: 'salt',
  },

  /* ------------------------------------------------------------------ /journal/<slug> */
  {
    id: 'journal-sleep-bath', src: '/media/bath-video-poster.jpg', position: '50% 50%',
    type: 'image',
    alt: 'A freestanding bath filling beside the window, a tea tray across it and a candle lit on the stool',
    aspect: '3 / 2',
    suggested: 'The image in the live sleep post credited "Naiko Retreat, Deep Creek" (lamarea.com.au blog), likely the Naiko bath shot',
    tone: 'dusk',
  },

  /* ------------------------------------------------------------------ /our-story */
  {
    id: 'story-hero', src: '/media/surf-rocks-from-above.jpg', position: '50% 50%',
    type: 'image',
    alt: 'Waves rolling onto a small pale beach between rocks, seen from directly above, Fleurieu Peninsula',
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

  /* ------------------------------------------------------------------ L3 rebuild, 28-09-2026
     New frames from Belle's Drive (folder 17Vku458GY8NaBOb0YpW4mNaFEr1zbpYH): "Beresford Accom images"
     and "Marketing - La maréa x Beresford", "Naiko At The Bluff Content" (Encounter Bay), "NAIKO ACCOM"
     (the NAIKO-JUL23 set, Deep Creek) and "Branding pillar videos". Venue frames are the venues' own
     photography that Belle keeps for the site; captions name only what is in the frame. */
  { id: 'c-places-opener', type: 'video', src: '/media/fleurieu-coastline-receding-drone.mp4', srcMobile: '/media/fleurieu-coastline-receding-drone-portrait.mp4', poster: '/media/fleurieu-coastline-receding-drone-poster.jpg',
    alt: 'The Fleurieu coastline pulling away into deep blue water, boats small at the foot of the cliffs', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_0604, seconds 50 to 61' },
  { id: 'c-experiences-opener', type: 'image', src: '/media/deck-stretch-sea.jpg', position: '64% 45%',
    alt: 'A guest in a side stretch on the deck, the sea and headland behind her', aspect: '16 / 9', tone: 'salt', suggested: 'homepage8' },
  { id: 'c-food-opener', type: 'image', src: '/media/long-table-overhead.jpg', position: '50% 50%',
    alt: 'A long table from above, set with lemons, herbs, bread and olive oil on pale linen', aspect: '16 / 9', tone: 'sand', suggested: 'homepage3' },
  { id: 'c-fleurieu-opener', type: 'video', src: '/media/fleurieu-cliffs-white-beach-drone.mp4', srcMobile: '/media/fleurieu-cliffs-white-beach-drone-portrait.mp4', poster: '/media/fleurieu-cliffs-white-beach-drone-poster.jpg',
    alt: 'A slow drift along dark cliffs and golden hills, a white beach below and boats on emerald water', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_0604, seconds 0.5 to 11.5' },
  // DJI_0781, Belle's named coast clip, cut for the web 28-09-2026: straight down along the coast.
  { id: 'c-fleurieu-coast-ochre', type: 'video', src: '/media/coast-ochre-cliffs-topdown-drone.mp4', poster: '/media/coast-ochre-cliffs-topdown-drone-poster.jpg', position: '12% 50%',
    alt: 'Looking straight down from the air along the Fleurieu coast, emerald water against a dark rocky shore beside ochre cliff tops and dry summer paddocks', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_0781.MP4 (Drive 1bx_Ki9uMhwt-YpL9JBpKQKQPpDATvLEx)' },
  // The venue's own film of Naiko at the Bluff (28-09-2026). Registered, not placed: the page's bright coast still is the stronger opener, and the film's dusk exterior is dark.
  { id: 'c-naiko-encounter-bay-film', type: 'video', src: '/media/naiko-bluff-encounter-bay-film.mp4', poster: '/media/naiko-bluff-encounter-bay-film-poster.jpg',
    alt: 'Naiko at the Bluff, Encounter Bay: the sun low over the bay beyond the house, its glass walls and deck, and a made bed by a window onto the coast', aspect: '16 / 9', tone: 'dusk', suggested: 'Venue film, Naiko at the Bluff' },
  { id: 'c-naiko-deep-creek-opener', type: 'video', src: '/media/naiko-deep-creek-drone-pan.mp4', poster: '/media/naiko-deep-creek-drone-pan-poster.jpg',
    alt: 'A slow pan across Naiko Deep Creek, the house on the green hill above a turquoise cove', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_20251109100906_0030_D' },
  { id: 'c-naiko-deep-creek-bath', type: 'video', src: '/media/bath-naiko-deep-creek.mp4', srcMobile: '/media/bath-naiko-deep-creek-portrait.mp4', poster: '/media/bath-video-poster.jpg',
    alt: 'The freestanding bath filling beside floor to ceiling windows over the sea at Naiko Deep Creek', aspect: '16 / 9', tone: 'dusk', suggested: '229A8133.MOV' },
  { id: 'c-naiko-encounter-bay-opener', type: 'image', src: '/media/encounter-bay-coast-bluff.jpg', position: '55% 55%',
    alt: 'The coast below Naiko at the Bluff, surf over dark rocks, green headland and a bright blue sky over Encounter Bay', aspect: '16 / 9', tone: 'sea', suggested: 'Naiko At The Bluff Content, "coastal walk at the bottom of the property"' },
  { id: 'c-beresford-estate-opener', type: 'image', src: '/media/beresford-yoga-mats-vines.jpg', position: '46% 60%',
    alt: 'Yoga mats, bolsters and blocks laid out on a pale floor before tall windows onto the vines at Beresford Estate', aspect: '16 / 9', tone: 'sand', suggested: '"Beresford Yoga Set up", Marketing - La maréa x Beresford' },

  /* Venue cards (card_media in src/content/venues/*.json points here) */
  { id: 'c-card-naiko-encounter-bay', type: 'image', src: '/media/encounter-bay-deck-pool.jpg', position: '40% 50%',
    alt: 'The deck and pool at Naiko at the Bluff, the headland and sea beyond', aspect: '4 / 5', tone: 'sea', suggested: 'Naiko At The Bluff Content, Deck 1' },
  { id: 'c-card-beresford-estate', type: 'image', src: '/media/beresford-estate-vines-sky.jpg', position: '52% 50%',
    alt: 'Beresford Estate across rows of vines under a bright sky, Blewitt Springs, McLaren Vale', aspect: '4 / 5', tone: 'sand', suggested: 'BERE_Vintage20_20200302_0121_EDITED' },

  /* Venue features (features[].media in the venues collection points here) */
  { id: 'c-dc-deck', type: 'image', src: '/media/deep-creek-deck-hills.jpg', position: '50% 55%', alt: 'Guests on the front deck at Naiko Deep Creek, green hills rolling down to the beach and the sea', aspect: '5 / 4', tone: 'salt', suggested: 'NAIKO-JUL23-0011' },
  { id: 'c-dc-bath', type: 'image', src: '/media/deep-creek-bath-headland.jpg', position: '40% 60%', alt: 'A freestanding bath beside a glass wall over the headland and the sea at Naiko Deep Creek', aspect: '5 / 4', tone: 'salt', suggested: 'NAIKO-JUL23-0001' },
  { id: 'c-dc-bedrooms', type: 'image', src: '/media/deep-creek-bedroom-sea.jpg', position: '50% 55%', alt: 'A king bed facing a window onto the headland and turquoise water at Naiko Deep Creek', aspect: '5 / 4', tone: 'salt', suggested: 'NAIKO-JUL23-0004' },
  { id: 'c-dc-living', type: 'image', src: '/media/deep-creek-living-fire.jpg', position: '50% 55%', alt: 'The living room at Naiko Deep Creek, a wood fire and a stone wall, the sea through the windows', aspect: '5 / 4', tone: 'sand', suggested: 'NAIKO-JUL23-0017' },
  { id: 'c-dc-kitchen', type: 'image', src: '/media/deep-creek-kitchen-table.jpg', position: '50% 55%', alt: 'The kitchen and long timber table at Naiko Deep Creek, sea through the far windows', aspect: '5 / 4', tone: 'sand', suggested: 'NAIKO-JUL23-0018' },
  { id: 'c-dc-aerial', type: 'image', src: '/media/deep-creek-aerial-cove.jpg', position: '50% 50%', alt: 'Naiko Deep Creek from the air, the house on the green hill above a turquoise cove', aspect: '5 / 4', tone: 'sea', suggested: 'NAIKO-JUL23-0026' },
  { id: 'c-eb-living', type: 'image', src: '/media/encounter-bay-living-dining.jpg', position: '50% 55%', alt: 'Open plan living and dining at Naiko at the Bluff, windows onto the lawn and the sea', aspect: '5 / 4', tone: 'salt', suggested: 'Naiko At The Bluff Content, Living area 2' },
  { id: 'c-eb-pool', type: 'image', src: '/media/encounter-bay-deck-pool.jpg', position: '45% 60%', alt: 'The pool set into the deck at Naiko at the Bluff, the headland and ocean beyond', aspect: '5 / 4', tone: 'sea', suggested: 'Naiko At The Bluff Content, Deck 1' },
  { id: 'c-eb-walk', type: 'image', src: '/media/encounter-bay-garden-path.jpg', position: '50% 45%', alt: 'A gravel path through coastal scrub towards the sea and the islands of Encounter Bay', aspect: '5 / 4', tone: 'sea', suggested: 'Naiko At The Bluff Content, Garden path' },
  { id: 'c-eb-villa', type: 'image', src: '/media/encounter-bay-villa-lawn.jpg', position: '50% 60%', alt: 'The villa at Naiko at the Bluff, curved roofs and a stone wing above a green lawn', aspect: '5 / 4', tone: 'salt', suggested: 'Naiko At The Bluff Content, Exterior front' },
  { id: 'c-eb-bath', type: 'image', src: '/media/encounter-bay-bath-sea.jpg', position: '55% 55%', alt: 'A freestanding bath beside a window onto the sea and an island at Naiko at the Bluff', aspect: '5 / 4', tone: 'salt', suggested: 'Naiko At The Bluff Content, bathroom 2' },
  { id: 'c-eb-bedroom', type: 'image', src: '/media/encounter-bay-bedroom.jpg', position: '50% 55%', alt: 'A bedroom at Naiko at the Bluff with glass walls onto the lawn and the bay', aspect: '5 / 4', tone: 'salt', suggested: 'Naiko At The Bluff Content, bedroom 2' },
  { id: 'c-eb-fire', type: 'image', src: '/media/encounter-bay-living-fire.jpg', position: '50% 55%', alt: 'Leather armchairs round a wood fire at Naiko at the Bluff, the headland through the glass', aspect: '5 / 4', tone: 'sand', suggested: 'Naiko At The Bluff Content, living area 4' },
  { id: 'c-be-vineyard', type: 'image', src: '/media/beresford-estate-vines-sky.jpg', position: '50% 55%', alt: 'Rows of vines running up to Beresford Estate under a bright sky', aspect: '5 / 4', tone: 'sand', suggested: 'BERE_Vintage20_20200302_0121_EDITED' },
  { id: 'c-be-dining', type: 'image', src: '/media/beresford-pavilion-dining-vines.jpg', position: '50% 55%', alt: 'A long bar and dining room with glass walls onto gums and autumn vines at Beresford Estate', aspect: '5 / 4', tone: 'salt', suggested: 'Mclaren Vale - Wineries-192p' },
  { id: 'c-be-fire', type: 'image', src: '/media/beresford-pavilion-fire-vines.jpg', position: '55% 55%', alt: 'A hanging fireplace beside glass walls onto the vines and gum trees at Beresford Estate', aspect: '5 / 4', tone: 'salt', suggested: 'Mclaren Vale - Wineries-186' },
  { id: 'c-be-deck', type: 'image', src: '/media/beresford-pavilion-deck.jpg', position: '50% 55%', alt: 'A long timber deck along the glass pavilion at Beresford Estate, gum trees and lawn beyond', aspect: '5 / 4', tone: 'salt', suggested: 'DSC_3766' },
  { id: 'c-be-lawn', type: 'image', src: '/media/beresford-pavilion-lawn.jpg', position: '50% 60%', alt: 'The dark timber pavilion at Beresford Estate on a green lawn under old gums', aspect: '5 / 4', tone: 'salt', suggested: 'DSC_3827' },
  { id: 'c-be-yoga', type: 'image', src: '/media/beresford-yoga-mats-vines.jpg', position: '45% 60%', alt: 'Yoga mats, bolsters and blocks set out before tall windows onto the vines at Beresford Estate', aspect: '5 / 4', tone: 'sand', suggested: '"Beresford Yoga Set up"' },

  /* Experience galleries and video tiles (experience pages and the /experiences slider only) */
  { id: 'c-xp-movement-reel', type: 'video', src: '/media/pillar-movement-reel.mp4', poster: '/media/pillar-movement-reel-poster.jpg',
    alt: 'A mat unrolled by the window, then guests walking the beach and the clifftops above the sea', aspect: '9 / 16', tone: 'salt', suggested: 'Branding pillar videos, movement.mp4 (slowed to 0.8x)' },
  { id: 'c-xp-nutrition-reel', type: 'video', src: '/media/pillar-nutrition-reel.mp4', poster: '/media/pillar-nutrition-reel-poster.jpg',
    alt: 'A breakfast spread from above, then hands building bowls of vegetables, grains and edamame', aspect: '9 / 16', tone: 'sand', suggested: 'Branding pillar videos, nutrition.mp4 (slowed to 0.8x)' },
  { id: 'c-xp-nature-reel', type: 'video', src: '/media/pillar-nature-reel.mp4', poster: '/media/pillar-nature-reel-poster.jpg',
    alt: 'The coast at golden hour, long grass in the wind and a kangaroo standing in the paddock', aspect: '9 / 16', tone: 'sea', suggested: 'Branding pillar videos, nature.mp4 (slowed to 0.8x)' },
  { id: 'c-xp-sauna-cliff', type: 'image', src: '/media/barrel-sauna-cliff.jpg', position: '38% 55%', alt: 'A cedar barrel sauna, towels and a cold tub on the clifftop above the sea', aspect: '16 / 9', tone: 'sea', suggested: 'homepage10' },
  { id: 'c-xp-cold-tubs', type: 'image', src: '/media/barrel-sauna-cold-tubs.jpg', position: '50% 55%', alt: 'Two cold tubs beside the barrel sauna, the sea below', aspect: '16 / 9', tone: 'sea', suggested: 'Pool' },
  { id: 'c-xp-chef-kitchen', type: 'image', src: '/media/chef-kitchen-guests.jpg', position: '50% 40%', alt: 'A chef talking two guests through a dish at the kitchen bench', aspect: '16 / 9', tone: 'sand', suggested: 'Pool' },
  { id: 'c-xp-pasta-lemons', type: 'image', src: '/media/pasta-lemons-overhead.jpg', position: '50% 50%', alt: 'Fresh pasta and lemons on a floured bench from above', aspect: '16 / 9', tone: 'sand', suggested: 'Pool' },
  { id: 'c-xp-tortelli', type: 'image', src: '/media/tortelli-plate.jpg', position: '50% 50%', alt: 'A plate of tortelli with herbs and olive oil', aspect: '16 / 9', tone: 'sand', suggested: 'Tortelli 2025' },
  { id: 'c-xp-massage-rest', type: 'image', src: '/media/massage-towel-rest.jpg', position: '50% 60%', alt: 'A guest resting under a towel on the treatment table, soft light through an oval window', aspect: '16 / 9', tone: 'salt', suggested: 'Pool' },
  { id: 'c-xp-massage-face', type: 'image', src: '/media/massage-face.jpg', position: '50% 50%', alt: 'A guest resting face up during a treatment', aspect: '16 / 9', tone: 'salt', suggested: 'Pool' },
  { id: 'c-xp-deck-breathwork', type: 'image', src: '/media/deck-breathwork-sky.jpg', position: '50% 55%', alt: 'Guests lying along the deck under a big sky, the sea beyond the rail', aspect: '16 / 9', tone: 'salt', suggested: '229A9336' },
  { id: 'c-xp-mats-glass', type: 'image', src: '/media/mats-glass-room-sea.jpg', position: '50% 55%', alt: 'Mats laid out in a glass room above the sea', aspect: '16 / 9', tone: 'salt', suggested: 'Pool' },
  { id: 'c-xp-mat-stretch', type: 'image', src: '/media/mat-stretch.jpg', position: '50% 40%', alt: 'A woman stretching forward on her mat by the window', aspect: '16 / 9', tone: 'salt', suggested: 'Pool' },
  { id: 'c-xp-bay-walk', type: 'image', src: '/media/bay-cliff-walk-drone.jpg', position: '72% 50%', alt: 'A walker on the clifftop track above a bright bay with turquoise water', aspect: '16 / 9', tone: 'sea', suggested: 'homepage12' },
  { id: 'c-xp-hillside-walk', type: 'image', src: '/media/hillside-walk-three.jpg', position: '50% 50%', alt: 'Three women walking up a green hillside in the sun', aspect: '16 / 9', tone: 'salt', suggested: '229A8527' },
  { id: 'c-xp-beach-walk', type: 'image', src: '/media/beach-walk-bright.jpg', position: '50% 45%', alt: 'Two people on a sunlit beach below the cliffs, the surf beside them', aspect: '16 / 9', tone: 'sea', suggested: '229A9426' },
  { id: 'c-xp-hidden-cove', type: 'image', src: '/media/drone-hidden-cove-white-sand.jpg', position: '50% 50%', alt: 'A hidden white sand cove inside pale cliffs above a turquoise reef', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_0605' },
  { id: 'c-xp-emerald-shallows', type: 'image', src: '/media/drone-emerald-water-boats-top-down.jpg', position: '50% 50%', alt: 'Emerald shallows from above, three white boats beside a rock edge', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_0604' },
  { id: 'c-xp-long-table-group', type: 'image', src: '/media/long-table-overhead-group.jpg', position: '50% 50%', alt: 'A group sharing lunch around one long table, seen from above', aspect: '16 / 9', tone: 'sand', suggested: 'DJI_20251108132519_0437' },
  { id: 'c-xp-chef-oil', type: 'image', src: '/media/chef-green-oil-detail.jpg', position: '50% 50%', alt: 'A chef finishing plated fish with green oil', aspect: '16 / 9', tone: 'sand', suggested: '229A8911' },
  { id: 'c-xp-bowls', type: 'image', src: '/media/bowls-hands-overhead.jpg', position: '50% 50%', alt: 'Hands reaching across a table to build bowls of carrot, edamame, cabbage and nori', aspect: '16 / 9', tone: 'sand', suggested: 'Pool' },
  { id: 'c-xp-rest-faces', type: 'image', src: '/media/deck-rest-faces.jpg', position: '50% 50%', alt: 'Guests lying side by side on the deck, eyes closed in the sun', aspect: '16 / 9', tone: 'salt', suggested: 'Pool' },
  { id: 'c-xp-journal', type: 'image', src: '/media/journal-pen-candle.jpg', position: '50% 45%', alt: 'A hand writing in a notebook, a candle glowing beyond', aspect: '16 / 9', tone: 'salt', suggested: 'Pool' },
  { id: 'c-xp-cup-sea', type: 'image', src: '/media/cup-sea-view.jpg', position: '50% 50%', alt: 'A woman holding a cup, looking out over the grassy headland to the sea', aspect: '16 / 9', tone: 'salt', suggested: 'Pool' },
  { id: 'c-xp-fire-sea', type: 'image', src: '/media/living-fire-sea.jpg', position: '50% 60%', alt: 'Two guests relaxing by the wood fire, the sea beyond the window', aspect: '16 / 9', tone: 'sand', suggested: 'Pool' },
  { id: 'c-xp-bath-surf', type: 'image', src: '/media/bath-surf-below-candle.jpg', position: '50% 50%', alt: 'A guest in the freestanding bath by candlelight, surf breaking on the rocks below the window', aspect: '16 / 9', tone: 'dusk', suggested: '229A8188' },

  /* /food, the plates and the table */
  { id: 'c-food-tortelli', type: 'image', src: '/media/tortelli-plate.jpg', position: '50% 50%', alt: 'Tortelli on a pale plate with herbs and olive oil', aspect: '4 / 5', tone: 'sand', suggested: 'Tortelli 2025' },
  { id: 'c-food-kingfish', type: 'image', src: '/media/kingfish-plate.jpg', position: '50% 50%', alt: 'Kingfish on a pale plate, dressed with oil and herbs', aspect: '4 / 5', tone: 'sand', suggested: 'Kingfish 2025' },
  { id: 'c-food-tuna', type: 'image', src: '/media/tuna-plate.jpg', position: '50% 50%', alt: 'Tuna on a pale plate, dressed with herbs', aspect: '4 / 5', tone: 'sand', suggested: 'Tuna pic 2' },
  { id: 'c-food-chef-pouring', type: 'image', src: '/media/chef-pouring-oil.jpg', position: '50% 45%', alt: 'A chef pouring olive oil over a plate at the pass', aspect: '4 / 5', tone: 'sand', suggested: 'Pool' },
  { id: 'c-food-chef-oil', type: 'image', src: '/media/chef-green-oil-detail.jpg', position: '50% 50%', alt: 'A chef finishing plated fish with green oil', aspect: '1 / 1', tone: 'sand', suggested: '229A8911' },
  { id: 'c-food-olive-bread', type: 'image', src: '/media/olive-oil-bread.jpg', position: '50% 50%', alt: 'Bread and olive oil on the table', aspect: '1 / 1', tone: 'sand', suggested: 'Pool' },
  { id: 'c-food-long-table-group', type: 'image', src: '/media/long-table-overhead-group.jpg', position: '50% 50%', alt: 'A group sharing lunch around one long table, seen from above', aspect: '3 / 2', tone: 'sand', suggested: 'DJI_20251108132519_0437' },
  { id: 'c-food-lemons-sea', type: 'image', src: '/media/table-lemons-sea.jpg', position: '50% 55%', alt: 'Two women setting a long table with lemons, the sea beyond the windows', aspect: '4 / 5', tone: 'salt', suggested: '229A8736' },
  { id: 'c-food-fish-mussels', type: 'image', src: '/media/fish-mussels-plate.jpg', position: '50% 50%', alt: 'Fish and mussels on a shared plate', aspect: '1 / 1', tone: 'sand', suggested: 'Pool' },
  { id: 'c-food-bowls', type: 'image', src: '/media/bowls-hands-overhead.jpg', position: '50% 50%', alt: 'Hands building bowls of carrot, edamame, cabbage and nori', aspect: '1 / 1', tone: 'sand', suggested: 'Pool' },
  { id: 'c-food-brownies', type: 'image', src: '/media/balance-brownies-berries.jpg', position: '50% 40%', alt: 'A plate of brownies with fresh berries handed across the table', aspect: '3 / 4', tone: 'sand', suggested: 'Pool' },
  { id: 'c-food-cup-sea', type: 'image', src: '/media/cup-sea-view.jpg', position: '50% 50%', alt: 'A woman holding a cup, looking out over the headland to the sea', aspect: '3 / 4', tone: 'salt', suggested: 'Pool' },

  /* /fleurieu-peninsula-retreats */
  { id: 'c-fl-kangaroo', type: 'image', src: '/media/kangaroo-paddock.jpg', position: '50% 70%', alt: 'A kangaroo standing in long grass beneath the trees', aspect: '4 / 5', tone: 'sea', suggested: 'Pool' },
  { id: 'c-fl-surf', type: 'image', src: '/media/surf-rocks-from-above.jpg', position: '35% 50%', alt: 'Waves rolling onto a small beach between dark rocks, seen from above', aspect: '4 / 5', tone: 'sea', suggested: 'homepage11' },
  { id: 'c-fl-cove', type: 'image', src: '/media/drone-hidden-cove-white-sand.jpg', position: '50% 50%', alt: 'A hidden white sand cove inside pale cliffs above a turquoise reef', aspect: '4 / 5', tone: 'sea', suggested: 'DJI_0605' },
  { id: 'c-fl-hills', type: 'image', src: '/media/drone-golden-hills-blue-sky.jpg', position: '50% 55%', alt: 'Golden summer hills over dark cliffs and a thin line of emerald water', aspect: '3 / 2', tone: 'sea', suggested: 'DJI_0604' },
  { id: 'c-fl-vines', type: 'image', src: '/media/beresford-estate-vines-sky.jpg', position: '50% 60%', alt: 'Rows of vines under a bright sky in Blewitt Springs, McLaren Vale', aspect: '3 / 2', tone: 'sand', suggested: 'BERE_Vintage20_20200302_0121_EDITED' },
  { id: 'c-fl-bluff', type: 'image', src: '/media/encounter-bay-coast-bluff.jpg', position: '55% 55%', alt: 'Surf over dark rocks below a green headland at Encounter Bay', aspect: '4 / 5', tone: 'sea', suggested: 'Naiko At The Bluff Content' },

  /* Practitioner folders in Belle's Drive ("Wellness & Hospitality Partners"): the November 2025
     retreat shoot, frames not yet in the pool. Guest consent as for the rest of that shoot. */
  { id: 'c-xp-yoga-side-stretch', type: 'image', src: '/media/yoga-side-stretch-sea-light.jpg', position: '50% 40%', alt: 'A yoga class in a side stretch, arms raised against the bright sea light', aspect: '16 / 9', tone: 'salt', suggested: 'Photos - Jaimi Baker (yoga), 229A8617' },
  { id: 'c-xp-yoga-silhouette', type: 'image', src: '/media/yoga-deck-silhouette-sea.jpg', position: '50% 55%', alt: 'A guest in a low side stretch on the deck, the sea and a golden hill behind her', aspect: '16 / 9', tone: 'sea', suggested: 'Photos - Jaimi Baker (yoga), 229A8624' },
  { id: 'c-xp-yoga-reach', type: 'image', src: '/media/yoga-reach-stone-wall.jpg', position: '50% 35%', alt: 'Guests reaching up in a yoga class beside a stone wall and the windows', aspect: '16 / 9', tone: 'salt', suggested: 'Photos - Jaimi Baker (yoga), 229A8612' },
  { id: 'c-xp-yoga-class', type: 'image', src: '/media/yoga-class-side-bend.jpg', position: '50% 35%', alt: 'A row of guests bending to the side in a yoga class by the windows', aspect: '16 / 9', tone: 'salt', suggested: 'Photos - Jaimi Baker (yoga), 229A8620' },
  { id: 'c-xp-sauna-guests', type: 'image', src: '/media/sauna-barrel-guests-cliff.jpg', position: '50% 50%', alt: 'Guests with towels beside the barrel sauna on the clifftop, the sea behind them', aspect: '16 / 9', tone: 'sea', suggested: 'Photos - Kris - Third Spaces Wellness, 229A9314' },
  { id: 'c-xp-sauna-cold-tub', type: 'image', src: '/media/sauna-barrel-cold-tub-guests.jpg', position: '50% 55%', alt: 'Guests stepping between the barrel sauna and the cold tub on the clifftop', aspect: '16 / 9', tone: 'sea', suggested: 'Photos - Kris - Third Spaces Wellness, 229A9316' },
  { id: 'c-xp-breath-faces', type: 'image', src: '/media/breathwork-faces-sun.jpg', position: '50% 50%', alt: 'Guests lying side by side in the sun, eyes closed after breathwork', aspect: '16 / 9', tone: 'salt', suggested: 'Photos - Kris - Third Spaces Wellness, 229A9341' },
  { id: 'c-xp-breath-mats', type: 'image', src: '/media/breathwork-mats-hills.jpg', position: '50% 60%', alt: 'Guests lying on mats under a verandah as the facilitator guides the session, green hills beyond', aspect: '16 / 9', tone: 'salt', suggested: 'Photos - Kris - Third Spaces Wellness, 229A9325' },
  { id: 'c-xp-chef-bench', type: 'image', src: '/media/chef-bench-guests-watch.jpg', position: '50% 40%', alt: 'Guests watching the chef at the kitchen bench', aspect: '16 / 9', tone: 'sand', suggested: 'Photos - Luca Aromi Dining, 229A8704' },
  { id: 'c-xp-oil-pour', type: 'image', src: '/media/chef-oil-pour-plates.jpg', position: '50% 60%', alt: 'Olive oil poured over a row of plates on the timber bench', aspect: '16 / 9', tone: 'sand', suggested: 'Photos - Luca Aromi Dining, 229A8810' },
  { id: 'c-xp-tortelli-lemons', type: 'image', src: '/media/tortelli-lemons-green.jpg', position: '50% 50%', alt: 'Tortelli on a green sauce in a marbled bowl, lemons and leaves beside it', aspect: '16 / 9', tone: 'sand', suggested: 'Photos - Luca Aromi Dining, 229A8868' },
  { id: 'c-xp-table-wine', type: 'image', src: '/media/table-tortelli-wine.jpg', position: '50% 60%', alt: 'A bowl of tortelli on the green linen table, wine and lemons behind', aspect: '16 / 9', tone: 'sand', suggested: 'Photos - Luca Aromi Dining, 229A8864' },
  { id: 'c-xp-grilled-veg', type: 'image', src: '/media/grilled-vegetables-plates.jpg', position: '50% 55%', alt: 'Plates of grilled vegetables on the timber bench', aspect: '16 / 9', tone: 'sand', suggested: 'Photos - Luca Aromi Dining, 229A8900' },
  { id: 'c-food-tortelli-lemons', type: 'image', src: '/media/tortelli-lemons-green.jpg', position: '40% 50%', alt: 'Tortelli on a green sauce in a marbled bowl, lemons and leaves beside it', aspect: '4 / 5', tone: 'sand', suggested: '229A8868' },
  { id: 'c-food-oil-pour', type: 'image', src: '/media/chef-oil-pour-plates.jpg', position: '50% 60%', alt: 'Olive oil poured over a row of plates on the timber bench', aspect: '4 / 5', tone: 'sand', suggested: '229A8810' },
  { id: 'c-food-grilled-veg', type: 'image', src: '/media/grilled-vegetables-plates.jpg', position: '50% 55%', alt: 'Plates of grilled vegetables on the timber bench', aspect: '4 / 5', tone: 'sand', suggested: '229A8900' },
  { id: 'c-food-chef-bench', type: 'image', src: '/media/chef-bench-guests-watch.jpg', position: '50% 40%', alt: 'Guests watching the chef at the kitchen bench', aspect: '4 / 5', tone: 'sand', suggested: '229A8704' },
  { id: 'c-dc-open-sea', type: 'video', src: '/media/naiko-deep-creek-to-open-sea-drone.mp4', srcMobile: '/media/naiko-deep-creek-to-open-sea-drone-portrait.mp4', poster: '/media/naiko-deep-creek-to-open-sea-drone-poster.jpg',
    alt: 'The retreat house on the green hill at Deep Creek, the camera turning from the cove out to the open sea', aspect: '16 / 9', tone: 'sea', suggested: 'DJI_0030, seconds 27 to 35' },
  { id: 'c-beresford-estate-vines', type: 'image', src: '/media/beresford-estate-vines-sky.jpg', position: '50% 62%',
    alt: 'Beresford Estate across rows of vines under a bright sky, Blewitt Springs, McLaren Vale', aspect: '16 / 9', tone: 'sand', suggested: 'BERE_Vintage20_20200302_0121_EDITED' },
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
