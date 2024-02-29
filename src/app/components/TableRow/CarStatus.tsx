interface CarStatusProps {
  status: boolean;
}

export default function CarStatus({ status }: CarStatusProps) {
  return (
    <div
      className={`rounded-md px-2.5 py-0.5 ${
        status ? "text-green-800 bg-green-100" : "text-red-800 bg-red-100"
      }`}
    >
      {status ? "Available" : "Unavailable"}
    </div>
  );
}
