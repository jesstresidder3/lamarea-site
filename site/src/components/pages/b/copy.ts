/*
  Copy helpers for page builder B's pages. Nothing here is invented: every line is Belle's, lifted
  from the content harvest (build/03-content-harvest.md) with its source named beside it, set in
  sentence case where the source was published in title case or capitals. Dashes follow the build
  rule (commas in place of em and en dashes).
*/
import { escapeHtml } from '../../base/text';

const li = (items: string[]) => `<ul class="b-list">${items.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>`;
const p = (t: string, cls = '') => `<p${cls ? ` class="${cls}"` : ''}>${escapeHtml(t)}</p>`;

/*
  "What is included", built from Belle's full day retreat guide (Naiko Encounter Bay, 2026).
  Intro: guide p.24. Groups and items: guide p.23 "Summary inclusions", with p.12 for the lunch line
  (the p.23 lunch line names the Encounter Bay chef, so the general p.12 wording is used) and p.15 for
  the take home resources. Venue-specific lines (exclusive use of Naiko at the Bluff, its sauna and
  plunge, its coastal access) are left out because the example day on this page is at Beresford.
*/
export const includedGroups: { title: string; items: string[] }[] = [
  {
    title: 'Wellness experiences',
    items: [
      'Energising group vinyasa yoga flow or mat pilates',
      'Guided group breathwork, meditation, mindfulness & nervous system regulation',
      'Individual restorative massage therapy',
      'Guided group contrast therapy experience',
      'Group lifestyle wellness workshop',
    ],
  },
  {
    title: 'Food, beverage & culinary experience',
    items: [
      'Nourishing wholefood seasonal organic breakfast',
      'Shared private chef curated Mediterranean-inspired lunch',
      'Fresh, local and seasonal wholefood snacks & refreshments over the day',
      'Coffee, herbal tea, mineral water, tonics and organic cold-pressed juices',
      'Mediterranean-inspired menu over the day with an emphasis on plant-based whole foods',
    ],
  },
  {
    title: 'Guest amenities & transport',
    items: [
      'Luxury private return group transport from Adelaide',
      'Premium wellness equipment and complete setup provided',
      'Shower and change facilities',
      'Luxury wellness gift bag to take home (value $50+)',
      'Take home educational resources to support a healthy sustainable lifestyle post retreat',
    ],
  },
  {
    title: 'Retreat curation & expert facilitation',
    items: [
      'Hosted and facilitated by qualified wellness practitioners and experienced industry professionals',
      'Bespoke retreat itinerary curated around the needs, goals and wellbeing priorities of the team or group',
      'Expert-led small-group experiences designed to provide a personalised experience for every guest',
      'Dedicated La maréa hosts throughout the retreat',
      'Full retreat coordination and event management',
    ],
  },
];

export const includedIntro =
  'A completely curated luxury experience where everything is taken care of, venue, meals, wellness sessions, experiences, and clean-up, allowing your group to simply arrive, relax, and enjoy quality time together.';

export function includedHtml(): string {
  return (
    p(includedIntro) +
    `<div class="b-groups">${includedGroups.map((g) => `<div class="b-group">${p(g.title, 'b-group__title')}${li(g.items)}</div>`).join('')}</div>`
  );
}

export function includedText(): string {
  return [includedIntro, ...includedGroups.map((g) => `${g.title}: ${g.items.join('; ')}.`)].join(' ');
}

/* A plain list as HTML, for accordion bodies (built here, not in .astro frontmatter, where nested
   template strings holding HTML trip the Astro compiler's getStaticPaths hoisting). */
export const listHtml = (items: string[], cls = 'b-list') => `<ul class="${cls}">${items.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>`;

/* The evidence for one pillar, as published on the live philosophy page's science panels. */
export const evidenceHtml = (groups: { heading: string | null; claims: string[] }[], more?: { href: string; label: string }) =>
  groups.map((g) => `${g.heading ? p(g.heading, 'ev-head') : ''}${listHtml(g.claims, 'ev-list')}`).join('') +
  (more ? `<p class="ev-more"><a href="${escapeHtml(more.href)}">${escapeHtml(more.label)}</a></p>` : '');

/* FAQ answers as accordion paragraphs, with the live site's typography kept. */
export const answerHtml = (paras: string[]) => paras.map((t) => p(t)).join('');

/*
  Per experience: which of the collection's sourced lines answers "What is it", and which moment of
  Belle's published example day it sits in. `answer` holds indexes into `descriptions` (verbatim
  text), or null where no sourced answer exists, which renders a marked placeholder.
  `step` is the order of the step in data/day.ts. `flags` go to the placeholder layer only.
*/
export interface ExperienceCopy {
  question?: string;
  answer: { from: 'description' | 'short'; index?: number; lines?: number[] } | null;
  placeholder?: string;
  step?: number;
  moment?: string;
  faqs?: string[];
  flags?: string[];
  pillars?: string[];
}

export const experienceCopy: Record<string, ExperienceCopy> = {
  sauna: {
    answer: null,
    placeholder: 'What the sauna session is, in Belle’s words, 40 to 60 words',
    step: 6,
    moment: 'Inside the contrast therapy station of the morning rotation',
    flags: [
      'No sourced description of the sauna exists yet. The transcript lists sauna as a guided experience and infrared sauna as self-led, and whether La maréa brings its own sauna is open (plan/11 item 19).',
      'Who guides it follows the contrast therapy question: the live partners page credits Kristian Ryan of Third Spaces, the Encounter Bay guide credits Jaimi Baker of PEAQ Performance (plan/11 item 60).',
    ],
  },
  massage: {
    answer: { from: 'short' },
    step: 6,
    moment: 'Experience 1 of the morning rotation',
    flags: ['A fuller answer in Belle’s words (40 to 60 words) is still to come. Courtney Selfe’s live services list 60 or 45 minute massages; the rotation runs 40 minutes.'],
  },
  'contrast-therapy': {
    answer: { from: 'short' },
    step: 6,
    moment: 'Experience 2 of the morning rotation',
    flags: [
      'Who delivers contrast therapy differs between sources and is shown to no visitor: the live partners page credits Kristian Ryan of Third Spaces, the Encounter Bay guide p.21 credits Jaimi Baker of PEAQ Performance (plan/11 item 60).',
      'The sauna differs too: infrared in the guide, a Finnish barrel sauna in Kristian Ryan’s services, and the Beresford schedule adds breathwork.',
    ],
  },
  'pasta-making': {
    question: 'What is the pasta making masterclass?',
    answer: { from: 'description', index: 3 },
    placeholder: 'What the masterclass involves, in Belle’s words',
    faqs: ['faq-03'],
    flags: [
      'Who runs the masterclass for La maréa is to confirm (plan/11 Q3): Malissa Fedele lists a 2 hour Mediterranean pasta-making masterclass on the live site, and Luca Guiotto of Aromi Dining lists private pasta-making classes. The answer shown is Belle’s Instagram write-up of a 2026 corporate retreat.',
    ],
  },
  'mediterranean-table': {
    question: 'What is the chef curated Mediterranean dining experience?',
    answer: { from: 'description', index: 0, lines: [1] },
    step: 8,
    moment: 'The shared lunch in the middle of the day',
    faqs: ['faq-03'],
    flags: ['The answer is the Naiko Encounter Bay guide (p.13), with Luca Guiotto. In the Beresford example day the lunch is provided by Beresford, which is why that line shows below as published.'],
  },
  yoga: {
    answer: { from: 'description', index: 0 },
    step: 3,
    moment: 'The first session of the morning',
    faqs: ['faq-02'],
    flags: ['Yoga and pilates run as one either-or session in both sources (plan/11 item 31). Belle decides one page or two.'],
  },
  pilates: {
    answer: { from: 'description', index: 0 },
    step: 3,
    moment: 'The first session of the morning',
    faqs: ['faq-02'],
    flags: ['Yoga and pilates run as one either-or session in both sources (plan/11 item 31). Sarah McLachlan’s pilates certification is listed as in progress.'],
  },
  'meditation-and-mindfulness': {
    answer: { from: 'description', index: 6 },
    step: 5,
    moment: 'After breakfast, before the rotation',
  },
  'gut-health': {
    question: 'What is the gut health nutrition workshop?',
    answer: null,
    placeholder: 'What the gut health nutrition workshop covers, in Belle’s words, 40 to 60 words',
    pillars: ['nutrition'],
    flags: [
      'No workshop called gut health is published anywhere. The only sourced workshop is The Foundations of High Performance Wellbeing (in the morning rotation), and whether the two are the same is plan/11 Q5.',
    ],
  },
  'nutrition-consultations': {
    question: 'What are the lifestyle wellness and nutrition consultations?',
    answer: { from: 'description', index: 0 },
    flags: [
      'Listed on the live retreats page as a paid bespoke addition, created after the retreat, not an inclusion. Whether it sits inside a day or is sold separately is plan/11 Q4. Malissa Fedele’s live services list a 60 minute 1:1 consultation.',
    ],
  },
  /* Self-led, the unhurried afternoon */
  'coastal-hiking': {
    answer: { from: 'short' },
    step: 9,
    pillars: ['nature-immersion'],
    faqs: ['faq-02'],
    flags: ['The line shown is Belle’s Nature immersion pillar line. A description of the coastal walks is still to come; at Beresford the afternoon lists vineyard hiking instead.'],
  },
  'infrared-sauna': {
    answer: null,
    placeholder: 'A line on the infrared sauna in the afternoon, from Belle',
    step: 9,
    flags: ['Whether each venue has a sauna is open (plan/11 item 19); the Encounter Bay guide names one at Naiko at the Bluff.'],
  },
  'pool-swimming': {
    answer: null,
    placeholder: 'A line on pool swimming, from Belle',
    step: 9,
  },
  'ocean-swimming': {
    answer: { from: 'short' },
    step: 9,
    pillars: ['nature-immersion'],
    flags: ['The line shown is from the Encounter Bay guide amenities. Ocean swimming depends on a coastal venue.'],
  },
  'journaling-and-reading': {
    answer: { from: 'short' },
    step: 9,
  },
  'relaxing-by-the-fire': {
    answer: null,
    placeholder: 'A line on the fire at the end of the day, from Belle',
    step: 9,
  },
};
