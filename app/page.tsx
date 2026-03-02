import { LogoMark } from "@/components/brand/logo"
import { ColorPalette } from "@/components/brand/color-palette"
import { TypographyShowcase } from "@/components/brand/typography-showcase"
import { LogoUsage } from "@/components/brand/logo-usage"
import { BrandElements } from "@/components/brand/brand-elements"

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="flex flex-col gap-2 pb-8">
      <span className="text-xs font-mono uppercase tracking-widest text-primary">
        {number}
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground text-balance">
        {title}
      </h2>
      <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  )
}

export default function BrandIdentityPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <LogoMark />
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Brand Identity
          </span>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl text-balance">
              Brand Identity
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
              The visual language of myfedi.link. A guide to maintaining consistency across all touchpoints of our Fediverse community platform.
            </p>
            <div className="mt-4 flex items-center gap-6 text-sm text-muted-foreground">
              <span className="font-mono">v1.0</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="font-mono">March 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sections */}
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <div className="flex flex-col gap-20">
          {/* Logo */}
          <section>
            <SectionHeader
              number="01"
              title="Logo"
              description="The myfedi.link logo represents federation and connection. Three interconnected nodes form a network, symbolizing the decentralized nature of the Fediverse, with a warm center point representing the link between communities."
            />
            <LogoUsage />
          </section>

          {/* Colors */}
          <section>
            <SectionHeader
              number="02"
              title="Color Palette"
              description="A balanced palette built around a calm teal primary and a warm amber accent. The palette evokes trust, warmth, and openness while remaining accessible and easy on the eyes."
            />
            <ColorPalette />
          </section>

          {/* Typography */}
          <section>
            <SectionHeader
              number="03"
              title="Typography"
              description="Two distinctive typefaces create a clear hierarchy. DM Sans brings geometric character and warmth to UI elements, while JetBrains Mono adds technical precision for code and identifiers."
            />
            <TypographyShowcase />
          </section>

          {/* Brand Elements */}
          <section>
            <SectionHeader
              number="04"
              title="Brand Elements"
              description="Interactive UI components with gradient variants, subtle hover effects, and voice guidelines that make up the visual and verbal identity of myfedi.link."
            />
            <BrandElements />
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
          <LogoMark />
          <span className="text-xs text-muted-foreground">
            myfedi.link Brand Guidelines
          </span>
        </div>
      </footer>
    </main>
  )
}
