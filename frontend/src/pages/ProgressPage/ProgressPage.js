import React, { useContext } from "react";

import Styles from "./ProgressPage.module.scss";

import { Chart } from "react-google-charts";

import { WordsContext } from "../../contexts/WordsContext";

import PageLayout from "../../components/PageLayout/PageLayout";
import ArrowBack from "../../components/Buttons/ArrowBack";

import ExplanatoryWordsCard from "../../components/ExplanatoryWordsCard/ExplanatoryWordsCard";
import NotificationMessage from "../../components/NotificationMessage/NotificationMessage";

export default function ProgressPage() {
  const {
    newWordsLength,
    learningWordsLength,
    learnedWordsLength,

    noWords
  } = useContext(WordsContext);

  return noWords ? (
    <PageLayout header="PROGRESS" subHeader="Here you will see your progress.">
      <ArrowBack linkTo="/home" />

      <NotificationMessage
        text="Please, add some vocabulary first."
        linkMessage="GO TO VOCABULARY"
        linkRoute="/vocabulary"
      />
    </PageLayout>
  ) : (
    <div className={Styles.ProgressPage}>
      <PageLayout header="PROGRESS" subHeader="Here you can see your progress.">
        <ArrowBack linkTo="/home" />

        <ExplanatoryWordsCard />

        <Chart
          className={Styles.chart}
          chartType="PieChart"
          data={[
            ["Words", "Of Total Words"],
            [`New - ${newWordsLength}`, newWordsLength],
            [`Learning - ${learningWordsLength}`, learningWordsLength],
            [`Learned - ${learnedWordsLength}`, learnedWordsLength]
          ]}
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
