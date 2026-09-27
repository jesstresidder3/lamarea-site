/*
  Site settings: navigation, footer groups, contact, social, booking link, the five differences.
  Owner: foundation layout builder. Source: build/content-seed/contact.json and differences.json,
  harvested from lamarea.com.au and Belle's Naiko Encounter Bay retreat guide on 24-09-2026.
  Nothing here is invented. Where a value is not confirmed it carries a `status` and the UI marks it.
*/

export interface NavLink {
  label: string;
  href: string;
  /** One short line used in the menu overlay. Drafted lines are marked `draft: true`. */
  hint?: string;
  draft?: boolean;
  /** Media slot the menu crossfades to while this link is hovered or focused. */
  media?: string;
}

export const site = {
  name: 'La maréa',
  legalName: 'La maréa',
  url: 'https://www.lamarea.com.au',
  locale: 'en_AU',
  /** Belle's positioning line, from the style guide tagline lockup. */
  tagline: 'luxury coastal wellness reimagined',
  defaultDescription:
    'Luxury coastal wellness retreats on the Fleurieu Peninsula, South Australia. 8 hour retreats for private groups and corporate teams, south of Adelaide.',
  defaultImage: '/og-default.jpg',
} as const;

/* Calls to action (build spec section 12, overriding 5.8 and section 7).
   Every in-page button that opens the funnel reads "Plan your day". "Book a discovery call" appears
   only where the calendar opens: the thank-you page button and the small link on funnel
   step 1 ("Rather talk first? Book a discovery call with Belle"). */
export const cta = {
  plan: { label: 'Plan your day', href: '/enquire' },
  /** "Plan your day" from anything about the 8 hour day, so the funnel arrives prefilled. */
  planFullDay: { label: 'Plan your day', href: '/enquire?format=full-day' },
  seeFullDay: { label: 'See the full day', href: '/experiences/full-day-retreat' },
  /** Calendar only. Use on /enquire/thank-you and the step 1 text link, nowhere else. */
  discovery: { label: 'Book a discovery call', href: 'https://calendar.app.google/jiKYpzKFiG5XZV9x9' },
  bookingUrl: 'https://calendar.app.google/jiKYpzKFiG5XZV9x9',
  /** The line under "Plan your day" wherever the Day or a closing band asks for the day, so a
      visitor knows a call with Belle comes next (Belle, T33: "get them to book a discovery call
      with me to curate their eight hour immersive retreat"). Content review 27-09-2026. */
  callNote: 'A few short questions about your group, then a discovery call with Belle.',
} as const;

/* Header navigation, split either side of the centred logo (build spec section 12).
   Left: the two paths and the flagship. Right: two links, then Menu and "Plan your day".
   The Table, Philosophy and everything else live in the menu. */
export const navLeft: NavLink[] = [
  { label: 'Private groups', href: '/private-groups' },
  { label: 'Corporate', href: '/corporate' },
  { label: 'The 8 hour day', href: '/experiences/full-day-retreat' },
];

export const navRight: NavLink[] = [
  { label: 'Experiences', href: '/experiences' },
  { label: 'Places to Pause', href: '/places' },
];

/* Menu overlay. The two paths and The Day large in the display serif (build spec section 3),
   then grouped links. Hints are fragments of Belle's own live copy, chosen by us, so marked draft. */
export const menuPrimary: NavLink[] = [
  { label: 'Private groups and retreats', href: '/private-groups', media: 'menu-private-groups', hint: 'Time with friends, time with family', draft: true },
  { label: 'Corporate teams', href: '/corporate', media: 'menu-corporate', hint: 'A strategic reset for leadership teams', draft: true },
  { label: 'The 8 hour day', href: '/experiences/full-day-retreat', media: 'menu-the-day', hint: 'Arrive, move, nourish, restore' },
];

export const menuGroups: { title: string; links: NavLink[] }[] = [
  {
    title: 'The retreat',
    links: [
      { label: 'Experiences', href: '/experiences' },
      { label: 'Places to Pause', href: '/places' },
      { label: 'The Table', href: '/food' },
      { label: 'Philosophy', href: '/philosophy' },
      { label: 'Retreat formats', href: '/retreats' },
    ],
  },
  {
    title: 'Discover',
    links: [
      { label: 'The Fleurieu', href: '/fleurieu-peninsula-retreats' },
      { label: 'Journal', href: '/journal' },
      { label: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'La maréa',
    links: [
      { label: 'Our story', href: '/our-story' },
      { label: 'Team', href: '/team' },
      { label: 'Rising Tides Collective', href: '/rising-tides-collective' },
      { label: 'The app', href: '/app' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
];

/* Footer columns, plan/11 Part 3. */
export const footerGroups: { title: string; links: NavLink[] }[] = [
  {
    title: 'Plan a retreat',
    links: [
      { label: 'Private groups', href: '/private-groups' },
      { label: 'Corporate', href: '/corporate' },
      { label: 'The 8 hour day', href: '/experiences/full-day-retreat' },
      { label: 'Retreat formats', href: '/retreats' },
      { label: 'Plan your day', href: '/enquire' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Experiences', href: '/experiences' },
      { label: 'Places to Pause', href: '/places' },
      { label: 'The Table', href: '/food' },
      { label: 'The Fleurieu', href: '/fleurieu-peninsula-retreats' },
      { label: 'Journal', href: '/journal' },
    ],
  },
  {
    title: 'La maréa',
    links: [
      { label: 'Our story', href: '/our-story' },
      { label: 'Philosophy', href: '/philosophy' },
      { label: 'Team', href: '/team' },
      { label: 'Rising Tides Collective', href: '/rising-tides-collective' },
      { label: 'Gift cards', href: '/gift-cards' },
      { label: 'FAQs', href: '/faqs' },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms and conditions', href: '/terms' },
];

/* Contact, only as harvested (content-seed/contact.json). */
export const contact = {
  emails: [
    { address: 'belle@lamarea.com.au', label: 'Belle', status: 'in hand' },
    { address: 'info@lamarea.com.au', label: 'General enquiries', status: 'in hand' },
  ],
  /** Published on the live FAQs and privacy pages, so it shows (build spec section 3). plan/11 item 77: Belle confirms it stays in the footer. */
  phone: {
    display: '0411 354 356',
    asPublished: '0411354356',
    tel: '+61411354356',
    status: 'in hand but needs Belle’s check' as const,
    showInFooter: true,
  },
  address: null,
  abn: null,
} as const;

export const social = {
  instagram: {
    handle: '@lamarea_retreats',
    url: 'https://www.instagram.com/lamarea_retreats',
  },
} as const;

/* Footer lines, verbatim from the live footer. */
export const footerLines = {
  /** Live footer tagline, verbatim apart from the doubled full stop (kept in `asPublished`). */
  tide: {
    display: ['From chaos to calm, stress to serenity.', 'Let the tide guide you home.'],
    asPublished: ['From chaos to calm, stress to serenity..', 'Let the tide guide you home.'],
  },
  newsletter: 'Join our lifestyle wellness community & be the first to know about new retreats & exclusive offers!',
  acknowledgement:
    'We acknowledge that the land we are on belongs to the Kaurna people as the Traditional Owners and custodians of the land on which we work. We acknowledge the Traditional Custodians of country throughout Australia and their connections to land, sea and community. We pay our respects to their Elders past and present.',
  /** Draft placeholder. Belle writes this line in her own words (plan/11 Part 3, True South). */
  trueSouth: {
    text: null as string | null,
    placeholder: 'True South line to come from Belle, in her own words, about where La maréa began.',
    status: 'placeholder',
  },
} as const;

/*
  The five differences, verbatim from the live home page "Our difference" (content-seed/differences.json).
  `text` is exactly as published. `display` applies typo fixes only ("Built upon on" and "Mediteranean"),
  pending Belle's agreement (plan/11 item 49, decision 21). Render `display`, keep `text` as the record.
*/
export interface Difference {
  id: string;
  number: string;
  text: string;
  display: string;
  corrected: boolean;
  href?: string;
}

export const differences: Difference[] = [
  {
    id: 'difference-01',
    number: '01',
    text: 'South Australian based luxury lifestyle wellness retreats & experiences',
    display: 'South Australian based luxury lifestyle wellness retreats & experiences',
    corrected: false,
    href: '/fleurieu-peninsula-retreats',
  },
  {
    id: 'difference-02',
    number: '02',
    text: 'Built upon on evidence-based lifestyle wellness pillars that support holistic wellness & inspired by the Mediteranean lifestyle',
    display: 'Built upon evidence-based lifestyle wellness pillars that support holistic wellness & inspired by the Mediterranean lifestyle',
    corrected: true,
    href: '/philosophy',
  },
  {
    id: 'difference-03',
    number: '03',
    text: 'Run by qualified health professionals & experts in their chosen field',
    display: 'Run by qualified health professionals & experts in their chosen field',
    corrected: false,
    href: '/team',
  },
  {
    id: 'difference-04',
    number: '04',
    text: 'Partner with local South Australian companies, supporting local Fleurieu Peninsula farmers, producers & communities',
    display: 'Partner with local South Australian companies, supporting local Fleurieu Peninsula farmers, producers & communities',
    corrected: false,
    href: '/food',
  },
  {
    id: 'difference-05',
    number: '05',
    text: 'Family owned business originating from the Fleurieu Peninsula',
    display: 'Family owned business originating from the Fleurieu Peninsula',
    corrected: false,
    href: '/our-story',
  },
];

/* Organization JSON-LD, site-wide (build spec section 3). */
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/logo-primary-sage.png`,
  email: 'info@lamarea.com.au',
  sameAs: [social.instagram.url],
  areaServed: { '@type': 'Place', name: 'Fleurieu Peninsula, South Australia' },
  description: site.defaultDescription,
};
