import type { ComponentProps } from "react";

export default function Button({
  className = "",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={`bg-cyan disabled:bg-charcoal/25 not-disabled:hover:bg-cyan-strong rounded-full font-bold text-white motion-safe:transition-colors ${className}`}
      {...props}
    />
  );
}
