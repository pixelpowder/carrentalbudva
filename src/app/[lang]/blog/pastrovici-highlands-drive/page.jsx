import { buildAlternates } from '../../../metadata';
import PastroviciHighlandsDrive from '@/src/components/pages/blog/PastroviciHighlandsDrive';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "The Paštrovići Highlands Drive — Inland from Budva" + ' | Car Rental Budva',
    description: "A driver's guide to the Paštrovići highlands: Praskvica Monastery, Kosmač Fortress, the drive from Sveti Stefan, and hill-village food.",
    alternates: buildAlternates('blog/pastrovici-highlands-drive', lang),
  };
}

export default async function LangPastroviciHighlandsDriveRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Paštrovići Highlands Drive — Inland from Budva",
    "description": "A driver's guide to the Paštrovići highlands: Praskvica Monastery, Kosmač Fortress, the drive from Sveti Stefan, and hill-village food.",
    "image": "https://www.carrentalbudva.com/img/blog-pastrovici.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PastroviciHighlandsDrive />
    </>
  );
}
