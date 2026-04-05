import { t, buildAlternates } from '../metadata';
import About from '@/src/components/pages/About';

export async function generateMetadata() {
  return {
    title: t('en', 'about.title') + ' | Budva Car Hire',
    description: t('en', 'about.seoDesc'),
    alternates: buildAlternates('about'),
  };
}

export default function AboutRoute() {
  return <About />;
}
