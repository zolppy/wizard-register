import { render, screen } from "@testing-library/react";
import { TextArea } from "@/app/components/TextArea";
import "@testing-library/jest-dom";

describe("TextArea Component", function () {
  it("should accept and use custom props", function () {
    render(
      <TextArea
        id="comment"
        name="comment"
        rows={100}
        cols={100}
        autoCapitalize="on"
        autoComplete="on"
        autoCorrect="on"
        disabled
        form="myform"
        placeholder="myplaceholder"
        readOnly={true}
        spellCheck={true}
        wrap="soft"
        minLength={10}
        maxLength={100}
      />
    );

    const textAreaElement = screen.getByRole("textbox");

    expect(textAreaElement).toHaveAttribute("id", "comment");
    expect(textAreaElement).toHaveAttribute("name", "comment");
    expect(textAreaElement).toHaveAttribute("rows", "100");
    expect(textAreaElement).toHaveAttribute("cols", "100");
    expect(textAreaElement).toHaveAttribute("autocapitalize", "on");
    expect(textAreaElement).toHaveAttribute("autocomplete", "on");
    expect(textAreaElement).toHaveAttribute("autocorrect", "on");
    expect(textAreaElement).toHaveAttribute("disabled");
    expect(textAreaElement).toHaveAttribute("form", "myform");
    expect(textAreaElement).toHaveAttribute("placeholder", "myplaceholder");
    expect(textAreaElement).toHaveAttribute("readonly");
    expect(textAreaElement).toHaveAttribute("spellcheck", "true");
    expect(textAreaElement).toHaveAttribute("wrap", "soft");
    expect(textAreaElement).toHaveAttribute("minlength", "10");
    expect(textAreaElement).toHaveAttribute("maxlength", "100");
  });
});
