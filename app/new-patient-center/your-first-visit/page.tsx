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

const steps = [
  {
    num: '01',
    title: 'Patient Forms',
    desc: 'Complete your new patient intake form before arriving. This covers your medical history, current complaints, and relevant personal information. You can download the forms from our Patient Forms page or email them in advance.',
  },
  {
    num: '02',
    title: 'Consultation',
    desc: 'Dr. Jahani will sit down with you to thoroughly discuss your health concerns — how and when they started, their nature, and how they affect your daily life. This is your opportunity to ask questions and clarify anything on the intake form.',
  },
  {
    num: '03',
    title: 'Examination',
    desc: 'A comprehensive neurological, orthopedic, and chiropractic examination is performed. This includes assessments of joint mobility, muscle strength, reflexes, and posture to identify the source of your complaints.',
  },
  {
    num: '04',
    title: 'X-Ray Studies (if needed)',
    desc: 'If clinically indicated, X-rays may be taken to provide a detailed view of your spinal structure and help guide the most accurate and safe treatment plan.',
  },
  {
    num: '05',
    title: 'Report of Findings',
    desc: 'Dr. Jahani will explain his findings in clear, understandable terms — what is causing your problem, what can be done about it, and how long recovery is likely to take.',
  },
  {
    num: '06',
    title: 'Treatment',
    desc: 'Your first treatment begins. Depending on your condition, this may include a spinal adjustment, medical acupuncture, soft-tissue therapy, or a combination. Treatment is always gentle and tailored to your comfort level.',
  },
  {
    num: '07',
    title: 'Wellness Program',
    desc: 'You will receive a personalised wellness program outlining your recommended care schedule, home exercises, postural advice, and nutritional guidance to support your recovery.',
  },
];

export default function YourFirstVisitPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">New Patient Center</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Your First Visit</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Here is exactly what to expect during your first appointment at Health4Life Chiropractic — step by step.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          <div className="space-y-6 mb-14">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 bg-[#F6F6F6] rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-[#45321A] flex items-center justify-center">
                    <span className="text-white font-extrabold text-lg">{step.num}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-[#191919] text-lg mb-2">{step.title}</h3>
                  <p className="text-[#403F3F] leading-relaxed text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 text-center">
            <h3 className="font-bold text-[#191919] text-xl mb-3">Ready to Begin?</h3>
            <p className="text-[#403F3F] mb-6">
              Book your first appointment today. We look forward to meeting you and helping you on your journey to better health.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/#booking" className="bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
                Book Appointment
              </Link>
              <Link href="/patient-forms" className="border border-[#45321A] text-[#45321A] font-semibold px-8 py-4 rounded-full hover:bg-[#45321A]/5 transition-colors">
                Download Patient Forms
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
