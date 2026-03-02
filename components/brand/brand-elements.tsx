"use client"

import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export function BrandElements() {
  return (
    <div className="flex flex-col gap-10">
      {/* Buttons with hover effects */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Buttons
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="transition-all duration-200 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5">
            Get Started
          </Button>
          <Button variant="secondary" className="transition-all duration-200 hover:shadow-md hover:-translate-y-0.5">
            Learn More
          </Button>
          <Button variant="outline" className="transition-all duration-200 hover:border-primary hover:text-primary">
            View Profile
          </Button>
          <Button variant="ghost" className="transition-all duration-200 hover:bg-primary/10">
            Cancel
          </Button>
        </div>
      </div>

      {/* Gradient buttons */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Gradient Variants
        </h3>
        <div className="flex flex-wrap items-center gap-4">
          <button className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-[oklch(0.50_0.16_180)] px-6 text-sm font-medium text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
            Primary Gradient
          </button>
          <button className="inline-flex h-10 items-center justify-center rounded-lg bg-gradient-to-r from-primary to-accent px-6 text-sm font-medium text-primary-foreground transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5">
            Warm Gradient
          </button>
          <button className="group inline-flex h-10 items-center justify-center rounded-lg border-2 border-transparent bg-clip-padding px-6 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary"
            style={{ background: "linear-gradient(var(--card), var(--card)) padding-box, linear-gradient(135deg, var(--primary), var(--accent)) border-box" }}
          >
            Gradient Border
          </button>
        </div>
      </div>

      {/* Gradient backgrounds */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Gradient Surfaces
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="group flex flex-col gap-3 rounded-lg bg-gradient-to-br from-primary/8 to-primary/2 p-6 transition-all duration-300 hover:from-primary/12 hover:to-primary/4 hover:shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                <path d="M10 2L18 14H2L10 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-foreground">Subtle Teal</span>
            <span className="text-xs leading-relaxed text-muted-foreground">A gentle primary gradient for feature cards and highlighted sections.</span>
          </div>

          <div className="group flex flex-col gap-3 rounded-lg bg-gradient-to-br from-accent/8 to-accent/2 p-6 transition-all duration-300 hover:from-accent/12 hover:to-accent/4 hover:shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 transition-colors duration-300 group-hover:bg-accent/20">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-accent">
                <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="10" cy="10" r="3" fill="currentColor"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-foreground">Subtle Warm</span>
            <span className="text-xs leading-relaxed text-muted-foreground">A warm accent gradient for callouts and secondary highlights.</span>
          </div>

          <div className="group flex flex-col gap-3 rounded-lg p-6 transition-all duration-300 hover:shadow-sm"
            style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 200 / 0.06), oklch(0.72 0.14 50 / 0.06))" }}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300"
              style={{ background: "linear-gradient(135deg, oklch(0.55 0.18 200 / 0.12), oklch(0.72 0.14 50 / 0.12))" }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
                <path d="M4 10H16M10 4V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-sm font-semibold text-foreground">Mixed Gradient</span>
            <span className="text-xs leading-relaxed text-muted-foreground">A cross-brand gradient combining both teal and amber tones.</span>
          </div>
        </div>
      </div>

      {/* Cards with hover effects */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Interactive Cards
        </h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "Mastodon", handle: "@user@mastodon.social", count: "2.4k followers" },
            { title: "Pixelfed", handle: "@user@pixelfed.social", count: "891 followers" },
            { title: "Lemmy", handle: "@user@lemmy.world", count: "156 subscribers" },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex cursor-pointer flex-col gap-3 rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary transition-colors duration-300 group-hover:bg-primary/15">
                  <Logo size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">{item.title}</span>
                  <span className="text-xs font-mono text-muted-foreground">{item.handle}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{item.count}</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-muted-foreground/0 transition-all duration-200 group-hover:text-primary group-hover:translate-x-0.5">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover effect showcase */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Hover Effects Reference
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
            <span className="text-sm font-semibold text-foreground">Lift</span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Cards and buttons rise slightly on hover with a subtle shadow, using <span className="font-mono text-primary">-translate-y-0.5</span> or <span className="font-mono text-primary">-translate-y-1</span>.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-primary/10" />
              <div className="h-12 w-12 rounded-lg bg-accent/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-accent/10" />
              <div className="h-12 w-12 rounded-lg bg-muted transition-all duration-300 hover:-translate-y-1 hover:shadow-md" />
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
            <span className="text-sm font-semibold text-foreground">Glow</span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Interactive elements gain a colored shadow on hover, using <span className="font-mono text-primary">shadow-primary/20</span> or <span className="font-mono text-primary">shadow-accent/20</span>.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-12 w-12 rounded-lg bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/30" />
              <div className="h-12 w-12 rounded-lg bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/30" />
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent transition-all duration-300 hover:shadow-lg hover:shadow-primary/20" />
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
            <span className="text-sm font-semibold text-foreground">Border Reveal</span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Container borders shift to a tinted primary color on hover, using <span className="font-mono text-primary">hover:border-primary/30</span>.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="h-12 w-12 rounded-lg border-2 border-border transition-all duration-300 hover:border-primary/40" />
              <div className="h-12 w-12 rounded-lg border-2 border-border transition-all duration-300 hover:border-accent/40" />
              <div className="h-12 w-12 rounded-lg border-2 border-border transition-all duration-300" style={{ transitionProperty: "all" }} onMouseEnter={e => (e.currentTarget.style.borderImage = "linear-gradient(135deg, var(--primary), var(--accent)) 1")} onMouseLeave={e => (e.currentTarget.style.borderImage = "none")} />
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
            <span className="text-sm font-semibold text-foreground">Color Shift</span>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Text and icon colors transition smoothly on hover, using <span className="font-mono text-primary">group-hover:text-primary</span>.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-primary">Link text</span>
              <span className="cursor-pointer text-sm text-muted-foreground transition-colors duration-200 hover:text-accent">Accent link</span>
              <span className="cursor-pointer text-sm font-semibold text-foreground underline decoration-transparent transition-all duration-200 hover:decoration-primary">Underline</span>
            </div>
          </div>
        </div>
      </div>

      {/* Voice & Tone */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
          Voice & Tone
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/20 hover:shadow-sm">
            <h4 className="mb-3 text-sm font-semibold text-foreground">We are</h4>
            <ul className="flex flex-col gap-2">
              {["Friendly and approachable", "Clear and concise", "Community-focused", "Empowering and inclusive"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform duration-200 group-hover:scale-125" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent/20 hover:shadow-sm">
            <h4 className="mb-3 text-sm font-semibold text-foreground">We avoid</h4>
            <ul className="flex flex-col gap-2">
              {["Technical jargon without context", "Condescending language", "Corporate buzzwords", "Exclusionary terminology"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-125" />
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
