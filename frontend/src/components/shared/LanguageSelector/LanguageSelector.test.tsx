import React from "react";
import { render, cleanup } from "@testing-library/react";

import LanguageSelector from "./LanguageSelector";
import { LanguageContextProvider } from "../../../contexts/LanguageContext";

describe("<LanguageSelector />", () => {
  afterAll(cleanup);

  test("Should render 2 children-images", () => {
    const { getByAltText, getByTestId } = render(
      <LanguageContextProvider>
        <LanguageSelector />
      </LanguageContextProvider>
    );

    expect(getByAltText("English")).toBeTruthy();
    expect(getByAltText("Russian")).toBeTruthy();
    expect(getByTestId("language-selector").children.length).toBe(2);
  });
});
