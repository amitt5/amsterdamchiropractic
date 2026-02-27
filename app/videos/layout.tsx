import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Video's & Uitleg",
  description: 'Bekijk informatieve video\'s over chiropractie en behandelingen bij Health4Life Chiropractic Amsterdam.',
  alternates: { canonical: 'https://www.amsterdamchiropractic.com/videos' },
  openGraph: {
    title: "Video's & Uitleg",
    description: "Bekijk informatieve video's over chiropractie en behandelingen bij Health4Life Chiropractic Amsterdam.",
    url: 'https://www.amsterdamchiropractic.com/videos',
  },
};

export default function VideosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
