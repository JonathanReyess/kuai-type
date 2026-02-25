import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "relative font-serif transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden";

  const variants = {
    primary:
      "bg-black text-white border-2 border-black hover:bg-white hover:text-black",
    secondary:
      "bg-white text-black border-2 border-black hover:bg-black hover:text-white",
    outline:
      "bg-transparent text-black border-b-2 border-black hover:opacity-70",
  };

  const sizes = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-3 text-md tracking-widest",
    lg: "px-12 py-4 text-2xl tracking-[0.2em] font-bold",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
