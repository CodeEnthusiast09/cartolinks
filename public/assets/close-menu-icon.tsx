export const CloseIcon = ({
  size = 24,
  className = "",
}: {
  size?: number | string;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`lucide-icon lucide lucide-x ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  );
};
