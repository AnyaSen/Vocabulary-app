import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import ArrowBack from "./ArrowBack";

describe("<ArrowBack />", () => {
  afterAll(cleanup);

  test("Should render an image and correct href", () => {
    const { getByAltText, getByTestId } = render(
      <BrowserRouter>
        <ArrowBack linkTo="/" />
      </BrowserRouter>
    );

    expect(getByAltText("Go Back")).toBeTruthy();
    expect(getByTestId("arrow-container")).toHaveAttribute("href", "/");
  });
});
