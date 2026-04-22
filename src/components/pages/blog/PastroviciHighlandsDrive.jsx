'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PastroviciHighlandsDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="The Paštrovići Highlands Drive — Inland from Budva"
      subtitle="Praskvica Monastery (1050), Kosmač Fortress, and the hinterland villages above Sveti Stefan"
      description="A driver's guide to the Paštrovići highlands behind Budva: Praskvica Monastery, Kosmač Fortress at 800m, the drive from Sveti Stefan, and where to eat in the hill villages."
      image="/img/blog-pastrovici.webp"
    >
      <h2>Why drive inland</h2>
      <p>The hills behind Budva and Sveti Stefan are the Paštrovići region — named after a medieval clan whose 13 communities governed this stretch of coast with unusual autonomy. The Paštrovići elected their own judges and maintained an independent legal system through Venetian, Ottoman and Austrian rule. Today the region is mostly empty villages, old stone houses, and two significant religious-and-military sites on a loop drive that takes about three hours including stops.</p>
      <p>It's a welcome change of scale from the beach strip — cool pine forest, wide views back down to the Adriatic, and zero coastal crowds.</p>

      <h2>Praskvica Monastery</h2>
      <p>The spiritual and historical heart of the Paštrovići region. Founded around 1050, making it one of the oldest continuously active monasteries in the area. The current complex is a rebuild — like everything on this coast it suffered Ottoman raids, earthquakes, and post-war neglect. Two churches: the older Church of St Nicholas and the later Church of the Holy Trinity, both with surviving medieval frescoes.</p>
      <p>The monastery was historically the administrative centre for the Paštrovići clan councils. Modern visitors can tour the churches, see the small treasury (icons, manuscripts), and walk the terraced grounds. Free entry. Modest dress required.</p>
      <p>From Sveti Stefan: turn inland at the village of Čelobrdo — roughly 5 km and 15 minutes' drive from the coast.</p>

      <img src="/img/blog-pastrovici.webp" alt="Paštrovići highlands" loading="lazy" />

      <h2>Kosmač Fortress</h2>
      <p>Continue uphill from Praskvica toward the village of Brajići. The road climbs through oak and pine forest. Above Brajići, at around 800 m, stands the ruin of Kosmač Fortress — an Austro-Hungarian-era border post built in the 19th century to guard the frontier with Montenegro (then an independent principality, not yet part of Austria-Hungary).</p>
      <p>The fortress is unrestored, partly collapsed, fully open to wander. Climb to the top for panoramic views: the Budva Riviera coastline below, Sveti Stefan visible as a dot, the Lovćen range to the west. Completely free, completely unsupervised — watch your footing on unstable walls.</p>

      <h2>The wider drive</h2>
      <p>From Kosmač the road continues inland and rises further, with several small villages (Brajići, Mrčevac, Duljevo) where old stone houses sit beside newer holiday homes. The landscape shifts: fewer olives, more oak scrub, occasional vineyards. In spring (April-May) the wildflowers along the verges are unusually dense.</p>
      <p>A full loop: Budva → Sveti Stefan → Čelobrdo → Praskvica → Brajići → Kosmač → return via Blizikuće and Buljarica to the coast road. About 45 km, 2-3 hours with stops.</p>

      <h2>Food in the hills</h2>
      <p>Konoba Zora in Blizikuće is the village restaurant with the broadest local reputation — grilled lamb, homemade cheese, rakija. Budget €15-20 per person. Cash preferred. Call ahead in shoulder seasons (they sometimes close for winter weeks).</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Road condition:</strong> asphalt throughout the loop but narrow, with hairpins. Fine for any standard rental.</li>
        <li><strong>Fuel:</strong> fill up in Budva before heading inland. No stations on the loop itself.</li>
        <li><strong>Signal:</strong> patchy above Brajići. Offline map is useful.</li>
        <li><strong>Dress:</strong> layers — it's noticeably cooler 800 m up, even in summer.</li>
        <li><strong>Best time:</strong> avoid mid-day sun in July-August; go early morning or late afternoon for the best light and temperatures.</li>
      </ul>

      <h2>Pair with</h2>
      <p>The Paštrovići loop combines beautifully with a morning in <a href={localePath('/blog/budva-old-town-walls')}>Budva Old Town</a> and a late-afternoon stop at <a href={localePath('/blog/sveti-stefan-photo-spots')}>Sveti Stefan</a> for the golden-hour shot on the way back down.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Loop length</strong>~45 km</div>
          <div className="route-info__item"><strong>Drive time</strong>2-3 hr with stops</div>
          <div className="route-info__item"><strong>Highest point</strong>Kosmač, ~800 m</div>
          <div className="route-info__item"><strong>Monastery age</strong>Praskvica, c.1050</div>
        </div>
      </div>
    </ContentPage>
  );
}
