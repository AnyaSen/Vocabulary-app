import React from "react";
import { render, cleanup } from "@testing-library/react";

import WarningMessage from "./WarningMessage";

describe("<WarningMessage />", () => {
  afterAll(cleanup);

  test("Should render correct text", () => {
    const { getByText } = render(
      <WarningMessage warnMessage="Some warning!" />
    );

    expect(getByText("Some warning!")).toBeTruthy();
  });
});
