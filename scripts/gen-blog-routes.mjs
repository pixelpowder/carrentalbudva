import fs from 'node:fs';
import path from 'node:path';

const posts = [
  { slug: 'drobni-pijesak-cove', comp: 'DrobniPijesakCove', title: "Drobni Pijesak — The Tiny Sand Cove Where the Paštrovići Clan Held Court", desc: "A guide to Drobni Pijesak, the small sheltered cove on the Budva Riviera where the Paštrovići tribal assembly met for centuries — history, access, parking and swimming conditions.", image: 'blog-drobni-pijesak-cove.webp' },
  { slug: 'milocer-park-villa', comp: 'MilocerParkVilla', title: "Miločer Park and Villa Miločer — The Royal Summer Retreat Next to Sveti Stefan", desc: "A visitor guide to Miločer Park and Villa Miločer: royal history, walking trails, Queen's Beach and King's Beach, access and what's open to the public today.", image: 'blog-milocer-park-villa.webp' },
  { slug: 'rezevici-monastery', comp: 'RezeviciMonastery', title: "Reževići Monastery — An 800-Year-Old Nemanjić Foundation Above the Budva Riviera", desc: "A visitor guide to Reževići Monastery near Petrovac: its Nemanjić-era foundation, the three churches, frescoes, and how to visit it as a short drive from Budva.", image: 'blog-rezevici-monastery.webp' },
  { slug: 'budva-to-lovcen-mausoleum', comp: 'BudvaToLovcenMausoleum', title: "Budva to Lovćen Mausoleum — The Serpentine Drive to Njegoš's Tomb at 1,657 m", desc: "A driving guide from Budva to the Njegoš Mausoleum on Mount Lovćen: the road, the ascent, the 461-step climb to the tomb, and the view from the summit at 1,657 metres.", image: 'blog-budva-to-lovcen-mausoleum.webp' },
  { slug: 'sutomore-stari-bar-ruins', comp: 'SutomoreStariBarRuins', title: "Sutomore and Stari Bar — A Day Trip South Through the Sozina Tunnel from Budva", desc: "A Budva-based day trip to Sutomore's beach and the ruins of Stari Bar: the Sozina tunnel, parking, what to see in the old city, and how to combine both in one loop.", image: 'blog-sutomore-stari-bar-ruins.webp' },
  { slug: 'mogren-beach-dukley-tunnel', comp: 'MogrenBeachDukleyTunnel', title: "Mogren Beach and the Cliff Tunnel — Two Hidden Coves Just North of Budva Old Town", desc: "A guide to Mogren Beach I and II near Budva Old Town: the cliff-path approach, the short connecting tunnel, swimming conditions, and the Dukley headland above.", image: 'blog-mogren-beach-dukley-tunnel.webp' },
  { slug: 'budva-to-bar-ferry-port', comp: 'BudvaToBarFerryPort', title: "Budva to Bar Ferry Port — Driving Down to the Bari Ferry for the Italy Leg", desc: "A practical guide from Budva to the Port of Bar: the drive via the Sozina tunnel, ferry terminal logistics, overnight crossings to Bari, and what to know before you board.", image: 'blog-budva-to-bar-ferry-port.webp' },
  { slug: 'cetinje-day-trip-from-budva', comp: 'CetinjeDayTripFromBudva', title: "Cetinje Day Trip From Budva — The Old Royal Capital Over Lovćen", desc: "A Budva-based day-trip guide to Cetinje, Montenegro's old royal capital: drive route, the State Museum, Biljarda, Cetinje Monastery, and how to combine with Lovćen.", image: 'blog-cetinje-day-trip-from-budva.webp' },
  { slug: 'pastrovici-olive-harvest', comp: 'PastroviciOliveHarvest', title: "The Paštrovići Olive Harvest — Autumn in the Hills Behind the Budva Riviera", desc: "A seasonal guide to the Paštrovići olive harvest: where the old groves grow, which small mills still work, how to buy oil, and how to time a shoulder-season visit from Budva.", image: 'blog-pastrovici-olive-harvest.webp' },
  { slug: 'kotor-day-trip-from-budva', comp: 'KotorDayTripFromBudva', title: "Kotor Day Trip From Budva — What to See in Four Hours Without Losing Your Afternoon", desc: "A Budva-based four-hour day-trip plan to Kotor: route options, where to park, what to see inside the walls, the San Giovanni fortress climb, and how to avoid the cruise crowds.", image: 'blog-kotor-day-trip-from-budva.webp' },
];

const SITE = 'Car Rental Budva';
const DOMAIN = 'https://www.carrentalbudva.com';

function topRoute(p) {
  return `import { buildAlternates } from '../../metadata';
import ${p.comp} from '@/src/components/pages/blog/${p.comp}';

export async function generateMetadata() {
  return {
    title: ${JSON.stringify(p.title)} + ' | ${SITE}',
    description: ${JSON.stringify(p.desc)},
    alternates: buildAlternates('blog/${p.slug}'),
    openGraph: { title: ${JSON.stringify(p.title)}, description: ${JSON.stringify(p.desc)}, type: 'website' },
  };
}

export default function ${p.comp}Route() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(p.title)},
    "description": ${JSON.stringify(p.desc)},
    "image": "${DOMAIN}/img/${p.image}",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "${SITE}", "url": "${DOMAIN}" },
    "publisher": { "@type": "Organization", "name": "${SITE}", "url": "${DOMAIN}" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <${p.comp} />
    </>
  );
}
`;
}

function langRoute(p) {
  return `import { buildAlternates } from '../../../metadata';
import ${p.comp} from '@/src/components/pages/blog/${p.comp}';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: ${JSON.stringify(p.title)} + ' | ${SITE}',
    description: ${JSON.stringify(p.desc)},
    alternates: buildAlternates('blog/${p.slug}', lang),
  };
}

export default async function Lang${p.comp}Route({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": ${JSON.stringify(p.title)},
    "description": ${JSON.stringify(p.desc)},
    "image": "${DOMAIN}/img/${p.image}",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "${SITE}", "url": "${DOMAIN}" },
    "publisher": { "@type": "Organization", "name": "${SITE}", "url": "${DOMAIN}" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <${p.comp} />
    </>
  );
}
`;
}

const root = path.resolve('.');
for (const p of posts) {
  const topDir = path.join(root, 'src/app/blog', p.slug);
  const langDir = path.join(root, 'src/app/[lang]/blog', p.slug);
  fs.mkdirSync(topDir, { recursive: true });
  fs.mkdirSync(langDir, { recursive: true });
  fs.writeFileSync(path.join(topDir, 'page.jsx'), topRoute(p));
  fs.writeFileSync(path.join(langDir, 'page.jsx'), langRoute(p));
  console.log('wrote', p.slug);
}
