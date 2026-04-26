'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function Montenegro() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Driving the Adriatic Coast, A Montenegro Overview"
      subtitle="The country is small, the coast is dense. What you can reasonably cover by car with Budva as a base."
      description="A practical overview of Montenegro for Budva-based self-drive visitors: coastal towns, inland detours, typical drive times, and border crossings."
      image="/img/blog-budva-to-lovcen-mausoleum.webp"
    >
      <h2>Montenegro in rough numbers</h2>
      <p>Montenegro is under 14,000 square kilometres — roughly the size of Northern Ireland. Population 620,000. About 290 km of Adriatic coastline, of which the most concentrated resort strip — the Budva Riviera — is 25 km. The interior is dominated by limestone mountains rising to over 2,500 metres within 30 km of the sea.</p>
      <p>For a Budva-based visitor, that means an hour's drive brings you to dramatically different terrain: coastal towns, high mountain passes, lake country, or into Albania.</p>

      <h2>The Budva Riviera (your home strip)</h2>
      <p>Jaz Beach, Budva Old Town, Slovenska Plaza, Bečići, Rafailovići, Pržno, Miločer, Sveti Stefan, Petrovac. 25 km end-to-end, covered by the coastal E65. See our guide to <a href={localePath('/blog/milocer-park-villa')}>Miločer Park</a> and the <a href={localePath('/blog/drobni-pijesak-cove')}>Drobni Pijesak cove</a>.</p>

      <h2>Within 60 minutes by car</h2>
      <ul>
        <li>Tivat Airport, 25 min (main gateway)</li>
        <li><a href={localePath('/blog/kotor-day-trip-from-budva')}>Kotor Bay and Old Town</a>, 30 min</li>
        <li><a href={localePath('/blog/rezevici-monastery')}>Reževići Monastery</a>, 20 min south</li>
        <li><a href={localePath('/blog/cetinje-day-trip-from-budva')}>Cetinje royal capital</a>, 1 hr via Lovćen</li>
        <li>Herceg Novi, 50 min to the west</li>
        <li><a href={localePath('/blog/budva-to-bar-ferry-port')}>Bar port</a> — 60 min south</li>
      </ul>

      <h2>Longer trips from Budva</h2>
      <ul>
        <li>Podgorica (capital) — 65 min</li>
        <li>Lake Skadar (Virpazar) — 75 min</li>
        <li>Ulcinj (southernmost coast) — 75 min</li>
        <li>Ostrog Monastery — 2 hr</li>
        <li>Shkodër, Albania — 2 hr (border at Božaj)</li>
        <li>Dubrovnik, Croatia — 2 hr (border at Debeli Brijeg)</li>
        <li>Tara Canyon / Žabljak — 3.5 hr</li>
      </ul>

      <h2>Borders and cross-country driving</h2>
      <p>Montenegro borders Albania, Kosovo, Serbia, Bosnia and Herzegovina, and Croatia. All five are reachable by car from Budva. Most EU/UK/US/Australian passports enter visa-free. Rental cars need a Green Card for cross-border — we include it by default when you tell us your plans at booking.</p>
      <p>The two most-used crossings from Budva: <strong>Debeli Brijeg</strong> for Croatia (Dubrovnik 2 hr), <strong>Božaj</strong> for Albania (Shkodër 2 hr).</p>

      <h2>When to visit</h2>
      <p><strong>May-June:</strong> mild coast, warm sea by late May, thin coastal crowds, wildflower interior. Best overall.</p>
      <p><strong>July-August:</strong> hot, crowded, festival season at Jaz Beach. The classic Riviera experience, at peak prices.</p>
      <p><strong>September:</strong> the sweet spot. Warm water, calmer beaches, wine harvest inland.</p>
      <p><strong>October-April:</strong> coast quiet and cheap. Most beach bars closed. Interior can get serious winter snow from December.</p>
    </ContentPage>
  );
}
