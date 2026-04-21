import { t, buildAlternates } from '../../metadata';
import PetrovacToBuljarica from '@/src/components/pages/blog/PetrovacToBuljarica';

export async function generateMetadata() {
  const title = t('en', 'blogPetrovac.title') + ' | Budva Car Rental';
  const description = t('en', 'blogPetrovac.description');
  return {
    title: title,
    description: description,
    alternates: buildAlternates('blog/petrovac-to-buljarica'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function PetrovacToBuljaricaRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('en', 'blogPetrovac.title'),
    "description": t('en', 'blogPetrovac.description'),
    "image": "https://www.carrentalbudva.com/img/blog-petrovac-to-buljarica.webp",
    "datePublished": "2026-04-08",
    "dateModified": "2026-04-08",
    "author": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Budva Car Rental", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <PetrovacToBuljarica />
    </>
  );
}
