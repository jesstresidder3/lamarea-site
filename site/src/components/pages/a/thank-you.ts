/*
  /enquire/thank-you: reads the funnel's answers from sessionStorage and summarises them.
  Nothing here is sent anywhere. Text is set with textContent only.
*/
import { AUDIENCE, OCCASION, OUTCOME, GUESTS, SETTING, FORMAT, monthLabel, labelOf } from './funnel-options';

const root = document.querySelector<HTMLElement>('[data-thanks]');

if (root) {
  let state: { answers?: Record<string, unknown>; delivered?: boolean; submitted?: boolean } | null = null;
  try {
    state = JSON.parse(sessionStorage.getItem(root.dataset.store ?? 'lm-enquiry') ?? 'null');
  } catch {
    state = null;
  }
  const labels: { experiences: Record<string, string>; venues: Record<string, string> } = JSON.parse(
    root.querySelector('[data-ty-labels]')?.textContent ?? '{"experiences":{},"venues":{}}',
  );
  const a = (state?.answers ?? {}) as Record<string, string | string[] | boolean | undefined>;
  const s = (k: string) => (typeof a[k] === 'string' ? (a[k] as string) : '');

  const first = s('name').split(/\s+/)[0];
  const heading = root.querySelector('[data-ty-heading]');
  if (heading && first) heading.textContent = `Thank you, ${first}.`;

  const rows: [string, string][] = [];
  const corporate = s('audience') === 'corporate';
  if (s('audience')) rows.push(['Who', labelOf(AUDIENCE, s('audience'))]);
  if (!corporate && s('occasion')) rows.push(['Occasion', s('occasion') === 'other' && s('occasion_other') ? s('occasion_other') : labelOf(OCCASION, s('occasion'))]);
  if (corporate && s('team_outcome')) rows.push(['For the team', s('team_outcome') === 'other' && s('team_outcome_other') ? s('team_outcome_other') : labelOf(OUTCOME, s('team_outcome'))]);
  if (corporate && s('org')) rows.push(['Organisation', s('org')]);
  if (s('group_size_band')) rows.push(['Guests', labelOf(GUESTS, s('group_size_band'))]);
  const ex = Array.isArray(a.experiences) ? (a.experiences as string[]) : [];
  if (ex.length) rows.push(['Drawn to', ex.map((v) => labels.experiences[v] ?? v).join(', ')]);
  if (s('setting')) rows.push(['Setting', labelOf(SETTING, s('setting')) + (s('venue_slug') && labels.venues[s('venue_slug')] ? `, ${labels.venues[s('venue_slug')]}` : '')]);
  if (s('preferred_month')) rows.push(['When', monthLabel(s('preferred_month'))]);
  if (s('format_slug')) rows.push(['Kind of day', labelOf(FORMAT, s('format_slug'))]);

  const list = root.querySelector('[data-ty-list]');
  const wrap = root.querySelector<HTMLElement>('[data-ty-answers]');
  if (list && wrap && rows.length) {
    list.replaceChildren(
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
    wrap.hidden = false;
  }

  // Both guides show when the audience is unknown (a direct visit or cleared storage, QA m10).
  // With an answer, only that path's guide stays.
  const audience = s('audience');
  if (audience === 'private' || audience === 'corporate') {
    root.querySelectorAll<HTMLElement>('[data-ty-guide]').forEach((g) => {
      if (g.dataset.tyGuide !== audience) return g.remove();
      const label = g.querySelector('.arrow-link__label');
      if (label) label.textContent = audience === 'corporate' ? 'Your corporate group guide' : 'Your private group guide';
    });
  }

  const stub = root.querySelector<HTMLElement>('[data-ty-stub]');
  if (stub && state?.submitted && state.delivered === false) stub.hidden = false;
}
