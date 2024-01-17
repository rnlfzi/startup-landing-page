export interface ButtonProps {
  onClick?: () => void;
  variant?: "contained" | "outlined";
  size?: "sm" | "lg";
  label?: string;
}
