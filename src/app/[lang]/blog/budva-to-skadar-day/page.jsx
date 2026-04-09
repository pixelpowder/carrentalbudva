import { t, buildAlternates } from '../../../metadata';
import BudvaToSkadarDay from '@/src/components/pages/blog/BudvaToSkadarDay';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSkadar.title') + ' | Budva Car Rental',
    description: t(lang, 'blogSkadar.description'),
    alternates: buildAlternates('blog/budva-to-skadar-day'),
  };
}

export default function LangBudvaToSkadarDayRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSkadar.title'),
    "description": t('en', 'blogSkadar.description'),
    "image": "https://www.carrentalbudva.com/img/blog-budva-to-skadar-day.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaToSkadarDay />
    </>
  );
}
