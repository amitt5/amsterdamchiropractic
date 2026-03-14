import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Meet Dr. Jahani | Health4Life Chiropractic' : 'Ontmoet Dr. Jahani | Health4Life Chiropractic',
    description: isEn
      ? 'Dr. M. Jahani DC — 20+ years of chiropractic experience, BMAS medical acupuncture, functional neurology. Chiropractor Amsterdam Zuid.'
      : 'Dr. M. Jahani DC — meer dan 20 jaar chiropractische ervaring, BMAS medische acupunctuur, functionele neurologie. Chiropractor Amsterdam Zuid.',
    alternates: {
      canonical: `${base}/${locale}/about/meet-your-doctor`,
      languages: {
        'nl': `${base}/nl/about/meet-your-doctor`,
        'en': `${base}/en/about/meet-your-doctor`,
      },
    },
    openGraph: {
      title: isEn ? 'Meet Dr. Jahani | Health4Life Chiropractic' : 'Ontmoet Dr. Jahani | Health4Life Chiropractic',
      description: isEn
        ? 'Dr. M. Jahani DC — 20+ years of chiropractic experience, BMAS medical acupuncture, functional neurology. Chiropractor Amsterdam Zuid.'
        : 'Dr. M. Jahani DC — meer dan 20 jaar chiropractische ervaring, BMAS medische acupunctuur, functionele neurologie. Chiropractor Amsterdam Zuid.',
      url: `${base}/${locale}/about/meet-your-doctor`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
