import { render, screen } from "@testing-library/react";
import { CheckWrapper } from "@/app/components/CheckWrapper";
import "@testing-library/jest-dom";

describe("CheckWrapper Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<CheckWrapper>{children}</CheckWrapper>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
