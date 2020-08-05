import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputFieldSmall from "./InputFieldSmall";

describe("<InputFieldSmall />", () => {
  const props = {
    placeholder: "placeholder",
    name: "name",
    value: "value",
    onChange: jest.fn(),
    type: "password",
    labelText: "Label"
  };

  const { placeholder, name, value, type, labelText } = props;

  test("Should render correct props and have a correct class when Autocomplete and Small props are set to true", () => {
    const { getByPlaceholderText, getByText } = render(
      <InputFieldSmall {...props} />
    );

    expect(getByText(labelText)).toBeTruthy();

    const input = getByPlaceholderText(placeholder);

    expect(input).toBeTruthy();
    expect(input).toHaveAttribute("type", type);
    expect(input).toHaveAttribute("value", value);
    expect(input).toHaveAttribute("name", name);
  });
});
