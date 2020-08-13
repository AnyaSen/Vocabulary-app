import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LearningWordCard from "./LearningWordCard";

describe("<LearningWordCard />", () => {
  afterAll(cleanup);

  const createRenderTree = props => (
    <LearningWordCard {...props}>
      <p>child 1</p>
      <p>child 2</p>
      <p>child 3</p>
    </LearningWordCard>
  );

  const props = {
    borderColor: "green"
  };

  test("Should render correct number of children and correct class when borderColor is set to green", () => {
    const { getByTestId } = render(createRenderTree(props));

    const wordCard = getByTestId("word-card");

    expect(wordCard.children.length).toBe(3);
    expect(wordCard).toHaveClass("LearningWordCardGreen");
  });

  test("Should render correct class when borderColor is set to red", () => {
    const updatedProps = {
      borderColor: "red"
    };

    const { getByTestId } = render(createRenderTree(updatedProps));

    expect(getByTestId("word-card")).toHaveClass("LearningWordCardRed");
  });

  test("Should render correct class when borderColor is set to yellow", () => {
    const updatedProps = {
      borderColor: "yellow"
    };

    const { getByTestId } = render(createRenderTree(updatedProps));

    expect(getByTestId("word-card")).toHaveClass("LearningWordCardYellow");
  });

  test("Should render correct class when borderColor is not specified", () => {
    const updatedProps = {
      borderColor: ""
    };

    const { getByTestId } = render(createRenderTree(updatedProps));

    expect(getByTestId("word-card")).toHaveClass("LearningWordCard");
  });
});
