import React, { useEffect, useContext } from "react";

import { Chart } from "react-google-charts";

import { WordsContext } from "../../contexts/WordsContext";
import {
  filterNewWords,
  filterLearnedWords,
  filterLearningWords
} from "../../services/filterVocabulary";

import PageLayout from "../../components/PageLayout/PageLayout";
import ArrowBack from "../../components/Buttons/ArrowBack/ArrowBack";

export default function ProgressPage() {
  const { wordsArr, setWordsData } = useContext(WordsContext);

  useEffect(() => {
    setWordsData();
    // eslint-disable-next-line
  }, []);

  const filteredNewWordsLength = filterNewWords(wordsArr).length;
  const filteredrLearnedWordsLength = filterLearnedWords(wordsArr).length;
  const filteredLearningWordsLength = filterLearningWords(wordsArr).length;

  return (
    <div>
      <PageLayout header="PROGRESS" subHeader="Here you can see your progress">
        <ArrowBack linkTo="/home" />

        <Chart
          width={"600px"}
          height={"400px"}
          chartType="PieChart"
          data={[
            ["Words", "Of Total Words"],
            [`New - ${filteredNewWordsLength}`, filteredNewWordsLength],
            [
              `Learning - ${filteredLearningWordsLength}`,
              filteredLearningWordsLength
            ],
            [
              `Learned - ${filteredrLearnedWordsLength}`,
              filteredrLearnedWordsLength
            ]
          ]}
          options={{
            slices: [
              {
                color: "#F79090"
              },
              {
                color: "#A08484"
              },
              {
                color: "#D0CECE"
              }
            ],
            legend: {
              position: "right",
              alignment: "center",
              textStyle: {
                fontSize: 14
              }
            },

            fontName: "inherit"
          }}
        />
      </PageLayout>
    </div>
  );
}
