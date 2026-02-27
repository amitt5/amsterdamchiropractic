import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Betaalopties & Tarieven',
  description: 'Informatie over tarieven, verzekering en betaalopties bij Health4Life Chiropractic Amsterdam. Maasstraat 103 Amsterdam Zuid.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/new-patient-center/payment-options' },
  openGraph: {
    title: 'Betaalopties & Tarieven',
    description: 'Informatie over tarieven, verzekering en betaalopties bij Health4Life Chiropractic Amsterdam. Maasstraat 103 Amsterdam Zuid.',
    url: 'https://www.amsterdamchiropractic.com/new-patient-center/payment-options',
  },
};

export default function PaymentOptionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
