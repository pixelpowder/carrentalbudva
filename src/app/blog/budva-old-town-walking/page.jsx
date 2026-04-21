import { t, buildAlternates } from '../../metadata';
import BudvaOldTownWalking from '@/src/components/pages/blog/BudvaOldTownWalking';

export async function generateMetadata() {
  const title = t('en', 'blogOldtown.title') + ' | Budva Car Rental';
  const description = t('en', 'blogOldtown.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/budva-old-town-walking'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function BudvaOldTownWalkingRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogOldtown.title'),
    "description": t('en', 'blogOldtown.description'),
    "image": "https://www.carrentalbudva.com/img/blog-budva-old-town-walking.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaOldTownWalking />
    </>
  );
}
