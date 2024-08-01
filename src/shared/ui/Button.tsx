import React from "react";
type Color = "primary" | "normal";
type Size = "large" | "normal" | "small";

interface ButtonProps {
  type?: "submit" | undefined;
  children: React.ReactNode;
  color: Color;
  size: Size;
  className?: string;
}

function Button({
  children,
  color,
  size,
  type,
  className,
  ...props
}: ButtonProps) {
  let ButtonClass = "";

  // Color Setting
  switch (color) {
    case "normal": {
      ButtonClass += "bg-normal text-black";
      break;
    }
    case "primary": {
      ButtonClass += "bg-primary text-white";
      break;
    }
  }

  switch (size) {
    case "large": {
      ButtonClass += "text-4xl py-4 px-6 font-semibold rounded-xl";
      break;
    }
    case "normal": {
      ButtonClass += "text-xl py-2 px-4 font-semibold rounded-xl";
      break;
    }
    case "small": {
      ButtonClass += "text-xs  font-semibold  px-4 py-2 rounded-xl";
      break;
    }
  }

  return (
    <button
      className={`${ButtonClass} ${className ? className : null} inline-flex items-center justify-center`}
      type={type ? type : "button"}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
