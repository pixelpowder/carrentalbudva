import { buildAlternates } from '../../metadata';
import SvetiStefanPhotoSpots from '@/src/components/pages/blog/SvetiStefanPhotoSpots';

export async function generateMetadata() {
  return {
    title: "Sveti Stefan — The Best Photo Spots (And How to Reach Them)" + ' | Car Rental Budva',
    description: "A car-based guide to photographing Sveti Stefan from every angle: the St Sava lookout, coastal road pull-offs, public beach, kayak hire, and best time of day.",
    alternates: buildAlternates('blog/sveti-stefan-photo-spots'),
    openGraph: { title: "Sveti Stefan — The Best Photo Spots (And How to Reach Them)", description: "A car-based guide to photographing Sveti Stefan from every angle: the St Sava lookout, coastal road pull-offs, public beach, kayak hire, and best time of day.", type: 'website' },
  };
}

export default function SvetiStefanPhotoSpotsRoute() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Sveti Stefan — The Best Photo Spots (And How to Reach Them)",
    "description": "A car-based guide to photographing Sveti Stefan from every angle: the St Sava lookout, coastal road pull-offs, public beach, kayak hire, and best time of day.",
    "image": "https://www.carrentalbudva.com/img/blog-sveti-stefan.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SvetiStefanPhotoSpots />
    </>
  );
}
