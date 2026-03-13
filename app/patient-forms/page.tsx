'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import { useLanguage } from '@/contexts/language-context';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

export default function PatientFormsPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'New Patients',
      title: 'Patient Forms',
      subtitle: 'Complete before your first visit to save time at the clinic',
      instructionsTitle: 'Instructions',
      instructionsText: 'Please fill in the New Patient Intake Form online before your first appointment. It takes only a few minutes and helps us prepare for your visit. If you have any questions, contact us at',
      form1Title: 'New Patient Intake Form',
      form1Desc: 'Personal details, medical history, insurance, and consent — fill it in online before your visit.',
      form1Btn: 'Fill Out Form Online',
      form2Title: 'Health History Questionnaire',
      form2Desc: 'Detailed medical history, current symptoms, and previous treatments.',
      form2Btn: 'Download PDF',
      form3Title: 'Consent & Privacy Forms',
      form3Desc: 'Treatment consent, privacy policy, and GDPR compliance documentation.',
      form3Btn: 'Download PDF',
      helpText: 'Need help or have questions about the forms?',
      helpLink: 'Contact us or book your first appointment',
      footerDesc: 'Chiropractic Specialist and Pain Management Clinic in Amsterdam Zuid. Serving patients since 2010.',
    },
    nl: {
      badge: 'Nieuwe Patiënten',
      title: 'Patiëntformulieren',
      subtitle: 'Vul in vóór uw eerste bezoek om tijd te besparen bij de kliniek',
      instructionsTitle: 'Instructies',
      instructionsText: 'Vul het Nieuwe Patiënt Intakeformulier online in vóór uw eerste afspraak. Het duurt slechts een paar minuten en helpt ons uw bezoek voor te bereiden. Heeft u vragen, neem dan contact met ons op via',
      form1Title: 'Nieuw Patiënt Intakeformulier',
      form1Desc: 'Persoonlijke gegevens, medische voorgeschiedenis, verzekering en toestemming — vul het online in vóór uw bezoek.',
      form1Btn: 'Formulier Online Invullen',
      form2Title: 'Gezondheidsgeschiedenisvragenlijst',
      form2Desc: 'Gedetailleerde medische voorgeschiedenis, huidige klachten en eerdere behandelingen.',
      form2Btn: 'PDF Downloaden',
      form3Title: 'Toestemmings- & Privacyformulieren',
      form3Desc: 'Behandelingstoestemming, privacybeleid en AVG-nalevingsdocumentatie.',
      form3Btn: 'PDF Downloaden',
      helpText: 'Heeft u hulp nodig of vragen over de formulieren?',
      helpLink: 'Neem contact op of boek uw eerste afspraak',
      footerDesc: 'Chiropractie Specialist en Pijnmanagement Kliniek in Amsterdam Zuid. Al patiënten begeleidend sinds 2010.',
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      {/* ── CONTENT ──────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">{c.title}</h1>
            <p className="text-[#403F3F] text-lg max-w-2xl mx-auto">{c.subtitle}</p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          {/* Instructions */}
          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-6 md:p-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-[#45321A] flex-shrink-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                  <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-[#191919] mb-2 text-lg">{c.instructionsTitle}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">
                  {c.instructionsText}{' '}
                  <a href="mailto:health4life@amsterdamchiropractic.com" className="text-[#45321A] font-semibold hover:underline">
                    health4life@amsterdamchiropractic.com
                  </a>.
                </p>
              </div>
            </div>
          </div>

          {/* Form Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Form 1 */}
            <div className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] mb-2 text-lg">{c.form1Title}</h3>
              <p className="text-[#403F3F] text-sm mb-5 leading-relaxed">{c.form1Desc}</p>
              <Link
                href="/patient-forms/new-patient-intake"
                className="w-full bg-[#45321A] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#5a4228] transition-colors flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                  <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.form1Btn}
              </Link>
            </div>

            {/* Form 2 */}
            <div className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] mb-2 text-lg">{c.form2Title}</h3>
              <p className="text-[#403F3F] text-sm mb-5 leading-relaxed">{c.form2Desc}</p>
              <button className="w-full bg-[#45321A] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#5a4228] transition-colors flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.form2Btn}
              </button>
            </div>

            {/* Form 3 */}
            <div className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-bold text-[#191919] mb-2 text-lg">{c.form3Title}</h3>
              <p className="text-[#403F3F] text-sm mb-5 leading-relaxed">{c.form3Desc}</p>
              <button className="w-full bg-[#45321A] text-white text-sm font-semibold py-3 rounded-full hover:bg-[#5a4228] transition-colors flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {c.form3Btn}
              </button>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-10 text-center">
            <p className="text-[#403F3F] text-sm mb-4">{c.helpText}</p>
            <Link
              href="/#booking"
              className="text-[#45321A] font-semibold text-sm hover:underline inline-flex items-center gap-1.5"
            >
              {c.helpLink}
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer className="bg-[#191919] text-white py-14 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
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
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">{c.footerDesc}</p>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">
              {language === 'nl' ? 'Snelle Links' : 'Quick Links'}
            </div>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li><Link href="/#services" className="hover:text-white transition-colors">{language === 'nl' ? 'Diensten' : 'Services'}</Link></li>
              <li><Link href="/#pricing" className="hover:text-white transition-colors">{language === 'nl' ? 'Tarieven' : 'Pricing'}</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">{language === 'nl' ? 'Over Dr. Jahani' : 'About Dr. Jahani'}</Link></li>
              <li><Link href="/#booking" className="hover:text-white transition-colors">{language === 'nl' ? 'Afspraak Boeken' : 'Book Appointment'}</Link></li>
              <li><Link href="/vacatures" className="hover:text-white transition-colors">Vacatures</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-sm mb-4 text-white/80 uppercase tracking-wide">Contact</div>
            <ul className="space-y-2.5 text-sm text-white/60">
              <li>Maasstraat 103</li>
              <li>1078 HH Amsterdam</li>
              <li>020-673 1800</li>
              <li>06-1882-0000 (WhatsApp)</li>
              <li className="pt-1">{language === 'nl' ? 'Ma – Vr: 10:00 – 17:00' : 'Mon – Fri: 10:00 – 17:00'}</li>
              <li>{language === 'nl' ? 'Za: 10:00 – 14:00' : 'Sat: 10:00 – 14:00'}</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <span>© 2026 Health4Life Chiropractic Amsterdam. {language === 'nl' ? 'Alle rechten voorbehouden.' : 'All rights reserved.'}</span>
          <Link href="/privacy" className="hover:text-white/70 transition-colors">{language === 'nl' ? 'Privacybeleid' : 'Privacy Policy'}</Link>
        </div>
      </footer>
    </div>
  );
}
