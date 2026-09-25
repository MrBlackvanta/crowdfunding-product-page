type BookmarkIconProps = {
  className?: string;
};

export default function BookmarkIcon({ className }: BookmarkIconProps) {
  return (
    <svg
      viewBox="0 0 10 18"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 0v18l5-5.058L10 18V0z" />
    </svg>
  );
}
