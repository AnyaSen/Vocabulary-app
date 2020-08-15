import React from "react";
import { render, cleanup } from "@testing-library/react";

import WordCard from "./WordCard";

describe("<WordCard />", () => {
  afterAll(cleanup);

  const tree = (
    <WordCard>
      <p>child 1</p>
      <p>child 2</p>
      <p>child 3</p>
      <p>child 4</p>
    </WordCard>
  );

  test("Should render correct amount of children.", () => {
    const { getByTestId } = render(tree);

    expect(getByTestId("word-card").children.length).toBe(4);
  });
});
