import React, { useContext } from "react";

import Styles from "./HomePage.module.scss";
import vocabularySvg from "../../assets/img/vocabulary.svg";
import learnSvg from "../../assets/img/learn.svg";
import progressSvg from "../../assets/img/progress.svg";

import Layout from "../../components/Layout";
import PageLayout from "../../components/PageLayout/PageLayout";
import HomePageButton from "../../components/Buttons/HomePageButton";
import typography from "../../typography/typography.json";
import { LanguageContext } from "../../contexts/LanguageContext";

export default function HomePage() {
  const name = JSON.parse(localStorage.getItem("userName"));

  const { language } = useContext(LanguageContext);

  const {
    nice_to_see_you,
    what_would_you_like_to_do,
    vocabulary_explanation,
    progress_explanation,
    learn_explanation
  } = typography[language].HomePage;

  const { vocabulary, progress, learn } = typography[language].shared;

  return (
    <Layout>
      <PageLayout
        header={`${name},`}
        headerAfterBreak={nice_to_see_you}
        subHeader={what_would_you_like_to_do}
      >
        <div className={Styles.buttonsContainer}>
          <HomePageButton
            imgSrc={vocabularySvg}
            imgAlt="Vocabulary"
            linkTo="/vocabulary"
            buttonMessage={vocabulary}
            buttonDescription={vocabulary_explanation}
          />

          <HomePageButton
            imgSrc={progressSvg}
            imgAlt="Progress"
            linkTo="/progress"
            buttonMessage={progress}
            buttonDescription={progress_explanation}
          />

          <HomePageButton
            imgSrc={learnSvg}
            imgAlt="Learn"
            linkTo="/learn"
            buttonMessage={learn}
            buttonDescription={learn_explanation}
          />
        </div>
      </PageLayout>
    </Layout>
  );
}
