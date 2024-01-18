"use client";

import { useState } from "react";

import TestiItem from "../testi-item";

import { testiData } from "./data";

const Testimonial = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="px-5 md:px-52 py-12">
      <div className="flex flex-col gap-8 md:gap-16">
        <h2 className="text-center">
          <span className="text-md font-bold text-custom-secondary">
            Customer Comments
          </span>
          <br />
          <br />
          <span className="text-2xl font-bold text-custom-maintext">
            Why customers love us
          </span>
        </h2>
      </div>
      <div className="max-w-3xl mx-auto mt-12 flex flex-col items-center gap-4">
        <p className="font-light text-4xl text-center max-w-2xl">
          {testiData[selected].quote}
        </p>
        <div className="w-full grid grid-cols-3 pt-12">
          {testiData.map((item, index) => (
            <TestiItem
              key={index}
              src={item.src}
              name={item.name}
              as={item.as}
              active={index === selected}
              onClick={() => setSelected(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
