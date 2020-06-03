import React from "react";

import Styles from "./HomePage.module.scss";
import vocabulary from "../../assets/img/vocabulary.svg";
import learn from "../../assets/img/learn.svg";
import progress from "../../assets/img/progress.svg";

import Layout from "../../components/Layout/Layout";
import PageLayout from "../../components/PageLayout/PageLayout";
import HomePageButton from "../../components/Buttons/HomePageButton/HomePageButton";

export default function HomePage() {
  const name = JSON.parse(localStorage.getItem("userName"));

  return (
    <Layout>
      <PageLayout
        header={`Dear ${name},`}
        headerAfterBreak="Welcome to your Vocabulary home!"
        subHeader="What would you like to do?"
      >
        <div className={Styles.buttonsContainer}>
          <HomePageButton
            imgSrc={vocabulary}
            imgAlt="Vocabulary"
            linkTo="/vocabulary"
            buttonMessage="Vocabulary"
            buttonDescription="To add and browse words"
          />

          <HomePageButton
            imgSrc={progress}
            imgAlt="Progress"
            linkTo="/progress"
            buttonMessage="Progress"
            buttonDescription="To see your learning progress"
          />

          <HomePageButton
            imgSrc={learn}
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
