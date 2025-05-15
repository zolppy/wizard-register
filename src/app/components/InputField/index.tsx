import { InputHTMLAttributes } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function InputField({
  className = "",
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  const baseStyles =
    "border p-2 border-neutral-300 rounded-[8px] outline-[#5c31c5]";

  return (
    <input
      {...props}
      type={type}
      className={twMerge(baseStyles, className as ClassNameValue)}
    />
  );
}

InputField.displayName = "InputField";
