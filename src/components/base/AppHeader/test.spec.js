import { render, screen } from '@testing-library/react';
import { BrowserRouter} from "react-router-dom";
import AppHeader from '.';

describe("Should render <AppHeader/>", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <AppHeader />
      </BrowserRouter>
    );
  })
  it('renders app-header', () => {
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
  });
});
