import * as React from "react";
import { cn } from "@/src/client/lib/cn";
import { Spinner } from "../Spinner";

export type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "disabled"
> & {
  color?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean; // ログインボタンでよく使う
};

const BASE = "inline-flex items-center justify-center gap-2 rounded-full font-bold leading-none transition select-none";
const FOCUS = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2";
const DISABLED = "disabled:cursor-not-allowed disabled:opacity-50";

const colorMap = {
  primary: "bg-sky-400 text-white hover:bg-sky-500 active:bg-sky-600",
  secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100",
} as const;

const sizeMap = {
  small: "h-8 px-4 text-xs",
  medium: "h-10 px-5 text-sm",
  large: "h-12 px-6 text-base",
} as const;


export function Button({
  color = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  fullWidth = false,
  type = "button",
  className,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      className={cn(
        BASE,
        FOCUS,
        DISABLED,
        sizeMap[size],
        colorMap[color],
        // login向け
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
