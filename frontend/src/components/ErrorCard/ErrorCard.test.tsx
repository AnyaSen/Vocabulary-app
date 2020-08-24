import React from "react";
import { render, cleanup } from "@testing-library/react";

import ErrorCard from "./ErrorCard";
import { LanguageContext } from "../../contexts/LanguageContext";

describe("<ErrorCard />", () => {
  afterAll(cleanup);

  test("Should render correct text and image", () => {
    const { getByText, getByAltText } = render(
      <LanguageContext.Provider
        value={{ language: "English", setLanguage: () => {} }}
      >
        <ErrorCard />
      </LanguageContext.Provider>
    );

    expect(getByText("Sorry, an error has occured.")).toBeTruthy();
    expect(getByAltText("Error")).toBeTruthy();
  });
});
