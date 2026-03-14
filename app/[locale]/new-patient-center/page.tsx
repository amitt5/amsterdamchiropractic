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

const calendarIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
    <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const clipboardIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const docIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
    <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const bookIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const cardIcon = (
  <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
    <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function NewPatientCenterPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'Welcome',
      title: 'New Patient Center',
      intro1: "We understand that arriving at a doctor's office for the first time can feel nerve-racking. Our goal is to make your experience as comfortable and stress-free as possible from the very first moment.",
      intro2: 'The resources below will help you prepare for your visit, understand what to expect from chiropractic care, and make the most of your time with Dr. Jahani.',
      cta: 'Book Your First Appointment',
      sections: [
        { title: 'Your First Visit', href: `/${language}/new-patient-center/your-first-visit`, desc: 'A step-by-step overview of what happens during your first appointment — from intake forms to your personalised wellness program.', icon: calendarIcon },
        { title: 'What to Expect', href: `/${language}/new-patient-center/what-to-expect`, desc: 'Understand the three phases of chiropractic care — Relief, Corrective, and Wellness — and what each phase means for your recovery.', icon: clipboardIcon },
        { title: 'Online Forms', href: `/${language}/patient-forms`, desc: 'Download and complete your new patient intake forms before your first visit to save time at the clinic.', icon: docIcon },
        { title: 'Health Resources', href: `/${language}/health-resources`, desc: 'Curated links to chiropractic organisations, wellness resources, and complementary health information.', icon: bookIcon },
        { title: 'Payment Options', href: `/${language}/new-patient-center/payment-options`, desc: 'Information on insurance coverage, pricing, and flexible payment arrangements for all budgets.', icon: cardIcon },
      ],
    },
    nl: {
      badge: 'Welkom',
      title: 'Nieuwe Patiënten Centrum',
      intro1: 'Wij begrijpen dat een eerste bezoek aan een artsenpraktijk zenuwachtig kan zijn. Ons doel is uw ervaring zo comfortabel en stressvrij mogelijk te maken — vanaf het allereerste moment.',
      intro2: 'De onderstaande informatie helpt u zich voor te bereiden op uw bezoek, te begrijpen wat u kunt verwachten van chiropractische zorg en het meeste uit uw tijd met Dr. Jahani te halen.',
      cta: 'Boek Uw Eerste Afspraak',
      sections: [
        { title: 'Uw Eerste Bezoek', href: `/${language}/new-patient-center/your-first-visit`, desc: 'Een stap-voor-stap overzicht van wat er tijdens uw eerste afspraak gebeurt — van het intakeformulier tot uw persoonlijk welzijnsprogramma.', icon: calendarIcon },
        { title: 'Wat te Verwachten', href: `/${language}/new-patient-center/what-to-expect`, desc: 'Begrijp de drie fasen van chiropractische zorg — Verlichting, Correctie en Welzijn — en wat elke fase betekent voor uw herstel.', icon: clipboardIcon },
        { title: 'Online Formulieren', href: `/${language}/patient-forms`, desc: 'Download en vul uw patiëntformulieren in vóór uw eerste bezoek om tijd te besparen bij de kliniek.', icon: docIcon },
        { title: 'Gezondheidsinfo', href: `/${language}/health-resources`, desc: 'Geselecteerde links naar chiropractische organisaties, welzijnsinformatie en aanvullende gezondheidsbronnen.', icon: bookIcon },
        { title: 'Betalingsopties', href: `/${language}/new-patient-center/payment-options`, desc: 'Informatie over verzekeringsdekking, tarieven en flexibele betalingsregelingen voor elk budget.', icon: cardIcon },
      ],
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">{c.title}</h1>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-2 mb-8" />
            <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 max-w-3xl mx-auto text-left">
              <p className="text-[#403F3F] leading-relaxed mb-4">{c.intro1}</p>
              <p className="text-[#403F3F] leading-relaxed">{c.intro2}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.sections.map((s, i) => (
              <Link key={i} href={s.href} className="group bg-[#F6F6F6] rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="font-bold text-[#191919] text-lg mb-3 group-hover:text-[#45321A] transition-colors">{s.title}</h3>
                <p className="text-[#403F3F] text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href={`/${language}#booking`} className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
              {c.cta}
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
