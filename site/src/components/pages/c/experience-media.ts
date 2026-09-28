/*
  Experience imagery for the L3 pages (rebuild 28-09-2026). The experiences collection keeps its own
  `media` slot for the home gallery and cards; these are the frames the experience pages and the
  /experiences slider use: the opener, a short gallery of two to four frames, and a video tile.
  Every id is a slot in src/data/media/slots-page-c.ts. An experience with no lead photograph opens
  on a type-led treatment, never an empty frame (P7).

  caption: a place, only where the frame is a partner venue's own photograph.
*/
import { media as getMedia } from '../../../data/media';
import imageSizes from '../../../data/media/image-sizes.json';

/** True when the slot's photograph (or a video's poster) is taller than it is wide. */
export function isPortrait(id?: string): boolean {
  if (!id) return false;
  const m = getMedia(id);
  const src = m.type === 'video' ? m.poster : m.src;
  const info = src ? (imageSizes as Record<string, { w: number; h: number }>)[src] : undefined;
  if (info) return info.h > info.w;
  return m.type === 'video' && /9 \/ 16|4 \/ 5|2 \/ 3/.test(m.aspect ?? '');
}

export interface ExperienceMedia {
  lead?: string;
  caption?: string;
  /** Where the opener's words and their shade sit (PageOpener only) */
  shadeAt?: 'top-left' | 'bottom-left';
  gallery?: string[];
  /** A video for the slider tile on /experiences (Belle, T53: sliders with videos) */
  tile?: string;
}

export const experienceMedia: Record<string, ExperienceMedia> = {
  yoga: { lead: 'c-xp-yoga-side-stretch', gallery: ['c-xp-yoga-silhouette', 'c-be-yoga', 'c-xp-yoga-reach', 'c-xp-deck-breathwork'] },
  pilates: { lead: 'c-xp-yoga-class', gallery: ['c-xp-mats-glass', 'c-xp-mat-stretch', 'c-be-yoga'], tile: 'c-xp-movement-reel' },
  sauna: { lead: 'c-xp-sauna-cliff', gallery: ['c-xp-sauna-guests', 'c-xp-sauna-cold-tub', 'c-xp-cold-tubs'] },
  'contrast-therapy': { lead: 'c-xp-sauna-guests', gallery: ['c-xp-sauna-cold-tub', 'c-xp-cold-tubs', 'c-xp-breath-faces'] },
  'meditation-and-mindfulness': { lead: 'c-xp-breath-faces', gallery: ['c-xp-breath-mats', 'c-xp-rest-faces', 'c-xp-deck-breathwork'] },
  massage: { lead: 'c-xp-massage-rest', gallery: ['c-xp-massage-face'] },
  'mediterranean-table': { lead: 'c-xp-long-table-group', gallery: ['c-xp-tortelli-lemons', 'c-xp-oil-pour', 'c-xp-table-wine', 'c-xp-grilled-veg'], tile: 'c-xp-nutrition-reel' },
  'pasta-making': { lead: 'c-xp-chef-bench', gallery: ['c-xp-chef-kitchen', 'c-xp-pasta-lemons', 'c-xp-tortelli-lemons'] },
  'gut-health': { lead: 'c-xp-bowls', gallery: ['c-xp-grilled-veg'] },
  'nutrition-consultations': { lead: 'c-xp-journal' },
  'coastal-hiking': { lead: 'c-xp-bay-walk', gallery: ['c-xp-hillside-walk', 'c-eb-walk', 'c-xp-hidden-cove'] },
  'ocean-swimming': { lead: 'c-xp-hidden-cove', gallery: ['c-xp-beach-walk', 'c-xp-emerald-shallows'] },
  'pool-swimming': { lead: 'c-eb-pool', caption: 'Naiko at the Bluff, Encounter Bay' },
  'journaling-and-reading': { lead: 'c-xp-cup-sea', gallery: ['c-xp-journal'] },
  'relaxing-by-the-fire': { lead: 'c-dc-living', caption: 'Naiko Deep Creek', shadeAt: 'bottom-left', gallery: ['c-eb-fire', 'c-be-fire', 'c-xp-fire-sea'] },
};

/** Captions for gallery frames that are a venue's own photograph. */
export const venueCaption: Record<string, string> = {
  'c-be-yoga': 'Beresford Estate, McLaren Vale',
  'c-be-fire': 'Beresford Estate, McLaren Vale',
  'c-eb-fire': 'Naiko at the Bluff, Encounter Bay',
  'c-eb-walk': 'Naiko at the Bluff, Encounter Bay',
  'c-eb-pool': 'Naiko at the Bluff, Encounter Bay',
  'c-dc-living': 'Naiko Deep Creek',
};

/** Break a name into two opener lines at a natural point ("Meditation / and mindfulness"). */
export function openerLines(name: string): string[] {
  const words = name.split(' ');
  if (words.length < 2 || name.length <= 11) return [name];
  const and = words.findIndex((w, i) => i > 0 && (w === 'and' || w === 'by' || w === 'the'));
  if (and > 0) return [words.slice(0, and).join(' '), words.slice(and).join(' ')];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}
