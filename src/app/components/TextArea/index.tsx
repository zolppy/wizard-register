import { HTMLAttributes } from "react";

interface TextAreaProps extends HTMLAttributes<HTMLTextAreaElement> {
  name?: string;
  placeholder: string;
}

export function TextArea({ name = "", placeholder, ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      name={name}
      placeholder={placeholder}
      className="border p-2 border-neutral-300 rounded-[8px] outline-[#5c31c5]"
    />
  );
}

TextArea.displayName = "TextArea";
