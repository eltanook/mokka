import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/* ---------- Section ---------- */
export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 border-b border-border pb-3">
        {eyebrow && (
          <span className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-1 font-display text-2xl leading-tight tracking-wide text-balance sm:text-3xl">
          {title}
        </h2>
      </div>
      <div className="space-y-5">{children}</div>
    </section>
  )
}

/* ---------- Prose paragraph ---------- */
export function Lead({ children }: { children: ReactNode }) {
  return (
    <p className="text-lg leading-relaxed text-foreground/90 text-pretty">{children}</p>
  )
}

export function P({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-foreground/80 text-pretty">{children}</p>
}

/* ---------- Subheading ---------- */
export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-xl tracking-wide text-foreground mt-2">{children}</h3>
  )
}

/* ---------- Bulleted list ---------- */
export function List({
  items,
  ordered = false,
}: {
  items: ReactNode[]
  ordered?: boolean
}) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag
      className={cn(
        'space-y-2 pl-1',
        ordered ? 'list-none counter-reset' : '',
      )}
    >
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 leading-relaxed text-foreground/80">
          <span
            className={cn(
              'mt-2 size-1.5 shrink-0 rounded-full bg-accent',
              ordered && 'mt-0 grid size-5 place-items-center rounded-md bg-primary/10 text-xs font-bold text-primary',
            )}
          >
            {ordered ? i + 1 : ''}
          </span>
          <span>{it}</span>
        </li>
      ))}
    </Tag>
  )
}

/* ---------- Callout ---------- */
export function Callout({
  title,
  children,
  variant = 'info',
}: {
  title?: string
  children: ReactNode
  variant?: 'info' | 'warning' | 'success'
}) {
  const styles = {
    info: 'border-indigo/30 bg-indigo/5',
    warning: 'border-orange/40 bg-orange/10',
    success: 'border-teal/40 bg-teal/10',
  }
  const dot = {
    info: 'bg-indigo',
    warning: 'bg-orange',
    success: 'bg-teal',
  }
  return (
    <div className={cn('rounded-2xl border p-5', styles[variant])}>
      {title && (
        <p className="mb-1.5 flex items-center gap-2 font-semibold text-foreground">
          <span className={cn('size-2 rounded-full', dot[variant])} />
          {title}
        </p>
      )}
      <div className="text-sm leading-relaxed text-foreground/80">{children}</div>
    </div>
  )
}

/* ---------- Figure ---------- */
export function Figure({
  src,
  alt,
  caption,
  ratio = 'aspect-[16/10]',
}: {
  src: string
  alt: string
  caption?: string
  ratio?: string
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className={cn('relative w-full', ratio)}>
        <Image src={src || '/placeholder.svg'} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      {caption && (
        <figcaption className="border-t border-border px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/* ---------- Stat grid ---------- */
export function StatGrid({
  stats,
}: {
  stats: { value: string; label: string }[]
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s, i) => (
        <div key={i} className="rounded-2xl border border-border bg-card p-4">
          <p className="font-display text-2xl tracking-wide text-primary">{s.value}</p>
          <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</p>
        </div>
      ))}
    </div>
  )
}

/* ---------- Table ---------- */
export function DataTable({
  head,
  rows,
  caption,
}: {
  head: string[]
  rows: ReactNode[][]
  caption?: string
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted/60">
              {head.map((h, i) => (
                <th
                  key={i}
                  className="border-b border-border px-4 py-3 text-left font-semibold tracking-wide text-foreground whitespace-nowrap"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="even:bg-muted/30">
                {row.map((cell, ci) => (
                  <td
                    key={ci}
                    className={cn(
                      'border-b border-border/60 px-4 py-2.5 text-foreground/80',
                      ci === 0 && 'font-medium text-foreground',
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && (
        <p className="border-t border-border px-4 py-2.5 text-xs text-muted-foreground">
          {caption}
        </p>
      )}
    </div>
  )
}

/* ---------- Two column cards ---------- */
export function SplitCards({
  left,
  right,
}: {
  left: { title: string; items: string[]; variant: 'success' | 'warning' }
  right: { title: string; items: string[]; variant: 'success' | 'warning' }
}) {
  const card = (c: { title: string; items: string[]; variant: 'success' | 'warning' }) => {
    const border = c.variant === 'success' ? 'border-teal/40' : 'border-orange/40'
    const head = c.variant === 'success' ? 'text-teal' : 'text-orange'
    const dot = c.variant === 'success' ? 'bg-teal' : 'bg-orange'
    return (
      <div className={cn('rounded-2xl border bg-card p-5', border)}>
        <h4 className={cn('mb-3 font-display text-lg tracking-wide', head)}>{c.title}</h4>
        <ul className="space-y-2">
          {c.items.map((it, i) => (
            <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80">
              <span className={cn('mt-1.5 size-1.5 shrink-0 rounded-full', dot)} />
              {it}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {card(left)}
      {card(right)}
    </div>
  )
}
