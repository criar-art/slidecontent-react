import React from 'react';
import { useTranslation } from "react-i18next";
import pkg from '../../../../package.json';

function AppVersion() {
  const appVersion = pkg.version;
  const reactVersion = pkg.dependencies.react.replace('^', '');
  const { t } = useTranslation();

  return (
    <>
      <p className='react-version' data-testid='react-version'>{ t('version') } React { reactVersion }</p>
      <p className='app-version' data-testid='app-version'>{ t('version') } SlideContent { appVersion }</p>
    </>
  );
}

export default AppVersion;
