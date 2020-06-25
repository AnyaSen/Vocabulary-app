import React from "react";

import Styles from "./WordCard.module.scss";

export default function WordCard({ children }) {
  return <div className={Styles.WordCard}>{children}</div>;
}
