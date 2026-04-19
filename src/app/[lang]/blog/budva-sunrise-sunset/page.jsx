import { t, buildAlternates } from '../../../metadata';
import BudvaSunriseSunset from '@/src/components/pages/blog/BudvaSunriseSunset';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'blogSunrides.title') + ' | Budva Car Rental',
    description: t(lang, 'blogSunrides.description'),
    alternates: buildAlternates('blog/budva-sunrise-sunset', lang),
  };
}

export default function LangBudvaSunriseSunsetRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogSunrides.title'),
    "description": t('en', 'blogSunrides.description'),
    "image": "https://www.carrentalbudva.com/img/blog-budva-sunrise-sunset.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaSunriseSunset />
    </>
  );
}
