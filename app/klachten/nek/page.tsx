import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/nek.json';

export const metadata: Metadata = {
  title: 'Nekpijn Behandeling Amsterdam',
  description: 'Nekpijn of stijve nek? Health4Life Chiropractic behandelt nekklachten bij de oorzaak. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/nek' },
  openGraph: {
    title: 'Nekpijn Behandeling Amsterdam',
    description: 'Nekpijn of stijve nek? Health4Life Chiropractic behandelt nekklachten bij de oorzaak. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/nek',
  },
};

export default function NekPage() {
  return <KlachtenTemplate content={content} />;
}
