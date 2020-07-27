import React from "react";

import Styles from "./LoaderSmall.module.scss";

export default function LoaderSmall() {
  return (
    <div className={Styles.LoaderSmall}>
      <div className={Styles.loadingDots}>
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}
