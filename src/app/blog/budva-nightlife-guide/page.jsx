import { t, buildAlternates } from '../../metadata';
import BudvaNightlifeGuide from '@/src/components/pages/blog/BudvaNightlifeGuide';

export async function generateMetadata() {
  return {
    title: t('en', 'blogNightlife.title') + ' | Budva Car Rental',
    description: t('en', 'blogNightlife.description'),
    alternates: buildAlternates('blog/budva-nightlife-guide'),
  };
}

export default function BudvaNightlifeGuideRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogNightlife.title'),
    "description": t('en', 'blogNightlife.description'),
    "image": "https://www.carrentalbudva.com/img/blog-budva-nightlife-guide.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaNightlifeGuide />
    </>
  );
}
