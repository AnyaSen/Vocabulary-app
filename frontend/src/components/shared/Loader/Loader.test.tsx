import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loader from "./Loader";
import { LanguageContext } from "../../../contexts/LanguageContext";

const createRenderTree = (small: boolean) => (
  <LanguageContext.Provider value={{ language: "English" }}>
    <Loader small={small} />
  </LanguageContext.Provider>
);

describe("<Loader />", () => {
  afterAll(cleanup);

  test("Should render 3 children-dots, have correct text and class", () => {
    const { getByText, getByTestId } = render(createRenderTree(false));

    expect(getByTestId("loader").children.length).toBe(3);
    expect(getByText("LOADING")).toBeTruthy();
    expect(getByTestId("loader-container")).toHaveClass("Loader");
  });

  test("Should render 3 children-dots, have no text and have a correct class when 'small' prop is passed", () => {
    const { queryByText, getByTestId } = render(createRenderTree(true));

    expect(getByTestId("loader").children.length).toBe(3);
    expect(getByTestId("loader-container")).toHaveClass("smallLoader");
    expect(queryByText("LOADING")).toBeFalsy();
  });
});
