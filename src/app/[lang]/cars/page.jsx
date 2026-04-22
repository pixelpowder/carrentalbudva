import { t, buildAlternates, OG_LOCALE } from '../../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.carrentalbudva.com';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const descKey = 'fleetIndex.seoDesc';
  const descTranslated = t(lang, descKey);
  const description = descTranslated !== descKey
    ? descTranslated
    : 'Seven multi-day rental cars for Budva — mid-size wagons, diesel cruisers and a city Fiat. Specs, fuel range, and which car suits day-trips along the Riviera.';
  const titleTranslated = t(lang, 'fleetIndex.title');
  const baseTitle = titleTranslated !== 'fleetIndex.title' ? titleTranslated : 'Our Fleet';
  const title = `${baseTitle} | Car Rental Budva`;
  return {
    title,
    description,
    alternates: buildAlternates('cars', lang),
    openGraph: {
      title,
      description,
      url: `${SITE}/${lang}/cars`,
      type: 'website',
      locale: OG_LOCALE[lang] || 'en_US',
      images: [{ url: `${SITE}/img/fleet/renault-megane.jpg`, width: 1200, height: 800, alt: baseTitle }],
    },
  };
}

export default function LangFleetIndexRoute() {
  return <FleetIndex />;
}
