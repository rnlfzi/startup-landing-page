import Link from "next/link";
import { NavItemProps } from "./index.type";

import { MdOutlineArrowDropDown } from "react-icons/md";

const Navitem = ({ href, label, active, hasChild }: NavItemProps) => {
  switch (hasChild) {
    case true:
      return (
        <div className="relative flex">
          <Link href={href}>
            <p
              className={`${
                active ? "text-custom-secondary" : "text-custom-maintext"
              } hover:text-custom-secondary cursor-pointer font-light text-sm`}
            >
              {label}
            </p>
          </Link>
          <MdOutlineArrowDropDown size={20} />
        </div>
      );
    default:
      return (
        <Link href={href}>
          <p
            className={`${
              active ? "text-custom-secondary" : "text-custom-maintext"
            } hover:text-custom-secondary cursor-pointer font-light text-sm`}
          >
            {label}
          </p>
        </Link>
      );
  }
};

export default Navitem;
