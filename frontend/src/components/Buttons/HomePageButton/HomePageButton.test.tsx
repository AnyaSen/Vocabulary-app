import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import HomePageButton from "./HomePageButton";

describe("<HomePageButton />", () => {
  afterAll(cleanup);

  const props = {
    imgSrc: "imgSrc",
    imgAlt: "Vocabulary;",
    linkTo: "/vocabulary",
    buttonMessage: "Vocabulary",
    buttonDescription: "To add and browse words"
  };

  const { buttonMessage, buttonDescription, imgAlt, linkTo, imgSrc } = props;

  test("Should render correct text, img and href", () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <HomePageButton {...props} />
      </BrowserRouter>
    );

    expect(getByText(buttonMessage)).toBeTruthy();
    expect(getByText(buttonDescription)).toBeTruthy();
    expect(getByAltText(imgAlt)).toHaveAttribute("src", imgSrc);
    expect(document.querySelector("a")).toHaveAttribute("href", linkTo);
  });
});
