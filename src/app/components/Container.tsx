import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return <div className="m-8 rounded-lg shadow">{children}</div>;
}
