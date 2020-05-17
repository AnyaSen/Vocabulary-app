import React from "react";

import Styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={Styles.Loader}>
      <div className={Styles.loadingDots}>
        <div />
        <div />
        <div />
      </div>

      <p>LOADING</p>
    </div>
  );
}
