import Image from "next/image";
import Link from "next/link";

import BoostItem from "../boost-item";

import { IoIosArrowForward } from "react-icons/io";

import { boostData } from "./data";

const Boots = () => {
  return (
    <div className="px-5 md:px-52 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src="/assets/boost-1-1.png"
          height={1000}
          width={1000}
          alt="boost"
          className="w-full h-full object-cover"
        />
        <div className="flex flex-col justify-center gap-6">
          <h2 className=" line-clamp-3 text-4xl text-custom-maintext font-semibold">
            Boost your agencies by choosing Ninja Developers
          </h2>
          <p className=" line-clamp-2 text-sm text-custom-ligthgrey">
            Create custom landing pages with Shades that convert more visitors
            than any website, no coding required.
          </p>
          {boostData.map((item, index) => (
            <BoostItem key={index} label={item} />
          ))}
          <Link
            href="/"
            className="text-custom-secondary px-6 text-sm font-semibold flex items-center gap-2"
          >
            Learn More
            <IoIosArrowForward className="inline-block" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Boots;
