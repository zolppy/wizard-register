import { ReactNode } from "react";

interface CheckWrapperProps {
  children: ReactNode;
}

export function CheckWrapper({ children }: CheckWrapperProps) {
  return <div className="flex gap-x-2">{children}</div>;
}

CheckWrapper.displayName = "CheckWrapper";
