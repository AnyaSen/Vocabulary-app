import React, { ReactElement } from "react";

import Styles from "./Loader.module.scss";

interface Props {
  small?: boolean;
}

export default function Loader({ small }: Props): ReactElement {
  return (
    <div
      className={small ? Styles.smallLoader : Styles.Loader}
      data-testid="loader-container"
    >
      <div className={Styles.loadingDots} data-testid="loader">
        <div />
        <div />
        <div />
      </div>

      {!small && <p>LOADING</p>}
    </div>
  );
}
