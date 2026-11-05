// "AP" monogram: the A's right leg is the P's stem, and the bottom of the P's bowl runs left as the A's crossbar.
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="5 10 90 80" aria-hidden className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 82 62 20V82" />
        <path d="M62 20h8a16 16 0 0 1 0 32H37.2" />
      </g>
    </svg>
  );
}
