import { buildAlternates } from '../../../metadata';
import BeciciRafailoviciPromenade from '@/src/components/pages/blog/BeciciRafailoviciPromenade';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Bečići & Rafailovići — The Seafront Promenade Walk from Budva" + ' | Car Rental Budva',
    description: "Guide to walking or driving from Budva to Bečići and Rafailovići: cliffside promenade, two-tunnel route, best seafood restaurants, parking.",
    alternates: buildAlternates('blog/becici-rafailovici-promenade', lang),
  };
}

export default async function LangBeciciRafailoviciPromenadeRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Bečići & Rafailovići — The Seafront Promenade Walk from Budva",
    "description": "Guide to walking or driving from Budva to Bečići and Rafailovići: cliffside promenade, two-tunnel route, best seafood restaurants, parking.",
    "image": "https://www.carrentalbudva.com/img/blog-becici.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BeciciRafailoviciPromenade />
    </>
  );
}
