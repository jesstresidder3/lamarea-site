/*
  Header behaviour (build spec section 12, visual study B5).
  - Over-media pages: the header stays transparent until the hero ([data-hero], or the first element
    in <main>) has passed beneath it, then becomes the compact sand strip.
  - Solid pages: the strip turns compact once the page has scrolled a little.
  - The header never hides (section 12 overrides the earlier hide-on-scroll).
  - Sets html[data-past-hero], which shows the phone "Plan your day" bar. Solid pages have no hero,
    so the bar shows from the start there.
*/
const header = document.querySelector<HTMLElement>('[data-site-header]');
const root = document.documentElement;

if (header) {
  const overMedia = root.dataset.headerTone === 'over-media';
  let heroBottom = 0;
  let ticking = false;

  const measure = () => {
    if (!overMedia) {
      heroBottom = 0;
      return;
    }
    const hero = document.querySelector<HTMLElement>('[data-hero]') ?? document.querySelector<HTMLElement>('main > :first-child');
    const h = header.offsetHeight;
    heroBottom = hero ? Math.max(0, hero.getBoundingClientRect().bottom + window.scrollY - h) : Math.round(window.innerHeight * 0.6);
  };

  const update = () => {
    ticking = false;
    const y = Math.max(0, window.scrollY);
    const past = overMedia ? y > heroBottom : true;
    if (overMedia) header.dataset.state = past ? 'solid' : 'over';
    header.classList.toggle('is-compact', overMedia ? past : y > 24);
    root.toggleAttribute('data-past-hero', past);
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  measure();
  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => { measure(); onScroll(); }, { passive: true });
  window.addEventListener('load', () => { measure(); update(); });
}
