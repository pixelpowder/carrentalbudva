'use client';
import { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import useTranslation from './i18n/useTranslation';
import Nav from './Nav';
import Footer from './Footer';
import {
  MapPin, Star, ShieldCheck, Clock, RefreshCw, Globe, Ban,
  ChevronDown, ChevronRight, Search, Car, Shield, Map, Truck,
  Headphones, CheckCircle, Award, Zap, ArrowRight,
} from 'lucide-react';
import config from './siteConfig';
import './App.css';

const LOCATIONS = [
  'Tivat','Podgorica','Kotor','Budva','Herceg-Novi','Bar','Ulcinj',
  'Sveti Stefan','Perast','Petrovac','Bečići','Rafailovići','Pržno',
  'Sutomore','Luštica Bay','Žabljak','Kolašin','Nikšić','Igalo','Risan',
  'Orahovac','Prčanj','Bijela','Rose','Reževići','Dobre Vode',
  'Djenovici','Krasici','Radovici','Buljarica',
];
const CITY_ID_MAP = {
  'Tivat':17,'Podgorica':15,'Kotor':9,'Budva':5,'Bar':2,'Herceg-Novi':19,
  'Ulcinj':18,'Kolašin':8,'Žabljak':7,'Sveti Stefan':25,'Perast':33,
  'Petrovac':39,'Sutomore':29,'Luštica Bay':549187,'Nikšić':549113,
  'Bečići':23,'Igalo':35,'Rafailovići':22,'Pržno':24,'Risan':34,
  'Orahovac':32,'Prčanj':36,'Bijela':549193,'Rose':40,'Reževići':26,
  'Dobre Vode':30,'Djenovici':548985,'Krasici':548984,'Radovici':548966,
  'Buljarica':548986,
};
const OPTS = LOCATIONS.map(l => ({ value: l, label: l }));
const TIMES = Array.from({length:24},(_,i)=>String(i).padStart(2,'0')+':00');

const selStyles = {
  control: b => ({...b,border:'none',boxShadow:'none',background:'transparent',minHeight:'unset',cursor:'pointer'}),
  valueContainer: b => ({...b,padding:0}),
  input: b => ({...b,margin:0,padding:0,fontSize:'16px',color:'#1a2c4a'}),
  singleValue: b => ({...b,fontSize:'16px',fontWeight:600,color:'#1a2c4a',margin:0}),
  placeholder: b => ({...b,fontSize:'15px',color:'#FF6B35',margin:0}),
  indicatorSeparator: () => ({display:'none'}),
  dropdownIndicator: b => ({...b,padding:0,color:'#0066FF'}),
  menu: b => ({...b,zIndex:9999,borderRadius:'12px',boxShadow:'0 12px 40px rgba(0,0,0,0.15)',marginTop:'4px',border:'1px solid #e5e7eb'}),
  menuPortal: b => ({...b,zIndex:9999}),
  menuList: b => ({...b,padding:'6px',maxHeight:'240px'}),
  option: (b,s) => ({
    ...b,fontSize:'14px',fontWeight:s.isSelected?'600':'400',
    color:s.isSelected?'#0066FF':'#1a2c4a',
    background:s.isSelected?'rgba(0,102,255,0.06)':s.isFocused?'#f7f9fc':'transparent',
    borderRadius:'8px',cursor:'pointer',padding:'10px 14px',
  }),
};

/* ═══ BOOKING FORM ═══ */
function BookingForm() {
  const router = useRouter();
  const { localePath } = useTranslation();
  const [pickup, setPickup] = useState('Budva');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [pickupTime, setPickupTime] = useState('10:00');
  const [dropoffTime, setDropoffTime] = useState('10:00');
  const fmt = d => d ? `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}` : '';
  const handleSearch = () => {
    const p = new URLSearchParams({location:pickup,pickup_date:fmt(startDate),pickup_time:pickupTime,dropoff_date:fmt(endDate),dropoff_time:dropoffTime});
    const cid = CITY_ID_MAP[pickup];
    if (cid) p.set('city_id', cid);
    router.push(`${localePath('/book')}?${p.toString()}`);
  };
  return (
    <section className="bf">
      <div className="bf__inner">
        <div className="bf__row">
          <div className="bf__field bf__field--loc">
            <span className="bf__label">Pickup from</span>
            <Select options={OPTS} value={OPTS.find(o=>o.value===pickup)} onChange={o=>setPickup(o.value)}
              styles={selStyles} isSearchable placeholder="Enter airport, city, station..."
              menuPortalTarget={typeof document!=='undefined'?document.body:null} />
          </div>
          <div className="bf__field bf__field--date">
            <span className="bf__label">Pickup on</span>
            <div className="bf__date-time">
              <DatePicker selected={startDate} onChange={d=>setStartDate(d)} minDate={new Date()}
                dateFormat="dd MMM yyyy" placeholderText="Select date" className="bf__date-input" />
              <select className="bf__time" value={pickupTime} onChange={e=>setPickupTime(e.target.value)}>
                {TIMES.map(t=><option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="bf__field bf__field--date">
            <span className="bf__label">Return on</span>
            <div className="bf__date-time">
              <DatePicker selected={endDate} onChange={d=>setEndDate(d)} minDate={startDate||new Date()}
                dateFormat="dd MMM yyyy" placeholderText="Select date" className="bf__date-input" />
              <select className="bf__time" value={dropoffTime} onChange={e=>setDropoffTime(e.target.value)}>
                {TIMES.map(t=><option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <button className="bf__search" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </section>
  );
}

/* ═══ TRUST BAR — horizontal strip with Trustpilot-style rating + brand logos ═══ */
function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="trust-bar__inner">
        <div className="trust-bar__left">
          <span className="trust-bar__label">Rated Excellent</span>
          <div className="trust-bar__stars">★★★★★</div>
          <span className="trust-bar__reviews">12,000+ reviews</span>
        </div>
        <div className="trust-bar__right">
          <span className="trust-bar__brands-label">1,000+ brands</span>
          {['logo-toyota','logo-volkswagen','logo-renault','logo-peugeot','logo-fiat','logo-ford'].map(l=>
            <img key={l} src={`/img/${l}.png`} alt="" className="trust-bar__brand" />
          )}
        </div>
      </div>
    </section>
  );
}

/* ═══ HOW IT WORKS — 3-step horizontal process ═══ */
function HowItWorks() {
  const steps = [
    { num: '1', icon: <Search size={24}/>, title: 'Search & compare', desc: 'Enter your dates and location. We search across all major providers to find you the best deal.' },
    { num: '2', icon: <ShieldCheck size={24}/>, title: 'Book with confidence', desc: 'Reserve your car with free cancellation and full insurance included. No hidden fees, ever.' },
    { num: '3', icon: <Car size={24}/>, title: 'Collect & drive', desc: 'Your agent meets you at the airport or delivers to your hotel. Keys in hand, road ahead.' },
  ];
  return (
    <section className="steps">
      <div className="steps__inner">
        <h2 className="steps__title">How it works</h2>
        <div className="steps__grid">
          {steps.map((s,i) => (
            <div key={i} className="step">
              <div className="step__num">{s.num}</div>
              <div className="step__icon">{s.icon}</div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ WHY US — features in 2-col layout with large icon ═══ */
function WhyUs() {
  const items = [
    { icon: <Award size={28}/>, title: 'Best price guaranteed', desc: 'We compare prices from 500+ suppliers so you always get the lowest rate available.' },
    { icon: <ShieldCheck size={28}/>, title: 'Full insurance included', desc: 'Every booking includes CDW and theft protection. Upgrade to zero excess for complete peace of mind.' },
    { icon: <RefreshCw size={28}/>, title: 'Free cancellation', desc: 'Plans change — cancel up to 48 hours before pickup for a full refund. No questions asked.' },
    { icon: <Headphones size={28}/>, title: '24/7 customer support', desc: 'Our team is available around the clock. Flat tyre at midnight? We\'ll sort it.' },
    { icon: <Globe size={28}/>, title: 'Cross-border driving', desc: 'Drive to Croatia, Albania, Bosnia and beyond. Green Card paperwork handled at booking.' },
    { icon: <Zap size={28}/>, title: '10-minute airport pickup', desc: 'Your agent meets you at arrivals. No shuttle buses, no waiting around. Keys in hand, fast.' },
  ];
  return (
    <section className="why">
      <div className="why__inner">
        <div className="why__header">
          <h2 className="why__title">Why book with us?</h2>
          <p className="why__sub">Trusted by 85,000+ travellers across Montenegro since 2019.</p>
        </div>
        <div className="why__grid">
          {items.map((it,i) => (
            <div key={i} className="why__card">
              <div className="why__card-icon">{it.icon}</div>
              <div>
                <h3 className="why__card-title">{it.title}</h3>
                <p className="why__card-desc">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ DESTINATIONS — featured + grid layout ═══ */
function Destinations() {
  const dests = config.destinations;
  const featured = dests[0];
  const rest = dests.slice(1);
  return (
    <section className="dest" id="destinations">
      <div className="dest__inner">
        <h2 className="dest__title">Explore Montenegro</h2>
        <p className="dest__sub">Pick up in Budva and drive anywhere. Every destination is within reach.</p>
        <div className="dest__layout">
          <a href={`/${featured.slug}`} className="dest__featured">
            <img src={featured.image} alt={featured.name} className="dest__featured-img" />
            <div className="dest__featured-content">
              <span className="dest__featured-tag">{featured.tag}</span>
              <h3 className="dest__featured-name">{featured.name}</h3>
              <p className="dest__featured-desc">{featured.desc}</p>
              <span className="dest__featured-link">Explore <ArrowRight size={16}/></span>
            </div>
          </a>
          <div className="dest__list">
            {rest.map((d,i) => (
              <a key={i} href={`/${d.slug}`} className="dest__list-item">
                <img src={d.image} alt={d.name} className="dest__list-img" />
                <div className="dest__list-info">
                  <h4 className="dest__list-name">{d.name}</h4>
                  <p className="dest__list-desc">{d.desc}</p>
                </div>
                <span className="dest__list-tag">{d.tag}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ REVIEWS — 2×2 grid ═══ */
function Reviews() {
  const t = config.testimonials;
  return (
    <section className="rev">
      <div className="rev__inner">
        <h2 className="rev__title">Trusted by thousands</h2>
        <div className="rev__grid">
          <div className="rev__col">
            <div className="rev__card">
              <div className="rev__card-stars">{[...Array(t[0].rating)].map((_,j)=><Star key={j} size={16} fill="#f59e0b" color="#f59e0b"/>)}</div>
              <p className="rev__card-text">{t[0].text}</p>
              <div className="rev__card-author">
                <div className="rev__card-avatar">{t[0].name.charAt(0)}</div>
                <div><strong className="rev__card-name">{t[0].name}</strong><span className="rev__card-loc">{t[0].location}</span></div>
              </div>
            </div>
            <div className="rev__card">
              <div className="rev__card-stars">{[...Array(t[1].rating)].map((_,j)=><Star key={j} size={16} fill="#f59e0b" color="#f59e0b"/>)}</div>
              <p className="rev__card-text">{t[1].text}</p>
              <div className="rev__card-author">
                <div className="rev__card-avatar">{t[1].name.charAt(0)}</div>
                <div><strong className="rev__card-name">{t[1].name}</strong><span className="rev__card-loc">{t[1].location}</span></div>
              </div>
            </div>
          </div>
          <div className="rev__col">
            <div className="rev__card">
              <div className="rev__card-stars">{[...Array(t[2].rating)].map((_,j)=><Star key={j} size={16} fill="#f59e0b" color="#f59e0b"/>)}</div>
              <p className="rev__card-text">{t[2].text}</p>
              <div className="rev__card-author">
                <div className="rev__card-avatar">{t[2].name.charAt(0)}</div>
                <div><strong className="rev__card-name">{t[2].name}</strong><span className="rev__card-loc">{t[2].location}</span></div>
              </div>
            </div>
            <div className="rev__stat-card">
              <div className="rev__stat-num">4.8<span>/5</span></div>
              <div className="rev__stat-stars">{[...Array(5)].map((_,j)=><Star key={j} size={20} fill="#f59e0b" color="#f59e0b"/>)}</div>
              <p className="rev__stat-label">Average rating from 12,000+ verified reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══ POPULAR ROUTES — scenic driving routes ═══ */
function PopularRoutes() {
  const routes = [
    { name: 'Budva → Kotor', time: '30 min', distance: '25 km', desc: 'Stunning bay road hugging the coastline through Prčanj and Dobrota.' },
    { name: 'Budva → Dubrovnik', time: '2.5 hrs', distance: '95 km', desc: 'Cross into Croatia via Debeli Brijeg for the pearl of the Adriatic.' },
    { name: 'Budva → Durmitor', time: '3 hrs', distance: '180 km', desc: 'Mountain roads through Nikšić to UNESCO-listed Durmitor National Park.' },
    { name: 'Budva → Sveti Stefan', time: '15 min', distance: '9 km', desc: 'Coastal road south to Montenegro\'s most photographed island hotel.' },
  ];
  return (
    <section className="routes">
      <div className="routes__inner">
        <h2 className="routes__title">Popular driving routes</h2>
        <p className="routes__sub">Montenegro is made for road trips. Here are the routes our customers love most.</p>
        <div className="routes__grid">
          {routes.map((r,i) => (
            <div key={i} className="route">
              <div className="route__header">
                <h3 className="route__name">{r.name}</h3>
                <div className="route__meta">
                  <span className="route__time">{r.time}</span>
                  <span className="route__dist">{r.distance}</span>
                </div>
              </div>
              <p className="route__desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FAQ — 2-column accordion ═══ */
function FAQ() {
  const [open, setOpen] = useState(null);
  const half = Math.ceil(config.faq.length / 2);
  const col1 = config.faq.slice(0, half);
  const col2 = config.faq.slice(half);
  const renderItem = (item, idx) => (
    <div key={idx} className={`faq__item${open===idx?' faq__item--open':''}`}>
      <button className="faq__q" onClick={()=>setOpen(open===idx?null:idx)}>
        <span>{item.q}</span>
        <ChevronDown size={20} className={`faq__icon${open===idx?' faq__icon--open':''}`} />
      </button>
      <div className={`faq__a${open===idx?' faq__a--open':''}`}>
        <p>{item.a}</p>
      </div>
    </div>
  );
  return (
    <section className="faq" id="faq">
      <div className="faq__inner">
        <div className="faq__header">
          <h2 className="faq__title">Frequently asked questions</h2>
          <p className="faq__sub">Everything you need to know before you book.</p>
        </div>
        <div className="faq__cols">
          <div className="faq__col">{col1.map((it,i) => renderItem(it, i))}</div>
          <div className="faq__col">{col2.map((it,i) => renderItem(it, i + half))}</div>
        </div>
      </div>
    </section>
  );
}

/* ═══ NEWSLETTER BANNER ═══ */
function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <div className="newsletter__text">
          <h3 className="newsletter__title">Get the best deals in your inbox</h3>
          <p className="newsletter__desc">Join 15,000+ travellers who receive our weekly Montenegro travel tips and exclusive car rental offers.</p>
        </div>
        <div className="newsletter__form">
          <input type="email" placeholder="Enter your email" className="newsletter__input" />
          <button className="newsletter__btn">Subscribe</button>
        </div>
      </div>
    </section>
  );
}

/* ═══ CTA ═══ */
function CTA() {
  const { localePath } = useTranslation();
  return (
    <section className="cta">
      <div className="cta__inner">
        <div className="cta__content">
          <h2 className="cta__title">Ready to hit the road?</h2>
          <p className="cta__desc">Compare prices from top providers. Free cancellation on most bookings.</p>
          <a href={localePath('/book')} className="cta__btn">Search cars <ArrowRight size={18}/></a>
        </div>
        <div className="cta__image">
          <img src={config.hero.image} alt="" />
        </div>
      </div>
    </section>
  );
}

/* ═══ MAIN ═══ */
export default function App() {
  return (
    <>
      <div className="hero-wrap">
        <img src="/img/budva-riviera.webp" alt="" className="hero-wrap__bg" />
        <div className="hero-wrap__overlay" />
        <Nav />
        <BookingForm />
        <div className="hero-wrap__bottom">
          <div className="hero-wrap__bottom-inner">
            <h1 className="hero__tagline">
              The easiest way to search, compare<br/>and book a rental car in Montenegro
            </h1>
            <div className="hero__stats-card">
              <div className="hero__stat">
                <span className="hero__stat-num">4.8</span>
                <span className="hero__stat-stars">★★★★★</span>
                <span className="hero__stat-sub">From 12,000+ reviews</span>
              </div>
              <div className="hero__stat-sep" />
              <div className="hero__stat">
                <span className="hero__stat-num">85,000+</span>
                <span className="hero__stat-sub">Bookings & counting</span>
              </div>
              <div className="hero__stat-sep" />
              <div className="hero__stat">
                <span className="hero__stat-num">2019</span>
                <span className="hero__stat-sub">Trusted since</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrustBar />
      <HowItWorks />
      <WhyUs />
      <Destinations />
      <PopularRoutes />
      <Reviews />
      <FAQ />
      <Newsletter />
      <CTA />
      <Footer />
    </>
  );
}
