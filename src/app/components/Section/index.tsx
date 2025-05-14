import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

export function Section({ children }: SectionProps) {
  return (
    <section className="min-w-[320px] max-w-[640px] mx-auto p-4 flex flex-col gap-y-4">
      {children}
    </section>
  );
}

Section.displayName = "Section";
