import { render, screen } from '@testing-library/react';
import AppLanguage from './';

describe("Should render <AppLanguage/>", () => {
  it('renders simple', () => {
    render(<AppLanguage />);

    const language = screen.getByTestId('language');
    expect(language).toBeInTheDocument()
  });
});
