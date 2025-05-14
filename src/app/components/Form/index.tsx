import { HTMLAttributes, ReactNode } from "react";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

export function Form({ children, ...props }: FormProps) {
  return (
    <form {...props} className="flex flex-col gap-y-4">
      {children}
    </form>
  );
}

Form.displayName = "Form";
