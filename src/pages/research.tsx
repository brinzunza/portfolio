import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Research: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-[25vh] px-8 md:px-16">
      <div className="max-w-2xl">
        <h1 className="text-2xl md:text-3xl font-roundel mb-6">{t('sidebar.research')}</h1>
        <p className="text-sm md:text-base text-black/50 leading-relaxed">Implementing soon.</p>
      </div>
    </div>
  );
};

export default Research;
