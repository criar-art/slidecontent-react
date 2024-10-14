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

  it('should render Vue.js logo with correct attributes', () => {
    const vueLogo = screen.getByAltText('Vue.js Logo - Link to SlideContent Vue.js');
    expect(vueLogo).toBeInTheDocument();
    expect(vueLogo).toHaveAttribute('src', expect.stringContaining('logo-vue.svg'));
    expect(vueLogo).toHaveAttribute('width', '50');
  });

  it('should render Angular logo with correct attributes', () => {
    const angularLogo = screen.getByAltText('Angular Logo - Link to SlideContent Angular');
    expect(angularLogo).toBeInTheDocument();
    expect(angularLogo).toHaveAttribute('src', expect.stringContaining('logo-angular.svg'));
    expect(angularLogo).toHaveAttribute('width', '150');
  });

  it('should render Ember logo with correct attributes', () => {
    const emberLogo = screen.getByAltText('Ember Logo - Link to SlideContent Ember');
    expect(emberLogo).toBeInTheDocument();
    expect(emberLogo).toHaveAttribute('src', expect.stringContaining('logo-ember.svg'));
    expect(emberLogo).toHaveAttribute('width', '80');
  });

  it('should have correct links with target and rel attributes', () => {
    const vueLink = screen.getByRole('link', { name: /SlideContentVue/i });
    expect(vueLink).toBeInTheDocument();
    expect(vueLink).toHaveAttribute('href', 'https://slidecontent-vuejs.web.app');
    expect(vueLink).toHaveAttribute('target', '_blank');
    expect(vueLink).toHaveAttribute('rel', 'noopener noreferrer');

    const angularLink = screen.getByRole('link', { name: /SlideContentAngular/i });
    expect(angularLink).toBeInTheDocument();
    expect(angularLink).toHaveAttribute('href', 'https://slidecontent-angularjs.web.app');
    expect(angularLink).toHaveAttribute('target', '_blank');
    expect(angularLink).toHaveAttribute('rel', 'noopener noreferrer');

    const emberLink = screen.getByRole('link', { name: /SlideContentEmber/i });
    expect(emberLink).toBeInTheDocument();
    expect(emberLink).toHaveAttribute('href', 'https://slidecontent-ember.web.app');
    expect(emberLink).toHaveAttribute('target', '_blank');
    expect(emberLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
