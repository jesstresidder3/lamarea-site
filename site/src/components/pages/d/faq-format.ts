/*
  FAQ answer formatting (page builder D). The words stay exactly as the collection holds them
  (verbatim from lamarea.com.au/faqs); only the markup changes so long answers read calmly:
  - a line that ends in "?" after the opening lines becomes a small sub-question
  - short lines that follow a line ending in ":" become a list
  - email addresses and Belle's published phone number become links
  - the unlinked "HERE" in the first answer links to /experiences, the page it describes
*/
import { escapeHtml } from '../../base/text';

const linkify = (s: string) =>
  s
    .replace(/([\w.+-]+@lamarea\.com\.au)/g, '<a href="mailto:$1">$1</a>')
    .replace(/0411354356/g, '<a href="tel:+61411354356">0411354356</a>')
    .replace(/\bHERE\b/g, '<a href="/experiences">HERE</a>');

const endsSentence = (s: string) => /[.!?)]$/.test(s.trim());

export function answerHtml(paragraphs: string[]): string {
  const out: string[] = [];
  let list: string[] | null = null;
  const flush = () => {
    if (list && list.length) out.push(`<ul>${list.map((i) => `<li>${i}</li>`).join('')}</ul>`);
    list = null;
  };
  paragraphs.forEach((raw, i) => {
    const text = linkify(escapeHtml(raw.trim()));
    if (list && !endsSentence(raw) && !raw.trim().endsWith(':')) {
      list.push(text);
      return;
    }
    flush();
    if (i > 1 && raw.trim().endsWith('?')) {
      out.push(`<p class="faq-sub">${text}</p>`);
    } else {
      out.push(`<p>${text}</p>`);
    }
    if (raw.trim().endsWith(':')) list = [];
  });
  flush();
  return out.join('');
}

/** A note for Belle inside an answer, shown only while the placeholder layer is on. */
export const noteHtml = (text: string) => `<p class="faq-note"><span>For Belle</span>${escapeHtml(text)}</p>`;
