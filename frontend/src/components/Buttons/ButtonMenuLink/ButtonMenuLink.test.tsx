import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import ButtonMenuLink from "./ButtonMenuLink";

describe("<ButtonMenuLink />", () => {
  afterAll(cleanup);

  const props = {
    buttonMessage: "Button Message",
    linkTo: "/",
    onClick: () => {
      console.log('Clicked"');
    }
  };

  const { buttonMessage } = props;

  test("Should render correct text and href", () => {
    const { getByText } = render(
      <BrowserRouter>
        <ButtonMenuLink {...props} />
      </BrowserRouter>
    );

    expect(getByText(buttonMessage)).toBeTruthy();
    expect(document.querySelector("a")).toHaveAttribute("href", "/");
  });
});
