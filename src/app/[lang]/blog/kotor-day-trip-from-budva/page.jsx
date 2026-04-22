import { buildAlternates } from '../../../metadata';
import KotorDayTripFromBudva from '@/src/components/pages/blog/KotorDayTripFromBudva';
import content from '@/src/data/blog/kotor-day-trip-from-budva';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const d = content[lang] || content.en;
  return {
    title: d.title + ' | Car Rental Budva',
    description: d.description,
    alternates: buildAlternates('blog/kotor-day-trip-from-budva', lang),
    openGraph: { title: d.title, description: d.description, type: 'website' },
  };
}

export default async function LangKotorDayTripFromBudvaRoute({ params }) {
  const { lang } = await params;
  const d = content[lang] || content.en;
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
      <KotorDayTripFromBudva />
    </>
  );
}
