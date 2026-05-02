'use client';
import { useState } from 'react';
import useTranslation from '@/src/i18n/useTranslation';
import Nav from '@/src/Nav';
import Footer from '@/src/Footer';
import { Mail, MapPin, Clock, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import config from '@/src/siteConfig';
import '@/src/ContentPage.css';

export default function Contact() {
  const { t, localePath } = useTranslation();
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      website: formData.get('website'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please email us directly.');
        return;
      }

      setStatus('success');
      e.target.reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error. Please try again or email us directly.');
    }
  };

  return (
    <div className="content-page">
      <Nav />

      {/* Hero */}
      <div style={{ background: 'var(--black)', padding: '80px 24px 64px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h1 style={{ fontFamily: "'Lato', sans-serif", fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>
            {t('contact.heroTitle')}
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
            {t('contact.heroSubtitle')}
          </p>
        </div>
      </div>

      {/* Contact cards */}
      <div style={{ maxWidth: '900px', margin: '-32px auto 0', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>

          <a href={`mailto:${config.email}`} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
            padding: '32px 20px', background: '#fff', borderRadius: '16px', textDecoration: 'none',
            color: 'var(--black)', border: '1px solid var(--border)', textAlign: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
              <Mail size={22} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{t('contact.email')}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>{config.email}</div>
            </div>
          </a>
<div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
            padding: '32px 20px', background: '#fff', borderRadius: '16px',
            color: 'var(--black)', border: '1px solid var(--border)', textAlign: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.08)'
          }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'var(--bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--black)' }}>
              <Clock size={22} />
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, marginBottom: '4px' }}>{t('contact.responseTime')}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>{t('contact.under2Hours')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Form section */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '64px 24px 80px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--black)', marginBottom: '8px' }}>{t('contact.sendMessage')}</h2>
        <p style={{ fontSize: '15px', color: 'var(--text-light)', marginBottom: '32px' }}>
          {t('contact.formSubtext')}
        </p>

        {status === 'success' ? (
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '20px', background: '#e8f6ef', border: '1px solid #a8d8bd', borderRadius: '12px' }}>
            <CheckCircle2 size={24} style={{ color: '#0f7a3c', flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontWeight: 700, color: '#0f7a3c', marginBottom: '4px' }}>{t('contact.successTitle')}</div>
              <div style={{ fontSize: '14px', color: '#495057', lineHeight: 1.5 }}>{t('contact.successBody')}</div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <input type="text" name="name" placeholder={t('contact.yourName')} required disabled={status === 'sending'} style={{
                padding: '14px 16px', border: '1px solid var(--border)', borderRadius: '10px',
                fontSize: '15px', fontFamily: 'inherit', background: 'var(--bg-alt)'
              }} />
              <input type="email" name="email" placeholder={t('contact.yourEmail')} required disabled={status === 'sending'} style={{
                padding: '14px 16px', border: '1px solid var(--border)', borderRadius: '10px',
                fontSize: '15px', fontFamily: 'inherit', background: 'var(--bg-alt)'
              }} />
            </div>
            <select name="subject" disabled={status === 'sending'} style={{
              padding: '14px 16px', border: '1px solid var(--border)', borderRadius: '10px',
              fontSize: '15px', fontFamily: 'inherit', background: 'var(--bg-alt)', color: 'var(--text)'
            }}>
              <option value="">{t('contact.selectTopic')}</option>
              <option value="booking">{t('contact.topicBooking')}</option>
              <option value="pricing">{t('contact.topicPricing')}</option>
              <option value="border">{t('contact.topicBorder')}</option>
              <option value="pickup">{t('contact.topicPickup')}</option>
              <option value="other">{t('contact.topicOther')}</option>
            </select>
            <textarea name="message" placeholder={t('contact.howCanWeHelp')} rows={5} required disabled={status === 'sending'} style={{
              padding: '14px 16px', border: '1px solid var(--border)', borderRadius: '10px',
              fontSize: '15px', fontFamily: 'inherit', resize: 'vertical', background: 'var(--bg-alt)'
            }} />
            {/* Honeypot */}
            <input type="text" name="website" tabIndex="-1" autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} aria-hidden="true" />

            {status === 'error' && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '12px 14px', background: '#fde8e8', border: '1px solid #f5a6a6', borderRadius: '8px', color: '#9b1c1c', fontSize: '14px' }}>
                <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '1px' }} />
                <span>{errorMsg}</span>
              </div>
            )}

            <button type="submit" disabled={status === 'sending'} style={{
              padding: '16px 32px', background: status === 'sending' ? 'var(--text-light)' : 'var(--primary)', color: '#fff', border: 'none',
              borderRadius: '9999px', fontSize: '16px', fontWeight: 700, cursor: status === 'sending' ? 'wait' : 'pointer',
              alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              {status === 'sending' ? 'Sending…' : t('contact.sendBtn')} {status !== 'sending' && <ArrowRight size={16} />}
            </button>
          </form>
        )}

        {/* FAQ link */}
        <div style={{
          marginTop: '48px', padding: '24px', background: 'var(--bg-alt)', borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px'
        }}>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: 'var(--black)', marginBottom: '4px' }}>{t('contact.faqTitle')}</div>
            <div style={{ fontSize: '14px', color: 'var(--text-light)' }}>{t('contact.faqSubtext')}</div>
          </div>
          <a href={localePath('/#faq')} style={{
            display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--primary)',
            fontWeight: 700, fontSize: '14px', textDecoration: 'none', whiteSpace: 'nowrap'
          }}>
            {t('contact.viewFaq')} <ArrowRight size={14} />
          </a>
        </div>

        {/* Address */}
        <div style={{ marginTop: '32px', textAlign: 'center', color: 'var(--text-light)', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
          <MapPin size={14} /> {config.address}
        </div>
      </div>

      <Footer />
    </div>
  );
}
