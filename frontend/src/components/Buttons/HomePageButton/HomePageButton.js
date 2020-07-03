import React from "react";
import { Link } from "react-router-dom";

import Styles from "./HomePageButton.module.scss";

import PrimaryButton from "../PrimaryButton/PrimaryButton";

export default function HomePageButton({
  imgSrc,
  imgAlt,
  linkTo,
  buttonMessage,
  buttonDescription
}) {
  return (
    <div className={Styles.HomePageButtonContainer}>
      <img src={imgSrc} alt={imgAlt} />

      <Link to={linkTo}>
        <PrimaryButton buttonMessage={buttonMessage} buttonColor="white" />
      </Link>

      <p>{buttonDescription}</p>
    </div>
  );
}
