import { buildAlternates } from '../../../metadata';
import MilocerParkVilla from '@/src/components/pages/blog/MilocerParkVilla';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Miločer Park and Villa Miločer — The Royal Summer Retreat Next to Sveti Stefan" + ' | Car Rental Budva',
    description: "A visitor guide to Miločer Park and Villa Miločer: royal history, walking trails, Queen's Beach and King's Beach, access and what's open to the public today.",
    alternates: buildAlternates('blog/milocer-park-villa', lang),
  };
}

export default async function LangMilocerParkVillaRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Miločer Park and Villa Miločer — The Royal Summer Retreat Next to Sveti Stefan",
    "description": "A visitor guide to Miločer Park and Villa Miločer: royal history, walking trails, Queen's Beach and King's Beach, access and what's open to the public today.",
    "image": "https://www.carrentalbudva.com/img/blog-milocer-park-villa.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MilocerParkVilla />
    </>
  );
}
