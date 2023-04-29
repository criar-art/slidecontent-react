import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

import Home from '.';

describe("Should render <Home/>", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Home />
      </I18nextProvider>
    );
  })
  it('renders Home', () => {
    expect(screen.getByTestId('view-home')).toBeInTheDocument();
  });
});
