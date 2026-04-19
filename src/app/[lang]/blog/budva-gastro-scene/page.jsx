import { t, buildAlternates } from '../../../metadata';
import BudvaGastroScene from '@/src/components/pages/blog/BudvaGastroScene';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogGastro.title') + ' | Budva Car Rental',
    description: t(lang, 'blogGastro.description'),
    alternates: buildAlternates('blog/budva-gastro-scene', lang),
  };
}

export default function LangBudvaGastroSceneRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogGastro.title'),
    "description": t('en', 'blogGastro.description'),
    "image": "https://www.carrentalbudva.com/img/blog-budva-gastro-scene.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaGastroScene />
    </>
  );
}
