'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const techniques = [
  {
    title: 'Neuro-Based Spinal Correction',
    description: 'Advanced technique focusing on the neurological component of spinal misalignment. Addresses nerve interference to restore optimal nervous system function and overall health.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Diversified Technique',
    description: 'The most common and widely recognized manual adjustment method. Uses precise, high-velocity, low-amplitude thrusts to restore proper spinal alignment and joint mobility.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Gonstead Method',
    description: 'Precision analysis and adjustment technique using detailed biomechanical assessment. Emphasizes specific, targeted adjustments based on thorough spinal evaluation.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Activator Method',
    description: 'Low-force, instrument-assisted technique using a specialized adjusting tool. Ideal for patients who prefer gentle adjustments or have specific health considerations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Drop Table Technique',
    description: 'Gentle technique utilizing specialized table-assisted adjustments. The table sections drop slightly during adjustment, allowing for effective treatment with minimal force.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'SOT (Sacro-Occipital Technique)',
    description: 'Holistic cranial-sacral approach addressing the relationship between the sacrum and skull. Focuses on cerebrospinal fluid flow and overall nervous system balance.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Percussor Adjustment',
    description: 'Instrument-based therapy using a mechanical percussion device to deliver rapid, rhythmic impulses to muscles and joints. Reduces muscle tension, improves circulation, and prepares tissues for spinal correction.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 14M8.464 8.464a5 5 0 000 7.072" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Spinal Decompression Therapy',
    description: 'Non-surgical traction-based treatment that gently stretches the spine, relieving pressure on compressed discs and nerves. Particularly effective for disc herniations and degenerative disc conditions.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M8 9l4-4 4 4m0 6l-4 4-4-4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Myovision Scan',
    description: 'Advanced surface electromyography (sEMG) technology that measures electrical activity in paraspinal muscles. Provides objective data to assess nerve interference and track treatment progress.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Digital Foot Scan (Foot Levelers)',
    description: 'High-tech computerized foot scan that analyzes pressure distribution and arch support needs. Results are used to prescribe custom-made orthotics (Foot Levelers) that correct posture from the ground up.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function TechniquesPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'Our Methods',
      h1: 'Chiropractic Techniques',
      subtitle: 'Evidence-based methods tailored to your needs',
      intro: 'At Health4Life Chiropractic, we utilize a variety of proven techniques to address your specific condition and preferences. Dr. Jahani will discuss the most appropriate approach for your individual needs during your consultation.',
      infoTitle: 'Personalized Treatment Approach',
      infoIntro: 'Every patient is unique, and so is their treatment plan. During your initial consultation, Dr. Jahani will:',
      checklist: [
        'Conduct a thorough examination and assessment',
        'Discuss your health goals and concerns',
        'Recommend the most suitable technique(s) for your condition',
        'Create a customized treatment plan',
      ],
      ctaQuestion: 'Questions about which technique is right for you?',
      ctaBtn: 'Schedule a Consultation',
    },
    nl: {
      badge: 'Onze Methoden',
      h1: 'Chiropractische Technieken',
      subtitle: 'Evidence-based methoden op maat van uw behoeften',
      intro: 'Bij Health4Life Chiropractic gebruiken wij een verscheidenheid aan bewezen technieken om uw specifieke aandoening en voorkeuren te behandelen. Dr. Jahani bespreekt de meest geschikte aanpak voor uw individuele behoeften tijdens uw consultatie.',
      infoTitle: 'Persoonlijke Behandelaanpak',
      infoIntro: 'Elke patiënt is uniek, en zo ook hun behandelplan. Tijdens uw eerste consultatie zal Dr. Jahani:',
      checklist: [
        'Een grondig onderzoek en beoordeling uitvoeren',
        'Uw gezondheidsdoelen en zorgen bespreken',
        'De meest geschikte techniek(en) voor uw aandoening aanbevelen',
        'Een op maat gemaakt behandelplan opstellen',
      ],
      ctaQuestion: 'Vragen over welke techniek het beste bij u past?',
      ctaBtn: 'Plan een Consultatie',
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-white min-h-screen`}>
      <Navigation />

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-brand-dark">{c.h1}</h1>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">
              {c.subtitle}
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <p className="text-brand-muted leading-relaxed">
              {c.intro}
            </p>
          </div>

          {/* Technique Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <div
                key={index}
                className="bg-brand-light rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center mb-5 text-white">
                  {technique.icon}
                </div>
                <h3 className="font-bold text-brand-dark mb-3 text-lg leading-tight">
                  {technique.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed">
                  {technique.description}
                </p>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-16 bg-brand-primary/5 border border-brand-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-brand-dark mb-3 text-lg">{c.infoTitle}</h3>
                <p className="text-brand-muted text-sm leading-relaxed mb-4">
                  {c.infoIntro}
                </p>
                <ul className="space-y-2 text-sm text-brand-muted">
                  {c.checklist.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <svg viewBox="0 0 20 20" className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-brand-muted mb-6">
              {c.ctaQuestion}
            </p>
            <Link
              href={`/${language}#booking`}
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-semibold px-8 py-4 rounded-full hover:bg-brand-primary-hover transition-colors"
            >
              {c.ctaBtn}
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
