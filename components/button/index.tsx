import { ButtonProps } from "./index.type";

const Button = ({ onClick, variant, size, label }: ButtonProps) => {
  switch (variant) {
    case "contained":
      return (
        <div className="bg-custom-secondary text-white rounded cursor-pointer px-7 py-4 font-semibold">
          {label}
        </div>
      );
    case "outlined":
      return (
        <div className="border-2 border-custom-secondary px-4 py-2 text-custom-secondary rounded text-sm cursor-pointer">
          {label}
        </div>
      );
    default:
      return;
  }
};

export default Button;
