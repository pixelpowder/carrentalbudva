'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function MilocerParkVilla() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Miločer Park and Villa Miločer — The Royal Summer Retreat Next to Sveti Stefan"
      subtitle="Eighteen hectares of Mediterranean park, a 1930s villa built for Queen Marija, and the beach the Yugoslav royals kept for themselves"
      description="A visitor guide to Miločer Park and Villa Miločer: royal history, walking trails, Queen's Beach and King's Beach, access and what's open to the public today."
      image="/img/blog-milocer-park-villa.webp"
    >
      <h2>What Miločer is</h2>
      <p>Immediately north of Sveti Stefan — close enough that you can walk between them in under ten minutes along the coastal path — is a walled park of around 18 hectares studded with umbrella pines, cypresses, oleander, olive and several varieties of palm. At its centre stands Villa Miločer, a stone villa built in the 1930s as a summer residence for Queen Marija Karađorđević, the consort of King Alexander I of Yugoslavia. In front of the villa, cut into the pine-shaded slope above the sea, is the short pebbly crescent of Miločer Beach, historically called the King's Beach. A few minutes further south along the shoreline is the smaller Queen's Beach (Kraljičina plaža), tucked into a cove of its own.</p>
      <p>After the monarchy ended in 1945 the whole estate was nationalised, first as a residence for Josip Broz Tito and the Yugoslav political elite, later as an exclusive state hotel, and since Montenegrin independence it has been leased — together with neighbouring Sveti Stefan — to the Aman Resorts group. That lease is what governs public access today, and it is the detail most worth understanding before you drive down from Budva.</p>

      <h2>What you can and can't see</h2>
      <p>The park itself, as woodland and walking paths, is open to the public — you can stroll the cypress avenue and sit under the pines on a bench looking out at Sveti Stefan. The villa is not open: it remains in hotel use and is closed to casual visitors. The two beaches are the tricky part. King's Beach, directly below the villa, is operated as a private beach by the resort in the high season, with sunbed hire and associated fees at the level you would expect of an Aman property. Queen's Beach has historically functioned similarly. Policies and fees have shifted over recent seasons, so we won't print numbers we aren't sure are current.</p>
      <p>What this means in practice: the park is a lovely free walk, the views of Sveti Stefan from the headland are genuinely spectacular, and if you want a cheap swim you are better off at <a href={localePath('/blog/drobni-pijesak-cove')}>Drobni Pijesak</a> or one of the public beaches on the <a href={localePath('/blog/mogren-beach-dukley-tunnel')}>Mogren</a> side of Budva.</p>

      <img src="/img/blog-milocer-park-villa.webp" alt="Mediterranean pines in Miločer Park above the Adriatic" loading="lazy" />

      <h2>Queen Marija and the origins of the villa</h2>
      <p>The villa was commissioned in the early 1930s during the reign of King Alexander I, the Yugoslav monarch assassinated in Marseille in 1934. His widow Queen Marija, a Romanian princess by birth, used Miločer as a summer home in the years that followed. The architecture is restrained Mediterranean — stone, shutters, low-pitched tile roofs — and looks much closer to an interwar country house in Dalmatia or the Italian Riviera than to a royal palace. That was deliberate: Miločer was a retreat, not a capital residence.</p>
      <p>Around the villa, the park was planted with species brought in from across the Mediterranean. Over the following decades it matured into what is now considered one of the best-preserved coastal botanical collections in Montenegro — upward of a hundred species, including several dozen types of tree. A number of the trees are old enough to predate the villa by a wide margin.</p>

      <h2>Walking the park</h2>
      <p>The main entrance is at the north end, off the coastal road roughly 400 metres before you reach the Sveti Stefan causeway. From the gate a path leads south under pines, opens out to the lawn in front of the villa, and continues along the clifftop to the Queen's Beach headland. Total walking distance end-to-end is modest — well under two kilometres — but the path has several good benches and the views change enough that most people take an hour or more.</p>
      <p>Somewhere along the clifftop section you will find the postcard view of Sveti Stefan: the island in the middle distance, red roofs against dark pines and a wedge of open Adriatic behind. This is the angle used on most tourist-board imagery of the Budva Riviera, and it is more easily shot from the Miločer side than from the village of Sveti Stefan itself.</p>

      <h2>Combining with other stops</h2>
      <p>A reasonable Budva-based morning: drive south on the coastal road, park near the north gate of Miločer, walk the park to the Sveti Stefan viewpoint, continue on foot down to the Sveti Stefan causeway for photographs, then drive on another ten minutes to <a href={localePath('/blog/drobni-pijesak-cove')}>Drobni Pijesak</a> for lunch and an easy swim. That is a half-day you can do without changing gear between beaches and museums.</p>

      <h2>Practical notes</h2>
      <ul>
        <li><strong>From Budva:</strong> ~7 km south on the coastal road. Parking at the north entrance is on-street and tight in summer.</li>
        <li><strong>Park entry:</strong> The park itself is free to walk; the villa is hotel-only and not publicly accessible.</li>
        <li><strong>Beaches:</strong> King's Beach and Queen's Beach operate as managed resort beaches in high season. Fees and policies vary season to season — check on the day.</li>
        <li><strong>Best time:</strong> Early morning for photographs of Sveti Stefan; late afternoon for the light on the pines.</li>
      </ul>

      <h2>Next</h2>
      <p>For a contrast in tone, drive ten minutes further to Petrovac and continue to the 13th-century <a href={localePath('/blog/rezevici-monastery')}>Reževići Monastery</a> — same stretch of coast, completely different register.</p>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>From Budva</strong>~7 km south</div>
          <div className="route-info__item"><strong>Park size</strong>~18 hectares</div>
          <div className="route-info__item"><strong>Villa built</strong>1930s, Queen Marija</div>
          <div className="route-info__item"><strong>Open today</strong>Park yes, villa no</div>
        </div>
      </div>
    </ContentPage>
  );
}
