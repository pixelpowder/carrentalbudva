'use client';
import ContentPage from '../../../ContentPage';
import useTranslation from '../../../i18n/useTranslation';
import { DEFAULT_LANG } from '../../../i18n/languages';

export default function BlogRenderer({ content }) {
  const { lang } = useTranslation();
  const data = content[lang] || content.en;

  // Rewrite internal /blog/... hrefs in HTML strings to locale-prefixed URLs
  const localizeHtml = (html) => {
    if (!html) return html;
    if (lang === DEFAULT_LANG) return html;
    return html.replace(/href="(\/(?:blog|book|contact|faq|terms|privacy)[^"]*)"/g, `href="/${lang}$1"`);
  };

  return (
    <ContentPage
      title={data.title}
      subtitle={data.subtitle}
      description={data.description}
      image={data.image}
    >
      {data.sections.map((section, idx) => {
        switch (section.type) {
          case 'h2':
            return <h2 key={idx}>{section.text}</h2>;
          case 'h3':
            return <h3 key={idx}>{section.text}</h3>;
          case 'p':
            return <p key={idx} dangerouslySetInnerHTML={{ __html: localizeHtml(section.text) }} />;
          case 'img':
            return <img key={idx} src={section.src} alt={section.alt} loading="lazy" />;
          case 'ul':
            return (
              <ul key={idx}>
                {section.items.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: localizeHtml(item) }} />
                ))}
              </ul>
            );
          case 'route-info':
            return (
              <div key={idx} className="route-info">
                <h3>{section.title}</h3>
                <div className="route-info__grid">
                  {section.items.map((item, i) => (
                    <div key={i} className="route-info__item">
                      <strong>{item.label}</strong>
                      {item.value}
                    </div>
                  ))}
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </ContentPage>
  );
}
