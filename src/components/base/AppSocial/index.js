import React from "react";
import ReactTechsLogos from "react-techs-logos";

import "./style.scss";
function AppSocial() {
  return (
    <div className="social-links" data-testid="app-social">
      {/* <a
        href="https://npmjs.com/package/slidecontent-react"
        target="_blank"
        rel="noreferrer"
        className="tech-container"
      >
        <ReactTechsLogos name="npm" hiddenLabel />
      </a> */}
      <a
        href="https://www.linkedin.com/in/lucasferreiralimax"
        target="_blank"
        rel="noreferrer"
        className="tech-container"
      >
        <ReactTechsLogos name="linkedin" hiddenLabel />
      </a>
      <a
        href="https://github.com/criar-art/slidecontent-react"
        target="_blank"
        rel="noreferrer"
        className="tech-container"
      >
        <ReactTechsLogos name="github" hiddenLabel />
      </a>
    </div>
  );
}

export default AppSocial;
