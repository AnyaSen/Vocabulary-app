import React from "react";
import { render, cleanup } from "@testing-library/react";

import ExplanatoryWordsCard from "./ExplanatoryWordsCard";
import { LanguageContext } from "../../../contexts/LanguageContext";

describe("<ExplanatoryWordsCard />", () => {
  afterAll(cleanup);

  test("Should render 4 children and correct text", () => {
    const { getByText, getByTestId } = render(
      <LanguageContext.Provider
        value={{ language: "English", setLanguage: () => {} }}
      >
        <ExplanatoryWordsCard />
      </LanguageContext.Provider>
    );

    expect(getByTestId("explanatory-card").children.length).toBe(4);
    expect(getByText("- added but not reviewed yet")).toBeTruthy();
    expect(getByText("- reviewed but not learned")).toBeTruthy();
    expect(getByText("- learned well")).toBeTruthy();
    expect(getByText("New")).toBeTruthy();
    expect(getByText("Learning")).toBeTruthy();
    expect(getByText("Learned")).toBeTruthy();
    expect(getByText("WORDS")).toBeTruthy();
  });
});
