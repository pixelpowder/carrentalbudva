'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaToSvetiStefanDrive() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Budva to Sveti Stefan — The Short Coastal Drive with All the Stops"
      subtitle="Ten minutes on paper, half a day in practice — a stop-by-stop guide to the coastline between Budva and Sveti Stefan"
      description="Coastal driving guide from Budva to Sveti Stefan: Bečići, Rafailovići, Kamenovo, Pržno and Miločer detours, parking at each stop, best viewpoints."
      image="/img/blog-budva-svetistefan.webp"
    >
      <h2>Ten minutes or three hours</h2>
      <p>On a map, Budva to Sveti Stefan is a 10-minute drive — 10 kilometres south on the E65 Adriatic highway. In practice, nobody drives it straight. The strip between the two is one of Montenegro's most concentrated coastal attractions: three separate beach resorts, a set of small bays, and several unmissable viewpoints. Treat it as a half-day's slow driving with frequent pull-offs.</p>

      <h2>Stop 1 — Bečići (5 minutes from Budva)</h2>
      <p>First major stop. 2 km of sand, a long promenade, and the seafood restaurants of Rafailovići at the far end. See our <a href={localePath('/blog/becici-rafailovici-promenade')}>full Bečići guide</a> for restaurants and parking.</p>

      <h2>Stop 2 — Kamenovo Beach</h2>
      <p>Small bay just south of Rafailovići, reached via a short tunnel off the promenade or via a signposted side-road from the E65. Less developed than Bečići — a single beach bar, pebbly shore, good snorkelling. Paid parking (€2-3) at the top of the access road.</p>

      <img src="/img/blog-budva-svetistefan.webp" alt="Budva to Sveti Stefan coastal drive" loading="lazy" />

      <h2>Stop 3 — Pržno</h2>
      <p>Small fishing village around a sheltered bay. The beach is short (100 m) but picturesque — traditional wooden fishing boats pulled up on the sand, stone-built tavernas facing the water. Konoba Langust is the long-standing lunch spot here; book for summer weekends.</p>
      <p>Pržno is also the best approach to Miločer (next stop) — walk the coastal path south from Pržno rather than driving.</p>

      <h2>Stop 4 — Miločer Beach</h2>
      <p>A sheltered cove surrounded by pine and olive groves, historically part of the Yugoslav royal estate. Now partly public, partly managed by the Aman Sveti Stefan hotel (access fees apply for some sections in summer). The water is exceptional — clear, warm, sheltered. One of the nicest swim stops on the whole Budva Riviera.</p>
      <p>Parking: at Pržno or at the small Miločer lot at the south end. Walk in from either.</p>

      <h2>Stop 5 — Sveti Stefan viewpoints</h2>
      <p>The main attraction. Several viewpoints reached from the E65:</p>
      <ul>
        <li><strong>Coastal road lay-bys</strong> — free, unmarked, several along the 1 km directly above the island</li>
        <li><strong>St Sava Church path</strong> — paid car park at the public beach, then a 5-minute walk up</li>
        <li><strong>Đenaši aerial viewpoint</strong> — drive inland 3 km to St Sava Church itself for the drone-style shot</li>
      </ul>
      <p>Full breakdown in our <a href={localePath('/blog/sveti-stefan-photo-spots')}>Sveti Stefan photo spots guide</a>.</p>

      <h2>The drive itself</h2>
      <p>The E65 between Budva and Sveti Stefan is well-surfaced dual-carriageway for most of the way, narrowing to single-track in short sections near Pržno. Speed limit 60 km/h urban, 80 km/h open stretches. Traffic heaviest 10:00-12:00 as cruise-ship day-trippers head south. Off-peak hours (early morning, late afternoon) are far easier.</p>

      <h2>Half-day or full day?</h2>
      <p>A purely driving-and-photographing trip: allow 2.5-3 hours including stops at Bečići, Pržno, and Sveti Stefan viewpoints. Add swimming breaks: budget a full day. Add lunch at Rafailovići or Pržno and an afternoon at Miločer: that's an entire day well spent without ever leaving the 10 km stretch.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Fuel:</strong> stations at Budva and at Petrovac. None between, so top up if returning.</li>
        <li><strong>Cash:</strong> small beach bars and parking lots often cash-only.</li>
        <li><strong>Swim kit:</strong> keep towels in the boot — the whole route rewards spontaneous stops.</li>
        <li><strong>Sunset:</strong> Sveti Stefan lookout is the crowning finish. Arrive 30 min before sunset for a spot.</li>
        <li><strong>Off-season:</strong> October-April the coast road is empty and perfect for slow driving. Most beach facilities closed.</li>
      </ul>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>10 km Budva → Sveti Stefan</div>
          <div className="route-info__item"><strong>Stops</strong>5 major beaches/viewpoints</div>
          <div className="route-info__item"><strong>Time</strong>2.5 hr photo run, full day with swims</div>
          <div className="route-info__item"><strong>Best light</strong>Late afternoon to sunset</div>
        </div>
      </div>
    </ContentPage>
  );
}
