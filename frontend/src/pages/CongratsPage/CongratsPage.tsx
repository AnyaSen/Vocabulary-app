import React, { useContext, ReactElement } from "react";
import typography from "../../typography/typography.json";

import Styles from "./CongratsPage.module.scss";

import congratsSvg from "../../assets/img/congrats.svg";

import { Link } from "react-router-dom";

import PageLayout from "../../components/PageLayout/PageLayout";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

import { LearningContext } from "../../contexts/LearningContext";
import { WordsContext } from "../../contexts/WordsContext";
import { LanguageContext } from "../../contexts/LanguageContext";

interface Props {
  numberOfReviewedWords: number;
}

export default function CongratsPage({
  numberOfReviewedWords
}: Props): ReactElement {
  const { language } = useContext(LanguageContext);

  const { congratulations, you_reviewed_, _words, go_home } = typography[
    language
  ].CongratsPage;

  const { setShowCongratilationPage } = useContext(LearningContext);
  const { setWordsData } = useContext(WordsContext);

  const handleHomeClick = () => {
    setShowCongratilationPage(false);
    setWordsData();
  };

  return (
    <div>
      <PageLayout
        header={congratulations}
        subHeader={you_reviewed_}
        span={numberOfReviewedWords}
        subHeaderAferSpan={_words}
      >
        <div className={Styles.congratsImgAndButton}>
          <img src={congratsSvg} alt="congrats" />

          <Link to="/home" onClick={handleHomeClick} data-testid="home-link">
            <PrimaryButton buttonMessage={go_home} />
          </Link>
        </div>
      </PageLayout>
    </div>
  );
}
