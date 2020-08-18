import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { WordsContextProvider } from "../../../contexts/WordsContext";
import { LoadingContextProvider } from "../../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../../contexts/ErrorContext";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { LearningContextProvider } from "../../../contexts/LearningContext";

import AnswerModeCard from "./AnswerModeCard";

describe("<AnswerModeCard />", () => {
  afterAll(cleanup);

  const props = {
    totalWorsArray: [
      {
        newlyAdded: false,
        learning: true,
        learned: false,
        _id: "someid",
        foreignWord: "word",
        translation: "translation",
        creator: "myid"
      }
    ]
  };
  const { totalWorsArray } = props;

  const tree = (
    <LanguageContext.Provider value={{ language: "English" }}>
      <LoadingContextProvider>
        <ErrorContextProvider>
          <WordsContextProvider>
            <LearningContextProvider>
              <AnswerModeCard {...props} />
            </LearningContextProvider>
          </WordsContextProvider>
        </ErrorContextProvider>
      </LoadingContextProvider>
    </LanguageContext.Provider>
  );

  test("Should render 3 children, correct button text, show translation and reaction emoji.", () => {
    const { getByTestId, getByText, getByAltText } = render(tree);

    const continueButton = getByText("Continue");

    expect(getByTestId("question-card-container").children.length).toBe(3);
    expect(continueButton).toBeTruthy();
    expect(getByText(totalWorsArray[0].translation)).toBeTruthy();
    expect(getByAltText("reaction emoji")).toBeTruthy();
  });
});
