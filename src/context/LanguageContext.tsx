import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Home page
    'home.bio': 'college and self-taught engineer focused on software, data, ai, and investing. currently working on frontend, backend, database, computer vision, trading, and machine learning technologies.',
    'home.latestProject': 'latest project',
    'home.latestWriting': 'latest writing',
    'home.email': 'email',
    'home.copied': 'copied!',

    // Navbar
    'nav.home': 'HOME',
    'nav.projects': 'PROJECTS',
    'nav.blog': 'BLOG',

    // Sidebar
    'sidebar.home': 'home',
    'sidebar.projects': 'projects',
    'sidebar.writing': 'writing',
    'sidebar.seeMore': 'see more...',
  },
  es: {
    // Home page
    'home.bio': 'ingeniero universitario y autodidacta enfocado en software, datos, ia e inversiones. actualmente trabajando en tecnologías de frontend, backend, bases de datos, visión por computadora, trading y aprendizaje automático.',
    'home.latestProject': 'proyecto más reciente',
    'home.latestWriting': 'escrito más reciente',
    'home.email': 'correo',
    'home.copied': '¡copiado!',

    // Navbar
    'nav.home': 'INICIO',
    'nav.projects': 'PROYECTOS',
    'nav.blog': 'BLOG',

    // Sidebar
    'sidebar.home': 'inicio',
    'sidebar.projects': 'proyectos',
    'sidebar.writing': 'escritos',
    'sidebar.seeMore': 'ver más...',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
