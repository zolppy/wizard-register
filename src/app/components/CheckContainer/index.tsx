import { ReactNode } from "react";

interface CheckContainerProps {
  children: ReactNode;
}

export function CheckContainer({ children }: CheckContainerProps) {
  return <div className="flex flex-col gap-y-2">{children}</div>;
}

CheckContainer.displayName = "CheckContainer";
