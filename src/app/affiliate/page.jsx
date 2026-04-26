import { buildAlternates } from '../metadata';
import Affiliate from '@/src/components/pages/Affiliate';

export async function generateMetadata() {
  const title = 'Affiliate Programme | Car Rental Budva';
  const description = 'Earn 50% commission on every car rental booking in Montenegro. Join the Car Rental Budva affiliate programme, referral links, widgets, white-label, and API.';
  return {
    title: title,
    description: description,
    alternates: buildAlternates('affiliate'),
    openGraph: { title, description, type: 'website' },
  };
}

export default function AffiliatePage() {
  return <Affiliate />;
}
