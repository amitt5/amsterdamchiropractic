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

export default function HealthResourcesPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'Education',
      title: 'Health Resources',
      subtitle: 'The following resources have been assembled to provide you with more chiropractic wellness care information available on the internet.',
      ctaTitle: 'Need Personalized Guidance?',
      ctaDesc: 'Our team is here to answer your questions and provide tailored advice for your specific health concerns.',
      ctaBtn: 'Schedule a Consultation',
      categories: [
        {
          title: 'Chiropractic Services',
          description: 'Directories, professional organisations, and wellness coaching resources.',
          links: [
            { label: 'Chiropractic Directory', href: 'https://www.chiropractic.nl', external: true },
            { label: 'Netherlands Chiropractic Association (NCA)', href: 'https://www.chiropractors.nl', external: true },
            { label: 'Dutch Chiropractic Foundation (SCN)', href: 'https://www.stichtingchiropractienederland.nl', external: true },
            { label: 'Wellness Coaching Resources', href: 'https://www.chiropractievergoeding.nl', external: true },
          ],
        },
        {
          title: 'Health & Wellness — Kids',
          description: "Resources focused on children's health, development, and wellness.",
          links: [
            { label: 'Wellness for Kids', href: '#', external: false },
            { label: 'Pediatric Chiropractic Care', href: `/${language}/klachten/kinderen`, external: false },
            { label: "Baby's & KISS Syndrome", href: `/${language}/klachten/baby-s`, external: false },
          ],
        },
        {
          title: 'Exercise & Nutrition',
          description: 'Guidance on physical activity and diet to support your spinal health.',
          links: [
            { label: 'Exercise & Nutrition Guidelines', href: '#', external: false },
            { label: 'Fitness Centres Amsterdam', href: '#', external: false },
            { label: 'Posture Correction Exercises', href: '#', external: false },
          ],
        },
        {
          title: 'Complementary Therapies',
          description: 'Explore integrative and complementary health approaches we work alongside.',
          links: [
            { label: 'Acupuncture Information', href: '#', external: false },
            { label: 'Pilates & Core Strength', href: '#', external: false },
            { label: 'Yoga for Back Pain', href: '#', external: false },
            { label: 'Naturopathy', href: '#', external: false },
            { label: 'Homeopathy', href: '#', external: false },
          ],
        },
        {
          title: 'Mind & Lifestyle',
          description: 'Resources for mental well-being, stress management, and life coaching.',
          links: [
            { label: 'Thought & Meditation', href: '#', external: false },
            { label: 'Life Coaching', href: '#', external: false },
            { label: 'Stress & Tension Headaches', href: `/${language}/klachten/hoofdpijn-en-migraine`, external: false },
          ],
        },
        {
          title: 'Dental & Other Health',
          description: 'Additional health resources including dentistry and jaw joint concerns.',
          links: [
            { label: 'Dentistry & Jaw Joint (TMJ)', href: '#', external: false },
            { label: 'Chiropractic & Dentistry Connection', href: '#', external: false },
          ],
        },
      ],
    },
    nl: {
      badge: 'Educatie',
      title: 'Gezondheidsinfo',
      subtitle: 'De volgende bronnen zijn samengesteld om u meer informatie te bieden over chiropractische welzijnszorg die beschikbaar is op het internet.',
      ctaTitle: 'Persoonlijk Advies Nodig?',
      ctaDesc: 'Ons team staat klaar om uw vragen te beantwoorden en op maat gemaakt advies te geven voor uw specifieke gezondheidsvragen.',
      ctaBtn: 'Plan een Consultatie',
      categories: [
        {
          title: 'Chiropractische Diensten',
          description: 'Directories, beroepsorganisaties en welzijnscoachingbronnen.',
          links: [
            { label: 'Chiropractie Directory', href: 'https://www.chiropractic.nl', external: true },
            { label: 'Nederlandse Chiropractors Associatie (NCA)', href: 'https://www.chiropractors.nl', external: true },
            { label: 'Stichting Chiropractie Nederland (SCN)', href: 'https://www.stichtingchiropractienederland.nl', external: true },
            { label: 'Verzekeringsinformatie Chiropractie', href: 'https://www.chiropractievergoeding.nl', external: true },
          ],
        },
        {
          title: 'Gezondheid & Welzijn — Kinderen',
          description: 'Bronnen gericht op de gezondheid, ontwikkeling en het welzijn van kinderen.',
          links: [
            { label: 'Welzijn voor Kinderen', href: '#', external: false },
            { label: 'Pediatrische Chiropractische Zorg', href: `/${language}/klachten/kinderen`, external: false },
            { label: "Baby's & KISS-syndroom", href: `/${language}/klachten/baby-s`, external: false },
          ],
        },
        {
          title: 'Beweging & Voeding',
          description: 'Richtlijnen voor lichaamsbeweging en voeding ter ondersteuning van uw wervelgezondheid.',
          links: [
            { label: 'Bewegings- en Voedingsrichtlijnen', href: '#', external: false },
            { label: 'Fitnesscentra Amsterdam', href: '#', external: false },
            { label: 'Houdingscorrectie Oefeningen', href: '#', external: false },
          ],
        },
        {
          title: 'Aanvullende Therapieën',
          description: 'Ontdek integratieve en aanvullende gezondheidsbenaderingen waarmee wij samenwerken.',
          links: [
            { label: 'Informatie over Acupunctuur', href: '#', external: false },
            { label: 'Pilates & Kernkracht', href: '#', external: false },
            { label: 'Yoga bij Rugpijn', href: '#', external: false },
            { label: 'Naturopathie', href: '#', external: false },
            { label: 'Homeopathie', href: '#', external: false },
          ],
        },
        {
          title: 'Geest & Levensstijl',
          description: 'Bronnen voor mentaal welzijn, stressmanagement en levenscoaching.',
          links: [
            { label: 'Gedachten & Meditatie', href: '#', external: false },
            { label: 'Levenscoaching', href: '#', external: false },
            { label: 'Stress & Spanningshoofdpijn', href: `/${language}/klachten/hoofdpijn-en-migraine`, external: false },
          ],
        },
        {
          title: 'Tandheelkunde & Overige Gezondheid',
          description: 'Aanvullende gezondheidsinformatie over tandheelkunde en kaakgewrichtsproblemen.',
          links: [
            { label: 'Tandheelkunde & Kaakgewricht (TMJ)', href: '#', external: false },
            { label: 'Verband Chiropractie & Tandheelkunde', href: '#', external: false },
          ],
        },
      ],
    },
  };

  const c = t[language];

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">{c.badge}</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">{c.title}</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.categories.map((category, idx) => (
              <div key={idx} className="bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-[#45321A] flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="white" strokeWidth="2">
                    <path d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#191919] text-lg mb-2">{category.title}</h3>
                <p className="text-[#403F3F] text-sm mb-4 leading-relaxed">{category.description}</p>
                <ul className="space-y-2">
                  {category.links.map((link, i) => (
                    <li key={i}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[#45321A] hover:underline flex items-center gap-1"
                        >
                          {link.label}
                          <svg viewBox="0 0 20 20" className="w-3 h-3 fill-current opacity-70">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-[#45321A] hover:underline flex items-center gap-1"
                        >
                          {link.label}
                          <svg viewBox="0 0 20 20" className="w-3 h-3 fill-current opacity-70">
                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"/>
                          </svg>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[#191919] text-xl mb-3">{c.ctaTitle}</h3>
            <p className="text-[#403F3F] mb-6 max-w-2xl mx-auto">{c.ctaDesc}</p>
            <Link href={`/${language}#booking`} className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
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
