import { buildAlternates } from '../../../metadata';
import BudvaToBarFerryPort from '@/src/components/pages/blog/BudvaToBarFerryPort';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Budva to Bar Ferry Port — Driving Down to the Bari Ferry for the Italy Leg" + ' | Car Rental Budva',
    description: "A practical guide from Budva to the Port of Bar: the drive via the Sozina tunnel, ferry terminal logistics, overnight crossings to Bari, and what to know before you board.",
    alternates: buildAlternates('blog/budva-to-bar-ferry-port', lang),
  };
}

export default async function LangBudvaToBarFerryPortRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Budva to Bar Ferry Port — Driving Down to the Bari Ferry for the Italy Leg",
    "description": "A practical guide from Budva to the Port of Bar: the drive via the Sozina tunnel, ferry terminal logistics, overnight crossings to Bari, and what to know before you board.",
    "image": "https://www.carrentalbudva.com/img/blog-budva-to-bar-ferry-port.webp",
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
