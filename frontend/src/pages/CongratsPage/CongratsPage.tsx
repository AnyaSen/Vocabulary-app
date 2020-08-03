import React, { useContext, ReactElement } from "react";

import Styles from "./CongratsPage.module.scss";

import congratsSvg from "../../assets/img/congrats.svg";

import { Link } from "react-router-dom";

import PageLayout from "../../components/PageLayout/PageLayout";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

import { LearningContext } from "../../contexts/LearningContext";
import { WordsContext } from "../../contexts/WordsContext";

interface Props {
  numberOfReviewedWords: number;
}

export default function CongratsPage({
  numberOfReviewedWords
}: Props): ReactElement {
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

          <Link to="/home" onClick={handleHomeClick} data-testid="home-link">
            <PrimaryButton buttonMessage="HOME" />
          </Link>
        </div>
      </PageLayout>
    </div>
  );
}
