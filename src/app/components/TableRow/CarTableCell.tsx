import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TableRowProps {
  children: ReactNode;
  className?: string;
}

export default function CarTableCell({ children, className }: TableRowProps) {
  return (
    <div className="md:table-cell border-b-2 border-gray-200 pb-1">
      <div
        className={twMerge("flex items-center gap-2 md:p-4 md:h-12", className)}
      >
        {children}
      </div>
    </div>
  );
}
