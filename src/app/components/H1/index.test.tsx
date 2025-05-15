import { render, screen } from "@testing-library/react";
import { H1 } from "@/app/components/H1";
import "@testing-library/jest-dom";

describe("H1 Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<H1>{children}</H1>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
