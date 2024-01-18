import Image from "next/image";
import Button from "../button";
import Navitem from "../navitem";

const Footer = () => {
  return (
    <div className="px-5 md:px-52 pt-36 pb-12">
      <div className="bg-custom-secondary rounded-md w-full p-5 md:p-6 md:px-10 flex gap-10 items-center -mt-52">
        <h2 className="text-white line-clamp-2 text-lg md:text-2xl max-w-xs md:max-w-sm">
          Hire the world’s best developers and designers around!
        </h2>
        <div className="flex justify-end xl:justify-between w-full">
          <Image
            src="/assets/foot-1-1.png"
            width={200}
            height={150}
            alt="arrow"
            className="hidden xl:block"
          />
          <div className="flex flex-col gap-2 justify-center items-center">
            <Image
              src="/assets/foot-1-2.png"
              width={200}
              height={150}
              alt="arrow"
              className="w-16"
            />
            <Button
              variant="outlined"
              label="HIRE DEVELOPERS"
              onClick={() => {}}
            />
            <Image
              src="/assets/foot-1-3.png"
              width={200}
              height={150}
              alt="arrow"
              className="w-16"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center pt-16 gap-8">
        <div className="flex flex-col xl:flex-row gap-4 items-center">
          <Image
            src="/assets/logo.png"
            width={500}
            height={500}
            alt="logo"
            className=" w-36 h-full object-contain"
          />
          <p className="text-custom-ligthgrey text-xs pt-1">
            Copyright by 2024 by Reynald
          </p>
        </div>
        <div className=" flex gap-6 md:gap-8 items-center">
          <Navitem href="/" label="Home" />
          <Navitem href="/" label="Adversite" />
          <Navitem href="/" label="Supports" />
          <Navitem href="/" label="Marketing" />
          <Navitem href="/" label="FAQ" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
