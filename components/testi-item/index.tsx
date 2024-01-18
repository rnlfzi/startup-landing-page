import Image from "next/image";
import { TestiItemProps } from "./index.type";

const TestiItem = ({ src, name, as, active, onClick }: TestiItemProps) => {
  return (
    <div
      className={`flex gap-2 p-2 pt-6 justify-center cursor-pointer ${
        active
          ? "border-t-2 border-custom-secondary bg-gradient-to-b from-custom-secondary/10 to-white"
          : ""
      }`}
      onClick={onClick}
    >
      <Image
        src={src}
        width={100}
        height={100}
        alt="testi-1"
        className="w-8 md:w-10 h-8 md:h-10 object-contain"
      />
      <p className="text-xs md:text-sm flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-custom-ligthgrey font-light">{as}</span>
      </p>
    </div>
  );
};

export default TestiItem;
