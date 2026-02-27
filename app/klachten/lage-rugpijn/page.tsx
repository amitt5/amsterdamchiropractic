import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/lage-rugpijn.json';

export const metadata: Metadata = {
  title: 'Lage Rugpijn Behandeling Amsterdam',
  description: 'Last van lage rugpijn? Health4Life Chiropractic behandelt de oorzaak. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/lage-rugpijn' },
  openGraph: {
    title: 'Lage Rugpijn Behandeling Amsterdam',
    description: 'Last van lage rugpijn? Health4Life Chiropractic behandelt de oorzaak. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/lage-rugpijn',
  },
};

export default function LageRugpijnPage() {
  return <KlachtenTemplate content={content} />;
}
