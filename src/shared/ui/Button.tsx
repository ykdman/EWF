import React from "react";
type Color = "primary" | "normal" | "warn";
type Size = "large" | "normal" | "small";

interface ButtonProps {
  type: "submit" | undefined;
  children: React.ReactNode;
  color: Color;
  size: Size;
}

function Button({ children, color, size, type }: ButtonProps) {
  let ButtonClass = "";

  switch (color) {
    case "normal": {
      ButtonClass += "bg-zinc-400";
    }
  }

  return <button></button>;
}

export default Button;
