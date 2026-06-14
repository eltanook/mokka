'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = -200
    let mouseY = -200
    let ringX  = -200
    let ringY  = -200
    let raf: number

    // Keep ring listener list current (new links may mount after initial render)
    let rafCount = 0
    const REFRESH_INTERVAL = 60 // refresh link listeners every ~60 frames

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t

    const onEnterLink = () => ringRef.current?.classList.add('cursor-hover')
    const onLeaveLink = () => ringRef.current?.classList.remove('cursor-hover')

    const attachLinkListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, label').forEach((el) => {
        // Avoid double-attaching
        if ((el as HTMLElement).dataset.cursorBound) return
        ;(el as HTMLElement).dataset.cursorBound = '1'
        el.addEventListener('mouseenter', onEnterLink)
        el.addEventListener('mouseleave', onLeaveLink)
      })
    }

    const tick = () => {
      // Dot: zero delay — follows mouse exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`
      }

      // Ring: zero delay
      ringX = mouseX
      ringY = mouseY
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`
      }

      // Periodically re-attach listeners to catch dynamically added links
      rafCount++
      if (rafCount % REFRESH_INTERVAL === 0) attachLinkListeners()

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    attachLinkListeners()
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <style>{`
        /* cursor: none is set globally in globals.css for pointer: fine devices */
        @media (pointer: coarse) { .mokka-cursor { display: none !important; } }

        .mokka-cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 7px; height: 7px;
          border-radius: 50%;
          background: oklch(0.52 0.1 155);
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          mix-blend-mode: difference;
        }

        .mokka-cursor-ring {
          position: fixed;
          top: 0; left: 0;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1.5px solid oklch(0.52 0.1 155 / 0.55);
          pointer-events: none;
          z-index: 99998;
          will-change: transform;
          transition: width 0.2s cubic-bezier(0.22,1,0.36,1),
                      height 0.2s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.2s ease;
        }

        .mokka-cursor-ring.cursor-hover {
          width: 50px;
          height: 50px;
          border-color: oklch(0.82 0.07 82 / 0.75);
        }
      `}</style>
      <div ref={dotRef}  className="mokka-cursor mokka-cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="mokka-cursor mokka-cursor-ring" aria-hidden="true" />
    </>
  )
}
