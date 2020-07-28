import React from "react";
import { Link } from "react-router-dom";

import Styles from "./InitialPageButton.module.scss";

export default function InitialPageButton({
  imgSrc,
  imgAlt,
  linkTo,
  buttonMessage,
  buttonDescription
}) {
  return (
    <div className={Styles.InitialPageButtonContainer}>
      <img src={imgSrc} alt={imgAlt} />

      <Link to={linkTo}>
        <button>{buttonMessage.toUpperCase()}</button>
      </Link>

      <p>{buttonDescription}</p>
    </div>
  );
}
