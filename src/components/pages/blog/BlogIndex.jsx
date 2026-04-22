'use client';
import Nav from '../../../Nav';
import Footer from '../../../Footer';
import useTranslation from '../../../i18n/useTranslation';
import '../../../ContentPage.css';

const cardStyle = { background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--gray-200, #e9ecef)', boxShadow: 'var(--shadow-sm)', transition: 'box-shadow 0.2s, transform 0.2s', display: 'flex', flexDirection: 'column' };
const cardImageStyle = { width: '100%', height: '220px', objectFit: 'cover', display: 'block' };
const cardBodyStyle = { padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 };
const cardTitleStyle = { fontSize: '18px', fontWeight: 800, color: 'var(--navy, #05203c)', lineHeight: 1.3, marginBottom: '10px' };
const cardExcerptStyle = { fontSize: '15px', color: 'var(--gray-600, #6c757d)', lineHeight: 1.65, marginBottom: '20px', flex: 1 };
const cardLinkStyle = { fontSize: '14px', fontWeight: 700, color: '#E31937', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' };

const articles = [
  { title: 'Sveti Stefan — The Best Photo Spots (And How to Reach Them)', excerpt: "Every angle on Montenegro's most-photographed island: the St Sava lookout, the coastal pull-offs, kayak hire, and the aerial shot from Đenaši village.", image: '/img/blog-sveti-stefan.webp', href: '/blog/sveti-stefan-photo-spots' },
  { title: 'Budva Old Town Walls — A 2,500-Year Fortress on the Adriatic', excerpt: "Venetian walls, the Citadel, the Illyrian helmets in the town museum, and the Roman villa the 1979 earthquake uncovered.", image: '/img/blog-budva-oldtown.webp', href: '/blog/budva-old-town-walls' },
  { title: 'Bečići & Rafailovići — The Seafront Promenade Walk from Budva', excerpt: "Two kilometres of sand, a cliffside promenade with two tunnels, and the seafood restaurants at the far end (Tri Ribara, Porat).", image: '/img/blog-becici.webp', href: '/blog/becici-rafailovici-promenade' },
  { title: 'Sveti Nikola (Hawaii) — The Island Off Budva Old Town', excerpt: "Montenegro's largest island, 15 minutes by boat from Slovenska Plaza. Three beaches, deer in pine forest, water so clear they call it Hawaii.", image: '/img/blog-sveti-nikola.webp', href: '/blog/sveti-nikola-hawaii' },
  { title: 'Jaz Beach — The Rolling Stones Beach and Festival Logistics', excerpt: "The beach that hosted the Stones in 2007, Madonna in 2008, and Sea Dance 2014-2017. Swimming the other 11 months of the year.", image: '/img/blog-jaz.webp', href: '/blog/jaz-beach-festivals' },
  { title: 'The Paštrovići Highlands Drive — Inland from Budva', excerpt: "Praskvica Monastery (founded c.1050), Kosmač Fortress at 800m, and the empty hill villages of the old Paštrovići clan.", image: '/img/blog-pastrovici.webp', href: '/blog/pastrovici-highlands-drive' },
  { title: 'Petrovac — The Quiet Alternative to Budva', excerpt: "Twenty minutes south: a 600m beach, a 16th-century Venetian fortress, and no coach-tour crowds.", image: '/img/blog-petrovac.webp', href: '/blog/petrovac-quiet-alternative' },
  { title: 'Tivat Airport to Budva — The 25-Minute Drive and Route Options', excerpt: "20 km direct, 25-30 minutes. Plus the Kotor detour and the Lovćen serpentine scenic route.", image: '/img/blog-tivat-arrival.webp', href: '/blog/tivat-airport-to-budva' },
  { title: 'Budva to Sveti Stefan — The Short Coastal Drive with All the Stops', excerpt: "Ten minutes on paper, half a day in practice. Stop-by-stop guide to Bečići, Kamenovo, Pržno and Miločer.", image: '/img/blog-budva-svetistefan.webp', href: '/blog/budva-to-sveti-stefan-drive' },
  { title: "Budva Nightlife — The Riviera's Club Strip and Where to Park", excerpt: "Top Hill club, the Slovenska Plaza strip, Old Town lounges, drink-drive law and overnight parking strategy.", image: '/img/blog-budva-nightlife.webp', href: '/blog/budva-nightlife' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(/img/blog-budva-oldtown.webp)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="content-hero__title">Driving the Budva Riviera</h1>
          <p className="content-hero__subtitle">Researched guides to the beaches, old towns, coastal drives and hidden inland corners of the Budva Riviera.</p>
        </div>
      </div>
      <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '48px 24px 80px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {articles.map((article) => (
            <a key={article.href} href={localePath(article.href)} style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <img src={article.image} alt={article.title} style={cardImageStyle} loading="lazy" />
              <div style={cardBodyStyle}>
                <h2 style={cardTitleStyle}>{article.title}</h2>
                <p style={cardExcerptStyle}>{article.excerpt}</p>
                <span style={cardLinkStyle}>Read guide &rarr;</span>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
