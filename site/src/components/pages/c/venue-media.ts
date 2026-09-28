/*
  Venue imagery for the L3 venue pages (rebuild 28-09-2026). Slot ids live in
  src/data/media/slots-page-c.ts. Titles name only what is in the frame.
  - opener: the full-bleed first screen (Deep Creek opens on Belle's drone pan, as the brief asks)
  - rooms: "Inside" slider frames that are not already in the features gallery
  - handover: one frame that opens to full bleed mid-page (Deep Creek: the bath clip Belle chose, T55)
  - closing: the ClosingTide photograph
*/
export interface VenueMedia {
  opener: string;
  openerCaption?: string;
  shadeAt?: 'top-left' | 'bottom-left';
  rooms: { media: string; title: string }[];
  handover?: { media: string; caption: string };
  closing?: string;
}

export const venueMedia: Record<string, VenueMedia> = {
  'naiko-deep-creek': {
    opener: 'c-naiko-deep-creek-opener',
    openerCaption: 'Deep Creek, Fleurieu Peninsula',
    rooms: [
      { media: 'c-dc-aerial', title: 'The house above the cove' },
      { media: 'c-dc-living', title: 'The living room and the fire' },
      { media: 'c-dc-kitchen', title: 'The kitchen and the long table' },
    ],
    handover: { media: 'c-naiko-deep-creek-bath', caption: 'The bath, Naiko Deep Creek' },
  },
  'naiko-encounter-bay': {
    opener: 'c-naiko-encounter-bay-opener',
    openerCaption: 'The coastal walk, Encounter Bay',
    rooms: [
      { media: 'c-eb-bath', title: 'A bathroom over the bay' },
      { media: 'c-eb-bedroom', title: 'A bedroom onto the lawn' },
      { media: 'c-eb-fire', title: 'By the fire' },
    ],
    handover: { media: 'c-eb-pool', caption: 'The pool, Naiko at the Bluff' },
  },
  'beresford-estate': {
    opener: 'c-beresford-estate-vines',
    openerCaption: 'Blewitt Springs, McLaren Vale',
    shadeAt: 'bottom-left',
    rooms: [
      { media: 'c-be-yoga', title: 'Mats laid out before the vines' },
      { media: 'c-be-fire', title: 'By the fire, the vines beyond' },
      { media: 'c-be-deck', title: 'The deck' },
      { media: 'c-be-lawn', title: 'Among the gums' },
    ],
    handover: { media: 'c-be-dining', caption: 'Beresford Estate, McLaren Vale' },
  },
};
