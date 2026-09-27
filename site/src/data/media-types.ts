/*
  Media manifest types.
  Every photo and video on the site is a slot in src/data/media.ts.
  To add Belle's real media: drop the file in public/media/ and fill in `src` (and `poster` for video).
  An empty `src` renders a designed placeholder that names the asset that belongs there.
*/
export type MediaTone = 'sand' | 'salt' | 'sage' | 'dusk' | 'sea';

export interface MediaSlot {
  /** Stable id used by components, for example 'home-hero'. */
  id: string;
  type: 'image' | 'video';
  /** Path under public/, for example '/media/home-hero.mp4'. Empty until Belle's asset is added. */
  src?: string;
  /** Optional portrait crop for phones (plan/10: mobile gets its own crop, never a scaled desktop shot). */
  srcMobile?: string;
  /** Video poster frame, or a still that stands in when video is off (reduced motion, save-data). */
  poster?: string;
  alt: string;
  /** CSS aspect-ratio, for example '16 / 9'. Components may override. */
  aspect?: string;
  /** What should go here, from Belle's asset inventory. Shown on the placeholder. */
  suggested: string;
  /** Production note, for example "slow to about 0.6x, stills only at launch". */
  note?: string;
  /** Placeholder colour mood so a page of placeholders does not read as one grey block. */
  tone?: MediaTone;
  /** Grade from plan/10: A professional, B good drone with work, C amateur (small frames only). */
  grade?: 'A' | 'B' | 'C';
}
