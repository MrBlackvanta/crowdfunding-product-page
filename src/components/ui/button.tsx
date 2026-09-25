import type { ComponentProps } from "react";

export default function Button({
  className = "",
  ...props
}: ComponentProps<"button">) {
  return (
    <button
      type="button"
      className={`bg-cyan hover:bg-cyan-strong rounded-full font-bold text-white motion-safe:transition-colors ${className}`}
      {...props}
    />
  );
}
