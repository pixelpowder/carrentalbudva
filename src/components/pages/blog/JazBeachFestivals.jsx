'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function JazBeachFestivals() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Jaz Beach — The Rolling Stones Beach and Festival Logistics"
      subtitle="Two and a half kilometres west of Budva: one of the longest beaches in Montenegro, site of huge summer concerts since 2007"
      description="Jaz Beach guide: the Rolling Stones 2007 history, Sea Dance Festival, how to drive there from Budva, parking strategy, and swimming in non-festival months."
      image="/img/blog-jaz.webp"
    >
      <h2>The beach that hosted the Rolling Stones</h2>
      <p>Jaz Beach is 2.5 km west of central Budva, off the old road toward Tivat. It's one of the longest beaches on the Montenegrin coast. In July 2007, the Rolling Stones played Jaz — at the time a bold piece of tourism-boosting by the local government. Budva became the smallest city ever to host a Rolling Stones concert. A purpose-built concert stage and seating for 40,000+ spectators was installed.</p>
      <p>September 2008 brought Madonna and her Sticky & Sweet Tour — 47,524 in the crowd, her first Montenegro show. From 2014 through 2017, Jaz hosted the Sea Dance Festival, a three-day summer music festival that was part of Serbia's EXIT Adventure series, drawing up to 110,000 attendees across the weekend.</p>

      <h2>What it's like in non-festival months</h2>
      <p>For 10 months of the year, Jaz is just a very long beach. Sand and small-pebble. Clear water. Usually less crowded than Bečići or central Budva because the walk from the nearest car park is a few minutes longer. Several beach bars and simple restaurants operate in summer — not much open off-season.</p>
      <p>A camping area sits behind the beach — Camp Jaz — favoured by backpackers and festival-goers. Basic facilities, reasonable prices.</p>

      <img src="/img/blog-jaz.webp" alt="Jaz Beach Montenegro" loading="lazy" />

      <h2>Driving to Jaz</h2>
      <p>From central Budva, head west on the old coastal road (not the new tunnel bypass). Jaz is signposted; turn-off drops you into the valley behind the beach. The road down is narrow and winding — slow in summer traffic.</p>
      <p>Parking: paid lot at the beach entrance (€2-4/day), free overflow along the approach road. In festival weekends the paid lot fills by early afternoon and the approach-road parking stretches back over a kilometre.</p>

      <h2>Festival logistics — if you're here for an event</h2>
      <ul>
        <li><strong>Book the rental car early.</strong> Cars disappear from Budva's rental fleets a week before major concerts. If you want flexibility around the concert dates, confirm your booking 10+ days out.</li>
        <li><strong>Don't drive in, take a taxi.</strong> The approach road becomes a single-file crawl for an hour before and after each concert. Taxis from Budva are around €10-15 and drop at the beach-access point.</li>
        <li><strong>Parking alternative:</strong> leave the car in Budva, get a taxi. Safer and faster than sitting in the jam.</li>
        <li><strong>Return timing:</strong> crowds disperse 00:30-02:00 post-show. Taxis queue accordingly. Allow two hours for the return trip that normally takes 10 minutes.</li>
      </ul>

      <h2>Swimming and non-festival visits</h2>
      <p>In ordinary months, Jaz is an underrated beach — quieter than Bečići, longer than anywhere else within 10 minutes of Budva. The far (western) end is less developed and more peaceful. Sunset views here are among the best on the Budva Riviera, facing directly west with open water ahead.</p>
      <p>Water is typically 2-3°C warmer than Budva Old Town's beach through summer because of the sheltered bay orientation.</p>

      <h2>Practical tips</h2>
      <ul>
        <li><strong>Season:</strong> sea warms from mid-May, peaks August. Beach bars open around Victory Day (9 May) and wind down mid-October.</li>
        <li><strong>Facilities:</strong> showers, toilets, changing cabins in peak season. Limited off-season.</li>
        <li><strong>Food:</strong> simple beach bar snacks. For a proper meal, drive back toward Budva.</li>
        <li><strong>Family-friendly:</strong> gentle gradient, wide beach, generally good.</li>
      </ul>

      <h2>Pair with</h2>
      <p>Jaz works well as a morning stop on the way back from Tivat Airport or from Kotor — see our <a href={localePath('/blog/tivat-airport-to-budva')}>Tivat Airport route guide</a> for the drive.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>Distance</strong>2.5 km west of Budva</div>
          <div className="route-info__item"><strong>Length</strong>~1 km beach</div>
          <div className="route-info__item"><strong>Famous for</strong>Rolling Stones 2007</div>
          <div className="route-info__item"><strong>Capacity</strong>40,000+ concert</div>
        </div>
      </div>
    </ContentPage>
  );
}
