import React from "react";

import Styles from "./CongratsPage.module.scss";

import congratsSvg from "../../assets/img/congrats.svg";

import { Link } from "react-router-dom";

import PageLayout from "../../components/PageLayout/PageLayout";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

export default function CongratsPage() {
  return (
    <div>
      <PageLayout
        header="Congratulations!"
        subHeader="You have learned "
        span="30 "
        subHeaderAferSpan="words"
      >
        <div className={Styles.congratsImgAndButton}>
          <img src={congratsSvg} alt="congrats" />

          <Link to="/home">
            <PrimaryButton buttonMessage="HOME" />
          </Link>
        </div>
      </PageLayout>
    </div>
  );
}
