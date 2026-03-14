import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Chiropractic Techniques | Health4Life Amsterdam' : 'Chiropractische Technieken | Health4Life Amsterdam',
    description: isEn
      ? 'Evidence-based chiropractic techniques used by Dr. Jahani: neuro-based spinal correction, diversified, Gonstead, activator, SOT, percussor, spinal decompression and more.'
      : 'Evidence-based chiropractische technieken van Dr. Jahani: neurale wervelkolomcorrectie, diversified, Gonstead, activator, SOT, percussor, spinale decompressie en meer.',
    alternates: {
      canonical: `${base}/${locale}/techniques`,
      languages: {
        'nl': `${base}/nl/techniques`,
        'en': `${base}/en/techniques`,
      },
    },
    openGraph: {
      title: isEn ? 'Chiropractic Techniques | Health4Life Amsterdam' : 'Chiropractische Technieken | Health4Life Amsterdam',
      description: isEn
        ? 'Evidence-based chiropractic techniques used by Dr. Jahani: neuro-based spinal correction, diversified, Gonstead, activator, SOT, percussor, spinal decompression and more.'
        : 'Evidence-based chiropractische technieken van Dr. Jahani: neurale wervelkolomcorrectie, diversified, Gonstead, activator, SOT, percussor, spinale decompressie en meer.',
      url: `${base}/${locale}/techniques`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
