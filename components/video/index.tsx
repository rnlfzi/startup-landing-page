import Image from "next/image";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";
import { IoPlay } from "react-icons/io5";

const Video = () => {
  return (
    <div className="px-5 md:px-52 py-12">
      <div className="flex flex-col gap-6 text-center max-w-lg items-center mx-auto">
        <h2 className=" line-clamp-3 text-4xl text-custom-maintext font-semibold">
          Leading companies trust us to develop software
        </h2>
        <p className=" line-clamp-2 text-sm text-custom-ligthgrey">
          We believe it’s important for everyone to have access to software
          especially when it comes to digital learning be navigate.
        </p>
        <Link
          href="/"
          className="text-custom-secondary px-6 text-sm font-semibold flex items-center gap-2"
        >
          Learn More
          <IoIosArrowForward className="inline-block" size={16} />
        </Link>
      </div>
      <div className="my-12 relative">
        <Image
          src="/assets/video.png"
          height={600}
          width={1000}
          alt="video"
          className="rounded-lg mx-auto"
        />
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="absolute top-1/2 left-1/2 p-4 md:p-6 bg-custom-main rounded-full hover:bg-custom-secondary cursor-pointer text-custom-secondary hover:text-custom-main transition-all"
        >
          <IoPlay size={40} />
        </div>
      </div>
    </div>
  );
};

export default Video;
