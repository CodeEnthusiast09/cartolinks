export const ProfileGradient = ({
  size = 24,
  className = "",
}: {
  size?: number | string;
  className?: string;
}) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="circleClip">
          <circle cx="64" cy="64" r="64" />
        </clipPath>
        <filter
          id="filter_blur"
          x="-200"
          y="-200"
          width="528"
          height="528"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="20" />
        </filter>

        <filter
          id="blurRing"
          x="-50"
          y="-50"
          width="228"
          height="228"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur stdDeviation="16" />
        </filter>

        <radialGradient id="innerShadowRing" cx="0.5" cy="0.5" r="0.4">
          <stop offset="0.9" stopColor="rgba(255, 255, 255, 0)" />
          <stop offset="1" stopColor="rgba(255, 255, 255, 1)" />
        </radialGradient>
      </defs>

      <g clipPath="url(#circleClip)">
        <rect width="128" height="128" fill="white" />
        <g filter="url(#filter_blur)">
          <circle cx="96" cy="32" r="116" fill="#7FDEFF" />
        </g>
        <g filter="url(#filter_blur)">
          <circle cx="96" cy="46" r="57" fill="#FFA800" />
        </g>
        <g filter="url(#filter_blur)">
          <circle cx="18" cy="58" r="107" fill="#8BB5FF" />
        </g>
        <g filter="url(#filter_blur)">
          <path d="M104 73 C117 100, 15 79, 118 40" fill="#FF0000" />
        </g>
        <g filter="url(#filter_blur)">
          <path d="M116 78 C112 116, 47 64, 118 3" fill="#7FDEFF" />
        </g>

        <circle
          cx="64"
          cy="64"
          r="64"
          fill="url(#innerShadowRing)"
          filter="url(#blurRing)"
        />
      </g>
    </svg>
  );
};
