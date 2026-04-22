// Fetch unique Pexels images for new Budva blog posts.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const KEY = 'FiklPDZt0hg1DGN1AXfCLaNeezqbPuzRDGIpkQEzu9Q14EGeo0uunrD4';
const OUT_DIR = path.resolve('public/img');
const MANIFEST = path.resolve('public/img/blog-images-manifest.json');

const USED_IDS = new Set([
  18037877, 7192505, 32419973, 34169538, 5340094, 34062037, 37167189, 14778150, 1548116, 28860320,
  18048405, 36327395, 29201405, 12932683, 16907807, 12372367, 32821932, 30710168, 27607236,
  13786211, 34803738, 33608201, 14922906, 15564106, 30160277, 33483269, 36478680, 20320147, 20320144, 6261508, 15929963, 17491228, 33350327, 28825813, 14797639, 29574935, 36039417,
  23940966, 34118972, 29318862, 36406012, 28207899, 32962288, 17621582, 15673050, 1928072,
  36615187, 35440903, 30832872, 14778147, 2887781, 34061672, 33067878, 31264085, 33047581,
  1719490, 19312906, 7510133, 33350263, 27890685, 12353536, 4530192, 34062048, 35636306,
]);

const TARGETS = [
  { slug: 'drobni-pijesak-cove', queries: ['adriatic sand cove', 'montenegro hidden beach', 'small sandy cove sea'] },
  { slug: 'milocer-park-villa', queries: ['mediterranean pine park sea', 'montenegro villa coast', 'adriatic cypress garden'] },
  { slug: 'rezevici-monastery', queries: ['orthodox monastery stone', 'montenegro monastery', 'serbian orthodox church coast'] },
  { slug: 'budva-to-lovcen-mausoleum', queries: ['mountain serpentine road', 'lovcen montenegro', 'winding mountain switchback'] },
  { slug: 'sutomore-stari-bar-ruins', queries: ['stari bar ruins', 'medieval ruins montenegro', 'old fortress ruins balkans'] },
  { slug: 'mogren-beach-dukley-tunnel', queries: ['adriatic cliff beach', 'mogren budva', 'sea cliff tunnel coast'] },
  { slug: 'budva-to-bar-ferry-port', queries: ['adriatic ferry port', 'ferry ship mediterranean', 'port of bar montenegro'] },
  { slug: 'cetinje-day-trip-from-budva', queries: ['cetinje montenegro', 'old royal capital balkans', 'montenegrin town stone'] },
  { slug: 'pastrovici-olive-harvest', queries: ['olive harvest basket', 'olive grove mediterranean', 'olive tree autumn'] },
  { slug: 'kotor-day-trip-from-budva', queries: ['kotor old town', 'kotor bay montenegro', 'medieval walled town adriatic'] },
];

async function pexelsSearch(query) {
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=landscape&size=large&per_page=5`;
  const r = await fetch(url, { headers: { Authorization: KEY } });
  if (!r.ok) throw new Error(`Pexels ${r.status} for ${query}`);
  const j = await r.json();
  return j.photos || [];
}

async function download(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`download ${r.status}`);
  return Buffer.from(await r.arrayBuffer());
}

async function run() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const manifest = [];
  for (const t of TARGETS) {
    let picked = null;
    for (const q of t.queries) {
      try {
        const photos = await pexelsSearch(q);
        for (const p of photos) {
          if (!USED_IDS.has(p.id)) {
            picked = { id: p.id, url: p.src.original, photographer: p.photographer, query: q, src_page: p.url };
            USED_IDS.add(p.id);
            break;
          }
        }
      } catch (e) { console.error('query failed', q, e.message); }
      if (picked) break;
    }
    if (!picked) { console.error('NO IMAGE for', t.slug); continue; }
    console.log(t.slug, '=>', picked.id, picked.query);
    const buf = await download(picked.url);
    const outPath = path.join(OUT_DIR, `blog-${t.slug}.webp`);
    await sharp(buf).resize({ width: 1400 }).webp({ quality: 80 }).toFile(outPath);
    manifest.push({ slug: t.slug, pexels_id: picked.id, photographer: picked.photographer, query: picked.query, source: picked.src_page, file: `/img/blog-${t.slug}.webp` });
  }
  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
  console.log('MANIFEST written:', MANIFEST);
}

run().catch(e => { console.error(e); process.exit(1); });
