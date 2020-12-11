import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ConfirmationDeleteAccont from "./ConfirmationDeleteAccont";

import { LanguageContext } from "../../../contexts/LanguageContext";
import { ConfirmationCardContext } from "../../../contexts/ConfirmationCardContext";

describe("<ConfirmationDeleteAccont />", () => {
  afterEach(cleanup);

  const createRenderTree = (
    isDeleteAccountConfirmationOpen: boolean,
    areConfirmationInputsOpen: boolean
  ) => (
    <LanguageContext.Provider
      value={{ language: "English", setLanguage: () => {} }}
    >
      <ConfirmationCardContext.Provider
        value={{
          isDeleteAccountConfirmationOpen: isDeleteAccountConfirmationOpen,
          setIsDeleteAccountConfirmationOpen: () => {},
          areConfirmationInputsOpen: areConfirmationInputsOpen,
          setAreConfirmationInputsOpen: () => {}
        }}
      >
        <ConfirmationDeleteAccont />
      </ConfirmationCardContext.Provider>
    </LanguageContext.Provider>
  );

  test("Should render 1 child whend isDeleteAccountConfirmationOpen is set to true.", () => {
    const { getByTestId } = render(createRenderTree(true, false));

    expect(getByTestId("confirmation-card-container").children.length).toBe(1);
  });

  test("Should render 1 child whend areConfirmationInputsOpen is set to true and render a form with 2 children.", () => {
    const { getByTestId } = render(createRenderTree(false, true));

    expect(getByTestId("confirmation-card-container").children.length).toBe(1);
    expect(getByTestId("form").children.length).toBe(2);
  });
});
