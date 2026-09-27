/*
  ZoomMosaic fallback for browsers without animation-timeline (Firefox at the time of writing).
  GSAP and ScrollTrigger load only here, only when needed, and only without reduced motion.
  The scrub is bound to scroll with no smoothing, matching the CSS path's proportions:
  zoom over the first 1,000px (700px on phones), hold, then the three facts arrive from the right.
*/
const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-zoom-mosaic]'));
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollDriven = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()');

if (sections.length && !reduce && !scrollDriven) {
  document.documentElement.classList.add('zm-gsap');
  Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
    .then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      sections.forEach((section) => {
        const track = section.querySelector<HTMLElement>('.zm__track');
        const group = section.querySelector<HTMLElement>('[data-zoom-group]');
        const facts = Array.from(section.querySelectorAll<HTMLElement>('[data-zoom-fact]'));
        if (!track || !group) return;
        const mm = gsap.matchMedia();
        mm.add({ phone: '(max-width: 699px)', wide: '(min-width: 700px)' }, (ctx) => {
          const phone = Boolean(ctx.conditions?.phone);
          const s = parseFloat(getComputedStyle(section).getPropertyValue('--s')) || 0.45;
          const zoomEnd = phone ? 0.61 : 0.625;
          const factStart = phone ? 0.78 : 0.81;
          const tl = gsap.timeline({ defaults: { ease: 'none' } });
          tl.fromTo(group, { scale: 1 }, { scale: 1 / s, duration: zoomEnd }, 0);
          const note = section.querySelector('.zm__centre .ph-note');
          if (note) tl.fromTo(note, { opacity: 1 }, { opacity: 0, duration: 0.2 }, 0);
          facts.forEach((fact, i) => {
            tl.fromTo(
              fact,
              { xPercent: 0, x: () => fact.offsetWidth + window.innerWidth * 0.12, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.11, ease: 'power1.out', immediateRender: true },
              factStart + i * (phone ? 0.06 : 0.05),
            );
          });
          tl.set({}, {}, 1);
          ScrollTrigger.create({ trigger: track, start: 'top top', end: 'bottom bottom', scrub: true, animation: tl, invalidateOnRefresh: true });
        });
      });
      document.documentElement.classList.remove('zm-gsap');
    })
    .catch(() => document.documentElement.classList.remove('zm-gsap'));
}
