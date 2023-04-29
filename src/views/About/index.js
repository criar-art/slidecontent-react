import React from 'react';
import { useTranslation } from "react-i18next";
import './style.scss'

function About() {
  const { t } = useTranslation();
  return (
    <section className='about' data-testid='view-about'>
      <p>{t('about')}</p>
    </section>
  );
}

export default About;
