import fs from 'node:fs';
import path from 'node:path';

const SLUGS = [
  'drobni-pijesak-cove',
  'milocer-park-villa',
  'rezevici-monastery',
  'budva-to-lovcen-mausoleum',
  'sutomore-stari-bar-ruins',
  'mogren-beach-dukley-tunnel',
  'budva-to-bar-ferry-port',
  'cetinje-day-trip-from-budva',
  'pastrovici-olive-harvest',
  'kotor-day-trip-from-budva',
];

const LANGS = ['', 'de/', 'ru/', 'it/', 'fr/', 'me/'];
const DOMAIN = 'https://www.carrentalbudva.com';

function urlBlock(prefix, slug) {
  return `  <url>
    <loc>${DOMAIN}/${prefix}blog/${slug}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}/blog/${slug}" />
    <xhtml:link rel="alternate" hreflang="de" href="${DOMAIN}/de/blog/${slug}" />
    <xhtml:link rel="alternate" hreflang="ru" href="${DOMAIN}/ru/blog/${slug}" />
    <xhtml:link rel="alternate" hreflang="it" href="${DOMAIN}/it/blog/${slug}" />
    <xhtml:link rel="alternate" hreflang="fr" href="${DOMAIN}/fr/blog/${slug}" />
    <xhtml:link rel="alternate" hreflang="cnr" href="${DOMAIN}/me/blog/${slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}/blog/${slug}" />
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

const newBlocks = [];
for (const slug of SLUGS) {
  for (const lang of LANGS) {
    newBlocks.push(urlBlock(lang, slug));
  }
}
const replacement = newBlocks.join('\n\n');

const file = path.resolve('public/sitemap.xml');
const content = fs.readFileSync(file, 'utf8');
const lines = content.split('\n');

// Find first <url> containing blog/<slug>/ at line ~2111 and last </url> at 2655
// We'll search for marker: the <url> block starting at the first "blog/" slug loc, and ending at the last "blog/" slug closing </url>.
const blogLineIdx = [];
lines.forEach((l, i) => {
  if (/<loc>https:\/\/www\.carrentalbudva\.com\/(\w+\/)?blog\/[a-z-]+<\/loc>/.test(l)) {
    blogLineIdx.push(i);
  }
});
if (blogLineIdx.length === 0) throw new Error('no blog slug urls found');
const firstLoc = blogLineIdx[0];
const lastLoc = blogLineIdx[blogLineIdx.length - 1];
// find enclosing <url> start before firstLoc
let startIdx = firstLoc;
while (startIdx > 0 && !/^\s*<url>\s*$/.test(lines[startIdx])) startIdx--;
// find enclosing </url> after lastLoc
let endIdx = lastLoc;
while (endIdx < lines.length && !/^\s*<\/url>\s*$/.test(lines[endIdx])) endIdx++;
// Also consume the blank line after
// Build new content
const before = lines.slice(0, startIdx).join('\n');
const after = lines.slice(endIdx + 1).join('\n');
const out = before + '\n' + replacement + '\n' + after;
fs.writeFileSync(file, out);
console.log(`Replaced lines ${startIdx + 1}..${endIdx + 1} with ${SLUGS.length * LANGS.length} new blocks.`);
