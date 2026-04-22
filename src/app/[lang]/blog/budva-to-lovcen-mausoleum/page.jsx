import { buildAlternates } from '../../../metadata';
import BudvaToLovcenMausoleum from '@/src/components/pages/blog/BudvaToLovcenMausoleum';
import content from '@/src/data/blog/budva-to-lovcen-mausoleum';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const d = content[lang] || content.en;
  return {
    title: d.title + ' | Car Rental Budva',
    description: d.description,
    alternates: buildAlternates('blog/budva-to-lovcen-mausoleum', lang),
    openGraph: { title: d.title, description: d.description, type: 'website' },
  };
}

export default async function LangBudvaToLovcenMausoleumRoute({ params }) {
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
      <BudvaToLovcenMausoleum />
    </>
  );
}
