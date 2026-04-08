'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { useLanguage } from '@/contexts/language-context';

type Consent = 'accepted' | 'declined' | null;

const STORAGE_KEY = 'cookie-consent';

const t = {
  nl: {
    message:
      'Wij gebruiken cookies voor analyse en advertentiedoeleinden (waaronder Meta/Facebook). Als u akkoord gaat, worden uw gegevens gedeeld met deze partijen.',
    accept: 'Alles accepteren',
    decline: 'Alleen noodzakelijk',
    privacy: 'Privacybeleid',
  },
  en: {
    message:
      'We use cookies for analytics and advertising purposes (including Meta/Facebook). If you agree, your data will be shared with these parties.',
    accept: 'Accept all',
    decline: 'Necessary only',
    privacy: 'Privacy policy',
  },
};

export default function CookieBanner() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();
  const copy = t[language];

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Consent;
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored);
      if (stored === 'accepted') fireCapiPageView();
    } else {
      // Small delay so the page renders first
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function fireCapiPageView() {
    fetch('/api/facebook-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: 'PageView',
        eventId: crypto.randomUUID(),
        sourceUrl: window.location.href,
      }),
    }).catch(() => {});
  }

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
    fireCapiPageView();
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setConsent('declined');
    setVisible(false);
  }

  return (
    <>
      {/* Only load tracking when explicitly accepted */}
      {consent === 'accepted' && <Analytics />}
      {consent === 'accepted' && (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','1647032802996383');
fbq('track','PageView');`}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img height="1" width="1" style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1647032802996383&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        </>
      )}

      {visible && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          aria-modal="false"
          className="fixed bottom-0 left-0 right-0 z-[9999] bg-brand-dark text-white shadow-2xl"
        >
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {/* Text */}
            <p className="flex-1 text-sm text-gray-300 leading-relaxed">
              {copy.message}{' '}
              <a
                href="/privacy"
                className="underline underline-offset-2 text-white hover:text-[#c8a97a] transition-colors"
              >
                {copy.privacy}
              </a>
            </p>

            {/* Buttons */}
            <div className="flex flex-shrink-0 gap-3">
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-sm rounded border border-gray-500 text-gray-300 hover:border-white hover:text-white transition-colors"
              >
                {copy.decline}
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 text-sm rounded bg-brand-primary hover:bg-[#5c4225] text-white font-medium transition-colors"
              >
                {copy.accept}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
