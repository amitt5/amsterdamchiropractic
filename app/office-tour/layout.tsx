import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kantoor Tour',
  description: 'Bekijk onze praktijk bij Health4Life Chiropractic, Maasstraat 103 Amsterdam Zuid. Moderne behandelkamers in een rustige omgeving.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/office-tour' },
  openGraph: {
    title: 'Kantoor Tour',
    description: 'Bekijk onze praktijk bij Health4Life Chiropractic, Maasstraat 103 Amsterdam Zuid. Moderne behandelkamers in een rustige omgeving.',
    url: 'https://www.amsterdamchiropractic.com/office-tour',
  },
};

export default function OfficeTourLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
