import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { type Consigna, accentClasses } from '@/lib/consignas'

// All cards always use the 'moss' palette for visual consistency
const A = accentClasses['moss']

interface ConsignaCardProps {
  consigna: Consigna
  viewMode?: 'grid' | 'list'
}

export function ConsignaCard({ consigna, viewMode = 'grid' }: ConsignaCardProps) {
  if (viewMode === 'list') {
    return (
      <Link
        href={`/consignas/${consigna.slug}`}
        className={[
          'group relative flex w-full overflow-hidden rounded-3xl border border-border bg-card',
          'shadow-sm ring-1 ring-transparent transition-all duration-300',
          'hover:shadow-2xl hover:shadow-black/40 hover:border-moss/30',
          A.ring,
        ].join(' ')}
      >
        {/* Image — left half */}
        <div className="relative w-[42%] shrink-0 overflow-hidden min-h-[200px]">
          <Image
            src={consigna.image || '/placeholder.svg'}
            alt={`Imagen de la consigna ${consigna.num}: ${consigna.title}`}
            fill
            sizes="(max-width: 768px) 50vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          {/* Num badge */}
          <span
            className={[
              'absolute left-3 top-3 grid size-9 place-items-center rounded-xl font-display text-base shadow-md',
              A.badge,
            ].join(' ')}
          >
            {consigna.num}
          </span>
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/15" />
        </div>

        {/* Content — right half */}
        <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
          <div>
            <span
              className={[
                'mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1',
                'text-[0.62rem] font-semibold tracking-[0.15em] uppercase',
                A.bgSoft, A.text,
              ].join(' ')}
            >
              <span className={`size-1.5 rounded-full ${A.dot}`} />
              {consigna.category}
            </span>

            <h3 className="font-display text-lg leading-tight tracking-wide text-balance">
              {consigna.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {consigna.summary}
            </p>
          </div>

          <span
            className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-moss/50 bg-moss/15 px-4 py-2 text-xs font-bold tracking-wider text-moss transition-all duration-200 group-hover:bg-moss group-hover:text-primary-foreground"
          >
            Ver consigna {consigna.num}
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    )
  }

  // ── GRID VIEW ───────────────────────────────────────────────
  return (
    <Link
      href={`/consignas/${consigna.slug}`}
      className={[
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card',
        'shadow-sm ring-1 ring-transparent transition-all duration-300',
        'hover:-translate-y-1.5 hover:rotate-[0.4deg] hover:shadow-2xl hover:shadow-black/40',
        A.ring,
      ].join(' ')}
    >
      {/* Top gradient accent line */}
      <div
        className={['absolute inset-x-0 top-0 h-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100', A.gradient].join(' ')}
      />

      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden shrink-0">
        <Image
          src={consigna.image || '/placeholder.svg'}
          alt={`Imagen de la consigna ${consigna.num}: ${consigna.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover:bg-background/15" />
        <span
          className={[
            'absolute left-3 top-3 grid size-9 place-items-center rounded-xl font-display text-base shadow-md',
            A.badge,
          ].join(' ')}
        >
          {consigna.num}
        </span>
      </div>

      {/* Body — flex-1 so it stretches and all cards in a row are equal height */}
      <div className="flex flex-1 flex-col p-5">
        <span
          className={[
            'mb-2.5 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1',
            'text-[0.62rem] font-semibold tracking-[0.15em] uppercase',
            A.bgSoft, A.text,
          ].join(' ')}
        >
          <span className={`size-1.5 rounded-full ${A.dot}`} />
          {consigna.category}
        </span>

        <h3 className="font-display text-[1.1rem] leading-tight tracking-wide text-balance">
          {consigna.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {consigna.summary}
        </p>

        <span
          className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-moss/50 bg-moss/15 px-4 py-2 text-xs font-bold tracking-wider text-moss transition-all duration-200 group-hover:bg-moss group-hover:text-primary-foreground"
        >
          Ver consigna {consigna.num}
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  )
}
