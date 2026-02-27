import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/kinderen.json';

export const metadata: Metadata = {
  title: 'Chiropractie voor Kinderen Amsterdam',
  description: 'Veilige en zachte chiropractische zorg voor kinderen bij Health4Life. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/kinderen' },
  openGraph: {
    title: 'Chiropractie voor Kinderen Amsterdam',
    description: 'Veilige en zachte chiropractische zorg voor kinderen bij Health4Life. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/kinderen',
  },
};

export default function KinderenPage() {
  return <KlachtenTemplate content={content} />;
}
