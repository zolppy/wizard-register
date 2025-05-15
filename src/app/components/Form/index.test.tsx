import { render, screen } from "@testing-library/react";
import { Form } from "@/app/components/Form";
import "@testing-library/jest-dom";

describe("Form Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<Form>{children}</Form>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it("should accept and use custom props", function () {
    const name = "name";

    render(<Form name={name}>{children}</Form>);

    expect(screen.getByRole("form")).toHaveAttribute("name", name);
  });
});
