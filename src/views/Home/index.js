import React from 'react';
import { useTranslation } from "react-i18next";

import './style.scss';

import faveladascriancas from '../../assets/faveladascriancas.jpg';
import ermelino from '../../assets/ermelino.jpg';
import newyork from '../../assets/new-york.jpg';
import motorcycle from '../../assets/motorcycle.jpg';

import SlideContent from '../../components/SlideContent/index.js';
import SlideItem from '../../components/SlideItem/index.js';
import AppSocial from '../../components/base/AppSocial/index.js';

function Home() {
  const { t } = useTranslation();
  return (
    <section className='home' data-testid='view-home'>
      <AppSocial />
      <div className="example first">
        <h2 className="slide-title">
          <svg width="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M315.712 334.4a236.543 236.543 0 0029.136 18.192l14.784-28.384a204.034 204.034 0 01-25.168-15.744L315.712 334.4z"/>
            <path d="M400 144c-57.008 0-118.256 59.52-144 87.664C230.256 203.52 169.008 144 112 144 41.872 144 0 185.872 0 256s41.872 112 112 112c56.72 0 117.616-58.896 143.6-87.216a448.208 448.208 0 0034 32.576l21.184-24a430.251 430.251 0 01-33.6-33.44c26.016-29.088 80.368-80 122.912-80 53.072 0 80 26.912 80 80 0 37.712-13.824 62.4-41.088 73.392l11.968 29.68C490.304 343.184 512 306.576 512 256c0-70.128-41.872-112-112-112zM112 336c-53.072 0-80-26.912-80-80s26.928-80 80-80c42.48 0 96.912 50.928 122.96 80-26.016 29.088-80.384 80-122.96 80z"/>
            <path d="M385.6 334.256l-7.2 31.184A96.446 96.446 0 00400 368c5.344 0 10.432-.224 15.328-.672l-2.944-31.872a81.017 81.017 0 01-26.784-1.2z"/>
          </svg>
          <span>{t('slide_infinity')}</span>
        </h2>
        <SlideContent id="exemplo-1" name="exemplo-1" type="infinite" nav="true" animation={{ 'disabled': true }}>
          <SlideItem
            className="favela"
            actived="true"
            title={t('god_faith')}
            img={faveladascriancas}
          />
          <SlideItem
            title={t('city')}
            img={ermelino}
          />
          <SlideItem
            img={newyork}
          />
          <SlideItem
            img={motorcycle}
          />
        </SlideContent>
      </div>
      <div className="example">
        <h2 className="slide-title">
          <svg viewBox="0 -21 511.987 511" width="50px" xmlns="http://www.w3.org/2000/svg">
            <path d="M133.32 373.828c-34.152 0-64.53-21.867-75.562-54.422l-.746-2.453c-2.602-8.621-3.692-15.871-3.692-23.125V148.375L1.566 321.133c-6.656 25.41 8.512 51.754 33.961 58.773l329.88 88.344a48.935 48.935 0 0012.288 1.578c21.246 0 40.66-14.101 46.102-34.883l19.219-61.117zm0 0M191.988 149.828c23.532 0 42.664-19.137 42.664-42.668s-19.132-42.668-42.664-42.668S149.32 83.63 149.32 107.16s19.137 42.668 42.668 42.668zm0 0"/>
            <path d="M458.652.492h-320C109.258.492 85.32 24.43 85.32 53.828v234.664c0 29.399 23.938 53.336 53.332 53.336h320c29.399 0 53.336-23.937 53.336-53.336V53.828c0-29.398-23.937-53.336-53.336-53.336zm-320 42.668h320c5.891 0 10.668 4.778 10.668 10.668v151.445l-67.39-78.636c-7.149-8.383-17.496-12.864-28.61-13.117-11.05.062-21.418 4.968-28.5 13.46l-79.234 95.102-25.813-25.75c-14.59-14.59-38.335-14.59-52.906 0l-58.879 58.86V53.827c0-5.89 4.778-10.668 10.664-10.668zm0 0"/>
          </svg>
          <span>{t('slide_no_navigation')}</span>
        </h2>
        <SlideContent id="exemplo-2" name="exemplo-2" type="infinite" nav="false">
          <SlideItem
            className="favela"
            title={t('god_faith')}
            img={faveladascriancas}
          />
          <SlideItem
            actived="true"
            title={t('city')}
            img={ermelino}
          />
        </SlideContent>
      </div>
      <div className="example">
        <h2 className="slide-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" viewBox="0 0 94.294 94.294">
            <path d="M94.21 19.806l-.597-2.911a4.065 4.065 0 00-4.771-3.168l-.465.09c-.574.109-1.224.237-1.898.422-.695.167-1.34.371-1.912.554l-.391.123-.135.045c-1.499.527-3 1.163-4.513 1.911a48.399 48.399 0 00-4.13 2.379 58.538 58.538 0 00-3.789 2.711 65.283 65.283 0 00-3.147 2.655h-7.819l-2.176-2.362a4.069 4.069 0 00-2.865-1.309 4.052 4.052 0 00-2.939 1.132l-2.639 2.539H0v56.029h77.196V33.895a50.922 50.922 0 012.465-2.455 44.442 44.442 0 012.726-2.309 36.445 36.445 0 012.849-1.97l.304-.178c.367-.216.734-.433 1.115-.623.05-.026.101-.052.152-.08.334-.185.681-.341 1.025-.502l.756-.331c.34-.14.68-.283 1.028-.393.063-.021.127-.044.19-.067.326-.122.662-.212.996-.306l.575-.164a4.059 4.059 0 002.833-4.711zM16.95 72.829h-4.472l.016-16.451-3.879 3.415-2.156-2.691 6.815-5.428h3.676v21.155zm28.347 0H30.508V69.72l5.311-5.369c1.572-1.609 2.6-2.729 3.082-3.35.483-.622.83-1.197 1.043-1.729.212-.53.318-1.08.318-1.65 0-.848-.234-1.479-.703-1.896-.468-.414-1.092-.621-1.873-.621a5.41 5.41 0 00-2.389.563c-.771.377-1.576.911-2.416 1.605l-2.431-2.879c1.042-.89 1.905-1.517 2.59-1.881a9.609 9.609 0 012.243-.848c.81-.196 1.716-.298 2.72-.298 1.321 0 2.489.241 3.501.724 1.014.483 1.8 1.159 2.359 2.026.559.869.838 1.862.838 2.981 0 .974-.17 1.889-.513 2.741-.343.854-.873 1.729-1.592 2.625-.719.897-1.984 2.179-3.798 3.835l-2.721 2.562v.202h9.218v3.763h.002zm22.197-1.411c-1.477 1.135-3.583 1.7-6.324 1.7-2.295 0-4.33-.381-6.105-1.143v-3.809c.82.415 1.722.755 2.705 1.016.986.26 1.959.39 2.924.39 1.476 0 2.566-.251 3.27-.753.705-.502 1.057-1.307 1.057-2.416 0-.993-.405-1.698-1.215-2.112-.811-.415-2.104-.622-3.879-.622H58.32v-3.431h1.635c1.641 0 2.839-.214 3.596-.642.758-.431 1.137-1.167 1.137-2.209 0-1.602-1.004-2.4-3.01-2.4-.695 0-1.401.115-2.121.347-.717.231-1.516.631-2.394 1.201l-2.069-3.083c1.928-1.389 4.229-2.084 6.901-2.084 2.19 0 3.919.445 5.188 1.332 1.268.888 1.902 2.123 1.902 3.704 0 1.321-.4 2.445-1.201 3.373-.801.925-1.925 1.562-3.371 1.909v.088c1.707.21 3 .729 3.877 1.555.877.825 1.316 1.937 1.316 3.335.002 2.037-.735 3.621-2.212 4.754zm20.651-50.53c-.61.195-1.205.459-1.803.697-.584.277-1.176.533-1.744.85-.58.289-1.138.626-1.699.953a39.728 39.728 0 00-3.221 2.223 48.389 48.389 0 00-3.004 2.543 57.006 57.006 0 00-5.408 5.78 64.707 64.707 0 00-2.412 3.146 55.61 55.61 0 00-1.123 1.619A34.49 34.49 0 0066.71 40.3l-1.827 3.007-2.593-2.58-11.647-11.596 4.596-4.42 8.925 9.688c.167-.202.331-.41.499-.61a74.115 74.115 0 012.876-3.174 62.116 62.116 0 016.345-5.756 52.602 52.602 0 013.502-2.505 44.618 44.618 0 013.754-2.163 35.964 35.964 0 014.01-1.694c.697-.22 1.388-.454 2.102-.62.702-.198 1.428-.318 2.145-.461l.597 2.911c-.621.183-1.244.336-1.849.561z"/>
          </svg>
          <span>{t('slide_fix_time')}</span>
        </h2>
        <SlideContent id="exemplo-3" name="exemplo-3" type="infinite" nav="true" animation={{ direction: 'prev', time: 10000 }}>
          <SlideItem
            className="favela"
            actived="true"
            title={t('god_faith')}
            img={faveladascriancas}
          />
          <SlideItem
            title={t('city')}
            img={ermelino}
          />
        </SlideContent>
      </div>
      <div className="example">
        <h2 className="slide-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 24 24"><path d="M11.5 18.5a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm9-15a1 1 0 0 0-1-1h-16a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0v-15h15a1 1 0 0 0 1-1Zm-5 15a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-8 0a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12-12a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm0 4a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z"></path></svg>
          <span>{t('slide_border')}</span>
        </h2>
        <SlideContent id="exemplo-3" name="exemplo-3" type="infinite" nav="true" border>
          <SlideItem
            className="favela"
            actived="true"
            title={t('god_faith')}
            img={faveladascriancas}
          />
          <SlideItem
            title={t('city')}
            img={ermelino}
          />
        </SlideContent>
      </div>
      <div className="example">
        <h2 className="slide-title">
          <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg>
          <span>{t('slide_squared')}</span>
        </h2>
        <SlideContent id="exemplo-3" name="exemplo-3" type="infinite" nav="true" border squared>
          <SlideItem
            className="favela"
            actived="true"
            title={t('god_faith')}
            img={faveladascriancas}
          />
          <SlideItem
            title={t('city')}
            img={ermelino}
          />
        </SlideContent>
      </div>
    </section>
  );
}

export default Home;
