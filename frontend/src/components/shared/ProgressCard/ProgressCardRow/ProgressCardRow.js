import React from "react";

import Styles from "./ProgressCardRow.module.scss";

export default function ProgressCardRow({ wordType, number }) {
  return (
    <tr className={Styles.ProgressCardRow}>
      <td>{wordType}</td>
      <td>{number}</td>
    </tr>
  );
}
