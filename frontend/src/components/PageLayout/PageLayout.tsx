import React, { ReactElement } from "react";

import Styles from "./PageLayout.module.scss";
import logoSvg from "../../assets/img/logo.svg";

import LanguageSelector from "../shared/LanguageSelector";

interface Props {
  children: React.ReactNode;
  header: string;
  headerAfterBreak?: string;
  subHeader: string;
  span?: string | number;
  subHeaderAferSpan?: string;
  childrenFlexColumn?: boolean;
  showLogo?: boolean;
  showLanguageSelector?: boolean;
}

export default function PageLayout({
  children,
  subHeader,
  header,
  headerAfterBreak,
  span,
  subHeaderAferSpan,
  childrenFlexColumn,
  showLogo,
  showLanguageSelector
}: Props): ReactElement {
  return (
    <div className={Styles.PageLayout} data-testid="page-layout">
      {(showLogo || showLanguageSelector) && (
        <div
          className={Styles.logoAndLanguage}
          data-testid="logo-and-language-selector-container"
        >
          {showLogo && <img src={logoSvg} alt="Logo" className={Styles.logo} />}

          {showLanguageSelector && <LanguageSelector />}
        </div>
      )}

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
        data-testid="children-container"
        className={childrenFlexColumn ? Styles.childrenColumn : Styles.children}
      >
        {children}
      </div>
    </div>
  );
}
