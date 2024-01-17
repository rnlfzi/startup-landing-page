import Image from "next/image";
import Button from "../button";
import Navitem from "../navitem";

const Navbar = () => {
  return (
    <nav className="fixed bg-custom-main text-custom-maintext w-full h-[80px] flex items-center">
      <div className="flex justify-between items-center w-full px-5 md:px-52">
        <Image
          src="/assets/logo.png"
          width={500}
          height={500}
          alt="logo"
          className=" w-40 h-full object-contain"
        />
        <div className=" flex gap-8">
          <Navitem href="/" label="Home" active />
          <Navitem href="/" label="Adversite" hasChild />
          <Navitem href="/" label="Supports" hasChild />
          <Navitem href="/" label="Contact" />
          <Navitem href="/" label="About Us" />
        </div>
        <Button
          variant="outlined"
          size="sm"
          onClick={() => {}}
          label="Register Now"
        />
      </div>
    </nav>
  );
};

export default Navbar;
