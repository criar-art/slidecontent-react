import { render, screen } from '@testing-library/react';
import { BrowserRouter} from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../i18n';

import AppLogo from '.';

describe("Should render <AppLogo/>", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <AppLogo />
        </I18nextProvider>
      </BrowserRouter>
    );
  })
  it('renders app-logo', () => {
    expect(screen.getByTestId('app-logo')).toBeInTheDocument();
  });
  it('render Logo React', () => {
    expect(screen.getByAltText('Logo React')).toBeInTheDocument();
    expect(screen.getByAltText('Logo React').getAttribute('width')).toBe('150');
  });
});
