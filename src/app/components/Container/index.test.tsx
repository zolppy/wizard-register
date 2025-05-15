import { render, screen } from "@testing-library/react";
import { Container } from "@/app/components/Container";
import "@testing-library/jest-dom";

describe("Container Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<Container>{children}</Container>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
