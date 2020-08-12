import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

import Layout from "./Layout";

import { NavBarConext } from "../../contexts/NavBarConext";
import { LanguageContextProvider } from "../../contexts/LanguageContext";

describe("<Layout />", () => {
  afterAll(cleanup);

  const createRenderTree = (isBurgerOpen: boolean) => (
    <BrowserRouter>
      <LanguageContextProvider>
        <NavBarConext.Provider value={{ isBurgerOpen: isBurgerOpen }}>
          <Layout>
            <p>child 1</p>
            <p>child 2</p>
            <p>child 3</p>
          </Layout>
        </NavBarConext.Provider>
      </LanguageContextProvider>
    </BrowserRouter>
  );

  test("Should render a correct navbar and correct amount of children when isBurgerOpen false", () => {
    const { getByTestId } = render(createRenderTree(false));

    const navbar = getByTestId("navbar");

    expect(navbar).toBeTruthy();
    expect(navbar.children.length).toBe(4);
  });

  test("Should render a correct navbar when isBurgerOpen true", () => {
    const { queryByTestId, getByTestId } = render(createRenderTree(true));

    expect(queryByTestId("navbar")).toBeFalsy();
  });
});
