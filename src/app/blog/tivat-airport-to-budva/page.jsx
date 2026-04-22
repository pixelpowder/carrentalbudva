import { buildAlternates } from '../../metadata';
import TivatAirportToBudva from '@/src/components/pages/blog/TivatAirportToBudva';

export async function generateMetadata() {
  return {
    title: "Tivat Airport to Budva — The 25-Minute Drive and Route Options" + ' | Car Rental Budva',
    description: "Driving guide from Tivat Airport to Budva: the direct route, scenic alternatives via Budva or Lovćen, pickup procedure, toll roads.",
    alternates: buildAlternates('blog/tivat-airport-to-budva'),
    openGraph: { title: "Tivat Airport to Budva — The 25-Minute Drive and Route Options", description: "Driving guide from Tivat Airport to Budva: the direct route, scenic alternatives via Budva or Lovćen, pickup procedure, toll roads.", type: 'website' },
  };
}

export default function TivatAirportToBudvaRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tivat Airport to Budva — The 25-Minute Drive and Route Options",
    "description": "Driving guide from Tivat Airport to Budva: the direct route, scenic alternatives via Budva or Lovćen, pickup procedure, toll roads.",
    "image": "https://www.carrentalbudva.com/img/blog-tivat-arrival.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <TivatAirportToBudva />
    </>
  );
}
