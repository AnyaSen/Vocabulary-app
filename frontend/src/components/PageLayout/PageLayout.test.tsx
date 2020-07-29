import React from "react";
import { render, cleanup } from "@testing-library/react";
import { LanguageContextProvider } from "../../contexts/LanguageContext";

import PageLayout from "./PageLayout";

describe("<PageLayout />", () => {
  afterEach(cleanup);

  const props = {
    header: "Header",
    headerAfterBreak: "Header after break",
    subHeader: "sub header",
    span: "span text",
    subHeaderAferSpan: "after span",
    childrenFlexColumn: true,
    showLogo: true,
    showLanguageSelector: true
  };

  const {
    header,
    headerAfterBreak,
    subHeader,
    span,
    subHeaderAferSpan
  } = props;

  const createRenderTree = props => (
    <LanguageContextProvider>
      <PageLayout {...props}>
        <p>child 1</p>
        <p>child 2</p>
        <p>child 3</p>
        <p>child 4</p>
      </PageLayout>
    </LanguageContextProvider>
  );

  test("Should render correct amount of children and display correct text", () => {
    const { getByTestId, getByText } = render(createRenderTree(props));

    expect(getByTestId("children-container").children.length).toBe(4);
    expect(getByText(header + headerAfterBreak)).toBeTruthy();
    expect(getByText(subHeader + subHeaderAferSpan)).toBeTruthy();
    expect(getByText(span)).toBeTruthy();
  });

  test("Should render 3 children when showLogo or showLanguageSelector is true and display an image when showLogo is true", () => {
    const { getByTestId, getByAltText } = render(createRenderTree(props));

    expect(getByTestId("page-layout").children.length).toBe(3);
    expect(getByAltText("Logo")).toBeTruthy();
  });

  test("Should render 2 children and not display logo and language selector when showLogo and showLanguageSelector are false", () => {
    const updatedProps = {
      ...props,
      showLogo: false,
      showLanguageSelector: false
    };

    const { getByTestId, queryByTestId } = render(
      createRenderTree(updatedProps)
    );

    expect(getByTestId("page-layout").children.length).toBe(2);
    expect(queryByTestId("logo-and-language-selector-container")).toBeFalsy();
  });
});
