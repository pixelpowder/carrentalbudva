import { buildAlternates } from '../../../metadata';
import PetrovacQuietAlternative from '@/src/components/pages/blog/PetrovacQuietAlternative';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Petrovac — The Quiet Alternative to Budva" + ' | Car Rental Budva',
    description: "Why Petrovac works as day trip or base from Budva: the beach, Kastel Lastva fortress, restaurants, parking, and how long the drive takes.",
    alternates: buildAlternates('blog/petrovac-quiet-alternative', lang),
  };
}

export default async function LangPetrovacQuietAlternativeRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Petrovac — The Quiet Alternative to Budva",
    "description": "Why Petrovac works as day trip or base from Budva: the beach, Kastel Lastva fortress, restaurants, parking, and how long the drive takes.",
    "image": "https://www.carrentalbudva.com/img/blog-petrovac.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PetrovacQuietAlternative />
    </>
  );
}
