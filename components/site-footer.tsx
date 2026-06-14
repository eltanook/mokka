import Link from 'next/link'
import { consignas } from '@/lib/consignas'

export function SiteFooter() {
  const colA = consignas.slice(0, 6)
  const colB = consignas.slice(6, 12)

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-background">
      {/* Decorative huge background wordmark */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 select-none font-display leading-none text-foreground/[0.025]"
        style={{ fontSize: 'clamp(8rem, 22vw, 20rem)' }}
        aria-hidden="true"
      >
        MOKKA
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <span className="font-display text-4xl leading-none tracking-wide">
              MOKKA
            </span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Dossier digital del proceso de Research &amp; Development de MOKKA,
              un postre funcional de chocolate y café gelificado en frío con
              carragenina kappa. TPO Bromatología 2026.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <span className="size-2 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                R&D 2026
              </span>
            </div>
          </div>

          <FooterCol title="Consignas 1–6" items={colA} />
          <FooterCol title="Consignas 7–12" items={colB} />
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Equipo MOKKA · Trabajo Práctico Obligatorio.</p>
          <p className="tracking-wide">
            MP del sorteo:{' '}
            <span className="font-semibold text-primary">Carragenina kappa</span>
            {' + '}
            <span className="font-semibold text-primary">Café</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({
  title,
  items,
}: {
  title: string
  items: { num: number; slug: string; label: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 text-[0.68rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {items.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/consignas/${c.slug}`}
              className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              <span className="font-mono text-[0.68rem] text-muted-foreground group-hover:text-primary transition-colors">
                {String(c.num).padStart(2, '0')}
              </span>
              {c.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
