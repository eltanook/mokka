'use client'

import * as React from 'react'
import { Suspense } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { FileText, ArrowLeft } from 'lucide-react'

interface AnexoDrawerProps {
  title?: string
  children: React.ReactNode
}

function AnexoViewContent({ title = 'Ver Anexo', children }: AnexoDrawerProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const isAnexoOpen = searchParams.get('anexo') === 'true'

  if (isAnexoOpen) {
    return (
      <div className="fixed inset-0 z-[100] bg-background overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 py-12 sm:px-8 sm:py-16">
          <button 
            className="group flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-12"
            onClick={() => router.push(pathname)}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Volver al ejercicio
          </button>
          
          <h2 className="font-display text-3xl font-semibold mb-8 text-foreground tracking-wide">
            Anexo Técnico
          </h2>
          
          <div className="prose prose-slate dark:prose-invert max-w-none prose-img:rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Button 
      variant="outline" 
      className="mt-8 w-full sm:w-auto" 
      size="lg"
      onClick={() => router.push(`${pathname}?anexo=true`)}
    >
      <FileText className="mr-2 h-5 w-5" />
      {title}
    </Button>
  )
}

export function AnexoDrawer(props: AnexoDrawerProps) {
  return (
    <Suspense fallback={<Button variant="outline" className="mt-8 w-full sm:w-auto" size="lg"><FileText className="mr-2 h-5 w-5" />{props.title || 'Ver Anexo'}</Button>}>
      <AnexoViewContent {...props} />
    </Suspense>
  )
}
