import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <div className="bg-white p-4 rounded-[8px] flex flex-col gap-y-4 shadow-[2px_5px_10px_rgba(0,0,0,0.5)] relative">
      {children}
    </div>
  );
}

Container.displayName = "Container";
