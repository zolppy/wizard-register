import { ButtonHTMLAttributes, ReactNode } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Btn({ children, type = "button", ...props }: BtnProps) {
  return (
    <button
      {...props}
      type={type}
      className="py-3 px-6 text-white bg-[#5c31c5] transition-opacity duration-200 w-fit rounded-[8px] lg:hover:cursor-pointer active:opacity-80 lg:hover:opacity-80"
    >
      {children}
    </button>
  );
}

Btn.displayName = "Btn";
