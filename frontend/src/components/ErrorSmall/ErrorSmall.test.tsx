import React from "react";
import { render, cleanup } from "@testing-library/react";

import ErrorSmall from "./ErrorSmall";

describe("<ErrorSmall />", () => {
  afterAll(cleanup);

  test("Should render correct text", () => {
    const { getByText } = render(<ErrorSmall onClick={() => {}} />);

    expect(getByText("Error")).toBeTruthy();
    expect(getByText("x")).toBeTruthy();
  });
});
