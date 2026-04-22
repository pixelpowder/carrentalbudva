import { buildAlternates } from '../../metadata';
import DrobniPijesakCove from '@/src/components/pages/blog/DrobniPijesakCove';
import content from '@/src/data/blog/drobni-pijesak-cove';

export async function generateMetadata() {
  const d = content.en;
  return {
    title: d.title + ' | Car Rental Budva',
    description: d.description,
    alternates: buildAlternates('blog/drobni-pijesak-cove'),
    openGraph: { title: d.title, description: d.description, type: 'website' },
  };
}

export default function DrobniPijesakCoveRoute() {
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
      <DrobniPijesakCove />
    </>
  );
}
