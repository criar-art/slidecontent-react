import React, { useEffect, useCallback } from 'react';

import { useTranslation } from "react-i18next";

import './style.scss';
import '../../../i18n';

function AppLanguage() {
  const { i18n } = useTranslation();
  const languages = ['pt-BR', 'en-US', 'es-ES', 'fr-FR', 'ru-RU', 'zh-CN'];

  const handleLanguage = useCallback(
    (language, event) => {
      document.querySelectorAll('.language button').forEach((item) => {
        item.classList.remove('actived');
      });

      i18n.changeLanguage(language);
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
      if (event) event.target.classList.add('actived');
    },
    [i18n],
  );

  useEffect(() => {
    const lang = localStorage.getItem('language');

    lang
      ? handleLanguage(lang)
      : handleLanguage('pt-BR');

    for(let item of document.querySelectorAll('.language button')) {
      item.textContent === lang
        ? item.classList.add('actived')
        : item.classList.remove('actived');
    }
  }, [handleLanguage]);

  return (
    <section data-testid="language" className="language">
      {languages.map((language) => (
        <button key={language} className={`btn ${language}`} onClick={(e) => handleLanguage(language, e)}>
          <img src={require(`../../../assets/flags/${language}.svg`)} alt={language}/>
          {language}
        </button>
      ))}
    </section>
  );
}

export default AppLanguage;
