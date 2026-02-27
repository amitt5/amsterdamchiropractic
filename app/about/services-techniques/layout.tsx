import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diensten & Technieken',
  description: 'Overzicht van alle chiropractische diensten en technieken bij Health4Life Amsterdam: manipulatie, acupunctuur, dry needling en meer.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/about/services-techniques' },
  openGraph: {
    title: 'Diensten & Technieken',
    description: 'Overzicht van alle chiropractische diensten en technieken bij Health4Life Amsterdam: manipulatie, acupunctuur, dry needling en meer.',
    url: 'https://www.amsterdamchiropractic.com/about/services-techniques',
  },
};

export default function ServicesTechniquesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
