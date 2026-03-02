export function TypographyShowcase() {
  return (
    <div className="flex flex-col gap-10">
      {/* Font family showcase */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Headings & UI
          </span>
          <span className="text-4xl font-semibold tracking-tight text-foreground font-sans">
            DM Sans
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground font-sans">
            A geometric sans-serif with distinctive character. Its optical adjustments
            and slightly rounded terminals give warmth without losing professionalism.
            Used for all headings, navigation, buttons, and UI elements.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <span className="text-sm font-light text-foreground">Light</span>
            <span className="text-sm font-normal text-foreground">Regular</span>
            <span className="text-sm font-medium text-foreground">Medium</span>
            <span className="text-sm font-semibold text-foreground">Semibold</span>
            <span className="text-sm font-bold text-foreground">Bold</span>
          </div>
        </div>

        <div className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-sm">
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Code & Data
          </span>
          <span className="text-4xl font-semibold tracking-tight text-foreground font-mono">
            JetBrains Mono
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground font-sans">
            A developer-friendly monospaced typeface with increased letter height
            for improved readability. Used for code, technical data, URLs, and identifiers.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 font-mono">
            <span className="text-sm font-normal text-foreground">Regular</span>
            <span className="text-sm font-medium text-foreground">Medium</span>
            <span className="text-sm font-bold text-foreground">Bold</span>
          </div>
        </div>
      </div>

      {/* Type scale */}
      <div className="flex flex-col gap-6">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Type Scale
        </h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-baseline gap-4 border-b border-border pb-4 transition-colors duration-200 hover:border-primary/20">
            <span className="w-16 shrink-0 text-xs font-mono text-muted-foreground">4xl</span>
            <span className="text-4xl font-semibold tracking-tight text-foreground text-balance">
              Connect your Fediverse
            </span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-border pb-4 transition-colors duration-200 hover:border-primary/20">
            <span className="w-16 shrink-0 text-xs font-mono text-muted-foreground">2xl</span>
            <span className="text-2xl font-semibold tracking-tight text-foreground text-balance">
              Connect your Fediverse
            </span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-border pb-4 transition-colors duration-200 hover:border-primary/20">
            <span className="w-16 shrink-0 text-xs font-mono text-muted-foreground">lg</span>
            <span className="text-lg font-medium text-foreground">
              Connect your Fediverse
            </span>
          </div>
          <div className="flex items-baseline gap-4 border-b border-border pb-4 transition-colors duration-200 hover:border-primary/20">
            <span className="w-16 shrink-0 text-xs font-mono text-muted-foreground">base</span>
            <span className="text-base leading-relaxed text-foreground">
              Connect your Fediverse identity in one place. Share your profiles across Mastodon, Pixelfed, Lemmy, and more.
            </span>
          </div>
          <div className="flex items-baseline gap-4 transition-colors duration-200 hover:border-primary/20">
            <span className="w-16 shrink-0 text-xs font-mono text-muted-foreground">sm</span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              Connect your Fediverse identity in one place. Share your profiles across Mastodon, Pixelfed, Lemmy, and more.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
