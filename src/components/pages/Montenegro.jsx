'use client';
import ContentPage from '../../ContentPage';
import useTranslation from '../../i18n/useTranslation';

export default function Montenegro() {
  const { t, localePath } = useTranslation();
  return (
    <ContentPage
      title={t('montenegroPage.title')}
      subtitle={t('montenegroPage.subtitle')}
      description={t('montenegroPage.description')}
      image="/img/blog-budva-to-lovcen-mausoleum.webp"
    >
      <h2>{t('montenegroPage.numbersTitle')}</h2>
      <p>{t('montenegroPage.numbersP1')}</p>
      <p>{t('montenegroPage.numbersP2')}</p>

      <h2>{t('montenegroPage.rivieraTitle')}</h2>
      <p>
        {t('montenegroPage.rivieraP1Pre')}
        <a href={localePath('/blog/milocer-park-villa')}>{t('montenegroPage.rivieraP1Link1')}</a>
        {t('montenegroPage.rivieraP1Mid')}
        <a href={localePath('/blog/drobni-pijesak-cove')}>{t('montenegroPage.rivieraP1Link2')}</a>
        {t('montenegroPage.rivieraP1End')}
      </p>

      <h2>{t('montenegroPage.within60Title')}</h2>
      <ul>
        <li>{t('montenegroPage.within60Item1')}</li>
        <li>
          <a href={localePath('/blog/kotor-day-trip-from-budva')}>{t('montenegroPage.within60Item2Link')}</a>
          {t('montenegroPage.within60Item2End')}
        </li>
        <li>
          <a href={localePath('/blog/rezevici-monastery')}>{t('montenegroPage.within60Item3Link')}</a>
          {t('montenegroPage.within60Item3End')}
        </li>
        <li>
          <a href={localePath('/blog/cetinje-day-trip-from-budva')}>{t('montenegroPage.within60Item4Link')}</a>
          {t('montenegroPage.within60Item4End')}
        </li>
        <li>{t('montenegroPage.within60Item5')}</li>
        <li>
          <a href={localePath('/blog/budva-to-bar-ferry-port')}>{t('montenegroPage.within60Item6Link')}</a>
          {t('montenegroPage.within60Item6End')}
        </li>
      </ul>

      <h2>{t('montenegroPage.longerTitle')}</h2>
      <ul>
        <li>{t('montenegroPage.longerItem1')}</li>
        <li>{t('montenegroPage.longerItem2')}</li>
        <li>{t('montenegroPage.longerItem3')}</li>
        <li>{t('montenegroPage.longerItem4')}</li>
        <li>{t('montenegroPage.longerItem5')}</li>
        <li>{t('montenegroPage.longerItem6')}</li>
        <li>{t('montenegroPage.longerItem7')}</li>
      </ul>

      <h2>{t('montenegroPage.bordersTitle')}</h2>
      <p>{t('montenegroPage.bordersP1')}</p>
      <p>{t('montenegroPage.bordersP2')}</p>

      <h2>{t('montenegroPage.whenTitle')}</h2>
      <p><strong>{t('montenegroPage.whenSpringLabel')}</strong>{t('montenegroPage.whenSpringText')}</p>
      <p><strong>{t('montenegroPage.whenSummerLabel')}</strong>{t('montenegroPage.whenSummerText')}</p>
      <p><strong>{t('montenegroPage.whenSeptemberLabel')}</strong>{t('montenegroPage.whenSeptemberText')}</p>
      <p><strong>{t('montenegroPage.whenWinterLabel')}</strong>{t('montenegroPage.whenWinterText')}</p>
    </ContentPage>
  );
}
