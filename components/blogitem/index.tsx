import React from "react";

import Image from "next/image";
import { BsChatLeftDots } from "react-icons/bs";

import { BlogItemProps } from "./index.type";

const BlogItem = ({ src, title, comment }: BlogItemProps) => {
  return (
    <div className="bg-white rounded-lg">
      <Image src={src} width={500} height={280} alt="tutor-1" className="w-full" />
      <div className="p-4 flex flex-col gap-4">
        <h6 className="font-semibold">{title}</h6>
        <div className="text-custom-ligthgrey flex gap-2 text-sm items-center">
          <BsChatLeftDots size={18} className="inline-block" />
          <span className="text-custom-maintext">{comment} comments</span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
