'use client';

import { Plus_Jakarta_Sans } from 'next/font/google';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
});

const credentials = [
  { year: '1999', detail: 'Bachelor of Science in Biochemistry — York University, Toronto, Canada' },
  { year: '2003', detail: 'Doctor of Chiropractic — New York Chiropractic College, New York, USA' },
  { year: 'Post-grad', detail: 'Medical Acupuncture — The British Medical Acupuncture Society (BMAS)' },
  { year: 'Post-grad', detail: 'Functional Neurology — Advanced neurological assessment & treatment' },
  { year: '2006', detail: 'Established practice in Amsterdam (full-time since 2012)' },
];

export default function MeetYourDoctorPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">About Your Chiropractor</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-4 text-[#191919]">Meet Your Doctor</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Dr. M. Jahani brings over 20 years of clinical experience and a deep commitment to evidence-based chiropractic care.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-start mb-16">
            {/* Photo */}
            <div className="aspect-square rounded-3xl overflow-hidden bg-[#F6F6F6] shadow-lg">
              <img
                src="/dr-jahani.webp"
                alt="Dr. M. Jahani — Health4Life Chiropractic Amsterdam"
                className="w-full h-full object-cover object-[center_55%]"
              />
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-3xl font-extrabold text-[#191919] mb-2">Dr. M. Jahani, DC</h2>
              <p className="text-[#45321A] font-semibold mb-6">Doctor of Chiropractic · Medical Acupuncturist</p>

              <p className="text-[#403F3F] leading-relaxed mb-4">
                Dr. Jahani was born and raised in Toronto, Canada, and completed his undergraduate studies in Biochemistry at York University in 1999. He then pursued his Doctor of Chiropractic degree at the prestigious New York Chiropractic College, graduating in 2003.
              </p>
              <p className="text-[#403F3F] leading-relaxed mb-4">
                After completing post-graduate training in Medical Acupuncture through the British Medical Acupuncture Society and advanced studies in Functional Neurology, he relocated to Amsterdam and established his practice in 2006 — becoming a full-time Amsterdam chiropractor in 2012.
              </p>
              <p className="text-[#403F3F] leading-relaxed mb-6">
                Dr. Jahani specialises in neuro-based spinal correction, combining chiropractic adjustments with medical acupuncture and soft-tissue therapy for a truly comprehensive approach to musculoskeletal health.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/#booking" className="bg-[#45321A] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#5a4228] transition-colors">
                  Book an Appointment
                </Link>
                <a href="tel:0206731800" className="border border-[#45321A] text-[#45321A] text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#45321A]/5 transition-colors">
                  020-673 1800
                </a>
              </div>
            </div>
          </div>

          {/* Credentials timeline */}
          <div className="bg-[#F6F6F6] rounded-3xl p-8 mb-12">
            <h3 className="text-2xl font-extrabold text-[#191919] mb-8 text-center">Education & Credentials</h3>
            <div className="space-y-5">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-20 flex-shrink-0 text-right">
                    <span className="text-[#45321A] font-bold text-sm">{c.year}</span>
                  </div>
                  <div className="w-px bg-[#45321A]/30 self-stretch mx-2" />
                  <p className="text-[#403F3F] text-sm leading-relaxed flex-1 pt-0.5">{c.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Neuro-Based Spinal Correction', desc: 'Advanced technique addressing the neurological component of spinal misalignment.' },
              { title: 'Medical Acupuncture', desc: 'Western-medical acupuncture integrated with chiropractic care for enhanced results.' },
              { title: 'Soft-Tissue Therapy', desc: 'Deep tissue massage and myofascial release to complement spinal adjustments.' },
            ].map((s, i) => (
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
