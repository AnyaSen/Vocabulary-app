import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserLetter from "./UserLetter";

import { LanguageContext } from "../../../contexts/LanguageContext";

describe("<UserLetter />", () => {
  afterEach(cleanup);

  const createRenderTree = props => (
    <LanguageContext.Provider
      value={{ language: "English", setLanguage: () => {} }}
    >
      <UserLetter {...props} />
    </LanguageContext.Provider>
  );

  const props = {
    inCircle: true
  };

  test("Should render 2 children, have correct class and render an img when inCircle prop is set to true, ", () => {
    const { getByTestId, getByAltText } = render(createRenderTree(props));

    expect(getByTestId("user-letter").children.length).toBe(2);
    expect(getByTestId("user-letter")).toHaveClass("userLetterInCircle");
    expect(getByAltText("delete account")).toBeTruthy();
  });

  test("Should open confirmation card when delete button is clicked and close it when NO is clicked.", () => {
    const { getByTestId, getByAltText, getByText, queryByTestId } = render(
      createRenderTree(props)
    );

    const deleteButton = getByAltText("delete account");

    fireEvent.click(deleteButton);

    expect(getByTestId("confirmation-card")).toBeTruthy();

    const noButton = getByText("NO");

    fireEvent.click(noButton);

    expect(queryByTestId("confirmation-card")).toBeFalsy();
  });

  test("Should open confirmation card two and name input form is YES is clicked everywhere, show the error when final Delete is pressed with an empty input, close the form when Cancel is clicked.", () => {
    const { getByTestId, getByAltText, getByText, queryByTestId } = render(
      createRenderTree(props)
    );

    const deleteButton = getByAltText("delete account");

    fireEvent.click(deleteButton);

    expect(getByTestId("confirmation-card")).toBeTruthy();

    const yesButton = getByText("YES");

    fireEvent.click(yesButton);

    expect(getByTestId("confirmation-card-two")).toBeTruthy();

    const yesButtonTwo = getByText("YES");

    fireEvent.click(yesButtonTwo);

    expect(getByTestId("form")).toBeTruthy();
    expect(queryByTestId("confirmation-card-two")).toBeFalsy();

    const deleteButtonTwo = getByText("Delete");

    fireEvent.click(deleteButtonTwo);

    expect(getByText("The filed is empty")).toBeTruthy();

    const cancelButton = getByText("Cancel");

    fireEvent.click(cancelButton);

    expect(queryByTestId("form")).toBeFalsy();
  });

  test("Should render 1 child, have correct class and a button when inCircle prop is set to false.", () => {
    const updatedProps = {
      inCircle: false
    };

    const { getByTestId, getByText } = render(createRenderTree(updatedProps));

    expect(getByTestId("user-letter").children.length).toBe(1);
    expect(getByTestId("user-letter")).toHaveClass("userLetter");
    expect(getByText("DELETE ACCOUNT")).toBeTruthy();
  });

  test("Should open confirmation card when delete button is clicked.", () => {
    const updatedProps = {
      inCircle: false
    };

    const { getByTestId, getByText } = render(createRenderTree(updatedProps));

    const deleteButton = getByText("DELETE ACCOUNT");

    fireEvent.click(deleteButton);

    expect(getByTestId("confirmation-card")).toBeTruthy();
  });
});
