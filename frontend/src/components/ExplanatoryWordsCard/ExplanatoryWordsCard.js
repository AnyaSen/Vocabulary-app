import React from "react";

import Styles from "./ExplanatoryWordsCard.module.scss";

export default function ExplanatoryWordsCard() {
  return (
    <div className={Styles.ExplanatoryWordsCard}>
      <h2>WORDS</h2>

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
