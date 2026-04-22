'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown, ChevronRight, Menu, X, MapPin } from 'lucide-react';
import config from './siteConfig';
import useTranslation from './i18n/useTranslation';
import { SUPPORTED_LANGS, LANG_LABELS, DEFAULT_LANG } from './i18n/languages';
import './App.css';

export default function Nav({ logoHref }) {
  const { t, lang, localePath } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    }
    if (langOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [langOpen]);

  const tf = (key, fb) => {
    const v = t(key);
    return v && v !== key ? v : fb;
  };
  const navLinks = [
    { label: tf('nav.book', 'Book'), href: localePath('/book') },
    { label: tf('nav.fleet', 'Fleet'), href: localePath('/cars') },
    { label: tf('nav.blog', 'Blog'), href: localePath('/blog') },
    { label: tf('nav.destinations', 'Destinations'), href: localePath('/#destinations') },
    { label: tf('nav.about', 'About'), href: localePath('/about') },
    { label: tf('nav.contact', 'Contact'), href: localePath('/contact') },
  ];

  function switchLang(newLang) {
    setLangOpen(false);
    // Strip current lang prefix from pathname
    let path = pathname;
    const currentPrefix = `/${lang}`;
    if (lang !== DEFAULT_LANG && path.startsWith(currentPrefix)) {
      path = path.slice(currentPrefix.length) || '/';
    }
    // Build new path
    const newPath = newLang === DEFAULT_LANG ? path : `/${newLang}${path}`;
    router.push(newPath);
  }

  const resolvedLogoHref = logoHref || localePath('/');

  return (
    <>
      <div className="top-bar">
        <div className="top-bar__inner">
          <a href={localePath('/book')} className="top-bar__link">{t('navTop.carRental')}</a>
          <a href={localePath('/#destinations')} className="top-bar__link">{t('navTop.destinations')}</a>
          <a href={localePath('/blog')} className="top-bar__link">{t('navTop.travelGuides')}</a>
        </div>
      </div>
      <nav className="nav">
        <div className="nav__inner">
          <a href={resolvedLogoHref} className="nav__logo">
            <div className="nav__logo-mark" />
            <div className="nav__logo-text">
              {config.name}
              <span className="nav__logo-sub">{t('navTop.bokaBayRentals')}</span>
            </div>
          </a>

          <div className="nav__links">
            {navLinks.map(l => (
              <a key={l.label} href={l.href} className="nav__link">{l.label}</a>
            ))}
          </div>

          <div className="nav__right">
            <div className="nav__lang" ref={langRef} onClick={() => setLangOpen(!langOpen)}>
              <Globe size={14} />
              <span>{LANG_LABELS[lang]}</span>
              <ChevronDown size={12} className={langOpen ? 'open' : ''} />
              {langOpen && (
                <div className="nav__lang-dropdown">
                  {SUPPORTED_LANGS.map(l => (
                    <button key={l} className={`nav__lang-option${l === lang ? ' active' : ''}`}
                      onClick={e => { e.stopPropagation(); switchLang(l); }}>
                      {LANG_LABELS[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button className="nav__hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className={`mobile-overlay${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(false)}
          />
          <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
              <div className="mobile-drawer__header">
                <div className="nav__logo-text">
                  {config.name}
                  <span className="nav__logo-sub">{t('navTop.bokaBayRentals')}</span>
                </div>
                <button className="mobile-drawer__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                  <X size={22} />
                </button>
              </div>
              <nav className="mobile-drawer__links">
                {navLinks.map(l => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="mobile-drawer__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label} <ChevronRight size={16} />
                  </a>
                ))}
              </nav>
              <a href={resolvedLogoHref} className="mobile-drawer__cta">{t('common.home')}</a>
          </div>
        </>
      )}
    </>
  );
}
