import React, { useContext } from "react";

import Styles from "./CongratsPage.module.scss";

import congratsSvg from "../../assets/img/congrats.svg";

import { Link } from "react-router-dom";

import PageLayout from "../../components/PageLayout/PageLayout";
import PrimaryButton from "../../components/Buttons/PrimaryButton/PrimaryButton";

import { LearningContext } from "../../contexts/LearningContext";
import { WordsContext } from "../../contexts/WordsContext";

export default function CongratsPage({ numberOfReviewedWords }) {
  const { setShowCongratilationPage } = useContext(LearningContext);
  const { setWordsData } = useContext(WordsContext);

  const handleHomeClick = () => {
    setShowCongratilationPage(false);
    setWordsData();
  };

  return (
    <div>
      <PageLayout
        header="Congratulations!"
        subHeader="You have reviewed "
        span={numberOfReviewedWords}
        subHeaderAferSpan=" word(s)"
      >
        <div className={Styles.congratsImgAndButton}>
          <img src={congratsSvg} alt="congrats" />

          <Link to="/home" onClick={handleHomeClick}>
            <PrimaryButton buttonMessage="HOME" />
          </Link>
        </div>
      </PageLayout>
    </div>
  );
}
