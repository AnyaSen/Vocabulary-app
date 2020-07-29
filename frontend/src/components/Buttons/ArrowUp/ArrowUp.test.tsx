import React from "react";
import { render, cleanup } from "@testing-library/react";

import ArrowUp from "./ArrowUp";

describe("<ArrowUp />", () => {
  afterAll(cleanup);

  test("Should render an image", () => {
    const { getByAltText } = render(
      <ArrowUp
        onClick={() => {
          console.log("Clicked");
        }}
      />
    );

    expect(getByAltText("Go up")).toBeTruthy();
  });
});
