import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SecondaryButton from "./SecondaryButton";

describe("<SecondaryButton />", () => {
  afterAll(cleanup);

  const props = {
    buttonMessage: "message",
    value: "value",
    buttonColor: "pink",
    type: "submit",
    onClick: () => {
      console.log('Clicked"');
    }
  };

  const { buttonMessage, value, type } = props;

  test("Should render correct props and have correct class when buttonColor is set to pink", () => {
    const { getByText, getByTestId } = render(<SecondaryButton {...props} />);

    const button = getByTestId("button");

    expect(getByText(buttonMessage)).toBeTruthy();
    expect(button).toHaveClass("SecondaryButtonPink");
    expect(button).toHaveAttribute("value", value);
    expect(button).toHaveAttribute("type", type);
  });

  test("Should have correct class when buttonColor is not specified", () => {
    const updatedProps = {
      buttonColor: ""
    };

    const { getByTestId } = render(<SecondaryButton {...updatedProps} />);

    expect(getByTestId("button")).toHaveClass("SecondaryButtonWhite");
  });
});
