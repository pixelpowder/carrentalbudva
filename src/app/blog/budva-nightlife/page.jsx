import { buildAlternates } from '../../metadata';
import BudvaNightlifeBlloku from '@/src/components/pages/blog/BudvaNightlifeBlloku';

export async function generateMetadata() {
  return {
    title: "Budva Nightlife — The Riviera's Club Strip and Where to Park" + ' | Car Rental Budva',
    description: "A practical guide to Budva's nightlife: main club strip, Top Hill, Old Town lounges, drink-drive law, overnight parking.",
    alternates: buildAlternates('blog/budva-nightlife'),
    openGraph: { title: "Budva Nightlife — The Riviera's Club Strip and Where to Park", description: "A practical guide to Budva's nightlife: main club strip, Top Hill, Old Town lounges, drink-drive law, overnight parking.", type: 'website' },
  };
}

export default function BudvaNightlifeBllokuRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Budva Nightlife — The Riviera's Club Strip and Where to Park",
    "description": "A practical guide to Budva's nightlife: main club strip, Top Hill, Old Town lounges, drink-drive law, overnight parking.",
    "image": "https://www.carrentalbudva.com/img/blog-budva-nightlife.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaNightlifeBlloku />
    </>
  );
}
