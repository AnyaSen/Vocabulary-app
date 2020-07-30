import React from "react";

import Styles from "./HomePage.module.scss";
import vocabularySvg from "../../assets/img/vocabulary.svg";
import learnSvg from "../../assets/img/learn.svg";
import progressSvg from "../../assets/img/progress.svg";

import Layout from "../../components/Layout/Layout";
import PageLayout from "../../components/PageLayout/PageLayout";
import HomePageButton from "../../components/Buttons/HomePageButton";

export default function HomePage() {
  const name = JSON.parse(localStorage.getItem("userName"));

  return (
    <Layout>
      <PageLayout
        header={`${name},`}
        headerAfterBreak="Nice to see you here!"
        subHeader="What would you like to do?"
      >
        <div className={Styles.buttonsContainer}>
          <HomePageButton
            imgSrc={vocabularySvg}
            imgAlt="Vocabulary"
            linkTo="/vocabulary"
            buttonMessage="Vocabulary"
            buttonDescription="To add and browse words"
          />

          <HomePageButton
            imgSrc={progressSvg}
            imgAlt="Progress"
            linkTo="/progress"
            buttonMessage="Progress"
            buttonDescription="To see your learning progress"
          />

          <HomePageButton
            imgSrc={learnSvg}
            imgAlt="Learn"
            linkTo="/learn"
            buttonMessage="Learn"
            buttonDescription="To learn vocabulary"
          />
        </div>
      </PageLayout>
    </Layout>
  );
}
