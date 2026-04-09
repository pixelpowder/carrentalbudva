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
  ChevronDown, Search, Car, Shield, Map, Truck, Headphones,
} from 'lucide-react';
import config from './siteConfig';
import './App.css';

/* ── DATA ──────────────────────────────────────── */
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
  singleValue: b => ({...b,fontSize:'16px',color:'#1a2c4a',margin:0}),
  placeholder: b => ({...b,fontSize:'16px',color:'#9ca3af',margin:0}),
  indicatorSeparator: () => ({display:'none'}),
  dropdownIndicator: b => ({...b,padding:0,color:'#0066FF'}),
  menu: b => ({...b,zIndex:9999,borderRadius:'8px',boxShadow:'0 8px 32px rgba(0,0,0,0.15)',marginTop:'4px'}),
  menuPortal: b => ({...b,zIndex:9999}),
  menuList: b => ({...b,padding:'4px',maxHeight:'240px'}),
  option: (b,s) => ({
    ...b,fontSize:'14px',fontWeight:s.isSelected?'600':'400',
    color:s.isSelected?'#0066FF':'#1a2c4a',
    background:s.isSelected?'rgba(0,102,255,0.08)':s.isFocused?'rgba(0,102,255,0.04)':'transparent',
    borderRadius:'6px',cursor:'pointer',padding:'10px 12px',
  }),
};

/* ═══ BOOKING FORM — full-width white section between nav and hero ═══ */
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
    const p = new URLSearchParams({
      location:pickup, pickup_date:fmt(startDate), pickup_time:pickupTime,
      dropoff_date:fmt(endDate), dropoff_time:dropoffTime,
    });
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

/* ═══ HERO — scenic image, tagline bottom-left, stats card ═══ */
function Hero() {
  return (
    <section className="hero">
      <img src="/hero-bg.webp" alt="Montenegro coastal road" className="hero__img" />
      <div className="hero__content">
        <h1 className="hero__tagline">
          The easiest way to search, compare<br />and book a rental car in Montenegro
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
    </section>
  );
}

/* ═══ BRANDS ═══ */
function Brands() {
  const logos = ['logo-toyota','logo-volkswagen','logo-renault','logo-peugeot','logo-fiat',
    'logo-ford','logo-hyundai','logo-dacia','logo-citroen','logo-suzuki'];
  return (
    <section className="brands">
      <p className="brands__text">Great value rental cars from Montenegro's most trusted providers</p>
      <div className="brands__row">
        {logos.map(l=><img key={l} src={`/img/${l}.png`} alt="" className="brands__logo" />)}
      </div>
    </section>
  );
}

/* ═══ INFO GRID — dark navy section, image left + 6 cards right ═══ */
function InfoGrid() {
  const items = [
    {icon:<Car size={24}/>,title:'A full range of vehicles',desc:'Compare vehicles from Montenegro\'s leading rental providers.',link:'View fleet',href:'#fleet'},
    {icon:<Shield size={24}/>,title:'Full insurance included',desc:'CDW and theft protection come standard. Zero excess upgrade available.',link:'Learn more',href:'#features'},
    {icon:<Map size={24}/>,title:'Road trips',desc:'Coastal Route, Bay of Kotor, Durmitor — the best driving in the Balkans.',link:'View routes',href:'#destinations'},
    {icon:<Truck size={24}/>,title:'Cross-border ready',desc:'Drive to Croatia, Albania, Serbia. Green Card handled at booking.',link:'Read more',href:'#faq'},
    {icon:<ShieldCheck size={24}/>,title:'No hidden fees',desc:'All taxes and standard fees included. The price you see is what you pay.',link:'View pricing',href:'#faq'},
    {icon:<Headphones size={24}/>,title:'24/7 support',desc:'Questions before, during, or after your trip? We\'re always here.',link:'Contact us',href:'/contact'},
  ];
  return (
    <section className="info" id="features">
      <div className="info__inner">
        <div className="info__left">
          <img src={config.hero.image} alt="" className="info__img" />
          <p className="info__caption">We provide competitive rates from Montenegro's top rental providers, making comparing rates and finding the best deals quick and easy.</p>
        </div>
        <div className="info__grid">
          {items.map((it,i)=>(
            <div key={i} className="info__card">
              <div className="info__card-icon">{it.icon}</div>
              <h3 className="info__card-title">{it.title}</h3>
              <p className="info__card-desc">{it.desc}</p>
              <a href={it.href} className="info__card-link">{it.link}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ DESTINATIONS ═══ */
function Destinations() {
  return (
    <section className="section" id="destinations">
      <div className="container">
        <p className="section__label">Popular Destinations</p>
        <h2 className="section__title">Where to next?</h2>
        <div className="dest-grid">
          {config.destinations.map((d,i)=>(
            <a key={i} href={`/${d.slug}`} className="dest-card">
              <img src={d.image} alt={d.name} className="dest-card__img" />
              <div className="dest-card__over">
                <span className="dest-card__tag">{d.tag}</span>
                <h3 className="dest-card__name">{d.name}</h3>
                <p className="dest-card__desc">{d.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ REVIEWS ═══ */
function Reviews() {
  return (
    <section className="section section--gray">
      <div className="container">
        <p className="section__label">Reviews</p>
        <h2 className="section__title">What our customers say</h2>
        <div className="reviews-grid">
          {config.testimonials.map((r,i)=>(
            <div key={i} className="rev-card">
              <div className="rev-card__stars">{[...Array(r.rating)].map((_,j)=><Star key={j} size={16} fill="#f59e0b" color="#f59e0b"/>)}</div>
              <p className="rev-card__text">"{r.text}"</p>
              <div className="rev-card__author">
                <div className="rev-card__avatar">{r.name.charAt(0)}</div>
                <div><strong className="rev-card__name">{r.name}</strong><span className="rev-card__loc">{r.location}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══ FAQ ═══ */
function FAQ() {
  const [open, setOpen] = useState(null);
  const half = Math.ceil(config.faq.length/2);
  const renderItem = (item,idx) => (
    <div key={idx} className={`faq-item${open===idx?' faq-item--open':''}`}>
      <button className="faq-item__q" onClick={()=>setOpen(open===idx?null:idx)}>
        {item.q}
        <ChevronDown size={18} className={`faq-item__chev${open===idx?' faq-item__chev--open':''}`} />
      </button>
      <div className={`faq-item__a${open===idx?' faq-item__a--open':''}`}>
        <p className="faq-item__a-text">{item.a}</p>
      </div>
    </div>
  );
  return (
    <section className="section" id="faq">
      <div className="container">
        <p className="section__label">FAQ</p>
        <h2 className="section__title">Questions we get asked</h2>
        <div className="faq-grid">
          <div className="faq-col">{config.faq.slice(0,half).map((it,i)=>renderItem(it,i))}</div>
          <div className="faq-col">{config.faq.slice(half).map((it,i)=>renderItem(it,i+half))}</div>
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
      <div className="container">
        <h2 className="cta__title">Ready to explore Montenegro?</h2>
        <p className="cta__sub">Book in minutes, collect at the airport, hit the road.</p>
        <a href={localePath('/book')} className="cta__btn">Search cars</a>
      </div>
    </section>
  );
}

/* ═══ MAIN ═══ */
export default function App() {
  return (
    <>
      <Nav />
      <BookingForm />
      <Hero />
      <Brands />
      <InfoGrid />
      <Destinations />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
