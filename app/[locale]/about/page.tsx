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

export default function AboutPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'Who We Are',
      h1: 'About Us',
      intro: 'Health4Life Chiropractic is dedicated to helping you achieve optimal health through neuro-based chiropractic care — combining functional neurology, BMAS-certified medical acupuncture, and evidence-based spinal correction in the heart of Amsterdam.',
      philosophyTitle: 'Our Philosophy',
      p1: <>At Health4Life Chiropractic, we believe that true health goes beyond simply being free of pain or disease. Our philosophy centers on <strong>preventive wellness</strong> — helping your body function at its best so that illness and injury become less likely in the first place.</>,
      p2: <>We create <strong>tailored treatment programs</strong> for each individual patient. No two people are alike, and neither are their health needs. During your initial visit, Dr. Jahani conducts a comprehensive assessment to understand not just your symptoms, but the underlying causes — and designs a care plan to address them.</>,
      p3: 'We guide you through three phases of care — Relief, Corrective, and Wellness — so that you can enjoy long-lasting results, not just short-term pain relief.',
      pillars: [
        { title: 'Preventive Wellness', desc: 'Treat the root cause, not just the symptom. Build lasting health.' },
        { title: 'Personalised Care', desc: 'Every treatment plan is custom-designed for your body and goals.' },
        { title: 'Neuro-Based Methods', desc: 'Functional neurology, BMAS acupuncture, and spinal correction — integrated for your condition.' },
        { title: 'Whole-Body Approach', desc: 'We combine chiropractic, acupuncture, and soft-tissue therapy.' },
      ],
      cards: [
        {
          title: 'Meet Your Doctor',
          href: `/${language}/about/meet-your-doctor`,
          desc: 'Learn about Dr. M. Jahani — his education, credentials, and 20+ years of clinical experience.',
          icon: 'person',
        },
        {
          title: 'Services & Techniques',
          href: `/${language}/about/services-techniques`,
          desc: 'Overview of all treatment methods and chiropractic techniques available at our practice.',
          icon: 'clipboard',
        },
        {
          title: 'Chiropractic Techniques',
          href: `/${language}/techniques`,
          desc: 'Detailed breakdown of all the evidence-based chiropractic techniques used by Dr. Jahani.',
          icon: 'group',
        },
      ],
    },
    nl: {
      badge: 'Over Ons',
      h1: 'Over Ons',
      intro: 'Health4Life Chiropractic is toegewijd aan het helpen van u bij het bereiken van optimale gezondheid via neurale chiropractische zorg — combinerend functionele neurologie, BMAS-gecertificeerde medische acupunctuur en evidence-based wervelkolomcorrectie in het hart van Amsterdam.',
      philosophyTitle: 'Onze Filosofie',
      p1: <>Bij Health4Life Chiropractic geloven wij dat echte gezondheid verder gaat dan vrij zijn van pijn of ziekte. Onze filosofie is gericht op <strong>preventief welzijn</strong> — uw lichaam zo goed mogelijk laten functioneren, zodat ziekte en letsel minder waarschijnlijk worden.</>,
      p2: <>Wij maken <strong>op maat gemaakte behandelplannen</strong> voor elke individuele patiënt. Geen twee mensen zijn hetzelfde, en hun gezondheidsbehoeften ook niet. Tijdens uw eerste bezoek doet Dr. Jahani een uitgebreide beoordeling om niet alleen uw symptomen, maar ook de onderliggende oorzaken te begrijpen — en ontwerpt een zorgplan om deze aan te pakken.</>,
      p3: 'Wij begeleiden u door drie fasen van zorg — Verlichting, Correctie en Welzijn — zodat u duurzame resultaten kunt genieten, niet alleen kortetermijnpijnverlichting.',
      pillars: [
        { title: 'Preventieve Welzijn', desc: 'Behandel de oorzaak, niet het symptoom. Bouw duurzame gezondheid op.' },
        { title: 'Persoonlijke Zorg', desc: 'Elk behandelplan is op maat ontworpen voor uw lichaam en doelen.' },
        { title: 'Neurale Methoden', desc: 'Functionele neurologie, BMAS acupunctuur en wervelkolomcorrectie — geïntegreerd voor uw aandoening.' },
        { title: 'Holistische Aanpak', desc: 'Wij combineren chiropractie, acupunctuur en zachte weefseltechnieken.' },
      ],
      cards: [
        {
          title: 'Ontmoet Uw Arts',
          href: `/${language}/about/meet-your-doctor`,
          desc: 'Leer Dr. M. Jahani kennen — zijn opleiding, kwalificaties en meer dan 20 jaar klinische ervaring.',
          icon: 'person',
        },
        {
          title: 'Diensten & Technieken',
          href: `/${language}/about/services-techniques`,
          desc: 'Overzicht van alle behandelmethoden en chiropractische technieken bij onze praktijk.',
          icon: 'clipboard',
        },
        {
          title: 'Chiropractische Technieken',
          href: `/${language}/techniques`,
          desc: 'Gedetailleerd overzicht van alle evidence-based chiropractische technieken die Dr. Jahani gebruikt.',
          icon: 'group',
        },
      ],
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-brand-dark bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-brand-primary text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-brand-dark">{c.h1}</h1>
            <p className="text-brand-muted max-w-2xl mx-auto leading-relaxed">
              {c.intro}
            </p>
            <div className="w-20 h-1 bg-brand-primary mx-auto rounded-full mt-6" />
          </div>

          {/* Philosophy */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-dark mb-5">{c.philosophyTitle}</h2>
              <p className="text-brand-muted leading-relaxed mb-4">
                {c.p1}
              </p>
              <p className="text-brand-muted leading-relaxed mb-4">
                {c.p2}
              </p>
              <p className="text-brand-muted leading-relaxed">
                {c.p3}
              </p>
            </div>
            <div className="bg-brand-light rounded-3xl p-8 space-y-5">
              {c.pillars.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex-shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 fill-white">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-brand-dark mb-1">{item.title}</div>
                    <div className="text-brand-muted text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-page cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {c.cards.map((card, i) => (
              <Link key={i} href={card.href} className="group bg-brand-light rounded-2xl p-7 hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center mb-5">
                  {card.icon === 'person' && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {card.icon === 'clipboard' && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  {card.icon === 'group' && (
                    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="white" strokeWidth="2">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-primary transition-colors">{card.title}</h3>
                <p className="text-brand-muted text-sm leading-relaxed">{card.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
