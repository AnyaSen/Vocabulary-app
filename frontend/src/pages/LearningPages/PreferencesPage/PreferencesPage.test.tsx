import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import PreferencesPage from "./PreferencesPage";

import { LanguageContext } from "../../../contexts/LanguageContext";
import { WordsContext } from "../../../contexts/WordsContext";
import { ErrorContextProvider } from "../../../contexts/ErrorContext";
import { LoadingContextProvider } from "../../../contexts/LoadingContext";
import { BrowseContextProvider } from "../../../contexts/BrowseContext";
import { NavBarConextProvider } from "../../../contexts/NavBarConext";

describe("<PreferencesPage />", () => {
  afterAll(cleanup);

  const createRenderTree = (
    noWords: boolean,
    noNewWords: boolean,
    noLearningWords: boolean,
    noLearnedWords: boolean
  ) => (
    <BrowserRouter>
      <LanguageContext.Provider value={{ language: "English" }}>
        <ErrorContextProvider>
          <LoadingContextProvider>
            <WordsContext.Provider
              value={{
                noWords: noWords,
                noNewWords: noNewWords,
                noLearningWords: noLearningWords,
                noLearnedWords: noLearnedWords
              }}
            >
              <NavBarConextProvider>
                <BrowseContextProvider>
                  <PreferencesPage />
                </BrowseContextProvider>
              </NavBarConextProvider>
            </WordsContext.Provider>
          </LoadingContextProvider>
        </ErrorContextProvider>
      </LanguageContext.Provider>
    </BrowserRouter>
  );

  test("Should render correct content when noWords is set to rue.", () => {
    const { queryByTestId, getByTestId } = render(
      createRenderTree(true, false, false, false)
    );

    expect(getByTestId("notification-message")).toBeTruthy();
    expect(queryByTestId("preferences")).toBeFalsy();
  });

  test("Should render correct content when noWords is set to false.", () => {
    const { getByTestId, queryByTestId } = render(
      createRenderTree(false, false, false, false)
    );

    expect(queryByTestId("notification-message")).toBeFalsy();
    expect(getByTestId("preferences")).toBeTruthy();
    expect(getByTestId("preferences").children.length).toBe(2);
  });

  test("Should render correct button text.", () => {
    const { getByText, queryByText, getByTestId, queryByTestId } = render(
      createRenderTree(false, false, false, false)
    );
    expect(queryByTestId("explanatory-card")).toBeFalsy();

    fireEvent.click(getByText("Show word types"));

    expect(getByText("Close word types")).toBeTruthy();
    expect(queryByText("Show word types")).toBeFalsy();
    expect(getByTestId("explanatory-card")).toBeTruthy();
  });

  test("Should show existing word types in the form.", () => {
    const { getByText } = render(createRenderTree(false, false, false, false));

    expect(getByText("New words")).toBeTruthy();
    expect(getByText("Learning words")).toBeTruthy();
    expect(getByText("Learned words")).toBeTruthy();
  });

  test("Should show existing word types in the form.", () => {
    const { queryByText } = render(createRenderTree(false, true, false, true));

    expect(queryByText("New words")).toBeFalsy();
    expect(queryByText("Learning words")).toBeTruthy();
    expect(queryByText("Learned words")).toBeFalsy();
  });
});
