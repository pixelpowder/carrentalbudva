import { t, buildAlternates } from '../metadata';
import FleetIndex from '@/src/components/pages/FleetIndex';

const SITE = 'https://www.carrentalbudva.com';

export async function generateMetadata() {
  const title = 'Our Fleet — 7 Cars for Multi-Day Budva Rentals | Car Rental Budva';
  const description = (t('en', 'fleetIndex.seoDesc') !== 'fleetIndex.seoDesc'
    ? t('en', 'fleetIndex.seoDesc')
    : 'Seven multi-day rental cars for Budva — mid-size wagons, diesel cruisers and a city Fiat. Specs, fuel range, and which car suits day-trips along the Riviera.');
  return {
    title,
    description,
    alternates: buildAlternates('cars'),
    openGraph: {
      title,
      description,
      url: `${SITE}/cars`,
      type: 'website',
      images: [{ url: `${SITE}/img/fleet/renault-megane.jpg`, width: 1200, height: 800, alt: 'Car Rental Budva fleet' }],
    },
  };
}

export default function FleetIndexRoute() {
  return <FleetIndex />;
}
