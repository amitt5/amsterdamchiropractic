import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/zwangerschap.json';

export const metadata: Metadata = {
  title: 'Chiropractie tijdens Zwangerschap Amsterdam',
  description: 'Rugpijn of bekkenklachten tijdens de zwangerschap? Veilige chiropractische zorg bij Health4Life, Maasstraat 103. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/zwangerschap' },
  openGraph: {
    title: 'Chiropractie tijdens Zwangerschap Amsterdam',
    description: 'Rugpijn of bekkenklachten tijdens de zwangerschap? Veilige chiropractische zorg bij Health4Life, Maasstraat 103. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/zwangerschap',
  },
};

export default function ZwangerschapPage() {
  return <KlachtenTemplate content={content} />;
}
