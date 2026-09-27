/*
  The local South Australian businesses behind a La maréa day (build spec 12, CD review B2), named
  only where a source names them. The four businesses of the practitioners come from the people
  collection (their live bio pages and the Encounter Bay guide p.21). The two producers are the ones
  Belle's example menu names. The rest are the "Food, Beverage & Supplement Partners" logos on
  lamarea.com.au/partners (captured 24-09-2026), which say nothing about what each one supplies, so
  they are listed by name only. ORTC is left out: what the name stands for is not published.
  Which of these are Fleurieu based is not published either, so nothing here says so.
*/
import type { Person } from '../../../lib/content';

export interface Business { name: string; role: string; person?: { name: string; href: string }; url?: string | null }

/** Practitioner businesses, in the order a day meets them. */
const PRACTITIONER_ORDER = ['jaimi-baker', 'kristian-ryan', 'courtney-selfe', 'luca-guiotto', 'malissa-fedele'];
const ROLE: Record<string, string> = {
  'jaimi-baker': 'Yoga, breathwork and meditation',
  'kristian-ryan': 'Contrast therapy and breathwork',
  'courtney-selfe': 'Restorative massage',
  'luca-guiotto': 'Private dining and the chef-led lunch',
  'malissa-fedele': 'Cooking classes and nutrition',
};

export function practitionerBusinesses(people: Person[]): { wellness: Business[]; table: Business[] } {
  const byId = new Map(people.map((p) => [p.id, p]));
  const out = PRACTITIONER_ORDER.map((id) => byId.get(id))
    .filter((p): p is Person => Boolean(p && p.data.business))
    .map((p) => ({
      id: p.id,
      team: p.data.team,
      name: (p.data.business ?? '').replace(/\s*\(.*\)$/, ''),
      role: ROLE[p.id] ?? p.data.role ?? '',
      person: { name: p.data.name, href: `/team/${p.id}` },
      url: p.data.business_url,
    }));
  return {
    wellness: out.filter((b) => b.team !== 'food_hospitality'),
    table: out.filter((b) => b.team === 'food_hospitality'),
  };
}

/** Named in Belle's example lunch menu (Encounter Bay guide p.13). */
export const producers: Business[] = [
  { name: 'Peninsula Providore', role: 'Marinated olives on the example menu' },
  { name: 'La Vera', role: 'Fresh mozzarella on the example menu' },
];

/** Logos under "Food, Beverage & Supplement Partners" on lamarea.com.au/partners. */
export const partnerNames = ['Feather and Peck', 'Fleurieu Milk Company', 'Beach Organics', 'Lemon and Sage', 'Harvest the Fleurieu', 'Happy Way', 'Bowlsome'];
