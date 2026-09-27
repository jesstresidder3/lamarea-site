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
    id: 'collective-hero',
    type: 'image',
    alt: 'Past guests together by the water at sunset after a La maréa retreat',
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
    id: 'collective-recipes',
    type: 'image',
    alt: 'A plant-based Mediterranean dish from the La maréa recipes',
    aspect: '4 / 5',
    suggested: 'Journal recipe photograph, Mediterranean Gnocchi (live /post/mediterranean-gnocchi)',
    tone: 'sand',
  },
  {
    id: 'collective-resources',
    type: 'image',
    alt: 'Recipe and information sheets from a La maréa retreat, ready to take home',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the recipe and information sheets or the take-home goodie bags`,
    tone: 'salt',
  },
  {
    id: 'collective-join',
    type: 'image',
    alt: 'Guests sharing a Mediterranean lunch at a long table during a retreat',
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
    id: 'gallery-intro-1',
    type: 'image',
    alt: 'Yoga mats and bolsters laid out facing the beach before sunset',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the mats set out facing the water before guests arrive`,
    tone: 'dusk',
  },
  {
    id: 'gallery-intro-2',
    type: 'image',
    alt: 'Vines rolling across the hills at Beresford Estate, McLaren Vale',
    aspect: '3 / 2',
    suggested: 'Beresford Accom images, a wide vineyard frame',
    tone: 'sea',
    grade: 'A',
  },
  {
    id: 'gallery-intro-3',
    type: 'image',
    alt: 'Seasonal Mediterranean dishes passed along a shared table',
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
    id: 'faqs-intro',
    type: 'image',
    alt: 'The coastal walk at the bottom of Naiko at the Bluff, Encounter Bay',
    aspect: '3 / 2',
    suggested: 'la marea naiko jpegs or Naiko At The Bluff Content, the coastal walk below the property',
    tone: 'sea',
    grade: 'A',
  },

  // Waitlist ----------------------------------------------------------------
  {
    id: 'waitlist-intro',
    type: 'image',
    alt: 'The sea at sunset from the room where the Sunset Reset is held',
    aspect: '4 / 5',
    suggested: `${SUNSET}, the water at sunset with no guests in frame`,
    tone: 'dusk',
  },

  // Gift cards --------------------------------------------------------------
  {
    id: 'giftcards-intro',
    type: 'image',
    alt: 'A La maréa gift bag and a Fleurieu candle on linen',
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
    id: 'notfound-calm',
    type: 'image',
    alt: 'A calm sea off Encounter Bay in soft morning light',
    aspect: '16 / 9',
    suggested: 'Naiko At The Bluff Content, the sea from the deck in morning light, no people. Alternate: a still from DJI_0604.MP4',
    note: 'Text sits lower left over calm water.',
    tone: 'sea',
  },
];

export const slots: MediaSlot[] = raw.map((slot) => ({ ...slot, note: slot.note ? `${slot.note} ${GRADE}` : GRADE }));
