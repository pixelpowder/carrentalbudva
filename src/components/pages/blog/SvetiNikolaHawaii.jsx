'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SvetiNikolaHawaii() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Sveti Nikola (Hawaii) — The Island Off Budva Old Town"
      subtitle="Montenegro's largest island, 15 minutes by boat from the Budva harbour, with water so clear they call it Hawaii"
      description="How to visit Sveti Nikola island from Budva: boat tickets, the three public beaches, snorkelling, deer sightings, and why locals call it Hawaii."
      image="/img/blog-sveti-nikola.webp"
    >
      <h2>What and where</h2>
      <p>Sveti Nikola rises off Budva's coast about 700 metres offshore. At 1,750 metres long it's Montenegro's largest island. Officially it takes its name from the 16th-century Church of Saint Nicholas at the northern tip. Unofficially — and far more commonly — it's called Hawaii, after a restaurant that once stood on its shore. The name stuck because of the water: turquoise, unusually clear, warmer than the mainland beaches.</p>

      <h2>Getting to the island</h2>
      <p>Look for "Hawaii" signs along the Slovenska Plaza promenade in Budva. Small motorboats and water-taxis run every 30 minutes through the morning and afternoon. A round-trip ticket is typically €5-7 per person. Journey time: 12-15 minutes each way. Last returns usually around 18:00 in summer — check with the operator, because there is no accommodation on the island and missing the last boat means an expensive private charter back.</p>

      <h2>The three beaches</h2>
      <p>All on the north and west sides, where the boats drop passengers:</p>
      <ul>
        <li><strong>Hawaii Beach (the main landing)</strong> — largest, busiest, mix of pebbles and small-stone. Sunbeds and parasols for rent. A small beach bar.</li>
        <li><strong>Halfmoon Beach (Polumjesec)</strong> — 10 minutes walk north. Curved bay, quieter, less developed.</li>
        <li><strong>Four Hooves Beach (Četiri Kopita)</strong> — further north still, smaller. Usually the quietest of the three.</li>
      </ul>
      <p>All are mixed sand-and-pebble rather than soft sand. Water shoes are worth bringing.</p>

      <img src="/img/blog-sveti-nikola.webp" alt="Sveti Nikola island beach" loading="lazy" />

      <h2>The island itself</h2>
      <p>Most of Sveti Nikola is covered in Mediterranean forest — pine, cypress, olive. A small deer population has lived on the island for decades and you'll see them grazing on the paths between beaches. There are no roads, cars, or permanent residents — just walking trails. The 16th-century church at the northern tip is usually locked but worth walking to for the view.</p>
      <p>Snorkelling on the west side is good. Visibility is often 10+ metres, and the rocky shoreline hosts small fish, sea urchins, and the occasional octopus.</p>

      <h2>What to bring</h2>
      <ul>
        <li><strong>Cash:</strong> for the boat, sunbed rental, beach bar. Card machines are unreliable on the island.</li>
        <li><strong>Water shoes:</strong> pebbly entry at all three beaches.</li>
        <li><strong>Snorkel gear:</strong> rental available but limited.</li>
        <li><strong>Sun cover:</strong> limited shade on Hawaii Beach; better tree cover on Halfmoon.</li>
        <li><strong>Food:</strong> the beach bar does basic snacks. Pack a sandwich if you want anything more.</li>
      </ul>

      <h2>Parking in Budva</h2>
      <p>Park near Slovenska Plaza — the main town beach. Underground paid parking at TQ Plaza (€1-2/hour) is the reliable option in high season. The boat pier is a 5-minute walk from there. Arrive by 09:30 to beat the boat queues in July-August.</p>

      <h2>Alternatives</h2>
      <p>If Sveti Nikola is over-busy on your chosen day, consider a kayak or SUP rental from Budva's main beach instead — you can paddle around the western shore of the island, land at a quieter cove, and skip the boat queues. See our <a href={localePath('/blog/budva-old-town-walls')}>Budva Old Town guide</a> for combining the island trip with an early-morning walk of the fortress walls.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>~700 m offshore</div>
          <div className="route-info__item"><strong>Boat time</strong>12-15 min each way</div>
          <div className="route-info__item"><strong>Return fare</strong>€5-7</div>
          <div className="route-info__item"><strong>Island length</strong>1,750 m</div>
        </div>
      </div>
    </ContentPage>
  );
}
