import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/sportblessures.json';

export const metadata: Metadata = {
  title: 'Sportblessures Behandeling Amsterdam',
  description: 'Sportblessure? Health4Life Chiropractic behandelt blessures door sport effectief. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/sportblessures' },
  openGraph: {
    title: 'Sportblessures Behandeling Amsterdam',
    description: 'Sportblessure? Health4Life Chiropractic behandelt blessures door sport effectief. Maasstraat 103 Amsterdam Zuid. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/sportblessures',
  },
};

export default function SportblessuresPage() {
  return <KlachtenTemplate content={content} />;
}
