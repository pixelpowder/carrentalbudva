'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaOldTownWalls() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Budva Old Town Walls — A 2,500-Year Fortress on the Adriatic"
      subtitle="Venetian fortifications, the Citadel, ancient churches, and the Illyrian helmets hidden in the town museum"
      description="A walking and driving guide to Budva's Old Town: the walls, the Citadel, St George's Church, the Roman villa, and parking tips for the old stone quarter."
      image="/img/blog-budva-oldtown.webp"
    >
      <h2>A town older than most of Europe</h2>
      <p>Budva is one of the oldest continuously inhabited settlements on the Adriatic — Greek colonisation began here in the 5th century BC, making the town roughly 2,500 years old. What you see today is the Venetian-era reconstruction: the walls are predominantly 15th-century, from the period when Budva (then called <em>Budua</em>) was part of <em>Albania Veneta</em> and served as a fortified Venetian outpost against Ottoman expansion.</p>
      <p>The Venetians held the town for nearly four centuries — 1420 to 1797. After a catastrophic earthquake in April 1979 (magnitude 7), UNESCO funded a full restoration, completed by 1987. What you walk through today is a carefully rebuilt medieval stone town, still inhabited by residents in restored stone houses.</p>

      <h2>The walls themselves</h2>
      <p>The fortification circuit is a loop of about 400 metres of walkable wall. The main entrance carries the winged lion of Saint Mark — the heraldic symbol of Venice — over the gate, though erosion has left it partly legible. Climbing the walls costs a small entry fee (around €3) and the walk is accessible to most, though not step-free.</p>
      <p>From the walls you get the classic Budva photograph: red-tiled roofs inside, walls outside, the Adriatic behind, and the marina full of yachts curving away north toward Slovenska Plaza.</p>

      <img src="/img/blog-budva-oldtown.webp" alt="Budva Old Town walls" loading="lazy" />

      <h2>The Citadel (Sveta Marija Citadel)</h2>
      <p>At the southern tip of the Old Town, on the highest point inside the walls. Originally a defensive fortress, later a military barracks, now a small museum with an open-air amphitheatre. The observation deck gives a full 180° panorama — harbour, Sveti Nikola Island (Hawaii) a few hundred metres offshore, and the Paštrovići hills behind.</p>
      <p>Small entrance fee (around €5). Allow 30-45 minutes.</p>

      <h2>Churches inside the walls</h2>
      <p><strong>St George's Church (Sveti Đorđe)</strong> — the largest of the Old Town churches, with roots in the 9th century. The bell tower is 18th-century. Free entry, modest dress.</p>
      <p><strong>Holy Trinity Church (Sveta Trojica)</strong> — 1804, Orthodox. Distinctive striped white-and-red stone façade. Small, atmospheric interior.</p>
      <p><strong>Santa Maria in Punta</strong> — 840, Benedictine. One of the oldest churches on the entire Adriatic coast. Now mostly used for occasional concerts.</p>

      <h2>The Roman villa and Illyrian helmets</h2>
      <p>The 1979 earthquake exposed the foundations of a Roman villa and bath house beneath the town — previously unknown. Both are now open to viewing. The Budva City Museum, just inside the walls, holds the rest: the famous Illyrian bronze helmets recovered from local archaeological sites, Greek pottery, Roman glass. Small but well-curated, worth an hour. Around €3 entry.</p>

      <h2>Parking and access</h2>
      <p>The Old Town is pedestrianised. Cars cannot enter the walls. The main car park options:</p>
      <ul>
        <li><strong>TQ Plaza / Slovenska Plaza underground</strong> — 300 m north of the walls. €1-2 per hour. Safest option for long stays.</li>
        <li><strong>Pizana Street metered parking</strong> — limited, fills by 10:00 in July-August.</li>
        <li><strong>Harbour car park</strong> — south side, slightly more expensive but closest to the Citadel entrance.</li>
      </ul>
      <p>Avoid driving into the narrow streets west of the Old Town — they're a warren and parking is limited to permit-holders.</p>

      <h2>When to visit</h2>
      <p>The Old Town fills by 10:30 in peak summer with cruise-ship day trips and coach tours. Before 09:30 or after 18:00 is quieter. The walls themselves are open 09:00-21:00 in summer, reduced hours in winter.</p>

      <h2>Pair with</h2>
      <p>After the walls, walk the sea-front promenade 10 minutes south to <a href={localePath('/blog/becici-rafailovici-promenade')}>Bečići Beach</a> for a swim, or take a boat from Slovenska Plaza to <a href={localePath('/blog/sveti-nikola-hawaii')}>Sveti Nikola (Hawaii) Island</a> for the afternoon.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Oldest part</strong>~2,500 years (Greek origins)</div>
          <div className="route-info__item"><strong>Walls</strong>15th-century Venetian</div>
          <div className="route-info__item"><strong>Wall entry</strong>~€3</div>
          <div className="route-info__item"><strong>Best time</strong>Before 09:30 or after 18:00</div>
        </div>
      </div>
    </ContentPage>
  );
}
