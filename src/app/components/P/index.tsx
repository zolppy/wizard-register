import { HTMLAttributes, ReactNode } from "react";
import { ClassNameValue, twMerge } from "tailwind-merge";

interface PProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

export function P({ children, className = "" }: PProps) {
  const baseStyles = "text-justify";

  return (
    <p className={twMerge(baseStyles, className as ClassNameValue)}>
      {children}
    </p>
  );
}

P.displayName = "P";
