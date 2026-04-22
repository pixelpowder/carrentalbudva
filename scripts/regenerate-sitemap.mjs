// Generate a full-coverage sitemap.xml with one <url> entry per page per locale.
// Each entry carries the full 7-locale hreflang alternate set.
// 27 pages × 6 locales = 162 URL entries.

import fs from "node:fs";

const BASE = "https://www.kotorcarrental.com";
const LOCALES = [
  { code: "en", prefix: "" },
  { code: "de", prefix: "/de" },
  { code: "ru", prefix: "/ru" },
  { code: "it", prefix: "/it" },
  { code: "fr", prefix: "/fr" },
  { code: "me", prefix: "/me", hreflang: "cnr" },
];

// Priority + changefreq per page type
const PAGES = [
  { slug: "",                              priority: "1.0", changefreq: "weekly" },
  { slug: "/book",                         priority: "0.9", changefreq: "weekly" },
  { slug: "/kotor",                        priority: "0.8", changefreq: "monthly" },
  { slug: "/budva",                        priority: "0.8", changefreq: "monthly" },
  { slug: "/tivat",                        priority: "0.8", changefreq: "monthly" },
  { slug: "/perast",                       priority: "0.8", changefreq: "monthly" },
  { slug: "/podgorica",                    priority: "0.7", changefreq: "monthly" },
  { slug: "/montenegro",                   priority: "0.8", changefreq: "monthly" },
  { slug: "/tivat-airport",                priority: "0.8", changefreq: "monthly" },
  { slug: "/podgorica-airport",            priority: "0.7", changefreq: "monthly" },
  { slug: "/dubrovnik-airport",            priority: "0.7", changefreq: "monthly" },
  { slug: "/border-crossing-guide",        priority: "0.6", changefreq: "monthly" },
  { slug: "/about",                        priority: "0.5", changefreq: "yearly" },
  { slug: "/contact",                      priority: "0.5", changefreq: "yearly" },
  { slug: "/affiliate",                    priority: "0.5", changefreq: "yearly" },
  { slug: "/privacy",                      priority: "0.3", changefreq: "yearly" },
  { slug: "/terms",                        priority: "0.3", changefreq: "yearly" },
  { slug: "/cookie-policy",                priority: "0.3", changefreq: "yearly" },
  { slug: "/blog",                         priority: "0.7", changefreq: "weekly" },
  { slug: "/blog/bay-of-kotor-swimming",   priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/dobrota-waterfront-walk", priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/kotor-food-markets",      priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/kotor-hidden-churches",   priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/kotor-kayak-and-car",     priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/kotor-spring-wildflowers",priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/kotor-to-cetinje-drive",  priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/stoliv-abandoned-village",priority: "0.6", changefreq: "monthly" },
  { slug: "/blog/vrmac-ridge-trail",       priority: "0.6", changefreq: "monthly" },
];

function urlFor(locale, slug) {
  // Default-locale (EN) root keeps trailing slash (canonical apex form).
  // Every other URL — including non-default locale roots like /de — has no trailing slash
  // so the sitemap entry matches the served canonical (Next.js 308-redirects /de/ → /de).
  if (!slug) {
    return locale.prefix ? `${BASE}${locale.prefix}` : `${BASE}/`;
  }
  return `${BASE}${locale.prefix}${slug}`;
}

function altLinks(slug) {
  const links = LOCALES.map(l =>
    `    <xhtml:link rel="alternate" hreflang="${l.hreflang || l.code}" href="${urlFor(l, slug)}" />`
  ).join("\n");
  // x-default points at the English (unprefixed) URL
  const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor(LOCALES[0], slug)}" />`;
  return links + "\n" + xDefault;
}

const entries = [];
for (const page of PAGES) {
  for (const locale of LOCALES) {
    entries.push(`  <url>
    <loc>${urlFor(locale, page.slug)}</loc>
${altLinks(page.slug)}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

${entries.join("\n\n")}

</urlset>
`;

fs.writeFileSync("public/sitemap.xml", xml, "utf8");
console.log(`Wrote ${entries.length} URL entries (${PAGES.length} pages × ${LOCALES.length} locales).`);
