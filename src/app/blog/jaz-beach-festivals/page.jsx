import { buildAlternates } from '../../metadata';
import JazBeachFestivals from '@/src/components/pages/blog/JazBeachFestivals';

export async function generateMetadata() {
  return {
    title: "Jaz Beach — The Rolling Stones Beach and Festival Logistics" + ' | Car Rental Budva',
    description: "Jaz Beach guide: Rolling Stones 2007 history, Sea Dance Festival, driving and parking, swimming in non-festival months.",
    alternates: buildAlternates('blog/jaz-beach-festivals'),
    openGraph: { title: "Jaz Beach — The Rolling Stones Beach and Festival Logistics", description: "Jaz Beach guide: Rolling Stones 2007 history, Sea Dance Festival, driving and parking, swimming in non-festival months.", type: 'website' },
  };
}

export default function JazBeachFestivalsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Jaz Beach — The Rolling Stones Beach and Festival Logistics",
    "description": "Jaz Beach guide: Rolling Stones 2007 history, Sea Dance Festival, driving and parking, swimming in non-festival months.",
    "image": "https://www.carrentalbudva.com/img/blog-jaz.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <JazBeachFestivals />
    </>
  );
}
