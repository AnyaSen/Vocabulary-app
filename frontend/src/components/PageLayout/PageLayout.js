import React from "react";

import Styles from "./PageLayout.module.scss";

export default function PageLayout({ children, subHeader, header }) {
  return (
    <div className={Styles.PageLayout}>
      <div className={Styles.PageLayoutHeader}>
        <h1>{header}</h1>

        <div>
          <h2>{subHeader}</h2>
        </div>
      </div>

      {children}
    </div>
  );
}
