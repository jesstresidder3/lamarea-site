/*
  Collection helpers for every page builder. Owner: foundation systems builder.

  One switch decides what the prototype shows: SHOW_DRAFTS renders records that still need Belle's check
  (status 'draft'), marked in the UI. At launch set it to false and only 'published' records render.
  'hidden' never renders. Venues also need partner_approved unless SHOW_UNAPPROVED_VENUES is on.

  Usage in a page:
    import { getVenues, getExperiences, getPillars, teamTabs } from '../lib/content';
    const coast = await getVenues({ region: 'coast' });
*/
import { getCollection, type CollectionEntry } from 'astro:content';

export const SHOW_DRAFTS = true;
export const SHOW_UNAPPROVED_VENUES = true;

type Status = 'draft' | 'published' | 'hidden';
const shown = (s: Status) => s === 'published' || (SHOW_DRAFTS && s === 'draft');
const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

export type Venue = CollectionEntry<'venues'>;
export type Experience = CollectionEntry<'experiences'>;
export type Pillar = CollectionEntry<'pillars'>;
export type Intention = CollectionEntry<'intentions'>;
export type Person = CollectionEntry<'people'>;
export type Testimonial = CollectionEntry<'testimonials'>;
export type Post = CollectionEntry<'journal'>;
export type Format = CollectionEntry<'formats'>;
export type Faq = CollectionEntry<'faqs'>;
export type MealMoment = CollectionEntry<'menus'>;

/* Places to Pause. Adelaide CBD ('city') stays out unless includeCity is passed (BD-118). */
export async function getVenues(opts: { region?: 'coast' | 'vineyard' | 'city'; includeCity?: boolean } = {}) {
  const all = await getCollection('venues', (v) => shown(v.data.status) && (SHOW_UNAPPROVED_VENUES || v.data.partner_approved));
  return all
    .filter((v) => (opts.region ? v.data.region === opts.region : opts.includeCity || v.data.region !== 'city'))
    .sort(byOrder);
}

export async function getExperiences(kind?: 'guided' | 'self_led') {
  const all = await getCollection('experiences', (e) => shown(e.data.status));
  return all.filter((e) => !kind || e.data.kind === kind).sort(byOrder);
}

/* Sleep and recovery has its own page; the other nine open on /philosophy at their anchor (build spec 12). */
// Pillars without their own page link to their evidence item on /philosophy (page builder B request).
export const pillarHref = (p: Pillar) => (p.data.page ? `/philosophy/${p.id}` : `/philosophy#science-${p.id}`);

export async function getPillars() {
  return (await getCollection('pillars', (p) => shown(p.data.status))).sort(byOrder);
}

/* Belle's eight words. Empower is one of them and must always be present (orchestration brief 4). */
export async function getIntentions() {
  const words = (await getCollection('intentions', (i) => shown(i.data.status))).sort(byOrder);
  if (!words.some((w) => w.data.word === 'Empower')) {
    throw new Error('Belle\'s eight words must include Empower. Check src/content/intentions/empower.json.');
  }
  return words;
}

export async function getPeople(team?: 'hosts' | 'wellness' | 'food_hospitality') {
  const all = await getCollection('people', (p) => shown(p.data.status));
  const teamRank = { hosts: 0, wellness: 1, food_hospitality: 2 } as const;
  return all
    .filter((p) => !team || p.data.team === team)
    .sort((a, b) => teamRank[a.data.team] - teamRank[b.data.team] || a.data.order - b.data.order);
}

/*
  The two tabs Belle asked for (BD-82): wellness practitioners, then food and hospitality.
  The hosts sit where their work sits: Belle (nutritionist, exercise scientist) leads the first tab,
  Zoe (events lead and retreat host) closes the second. Belle to confirm (decision 12).
*/
const HOST_TAB: Record<string, 'wellness' | 'food_hospitality'> = {
  'belle-redden': 'wellness',
  'zoe-buttery': 'food_hospitality',
};
export async function teamTabs() {
  const people = await getPeople();
  const wellness = people.filter((p) => p.data.team === 'wellness' || (p.data.team === 'hosts' && HOST_TAB[p.id] !== 'food_hospitality'));
  const food = people.filter((p) => p.data.team === 'food_hospitality' || (p.data.team === 'hosts' && HOST_TAB[p.id] === 'food_hospitality'));
  // hosts first in the wellness tab, last in the food tab
  wellness.sort((a, b) => Number(b.data.team === 'hosts') - Number(a.data.team === 'hosts') || a.data.order - b.data.order);
  food.sort((a, b) => Number(a.data.team === 'hosts') - Number(b.data.team === 'hosts') || a.data.order - b.data.order);
  return [
    { id: 'wellness', label: 'Wellness practitioners', people: wellness },
    { id: 'food', label: 'Food and hospitality', people: food },
  ];
}

/* Only reviews with words. Pass groupType, format or featuredOn to narrow. The Day page passes format 'full_day'. */
export async function getTestimonials(
  opts: { groupType?: Testimonial['data']['group_type']; format?: Testimonial['data']['format']; featuredOn?: string } = {},
) {
  const all = await getCollection('testimonials', (t) => shown(t.data.status) && Boolean(t.data.quote));
  const order = { corporate: 0, private: 1, public_event: 2, unstated: 3 } as const;
  return all
    .filter(
      (t) =>
        (!opts.groupType || t.data.group_type === opts.groupType) &&
        (!opts.format || t.data.format === opts.format) &&
        (!opts.featuredOn || t.data.featured_on.includes(opts.featuredOn)),
    )
    .sort((a, b) => order[a.data.group_type] - order[b.data.group_type] || dmy(b.data.date) - dmy(a.data.date));
}

export async function getJournal(opts: { category?: string; pillar?: string; limit?: number } = {}) {
  const all = (await getCollection('journal', (p) => shown(p.data.status)))
    .filter((p) => (!opts.category || p.data.category === opts.category) && (!opts.pillar || p.data.pillar === opts.pillar))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  return opts.limit ? all.slice(0, opts.limit) : all;
}

export async function journalCategories() {
  const posts = await getJournal();
  return [...new Set(posts.map((p) => p.data.category))];
}

export async function getFormats(kind?: Format['data']['kind']) {
  return (await getCollection('formats', (f) => shown(f.data.status))).filter((f) => !kind || f.data.kind === kind).sort(byOrder);
}

export async function getFaqs() {
  return (await getCollection('faqs', (f) => shown(f.data.status))).sort(byOrder);
}

/* Breakfast, refreshments, lunch, dinner, dessert. Dinner and dessert are marked placeholders. */
export async function getMealMoments(opts: { publicOnly?: boolean } = {}) {
  return (await getCollection('menus', (m) => shown(m.data.status) && (!opts.publicOnly || m.data.public))).sort(byOrder);
}

/* Lookups for cross references (experience practitioners, post authors, pillar icons). */
export async function peopleById() {
  return new Map((await getCollection('people')).map((p) => [p.id, p]));
}
export async function pillarsById() {
  return new Map((await getCollection('pillars')).map((p) => [p.id, p]));
}
export async function experiencesById() {
  return new Map((await getCollection('experiences')).map((e) => [e.id, e]));
}

function dmy(d: string | null) {
  if (!d) return 0;
  const [dd, mm, yy] = d.split('-').map(Number);
  return new Date(yy, mm - 1, dd).getTime();
}

/*
  The two signature culinary experiences (BD-88) for SignatureTabs, built from the experiences
  collection so the words stay verbatim and sourced. The masterclass carries its open question.
*/
export async function signatureItems() {
  const ex = await experiencesById();
  const out: { id: string; label: string; title: string; paragraphs: string[]; media: string; by: string | null; flag: string | null; href: string }[] = [];
  const dining = ex.get('mediterranean-table');
  if (dining && shown(dining.data.status)) {
    const text = dining.data.descriptions[0]?.text ?? [];
    out.push({
      id: dining.id,
      label: 'Mediterranean dining',
      title: dining.data.name,
      paragraphs: text.filter((t) => t !== t.toUpperCase()),
      media: 'food-signature-dining',
      by: dining.data.business ? `With ${dining.data.business.name}` : null,
      flag: null,
      href: `/experiences/${dining.id}`,
    });
  }
  const pasta = ex.get('pasta-making');
  if (pasta && shown(pasta.data.status)) {
    const text = pasta.data.descriptions[0]?.text ?? [];
    out.push({
      id: pasta.id,
      label: 'Pasta making masterclass',
      title: pasta.data.name,
      paragraphs: text.slice(1),
      media: 'food-signature-pasta',
      by: null,
      flag: pasta.data.business_conflict,
      href: `/experiences/${pasta.id}`,
    });
  }
  return out;
}
