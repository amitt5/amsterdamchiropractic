import type { Metadata } from 'next';

const base = 'https://www.amsterdamchiropractic.com';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    alternates: {
      canonical: `${base}/${locale}/blog`,
      languages: {
        nl: `${base}/nl/blog`,
        en: `${base}/en/blog`,
      },
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
