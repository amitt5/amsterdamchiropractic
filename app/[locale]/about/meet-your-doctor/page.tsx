'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useLanguage } from '@/contexts/language-context';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const credentials = [
  { year: '1999', detail: 'Bachelor of Science in Biochemistry — York University, Toronto, Canada' },
  { year: '2003', detail: 'Doctor of Chiropractic — New York Chiropractic College, New York, USA' },
  { year: 'Post-grad', detail: 'Medical Acupuncture — The British Medical Acupuncture Society (BMAS)' },
  { year: 'Post-grad', detail: 'Functional Neurology — 3-year post-graduate specialisation in advanced neurological assessment & treatment' },
  { year: '2006', detail: 'Established practice in Amsterdam (full-time since 2012)' },
];

export default function MeetYourDoctorPage() {
  const { language } = useLanguage();

  const t = {
    en: {
      badge: 'About Your Neuro-Based Chiropractor',
      h1: 'Meet Your Doctor',
      intro: 'Dr. M. Jahani brings 20+ years of clinical experience across the US, Canada, and Europe — specialising in neuro-based chiropractic, BMAS-certified medical acupuncture, and functional neurology.',
      qualifications: 'Doctor of Chiropractic · Medical Acupuncturist · BMAS · Functional Neurology',
      bio1: 'Dr. Jahani was born and raised in Toronto, Canada, and completed his undergraduate studies in Biochemistry at York University in 1999. He then pursued his Doctor of Chiropractic degree at the prestigious New York Chiropractic College, graduating in 2003.',
      bio2: 'After completing post-graduate training in Medical Acupuncture through the British Medical Acupuncture Society and advanced studies in Functional Neurology, he relocated to Amsterdam and established his practice in 2006 — becoming a full-time Amsterdam chiropractor in 2012.',
      bio3: 'Dr. Jahani specialises in neuro-based chiropractic, combining BMAS-certified medical acupuncture, functional neurology, and soft-tissue therapy for a truly comprehensive approach to musculoskeletal and neurological health.',
      bookBtn: 'Book an Appointment',
      credentialsTitle: 'Education & Credentials',
      apartTitle: 'What Sets Us Apart',
      cards: [
        {
          num: '01',
          title: 'Functional Neurology',
          sub: '3-Year Post-Graduate Specialisation',
          desc: 'Advanced training in neurological assessment and treatment allows Dr. Jahani to identify and correct the root neurological cause of pain — not just the symptoms.',
        },
        {
          num: '02',
          title: 'Medical Acupuncture',
          sub: 'Certified by The British Medical Acupuncture Society (BMAS)',
          desc: 'BMAS certification is the gold standard in Western medical acupuncture. Dr. Jahani integrates acupuncture directly with chiropractic care for enhanced, lasting results.',
        },
        {
          num: '03',
          title: '20+ Years of Experience',
          sub: 'American, Canadian & European Clinical Practice',
          desc: 'Decades of practice across three continents means Dr. Jahani has encountered — and successfully treated — the full spectrum of complex and chronic musculoskeletal conditions.',
        },
      ],
      specialties: [
        { title: 'Neuro-Based Spinal Correction', desc: 'Advanced technique addressing the neurological component of spinal misalignment.' },
        { title: 'Medical Acupuncture', desc: 'Western-medical acupuncture integrated with chiropractic care for enhanced results.' },
        { title: 'Soft-Tissue Therapy', desc: 'Deep tissue massage and myofascial release to complement spinal adjustments.' },
      ],
    },
    nl: {
      badge: 'Over Uw Neurale Chiropractor',
      h1: 'Ontmoet Uw Arts',
      intro: 'Dr. M. Jahani heeft meer dan 20 jaar klinische ervaring in de VS, Canada en Europa — gespecialiseerd in neurale chiropractie, BMAS-gecertificeerde medische acupunctuur en functionele neurologie.',
      qualifications: 'Doctor of Chiropractic · Medical Acupuncturist · BMAS · Functional Neurology',
      bio1: 'Dr. Jahani werd geboren en getogen in Toronto, Canada, en studeerde biochemie aan de York University in 1999. Vervolgens behaalde hij zijn Doctor of Chiropractic aan het gerenommeerde New York Chiropractic College in 2003.',
      bio2: 'Na een postdoctorale opleiding in medische acupunctuur via de British Medical Acupuncture Society en gevorderde studies in functionele neurologie verhuisde hij naar Amsterdam, waar hij zijn praktijk in 2006 opende — en in 2012 fulltime chiropractor in Amsterdam werd.',
      bio3: 'Dr. Jahani is gespecialiseerd in neurale chiropractie en combineert BMAS-gecertificeerde medische acupunctuur, functionele neurologie en zachte weefseltechnieken voor een echt uitgebreide benadering van musculoskeletale en neurologische gezondheid.',
      bookBtn: 'Afspraak Maken',
      credentialsTitle: 'Opleiding & Kwalificaties',
      apartTitle: 'Wat Ons Onderscheidt',
      cards: [
        {
          num: '01',
          title: 'Functionele Neurologie',
          sub: '3-Jaar Postdoctorale Specialisatie',
          desc: 'Geavanceerde training in neurologische beoordeling en behandeling stelt Dr. Jahani in staat de neurologische oorzaak van pijn te identificeren en te corrigeren — niet alleen de symptomen.',
        },
        {
          num: '02',
          title: 'Medical Acupuncture',
          sub: 'Certified by The British Medical Acupuncture Society (BMAS)',
          desc: 'BMAS-certificering is de gouden standaard in westerse medische acupunctuur. Dr. Jahani integreert acupunctuur rechtstreeks met chiropractische zorg voor verbeterde, blijvende resultaten.',
        },
        {
          num: '03',
          title: '20+ Jaar Ervaring',
          sub: 'Amerikaanse, Canadese & Europese Klinische Praktijk',
          desc: 'Tientallen jaren praktijk op drie continenten betekent dat Dr. Jahani het volledige spectrum van complexe en chronische musculoskeletale aandoeningen heeft ontmoet — en succesvol behandeld.',
        },
      ],
      specialties: [
        { title: 'Neuro-Based Spinal Correction', desc: 'Geavanceerde techniek die de neurologische component van wervelkolomverkeerde uitlijning aanpakt.' },
        { title: 'Medical Acupuncture', desc: 'Westerse medische acupunctuur geïntegreerd met chiropractische zorg voor verbeterde resultaten.' },
        { title: 'Soft-Tissue Therapy', desc: 'Diepe weefselmassage en myofasciale ontspanning als aanvulling op wervelkolomaanpassingen.' },
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
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 text-[#191919]">{c.h1}</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              {c.intro}
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start mb-16">
            {/* Photo */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#F6F6F6] shadow-lg">
              <Image
                src="/dr-jahani.webp"
                alt="Dr. M. Jahani — Health4Life Chiropractic Amsterdam"
                fill
                priority
                className="object-cover object-[center_55%]"
              />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#191919] mb-2">Dr. M. Jahani, DC</h2>
              <p className="text-[#45321A] font-semibold mb-6">{c.qualifications}</p>

              <p className="text-[#403F3F] leading-relaxed mb-4">
                {c.bio1}
              </p>
              <p className="text-[#403F3F] leading-relaxed mb-4">
                {c.bio2}
              </p>
              <p className="text-[#403F3F] leading-relaxed mb-6">
                {c.bio3}
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href={`/${language}#booking`} className="bg-[#45321A] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#5a4228] transition-colors">
                  {c.bookBtn}
                </Link>
                <a href="tel:0206731800" className="border border-[#45321A] text-[#45321A] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#45321A]/5 transition-colors">
                  020-673 1800
                </a>
              </div>
            </div>
          </div>

          {/* Credentials timeline */}
          <div className="bg-[#F6F6F6] rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-extrabold text-[#191919] mb-8 text-center">{c.credentialsTitle}</h3>
            <div className="space-y-5">
              {credentials.map((cred, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="text-[#45321A] font-bold text-sm">{cred.year}</span>
                  </div>
                  <div className="w-px bg-[#45321A]/30 self-stretch mx-2" />
                  <p className="text-[#403F3F] text-sm leading-relaxed flex-1 pt-0.5">{cred.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="mb-12">
            <h3 className="text-2xl font-extrabold text-[#191919] mb-8 text-center">{c.apartTitle}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {c.cards.map((item, i) => (
                <div key={i} className="bg-[#45321A] text-white rounded-2xl p-7 flex flex-col">
                  <span className="text-white/40 font-bold text-3xl mb-4 leading-none">{item.num}</span>
                  <h4 className="font-extrabold text-lg mb-1">{item.title}</h4>
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mb-3">{item.sub}</p>
                  <p className="text-white/85 text-sm leading-relaxed flex-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div className="grid md:grid-cols-3 gap-6">
            {c.specialties.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-[#45321A]/10 hover:shadow-md transition-shadow">
                <h4 className="font-bold text-[#191919] mb-2">{s.title}</h4>
                <p className="text-[#403F3F] text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
