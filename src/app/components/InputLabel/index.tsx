import { LabelHTMLAttributes, ReactNode } from "react";

interface InputLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export function InputLabel({ children, ...props }: InputLabelProps) {
  return (
    <label {...props} className="w-fit">
      {children}
    </label>
  );
}

InputLabel.displayName = "InputLabel";
