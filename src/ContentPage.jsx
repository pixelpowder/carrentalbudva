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
              <li><a href={localePath('/blog/sveti-stefan-photo-spots')}>Sveti Stefan Photo Spots</a></li>
              <li><a href={localePath('/blog/budva-old-town-walls')}>Budva Old Town Walls</a></li>
              <li><a href={localePath('/blog/becici-rafailovici-promenade')}>Bečići & Rafailovići Promenade</a></li>
              <li><a href={localePath('/blog/sveti-nikola-hawaii')}>Sveti Nikola (Hawaii)</a></li>
              <li><a href={localePath('/blog/jaz-beach-festivals')}>Jaz Beach Festivals</a></li>
              <li><a href={localePath('/blog/petrovac-quiet-alternative')}>Petrovac Alternative</a></li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="related-guides">
        <div className="related-guides__inner">
          <h2 className="related-guides__title">You might also like</h2>
          <div className="related-guides__cards">
            <a href={localePath('/blog/pastrovici-highlands-drive')} className="related-card">
              <img src="/img/blog-pastrovici.webp" alt="Paštrovići highlands drive" loading="lazy" />
              <span>Paštrovići Highlands Drive</span>
            </a>
            <a href={localePath('/blog/budva-to-sveti-stefan-drive')} className="related-card">
              <img src="/img/blog-budva-svetistefan.webp" alt="Budva to Sveti Stefan coast drive" loading="lazy" />
              <span>Budva to Sveti Stefan Drive</span>
            </a>
            <a href={localePath('/blog/tivat-airport-to-budva')} className="related-card">
              <img src="/img/blog-tivat-arrival.webp" alt="Tivat Airport to Budva" loading="lazy" />
              <span>Tivat Airport to Budva</span>
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
