import { ReactNode } from "react";

interface InputLabelProps {
  children: ReactNode;
  htmlFor: string;
}

export function InputLabel({ children, htmlFor }: InputLabelProps) {
  return (
    <label htmlFor={htmlFor} className="w-fit">
      {children}
    </label>
  );
}

InputLabel.displayName = "InputLabel";
