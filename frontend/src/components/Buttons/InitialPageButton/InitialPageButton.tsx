import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import Styles from "./InitialPageButton.module.scss";

interface Props {
  imgSrc: string;
  imgAlt: string;
  linkTo: string;
  buttonMessage: string;
  buttonDescription: string;
}

export default function InitialPageButton({
  imgSrc,
  imgAlt,
  linkTo,
  buttonMessage,
  buttonDescription
}: Props): ReactElement {
  return (
    <div
      className={Styles.InitialPageButtonContainer}
      data-testid="button-container"
    >
      <img src={imgSrc} alt={imgAlt} />

      <Link to={linkTo}>
        <button>{buttonMessage.toUpperCase()}</button>
      </Link>

      <p>{buttonDescription}</p>
    </div>
  );
}
