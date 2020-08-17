import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import WordsList from "./WordsList";
import { WordsContextProvider } from "../../contexts/WordsContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { BrowseContextProvider } from "../../contexts/BrowseContext";

describe("<WordsList />", () => {
  afterEach(cleanup);

  const props = {
    wordsArray: [
      {
        newlyAdded: false,
        learning: true,
        learned: false,
        _id: "someid",
        foreignWord: "word",
        translation: "translation",
        creator: "myid"
      },
      {
        newlyAdded: true,
        learning: false,
        learned: false,
        _id: "someotherid",
        foreignWord: "wordtwo",
        translation: "translationtwo",
        creator: "mynewid"
      }
    ],

    noWordsMessage: "No words"
  };

  const createRenderTree = props => (
    <ErrorContextProvider>
      <LoadingContextProvider>
        <WordsContextProvider>
          <BrowseContextProvider>
            <WordsList {...props} />
          </BrowseContextProvider>
        </WordsContextProvider>
      </LoadingContextProvider>
    </ErrorContextProvider>
  );

  const { wordsArray, noWordsMessage } = props;

  test("Should render foreignWord and translation for each wordpair and not display any message.", () => {
    const { getByText, queryByText } = render(createRenderTree(props));

    wordsArray.forEach((wordPair, index) => {
      expect(getByText(wordPair.foreignWord)).toBeTruthy();
      expect(getByText(wordPair.translation)).toBeTruthy();
      expect(queryByText(noWordsMessage)).toBeFalsy();
    });
  });

  test("Should display no words message when the array is empty.", () => {
    const updatedProps = {
      ...props,
      wordsArray: []
    };

    const { getByText } = render(createRenderTree(updatedProps));

    expect(getByText(noWordsMessage)).toBeTruthy();
  });
});
