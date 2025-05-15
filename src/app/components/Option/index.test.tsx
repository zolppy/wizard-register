import { render, screen } from "@testing-library/react";
import { Option } from "@/app/components/Option";
import "@testing-library/jest-dom";

describe("Option Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<Option>{children}</Option>);
    expect(screen.getByRole("option")).toHaveTextContent(children);
  });

  it("should accept and use custom props", function () {
    render(
      <Option disabled label="drink" value="coffee">
        {children}
      </Option>
    );

    const optionElement = screen.getByRole("option");

    expect(optionElement).toHaveAttribute("disabled");
    expect(optionElement).toHaveAttribute("label", "drink");
    expect(optionElement).toHaveAttribute("value", "coffee");
  });
});
