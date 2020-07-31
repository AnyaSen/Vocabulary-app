import React from "react";
import { render, cleanup } from "@testing-library/react";

import ProgressCardRow from "./ProgressCardRow";

describe("<ProgressCardRow />", () => {
  afterAll(cleanup);

  const props = {
    wordType: "New",
    number: 5
  };

  const { wordType, number } = props;

  test("Should render correct text", () => {
    const { getByText } = render(<ProgressCardRow {...props} />);

    expect(getByText(wordType)).toBeTruthy();
    // expect(getByText(number)).toBeTruthy();
  });
  console.error = jest.fn(); //to ignore a warning concerning tr inside a div
});
