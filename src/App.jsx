'use client';
import { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import useTranslation from './i18n/useTranslation';
import Nav from './Nav';
import Footer from './Footer';
import {
  MapPin,
  ChevronDown,
  Star,
  ShieldCheck,
  Clock,
  RefreshCw,
  Globe,
  Ban,
  Users,
  Briefcase,
  CheckCircle,
  ArrowRight,
  Mail,
  Search,
  Calendar,
} from 'lucide-react';
import config from './siteConfig';
import './App.css';

/* ── Icon map for siteConfig.features ──────────────────── */
const FEATURE_ICONS = {
  'map-pin': MapPin,
  'shield-check': ShieldCheck,
  'clock': Clock,
  'ban': Ban,
  'refresh-cw': RefreshCw,
  'globe': Globe,
};

/* ── Locations & city IDs ──────────────────────────────── */
const LOCATIONS = [
  'Tivat', 'Podgorica', 'Kotor', 'Budva', 'Herceg-Novi',
  'Bar', 'Ulcinj', 'Sveti Stefan', 'Perast', 'Petrovac',
  'Becici', 'Rafailovici', 'Przno', 'Sutomore', 'Lustica Bay',
  'Zabljak', 'Kolasin', 'Niksic', 'Igalo', 'Risan',
  'Orahovac', 'Prcanj', 'Bijela', 'Rose', 'Rezevici',
  'Dobre Vode', 'Djenovici', 'Krasici', 'Radovici', 'Buljarica',
];

const CITY_ID_MAP = {
  'Tivat': 17, 'Podgorica': 15, 'Kotor': 9, 'Budva': 5,
  'Bar': 2, 'Herceg-Novi': 19, 'Ulcinj': 18, 'Kolasin': 8,
  'Zabljak': 7, 'Sveti Stefan': 25, 'Perast': 33, 'Petrovac': 39,
  'Sutomore': 29, 'Lustica Bay': 549187, 'Niksic': 549113,
  'Becici': 23, 'Igalo': 35, 'Rafailovici': 22, 'Przno': 24,
  'Risan': 34, 'Orahovac': 32, 'Prcanj': 36, 'Bijela': 549193,
  'Rose': 40, 'Rezevici': 26, 'Dobre Vode': 30,
  'Djenovici': 548985, 'Krasici': 548984, 'Radovici': 548966,
  'Buljarica': 548986,
};

const LOCATION_OPTIONS = LOCATIONS.map(l => ({ value: l, label: l }));

const TIME_OPTIONS = Array.from({ length: 24 }, (_, i) => {
  const t = `${String(i).padStart(2, '0')}:00`;
  return t;
});

/* ── react-select custom styles ────────────────────────── */
const selectStyles = {
  control: (base) => ({
    ...base,
    border: 'none',
    boxShadow: 'none',
    background: 'transparent',
    minHeight: 'unset',
    cursor: 'pointer',
  }),
  valueContainer: (base) => ({ ...base, padding: 0 }),
  input: (base) => ({ ...base, margin: 0, padding: 0, fontSize: '15px', fontWeight: 500, color: '#1a2c4a' }),
  singleValue: (base) => ({ ...base, fontSize: '15px', fontWeight: 500, color: '#1a2c4a', margin: 0 }),
  placeholder: (base) => ({ ...base, fontSize: '15px', color: '#9ca3af', margin: 0 }),
  indicatorSeparator: () => ({ display: 'none' }),
  dropdownIndicator: (base) => ({ ...base, padding: 0, color: '#0066FF' }),
  menu: (base) => ({ ...base, zIndex: 9999, borderRadius: '10px', boxShadow: '0 8px 32px rgba(0,0,0,0.18)', marginTop: 6, overflow: 'hidden' }),
  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
  menuList: (base) => ({ ...base, padding: '4px', maxHeight: 260 }),
  option: (base, state) => ({
    ...base,
    fontSize: '14px',
    fontWeight: state.isSelected ? 600 : 400,
    color: state.isSelected ? '#0066FF' : '#1a2c4a',
    background: state.isSelected ? 'rgba(0,102,255,0.08)' : state.isFocused ? 'rgba(0,102,255,0.05)' : 'transparent',
    borderRadius: '6px',
    cursor: 'pointer',
    padding: '10px 12px',
  }),
};

/* ── date formatter ────────────────────────────────────── */
function fmt(d) {
  if (!d) return '';
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/* ═══════════════════════════════════════════════════════════
   1. HERO
   ═══════════════════════════════════════════════════════════ */
function Hero() {
  const { t, localePath } = useTranslation();
  const router = useRouter();
  const [pickup, setPickup] = useState('Budva');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropoffTime, setDropoffTime] = useState('10:00');

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const handleSearch = () => {
    const params = new URLSearchParams({
      location: pickup,
      pickup_date: fmt(startDate),
      pickup_time: pickupTime,
      dropoff_date: fmt(endDate),
      dropoff_time: dropoffTime,
    });
    const cityId = CITY_ID_MAP[pickup];
    if (cityId) params.set('city_id', cityId);
    router.push(`${localePath('/book')}?${params.toString()}`);
  };

  const selected = LOCATION_OPTIONS.find(o => o.value === pickup) || null;

  return (
    <section className="hero" style={{ backgroundImage: 'url(/hero-bg.webp)' }}>
      <div className="hero__overlay" />
      <div className="hero__inner">
        <h1 className="hero__headline">{t('hero.headline')}</h1>
        <p className="hero__sub">{t('hero.subheadline') || config.hero.subheadline}</p>

        <div className="hero__badges">
          <span className="hero__badge"><CheckCircle size={14} /> {t('hero.badges.freeCancellation')}</span>
          <span className="hero__badge"><ShieldCheck size={14} /> {t('hero.badges.fullInsurance')}</span>
          <span className="hero__badge"><Clock size={14} /> {t('hero.badges.airportPickup')}</span>
          <span className="hero__badge hero__badge--gold"><Star size={14} fill="currentColor" /> {t('hero.badges.trustpilot')}</span>
        </div>

        <div className="booking-card">
          <div className="booking-card__fields">
            {/* Location */}
            <div className="booking-field booking-field--location">
              <label><MapPin size={12} /> {t('hero.pickupLocation')}</label>
              <Select
                inputId="f-location"
                options={LOCATION_OPTIONS}
                value={selected}
                onChange={opt => setPickup(opt.value)}
                styles={selectStyles}
                isSearchable
                placeholder={t('hero.searchLocation')}
                menuPlacement="auto"
                menuPortalTarget={typeof document !== 'undefined' ? document.body : null}
                maxMenuHeight={200}
              />
            </div>

            {/* Dates */}
            <div className="booking-field booking-field--dates">
              <label><Calendar size={12} /> {t('hero.pickupDate')} &mdash; {t('hero.dropoffDate')}</label>
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange}
                minDate={new Date()}
                monthsShown={typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2}
                dateFormat="dd MMM yyyy"
                placeholderText={t('hero.selectDates') || 'Select dates'}
                className="booking-field__input"
                calendarClassName="booking-calendar"
                popperPlacement="bottom-start"
              />
            </div>

            {/* Pickup time */}
            <div className="booking-field booking-field--time">
              <label htmlFor="f-pickup-time">{t('hero.pickupTime')}</label>
              <select id="f-pickup-time" className="booking-field__input" value={pickupTime} onChange={e => setPickupTime(e.target.value)}>
                {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Dropoff time */}
            <div className="booking-field booking-field--time">
              <label htmlFor="f-dropoff-time">{t('hero.dropoffTime')}</label>
              <select id="f-dropoff-time" className="booking-field__input" value={dropoffTime} onChange={e => setDropoffTime(e.target.value)}>
                {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Search */}
            <button className="booking-card__search" onClick={handleSearch}>
              <Search size={18} />
              <span>{t('hero.search')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   2. TRUST STATS BAR
   ═══════════════════════════════════════════════════════════ */
function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="stats-bar__inner">
        <div className="stats-bar__item">
          <Star size={18} fill="#f59e0b" color="#f59e0b" />
          <div><span className="stats-bar__value">4.8</span> Average Rating</div>
        </div>
        <div className="stats-bar__item">
          <Users size={18} />
          <div><span className="stats-bar__value">12,000+</span> Bookings</div>
        </div>
        <div className="stats-bar__item">
          <ShieldCheck size={18} />
          <div>Trusted Since <span className="stats-bar__value">2019</span></div>
        </div>
        <div className="stats-bar__item">
          <MapPin size={18} />
          <div><span className="stats-bar__value">28+</span> Pickup Locations</div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   3. FEATURES
   ═══════════════════════════════════════════════════════════ */
function Features() {
  const { t } = useTranslation();
  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header section-header--light">
          <span className="section-label section-label--light">{t('features.label')}</span>
          <h2 className="section-title section-title--light">{t('features.title')}</h2>
          <p className="section-subtitle section-subtitle--light">{t('features.subtitle')}</p>
        </div>
        <div className="features__grid">
          {config.features.map((f, i) => {
            const Icon = FEATURE_ICONS[f.icon] || ShieldCheck;
            return (
              <div key={i} className="feature-card">
                <div className="feature-card__icon"><Icon size={22} /></div>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   4. FLEET (widget iframe)
   ═══════════════════════════════════════════════════════════ */
function Fleet() {
  const { t, localePath } = useTranslation();
  const [iframeHeight, setIframeHeight] = useState(800);
  const [iframeSrc, setIframeSrc] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    function onMessage(e) {
      if (e.data && e.data.type === 'iframeHeight') setIframeHeight(Math.min(e.data.height, 1400));
    }
    window.addEventListener('message', onMessage);

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const load = () => setIframeSrc('/widget.html?city_id=5&hide_search=1&v=12');
        if ('requestIdleCallback' in window) {
          requestIdleCallback(load, { timeout: 1500 });
        } else {
          setTimeout(load, 100);
        }
        obs.disconnect();
      }
    }, { rootMargin: '200px' });

    if (ref.current) obs.observe(ref.current);
    return () => { obs.disconnect(); window.removeEventListener('message', onMessage); };
  }, []);

  return (
    <section className="fleet" id="fleet" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('fleet.label')}</span>
          <h2 className="section-title">{t('fleet.title')}</h2>
          <p className="section-subtitle">{t('fleet.subtitle')}</p>
        </div>
        <a href={localePath('/book')} className="fleet__widget-link">
          {iframeSrc && (
            <iframe
              src={iframeSrc}
              title="Browse fleet"
              frameBorder="0"
              scrolling="no"
              style={{ width: '100%', height: iframeHeight, border: 'none', display: 'block', pointerEvents: 'none' }}
            />
          )}
          <div className="fleet__fade" />
          <div className="fleet__overlay" />
        </a>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   5. DESTINATIONS
   ═══════════════════════════════════════════════════════════ */
function Destinations() {
  const { t, localePath } = useTranslation();
  return (
    <section className="destinations" id="destinations">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('destinations.label')}</span>
          <h2 className="section-title">{t('destinations.title')}</h2>
          <p className="section-subtitle">{t('destinations.subtitle')}</p>
        </div>
        <div className="destinations__grid">
          {config.destinations.map((dest) => (
            <a key={dest.slug} href={localePath(`/${dest.slug}`)} className="dest-card">
              <div className="dest-card__img" style={{ backgroundImage: `url(${dest.image})` }} />
              <div className="dest-card__content">
                {dest.tag && <span className="dest-card__tag">{dest.tag}</span>}
                <h3 className="dest-card__name">{dest.name}</h3>
                <p className="dest-card__desc">{dest.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   6. REVIEWS
   ═══════════════════════════════════════════════════════════ */
function Reviews() {
  const { t } = useTranslation();
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('reviews.label')}</span>
          <h2 className="section-title">{t('reviews.title')}</h2>
          <p className="section-subtitle">{t('reviews.subtitle')}</p>
        </div>
        <div className="reviews__grid">
          {config.testimonials.map((rev, i) => (
            <div key={rev.name} className="review-card">
              <div className="review-card__stars">
                {Array.from({ length: rev.rating }).map((_, j) => (
                  <Star key={j} size={14} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <p className="review-card__text">{t(`testimonials.${i}.text`) || rev.text}</p>
              <div className="review-card__author">
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
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   7. FAQ
   ═══════════════════════════════════════════════════════════ */
function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(null);
  const half = Math.ceil(config.faq.length / 2);
  const col1 = config.faq.slice(0, half);
  const col2 = config.faq.slice(half);

  const renderItem = (item, i) => {
    const isOpen = open === i;
    return (
      <div key={i} className={`faq-item${isOpen ? ' faq-item--open' : ''}`}>
        <button className="faq-item__q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
          <span>{t(`faqItems.${i}.q`) || item.q}</span>
          <ChevronDown size={18} className={`faq-item__chevron${isOpen ? ' faq-item__chevron--open' : ''}`} />
        </button>
        <div className={`faq-item__a-wrap${isOpen ? ' faq-item__a-wrap--open' : ''}`}>
          <p className="faq-item__a">{t(`faqItems.${i}.a`) || item.a}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t('faq.label')}</span>
          <h2 className="section-title">{t('faq.title')}</h2>
          <p className="section-subtitle">{t('faq.subtitle')}</p>
        </div>
        <div className="faq__columns">
          <div className="faq__col">
            {col1.map((item, i) => renderItem(item, i))}
          </div>
          <div className="faq__col">
            {col2.map((item, i) => renderItem(item, i + half))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   8. CTA BANNER
   ═══════════════════════════════════════════════════════════ */
function CTABanner() {
  const { t, localePath } = useTranslation();
  return (
    <section className="cta">
      <div className="cta__inner">
        <h2 className="cta__title">{t('cta.title')}</h2>
        <p className="cta__subtitle">{t('cta.subtitle')}</p>
        <div className="cta__actions">
          <a href={localePath('/book')} className="cta__btn cta__btn--primary">
            {t('cta.browseFleet')} <ArrowRight size={16} />
          </a>
          <a href={`mailto:${config.email}`} className="cta__btn cta__btn--outline">
            <Mail size={15} /> {config.email}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   APP
   ═══════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Features />
        <Fleet />
        <Destinations />
        <Reviews />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
