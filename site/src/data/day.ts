/*
  The 8 hour day, as Belle's four beats: Arrive, Move, Nourish, Restore.
  Owner: foundation layout builder. Used by components/day/PinnedDay.astro and, for the hour by hour
  table, by the Day page (DataTable with `hourByHour`).

  Source: build/content-seed/day.json, example "beresford-corporate-12", Belle's published
  "Example full day (8 hour) retreat schedule, bespoke luxury corporate wellness day, 12 guests",
  transcribed from the image on lamarea.com.au/luxury-retreats (captured 24-09-2026), with the
  Encounter Bay guide (p.24) for "retreat time 8am to 4pm, approx. pick up 7am, drop off 5pm".

  Rules followed here
  - Times are sourced only. Every time below appears in that schedule. Nothing is estimated.
  - The schedule was published in capitals; `text` keeps the transcribed wording, `display` sets it in
    sentence case with Belle's words unchanged (the site never reproduces the uppercase).
  - TYPO FLAG FOR BELLE: the published schedule reads "12 : 20 AM" twice (the end of the rotations and
    the start of the refresh) where 12:20 PM is meant. The rotations add up (3 x 40 minutes plus
    2 x 10 minute changeovers from 10:00 is 12:20), so it renders here as 12:20pm. Logged for Belle.
  - No drafted copy in the panels: each beat shows Belle's own schedule lines (pre-build review,
    "no drafted outcome promises in our voice"). The lunch line is hers, with no chef named.
*/

export type BeatId = 'arrive' | 'move' | 'nourish' | 'restore';

export interface DayStep {
  order: number;
  start: string;           // 24 hour, from the seed
  end: string;
  time: string;            // display, for example '8:15am'
  range: string;           // display, for example '8:15am to 9am'
  timeAsPublished: string; // exactly as published
  text: string[];          // as transcribed (title case from the published capitals)
  display: string[];       // sentence case for the site, Belle's wording unchanged
  items?: string[];        // sub-items shown as a quiet list
}

export interface DayBeat {
  id: BeatId;
  name: string;
  railTime: string;        // sourced time shown for the beat on the time rail
  media: string;           // media slot id (stills at launch)
  steps: DayStep[];        // in clock order
}

const fmt = (t: string): string => {
  const [h, m] = t.split(':').map(Number);
  const suffix = h >= 12 ? 'pm' : 'am';
  const hour = h % 12 === 0 ? 12 : h % 12;
  return m === 0 ? `${hour}${suffix}` : `${hour}:${String(m).padStart(2, '0')}${suffix}`;
};

const step = (order: number, start: string, end: string, timeAsPublished: string, text: string[], display: string[], items?: string[]): DayStep => ({
  order,
  start,
  end,
  time: fmt(start),
  range: `${fmt(start)} to ${fmt(end)}`,
  timeAsPublished,
  text,
  display,
  items,
});

export const steps: DayStep[] = [
  step(1, '07:00', '08:00', '7 : 00 AM to 8 : 00 AM',
    ['Luxury private transfer - Group pickup from work office at 7:00 am'],
    ['Luxury private transfer, group pickup from work office']),
  step(2, '08:00', '08:15', '8 : 00 AM to 8 : 15 AM',
    ['Arrival to Beresford Estate', 'Warm welcome drinks, refreshments & group connection'],
    ['Arrival to Beresford Estate', 'Warm welcome drinks, refreshments & group connection']),
  step(3, '08:15', '09:00', '8 : 15 AM to 9 : 00 AM',
    ['Energising Group Vinyasa Yoga Flow or Mat Pilates Session'],
    ['Energising group vinyasa yoga flow or mat pilates session']),
  step(4, '09:00', '09:30', '9 : 00 AM to 9 : 30 AM',
    ['Nourishing wholefood seasonal breakfast & beverages, group connection time'],
    ['Nourishing wholefood seasonal breakfast & beverages, group connection time']),
  step(5, '09:30', '10:00', '9 : 30 AM - 10 : 00 AM',
    ['Group guided breathwork, meditation, mindfulness & nervous system regulation session'],
    ['Group guided breathwork, meditation, mindfulness & nervous system regulation session']),
  step(6, '10:00', '12:20', '10 : 00 AM - 12 : 20 AM', // published "12 : 20 AM", means 12:20 PM (flagged above)
    [
      'Premium wellness rotations commence (40 minutes per rotation, 10 min changeovers - split into 3 small groups of 4 guests):',
      'Experience 1: Individual Restorative Massage Therapy',
      'Experience 2: Contrast Therapy Experience (sauna, breathwork & cold plunge)',
      'Experience 3: Lifestyle Wellness Workshop: The Foundations of High Performance Wellbeing: Build Lifestyle Habits for Energy, Focus & Burnout Prevention',
    ],
    ['Premium wellness rotations (40 minutes per rotation, 10 min changeovers, in 3 small groups of 4 guests)'],
    [
      'Individual restorative massage therapy',
      'Contrast therapy experience (sauna, breathwork & cold plunge)',
      'Lifestyle wellness workshop: The Foundations of High Performance Wellbeing',
    ]),
  step(7, '12:20', '12:30', '12 : 20 AM to 12 : 30 PM', // published "12 : 20 AM", means 12:20 PM (flagged above)
    ['Refresh & recovery transition, drinks & refreshments', '(showers available, change in preparation for group culinary experience)'],
    ['Refresh & recovery transition, drinks & refreshments', 'Showers available, change in preparation for the group culinary experience']),
  step(8, '12:30', '14:00', '12 : 30 PM - 2 : 00 PM',
    ['Shared chef curated Mediterranean lunch provided by Beresford'],
    ['Shared chef curated Mediterranean lunch provided by Beresford']),
  step(9, '14:00', '15:45', '2 : 00 PM - 3 : 45 PM',
    ['Recovery Time', 'Unstructured restorative time as a group for team bonding with access to;', 'Vineyard Hiking', 'Plunge Pool swimming', 'Relaxing By The Fire', 'Accessing Recovery Lounge Equipment'],
    ['Recovery time', 'Unstructured restorative time as a group for team bonding'],
    ['Vineyard hiking', 'Plunge pool swimming', 'Relaxing by the fire', 'Accessing recovery lounge equipment']),
  step(10, '15:45', '16:00', '3 : 45 PM to 4 : 00 PM',
    ['Closing reflection & wellness gift bags presented upon departure at 4:00 pm'],
    ['Closing reflection & wellness gift bags presented upon departure at 4pm']),
  step(11, '16:00', '17:00', '4 : 00 PM to 5 : 00 PM',
    ['Luxury private transfer back to Adelaide - Group drop off to work office at 5:00 pm'],
    ['Luxury private transfer back to Adelaide, group drop off to work office at 5pm']),
];

const pick = (...orders: number[]) => steps.filter((s) => orders.includes(s.order));

/*
  Beats, fixed by the pre-build review (build spec section 12): Arrive = steps 1 and 2; Move = steps
  3, 5 and 6 (yoga or pilates, breathwork and meditation, the rotation); Nourish = steps 4, 7 and 8
  (breakfast, the refresh, the shared lunch); Restore = steps 9 to 11 (the afternoon, closing, the
  drive home). `railTime` is the time shown for the beat on the PinnedDay time rail.
*/
export const beats: DayBeat[] = [
  { id: 'arrive', name: 'Arrive', railTime: '7am', media: 'day-arrive', steps: pick(1, 2) },
  { id: 'move', name: 'Move', railTime: '8:15am', media: 'day-move', steps: pick(3, 5, 6) },
  { id: 'nourish', name: 'Nourish', railTime: '9am and 12:30pm', media: 'day-nourish', steps: pick(4, 7, 8) },
  { id: 'restore', name: 'Restore', railTime: '2pm', media: 'day-restore', steps: pick(9, 10, 11) },
];

export const day = {
  /** Section heading. The place name takes the site's one italic (asterisks, see base/text.ts). */
  heading: 'An 8 hour day on the *Fleurieu*',
  example: 'An example day at Beresford Estate, 12 guests',
  /** Belle's own line, verbatim from the published schedule, brackets included. */
  note: '(Note we can curate a personalised retreat to suit your group)',
  /** Sourced, Encounter Bay guide p.24: "RETREAT TIME: 8AM-4PM (APPROX. PICK UP 7AM, DROP OFF 5PM)". */
  times: { pickup: '7am', retreat: '8am to 4pm', dropoff: '5pm' },
  railEnd: '5pm',
  source: 'Beresford Estate example, bespoke luxury corporate wellness day for 12 guests (lamarea.com.au/luxury-retreats)',
  beats,
};

/** Rows for the Day page's hour by hour DataTable. */
export const hourByHour = steps.map((s) => ({
  time: s.range,
  what: [...s.display, ...(s.items ?? [])].join('. ').replace(/\.\./g, '.'),
}));
