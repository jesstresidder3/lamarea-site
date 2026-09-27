/*
  Accordion max-height fallback for browsers without ::details-content (Accordion.astro).
  Where the pseudo-element is supported, CSS does the work and this script does nothing.
*/
const supported = typeof CSS !== 'undefined' && CSS.supports('selector(::details-content)');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!supported && !reduce) {
  document.documentElement.classList.add('acc-fallback');
  document.querySelectorAll<HTMLDetailsElement>('[data-accordion] details').forEach((details) => {
    const summary = details.querySelector('summary');
    const panel = details.querySelector<HTMLElement>('.acc__panel');
    if (!summary || !panel) return;
    if (!details.open) panel.style.maxHeight = '0px';

    summary.addEventListener('click', (e) => {
      e.preventDefault();
      if (details.open) {
        panel.style.maxHeight = `${panel.scrollHeight}px`;
        requestAnimationFrame(() => (panel.style.maxHeight = '0px'));
        panel.addEventListener('transitionend', () => (details.open = false), { once: true });
      } else {
        // Close siblings sharing a name, as the browser would.
        const name = details.getAttribute('name');
        if (name) {
          document.querySelectorAll<HTMLDetailsElement>(`details[name="${name}"][open]`).forEach((other) => {
            if (other === details) return;
            const p = other.querySelector<HTMLElement>('.acc__panel');
            if (p) p.style.maxHeight = '0px';
            other.open = false;
          });
        }
        details.open = true;
        panel.style.maxHeight = '0px';
        requestAnimationFrame(() => (panel.style.maxHeight = `${panel.scrollHeight}px`));
      }
    });
  });
}

/*
  Open the accordion item a link points at, for example /philosophy#science-nutrition from a pillar's
  "Discover more". Works whether the hash names the details element or something inside it.
*/
function openFromHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return;
  const target = document.getElementById(id);
  const details = target?.closest<HTMLDetailsElement>('details') ?? (target instanceof HTMLDetailsElement ? target : null);
  if (!details) return;
  details.open = true;
  const panel = details.querySelector<HTMLElement>('.acc__panel');
  if (panel && document.documentElement.classList.contains('acc-fallback')) panel.style.maxHeight = 'none';
  requestAnimationFrame(() => details.scrollIntoView({ block: 'start', behavior: reduce ? 'auto' : 'smooth' }));
}
openFromHash();
window.addEventListener('hashchange', openFromHash);
