type Scroller = { stop(): void; start(): void };
const scroller = () => (window as unknown as { __lenis?: Scroller }).__lenis;
/*
  Menu overlay behaviour (visual study B6).
  Opens from any [data-menu-open] control, closes from [data-menu-close], Escape or a link inside.
  Locks page scroll without layout shift (the scrollbar width is kept as padding), makes the page
  behind inert, traps focus inside the overlay and returns focus to the control that opened it.
  Primary links crossfade the photograph in the right column.
*/
const menu = document.querySelector<HTMLElement>('[data-menu]');
const root = document.documentElement;

if (menu) {
  const openers = Array.from(document.querySelectorAll<HTMLElement>('[data-menu-open]'));
  let lastOpener: HTMLElement | null = null;

  const background = () =>
    Array.from(document.body.children).filter((el): el is HTMLElement => el instanceof HTMLElement && el !== menu && el.tagName !== 'SCRIPT');

  const focusables = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])')).filter(
      (el) => el.offsetParent !== null || el === document.activeElement,
    );

  const open = (opener?: HTMLElement | null) => {
    if (menu.dataset.state === 'open') return;
    lastOpener = opener ?? null;
    const sbw = window.innerWidth - root.clientWidth;
    root.style.setProperty('--sbw', `${Math.max(0, sbw)}px`);
    root.classList.add('menu-open');
    scroller()?.stop();
    background().forEach((el) => el.setAttribute('inert', ''));
    menu.removeAttribute('inert');
    menu.dataset.state = 'open';
    openers.forEach((o) => o.setAttribute('aria-expanded', 'true'));
    const first = menu.querySelector<HTMLElement>('.menu__link') ?? focusables()[0];
    requestAnimationFrame(() => first?.focus({ preventScroll: true }));
  };

  const close = (restoreFocus = true) => {
    if (menu.dataset.state !== 'open') return;
    menu.dataset.state = 'closed';
    menu.setAttribute('inert', '');
    background().forEach((el) => el.removeAttribute('inert'));
    root.classList.remove('menu-open');
    scroller()?.start();
    root.style.removeProperty('--sbw');
    openers.forEach((o) => o.setAttribute('aria-expanded', 'false'));
    if (restoreFocus) lastOpener?.focus({ preventScroll: true });
  };

  openers.forEach((o) => o.addEventListener('click', () => open(o)));
  menu.querySelectorAll<HTMLElement>('[data-menu-close]').forEach((c) => c.addEventListener('click', () => close()));

  // A link to the page already open (or a hash) closes the overlay rather than leaving it over the page.
  menu.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest('a');
    if (a && a.getAttribute('href') && new URL(a.href).pathname === location.pathname) close(false);
  });

  document.addEventListener('keydown', (e) => {
    if (menu.dataset.state !== 'open') return;
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === 'Tab') {
      const items = focusables();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });

  // Photograph crossfade per primary link (hover and keyboard focus).
  const figures = Array.from(menu.querySelectorAll<HTMLElement>('[data-menu-figure]'));
  const show = (slot?: string | null) => {
    if (!slot) return;
    figures.forEach((f) => f.classList.toggle('is-active', f.dataset.menuFigure === slot));
  };
  menu.querySelectorAll<HTMLElement>('[data-menu-media]').forEach((link) => {
    link.addEventListener('pointerenter', () => show(link.dataset.menuMedia));
    link.addEventListener('focus', () => show(link.dataset.menuMedia));
  });

  // Leaving desktop width with the menu open keeps it usable; nothing to undo. Close on page hide.
  window.addEventListener('pagehide', () => close(false));
}
