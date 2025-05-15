import { render, screen } from "@testing-library/react";
import { InputLabel } from "@/app/components/InputLabel";
import "@testing-library/jest-dom";

describe("InputLabel Component", function () {
  const children = "Some text";

  it("should render children corrrectly", function () {
    render(<InputLabel>{children}</InputLabel>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it("should accept and use custom props", function () {
    const htmlFor = "coffee";
    render(<InputLabel htmlFor={htmlFor}>{children}</InputLabel>);
    expect(screen.getByText(children)).toHaveAttribute("for", htmlFor);
  });
});
