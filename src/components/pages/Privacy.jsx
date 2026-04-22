'use client';
import useTranslation from '../../i18n/useTranslation';
import ContentPage from '../../ContentPage';

export default function Privacy() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t("privacy.title")}
      subtitle={t("privacy.subtitle")}
      description={t("privacy.seoDesc")}
      image="/img/hero-budva.webp"
    >
      <p><strong>{t('privacyBody.lastUpdated')}</strong> April 2026</p>

      <h2>{t('privacyBody.whoTitle')}</h2>
      <p>{t('privacyBody.whoText')}</p>

      <h2>{t('privacyBody.collectTitle')}</h2>
      <h3>{t('privacyBody.provideTitle')}</h3>
      <p>{t('privacyBody.provideText')}</p>

      <h3>{t('privacyBody.autoTitle')}</h3>
      <ul>
        <li><strong>{t('privacyBody.auto1Label')}</strong> {t('privacyBody.auto1')}</li>
        <li><strong>{t('privacyBody.auto2Label')}</strong> {t('privacyBody.auto2')}</li>
        <li><strong>{t('privacyBody.auto3Label')}</strong> {t('privacyBody.auto3')}</li>
      </ul>

      <h2>{t('privacyBody.howTitle')}</h2>
      <ul>
        <li>{t('privacyBody.how1')}</li>
        <li>{t('privacyBody.how2')}</li>
        <li>{t('privacyBody.how3')}</li>
        <li>{t('privacyBody.how4')}</li>
      </ul>

      <h2>{t('privacyBody.thirdTitle')}</h2>
      <p>{t('privacyBody.thirdText')}</p>
      <ul>
        <li><strong>{t('privacyBody.third1Label')}</strong> {t('privacyBody.third1')}</li>
        <li><strong>{t('privacyBody.third2Label')}</strong> {t('privacyBody.third2')}</li>
        <li><strong>{t('privacyBody.third3Label')}</strong> {t('privacyBody.third3')}</li>
      </ul>
      <p>{t('privacyBody.thirdNote')}</p>

      <h2>{t('privacyBody.cookiesTitle')}</h2>
      <p>{t('privacyBody.cookiesText').split('{{link}}')[0]}<a href={localePath("/cookie-policy")}>{t('privacyBody.cookiePolicyLink')}</a>{t('privacyBody.cookiesText').split('{{link}}')[1]}</p>

      <h2>{t('privacyBody.rightsTitle')}</h2>
      <p>{t('privacyBody.rightsText')}</p>
      <ul>
        <li>{t('privacyBody.right1')}</li>
        <li>{t('privacyBody.right2')}</li>
        <li>{t('privacyBody.right3')}</li>
        <li>{t('privacyBody.right4')}</li>
      </ul>

      <h2>{t('privacyBody.contactTitle')}</h2>
      <p>{t('privacyBody.contactText')}</p>
    </ContentPage>
  );
}
