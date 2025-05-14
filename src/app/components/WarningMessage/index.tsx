import { ReactNode } from "react";
import { P } from "@/app/components/P";

interface WarningMessageProps {
  children: ReactNode;
}

export function WarningMessage({ children }: WarningMessageProps) {
  return <P className="text-red-500">{children}</P>;
}

WarningMessage.displayName = "WarningMessage";
