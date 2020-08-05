import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import SignupLoginForm from "./SignupLoginForm";
import { BrowserRouter } from "react-router-dom";

describe("<SignupLoginForm />", () => {
  afterEach(cleanup);

  const props = {
    handleSubmit: () => {},
    header: "Header",
    buttonMessage: "button message",
    paragraphMessage: "paragraph message",
    route: "/",
    linkMessage: "link message"
  };

  const { buttonMessage, paragraphMessage, route, linkMessage } = props;

  const createRenderTree = props => (
    <BrowserRouter>
      <SignupLoginForm {...props}>
        <p>child 1</p>
        <p>child 2</p>
        <p>child 3</p>
        <p>child 4</p>
      </SignupLoginForm>
    </BrowserRouter>
  );

  test("Should render 5 children inside the form, correct amount of inputs(children), correct route and display correct text and uppercased header", () => {
    const { getByTestId, getByText } = render(createRenderTree(props));

    expect(getByTestId("form").children.length).toBe(5);
    expect(getByText("HEADER")).toBeTruthy();
    expect(getByText(buttonMessage)).toBeTruthy();
    expect(getByText(paragraphMessage)).toBeTruthy();
    expect(getByText(linkMessage)).toBeTruthy();
    expect(document.querySelector("a")).toHaveAttribute("href", route);
  });
});
