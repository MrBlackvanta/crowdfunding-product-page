type CloseIconProps = {
  className?: string;
};

export default function CloseIcon({ className }: CloseIconProps) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z" />
    </svg>
  );
}
