'use client'

import * as React from 'react'
import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export type LightboxImage = {
  id: string
  src: string
  alt: string
  caption?: string
}

type LightboxContextType = {
  registerImage: (img: LightboxImage) => void
  unregisterImage: (id: string) => void
  openLightbox: (id: string) => void
}

const LightboxContext = createContext<LightboxContextType | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [images, setImages] = useState<LightboxImage[]>([])
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)

  const registerImage = useCallback((img: LightboxImage) => {
    setImages(prev => {
      if (prev.some(p => p.id === img.id)) return prev
      return [...prev, img]
    })
  }, [])

  const unregisterImage = useCallback((id: string) => {
    setImages(prev => prev.filter(p => p.id !== id))
  }, [])

  const openLightbox = useCallback((id: string) => {
    const idx = images.findIndex(img => img.id === id)
    if (idx !== -1) {
      setCurrentIndex(idx)
    }
  }, [images])

  const closeLightbox = () => setCurrentIndex(null)
  
  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex !== null && images.length > 0) {
      setCurrentIndex((currentIndex + 1) % images.length)
    }
  }

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (currentIndex !== null && images.length > 0) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }
  }

  // Handle keyboard navigation
  useEffect(() => {
    if (currentIndex === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') setCurrentIndex((currentIndex + 1) % images.length)
      if (e.key === 'ArrowLeft') setCurrentIndex((currentIndex - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentIndex, images.length])

  const currentImg = currentIndex !== null && images[currentIndex] ? images[currentIndex] : null

  return (
    <LightboxContext.Provider value={{ registerImage, unregisterImage, openLightbox }}>
      {children}
      {currentImg && (
        <div 
          className="fixed top-0 left-0 w-screen h-[100dvh] z-[200] flex flex-col items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white hover:text-white/70 bg-black/50 p-2 rounded-full backdrop-blur-md transition-colors z-[210]"
            onClick={(e) => { e.stopPropagation(); closeLightbox() }}
          >
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
          
          {images.length > 1 && (
            <>
              <button 
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white hover:text-white/70 bg-black/50 p-2 sm:p-3 rounded-full backdrop-blur-md transition-colors z-[210]"
                onClick={goPrev}
              >
                <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
              <button 
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white hover:text-white/70 bg-black/50 p-2 sm:p-3 rounded-full backdrop-blur-md transition-colors z-[210]"
                onClick={goNext}
              >
                <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </>
          )}

          <div className="relative w-full h-full max-w-5xl max-h-[75dvh] sm:max-h-[85dvh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <img src={currentImg.src} alt={currentImg.alt} className="w-auto h-auto max-w-full max-h-full object-contain rounded-md shadow-2xl" />
          </div>
          
          {currentImg.caption && (
            <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 mx-auto max-w-3xl px-4 text-center z-[210]" onClick={e => e.stopPropagation()}>
              <p className="text-white/90 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-lg text-sm sm:text-base inline-block border border-white/10 shadow-lg leading-relaxed">
                {currentImg.caption}
              </p>
            </div>
          )}
        </div>
      )}
    </LightboxContext.Provider>
  )
}
