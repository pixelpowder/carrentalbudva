'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PetrovacQuietAlternative() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Petrovac — The Quiet Alternative to Budva"
      subtitle="Twenty minutes south on the E65 — a calmer Riviera resort with a 600-metre beach, a Venetian fortress, and no coach-tour crowds"
      description="Why Petrovac works as a day trip or base from Budva: the beach, Kastel Lastva fortress, what to eat, where to park, and how long the drive actually takes."
      image="/img/blog-petrovac.webp"
    >
      <h2>Why Petrovac</h2>
      <p>Petrovac na Moru — usually shortened to Petrovac — sits 20 km south of Budva on the coast road. Population around 1,400 permanently, swelling in summer but never reaching Budva's scale. The old village is around a small harbour with a 600-metre pebble-and-sand beach directly in front of the main restaurant strip. Compared to the Budva Riviera further north, it's dramatically calmer: no coach tours, no mega-clubs, smaller hotels, older-skew holidaymakers, mostly Central European and some Russian regulars.</p>
      <p>For Budva-based travellers it works two ways: as a half-day drive to swim and eat, or as a lower-key base for a longer stay.</p>

      <h2>The drive from Budva</h2>
      <p>20 km, 25-30 minutes on the E65 Adriatic highway. The route passes Sveti Stefan (pull off if you haven't seen it — see our <a href={localePath('/blog/sveti-stefan-photo-spots')}>photo spots guide</a>) and continues south through Katun Reževići before the descent into Petrovac.</p>
      <p>The final approach curves down to the sea through pine forest. Parking options along the way as you enter the village — the beachfront lot fills fast in July-August, back-up free parking on the streets one block inland.</p>

      <img src="/img/blog-petrovac.webp" alt="Petrovac beach view" loading="lazy" />

      <h2>The beach</h2>
      <p>The main Petrovac beach runs directly in front of the village — 600 metres of soft reddish sand mixed with small pebbles. Water is clear and the gradient gentle, suiting children. Lučice Beach, 10 minutes walk south through a pine path, is smaller, more pebbly, and usually quieter.</p>
      <p>Two small offshore islands — Katič and Sveta Neđelja — sit a few hundred metres out. Sveta Neđelja has a small white chapel. Locals paddleboard or swim out on calm days; you can also hire a taxi-boat from the beach for €5-10 round trip.</p>

      <h2>Kastel Lastva — the Venetian fortress</h2>
      <p>At the northern end of the bay. Built in the 16th century by the Venetians as an anti-pirate defence. The fortress is partly restored and now houses a restaurant ("Castle Solis"), a small museum, a cafe and a music-club in summer. Entry to the grounds is usually free; the restaurant is mid-priced.</p>
      <p>Even if you're not eating there, walk up the short staircase to the battlements for a view back across the bay toward the village.</p>

      <h2>Where to eat</h2>
      <p><strong>Konoba Petrovac</strong> on the harbour does grilled fish, calamari and octopus salad on a terrace directly above the water. Family-run, cash preferred, no frills. Budget €15-20 per person.</p>
      <p><strong>Castle Solis</strong> inside the fortress — atmospheric setting, better wine list than the beach konobas, mid-to-upper-range price.</p>
      <p><strong>Restoran Kastio</strong> at the south end of the promenade — reliable mix of local and international dishes, kid-friendly.</p>

      <h2>As a base instead of a day trip</h2>
      <p>If you're thinking about where to stay for a week of coastal Montenegro, Petrovac is worth considering over Budva for:</p>
      <ul>
        <li><strong>Quieter evenings</strong> — bed by 23:00, not 04:00</li>
        <li><strong>Beachfront room value</strong> — roughly 20-30% cheaper than equivalent Budva stays</li>
        <li><strong>Family-friendly</strong> — much safer cycle paths, less traffic, better swimming</li>
        <li><strong>Still central</strong> — Budva 20 minutes, Sveti Stefan 10 minutes, Bar 15 minutes the other way</li>
      </ul>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Season:</strong> swim-season May to October. The village is sleepy November-April.</li>
        <li><strong>Parking:</strong> beachfront lot €2-3/hour in summer. Free on side streets one block inland.</li>
        <li><strong>Cash:</strong> many konobas are cash-only; ATM in the village centre.</li>
        <li><strong>Supplement the trip:</strong> Our <a href={localePath('/blog/pastrovici-highlands-drive')}>Paštrovići highlands drive</a> starts from Sveti Stefan and makes a natural inland detour on the way back.</li>
      </ul>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>20 km south of Budva</div>
          <div className="route-info__item"><strong>Drive time</strong>25-30 min</div>
          <div className="route-info__item"><strong>Beach length</strong>600 m</div>
          <div className="route-info__item"><strong>Fortress</strong>Kastel Lastva, 16th c.</div>
        </div>
      </div>
    </ContentPage>
  );
}
