/*
  PinnedDay behaviour (components/day/PinnedDay.astro).

  900px and wider, 600px and taller, motion allowed:
    GSAP and ScrollTrigger load (dynamically, only on pages with this section) and pin the stage.
    Panels travel in from the right, linear with scroll, with a short hold on the base and on each
    panel, a longer one on Restore. The time rail fills as they arrive. Focus moving into a panel
    scrolls to where that panel has settled, so keyboard users never tab into an unseen panel.
  Below 900px:
    The panels are a native scroll-snap row. The rail and the count follow the row; the rail stops,
    arrows and keyboard arrows move it.
  Reduced motion:
    CSS shows a static stack and this script only keeps the rail's anchors working.
*/
const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-pinned-day]'));
const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

sections.forEach((section) => {
  const stops = Array.from(section.querySelectorAll<HTMLElement>('.pd__stop:not(.pd__stop--end)'));
  const fill = section.querySelector<HTMLElement>('[data-pd-fill]');
  const track = section.querySelector<HTMLElement>('[data-pd-track]');
  const panels = Array.from(section.querySelectorAll<HTMLElement>('[data-pd-panel]'));
  const prev = section.querySelector<HTMLButtonElement>('[data-pd-prev]');
  const next = section.querySelector<HTMLButtonElement>('[data-pd-next]');
  const count = section.querySelector<HTMLElement>('[data-pd-count]');
  const n = panels.length;
  if (!track || !n) return;

  /* progress p runs 0 (base only) to n (all settled); fill reaches stop k when panel k has settled,
     and the day's end once the last hold is done (extra 0 to 1). */
  const paint = (p: number, extra = 0) => {
    const settled = Math.floor(p + 0.001);
    const cur = p > 0 ? Math.min(n - 1, Math.ceil(p - 0.001) - 1) : -1;
    stops.forEach((s, k) => {
      s.classList.toggle('is-reached', k < settled);
      s.classList.toggle('is-current', k === cur);
    });
    const width = Math.min(1, Math.max(0, p - 1) / n + (p >= n ? extra / n : 0));
    if (fill) fill.style.width = `${(width * 100).toFixed(2)}%`;
  };

  /* ---------- Swipe row (below 900px) ---------- */
  const current = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
  const go = (i: number) => {
    const target = Math.max(0, Math.min(n - 1, i));
    track.scrollTo({ left: target * track.clientWidth, behavior: reduceQuery.matches ? 'auto' : 'smooth' });
  };
  // Phones: the row takes the height of the panel in view, so a short panel leaves no empty band
  // (CD review 02 item 9). Cleared for the pinned stage and the reduced-motion stack.
  const phoneQuery = window.matchMedia('(max-width: 899px)');
  const fitRow = () => {
    const swipe = phoneQuery.matches && !section.classList.contains('is-pinned') && !reduceQuery.matches;
    const h = swipe ? panels[current()]?.offsetHeight : 0;
    track.style.height = h ? `${h}px` : '';
  };
  const syncRow = () => {
    fitRow();
    if (section.classList.contains('is-pinned') || reduceQuery.matches) return;
    const i = current();
    paint(i + 1);
    if (count) count.textContent = String(i + 1).padStart(2, '0');
    if (prev) prev.disabled = i <= 0;
    if (next) next.disabled = i >= n - 1;
  };
  let rowTick = false;
  track.addEventListener('scroll', () => {
    if (!rowTick) {
      rowTick = true;
      requestAnimationFrame(() => { rowTick = false; syncRow(); });
    }
  }, { passive: true });
  window.addEventListener('resize', fitRow, { passive: true });
  fitRow();
  prev?.addEventListener('click', () => go(current() - 1));
  next?.addEventListener('click', () => go(current() + 1));
  track.addEventListener('keydown', (e) => {
    if (section.classList.contains('is-pinned')) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); go(current() + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(current() - 1); }
  });

  /* ---------- Pinned stage (900px and up) ---------- */
  let pinned: { scrollTo: (i: number) => void } | null = null;

  stops.forEach((stop, i) => {
    stop.querySelector('a')?.addEventListener('click', (e) => {
      if (reduceQuery.matches) return; // plain anchors in the static stack
      e.preventDefault();
      if (pinned) pinned.scrollTo(i);
      else {
        go(i);
        track.focus({ preventScroll: true });
      }
    });
  });

  const wideQuery = '(min-width: 900px) and (min-height: 600px) and (prefers-reduced-motion: no-preference)';
  const setupPin = () =>
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();
      mm.add(wideQuery, () => {
        section.classList.add('is-pinned');
        const stage = section.querySelector<HTMLElement>('[data-pd-stage]')!;
        gsap.set(panels, { xPercent: 104 }); // parked just past the edge so their leading shadow stays out of view

        const hold = 0.3;
        const tl = gsap.timeline({ defaults: { ease: 'none' } });
        const starts: number[] = [];
        tl.to({}, { duration: hold });
        panels.forEach((panel, i) => {
          starts.push(tl.duration());
          tl.to(panel, { xPercent: 0, duration: 1 });
          tl.to({}, { duration: i === n - 1 ? 0.6 : hold });
        });
        const total = tl.duration();

        const st = ScrollTrigger.create({
          trigger: stage,
          start: 'top top',
          end: () => `+=${Math.round(window.innerHeight * 3.4)}`,
          pin: true,
          scrub: true,
          animation: tl,
          invalidateOnRefresh: true,
          onUpdate: () => {
            const t = tl.time();
            const p = starts.reduce((acc, s0) => acc + Math.min(1, Math.max(0, t - s0)), 0);
            const lastSettled = starts[n - 1] + 1;
            const extra = Math.min(1, Math.max(0, (t - lastSettled) / 0.6));
            paint(p, extra);
          },
        });

        const scrollTo = (i: number) => {
          const t = starts[i] + 1 + 0.05;
          window.scrollTo({ top: st.start + (t / total) * (st.end - st.start), behavior: 'smooth' });
        };
        pinned = { scrollTo };

        const onFocus = (e: FocusEvent) => {
          const panel = (e.target as HTMLElement).closest<HTMLElement>('[data-pd-panel]');
          if (!panel) return;
          const i = Number(panel.dataset.pdPanel);
          const t = tl.time();
          if (t < starts[i] + 1 || (i < n - 1 && t > starts[i + 1])) {
            const target = starts[i] + 1 + 0.05;
            window.scrollTo({ top: st.start + (target / total) * (st.end - st.start) });
          }
        };
        section.addEventListener('focusin', onFocus);

        return () => {
          section.removeEventListener('focusin', onFocus);
          section.classList.remove('is-pinned');
          pinned = null;
          gsap.set(panels, { clearProps: 'transform' });
          syncRow();
        };
      });
    });

  const wide = window.matchMedia(wideQuery);
  let loaded = false;
  const maybeLoad = () => {
    if (wide.matches && !loaded) {
      loaded = true;
      setupPin().catch(() => section.classList.remove('is-pinned'));
    }
  };
  maybeLoad();
  wide.addEventListener('change', maybeLoad);
  syncRow();
});
