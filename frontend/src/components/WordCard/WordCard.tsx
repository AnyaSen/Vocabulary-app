import React, { ReactElement } from "react";

import Styles from "./WordCard.module.scss";

export default function WordCard({ children }): ReactElement {
  return (
    <div className={Styles.WordCard} data-testid="word-card">
      {children}
    </div>
  );
}
