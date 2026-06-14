import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { consignas, getConsigna } from '@/lib/consignas'
import { ConsignaShell } from '@/components/consigna-shell'
import { contentRegistry } from '@/components/consigna-content'

export function generateStaticParams() {
  return consignas.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const c = getConsigna(slug)
  if (!c) return {}
  return {
    title: `${c.num}. ${c.title} · MOKKA Dossier`,
    description: c.summary,
  }
}

export default async function ConsignaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const consigna = getConsigna(slug)
  const Content = contentRegistry[slug]

  if (!consigna || !Content) notFound()

  return (
    <ConsignaShell consigna={consigna}>
      <Content />
    </ConsignaShell>
  )
}
