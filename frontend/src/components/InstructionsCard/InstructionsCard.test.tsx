import React from "react";
import { render, cleanup } from "@testing-library/react";

import InstructionsCard from "./InstructionsCard";

describe("<InstructionsCard />", () => {
  afterAll(cleanup);

  const props = {
    text: "Some text",
    textafterBreak: "Some other text",
    instructionNumber: "5"
  };

  const { text, textafterBreak, instructionNumber } = props;

  test("Should render correct text and 2 children", () => {
    const { getByText, getByTestId } = render(<InstructionsCard {...props} />);

    expect(getByText(text + textafterBreak)).toBeTruthy();
    expect(getByTestId("instructions-card-container").children.length).toBe(2);
    expect(getByText(instructionNumber)).toBeTruthy();
  });
});
