import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import WordPairInfoCard from "./WordPairInfoCard";
import { BrowseContext } from "../../contexts/BrowseContext";

describe("<WordPairCard />", () => {
  afterAll(cleanup);

  const contextValues = {
    wordPairForeignWord: "word",
    wordPairTranslation: "translation",
    wordPairType: "new"
  };

  const {
    wordPairForeignWord,
    wordPairTranslation,
    wordPairType
  } = contextValues;

  const tree = (
    <BrowseContext.Provider
      value={{
        ...contextValues
      }}
    >
      <WordPairInfoCard />
    </BrowseContext.Provider>
  );

  test("Should render correct text, an img.", () => {
    const { getByAltText, getByTestId, getByText } = render(tree);

    const closingImg = getByAltText("close");

    expect(getByTestId("word-pair-info-card").children.length).toBe(4);
    expect(closingImg).toBeTruthy();
    expect(getByText(wordPairForeignWord)).toBeTruthy();
    expect(getByText(wordPairTranslation)).toBeTruthy();
    expect(getByText(wordPairType)).toBeTruthy();
  });
});
