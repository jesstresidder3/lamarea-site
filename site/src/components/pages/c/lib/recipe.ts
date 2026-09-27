/*
  Reads a migrated recipe post into its parts so the page can set ingredients and method properly and
  write Recipe schema (plan/11 4.19). Belle's three Wix recipes are written three different ways
  (a markdown list, one ingredient per paragraph, "Serves | 4" style lines), so this reads by line and
  keeps every word as published. If a post cannot be read as a recipe, parseRecipe returns null and
  the page renders the body as an article instead.
*/

export interface IngredientGroup { title: string | null; items: string[] }
export interface Recipe {
  intro: string[];
  serves: string | null;
  prep: string | null;
  cook: string | null;
  groups: IngredientGroup[];
  steps: string[];
  notes: string[];
  brands: string[];
  nutrition: string[];
}

const strip = (s: string) => s.replace(/\*\*|__/g, '').replace(/^\*(.*)\*$/, '$1').trim();
const tidyTime = (s: string) =>
  strip(s)
    .replace(/\bMinutes?\b/g, 'minutes')
    .replace(/\bmins?\b/g, 'minutes')
    .trim();

type Mode = 'intro' | 'ingredients' | 'method' | 'notes' | 'brands' | 'nutrition';

function headingOf(line: string): string | null {
  if (/^#{1,6}\s/.test(line)) return strip(line.replace(/^#{1,6}\s+/, '')).replace(/:$/, '');
  if (/^\*\*[^*]+\*\*$/.test(line)) return strip(line).replace(/:$/, '');
  // A short plain line ending in a colon ("For the Baking Tray:", "Brand Recommendations:")
  if (/^[A-Za-z][^:|]{1,38}:$/.test(line)) return line.replace(/:$/, '').trim();
  return null;
}

export function parseRecipe(body: string): Recipe | null {
  const r: Recipe = { intro: [], serves: null, prep: null, cook: null, groups: [], steps: [], notes: [], brands: [], nutrition: [] };
  let mode: Mode = 'intro';
  const group = () => {
    if (!r.groups.length) r.groups.push({ title: null, items: [] });
    return r.groups[r.groups.length - 1];
  };

  for (const raw of body.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line) continue;

    // Servings and times, wherever they sit
    let m = strip(line).match(/^(\d+)\s+servings$/i) || line.match(/^serves\s*\|\s*(\d+)/i);
    if (m) { r.serves = m[1]; continue; }
    m = line.match(/^prep time:\s*(?:prep\s*\|\s*)?(.+)$/i);
    if (m) { r.prep = tidyTime(m[1]); continue; }
    m = line.match(/^cook(?:ing)? time:\s*(.+)$/i) || line.match(/^cook\s*\|\s*(.+)$/i);
    if (m) { r.cook = tidyTime(m[1]); continue; }

    const h = headingOf(line);
    if (h) {
      if (/^ingredients$/i.test(h)) { mode = 'ingredients'; r.groups.push({ title: null, items: [] }); continue; }
      if (/^(instructions|directions|procedure|method)$/i.test(h)) { mode = 'method'; continue; }
      if (/^notes?$/i.test(h)) { mode = 'notes'; continue; }
      if (/brand recommendations/i.test(h)) { mode = 'brands'; continue; }
      if (/^nutrition/i.test(h)) { mode = 'nutrition'; continue; }
      if (mode === 'ingredients') {
        const g = group();
        if (!g.items.length && !g.title) g.title = h;
        else r.groups.push({ title: h, items: [] });
        continue;
      }
    }

    const item = line.match(/^(?:[-*]|\d+\.)\s+(.*)$/);
    const text = strip(item ? item[1] : line);
    switch (mode) {
      case 'intro': r.intro.push(text); break;
      case 'ingredients': group().items.push(text); break;
      case 'method': r.steps.push(text); break;
      case 'notes': r.notes.push(text); break;
      case 'brands': r.brands.push(text); break;
      case 'nutrition': r.nutrition.push(text); break;
    }
  }

  r.groups = r.groups.filter((g) => g.items.length);
  if (!r.groups.length || !r.steps.length) return null;
  return r;
}

/** "15 to 20 minutes" to "PT20M" (schema takes one value, so a range uses its upper end). */
export function isoMinutes(s: string | null): string | undefined {
  if (!s) return undefined;
  const nums = (s.match(/\d+/g) ?? []).map(Number);
  if (!nums.length) return undefined;
  return `PT${Math.max(...nums)}M`;
}

export function recipeJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  datePublished: string;
  author: { name: string; url?: string } | null;
  recipe: Recipe;
  category: string;
}) {
  const { recipe } = opts;
  const calories = recipe.nutrition.join(' ').match(/(\d+)\s*cal/i);
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    datePublished: opts.datePublished,
    author: opts.author ? { '@type': 'Person', name: opts.author.name, url: opts.author.url } : { '@type': 'Organization', name: 'La maréa' },
    recipeCategory: opts.category,
    recipeCuisine: 'Mediterranean',
    ...(recipe.serves ? { recipeYield: `${recipe.serves} servings` } : {}),
    ...(isoMinutes(recipe.prep) ? { prepTime: isoMinutes(recipe.prep) } : {}),
    ...(isoMinutes(recipe.cook) ? { cookTime: isoMinutes(recipe.cook) } : {}),
    recipeIngredient: recipe.groups.flatMap((g) => g.items),
    recipeInstructions: recipe.steps.map((s) => ({ '@type': 'HowToStep', text: s })),
    ...(calories ? { nutrition: { '@type': 'NutritionInformation', calories: `${calories[1]} calories` } } : {}),
  };
}
