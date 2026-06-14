'use client'

import { useState, useEffect, useRef } from 'react'

const STATS = [
  {
    value: '1.2',
    unit: '%',
    label: 'Carragenina kappa',
    sub: 'Concentración en la fórmula final',
  },
  {
    value: '90',
    unit: ' g',
    label: 'Por porción',
    sub: 'Vasito individual listo para consumir',
  },
  {
    value: '14',
    unit: ' días',
    label: 'Vida útil estimada',
    sub: 'Refrigerado a 4°C sin abrirse',
  },
]

function CounterNum({ value }: { value: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const end = parseFloat(value)
          const duration = 2000
          const startTime = performance.now()

          const update = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeProgress = progress * (2 - progress)

            setCount(end * easeProgress)

            if (progress < 1) {
              requestAnimationFrame(update)
            } else {
              setCount(end)
            }
          }

          requestAnimationFrame(update)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  const formatted = value.includes('.') ? count.toFixed(1) : Math.round(count).toString()

  return <span ref={ref}>{formatted}</span>
}

export function StatBand() {
  return (
    <section
      id="datos-clave"
      className="relative overflow-hidden bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url('/images/mokka_stat_bg.png')` }}
    >
      {/* Dynamic theme overlay */}
      <div className="absolute inset-0 bg-background/90" />
      
      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-20 sm:px-6 md:pt-20 md:pb-24">
        {/* Eyebrow */}
        <div className="mb-14 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <span className="text-xs font-semibold tracking-[0.28em] text-primary uppercase">
              Datos clave
            </span>
            <p
              className="mt-1 font-display leading-none text-foreground"
              style={{ fontSize: 'clamp(1.6rem, 4vw, 3rem)' }}
            >
              MOKKA EN NÚMEROS
            </p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-right">
            Las tres métricas que definen el producto final obtenido en el proceso R&amp;D.
          </p>
        </div>

        {/* Stats */}
        <div className="grid gap-0 divide-y divide-border sm:divide-y-0 sm:divide-x sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center gap-2 px-8 py-8 text-center sm:py-0">
              {/* Giant background value — barely visible */}
              <span
                className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-display leading-none text-foreground/[0.03] overflow-hidden"
                aria-hidden="true"
                style={{ fontSize: 'clamp(8rem, 18vw, 16rem)' }}
              >
                {stat.value}
              </span>

              {/* Actual stat */}
              <div className="relative">
                <div
                  className="font-display leading-none text-foreground"
                  style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
                >
                  <CounterNum value={stat.value} />
                  <span
                    className="text-primary"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)' }}
                  >
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-3 font-display text-base tracking-wide text-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
