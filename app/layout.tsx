import type { Metadata, Viewport } from 'next'
import { Anton, Inter, Geist_Mono } from 'next/font/google'
import { SiteNavbar } from '@/components/site-navbar'
import { SiteFooter } from '@/components/site-footer'
import { CustomCursor } from '@/components/custom-cursor'
import { SplashScreen } from '@/components/splash-screen'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const anton = Anton({
  variable: '--font-display',
  weight: '400',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'MOKKA · Dossier R&D — TPO Bromatología 2026',
  description:
    'Dossier digital del desarrollo de MOKKA, un postre funcional de chocolate y café gelificado con carragenina kappa. Trabajo Práctico Obligatorio — Research & Development de alimentos.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#3a1c0e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${anton.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <SplashScreen />
          <CustomCursor />
          <div className="flex min-h-screen flex-col">
            <SiteNavbar />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
