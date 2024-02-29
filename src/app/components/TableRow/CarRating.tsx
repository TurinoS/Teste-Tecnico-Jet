import { FaStar } from "react-icons/fa";

interface CarRatingProps {
  rating: number;
}

export default function CarRating({ rating }: CarRatingProps) {
  const stars = Array.from({ length: rating }, (_, index) => (
    <FaStar key={index} className="text-lg" />
  ));

  return <div className="flex translate-y-1">{stars}</div>;
}
