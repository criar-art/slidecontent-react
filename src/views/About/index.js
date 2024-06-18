import React from "react";
import { useTranslation } from "react-i18next";
import "./style.scss";


function About() {
  const { t } = useTranslation();
  return (
    <section className="about" data-testid="view-about">
      <p>{t("about")}</p>

      <div className="examples">
        <a
          href="https://slidecontent-vuejs.web.app"
          target="_blank"
          className="example"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/logo-vue.svg").default}
            width="50"
            alt="Vue.js Logo - Link to SlideContent Vue.js"
          />
          SlideContentVue
        </a>
        <a
          href="https://slidecontent-angularjs.web.app"
          target="_blank"
          className="example"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/logo-angular.svg").default}
            width="150"
            alt="Angular Logo - Link to SlideContent Angular"
          />
          SlideContentAngular
        </a>
        <a
          href="https://slidecontent-reactjs.web.app"
          target="_blank"
          className="example"
          rel="noopener noreferrer"
        >
          <img
            src={require("../../assets/logos/logo-ember.svg").default}
            width="80"
            alt="Ember Logo - Link to SlideContent Ember"
          />
          SlideContentEmber
        </a>
      </div>
    </section>
  );
}

export default About;
