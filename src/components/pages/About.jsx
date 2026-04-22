'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function About() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="About Car Rental Budva"
      subtitle="A local Riviera-based booking partner for vetted car rental operators along the Budva coast"
      description="Car Rental Budva is an independent booking partner for rental vehicles along the Budva Riviera, specialising in Tivat Airport pickup and coastal road trips."
      image="/img/blog-budva-oldtown.webp"
    >
      <h2>Who we are</h2>
      <p>Car Rental Budva is a booking platform that partners with small and mid-sized Montenegrin rental operators along the Budva Riviera. We're not a franchised airport desk — we're a local team who handle pickups, paperwork, and the phone call when something goes wrong on the road.</p>
      <p>The operators we work with run clean, modern fleets with full insurance and enough cars to keep availability up through peak season. We do the comparison work so you get the right vehicle at the right price.</p>

      <h2>Why Budva as a base</h2>
      <p>Budva sits in the middle of the Montenegrin coast. From here, <a href={localePath('/blog/sveti-stefan-photo-spots')}>Sveti Stefan</a> is 10 minutes south, <a href={localePath('/blog/becici-rafailovici-promenade')}>Bečići</a> is 5 minutes round the headland, <a href={localePath('/blog/petrovac-quiet-alternative')}>Petrovac</a> is 20 minutes further. The Bay of Boka is 30 minutes. Tivat Airport is 25 minutes. The whole Budva Riviera — Jaz, Bečići, Rafailovići, Sveti Stefan, Petrovac — is accessible on a single tank.</p>
      <p>The Riviera is also the base for inland drives: the <a href={localePath('/blog/pastrovici-highlands-drive')}>Paštrovići highlands</a> behind Sveti Stefan, or the Lovćen serpentine via Njeguši toward Cetinje.</p>

      <h2>What's included</h2>
      <p>Every rental includes CDW insurance, third-party liability, VAT, unlimited mileage on most categories, and 24/7 roadside support. Zero-excess insurance upgrade available. Cross-border cover (Croatia, Albania, Bosnia, Serbia, Kosovo) added on request with the Green Card paperwork prepared at booking time.</p>

      <h2>Pickup and drop-off</h2>
      <p>We meet every arriving flight at <a href={localePath('/blog/tivat-airport-to-budva')}>Tivat Airport (TIV)</a> — 20 km from Budva, 25-30 minutes drive. Late-night arrivals included, no surcharge. Alternatively we can deliver to your Budva hotel, or the Old Town pedestrian entrance for easy meet-up on arrival day.</p>
      <p>One-way rentals to Herceg Novi, Bar, Ulcinj or Podgorica are supported. Cross-border drop-off available to Dubrovnik Airport with advance notice.</p>

      <h2>Pricing</h2>
      <p>No summer premium baked into the confirmation. The rate you book is the rate you pay — taxes, airport fees and standard mileage already included. The only extras are optional zero-excess insurance and one-way fees.</p>

      <h2>Contact us</h2>
      <p>For bookings or questions, the <a href={localePath('/contact')}>contact page</a> has the form, email and WhatsApp number. We reply within two hours during business hours, next morning for overnight enquiries.</p>
    </ContentPage>
  );
}
