import { render, screen } from "@testing-library/react";
import { Main } from "@/app/components/Main";
import "@testing-library/jest-dom";

describe("Main Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<Main>{children}</Main>);
    expect(screen.getByText(children)).toBeInTheDocument();
  });
});
