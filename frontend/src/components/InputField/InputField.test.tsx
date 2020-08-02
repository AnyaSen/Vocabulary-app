import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputField from "./InputField";

describe("<InputField />", () => {
  const props = {
    placeholder: "placeholder",
    name: "name",
    value: "value",
    onChange: jest.fn(),
    type: "email",
    autocompleteON: true,
    small: true
    //   refInput
  };

  const { placeholder, name, value, type } = props;

  test("Should render correct props and have a correct class when Autocomplete and Small props are set to true", () => {
    const { getByTestId, getByPlaceholderText } = render(
      <InputField {...props} />
    );

    const input = getByTestId("input-field");

    expect(getByPlaceholderText(placeholder)).toBeTruthy();
    expect(input).toHaveAttribute("type", type);
    expect(input).toHaveAttribute("value", value);
    expect(input).toHaveAttribute("name", name);
    expect(input).toHaveAttribute("autoComplete", "on");
    expect(input).toHaveClass("smallInputField");
  });

  test("Should render correct props and have a correct class when Autocomplete and Small props are set to false", () => {
    const updatedProps = {
      ...props,
      autocompleteON: false,
      small: false
      //   refInput
    };

    const { getByTestId, getByPlaceholderText } = render(
      <InputField {...updatedProps} />
    );

    const input = getByTestId("input-field");

    expect(input).toHaveAttribute("autoComplete", "off");
    expect(input).toHaveClass("InputField");
  });
});
