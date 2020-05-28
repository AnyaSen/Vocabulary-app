import React from "react";

import Styles from "./ExplanatoryWordsCard.module.scss";

export default function ExplanatoryWordsCard() {
  return (
    <div className={Styles.ExplanatoryWordsCard}>
      <p className={Styles.header}>WORDS</p>

      <p>
        <span>New</span> - added but not yet reviewed{" "}
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
