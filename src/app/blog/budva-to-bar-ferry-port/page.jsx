import { buildAlternates } from '../../metadata';
import BudvaToBarFerryPort from '@/src/components/pages/blog/BudvaToBarFerryPort';
import content from '@/src/data/blog/budva-to-bar-ferry-port';

export async function generateMetadata() {
  const d = content.en;
  return {
    title: d.title + ' | Car Rental Budva',
    description: d.description,
    alternates: buildAlternates('blog/budva-to-bar-ferry-port'),
    openGraph: { title: d.title, description: d.description, type: 'website' },
  };
}

export default function BudvaToBarFerryPortRoute() {
  const d = content.en;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": d.title,
    "description": d.description,
    "image": "https://www.carrentalbudva.com" + d.image,
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaToBarFerryPort />
    </>
  );
}
