/*
  The 8 hour day, sticky split (components/day/PinnedDay.astro).
  - Each beat gains .is-in when its top reaches 80 per cent of the screen (its words slide in from the
    right) and becomes the active beat as it crosses the centre line: the sticky photograph for that
    beat slides in from the right over the last one, the caption and the tint follow.
  - The tide line draws itself (stroke-dashoffset 1 to 0) with the timetable's passage.
  - Reduced motion or narrow screens: CSS shows a stack, the line stays drawn, nothing is hidden.
*/
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.querySelectorAll<HTMLElement>('[data-pinned-day]').forEach((section) => {
  const beats = Array.from(section.querySelectorAll<HTMLElement>('[data-dy-beat]'));
  const photos = Array.from(section.querySelectorAll<HTMLElement>('[data-dy-photo]'));
  const tint = section.querySelector<HTMLElement>('[data-dy-tint]');
  const capName = section.querySelector<HTMLElement>('[data-dy-cap-name]');
  const capTime = section.querySelector<HTMLElement>('[data-dy-cap-time]');
  const line = section.querySelector<SVGPathElement>('[data-dy-line]');
  const times = section.querySelector<HTMLElement>('.dy__times');
  if (!beats.length) return;

  if (reduce) {
    beats.forEach((b) => b.classList.add('is-in', 'is-active'));
    return;
  }

  let current = 0;
  const activate = (i: number) => {
    if (i === current) return;
    const prev = current;
    current = i;
    beats.forEach((b, k) => {
      b.classList.toggle('is-active', k === i);
      b.classList.toggle('is-past', k < i);
    });
    photos.forEach((p, k) => {
      p.classList.toggle('is-leaving', k === prev);
      p.classList.toggle('is-active', k === i);
    });
    window.setTimeout(() => photos[prev]?.classList.remove('is-leaving'), 1150);
    const b = beats[i];
    if (tint && b.dataset.tint) tint.style.setProperty('--tint', b.dataset.tint);
    if (capName) capName.textContent = b.dataset.name ?? '';
    if (capTime) capTime.textContent = b.dataset.time ?? '';
  };
  beats[0].classList.add('is-active');

  beats.forEach((b, i) => {
    ScrollTrigger.create({ trigger: b, start: 'top 80%', once: true, onEnter: () => b.classList.add('is-in') });
    ScrollTrigger.create({
      trigger: b,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: (st) => { if (st.isActive) activate(i); },
    });
  });

  if (line && times) {
    gsap.fromTo(line, { strokeDashoffset: 1 }, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: { trigger: times, start: 'top 60%', end: 'bottom 60%', scrub: 0.5 },
    });
  }
});
