import { t, buildAlternates } from '../../metadata';
import Affiliate from '@/src/components/pages/Affiliate';

export async function generateMetadata({ params }) {
  const { lang } = await params;
  return {
    title: t(lang, 'affiliate.title') + ' | Car Rental Budva',
    description: t(lang, 'affiliate.seoDesc'),
    alternates: buildAlternates('affiliate', lang),
  };
}

export default function LangAffiliatePage() {
  return <Affiliate />;
}
