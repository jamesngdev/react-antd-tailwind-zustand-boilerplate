import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div>
      <h1>Current Lang: {currentLang}</h1>
      <button type="button" onClick={() => changeLanguage('vi')}>
        vi
      </button>
      <button type="button" onClick={() => changeLanguage('en')}>
        en
      </button>
    </div>
  );
};

export default LanguageSwitcher;
