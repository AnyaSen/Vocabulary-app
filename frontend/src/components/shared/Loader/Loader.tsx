import React, { ReactElement } from "react";

import Styles from "./Loader.module.scss";

export default function Loader(): ReactElement {
  return (
    <div className={Styles.Loader}>
      <div className={Styles.loadingDots} data-testid="loader">
        <div />
        <div />
        <div />
      </div>

      <p>LOADING</p>
    </div>
  );
}
