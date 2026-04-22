'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function TivatAirportToBudva() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Tivat Airport to Budva — The 25-Minute Drive and Route Options"
      subtitle="20 km south-east to the Riviera — with the option to detour via Kotor or the Lovćen serpentine for the scenic version"
      description="Driving guide from Tivat Airport (TIV) to Budva: the direct 25-minute route, scenic alternatives via Kotor or Lovćen, airport pickup procedure, toll roads."
      image="/img/blog-tivat-arrival.webp"
    >
      <h2>Tivat Airport as the gateway</h2>
      <p>Tivat (IATA: TIV) is the nearest airport to Budva — 20 km south-east, 25-30 minutes by car on a clear day. It handles most summer tourist flights to the Montenegrin coast, with direct connections from London, Moscow, Milan, Paris and Vienna among others. In winter it quiets down significantly.</p>
      <p>The alternative is Podgorica Airport (TGD), 80 km east — year-round scheduled flights, fewer summer charters, and an hour's drive via the inland motorway.</p>

      <h2>The direct route (25-30 minutes)</h2>
      <p>Leave the Tivat terminal, follow signs for Budva on the main road. The route passes through the village of Radovići, crosses the small Verige Strait, and winds over the Vrmac ridge before descending into Budva. This is the route most taxis take.</p>
      <p>Traffic: smooth outside July-August. In peak summer, the Vrmac pass section can slow to a crawl on Saturday changeover days, adding 20-30 minutes.</p>

      <h2>Scenic alternative — via Kotor (45 minutes)</h2>
      <p>Add a detour via Kotor Bay. Leave Tivat going north-west instead of south-east, drive the head of the bay to Kotor's Old Town (10 minutes), stop for a coffee with the fortress walls above you, then cut inland on the P11 over the Budva pass. 45 minutes total.</p>
      <p>Recommended for an afternoon arrival — you land at Tivat, eat in Kotor, roll into Budva by early evening.</p>

      <img src="/img/blog-tivat-arrival.webp" alt="Tivat Airport arrival" loading="lazy" />

      <h2>Scenic alternative — Lovćen serpentine (75+ minutes)</h2>
      <p>For a dramatic introduction to Montenegro, take the old road over Mount Lovćen. Leave Kotor climbing the 25-bend serpentine, cross the national park summit, descend via Njeguši (prosciutto and cheese country), then drop into Budva via Cetinje. 75 minutes plus stops — most people stretch it to three hours.</p>
      <p>This route requires a car you're confident driving on single-track mountain roads with no guardrails. Low-slung sports cars are fine; novice drivers should take the direct route instead.</p>

      <h2>Airport pickup procedure</h2>
      <p>When your flight lands, clear immigration and collect luggage. Our representative meets you in arrivals with a sign bearing your name. Documents checked, keys handed over, car is in the terminal lot steps from the door. Typical time from wheels-down to driving away: 20-25 minutes.</p>
      <p>Drop-off on return: return the car to the same terminal lot, hand keys over, inside the terminal in under 10 minutes. We confirm fuel and condition then send the final invoice by email.</p>

      <h2>Tolls and petrol</h2>
      <p>There are no toll roads on the direct Tivat-Budva route. The new Sozina Tunnel (on the Tivat-Bar direction, not Tivat-Budva) charges €2.50. Fuel stations are plentiful; there's one immediately outside the Tivat Airport exit if you want to fill up before setting off.</p>

      <h2>Common arrival questions</h2>
      <ul>
        <li><strong>What if my flight is delayed?</strong> We track every flight and adjust pickup time automatically. No surcharge.</li>
        <li><strong>Late night arrival?</strong> Every arriving flight is met, including 02:00-04:00 charters in July-August.</li>
        <li><strong>Cross-border plans?</strong> Tell us at booking — Green Card paperwork for Croatia, Bosnia, Albania, Serbia and Kosovo is prepared in advance.</li>
        <li><strong>Infant seats?</strong> Available on request — book at least 48 hours ahead.</li>
      </ul>

      <h2>After the drive</h2>
      <p>Budva's Old Town is compact and walkable — park at TQ Plaza and explore on foot. See our <a href={localePath('/blog/budva-old-town-walls')}>Old Town walls guide</a> for the first-afternoon orientation.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>20 km direct</div>
          <div className="route-info__item"><strong>Drive time</strong>25-30 min (direct)</div>
          <div className="route-info__item"><strong>Scenic via Kotor</strong>45 min</div>
          <div className="route-info__item"><strong>Scenic via Lovćen</strong>75 min+</div>
        </div>
      </div>
    </ContentPage>
  );
}
