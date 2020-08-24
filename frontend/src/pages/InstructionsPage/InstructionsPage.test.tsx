import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import InstructionsPage from "./InstructionsPage";

import { LanguageContext } from "../../contexts/LanguageContext";

describe("<InstructionsPage />", () => {
  afterAll(cleanup);

  const tree = (
    <BrowserRouter>
      <LanguageContext.Provider
        value={{ language: "English", setLanguage: () => {} }}
      >
        <InstructionsPage />
      </LanguageContext.Provider>
    </BrowserRouter>
  );

  test("Should render 3 children correct text, an image and an iframe.", () => {
    const { getByAltText, getByTitle, getByTestId, getByText } = render(tree);

    expect(getByTestId("instructions-page-container").children.length).toBe(3);
    expect(getByAltText("Go Back")).toBeTruthy();
    expect(getByTitle("instructionsVideo")).toBeTruthy();
    expect(getByTestId("instruction-cards-container")).toBeTruthy();
    expect(getByText("Instructions")).toBeTruthy();
  });
});
