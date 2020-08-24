import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import { WordsContextProvider } from "../../contexts/WordsContext";
import { LoadingContextProvider } from "../../contexts/LoadingContext";
import { ErrorContextProvider } from "../../contexts/ErrorContext";
import { BrowseContextProvider } from "../../contexts/BrowseContext";
import { LanguageContext } from "../../contexts/LanguageContext";
import BrowseVocabulary from "./BrowseVocabulary";

describe("<BrowseVocabulary />", () => {
  afterAll(cleanup);

  const tree = (
    <LanguageContext.Provider value={{ language: "English" }}>
      <LoadingContextProvider>
        <ErrorContextProvider>
          <WordsContextProvider>
            <BrowseContextProvider>
              <BrowseVocabulary />
            </BrowseContextProvider>
          </WordsContextProvider>
        </ErrorContextProvider>
      </LoadingContextProvider>
    </LanguageContext.Provider>
  );

  test("Should render a warning message with the dorrect text when search button is clicked but input value remained an empty string", () => {
    const { getByText } = render(tree);

    const searchButton = getByText("Search");

    fireEvent.click(searchButton);

    expect(getByText("Start entering a word")).toBeTruthy();
  });

  test("Should render 2 children inside the form", () => {
    const { getByTestId } = render(tree);

    expect(getByTestId("browse-form-container").children.length).toBe(2);
  });

  test("Should show a button with correct text when browseMode is on and hide the button after it's been clicked", () => {
    const { getByText, getByPlaceholderText, queryByText } = render(tree);

    const searchButton = getByText("Search");
    const input = getByPlaceholderText("Enter a word");

    fireEvent.change(input, { target: { value: "Word" } });

    fireEvent.click(searchButton);

    const showAllButton = getByText("Show All");

    expect(showAllButton).toBeTruthy();

    fireEvent.click(showAllButton);

    expect(queryByText("Show All")).toBeFalsy();
  });
});
