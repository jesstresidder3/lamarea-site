/*
  Small text helpers shared by the base components (owner: foundation layout builder).

  emphasis('An 8 hour day on the *Fleurieu*') returns HTML with the starred words wrapped in
  <span class="place">, the site's one italic flourish. Asterisks mark PLACE NAMES ONLY (Fleurieu,
  Deep Creek, Encounter Bay, McLaren Vale, Adelaide, Victor Harbor, Beresford Estate), build spec
  section 12. Everything else is escaped, so plain strings from the content collections are safe.
*/
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function emphasis(value: string | undefined | null): string {
  if (!value) return '';
  return escapeHtml(value).replace(/\*([^*]+)\*/g, '<span class="place">$1</span>');
}

/** Plain text of a heading with the emphasis markers removed, for aria labels and schema. */
export function plain(value: string | undefined | null): string {
  return (value ?? '').replace(/\*([^*]+)\*/g, '$1');
}

/** Two-digit numeral used by counters and numbered moments: 1 becomes '01'. */
export function numeral(n: number): string {
  return String(n).padStart(2, '0');
}

/** Builds a funnel link with prefill parameters: withParams('/enquire', { format: 'full-day' }). */
export function withParams(href: string, params?: Record<string, string | number | undefined | null>): string {
  if (!params) return href;
  const entries = Object.entries(params).filter(([, v]) => v !== undefined && v !== null && v !== '');
  if (!entries.length) return href;
  const [path, existing = ''] = href.split('?');
  const search = new URLSearchParams(existing);
  for (const [k, v] of entries) search.set(k, String(v));
  return `${path}?${search.toString()}`;
}
