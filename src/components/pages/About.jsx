'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function About() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('aboutPage.title')}
      subtitle={t('aboutPage.subtitle')}
      description={t('aboutPage.description')}
      image="/img/blog-mogren-beach-dukley-tunnel.webp"
    >
      <h2>{t('aboutPage.whoTitle')}</h2>
      <p>{t('aboutPage.whoP1')}</p>
      <p>{t('aboutPage.whoP2')}</p>

      <h2>{t('aboutPage.whyTitle')}</h2>
      <p>
        {t('aboutPage.whyP1Pre')}
        <a href={localePath('/blog/milocer-park-villa')}>{t('aboutPage.whyP1Link1')}</a>
        {t('aboutPage.whyP1Mid')}
      </p>
      <p>
        {t('aboutPage.whyP2Pre')}
        <a href={localePath('/blog/rezevici-monastery')}>{t('aboutPage.whyP2Link1')}</a>
        {t('aboutPage.whyP2Mid')}
        <a href={localePath('/blog/budva-to-lovcen-mausoleum')}>{t('aboutPage.whyP2Link2')}</a>
        {t('aboutPage.whyP2End')}
      </p>

      <h2>{t('aboutPage.includedTitle')}</h2>
      <p>{t('aboutPage.includedP1')}</p>

      <h2>{t('aboutPage.pickupTitle')}</h2>
      <p>{t('aboutPage.pickupP1')}</p>
      <p>{t('aboutPage.pickupP2')}</p>

      <h2>{t('aboutPage.pricingTitle')}</h2>
      <p>{t('aboutPage.pricingP1')}</p>

      <h2>{t('aboutPage.contactTitle')}</h2>
      <p>
        {t('aboutPage.contactPre')}
        <a href={localePath('/contact')}>{t('aboutPage.contactLink')}</a>
        {t('aboutPage.contactEnd')}
      </p>
    </ContentPage>
  );
}
