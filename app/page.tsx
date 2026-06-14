import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { PRODUCT } from '@/lib/consignas'
import { GridSection } from '@/components/grid-section'
import { Marquee } from '@/components/marquee'
import { RdCarousel } from '@/components/rd-carousel'
import { StatBand } from '@/components/stat-band'

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────
          overflow-hidden removed from section so elements can bleed out.
          body has overflow-x: hidden to prevent horizontal scroll.
      ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-background">

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 65% 40%, var(--hero-glow) 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-14 pb-20 sm:px-6 md:pt-18 lg:pt-20 lg:pb-[7.5rem]">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
            {/* Left column — Text Content */}
            <div className="flex flex-col justify-center">
              {/* Eyebrow */}
              <div className="animate-fade-in-up">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase backdrop-blur-sm">
                  <span className="inline-block size-1.5 animate-pulse rounded-full bg-primary" />
                  Trabajo Práctico Obligatorio · Bromatología 2026
                </span>
              </div>

              {/* Main title */}
              <div className="mt-5 overflow-hidden">
                <h1
                  className="animate-hero-title animation-delay-100 font-display leading-[0.88] text-balance"
                  style={{ fontSize: 'clamp(4.5rem, 13vw, 13rem)' }}
                >
                  {PRODUCT.name}
                </h1>
              </div>

              {/* Two-color tagline — cream first line, green second */}
              <div className="mt-4 animate-hero-title animation-delay-200">
                <p
                  className="font-display leading-[0.92] text-foreground text-balance"
                  style={{ fontSize: 'clamp(1.3rem, 3.2vw, 2.8rem)' }}
                >
                  POSTRE FUNCIONAL
                </p>
                <p
                  className="font-display leading-[0.92] text-primary text-balance"
                  style={{ fontSize: 'clamp(1.3rem, 3.2vw, 2.8rem)' }}
                >
                  DE CHOCOLATE Y CAFÉ
                </p>
              </div>

              {/* Description */}
              <div className="mt-6 animate-fade-in-up animation-delay-300">
                <p className="mt-0 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Dossier digital que documenta, consigna por consigna, todo el proceso de
                  Research &amp; Development de un postre indulgente y funcional, gelificado en frío
                  con <strong className="text-foreground">carragenina kappa</strong> y
                  aromatizado con <strong className="text-foreground">café</strong>.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="#consignas"
                    id="cta-ver-consignas"
                    className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold tracking-wider text-primary-foreground transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] active:translate-y-px"
                  >
                    Ver las 12 consignas
                    <ArrowDown className="size-4" />
                  </Link>
                  <Link
                    href="/consignas/concepto"
                    id="cta-empezar"
                    className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-bold tracking-wider text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-card hover:border-primary/40 active:translate-y-px"
                  >
                    Empezar por el concepto
                  </Link>
                </div>
              </div>
            </div>

            {/* Right column — product image (transparent PNG) */}
            <div className="animate-fade-in-up animation-delay-400 relative mx-auto hidden w-full max-w-lg lg:block lg:mx-0 lg:w-[530px] xl:w-[620px]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/hero-mokka.png"
                  alt="Vasitos de MOKKA, postre de chocolate y café, presentados sobre una superficie de estudio"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 400px"
                  className="object-contain"
                />
              </div>

              {/* Floating "Carragenina Kappa" badge -> BOTTOM RIGHT */}
              <div className="animate-float-badge absolute bottom-12 right-2 sm:-right-4 rounded-xl bg-accent px-5 py-3.5 shadow-xl shadow-black/30 z-20">
                <span className="block text-[0.65rem] font-bold tracking-[0.2em] text-accent-foreground/70 uppercase mb-0.5">
                  Agente clave
                </span>
                <span className="block font-display text-base leading-none tracking-wide text-accent-foreground">
                  CARRAGENINA KAPPA
                </span>
              </div>

              {/* Floating left badges */}

              {/* Badge 2: Circular number -> moved OVER IMAGE ON THE LEFT */}
              <div className="animate-float-badge animation-delay-500 absolute bottom-48 left-16 sm:left-12 z-20 hidden size-28 place-items-center rounded-full border-4 border-background bg-primary shadow-xl shadow-black/20 sm:grid">
                <div className="text-center mt-1">
                  <span className="block font-display text-4xl leading-none text-primary-foreground">
                    90
                  </span>
                  <span className="block text-[0.65rem] font-bold tracking-widest text-primary-foreground/90 uppercase">
                    gramos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ─── R&D STORY CAROUSEL (alternating moss green section) ── */}
      <RdCarousel />

      {/* ─── STAT BAND — key numbers ──────────────────────────── */}
      <StatBand />

      {/* ─── MARQUEE ──────────────────────────────────────────── */}
      <Marquee className="mt-0" />

      {/* ─── CONSIGNAS GRID ───────────────────────────────────── */}
      <section id="consignas" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 md:py-20">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold tracking-[0.22em] text-primary uppercase">
              Índice del informe
            </span>
            <h2
              className="mt-2 font-display leading-[0.92] text-balance"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              LOS 12 PUNTOS
              <br />
              <span className="text-primary">DE LA CONSIGNA</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
            Cada tarjeta abre el desarrollo completo: textos,
            tablas, registros fotográficos y justificaciones técnicas.
          </p>
        </div>

        <GridSection />
      </section>
    </>
  )
}
