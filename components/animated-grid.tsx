'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedGridProps {
  children: React.ReactNode
  className?: string
}

/**
 * Wraps a grid of children and animates each direct child in with a
 * fade-in-up + stagger when it enters the viewport.
 */
export function AnimatedGrid({ children, className = '' }: AnimatedGridProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState<Set<number>>(new Set())

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const items = Array.from(grid.children) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLElement)
            if (idx !== -1) {
              // Stagger: each card waits idx * 80ms
              setTimeout(() => {
                setVisible((prev) => new Set(prev).add(idx))
              }, idx * 80)
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' },
    )

    items.forEach((item) => {
      observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={gridRef} className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: visible.has(i) ? 1 : 0,
                transform: visible.has(i) ? 'translateY(0px)' : 'translateY(48px)',
                transition: 'opacity 0.65s cubic-bezier(0.22,1,0.36,1), transform 0.65s cubic-bezier(0.22,1,0.36,1)',
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
