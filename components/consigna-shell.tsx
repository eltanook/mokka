import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Home } from 'lucide-react'
import { type Consigna, accentClasses, getAdjacent } from '@/lib/consignas'
import { cn } from '@/lib/utils'

export function ConsignaShell({
  consigna,
  children,
}: {
  consigna: Consigna
  children: React.ReactNode
}) {
  const a = accentClasses[consigna.accent]
  const { prev, next } = getAdjacent(consigna.slug)

  return (
    <article>
      {/* ── Header with photo collage treatment ──────────────── */}
      <header className={cn('relative border-b border-border overflow-hidden', a.bgSoft)}>
        {/* Decorative ghost number — bg */}
        <div
          className="pointer-events-none absolute -right-4 -top-6 select-none font-display leading-none text-foreground/[0.04]"
          style={{ fontSize: '12rem' }}
          aria-hidden="true"
        >
          {consigna.num}
        </div>

        {/* Breadcrumb + title — above ghost number */}
        <div className="relative mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16" style={{ zIndex: 6 }}>
          <nav className="mb-6 flex items-center gap-2 text-xs text-muted-foreground">
            <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-foreground">
              <Home className="size-3.5" />
              Inicio
            </Link>
            <span>/</span>
            <span className="text-foreground">Consigna {consigna.num}</span>
          </nav>

          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <span
              className={cn(
                'grid size-16 shrink-0 place-items-center rounded-2xl font-display text-3xl shadow-md shadow-black/30',
                a.badge,
              )}
            >
              {consigna.num}
            </span>
            <div>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full bg-card/50 px-2.5 py-1 text-[0.65rem] font-semibold tracking-[0.15em] uppercase backdrop-blur-sm',
                  a.text,
                )}
              >
                {consigna.category}
              </span>
              <h1 className="mt-2 font-display text-3xl leading-tight tracking-wide text-balance sm:text-4xl md:text-5xl">
                {consigna.title}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 md:py-16">
        <div className="space-y-12">{children}</div>

        {/* Prev / Next */}
        <nav className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/consignas/${prev.slug}`}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:shadow-md"
            >
              <ArrowLeft className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  Consigna {prev.num} · Anterior
                </span>
                <span className="block truncate font-semibold text-foreground">{prev.label}</span>
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/consignas/${next.slug}`}
              className="group flex items-center justify-end gap-3 rounded-2xl border border-border bg-card p-4 text-right transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="min-w-0">
                <span className="block text-xs text-muted-foreground">
                  Consigna {next.num} · Siguiente
                </span>
                <span className="block truncate font-semibold text-foreground">{next.label}</span>
              </span>
              <ArrowRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <Link
              href="/"
              className="group flex items-center justify-end gap-3 rounded-2xl border border-border bg-card p-4 text-right transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span>
                <span className="block text-xs text-muted-foreground">Fin del dossier</span>
                <span className="block font-semibold text-foreground">Volver al índice</span>
              </span>
              <Home className="size-5 shrink-0 text-muted-foreground" />
            </Link>
          )}
        </nav>
      </div>
    </article>
  )
}
