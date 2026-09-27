/*
  La maréa privacy policy, DRAFT for Belle's adviser (page builder D, 24-09-2026).
  Structure: APP 1 (Australian Privacy Principles) per plan/10 section 6 and plan/11 4.25: what is
  collected, why, processors (Supabase, Cloudflare, Cloudflare Stream, Klaviyo), cross-border
  disclosure (APP 8), health information collected only on the post-booking questionnaire with
  separate consent (APP 3.3), security (APP 11), retention, access and correction (APP 12, 13), the
  automated decision-making statement due from 10-12-2026, complaints and the breach scheme.
  Voice and several lines come from Belle's live policy (lamarea.com.au/privacy-policy, captured
  24-09-2026): the photography choices, "We never sell your information", the access and deletion
  rights, and "We’ll respond as quickly and openly as possible". Those are marked [live] below.
  Everything in <span class="confirm"> and every 'todo' block needs Belle's adviser before launch.
  Nothing here states that the small business exemption ends; plan/10 section 6 explains why.
*/
import type { LegalSection } from './legal-types';

// The leading space sits inside the wrapper so the sentence closes cleanly when the notes layer is off.
const confirm = '<span class="confirm-wrap"> <span class="confirm">to confirm</span></span>';

export const privacySections: LegalSection[] = [
  {
    id: 'about',
    number: '01',
    title: 'About this policy',
    blocks: [
      { kind: 'p', text: 'La maréa is a family owned wellness retreat business on the Fleurieu Peninsula, South Australia. This policy explains what personal information we collect, why we collect it, how we look after it, and how you can see or correct what we hold about you.' },
      // [live] "We follow the Australian Privacy Principles" and "We never sell your information."
      { kind: 'p', text: 'We handle personal information in line with the Australian Privacy Principles in the Privacy Act 1988 (Cth). We never sell your information.' },
      { kind: 'note', text: 'Belle’s adviser to confirm La maréa’s position under the Privacy Act. The build treats the business as covered because it collects health information to deliver practitioner-led sessions (plan/10 section 6).' },
    ],
  },
  {
    id: 'what-we-collect',
    number: '02',
    title: 'What we collect',
    blocks: [
      { kind: 'sub', title: 'When you plan a day with us' },
      { kind: 'p', text: 'We collect your name, email address and phone number, and your organisation if you are planning for a team. We keep your answers about your group, the occasion, your preferred timing and the experiences that interest you, and how you found us, such as the page you arrived on or a link you followed.' },
      { kind: 'sub', title: 'When you join a list' },
      { kind: 'p', text: 'For our newsletter, a waitlist, the app interest list or a guide, we collect your email address, your first name if you give it, the list you joined and whether you agreed to receive news from us.' },
      { kind: 'sub', title: 'When you book' },
      { kind: 'p', text: 'We collect booking and payment details, an emergency contact, and what we need to plan your retreat safely, including dietary needs and allergies. Section 03 explains how we handle health information.' },
      { kind: 'sub', title: 'Photographs and video' },
      { kind: 'p', text: 'If you allow it, we may capture photographs or video during a retreat. Section 08 sets out your choices.' },
      { kind: 'sub', title: 'When you use this website' },
      { kind: 'p', text: 'Our website host, Cloudflare, processes technical information such as your IP address and browser details to deliver the site and to screen form submissions for spam.' },
    ],
  },
  {
    id: 'health-information',
    number: '03',
    title: 'Health information',
    blocks: [
      { kind: 'p', text: 'Health information is sensitive information under the Privacy Act, and we treat it with extra care.' },
      {
        kind: 'list',
        html: true,
        items: [
          'We ask for it only after you book, through our guest questionnaire. The enquiry form and our email lists never ask for it.',
          'The questionnaire asks for your consent separately, with its own tick box, and records when you gave it.',
          'We use it only to plan and deliver your retreat safely.',
          'Only Belle and the practitioners, chefs and hosts delivering your retreat see it, and only the parts they need, such as dietary needs for the chef.',
          `It is stored apart from enquiries and deleted 24 months after your retreat${confirm}.`,
        ],
      },
      { kind: 'p', text: 'Please leave health details out of the enquiry form. We will ask for them privately once you have booked.' },
    ],
  },
  {
    id: 'why-we-collect-it',
    number: '04',
    title: 'Why we collect it',
    blocks: [
      {
        kind: 'list',
        items: [
          'To reply to your enquiry and arrange a discovery call',
          'To plan and prepare your retreat, including meals and the day’s schedule',
          'To keep you safe during activities, and to contact your emergency contact if needed',
          'To process your booking and payments',
          'To send confirmations and retreat details',
          'To send news, retreat releases and offers, only if you have agreed, until you unsubscribe',
          'To meet our legal, insurance and tax obligations',
        ],
      },
    ],
  },
  {
    id: 'who-we-share-it-with',
    number: '05',
    title: 'Who we share it with',
    blocks: [
      { kind: 'p', text: 'We share personal information only with the people and services that help us run La maréa, and only what each one needs.' },
      {
        kind: 'list',
        html: true,
        items: [
          'Retreat facilitators, wellness practitioners, chefs and the teams at our partner venues',
          'Supabase, which stores enquiries, list sign-ups and guest questionnaires in our database',
          'Cloudflare, which hosts this website, runs our forms and spam protection, and streams our video through Cloudflare Stream',
          'Klaviyo, which sends our emails. Klaviyo receives your email address, the list you joined and your consent, and never health information',
          `Google, when you book a discovery call through our Google Calendar booking page${confirm}`,
          'Secure payment and booking providers',
          'Emergency services, if required',
        ],
      },
    ],
  },
  {
    id: 'outside-australia',
    number: '06',
    title: 'Information held outside Australia',
    blocks: [
      { kind: 'p', html: true, text: `Supabase, Cloudflare and Klaviyo are based in the United States and may store or process information outside Australia, including in the United States${confirm}. Before we use an overseas provider, we take reasonable steps to make sure it handles personal information in line with the Australian Privacy Principles.` },
      { kind: 'p', html: true, text: `Our database is hosted in Sydney, Australia${confirm}.` },
      { kind: 'note', text: 'Belle’s adviser to confirm the countries each provider uses and the wording of this disclosure (APP 8). Dom to confirm the Supabase project region is ap-southeast-2 (Sydney), as plan/10 recommends.' },
    ],
  },
  {
    id: 'keeping-it-safe',
    number: '07',
    title: 'How we keep it safe',
    blocks: [
      {
        kind: 'list',
        items: [
          'Our database cannot be read or written from the public website. Every form submission passes through our own server function first.',
          'Information is encrypted in transit and at rest.',
          'Forms are protected from spam and automated submissions.',
          'Access is limited to the people who need it, and health information has its own, tighter access.',
          'Information is deleted on a schedule rather than kept indefinitely.',
        ],
      },
      { kind: 'p', text: 'If a data breach is likely to cause you serious harm, we will tell you and the Office of the Australian Information Commissioner, as the Notifiable Data Breaches scheme requires.' },
    ],
  },
  {
    id: 'photographs-and-video',
    number: '08',
    title: 'Photographs and video',
    blocks: [
      // [live] the choices list and the two sentences around it, from the live policy.
      { kind: 'p', text: 'We love capturing the beauty of our retreats, but your comfort comes first. You can choose to:' },
      { kind: 'list', items: ['Be included', 'Not be included', 'Only appear in group shots', 'Approve photos before use'] },
      { kind: 'p', text: 'Just let us know before the retreat begins. We also ask that guests respect each other’s privacy and avoid photographing other participants without permission.' },
      { kind: 'note', text: 'Terms clause 12.1 treats attendance as permission unless a guest opts out in writing. The gallery and the Collective page wait for written consent from guests in frame. Belle’s adviser to align the two.' },
    ],
  },
  {
    id: 'how-long-we-keep-it',
    number: '09',
    title: 'How long we keep it',
    blocks: [
      {
        kind: 'list',
        html: true,
        items: [
          `Guest questionnaires, including health information: deleted 24 months after your retreat${confirm}`,
          'Records we must keep for legal, insurance or tax reasons: for as long as the law requires',
        ],
      },
      { kind: 'todo', text: 'Retention periods for enquiries and list sign-ups, set by Belle with her adviser (plan/12 fix 13).' },
      // [live] "After that, it’s safely deleted or anonymised."
      { kind: 'p', text: 'After that, information is safely deleted or anonymised.' },
    ],
  },
  {
    id: 'your-choices',
    number: '10',
    title: 'Access, correction and your choices',
    blocks: [
      // [live] the rights list, lightly extended.
      { kind: 'p', text: 'You can:' },
      {
        kind: 'list',
        items: [
          'Ask to access the information we hold about you',
          'Request a correction if something is wrong',
          'Opt out of photography or marketing at any time',
          'Unsubscribe from emails using the link in any email we send',
          'Ask us to delete information we no longer need',
        ],
      },
      { kind: 'p', html: true, text: `Email <a href="mailto:info@lamarea.com.au">info@lamarea.com.au</a> and we will respond within 30 days${confirm}. We may need to confirm who you are before we share or change anything.` },
    ],
  },
  {
    id: 'automated-decisions',
    number: '11',
    title: 'Automated decisions',
    blocks: [
      { kind: 'p', text: 'We do not use automated decision-making, including artificial intelligence, to make decisions about you that could significantly affect your rights or interests. If that changes, this policy will say so first.' },
      { kind: 'note', text: 'This statement is required from 10-12-2026 (Privacy and Other Legislation Amendment Act 2024). Confirm before launch that nothing sorts, scores or routes enquiries automatically.' },
    ],
  },
  {
    id: 'questions-and-complaints',
    number: '12',
    title: 'Questions and complaints',
    blocks: [
      { kind: 'p', text: 'If you have a question or a concern about your privacy, contact us:' },
      {
        kind: 'list',
        html: true,
        items: [
          '<a href="mailto:info@lamarea.com.au">info@lamarea.com.au</a>',
          '<a href="mailto:belle@lamarea.com.au">belle@lamarea.com.au</a>',
          'Belle Redden, <a href="tel:+61411354356">0411 354 356</a>',
        ],
      },
      // [live] "We’ll respond as quickly and openly as possible."
      { kind: 'p', text: 'We’ll respond as quickly and openly as possible.' },
      { kind: 'p', html: true, text: 'If you are not satisfied with our response, you can contact the Office of the Australian Information Commissioner at <a href="https://www.oaic.gov.au" rel="noopener">oaic.gov.au</a> or on 1300 363 992.' },
    ],
  },
  {
    id: 'changes',
    number: '13',
    title: 'Changes to this policy',
    blocks: [
      { kind: 'p', text: 'We will update this policy when the way we handle information changes, and the date below will change with it.' },
      { kind: 'todo', text: 'Last updated date, added when Belle’s adviser approves this policy.' },
    ],
  },
];
