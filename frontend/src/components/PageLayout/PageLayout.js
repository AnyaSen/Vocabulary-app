import React from "react";

import Styles from "./PageLayout.module.scss";
import logoSvg from "../../assets/img/logo.svg";

export default function PageLayout({
  children,
  subHeader,
  header,
  headerAfterBreak,
  span,
  subHeaderAferSpan,
  childrenFlexColumn,
  showLogo
}) {
  return (
    <div className={Styles.PageLayout}>
      {showLogo && <img src={logoSvg} alt="Logo" className={Styles.logo} />}
      <div className={Styles.PageLayoutHeader}>
        <h1>
          {header}
          <br />
          {headerAfterBreak}
        </h1>

        <div>
          <h2>
            {subHeader}
            <span>{span}</span>
            {subHeaderAferSpan}
          </h2>
        </div>
      </div>

      <div
        className={childrenFlexColumn ? Styles.childrenColumn : Styles.children}
      >
        {children}
      </div>
    </div>
  );
}
