/*
  Client-side controller for every horizontal track (Slider, PaneSlider, Testimonials, JournalCards).
  Owner: foundation systems builder. Import it from a component <script>.

  Markup it expects inside `root`:
    [data-track]            the scroll-snap list (overflow-x: auto)
    [data-prev] [data-next] fine line arrow buttons
    [data-progress]         the 1px rule, holding [data-progress-bar]
    [data-count-current]    optional counter numerals ("03"), [data-count-total]

  Behaviour
  - The progress segment is as wide as the visible fraction and sits at the scroll fraction, updated
    live from scrollLeft, so it follows a finger or trackpad exactly (visual study B7).
  - Arrows step one item with a 600ms soft ease (no overshoot). Reduced motion jumps.
  - Mouse users can drag the track. Touch uses native scrolling, no autoplay anywhere.
  - Items that are only partly in view get data-peek, so captions can rest quieter (Aman's peek).
  - Dispatches 'track:change' on root with detail { index, total } when the leading item changes.
  - Listens for 'track:refresh' on root (after a filter hides slides) and re-counts from the start.
*/

const EASE_SOFT = (t: number) => {
  // cubic-bezier(0.22, 1, 0.36, 1) approximated: a long ease-out that never overshoots
  return 1 - Math.pow(1 - t, 3.2);
};

export interface TrackApi {
  go: (index: number) => void;
  step: (dir: 1 | -1) => void;
  refresh: () => void;
  index: () => number;
}

export function initTrack(root: HTMLElement): TrackApi | null {
  const track = root.querySelector<HTMLElement>('[data-track]');
  if (!track) return null;
  const prevs = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-prev]'));
  const nexts = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-next]'));
  const bar = root.querySelector<HTMLElement>('[data-progress-bar]');
  const rule = root.querySelector<HTMLElement>('[data-progress]');
  const current = root.querySelectorAll<HTMLElement>('[data-count-current]');
  const totalEls = root.querySelectorAll<HTMLElement>('[data-count-total]');
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  let items: HTMLElement[] = [];
  let active = -1;
  let anim = 0;

  const collect = () => {
    items = (Array.from(track.children) as HTMLElement[]).filter((el) => getComputedStyle(el).display !== 'none');
    totalEls.forEach((el) => (el.textContent = String(items.length).padStart(2, '0')));
  };

  const padStart = () => parseFloat(getComputedStyle(track).scrollPaddingLeft) || 0;
  const maxScroll = () => Math.max(0, track.scrollWidth - track.clientWidth);
  const itemLeft = (el: HTMLElement) =>
    el.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft - padStart();

  const leadingIndex = () => {
    if (!items.length) return 0;
    const x = track.scrollLeft;
    if (x >= maxScroll() - 2) {
      // at the end: the last item that starts inside the view leads, so the counter can reach the total
      return items.length - 1;
    }
    let best = 0;
    let bestD = Infinity;
    items.forEach((el, i) => {
      const d = Math.abs(itemLeft(el) - x);
      if (d < bestD) { bestD = d; best = i; }
    });
    return best;
  };

  const paint = () => {
    const max = maxScroll();
    const x = track.scrollLeft;
    if (bar && rule) {
      const w = rule.clientWidth;
      const frac = track.scrollWidth > 0 ? Math.min(1, track.clientWidth / track.scrollWidth) : 1;
      const bw = Math.max(24, w * frac);
      const pos = max > 0 ? (x / max) * (w - bw) : 0;
      bar.style.width = `${bw}px`;
      bar.style.transform = `translateX(${pos}px)`;
      rule.toggleAttribute('data-static', max <= 1);
    }
    prevs.forEach((b) => b.setAttribute('aria-disabled', String(x <= 2)));
    nexts.forEach((b) => b.setAttribute('aria-disabled', String(x >= max - 2)));
    const view = track.getBoundingClientRect();
    items.forEach((el) => {
      const r = el.getBoundingClientRect();
      const inView = r.left >= view.left - 2 && r.right <= view.right + 2;
      el.toggleAttribute('data-peek', !inView);
    });
    const idx = leadingIndex();
    if (idx !== active) {
      active = idx;
      items.forEach((el, i) => el.toggleAttribute('data-active', i === idx));
      current.forEach((el) => (el.textContent = String(idx + 1).padStart(2, '0')));
      root.dispatchEvent(new CustomEvent('track:change', { detail: { index: idx, total: items.length } }));
    }
  };

  let raf = 0;
  const onScroll = () => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(paint);
  };

  const scrollToX = (to: number) => {
    to = Math.max(0, Math.min(maxScroll(), to));
    cancelAnimationFrame(anim);
    if (reduce.matches) {
      track.scrollLeft = to;
      return;
    }
    const from = track.scrollLeft;
    const dist = to - from;
    if (Math.abs(dist) < 1) return;
    const dur = 600;
    const t0 = performance.now();
    track.style.scrollSnapType = 'none';
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      track.scrollLeft = from + dist * EASE_SOFT(t);
      if (t < 1) anim = requestAnimationFrame(tick);
      else track.style.scrollSnapType = '';
    };
    anim = requestAnimationFrame(tick);
  };

  const go = (i: number) => {
    if (!items.length) return;
    i = Math.max(0, Math.min(items.length - 1, i));
    scrollToX(itemLeft(items[i]));
  };
  const step = (dir: 1 | -1) => {
    const idx = leadingIndex();
    // at the end, stepping back returns to the item before the visible set
    go(idx + dir);
  };

  prevs.forEach((b) => b.addEventListener('click', () => { if (b.getAttribute('aria-disabled') !== 'true') step(-1); }));
  nexts.forEach((b) => b.addEventListener('click', () => { if (b.getAttribute('aria-disabled') !== 'true') step(1); }));
  track.addEventListener('scroll', onScroll, { passive: true });

  // Mouse drag (touch and trackpads scroll natively)
  let dragging = false;
  let moved = false;
  let startX = 0;
  let startScroll = 0;
  track.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || e.button !== 0) return;
    dragging = true;
    moved = false;
    startX = e.clientX;
    startScroll = track.scrollLeft;
    cancelAnimationFrame(anim);
  });
  window.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const dx = e.clientX - startX;
    if (!moved && Math.abs(dx) > 6) {
      moved = true;
      track.style.scrollSnapType = 'none';
      track.setAttribute('data-dragging', '');
    }
    if (moved) track.scrollLeft = startScroll - dx;
  });
  window.addEventListener('pointerup', () => {
    if (!dragging) return;
    dragging = false;
    if (moved) {
      track.removeAttribute('data-dragging');
      go(leadingIndex());
    }
  });
  track.addEventListener('click', (e) => {
    if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
  }, true);
  track.addEventListener('dragstart', (e) => e.preventDefault());

  const refresh = () => {
    collect();
    active = -1;
    paint();
  };
  const ro = new ResizeObserver(() => paint());
  ro.observe(track);
  refresh();
  // Filters that hide slides dispatch 'track:refresh' on the root; the track re-counts and returns to the start.
  root.addEventListener('track:refresh', () => {
    cancelAnimationFrame(anim);
    track.scrollLeft = 0;
    refresh();
  });

  return { go, step, refresh, index: () => Math.max(active, 0) };
}
