import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Loader from "./Loader";

describe("<Loader />", () => {
  afterAll(cleanup);

  test("Should render 3 children-dots, have correct text and class", () => {
    const { getByText, getByTestId } = render(<Loader />);

    expect(getByTestId("loader").children.length).toBe(3);
    expect(getByText("LOADING")).toBeTruthy();
    expect(getByTestId("loader-container")).toHaveClass("Loader");
  });

  test("Should render 3 children-dots, have no text and have a correct class when 'small' prop is passed", () => {
    const { queryByText, getByTestId } = render(<Loader small />);

    expect(getByTestId("loader").children.length).toBe(3);
    expect(getByTestId("loader-container")).toHaveClass("smallLoader");
    expect(queryByText("LOADING")).toBeFalsy();
  });
});
