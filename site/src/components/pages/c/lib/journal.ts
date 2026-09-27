/*
  Journal helpers for page builder C: who wrote a post (linked to their team page), and how long it
  takes to read. The recipe posts carry "Susie Styler" only in the Wix schema, which is not published
  (content note), so an unattributed post is credited to La maréa and links nowhere.
*/
import type { Post, Person } from '../../../../lib/content';
import { readMinutes } from './markdown';

export function authorOf(post: Post, people: Map<string, Person>): { name: string; role: string | null; href?: string } {
  const p = post.data.author ? people.get(post.data.author) : undefined;
  if (p) {
    return {
      name: post.data.byline?.name ?? post.data.author_as_published ?? p.data.name,
      role: post.data.byline?.role ?? p.data.role_long ?? p.data.role,
      href: `/team/${p.id}`,
    };
  }
  return { name: 'La maréa', role: null };
}

export const minutesOf = (post: Post) => readMinutes(post.body ?? '');
