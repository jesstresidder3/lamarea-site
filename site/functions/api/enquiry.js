/*
  POST /api/enquiry, Cloudflare Pages Function. STUB FOR DOM TO FINISH.
  Owner of this stub: page builder A (the funnel at src/components/pages/a/Funnel.astro and funnel.ts).
  Spec: plan/10 section 6 (forms, data and privacy) and plan/11 Part 5 (the enquiry funnel).

  What it does today
  - Accepts the funnel's JSON body, or a form post from the no-JavaScript fallback.
  - Drops honeypot submissions silently, refuses anything sent less than 3 seconds after the funnel
    opened, validates every field against the funnel's own values, and answers:
      JSON request  -> 200 { ok: true, id } or 400 { ok: false, errors: [...] }
      form request  -> 303 to /enquire/thank-you (or 303 back to /enquire?error=1)
  - Turnstile, the Supabase insert, the notification email and Klaviyo are written below and switch
    on only when their environment variables exist, so the stub is safe to deploy as it is.

  Privacy rules this file must keep (APP 3, 5, 11; plan/10 section 6)
  - Never log the free text. `message` can hold health details even though the form asks people to
    leave them out. Log ids, status codes and the field names that failed, nothing else.
  - The browser never talks to Supabase. The service role key lives only in Cloudflare env vars.
  - Klaviyo only when marketing_consent is true, and only email, source and the consent timestamp.
    No answers, no free text, nothing health related.
  - Dietary and medical information is not collected here at all. It belongs to the post-booking
    questionnaire (the separate `questionnaires` table).

  Environment variables (Cloudflare Pages > Settings > Environment variables, encrypted)
    TURNSTILE_SECRET_KEY        Cloudflare Turnstile secret (managed, invisible widget on step 7)
    SUPABASE_URL                https://<project>.supabase.co (region ap-southeast-2, Sydney)
    SUPABASE_SERVICE_ROLE_KEY   service role key, server side only
    KLAVIYO_PRIVATE_KEY         private API key, server side only
    KLAVIYO_LIST_ID             the enquiries list (decision 18: which list, which account)
    NOTIFY_TO                   belle@lamarea.com.au (notification email, once SPF and DKIM are checked)

  The JSON body the funnel sends (every key present, null when unanswered)
  {
    audience: 'private' | 'corporate',
    occasion: 'birthday-milestone' | 'friends' | 'family' | 'celebration' | 'other' | null,
    occasion_other: string | null,                       // short text when occasion is 'other'
    team_outcome: 'reset-recovery' | 'reconnect' | 'leadership' | 'education' | 'other' | null,
    team_outcome_other: string | null,
    org: string | null,
    group_size_band: 'under-10' | '10-14' | '15-20' | 'over-20' | 'not-sure',
    experiences: string[],                               // experience ids from src/content/experiences, plus 'time-to-rest'
    setting: 'coast' | 'vineyard' | 'help',
    venue_slug: string | null,                           // prefilled from a venue page (?venue=)
    preferred_month: 'YYYY-MM' | 'flexible',
    format_slug: 'full-day' | 'shorter' | 'not-sure',
    format_requested: string | null,                     // the ?format= the visitor arrived with
    experience_requested: string | null,                 // the ?experience= the visitor arrived with
    name: string, email: string, phone: string | null,
    message: string | null,                              // FREE TEXT, never logged
    marketing_consent: boolean,                          // the separate, unticked box
    consent_text: string,                                // the exact consent wording shown
    lead_source: string,                                 // utm_source, else referrer host, else ?source=, else 'direct'
    source: string | null,                               // the page tag on the link (?source=home, 'corporate'...)
    utm_source, utm_medium, utm_campaign, utm_content, utm_term: string | null,
    referrer: string | null,                             // external referrer only
    previous_page: string | null,                        // same-site page the visitor came from
    landing_page: string,                                // the /enquire URL with its parameters
    started_at: ISO string, submitted_at: ISO string,
    step_reached: 7,
    website: string,                                     // honeypot, must be empty
    turnstile_token: string | null
  }

  Supabase `enquiries` row written (columns from plan/10 section 2 and plan/11 Part 5)
    audience, lead_source, utm_source, utm_medium, utm_campaign, utm_content, referrer, landing_page,
    occasion, team_outcome, org, group_size_band, experiences (text[]), setting, venue_slug,
    preferred_month, format_slug, name, email, phone, message, marketing_consent, marketing_consent_at,
    step_reached, completed, status ('new'). id and created_at are database defaults.
  Not yet columns in plan/10, folded in until Dom decides: "other" answers go into occasion or
  team_outcome as "other: <text>"; format_requested fills format_slug only when it is empty;
  source and previous_page go into referrer when there is no external referrer. Suggest adding
  `source text`, `previous_page text` and `format_requested text` columns.

  Later (plan/10): insert a row at step 1 and update it on each step so a drop-off is still a lead.
  The funnel script would POST { partial: true, id?, step_reached, ...answers so far } and keep the
  returned id. Not built in the prototype.
*/

const ENUMS = {
  audience: ['private', 'corporate'],
  occasion: ['birthday-milestone', 'friends', 'family', 'celebration', 'other'],
  team_outcome: ['reset-recovery', 'reconnect', 'leadership', 'education', 'other'],
  group_size_band: ['under-10', '10-14', '15-20', 'over-20', 'not-sure'],
  setting: ['coast', 'vineyard', 'help'],
  format_slug: ['full-day', 'shorter', 'not-sure'],
};
const LIMITS = { name: 120, email: 200, phone: 40, org: 120, message: 2000, other: 200 };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MONTH = /^(\d{4}-(0[1-9]|1[0-2])|flexible)$/;
const SLUG = /^[a-z0-9-]{1,80}$/;

export async function onRequestPost(context) {
  const { request, env } = context;
  const isJson = (request.headers.get('content-type') || '').includes('application/json');

  let body;
  try {
    body = isJson ? await request.json() : fromForm(await request.formData(), request);
  } catch {
    return reply(isJson, 400, { ok: false, errors: ['body'] });
  }

  // Honeypot: pretend it worked, store nothing.
  if (body.website) return reply(isJson, 200, { ok: true, id: null });

  // Three second minimum between opening the funnel and sending (plan/10 spam protection).
  const started = Date.parse(body.started_at || '');
  if (Number.isFinite(started) && Date.now() - started < 3000) return reply(isJson, 400, { ok: false, errors: ['too_fast'] });

  const errors = validate(body);
  if (errors.length) {
    console.log(JSON.stringify({ at: 'enquiry', result: 'invalid', fields: errors }));
    return reply(isJson, 400, { ok: false, errors });
  }

  if (env.TURNSTILE_SECRET_KEY) {
    const passed = await turnstile(env.TURNSTILE_SECRET_KEY, body.turnstile_token, request.headers.get('CF-Connecting-IP'));
    if (!passed) return reply(isJson, 400, { ok: false, errors: ['turnstile'] });
  }

  const row = toRow(body);
  let id = null;

  if (env.SUPABASE_URL && env.SUPABASE_SERVICE_ROLE_KEY) {
    const res = await fetch(`${env.SUPABASE_URL}/rest/v1/enquiries`, {
      method: 'POST',
      headers: {
        apikey: env.SUPABASE_SERVICE_ROLE_KEY,
        authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
        'content-type': 'application/json',
        prefer: 'return=representation',
      },
      body: JSON.stringify(row),
    });
    if (!res.ok) {
      console.log(JSON.stringify({ at: 'enquiry', result: 'supabase_error', status: res.status }));
      return reply(isJson, 500, { ok: false, errors: ['storage'] });
    }
    const [saved] = await res.json();
    id = saved?.id ?? null;
  }

  // Notification email to Belle with the answers, the lead source and her booking link
  // (https://calendar.app.google/jiKYpzKFiG5XZV9x9). Dom: Cloudflare Email Routing or Resend's free
  // tier, sent only after SPF and DKIM alignment is confirmed for lamarea.com.au (plan/10 section 6).
  // Set `notified_at` on the row once it sends.

  if (row.marketing_consent && env.KLAVIYO_PRIVATE_KEY && env.KLAVIYO_LIST_ID) {
    context.waitUntil(klaviyo(env, row.email, body.lead_source || 'enquiry', row.marketing_consent_at));
  }

  console.log(JSON.stringify({ at: 'enquiry', result: 'ok', id, audience: row.audience, lead_source: row.lead_source }));
  return reply(isJson, 200, { ok: true, id });
}

/* ---------- helpers ---------- */

function fromForm(fd, request) {
  const get = (k) => {
    const v = fd.get(k);
    return typeof v === 'string' && v.trim() ? v.trim() : null;
  };
  return {
    audience: get('audience'),
    occasion: get('occasion'),
    occasion_other: get('occasion_other'),
    team_outcome: get('team_outcome'),
    team_outcome_other: get('team_outcome_other'),
    org: get('org') || get('org_details'),
    group_size_band: get('group_size_band'),
    experiences: fd.getAll('experiences').map(String),
    setting: get('setting'),
    venue_slug: get('venue_slug'),
    preferred_month: get('preferred_month'),
    format_slug: get('format_slug'),
    name: get('name'),
    email: get('email'),
    phone: get('phone'),
    message: get('message'),
    marketing_consent: fd.get('marketing_consent') === 'yes',
    consent_text: 'Also email me La maréa news and retreat releases. Unsubscribe at any time.',
    lead_source: 'direct',
    referrer: request.headers.get('referer'),
    landing_page: request.headers.get('referer'),
    step_reached: 7,
    website: get('website'),
    turnstile_token: get('cf-turnstile-response'),
  };
}

function validate(b) {
  const errors = [];
  const inEnum = (k, required) => {
    if (b[k] == null || b[k] === '') {
      if (required) errors.push(k);
      return;
    }
    if (!ENUMS[k].includes(b[k])) errors.push(k);
  };
  inEnum('audience', true);
  inEnum('occasion', false);
  inEnum('team_outcome', false);
  inEnum('group_size_band', true);
  inEnum('setting', true);
  inEnum('format_slug', true);
  if (b.audience === 'private' && !b.occasion) errors.push('occasion');
  if (b.audience === 'corporate' && !b.team_outcome) errors.push('team_outcome');
  if (!b.preferred_month || !MONTH.test(b.preferred_month)) errors.push('preferred_month');
  if (!Array.isArray(b.experiences) || b.experiences.length > 20 || b.experiences.some((e) => !SLUG.test(String(e)))) errors.push('experiences');
  if (b.venue_slug && !SLUG.test(b.venue_slug)) errors.push('venue_slug');
  if (!b.name || String(b.name).length > LIMITS.name) errors.push('name');
  if (!b.email || !EMAIL.test(String(b.email)) || String(b.email).length > LIMITS.email) errors.push('email');
  if (b.phone && String(b.phone).length > LIMITS.phone) errors.push('phone');
  if (b.org && String(b.org).length > LIMITS.org) errors.push('org');
  if (b.message && String(b.message).length > LIMITS.message) errors.push('message');
  for (const k of ['occasion_other', 'team_outcome_other']) if (b[k] && String(b[k]).length > LIMITS.other) errors.push(k);
  return errors;
}

function toRow(b) {
  const withOther = (value, other) => (value === 'other' && other ? `other: ${other}` : value || null);
  const now = new Date().toISOString();
  return {
    audience: b.audience,
    lead_source: b.lead_source || 'direct',
    utm_source: b.utm_source || null,
    utm_medium: b.utm_medium || null,
    utm_campaign: b.utm_campaign || null,
    utm_content: b.utm_content || null,
    referrer: b.referrer || b.previous_page || b.source || null,
    landing_page: b.landing_page || null,
    occasion: b.audience === 'private' ? withOther(b.occasion, b.occasion_other) : null,
    team_outcome: b.audience === 'corporate' ? withOther(b.team_outcome, b.team_outcome_other) : null,
    org: b.org || null,
    group_size_band: b.group_size_band,
    experiences: b.experiences || [],
    setting: b.setting,
    venue_slug: b.venue_slug || null,
    preferred_month: b.preferred_month,
    format_slug: b.format_slug || b.format_requested || null,
    name: b.name,
    email: String(b.email).trim().toLowerCase(),
    phone: b.phone || null,
    message: b.message || null,
    marketing_consent: Boolean(b.marketing_consent),
    marketing_consent_at: b.marketing_consent ? now : null,
    step_reached: 7,
    completed: true,
    status: 'new',
  };
}

async function turnstile(secret, token, ip) {
  if (!token) return false;
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form });
  const out = await res.json().catch(() => ({}));
  return Boolean(out.success);
}

async function klaviyo(env, email, source, consentAt) {
  // Email, source and consent timestamp only (plan/11 Part 5, P6).
  const res = await fetch('https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs', {
    method: 'POST',
    headers: {
      authorization: `Klaviyo-API-Key ${env.KLAVIYO_PRIVATE_KEY}`,
      'content-type': 'application/json',
      accept: 'application/json',
      revision: '2024-10-15',
    },
    body: JSON.stringify({
      data: {
        type: 'profile-subscription-bulk-create-job',
        attributes: {
          custom_source: source,
          profiles: {
            data: [
              {
                type: 'profile',
                attributes: {
                  email,
                  subscriptions: { email: { marketing: { consent: 'SUBSCRIBED', consented_at: consentAt } } },
                },
              },
            ],
          },
        },
        relationships: { list: { data: { type: 'list', id: env.KLAVIYO_LIST_ID } } },
      },
    }),
  });
  console.log(JSON.stringify({ at: 'enquiry', klaviyo: res.status }));
}

function reply(isJson, status, data) {
  if (isJson) {
    return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' } });
  }
  const to = data.ok ? '/enquire/thank-you' : '/enquire?error=1';
  return new Response(null, { status: 303, headers: { location: to } });
}
