import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export default function CarTableCell({ children, className }: TableRowProps) {
  return (
    <div
      className={twMerge("table-cell border-b-2 border-gray-200", className)}
    >
      <div className="flex items-center gap-2 p-4 h-12">{children}</div>
    </div>
  );
}
