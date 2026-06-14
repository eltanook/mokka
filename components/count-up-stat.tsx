'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpStatProps {
  icon: React.ReactNode
  /** Numeric value to count up to */
  to: number
  /** Text suffix appended after the number (e.g. " g", " MP") */
  suffix?: string
  label: string
  /** Animation duration in ms */
  duration?: number
}

export function CountUpStat({
  icon,
  to,
  suffix = '',
  label,
  duration = 1600,
}: CountUpStatProps) {
  const [count, setCount]   = useState(0)
  const containerRef        = useRef<HTMLDivElement>(null)
  const hasAnimated         = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const startTime = performance.now()

          const tick = (now: number) => {
            const elapsed  = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // Ease-out quart: deceleration at the end
            const eased    = 1 - Math.pow(1 - progress, 4)
            setCount(Math.round(to * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-3 rounded-2xl border border-border bg-card/50 px-4 py-3 backdrop-blur-sm"
    >
      <div className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
        {icon}
      </div>
      <div>
        <dd className="font-display text-xl leading-none tabular-nums">
          {count}
          {suffix}
        </dd>
        <dt className="mt-0.5 text-[0.68rem] text-muted-foreground">{label}</dt>
      </div>
    </div>
  )
}
