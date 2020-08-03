import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

import { WordsContextProvider } from "../../contexts/WordsContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";
import { LearningContextProvider } from "../../contexts/LearningContext";
import CongratsPage from "./CongratsPage";

describe("<CongratsPage />", () => {
  afterAll(cleanup);

  const tree = (
    <BrowserRouter>
      <ErrorContextProvider>
        <LoadingContextProvider>
          <WordsContextProvider>
            <LearningContextProvider>
              <CongratsPage numberOfReviewedWords={4} />
            </LearningContextProvider>
          </WordsContextProvider>
        </LoadingContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  );

  test("Should render correct text, an image and a link with correct href", () => {
    const { getByAltText, getByText, getByTestId } = render(tree);

    expect(getByAltText("congrats")).toBeTruthy();
    expect(getByText("HOME")).toBeTruthy();
    expect(getByTestId("home-link")).toHaveAttribute("href", "/home");
  });
});
