import { render, screen } from "@testing-library/react";
import { InputWrapper } from "@/app/components/InputWrapper";
import "@testing-library/jest-dom";

describe("InputWrapper Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<InputWrapper>{children}</InputWrapper>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
