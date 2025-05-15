import { TextareaHTMLAttributes } from "react";

export function TextArea({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="border p-2 border-neutral-300 rounded-[8px] outline-[#5c31c5]"
    />
  );
}

TextArea.displayName = "TextArea";
