'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';
import config from '../../siteConfig';
import { carArticles as carArticlesEn } from '../../data/carArticles';
import { carArticles as carArticlesDe } from '../../data/carArticles.de';
import { carArticles as carArticlesRu } from '../../data/carArticles.ru';
import { carArticles as carArticlesIt } from '../../data/carArticles.it';
import { carArticles as carArticlesFr } from '../../data/carArticles.fr';
import { carArticles as carArticlesMe } from '../../data/carArticles.me';
import { carImages } from '../../data/carImages';
import CarGallery from '../CarGallery';

const CAR_ARTICLES_BY_LANG = {
  en: carArticlesEn,
  de: carArticlesDe,
  ru: carArticlesRu,
  it: carArticlesIt,
  fr: carArticlesFr,
  me: carArticlesMe,
};
import {
  Users, Fuel, Settings, Briefcase, CheckCircle, ArrowRight,
  Droplet, Package,
} from 'lucide-react';

// Kotor-rental inline photo per car — bay road, Lovćen, motorway, cross-border feel.
const INLINE_PHOTOS = {
  'renault-clio':   { src: '/img/fleet-inline/coastal-road.jpg',      alt: 'Bay of Kotor coastal road near Dobrota',       caption: 'The Dobrota–Prčanj stretch at a steady 50 km/h — the Clio\u2019s natural cruising pace on a multi-day bay stay.' },
  'peugeot-308':    { src: '/img/fleet-inline/mountain-highway.jpg',  alt: 'Smokovac–Mateševo motorway inland from Kotor',  caption: 'The Smokovac motorway toward Podgorica — the 308\u2019s BlueHDi settles into a steady 1,800 rpm cruise here.' },
  'renault-megane': { src: '/img/fleet-inline/sea-road.jpg',          alt: 'Old bay road from Kotor toward Risan',          caption: 'The patched tarmac out to Risan\u2019s Roman mosaics — where the Megane\u2019s soft damping actually earns its rental premium.' },
  'kia-stonic':     { src: '/img/fleet-inline/rocky-road.jpg',        alt: 'Rutted spur road up to Njeguši above Kotor',    caption: 'The Njeguši approach above the bay — a little extra ground clearance keeps the Stonic composed where a Clio scrapes.' },
  'vw-golf':        { src: '/img/fleet-inline/forest-road.jpg',       alt: 'Wooded Lovćen serpentine above Kotor',          caption: 'The Kotor–Cetinje climb in third gear — the DSG reads the hairpins, the cabin stays silent.' },
  'fiat-500':       { src: '/img/fleet-inline/seaside-road.jpg',      alt: 'Narrow Muo waterfront lane in Kotor',           caption: 'The Muo waterfront past the ferry dock — the 500 slots into gaps the rest of the fleet drives past.' },
  'citroen-c3':     { src: '/img/fleet-inline/village-trees.jpg',     alt: 'Back road through Gornja Lastva above Tivat',   caption: 'The Gornja Lastva spur above the bay — the C3\u2019s Advanced Comfort turns the patched bitumen into distant thumps.' },
  _default:         { src: '/img/fleet-inline/kotor-bay.jpg',         alt: 'Aerial view of the Bay of Kotor',               caption: 'A week based in Kotor puts Cetinje, Njeguši, Risan, Skadar Lake and Dubrovnik all inside day-trip range.' },
};

// Related cards per car — using the actual blog + destination pages that exist on kotorcarrental.
const RELATED = {
  'vw-polo': [
    { href: '/blog/budva-old-town-walls', img: '/img/blog-budva-old-town-walls.webp', title: 'Budva Old Town walls' },
    { href: '/blog/becici-rafailovici-promenade', img: '/img/blog-becici-rafailovici-promenade.webp', title: 'Bečići–Rafailovići promenade' },
    { href: '/blog/sveti-stefan-photo-spots', img: '/img/blog-sveti-stefan-photo-spots.webp', title: 'Sveti Stefan photo spots' },
  ],
  'skoda-octavia': [
    { href: '/blog/sveti-stefan-photo-spots', img: '/img/blog-sveti-stefan-photo-spots.webp', title: 'Sveti Stefan photo spots' },
    { href: '/blog/petrovac-quiet-alternative', img: '/img/blog-petrovac-quiet-alternative.webp', title: 'Petrovac — the quiet alternative' },
    { href: '/blog/pastrovici-highlands-drive', img: '/img/blog-pastrovici-highlands-drive.webp', title: 'Paštrovići highlands drive' },
  ],
  'toyota-corolla': [
    { href: '/blog/budva-old-town-walls', img: '/img/blog-budva-old-town-walls.webp', title: 'Budva Old Town walls' },
    { href: '/blog/sveti-stefan-photo-spots', img: '/img/blog-sveti-stefan-photo-spots.webp', title: 'Sveti Stefan photo spots' },
    { href: '/blog/jaz-beach-festivals', img: '/img/blog-jaz-beach-festivals.webp', title: 'Jaz Beach & festivals' },
  ],
  'mercedes-c-class': [
    { href: '/blog/sveti-stefan-photo-spots', img: '/img/blog-sveti-stefan-photo-spots.webp', title: 'Sveti Stefan photo spots' },
    { href: '/blog/petrovac-quiet-alternative', img: '/img/blog-petrovac-quiet-alternative.webp', title: 'Petrovac — the quiet alternative' },
    { href: '/blog/budva-old-town-walls', img: '/img/blog-budva-old-town-walls.webp', title: 'Budva Old Town walls' },
  ],
  'fiat-500c': [
    { href: '/blog/jaz-beach-festivals', img: '/img/blog-jaz-beach-festivals.webp', title: 'Jaz Beach & festivals' },
    { href: '/blog/becici-rafailovici-promenade', img: '/img/blog-becici-rafailovici-promenade.webp', title: 'Bečići–Rafailovići promenade' },
    { href: '/blog/sveti-nikola-hawaii', img: '/img/blog-sveti-nikola-hawaii.webp', title: 'Sveti Nikola (Hawaii) island' },
  ],
  'fiat-500': [
    { href: '/blog/jaz-beach-festivals', img: '/img/blog-jaz-beach-festivals.webp', title: 'Jaz Beach & festivals' },
    { href: '/blog/becici-rafailovici-promenade', img: '/img/blog-becici-rafailovici-promenade.webp', title: 'Bečići–Rafailovići promenade' },
    { href: '/blog/sveti-nikola-hawaii', img: '/img/blog-sveti-nikola-hawaii.webp', title: 'Sveti Nikola (Hawaii) island' },
  ],
  'bmw-x3': [
    { href: '/blog/pastrovici-highlands-drive', img: '/img/blog-pastrovici-highlands-drive.webp', title: 'Paštrovići highlands drive' },
    { href: '/blog/petrovac-quiet-alternative', img: '/img/blog-petrovac-quiet-alternative.webp', title: 'Petrovac — the quiet alternative' },
    { href: '/blog/sveti-stefan-photo-spots', img: '/img/blog-sveti-stefan-photo-spots.webp', title: 'Sveti Stefan photo spots' },
  ],
  'jeep-renegade': [
    { href: '/blog/pastrovici-highlands-drive', img: '/img/blog-pastrovici-highlands-drive.webp', title: 'Paštrovići highlands drive' },
    { href: '/blog/tivat-airport-to-budva', img: '/img/blog-tivat-airport-to-budva.webp', title: 'Tivat Airport to Budva' },
    { href: '/blog/jaz-beach-festivals', img: '/img/blog-jaz-beach-festivals.webp', title: 'Jaz Beach & festivals' },
  ],
  'vw-transporter': [
    { href: '/blog/sveti-nikola-hawaii', img: '/img/blog-sveti-nikola-hawaii.webp', title: 'Sveti Nikola (Hawaii) island' },
    { href: '/blog/becici-rafailovici-promenade', img: '/img/blog-becici-rafailovici-promenade.webp', title: 'Bečići–Rafailovići promenade' },
    { href: '/blog/tivat-airport-to-budva', img: '/img/blog-tivat-airport-to-budva.webp', title: 'Tivat Airport to Budva' },
  ],
};

const ARTICLE_LINKS = {};

function renderParagraphWithLink(paragraph, rule, localePath, linkLabel) {
  if (!rule) return paragraph;
  for (const phrase of rule.candidates) {
    const idx = paragraph.indexOf(phrase);
    if (idx === -1) continue;
    const before = paragraph.slice(0, idx);
    const linkText = paragraph.slice(idx, idx + phrase.length);
    const after = paragraph.slice(idx + phrase.length);
    return (
      <>
        {before}
        <a href={localePath(rule.href)} title={linkLabel}>{linkText}</a>
        {after}
      </>
    );
  }
  return paragraph;
}

export default function CarDetail({ slug }) {
  const { t, lang, localePath } = useTranslation();
  const localisedArticles = CAR_ARTICLES_BY_LANG[lang] || CAR_ARTICLES_BY_LANG.en;
  const carArticles = localisedArticles[slug] ? localisedArticles : CAR_ARTICLES_BY_LANG.en;
  const car = config.cars.find(c => c.slug === slug);
  if (!car) return null;

  const k = (sub) => `cars.${slug}.${sub}`;
  const tk = (sub, fallback) => {
    const val = t(k(sub));
    return val && val !== k(sub) ? val : fallback;
  };
  const tf = (key, fallback) => {
    const val = t(key);
    return val && val !== key ? val : fallback;
  };

  const name = tk('name', car.name);
  const tagline = tk('tagline', car.tagline);
  const lede = tk('lede', car.lede);
  const suitability = tk('suitability', car.suitability);
  const regional = tk('regional', car.regional);
  const category = tk('category', car.category);
  const details = car.details || {};

  const idx = config.cars.findIndex(c => c.slug === slug);
  const next = config.cars[(idx + 1) % config.cars.length];

  const toMpg = (consumption) => {
    if (!consumption) return null;
    const m = consumption.match(/([\d.]+)\s*L\/100/);
    if (!m) return null;
    const l100 = parseFloat(m[1]);
    if (!l100) return null;
    return `${Math.round(282.48 / l100)} mpg`;
  };
  const mpg = toMpg(details.consumption);

  const quickRow = [
    { icon: <Users size={16} />,     label: tf('carSpecs.seats', 'Seats'),         value: car.seats },
    { icon: <Settings size={16} />,  label: tf('carSpecs.transmission', 'Gearbox'), value: car.transmission },
    { icon: <Fuel size={16} />,      label: tf('carSpecs.fuel', 'Fuel'),           value: car.fuel },
    { icon: <Briefcase size={16} />, label: tf('carSpecs.luggage', 'Luggage'),     value: `${car.luggage} bags` },
    { icon: <Package size={16} />,   label: tf('carSpecs.bootSize', 'Boot'),       value: details.bootSize },
    { icon: <Droplet size={16} />,   label: tf('carSpecs.mpg', 'Economy'),         value: mpg || details.consumption },
  ].filter(r => r.value);

  return (
    <ContentPage
      title={name}
      subtitle={tagline}
      description={suitability}
      image={car.image}
      heroPosition="center"
    >
      <div className="car-detail-hero-card">
        <div className="car-detail-category-tag">{category}</div>
        <p className="car-detail-lede">{lede}</p>
      </div>

      <CarGallery images={carImages[slug] || [car.image]} alt={name} />

      <h2>{tf('cars.overviewTitle', 'At a glance')}</h2>
      <div className="car-detail-specs car-detail-specs--quick">
        {quickRow.map((s) => (
          <div key={s.label} className="car-detail-spec">
            <div className="car-detail-spec__icon">{s.icon}</div>
            <div className="car-detail-spec__label">{s.label}</div>
            <div className="car-detail-spec__value">{s.value}</div>
          </div>
        ))}
      </div>

      <h2>{tf('cars.whoForTitle', `Who is the ${car.name} for?`)}</h2>
      <p>{suitability}</p>
      {Array.isArray(car.bestFor) && (
        <ul className="car-detail-bestfor">
          {car.bestFor.map((b, i) => (
            <li key={i}><CheckCircle size={14} /> {tk(`bestFor.${i}`, b)}</li>
          ))}
        </ul>
      )}

      <div className="car-detail-regional">
        <h2>{tf('cars.regionalTitle', 'Best regional use')}</h2>
        <p>{regional}</p>
      </div>

      {carArticles[slug] && (
        <div className="car-detail-article">
          <h2>{tf('cars.articleTitle', `The ${car.name} on Kotor roads`)}</h2>
          {carArticles[slug].paragraphs.map((para, i) => {
            const rule = ARTICLE_LINKS[slug];
            const applyRuleHere = rule && rule.paraIndex === i;
            const sectionKeys = [
              'behindWheel', 'onRoads', 'spaceLoad', 'bestFor', 'practical', 'verdict',
            ];
            const sectionFallbacks = [
              'Behind the wheel',
              'On Kotor roads',
              'Space and load',
              'Best journeys for this car',
              'Practical notes',
              'The verdict',
            ];
            return (
              <>
                <section key={i} className="car-detail-article__section">
                  <h3>{tf(`cars.sections.${sectionKeys[i]}`, sectionFallbacks[i])}</h3>
                  <p>{applyRuleHere ? renderParagraphWithLink(para, rule, localePath, car.name) : para}</p>
                </section>
                {i === 2 && (() => {
                  const inline = INLINE_PHOTOS[slug] || INLINE_PHOTOS._default;
                  return (
                    <figure key={`inline-${i}`} className="car-detail-article__figure">
                      <img src={inline.src} alt={inline.alt} loading="lazy" />
                      <figcaption>{inline.caption}</figcaption>
                    </figure>
                  );
                })()}
              </>
            );
          })}
        </div>
      )}

      <h2>{tf('cars.featuresTitle', 'Inside the car')}</h2>
      <ul className="car-detail-feature-list">
        {car.features.map((f, i) => {
          const translated = tk(`features.${i}`, f);
          return <li key={i}><CheckCircle size={14} /> {translated}</li>;
        })}
      </ul>

      {RELATED[slug] && (
        <div className="car-detail-related">
          <h2>{tf('cars.relatedTitle', 'Where this car takes you')}</h2>
          <div className="car-detail-related__grid">
            {RELATED[slug].map((card) => (
              <a key={card.href} href={localePath(card.href)} className="car-detail-related__card">
                <div className="car-detail-related__img" style={{ backgroundImage: `url(${card.img})` }} />
                <div className="car-detail-related__body">
                  <span className="car-detail-related__title">{card.title}</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      <div className="car-detail-cta">
        <a href={localePath('/book')} className="car-detail-cta__btn">
          {tf('cars.checkAvailability', 'Check availability & live pricing')} <ArrowRight size={16} />
        </a>
        <a href={localePath(`/cars/${next.slug}`)} className="car-detail-cta__next">
          {tf('cars.nextBtn', `Next in fleet: ${next.name}`)} →
        </a>
      </div>
    </ContentPage>
  );
}
