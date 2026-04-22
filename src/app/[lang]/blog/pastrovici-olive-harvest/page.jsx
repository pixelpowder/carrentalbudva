import { buildAlternates } from '../../../metadata';
import PastroviciOliveHarvest from '@/src/components/pages/blog/PastroviciOliveHarvest';
import content from '@/src/data/blog/pastrovici-olive-harvest';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const d = content[lang] || content.en;
  return {
    title: d.title + ' | Car Rental Budva',
    description: d.description,
    alternates: buildAlternates('blog/pastrovici-olive-harvest', lang),
    openGraph: { title: d.title, description: d.description, type: 'website' },
  };
}

export default async function LangPastroviciOliveHarvestRoute({ params }) {
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
      <PastroviciOliveHarvest />
    </>
  );
}
