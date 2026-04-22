'use client';
import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import useTranslation from './i18n/useTranslation';
import config from './siteConfig';
import './ContentPage.css';

export default function ContentPage({ title, subtitle, image, description, children }) {
  const pathname = usePathname();
  const { t, localePath } = useTranslation();

  return (
    <div className="content-page">
      <Nav />
      <div className="content-hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="content-hero__overlay" />
        <div className="content-hero__text">
          <nav className="breadcrumbs">
            <a href={localePath('/')}>{t('common.home')}</a>
            <span className="breadcrumbs__sep">/</span>
            <span>{title}</span>
          </nav>
          <h1 className="content-hero__title">{title}</h1>
          {subtitle && <p className="content-hero__subtitle">{subtitle}</p>}
        </div>
      </div>
      <div className="content-body">
        <div className="content-body__inner">{children}</div>
        <aside className="content-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.bookTitle')}</h3>
            <p className="sidebar-card__text">{t('sidebar.bookText')}</p>
            <a href={localePath('/book')} className="sidebar-card__btn">{t('common.searchCars')}</a>
          </div>
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">{t('sidebar.helpTitle')}</h3>
            <p className="sidebar-card__text">{t('sidebar.helpText')}</p>
            <a href={`mailto:${config.email}`} className="sidebar-card__btn sidebar-card__btn--outline">{t('common.emailUs') || 'Email Us'}</a>
          </div>
          <div className="sidebar-card">
            <h3 className="sidebar-card__title">Riviera Guides</h3>
            <ul className="sidebar-links">
              <li><a href={localePath('/blog/milocer-park-villa')}>Miločer Park & Villa</a></li>
              <li><a href={localePath('/blog/drobni-pijesak-cove')}>Drobni Pijesak Cove</a></li>
              <li><a href={localePath('/blog/rezevici-monastery')}>Reževići Monastery</a></li>
              <li><a href={localePath('/blog/mogren-beach-dukley-tunnel')}>Mogren Beach & Tunnel</a></li>
              <li><a href={localePath('/blog/budva-to-lovcen-mausoleum')}>Lovćen Mausoleum Drive</a></li>
              <li><a href={localePath('/blog/kotor-day-trip-from-budva')}>Kotor Day Trip</a></li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="related-guides">
        <div className="related-guides__inner">
          <h2 className="related-guides__title">You might also like</h2>
          <div className="related-guides__cards">
            <a href={localePath('/blog/cetinje-day-trip-from-budva')} className="related-card">
              <img src="/img/blog-cetinje-day-trip-from-budva.webp" alt="Cetinje day trip from Budva" loading="lazy" />
              <span>Cetinje — Old Royal Capital</span>
            </a>
            <a href={localePath('/blog/sutomore-stari-bar-ruins')} className="related-card">
              <img src="/img/blog-sutomore-stari-bar-ruins.webp" alt="Stari Bar ruins" loading="lazy" />
              <span>Sutomore & Stari Bar</span>
            </a>
            <a href={localePath('/blog/pastrovici-olive-harvest')} className="related-card">
              <img src="/img/blog-pastrovici-olive-harvest.webp" alt="Paštrovići olive harvest" loading="lazy" />
              <span>Paštrovići Olive Harvest</span>
            </a>
          </div>
        </div>
      </div>

      <div className="content-cta">
        <div className="content-cta__inner">
          <h2>{t('contentPage.readyCta')}</h2>
          <a href={localePath('/book')} className="content-cta__btn">{t('contentPage.searchCars')} →</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
