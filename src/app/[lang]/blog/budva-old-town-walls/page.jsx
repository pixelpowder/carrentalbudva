import { buildAlternates } from '../../../metadata';
import BudvaOldTownWalls from '@/src/components/pages/blog/BudvaOldTownWalls';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Budva Old Town Walls — A 2,500-Year Fortress on the Adriatic" + ' | Car Rental Budva',
    description: "A walking and driving guide to Budva's Old Town: the walls, the Citadel, St George's Church, the Roman villa, and parking tips.",
    alternates: buildAlternates('blog/budva-old-town-walls', lang),
  };
}

export default async function LangBudvaOldTownWallsRoute({ params }) {
  const { lang } = await params;
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
