import { OptionHTMLAttributes, ReactNode } from "react";

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
}

export function Option({ children, ...props }: OptionProps) {
  return <option {...props}>{children}</option>;
}

Option.displayName = "Option";
