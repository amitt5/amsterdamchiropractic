import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Klachten & Behandelingen',
  description: 'Overzicht van alle klachten die Health4Life Chiropractic behandelt: rugpijn, nekpijn, hoofdpijn, hernia, whiplash, sportblessures en meer. Amsterdam Zuid.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten' },
  openGraph: {
    title: 'Klachten & Behandelingen',
    description: 'Overzicht van alle klachten die Health4Life Chiropractic behandelt: rugpijn, nekpijn, hoofdpijn, hernia, whiplash, sportblessures en meer. Amsterdam Zuid.',
    url: 'https://www.amsterdamchiropractic.com/klachten',
  },
};

export default function KlachtenLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
