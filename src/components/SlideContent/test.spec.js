import { render, screen } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

import SlideContent from '.';
import SlideItem from '../SlideItem';
import ermelino from './../../assets/ermelino.jpg';
import faveladascriancas from './../../assets/faveladascriancas.jpg';

describe("Should render <SlideContent/>", () => {
  it('renders simple slide', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <SlideContent>
          <SlideItem title="Ermelino Matarazzo" img={ermelino} url="https://github.com/lucasferreiralimax/slidecontent-react" target="_blank" />
          <SlideItem title="Fé em Deus" img={faveladascriancas} url="https://github.com/lucasferreiralimax/slidecontent-react" target="_blank" className="favela" />
        </SlideContent>
      </I18nextProvider>
    );

    const items = screen.getAllByTestId('link-item');

    for(let item of items) {
      expect(item.href).toBe('https://github.com/lucasferreiralimax/slidecontent-react')
      expect(item.target).toBe('_blank')
      let { alt } = item.querySelector('img')
      if(alt == 'Fé em Deus') {
        expect(alt).toBe('Fé em Deus')
        expect(item.parentElement.classList[0]).toBe('favela')
      } else {
        expect(alt).toBe('Ermelino Matarazzo')
      }
    }
  });
});
