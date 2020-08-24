import React from "react";
import { render, cleanup } from "@testing-library/react";

import { WordsContextProvider } from "../../contexts/WordsContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";
import { LanguageContext } from "../../contexts/LanguageContext";

import AddWordsForm from "./AddWordsForm";

describe("<AddWordsForm />", () => {
  afterAll(cleanup);

  const tree = (
    <LanguageContext.Provider value={{ language: "English" }}>
      <LoadingContextProvider>
        <ErrorContextProvider>
          <WordsContextProvider>
            <AddWordsForm />
          </WordsContextProvider>
        </ErrorContextProvider>
      </LoadingContextProvider>
    </LanguageContext.Provider>
  );

  test("Should render 3 children, correct header", () => {
    const { getByTestId, getByText } = render(tree);

    expect(getByTestId("add-words-form-container").children.length).toBe(3);
    expect(getByText("ADD VOCABULARY")).toBeTruthy();
  });

  test("Should render 3 children inside the form", () => {
    const { getByTestId } = render(tree);

    expect(getByTestId("add-words-form").children.length).toBe(3);
  });
});
