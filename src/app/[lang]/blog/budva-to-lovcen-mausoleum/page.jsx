import { buildAlternates } from '../../../metadata';
import BudvaToLovcenMausoleum from '@/src/components/pages/blog/BudvaToLovcenMausoleum';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Budva to Lovćen Mausoleum — The Serpentine Drive to Njegoš's Tomb at 1,657 m" + ' | Car Rental Budva',
    description: "A driving guide from Budva to the Njegoš Mausoleum on Mount Lovćen: the road, the ascent, the 461-step climb to the tomb, and the view from the summit at 1,657 metres.",
    alternates: buildAlternates('blog/budva-to-lovcen-mausoleum', lang),
  };
}

export default async function LangBudvaToLovcenMausoleumRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Budva to Lovćen Mausoleum — The Serpentine Drive to Njegoš's Tomb at 1,657 m",
    "description": "A driving guide from Budva to the Njegoš Mausoleum on Mount Lovćen: the road, the ascent, the 461-step climb to the tomb, and the view from the summit at 1,657 metres.",
    "image": "https://www.carrentalbudva.com/img/blog-budva-to-lovcen-mausoleum.webp",
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
