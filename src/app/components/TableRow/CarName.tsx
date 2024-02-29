interface CarNameProps {
  name: string;
}

export default function CarName({ name }: CarNameProps) {
  return <div className="font-bold md-font-normal md:ml-[54px]">{name}</div>;
}
