/*
  Markdown to HTML for journal bodies (page builder C). The journal collection keeps Belle's migrated
  posts verbatim; this renders them for a page whose H1 is the post title, so every heading in the
  body steps down one level (the sleep post opens a section with a level one heading). External links
  open in a new tab. Nothing in the words changes.

  renderMarkdown(src, { demote: 1 }) returns an HTML string.
*/
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

type HastNode = { type: string; tagName?: string; properties?: Record<string, unknown>; children?: HastNode[]; value?: string };

/** Advertising and tracking parameters come off outbound links (the Canningvale links carried gclid). */
function cleanUrl(href: string): string {
  try {
    const u = new URL(href);
    for (const k of [...u.searchParams.keys()]) if (/^(utm_|gclid|gbraid|wbraid|gad_|fbclid|stage$)/.test(k)) u.searchParams.delete(k);
    return u.toString();
  } catch {
    return href;
  }
}

const textOf = (n: HastNode): string => (n.type === 'text' ? n.value ?? '' : (n.children ?? []).map(textOf).join(''));
const slugify = (t: string) =>
  t
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60);

function rehypeJournal(opts: { demote: number; ids: Set<string> }) {
  return (tree: HastNode) => {
    visit(tree as never, 'element', (node: HastNode) => {
      const m = node.tagName?.match(/^h([1-6])$/);
      if (m) {
        node.tagName = `h${Math.min(6, Number(m[1]) + opts.demote)}`;
        // A stable id on each heading, so the story's contents can link to it
        let id = slugify(textOf(node)) || 'section';
        while (opts.ids.has(id)) id += '-2';
        opts.ids.add(id);
        node.properties = { ...node.properties, id };
      }
      if (node.tagName === 'a') {
        const href = String(node.properties?.href ?? '');
        if (/^https?:\/\//.test(href) && !href.includes('lamarea.com.au')) {
          node.properties = { ...node.properties, href: cleanUrl(href), target: '_blank', rel: 'noopener' };
        }
        // Links to the old philosophy page point at the new one.
        if (/lamarea\.com\.au\/philosophy/.test(href)) node.properties = { ...node.properties, href: '/philosophy' };
      }
    });
  };
}

export function renderMarkdown(src: string, opts: { demote?: number; ids?: Set<string> } = {}): string {
  const file = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeJournal, { demote: opts.demote ?? 1, ids: opts.ids ?? new Set() })
    .use(rehypeStringify)
    .processSync(src);
  return String(file);
}

/** Plain words in a markdown body, for the read time. */
export function wordCount(src: string): number {
  return src
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*_>`|-]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

/** Minutes to read at about 220 words a minute, never under one. */
export const readMinutes = (src: string) => Math.max(1, Math.round(wordCount(src) / 220));

/** The h2 and h3 headings in rendered HTML, for a story's contents list. */
export function headingsOf(html: string): { level: number; id: string; text: string }[] {
  const out: { level: number; id: string; text: string }[] = [];
  const re = /<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(html))) {
    const text = m[3].replace(/<[^>]+>/g, '').replace(/&#x26;|&amp;/g, '&').replace(/&#x27;|&#39;/g, "'").trim();
    out.push({ level: Number(m[1]), id: m[2], text });
  }
  return out;
}
