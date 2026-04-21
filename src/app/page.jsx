import { t, buildAlternates } from './metadata';
import HomeClient from '@/src/HomeClient';

export async function generateMetadata() {
  const title = 'Budva Car Rental — Budva Riviera & Tivat Airport Pickup';
  const description = t('en', 'home.seoDesc');
  return {
    title: title,
    description: description,
    alternates: buildAlternates(''),
    openGraph: { title, description, type: 'website' },
  };
}

export default function HomePage() {
  return <HomeClient />;
}
