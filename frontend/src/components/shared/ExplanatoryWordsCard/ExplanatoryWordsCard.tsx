import React, { ReactElement } from "react";

import Styles from "./ExplanatoryWordsCard.module.scss";

export default function ExplanatoryWordsCard(): ReactElement {
  return (
    <div className={Styles.ExplanatoryWordsCard} data-testid="explanatory-card">
      <p className={Styles.header}>WORDS</p>

      <p>
        <span>New</span> - added but not yet reviewed
      </p>
      <p>
        <span>Learning</span> - reviewed but not learned well
      </p>
      <p>
        <span>Learned</span> - learned well
      </p>
    </div>
  );
}
