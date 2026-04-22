'use client';
import Nav from '../../Nav';
import Footer from '../../Footer';
import useTranslation from '../../i18n/useTranslation';
import { CheckCircle, DollarSign, Link2, Code, BarChart3, Mail } from 'lucide-react';
import '../../ContentPage.css';

export default function Affiliate() {
  const { t, localePath } = useTranslation();

  return (
    <div className="content-page">
      <Nav />

      {/* Hero */}
      <div className="aff-hero">
        <div className="aff-hero__inner">
          <h1 className="aff-hero__title">{t('affiliate.heroTitle')}</h1>
          <p className="aff-hero__subtitle">
            {t('affiliate.heroSubtitle')}
          </p>
          <a href="https://localrent.com/en/partners/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="aff-hero__btn">
            {t('affiliate.signUp')}
          </a>
        </div>
      </div>

      {/* How it works */}
      <div className="aff-section">
        <div className="aff-container">
          <h2 className="aff-section__title">{t('affiliate.howTitle')}</h2>
          <div className="aff-steps">
            <div className="aff-step">
              <div className="aff-step__num">1</div>
              <h3>{t('affiliate.step1Title')}</h3>
              <p>{t('affiliate.step1Text')}</p>
            </div>
            <div className="aff-step">
              <div className="aff-step__num">2</div>
              <h3>{t('affiliate.step2Title')}</h3>
              <p>{t('affiliate.step2Text')}</p>
            </div>
            <div className="aff-step">
              <div className="aff-step__num">3</div>
              <h3>{t('affiliate.step3Title')}</h3>
              <p>{t('affiliate.step3Text')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Commission details */}
      <div className="aff-section aff-section--alt">
        <div className="aff-container">
          <h2 className="aff-section__title">{t('affiliate.commissionTitle')}</h2>
          <div className="aff-grid">
            <div className="aff-card">
              <DollarSign size={24} />
              <h3>{t('affiliate.revenueShare')}</h3>
              <p>{t('affiliate.revenueShareText')}</p>
            </div>
            <div className="aff-card">
              <BarChart3 size={24} />
              <h3>{t('affiliate.avgBooking')}</h3>
              <p>{t('affiliate.avgBookingText')}</p>
            </div>
            <div className="aff-card">
              <CheckCircle size={24} />
              <h3>{t('affiliate.noCap')}</h3>
              <p>{t('affiliate.noCapText')}</p>
            </div>
            <div className="aff-card">
              <DollarSign size={24} />
              <h3>{t('affiliate.minPayout')}</h3>
              <p>{t('affiliate.minPayoutText')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Promotion tools */}
      <div className="aff-section">
        <div className="aff-container">
          <h2 className="aff-section__title">{t('affiliate.toolsTitle')}</h2>
          <div className="aff-grid">
            <div className="aff-card">
              <Link2 size={24} />
              <h3>{t('affiliate.refLinks')}</h3>
              <p>{t('affiliate.refLinksText')}</p>
            </div>
            <div className="aff-card">
              <Code size={24} />
              <h3>{t('affiliate.widget')}</h3>
              <p>{t('affiliate.widgetText')}</p>
            </div>
            <div className="aff-card">
              <BarChart3 size={24} />
              <h3>{t('affiliate.whiteLabel')}</h3>
              <p>{t('affiliate.whiteLabelText')}</p>
            </div>
            <div className="aff-card">
              <Code size={24} />
              <h3>{t('affiliate.api')}</h3>
              <p>{t('affiliate.apiText')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Who it's for */}
      <div className="aff-section aff-section--alt">
        <div className="aff-container">
          <h2 className="aff-section__title">{t('affiliate.whoTitle')}</h2>
          <div className="aff-who-grid">
            {[
              { titleKey: 'affiliate.whoBloggers', descKey: 'affiliate.whoBloggersText' },
              { titleKey: 'affiliate.whoLocal', descKey: 'affiliate.whoLocalText' },
              { titleKey: 'affiliate.whoCreators', descKey: 'affiliate.whoCreatorsText' },
              { titleKey: 'affiliate.whoDevs', descKey: 'affiliate.whoDevsText' },
            ].map(item => (
              <div key={item.titleKey} className="aff-who-card">
                <h3>{t(item.titleKey)}</h3>
                <p>{t(item.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="aff-final-cta">
        <div className="aff-container" style={{ textAlign: 'center' }}>
          <h2>{t('affiliate.ctaTitle')}</h2>
          <p>{t('affiliate.ctaSubtitle')}</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginTop: 24 }}>
            <a href="https://localrent.com/en/partners/" target="_blank" rel="noopener noreferrer nofollow sponsored" className="aff-hero__btn">
              {t('affiliate.signUp')}
            </a>
            <a href="mailto:info@kotorcarrental.com" className="aff-outline-btn">
              <Mail size={16} /> {t('affiliate.questionsEmail')}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
