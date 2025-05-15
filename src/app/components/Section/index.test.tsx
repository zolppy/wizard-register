import { render, screen } from "@testing-library/react";
import { Section } from "@/app/components/Section";
import "@testing-library/jest-dom";

describe("Section Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<Section>{children}</Section>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
