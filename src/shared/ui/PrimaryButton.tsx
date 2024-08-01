import React from "react";

interface Props {
  children: React.ReactNode;
}

function PrimaryButton({ children, ...props }: Props) {
  return (
    <button
      className="bg-primary rounded-xl p-4 text-sm text-zinc-200 transition-opacity hover:opacity-80"
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
