import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { WordsContextProvider } from "../../../contexts/WordsContext";
import { LoadingContextProvider } from "../../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../../contexts/ErrorContext";
import { LanguageContext } from "../../../contexts/LanguageContext";
import { LearningContextProvider } from "../../../contexts/LearningContext";

import QuestionModeCard from "./QuestionModeCard";

describe("<QuestionModeCard />", () => {
  afterAll(cleanup);

  const props = {
    task: "Task",

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
  const { task } = props;

  const tree = (
    <LanguageContext.Provider
      value={{ language: "English", setLanguage: () => {} }}
    >
      <LoadingContextProvider>
        <ErrorContextProvider>
          <WordsContextProvider>
            <LearningContextProvider>
              <QuestionModeCard {...props} />
            </LearningContextProvider>
          </WordsContextProvider>
        </ErrorContextProvider>
      </LoadingContextProvider>
    </LanguageContext.Provider>
  );

  test("Should render 4 children, correct button texts, show a task and an input.", () => {
    const { getByTestId, getByText, getByPlaceholderText } = render(tree);

    expect(getByTestId("question-card-container").children.length).toBe(4);
    expect(getByText(task)).toBeTruthy();
    expect(getByText("I don't remember")).toBeTruthy();
    expect(getByText("CHECK THE ANSWER")).toBeTruthy();
    expect(getByPlaceholderText("Translation")).toBeTruthy();
  });
});
