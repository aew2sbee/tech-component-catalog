import * as React from "react";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement>;

export function Spinner({ className = "", ...props }: SpinnerProps) {
  return (
    <span
      className={`inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
}
