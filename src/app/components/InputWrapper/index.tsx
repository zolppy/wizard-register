import { ReactNode } from "react";

interface InputWrapperProps {
  children: ReactNode;
}

export function InputWrapper({ children }: InputWrapperProps) {
  return <div className="flex flex-col gap-y-2">{children}</div>;
}

InputWrapper.displayName = "InputWrapper";
