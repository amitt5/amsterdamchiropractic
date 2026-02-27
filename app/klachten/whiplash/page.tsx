import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/whiplash.json';

export const metadata: Metadata = {
  title: 'Whiplash Behandeling Amsterdam',
  description: 'Whiplash na een ongeluk? Gerichte chiropractische behandeling bij Health4Life, Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/whiplash' },
  openGraph: {
    title: 'Whiplash Behandeling Amsterdam',
    description: 'Whiplash na een ongeluk? Gerichte chiropractische behandeling bij Health4Life, Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/whiplash',
  },
};

export default function WhiplashPage() {
  return <KlachtenTemplate content={content} />;
}
