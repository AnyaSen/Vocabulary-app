import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import WordPair from "./WordPair";

import { ErrorContextProvider } from "../../../contexts/ErrorContext";
import { LoadingContextProvider } from "../../../contexts/LoadingContext";
import { WordsContextProvider } from "../../../contexts/WordsContext";
import { BrowseContextProvider } from "../../../contexts/BrowseContext";

describe("<WordPair />", () => {
  afterEach(cleanup);

  const props = {
    word: "Some word",
    transaltion: "Translation",
    ID: "6kbkbkfhus2",
    newlyAdded: true,
    learning: false,
    learned: false
  };

  const { word, transaltion } = props;

  const createRenderTree = props => (
    <ErrorContextProvider>
      <LoadingContextProvider>
        <WordsContextProvider>
          <BrowseContextProvider>
            <WordPair {...props} />
          </BrowseContextProvider>
        </WordsContextProvider>
      </LoadingContextProvider>
    </ErrorContextProvider>
  );

  test("Should render word pair with correct text, images and not render the edit form.", () => {
    const { getByAltText, getByText, queryByTestId, getByTestId } = render(
      createRenderTree(props)
    );

    const deleteButton = getByAltText("Delete");
    const editButton = getByAltText("Edit");

    expect(getByTestId("word-pair-container")).toBeTruthy();

    expect(getByText(word)).toBeTruthy();
    expect(getByText(transaltion)).toBeTruthy();
    expect(deleteButton).toBeTruthy();
    expect(editButton).toBeTruthy();

    expect(queryByTestId("edit-form")).toBeFalsy();
  });

  test("Should render the edit form with correct children after edit button is clicked.", () => {
    const {
      getByAltText,
      getByText,
      getByTestId,
      getByPlaceholderText
    } = render(createRenderTree(props));

    const editButton = getByAltText("Edit");

    fireEvent.click(editButton);
    expect(getByTestId("edit-form")).toBeTruthy();
    expect(getByTestId("edit-form").children.length).toBe(2);
    expect(getByPlaceholderText("Foreign word")).toBeTruthy();
    expect(getByPlaceholderText("Translation")).toBeTruthy();
    expect(getByText("Submit")).toBeTruthy();
  });
});
