/*
  The media manifest. One entry per image or video slot on the site, split into one file per owner
  in src/data/media/ so builders never edit the same file. Ids are kebab-case: '<page>-<section>-<n>'.
  `suggested` names the asset from Belle's Drive and Dropbox inventory (plan/11, assets-index/03)
  so Jess can find it quickly. Leave `src` empty until the real file is in public/media/.

  To add Belle's real media later: put the file in public/media/, find the slot id (every placeholder
  on the page shows what belongs there), and set `src` (and `poster` for video).
*/
import type { MediaSlot } from './media-types';
import { slots as foundation } from './media/slots-foundation';
import { slots as systems } from './media/slots-systems';
import { slots as pageA } from './media/slots-page-a';
import { slots as pageB } from './media/slots-page-b';
import { slots as pageC } from './media/slots-page-c';
import { slots as pageD } from './media/slots-page-d';

const slots: MediaSlot[] = [...foundation, ...systems, ...pageA, ...pageB, ...pageC, ...pageD];
const bySlot = new Map(slots.map((s) => [s.id, s]));

export function media(id: string): MediaSlot {
  const found = bySlot.get(id);
  if (found) return found;
  // A missing slot still renders, so a typo shows up on the page rather than breaking the build.
  return { id, type: 'image', alt: '', suggested: `Missing media slot "${id}". Add it to src/data/media/`, tone: 'sand' };
}

export default slots;
