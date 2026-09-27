/*
  Small text helpers shared by the system components. Owner: foundation systems builder.
  Nothing here writes copy. These only trim, format and label what the collections hold.
*/

/** Two-digit counter numerals: 3 becomes "03". */
export const pad2 = (n: number) => String(n).padStart(2, '0');

/**
 * Trim to about `max` words at a word boundary, preferring a sentence end when one falls late enough.
 * Returns the short text and whether anything was cut, so the UI can offer the full review.
 */
export function trimWords(text: string, max = 45): { short: string; trimmed: boolean } {
  const words = text.trim().split(/\s+/);
  if (words.length <= max + 6) return { short: text.trim(), trimmed: false };
  const head = words.slice(0, max).join(' ');
  const lastStop = Math.max(head.lastIndexOf('. '), head.lastIndexOf('! '), head.lastIndexOf('? '));
  if (lastStop > head.length * 0.6) return { short: head.slice(0, lastStop + 1), trimmed: true };
  return { short: head.replace(/[,;:]$/, '') + '…', trimmed: true };
}

/** Split paragraphs into a lead of about `max` words and the rest (for bios with a read-more row). */
export function splitLead<T extends { text: string }>(blocks: T[], max = 70): { lead: T[]; more: T[] } {
  const lead: T[] = [];
  let count = 0;
  for (let i = 0; i < blocks.length; i++) {
    const n = blocks[i].text.split(/\s+/).length;
    if (i > 0 && count + n > max) return { lead, more: blocks.slice(i) };
    lead.push(blocks[i]);
    count += n;
  }
  return { lead, more: [] };
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** "1 September 2026" (Australian order). */
export function formatDate(d: Date) {
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

/** DD-MM-YYYY to "August 2026". */
export function monthYear(dmy: string | null) {
  if (!dmy) return '';
  const [, mm, yy] = dmy.split('-');
  return `${MONTHS[Number(mm) - 1]} ${yy}`;
}

/** Markdown emphasis markers out, for excerpts and titles. */
export const plain = (s: string) => s.replace(/\*\*|__|\*/g, '');

export const regionLabel = (r: 'coast' | 'vineyard' | 'city') =>
  r === 'coast' ? 'On the coast' : r === 'vineyard' ? 'In the vineyards' : 'Adelaide';

export const sleepsLabel = (display: string | null) => (display ? `Sleeps ${display}` : 'Capacity to confirm');

const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Heading markup with place names marked (build spec 12: italic only on place names).
 * Write the place between asterisks: 'An 8 hour day on the *Fleurieu*'. Everything else is escaped.
 */
export const placeHtml = (v: string | undefined | null) =>
  v ? esc(v).replace(/\*([^*]+)\*/g, '<span class="place">$1</span>') : '';

/** Unique, stable DOM ids per component instance. */
let seq = 0;
export const uid = (prefix: string) => `${prefix}-${(++seq).toString(36)}`;
