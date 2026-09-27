import type { MediaSlot } from '../media-types';

/*
  Owner: foundation systems builder (experiences, pillars, venues, map, team, testimonials, journal,
  food components and the systems styleguide).
  One entry per image or video slot. Leave `src` empty until Belle's file is in public/media/.
  `suggested` names the file or folder in Belle's inventory (plan/11 Part 4 asset columns and the
  content harvest). Where nothing exists yet it says so and names the gap (S2, S3, S4, Q9, Q10).
*/

const pillarVideo = 'Branding pillar videos folder (13 files, ungraded, plan/11 item 48)';
/* The grading rule for every slot (build spec 12, CD review E7). */
const GRADE = 'Grade: lift shadows, warm white balance, keep the water green and turquoise, no dark vignette.';
const retreatConsent = 'Guest consent needed for anyone identifiable (plan/11 decision 29)';

const raw: MediaSlot[] = [
  /* ---------------------------------------------------------------- experiences, guided (PaneSlider) */
  { id: 'experience-sauna', type: 'image', alt: 'A sauna at a La maréa retreat on the Fleurieu Peninsula', aspect: '4 / 5', tone: 'dusk',
    suggested: 'No confirmed sauna image yet (plan/11 S2). First look: a still from sleep.mp4 in the ' + pillarVideo },
  { id: 'experience-massage', type: 'image', alt: 'A restorative massage during a La maréa retreat', aspect: '4 / 5', tone: 'salt',
    suggested: 'No confirmed massage image (S2). Ask Courtney Selfe (The Earth House and Spa) for a treatment still, or the summer shoot' },
  { id: 'experience-contrast-therapy', type: 'video', alt: 'Guests moving between the sauna and the cold plunge in a guided contrast therapy session', aspect: '3 / 2', tone: 'sea',
    suggested: 'No confirmed contrast therapy footage (S2). First look: sleep.mp4 in the ' + pillarVideo, note: 'Video plays only on the tile in view. Poster needed for home.' },
  { id: 'experience-pasta-making', type: 'image', alt: 'Hands shaping fresh pasta at a chef-led masterclass', aspect: '3 / 4', tone: 'sand',
    suggested: '"Copy of Say Cheese-Pasta Party-Arne Studio-103 3.JPG" (provenance and rights unconfirmed)' },
  { id: 'experience-mediterranean-table', type: 'video', alt: 'A shared Mediterranean lunch set along one long table', aspect: '3 / 2', tone: 'sand',
    suggested: 'nutrition.mp4 in the ' + pillarVideo + ', with Food folder 229A8255.jpg as the poster', note: 'Video plays only on the tile in view. Poster only on home.' },
  { id: 'experience-yoga', type: 'video', alt: 'A group yoga flow on a deck above the coast', aspect: '4 / 5', tone: 'salt',
    suggested: 'movement.mp4 in the ' + pillarVideo + ' (a duplicate Movement.mp4 exists, plan/11 item 80)', note: 'Video plays only on the tile in view.' },
  { id: 'experience-pilates', type: 'image', alt: 'A mat pilates session on a retreat morning', aspect: '4 / 5', tone: 'salt',
    suggested: 'A still from movement.mp4, or the Sunset Reset set (May 2026, Joe\'s Henley, 223 JPEGs). ' + retreatConsent },
  { id: 'experience-meditation-and-mindfulness', type: 'image', alt: 'Guests settling into a guided breathwork and meditation session', aspect: '3 / 4', tone: 'dusk',
    suggested: 'A still from psychological.mp4 in the ' + pillarVideo + ', or the Sunset Reset set breathwork frames' },
  { id: 'experience-gut-health', type: 'image', alt: 'Belle leading a lifestyle wellness and nutrition session for a small group', aspect: '4 / 5', tone: 'sand',
    suggested: 'Belle presenting her nutrition session, Sunset Reset set (May 2026, Joe\'s Henley). ' + retreatConsent },
  { id: 'experience-nutrition-consultations', type: 'image', alt: 'A one to one nutrition and lifestyle consultation', aspect: '4 / 5', tone: 'salt',
    suggested: 'A still from evidence.mp4 in the ' + pillarVideo + '. A consultation photograph is still needed' },

  /* ---------------------------------------------------------------- experiences, self-led */
  { id: 'experience-coastal-hiking', type: 'video', alt: 'A coastal walking trail along the Fleurieu cliffs above the Southern Ocean', aspect: '4 / 5', tone: 'sea',
    suggested: 'DJI_0604.MP4, the pan away from the coastline over the hills, or the coastal walk below Naiko at the Bluff (guide p.7 photo)' },
  { id: 'experience-infrared-sauna', type: 'image', alt: 'The sauna at the retreat villa, warm timber and soft light', aspect: '4 / 5', tone: 'dusk',
    suggested: 'Naiko At The Bluff Content (16 files), the sauna named in the guide p.11' },
  { id: 'experience-pool-swimming', type: 'image', alt: 'The pool below the deck with the ocean beyond', aspect: '3 / 2', tone: 'sea',
    suggested: 'Naiko At The Bluff Content, the pool below the deck, or the Beresford plunge pool from Beresford Accom images' },
  { id: 'experience-ocean-swimming', type: 'video', alt: 'A swimmer in clear green water off the Fleurieu coast, seen from above', aspect: '3 / 4', tone: 'sea', grade: 'C',
    suggested: 'DJI_0605.MP4, the pan inwards as a swimmer moves through the water. Belle is unsure of its quality (BD-109), small frame only' },
  { id: 'experience-journaling-and-reading', type: 'image', alt: 'A journal and a book on the deck in the afternoon light', aspect: '4 / 5', tone: 'salt',
    suggested: 'NAIKO ACCOM (22 files), the front deck. Summer shoot if none shows a quiet afternoon' },
  { id: 'experience-relaxing-by-the-fire', type: 'image', alt: 'Guests resting by the fire at the end of the day', aspect: '4 / 5', tone: 'dusk',
    suggested: 'Naiko At The Bluff Content, the fire (guide p.11), or the Beresford Tasting Pavilion fireplace' },

  /* ---------------------------------------------------------------- the ten pillars (FlexShowcase) */
  { id: 'pillar-nutrition', type: 'video', alt: 'Seasonal Fleurieu produce prepared for a Mediterranean table', aspect: '1 / 1', tone: 'sand', suggested: 'nutrition.mp4, ' + pillarVideo },
  { id: 'pillar-movement', type: 'video', alt: 'Movement on the coast: yoga, pilates and swimming', aspect: '1 / 1', tone: 'salt', suggested: 'movement.mp4, ' + pillarVideo + '. Resolve the duplicate Movement.mp4 first' },
  { id: 'pillar-sleep-and-recovery', type: 'video', alt: 'Rest and recovery: sauna, cold water and quiet rooms', aspect: '1 / 1', tone: 'dusk', suggested: 'sleep.mp4, ' + pillarVideo },
  { id: 'pillar-psychological-wellbeing', type: 'video', alt: 'Breathwork and stillness during a guided session', aspect: '1 / 1', tone: 'salt', suggested: 'psychological.mp4, ' + pillarVideo },
  { id: 'pillar-nature-immersion', type: 'video', alt: 'The Fleurieu coastline, sea and hills from above', aspect: '1 / 1', tone: 'sea', suggested: 'nature.mp4, ' + pillarVideo },
  { id: 'pillar-connection', type: 'video', alt: 'A group sharing a long table and conversation', aspect: '1 / 1', tone: 'sand', suggested: 'connection.mp4, ' + pillarVideo },
  { id: 'pillar-balance', type: 'video', alt: 'Movement and rest in balance on a retreat day', aspect: '1 / 1', tone: 'salt', suggested: 'balance.mp4, ' + pillarVideo },
  { id: 'pillar-personalisation', type: 'video', alt: 'A retreat day shaped around one group', aspect: '1 / 1', tone: 'dusk', suggested: 'personalisation.mp4, ' + pillarVideo },
  { id: 'pillar-wellness-education', type: 'video', alt: 'Belle teaching an evidence-based lifestyle wellness session', aspect: '1 / 1', tone: 'sand', suggested: 'evidence.mp4, ' + pillarVideo },
  { id: 'pillar-luxury-and-heartfelt-hospitality', type: 'video', alt: 'Heartfelt hospitality at a five star partner venue', aspect: '1 / 1', tone: 'dusk', suggested: 'luxury.mp4, ' + pillarVideo },

  /* ---------------------------------------------------------------- venues: cards, map pane and galleries */
  { id: 'venue-naiko-deep-creek-card', type: 'image', alt: 'Naiko Retreat on the cliffs at Deep Creek, looking out over the Southern Ocean', aspect: '4 / 5', tone: 'sea',
    suggested: 'NAIKO ACCOM (22 files) or Naiko At The Bluff Content. The two Naiko sets are not yet split (S4)' },
  { id: 'venue-naiko-deep-creek-map', type: 'image', alt: 'Naiko Retreat, Deep Creek, from the coast', aspect: '4 / 5', tone: 'sea',
    suggested: 'NAIKO ACCOM, an exterior with the sea. Frame from DJI_20251109100906_0030_D.MP4 (the Naiko deep creek folder) as an alternate' },
  { id: 'venue-naiko-deep-creek-deck', type: 'image', alt: 'The front deck at Naiko Retreat overlooking the beach', aspect: '5 / 4', tone: 'salt', suggested: 'NAIKO ACCOM (22 files), the front deck' },
  { id: 'venue-naiko-deep-creek-bath', type: 'image', alt: 'The free-standing bath at Naiko Retreat, the sea beyond the window', aspect: '5 / 4', tone: 'dusk',
    suggested: '"Bath shot landscape.jpg", Belle\'s bath shot (BD-111). Not yet confirmed as Deep Creek (S4)' },
  { id: 'venue-naiko-deep-creek-beach', type: 'image', alt: 'Naiko\'s own secluded beach and clear aquamarine water', aspect: '5 / 4', tone: 'sea', suggested: 'Frame from DJI_20251109100906_0030_D.MP4, the Naiko deep creek folder' },
  { id: 'venue-naiko-deep-creek-trails', type: 'image', alt: 'A walking trail across the Rarkang farm towards the coast', aspect: '5 / 4', tone: 'sea', suggested: 'NAIKO ACCOM, trail or cliff-top frames. Summer shoot if none' },
  { id: 'venue-naiko-deep-creek-bedrooms', type: 'image', alt: 'A king bedroom at Naiko Retreat', aspect: '5 / 4', tone: 'salt', suggested: 'NAIKO ACCOM (22 files), bedrooms' },

  { id: 'venue-naiko-encounter-bay-card', type: 'image', alt: 'Naiko at the Bluff above Encounter Bay, with the ocean beyond', aspect: '4 / 5', tone: 'sea',
    suggested: 'Naiko At The Bluff Content (16 files), exterior with the ocean. Sets not yet split (S4)' },
  { id: 'venue-naiko-encounter-bay-map', type: 'image', alt: 'Naiko at the Bluff, Encounter Bay', aspect: '4 / 5', tone: 'sea', suggested: 'Naiko At The Bluff Content, exterior' },
  { id: 'venue-naiko-encounter-bay-living', type: 'image', alt: 'Light-filled open plan living at Naiko at the Bluff', aspect: '5 / 4', tone: 'salt', suggested: 'Naiko At The Bluff Content, living areas' },
  { id: 'venue-naiko-encounter-bay-pool', type: 'image', alt: 'The pool below the deck, ocean views beyond', aspect: '5 / 4', tone: 'sea', suggested: 'Naiko At The Bluff Content, the pool' },
  { id: 'venue-naiko-encounter-bay-recovery', type: 'image', alt: 'The sauna and plunge pool at Naiko at the Bluff', aspect: '5 / 4', tone: 'dusk', suggested: 'Naiko At The Bluff Content, sauna and plunge (guide p.11 and p.16)' },
  { id: 'venue-naiko-encounter-bay-walk', type: 'image', alt: 'The coastal walk at the bottom of the Naiko property', aspect: '5 / 4', tone: 'sea', suggested: 'The guide p.7 photograph, "A beautiful coastal walk at the bottom of the Naiko property"' },
  { id: 'venue-naiko-encounter-bay-villa', type: 'image', alt: 'The villa at Naiko at the Bluff across farmland to the sea', aspect: '5 / 4', tone: 'salt', suggested: 'Naiko At The Bluff Content, the villa exterior' },

  { id: 'venue-beresford-estate-card', type: 'image', alt: 'Beresford Estate among its vines in Blewitt Springs, McLaren Vale', aspect: '4 / 5', tone: 'sand',
    suggested: 'Beresford Accom images (9 professional files), the drone shot over the vines' },
  { id: 'venue-beresford-estate-map', type: 'image', alt: 'Beresford Estate, McLaren Vale', aspect: '4 / 5', tone: 'sand', suggested: 'Beresford Accom images, exterior' },
  { id: 'venue-beresford-estate-vineyard', type: 'image', alt: 'Rows of vines across the 70 acre estate', aspect: '5 / 4', tone: 'sand', suggested: 'Beresford Accom images, vineyard aerial' },
  { id: 'venue-beresford-estate-plunge', type: 'image', alt: 'A private plunge pool on a Grand Reserve Suite terrace', aspect: '5 / 4', tone: 'sea', suggested: 'Beresford Accom images, the plunge pool Belle named (BD-26)' },
  { id: 'venue-beresford-estate-suites', type: 'image', alt: 'A Grand Reserve Suite at Beresford Estate', aspect: '5 / 4', tone: 'salt', suggested: 'Beresford Accom images, the rooms (BD-26)' },
  { id: 'venue-beresford-estate-house', type: 'image', alt: 'Beresford House and its bell tower deck among the vines', aspect: '5 / 4', tone: 'sand', suggested: 'Beresford Accom images, Beresford House. Beresford Dropbox professional photos are not yet accessible' },

  { id: 'venue-the-vineyard-retreat-card', type: 'image', alt: 'A guest house among the vines at The Vineyard Retreat, McLaren Vale', aspect: '4 / 5', tone: 'sand',
    suggested: 'No imagery anywhere (S3). Needed from Belle or the venue before this card can publish' },
  { id: 'venue-the-vineyard-retreat-map', type: 'image', alt: 'The Vineyard Retreat, Blewitt Springs', aspect: '4 / 5', tone: 'sand', suggested: 'No imagery anywhere (S3)' },
  { id: 'venue-the-vineyard-retreat-wellness', type: 'image', alt: 'The wellness area above the vines: sauna, cold plunge and spa', aspect: '5 / 4', tone: 'dusk', suggested: 'No imagery anywhere (S3). The venue\'s wellness area is the frame to ask for' },
  { id: 'venue-the-vineyard-retreat-houses', type: 'image', alt: 'The guest houses spread across the working vineyard', aspect: '5 / 4', tone: 'sand', suggested: 'No imagery anywhere (S3)' },
  { id: 'venue-the-vineyard-retreat-decks', type: 'image', alt: 'A private deck looking over the vines', aspect: '5 / 4', tone: 'salt', suggested: 'No imagery anywhere (S3)' },

  /* ---------------------------------------------------------------- team portraits (TeamCarousel) */
  { id: 'team-belle-redden', type: 'image', alt: 'Belle Redden, founder of La maréa', aspect: '4 / 5', tone: 'sand', suggested: 'Portrait of Belle needed. Half-day portrait shoot on one consistent background (research/04)' },
  { id: 'team-zoe-buttery', type: 'image', alt: 'Zoe Buttery, events lead and retreat host', aspect: '4 / 5', tone: 'salt', suggested: 'Portrait needed. The hosts photo on the live Our story page shows Belle, Zoe and Sarah' },
  { id: 'team-sarah-mclachlan', type: 'image', alt: 'Sarah McLachlan, retreat host and pilates instructor', aspect: '4 / 5', tone: 'salt', suggested: 'Portrait needed (Q9). Wellness Partners subfolder, unopened' },
  { id: 'team-kristian-ryan', type: 'image', alt: 'Kristian Ryan, contrast therapy and breathwork facilitator', aspect: '4 / 5', tone: 'dusk', suggested: 'Portrait needed (Q9). Wellness Partners subfolder, unopened' },
  { id: 'team-jaimi-baker', type: 'image', alt: 'Jaimi Baker, yoga and breathwork facilitator', aspect: '4 / 5', tone: 'salt', suggested: 'Portrait needed, Q9 asks for Jaimi first. Wellness Partners subfolder, unopened' },
  { id: 'team-natalie-jane', type: 'image', alt: 'Natalie Jane, yoga and pilates instructor', aspect: '4 / 5', tone: 'sand', suggested: 'Portrait needed (Q9). Wellness Partners subfolder, unopened' },
  { id: 'team-courtney-selfe', type: 'image', alt: 'Courtney Selfe, remedial massage therapist', aspect: '4 / 5', tone: 'dusk', suggested: 'Portrait needed, Q9 asks for Courtney first. Wellness Partners subfolder, unopened' },
  { id: 'team-malissa-fedele', type: 'image', alt: 'Malissa Fedele, clinical nutritionist', aspect: '4 / 5', tone: 'sand', suggested: 'Portrait needed (Q9). Food & Beverage Partners subfolder, unopened' },
  { id: 'team-luca-guiotto', type: 'image', alt: 'Luca Guiotto, chef and founder of Aromi Dining', aspect: '4 / 5', tone: 'salt', suggested: 'Portrait needed, Q9 asks for Luca first. Food & Beverage Partners subfolder, unopened' },

  /* ---------------------------------------------------------------- testimonials (images from the same retreat as the words) */
  { id: 'testimonial-corporate-1', type: 'image', alt: 'A corporate team at a Wake Up to Wellness morning', aspect: '1 / 1', tone: 'salt', suggested: 'Corporate Wake Up to Wellness retreat photographs (Instagram feed posts). ' + retreatConsent },
  { id: 'testimonial-corporate-2', type: 'image', alt: 'A corporate retreat group at the long lunch table', aspect: '4 / 5', tone: 'sand', suggested: 'Corporate retreat photographs, the pasta making class or lunch. ' + retreatConsent },
  { id: 'testimonial-corporate-3', type: 'image', alt: 'A corporate team during the morning session', aspect: '1 / 1', tone: 'salt', suggested: 'Corporate Wake Up to Wellness photographs. ' + retreatConsent },
  { id: 'testimonial-corporate-4', type: 'image', alt: 'The sauna and cold plunge at a team retreat', aspect: '4 / 5', tone: 'dusk', suggested: 'Contrast therapy frames from a team retreat. ' + retreatConsent },
  { id: 'testimonial-sunset-1', type: 'image', alt: 'Yoga mats and bolsters laid out facing the beach before sunset', aspect: '4 / 5', tone: 'dusk', suggested: 'A Sunset Reset (May 2026, Joe\'s Henley), 223 JPEGs. No guests identifiable, or with consent' },
  { id: 'testimonial-sunset-2', type: 'image', alt: 'The Sunset Retreat by the sea at dusk', aspect: '1 / 1', tone: 'dusk', suggested: 'A Sunset Reset (May 2026, Joe\'s Henley). ' + retreatConsent },
  { id: 'testimonial-sunset-3', type: 'image', alt: 'Welcome drinks and treats at the Sunset Retreat', aspect: '4 / 5', tone: 'sand', suggested: 'A Sunset Reset (May 2026, Joe\'s Henley), the arrival table and goodie bags' },
  { id: 'testimonial-table', type: 'image', alt: 'The chef\'s shared lunch, fresh pasta at the centre of the table', aspect: '1 / 1', tone: 'sand', suggested: 'Food folder 229A8255.jpg, or Aromi Dining lunch photographs' },
  { id: 'testimonial-yoga', type: 'image', alt: 'A yoga session suited to every level', aspect: '4 / 5', tone: 'salt', suggested: 'movement.mp4 still, or the Sunset Reset set. ' + retreatConsent },
  { id: 'testimonial-workshop', type: 'image', alt: 'A wellness workshop in progress with a small group', aspect: '1 / 1', tone: 'sand', suggested: 'Workshop frames from a 2026 retreat. ' + retreatConsent },
  { id: 'testimonial-contrast', type: 'image', alt: 'Hot and cold therapy at a retreat', aspect: '4 / 5', tone: 'dusk', suggested: 'Contrast therapy frames. ' + retreatConsent },
  { id: 'testimonial-retreat-1', type: 'image', alt: 'A quiet moment of rest at a retreat', aspect: '1 / 1', tone: 'salt', suggested: 'Retreat detail still with no guest identifiable: a set table, mats laid out, the coast' },
  { id: 'testimonial-retreat-2', type: 'image', alt: 'Women gathered at a La maréa retreat', aspect: '4 / 5', tone: 'sand', suggested: 'Beresford Estate Women\'s Wake Up To Wellness retreat photographs (2026 retreats gallery). ' + retreatConsent },
  { id: 'testimonial-retreat-3', type: 'image', alt: 'An evening retreat by the water', aspect: '1 / 1', tone: 'dusk', suggested: 'A Sunset Reset set, evening frames' },
  { id: 'testimonial-retreat-4', type: 'image', alt: 'A yoga session with the sound of the waves close by', aspect: '4 / 5', tone: 'sea', suggested: 'A Sunset Reset set, the beach setting' },
  { id: 'testimonial-retreat-5', type: 'image', alt: 'A detail from a wellness experience on the Fleurieu', aspect: '1 / 1', tone: 'salt', suggested: 'Retreat detail still with no guest identifiable' },

  /* ---------------------------------------------------------------- journal */
  { id: 'journal-sleep', type: 'image', alt: 'A calm bedroom at Naiko Retreat, Deep Creek, in the early evening', aspect: '4 / 5', tone: 'dusk', suggested: 'The live post\'s hero image, credited "Naiko, Deep Creek" (lamarea.com.au blog)' },
  { id: 'journal-poke-bowl', type: 'image', alt: 'A honey soy salmon poke bowl with avocado, edamame and brown rice', aspect: '4 / 5', tone: 'sand', suggested: 'The live post\'s image, lamarea.com.au/post/honey-soy-poke-bowl' },
  { id: 'journal-lasagna', type: 'image', alt: 'A vegetable lasagne fresh from the oven', aspect: '4 / 5', tone: 'sand', suggested: 'The live post\'s image, lamarea.com.au/post/med-inspired-vegetable-lasagna' },
  { id: 'journal-gnocchi', type: 'image', alt: 'A tray of Mediterranean gnocchi with roasted vegetables and goat cheese', aspect: '4 / 5', tone: 'sand', suggested: 'The live post\'s image, lamarea.com.au/post/mediterranean-gnocchi' },

  /* ---------------------------------------------------------------- the day at the table (MealMoments, SignatureTabs) */
  { id: 'food-breakfast', type: 'image', alt: 'A seasonal wholefood breakfast: yoghurt, granola and organic fruit', aspect: '4 / 5', tone: 'salt', suggested: 'Food photography is thin (assets-index gap 7). Summer shoot: breakfast' },
  { id: 'food-refreshments', type: 'image', alt: 'Herbal tea, tonics and wholefood snacks between sessions', aspect: '4 / 5', tone: 'sand', suggested: 'Sunset Reset set, the arrival table (protein balls, teas, tonics)' },
  { id: 'food-lunch', type: 'image', alt: 'A three course Mediterranean lunch shared at one table', aspect: '4 / 5', tone: 'sand', suggested: 'Food folder 229A8255.jpg, or 229A8436.CR2 converted' },
  { id: 'food-dinner', type: 'image', alt: 'Dinner at a retreat, to come', aspect: '4 / 5', tone: 'dusk', suggested: 'Dinner menu and photograph to come from Belle\'s retreat guide (BD-87). Summer shoot' },
  { id: 'food-dessert', type: 'image', alt: 'Dessert at a retreat, to come', aspect: '4 / 5', tone: 'dusk', suggested: 'Dessert to come from Belle\'s retreat guide (BD-131). Summer shoot' },
  { id: 'food-signature-dining', type: 'image', alt: 'Chef Luca Guiotto plating a course of the Mediterranean lunch', aspect: '5 / 6', tone: 'sand', suggested: '229A8436.CR2 from the Food folder, converted, or the nutrition.mp4 poster' },
  { id: 'food-signature-pasta', type: 'image', alt: 'Fresh egg pasta being rolled by hand at the masterclass', aspect: '5 / 6', tone: 'salt', suggested: '"Copy of Say Cheese-Pasta Party-Arne Studio-103 3.JPG", rights unconfirmed' },
];

export const slots: MediaSlot[] = raw.map((s) => ({ ...s, note: [s.note, GRADE].filter(Boolean).join(' ') }));
