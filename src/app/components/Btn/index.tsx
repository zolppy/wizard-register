import { ReactNode } from "react";

type BtnType = "button" | "reset" | "submit";

interface BtnProps {
  children: ReactNode;
  type?: BtnType;
}

export function Btn({ children, type = "button" }: BtnProps) {
  return (
    <button
      type={type}
      className="py-3 px-6 text-white bg-[#5c31c5] transition-opacity duration-200 w-fit rounded-[8px] lg:hover:cursor-pointer active:opacity-80 lg:hover:opacity-80"
    >
      {children}
    </button>
  );
}

Btn.displayName = "Btn";
