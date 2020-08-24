import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import SideBar from "./SideBar";

import { LanguageContext } from "../../../contexts/LanguageContext";

describe("<SideBar />", () => {
  afterAll(cleanup);

  const tree = (
    <BrowserRouter>
      <LanguageContext.Provider
        value={{ language: "English", setLanguage: () => {} }}
      >
        <SideBar />
      </LanguageContext.Provider>
    </BrowserRouter>
  );

  test("Should render 3 children", () => {
    const { getByTestId } = render(tree);

    expect(getByTestId("sidebar").children.length).toBe(3);
  });
});
