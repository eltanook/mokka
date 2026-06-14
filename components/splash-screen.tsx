'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function SplashScreen() {
  const [fading, setFading] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    // Evita el scroll mientras carga
    document.body.style.overflow = 'hidden'

    // Inicia el desvanecimiento después de 1.2 segundos
    const fadeTimer = setTimeout(() => {
      setFading(true)
      document.body.style.overflow = ''
    }, 1200)

    // Elimina el DOM completamente después de terminar la transición
    const hideTimer = setTimeout(() => setHidden(true), 2000)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
      document.body.style.overflow = ''
    }
  }, [])

  if (hidden) return null

  return (
    <div
      className={cn(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-in-out',
        fading ? 'pointer-events-none opacity-0 scale-105' : 'opacity-100 scale-100'
      )}
    >
      <div className="relative flex flex-col items-center">
        <span className="font-display text-4xl tracking-widest text-primary animate-pulse">
          MOKKA
        </span>
        <span className="mt-2 text-[0.65rem] font-semibold tracking-[0.4em] text-muted-foreground uppercase opacity-80">
          Iniciando Dossier R&amp;D
        </span>
        
        {/* Línea de carga */}
        <div className="mt-8 h-[1px] w-32 overflow-hidden bg-border relative">
          <div className="absolute left-0 top-0 h-full w-full bg-primary origin-left animate-loading-bar" />
        </div>
      </div>
    </div>
  )
}
