import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Over Ons',
  description: 'Meer over Health4Life Chiropractic Amsterdam: onze aanpak, Dr. M. Jahani DC en de behandeltechnieken. Maasstraat 103 Amsterdam Zuid.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/about' },
  openGraph: {
    title: 'Over Ons',
    description: 'Meer over Health4Life Chiropractic Amsterdam: onze aanpak, Dr. M. Jahani DC en de behandeltechnieken. Maasstraat 103 Amsterdam Zuid.',
    url: 'https://www.amsterdamchiropractic.com/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
