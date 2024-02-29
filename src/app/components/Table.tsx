import { ReactNode } from "react";

export default function Table({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg shadow table w-full overflow-hidden">
      {children}
    </div>
  );
}
