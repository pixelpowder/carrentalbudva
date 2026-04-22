'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BeciciRafailoviciPromenade() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Bečići & Rafailovići — The Seafront Promenade Walk from Budva"
      subtitle="Two kilometres of sand, a connecting promenade with tunnels through the cliff, and seafood restaurants worth the walk"
      description="Guide to walking or driving from Budva to Bečići and Rafailovići: the cliffside promenade, the two-tunnel route, best seafood restaurants (Tri Ribara, Porat), parking."
      image="/img/blog-becici.webp"
    >
      <h2>Why this stretch matters</h2>
      <p>Bečići Beach runs roughly 2 kilometres from the Zavala Peninsula south to the small fishing village of Rafailovići. Soft sand, gentle slope into the water, and unusually family-friendly for the Montenegrin coast. The promenade connecting Budva Old Town to Bečići and on to Rafailovići is one of the most pleasant town-to-beach walks on the Adriatic — roughly 3 km end-to-end, paved throughout, with two short cliff tunnels that are the signature feature.</p>

      <h2>The walk from Budva</h2>
      <p>Start at Slovenska Plaza (the main Budva town beach). Walk south along the concrete promenade, past Dukley Gardens on the Zavala Cape. Two short tunnels cut through the headland — cool stone, lit, with views opening onto the next bay as you exit. You emerge at the north end of Bečići Beach.</p>
      <p>The promenade continues along the whole length of Bečići, through another short tunnel at the south end, and on to Kamenovo Beach and Rafailovići. Count on 45-60 minutes walking at an unhurried pace.</p>

      <h2>By car — shorter but practical</h2>
      <p>Five-minute drive from central Budva on the main coastal road. Paid car parks at both ends of Bečići — €1-2/hour in peak season, free street parking a short walk inland. A car makes sense if you're planning a long dinner, or if you want to continue further down the coast to <a href={localePath('/blog/sveti-stefan-photo-spots')}>Sveti Stefan</a> the same evening.</p>

      <img src="/img/blog-becici.webp" alt="Bečići beach promenade" loading="lazy" />

      <h2>Rafailovići — the far end</h2>
      <p>The southernmost point of the promenade is Rafailovići, a small fishing village that became part of Budva's tourist sprawl but kept its waterfront character. The stretch of restaurants along the water here is where you eat — prices undercut central Budva and the fish is usually day-caught local.</p>
      <p><strong>Tri Ribara ("Three Fishermen")</strong> is the long-running anchor of the Rafailovići seafood strip. Waterfront tables, fresh grilled fish (ask for what's come in that day), and octopus under a sač (metal bell) that locals rate highly. Book ahead for sunset dinner in July-August.</p>
      <p><strong>Porat</strong> sits at the far southern end of Rafailovići, also on the water. Mediterranean and Montenegrin dishes — fish, meat, and a few vegetarian options. Less traditional atmosphere than Tri Ribara, more modern interior, equivalent quality.</p>

      <h2>Swimming and water</h2>
      <p>Bečići is a Blue Flag beach in most years — clear water, clean sand. Gradient is gentle, making it one of the safer stretches for children. Lifeguards in peak summer. Sunbed-and-umbrella rental €10-15 per pair per day.</p>
      <p>Rafailovići is rockier at the south end but has small sandy coves. Quieter than Bečići in general.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Promenade hours:</strong> open 24 hours, well-lit at night. Summer evenings draw a big crowd walking before dinner.</li>
        <li><strong>Tunnels:</strong> wheelchair-accessible, stroller-accessible.</li>
        <li><strong>Beach facilities:</strong> showers, toilets, changing cabins at the main Bečići entrance (€1-2).</li>
        <li><strong>Restaurant reservations:</strong> Tri Ribara books out for weekend sunset dinner. Call a day ahead in high season.</li>
        <li><strong>Swimming season:</strong> sea warms enough from late May; comfortable June-September. October still viable for hardy swimmers.</li>
      </ul>

      <h2>Combine with</h2>
      <p>The natural progression is Budva Old Town in the morning (see our <a href={localePath('/blog/budva-old-town-walls')}>Budva walls guide</a>), promenade walk to Bečići by lunchtime, and finish with sunset dinner in Rafailovići.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Beach length</strong>~2 km Bečići</div>
          <div className="route-info__item"><strong>Promenade walk</strong>45-60 min from Budva</div>
          <div className="route-info__item"><strong>Tunnels</strong>Two, short, lit</div>
          <div className="route-info__item"><strong>Best restaurant</strong>Tri Ribara, Rafailovići</div>
        </div>
      </div>
    </ContentPage>
  );
}
