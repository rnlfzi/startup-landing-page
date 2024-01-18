import Image from "next/image";
import Button from "../button";
import { parnertData } from "./data";

const Hero = () => {
  return (
    <div className=" bg-custom-main w-full min-h-[100vh] flex justify-center items-center pt-24">
      <div className="w-full px-5 md:px-52 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="md:order-last flex justify-center items-center">
          <Image
            src="/assets/banner-hero.png"
            width={1000}
            height={1000}
            alt="imageHero"
            className="w-full h-full object-cover mix-blend-darken"
          />
        </div>
        <div className="flex flex-col gap-6 text-custom-maintext pt-5">
          <h1 className="text-6xl line-clamp-3 font-semibold">
            Great software is built with amazing developers
          </h1>
          <p className="line-clamp-2 pr-5">
            We help build and manage a team of world-class developers to bring
            your vision to life
          </p>
          <div className="flex justify-between gap-4">
            <input
              type="text"
              className="w-full rounded px-5 focus:outline-none"
              placeholder="Subscribe newsletter"
            />
            <Button
              onClick={() => {}}
              label="Subscribe"
              size="lg"
              variant="contained"
            />
          </div>
          <div className="flex gap-2">
            <p className=" text-custom-ligthgrey text-xs md:text-sm">Sponsored by : </p>
            <div className="flex gap-6 justify-center items-center">
              {parnertData.map((item, index) => (
                <Image
                  key={index}
                  src={item.src}
                  width={1000}
                  height={500}
                  alt={item.alt}
                  className=" w-16 md:w-20 h-full object-contain"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
