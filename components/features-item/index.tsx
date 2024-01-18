import Image from "next/image";
import { FeaturesItemProps } from "./index.type";

const FeaturesItem = ({ title, description, src }: FeaturesItemProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 px-5">
      <Image
        src={src}
        width={500}
        height={500}
        alt="feat"
        className="w-20 h-20 object-contain"
      />
      <h3 className="text-center font-bold text-custom-maintext">{title}</h3>
      <p className="text-center text-sm line-clamp-3 font-light text-custom-secondarytext">
        {description}
      </p>
    </div>
  );
};

export default FeaturesItem;
