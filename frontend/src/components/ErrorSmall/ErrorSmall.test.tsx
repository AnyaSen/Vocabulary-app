import React from "react";
import { render, cleanup } from "@testing-library/react";

import ErrorSmall from "./ErrorSmall";
import { LanguageContext } from "../../contexts/LanguageContext";

describe("<ErrorSmall />", () => {
  afterAll(cleanup);

  test("Should render correct text", () => {
    const { getByText } = render(
      <LanguageContext.Provider
        value={{ language: "English", setLanguage: () => {} }}
      >
        <ErrorSmall onClick={() => {}} />
      </LanguageContext.Provider>
    );

    expect(getByText("Error")).toBeTruthy();
    expect(getByText("x")).toBeTruthy();
  });
});
