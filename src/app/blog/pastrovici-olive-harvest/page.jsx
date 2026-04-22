import { buildAlternates } from '../../metadata';
import PastroviciOliveHarvest from '@/src/components/pages/blog/PastroviciOliveHarvest';

export async function generateMetadata() {
  return {
    title: "The Paštrovići Olive Harvest — Autumn in the Hills Behind the Budva Riviera" + ' | Car Rental Budva',
    description: "A seasonal guide to the Paštrovići olive harvest: where the old groves grow, which small mills still work, how to buy oil, and how to time a shoulder-season visit from Budva.",
    alternates: buildAlternates('blog/pastrovici-olive-harvest'),
    openGraph: { title: "The Paštrovići Olive Harvest — Autumn in the Hills Behind the Budva Riviera", description: "A seasonal guide to the Paštrovići olive harvest: where the old groves grow, which small mills still work, how to buy oil, and how to time a shoulder-season visit from Budva.", type: 'website' },
  };
}

export default function PastroviciOliveHarvestRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Paštrovići Olive Harvest — Autumn in the Hills Behind the Budva Riviera",
    "description": "A seasonal guide to the Paštrovići olive harvest: where the old groves grow, which small mills still work, how to buy oil, and how to time a shoulder-season visit from Budva.",
    "image": "https://www.carrentalbudva.com/img/blog-pastrovici-olive-harvest.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PastroviciOliveHarvest />
    </>
  );
}
