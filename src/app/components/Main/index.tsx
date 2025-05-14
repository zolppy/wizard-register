import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  return <main>{children}</main>;
}

Main.displayName = "Main";
