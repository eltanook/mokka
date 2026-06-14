'use client'

import { useState, useMemo } from 'react'
import { Search, LayoutGrid, Columns2, List, X } from 'lucide-react'
import { consignas } from '@/lib/consignas'
import { ConsignaCard } from '@/components/consigna-card'

type ViewMode = '3col' | '2col' | '1col'

const VIEWS: { mode: ViewMode; label: string; icon: React.ReactNode }[] = [
  {
    mode: '3col',
    label: 'Vista grilla 3 columnas',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.9"/>
        <rect x="6" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.9"/>
        <rect x="11" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.9"/>
        <rect x="1" y="6" width="4" height="4" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="6" y="6" width="4" height="4" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="11" y="6" width="4" height="4" rx="1" fill="currentColor" opacity="0.5"/>
        <rect x="1" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.25"/>
        <rect x="6" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.25"/>
        <rect x="11" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.25"/>
      </svg>
    ),
  },
  {
    mode: '2col',
    label: 'Vista grilla 2 columnas',
    icon: <Columns2 className="size-4" />,
  },
  {
    mode: '1col',
    label: 'Vista lista',
    icon: <List className="size-4" />,
  },
]

export function GridSection() {
  const [query,   setQuery]   = useState('')
  const [view,    setView]    = useState<ViewMode>('3col')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return consignas
    return consignas.filter(
      (c) =>
        c.title.toLowerCase().includes(q)    ||
        c.label.toLowerCase().includes(q)    ||
        c.category.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q),
    )
  }, [query])

  const gridClass = {
    '3col': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    '2col': 'grid-cols-1 sm:grid-cols-2',
    '1col': 'grid-cols-1',
  }[view]

  return (
    <div>
      {/* ── Controls bar ── */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-4 top-1/2 z-10 size-5 -translate-y-1/2 text-primary/70" />
          <input
            id="consigna-search"
            type="search"
            autoComplete="off"
            spellCheck={false}
            placeholder="Buscar consigna por título, categoría o contenido…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={[
              'w-full rounded-2xl border bg-card/50 py-3 pl-11 pr-10 text-sm text-foreground',
              'placeholder:text-muted-foreground backdrop-blur-sm',
              'outline-none transition-all duration-200',
              'border-border focus:border-primary/60 focus:ring-2 focus:ring-primary/20',
            ].join(' ')}
          />
          {query && (
            <button
              aria-label="Limpiar búsqueda"
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid size-6 place-items-center rounded-full text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-3.5" />
            </button>
          )}
        </div>

        {/* View toggle */}
        <div
          className="flex rounded-2xl border border-border bg-card/50 p-1 backdrop-blur-sm"
          role="group"
          aria-label="Cambiar vista de grilla"
        >
          {VIEWS.map(({ mode, label, icon }) => (
            <button
              key={mode}
              id={`view-${mode}`}
              type="button"
              aria-label={label}
              aria-pressed={view === mode}
              onClick={() => setView(mode)}
              className={[
                'grid size-9 place-items-center rounded-xl text-sm transition-all duration-150',
                view === mode
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted',
              ].join(' ')}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ── */}
      {filtered.length > 0 ? (
        <div
          className={`grid gap-5 ${gridClass}`}
          style={{ alignItems: 'stretch' }}
        >
          {filtered.map((c, i) => (
            <div
              key={`${c.slug}-${view}`}
              className="flex h-full"
              style={{
                animation: `fade-in-up 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 60}ms both`,
              }}
            >
              <ConsignaCard consigna={c} viewMode={view === '1col' ? 'list' : 'grid'} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 py-24 text-center">
          <span className="font-display text-5xl text-muted-foreground/30">?</span>
          <p className="text-sm text-muted-foreground">
            No se encontraron consignas para{' '}
            <span className="font-semibold text-foreground">"{query}"</span>
          </p>
          <button
            onClick={() => setQuery('')}
            className="mt-2 rounded-full border border-border px-4 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Limpiar búsqueda
          </button>
        </div>
      )}
    </div>
  )
}
