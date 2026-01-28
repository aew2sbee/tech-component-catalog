import * as React from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
};

const variantMap = {
  primary: "btn-primary",
  secondary: "btn-secondary",
} as const;

const sizeMap = {
  small: "btn-small",
  medium: "btn-medium",
  large: "btn-large",
} as const;

export function Button({
  variant = "primary",
  size = "medium",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`btn ${variantMap[variant]} ${sizeMap[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
