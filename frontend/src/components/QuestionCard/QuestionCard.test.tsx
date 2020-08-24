import React from "react";
import { render, cleanup } from "@testing-library/react";

import { WordsContextProvider } from "../../contexts/WordsContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import { LearningContext } from "../../contexts/LearningContext";

import QuestionCard from "./QuestionCard";
import { BrowserRouter } from "react-router-dom";

describe("<QuestionCard />", () => {
  afterAll(cleanup);

  console.error = jest.fn(); //to ignore a warning concerning onChange

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

  const createRenderTree = (
    showCongratilationPage: boolean,
    isIncorrectGuess: boolean
  ) => (
    <BrowserRouter>
      <LanguageContext.Provider
        value={{ language: "English", setLanguage: () => {} }}
      >
        <LoadingContextProvider>
          <ErrorContextProvider>
            <WordsContextProvider>
              <LearningContext.Provider
                value={{
                  showCongratilationPage: showCongratilationPage,
                  isIncorrectGuess: isIncorrectGuess,
                  values: { translationInput: "translation" },
                  wordCount: 0
                }}
              >
                <QuestionCard {...props} />
              </LearningContext.Provider>
            </WordsContextProvider>
          </ErrorContextProvider>
        </LoadingContextProvider>
      </LanguageContext.Provider>
    </BrowserRouter>
  );

  test("Should render 1 child.", () => {
    const { getByTestId } = render(createRenderTree(false, false));

    expect(getByTestId("question-cards-container").children.length).toBe(1);
  });
});
