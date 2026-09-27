/*
  Pinned experiences gallery (components/experiences/ExperienceGallery.astro).
  Wide screens with a fine pointer and motion allowed: the section pins while the track travels
  sideways, scrubbed to scroll (about 250vh for fourteen cards), each photo drifting inside its frame
  at 0.85 speed. The counter and the progress line follow. Keyboard focus on a card scrolls the page to
  where that card is in view, so tabbing never lands on an unseen card.
  Otherwise: native sideways scroll with snap; the arrows step one card; the counter follows.
*/
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pad = (n: number) => String(n).padStart(2, '0');

document.querySelectorAll<HTMLElement>('[data-xg]').forEach((section) => {
  const track = section.querySelector<HTMLElement>('[data-xg-track]');
  const pin = section.querySelector<HTMLElement>('[data-xg-pin]');
  const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-xg-card]'));
  const now = section.querySelector<HTMLElement>('[data-xg-now]');
  const fill = section.querySelector<HTMLElement>('[data-xg-fill]');
  if (!track || !pin || !cards.length) return;

  const list = section.querySelector<HTMLElement>('[data-xg-list]') ?? track;
  const setProgress = (p: number) => {
    const idx = Math.min(cards.length, Math.max(1, Math.round(p * (cards.length - 1)) + 1));
    if (now) now.textContent = pad(idx);
    if (fill) fill.style.transform = `scaleX(${Math.max(0.06, p)})`;
  };

  const mm = gsap.matchMedia();
  mm.add('(min-width: 900px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)', () => {
    section.classList.add('is-pinned');
    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth);
    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: pin,
        start: 'top top',
        end: () => `+=${distance() * 1.1}`,
        pin: true,
        scrub: 0.8,
        invalidateOnRefresh: true,
        onUpdate: (st) => setProgress(st.progress),
      },
    });
    cards.forEach((card) => {
      const img = card.querySelector('img');
      if (!img) return;
      gsap.fromTo(img, { xPercent: -7 }, {
        xPercent: 7,
        ease: 'none',
        scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true },
      });
    });
    const onFocus = (e: FocusEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('[data-xg-card]');
      const st = tween.scrollTrigger;
      if (!card || !st) return;
      const target = Math.min(1, Math.max(0, (card.offsetLeft - window.innerWidth * 0.3) / distance()));
      window.scrollTo({ top: st.start + (st.end - st.start) * target, behavior: 'auto' });
    };
    track.addEventListener('focusin', onFocus);
    list.setAttribute('tabindex', '-1');
    return () => {
      section.classList.remove('is-pinned');
      track.removeEventListener('focusin', onFocus);
      list.setAttribute('tabindex', '0');
    };
  });

  // Native row: arrows and the counter.
  const step = () => (cards[0]?.getBoundingClientRect().width ?? 300) + 24;
  const smooth = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  section.querySelector('[data-xg-prev]')?.addEventListener('click', () => list.scrollBy({ left: -step(), behavior: smooth }));
  section.querySelector('[data-xg-next]')?.addEventListener('click', () => list.scrollBy({ left: step(), behavior: smooth }));
  list.addEventListener('scroll', () => {
    if (section.classList.contains('is-pinned')) return;
    const max = list.scrollWidth - list.clientWidth;
    setProgress(max > 0 ? list.scrollLeft / max : 0);
  }, { passive: true });
  setProgress(0);
});
