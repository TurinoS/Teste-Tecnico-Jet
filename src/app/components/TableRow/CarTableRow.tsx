import { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
}

export default function CarTableRow({ children }: TableRowProps) {
  return (
    <div className="table-row-group text-sm text-gray-900">{children}</div>
  );
}
