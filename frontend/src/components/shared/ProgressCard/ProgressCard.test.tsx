import React from "react";
import { render, cleanup } from "@testing-library/react";

import ProgressCard from "./ProgressCard";
import { LanguageContext } from "../../../contexts/LanguageContext";

describe("<ProgressCard />", () => {
  afterAll(cleanup);

  const props = {
    newWordsNum: 5,
    learningWordsNum: 4,
    learnedWordsNum: 0
  };

  test("Should render 2 children, show correct text and show 3 table rows", () => {
    const { getByTestId, getByText } = render(
      <LanguageContext.Provider value={{ language: "English" }}>
        <ProgressCard {...props} />
      </LanguageContext.Provider>
    );

    expect(getByTestId("progress-card").children.length).toBe(2);
    expect(getByTestId("progress-table-body").children.length).toBe(3);
    expect(getByText("PROGRESS")).toBeTruthy();
  });
});
