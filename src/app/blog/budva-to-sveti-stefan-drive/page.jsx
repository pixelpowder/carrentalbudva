import { buildAlternates } from '../../metadata';
import BudvaToSvetiStefanDrive from '@/src/components/pages/blog/BudvaToSvetiStefanDrive';

export async function generateMetadata() {
  return {
    title: "Budva to Sveti Stefan — The Short Coastal Drive with All the Stops" + ' | Car Rental Budva',
    description: "Coastal driving guide from Budva to Sveti Stefan: Bečići, Rafailovići, Kamenovo, Pržno and Miločer detours, best viewpoints.",
    alternates: buildAlternates('blog/budva-to-sveti-stefan-drive'),
    openGraph: { title: "Budva to Sveti Stefan — The Short Coastal Drive with All the Stops", description: "Coastal driving guide from Budva to Sveti Stefan: Bečići, Rafailovići, Kamenovo, Pržno and Miločer detours, best viewpoints.", type: 'website' },
  };
}

export default function BudvaToSvetiStefanDriveRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Budva to Sveti Stefan — The Short Coastal Drive with All the Stops",
    "description": "Coastal driving guide from Budva to Sveti Stefan: Bečići, Rafailovići, Kamenovo, Pržno and Miločer detours, best viewpoints.",
    "image": "https://www.carrentalbudva.com/img/blog-budva-svetistefan.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <BudvaToSvetiStefanDrive />
    </>
  );
}
