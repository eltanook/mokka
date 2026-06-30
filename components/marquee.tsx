interface MarqueeItem {
  text: string
}

const ITEMS: MarqueeItem[] = [
  { text: 'CHOCOLATE' },
  { text: '·' },
  { text: 'CAFÉ' },
  { text: '·' },
  { text: 'CARRAGENINA KAPPA' },
  { text: '·' },
  { text: 'R&D 2026' },
  { text: '·' },
  { text: 'BROMATOLOGÍA' },
  { text: '·' },
  { text: 'POSTRE FUNCIONAL' },
  { text: '·' },
  { text: 'GELIFICADO POR ENFRIAMIENTO' },
  { text: '·' },
  { text: 'VASITO 90g' },
  { text: '·' },
]

export function Marquee({ className = '' }: { className?: string }) {
  // Duplicate items to create seamless loop
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      className={`overflow-hidden border-y border-border bg-card/50 py-3 ${className}`}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-5 font-display text-sm tracking-[0.25em] ${
              item.text === '·'
                ? 'text-primary'
                : 'text-muted-foreground'
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  )
}
