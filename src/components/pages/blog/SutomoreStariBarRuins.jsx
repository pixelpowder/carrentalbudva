'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function SutomoreStariBarRuins() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Sutomore and Stari Bar — A Day Trip South Through the Sozina Tunnel from Budva"
      subtitle="Forty minutes from Budva: a long family beach town and a medieval ruined city on a hillside"
      description="A Budva-based day trip to Sutomore's beach and the ruins of Stari Bar: the Sozina tunnel, parking, what to see in the old city, and how to combine both in one loop."
      image="/img/blog-sutomore-stari-bar-ruins.webp"
    >
      <h2>A very different south</h2>
      <p>The Budva Riviera ends, in editorial terms, at Petrovac. Further south — past the headland at Buljarica, through a long uninhabited stretch of coast, and out the other side of a 4.1-km road tunnel — you arrive in the Bar municipality. This is a different Montenegro. The beaches are longer and flatter; the towns are administrative rather than touristic; and on a hillside five kilometres inland sits Stari Bar, the ruined medieval city that was the regional capital for a thousand years before the modern port of Bar took over in the late nineteenth century. From Budva, both Sutomore beach and the Stari Bar ruins make a full-day loop that is genuinely worthwhile.</p>

      <h2>Getting there: the Sozina tunnel</h2>
      <p>The driver's route south leaves Budva on the coastal road, passes Petrovac, and continues to the turn for the Sozina tunnel — a 4.189-km toll tunnel that cuts under the mountain ridge separating the Budva coast from the Bar region. The tunnel opened in 2005 and transformed the drive: before it, getting from Budva to Bar meant a long coastal detour or the switchback climb over the mountain. Today it is a flat, straight, well-lit ten-minute passage with a toll at the southern end — a modest fee for cars, payable at the booth. Outside of peak August weekends the tunnel is uncongested.</p>
      <p>From the southern portal, a few minutes of dual carriageway brings you to the signed exit for Sutomore; a few more to Bar itself, with Stari Bar signed inland from the modern town.</p>

      <h2>Sutomore: the beach town</h2>
      <p>Sutomore's main asset is a long sand-and-pebble beach of around 1.2 km, backed by a seafront that runs almost end-to-end with cafés, fast-food kiosks, sunbed hire and small family hotels. The character is deliberately less polished than Budva or Sveti Stefan: it is a summer beach for Balkan families rather than an international resort. Prices are noticeably lower, the crowd is Serbian, Russian and Montenegrin before it is western European, and in August the place is packed.</p>
      <p>For a Budva-based day-tripper it is a good midday stop — easy parking on the outskirts, a swim, lunch on the seafront, then back in the car for the drive to Stari Bar. The water is shallower and warmer than at the Budva Riviera beaches.</p>

      <img src="/img/blog-sutomore-stari-bar-ruins.webp" alt="Stari Bar medieval ruined city on the hillside" loading="lazy" />

      <h2>Stari Bar: a ruined city</h2>
      <p>Stari Bar — "Old Bar" — is one of the most substantial medieval ruin sites on the east Adriatic. The city was founded in the Byzantine period, flourished under Serbian and then Venetian rule, and reached its peak as a fortified trading town of several thousand inhabitants. It changed hands between Venice, the Ottomans and Montenegro across a long succession of sieges. The decisive blow was an explosion of a gunpowder magazine in the late nineteenth century, during the period when Montenegrin forces took the city from the Ottomans; the blast devastated much of the upper town, and the final depopulation followed a severe earthquake.</p>
      <p>What remains is an archaeological park of roughly four hectares within standing defensive walls. Inside are the ruins of more than two hundred buildings: churches, palaces, aqueducts, bath-houses, a clock tower and narrow stepped streets. The site is partially restored and partially left as honest ruin, and it is large enough to absorb a couple of hours of slow walking. An entrance ticket is required; a small museum at the gate displays finds from ongoing excavations.</p>

      <h2>What to look for inside Stari Bar</h2>
      <p>The Cathedral of Saint George — the largest church on the site, now roofless — dates in its earliest form to the 11th century and was rebuilt multiple times before the 19th-century explosion destroyed it. The clock tower on the main street survives largely intact. The Ottoman-era aqueduct, which ran water into the city from a spring some distance away, is one of the few of its kind in Montenegro that still stands in parts. The outer walls, with their gates and bastions, are walkable in places.</p>
      <p>Outside the ruined city, the modern village of Stari Bar has a short main street of traditional restaurants built into old houses; lunch here rather than in Sutomore is the alternative plan for the day. An olive tree on the outskirts — often pointed out to visitors — is claimed by Bar municipality to be more than two thousand years old. The claim is difficult to verify with certainty, but the tree is undeniably enormous and very old; you can judge for yourself.</p>

      <h2>Practical notes</h2>
      <ul>
        <li><strong>Distance from Budva:</strong> Budva–Sutomore about 40 km via the Sozina tunnel; Stari Bar another 10 km.</li>
        <li><strong>Driving time:</strong> Around 45–55 minutes Budva to Sutomore, 10–15 minutes on to Stari Bar.</li>
        <li><strong>Tunnel toll:</strong> Small fee for cars, payable at the booth.</li>
        <li><strong>Stari Bar entry:</strong> Ticketed archaeological site. Allow 1.5–2 hours to see it properly.</li>
        <li><strong>Good to pair with:</strong> A swim at Sutomore, or continue another 25 km to Ulcinj and Velika Plaža if you have the full day.</li>
      </ul>

      <h2>Back to Budva</h2>
      <p>Return via the Sozina tunnel the same way you came. The alternative via the old coastal road is much slower and rougher; unless you want the views deliberately, the tunnel is the right choice going home.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>From Budva</strong>~50 km to Stari Bar</div>
          <div className="route-info__item"><strong>Tunnel</strong>Sozina, 4.189 km</div>
          <div className="route-info__item"><strong>Ruined city size</strong>~4 hectares, 200+ buildings</div>
          <div className="route-info__item"><strong>Best for</strong>Full-day history + beach loop</div>
        </div>
      </div>
    </ContentPage>
  );
}
