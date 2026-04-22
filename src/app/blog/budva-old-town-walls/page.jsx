import { buildAlternates } from '../../metadata';
import BudvaOldTownWalls from '@/src/components/pages/blog/BudvaOldTownWalls';

export async function generateMetadata() {
  return {
    title: "Budva Old Town Walls — A 2,500-Year Fortress on the Adriatic" + ' | Car Rental Budva',
    description: "A walking and driving guide to Budva's Old Town: the walls, the Citadel, St George's Church, the Roman villa, and parking tips.",
    alternates: buildAlternates('blog/budva-old-town-walls'),
    openGraph: { title: "Budva Old Town Walls — A 2,500-Year Fortress on the Adriatic", description: "A walking and driving guide to Budva's Old Town: the walls, the Citadel, St George's Church, the Roman villa, and parking tips.", type: 'website' },
  };
}

export default function BudvaOldTownWallsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Budva Old Town Walls — A 2,500-Year Fortress on the Adriatic",
    "description": "A walking and driving guide to Budva's Old Town: the walls, the Citadel, St George's Church, the Roman villa, and parking tips.",
    "image": "https://www.carrentalbudva.com/img/blog-budva-oldtown.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaOldTownWalls />
    </>
  );
}
