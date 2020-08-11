import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import BurgerBar from "./BurgerBar";

import { LanguageContext } from "../../../contexts/LanguageContext";
import { NavBarConext } from "../../../contexts/NavBarConext";

describe("<BurgerBar />", () => {
  afterAll(cleanup);

  const createRenderTree = (isBurgerOpen: boolean) => (
    <BrowserRouter>
      <LanguageContext.Provider value={{ language: "English" }}>
        <NavBarConext.Provider value={{ isBurgerOpen: isBurgerOpen }}>
          <BurgerBar />
        </NavBarConext.Provider>
      </LanguageContext.Provider>
    </BrowserRouter>
  );

  test("Should render am img with the correct alt text and not render an open burger bar when isBurgerOpen is false", () => {
    const { queryByTestId, getByAltText, queryByAltText } = render(
      createRenderTree(false)
    );

    expect(queryByTestId("burger-bar-open")).toBeFalsy();
    expect(getByAltText("menu")).toBeTruthy();
    expect(queryByAltText("close")).toBeFalsy();
  });

  test("Should render an open burger bar with correct amount of clidren, correct text and link when isBurgerOpen is true", () => {
    const {
      getByTestId,
      getByAltText,
      queryByAltText,
      getByText,
      getByRole
    } = render(createRenderTree(true));

    expect(getByTestId("burger-card").children.length).toBe(3);
    expect(getByTestId("links-container").children.length).toBe(3);
    expect(getByTestId("burger-bar-open")).toBeTruthy();
    expect(getByText("?")).toBeTruthy();
    expect(getByText("HOW TO USE")).toBeTruthy();
    expect(queryByAltText("menu")).toBeFalsy();
    expect(getByAltText("close")).toBeTruthy();
    expect(getByTestId("instructions-link")).toHaveAttribute(
      "href",
      "/instructions"
    );
  });
});
