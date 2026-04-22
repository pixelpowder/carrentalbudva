import { buildAlternates } from '../../../metadata';
import RezeviciMonastery from '@/src/components/pages/blog/RezeviciMonastery';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Reževići Monastery — An 800-Year-Old Nemanjić Foundation Above the Budva Riviera" + ' | Car Rental Budva',
    description: "A visitor guide to Reževići Monastery near Petrovac: its Nemanjić-era foundation, the three churches, frescoes, and how to visit it as a short drive from Budva.",
    alternates: buildAlternates('blog/rezevici-monastery', lang),
  };
}

export default async function LangRezeviciMonasteryRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Reževići Monastery — An 800-Year-Old Nemanjić Foundation Above the Budva Riviera",
    "description": "A visitor guide to Reževići Monastery near Petrovac: its Nemanjić-era foundation, the three churches, frescoes, and how to visit it as a short drive from Budva.",
    "image": "https://www.carrentalbudva.com/img/blog-rezevici-monastery.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <RezeviciMonastery />
    </>
  );
}
