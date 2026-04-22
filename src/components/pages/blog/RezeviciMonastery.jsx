'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function RezeviciMonastery() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Reževići Monastery — An 800-Year-Old Nemanjić Foundation Above the Budva Riviera"
      subtitle="Founded in 1226 by Stefan the First-Crowned, rebuilt after Ottoman and Napoleonic attacks, and still a working Orthodox community above the sea"
      description="A visitor guide to Reževići Monastery near Petrovac: its Nemanjić-era foundation, the three churches, frescoes, and how to visit it as a short drive from Budva."
      image="/img/blog-rezevici-monastery.webp"
    >
      <h2>The oldest building you can visit from Budva</h2>
      <p>Most of Budva's recognised history is Venetian — walls, citadel, the bell tower in the old town. Reževići Monastery is a different kind of old. It sits on a low wooded ridge overlooking the sea a few kilometres north of Petrovac, and its original church is attributed to Stefan the First-Crowned — Stefan Prvovenčani — the Serbian king who was crowned in 1217 and is credited with the foundation of Reževići in 1226. That makes the monastery roughly two centuries older than the Venetian walls of Budva and contemporaneous with the very earliest English gothic cathedrals.</p>
      <p>Whether every stone of the present building dates to 1226 is a different question — the monastery has been damaged and rebuilt several times — but the site, the dedication, and the continuity of religious use are secured by a chain of charters and inscriptions going back to the Nemanjić dynasty, the medieval Serbian royal house that produced Saint Sava and a line of canonised rulers.</p>

      <h2>Three churches on one site</h2>
      <p>What you actually see today is a small walled compound containing three churches of different ages, built close together. The oldest and smallest is the Church of the Dormition of the Mother of God, usually identified with the 1226 foundation — a low single-nave structure with a modest apse. Next to it stands the larger Holy Trinity church, built in the 18th century when the monastery was rebuilt after one of several waves of damage. A third smaller chapel dedicated to Saint Stefan completes the group. The churches share a bell tower and a narrow stone courtyard.</p>
      <p>Inside, the older church retains fragments of fresco work, though much of what was there has been lost to centuries of weather, war and salt air. The 18th-century church has a more complete iconostasis. Entry to the churches is free and expected of visitors; modest dress is required — shoulders and knees covered — and wrap scarves are usually available at the gate for anyone arriving in beachwear.</p>

      <img src="/img/blog-rezevici-monastery.webp" alt="Stone Orthodox monastery above the Adriatic coast" loading="lazy" />

      <h2>Why it kept being rebuilt</h2>
      <p>The monastery's history reads as a compressed version of the coast's. It was attacked and partially destroyed during an Ottoman incursion in the 15th century, rebuilt under Venetian-era protection while remaining an Orthodox institution, damaged again during the Napoleonic period when French, Russian and British fleets traded the Adriatic coast between 1805 and 1814, and finally suffered in the 1979 earthquake that levelled so much of the Budva region. Every one of those events is recorded in inscriptions, liturgical books or surviving damage.</p>
      <p>The current monastery community is small — a handful of resident monks — and the site functions as a working religious community rather than a staffed museum. That means opening hours are not publicised in the way they would be for a state-run site; as a rule the compound is accessible during daylight hours, with the churches unlocked during services and often between them. If you arrive during a service, you are welcome to step inside quietly and observe.</p>

      <h2>Getting there from Budva</h2>
      <p>The monastery sits inland from the coastal road between Sveti Stefan and Petrovac — close to <a href={localePath('/blog/drobni-pijesak-cove')}>Drobni Pijesak</a> and within walking distance if you have a spare half-hour and decent shoes. By car from Budva it is a twenty-minute drive south on the old Jadranska Magistrala, then a signposted turn inland and a short climb on a narrow tarmac lane to the small car park outside the monastery gate. The lane is passable in any hire car but not wide — meeting a vehicle coming the other way requires one of you to reverse to a passing place.</p>
      <p>If you are combining Reževići with a Petrovac visit, a natural order is: monastery first (quieter in the morning), then down to Petrovac for lunch and the afternoon beach. The opposite order also works — the monastery is cooler in the afternoon under the pines than the town is on the sand.</p>

      <h2>What to look for</h2>
      <p>Inside the older church, look for the stone inscription above the doorway — fragmentary, worn, but the kind of direct physical link to the medieval foundation that makes the visit worthwhile even if Byzantine fresco iconography is not your usual subject. In the courtyard, the well and the old refectory buildings give a sense of how a small Orthodox monastery actually operated: self-contained, agricultural, dependent on donations from the surrounding Paštrovići brotherhoods for centuries of survival.</p>
      <p>The view from just outside the monastery gate, south over the Petrovac bay, is one of the better inland viewpoints on this part of the Riviera — and it costs you nothing.</p>

      <h2>Practical notes</h2>
      <ul>
        <li><strong>From Budva:</strong> ~18 km south, 20–25 minute drive.</li>
        <li><strong>Entry:</strong> Free. Donation box inside. Modest dress required.</li>
        <li><strong>Opening:</strong> Daylight hours in practice; not a staffed museum.</li>
        <li><strong>Combine with:</strong> Drobni Pijesak cove, Petrovac town, or a longer loop via the <a href={localePath('/blog/pastrovici-olive-harvest')}>Paštrovići olive villages</a> inland.</li>
      </ul>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Founded</strong>1226 (attrib. Stefan Prvovenčani)</div>
          <div className="route-info__item"><strong>From Budva</strong>~18 km south</div>
          <div className="route-info__item"><strong>Churches on site</strong>Three</div>
          <div className="route-info__item"><strong>Entry</strong>Free, donations welcome</div>
        </div>
      </div>
    </ContentPage>
  );
}
