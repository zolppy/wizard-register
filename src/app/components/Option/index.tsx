import { HTMLAttributes, ReactNode } from "react";
import { Specialty } from "@/utils/enums/specialty";

interface OptionProps extends HTMLAttributes<HTMLOptionElement> {
  children: ReactNode;
  value?: Specialty | "";
}

export function Option({ children, value = "", ...props }: OptionProps) {
  return (
    <option {...props} value={value}>
      {children}
    </option>
  );
}

Option.displayName = "Option";
