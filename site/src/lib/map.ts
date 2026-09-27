/*
  Projection for the Fleurieu map. The land paths in src/data/map/fleurieu-map.json are Natural Earth
  1:10m (public domain) in an equirectangular projection scaled by cos(latitude), 1000 units wide.
  project() places a lat/lng on the same drawing so venue markers sit where the addresses are.
*/
import fleurieu from '../data/map/fleurieu-map.json';
import australia from '../data/map/australia-inset.json';

export const map = fleurieu as {
  viewBox: string;
  bounds: { lon: [number, number]; lat: [number, number] };
  width: number;
  height: number;
  land: string[];
  labels: Record<string, [number, number]>;
  source: string;
};

export const inset = australia as {
  viewBox: string;
  states: Record<string, string>;
  fleurieu_box: [number, number, number, number];
  adelaide: [number, number];
  source: string;
};

/** lat/lng to map units. */
export function project(lat: number, lng: number): { x: number; y: number } {
  const [lon0, lon1] = map.bounds.lon;
  const [latS, latN] = map.bounds.lat; // [-36.15, -34.55]
  const x = ((lng - lon0) / (lon1 - lon0)) * map.width;
  const y = ((latN - lat) / (latN - latS)) * map.height;
  return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 };
}

/**
 * The drawn window. The data covers Yorke Peninsula to the Murray mouth; the venues sit in the middle,
 * so the map crops to Adelaide in the north, Kangaroo Island's east coast in the west and open ocean
 * to the south, leaving a strip of Southern Ocean for the Australia inset. Units are the source's 1000 wide drawing.
 */
export const crop = { x: 150, y: 170, w: 760, h: 800 };

/** Where the Australia inset sits inside the crop, in percent: open ocean south of Encounter Bay. */
export const insetBox = { left: 40, bottom: 1.5, width: 23 };
export const cropViewBox = `${crop.x} ${crop.y} ${crop.w} ${crop.h}`;

/** Percent position inside the crop, for HTML markers laid over the SVG. */
export function toPercent(p: { x: number; y: number }) {
  return { left: ((p.x - crop.x) / crop.w) * 100, top: ((p.y - crop.y) / crop.h) * 100 };
}
