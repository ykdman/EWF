import React from "react";

interface Props {
  children: React.ReactNode;
}

function NormalButton({ children, ...props }: Props) {
  return (
    <button
      className="bg-normal text- rounded-xl px-1.5 py-4 text-black transition-all hover:opacity-90"
      {...props}
    >
      {children}
    </button>
  );
}

export default NormalButton;
