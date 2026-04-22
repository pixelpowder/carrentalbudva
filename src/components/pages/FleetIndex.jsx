'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { Users, Fuel, Settings, Briefcase, ArrowRight } from 'lucide-react';

export default function FleetIndex() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };

  return (
    <ContentPage
      title={tf('fleetIndex.title', 'Our Kotor Rental Fleet')}
      subtitle={tf('fleetIndex.subtitle', 'Seven cars picked for a multi-day Kotor base, with day-trips out to Cetinje, Skadar Lake, Durmitor and across the border.')}
      image="/img/fleet/renault-megane.jpg"
      heroPosition="center"
      description={tf('fleetIndex.seoDesc', 'Seven multi-day rental cars for Kotor — mid-size wagons, diesel cruisers and a city Fiat. Specs, fuel range, and which car suits day-trips out of the bay.')}
    >
      <p>{tf('fleetIndex.intro1', 'This fleet is built around the multi-day Kotor renter — visitors who anchor themselves at a Dobrota apartment or an Old Town guesthouse for a fortnight or longer, and who expect to be spending real time on the road between bay-based days. That brief is different from a cruise-day hire or a pure Tivat Airport pickup: it leans on boot space for a weekly shop at Voli, diesel torque for the Sozina motorway run, and a seating position that keeps four adults comfortable on the 3-hour push to Žabljak. The seven cars below are chosen accordingly.')}</p>

      <p>{tf('fleetIndex.intro2', 'The mix is deliberately weighted toward mid-size. A Peugeot 308 with the 1.5 BlueHDi and the EAT auto, a Renault Megane diesel with the segment\u2019s biggest boot, a VW Golf with the DSG 2.0 TDI — these are the cars that turn a Kotor → Cetinje → Lake Skadar → Sozina loop from a gear-changing chore into a cruise. For shorter hops we keep a Renault Clio, a Citroen C3 with Advanced Comfort dampers, a Kia Stonic crossover for the rutted spur roads up to Njeguši and Gornja Lastva, and a tiny Fiat 500 for when Muo waterfront parking is the deciding constraint. No one-trick supercars, no vans; every car here justifies a multi-day hire.')}</p>

      <p>{tf('fleetIndex.intro3', 'A practical Kotor note before you choose. Diesel remains the smarter spec for anyone planning even one cross-border run — Trebinje is 90 minutes, Dubrovnik via Debeli Brijeg is also 90 minutes, Mostar is a full day each way on a good cruise. The 308 and Megane will cover all three on a single tank, the Golf is the most refined motorway car we have, and the petrol Clio will still do a Kotor → Dubrovnik return on half a tank. If your week is bay-contained — Perast, Prčanj, Muo, Risan — the Fiat 500 or the C3 saves a third on weekly fuel and parks in places the rest of the fleet can\u2019t. Pick on your itinerary, not the daily rate.')}</p>

      <div className="fleet-index-grid">
        {config.cars.map((car) => {
          const tk = (sub, fallback) => {
            const val = t(`cars.${car.slug}.${sub}`);
            return val && val !== `cars.${car.slug}.${sub}` ? val : fallback;
          };
          const name = tk('name', car.name);
          const tagline = tk('tagline', car.tagline);
          const category = tk('category', car.category);
          const consumption = car.details?.consumption;

          return (
            <a
              key={car.slug}
              href={localePath(`/cars/${car.slug}`)}
              className="fleet-index-card"
            >
              <div className="fleet-index-card__img" style={{ backgroundImage: `url(${car.image})` }}>
                <span className="fleet-index-card__tag">{category}</span>
              </div>
              <div className="fleet-index-card__body">
                <h3 className="fleet-index-card__name">{name}</h3>
                <p className="fleet-index-card__tagline">{tagline}</p>
                <div className="fleet-index-card__specs">
                  <span><Users size={14} /> {car.seats}</span>
                  <span><Settings size={14} /> {car.transmission.slice(0,4)}</span>
                  <span><Fuel size={14} /> {car.fuel}</span>
                  <span><Briefcase size={14} /> {car.luggage}</span>
                </div>
                {consumption && (
                  <div className="fleet-index-card__extra">
                    {consumption}
                  </div>
                )}
                <div className="fleet-index-card__footer">
                  <span className="fleet-index-card__arrow">
                    {tf('cars.readGuide', 'Read guide')} <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </ContentPage>
  );
}
