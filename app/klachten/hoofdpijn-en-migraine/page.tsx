import type { Metadata } from 'next';
import KlachtenTemplate from '@/components/klachten-template';
import content from '@/content/klachten/hoofdpijn-en-migraine.json';

export const metadata: Metadata = {
  title: 'Hoofdpijn & Migraine Behandeling Amsterdam',
  description: 'Chronische hoofdpijn of migraine? Chiropractie pakt de oorzaak aan bij Health4Life, Maasstraat 103 Amsterdam. Bel 020-673 1800.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/klachten/hoofdpijn-en-migraine' },
  openGraph: {
    title: 'Hoofdpijn & Migraine Behandeling Amsterdam',
    description: 'Chronische hoofdpijn of migraine? Chiropractie pakt de oorzaak aan bij Health4Life, Maasstraat 103 Amsterdam. Bel 020-673 1800.',
    url: 'https://www.amsterdamchiropractic.com/klachten/hoofdpijn-en-migraine',
  },
};

export default function HoofdpijnMigrainePage() {
  return <KlachtenTemplate content={content} />;
}
