import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface MobileStatusProps {
  status: boolean;
}

export default function MobileStatus({ status }: MobileStatusProps) {
  return (
    <div
      className={`text-white rounded-full h-5 w-5 flex items-center justify-center absolute left-1 top-1 ${
        status ? "bg-green-600" : "bg-red-600 "
      }`}
    >
      {status ? <FaCheck /> : <FaXmark />}
    </div>
  );
}
