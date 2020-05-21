import React from "react";
import { Link } from "react-router-dom";

import Styles from "./ButtonMenuLink.module.scss";

export default function ButtonMenuLink({ buttonMessage, linkTo }) {
  return (
    <Link to={linkTo} className={Styles.ButtonMenuLink}>
      <button>{buttonMessage}</button>
    </Link>
  );
}
