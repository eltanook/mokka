export type AccentKey = 'sage' | 'cream' | 'terracotta' | 'moss'

export type Consigna = {
  num: number
  slug: string
  /** Short label for the navbar / tabs */
  label: string
  /** Full title shown on the card and page header */
  title: string
  /** One-line summary for the card */
  summary: string
  /** Eyebrow category */
  category: string
  accent: AccentKey
  image: string
}

export const PRODUCT = {
  name: 'MOKKA',
  tagline: 'Postre funcional de chocolate y café',
  format: 'Vasito listo para consumir · 90 g',
}

export const consignas: Consigna[] = [
  {
    num: 1,
    slug: 'concepto',
    label: 'Concepto',
    title: 'Enfoque y concepto del producto',
    summary:
      'La idea detrás de MOKKA: un postre lácteo de chocolate y café, indulgente pero funcional, gelificado en frío con carragenina kappa.',
    category: 'Estrategia de producto',
    accent: 'sage',
    image: '/images/q01-concepto.png',
  },
  {
    num: 2,
    slug: 'target-market',
    label: 'Target Market',
    title: 'Target Market y estudio de mercado',
    summary:
      'Definición del consumidor objetivo, tamaño de mercado, tendencias de indulgencia funcional y justificación del posicionamiento.',
    category: 'Marketing & Research',
    accent: 'cream',
    image: '/images/q02-target.png',
  },
  {
    num: 3,
    slug: 'formulaciones',
    label: 'Formulaciones',
    title: 'Formulaciones: inicial vs. final',
    summary:
      'Comparativa porcentual entre el primer prototipo y la fórmula final, con el detalle de cada ajuste realizado.',
    category: 'Formulación',
    accent: 'terracotta',
    image: '/images/q03-formulaciones.png',
  },
  {
    num: 4,
    slug: 'materias-primas',
    label: 'Materias Primas',
    title: 'Materias primas: función y justificación',
    summary:
      'Descripción química y funcional de cada ingrediente, con foco en las MP del sorteo —carragenina kappa y café— y su impacto.',
    category: 'Ciencia de ingredientes',
    accent: 'moss',
    image: '/images/q04-materias-primas.png',
  },
  {
    num: 5,
    slug: 'desarrollo',
    label: 'Desarrollo',
    title: 'Desarrollo del producto y ensayos',
    summary:
      'Bitácora del proceso: prototipos, reformulaciones, decisiones y registro fotográfico de cada testeo realizado.',
    category: 'R&D · Bitácora',
    accent: 'sage',
    image: '/images/q05-desarrollo.png',
  },
  {
    num: 6,
    slug: 'ventajas-desventajas',
    label: 'Ventajas / Desventajas',
    title: 'Ventajas y desventajas de las MP',
    summary:
      'Balance de cada materia prima en los planos nutricional, funcional y de proceso, con sus trade-offs.',
    category: 'Análisis crítico',
    accent: 'cream',
    image: '/images/q06-ventajas.png',
  },
  {
    num: 7,
    slug: 'tabla-nutricional',
    label: 'Tabla Nutricional',
    title: 'Tabla nutricional y sellos',
    summary:
      'Cálculo nutricional por porción de 90 g, sellos de advertencia según la Ley 27.642 y justificación de claims.',
    category: 'Etiquetado',
    accent: 'terracotta',
    image: '/images/q07-nutricional.png',
  },
  {
    num: 8,
    slug: 'vida-util',
    label: 'Vida Útil',
    title: 'Evaluación teórica de la vida útil',
    summary:
      'Estimación de shelf-life del postre refrigerado, factores de deterioro y modelo teórico de vencimiento.',
    category: 'Estabilidad',
    accent: 'moss',
    image: '/images/q08-vida-util.png',
  },
  {
    num: 9,
    slug: 'analisis',
    label: 'Análisis',
    title: 'Análisis fisicoquímicos y microbiológicos',
    summary:
      'Parámetros fisicoquímicos a controlar y plan microbiológico propuesto, incluyendo el armado de medios de cultivo.',
    category: 'Control de calidad',
    accent: 'sage',
    image: '/images/q09-analisis.png',
  },
  {
    num: 10,
    slug: 'sensorial',
    label: 'Sensorial',
    title: 'Evaluación sensorial del producto',
    summary:
      'Diseño del panel, pruebas afectivas y discriminativas, perfil sensorial y resultados sobre el prototipo final.',
    category: 'Análisis sensorial',
    accent: 'cream',
    image: '/images/q10-sensorial.png',
  },
  {
    num: 11,
    slug: 'costos',
    label: 'Costos',
    title: 'Estructura de costos y precio de venta',
    summary:
      'Costeo de materias primas por porción, costos indirectos, margen objetivo y precio sugerido de góndola.',
    category: 'Costeo',
    accent: 'terracotta',
    image: '/images/q11-costos.png',
  },
  {
    num: 12,
    slug: 'marco-regulatorio',
    label: 'Regulatorio',
    title: 'Marco regulatorio',
    summary:
      'Encuadre en el Código Alimentario Argentino, rotulado, aditivos permitidos y la Ley de Etiquetado Frontal.',
    category: 'Asuntos regulatorios',
    accent: 'moss',
    image: '/images/q12-regulatorio.png',
  },
]

export const accentClasses: Record<
  AccentKey,
  {
    badge: string
    text: string
    bgSoft: string
    border: string
    dot: string
    ring: string
    gradient: string
  }
> = {
  sage: {
    badge: 'bg-sage text-sage-foreground',
    text: 'text-sage',
    bgSoft: 'bg-sage/10',
    border: 'border-sage/30',
    dot: 'bg-sage',
    ring: 'group-hover:ring-sage/40',
    gradient: 'bg-gradient-to-r from-sage to-moss',
  },
  cream: {
    badge: 'bg-cream text-cream-foreground',
    text: 'text-cream',
    bgSoft: 'bg-cream/10',
    border: 'border-cream/30',
    dot: 'bg-cream',
    ring: 'group-hover:ring-cream/40',
    gradient: 'bg-gradient-to-r from-cream to-accent',
  },
  terracotta: {
    badge: 'bg-terracotta text-terracotta-foreground',
    text: 'text-terracotta',
    bgSoft: 'bg-terracotta/10',
    border: 'border-terracotta/30',
    dot: 'bg-terracotta',
    ring: 'group-hover:ring-terracotta/40',
    gradient: 'bg-gradient-to-r from-terracotta to-cream',
  },
  moss: {
    badge: 'bg-moss text-moss-foreground',
    text: 'text-moss',
    bgSoft: 'bg-moss/10',
    border: 'border-moss/30',
    dot: 'bg-moss',
    ring: 'group-hover:ring-moss/40',
    gradient: 'bg-gradient-to-r from-moss to-sage',
  },
}

export function getConsigna(slug: string) {
  return consignas.find((c) => c.slug === slug)
}

export function getAdjacent(slug: string) {
  const i = consignas.findIndex((c) => c.slug === slug)
  return {
    prev: i > 0 ? consignas[i - 1] : null,
    next: i < consignas.length - 1 ? consignas[i + 1] : null,
  }
}
