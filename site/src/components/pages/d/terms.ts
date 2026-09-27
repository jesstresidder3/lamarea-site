/*
  La maréa terms and conditions, verbatim from the live site (page builder D).
  Source: https://www.lamarea.com.au/terms-conditions, captured by the content harvester with
  Playwright on 24-09-2026 (full text in the harvester's raw capture; build/03-content-harvest.md
  section 17 records the headings). Linked from the live footer, missing from the live sitemap.

  What changed from the live page, and nothing else:
  - Section and clause headings are set in sentence case (site rule: no Title Case headings). The
    words are hers.
  - Dashes (build rule, no em or en dash anywhere): the en dash range in 3.2 became "59 to 30 days";
    the em dashes in 14 became commas ("credits, not refunds, will be issued"); the em dashes around
    the list in 16 became commas ("All Retreat content, recipes, ... methodology, is"). The page
    title, "La maréa" and "Terms & Conditions" joined by an en dash, became "Terms and conditions".
  - Where the live page folds a closing sentence into the last bullet with a line break (3.2, 4, 15),
    that sentence sits as its own paragraph after the list.

  Conflicts for Belle, shown as ReviewNotes in the placeholder layer and left exactly as published:
  - 2.2 says no deposits and full payment at booking. Her Encounter Bay guide asks for a 50% deposit
    (p.24, p.28). Build spec section 12 says no deposit term publishes anywhere; kept here because
    these are her live, binding terms and the orchestrator asked for them verbatim. Belle decides.
  - 3.2 says credits are valid for 12 months. The live FAQ says credit applies within 2 years, and
    gift cards are valid for 2 years.
  - 3.4 refers to "Force majeure (see Section 13)". Force majeure is section 14.
  - 17 says the Privacy Policy is "available on request". The new site publishes it at /privacy-policy.
  - 12.1 is an opt-out consent for photographs and testimonials. The gallery plan asks for written
    consent from guests in frame (register W, decision 29).
*/
import type { LegalSection } from './legal-types';

export const termsSource = {
  url: 'https://www.lamarea.com.au/terms-conditions',
  captured: '24-09-2026',
};

export const termsSections: LegalSection[] = [
  {
    id: 'introduction',
    number: '01',
    title: 'Introduction',
    blocks: [
      { kind: 'p', text: 'These Terms & Conditions (“Terms”) apply to all retreats, programs, workshops, experiences, events, and services (“Retreat”) provided by La maréa (“La maréa”, “we”, “us”, “our”).' },
      { kind: 'p', text: 'By booking or attending a Retreat, you (“you”, “the Guest”, “the Participant”) agree to be bound by these Terms.' },
    ],
  },
  {
    id: 'booking-payments-pricing',
    number: '02',
    title: 'Booking, payments & pricing',
    blocks: [
      { kind: 'sub', number: '2.1', title: 'Booking confirmation' },
      { kind: 'p', text: 'A booking is confirmed only when:' },
      { kind: 'list', items: ['A completed online booking form is submitted; and', 'Full payment is received; and', 'You receive written confirmation from us.'] },
      { kind: 'sub', number: '2.2', title: 'Deposits & final payments' },
      { kind: 'list', items: ['We do not currently take deposits due to the way our experiences are run, we require full payment at the time of booking.', 'Full payment is due to secure your booking with us and prior to the Retreat start date.'] },
      { kind: 'note', text: 'Conflict: the Encounter Bay retreat guide asks for a 50% deposit (p.24, p.28), and build spec section 12 says no deposit term publishes. Kept verbatim because these are the live terms. Belle decides one policy for the terms, FAQs, guide and gift cards.' },
      { kind: 'sub', number: '2.3', title: 'Pricing' },
      { kind: 'list', items: ['All pricing is listed in AUD.', 'Prices may change at any time before your booking is confirmed.'] },
      { kind: 'sub', number: '2.4', title: 'Payment methods & surcharges' },
      { kind: 'list', items: ['Credit card payments may incur a surcharge.', 'Bank transfer fees are the responsibility of the guest.'] },
    ],
  },
  {
    id: 'cancellation-credits',
    number: '03',
    title: 'Cancellation, credits & no-refund policy',
    blocks: [
      { kind: 'sub', number: '3.1', title: 'No refunds' },
      { kind: 'p', text: 'All payments are strictly non-refundable, due to advance commitments for accommodation, catering, staffing, and venue hire.' },
      { kind: 'sub', number: '3.2', title: 'Cancellation by participant' },
      { kind: 'p', text: 'If you cancel:' },
      { kind: 'list', items: ['More than 60 days before start: 100% of fees retained as credit.', '59 to 30 days: 50% credit may be issued.', 'Less than 30 days: No credit available.'] },
      { kind: 'p', text: 'Credits are valid for 12 months and non-transferable unless otherwise agreed.' },
      { kind: 'note', text: 'Conflict: the live FAQ says credit can be applied within 2 years of the original booking, and gift cards are valid for 2 years. One credit period needs to hold everywhere.' },
      { kind: 'sub', number: '3.3', title: 'Transfer to another person' },
      { kind: 'p', text: 'You may transfer your booking to another participant if:' },
      { kind: 'list', items: ['You notify us at least 14 days prior;', 'The new participant agrees to these Terms;', 'Medical/dietary needs are submitted in time for approval.'] },
      { kind: 'sub', number: '3.4', title: 'Cancellation by La Maréa' },
      { kind: 'p', text: 'We hope we never need to cancel a retreat or experience however under certain circumstances we may need to cancel or postpone a Retreat due to:' },
      { kind: 'list', items: ['Safety concerns', 'Severe weather', 'Insufficient numbers', 'Facilitator illness', 'Venue closure or damage', 'Force majeure (see Section 13)'] },
      { kind: 'note', text: 'Force majeure is section 14 on the live page. Belle to confirm the cross reference.' },
      { kind: 'p', text: 'If we cancel:' },
      { kind: 'list', items: ['You will receive a full credit toward a future retreat.', 'No refunds will be issued.'] },
    ],
  },
  {
    id: 'program-modifications',
    number: '04',
    title: 'Program modifications',
    blocks: [
      { kind: 'p', text: 'La maréa reserves the right to modify, change, or replace:' },
      { kind: 'list', items: ['Practitioners', 'Activities', 'Schedule', 'Menus', 'Venues', 'Retreat content at any time without notice.'] },
      { kind: 'p', text: 'Such changes do not constitute grounds for a refund or credit.' },
    ],
  },
  {
    id: 'insurance',
    number: '05',
    title: 'Insurance requirements',
    blocks: [
      { kind: 'sub', number: '5.1', title: 'Travel insurance' },
      { kind: 'p', text: 'We strongly recommend comprehensive travel insurance covering:' },
      { kind: 'list', items: ['Cancellation or interruption', 'Medical treatment', 'Injury or illness', 'COVID-related disruption', 'Loss or damage of personal items'] },
      { kind: 'sub', number: '5.2', title: 'Medical insurance' },
      { kind: 'p', text: 'It is your responsibility to ensure adequate medical coverage for the duration of the Retreat.' },
      { kind: 'p', text: 'La maréa does not provide insurance for guests.' },
    ],
  },
  {
    id: 'health-fitness-medical',
    number: '06',
    title: 'Health, fitness & medical conditions',
    blocks: [
      { kind: 'sub', number: '6.1', title: 'Medical disclosure' },
      { kind: 'p', text: 'By booking, you confirm that you:' },
      { kind: 'list', items: ['Are physically, mentally, and emotionally fit to participate;', 'Have disclosed all relevant medical conditions, injuries, allergies, medications, or dietary requirements;', 'Understand the Retreat is not a substitute for medical, psychological, or therapeutic treatment.'] },
      { kind: 'sub', number: '6.2', title: 'Right to refuse participation' },
      { kind: 'p', text: 'La maréa reserves the right to:' },
      { kind: 'list', items: ['Request medical clearance;', 'Decline attendance based on disclosed or undisclosed conditions;', 'Remove a participant whose health presents a risk to themselves or others.'] },
      { kind: 'sub', number: '6.3', title: 'Non-medical disclaimer' },
      { kind: 'p', text: 'All sessions (movement, breathwork, mindfulness, nutrition, etc.) are wellness activities, not medical advice. Practitioners do not diagnose, treat, or guarantee outcomes.' },
    ],
  },
  {
    id: 'risk-and-liability',
    number: '07',
    title: 'Assumption of risk & liability waiver',
    blocks: [
      { kind: 'sub', number: '7.1', title: 'Assumption of risk' },
      { kind: 'p', text: 'You acknowledge that Retreat activities carry inherent risks, including but not limited to:' },
      { kind: 'list', items: ['Yoga, stretching, movement sessions', 'Outdoor walks, uneven terrain, weather exposure', 'Kitchen and food preparation areas', 'Emotional processing or reflective exercises', 'Group activities and shared spaces'] },
      { kind: 'p', text: 'You voluntarily assume all risk of injury, illness, psychological impact, loss, or damage.' },
      { kind: 'sub', number: '7.2', title: 'Liability waiver' },
      { kind: 'p', text: 'To the maximum extent permitted by Australian law, La maréa, its staff, contractors, and partners are not liable for:' },
      { kind: 'list', items: ['Personal injury, illness, or death', 'Property loss, damage, or theft', 'Emotional distress', 'Accidents occurring on or off the property', 'Third-party negligence'] },
      { kind: 'p', text: 'You agree not to commence or participate in any legal action relating to such claims, except where caused by gross negligence.' },
      { kind: 'sub', number: '7.3', title: 'Third-party providers' },
      { kind: 'p', text: 'We may use external partners for catering, treatments, or activities. We are not responsible for their actions, omissions, or negligence.' },
    ],
  },
  {
    id: 'participant-responsibilities',
    number: '08',
    title: 'Participant responsibilities',
    blocks: [
      { kind: 'p', text: 'You agree to:' },
      { kind: 'list', items: ['Follow all instructions and safety guidelines', 'Notify staff of injuries or concerns immediately', 'Behave respectfully toward staff, other guests, and property', 'Not attend under the influence of drugs, alcohol, or intoxicants', 'Comply with quiet hours, venue rules, and retreat boundaries', 'Refrain from behaviour that disrupts the healing environment'] },
    ],
  },
  {
    id: 'food-allergies-dietary',
    number: '09',
    title: 'Food, allergies & dietary requirements',
    blocks: [
      { kind: 'sub', number: '9.1', title: 'Food safety' },
      { kind: 'p', text: 'While care is taken, we cannot guarantee a nut-free, gluten-free, dairy-free, or allergen-free environment.' },
      { kind: 'sub', number: '9.2', title: 'Guest responsibility' },
      { kind: 'p', text: 'You must:' },
      { kind: 'list', items: ['Disclose allergies/dietary needs at least 14 days prior', 'Carry your own medication (e.g., EpiPen)', 'Accept full responsibility for managing your condition'] },
    ],
  },
  {
    id: 'accommodation-property',
    number: '10',
    title: 'Accommodation & property use',
    blocks: [
      { kind: 'p', text: 'Guests agree to:' },
      { kind: 'list', items: ['Use the accommodation respectfully and safely', 'Pay for any damage caused by misuse, negligence, or breach of conduct', 'Refrain from bringing hazardous materials or illegal substances', 'Adhere to check-in/out times, noise restrictions, and venue-specific policies'] },
      { kind: 'p', text: 'Charges may apply for lost keys, excessive cleaning, room damage, or violation of property rules.' },
    ],
  },
  {
    id: 'alcohol-substance-smoking',
    number: '11',
    title: 'Alcohol, substance & smoking policy',
    blocks: [
      { kind: 'list', items: ['Some of our Retreats may be alcohol-free depending on program design.', 'Illegal substances are strictly prohibited.', 'Smoking/vaping is prohibited entirely'] },
      { kind: 'p', text: 'Violations may result in removal without refund.' },
    ],
  },
  {
    id: 'photography-media',
    number: '12',
    title: 'Photography, filming & media',
    blocks: [
      { kind: 'sub', number: '12.1', title: 'Use by La maréa' },
      { kind: 'p', text: 'By attending, you grant permission for La Maréa to use photographs, video, testimonials, audio, or behind-the-scenes content for marketing unless you opt out in writing before the Retreat begins.' },
      { kind: 'note', text: 'This is opt-out consent. The gallery and the Collective page plan to show guests only with their written consent (register W, decision 29). Belle’s adviser to confirm which standard the site follows.' },
      { kind: 'sub', number: '12.2', title: 'Privacy of other guests' },
      { kind: 'p', text: 'Guests must:' },
      { kind: 'list', items: ['Not photograph, film, or record other participants without explicit permission', 'Respect privacy, personal boundaries, and confidentiality of group sharing'] },
      { kind: 'sub', number: '12.3', title: 'Technology use' },
      { kind: 'p', text: 'Mobile phone and device use may be restricted to certain areas to preserve retreat atmosphere.' },
    ],
  },
  {
    id: 'conduct-removal',
    number: '13',
    title: 'Conduct & removal',
    blocks: [
      { kind: 'p', text: 'La maréa may remove any guest, without refund or credit, who:' },
      { kind: 'list', items: ['Engages in disruptive, aggressive, or unsafe behaviour', 'Harasses staff or guests', 'Is intoxicated or under drug influence', 'Violates safety instructions', 'Endangers themselves or others', 'Breaches privacy of other participants'] },
    ],
  },
  {
    id: 'force-majeure',
    number: '14',
    title: 'Force majeure',
    blocks: [
      { kind: 'p', text: 'La maréa is not liable for delays, changes, or cancellations due to events beyond our control, including:' },
      { kind: 'list', items: ['Natural disasters, fire, flood, storms', 'Pandemic or government restrictions', 'Illness or death of key facilitators', 'Venue damage or closure', 'War, terrorism, or civil unrest', 'Utility failure or transport disruption'] },
      { kind: 'p', text: 'In such cases, credits, not refunds, will be issued.' },
    ],
  },
  {
    id: 'personal-belongings',
    number: '15',
    title: 'Personal belongings',
    blocks: [
      { kind: 'p', text: 'La maréa is not responsible for:' },
      { kind: 'list', items: ['Lost, stolen, or damaged items', 'Valuables left unattended'] },
      { kind: 'p', text: 'You bring personal belongings at your own risk. An in-room safe will be provided at accommodation for those staying overnight. It is your responsibility to use this.' },
    ],
  },
  {
    id: 'intellectual-property',
    number: '16',
    title: 'Intellectual property',
    blocks: [
      { kind: 'p', text: 'All Retreat content, recipes, workshops, materials, notes, teachings, audio, video, methodology, is the intellectual property of La Maréa. Guests may not reproduce, distribute, or share materials without permission.' },
    ],
  },
  {
    id: 'privacy-data',
    number: '17',
    title: 'Privacy & data handling',
    blocks: [
      { kind: 'p', text: 'La maréa collects personal information for booking, safety, and communication. By booking, you:' },
      { kind: 'list', items: ['Consent to the collection and use of your data for operational purposes', 'Acknowledge that third-party platforms (payment processors, booking systems) may process your information', 'Agree to our Privacy Policy (available on request)'] },
      { kind: 'note', text: 'The new site publishes the privacy policy at /privacy-policy, so “available on request” can become a link once Belle and her adviser approve the policy.' },
    ],
  },
  {
    id: 'governing-law',
    number: '18',
    title: 'Governing law',
    blocks: [
      { kind: 'p', text: 'These Terms are governed by the laws of South Australia, and disputes shall be resolved in SA courts or tribunals.' },
    ],
  },
  {
    id: 'acceptance',
    number: '19',
    title: 'Acceptance of terms',
    blocks: [
      { kind: 'p', text: 'By submitting a booking and making payment, you confirm that you have:' },
      { kind: 'list', items: ['Read these Terms in full', 'Understood and agreed to all conditions', 'Accepted all risks associated with participation'] },
    ],
  },
];
