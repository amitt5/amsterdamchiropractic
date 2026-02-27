import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/hernia.json';

export const metadata: Metadata = {
  title: 'Hernia Behandeling Amsterdam',
  description: 'Hernia in rug of nek? Chiropractische behandeling bij Health4Life, Maasstraat 103 Amsterdam Zuid. Geen operatie nodig. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/hernia' },
  openGraph: {
    title: 'Hernia Behandeling Amsterdam',
    description: 'Hernia in rug of nek? Chiropractische behandeling bij Health4Life, Maasstraat 103 Amsterdam Zuid. Geen operatie nodig. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/hernia',
  },
};

export default function HerniaPage() {
  return <KlachtenTemplate content={content} />;
}
