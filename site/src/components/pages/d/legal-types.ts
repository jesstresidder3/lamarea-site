/* Block types for LegalDocument.astro (page builder D). */
export type LegalBlock =
  | { kind: 'p'; text: string; html?: boolean; draft?: boolean }
  | { kind: 'list'; items: string[]; html?: boolean; draft?: boolean }
  | { kind: 'sub'; number?: string; title: string }
  | { kind: 'note'; text: string }
  | { kind: 'todo'; text: string };

export interface LegalSection {
  id: string;
  number: string;
  title: string;
  blocks: LegalBlock[];
}
