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

export default function PaymentOptionsPage() {
  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-[#45321A] text-sm font-semibold uppercase tracking-widest">New Patient Center</span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-[#191919]">Payment Options</h1>
            <p className="text-[#403F3F] max-w-2xl mx-auto leading-relaxed">
              Health4Life Chiropractic believes in the value of wellness care for you and your family — and we have maintained a pricing structure that allows care for all budgets.
            </p>
            <div className="w-20 h-1 bg-[#45321A] mx-auto rounded-full mt-6" />
          </div>

          {/* Insurance */}
          <div className="bg-[#45321A]/5 border border-[#45321A]/20 rounded-2xl p-8 mb-10">
            <h2 className="text-2xl font-extrabold text-[#191919] mb-4">Insurance Coverage</h2>
            <p className="text-[#403F3F] leading-relaxed mb-4">
              Nearly all Dutch health insurers include chiropractic treatment in their supplementary (aanvullende) insurance packages. Coverage typically falls under alternative medicine or movement therapy categories.
            </p>
            <p className="text-[#403F3F] leading-relaxed mb-4">
              <strong>Requirements:</strong> To qualify for reimbursement, the chiropractor must be affiliated with the Netherlands Chiropractic Association (NCA) and registered with the Dutch Chiropractic Foundation (SCN). Dr. Jahani meets both requirements.
            </p>
            <p className="text-[#403F3F] leading-relaxed mb-6">
              We also accept auto accident cases and workers&apos; compensation claims.
            </p>
            <a
              href="https://www.chiropractievergoeding.nl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#45321A] font-semibold hover:underline text-sm"
            >
              Check your coverage at chiropractievergoeding.nl
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            </a>
          </div>

          {/* Pricing table */}
          <div className="mb-10">
            <h2 className="text-2xl font-extrabold text-[#191919] mb-6">Tarieven (Rates)</h2>
            <div className="overflow-x-auto rounded-2xl border border-[#45321A]/15">
              <table className="w-full text-sm">
                <thead className="bg-[#45321A] text-white">
                  <tr>
                    <th className="text-left px-6 py-4 font-semibold">Treatment</th>
                    <th className="text-right px-6 py-4 font-semibold">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#45321A]/10">
                  {[
                    { label: 'First Consultation — Adult (incl. acupuncture + adjustment)', price: '€160' },
                    { label: 'First Consultation — Children (under 12)', price: '€110' },
                    { label: 'Follow-up Chiropractic Consultation', price: '€80' },
                    { label: 'Extended Consultation (Chiropractic + Medical Acupuncture)', price: '€130' },
                    { label: 'Deep Tissue Massage / Therapy — 30 min', price: '€70' },
                    { label: 'Deep Tissue Massage / Therapy — 60 min', price: '€120' },
                    { label: 'Custom Orthopedic Foot Inserts (Foot Levelers)', price: '€480' },
                    { label: 'Back Vitalizer', price: '€120' },
                    { label: 'Water Core Pillow', price: '€150' },
                    { label: 'Neck / Back Air Pillow', price: '€150' },
                    { label: 'High-Tech Foot Scan with Consultation', price: '€120' },
                    { label: 'Treatment Plan Cancellation Fee', price: '€150' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F6F6F6]'}>
                      <td className="px-6 py-3.5 text-[#403F3F]">{row.label}</td>
                      <td className="px-6 py-3.5 text-right font-bold text-[#191919]">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[#403F3F] text-xs mt-3 leading-relaxed">
              Payment is due after each visit. We accept cash and debit card (pin). Receipts are provided for insurance reimbursement.
            </p>
          </div>

          {/* Uninsured / flexible plans */}
          <div className="bg-[#F6F6F6] rounded-2xl p-8 mb-10">
            <h2 className="text-xl font-extrabold text-[#191919] mb-3">Flexible Payment Plans</h2>
            <p className="text-[#403F3F] leading-relaxed">
              For patients without supplemental insurance coverage, we offer flexible payment arrangements and customised family packages. Prevention is always more cost-effective than crisis treatment — we want to make regular care accessible to everyone.
            </p>
            <p className="text-[#403F3F] leading-relaxed mt-3">
              Please speak with our front desk to discuss your options.
            </p>
          </div>

          <div className="text-center">
            <Link href="/#booking" className="inline-flex items-center gap-2 bg-[#45321A] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#5a4228] transition-colors">
              Book Your Appointment
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
