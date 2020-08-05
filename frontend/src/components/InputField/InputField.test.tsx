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
  };

  const { placeholder, name, value, type } = props;

  test("Should render correct props and have a correct class when Autocomplete and Small props are set to true", () => {
    const { getByPlaceholderText } = render(<InputField {...props} />);

    const input = getByPlaceholderText(placeholder);

    expect(input).toBeTruthy();
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
    };

    const { getByPlaceholderText } = render(<InputField {...updatedProps} />);

    const input = getByPlaceholderText(placeholder);

    expect(input).toHaveAttribute("autoComplete", "off");
    expect(input).toHaveClass("InputField");
  });
});
