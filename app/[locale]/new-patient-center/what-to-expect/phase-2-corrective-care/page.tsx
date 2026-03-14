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

export default function Phase2Page() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'Phase 2 of 3',
      title: 'Corrective Care',
      subtitle: 'Teaming Up for Optimal Health',
      intro: 'During the corrective phase, we work together to address the underlying structural issues that caused your symptoms — not just the pain itself.',
      p1: 'Visits are less frequent than during Relief Care. In addition to chiropractic adjustments, Dr. Jahani will recommend specific exercises and stretches to support your recovery and strengthen the muscles around your spine.',
      expectTitle: 'What to expect during this phase:',
      expectItems: [
        'Fewer adjustments per week compared to Relief Care',
        'Prescribed home exercises and stretches tailored to your condition',
        'Mild symptom flare-ups may occasionally occur — this is normal and temporary',
        'Duration can range from a few months to a couple of years, depending on the severity and age of the problem',
      ],
      warningTitle: 'Important warning:',
      warningText: 'Many patients stop treatment once their pain disappears — but this significantly increases the risk of the problem recurring. Stopping care prematurely is one of the most common reasons patients return to us with the same complaint months or years later.',
      nextBtn: 'Next: Phase 3 — Wellness Care →',
      backBtn: 'Back to Overview',
    },
    nl: {
      badge: 'Fase 2 van 3',
      title: 'Correctieve Zorg',
      subtitle: 'Samen Werken aan Optimale Gezondheid',
      intro: 'Tijdens de correctieve fase werken we samen om de onderliggende structurele problemen aan te pakken die uw klachten veroorzaakten — niet alleen de pijn zelf.',
      p1: 'Bezoeken zijn minder frequent dan tijdens de Verlichtingszorg. Naast chiropractische aanpassingen zal Dr. Jahani specifieke oefeningen en rekoefeningen aanbevelen ter ondersteuning van uw herstel en ter versterking van de spieren rondom uw wervelkolom.',
      expectTitle: 'Wat u tijdens deze fase kunt verwachten:',
      expectItems: [
        'Minder aanpassingen per week vergeleken met de Verlichtingszorg',
        'Voorgeschreven thuisoefeningen en rekoefeningen afgestemd op uw conditie',
        'Lichte tijdelijke opflakkeringen van klachten kunnen soms voorkomen — dit is normaal en tijdelijk',
        'De duur kan variëren van een paar maanden tot een paar jaar, afhankelijk van de ernst en de leeftijd van het probleem',
      ],
      warningTitle: 'Belangrijke waarschuwing:',
      warningText: 'Veel patiënten stoppen met de behandeling zodra de pijn verdwijnt — maar dit vergroot de kans op terugkeer van het probleem aanzienlijk. Vroegtijdig stoppen met zorg is een van de meest voorkomende redenen waarom patiënten maanden of jaren later met dezelfde klacht bij ons terugkomen.',
      nextBtn: 'Volgende: Fase 3 — Welzijnszorg →',
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

          <div className="space-y-6 text-[#403F3F]">
            <div className="bg-[#45321A] text-white rounded-2xl p-8">
              <p className="text-white/90 leading-relaxed text-lg">{c.intro}</p>
            </div>

            <p className="leading-relaxed">{c.p1}</p>

            <div className="bg-[#F6F6F6] rounded-2xl p-6">
              <h3 className="text-[#191919] font-bold text-lg mb-3">{c.expectTitle}</h3>
              <ul className="space-y-3">
                {c.expectItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5 fill-current">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h3 className="font-bold text-amber-900 mb-2">{c.warningTitle}</h3>
              <p className="text-amber-800 text-sm leading-relaxed">{c.warningText}</p>
            </div>

            <div className="flex gap-4 mt-8">
              <Link href={`/${language}/new-patient-center/what-to-expect/phase-3-wellness-care`} className="bg-[#45321A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5a4228] transition-colors text-sm">
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
