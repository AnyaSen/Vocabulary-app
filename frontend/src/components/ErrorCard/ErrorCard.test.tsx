import React from "react";
import { render, cleanup } from "@testing-library/react";

import ErrorCard from "./ErrorCard";

describe("<ErrorCard />", () => {
  afterAll(cleanup);

  test("Should render correct text and image", () => {
    const { getByText, getByAltText } = render(<ErrorCard />);

    expect(getByText("Sorry, an error has occured.")).toBeTruthy();
    expect(getByAltText("Error")).toBeTruthy();
  });
});
