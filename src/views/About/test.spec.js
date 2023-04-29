import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

import About from '.';

describe("Should render <About/>", () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <About />
      </I18nextProvider>
    );
  })
  it('renders About', () => {
    expect(screen.getByTestId('view-about')).toBeInTheDocument();
  });
});
