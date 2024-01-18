import { BoostItemProps } from "./index.type";

import { FaCircleCheck } from "react-icons/fa6";

const BoostItem = ({ label }: BoostItemProps) => {
  return (
    <div className=" flex gap-2 items-center">
      <FaCircleCheck size={16} className="text-custom-ligthgrey" />
      <p className="text-sm font-light">{label}</p>
    </div>
  );
};

export default BoostItem;
