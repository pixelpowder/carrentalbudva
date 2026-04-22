import { buildAlternates } from '../../metadata';
import DrobniPijesakCove from '@/src/components/pages/blog/DrobniPijesakCove';

export async function generateMetadata() {
  return {
    title: "Drobni Pijesak — The Tiny Sand Cove Where the Paštrovići Clan Held Court" + ' | Car Rental Budva',
    description: "A guide to Drobni Pijesak, the small sheltered cove on the Budva Riviera where the Paštrovići tribal assembly met for centuries — history, access, parking and swimming conditions.",
    alternates: buildAlternates('blog/drobni-pijesak-cove'),
    openGraph: { title: "Drobni Pijesak — The Tiny Sand Cove Where the Paštrovići Clan Held Court", description: "A guide to Drobni Pijesak, the small sheltered cove on the Budva Riviera where the Paštrovići tribal assembly met for centuries — history, access, parking and swimming conditions.", type: 'website' },
  };
}

export default function DrobniPijesakCoveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Drobni Pijesak — The Tiny Sand Cove Where the Paštrovići Clan Held Court",
    "description": "A guide to Drobni Pijesak, the small sheltered cove on the Budva Riviera where the Paštrovići tribal assembly met for centuries — history, access, parking and swimming conditions.",
    "image": "https://www.carrentalbudva.com/img/blog-drobni-pijesak-cove.webp",
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
