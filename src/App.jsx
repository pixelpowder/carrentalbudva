'use client';
import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import useTranslation from './i18n/useTranslation';
import Nav from './Nav';
import Footer from './Footer';
import useGlobalReveal from './useReveal';
import {
  MapPin,
  ChevronRight,
  ChevronDown,
  Star,
  ShieldCheck,
  Clock,
  RefreshCw,
  Globe,
  Ban,
  CheckCircle,
  ArrowRight,
  Mail,
  Search,
  MessageCircle,
  Car,
  Truck,
  Zap,
  Crown,
  Users,
  Fuel,
  Briefcase,
  Settings,
} from 'lucide-react';
import config from './siteConfig';
import './App.css';

/* ─── ICON MAP ─────────────────────────────────────────── */
const FEATURE_ICONS = {
  'map-pin': MapPin,
  'shield-check': ShieldCheck,
  'clock': Clock,
  'ban': Ban,
  'refresh-cw': RefreshCw,
  'globe': Globe,
};

const LOCATIONS = [
  'Budva', 'Bečići', 'Rafailovići', 'Sveti Stefan', 'Petrovac',
  'Tivat Airport', 'Pržno', 'Miločer', 'Jaz Beach', 'Kamenovo',
  'Bečići', 'Rafailovići', 'Pržno', 'Sutomore', 'Luštica Bay',
  'Žabljak', 'Kolašin', 'Nikšić', 'Igalo', 'Risan',
  'Orahovac', 'Prčanj', 'Bijela', 'Rose', 'Reževići',
  'Dobre Vode', 'Djenovici', 'Krasici', 'Radovici', 'Buljarica',
];

const CITY_ID_MAP = {
  'Tivat':             17,
  'Podgorica':         15,
  'Kamenovo':          9,
  'Budva':              5,
  'Bar':                2,
  'Herceg-Novi':       19,
  'Ulcinj':            18,
  'Kolašin':            8,
  'Žabljak':            7,
  'Sveti Stefan':      25,
  'Perast':            33,
  'Petrovac':          39,
  'Sutomore':          29,
  'Luštica Bay':   549187,
  'Nikšić':        549113,
  'Bečići':            23,
  'Igalo':             35,
  'Rafailovići':       22,
  'Pržno':             24,
  'Risan':             34,
  'Orahovac':          32,
  'Prčanj':            36,
  'Bijela':        549193,
  'Rose':              40,
  'Reževići':          26,
  'Dobre Vode':        30,
  'Djenovici':     548985,
  'Krasici':       548984,
  'Radovici':      548966,
  'Buljarica':     548986,
};

/* ─── LOCATION AUTOCOMPLETE ────────────────────────────── */
const LOCATION_OPTIONS = LOCATIONS.map(l => ({ value: l, label: l }));

const locationSelectStyles = {
  control: (base) => ({
    ...base,
    border: 'none',
    boxShadow: 'none',
    background: 'transparent',
    minHeight: 'unset',
    height: 'auto',
    cursor: 'pointer',
  }),
  valueContainer: (base) => ({ ...base, padding: '0' }),
  input: (base) => ({ ...base, margin: '0', padding: '0', fontSize: '15px', fontWeight: '500', color: '#1A1A1A' }),
  singleValue: (base) => ({ ...base, fontSize: '15px', fontWeight: '500', color: '#1A1A1A', margin: '0' }),
  placeholder: (base) => ({ ...base, fontSize: '15px', color: '#888888', margin: '0' }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (base) => ({ ...base, padding: '0', color: '#E31937' }),
  menu: (base) => ({ ...base, zIndex: 9999, borderRadius: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', marginTop: '6px', overflow: 'hidden' }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  menuList: (base) => ({ ...base, padding: '4px', maxHeight: '260px' }),
  option: (base, state) => ({
    ...base,
    fontSize: '14px',
    fontWeight: state.isSelected ? '600' : '400',
    color: state.isSelected ? '#E31937' : '#1A1A1A',
    background: state.isSelected ? 'rgba(227,25,55,0.08)' : state.isFocused ? 'rgba(227,25,55,0.04)' : 'transparent',
    borderRadius: '6px',
    cursor: 'pointer',
    padding: '10px 12px',
  }),
};

function LocationField({ value, onChange }) {
  const { t } = useTranslation();
  const selected = LOCATION_OPTIONS.find(o => o.value === value) || null;
  return (
    <div className="booking-field location-field">
      <label>
        <MapPin size={12} />
        {t('hero.pickupLocation')}
      </label>
      <Select
        inputId="f-location"
        options={LOCATION_OPTIONS}
        value={selected}
        onChange={opt => onChange(opt.value)}
        styles={locationSelectStyles}
        isSearchable={window.innerWidth >= 768}
        placeholder={t('hero.searchLocation')}
        menuPlacement="auto"
        menuPortalTarget={document.body}
        maxMenuHeight={200}
        onMenuOpen={() => { if (window.innerWidth < 768) { document.activeElement?.blur(); setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50); } }}
      />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 1: HERO — headline + badges + image + search
   ═══════════════════════════════════════════════════════════ */
function Hero() {
  const { t, localePath } = useTranslation();
  const router = useRouter();
  const [pickup, setPickup] = useState('Budva');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropoffTime, setDropoffTime] = useState('10:00');

  const fmt = (d) => {
    if (!d) return '';
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const handleDateChange = (dates) => { const [s, e] = dates; setStartDate(s); setEndDate(e); };

  const handleSearch = () => {
    const params = new URLSearchParams({
      location: pickup, pickup_date: fmt(startDate), pickup_time: pickupTime,
      dropoff_date: fmt(endDate), dropoff_time: dropoffTime,
    });
    const cityId = CITY_ID_MAP[pickup];
    if (cityId) params.set('city_id', cityId);
    router.push(`${localePath('/book')}?${params.toString()}`);
  };

  return (
    <section className="hero">
      {/* White section: headline + badges */}
      <div className="hero__top">
        <h1 className="hero__headline"><span className="hero__headline-main">{t('hero.headlineMain')}</span> <span className="hero__headline-sub">{t('hero.headlineSub')}</span></h1>
        <div className="hero__badges">
          <span className="hero__badge"><CheckCircle size={16} /> {t('hero.badges.freeCancellation')}</span>
          <span className="hero__badge"><ShieldCheck size={16} /> {t('hero.badges.fullInsurance')}</span>
          <span className="hero__badge"><Clock size={16} /> {t('hero.badges.airportPickup')}</span>
        </div>
      </div>

      {/* Image section with overlaid search form */}
      <div
        className="hero__image-section"
        style={{ backgroundImage: `url(${config.hero.image})` }}
      >
        <div className="booking-card">
          <div className="booking-card__fields">
            <LocationField value={pickup} onChange={setPickup} />
            <div className="booking-field booking-field--dates">
              <label>{t('hero.pickupDate')} - {t('hero.dropoffDate')}</label>
              <DatePicker
                selectsRange startDate={startDate} endDate={endDate}
                onChange={handleDateChange} minDate={new Date()}
                monthsShown={window.innerWidth < 768 ? 1 : 2}
                dateFormat="dd MMM yyyy"
                placeholderText={t('hero.selectDates') || 'Select dates'}
                className="booking-field__input"
                calendarClassName="booking-calendar"
                popperPlacement="bottom-start"
                popperClassName="booking-datepicker-popper"
                popperModifiers={[{name:'flip',enabled:false},{name:'preventOverflow',enabled:false}]}
                onFocus={e => { if (window.innerWidth < 768) e.target.blur(); }}
                onCalendarOpen={() => { if (window.innerWidth < 768) setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50); }}
              />
            </div>
            <div className="booking-field booking-field--time">
              <label htmlFor="f-pickup-time">{t('hero.pickupTime')}</label>
              <select id="f-pickup-time" className="booking-field__input" value={pickupTime} onChange={e => setPickupTime(e.target.value)}>
                {['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="booking-field booking-field--time">
              <label htmlFor="f-dropoff-time">{t('hero.dropoffTime')}</label>
              <select id="f-dropoff-time" className="booking-field__input" value={dropoffTime} onChange={e => setDropoffTime(e.target.value)}>
                {['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'].map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <button className="booking-card__search" onClick={handleSearch}>
              <Search size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="hero__spacer" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 2: REVIEWS — horizontal scrolling carousel
   ═══════════════════════════════════════════════════════════ */
function Reviews() {
  const { t } = useTranslation();
  return (
    <section className="section" id="reviews">
      <div className="container">
        <div className="reviews__header">
          <div className="reviews__title-row">
            <h2 className="reviews__title">{t('reviews.title')}</h2>
            <span className="reviews__stars">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
            </span>
          </div>
          <span className="reviews__score">{t('reviews.subtitle')}</span>
        </div>
        <div className="reviews-scroll">
          {config.testimonials.map((rev, i) => (
            <div key={rev.name} className="review-card">
              <div className="review-card__stars">
                {Array.from({ length: rev.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-card__text">{t(`testimonials.${i}.text`)}</p>
              <div className="review-card__footer">
                <div className="review-card__avatar">
                  {rev.avatar ? <img src={rev.avatar} alt={rev.name} /> : rev.name.charAt(0)}
                </div>
                <div>
                  <div className="review-card__name">{rev.name}</div>
                  <div className="review-card__location">{rev.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="review-dots">
          <span className="review-dot review-dot--active" />
          <span className="review-dot" />
          <span className="review-dot" />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 3: BROWSE BY CATEGORY — horizontal pill scroll
   ═══════════════════════════════════════════════════════════ */
const CATEGORIES = [
  { label: 'Economy', image: '/img/pexels-1035108.jpg' },
  { label: 'Mid-Size', image: '/img/pexels-116675.jpg' },
  { label: 'Premium', image: '/img/pexels-120049.jpg' },
  { label: 'SUV', image: '/img/pexels-1638459.jpg' },
  { label: 'City', image: '/img/pexels-1007410.jpg' },
];

function BrowseByCategory() {
  const { t, localePath } = useTranslation();
  return (
    <section className="section section--alt" id="categories">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: 24 }}>{t('fleet.browseByCategory')}</h2>
        <div className="category-scroll">
          {CATEGORIES.map(cat => (
            <a key={cat.label} href={localePath('/book')} className="category-card">
              <img src={cat.image} alt={cat.label} className="category-card__img" />
              <span className="category-card__label">{cat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 4: BROWSE CARS CTA — search prompt
   ═══════════════════════════════════════════════════════════ */
function BrowseCarsCTA() {
  const { t, localePath } = useTranslation();
  return (
    <section className="showcase-cta">
      <div className="container">
        <div className="showcase-cta__inner">
          <div className="showcase-cta__text">
            <h2 className="showcase-cta__title">{t('fleet.title')}</h2>
            <p className="showcase-cta__subtitle">{t('fleet.subtitle')}</p>
          </div>
          <a href={localePath('/book')} className="showcase-cta__btn">
            {t('hero.search')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 5: FLEET — LocalRent iframe (kept as-is)
   ═══════════════════════════════════════════════════════════ */
function Fleet() {
  const { t, localePath } = useTranslation();
  const [iframeHeight, setIframeHeight] = useState(3650);

  useEffect(() => {
    if (window.innerWidth > 768) setIframeHeight(2480);
  }, []);
  const [iframeSrc, setIframeSrc] = useState(null);
  const fleetRef = useRef(null);

  useEffect(() => {
    function onMessage(e) {
      // Ignore widget height messages — use fixed height instead
      // if (e.data && e.data.type === 'iframeHeight') setIframeHeight(e.data.height);
    }
    window.addEventListener('message', onMessage);
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIframeSrc('/widget.html?city_id=9&hide_search=1&v=12');
        obs.disconnect();
      }
    }, { rootMargin: '600px' });
    if (fleetRef.current) obs.observe(fleetRef.current);
    return () => { obs.disconnect(); window.removeEventListener('message', onMessage); };
  }, []);

  return (
    <section className="section" id="fleet" ref={fleetRef}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('fleet.ourFleet')}</span>
          <h2 className="section-title">{t('fleet.title')}</h2>
          <p className="section-subtitle">{t('fleet.subtitle')}</p>
        </div>
        <a href={localePath('/book')} className="fleet-widget-wrap">
          {iframeSrc && <iframe
            src={iframeSrc} title="Browse fleet" frameBorder="0" scrolling="no"
            style={{ width: '100%', height: iframeHeight, border: 'none', display: 'block', pointerEvents: 'none' }}
          />}
          <div className="fleet-widget-fade" />
          <div className="fleet-widget-overlay" />
        </a>
        <div className="fleet-book-wrap">
          <a href={localePath('/book')} className="fleet-book-btn">
            {t('common.searchCars')} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FLEET SHOWCASE — per-car guide links (internal SEO, /cars routes)
   ═══════════════════════════════════════════════════════════ */
const FLEET_TABS = [
  { key: 'all',     fallback: 'All' },
  { key: 'economy', fallback: 'Economy' },
  { key: 'midsize', fallback: 'Mid-Size' },
  { key: 'suv',     fallback: 'SUV' },
];

// Homepage curates 6 of 7 — leave off citroen-c3 (very close in brief to Clio).
const HOMEPAGE_FLEET_SLUGS = [
  'renault-megane', 'peugeot-308', 'vw-golf',
  'kia-stonic', 'renault-clio', 'vw-polo',
];

function FleetShowcase() {
  const { t, localePath } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const homepageCars = config.cars.filter(c => HOMEPAGE_FLEET_SLUGS.includes(c.slug));
  const filtered = activeTab === 'all'
    ? homepageCars
    : homepageCars.filter(c => c.typeGroup === activeTab);

  return (
    <section className="section fleet-showcase" id="fleet-info">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{tf('fleetShowcase.label', 'Know your car')}</span>
          <h2 className="section-title">{tf('fleetShowcase.title', 'Guides to every car in our Budva fleet')}</h2>
          <p className="section-subtitle">{tf('fleetShowcase.subtitle', 'Specs, fuel range, boot size and which car earns its keep on the bay road, the Lovćen serpentine and the Smokovac motorway.')}</p>
        </div>

        <div className="fleet-showcase__tabs" role="tablist">
          {FLEET_TABS.map(tab => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`fleet-showcase__tab${activeTab === tab.key ? ' fleet-showcase__tab--active' : ''}`}
            >
              {tf(`fleetShowcase.tabs.${tab.key}`, tab.fallback)}
            </button>
          ))}
        </div>

        <div className="fleet-showcase__strip">
          {filtered.map((car) => {
            const tk = (sub, fb) => {
              const val = t(`cars.${car.slug}.${sub}`);
              return val && val !== `cars.${car.slug}.${sub}` ? val : fb;
            };
            const name = tk('name', car.name);
            const category = tk('category', car.category);
            return (
              <a
                key={car.slug}
                href={localePath(`/cars/${car.slug}`)}
                className="fleet-showcase__chip"
                title={tk('tagline', car.tagline)}
              >
                <div className="fleet-showcase__chip-img" style={{ backgroundImage: `url(${car.image})` }} />
                <div className="fleet-showcase__chip-body">
                  <div className="fleet-showcase__chip-cat">{category}</div>
                  <div className="fleet-showcase__chip-name">{name}</div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="fleet-showcase__all">
          <a href={localePath('/cars')} className="fleet-showcase__all-link">
            {tf('fleetShowcase.viewAll', 'See all fleet guides')} <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 6: USP STRIP — horizontal feature icons
   ═══════════════════════════════════════════════════════════ */
function USPStrip() {
  const { t } = useTranslation();
  const items = [
    { icon: MapPin, key: 'airportPickup' },
    { icon: ShieldCheck, key: 'fullInsurance' },
    { icon: Clock, key: 'support' },
    { icon: Ban, key: 'noHiddenFees' },
  ];
  return (
    <section className="usp-strip" id="features">
      <div className="container">
        <div className="usp-scroll">
          {items.map((item) => (
            <div key={item.key} className="usp-item">
              <div className="usp-item__icon"><item.icon size={20} /></div>
              <div className="usp-item__text">
                <strong>{t(`featureCards.${item.key}.title`)}</strong>
                <span>{t(`featureCards.${item.key}.desc`)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 7: DESTINATIONS — tabbed image cards (Cities / Airports)
   ═══════════════════════════════════════════════════════════ */
function Destinations() {
  const { t, localePath } = useTranslation();
  const [tab, setTab] = useState('cities');

  const cities = config.destinations.filter(d => !d.slug.includes('airport'));
  const airports = config.destinations.filter(d => d.slug.includes('airport'));

  return (
    <section className="section" id="destinations">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t("destinations.label")}</span>
          <h2 className="section-title">{t('destinations.title')}</h2>
        </div>
        <div className="dest-tabs">
          <button className={`dest-tab${tab === 'cities' ? ' dest-tab--active' : ''}`} onClick={() => setTab('cities')}>{t('fleet.tabCities')}</button>
          <button className={`dest-tab${tab === 'airports' ? ' dest-tab--active' : ''}`} onClick={() => setTab('airports')}>{t('fleet.tabAirports')}</button>
          <button className={`dest-tab${tab === 'drives' ? ' dest-tab--active' : ''}`} onClick={() => setTab('drives')}>{t('fleet.tabScenic')}</button>
        </div>

        {tab !== 'drives' ? (
          <div className="routes-grid">
            {(tab === 'cities' ? cities : airports).map(dest => {
              const nk = `destCards.${dest.slug}.name`;
              const nv = t(nk);
              const name = nv && nv !== nk ? nv : dest.name;
              const dk = `destCards.${dest.slug}.desc`;
              const dv = t(dk);
              const desc = dv && dv !== dk ? dv : dest.desc;
              return (
                <a key={dest.slug} href={localePath(`/${dest.slug}`)} className="route-card">
                  <div className="route-card__img" style={{ backgroundImage: `url(${dest.image})` }}>
                    {dest.tag && <div className="route-card__badge">{dest.tag}</div>}
                  </div>
                  <div className="route-card__body">
                    <h3 className="route-card__title">{name}</h3>
                    {desc && <p className="route-card__desc">{desc}</p>}
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="routes-grid">
            {ROUTE_IMAGES.map((route, i) => (
              <a key={i} href={localePath(route.href)} className="route-card">
                <div className="route-card__img" style={{ backgroundImage: `url(${route.image})` }}>
                  <div className="route-card__badge">{t(`popularRoutes.items.${i}.time`)} · {t(`popularRoutes.items.${i}.distance`)}</div>
                </div>
                <div className="route-card__body">
                  <h3 className="route-card__title">{t(`popularRoutes.items.${i}.title`)}</h3>
                  <p className="route-card__desc">{t(`popularRoutes.items.${i}.desc`)}</p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION: POPULAR ROUTES — scenic driving cards
   ═══════════════════════════════════════════════════════════ */
// Images + hrefs stay in code; title/desc/time/distance come from translations.
const ROUTE_IMAGES = [
  { image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968935/budva/guides/mogren-coastal-sunset.jpg', href: '/blog/mogren-beach-dukley-tunnel' },
  { image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776969140/budva/guides/sveti-stefan-island.jpg', href: '/blog/milocer-park-villa' },
  { image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968348/budva/guides/lovcen-mountain-footpath.jpg', href: '/blog/budva-to-lovcen-mausoleum' },
  { image: '/img/route-budva-to-dubrovnik.webp', href: '/blog/kotor-day-trip-from-budva' },
];

function PopularRoutes() {
  const { t, localePath } = useTranslation();
  return (
    <section className="section" id="routes">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('popularRoutes.label')}</span>
          <h2 className="section-title">{t('popularRoutes.title')}</h2>
          <p className="section-subtitle">{t('popularRoutes.subtitle')}</p>
        </div>
        <div className="routes-grid">
          {ROUTE_IMAGES.map((route, i) => (
            <a key={i} href={localePath('/book')} className="route-card">
              <div className="route-card__img" style={{ backgroundImage: `url(${route.image})` }}>
                <div className="route-card__badge">{t(`popularRoutes.items.${i}.time`)} · {t(`popularRoutes.items.${i}.distance`)}</div>
              </div>
              <div className="route-card__body">
                <h3 className="route-card__title">{t(`popularRoutes.items.${i}.title`)}</h3>
                <p className="route-card__desc">{t(`popularRoutes.items.${i}.desc`)}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION: HOW IT WORKS — 3 steps
   ═══════════════════════════════════════════════════════════ */
function HowItWorks() {
  const { t } = useTranslation();
  return (
    <section className="section section--alt" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('howItWorks.label')}</span>
          <h2 className="section-title">{t('howItWorks.title')}</h2>
        </div>
        <div className="steps-grid">
          {[1, 2, 3].map(n => (
            <div key={n} className="step-card">
              <div className="step-card__number">{n}</div>
              <h3 className="step-card__title">{t(`howItWorks.stepsTitle${n}`)}</h3>
              <p className="step-card__desc">{t(`howItWorks.stepsDesc${n}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION: STATS — counter strip
   ═══════════════════════════════════════════════════════════ */
function AnimatedNumber({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 2000;
        const start = performance.now();
        function tick(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(parseFloat((eased * target).toFixed(decimals)));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, decimals]);

  return <span ref={ref}>{count}{suffix}</span>;
}

function Stats() {
  const { t } = useTranslation();
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-item__number"><AnimatedNumber target={200} suffix="+" /></div>
            <div className="stat-item__label">{t('statsLabels.vehiclesAvailable')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__number"><AnimatedNumber target={28} /></div>
            <div className="stat-item__label">{t('statsLabels.pickupLocations')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__number"><AnimatedNumber target={4.8} decimals={1} /></div>
            <div className="stat-item__label">{t('statsLabels.customerRating')}</div>
          </div>
          <div className="stat-item">
            <div className="stat-item__number"><AnimatedNumber target={5} /></div>
            <div className="stat-item__label">{t('statsLabels.countriesPermitted')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION: INSIDER TIPS — photo cards with travel advice
   ═══════════════════════════════════════════════════════════ */
// Images stay in code; tag/title/text come from translations.
const TIP_IMAGES = ['https://res.cloudinary.com/dz11ztynf/image/upload/v1776968390/budva/guides/cetinje-lovcen-gloomy-sky.jpg', 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968617/budva/guides/pastrovici-olive-tree.jpg', '/img/blog-budva-to-bar-ferry-port.webp'];

function InsiderTips() {
  const { t } = useTranslation();
  return (
    <section className="section section--alt" id="tips">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('insiderTips.label')}</span>
          <h2 className="section-title">{t('insiderTips.title')}</h2>
        </div>
        <div className="tips-grid">
          {TIP_IMAGES.map((image, i) => (
            <div key={i} className="tip-card">
              <div className="tip-card__img" style={{ backgroundImage: `url(${image})` }}>
                <span className="tip-card__tag">{t(`insiderTips.items.${i}.tag`)}</span>
              </div>
              <div className="tip-card__body">
                <h3 className="tip-card__title">{t(`insiderTips.items.${i}.title`)}</h3>
                <p className="tip-card__text">{t(`insiderTips.items.${i}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 8: BLOG CARDS
   ═══════════════════════════════════════════════════════════ */
const blogPosts = [
  { key: 'churches', image: '/img/blog-rezevici-monastery.webp', href: '/blog/rezevici-monastery' },
  { key: 'vrmac', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968348/budva/guides/lovcen-mountain-footpath.jpg', href: '/blog/budva-to-lovcen-mausoleum' },
  { key: 'swimming', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968935/budva/guides/mogren-coastal-sunset.jpg', href: '/blog/mogren-beach-dukley-tunnel' },
];

function BlogCards() {
  const { t, localePath } = useTranslation();
  return (
    <section className="section section--alt" id="blog">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('blogHome.sectionLabel')}</span>
          <h2 className="section-title">{t('blogHome.sectionTitle')}</h2>
          <p className="section-subtitle">{t('blogHome.sectionSubtitle')}</p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <a key={post.href} href={localePath(post.href)} className="blog-card">
              <img src={post.image} alt={t(`blogIndex.card_${post.key}_title`)} className="blog-card__img" loading="lazy" />
              <div className="blog-card__body">
                <h3 className="blog-card__title">{t(`blogIndex.card_${post.key}_title`)}</h3>
                <p className="blog-card__excerpt">{t(`blogIndex.card_${post.key}_excerpt`)}</p>
              </div>
            </a>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 24 }}>
          <a href={localePath('/blog')} className="link-arrow">{t('blogHome.viewAll')} <ArrowRight size={14} /></a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION: EXPERIENCES — internal destination cards
   ═══════════════════════════════════════════════════════════ */
// Images + hrefs stay in code; title/location come from translations.
const EXPERIENCE_SLOTS = [
  { image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776970436/budva/guides/drobni-pijesak-aerial-beach.jpg', href: '/blog/drobni-pijesak-cove' },
  { image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776969140/budva/guides/sveti-stefan-island.jpg', href: '/blog/milocer-park-villa' },
  { image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968516/budva/guides/stari-bar-ancient-tower.jpg', href: '/blog/sutomore-stari-bar-ruins' },
  { image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968390/budva/guides/cetinje-lovcen-gloomy-sky.jpg', href: '/blog/cetinje-day-trip-from-budva' },
];

function Experiences() {
  const { t, localePath } = useTranslation();
  return (
    <section className="section" id="experiences">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('experiences.label')}</span>
          <h2 className="section-title">{t('experiences.title')}</h2>
          <p className="section-subtitle">{t('experiences.subtitle')}</p>
        </div>
        <div className="exp-grid">
          {EXPERIENCE_SLOTS.map((exp, i) => (
            <a key={i} href={localePath(exp.href)} className="exp-card">
              <div className="exp-card__img" style={{ backgroundImage: `url(${exp.image})` }}>
                <span className="exp-card__badge">{t(`experiences.items.${i}.location`)}</span>
              </div>
              <div className="exp-card__body">
                <h3 className="exp-card__title">{t(`experiences.items.${i}.title`)}</h3>
                <span className="exp-card__link">{t('experiences.readGuide')} →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION: AFFILIATE PROMO — split layout CTA
   ═══════════════════════════════════════════════════════════ */
function RoadTripPromo() {
  const { t, localePath } = useTranslation();
  return (
    <section className="affiliate-promo">
      <div className="container">
        <div className="affiliate-promo__inner">
          <div className="affiliate-promo__text">
            <span className="section-label" style={{ textAlign: 'left' }}>{t('roadTripPlanner.label')}</span>
            <h2 className="affiliate-promo__title">{t('roadTripPlanner.title')}</h2>
            <p className="affiliate-promo__desc">{t('roadTripPlanner.desc') || 'Scenic routes, hidden viewpoints, fuel stops, parking tips, and border crossing advice, written by drivers who know every hairpin on these roads.'}</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={localePath('/blog')} className="affiliate-promo__btn">{t('roadTripPlanner.browseAll')}</a>
              <a href={localePath('/blog/budva-to-lovcen-mausoleum')} className="aff-outline-btn">{t('roadTripPlanner.lovcenGuide')}</a>
            </div>
          </div>
          <div className="affiliate-promo__image">
            <img src="https://res.cloudinary.com/dz11ztynf/image/upload/v1776968348/budva/guides/lovcen-mountain-footpath.jpg" alt={t('roadTripPlanner.imageAlt')} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 9: FAQ — accordion
   ═══════════════════════════════════════════════════════════ */
function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t("faq.label")}</span>
          <h2 className="section-title">{t("faq.title")}</h2>
          <p className="section-subtitle">{t("faq.subtitle")}</p>
        </div>
        <div className="faq-list">
          {[0, 4].map(start => (
            <div key={start} className="faq-column">
              {Array.from({ length: 4 }, (_, i) => i).map(offset => {
                const i = start + offset;
                const isOpen = open === i;
                return (
                  <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
                    <button className="faq-question" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                      <span>{t(`faqItems.${i}.q`)}</span>
                      <ChevronDown size={18} className={`faq-chevron${isOpen ? ' faq-chevron--open' : ''}`} />
                    </button>
                    <div className={`faq-answer-wrap${isOpen ? ' open' : ''}`}>
                      <div><p className="faq-answer">{t(`faqItems.${i}.a`)}</p></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   STICKY BOOKING BAR — appears when hero scrolls out of view
   ═══════════════════════════════════════════════════════════ */
function StickyBookingBar() {
  const { t, localePath } = useTranslation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`sticky-bar${visible ? ' sticky-bar--visible' : ''}`}>
      <div className="sticky-bar__inner">
        <div className="sticky-bar__text">
          <strong>{t('ctaBrand.brand')}</strong>
          <span>{t('ctaBrand.tagline') || 'From €13/day · Tivat Airport 25 min away'}</span>
        </div>
        <a href={localePath('/book')} className="sticky-bar__btn">{t('ctaBrand.searchCars')} <ArrowRight size={14} /></a>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PRICING COMPARISON — taxi vs rental car
   ═══════════════════════════════════════════════════════════ */
function PricingComparison() {
  const { t } = useTranslation();
  const withoutItems = [0, 1, 2, 3, 4].map(i => t(`compare.withoutItems.${i}`));
  const withItems = [0, 1, 2, 3, 4].map(i => t(`compare.withItems.${i}`));
  return (
    <section className="section section--alt" id="compare">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('compare.label')}</span>
          <h2 className="section-title">{t('compare.title')}</h2>
        </div>
        <div className="compare-grid">
          <div className="compare-card compare-card--bad">
            <div className="compare-card__header">{t('compare.withoutTitle')}</div>
            <ul className="compare-card__list">
              {withoutItems.map((item, i) => (
                <li key={i}><span className="compare-x">✕</span> {item}</li>
              ))}
            </ul>
            <div className="compare-card__total">{t('compare.withoutTotal')}</div>
          </div>
          <div className="compare-card compare-card--good">
            <div className="compare-card__header">{t('compare.withTitle')}</div>
            <ul className="compare-card__list">
              {withItems.map((item, i) => (
                <li key={i}><span className="compare-check">✓</span> {item}</li>
              ))}
            </ul>
            <div className="compare-card__total">{t('compare.withTotal')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   DRIVE TIMES MAP — visual hub with radiating destinations
   ═══════════════════════════════════════════════════════════ */
function DriveTimesMap() {
  const { t, localePath } = useTranslation();
  const hrefs = ['/blog/kotor-day-trip-from-budva', '/blog/mogren-beach-dukley-tunnel', '/blog/milocer-park-villa', '/blog/rezevici-monastery', '/blog/cetinje-day-trip-from-budva'];
  return (
    <section className="section" id="drive-times">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('driveMap.label')}</span>
          <h2 className="section-title">{t('driveMap.title')}</h2>
          <p className="section-subtitle">{t('driveMap.subtitle')}</p>
        </div>
        <div className="drivemap">
          <div className="drivemap__center">
            <div className="drivemap__hub">{t('driveMap.hub')}</div>
          </div>
          <div className="drivemap__spokes">
            {hrefs.map((href, i) => (
              <a key={i} href={localePath(href)} className="drivemap__spoke">
                <span className="drivemap__spoke-name">{t(`driveMap.items.${i}.name`)}</span>
                <span className="drivemap__spoke-time">{t(`driveMap.items.${i}.time`)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SECTION 10: CTA BANNER
   ═══════════════════════════════════════════════════════════ */
function CTABanner() {
  const { t, localePath } = useTranslation();
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner">
        <h2 className="cta-banner__title">{t("cta.title")}</h2>
        <p className="cta-banner__subtitle">{t('cta.subtitle')}</p>
        <div className="cta-banner__actions">
          <a href={localePath("/book")} className="cta-white-btn">
            {t('cta.browseFleet')} <ArrowRight size={16} />
          </a>
          <a href="mailto:info@carrentalbudva.com" className="cta-btn--outline">
            <Mail size={15} /> info@carrentalbudva.com
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── UTILITIES ───────────────────────────────────────── */
function StickyMobileCTA() {
  const { t, localePath } = useTranslation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`sticky-cta${visible ? ' sticky-cta--visible' : ''}`}>
      <a href={localePath("/book")} className="sticky-cta__btn">{t('common.bookNow')} <ArrowRight size={16} /></a>
      <a href="https://wa.me/38269000000?text=Hi!%20I%27d%20like%20to%20enquire%20about%20renting%20a%20car%20in%20Montenegro." target="_blank" rel="noopener noreferrer" className="sticky-cta__phone"><MessageCircle size={18} /></a>
    </div>
  );
}

function WhatsAppFab() {
  const { t } = useTranslation();
  return (
    <a href="https://wa.me/38269000000?text=Hi!%20I%27d%20like%20to%20enquire%20about%20renting%20a%20car%20in%20Montenegro." target="_blank" rel="noopener noreferrer" className="whatsapp-fab" aria-label={t('a11y.chatWhatsApp')}>
      <MessageCircle size={22} />
    </a>
  );
}

function ScrollToTop() {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!show) return null;
  return (
    <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t('a11y.scrollTop')}>
      <ChevronRight size={20} style={{ transform: 'rotate(-90deg)' }} />
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP — Section order matches getrentacar.com
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  useGlobalReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* <Reviews /> */}
        <Fleet />
        <FleetShowcase />
        <Destinations />
        <InsiderTips />
        <Stats />
        <BlogCards />
        <DriveTimesMap />
        <RoadTripPromo />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyBookingBar />
      <WhatsAppFab />
      <ScrollToTop />
      <StickyMobileCTA />
    </>
  );
}
