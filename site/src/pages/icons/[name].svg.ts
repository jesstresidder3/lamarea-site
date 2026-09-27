/*
  Belle's ten pillar icons as small static SVG files, one per icon, built from
  src/assets/brand/icons at build time (QA m15). components/base/Icon.astro draws each icon with
  <use href="/icons/<name>.svg#i">, so a page that repeats an icon ships its paths once, cached,
  instead of inline in the HTML every time. Colour still follows `color` (currentColor), and the
  hairline weight is set on the <svg> in Icon.astro (stroke-width inherits into the <use> tree;
  vector-effect does not inherit, so it is written onto each stroked element here).
*/
import type { APIRoute, GetStaticPaths } from 'astro';

const files = import.meta.glob('../../assets/brand/icons/*.svg', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export const getStaticPaths = (() =>
  Object.entries(files).map(([path, svg]) => ({
    params: { name: path.split('/').pop()!.replace(/\.svg$/, '') },
    props: { svg },
  }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => {
  const svg = String(props.svg);
  const viewBox = /viewBox="([^"]+)"/.exec(svg)?.[1] ?? '0 0 64 64';
  const inner = svg
    .replace(/^[\s\S]*?<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/\sstroke-width="[^"]*"/g, '')
    .replace(/<(path|circle|ellipse|line|polyline|polygon|rect)(\s[^>]*?stroke="[^"]*"[^>]*?)(\/?)>/g, '<$1$2 vector-effect="non-scaling-stroke"$3>');
  const body = `<svg xmlns="http://www.w3.org/2000/svg"><symbol id="i" viewBox="${viewBox}">${inner}</symbol></svg>`;
  return new Response(body, { headers: { 'content-type': 'image/svg+xml' } });
};
