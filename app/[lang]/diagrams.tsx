// Four original line diagrams for the habits grid: dashed strokes in the muted ink, one warm dot each.
const ACCENT = "#e8591f";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 160 96" aria-hidden className="draw h-24 w-full text-mute/70">
      <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round">
        {children}
      </g>
    </svg>
  );
}
const dot = (cx: number, cy: number) => <circle cx={cx} cy={cy} r="4.5" fill={ACCENT} stroke="none" className="draw-dot" />;

// Two writes inside one boundary.
export const Transactions = () => (
  <Frame>
    <rect x="30" y="14" width="100" height="68" rx="10" />
    <path d="M48 38h64M48 58h64" />
    {dot(80, 48)}
  </Frame>
);

// Many reports drawn from one ledger.
export const Ledger = () => (
  <Frame>
    <circle cx="36" cy="48" r="14" />
    <path d="M50 48h26M76 20v56M76 20h26M76 48h26M76 76h26" />
    <circle cx="112" cy="20" r="6" />
    <circle cx="112" cy="48" r="6" />
    <circle cx="112" cy="76" r="6" />
    {dot(36, 48)}
  </Frame>
);

// A stream of events, one of them caught.
export const Events = () => (
  <Frame>
    <path d="M14 48h132" />
    <rect x="26" y="40" width="16" height="16" rx="3" />
    <rect x="58" y="40" width="16" height="16" rx="3" />
    <rect x="122" y="40" width="16" height="16" rx="3" />
    {dot(98, 48)}
  </Frame>
);

// A running service inside a guarded ring.
export const Operated = () => (
  <Frame>
    <circle cx="80" cy="48" r="38" />
    <rect x="58" y="34" width="44" height="28" rx="6" />
    <path d="M68 48h10" />
    {dot(92, 48)}
  </Frame>
);
