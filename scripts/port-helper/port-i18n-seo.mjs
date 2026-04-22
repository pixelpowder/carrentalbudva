// Port i18n + SEO template fixes from kotorcarrental to sister sites.
// Usage: node port-i18n-seo.mjs <site-name>

import fs from 'node:fs';
import path from 'node:path';

const SITE_FACTS = {
  budvacarhire: {
    name: 'Budva Car Hire', url: 'https://www.budvacarhire.com', email: 'info@budvacarhire.com',
    locality: 'Budva', postcode: '85310', streetAddress: 'Tabacina BB',
    areaServed: ['Budva','Tivat','Kotor','Sveti Stefan','Petrovac'],
    priceRange: '€25–€120', currency: 'EUR', country: 'ME',
    description: 'Rent a car in Budva from trusted local providers with free cancellation, full insurance, and Tivat Airport pickup included with every booking.',
    navSub: 'Budva Riviera',
    hasMe: true,
  },
  hercegnovicarhire: {
    name: 'Herceg Novi Car Hire', url: 'https://www.hercegnovicarhire.com', email: 'info@hercegnovicarhire.com',
    locality: 'Herceg Novi', postcode: '85340', streetAddress: 'Tabacina BB',
    areaServed: ['Herceg Novi','Igalo','Tivat','Kotor','Dubrovnik'],
    priceRange: '€25–€120', currency: 'EUR', country: 'ME',
    description: 'Rent a car in Herceg Novi from trusted local providers with free cancellation, full insurance, and delivery to your hotel or Tivat Airport pickup.',
    navSub: 'Bay Entrance',
    hasMe: true,
  },
  kotorcarhire: {
    name: 'Kotor Car Hire', url: 'https://www.kotorcarhire.com', email: 'info@kotorcarhire.com',
    locality: 'Kotor', postcode: '85330', streetAddress: 'Tabacina BB',
    areaServed: ['Kotor','Tivat','Budva','Perast','Herceg Novi','Podgorica'],
    priceRange: '€25–€120', currency: 'EUR', country: 'ME',
    description: 'Rent a car in Kotor from trusted local providers with free cancellation, full insurance, and airport pickup included with every booking.',
    navSub: 'Boka Bay Rentals',
    hasMe: true,
  },
  tivatcarhire: {
    name: 'Tivat Car Hire', url: 'https://www.tivatcarhire.com', email: 'info@tivatcarhire.com',
    locality: 'Tivat', postcode: '85320', streetAddress: 'Tabacina BB',
    areaServed: ['Tivat','Kotor','Budva','Herceg Novi','Podgorica'],
    priceRange: '€25–€120', currency: 'EUR', country: 'ME',
    description: 'Rent a car at Tivat Airport from trusted local providers with free cancellation, full insurance, and meet-and-greet pickup at TIV arrivals.',
    navSub: 'Airport Gateway',
    hasMe: true,
  },
  podgoricacarhire: {
    name: 'Podgorica Car Hire', url: 'https://www.podgoricacarhire.com', email: 'info@podgoricacarhire.com',
    locality: 'Podgorica', postcode: '81000', streetAddress: '',
    areaServed: ['Podgorica','Nikšić','Kotor','Budva','Žabljak'],
    priceRange: '€25–€120', currency: 'EUR', country: 'ME',
    description: 'Rent a car at Podgorica Airport from trusted local providers with free cancellation, full insurance, and meet-and-greet pickup at TGD arrivals.',
    navSub: 'Capital & TGD',
    hasMe: true,
  },
  ulcinjcarhire: {
    name: 'Ulcinj Car Hire', url: 'https://www.ulcinjcarhire.com', email: 'info@ulcinjcarhire.com',
    locality: 'Ulcinj', postcode: '85360', streetAddress: '',
    areaServed: ['Ulcinj','Bar','Podgorica','Shkodra','Tivat'],
    priceRange: '€25–€120', currency: 'EUR', country: 'ME',
    description: 'Rent a car in Ulcinj from trusted local providers with free cancellation, full insurance, and airport pickup from Podgorica or Tivat.',
    navSub: 'Southern Coast',
    hasMe: true,
  },
  tivatairportcarhire: {
    name: 'Tivat Airport Car Hire', url: 'https://www.tivatairportcarhire.com', email: 'info@tivatairportcarhire.com',
    locality: 'Tivat', postcode: '85320', streetAddress: 'Tivat Airport (TIV)',
    areaServed: ['Tivat','Kotor','Budva','Herceg Novi','Podgorica'],
    priceRange: '€20–€120', currency: 'EUR', country: 'ME',
    description: 'Hire a car at Tivat Airport from trusted local providers with free cancellation, full insurance, and meet-and-greet pickup at TIV arrivals.',
    navSub: 'TIV Pickup',
    hasMe: true,
  },
  northernirelandcarhire: {
    name: 'Northern Ireland Car Hire', url: 'https://www.northernirelandcarhire.com', email: 'info@northernirelandcarhire.com',
    locality: 'Belfast', postcode: '', streetAddress: '', addressRegion: 'Northern Ireland',
    areaServed: ['Belfast','Derry','Dublin','Newry','Lisburn'],
    priceRange: '£15–£85', currency: 'GBP', country: 'GB',
    description: 'Rent a car in Northern Ireland from trusted providers with free cancellation, full insurance, and airport pickup at Belfast International and Belfast City.',
    navSub: 'Causeway Coast',
    hasMe: false,
    hasRu: false,
  },
  'montenegro-car-hire-nextjs': {
    name: 'Montenegro Car Hire', url: 'https://www.montenegrocarhire.com', email: 'info@montenegrocarhire.com',
    locality: 'Kotor', postcode: '85330', streetAddress: 'Tabacina BB',
    areaServed: ['Kotor','Tivat','Budva','Herceg Novi','Podgorica','Ulcinj'],
    priceRange: '€25–€120', currency: 'EUR', country: 'ME',
    description: 'Rent a car in Montenegro from trusted local providers with free cancellation, full insurance, and airport pickup included with every booking.',
    navSub: 'All Montenegro',
    hasMe: true,
  },
};

const MIDDLEWARE_SRC = `// Expose the request pathname via a custom header so the root layout
// (which has no access to route params) can derive the active locale for
// <html lang="..."> and JSON-LD schema markup.

import { NextResponse } from 'next/server';

export function middleware(request) {
  const res = NextResponse.next();
  res.headers.set('x-pathname', request.nextUrl.pathname);
  return res;
}

export const config = {
  matcher: [
    // Skip static assets, API routes, and internal Next paths
    '/((?!api|_next|favicon|robots.txt|sitemap.xml|.*\\\\..*).*)',
  ],
};
`;

const DYN_PROVIDER_SRC = `'use client';

// Client-side LanguageContext provider that re-derives the current locale from
// the URL pathname on every navigation. Wraps the root layout so client-side
// nav (router.push) from /de/book back to /book correctly updates the locale
// context — the server-rendered root layout alone can't do this because it
// doesn't re-run on client-side transitions.

import { usePathname } from 'next/navigation';
import { LanguageContext } from './LanguageContext';
import { SUPPORTED_LANGS, DEFAULT_LANG } from './languages';

export default function DynamicLanguageProvider({ children, initialLang }) {
  const pathname = usePathname() || '/';
  const first = pathname.replace(/^\\//, '').split('/')[0];
  const lang = SUPPORTED_LANGS.includes(first) && first !== DEFAULT_LANG
    ? first
    : DEFAULT_LANG;
  const active = lang || initialLang || DEFAULT_LANG;
  return <LanguageContext value={active}>{children}</LanguageContext>;
}
`;

function buildLocaleAwareSchema(facts, hasMe, hasRu) {
  const langs = ['en','de'];
  if (hasRu) langs.push('ru');
  langs.push('it','fr');
  if (hasMe) langs.push('me');
  const imports = langs.map(l => `import ${l} from '@/src/i18n/locales/${l}.json';`).join('\n');
  const transMap = `{ ${langs.join(', ')} }`;

  const address = {
    "@type": "PostalAddress",
    ...(facts.streetAddress ? { streetAddress: facts.streetAddress } : {}),
    addressLocality: facts.locality,
    ...(facts.postcode ? { postalCode: facts.postcode } : {}),
    ...(facts.addressRegion ? { addressRegion: facts.addressRegion } : {}),
    addressCountry: facts.country,
  };

  const baseAutoRental = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    name: facts.name,
    url: facts.url,
    email: facts.email,
    image: `${facts.url}/img/schema-car.jpg`,
    address,
    areaServed: facts.areaServed.map(n => ({ "@type": "City", name: n })),
    priceRange: facts.priceRange,
    currenciesAccepted: facts.currency,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "17:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: "00:00", closes: "23:59" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "3", bestRating: "5" },
  };

  const baseJson = JSON.stringify(baseAutoRental, null, 2);

  return `// Locale-aware JSON-LD schema: AutoRental + FAQPage with translated strings.
// Replaces the previously hardcoded English schema blocks in src/app/layout.jsx.

${imports}

const translations = ${transMap};

const BASE_AUTO_RENTAL = ${baseJson};

function pick(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj);
}

export default function LocaleAwareSchema({ lang = 'en' }) {
  const locale = translations[lang] ? lang : 'en';
  const t = translations[locale];

  const description = pick(t, 'home.seoDesc')
    || pick(t, 'meta.homeDescription')
    || pick(t, 'hero.subtitle')
    || ${JSON.stringify(facts.description)};

  const autoRental = { ...BASE_AUTO_RENTAL, description };

  const faqItems = [];
  const faqFallback = translations.en.faqItems || {};
  const faqSource = t.faqItems || {};
  const indices = Object.keys({ ...faqFallback, ...faqSource }).filter(k => /^\\d+$/.test(k));
  for (const i of indices) {
    const q = (faqSource[i] && faqSource[i].q) || (faqFallback[i] && faqFallback[i].q);
    const a = (faqSource[i] && faqSource[i].a) || (faqFallback[i] && faqFallback[i].a);
    if (q && a) {
      faqItems.push({
        "@type": "Question",
        "name": q,
        "acceptedAnswer": { "@type": "Answer", "text": a },
      });
    }
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(autoRental) }}
      />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
        />
      )}
    </>
  );
}
`;
}

function buildRootLayout(existingSrc, facts) {
  const metaMatch = existingSrc.match(/export const metadata = \{[\s\S]*?\};/);
  const metadataBlock = metaMatch ? metaMatch[0] : `export const metadata = { metadataBase: new URL('${facts.url}') };`;

  const preloads = [];
  const preloadRegex = /<link\s+rel="preload"[^>]*\/>/g;
  let pm;
  while ((pm = preloadRegex.exec(existingSrc)) !== null) preloads.push(pm[0]);
  const gtagMatch = existingSrc.match(/<script\s+async\s+src="https:\/\/www\.googletagmanager\.com[\s\S]*?dataLayer[\s\S]*?\}\}\s*\/>/);
  const gtag = gtagMatch ? gtagMatch[0] : '';

  const extraHead = [gtag, ...preloads].filter(Boolean).join('\n        ');

  return `import '@/src/index.css';
import '@/src/App.css';
import '@/src/ContentPage.css';
import '@/src/BookPage.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { headers } from 'next/headers';
import CookieBanner from '@/src/CookieBanner';
import DynamicLanguageProvider from '@/src/i18n/DynamicLanguageProvider';
import { SUPPORTED_LANGS, DEFAULT_LANG, LANG_HREFLANG } from '@/src/i18n/languages';
import LocaleAwareSchema from '@/src/components/LocaleAwareSchema';

${metadataBlock}

async function activeLocale() {
  const h = await headers();
  const pathname = h.get('x-pathname') || h.get('x-invoke-path') || '';
  const first = pathname.replace(/^\\//, '').split('/')[0];
  if (SUPPORTED_LANGS.includes(first) && first !== DEFAULT_LANG) return first;
  return DEFAULT_LANG;
}

export default async function RootLayout({ children }) {
  const lang = await activeLocale();
  const htmlLang = LANG_HREFLANG[lang] || lang;

  return (
    <html lang={htmlLang}>
      <head>
        ${extraHead}
        <LocaleAwareSchema lang={lang} />
      </head>
      <body>
        <DynamicLanguageProvider initialLang={lang}>
          {children}
          <CookieBanner />
          <Analytics />
          <SpeedInsights />
        </DynamicLanguageProvider>
      </body>
    </html>
  );
}
`;
}

function buildMetadataJs(existingSrc, facts) {
  const siteNameMatch = existingSrc.match(/const SITE_NAME = '([^']+)';/);
  const baseUrlMatch = existingSrc.match(/const BASE_URL = '([^']+)';/);
  const siteName = siteNameMatch ? siteNameMatch[1] : facts.name;
  const baseUrl = baseUrlMatch ? baseUrlMatch[1] : facts.url;

  const importMatch = existingSrc.match(/^[\s\S]*?const translations = \{[^}]*\};/m);
  const importsBlock = importMatch ? importMatch[0] : '';

  const hasMe = /import me from/.test(existingSrc);
  const hasRu = /import ru from/.test(existingSrc);

  const langEntries = [];
  langEntries.push(`      'en': path || '/',`);
  langEntries.push(`      'de': \`/de\${path || '/'}\`,`);
  if (hasRu) langEntries.push(`      'ru': \`/ru\${path || '/'}\`,`);
  langEntries.push(`      'it': \`/it\${path || '/'}\`,`);
  langEntries.push(`      'fr': \`/fr\${path || '/'}\`,`);
  if (hasMe) langEntries.push(`      'cnr': \`/me\${path || '/'}\`,`);
  langEntries.push(`      'x-default': path || '/',`);

  return `${importsBlock}

export function t(lang, key) {
  const parts = key.split('.');
  let val = translations[lang || 'en'];
  for (const p of parts) val = val?.[p];
  if (val !== undefined) return val;
  let fallback = translations.en;
  for (const p of parts) fallback = fallback?.[p];
  return fallback || key;
}

const SITE_NAME = '${siteName}';
const BASE_URL = '${baseUrl}';

export function buildAlternates(slug, lang = 'en') {
  const path = slug ? \`/\${slug}\` : '';
  const canonicalPath = !lang || lang === 'en' ? path : \`/\${lang}\${path}\`;
  return {
    canonical: \`\${BASE_URL}\${canonicalPath || '/'}\`,
    languages: {
${langEntries.join('\n')}
    },
  };
}

export function buildMetadata(lang, titleKey, descKey, slug) {
  const resolvedLang = lang || 'en';
  const title = t(resolvedLang, titleKey);
  const desc = t(resolvedLang, descKey);
  const displayTitle = title !== titleKey ? \`\${title} | \${SITE_NAME}\` : SITE_NAME;

  return {
    title: displayTitle,
    description: desc !== descKey ? desc : undefined,
    alternates: buildAlternates(slug),
  };
}
`;
}

function patchNav(src) {
  let out = src;
  out = out.replace(/label:\s*['"]Contact['"]/g, `label: t('nav.contact')`);
  return out;
}

function patchFooter(src) {
  let out = src;
  out = out.replace(/>\s*Testimonials\s*</g, '>{t(\'footer.testimonials\')}<');
  out = out.replace(/>\s*Sitemap\s*</g, '>{t(\'footer.sitemap\')}<');
  return out;
}

function patchCookieBanner(src) {
  let out = src;
  // Replace text block with t() calls
  out = out.replace(
    /<p className="cookie-banner__text">[\s\S]*?<\/p>/,
    `<p className="cookie-banner__text">
        {t('cookieBanner.text')}{' '}
        <a href={localePath('/cookie-policy')}>{t('cookieBanner.title')}</a>.
      </p>`
  );
  out = out.replace(/onClick=\{accept\}>Accept<\/button>/, `onClick={accept}>{t('cookieBanner.accept')}</button>`);
  out = out.replace(/onClick=\{decline\}>Decline<\/button>/, `onClick={decline}>{t('cookieBanner.decline')}</button>`);
  // Ensure `t` is imported from useTranslation
  out = out.replace(/const \{ localePath \} = useTranslation\(\);/, `const { t, localePath } = useTranslation();`);
  return out;
}

function patchContentPage(src) {
  let out = src;
  out = out.replace(
    /<li><a href=\{localePath\('\/tivat-airport'\)\}>Tivat Airport<\/a><\/li>/,
    `<li><a href={localePath('/tivat-airport')}>{t('sidebar.tivatAirport')}</a></li>`
  );
  out = out.replace(
    /<li><a href=\{localePath\('\/dubrovnik-airport'\)\}>Dubrovnik Airport<\/a><\/li>/,
    `<li><a href={localePath('/dubrovnik-airport')}>{t('sidebar.dubrovnikAirport')}</a></li>`
  );
  return out;
}

function patchLangPage(src) {
  if (!/const \{ lang \} = await params/.test(src)) return src;
  return src.replace(
    /buildAlternates\(([^)]+?)\)/g,
    (match, arg) => {
      if (/,\s*lang\s*$/.test(arg.trim())) return match;
      // Only patch single-string-arg forms
      const trimmed = arg.trim();
      if (trimmed.includes(',')) return match;
      return `buildAlternates(${trimmed}, lang)`;
    }
  );
}

function patchEnJson(jsonStr, facts) {
  const j = JSON.parse(jsonStr);

  j.contentPage = j.contentPage || {};
  if (!j.contentPage.youMightAlsoLike) j.contentPage.youMightAlsoLike = 'You might also like';
  if (!j.contentPage.readyCta) j.contentPage.readyCta = `Ready to drive ${facts.locality}?`;
  if (!j.contentPage.searchCars) j.contentPage.searchCars = 'Search Cars';

  j.relatedGuides = j.relatedGuides || {};
  if (!j.relatedGuides.secretChurches) j.relatedGuides.secretChurches = 'Hidden Corners';
  if (!j.relatedGuides.vrmacRidge) j.relatedGuides.vrmacRidge = 'Scenic Drives';
  if (!j.relatedGuides.swimmingSpots) j.relatedGuides.swimmingSpots = 'Best Swimming Spots';

  j.sidebar = j.sidebar || {};
  if (!j.sidebar.tivatAirport) j.sidebar.tivatAirport = 'Tivat Airport';
  if (!j.sidebar.dubrovnikAirport) j.sidebar.dubrovnikAirport = 'Dubrovnik Airport';

  j.footer = j.footer || {};
  if (!j.footer.testimonials) j.footer.testimonials = 'Testimonials';
  if (!j.footer.sitemap) j.footer.sitemap = 'Sitemap';
  if (!j.footer.tivatAirport) j.footer.tivatAirport = 'Tivat Airport';

  j.navTop = j.navTop || {};
  if (!j.navTop.carRental) j.navTop.carRental = 'Car Rental';
  if (!j.navTop.destinations) j.navTop.destinations = 'Destinations';
  if (!j.navTop.travelGuides) j.navTop.travelGuides = 'Travel Guides';
  if (!j.navTop.bokaBayRentals) j.navTop.bokaBayRentals = facts.navSub;

  j.cookieBanner = j.cookieBanner || {};
  if (!j.cookieBanner.title) j.cookieBanner.title = 'Cookie Policy';
  if (!j.cookieBanner.text) j.cookieBanner.text = 'We use cookies to improve your experience. By continuing to use this site you agree to our';
  if (!j.cookieBanner.accept) j.cookieBanner.accept = 'Accept';
  if (!j.cookieBanner.decline) j.cookieBanner.decline = 'Decline';

  j.nav = j.nav || {};
  if (!j.nav.contact) j.nav.contact = 'Contact';

  j.contact = j.contact || {};
  if (!j.contact.title) j.contact.title = 'Contact Us';
  if (!j.contact.seoDesc) j.contact.seoDesc = `Get in touch with ${facts.name}. Email, WhatsApp, and contact form.`;

  return JSON.stringify(j, null, 2) + '\n';
}

function walkPages(dir, cb) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) walkPages(p, cb);
    else if (e.name === 'page.jsx' || e.name === 'page.js') cb(p);
  }
}

function regenerateSitemap(siteRoot, facts) {
  const sitemapPath = `${siteRoot}/public/sitemap.xml`;
  if (!fs.existsSync(sitemapPath)) return false;
  const cur = fs.readFileSync(sitemapPath, 'utf8');
  const baseUrl = facts.url;
  const locMatches = [...cur.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  const slugSet = new Set();
  for (const loc of locMatches) {
    const rel = loc.replace(baseUrl, '');
    const first = rel.replace(/^\//, '').split('/')[0];
    if (['de','ru','it','fr','me'].includes(first)) continue;
    const slug = rel === '/' || rel === '' ? '' : rel;
    slugSet.add(slug);
  }
  const pages = [...slugSet].map(slug => {
    let priority = '0.6', changefreq = 'monthly';
    if (slug === '') { priority = '1.0'; changefreq = 'weekly'; }
    else if (slug === '/book') { priority = '0.9'; changefreq = 'weekly'; }
    else if (slug === '/blog') { priority = '0.7'; changefreq = 'weekly'; }
    else if (slug.startsWith('/blog/')) { priority = '0.6'; changefreq = 'monthly'; }
    else if (['/privacy','/terms','/cookie-policy'].includes(slug)) { priority = '0.3'; changefreq = 'yearly'; }
    else if (['/about','/contact','/affiliate'].includes(slug)) { priority = '0.5'; changefreq = 'yearly'; }
    else { priority = '0.7'; changefreq = 'monthly'; }
    return { slug, priority, changefreq };
  });

  const locales = [{ code: 'en', prefix: '', hreflang: 'en' }, { code: 'de', prefix: '/de', hreflang: 'de' }];
  if (facts.hasRu !== false) locales.push({ code: 'ru', prefix: '/ru', hreflang: 'ru' });
  locales.push({ code: 'it', prefix: '/it', hreflang: 'it' });
  locales.push({ code: 'fr', prefix: '/fr', hreflang: 'fr' });
  if (facts.hasMe !== false) locales.push({ code: 'me', prefix: '/me', hreflang: 'cnr' });

  function urlFor(loc, slug) { return slug ? `${baseUrl}${loc.prefix}${slug}` : `${baseUrl}${loc.prefix}/`; }
  function altLinks(slug) {
    const links = locales.map(l => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${urlFor(l, slug)}" />`).join('\n');
    const xd = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(locales[0], slug)}" />`;
    return links + '\n' + xd;
  }
  const entries = [];
  for (const page of pages) {
    for (const loc of locales) {
      entries.push(`  <url>
    <loc>${urlFor(loc, page.slug)}</loc>
${altLinks(page.slug)}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${entries.join('\n\n')}

</urlset>
`;
  const bk = `${siteRoot}/.port-backup/public__sitemap.xml`;
  if (!fs.existsSync(bk)) {
    fs.mkdirSync(path.dirname(bk), { recursive: true });
    fs.copyFileSync(sitemapPath, bk);
  }
  fs.writeFileSync(sitemapPath, xml, 'utf8');
  console.log(`  sitemap: ${entries.length} entries (${pages.length} pages × ${locales.length} locales)`);
  return true;
}

function portSite(siteName) {
  const siteRoot = `C:/Users/Pixelpowder/${siteName}`;
  const facts = SITE_FACTS[siteName];
  if (!facts) throw new Error(`No facts for ${siteName}`);

  const backupDir = `${siteRoot}/.port-backup`;
  if (!fs.existsSync(backupDir)) fs.mkdirSync(backupDir, { recursive: true });

  const touched = [];
  function backupAndWrite(relPath, contents) {
    const full = `${siteRoot}/${relPath}`;
    if (fs.existsSync(full)) {
      const bk = `${backupDir}/${relPath.replace(/[\/\\]/g, '__')}`;
      if (!fs.existsSync(bk)) fs.copyFileSync(full, bk);
    }
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, contents, 'utf8');
    touched.push(relPath);
  }

  // Read existing files
  const layoutPath = `${siteRoot}/src/app/layout.jsx`;
  const oldLayout = fs.readFileSync(layoutPath, 'utf8');
  const hasMe = /from '@\/src\/i18n\/locales\/me\.json'/.test(oldLayout) || facts.hasMe !== false;
  const hasRu = facts.hasRu !== false;

  if (!fs.existsSync(`${siteRoot}/middleware.js`)) backupAndWrite('middleware.js', MIDDLEWARE_SRC);
  if (!fs.existsSync(`${siteRoot}/src/i18n/DynamicLanguageProvider.jsx`)) backupAndWrite('src/i18n/DynamicLanguageProvider.jsx', DYN_PROVIDER_SRC);

  backupAndWrite('src/components/LocaleAwareSchema.jsx', buildLocaleAwareSchema(facts, hasMe, hasRu));
  backupAndWrite('src/app/layout.jsx', buildRootLayout(oldLayout, facts));

  const metaPath = `${siteRoot}/src/app/metadata.js`;
  const oldMeta = fs.readFileSync(metaPath, 'utf8');
  backupAndWrite('src/app/metadata.js', buildMetadataJs(oldMeta, facts));

  const langDir = `${siteRoot}/src/app/[lang]`;
  walkPages(langDir, (filePath) => {
    const rel = filePath.replace(siteRoot + '/', '').replace(/\\/g, '/');
    const cur = fs.readFileSync(filePath, 'utf8');
    const patched = patchLangPage(cur);
    if (patched !== cur) backupAndWrite(rel, patched);
  });

  const cpPath = `${siteRoot}/src/ContentPage.jsx`;
  if (fs.existsSync(cpPath)) {
    const cur = fs.readFileSync(cpPath, 'utf8');
    const patched = patchContentPage(cur);
    if (patched !== cur) backupAndWrite('src/ContentPage.jsx', patched);
  }

  const navPath = `${siteRoot}/src/Nav.jsx`;
  if (fs.existsSync(navPath)) {
    const cur = fs.readFileSync(navPath, 'utf8');
    const patched = patchNav(cur);
    if (patched !== cur) backupAndWrite('src/Nav.jsx', patched);
  }

  const footerPath = `${siteRoot}/src/Footer.jsx`;
  if (fs.existsSync(footerPath)) {
    const cur = fs.readFileSync(footerPath, 'utf8');
    const patched = patchFooter(cur);
    if (patched !== cur) backupAndWrite('src/Footer.jsx', patched);
  }

  const cbPath = `${siteRoot}/src/CookieBanner.jsx`;
  if (fs.existsSync(cbPath)) {
    const cur = fs.readFileSync(cbPath, 'utf8');
    const patched = patchCookieBanner(cur);
    if (patched !== cur) backupAndWrite('src/CookieBanner.jsx', patched);
  }

  const enPath = `${siteRoot}/src/i18n/locales/en.json`;
  const oldEn = fs.readFileSync(enPath, 'utf8');
  const newEn = patchEnJson(oldEn, facts);
  if (newEn !== oldEn) backupAndWrite('src/i18n/locales/en.json', newEn);

  const scriptsDir = `${siteRoot}/scripts`;
  if (!fs.existsSync(scriptsDir)) fs.mkdirSync(scriptsDir, { recursive: true });
  const copiedScripts = [];
  for (const s of ['translate-missing-keys.mjs','fill-translation-gaps.mjs','full-translation-audit.mjs']) {
    const srcFile = `C:/Users/Pixelpowder/kotorcarrental/scripts/${s}`;
    const dstFile = `${scriptsDir}/${s}`;
    if (fs.existsSync(srcFile) && !fs.existsSync(dstFile)) {
      fs.copyFileSync(srcFile, dstFile);
      copiedScripts.push(s);
      touched.push(`scripts/${s}`);
    }
  }

  if (regenerateSitemap(siteRoot, facts)) touched.push('public/sitemap.xml');

  return { touched, copiedScripts };
}

const siteArg = process.argv[2];
if (siteArg) {
  console.log(`\n=== Porting ${siteArg} ===`);
  try {
    const { touched, copiedScripts } = portSite(siteArg);
    console.log(`  Touched ${touched.length} files; copied ${copiedScripts.length} scripts`);
    for (const f of touched) console.log(`    + ${f}`);
  } catch(e) {
    console.error('  FAILED:', e.message);
    console.error(e.stack);
    process.exit(1);
  }
}
