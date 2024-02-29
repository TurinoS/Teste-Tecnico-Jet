import { ReactNode } from "react";

export default function Table({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col justify-center gap-4 md:table md:rounded-lg md:shadow overflow-hidden">
      {children}
    </div>
  );
}
