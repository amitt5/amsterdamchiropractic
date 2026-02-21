'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { language } = useLanguage();

  const t = {
    en: {
      tagline: 'Chiropractic specialist in Amsterdam Zuid. Maasstraat 103, 1078 HH Amsterdam.',
      treatmentLabel: 'Treatment',
      treatment: [
        { label: 'Conditions', href: '/klachten' },
        { label: 'Treatment', href: '/behandeling' },
        { label: 'Techniques', href: '/techniques' },
        { label: 'Physio-Chiro Therapy', href: '/fysio-chiro-gecombineerde-therapie' },
        { label: 'Rates & Insurance', href: '/behandeling/tarieven-vergoedingen' },
      ],
      infoLabel: 'Information',
      info: [
        { label: 'About Us', href: '/about' },
        { label: 'Meet Dr. Jahani', href: '/about/meet-your-doctor' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: 'Videos', href: '/videos' },
        { label: 'Office Hours', href: '/office-hours' },
        { label: 'Vacancies', href: '/vacatures' },
      ],
      contactLabel: 'Contact',
      hours: ['Mon – Fri: 10:00 – 17:00', 'Sat: 10:00 – 14:00'],
      rights: '© 2026 Health4Life Chiropractic Amsterdam. All rights reserved.',
      legal: 'Privacy Policy · Terms of Service',
    },
    nl: {
      tagline: 'Chiropractie specialist in Amsterdam Zuid. Maasstraat 103, 1078 HH Amsterdam.',
      treatmentLabel: 'Behandeling',
      treatment: [
        { label: 'Klachten', href: '/klachten' },
        { label: 'Behandeling', href: '/behandeling' },
        { label: 'Technieken', href: '/techniques' },
        { label: 'Fysio-Chiro Therapie', href: '/fysio-chiro-gecombineerde-therapie' },
        { label: 'Tarieven & Vergoedingen', href: '/behandeling/tarieven-vergoedingen' },
      ],
      infoLabel: 'Informatie',
      info: [
        { label: 'Over Ons', href: '/about' },
        { label: 'Ontmoet Dr. Jahani', href: '/about/meet-your-doctor' },
        { label: 'Testimonials', href: '/testimonials' },
        { label: "Video's", href: '/videos' },
        { label: 'Openingstijden', href: '/office-hours' },
        { label: 'Vacatures', href: '/vacatures' },
      ],
      contactLabel: 'Contact',
      hours: ['Ma – Vr: 10:00 – 17:00', 'Za: 10:00 – 14:00'],
      rights: '© 2026 Health4Life Chiropractic Amsterdam. Alle rechten voorbehouden.',
      legal: 'Privacybeleid · Algemene Voorwaarden',
    },
  };

  const c = t[language];

  return (
    <footer className="bg-[#191919] text-white py-14 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-full bg-[#45321A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path d="M12 2C9 2 7 5 7 8c0 2 1 3.5 2.5 4.5L9 20h6l-.5-7.5C16 11.5 17 10 17 8c0-3-2-6-5-6z" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-extrabold text-base leading-tight">Health4Life</div>
              <div className="text-[10px] text-[#45321A] font-semibold uppercase tracking-widest leading-none">Chiropractic</div>
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">{c.tagline}</p>
        </div>

        {/* Treatment */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.treatmentLabel}</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {c.treatment.map(({ label, href }) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Info */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.infoLabel}</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            {c.info.map(({ label, href }) => (
              <li key={href}><Link href={href} className="hover:text-white transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">{c.contactLabel}</div>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>Maasstraat 103</li>
            <li>1078 HH Amsterdam</li>
            <li><a href="tel:0206731800" className="hover:text-white transition-colors">020-673 1800</a></li>
            <li><a href="https://wa.me/31618820000" className="hover:text-white transition-colors">06-1882-0000 (WhatsApp)</a></li>
            <li className="pt-1">{c.hours[0]}</li>
            <li>{c.hours[1]}</li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
        <span>{c.rights}</span>
        <span>{c.legal}</span>
      </div>
    </footer>
  );
}
