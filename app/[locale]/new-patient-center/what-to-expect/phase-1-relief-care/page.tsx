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

export default function Phase1Page() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'Phase 1 of 3',
      title: 'Relief Care',
      subtitle: 'Thumbs Up to Relief',
      intro: 'During the first phase of care, the primary goal is to reduce your symptoms as quickly as possible — and help you feel better.',
      p1: 'Depending on the severity of your problem, it is common to need frequent visits during this phase — sometimes daily, or 2–3 times per week. As your symptoms improve, the frequency of visits is reduced.',
      boxTitle: 'An important thing to understand:',
      boxText: 'Pain is a very poor indicator of health. In fact, pain and other symptoms frequently only appear after a disease or other condition has become advanced. The same is true in reverse — pain may disappear well before the underlying problem has actually been corrected.',
      p2: 'Just because your pain is gone does not mean that your spine is fully healed. Most patients feel significantly better before their spine has fully corrected — which is why it is important to continue with care even after symptoms subside.',
      p3: 'Think of it like an iceberg: the pain you feel is just the tip. Below the surface, there may be underlying joint dysfunction, nerve irritation, or structural issues that need to be addressed during the next phase of care.',
      nextBtn: 'Next: Phase 2 — Corrective Care →',
      backBtn: 'Back to Overview',
    },
    nl: {
      badge: 'Fase 1 van 3',
      title: 'Verlichtingszorg',
      subtitle: 'Snel Verlicht van Pijn',
      intro: 'Tijdens de eerste fase van de zorg is het voornaamste doel uw klachten zo snel mogelijk te verminderen — en u beter te laten voelen.',
      p1: 'Afhankelijk van de ernst van uw klacht is het gebruikelijk om tijdens deze fase frequent bezoeken nodig te hebben — soms dagelijks, of 2–3 keer per week. Naarmate uw klachten verbeteren, wordt de bezoekfrequentie verminderd.',
      boxTitle: 'Een belangrijk punt om te begrijpen:',
      boxText: 'Pijn is een zeer slechte indicator van gezondheid. Pijn en andere symptomen verschijnen vaak pas nadat een ziekte of aandoening al vergevorderd is. Hetzelfde geldt omgekeerd — pijn kan verdwijnen ruim voordat het onderliggende probleem daadwerkelijk is gecorrigeerd.',
      p2: 'Alleen omdat uw pijn weg is, betekent dit niet dat uw wervelkolom volledig genezen is. De meeste patiënten voelen zich aanzienlijk beter voordat hun wervelkolom volledig gecorrigeerd is — dat is waarom het belangrijk is om door te gaan met de zorg, ook nadat de klachten zijn afgenomen.',
      p3: 'Zie het als een ijsberg: de pijn die u voelt, is slechts het topje. Onder de oppervlakte kunnen er onderliggende gewrichtsdisfunctie, zenuwirritatie of structurele problemen zijn die tijdens de volgende fase van de zorg aangepakt moeten worden.',
      nextBtn: 'Volgende: Fase 2 — Correctieve Zorg →',
      backBtn: 'Terug naar Overzicht',
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-3 text-[#191919]">{c.title}</h1>
            <p className="text-2xl font-bold text-[#45321A]">{c.subtitle}</p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="prose prose-lg max-w-none text-[#403F3F] space-y-6">
            <div className="bg-[#45321A] text-white rounded-2xl p-8 mb-8">
              <p className="text-white/90 leading-relaxed text-lg">{c.intro}</p>
            </div>

            <p className="leading-relaxed">{c.p1}</p>

            <div className="bg-[#F6F6F6] rounded-2xl p-6">
              <h3 className="text-[#191919] font-bold text-lg mb-3">{c.boxTitle}</h3>
              <p className="leading-relaxed">
                <strong className="text-[#191919]">{language === 'nl' ? 'Pijn is een zeer slechte indicator van gezondheid.' : 'Pain is a very poor indicator of health.'}</strong>{' '}
                {language === 'nl'
                  ? 'Pijn en andere symptomen verschijnen vaak pas nadat een ziekte of aandoening al vergevorderd is. Hetzelfde geldt omgekeerd — pijn kan verdwijnen ruim voordat het onderliggende probleem daadwerkelijk is gecorrigeerd.'
                  : 'In fact, pain and other symptoms frequently only appear after a disease or other condition has become advanced. The same is true in reverse — pain may disappear well before the underlying problem has actually been corrected.'}
              </p>
            </div>

            <p className="leading-relaxed">{c.p2}</p>
            <p className="leading-relaxed">{c.p3}</p>

            <div className="flex gap-4 mt-8">
              <Link href={`/${language}/new-patient-center/what-to-expect/phase-2-corrective-care`} className="bg-[#45321A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5a4228] transition-colors text-sm">
                {c.nextBtn}
              </Link>
              <Link href={`/${language}/new-patient-center/what-to-expect`} className="border border-[#45321A] text-[#45321A] font-semibold px-6 py-3 rounded-full hover:bg-[#45321A]/5 transition-colors text-sm">
                {c.backBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
