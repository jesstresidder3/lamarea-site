/*
  Salt and Sun motion, loaded once by layouts/Base.astro on every page.

  1 Inertial scroll        Lenis (lerp 0.09) synced to GSAP ScrollTrigger. Pointer devices only; touch
                           keeps native scroll. Off under reduced motion.
  2 Line reveal headings   h1 and h2 in <main> (and [data-split]) split into masked lines that rise into
                           place once, 1100ms with a 90ms stagger. Opt out with data-no-split on the
                           heading or an ancestor.
  3 Image blind reveal     Lead photographs enter through a clip that lifts like a blind while the
                           photo settles from 1.12 to 1. Opt out with data-motion-off on an ancestor.
  4 Parallax               [data-speed="0.85"] moves an element's photo slower than the page.
  5 Image cursor           [data-cursor="View"] shows a salt disc with that word over the element.
  6 Magnetic pill          [data-magnetic] drifts up to 6px towards the pointer.
  7 Sand wipe              same-site links cover the page with a sand panel before leaving. The
                           arrival half is pure CSS (motion.css), so it cannot stick.
  8 Dawn to dusk tone      body.tone-day: the page ground drifts from morning salt to dusk sand.
  9 Drift                  [data-drift="0.92"] moves the whole element at that scroll speed (below 1
                           it trails the page, above 1 it leads), so paired photographs breathe apart.
  10 Ground drift          sections with data-ground="salt|sand|warm" ease the page ground towards
                           their tone as they reach the middle of the screen (P4 handover). Off on
                           pages with body.tone-day, which already drift.

  Reduced motion: only the wipe is skipped and everything renders at rest. No scroll hijack.
*/
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

const root = document.documentElement;
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

gsap.registerPlugin(ScrollTrigger, SplitText);

declare global {
  interface Window { __lenis?: Lenis; }
}

const settle = 'power4.out';      // close to cubic-bezier(0.22, 1, 0.36, 1)
const tide = 'power2.inOut';      // close to cubic-bezier(0.65, 0, 0.35, 1)

/* 1 Inertial scroll ------------------------------------------------------ */
if (!reduce && finePointer) {
  const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: { offset: -80 } });
  window.__lenis = lenis;
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);
}

const excluded = (el: Element) => Boolean(el.closest('[data-motion-off], .menu, [data-menu]'));

/* 2 Line reveal headings ------------------------------------------------- */
function splitHeadings() {
  const heads = Array.from(document.querySelectorAll<HTMLElement>('main h1, main h2, [data-split]')).filter(
    (h) => !h.closest('[data-no-split]') && !excluded(h) && h.offsetParent !== null && h.textContent?.trim(),
  );
  if (reduce) {
    heads.forEach((h) => h.classList.add('is-split'));
    return;
  }
  heads.forEach((h) => {
    SplitText.create(h, {
      type: 'lines',
      mask: 'lines',
      linesClass: 'split-line',
      autoSplit: true,
      onSplit(self) {
        h.classList.add('is-split');
        const inView = h.getBoundingClientRect().top < window.innerHeight * 0.92;
        return gsap.from(self.lines, {
          yPercent: 108,
          duration: 1.1,
          stagger: 0.09,
          ease: settle,
          delay: inView ? 0.15 : 0,
          scrollTrigger: inView ? undefined : { trigger: h, start: 'top 88%', once: true },
        });
      },
    });
  });
}

/* 3 Image blind reveal --------------------------------------------------- */
function blinds() {
  if (reduce) return;
  const figs = Array.from(document.querySelectorAll<HTMLElement>('main .media--real')).filter(
    (f) => !excluded(f) && !f.closest('[data-hero], .hero, [data-no-blind]'),
  );
  figs.forEach((fig) => {
    const r = fig.getBoundingClientRect();
    if (r.top < window.innerHeight) return; // already on screen at load: show it as it is
    const img = fig.querySelector('img, video');
    const parallax = fig.closest('[data-speed]');
    gsap.set(fig, { clipPath: 'inset(100% 0% 0% 0%)' });
    if (img && !parallax) gsap.set(img, { scale: 1.12 });
    ScrollTrigger.create({
      trigger: fig,
      start: 'top 82%',
      once: true,
      onEnter: () => {
        gsap.to(fig, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: tide, clearProps: 'clipPath' });
        if (img && !parallax) gsap.to(img, { scale: 1, duration: 1.8, ease: settle, clearProps: 'scale' });
      },
    });
  });
}

/* 4 Parallax ------------------------------------------------------------- */
function parallax() {
  if (reduce) return;
  document.querySelectorAll<HTMLElement>('[data-speed]').forEach((host) => {
    const speed = Number(host.dataset.speed) || 0.85;
    const amount = (1 - speed) * 60; // 0.85 moves the photo 9 per cent over the element's passage
    const target = host.querySelector<HTMLElement>('img, video') ?? host;
    gsap.set(target, { scale: 1 + amount / 100 + 0.01 });
    gsap.fromTo(
      target,
      { yPercent: -amount / 2 },
      { yPercent: amount / 2, ease: 'none', scrollTrigger: { trigger: host, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  });
}

/* 4b Framed openings: [data-widen] opens from an inset frame to full bleed while its photo settles
   from 1.08 to 1 (the zoom Belle loved on The Tailor). Frames on screen at load start at scroll 0 and
   open over 60 per cent of a screen; later frames open as they rise through the viewport. */
function widen() {
  if (reduce) return;
  const wide = window.matchMedia('(min-width: 700px)').matches;
  document.querySelectorAll<HTMLElement>('[data-widen]').forEach((el) => {
    if (!wide) return;
    const inset = el.dataset.widen || '7';
    const media = el.querySelector<HTMLElement>('img, video');
    const atLoad = el.getBoundingClientRect().top < window.innerHeight;
    const st = atLoad
      ? { trigger: document.body, start: 0, end: () => `+=${window.innerHeight * 0.6}`, scrub: 0.6 }
      : { trigger: el, start: 'top 90%', end: 'top 25%', scrub: 0.6 };
    const tl = gsap.timeline({ scrollTrigger: st, defaults: { ease: 'none' } });
    tl.fromTo(el, { clipPath: `inset(0% ${inset}% 0% ${inset}%)` }, { clipPath: 'inset(0% 0% 0% 0%)' }, 0);
    if (media) tl.fromTo(media, { scale: 1.08 }, { scale: 1 }, 0);
  });
}

/* 5 Image cursor --------------------------------------------------------- */
function cursor() {
  if (reduce || !finePointer) return;
  const disc = document.createElement('div');
  disc.className = 'cursor-disc';
  disc.setAttribute('aria-hidden', 'true');
  document.body.appendChild(disc);
  let x = 0, y = 0, cx = 0, cy = 0, on = false, running = false;
  const loop = () => {
    cx += (x - cx) * 0.15;
    cy += (y - cy) * 0.15;
    disc.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    if (on || Math.abs(x - cx) > 0.3 || Math.abs(y - cy) > 0.3) requestAnimationFrame(loop);
    else running = false;
  };
  const kick = () => { if (!running) { running = true; requestAnimationFrame(loop); } };
  document.addEventListener('pointermove', (e) => {
    x = e.clientX;
    y = e.clientY;
    const host = (e.target as Element | null)?.closest?.<HTMLElement>('[data-cursor]');
    if (host) {
      if (!on) { cx = x; cy = y; }
      disc.textContent = host.dataset.cursor || 'View';
      disc.classList.add('is-on');
      on = true;
    } else if (on) {
      disc.classList.remove('is-on');
      on = false;
    }
    kick();
  }, { passive: true });
  document.addEventListener('pointerleave', () => { disc.classList.remove('is-on'); on = false; });
}

/* 6 Magnetic pill -------------------------------------------------------- */
function magnetic() {
  if (reduce || !finePointer) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      el.style.translate = `${(dx * 6).toFixed(1)}px ${(dy * 4 - 2).toFixed(1)}px`;
    });
    el.addEventListener('pointerleave', () => { el.style.translate = ''; });
  });
}

/* 7 Sand wipe ------------------------------------------------------------ */
function wipe() {
  if (reduce) return;
  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as Element | null)?.closest?.('a');
    if (!a || !a.href || a.target || a.hasAttribute('download') || a.dataset.noWipe !== undefined) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname && url.search === location.search) return; // same page or a hash
    if (!/^https?:$/.test(url.protocol)) return;
    e.preventDefault();
    try { sessionStorage.setItem('lm-wipe', '1'); } catch {}
    root.classList.add('wipe-out');
    window.setTimeout(() => { location.href = url.href; }, 620);
  });
  // Back and forward from the page cache: never return to a covered page.
  window.addEventListener('pageshow', (e) => { if (e.persisted) root.classList.remove('wipe-out'); });
}

/* 8 Dawn to dusk tone ---------------------------------------------------- */
function dayTone() {
  if (!document.body.classList.contains('tone-day')) return;
  const stops = ['#faf9f5', '#f8f3e4', '#f4ebd2', '#f0e5c7'];
  const hex = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const cols = stops.map(hex);
  const mix = (p: number) => {
    const seg = Math.min(cols.length - 2, Math.floor(p * (cols.length - 1)));
    const t = p * (cols.length - 1) - seg;
    const c = cols[seg].map((v, i) => Math.round(v + (cols[seg + 1][i] - v) * t));
    return `rgb(${c.join(' ')})`;
  };
  if (reduce) {
    document.body.style.setProperty('--page-tone', stops[1]);
    return;
  }
  ScrollTrigger.create({
    trigger: document.body,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: (st) => document.body.style.setProperty('--page-tone', mix(st.progress)),
  });
}

/* 9 Drift ---------------------------------------------------------------- */
function drift() {
  if (reduce) return;
  document.querySelectorAll<HTMLElement>('[data-drift]').forEach((el) => {
    const speed = Number(el.dataset.drift) || 1;
    if (speed === 1) return;
    const range = () => (1 - speed) * window.innerHeight * 0.5;
    gsap.fromTo(el, { y: () => -range() }, {
      y: () => range(),
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
    });
  });
}

/* 10 Ground drift -------------------------------------------------------- */
function groundDrift() {
  if (document.body.classList.contains('tone-day')) return;
  const grounds = Array.from(document.querySelectorAll<HTMLElement>('main [data-ground]'));
  if (!grounds.length) return;
  const tones: Record<string, string> = { salt: '#faf9f5', sand: '#f8f3e4', warm: '#f5efda', deep: '#f0e5c7' };
  const body = document.body;
  body.classList.add('tone-ground');
  const base = tones.sand;
  body.style.setProperty('--page-tone', base);
  const to = (tone: string) => {
    if (reduce) { body.style.setProperty('--page-tone', tone); return; }
    gsap.to(body, { '--page-tone': tone, duration: 1.2, ease: tide, overwrite: 'auto' });
  };
  grounds.forEach((g) => {
    const tone = tones[g.dataset.ground ?? 'sand'] ?? base;
    ScrollTrigger.create({
      trigger: g,
      start: 'top 55%',
      end: 'bottom 45%',
      onEnter: () => to(tone),
      onEnterBack: () => to(tone),
      onLeaveBack: (st) => { if (st.trigger === grounds[0]) to(base); },
    });
  });
}

function init() {
  splitHeadings();
  blinds();
  parallax();
  widen();
  cursor();
  magnetic();
  wipe();
  dayTone();
  drift();
  groundDrift();
  // Late layout changes (fonts, images) move trigger points: refresh once everything has loaded.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}

if (document.fonts && document.fonts.status !== 'loaded') {
  // Split after the fonts arrive so lines break where the reader will see them break.
  Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1200))]).then(init);
} else {
  init();
}
