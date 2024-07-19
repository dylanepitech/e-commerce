import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  variant?: "standard" | "transparent" | "border";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "black" | "white" | "red" | "green" | "blue" | undefined;
  border?: "red" | "blue" | "green" | "violet" | "white" | undefined;
  onClick?: () => void;
};

const buttonVariant = {
  standard:
    "px-4 py-2 text-white bg-violet-900 rounded-lg hover:filter hover:brightness-90 hover:shadow hover:shadow-sm hover:shadow-black",
  transparent: "px-4 py-2 bg-transparent rounded-lg",
  border:
    "px-4 py-2 border border-violet-900 rounded-lg hover:shadow hover:shadow-sm hover:shadow-black hover:filter hover:brightness-90",
};

const sizeVariant = {
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl",
};

const colorVariant = {
  black: "bg-black text-white",
  white: "bg-white text-black",
  red: "text-black bg-red-600",
  green: "text-black bg-green-600",
  blue: "text-black bg-blue-600",
};

const borderVariant = {
  red: "border-red-500",
  green: "border-green-500",
  blue: "border-blue-500",
  violet: "border-violet-500",
  white: "border-white",
};

export default function Button({
  children,
  variant = "standard",
  size = "md",
  color,
  border,
  onClick,
}: Props): ReactElement {
  return (
    <button
      className={`${buttonVariant[variant]} ${sizeVariant[size]} ${
        color ? colorVariant[color] : ""
      } ${border ? borderVariant[border] : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
