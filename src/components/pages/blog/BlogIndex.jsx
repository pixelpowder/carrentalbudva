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

const articleSlugs = [
  { slug: 'drobni-pijesak-cove', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776970436/budva/guides/drobni-pijesak-aerial-beach.jpg' },
  { slug: 'milocer-park-villa', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776969140/budva/guides/sveti-stefan-island.jpg' },
  { slug: 'rezevici-monastery', image: '/img/blog-rezevici-monastery.webp' },
  { slug: 'budva-to-lovcen-mausoleum', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968348/budva/guides/lovcen-mountain-footpath.jpg' },
  { slug: 'sutomore-stari-bar-ruins', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968516/budva/guides/stari-bar-ancient-tower.jpg' },
  { slug: 'mogren-beach-dukley-tunnel', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968935/budva/guides/mogren-coastal-sunset.jpg' },
  { slug: 'budva-to-bar-ferry-port', image: '/img/blog-budva-to-bar-ferry-port.webp' },
  { slug: 'cetinje-day-trip-from-budva', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968390/budva/guides/cetinje-lovcen-gloomy-sky.jpg' },
  { slug: 'pastrovici-olive-harvest', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776968617/budva/guides/pastrovici-olive-tree.jpg' },
  { slug: 'kotor-day-trip-from-budva', image: 'https://res.cloudinary.com/dz11ztynf/image/upload/v1776969307/budva/guides/kotor-lake-mountains.jpg' },
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
            <span>{t('blogIndex.crumb')}</span>
          </nav>
          <h1 className="content-hero__title">{t('blogIndex.heroTitle')}</h1>
          <p className="content-hero__subtitle">{t('blogIndex.heroSubtitle')}</p>
        </div>
      </div>
      <div style={{ maxWidth: '1220px', margin: '0 auto', padding: '48px 24px 80px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '28px' }}>
          {articleSlugs.map((articleEntry) => {
            const articleKey = articleEntry.slug;
            const articleImg = articleEntry.image;
            const title = t(`blogIndex.articles.${articleKey}.title`);
            const excerpt = t(`blogIndex.articles.${articleKey}.excerpt`);
            return (
              <a key={articleKey} href={localePath(`/blog/${articleKey}`)} style={{ ...cardStyle, textDecoration: 'none', color: 'inherit' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <img src={articleImg} alt={title} style={cardImageStyle} loading="lazy" />
                <div style={cardBodyStyle}>
                  <h2 style={cardTitleStyle}>{title}</h2>
                  <p style={cardExcerptStyle}>{excerpt}</p>
                  <span style={cardLinkStyle}>{t('blogIndex.readGuide')} &rarr;</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
