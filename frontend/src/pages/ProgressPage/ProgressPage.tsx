import React, { useContext, ReactElement } from "react";

import Styles from "./ProgressPage.module.scss";

import { Chart } from "react-google-charts";

import { WordsContext } from "../../contexts/WordsContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import typography from "../../typography/typography.json";

import PageLayout from "../../components/PageLayout/PageLayout";
import ArrowBack from "../../components/Buttons/ArrowBack";

import ExplanatoryWordsCard from "../../components/shared/ExplanatoryWordsCard";
import NotificationMessage from "../../components/shared/NotificationMessage";

export default function ProgressPage(): ReactElement {
  const { language } = useContext(LanguageContext);

  const {
    progress,
    here_you_can_see_your_progress,
    add_vocabulary_message,
    go_to_vocabulary
  } = typography[language].ProgressPage;

  const { new_type, learning_type, learned_type } = typography[language].shared;

  const {
    newWordsLength,
    learningWordsLength,
    learnedWordsLength,

    noWords
  } = useContext(WordsContext);

  return noWords ? (
    <PageLayout header={progress} subHeader={here_you_can_see_your_progress}>
      <ArrowBack linkTo="/home" />

      <NotificationMessage
        text={add_vocabulary_message}
        linkMessage={go_to_vocabulary}
        linkRoute="/vocabulary"
      />
    </PageLayout>
  ) : (
    <div className={Styles.ProgressPage}>
      <PageLayout header={progress} subHeader={here_you_can_see_your_progress}>
        <ArrowBack linkTo="/home" />

        <ExplanatoryWordsCard />

        <Chart
          className={Styles.chart}
          chartType="PieChart"
          data={[
            ["Words", "Of Total Words"],
            [`${new_type} - ${newWordsLength}`, newWordsLength],
            [`${learning_type} - ${learningWordsLength}`, learningWordsLength],
            [`${learned_type} - ${learnedWordsLength}`, learnedWordsLength]
          ]}
          loader={<div>Loading your chart...</div>}
          options={{
            slices: [
              {
                color: "#efe9e7"
              },
              {
                color: "#fce1e1"
              },
              {
                color: "#F79090"
              }
            ],
            legend: {
              position: "bottom",
              alignment: "center",
              textStyle: {
                fontSize: 14
              }
            },

            pieSliceTextStyle: {
              color: "#1f1f1f"
            },

            fontName: "inherit"
          }}
        />
      </PageLayout>
    </div>
  );
}
