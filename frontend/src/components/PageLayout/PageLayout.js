import React from "react";

import Styles from "./PageLayout.module.scss";

export default function PageLayout({
  children,
  subHeader,
  header,
  headerAfterBreak,
  span,
  subHeaderAferSpan
}) {
  return (
    <div className={Styles.PageLayout}>
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

      <div className={Styles.children}>{children}</div>
    </div>
  );
}
