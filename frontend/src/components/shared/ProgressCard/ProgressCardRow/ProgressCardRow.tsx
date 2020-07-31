import React, { ReactElement } from "react";

import Styles from "./ProgressCardRow.module.scss";

interface Props {
  wordType: string;
  number: number;
}

export default function ProgressCardRow({
  wordType,
  number
}: Props): ReactElement {
  return (
    <tr className={Styles.ProgressCardRow}>
      <td>{wordType}</td>
      <td>{number}</td>
    </tr>
  );
}
