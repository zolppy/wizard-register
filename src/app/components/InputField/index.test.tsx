import { render, screen } from "@testing-library/react";
import { InputField } from "@/app/components/InputField";
import "@testing-library/jest-dom";

describe("InputField Component", function () {
  it("should have default type", function () {
    const placeholder = "placeholder";

    render(<InputField placeholder={placeholder} />);

    const inputFieldElement = screen.getByPlaceholderText(placeholder);

    expect(inputFieldElement).toHaveAttribute("type", "text");
  });

  it("should accept and use custom props", function () {
    render(
      <InputField
        accept="accept"
        alt="alt"
        autoCapitalize="on"
        autoComplete="on"
        autoCorrect="on"
        autoFocus
        autoSave="on"
        capture
        checked
        disabled
        form="form"
        formEncType="formenctype"
        formMethod="formmethod"
        formNoValidate
        formTarget="formtarget"
        height={33}
        list="list"
        hidden
        max={22}
        maxLength={22}
        min={11}
        minLength={11}
        multiple
        name="name"
        pattern="pattern"
        placeholder="placeholder"
        popoverTarget="popovertarget"
        popoverTargetAction="toggle"
        readOnly
        required
        size={88}
        src="src"
        step={1}
        type="text"
        value="value"
        width={88}
      />
    );

    const inputFieldElement = screen.getByPlaceholderText("placeholder");

    expect(inputFieldElement).toHaveAttribute("accept", "accept");
    expect(inputFieldElement).toHaveAttribute("alt", "alt");
    expect(inputFieldElement).toHaveAttribute("autocapitalize", "on");
    expect(inputFieldElement).toHaveAttribute("autocomplete", "on");
    expect(inputFieldElement).toHaveAttribute("autocorrect", "on");
    expect(inputFieldElement).toHaveAttribute("autosave", "on");
    expect(inputFieldElement).toHaveAttribute("capture");
    expect(inputFieldElement).toHaveAttribute("checked");
    expect(inputFieldElement).toHaveAttribute("disabled");
    expect(inputFieldElement).toHaveAttribute("form", "form");
    expect(inputFieldElement).toHaveAttribute("formenctype", "formenctype");
    expect(inputFieldElement).toHaveAttribute("formmethod", "formmethod");
    expect(inputFieldElement).toHaveAttribute("formnovalidate");
    expect(inputFieldElement).toHaveAttribute("formTarget", "formtarget");
    expect(inputFieldElement).toHaveAttribute("height", "33");
    expect(inputFieldElement).toHaveAttribute("list", "list");
    expect(inputFieldElement).toHaveAttribute("hidden");
    expect(inputFieldElement).toHaveAttribute("max", "22");
    expect(inputFieldElement).toHaveAttribute("maxlength", "22");
    expect(inputFieldElement).toHaveAttribute("min", "11");
    expect(inputFieldElement).toHaveAttribute("minlength", "11");
    expect(inputFieldElement).toHaveAttribute("multiple");
    expect(inputFieldElement).toHaveAttribute("name", "name");
    expect(inputFieldElement).toHaveAttribute("pattern", "pattern");
    expect(inputFieldElement).toHaveAttribute("placeholder", "placeholder");
    expect(inputFieldElement).toHaveAttribute("popoverTarget", "popovertarget");
    expect(inputFieldElement).toHaveAttribute("popoverTargetAction", "toggle");
    expect(inputFieldElement).toHaveAttribute("readonly");
    expect(inputFieldElement).toHaveAttribute("required");
    expect(inputFieldElement).toHaveAttribute("size", "88");
    expect(inputFieldElement).toHaveAttribute("src", "src");
    expect(inputFieldElement).toHaveAttribute("step", "1");
    expect(inputFieldElement).toHaveAttribute("type", "text");
    expect(inputFieldElement).toHaveAttribute("value", "value");
    expect(inputFieldElement).toHaveAttribute("width", "88");
  });

  it("should merge classes correctly", function () {
    const placeholder = "placeholder";
    const customClass = "bg-black";

    render(<InputField placeholder={placeholder} className={customClass} />);

    const inputFieldElement = screen.getByPlaceholderText(placeholder);
    const baseStyle = [
      "border",
      "p-2",
      "border-neutral-300",
      "rounded-[8px]",
      "outline-[#5c31c5]",
    ];

    baseStyle.forEach((baseStyle) =>
      expect(inputFieldElement).toHaveClass(baseStyle)
    );

    expect(inputFieldElement).toHaveClass(customClass);
  });
});
