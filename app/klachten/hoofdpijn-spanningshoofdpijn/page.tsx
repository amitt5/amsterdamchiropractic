import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/hoofdpijn-spanningshoofdpijn.json';

export const metadata: Metadata = {
  title: 'Spanningshoofdpijn Behandeling Amsterdam',
  description: 'Spanningshoofdpijn door nekspanning? Health4Life Chiropractic behandelt de oorzaak. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/hoofdpijn-spanningshoofdpijn' },
  openGraph: {
    title: 'Spanningshoofdpijn Behandeling Amsterdam',
    description: 'Spanningshoofdpijn door nekspanning? Health4Life Chiropractic behandelt de oorzaak. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/hoofdpijn-spanningshoofdpijn',
  },
};

export default function SpanningshoofdpijnPage() {
  return <KlachtenTemplate content={content} />;
}
