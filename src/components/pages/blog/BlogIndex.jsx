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
  { title: "Drobni Pijesak — The Tiny Sand Cove Where the Paštrovići Clan Held Court", excerpt: "A 250-metre crescent of fine sand halfway between Sveti Stefan and Petrovac — and the open-air parliament that once met on it.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776970436/budva/guides/drobni-pijesak-aerial-beach.jpg', href: '/blog/drobni-pijesak-cove' },
  { title: "Miločer Park and Villa Miločer — The Royal Summer Retreat Next to Sveti Stefan", excerpt: "Eighteen hectares of Mediterranean park, a 1930s villa built for Queen Marija, and the beach the Yugoslav royals kept for themselves.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776969140/budva/guides/sveti-stefan-island.jpg', href: '/blog/milocer-park-villa' },
  { title: "Reževići Monastery — An 800-Year-Old Nemanjić Foundation Above the Budva Riviera", excerpt: "Founded in 1226 by Stefan the First-Crowned, rebuilt repeatedly, still a working Orthodox community above the sea.", image: '/img/blog-rezevici-monastery.webp', href: '/blog/rezevici-monastery' },
  { title: "Budva to Lovćen Mausoleum — The Serpentine Drive to Njegoš's Tomb at 1,657 m", excerpt: "Out of Budva, up the old Austrian road, through Njeguši, onto the summit of the mountain that gives Montenegro its name.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968348/budva/guides/lovcen-mountain-footpath.jpg', href: '/blog/budva-to-lovcen-mausoleum' },
  { title: "Sutomore and Stari Bar — A Day Trip South Through the Sozina Tunnel", excerpt: "Forty minutes from Budva: a long family beach town and a medieval ruined city on a hillside.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968516/budva/guides/stari-bar-ancient-tower.jpg', href: '/blog/sutomore-stari-bar-ruins' },
  { title: "Mogren Beach and the Cliff Tunnel — Two Hidden Coves North of Budva Old Town", excerpt: "Five minutes on foot from the Old Town gate: two small beaches joined by a stone tunnel cut through the headland.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968935/budva/guides/mogren-coastal-sunset.jpg', href: '/blog/mogren-beach-dukley-tunnel' },
  { title: "Budva to Bar Ferry Port — Driving Down to the Bari Ferry for the Italy Leg", excerpt: "An hour south to the Port of Bar, Montenegro's main sea gateway, and the overnight crossing to southern Italy.", image: '/img/blog-budva-to-bar-ferry-port.webp', href: '/blog/budva-to-bar-ferry-port' },
  { title: "Cetinje Day Trip From Budva — The Old Royal Capital Over Lovćen", excerpt: "An hour inland from the coast: palaces, an active monastery, and the museum cluster that anchors Montenegrin national history.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968390/budva/guides/cetinje-lovcen-gloomy-sky.jpg', href: '/blog/cetinje-day-trip-from-budva' },
  { title: "The Paštrovići Olive Harvest — Autumn in the Hills Behind the Budva Riviera", excerpt: "October into November, family-run mills still pressing the groves that have fed the coast for centuries.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968617/budva/guides/pastrovici-olive-tree.jpg', href: '/blog/pastrovici-olive-harvest' },
  { title: "Kotor Day Trip From Budva — What to See in Four Hours", excerpt: "A thirty-minute coast drive: walled old town, the climb to San Giovanni fortress, and back to a Budva beach by sunset.", image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776969307/budva/guides/kotor-lake-mountains.jpg', href: '/blog/kotor-day-trip-from-budva' },
];

export default function BlogIndex() {
  const { t, localePath } = useTranslation();
  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: 'url(https://res.cloudinary.com/dz11ztynf/image/upload/v1776968348/budva/guides/lovcen-mountain-footpath.jpg)' }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>Blog</span>
          </nav>
          <h1 className="content-hero__title">Driving the Budva Riviera</h1>
          <p className="content-hero__subtitle">Researched guides to the lesser-covered corners of the Budva region — royal parks, mountain drives, old monasteries, ferry routes and the cliffside coves behind the Old Town.</p>
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
