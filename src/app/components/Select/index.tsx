import { ReactNode, SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className="border p-2 border-neutral-300 rounded-[8px] outline-[#5c31c5] w-fit"
    >
      {children}
    </select>
  );
}

Select.displayName = "Select";
