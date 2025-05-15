import { render, screen } from "@testing-library/react";
import { P } from "@/app/components/P";
import "@testing-library/jest-dom";

describe("P Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<P>{children}</P>);
    expect(screen.getByRole("paragraph")).toHaveTextContent(children);
  });

  it("should merge classes correctly", function () {
    const customClass = "text-red-500";

    render(<P className={customClass}>{children}</P>);

    const pElement = screen.getByRole("paragraph");
    const baseStyle = ["text-justify"];

    baseStyle.forEach((baseStyle) => expect(pElement).toHaveClass(baseStyle));

    expect(pElement).toHaveClass(customClass);
  });
});
