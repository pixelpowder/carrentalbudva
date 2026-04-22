'use client';
import { MapPin, Mail } from 'lucide-react';
import config from './siteConfig';
import useTranslation from './i18n/useTranslation';
import './App.css';

const FOOTER_FLEET_SLUGS = ['renault-clio', 'peugeot-308', 'renault-megane', 'vw-golf', 'fiat-500'];

export default function Footer() {
  const { t, localePath } = useTranslation();
  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };

  const fleetLinks = FOOTER_FLEET_SLUGS
    .map(slug => {
      const car = config.cars.find(c => c.slug === slug);
      if (!car) return null;
      const name = tf(`cars.${slug}.name`, car.name);
      return { slug, name };
    })
    .filter(Boolean);

  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-logo">
            <span className="footer__brand-name">{config.name}</span>
          </div>
          <p className="footer__brand-desc">{t('footer.brandDesc')}</p>
          <div className="footer__contact-list">
            <a href={`mailto:${config.email}`} className="footer__contact-item">
              <Mail size={13} /> {config.email}
            </a>
            <div className="footer__contact-item">
              <MapPin size={13} /> {config.address}
            </div>
          </div>
        </div>

        <div className="footer__col--hide-mobile">
          <div className="footer__col-title">{tf('footer.quickLinks', 'Quick Links')}</div>
          <div className="footer__links">
            <a href={localePath('/book')} className="footer__link">{tf('footer.carHireBooking', 'Car Hire Booking')}</a>
            <a href={localePath('/cars')} className="footer__link">{tf('footer.ourFleet', 'Our Fleet')}</a>
            <a href={localePath('/about')} className="footer__link">{tf('footer.aboutUs', 'About Us')}</a>
            <a href={localePath('/#faq')} className="footer__link">{tf('footer.faqLink', 'FAQ')}</a>
          </div>
        </div>

        <div>
          <div className="footer__col-title">{tf('footer.ourFleet', 'Our Fleet')}</div>
          <div className="footer__links">
            {fleetLinks.map(car => (
              <a key={car.slug} href={localePath(`/cars/${car.slug}`)} className="footer__link">
                {car.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="footer__col-title">Riviera Guides</div>
          <div className="footer__links">
            <a href={localePath('/blog')} className="footer__link">Blog</a>
            <a href={localePath('/blog/sveti-stefan-photo-spots')} className="footer__link">Sveti Stefan</a>
            <a href={localePath('/blog/budva-old-town-walls')} className="footer__link">Old Town Walls</a>
            <a href={localePath('/blog/becici-rafailovici-promenade')} className="footer__link">Bečići Promenade</a>
          </div>
        </div>

        <div>
          <div className="footer__col-title">Coast &amp; Drives</div>
          <div className="footer__links">
            <a href={localePath('/blog/budva-to-sveti-stefan-drive')} className="footer__link">Budva → Sveti Stefan</a>
            <a href={localePath('/blog/tivat-airport-to-budva')} className="footer__link">Tivat Airport Route</a>
            <a href={localePath('/blog/pastrovici-highlands-drive')} className="footer__link">Paštrovići Highlands</a>
            <a href={localePath('/blog/petrovac-quiet-alternative')} className="footer__link">Petrovac</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} {config.name}. All rights reserved.
        </span>
        <div className="footer__bottom-links">
          <a href={localePath('/privacy')} className="footer__bottom-link">{t('footer.privacyPolicy')}</a>
          <a href={localePath('/terms')} className="footer__bottom-link">{t('footer.terms')}</a>
          <a href={localePath('/cookie-policy')} className="footer__bottom-link">{t('footer.cookiePolicy')}</a>
          <a href="/sitemap.xml" className="footer__bottom-link">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
