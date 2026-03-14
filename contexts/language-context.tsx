'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Language = 'en' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'nl',
  setLanguage: () => {},
});

export function LanguageProvider({
  children,
  initialLanguage = 'nl',
}: {
  children: ReactNode;
  initialLanguage?: Language;
}) {
  const [language] = useState<Language>(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = (lang: Language) => {
    const newPath = pathname.replace(/^\/(nl|en)/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
