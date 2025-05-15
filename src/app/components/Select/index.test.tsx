import { render, screen } from "@testing-library/react";
import { Select } from "@/app/components/Select";
import "@testing-library/jest-dom";

describe("Select Component", function () {
  const children = "Some text";

  it("should render children correctly", function () {
    render(<Select>{children}</Select>);
    expect(screen.getByRole("combobox")).toHaveTextContent(children);
  });

  it("should accept and use custom props", function () {
    render(
      <Select
        id="options"
        name="options"
        autoComplete="on"
        autoCorrect="on"
        autoCapitalize="on"
        autoSave="on"
        disabled
        form="myform"
        multiple
        required
        size={40}
      >
        {children}
      </Select>
    );

    const selectElement = screen.getByRole("listbox");

    expect(selectElement).toHaveAttribute("id", "options");
    expect(selectElement).toHaveAttribute("name", "options");
    expect(selectElement).toHaveAttribute("autocomplete", "on");
    expect(selectElement).toHaveAttribute("autocorrect", "on");
    expect(selectElement).toHaveAttribute("autocapitalize", "on");
    expect(selectElement).toHaveAttribute("autosave", "on");
    expect(selectElement).toHaveAttribute("disabled");
    expect(selectElement).toHaveAttribute("form", "myform");
    expect(selectElement).toHaveAttribute("multiple");
    expect(selectElement).toHaveAttribute("required");
    expect(selectElement).toHaveAttribute("size", "40");
  });
});
