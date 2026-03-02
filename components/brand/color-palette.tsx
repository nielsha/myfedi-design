interface ColorSwatchProps {
  name: string
  token: string
  hex: string
  description: string
}

function ColorSwatch({ name, token, hex, description }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="h-24 w-full rounded-lg border border-border"
        style={{ backgroundColor: `var(--${token})` }}
      />
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-foreground">{name}</span>
        <span className="text-xs font-mono text-muted-foreground">{hex}</span>
        <span className="text-xs text-muted-foreground">{description}</span>
      </div>
    </div>
  )
}

export function ColorPalette() {
  const colors: ColorSwatchProps[] = [
    {
      name: "Teal",
      token: "primary",
      hex: "#1B8A8A",
      description: "Primary brand color. Used for links, CTAs, and key UI elements.",
    },
    {
      name: "Amber",
      token: "accent",
      hex: "#D4884A",
      description: "Accent color. Used for highlights, badges, and secondary actions.",
    },
    {
      name: "Off-White",
      token: "background",
      hex: "#FAF9F6",
      description: "Background color. The warm, neutral canvas for all content.",
    },
    {
      name: "Ink",
      token: "foreground",
      hex: "#1C1E2A",
      description: "Foreground color. Primary text and heading color.",
    },
    {
      name: "Mist",
      token: "muted",
      hex: "#EEEDF0",
      description: "Muted surface. Used for subtle backgrounds and secondary areas.",
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
      {colors.map((color) => (
        <ColorSwatch key={color.token} {...color} />
      ))}
    </div>
  )
}
