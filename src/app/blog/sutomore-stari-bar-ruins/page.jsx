import { buildAlternates } from '../../metadata';
import SutomoreStariBarRuins from '@/src/components/pages/blog/SutomoreStariBarRuins';

export async function generateMetadata() {
  return {
    title: "Sutomore and Stari Bar — A Day Trip South Through the Sozina Tunnel from Budva" + ' | Car Rental Budva',
    description: "A Budva-based day trip to Sutomore's beach and the ruins of Stari Bar: the Sozina tunnel, parking, what to see in the old city, and how to combine both in one loop.",
    alternates: buildAlternates('blog/sutomore-stari-bar-ruins'),
    openGraph: { title: "Sutomore and Stari Bar — A Day Trip South Through the Sozina Tunnel from Budva", description: "A Budva-based day trip to Sutomore's beach and the ruins of Stari Bar: the Sozina tunnel, parking, what to see in the old city, and how to combine both in one loop.", type: 'website' },
  };
}

export default function SutomoreStariBarRuinsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sutomore and Stari Bar — A Day Trip South Through the Sozina Tunnel from Budva",
    "description": "A Budva-based day trip to Sutomore's beach and the ruins of Stari Bar: the Sozina tunnel, parking, what to see in the old city, and how to combine both in one loop.",
    "image": "https://www.carrentalbudva.com/img/blog-sutomore-stari-bar-ruins.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SutomoreStariBarRuins />
    </>
  );
}
