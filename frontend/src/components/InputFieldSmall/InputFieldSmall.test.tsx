import React from "react";
import { render, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputFieldSmall from "./InputFieldSmall";

describe("<InputFieldSmall />", () => {
  const props = {
    name: "name",
    value: "value",
    onChange: jest.fn(),
    type: "password",
    labelText: "Label"
  };

  const { name, value, type, labelText } = props;

  test("Should render correct props and have a correct class when Autocomplete and Small props are set to true", () => {
    const { getByTestId, getByText } = render(<InputFieldSmall {...props} />);

    expect(getByText(labelText)).toBeTruthy();

    const input = getByTestId("small-input");

    expect(input).toBeTruthy();
    expect(input).toHaveAttribute("type", type);
    expect(input).toHaveAttribute("value", value);
    expect(input).toHaveAttribute("name", name);
  });
});
