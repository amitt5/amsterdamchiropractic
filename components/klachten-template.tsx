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

interface Section {
  heading?: string;
  paragraphs?: string[];
  listItems?: string[];
  listStyle?: string;
  twoColumns?: boolean;
  noteBelow?: string;
}

interface CausesSection {
  heading: string;
  intro?: string;
  geleidelijkHeading: string;
  geleidelijkItems: string[];
  plotselingHeading: string;
  plotselingItems: string[];
}

export interface KlachtenContent {
  title: string;
  highlightBox?: string;
  intro?: string;
  sections: Section[];
  causesSection?: CausesSection;
  sidebarCtaSubtext: string;
  sidebarCtaButtonLabel: string;
  relatedConditions: { label: string; href: string }[];
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#45321A] fill-current flex-shrink-0 mt-0.5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

function renderListItem(item: string, idx: number, style: string | undefined) {
  if (style === 'bullets') {
    return (
      <li key={idx} className="flex items-start gap-2">
        <span className="text-[#45321A] font-bold mt-0.5">·</span> {item}
      </li>
    );
  }
  if (style === 'checks') {
    return (
      <li key={idx} className="flex items-start gap-2 text-sm text-[#403F3F]">
        <CheckIcon />
        {item}
      </li>
    );
  }
  if (style === 'numbered') {
    return (
      <li key={idx} className="flex items-start gap-2">
        <span className="w-5 h-5 rounded-full bg-[#45321A]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-[#45321A] text-xs font-bold">{idx + 1}</span>
        </span>
        <span>{item}</span>
      </li>
    );
  }
  return null;
}

function renderSection(section: Section, idx: number) {
  const hasList = section.listItems && section.listItems.length > 0;
  const listClass = section.twoColumns ? 'grid grid-cols-2 gap-2' : 'space-y-2';

  return (
    <div key={idx}>
      {section.heading && (
        <h2 className="text-2xl font-extrabold text-[#191919] mb-3">{section.heading}</h2>
      )}
      {section.paragraphs?.map((para, i) => (
        <p key={i} className="text-[#403F3F] leading-relaxed mb-3">{para}</p>
      ))}
      {hasList && (
        <ul className={listClass}>
          {section.listItems!.map((item, i) => renderListItem(item, i, section.listStyle))}
        </ul>
      )}
      {section.noteBelow && (
        <p className="text-[#403F3F] text-sm mt-4 leading-relaxed">{section.noteBelow}</p>
      )}
    </div>
  );
}

export default function KlachtenTemplate({ content }: { content: KlachtenContent }) {
  const causes = content.causesSection;
  const hasCauses = causes && causes.heading;

  return (
    <div className={`${plusJakarta.variable} font-[family-name:var(--font-jakarta)] text-[#191919] bg-white min-h-screen`}>
      <Navigation />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-4">
            <Link href="/klachten" className="text-[#45321A] text-sm hover:underline flex items-center gap-1">
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current rotate-180">
                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
              </svg>
              Alle klachten
            </Link>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#191919]">{content.title}</h1>
          <div className="w-20 h-1 bg-[#45321A] rounded-full mb-10" />

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2 space-y-8">

              {/* Highlight box (artrose-style featured quote) */}
              {content.highlightBox && (
                <div className="bg-[#45321A] text-white rounded-2xl p-6">
                  <p className="text-white/90 leading-relaxed text-lg font-medium">
                    {content.highlightBox}
                  </p>
                </div>
              )}

              {/* Intro paragraph (no heading) */}
              {content.intro && (
                <div>
                  <p className="text-[#403F3F] leading-relaxed">{content.intro}</p>
                </div>
              )}

              {/* Named sections */}
              {content.sections.map((section, idx) => renderSection(section, idx))}

              {/* Two-column causes section */}
              {hasCauses && (
                <div>
                  <h2 className="text-2xl font-extrabold text-[#191919] mb-4">{causes!.heading}</h2>
                  {causes!.intro && (
                    <p className="text-[#403F3F] leading-relaxed mb-4">{causes!.intro}</p>
                  )}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {causes!.geleidelijkItems.length > 0 && (
                      <div className="bg-[#F6F6F6] rounded-xl p-5">
                        <h3 className="font-bold text-[#191919] mb-3">{causes!.geleidelijkHeading}</h3>
                        <ul className="space-y-2 text-sm text-[#403F3F]">
                          {causes!.geleidelijkItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#45321A] font-bold mt-0.5">·</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {causes!.plotselingItems.length > 0 && (
                      <div className="bg-[#F6F6F6] rounded-xl p-5">
                        <h3 className="font-bold text-[#191919] mb-3">{causes!.plotselingHeading}</h3>
                        <ul className="space-y-2 text-sm text-[#403F3F]">
                          {causes!.plotselingItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#45321A] font-bold mt-0.5">·</span> {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#45321A] text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-3">Maak een afspraak</h3>
                <p className="text-white/80 text-sm mb-4">{content.sidebarCtaSubtext}</p>
                <Link
                  href="/#booking"
                  className="block bg-white text-[#45321A] font-semibold text-sm text-center px-4 py-3 rounded-full hover:bg-white/90 transition-colors"
                >
                  {content.sidebarCtaButtonLabel}
                </Link>
                <a href="tel:0206731800" className="block text-center text-white/80 text-sm mt-3 hover:text-white">
                  020-673 1800
                </a>
              </div>

              <div className="bg-[#F6F6F6] rounded-2xl p-6">
                <h3 className="font-semibold text-[#191919] mb-3">Openingstijden</h3>
                <ul className="text-sm text-[#403F3F] space-y-1">
                  <li>Ma – Vr: 10:00 – 17:00</li>
                  <li>Za: 10:00 – 14:00</li>
                  <li>Zo: Gesloten</li>
                </ul>
                <p className="text-sm text-[#403F3F] mt-3">
                  Maasstraat 103<br />1078 HH Amsterdam
                </p>
              </div>

              {content.relatedConditions.length > 0 && (
                <div className="bg-[#F6F6F6] rounded-2xl p-6">
                  <h3 className="font-semibold text-[#191919] mb-3">Gerelateerde klachten</h3>
                  <ul className="space-y-2">
                    {content.relatedConditions.map(({ label, href }) => (
                      <li key={href}>
                        <Link href={href} className="text-sm text-[#45321A] hover:underline">
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
