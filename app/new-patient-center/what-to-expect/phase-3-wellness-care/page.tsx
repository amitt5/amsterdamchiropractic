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

export default function Phase3Page() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'Phase 3 of 3',
      title: 'Wellness Care',
      subtitle: 'Maintenance is Key to Healthy Living',
      intro: 'Once your body has fully healed, routine chiropractic care can help ensure that your physical problems do not return — and keep your body in optimal condition.',
      p1: 'Just as you continue to exercise and eat well to sustain the benefits of a healthy lifestyle, it is necessary to continue periodic chiropractic care to ensure the long-term health of your musculoskeletal system.',
      benefitsTitle: 'Benefits of Wellness Care:',
      benefits: [
        'Avoid the return of old aches and pains',
        'Your joints last longer with regular maintenance',
        'Greater ability to engage in the activities you enjoy',
        'Improved overall posture, energy, and well-being',
        'Detect and correct minor issues before they become serious',
      ],
      quote: '"Think of wellness care like servicing your car — you don\'t wait for the engine to break down before you take it in. Regular maintenance keeps everything running smoothly and prevents costly problems later."',
      bookBtn: 'Book an Appointment',
      backBtn: 'Back to Overview',
    },
    nl: {
      badge: 'Fase 3 van 3',
      title: 'Welzijnszorg',
      subtitle: 'Onderhoud is de Sleutel tot Gezond Leven',
      intro: 'Zodra uw lichaam volledig hersteld is, kan routinematige chiropractische zorg ervoor zorgen dat uw fysieke klachten niet terugkeren — en uw lichaam in optimale conditie houden.',
      p1: 'Net zoals u blijft sporten en gezond eet om de voordelen van een gezonde levensstijl te behouden, is het noodzakelijk om periodieke chiropractische zorg te blijven ontvangen voor de langdurige gezondheid van uw bewegingsapparaat.',
      benefitsTitle: 'Voordelen van Welzijnszorg:',
      benefits: [
        'Voorkom de terugkeer van oude pijnen en klachten',
        'Uw gewrichten gaan langer mee met regelmatig onderhoud',
        'Meer mogelijkheden om te genieten van de activiteiten die u leuk vindt',
        'Verbeterde houding, energie en algeheel welzijn',
        'Kleine problemen opsporen en corrigeren voordat ze ernstig worden',
      ],
      quote: '"Zie welzijnszorg als het onderhoud van uw auto — u wacht niet tot de motor kapotgaat voordat u naar de garage gaat. Regelmatig onderhoud houdt alles soepel draaiend en voorkomt kostbare problemen later."',
      bookBtn: 'Afspraak Boeken',
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
              <h3 className="text-[#191919] font-bold text-lg mb-3">{c.benefitsTitle}</h3>
              <ul className="space-y-3">
                {c.benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg viewBox="0 0 20 20" className="w-5 h-5 text-[#45321A] flex-shrink-0 mt-0.5 fill-current">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-6">
              <p className="text-[#403F3F] leading-relaxed italic">{c.quote}</p>
              <p className="text-[#45321A] font-semibold mt-3 text-sm">— Dr. M. Jahani</p>
            </div>

            <div className="flex gap-4 mt-8">
              <Link href="/#booking" className="bg-[#45321A] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#5a4228] transition-colors text-sm">
                {c.bookBtn}
              </Link>
              <Link href="/new-patient-center/what-to-expect" className="border border-[#45321A] text-[#45321A] font-semibold px-6 py-3 rounded-full hover:bg-[#45321A]/5 transition-colors text-sm">
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
