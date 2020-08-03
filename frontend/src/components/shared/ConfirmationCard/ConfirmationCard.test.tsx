import React from "react";
import { render, cleanup } from "@testing-library/react";

import ConfirmationCard from "./ConfirmationCard";

describe("<ConfirmationCard />", () => {
  afterAll(cleanup);

  const props = {
    confQuestion: "Do you want to delete an account?",
    confAnswerOne: "YES",
    confAnswerTwo: "NO",
    answerOneOnClick: () => {
      console.log("yes");
    },
    answerTwoOnClick: () => {
      console.log("no");
    }
  };

  const { confQuestion, confAnswerOne, confAnswerTwo } = props;

  test("Should render correct text", () => {
    const { getByText } = render(<ConfirmationCard {...props} />);

    expect(getByText(confQuestion)).toBeTruthy();
    expect(getByText(confAnswerOne)).toBeTruthy();
    expect(getByText(confAnswerTwo)).toBeTruthy();
  });
});
