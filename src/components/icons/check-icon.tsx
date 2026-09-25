type CheckIconProps = {
  className?: string;
};

export default function CheckIcon({ className }: CheckIconProps) {
  return (
    <svg
      viewBox="0 0 29 21"
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.5 10.36 10.593 18.5 26.5 2.5" />
    </svg>
  );
}
