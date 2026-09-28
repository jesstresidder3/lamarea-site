/*
  P6 SlideStrip behaviour (components/base/SlideStrip.astro).
  - The strip gains .is-in when it reaches 85 per cent of the screen, and its items slide in from the
    right (CSS). Items already on screen at load arrive at once.
  - Mouse drag scrolls the row (fine pointers only); a drag never fires the link underneath.
  - Arrow buttons step one item and disable at either end; .is-fits hides them when all items fit.
  Touch keeps native scroll and snap.
*/
document.querySelectorAll<HTMLElement>('[data-strip]').forEach((strip) => {
  const list = strip.querySelector<HTMLElement>('[data-strip-list]');
  const items = Array.from(strip.querySelectorAll<HTMLElement>('[data-strip-item]'));
  const prev = strip.querySelector<HTMLButtonElement>('[data-strip-prev]');
  const next = strip.querySelector<HTMLButtonElement>('[data-strip-next]');
  if (!list || !items.length) return;

  // Slide in once.
  const io = new IntersectionObserver((entries) => {
    if (entries.some((e) => e.isIntersecting)) {
      strip.classList.add('is-in');
      io.disconnect();
    }
  }, { rootMargin: '0px 0px -15% 0px' });
  io.observe(list);

  // Arrows and the fit check.
  const edges = () => {
    const max = list.scrollWidth - list.clientWidth;
    strip.classList.toggle('is-fits', max < 4);
    if (prev) prev.disabled = list.scrollLeft < 4;
    if (next) next.disabled = list.scrollLeft > max - 4;
  };
  const step = () => (items[0].getBoundingClientRect().width || 300) + 24;
  const smooth: ScrollBehavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  prev?.addEventListener('click', () => list.scrollBy({ left: -step(), behavior: smooth }));
  next?.addEventListener('click', () => list.scrollBy({ left: step(), behavior: smooth }));
  list.addEventListener('scroll', edges, { passive: true });
  window.addEventListener('resize', edges);
  edges();

  // Mouse drag.
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let down = false, moved = false, startX = 0, startLeft = 0;
    list.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true; moved = false; startX = e.clientX; startLeft = list.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 6) { moved = true; list.classList.add('is-dragging'); }
      if (moved) list.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      if (moved) {
        // Let the click that follows a drag pass harmlessly, then restore snap.
        window.setTimeout(() => list.classList.remove('is-dragging'), 0);
      }
    });
    list.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  }
});
