import Image from "next/image";
import Button from "../button";
import Navitem from "../navitem";

import { LuMenu } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="fixed bg-custom-main text-custom-maintext w-full h-[80px] flex items-center z-50">
      <div className="flex justify-between items-center w-full px-5 md:px-52">
        <Image
          src="/assets/logo.png"
          width={500}
          height={500}
          alt="logo"
          className=" w-40 h-full object-contain"
        />
        <LuMenu className="text-3xl xl:hidden text-custom-secondary" />
        <div className=" xl:flex gap-8 hidden">
          <Navitem href="/" label="Home" active />
          <Navitem href="/" label="Adversite" hasChild />
          <Navitem href="/" label="Supports" hasChild />
          <Navitem href="/" label="Contact" />
          <Navitem href="/" label="About Us" />
        </div>
        <div className="xl:flex hidden">
          <Button
            variant="outlined"
            size="sm"
            onClick={() => {}}
            label="Register Now"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
