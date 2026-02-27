import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/artrose-slijtage.json';

export const metadata: Metadata = {
  title: 'Artrose & Slijtage Behandeling Amsterdam',
  description: 'Gewrichtsslijtage of artrose? Chiropractie ondersteunt mobiliteit en vermindert pijn. Health4Life, Maasstraat 103 Amsterdam. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/artrose-slijtage' },
  openGraph: {
    title: 'Artrose & Slijtage Behandeling Amsterdam',
    description: 'Gewrichtsslijtage of artrose? Chiropractie ondersteunt mobiliteit en vermindert pijn. Health4Life, Maasstraat 103 Amsterdam. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/artrose-slijtage',
  },
};

export default function ArtroseSlijtage() {
  return <KlachtenTemplate content={content} />;
}
