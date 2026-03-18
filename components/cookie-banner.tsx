'use client';

import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/next';
import { useLanguage } from '@/contexts/language-context';

type Consent = 'accepted' | 'declined' | null;

const STORAGE_KEY = 'cookie-consent';

const t = {
  nl: {
    message:
      'Wij gebruiken analytische cookies om het gebruik van onze website te begrijpen en te verbeteren. Uw gegevens worden niet gedeeld met derden.',
    accept: 'Alles accepteren',
    decline: 'Alleen noodzakelijk',
    privacy: 'Privacybeleid',
  },
  en: {
    message:
      'We use analytical cookies to understand and improve how our website is used. Your data is not shared with third parties.',
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
    } else {
      // Small delay so the page renders first
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'declined');
    setConsent('declined');
    setVisible(false);
  }

  return (
    <>
      {/* Only load analytics when explicitly accepted */}
      {consent === 'accepted' && <Analytics />}

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
