/*
  The enquiry funnel's questions and answers (plan/11 Part 5 and plan/10 section 6, reconciled).
  One source for the /enquire page, its script and the /enquire/thank-you summary.

  Every question and answer label is drafted for Belle to approve (plan/11 Part 5: "question wording
  in hand, blocked, on Belle's approval"); the page marks them data-draft. Belle's own words are
  used where she has them: "family resets" and "birthdays, milestone celebrations" (live retreats
  page), "a strategic reset" (live corporate copy), "Places to Pause" place names from the venues.
  Values are the stored enum values documented for Dom in functions/api/enquiry.js.
*/

export interface Option {
  value: string;
  label: string;
  hint?: string;
  media?: string;
}

export const STORE_KEY = 'lm-enquiry';

export const AUDIENCE: Option[] = [
  { value: 'private', label: 'A private group', hint: 'Friends, family, a celebration' },
  { value: 'corporate', label: 'My team or organisation', hint: 'Leadership teams and colleagues' },
];

export const OCCASION: Option[] = [
  { value: 'birthday-milestone', label: 'A birthday or milestone' },
  { value: 'friends', label: 'Time with friends' },
  { value: 'family', label: 'A family reset' },
  { value: 'celebration', label: 'A hens weekend or celebration' },
  { value: 'other', label: 'Something else' },
];

export const OUTCOME: Option[] = [
  { value: 'reset-recovery', label: 'A reset and recovery' },
  { value: 'reconnect', label: 'Reconnect as a team' },
  { value: 'leadership', label: 'A leadership offsite' },
  { value: 'education', label: 'Wellbeing education' },
  { value: 'other', label: 'Something else' },
];

export const GUESTS: Option[] = [
  { value: 'under-10', label: 'Under 10' },
  { value: '10-14', label: '10 to 14' },
  { value: '15-20', label: '15 to 20' },
  { value: 'over-20', label: 'More than 20' },
  { value: 'not-sure', label: 'Not sure yet' },
];

/** Step 4 adds the guided experiences from the collection; this closes the list. */
export const REST: Option = { value: 'time-to-rest', label: 'Time to rest', hint: 'The unhurried afternoon', media: 'experience-relaxing-by-the-fire' };

export const SETTING: Option[] = [
  { value: 'coast', label: 'By the coast', hint: 'Deep Creek and Encounter Bay', media: 'enquire-coast' },
  { value: 'vineyard', label: 'In the vineyards', hint: 'McLaren Vale', media: 'enquire-vineyard' },
  { value: 'help', label: 'Help me choose' },
];

export const FORMAT: Option[] = [
  { value: 'full-day', label: 'The 8 hour day' },
  { value: 'shorter', label: 'A shorter day' },
  { value: 'not-sure', label: 'Not sure yet' },
];

/** URL `format` values from the rest of the site, mapped onto the step 6 choice. */
export const FORMAT_FROM_PARAM: Record<string, string> = {
  'full-day': 'full-day',
  'half-day': 'shorter',
  'wake-up-to-wellness': 'shorter',
  'sunset-reset': 'shorter',
  'personalised': 'not-sure',
};

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** The next twelve months from `from` (this month excluded), as 'YYYY-MM' values and labels. */
export function nextMonths(from: Date = new Date()): Option[] {
  const out: Option[] = [];
  for (let i = 1; i <= 12; i++) {
    const d = new Date(from.getFullYear(), from.getMonth() + i, 1);
    out.push({ value: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`, label: `${MONTHS[d.getMonth()]} ${d.getFullYear()}` });
  }
  return out;
}

export function monthLabel(value: string | null | undefined): string {
  if (!value) return '';
  if (value === 'flexible') return 'Flexible on dates';
  const [y, m] = value.split('-').map(Number);
  return m ? `${MONTHS[m - 1]} ${y}` : value;
}

export const labelOf = (list: Option[], value: string | null | undefined) => list.find((o) => o.value === value)?.label ?? '';
