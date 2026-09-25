type MenuCloseIconProps = {
  className?: string;
};

export default function MenuCloseIcon({ className }: MenuCloseIconProps) {
  return (
    <svg
      viewBox="0 0 14 15"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
      <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
    </svg>
  );
}
