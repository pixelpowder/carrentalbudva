import { t, buildAlternates } from './metadata';
import HomeClient from '@/src/HomeClient';

export async function generateMetadata() {
  return {
    title: 'Budva Car Rental — Budva Riviera & Tivat Airport Pickup',
    description: t('en', 'home.seoDesc'),
    alternates: buildAlternates(''),
  };
}

export default function HomePage() {
  return <HomeClient />;
}
