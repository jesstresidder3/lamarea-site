/*
  Entry reveals and scroll fallbacks, loaded by Reveal, SlideIn and MediaBand.
  - [data-reveal]: adds .is-in once, when 12 per cent is visible. Staggered children get --i.
  - [data-slide-in]: IntersectionObserver fallback where animation-timeline: view() is missing.
  - [data-parallax]: rAF drift fallback where animation-timeline is missing.
  Reduced motion: everything is shown at once and nothing drifts.
*/
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollDriven = typeof CSS !== 'undefined' && CSS.supports('animation-timeline: view()');
const done = new WeakSet<Element>();

function reveal(root: ParentNode = document) {
  const targets = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]')).filter((el) => !done.has(el));
  const slides = scrollDriven ? [] : Array.from(root.querySelectorAll<HTMLElement>('[data-slide-in]')).filter((el) => !done.has(el));

  targets.forEach((el) => {
    if (el.dataset.reveal === 'children') {
      Array.from(el.children).forEach((c, i) => (c as HTMLElement).style.setProperty('--i', String(i)));
    }
  });

  const all = [...targets, ...slides];
  all.forEach((el) => done.add(el));

  if (reduce || !('IntersectionObserver' in window)) {
    all.forEach((el) => el.classList.add('is-in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
  );
  all.forEach((el) => io.observe(el));
}

function parallaxFallback() {
  if (reduce || scrollDriven) return;
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!items.length) return;
  const visible = new Set<HTMLElement>();
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const el = e.target as HTMLElement;
      if (e.isIntersecting) visible.add(el);
      else visible.delete(el);
    }
  });
  items.forEach((el) => io.observe(el.parentElement ?? el));
  // Observe the frame (parent) but move the media element.
  const byFrame = new Map(items.map((el) => [el.parentElement ?? el, el]));
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    byFrame.forEach((el, frame) => {
      if (!visible.has(frame as HTMLElement)) return;
      const r = frame.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
      el.style.transform = `translate3d(0, ${(-6 + 12 * p).toFixed(2)}%, 0)`;
    });
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

reveal();
parallaxFallback();
