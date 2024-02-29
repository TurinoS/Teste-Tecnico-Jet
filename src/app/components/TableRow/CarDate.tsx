interface CarDateProps {
  date: string;
}

export default function CarDate({ date }: CarDateProps) {
  return (
    <div className="text-gray-500 text-sm">
      <span className="md:hidden">Next reservation: </span>
      {date}
    </div>
  );
}
