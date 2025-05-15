import { render, screen } from "@testing-library/react";
import { CheckContainer } from "@/app/components/CheckContainer";
import "@testing-library/jest-dom";

describe("CheckContainer Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<CheckContainer>{children}</CheckContainer>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
