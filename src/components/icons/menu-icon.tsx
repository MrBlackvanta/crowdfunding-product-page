type MenuIconProps = {
  className?: string;
};

export default function MenuIcon({ className }: MenuIconProps) {
  return (
    <svg
      viewBox="0 0 16 15"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
    </svg>
  );
}
