import React from "react";
import { render, cleanup } from "@testing-library/react";

import Loader from "./Loader";

describe("<Loader />", () => {
  afterAll(cleanup);

  test("Should render 3 children-dots and correct text", () => {
    const { getByText, getByTestId } = render(<Loader />);

    expect(getByTestId("loader").children.length).toBe(3);
    expect(getByText("LOADING")).toBeTruthy();
  });
});
