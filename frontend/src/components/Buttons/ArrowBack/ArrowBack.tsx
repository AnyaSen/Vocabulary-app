import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import Styles from "./ArrowBack.module.scss";
import arrowSvg from "../../../assets/img/arrow_back.svg";

interface Props {
  linkTo: string;
}

export default function ArrowBack({ linkTo }: Props): ReactElement {
  return (
    <Link
      to={linkTo}
      className={Styles.ArrowBack}
      data-testid="arrow-container"
    >
      <img src={arrowSvg} alt="Go Back" />
    </Link>
  );
}
