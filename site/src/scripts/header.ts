/*
  Header behaviour, Salt and Sun.
  - 'top': clear over the page's salt top.
  - 'strip': once the page has moved 24px, a salt strip with a hairline.
  - 'hidden': scrolling down past 140px slides it away; any scroll up brings it back (600ms tide ease).
    Keyboard focus inside it always shows it (CSS :focus-within). Never hidden while the menu is open.
  - Sets html[data-past-hero] for any older styles that still read it.
*/
const header = document.querySelector<HTMLElement>('[data-site-header]');
const root = document.documentElement;

if (header) {
  let lastY = window.scrollY;
  let ticking = false;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const update = () => {
    ticking = false;
    const y = Math.max(0, window.scrollY);
    const down = y > lastY + 2;
    const up = y < lastY - 2;
    let state = header.dataset.state ?? 'top';
    if (y <= 24) state = 'top';
    else if (down && y > 140 && !root.classList.contains('menu-open') && !reduce) state = 'hidden';
    else if (up || state === 'top') state = 'strip';
    header.dataset.state = state;
    root.toggleAttribute('data-past-hero', y > window.innerHeight * 0.6);
    if (down || up) lastY = y;
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
}
