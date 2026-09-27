/*
  Enquiry funnel behaviour for components/pages/a/Funnel.astro.

  - Step 0 reads the URL: audience, format, venue, experience, step, source and utm_*.
  - One step at a time. "Continue" (or Enter) checks the step and moves on; "Back" returns along the
    visitor's own path. Answers are kept in sessionStorage under 'lm-enquiry' on every change, so a
    reload or a back-and-forth keeps them.
  - ?step=1|2|5 (the customise prompts) opens that step. Any question not yet seen is still asked
    before the details step, so every enquiry arrives complete.
  - On send: POST JSON to /api/enquiry. A 404, 405 or 501, or no network, means the static prototype
    has no backend yet: the answers stay in this browser and the visitor goes to the thank-you page
    as normal. Any other error keeps them on the page with a way to write to Belle.
  - Focus moves to each new question; the count is announced politely. Reduced motion: no fades.
*/
import { STORE_KEY, AUDIENCE, OCCASION, OUTCOME, GUESTS, SETTING, FORMAT, FORMAT_FROM_PARAM, nextMonths, monthLabel, labelOf } from './funnel-options';

type Audience = 'private' | 'corporate';
interface Answers {
  audience?: Audience;
  occasion?: string;
  occasion_other?: string;
  team_outcome?: string;
  team_outcome_other?: string;
  org?: string;
  group_size_band?: string;
  experiences?: string[];
  setting?: string;
  venue_slug?: string;
  preferred_month?: string;
  format_slug?: string;
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  marketing_consent?: boolean;
}
interface Meta {
  source?: string | null;
  format_requested?: string | null;
  experience_requested?: string | null;
  venue_requested?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_content?: string | null;
  utm_term?: string | null;
  referrer?: string | null;
  previous_page?: string | null;
  entry_url?: string;
  started_at?: string;
  audience_from_url?: boolean;
}
interface State {
  answers: Answers;
  meta: Meta;
  visited: number[];
  history: number[];
  current: number;
  submitted?: boolean;
  delivered?: boolean;
  submitted_at?: string;
}

const ORDER = [1, 2, 3, 4, 5, 6, 7];
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

const root = document.querySelector<HTMLElement>('[data-funnel]');
if (root) init(root);

function init(root: HTMLElement) {
  const form = root.querySelector<HTMLFormElement>('[data-funnel-form]')!;
  const stepEls = new Map<number, HTMLElement>();
  root.querySelectorAll<HTMLElement>('.step').forEach((el) => stepEls.set(Number(el.dataset.step), el));
  const venues: { slug: string; name: string; region: string }[] = JSON.parse(root.querySelector('[data-funnel-venues]')?.textContent ?? '[]');
  const experienceLabels = new Map<string, string>();
  form.querySelectorAll<HTMLInputElement>('input[name="experiences"]').forEach((i) => {
    experienceLabels.set(i.value, i.closest('label')?.querySelector('.opt__label')?.textContent?.trim() ?? i.value);
  });

  const count = root.querySelector<HTMLElement>('[data-count]')!;
  const fill = root.querySelector<HTMLElement>('[data-fill]')!;
  const backWrap = root.querySelector<HTMLElement>('[data-back-wrap]')!;
  const backBtn = root.querySelector<HTMLButtonElement>('[data-back]');
  const confirmed = root.querySelector<HTMLElement>('[data-confirmed]')!;
  const confirmedLabel = root.querySelector<HTMLElement>('[data-confirmed-label]')!;
  const sendBtn = root.querySelector<HTMLButtonElement>('[data-send]')!;
  const summary = root.querySelector<HTMLElement>('[data-summary]')!;

  // ---------- State ----------
  const state = load();
  readUrl(state);
  refreshMonths();
  writeInputs(state.answers);
  syncConditional();

  const params = new URLSearchParams(location.search);
  const asked = Number(params.get('step'));
  let start: number;
  if ([1, 2, 5].includes(asked)) start = asked === 2 && !state.answers.audience ? 1 : asked;
  else if (state.current && stepEls.has(state.current)) start = state.current;
  else start = state.answers.audience && state.meta.audience_from_url ? 2 : 1;
  if (state.meta.audience_from_url && !state.visited.includes(1)) state.visited.push(1);
  // The jump is used once: a reload keeps the visitor on the question they had reached.
  if (params.has('step')) {
    params.delete('step');
    const q = params.toString();
    history.replaceState(history.state, '', `${location.pathname}${q ? `?${q}` : ''}${location.hash}`);
  }

  root.dataset.ready = '';
  show(start, { focus: false, instant: true });

  // ---------- Events ----------
  form.addEventListener('change', () => {
    readInputs(state.answers);
    syncConditional();
    save();
    renderSummary();
    const error = stepEls.get(state.current)?.querySelector<HTMLElement>('[data-error]');
    if (error?.textContent) error.textContent = '';
  });
  form.addEventListener('input', (e) => {
    const t = e.target as HTMLInputElement;
    if (t.type === 'text' || t.type === 'email' || t.type === 'tel' || t.tagName === 'TEXTAREA') {
      readInputs(state.answers);
      if (t.getAttribute('aria-invalid') === 'true') t.removeAttribute('aria-invalid');
      save();
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (state.current === 7) {
      void send();
      return;
    }
    if (!validate(state.current)) return;
    go(next(state.current));
  });

  backBtn?.addEventListener('click', () => {
    const prev = state.history.pop();
    if (prev) show(prev, { focus: true });
  });

  root.querySelector('[data-change-audience]')?.addEventListener('click', () => go(1));

  // The customise prompts beside step 1 link to /enquire?step=n: jump without reloading.
  root.querySelectorAll<HTMLAnchorElement>('.funnel__aside a[href^="/enquire"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const url = new URL(a.href, location.href);
      const n = Number(url.searchParams.get('step'));
      if (![1, 2, 5].includes(n)) return;
      e.preventDefault();
      go(n === 2 && !state.answers.audience ? 1 : n);
    });
  });

  // ---------- Navigation ----------
  function answered(n: number): boolean {
    const a = state.answers;
    switch (n) {
      case 1: return Boolean(a.audience);
      case 2: return a.audience === 'corporate' ? Boolean(a.team_outcome) : Boolean(a.occasion);
      case 3: return Boolean(a.group_size_band);
      case 4: return state.visited.includes(4);
      case 5: return Boolean(a.setting);
      case 6: return Boolean(a.preferred_month && a.format_slug);
      default: return false;
    }
  }

  /** The next question after `n` not yet seen or answered, then any skipped earlier, then the details. */
  function next(n: number): number {
    const todo = (s: number) => s !== 7 && (!state.visited.includes(s) || !answered(s));
    const after = ORDER.filter((s) => s > n).find(todo);
    if (after) return after;
    const before = ORDER.filter((s) => s < n).find(todo);
    return before ?? 7;
  }

  function go(n: number) {
    if (n === state.current) return;
    state.history.push(state.current);
    show(n, { focus: true });
  }

  function show(n: number, opts: { focus: boolean; instant?: boolean }) {
    const leaving = stepEls.get(state.current);
    const entering = stepEls.get(n);
    if (!entering) return;

    if (leaving && leaving !== entering) {
      leaving.classList.remove('is-current');
      if (!reduce && !opts.instant) {
        leaving.classList.add('is-leaving');
        window.setTimeout(() => leaving.classList.remove('is-leaving'), 230);
      }
    }
    const reveal = () => {
      stepEls.forEach((el) => el.classList.remove('is-leaving'));
      entering.classList.add('is-current');
      if (opts.focus) heading(n)?.focus({ preventScroll: true });
      if (opts.focus) {
        const top = root.getBoundingClientRect().top + window.scrollY - 24;
        if (window.scrollY > top) window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
      }
    };
    if (leaving && leaving !== entering && !reduce && !opts.instant) window.setTimeout(reveal, 220);
    else reveal();

    state.current = n;
    if (!state.visited.includes(n)) state.visited.push(n);
    root.dataset.at = String(n);
    syncConditional();
    syncAside();
    progress();
    backWrap.hidden = state.history.length === 0;
    save();
  }

  function heading(n: number): HTMLElement | null {
    const el = stepEls.get(n);
    if (!el) return null;
    if (n === 2) return el.querySelector<HTMLElement>(state.answers.audience === 'corporate' ? '[data-q-corporate]' : '[data-q-private]');
    return el.querySelector<HTMLElement>('.step__q');
  }

  function progress() {
    const skipped = state.meta.audience_from_url && !state.history.includes(1) && state.current !== 1 ? 1 : 0;
    const total = ORDER.length - skipped;
    const seen = state.visited.filter((s) => !(skipped && s === 1));
    const position = Math.max(1, Math.min(total, seen.indexOf(state.current) + 1 || seen.length));
    count.textContent = `Question ${position} of ${total}`;
    fill.style.transform = `scaleX(${position / total})`;
  }

  // ---------- Conditional pieces ----------
  function syncConditional() {
    const a = state.answers;
    const step2 = stepEls.get(2);
    step2?.querySelectorAll<HTMLElement>('[data-variant]').forEach((v) => {
      v.hidden = Boolean(a.audience) && v.dataset.variant !== a.audience;
    });
    // Without an answer to step 1 (a prompt jumped ahead), show the private variant.
    if (!a.audience) step2?.querySelector<HTMLElement>('[data-variant="corporate"]')?.setAttribute('hidden', '');
    // Name step 2 by the question actually shown (QA m8).
    step2?.setAttribute('aria-labelledby', a.audience === 'corporate' ? 'q2-team' : 'q2');

    root.querySelectorAll<HTMLElement>('[data-other-for]').forEach((f) => {
      const name = f.dataset.otherFor as 'occasion' | 'team_outcome';
      f.classList.toggle('is-on', a[name] === 'other');
    });
    root.querySelector('[data-org-late]')?.classList.toggle('is-on', a.audience === 'corporate' && !a.org);

    const venue = venues.find((v) => v.slug === a.venue_slug);
    const note = root.querySelector<HTMLElement>('[data-venue-note]');
    if (note) {
      note.hidden = !venue;
      const name = note.querySelector('[data-venue-name]');
      if (name && venue) name.textContent = venue.name;
    }

    const showConfirmed = Boolean(a.audience) && state.current !== 1 && state.current !== 7;
    confirmed.hidden = !showConfirmed;
    confirmedLabel.textContent = a.audience === 'corporate' ? 'your team or organisation' : 'a private group';
  }

  function syncAside() {
    const at = state.current;
    root.querySelectorAll<HTMLElement>('[data-aside]').forEach((b) => {
      const kind = b.dataset.aside;
      b.hidden = !((kind === 'start' && at === 1) || (kind === 'summary' && at > 1 && at < 7) || (kind === 'details' && at === 7));
    });
    const path = state.answers.audience === 'corporate' ? 'corporate' : 'private';
    root.querySelectorAll<HTMLElement>('[data-proof]').forEach((p) => p.classList.toggle('is-on', p.dataset.proof === path));
    renderSummary();
  }

  function renderSummary() {
    const a = state.answers;
    const rows: [string, string][] = [];
    if (a.audience) rows.push(['Who', labelOf(AUDIENCE, a.audience)]);
    if (a.audience !== 'corporate' && a.occasion) rows.push(['Occasion', a.occasion === 'other' && a.occasion_other ? a.occasion_other : labelOf(OCCASION, a.occasion)]);
    if (a.audience === 'corporate' && a.team_outcome) rows.push(['For the team', a.team_outcome === 'other' && a.team_outcome_other ? a.team_outcome_other : labelOf(OUTCOME, a.team_outcome)]);
    if (a.audience === 'corporate' && a.org) rows.push(['Organisation', a.org]);
    if (a.group_size_band) rows.push(['Guests', labelOf(GUESTS, a.group_size_band)]);
    if (a.experiences?.length) rows.push(['Drawn to', a.experiences.map((v) => experienceLabels.get(v) ?? v).join(', ')]);
    if (a.setting) {
      const venue = venues.find((v) => v.slug === a.venue_slug);
      rows.push(['Setting', labelOf(SETTING, a.setting) + (venue ? `, ${venue.name}` : '')]);
    }
    if (a.preferred_month) rows.push(['When', monthLabel(a.preferred_month)]);
    if (a.format_slug) rows.push(['Kind of day', labelOf(FORMAT, a.format_slug)]);
    summary.replaceChildren(
      ...rows.map(([k, v]) => {
        const row = document.createElement('div');
        const dt = document.createElement('dt');
        const dd = document.createElement('dd');
        dt.textContent = k;
        dd.textContent = v;
        row.append(dt, dd);
        return row;
      }),
    );
    const block = root.querySelector<HTMLElement>('[data-aside="summary"]');
    if (block && !rows.length && state.current > 1 && state.current < 7) block.hidden = true;
  }

  function refreshMonths() {
    const inputs = Array.from(form.querySelectorAll<HTMLInputElement>('input[name="preferred_month"]')).filter((i) => i.value !== 'flexible');
    nextMonths(new Date()).forEach((m, i) => {
      const input = inputs[i];
      if (!input) return;
      input.value = m.value;
      const label = input.closest('label')?.querySelector('.opt__label');
      if (label) label.textContent = m.label;
    });
  }

  // ---------- Inputs ----------
  function readInputs(a: Answers) {
    const fd = new FormData(form);
    const str = (k: string) => {
      const v = fd.get(k);
      return typeof v === 'string' && v.trim() ? v.trim() : undefined;
    };
    a.audience = (str('audience') as Audience) ?? a.audience;
    a.occasion = str('occasion');
    a.occasion_other = str('occasion_other');
    a.team_outcome = str('team_outcome');
    a.team_outcome_other = str('team_outcome_other');
    a.org = str('org') ?? str('org_details');
    a.group_size_band = str('group_size_band');
    a.experiences = fd.getAll('experiences').map(String);
    const setting = str('setting');
    if (setting !== a.setting) {
      const venue = venues.find((v) => v.slug === a.venue_slug);
      if (venue && setting && venue.region !== setting) a.venue_slug = undefined;
    }
    a.setting = setting;
    a.preferred_month = str('preferred_month');
    a.format_slug = str('format_slug');
    a.name = str('name');
    a.email = str('email');
    a.phone = str('phone');
    a.message = str('message');
    a.marketing_consent = fd.get('marketing_consent') === 'yes';
  }

  function writeInputs(a: Answers) {
    const set = (name: string, value?: string) => {
      if (!value) return;
      form.querySelectorAll<HTMLInputElement>(`input[name="${name}"]`).forEach((i) => {
        if (i.type === 'radio') i.checked = i.value === value;
        else i.value = value;
      });
    };
    set('audience', a.audience);
    set('occasion', a.occasion);
    set('occasion_other', a.occasion_other);
    set('team_outcome', a.team_outcome);
    set('team_outcome_other', a.team_outcome_other);
    set('org', a.org);
    set('group_size_band', a.group_size_band);
    form.querySelectorAll<HTMLInputElement>('input[name="experiences"]').forEach((i) => (i.checked = Boolean(a.experiences?.includes(i.value))));
    set('setting', a.setting);
    set('preferred_month', a.preferred_month);
    set('format_slug', a.format_slug);
    set('name', a.name);
    set('email', a.email);
    set('phone', a.phone);
    const message = form.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
    if (message && a.message) message.value = a.message;
    const consent = form.querySelector<HTMLInputElement>('input[name="marketing_consent"]');
    if (consent) consent.checked = Boolean(a.marketing_consent);
    const slug = form.querySelector<HTMLInputElement>('[data-venue-slug]');
    if (slug) slug.value = a.venue_slug ?? '';
  }

  // ---------- Checks ----------
  function validate(n: number): boolean {
    readInputs(state.answers);
    const el = stepEls.get(n)!;
    const error = el.querySelector<HTMLElement>('[data-error]');
    const fail = (message: string, focus?: Element | null) => {
      if (error) error.textContent = message;
      (focus as HTMLElement | null)?.focus();
      return false;
    };
    const a = state.answers;
    const firstRadio = (name: string) => el.querySelector(`input[name="${name}"]`);
    switch (n) {
      case 1:
        if (!a.audience) return fail('Please choose who the day is for.', firstRadio('audience'));
        break;
      case 2:
        if (a.audience === 'corporate' && !a.team_outcome) return fail('Please choose what the day should do for your team.', firstRadio('team_outcome'));
        if (a.audience !== 'corporate' && !a.occasion) return fail('Please choose the occasion, or something else.', firstRadio('occasion'));
        break;
      case 3:
        if (!a.group_size_band) return fail('Please choose a rough number, or not sure yet.', firstRadio('group_size_band'));
        break;
      case 5:
        if (!a.setting) return fail('Please choose the coast, the vineyards, or help me choose.', firstRadio('setting'));
        break;
      case 6:
        if (!a.preferred_month) return fail('Please choose a month, or that you are flexible.', firstRadio('preferred_month'));
        if (!a.format_slug) return fail('Please choose the kind of day, or not sure yet.', firstRadio('format_slug'));
        break;
      case 7: {
        const name = el.querySelector<HTMLInputElement>('input[name="name"]')!;
        const email = el.querySelector<HTMLInputElement>('input[name="email"]')!;
        if (!a.name) {
          name.setAttribute('aria-invalid', 'true');
          return fail('Please add your name.', name);
        }
        if (!a.email || !emailOk(a.email)) {
          email.setAttribute('aria-invalid', 'true');
          return fail('Please add an email address Belle can reply to.', email);
        }
        break;
      }
    }
    if (error) error.textContent = '';
    return true;
  }

  // ---------- Send ----------
  async function send() {
    if (!validate(7)) return;
    // Anything skipped by a jump is asked before the enquiry goes.
    const missing = ORDER.filter((s) => s < 7 && s !== 4 && !answered(s));
    if (missing.length) {
      go(missing[0]);
      return;
    }
    const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]')?.value.trim();
    const payload = buildPayload();
    sendBtn.disabled = true;
    sendBtn.textContent = 'Sending';

    let delivered = false;
    if (!honeypot) {
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          headers: { 'content-type': 'application/json', accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (res.ok) delivered = true;
        else if (![404, 405, 501].includes(res.status)) throw new Error(String(res.status));
      } catch (err) {
        if (!(err instanceof TypeError)) {
          const error = stepEls.get(7)?.querySelector<HTMLElement>('[data-error]');
          if (error) error.textContent = 'That did not go through. Please try again in a moment, or write to Belle at belle@lamarea.com.au.';
          sendBtn.disabled = false;
          sendBtn.textContent = 'Send my enquiry';
          return;
        }
      }
    }
    state.submitted = true;
    state.delivered = delivered;
    state.submitted_at = payload.submitted_at;
    save();
    location.assign('/enquire/thank-you');
  }

  function buildPayload() {
    const a = state.answers;
    const m = state.meta;
    let referrerHost: string | null = null;
    try {
      referrerHost = m.referrer ? new URL(m.referrer).hostname : null;
    } catch {
      referrerHost = null;
    }
    return {
      audience: a.audience ?? null,
      occasion: a.audience === 'corporate' ? null : a.occasion ?? null,
      occasion_other: a.audience === 'corporate' ? null : a.occasion_other ?? null,
      team_outcome: a.audience === 'corporate' ? a.team_outcome ?? null : null,
      team_outcome_other: a.audience === 'corporate' ? a.team_outcome_other ?? null : null,
      org: a.org ?? null,
      group_size_band: a.group_size_band ?? null,
      experiences: a.experiences ?? [],
      setting: a.setting ?? null,
      venue_slug: a.venue_slug ?? null,
      preferred_month: a.preferred_month ?? null,
      format_slug: a.format_slug ?? null,
      format_requested: m.format_requested ?? null,
      experience_requested: m.experience_requested ?? null,
      name: a.name ?? null,
      email: a.email ?? null,
      phone: a.phone ?? null,
      message: a.message ?? null,
      marketing_consent: Boolean(a.marketing_consent),
      consent_text: root.querySelector('[data-consent-text]')?.textContent?.trim() ?? '',
      lead_source: m.utm_source || referrerHost || m.source || 'direct',
      source: m.source ?? null,
      utm_source: m.utm_source ?? null,
      utm_medium: m.utm_medium ?? null,
      utm_campaign: m.utm_campaign ?? null,
      utm_content: m.utm_content ?? null,
      utm_term: m.utm_term ?? null,
      referrer: m.referrer ?? null,
      previous_page: m.previous_page ?? null,
      landing_page: m.entry_url ?? location.href,
      started_at: m.started_at ?? null,
      submitted_at: new Date().toISOString(),
      step_reached: 7,
      website: form.querySelector<HTMLInputElement>('input[name="website"]')?.value ?? '',
      turnstile_token: form.querySelector<HTMLInputElement>('input[name="cf-turnstile-response"]')?.value ?? null,
    };
  }

  // ---------- Storage ----------
  function blank(): State {
    return { answers: {}, meta: {}, visited: [], history: [], current: 0 };
  }

  function load(): State {
    try {
      const raw = sessionStorage.getItem(STORE_KEY);
      if (!raw) return blank();
      const s = JSON.parse(raw) as State;
      // A finished enquiry starts a fresh one; the thank-you page has already read it.
      if (s.submitted) return blank();
      return { ...blank(), ...s, history: [] };
    } catch {
      return blank();
    }
  }

  function save() {
    try {
      sessionStorage.setItem(STORE_KEY, JSON.stringify(state));
    } catch {
      /* private windows can refuse storage; the funnel still works on the page */
    }
  }

  function readUrl(s: State) {
    const p = new URLSearchParams(location.search);
    const m = s.meta;
    const audience = p.get('audience');
    if (audience === 'private' || audience === 'corporate') {
      s.answers.audience = audience;
      m.audience_from_url = true;
    }
    const format = p.get('format');
    if (format) {
      m.format_requested = format;
      if (!s.answers.format_slug && FORMAT_FROM_PARAM[format]) s.answers.format_slug = FORMAT_FROM_PARAM[format];
    }
    const experience = p.get('experience');
    if (experience) {
      m.experience_requested = experience;
      const known = form.querySelector(`input[name="experiences"][value="${CSS.escape(experience)}"]`);
      if (known) s.answers.experiences = Array.from(new Set([...(s.answers.experiences ?? []), experience]));
    }
    const venue = p.get('venue');
    if (venue) {
      m.venue_requested = venue;
      const v = venues.find((x) => x.slug === venue);
      if (v) {
        s.answers.venue_slug = v.slug;
        if (!s.answers.setting && (v.region === 'coast' || v.region === 'vineyard')) s.answers.setting = v.region;
      }
    }
    for (const k of ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const) {
      const v = p.get(k);
      if (v) m[k] = v;
    }
    const source = p.get('source');
    if (source) m.source = source;
    if (document.referrer) {
      try {
        const ref = new URL(document.referrer);
        if (ref.origin === location.origin) m.previous_page = m.previous_page ?? ref.pathname;
        else m.referrer = m.referrer ?? document.referrer;
      } catch {
        /* ignore a malformed referrer */
      }
    }
    m.entry_url = m.entry_url ?? location.href;
    m.started_at = m.started_at ?? new Date().toISOString();
  }
}
