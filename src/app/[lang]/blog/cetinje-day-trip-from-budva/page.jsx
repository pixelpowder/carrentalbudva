import { buildAlternates } from '../../../metadata';
import CetinjeDayTripFromBudva from '@/src/components/pages/blog/CetinjeDayTripFromBudva';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Cetinje Day Trip From Budva — The Old Royal Capital Over Lovćen" + ' | Car Rental Budva',
    description: "A Budva-based day-trip guide to Cetinje, Montenegro's old royal capital: drive route, the State Museum, Biljarda, Cetinje Monastery, and how to combine with Lovćen.",
    alternates: buildAlternates('blog/cetinje-day-trip-from-budva', lang),
  };
}

export default async function LangCetinjeDayTripFromBudvaRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Cetinje Day Trip From Budva — The Old Royal Capital Over Lovćen",
    "description": "A Budva-based day-trip guide to Cetinje, Montenegro's old royal capital: drive route, the State Museum, Biljarda, Cetinje Monastery, and how to combine with Lovćen.",
    "image": "https://www.carrentalbudva.com/img/blog-cetinje-day-trip-from-budva.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <CetinjeDayTripFromBudva />
    </>
  );
}
