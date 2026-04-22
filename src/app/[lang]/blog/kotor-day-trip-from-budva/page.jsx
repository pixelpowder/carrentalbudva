import { buildAlternates } from '../../../metadata';
import KotorDayTripFromBudva from '@/src/components/pages/blog/KotorDayTripFromBudva';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Kotor Day Trip From Budva — What to See in Four Hours Without Losing Your Afternoon" + ' | Car Rental Budva',
    description: "A Budva-based four-hour day-trip plan to Kotor: route options, where to park, what to see inside the walls, the San Giovanni fortress climb, and how to avoid the cruise crowds.",
    alternates: buildAlternates('blog/kotor-day-trip-from-budva', lang),
  };
}

export default async function LangKotorDayTripFromBudvaRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Kotor Day Trip From Budva — What to See in Four Hours Without Losing Your Afternoon",
    "description": "A Budva-based four-hour day-trip plan to Kotor: route options, where to park, what to see inside the walls, the San Giovanni fortress climb, and how to avoid the cruise crowds.",
    "image": "https://www.carrentalbudva.com/img/blog-kotor-day-trip-from-budva.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <KotorDayTripFromBudva />
    </>
  );
}
