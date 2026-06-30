'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const SLIDES = [
  {
    num: '01',
    phase: 'Consignas 1 y 2',
    title: 'CONCEPTO Y TARGET',
    subtitle: 'Enfoque y estudio de mercado',
    text: 'Justificación del enfoque teórico-práctico del producto. Definición del Target Market y análisis de viabilidad para un postre lácteo funcional indulgente.',
    chip: 'Estudio Inicial',
    subtitleColor: 'text-primary',
  },
  {
    num: '02',
    phase: 'Consignas 4 y 6',
    title: 'MATERIAS PRIMAS',
    subtitle: 'Carragenina y Café',
    text: 'Descripción química y funcional de los ingredientes asignados. Análisis de ventajas, desventajas nutricionales, y comparativa de impacto en la formulación base.',
    chip: 'Ingredientes Clave',
    subtitleColor: 'text-moss',
  },
  {
    num: '03',
    phase: 'Consignas 3 y 5',
    title: 'EVOLUCIÓN DE FÓRMULA',
    subtitle: 'Ajustes y Mejoras',
    text: 'Documentación de la matriz de pruebas, ajustes de porcentajes y justificaciones técnicas que llevaron al prototipo final, respaldado por registros fotográficos.',
    chip: 'Prototipado',
    subtitleColor: 'text-terracotta',
  },
  {
    num: '04',
    phase: 'Consignas 8, 9 y 10',
    title: 'PROCESO Y ANÁLISIS',
    subtitle: 'Microbiología y Sensorial',
    text: 'Armado de medios de cultivo y controles de pH. Evaluación teórica de vida útil estipulada en 20 a 25 días y resultados de las pruebas fisicoquímicas y sensoriales.',
    chip: 'Laboratorio',
    subtitleColor: 'text-primary',
  },
  {
    num: '05',
    phase: 'Consignas 7, 11 y 12',
    title: 'MARCO REGULATORIO',
    subtitle: 'Ley 27.642 y Costos',
    text: 'Estructura básica de costos, precio de venta y aplicación de tabla nutricional con justificación de sellos: Exceso en Azúcares, Grasas Totales y Grasas Saturadas.',
    chip: 'Cumplimiento Legal',
    subtitleColor: 'text-cream',
  },
]

// Exact CSS color values matching globals.css tokens
// Using JS constants so paths use style prop (CSS) not SVG attr — required for oklch support
const C_ESPRESSO  = 'oklch(0.21 0.05 35)'   // --color-background (hero, grid)
const C_MOSS      = 'oklch(0.22 0.07 148)'  // R&D carousel section
const C_DARK_ESP  = 'oklch(0.175 0.04 35)'  // stat-band section

export function RdCarousel() {
  const [current, setCurrent] = useState(0)
  const prev = () => setCurrent((c) => Math.max(0, c - 1))
  const next = () => setCurrent((c) => Math.min(SLIDES.length - 1, c + 1))
  const slide = SLIDES[current]

  return (
    <>
      {/* ── Top diagonal: espresso → moss (hero into R&D section) ── */}
      {/* Using style prop (CSS) for fill, not SVG attribute — supports oklch */}
      <div aria-hidden="true" style={{ lineHeight: 0, display: 'block', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          {/* Top-left triangle: adapts to global background, bleeds diagonally down from the left */}
          <path d="M0,0 L1440,0 L0,80 Z"      style={{ fill: 'var(--background)' }} />
          <path d="M1440,0 L1440,80 L0,80 Z" style={{ fill: C_MOSS }} />
        </svg>
      </div>

      {/* ── Main R&D section ─────────────────────────────────── */}
      <section id="rd-story" style={{ background: C_MOSS, position: 'relative' }}>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
          {/* Carousel */}
          <div className="relative">
            {/* Giant ghost number */}
            <div
              className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden"
              aria-hidden="true"
            >
              <span
                className="font-display leading-none transition-opacity duration-500"
                style={{
                  fontSize: 'clamp(10rem, 28vw, 26rem)',
                  color: 'oklch(0.85 0.025 80 / 0.04)',
                }}
              >
                {slide.num}
              </span>
            </div>

            {/* Slide content */}
            <div className="relative mx-auto max-w-3xl px-0 sm:px-16 text-center grid" style={{ minHeight: '280px' }}>
              {SLIDES.map((s, index) => (
                <div
                  key={index}
                  className="col-start-1 row-start-1"
                  style={
                    index === current
                      ? {
                          animation: 'fade-in 0.35s cubic-bezier(0.22,1,0.36,1) both',
                          zIndex: 10,
                        }
                      : {
                          opacity: 0,
                          pointerEvents: 'none',
                          visibility: 'hidden',
                        }
                  }
                >
                  <span className="inline-block text-xs font-semibold tracking-[0.25em] text-primary/60 uppercase mb-3">
                    {s.phase}
                  </span>

                  <h3
                    className="font-display leading-[0.9] text-balance"
                    style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)', color: 'oklch(0.92 0.025 80)' }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className={`mt-1 font-display leading-tight ${s.subtitleColor}`}
                    style={{ fontSize: 'clamp(1rem, 2.5vw, 1.8rem)' }}
                  >
                    {s.subtitle}
                  </p>

                  <p className="mt-5 mx-auto max-w-lg text-sm leading-relaxed" style={{ color: 'oklch(0.72 0.03 150)' }}>
                    {s.text}
                  </p>

                  <span
                    className="mt-6 inline-block rounded border border-primary/30 bg-primary/10 px-3 py-1.5 font-display text-xs tracking-[0.18em] text-primary"
                    style={{ transform: 'rotate(-2deg)' }}
                  >
                    {s.chip}
                  </span>
                </div>
              ))}
            </div>

            {/* Nav arrows */}
            <button
              onClick={prev}
              disabled={current === 0}
              aria-label="Diapositiva anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white disabled:opacity-20 disabled:pointer-events-none"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={next}
              disabled={current === SLIDES.length - 1}
              aria-label="Siguiente diapositiva"
              className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:grid size-12 place-items-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all hover:bg-white/10 hover:text-white disabled:opacity-20 disabled:pointer-events-none"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-10 flex justify-center gap-2" role="tablist">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Ir a diapositiva ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 h-2 bg-primary' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom diagonal: moss → darker espresso (into StatBand) ── */}
      <div aria-hidden="true" style={{ lineHeight: 0, display: 'block', marginTop: '-1px', marginBottom: '-79px', position: 'relative', zIndex: 20 }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '80px' }}
        >
          <path d="M0,0 L1440,0 L1440,80 Z" style={{ fill: C_MOSS }} />
          <path d="M0,0 L1440,80 L0,80 Z"   style={{ fill: 'transparent' }} />
        </svg>
      </div>
    </>
  )
}
