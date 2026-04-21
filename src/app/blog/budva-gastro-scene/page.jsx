import { t, buildAlternates } from '../../metadata';
import BudvaGastroScene from '@/src/components/pages/blog/BudvaGastroScene';

export async function generateMetadata() {
  const title = t('en', 'blogGastro.title') + ' | Budva Car Rental';
  const description = t('en', 'blogGastro.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/budva-gastro-scene'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function BudvaGastroSceneRoute() {
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
