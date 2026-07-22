type LavoyerMarkProps = {
  className?: string;
};

export default function LavoyerMark({ className = "h-8 w-8" }: LavoyerMarkProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path d="M32.5 20 L67.5 20" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
      <path d="M76.5 25.25 L83.5 49.75" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
      <path d="M79.75 59.5 L55.25 80.5" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
      <path d="M44.75 80.5 L20.25 59.5" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
      <path d="M16.5 49.75 L23.5 25.25" stroke="currentColor" strokeWidth="9" strokeLinecap="square" />
    </svg>
  );
}
