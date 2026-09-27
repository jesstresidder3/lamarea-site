/*
  Per venue page details that the venues collection does not hold (page builder C).
  Every line here is sourced and says where from. A venue added to the collection without an entry
  here still gets a full page from the collection alone; these only sharpen the three launch venues.

  - aboutHeading: the venue as La maréa publishes it, with the place in asterisks (the site's one italic)
  - aroundPlace: the place named in "Around <place>"
  - aroundFromFeatures: venue features that sit outside the house, shown under "what is around it"
    instead of in the gallery (so nothing appears twice on the page)
  - day: the "a day here" content, from Belle's own example days only
  - flags: notes for Jess and Belle, shown only while the media notes layer is on
*/
import { day as exampleDay, beats } from '../../../data/day';

/* The step that stands for each beat on a venue page: arrival, the yoga or pilates, the shared lunch,
   the unstructured afternoon. */
const KEY_STEP: Record<string, number> = { arrive: 2, move: 3, nourish: 8, restore: 9 };

export interface VenueDay {
  heading: string;
  lead?: { text: string; source: string };
  /** Belle's own lines for the day, verbatim apart from the typo fixes noted in `fixes` */
  lines?: string[];
  times?: string;
  capacity?: string;
  /** The Beresford example uses the four beats and their sourced times */
  beats?: { name: string; time: string; line: string }[];
  note?: string;
  placeholder?: string;
  fixes?: string;
}

export interface VenueExtra {
  aboutHeading: string;
  aboutDraft?: { text: string; basis: string }[];
  aroundPlace: string;
  aroundFromFeatures?: string[];
  day: VenueDay;
  ctaPlace: string;
  flags?: string[];
}

export const venueExtras: Record<string, VenueExtra> = {
  'naiko-deep-creek': {
    aboutHeading: 'Naiko Retreat, *Deep Creek*',
    aroundPlace: 'Deep Creek',
    aroundFromFeatures: ['The beach', 'The walking trails'],
    day: {
      heading: 'A day at *Deep Creek*',
      placeholder: 'How a full day runs at Naiko Deep Creek, and the group size it suits.',
    },
    ctaPlace: 'Deep Creek',
    flags: [
      'Held back from the page until Belle confirms it still holds (plan/11 item 42, CD review 02 item 4): "Following recent bushfires in the region, Naiko is undergoing careful landscape restoration, with bookings now open for late 2026 as the coastline continues its natural regeneration."',
      'The Ramindjeri meaning of "Naiko" is a cultural claim: Belle confirms it with Naiko.',
      'Day format: the house sleeps six and both published example days are for 12 guests (plan/11 4.10, question 19).',
    ],
  },
  'naiko-encounter-bay': {
    aboutHeading: 'Naiko at the Bluff, *Encounter Bay*',
    aroundPlace: 'Encounter Bay',
    day: {
      heading: 'A day at *Encounter Bay*',
      lead: {
        text: 'Here’s an example of what you can expect during your luxury private wellness retreat with us at Naiko Encounter Bay.',
        source: 'Encounter Bay guide p.17',
      },
      lines: [
        'Full-day wellness immersion experience designed around movement, recovery, nourishing food, education, connection & nervous system support',
        'Three-tier wellness rotation system over the morning (4 guests per station) including massage, contrast therapy & wellness workshop',
        'Private chef-led Mediterranean lunch in the middle of the day',
        'Unstructured restorative time in the afternoon with access to pool, sauna, ocean, coastal walks, relaxing by a fire & team connection',
      ],
      times: 'Retreat time 8am to 4pm (approx. pick up 7am, drop off 5pm)',
      capacity: '10 to 14 guests at this venue',
      fixes: 'Guide p.17 reads "Mediteranean"; set as "Mediterranean" pending Belle (as with difference 02).',
    },
    ctaPlace: 'Encounter Bay',
    flags: [
      'Drive time from Adelaide not captured: the venue\'s location page was blocked. Belle to supply.',
      'Sauna: in the guide (p.11, p.16), not on the venue home page. Belle confirms whether it is the venue\'s or brought in.',
    ],
  },
  'beresford-estate': {
    aboutHeading: 'Beresford Estate, *McLaren Vale*',
    aboutDraft: [
      {
        text: 'A family owned 70 acre vineyard in Blewitt Springs, established in 1985, with Grand Reserve Suites, two villas and Beresford House among the vines.',
        basis: 'Drafted from beresfordestate.com.au facts (home, /pages/accommodation, /pages/venues, captured 24-09-2026). No La maréa copy beyond one line exists for this venue.',
      },
    ],
    aroundPlace: 'McLaren Vale',
    aroundFromFeatures: ['The vineyard'],
    day: {
      heading: 'A day at *Beresford Estate*',
      lead: { text: exampleDay.example, source: 'lamarea.com.au/luxury-retreats, the published schedule' },
      // One of Belle's own schedule lines per beat, at its published time
      beats: beats.map((b) => {
        const s = b.steps.find((x) => x.order === KEY_STEP[b.id]) ?? b.steps[0];
        return { name: b.name, time: s.time, line: s.display.join('. ') };
      }),
      note: exampleDay.note,
    },
    ctaPlace: 'McLaren Vale',
    flags: [
      'Drive time is McLaren Vale\'s, from The Vineyard Retreat\'s site in Blewitt Springs (build spec 12). Beresford publishes none.',
    ],
  },
};

/** For a venue with no entry: its own name and the first part of its location label. */
export function extrasFor(id: string, name: string, locationLabel: string): VenueExtra {
  const place = locationLabel.split(',')[0].trim();
  return (
    venueExtras[id] ?? {
      aboutHeading: `${name}, *${place}*`,
      aroundPlace: place,
      day: { heading: `A day at *${place}*`, placeholder: `How a full day runs at ${name}.` },
      ctaPlace: place,
    }
  );
}
