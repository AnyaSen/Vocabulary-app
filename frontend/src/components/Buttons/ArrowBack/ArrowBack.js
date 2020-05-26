import React from "react";

import { Link } from "react-router-dom";

import Styles from "./ArrowBack.module.scss";
import arrowSvg from "../../../assets/img/arrow_back.svg";

export default function ArrowBack({linkTo}) {
  return (
    <Link to={linkTo} className={Styles.ArrowBack}>
      <img src={arrowSvg} alt="Go Back" />
    </Link>
  );
}
