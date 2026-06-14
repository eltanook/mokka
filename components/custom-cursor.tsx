'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef    = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = -200
    let mouseY = -200
    let raf: number

    let rafCount = 0
    const REFRESH_INTERVAL = 60 // refresh link listeners every ~60 frames

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onMouseDown = () => dotRef.current?.classList.add('cursor-click')
    const onMouseUp   = () => dotRef.current?.classList.remove('cursor-click')

    const onEnterLink = () => dotRef.current?.classList.add('cursor-hover')
    const onLeaveLink = () => dotRef.current?.classList.remove('cursor-hover')

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
      // Wrapper follows mouse exactly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`
      }

      // Periodically re-attach listeners
      rafCount++
      if (rafCount % REFRESH_INTERVAL === 0) attachLinkListeners()

      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onMouseDown, { passive: true })
    window.addEventListener('mouseup', onMouseUp, { passive: true })
    
    attachLinkListeners()
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <style>{`
        /* cursor: none is set globally in globals.css for pointer: fine devices */
        @media (pointer: coarse) { .mokka-cursor-wrapper { display: none !important; } }

        .mokka-cursor-wrapper {
          position: fixed;
          top: 0; left: 0;
          pointer-events: none;
          z-index: 99999;
          will-change: transform;
          mix-blend-mode: difference;
        }

        .mokka-cursor-dot {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%) scale(1);
          width: 24px; height: 24px; /* Even larger base size */
          border-radius: 50%;
          background: oklch(0.52 0.1 155);
          will-change: width, height, transform, background-color;
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1),
                      height 0.3s cubic-bezier(0.22,1,0.36,1),
                      background-color 0.3s ease,
                      transform 0.15s cubic-bezier(0.22,1,0.36,1);
        }

        .mokka-cursor-dot.cursor-hover {
          width: 64px;
          height: 64px;
        }

        /* Shrinks down with a springy feel when clicked */
        .mokka-cursor-dot.cursor-click {
          transform: translate(-50%, -50%) scale(0.65);
        }
      `}</style>
      <div ref={cursorRef} className="mokka-cursor-wrapper" aria-hidden="true">
        <div ref={dotRef} className="mokka-cursor-dot" />
      </div>
    </>
  )
}
