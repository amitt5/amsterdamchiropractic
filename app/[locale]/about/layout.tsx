import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'About Us | Health4Life Chiropractic' : 'Over Ons | Health4Life Chiropractic',
    description: isEn
      ? 'Learn about Health4Life Chiropractic Amsterdam — our philosophy, Dr. M. Jahani DC, and neuro-based treatment approach. Maasstraat 103 Amsterdam Zuid.'
      : 'Meer over Health4Life Chiropractic Amsterdam: onze aanpak, Dr. M. Jahani DC en de behandeltechnieken. Maasstraat 103 Amsterdam Zuid.',
    alternates: {
      canonical: `${base}/${locale}/about`,
      languages: {
        'nl': `${base}/nl/about`,
        'en': `${base}/en/about`,
      },
    },
    openGraph: {
      title: isEn ? 'About Us | Health4Life Chiropractic' : 'Over Ons | Health4Life Chiropractic',
      description: isEn
        ? 'Learn about Health4Life Chiropractic Amsterdam — our philosophy, Dr. M. Jahani DC, and neuro-based treatment approach. Maasstraat 103 Amsterdam Zuid.'
        : 'Meer over Health4Life Chiropractic Amsterdam: onze aanpak, Dr. M. Jahani DC en de behandeltechnieken. Maasstraat 103 Amsterdam Zuid.',
      url: `${base}/${locale}/about`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
