/*
  P1 PageOpener scroll motion (components/base/PageOpener.astro).
  As the opener scrolls away, its three title lines lift at speeds 0.9, 0.75 and 0.6 (the first line
  leaves fastest) and the photograph settles from 1.06 to 1. Arrival is pure CSS in the component.
  Reduced motion: nothing here runs, the opener is static.
*/
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduce) {
  document.querySelectorAll<HTMLElement>('[data-page-opener]').forEach((el) => {
    const media = Array.from(el.querySelectorAll<HTMLElement>('[data-po-media] img, [data-po-media] video'));
    const lines = Array.from(el.querySelectorAll<HTMLElement>('[data-po-line]'));
    const speeds = [0.9, 0.75, 0.6];
    if (media.length) gsap.set(media, { scale: 1.06 });
    const st = { trigger: el, start: 'top top', end: 'bottom top', scrub: 0.4 };
    // Wait for the CSS arrival to finish before the scroll scrub takes the transform.
    window.setTimeout(() => {
      if (media.length) gsap.fromTo(media, { scale: 1.06 }, { scale: 1, ease: 'none', scrollTrigger: st });
      lines.forEach((line, i) => {
        // A line at speed 0.6 trails the page by 40 per cent of the scroll, so the lines drift apart.
        gsap.to(line, { y: () => (1 - (speeds[i] ?? 0.6)) * el.offsetHeight * 0.55, ease: 'none', scrollTrigger: { ...st, invalidateOnRefresh: true } });
      });
    }, 1800);
  });
}
