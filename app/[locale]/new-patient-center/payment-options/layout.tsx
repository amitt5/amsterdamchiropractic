import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  const base = 'https://www.amsterdamchiropractic.com';
  return {
    title: isEn ? 'Payment Options | Health4Life Chiropractic' : 'Betalingsopties & Tarieven | Health4Life Chiropractic',
    description: isEn
      ? 'Pricing, insurance coverage and payment options at Health4Life Chiropractic Amsterdam. Maasstraat 103 Amsterdam Zuid.'
      : 'Informatie over tarieven, verzekering en betaalopties bij Health4Life Chiropractic Amsterdam. Maasstraat 103 Amsterdam Zuid.',
    alternates: {
      canonical: `${base}/${locale}/new-patient-center/payment-options`,
      languages: {
        'nl': `${base}/nl/new-patient-center/payment-options`,
        'en': `${base}/en/new-patient-center/payment-options`,
      },
    },
    openGraph: {
      title: isEn ? 'Payment Options | Health4Life Chiropractic' : 'Betalingsopties & Tarieven | Health4Life Chiropractic',
      url: `${base}/${locale}/new-patient-center/payment-options`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
