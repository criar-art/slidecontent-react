import React from 'react';
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import './style.scss';
import logo from '../../../assets/logo.svg';

function AppLogo() {
  const { t } = useTranslation();
  return (
    <NavLink className="app-logo" data-testid="app-logo" to="/">
      <h1>
        {t('title')}
      </h1>
      <img width="150" src={logo} alt="Logo React" />
    </NavLink>
  );
}

export default AppLogo;
