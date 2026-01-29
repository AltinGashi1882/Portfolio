export default function SVGBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full -z-10"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 1440 320"
    >
      {/* Base color */}
      <rect width="1440" height="320" fill="#313851" />

      {/* Soft wave */}
      <path
        fill="#3B425C" // slightly lighter shade
        fillOpacity="0.6"
        d="M0,160 C360,240 1080,80 1440,160 L1440,320 L0,320 Z"
      />

      {/* Another subtle wave */}
      <path
        fill="#2C3450" // slightly darker shade
        fillOpacity="0.4"
        d="M0,200 C480,120 960,280 1440,200 L1440,320 L0,320 Z"
      />
    </svg>
  );
}
