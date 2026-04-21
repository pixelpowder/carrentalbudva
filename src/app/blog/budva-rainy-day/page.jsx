import { t, buildAlternates } from '../../metadata';
import BudvaRainyDay from '@/src/components/pages/blog/BudvaRainyDay';

export async function generateMetadata() {
  const title = t('en', 'blogRainy.title') + ' | Budva Car Rental';
  const description = t('en', 'blogRainy.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/budva-rainy-day'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function BudvaRainyDayRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogRainy.title'),
    "description": t('en', 'blogRainy.description'),
    "image": "https://www.carrentalbudva.com/img/blog-budva-rainy-day.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaRainyDay />
    </>
  );
}
