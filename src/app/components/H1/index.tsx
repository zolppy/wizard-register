import { ReactNode } from "react";

interface H1Props {
  children: ReactNode;
}

export function H1({ children }: H1Props) {
  return <h1 className="text-[32px]">{children}</h1>;
}

H1.displayName = "H1";
