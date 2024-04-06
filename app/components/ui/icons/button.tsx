import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "md" | "lg";
  block?: boolean;
  buttonStyle?: "outline" | "primary" | "inverted"; // Rename style to buttonStyle
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size = "md",
  block,
  buttonStyle = "primary",
  ...props
}) => {
  const getSizeClass = size === "lg" ? "px-6 py-3" : "px-5 py-2";
  const getBlockClass = block ? "w-full" : "";

  let styleClass = "";
  if (buttonStyle === "outline") {
    styleClass =
      "border-2 border-indigo-500 hover:bg-black text-black hover:text-white";
  } else if (buttonStyle === "primary") {
    styleClass = "bg-light-pink text-white border-2 border-transparent";
  } else if (buttonStyle === "inverted") {
    styleClass = ""; // Define inverted style class if needed
  }

  return (
    <button
      {...props}
      className={`rounded-md text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 ${getSizeClass} ${getBlockClass} ${styleClass} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
