import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vacatures',
  description: 'Werken bij Health4Life Chiropractic Amsterdam? Bekijk onze actuele vacatures. Maasstraat 103 Amsterdam Zuid.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/vacatures' },
  openGraph: {
    title: 'Vacatures',
    description: 'Werken bij Health4Life Chiropractic Amsterdam? Bekijk onze actuele vacatures. Maasstraat 103 Amsterdam Zuid.',
    url: 'https://www.amsterdamchiropractic.com/vacatures',
  },
};

export default function VacaturesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
