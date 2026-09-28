/*
  Home opening choreography (components/hero/Opening.astro).
  Wide screens with a fine pointer and motion allowed: the stage is sticky for 2.4 screens of scroll.
    0.00 to 0.24  Belle's line lifts away, each line at its own speed; the scene eases in by 4 per cent
    0.16 to 0.62  The scene parts down the middle: the left half draws into an arch, the right half
                  into a frame set higher. Each half turns into its own world as it settles (0.40 to 0.66)
    0.58 to 0.80  The question above the frames, each world's name and line, and the "or" in the seam
    0.80 to 1.00  Held, so the visitor can choose
  Keyboard focus on a world scrolls to where the worlds have settled.
  Everywhere: leaning towards a world (hover or focus) changes the line above the frames.
  Elsewhere the CSS layout stands on its own and the frames open from their own sides.
*/
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const root = document.querySelector<HTMLElement>('[data-opening]');

if (root) {
  const q = <T extends Element = HTMLElement>(sel: string) => root.querySelector<T>(sel);
  const qa = <T extends Element = HTMLElement>(sel: string) => Array.from(root.querySelectorAll<T>(sel));

  const lines = qa('[data-op-line]');
  const chrome = q('[data-op-chrome]');
  const shade = q('[data-op-shade]');
  const live = q('[data-op-scene-live]');
  const frameA = q('[data-op-frame="a"]');
  const frameB = q('[data-op-frame="b"]');
  const labels = qa('[data-op-label]');
  const ask = q('[data-op-ask]');
  const or = q('[data-op-or]');
  const sceneImgs = qa('[data-op-scene-img]');
  const worldImgs = qa('[data-op-world-img]');
  const shades = qa('.op__frame-shade');

  // The line above the frames follows whichever world the visitor leans towards.
  const askTexts = qa('[data-ask]');
  const lean = (key: string) => askTexts.forEach((t) => t.classList.toggle('is-on', t.dataset.ask === key));
  qa('[data-op-world]').forEach((w) => {
    const key = w.dataset.opWorld!;
    w.addEventListener('pointerenter', () => lean(key));
    w.addEventListener('pointerleave', () => lean('idle'));
    w.addEventListener('focus', () => lean(key));
    w.addEventListener('blur', () => lean('idle'));
  });

  const mm = gsap.matchMedia();
  const wide = '(min-width: 900px) and (min-height: 600px) and (hover: hover) and (pointer: fine)';

  mm.add(`${wide} and (prefers-reduced-motion: no-preference)`, () => {
    root.classList.add('is-pinned');
    ScrollTrigger.refresh();

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.9,
        invalidateOnRefresh: true,
        onUpdate: (st) => root.classList.toggle('is-settled', st.progress > 0.74),
      },
    });

    // Act one: the line lifts away, three speeds, and the scene eases in.
    lines.forEach((l, i) => tl.to(l, { yPercent: -60 - i * 45, opacity: 0, duration: 0.2 + i * 0.02 }, 0.01));
    if (chrome) tl.to(chrome, { opacity: 0, y: -20, duration: 0.12 }, 0);
    if (shade) tl.to(shade, { opacity: 0, duration: 0.2 }, 0.14);
    // The moving footage hands over to the still just before the scene parts.
    if (live) tl.to(live, { opacity: 0, duration: 0.07 }, 0.1);
    sceneImgs.forEach((el) => tl.fromTo(el.querySelector('img'), { scale: 1.04 }, { scale: 1, duration: 0.3 }, 0));

    // Act two: the scene parts. The halves meet on the centre line, then draw into their frames.
    if (frameA) tl.fromTo(frameA,
      { clipPath: 'inset(0vh 50vw 0vh 0vw round 0vw 0vw 0vw 0vw)' },
      { clipPath: 'inset(18vh 55vw 5vh 6vw round 19.5vw 19.5vw 0vw 0vw)', duration: 0.46, ease: 'power3.inOut' }, 0.16);
    if (frameB) tl.fromTo(frameB,
      { clipPath: 'inset(0vh 0vw 0vh 50vw round 0vw 0vw 0vw 0vw)' },
      { clipPath: 'inset(10vh 6vw 17vh 55vw round 0vw 0vw 0vw 0vw)', duration: 0.46, ease: 'power3.inOut' }, 0.19);
    // The scene drifts outwards with its half, so each frame keeps the part of the coast it holds.
    if (sceneImgs[0]) tl.to(sceneImgs[0], { xPercent: -3, duration: 0.46, ease: 'power2.inOut' }, 0.16);
    if (sceneImgs[1]) tl.to(sceneImgs[1], { xPercent: 3, duration: 0.46, ease: 'power2.inOut' }, 0.19);

    // Each half turns into its own world.
    sceneImgs.forEach((el) => tl.to(el, { opacity: 0, duration: 0.2 }, 0.42));
    worldImgs.forEach((el, i) => {
      tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.4 + i * 0.03);
      tl.fromTo(el.querySelector('img'), { scale: 1.16 }, { scale: 1, duration: 0.34, ease: 'power2.out' }, 0.4 + i * 0.03);
    });
    tl.fromTo(shades, { opacity: 0 }, { opacity: 1, duration: 0.16 }, 0.52);

    // Act three: the words arrive.
    if (ask) tl.fromTo(ask, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.16, ease: 'power2.out' }, 0.58);
    labels.forEach((l, i) => tl.fromTo(l, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.18, ease: 'power2.out' }, 0.6 + i * 0.05));
    if (or) tl.fromTo(or, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.14 }, 0.68);
    tl.to({}, { duration: 0.2 });

    const onFocus = () => {
      const st = tl.scrollTrigger;
      if (!st || root.classList.contains('is-settled')) return;
      const lenis = (window as Window & { __lenis?: { scrollTo: (y: number, o?: object) => void } }).__lenis;
      const target = st.start + (st.end - st.start) * 0.85;
      if (lenis) lenis.scrollTo(target, { immediate: true });
      else window.scrollTo({ top: target });
    };
    root.addEventListener('focusin', onFocus);

    return () => {
      root.classList.remove('is-pinned', 'is-settled');
      root.removeEventListener('focusin', onFocus);
    };
  });

  // Elsewhere, with motion allowed: each frame opens from its own side as it arrives.
  mm.add(`(prefers-reduced-motion: no-preference) and (not (${wide}))`, () => {
    [frameA, frameB].forEach((f, i) => {
      if (!f) return;
      gsap.fromTo(f,
        { clipPath: i ? 'inset(0% 0% 0% 100%)' : 'inset(0% 100% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power3.inOut', scrollTrigger: { trigger: f, start: 'top 85%', once: true } });
      const img = f.querySelector('[data-op-world-img] img');
      if (img) gsap.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 2, ease: 'power2.out', scrollTrigger: { trigger: f, start: 'top 85%', once: true } });
    });
  });
}
