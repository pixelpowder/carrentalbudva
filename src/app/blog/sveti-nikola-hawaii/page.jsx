import { buildAlternates } from '../../metadata';
import SvetiNikolaHawaii from '@/src/components/pages/blog/SvetiNikolaHawaii';

export async function generateMetadata() {
  return {
    title: "Sveti Nikola (Hawaii) — The Island Off Budva Old Town" + ' | Car Rental Budva',
    description: "How to visit Sveti Nikola from Budva: boat tickets, three public beaches, snorkelling, deer, and why locals call it Hawaii.",
    alternates: buildAlternates('blog/sveti-nikola-hawaii'),
    openGraph: { title: "Sveti Nikola (Hawaii) — The Island Off Budva Old Town", description: "How to visit Sveti Nikola from Budva: boat tickets, three public beaches, snorkelling, deer, and why locals call it Hawaii.", type: 'website' },
  };
}

export default function SvetiNikolaHawaiiRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sveti Nikola (Hawaii) — The Island Off Budva Old Town",
    "description": "How to visit Sveti Nikola from Budva: boat tickets, three public beaches, snorkelling, deer, and why locals call it Hawaii.",
    "image": "https://www.carrentalbudva.com/img/blog-sveti-nikola.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SvetiNikolaHawaii />
    </>
  );
}
