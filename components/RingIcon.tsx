type RingIconProps = {
  className?: string;
};

export default function RingIcon({ className = "h-5 w-5" }: RingIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3.5" fill="currentColor" />
    </svg>
  );
}
