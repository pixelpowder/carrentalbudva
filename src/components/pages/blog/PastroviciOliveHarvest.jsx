'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function PastroviciOliveHarvest() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="The Paštrovići Olive Harvest — Autumn in the Hills Behind the Budva Riviera"
      subtitle="October into November, family-run mills still pressing the groves that have fed the coast for centuries"
      description="A seasonal guide to the Paštrovići olive harvest: where the old groves grow, which small mills still work, how to buy oil, and how to time a shoulder-season visit from Budva."
      image="/img/blog-pastrovici-olive-harvest.webp"
    >
      <h2>The coast's other main crop</h2>
      <p>Summer on the Budva Riviera belongs to the beaches. Autumn, once the tourist peak subsides, belongs to the olives. The steep hills behind the coast between Budva and Petrovac — the heartland of the historic Paštrovići clan — are covered in olive groves, some of which have been worked continuously for several hundred years. The trees themselves are long-lived: individual specimens of hundreds of years old are not uncommon, and a handful of named trees on the coast are claimed to be substantially older. From mid-October through the first weeks of November, the harvest runs, and the small village mills above the coast switch on their presses.</p>
      <p>For a visitor, the harvest period is interesting for reasons that aren't really about olive oil. It is shoulder season on the coast; the weather is generally warm, dry and clear; the crowds are gone; and the rhythm of the inland villages is visibly different from July — people out with nets and crates, smoke from mills, workshops open that are closed all summer. A drive inland from Budva on a clear October morning catches this better than any other part of the year.</p>

      <h2>Where the old groves are</h2>
      <p>The main concentration of working olive land runs from the hills directly behind Sveti Stefan and Petrovac, inland into the Paštrovići villages — places like Reževići (which also gives its name to the nearby <a href={localePath('/blog/rezevici-monastery')}>monastery</a>), Buljarica, Gradište, Blizikuće and others scattered on the terraced slopes. Terracing is the visual signature: hand-built stone retaining walls, some of them centuries old, supporting narrow bands of olive land stacked up the hillside. Varieties grown here are predominantly Žutica and Crnica, local landrace trees adapted to the rocky limestone soil and the summer drought.</p>
      <p>Bar municipality, further south, has the largest and most commercial olive industry in Montenegro and is where most professional production happens. The Paštrovići side is smaller, more fragmented, and more household-scale — which is part of what makes it interesting to visit. Many families here still press oil from their own trees for their own use, with any surplus sold informally to neighbours and, occasionally, to outsiders who ask.</p>

      <img src="/img/blog-pastrovici-olive-harvest.webp" alt="Basket of freshly harvested olives under autumn light" loading="lazy" />

      <h2>What harvest looks like</h2>
      <p>Unlike large commercial operations in Italy or Spain, harvest in the Paštrovići is mostly done by hand or with simple hand-held rakes. Nets are spread under the tree, the branches are combed or gently beaten, and the olives fall. The fruit is then crated and driven the same day or the next to a local mill. Because the volumes are small and the trees are on terraced land that machines can't reach, the whole cycle is slow and labour-intensive — an entire extended family out for days on the same grove is normal.</p>
      <p>If you are walking or driving through the villages in late October, you will see this happening. You are welcome to watch from the road; stepping into a grove without an invitation is not the local custom. If you stop a family at their work and show polite interest, it is quite common to end up with a small bottle of oil pressed.</p>

      <h2>The mills</h2>
      <p>A number of village-scale mills operate in the Paštrovići and Bar hills during the harvest. These are not polished food-tourism experiences — they are working industrial spaces, often in converted old stone buildings, that smell powerfully of fresh oil and warm olive paste. A mill visit during the season, arranged informally through a local contact, is one of the more authentic experiences available inland from Budva. Specific mill opening days and phone numbers vary year to year, so we won't print them here — ask at your accommodation or at the desk when you pick up the car.</p>

      <h2>Buying the oil</h2>
      <p>Genuine Paštrovići or Bar extra-virgin olive oil is usually sold in recycled one-litre glass bottles, sometimes in five-litre plastic jerrycans, directly from the producer. Prices vary with the year's harvest. Quality is generally very high because the oil is pressed quickly, stored cool, and consumed locally within a year. For the visitor it is worth knowing that the small jars sold in tourist shops in Budva are not always the real thing; the reliable way to buy is from a producer or a mill, with someone local guiding the introduction.</p>

      <h2>Combining with a shoulder-season Budva trip</h2>
      <p>Because the harvest runs in October–November, a visit pairs naturally with other shoulder-season drives that are unpleasant in August heat. A morning inland into the Paštrovići groves, a lunch at one of the villages, an afternoon at <a href={localePath('/blog/rezevici-monastery')}>Reževići Monastery</a> or down at <a href={localePath('/blog/drobni-pijesak-cove')}>Drobni Pijesak</a> for a quiet swim while the sea is still warm — that is the shape of an excellent October day on the Budva Riviera. If you have a full day, extend inland and up to <a href={localePath('/blog/cetinje-day-trip-from-budva')}>Cetinje</a>.</p>

      <h2>Practical notes</h2>
      <ul>
        <li><strong>Season:</strong> Broadly mid-October through early-to-mid November. Exact start depends on the year's weather.</li>
        <li><strong>Weather:</strong> Generally warm and dry, occasional rain, sea still swimmable.</li>
        <li><strong>Access:</strong> Roads into the hill villages are narrow and winding — small car recommended.</li>
        <li><strong>Etiquette:</strong> Stay off private groves unless invited. Buy oil only from producers or their mills.</li>
      </ul>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Harvest window</strong>Mid-Oct to early-Nov (approx.)</div>
          <div className="route-info__item"><strong>Typical varieties</strong>Žutica, Crnica</div>
          <div className="route-info__item"><strong>Scale</strong>Family + village mills</div>
          <div className="route-info__item"><strong>Best base</strong>Budva for the coast + inland loop</div>
        </div>
      </div>
    </ContentPage>
  );
}
