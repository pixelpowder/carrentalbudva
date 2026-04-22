'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';

export default function BudvaToBarFerryPort() {
  const { localePath } = useTranslation();
  return (
    <ContentPage
      title="Budva to Bar Ferry Port — Driving Down to the Bari Ferry for the Italy Leg"
      subtitle="An hour south to the Port of Bar, Montenegro's main sea gateway, and the overnight crossing to southern Italy"
      description="A practical guide from Budva to the Port of Bar: the drive via the Sozina tunnel, ferry terminal logistics, overnight crossings to Bari, and what to know before you board."
      image="/img/blog-budva-to-bar-ferry-port.webp"
    >
      <h2>Why this matters to Budva travellers</h2>
      <p>Most people doing Montenegro by car arrive and leave by air — Tivat or Podgorica. A smaller but persistent number do something more interesting: they combine Montenegro with southern Italy by taking the overnight ferry between Bar and Bari. The route has been operated for years by a Montenegrin shipping line, with one or two sailings per week outside peak season and more in summer, and it is the only car-capable ferry link between Montenegro and western Europe. If your trip includes Puglia, Matera or onward driving in Italy, the Bar–Bari ferry saves you the long drive around the top of the Adriatic via Slovenia.</p>
      <p>For a Budva-based traveller that raises a concrete question: how do you get from your hire car depot in Budva to the right pier at the Port of Bar on the right day, with the right paperwork, and without missing the boat? This guide walks through that.</p>

      <h2>The drive from Budva</h2>
      <p>The port is about 50 km south of Budva by road. The fastest route is the coastal road as far as Petrovac, then the inland turn for the <a href={localePath('/blog/sutomore-stari-bar-ruins')}>Sozina tunnel</a>, then the southern dual carriageway down into the modern town of Bar. Total driving time in light traffic is around an hour; in August Saturday traffic, budget ninety minutes. The tunnel has a small toll payable at the southern portal.</p>
      <p>The port itself is signposted from the main road as you enter Bar — follow "Luka Bar" or the ferry pictograms. The ferry terminal is a distinct area within the commercial port, not the same as the marina or the cruise berth. Arriving from Budva, you approach along the northern road into the port zone.</p>

      <img src="/img/blog-budva-to-bar-ferry-port.webp" alt="Adriatic ferry port" loading="lazy" />

      <h2>The ferry itself</h2>
      <p>The sailing to Bari is an overnight crossing of roughly nine to eleven hours depending on the ship and the weather. Vessels are standard roll-on / roll-off ferries of the kind you might know from Greek or Italian services, with deck seating, cabins (inside and outside, with private bathrooms in the better classes), restaurants and a bar. You drive on with your car, take your bags up to the accommodation, and drive off at the other end. For a family moving a hire car between countries, it is a genuinely comfortable way to cover a long leg overnight.</p>
      <p>A second, less frequent route runs to Ancona, further up the Italian coast. Schedules and routes change season to season; always check the current timetable directly with the operator before booking, and again in the week before sailing.</p>

      <h2>Practical timing on departure day</h2>
      <p>Ferry operators normally require check-in at the port two hours before departure for vehicles. That means if the boat sails at, say, 22:00, you should be at the port gate by 20:00. From Budva, factor in the one-hour drive plus a cushion for traffic and for possible queues at the port gate; leaving Budva three hours before departure is a safe working margin, and leaving four hours before is more comfortable.</p>
      <p>Passport control and customs happen at the port. You will need your passport, the ferry ticket (printed or on your phone), and the hire car's documents — the registration (the <em>saobraćajna dozvola</em> in the car's folder) and ideally a note from the rental company giving permission to take the vehicle across the Montenegrin border. Most Montenegrin rental companies charge a cross-border fee for Italy; ours arranges this at the time of booking if you tell us in advance.</p>

      <h2>What to know about the hire-car side</h2>
      <p>Not every hire car can be taken out of Montenegro, and not every operator includes insurance cover for Italy at the base rate. If you intend to ferry a Budva-rented car to Bari, you must: tell the rental company at the time of booking; get the cross-border authorisation in writing; and confirm that the insurance extends to Italy. This is not a day-of-travel request you can improvise — if you turn up at the port without the paperwork, you will be turned back at customs.</p>
      <p>An alternative some travellers use is to return the Budva hire car before the ferry, take the ferry as foot passengers, and pick up a fresh Italian rental in Bari. Whether that works out cheaper depends on rental prices on both sides and how many days you need the car in Italy.</p>

      <h2>Back from Budva's side</h2>
      <p>If the ferry is your arrival leg — you're driving off the boat in Bar and heading north to Budva — the logic is the same in reverse. Clear customs, follow signs for the M2 / Sozina tunnel, and you'll be in Petrovac inside an hour and Budva ten minutes after that. For a first arrival in Montenegro by ferry, the coastal road from the tunnel northward gives a very good introductory view of the country.</p>

      <h2>Practical notes</h2>
      <ul>
        <li><strong>From Budva:</strong> ~50 km, ~60 min in light traffic.</li>
        <li><strong>Crossing:</strong> Overnight to Bari; ~9–11 hours depending on ship.</li>
        <li><strong>Check-in:</strong> Two hours before departure for vehicles; arrive at port with margin.</li>
        <li><strong>Paperwork:</strong> Passport, ticket, vehicle registration, cross-border authorisation.</li>
        <li><strong>If flying in first:</strong> See our <a href={localePath('/blog/cetinje-day-trip-from-budva')}>other Budva day-trip guides</a> for a couple of days before the ferry.</li>
      </ul>

      <div className="route-info">
        <h3>At a glance</h3>
        <div className="route-info__grid">
          <div className="route-info__item"><strong>From Budva</strong>~50 km, ~60 min</div>
          <div className="route-info__item"><strong>Crossing time</strong>~9–11 hours</div>
          <div className="route-info__item"><strong>Destination</strong>Bari, southern Italy</div>
          <div className="route-info__item"><strong>Check-in</strong>2 hrs before departure</div>
        </div>
      </div>
    </ContentPage>
  );
}
