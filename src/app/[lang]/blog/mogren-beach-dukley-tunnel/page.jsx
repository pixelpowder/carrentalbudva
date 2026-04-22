import { buildAlternates } from '../../../metadata';
import MogrenBeachDukleyTunnel from '@/src/components/pages/blog/MogrenBeachDukleyTunnel';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: "Mogren Beach and the Cliff Tunnel — Two Hidden Coves Just North of Budva Old Town" + ' | Car Rental Budva',
    description: "A guide to Mogren Beach I and II near Budva Old Town: the cliff-path approach, the short connecting tunnel, swimming conditions, and the Dukley headland above.",
    alternates: buildAlternates('blog/mogren-beach-dukley-tunnel', lang),
  };
}

export default async function LangMogrenBeachDukleyTunnelRoute({ params }) {
  const { lang } = await params;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Mogren Beach and the Cliff Tunnel — Two Hidden Coves Just North of Budva Old Town",
    "description": "A guide to Mogren Beach I and II near Budva Old Town: the cliff-path approach, the short connecting tunnel, swimming conditions, and the Dukley headland above.",
    "image": "https://www.carrentalbudva.com/img/blog-mogren-beach-dukley-tunnel.webp",
    "datePublished": "2026-04-22",
    "dateModified": "2026-04-22",
    "author": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" },
    "publisher": { "@type": "Organization", "name": "Car Rental Budva", "url": "https://www.carrentalbudva.com" }
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <MogrenBeachDukleyTunnel />
    </>
  );
}
