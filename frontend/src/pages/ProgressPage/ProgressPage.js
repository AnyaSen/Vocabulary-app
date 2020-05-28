import React, { useEffect, useContext } from "react";

import { Chart } from "react-google-charts";

import { WordsContext } from "../../contexts/WordsContext";
import { LoadingContext } from "../../contexts/LoadingContext";
import { ErrorContext } from "../../contexts/ErrorContext";

import PageLayout from "../../components/PageLayout/PageLayout";
import ArrowBack from "../../components/Buttons/ArrowBack/ArrowBack";
import LoadingPage from "../LoadingPage/LoadingPage";
import ErrorCard from "../../components/ErrorCard/ErrorCard";
import ExplanatoryWordsCard from "../../components/ExplanatoryWordsCard/ExplanatoryWordsCard";

export default function ProgressPage() {
  const { setWordsData, newWords, learningWords, learnedWords } = useContext(
    WordsContext
  );

  const { isVocabularyLoading } = useContext(LoadingContext);
  const { isVocabularyError } = useContext(ErrorContext);

  useEffect(() => {
    setWordsData();
    // eslint-disable-next-line
  }, []);

  const newWordsLength = newWords.length;
  const learningWordsLength = learningWords.length;
  const learnedWordsWordsLength = learnedWords.length;

  if (isVocabularyLoading) return <LoadingPage />;
  if (isVocabularyError) return <ErrorCard />;

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
            [`New - ${newWordsLength}`, newWordsLength],
            [`Learning - ${learningWordsLength}`, learningWordsLength],
            [`Learned - ${learnedWordsWordsLength}`, learnedWordsWordsLength]
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

        <ExplanatoryWordsCard />
      </PageLayout>
    </div>
  );
}
