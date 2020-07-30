import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import InitialPageButton from "./InitialPageButton";

describe("<InitialPageButton />", () => {
  afterAll(cleanup);

  const props = {
    imgSrc: "",
    imgAlt: "imgAlt",
    linkTo: "/",
    buttonMessage: "BUTTON MESSAGE",
    buttonDescription: "button description"
  };

  const { imgAlt, imgSrc, linkTo, buttonMessage, buttonDescription } = props;

  test("Should render 3 children, correct text, img and href", () => {
    const { getByAltText, getByTestId, getByText } = render(
      <BrowserRouter>
        <InitialPageButton {...props} />
      </BrowserRouter>
    );

    expect(getByTestId("button-container").children.length).toBe(3);
    expect(getByAltText(imgAlt)).toHaveAttribute("src", imgSrc);
    expect(getByText(buttonMessage)).toBeTruthy();
    expect(getByText(buttonDescription)).toBeTruthy();
    expect(document.querySelector("a")).toHaveAttribute("href", linkTo);
  });
});
