import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import WordsList from "./WordsList";

// import { ErrorContextProvider } from "../../../contexts/ErrorContext";
// import { LoadingContextProvider } from "../../../contexts/LoadingContext";
// import { WordsContextProvider } from "../../../contexts/WordsContext";
// import { BrowseContextProvider } from "../../../contexts/BrowseContext";

describe("<WordsList />", () => {
  afterEach(cleanup);

  const props = {
    wordsArray: [],
    noWordsMessage: "No words"
  };

  const { wordsArray, noWordsMessage } = props;

  test("Should render word pair with correct text, images and not render the edit form.", () => {
    const { getByAltText, getByText, queryByTestId, getByTestId } = render(
      <WordsList {...props} />
    );

    expect(getByTestId("word-pair-container")).toBeTruthy();
  });
});
