'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import navContent from '@/content/navigation.json';

export default function Navigation() {
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const l = language;

  const t = {
    en: {
      book: navContent.en.book,
      thisPage: navContent.en.thisPage,
      conditionsLabel: navContent.en.conditionsLabel,
      moreLabel: navContent.en.moreLabel,
      mainNav: [
        { label: 'Services', href: `/${l}#services` },
        { label: 'Approach', href: `/${l}#approach` },
        { label: 'Pricing', href: `/${l}#pricing` },
        { label: 'About', href: `/${l}#about` },
        { label: 'Reviews', href: `/${l}#testimonials` },
        { label: 'FAQ', href: `/${l}#faq` },
        { label: 'Book', href: `/${l}#booking` },
      ],
      klachten: [
        { label: 'All Conditions', href: `/${l}/klachten` },
        { label: 'Lower Back Pain', href: `/${l}/klachten/lage-rugpijn` },
        { label: 'Neck Pain', href: `/${l}/klachten/nek` },
        { label: 'Herniated Disc', href: `/${l}/klachten/hernia` },
        { label: 'Whiplash', href: `/${l}/klachten/whiplash` },
        { label: 'Headache & Migraine', href: `/${l}/klachten/hoofdpijn-en-migraine` },
        { label: 'Pregnancy', href: `/${l}/klachten/zwangerschap` },
        { label: 'Sports Injuries', href: `/${l}/klachten/sportblessures` },
        { label: "Baby's", href: `/${l}/klachten/baby-s` },
        { label: 'Children', href: `/${l}/klachten/kinderen` },
        { label: 'Arthrosis / Wear', href: `/${l}/klachten/artrose-slijtage` },
      ],
      moreLinks: [
        { label: 'New Patient Center', href: `/${l}/new-patient-center` },
        { label: 'Your First Visit', href: `/${l}/new-patient-center/your-first-visit` },
        { label: 'What to Expect', href: `/${l}/new-patient-center/what-to-expect` },
        { label: 'Payment Options', href: `/${l}/new-patient-center/payment-options` },
        { label: 'Meet Your Doctor', href: `/${l}/about/meet-your-doctor` },
        { label: 'Health Resources', href: `/${l}/health-resources` },
        { label: 'Patient Forms', href: `/${l}/patient-forms` },
        { label: 'Blog', href: `/${l}/blog` },
      ],
    },
    nl: {
      book: navContent.nl.book,
      thisPage: navContent.nl.thisPage,
      conditionsLabel: navContent.nl.conditionsLabel,
      moreLabel: navContent.nl.moreLabel,
      mainNav: [
        { label: 'Diensten', href: `/${l}#services` },
        { label: 'Aanpak', href: `/${l}#approach` },
        { label: 'Tarieven', href: `/${l}#pricing` },
        { label: 'Over Ons', href: `/${l}#about` },
        { label: 'Reviews', href: `/${l}#testimonials` },
        { label: 'FAQ', href: `/${l}#faq` },
        { label: 'Boek', href: `/${l}#booking` },
      ],
      klachten: [
        { label: 'Alle klachten', href: `/${l}/klachten` },
        { label: 'Lage Rugpijn', href: `/${l}/klachten/lage-rugpijn` },
        { label: 'Nek', href: `/${l}/klachten/nek` },
        { label: 'Hernia', href: `/${l}/klachten/hernia` },
        { label: 'Whiplash', href: `/${l}/klachten/whiplash` },
        { label: 'Hoofdpijn & Migraine', href: `/${l}/klachten/hoofdpijn-en-migraine` },
        { label: 'Zwangerschap', href: `/${l}/klachten/zwangerschap` },
        { label: 'Sportblessures', href: `/${l}/klachten/sportblessures` },
        { label: "Baby's", href: `/${l}/klachten/baby-s` },
        { label: 'Kinderen', href: `/${l}/klachten/kinderen` },
        { label: 'Artrose / Slijtage', href: `/${l}/klachten/artrose-slijtage` },
      ],
      moreLinks: [
        { label: 'Nieuwe Patiënten', href: `/${l}/new-patient-center` },
        { label: 'Uw Eerste Bezoek', href: `/${l}/new-patient-center/your-first-visit` },
        { label: 'Wat te Verwachten', href: `/${l}/new-patient-center/what-to-expect` },
        { label: 'Betalingsopties', href: `/${l}/new-patient-center/payment-options` },
        { label: 'Ontmoet Dr. Jahani', href: `/${l}/about/meet-your-doctor` },
        { label: 'Gezondheidsinfo', href: `/${l}/health-resources` },
        { label: 'Patiëntformulieren', href: `/${l}/patient-forms` },
        { label: 'Blog', href: `/${l}/blog` },
      ],
    },
  };

  const c = t[language];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo */}
        <Link href={`/${l}`} className="hover:opacity-80 transition-opacity flex-shrink-0">
          <Image
            src="/logo.webp"
            alt="Health4Life Chiropractic Rugkliniek"
            width={160}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          {c.mainNav.map(({ label, href }) => (
            <Link key={href} href={href} className="hover:text-brand-primary transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* EN/NL toggle — always visible */}
          <div className="flex items-center bg-brand-light rounded-full p-1">
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${language === 'en' ? 'bg-brand-primary text-white' : 'text-brand-muted hover:text-brand-primary'}`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('nl')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${language === 'nl' ? 'bg-brand-primary text-white' : 'text-brand-muted hover:text-brand-primary'}`}
            >
              NL
            </button>
          </div>

          <Link
            href={`/${l}#booking`}
            className="hidden md:block bg-brand-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-brand-primary-hover transition-colors"
          >
            {c.book}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-brand-light transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Hamburger panel */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-50">
          <div className="max-w-6xl mx-auto px-6 py-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* This Page */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-3">{c.thisPage}</div>
              <ul className="space-y-2">
                {c.mainNav.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setMenuOpen(false)} className="text-sm text-brand-muted hover:text-brand-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Klachten / Conditions */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-3">{c.conditionsLabel}</div>
              <ul className="space-y-2">
                {c.klachten.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setMenuOpen(false)} className="text-sm text-brand-muted hover:text-brand-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* More */}
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary mb-3">{c.moreLabel}</div>
              <ul className="space-y-2">
                {c.moreLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setMenuOpen(false)} className="text-sm text-brand-muted hover:text-brand-primary transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
