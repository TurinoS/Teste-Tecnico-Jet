import Image from "next/image";

interface CarImageProps {
  src: string;
  name: string;
}

export default function CarImage({ src, name }: CarImageProps) {
  return (
    <div className="h-[85px] w-[85px] md:h-[46px] md:w-[48px] md:absolute">
      <Image
        src={src}
        alt={`image of a ${name}`}
        height={50}
        width={50}
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
      />
    </div>
  );
}
