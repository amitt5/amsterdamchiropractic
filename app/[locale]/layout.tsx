import { LanguageProvider } from '@/contexts/language-context';
import CookieBanner from '@/components/cookie-banner';
import { ReactNode } from 'react';

type Language = 'en' | 'nl';

export function generateStaticParams() {
  return [{ locale: 'nl' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Language = locale === 'en' ? 'en' : 'nl';

  return (
    <LanguageProvider initialLanguage={lang}>
      {children}
      <CookieBanner />
    </LanguageProvider>
  );
}
