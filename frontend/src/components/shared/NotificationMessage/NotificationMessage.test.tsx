import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NotificationMessage from "./NotificationMessage";
import { BrowserRouter } from "react-router-dom";

describe("<NotificationMessage />", () => {
  afterAll(cleanup);

  const props = {
    text: "text",
    linkMessage: "link message",
    linkRoute: "/"
  };

  const { text, linkMessage, linkRoute } = props;

  test("Should render correct text, link message and have correct href", () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <NotificationMessage {...props} />
      </BrowserRouter>
    );

    expect(getByText(text)).toBeTruthy();
    expect(getByText(linkMessage)).toBeTruthy();
    expect(getByTestId("notification-link")).toHaveAttribute("href", linkRoute);
  });
});
