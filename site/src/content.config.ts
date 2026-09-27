/*
  Content collections (Astro content layer). Owner: foundation systems builder.

  Every record comes from build/content-seed/*.json and build/03-content-harvest.md, the copy harvested
  from lamarea.com.au, Belle's Naiko Encounter Bay retreat guide and her transcript. Nothing is invented:
  an unknown value is null and the UI shows a marked placeholder or leaves the field out.

  Every record carries:
  - status: 'published' (in hand, clean), 'draft' (in hand but needs Belle's check, or a line the build
    derived, rendered in the prototype and marked), 'hidden' (held back: duplicates, past products,
    rating-only reviews, anything Belle has asked us not to promote)
  - source: where the words came from, with the capture date
  - review: what Belle or Jess still needs to confirm, in plain words (never rendered)

  Client text is verbatim with one exception: dashes. Em and en dashes and spaced hyphens used as dashes
  became commas, number ranges became "to". Records that changed carry dash_note.

  Adding a venue, experience, person or post is adding one file to the folder. Filters, the map, the
  sliders and the index pages all read from here.
*/
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const status = z.enum(['draft', 'published', 'hidden']);

const sourceRef = z.object({
  type: z.string(),
  url: z.string().optional(),
  path: z.string().optional(),
  document: z.string().optional(),
  drive_file_id: z.string().optional(),
  page: z.string().optional(),
  section: z.string().optional(),
  captured: z.string().optional(),
  note: z.string().optional(),
  image: z.string().optional(),
  image_alt: z.string().optional(),
});
const sources = z.union([sourceRef, z.array(sourceRef)]).transform((s) => (Array.isArray(s) ? s : [s]));

const sourcedText = z.object({ text: z.string(), source: sourceRef });

const common = {
  status,
  source: sources,
  review: z.string().nullable().optional(),
  dash_note: z.string().optional(),
};

const json = (folder: string) => glob({ pattern: '**/*.json', base: `./src/content/${folder}` });

/* Places to Pause. region 'city' is held in the model for Adelaide CBD and shown nowhere (BD-118). */
const venues = defineCollection({
  loader: json('venues'),
  schema: z.object({
    name: z.string(),
    name_as_published_by_la_marea: z.string().nullable(),
    name_as_published_by_venue: z.string().nullable(),
    order: z.number(),
    region: z.enum(['coast', 'vineyard', 'city']),
    locality: z.string(),
    location_label: z.string(),
    address: z.string().nullable(),
    coordinates: z
      .object({
        lat: z.number(),
        lng: z.number(),
        precision: z.enum(['street', 'locality', 'building']),
        basis: z.string(),
      })
      .nullable(),
    sleeps: z.object({
      display: z.string().nullable(),
      value: z.number().nullable(),
      basis: z.string(),
      conflict: z.string().nullable(),
      sources: z.array(sourceRef),
    }),
    day_capacity: z
      .object({ min: z.number().nullable(), max: z.number().nullable(), text: z.string(), source: sourceRef })
      .nullable(),
    distance_from_adelaide: z.string().nullable(),
    /* Drive time in the words the site may use (build spec 12): Deep Creek about 90 minutes, McLaren Vale about 50 */
    drive_from_adelaide: z.object({ text: z.string(), basis: z.string(), source: sourceRef }).nullable(),
    /* "Five star" only where a rating exists (build spec 12): the Naiko venues. Beresford is a partner venue */
    five_star: z.boolean(),
    five_star_basis: z.string(),
    partner_label: z.string(),
    five_star_wording: z.array(z.string()).nullable(),
    partner_approved: z.boolean(),
    partner_approved_note: z.string(),
    intro: sourcedText.nullable(),
    about: z.array(sourcedText),
    features: z.array(z.object({ name: z.string(), text: z.string(), media: z.string(), source: sourceRef })),
    nearby: z.array(z.object({ name: z.string(), kind: z.string(), text: z.string(), source: sourceRef })),
    on_site: z.array(z.object({ label: z.string(), text: z.string() })),
    card_media: z.string(),
    map_media: z.string(),
    gallery: z.array(z.string()),
    price_from: z.number().nullable(),
    ...common,
  }),
});

/* The ten guided experiences and six self-led activities (BD-04, BD-127). */
const experiences = defineCollection({
  loader: json('experiences'),
  schema: z.object({
    name: z.string(),
    name_as_transcribed: z.string(),
    name_as_published: z.string().nullable(),
    kind: z.enum(['guided', 'self_led']),
    order: z.number(),
    /* Per-tile art direction (O3): the other agency said every tile had to share one structure. */
    art_direction: z.enum(['full_bleed', 'inset', 'split', 'portrait']),
    media: z.string(),
    media_type: z.enum(['image', 'video']),
    short: sourcedText.nullable(),
    pillar: z.string().nullable(),
    pillars: z.array(z.string()),
    pillar_basis: z.string().nullable().optional(),
    duration: z.string().nullable(),
    duration_basis: z.string().nullable(),
    duration_as_published: z.string().nullable(),
    practitioners: z.array(z.string()),
    practitioners_as_published: z.array(z.string()),
    /* The local business behind the experience, named where the harvest links it (build spec 12) */
    business: z.object({ name: z.string(), person: z.string(), url: z.string().nullable() }).nullable(),
    business_basis: z.string().nullable(),
    /* Where sources disagree (contrast therapy), the conflict is recorded, never resolved by the build */
    business_conflict: z.string().nullable(),
    descriptions: z.array(z.object({ text: z.array(z.string()), source: sourceRef })),
    seed_id: z.string().nullable(),
    ...common,
  }),
});

/* The ten philosophy pillars (orchestration brief 5.5). Names follow the style guide. */
const pillars = defineCollection({
  loader: json('pillars'),
  schema: z.object({
    name: z.string(),
    long_name: z.string().nullable(),
    name_as_published: z.string(),
    science_name_as_published: z.string(),
    order: z.number(),
    order_live: z.number(),
    /* File name in src/assets/brand/icons/ */
    icon: z.string(),
    line: z.string(),
    line_source: sourceRef,
    video: z.string(),
    evidence: z.array(z.object({ heading: z.string().nullable(), claims: z.array(z.string()) })),
    evidence_source: sourceRef,
    citations: z.array(z.string()),
    references: z.array(z.object({ group: z.string(), entries: z.array(z.string()) })),
    references_source: sourceRef.nullable(),
    /* A pillar page publishes only where evidence exists (build spec 12). Otherwise link /philosophy#<id> */
    page: z.boolean(),
    page_basis: z.string(),
    ...common,
  }),
});

/* Belle's eight words with her definitions. "Intentions" is a data label only, never public copy. */
const intentions = defineCollection({
  loader: json('intentions'),
  schema: z.object({
    word: z.string(),
    definition: z.string(),
    order: z.number(),
    label_note: z.string(),
    ...common,
  }),
});

/* People: hosts, wellness practitioners, food and hospitality (I1, BD-82). */
const people = defineCollection({
  loader: json('people'),
  schema: z.object({
    name: z.string(),
    team: z.enum(['hosts', 'wellness', 'food_hospitality']),
    order: z.number(),
    group_as_published: z.string().nullable(),
    role: z.string().nullable(),
    role_long: z.string().nullable(),
    business: z.string().nullable(),
    business_url: z.string().nullable(),
    credentials: z.array(z.string()),
    credentials_basis: z.string(),
    qualifications: z.array(z.string()),
    services: z.array(z.string()),
    bio: z.array(z.object({ kind: z.enum(['para', 'item']), text: z.string() })),
    portrait: z.string(),
    pillars: z.array(z.string()),
    pillars_basis: z.string(),
    live_url: z.string().nullable(),
    ...common,
  }),
});

/* Testimonials: verbatim only. The site shows the descriptor, never the reviewer's name. */
const testimonials = defineCollection({
  loader: json('testimonials'),
  schema: z.object({
    quote: z.string().nullable(),
    reviewer_as_published: z.string(),
    reviewer_note: z.string(),
    descriptor: z.string(),
    descriptor_basis: z.string(),
    group_type: z.enum(['private', 'corporate', 'public_event', 'unstated']),
    /* The format the review itself names (build spec 12). 'unknown' when it does not say */
    format: z.enum(['wake_up_to_wellness', 'sunset_retreat', 'full_day', 'womens_retreat', 'workshop', 'unknown']),
    format_label: z.string().nullable(),
    format_basis: z.string(),
    venue: z.string().nullable(),
    source_type: z.enum(['google', 'site']),
    rating: z.number().nullable(),
    /* DD-MM-YYYY as published by the widget */
    date: z.string().nullable(),
    retreat_type_as_stated: z.string().nullable(),
    experiences_mentioned: z.array(z.string()),
    image: z.string().nullable(),
    featured_on: z.array(z.string()),
    duplicate_of: z.string().nullable(),
    ...common,
    source: sourceRef.transform((s) => [s]),
  }),
});

/* Wellness journal: markdown posts. */
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    date_modified: z.coerce.date().optional(),
    category: z.string(),
    category_as_published: z.string().nullable(),
    category_basis: z.string(),
    author: z.string().nullable(),
    author_as_published: z.string().nullable(),
    author_note: z.string().optional(),
    byline: z.object({ name: z.string(), role: z.string(), credentials: z.string() }).nullable(),
    hero: z.string(),
    image_credit: z.string().nullable(),
    excerpt: z.string(),
    excerpt_basis: z.string(),
    pillar: z.string().nullable(),
    live_slug: z.string(),
    references: z.array(z.object({ group: z.string(), entries: z.array(z.string()) })),
    ...common,
  }),
});

/* Retreat formats, pathways and add-ons. Prices are never published (decision 4): price_from is null. */
const formats = defineCollection({
  loader: json('formats'),
  schema: z.object({
    name: z.string(),
    kind: z.enum(['pathway', 'format', 'past_product', 'add_ons']),
    order: z.number(),
    tagline: z.string().nullable(),
    body: z.array(z.string()),
    duration: z.string().nullable(),
    group_size_text: z.string().nullable(),
    items: z.array(z.string()),
    inclusions_heading: z.string().nullable(),
    inclusions: z.array(z.string()),
    closing_line: z.string().nullable(),
    footnote: z.string().nullable(),
    price_from: z.number().nullable(),
    price_published_on_live_site: z.string().nullable(),
    ...common,
  }),
});

const faqs = defineCollection({
  loader: json('faqs'),
  schema: z.object({
    question: z.string(),
    answer: z.array(z.string()),
    order: z.number(),
    topic: z.string().nullable(),
    ...common,
  }),
});

/* The day at the table: breakfast, refreshments, lunch (with the example menu), dinner and dessert. */
const menus = defineCollection({
  loader: json('menus'),
  schema: z.object({
    name: z.string(),
    service: z.enum(['breakfast', 'refreshments', 'lunch', 'dinner', 'dessert']),
    order: z.number(),
    time: z.string().nullable(),
    time_basis: z.string().nullable(),
    kicker: z.string().nullable().optional(),
    time_as_published_elsewhere: z.string().nullable().optional(),
    time_source: sourceRef.nullable(),
    line: z.string().nullable(),
    line_source: sourceRef.nullable(),
    detail: z.array(z.string()),
    detail_source: sourceRef.nullable(),
    title_as_published: z.string().optional(),
    courses: z.array(z.object({ course: z.string(), dishes: z.array(z.string()) })),
    producers: z.array(z.string()).optional(),
    media: z.string(),
    /* true renders a marked placeholder (dinner and dessert until Belle's retreat guide arrives) */
    placeholder: z.boolean(),
    placeholder_note: z.string().nullable(),
    chef: z.string().nullable(),
    /* decision 8: false keeps a menu in the retreat guide only */
    public: z.boolean(),
    signature: z.boolean(),
    ...common,
  }),
});

export const collections = { venues, experiences, pillars, intentions, people, testimonials, journal, formats, faqs, menus };
