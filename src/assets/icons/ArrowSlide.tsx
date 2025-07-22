export default function ArrowSlide({
  stroke = "#394137",
}: {
  stroke?: string;
}) {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.2551 12.0593L1.8939 12.0593M1.8939 12.0593L11.2111 21.6427M1.8939 12.0593L11.2111 2.47596"
        stroke={stroke}
        strokeOpacity="0.54"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
