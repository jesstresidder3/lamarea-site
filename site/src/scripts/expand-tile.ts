/*
  ExpandTile behaviour: one tile open at a time per group, toggled by its button, closed by Escape.
*/
document.querySelectorAll<HTMLElement>('[data-expand-tiles]').forEach((group) => {
  const tiles = Array.from(group.querySelectorAll<HTMLElement>('[data-tile]'));

  const set = (tile: HTMLElement, open: boolean) => {
    tile.classList.toggle('is-open', open);
    tile.querySelector('.tile__toggle')?.setAttribute('aria-expanded', String(open));
  };

  tiles.forEach((tile) => {
    const button = tile.querySelector<HTMLButtonElement>('.tile__toggle');
    button?.addEventListener('click', () => {
      const willOpen = !tile.classList.contains('is-open');
      tiles.forEach((t) => set(t, false));
      set(tile, willOpen);
    });
    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && tile.classList.contains('is-open')) {
        set(tile, false);
        button?.focus();
      }
    });
  });
});
