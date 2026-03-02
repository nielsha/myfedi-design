export function Logo({
  size = 48,
  className = "",
  gradient = false,
  color,
}: {
  size?: number
  className?: string
  gradient?: boolean
  color?: string
}) {
  const id = `logo-gradient-${size}`
  const stroke = gradient ? `url(#${id})` : color ?? "var(--primary)"
  const fill = gradient ? `url(#${id})` : color ?? "var(--primary)"
  const accentFill = gradient ? "var(--accent)" : color ?? "var(--accent)"
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="myfedi.link logo"
    >
      {gradient && (
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>
        </defs>
      )}

      {/* Outer circle */}
      <circle
        cx="32"
        cy="32"
        r="29"
        stroke={stroke}
        strokeWidth="3"
        fill="none"
      />

      {/* Equilateral triangle - rotated 45deg, inscribed with clear space to circle */}
      <polygon
        points="47.5,16.5 37.7,53.3 10.7,26.3"
        stroke={stroke}
        strokeWidth="3"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Connection lines from vertices to center - always visible */}
      <line x1="47.5" y1="16.5" x2="32" y2="32" stroke={stroke} strokeWidth="2.5" opacity="0.3" />
      <line x1="37.7" y1="53.3" x2="32" y2="32" stroke={stroke} strokeWidth="2.5" opacity="0.3" />
      <line x1="10.7" y1="26.3" x2="32" y2="32" stroke={stroke} strokeWidth="2.5" opacity="0.3" />

      {/* Node dots at each vertex */}
      <circle cx="47.5" cy="16.5" r="5.5" fill={fill} />
      <circle cx="37.7" cy="53.3" r="5.5" fill={fill} />
      <circle cx="10.7" cy="26.3" r="5.5" fill={fill} />

      {/* Center dot - the "link" hub */}
      <circle cx="32" cy="32" r="5.5" fill={accentFill} />
    </svg>
  )
}

export function LogoMark({
  className = "",
  gradient = false,
}: {
  className?: string
  gradient?: boolean
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={40} gradient={gradient} />
      <div className="flex flex-col">
        <span className="text-xl font-semibold tracking-tight text-foreground font-sans">
          myfedi<span className="text-primary">.link</span>
        </span>
      </div>
    </div>
  )
}
