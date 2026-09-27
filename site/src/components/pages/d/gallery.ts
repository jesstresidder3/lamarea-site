/*
  Gallery of past retreats (page builder D). Belle: "a gallery section where there's previous
  retreats... I think that will help build credibility and trust as a brand" (BD-124).
  Groups and tiles are data, so Jess can add retreats as Belle's photographs arrive.

  Sources
  - A Sunset Reset: Belle's photo folder "A Sunset Reset (May 2026 Joe's Henley)", 223 JPEGs
    (plan/11 4.20). Intro verbatim from Belle's live home page ("Sunset Reset Wellness Experiences").
    Tile captions are drafted from what guests described in their May 2026 Google reviews of the
    Sunset Retreat (Donna Giannetta, Alysha Mines, Janelle Hueppauff, Melissa Brown), nothing more.
  - 2026 La maréa retreats: the three cards on Belle's live home page under that heading.
    Beresford: the card caption plus Beresford Estate's own description of its vineyard.
    Private group: Belle's Instagram caption "Wake Up To Wellness ~ A Private Group Retreat",
    verbatim, assumed to be the same retreat as the card. Its post names the venue; left off here.
    Corporate: Belle's Instagram caption for the Ray White Projects SA morning, verbatim from the
    sentence that does not name the client (permission pending, plan/11 item 63). The live card
    calls it a "High Performance Half Day Retreat"; Instagram calls it Wake Up To Wellness.
  Every photograph with guests in frame needs their written consent before it publishes.
*/

export interface GalleryTile {
  id: string;
  media: string;
  eyebrow?: string;
  title: string;
  body: string;
  /** Drafted caption, marked for Belle. Verbatim captions leave this false. */
  draft: boolean;
  retreat: string;
  venue: string | null;
  /** Columns out of 12 at 760px and up, and the tile height there. */
  span: number;
  height: string;
}

export interface GalleryGroup {
  id: string;
  title: string;
  meta: string[];
  intro?: { text: string; source: string };
  note?: string;
  tiles: GalleryTile[];
}

export const facets = {
  retreat: [
    { value: 'sunset-reset', label: 'A Sunset Reset' },
    { value: 'wake-up-to-wellness', label: 'Wake Up To Wellness' },
  ],
  venue: [
    { value: 'joes-henley', label: 'Joe’s Henley' },
    { value: 'beresford-estate', label: 'Beresford Estate' },
    { value: 'mclaren-flat', label: 'McLaren Flat' },
  ],
};

const TALL = 'clamp(24rem, 62vh, 36rem)';
const MID = 'clamp(20rem, 48vh, 28rem)';

export const galleryGroups: GalleryGroup[] = [
  {
    id: 'a-sunset-reset',
    title: 'A Sunset Reset',
    meta: ['May 2026', 'Joe’s Henley'],
    intro: {
      text: 'Each curated evening brings together gentle movement, breathwork, nourishing food, meaningful connection, and beautiful coastal settings at sunset.',
      source: 'Belle, on the Sunset Reset',
    },
    note: 'Venue named as it appears on Belle’s photo folder. Belle to confirm how she names it publicly.',
    tiles: [
      {
        id: 'sunset-1',
        media: 'gallery-sunset-1',
        eyebrow: 'Before sunset',
        title: 'Mats facing the water',
        body: 'Yoga mats and bolsters were laid out overlooking the beach, ready for guests as they waited for the sunset.',
        draft: true,
        retreat: 'sunset-reset',
        venue: 'joes-henley',
        span: 7,
        height: TALL,
      },
      {
        id: 'sunset-2',
        media: 'gallery-sunset-2',
        eyebrow: 'Movement',
        title: 'Breathwork, then yoga',
        body: 'The evening began with breathwork and moved into a gentle yoga reset with Jaimi, beside large windows looking out over the beach.',
        draft: true,
        retreat: 'sunset-reset',
        venue: 'joes-henley',
        span: 5,
        height: TALL,
      },
      {
        id: 'sunset-3',
        media: 'gallery-sunset-3',
        eyebrow: 'Education',
        title: 'The Mediterranean way of eating',
        body: 'Belle’s nutrition session on the Mediterranean way of eating, with recipes and information sheets for guests to keep learning at home.',
        draft: true,
        retreat: 'sunset-reset',
        venue: 'joes-henley',
        span: 4,
        height: MID,
      },
      {
        id: 'sunset-4',
        media: 'gallery-sunset-4',
        eyebrow: 'Nourish',
        title: 'Dinner in a bowl',
        body: 'Dinner was a Mediterranean bowl of chickpeas and quinoa, after protein balls and relaxing tonics on arrival.',
        draft: true,
        retreat: 'sunset-reset',
        venue: 'joes-henley',
        span: 4,
        height: MID,
      },
      {
        id: 'sunset-5',
        media: 'gallery-sunset-5',
        eyebrow: 'To take home',
        title: 'A Fleurieu candle',
        body: 'Guests remembered the details, from the colour scheme to a Fleurieu candle and a goodie bag to take home.',
        draft: true,
        retreat: 'sunset-reset',
        venue: 'joes-henley',
        span: 4,
        height: MID,
      },
    ],
  },
  {
    id: 'retreats-2026',
    title: '2026 La maréa retreats',
    meta: ['2026', 'Three retreats'],
    note: 'Three retreats from the live home page. The corporate client stays unnamed until written permission is given (plan/11 item 63), and the private group’s venue is left off until Belle confirms it.',
    tiles: [
      {
        id: 'beresford-womens',
        media: 'gallery-beresford-womens',
        eyebrow: 'Beresford Estate, McLaren Vale',
        title: 'Women’s Wake Up To Wellness Retreat',
        body: 'A women’s retreat at Beresford Estate, a 70 acre vineyard in Blewitt Springs, McLaren Vale.',
        draft: true,
        retreat: 'wake-up-to-wellness',
        venue: 'beresford-estate',
        span: 4,
        height: TALL,
      },
      {
        id: 'private-professionals',
        media: 'gallery-private-wutw',
        eyebrow: 'Private group',
        title: 'Wake Up To Wellness',
        body: 'It was a pleasure to curate this experience for a private group of young professionals, creating space for guests to step away from the demands of their fast-paced working lives, recharge, and explore the foundations of high-performance wellbeing.',
        draft: false,
        retreat: 'wake-up-to-wellness',
        venue: null,
        span: 4,
        height: TALL,
      },
      {
        id: 'corporate-mclaren-flat',
        media: 'gallery-corporate-mclaren-flat',
        eyebrow: 'Corporate team, McLaren Flat',
        title: 'Wake Up To Wellness',
        body: 'The morning brought together yoga, a wholesome seasonal breakfast, breathwork, contrast therapy, massage and evidence-based wellbeing education, before finishing for an interactive pasta-making masterclass and nourishing long-table lunch.',
        draft: false,
        retreat: 'wake-up-to-wellness',
        venue: 'mclaren-flat',
        span: 4,
        height: TALL,
      },
    ],
  },
];
