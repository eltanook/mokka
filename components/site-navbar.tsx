'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { consignas } from '@/lib/consignas'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

export function SiteNavbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md shadow-md shadow-black/20'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="Ir al inicio del dossier"
        >
          <span className="font-display text-2xl leading-none tracking-wide">
            MOKKA
          </span>
          <span className="hidden text-[0.6rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase sm:block">
            · Dossier R&amp;D
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          <NavLink href="/" active={pathname === '/'}>
            Inicio
          </NavLink>

          {/* Consignas dropdown */}
          <div className="group relative">
            <button className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide text-foreground/70 transition-colors hover:bg-card hover:text-foreground uppercase">
              Consignas
            </button>
            <div className="invisible absolute right-0 top-full z-50 w-[36rem] translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-card/95 p-2 shadow-2xl shadow-black/40 backdrop-blur-md">
                {consignas.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/consignas/${c.slug}`}
                    className="flex items-start gap-2.5 rounded-xl px-2.5 py-2.5 transition-colors hover:bg-muted"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md bg-primary/15 font-mono text-[0.6rem] font-bold text-primary">
                      {c.num}
                    </span>
                    <span className="text-xs font-medium leading-tight text-foreground/90">
                      {c.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <div className="ml-2 pl-2 border-l border-border/50 flex items-center">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full border border-border bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:bg-card"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-card/95 backdrop-blur-md lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mb-3 block rounded-xl px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted"
            >
              Inicio
            </Link>
            <p className="px-3 pb-2 pt-1 text-[0.62rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Las 12 consignas
            </p>
            <div className="grid grid-cols-1 gap-0.5 sm:grid-cols-2">
              {consignas.map((c) => (
                <Link
                  key={c.slug}
                  href={`/consignas/${c.slug}`}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-muted"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-md bg-primary/15 font-mono text-xs font-bold text-primary">
                    {c.num}
                  </span>
                  <span className="text-sm font-medium text-foreground">{c.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string
  active?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-full px-3.5 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-150',
        active
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground/70 hover:bg-card hover:text-foreground',
      )}
    >
      {children}
    </Link>
  )
}
