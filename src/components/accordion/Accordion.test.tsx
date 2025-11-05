import React from "react";
import { render } from "@testing-library/react";
import { Accordion } from "./Accordion";

describe("Accordion", () => {
  test("should render successfully", () => {
    const { baseElement } = render(<Accordion title="Test Accordion">Content</Accordion>);
    expect(baseElement).toBeTruthy();
  });
});