import { Logo, LogoMark } from "./logo"

export function LogoUsage() {
  return (
    <div className="flex flex-col gap-10">
      {/* Logo variants */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Full logo on light */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center rounded-lg border border-border bg-card p-10 transition-all duration-300 hover:shadow-sm hover:border-primary/20">
            <LogoMark />
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            Primary / Light background
          </span>
        </div>

        {/* Full logo on dark */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center rounded-lg border border-border bg-foreground p-10 transition-all duration-300 hover:shadow-sm">
            <div className="flex items-center gap-3">
              <Logo size={40} color="var(--card)" />
              <span className="text-xl font-semibold tracking-tight text-card font-sans">
                myfedi<span className="text-secondary">.link</span>
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            Reversed / Dark background
          </span>
        </div>

        {/* Gradient logo */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center rounded-lg border border-border bg-card p-10 transition-all duration-300 hover:shadow-sm hover:border-primary/20">
            <LogoMark gradient />
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            Gradient variant
          </span>
        </div>

        {/* Logomark only */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center rounded-lg border border-border bg-card p-10 transition-all duration-300 hover:shadow-sm hover:border-primary/20">
            <Logo size={56} gradient />
          </div>
          <span className="text-xs font-mono text-muted-foreground">
            Icon / Gradient
          </span>
        </div>
      </div>

      {/* Logo spacing */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Clear Space
        </h3>
        <div className="flex items-center justify-center rounded-lg border border-dashed border-primary/30 bg-primary/5 p-12 transition-all duration-300 hover:bg-primary/8">
          <div className="relative">
            <div className="absolute -inset-6 rounded border border-dashed border-primary/40" />
            <LogoMark />
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Always maintain a minimum clear space around the logo equal to the height of the icon mark. This ensures the logo remains legible and prominent in any context.
        </p>
      </div>

      {/* Sizes */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Size Variations
        </h3>
        <div className="flex items-end gap-8 rounded-lg border border-border bg-card p-8 transition-all duration-300 hover:shadow-sm">
          <Logo size={24} />
          <Logo size={32} />
          <Logo size={40} />
          <Logo size={56} gradient />
          <Logo size={72} gradient />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          The minimum recommended size for the icon is 24px. The gradient variant is recommended at 40px and above for best visual impact.
        </p>
      </div>
    </div>
  )
}
