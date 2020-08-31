import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import PrimaryButton from "./PrimaryButton";

describe("<PrimaryButton />", () => {
  afterAll(cleanup);

  const props = {
    buttonMessage: "message",
    value: "value",
    buttonColor: "white",
    type: "submit"
  };

  const { buttonMessage, value } = props;

  test("Should render correct props and have correct class when buttonColor is set to white", () => {
    const { getByText, getByTestId } = render(<PrimaryButton {...props} />);

    const button = getByTestId("button");

    expect(getByText(buttonMessage)).toBeTruthy();
    expect(button).toHaveClass("PrimaryButtonWhite");
    expect(button).toHaveAttribute("value", value);
  });

  test("Should have correct class when buttonColor is not specified", () => {
    const updatedProps = {
      ...props,
      buttonColor: ""
    };

    const { getByTestId } = render(<PrimaryButton {...updatedProps} />);

    expect(getByTestId("button")).toHaveClass("PrimaryButtonPink");
  });
});
