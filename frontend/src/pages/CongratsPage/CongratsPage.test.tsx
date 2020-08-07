import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import CongratsPage from "./CongratsPage";

import { WordsContextProvider } from "../../contexts/WordsContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";
import { LearningContextProvider } from "../../contexts/LearningContext";
import { LanguageContext } from "../../contexts/LanguageContext";

describe("<CongratsPage />", () => {
  afterAll(cleanup);

  const tree = (
    <BrowserRouter>
      <LanguageContext.Provider value={{ language: "English" }}>
        <ErrorContextProvider>
          <LoadingContextProvider>
            <WordsContextProvider>
              <LearningContextProvider>
                <CongratsPage numberOfReviewedWords={4} />
              </LearningContextProvider>
            </WordsContextProvider>
          </LoadingContextProvider>
        </ErrorContextProvider>
      </LanguageContext.Provider>
    </BrowserRouter>
  );

  test("Should render correct text, an image and a link with correct href", () => {
    const { getByAltText, getByText, getByTestId } = render(tree);

    expect(getByAltText("congrats")).toBeTruthy();
    expect(getByText("HOME")).toBeTruthy();
    expect(getByTestId("home-link")).toHaveAttribute("href", "/home");
  });
});
