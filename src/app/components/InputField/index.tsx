import { InputHTMLAttributes } from "react"; // Change import
import { ClassNameValue, twMerge } from "tailwind-merge";

type inputType = "text" | "date" | "number" | "checkbox" | "radio" | "password";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function InputField({
  type = "text",
  className = "",
  ...props
}: InputFieldProps) {
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
