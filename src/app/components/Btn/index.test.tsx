import { fireEvent, render, screen } from "@testing-library/react";
import { Btn } from "@/app/components/Btn";
import "@testing-library/jest-dom";

describe("Btn Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<Btn>{children}</Btn>);
    expect(screen.getByRole("button")).toHaveTextContent(children);
  });

  it("should accept and use custom props", function () {
    render(<Btn disabled>{children}</Btn>);
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });

  it("should have default type", function () {
    render(<Btn>{children}</Btn>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "button");
  });

  it("should accept and use custom type", function () {
    const customType = "submit";
    render(<Btn type={customType}>{children}</Btn>);
    expect(screen.getByRole("button")).toHaveAttribute("type", customType);
  });

  it("should call handleClick on click", function () {
    const handleClick = jest.fn();

    render(<Btn onClick={handleClick}>{children}</Btn>);

    const btnElement = screen.getByRole("button");

    fireEvent.click(btnElement);
    fireEvent.click(btnElement);
    fireEvent.click(btnElement);

    expect(handleClick).toHaveBeenCalledTimes(3);
  });
});
