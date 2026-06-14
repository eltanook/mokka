import {
  Section,
  Lead,
  P,
  H3,
  List,
  Callout,
  Figure,
  StatGrid,
  DataTable,
  SplitCards,
} from '@/components/content'

/* ============== 1 · CONCEPTO ============== */
export function ConceptoContent() {
  return (
    <>
      <Section eyebrow="Punto 1 de la consigna" title="Enfoque y concepto detrás del producto">
        <Lead>
          MOKKA nace de un cruce entre dos universos que el consumidor rara vez encuentra juntos
          en la góndola refrigerada: la indulgencia de un postre de chocolate tipo mousse y el
          ritual cotidiano del café. El concepto es ofrecer un postre lácteo listo para consumir,
          de textura cremosa y firme a la vez, que combine sabor café-cacao en un formato
          individual de 90&nbsp;g pensado para el momento de placer de media tarde.
        </Lead>
        <P>
          El producto se posiciona como un &ldquo;mocha gelificado&rdquo;: un híbrido entre el
          flan, la mousse y el café con leche, estabilizado en frío mediante carragenina kappa.
          La elección de gelificar en frío —sin necesidad de horneado ni de huevo como agente
          estructurante— responde a un concepto productivo simple, escalable y de bajo costo
          energético, coherente con un desarrollo de R&amp;D realizable a escala de laboratorio.
        </P>
        <StatGrid
          stats={[
            { value: '90 g', label: 'Porción individual lista para consumir' },
            { value: 'Café + Cacao', label: 'Eje sensorial del producto' },
            { value: 'Frío', label: 'Gelificación sin horneado' },
            { value: 'Cremoso', label: 'Textura objetivo tipo mousse-flan' },
          ]}
        />
      </Section>

      <Section title="Los tres pilares del concepto">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: 'Indulgencia accesible',
              d: 'Un placer cotidiano de porción controlada (90 g), que satisface el antojo dulce sin la culpa de un postre de gran formato.',
            },
            {
              t: 'Ritual del café',
              d: 'El café no es solo aromatizante: es el insight emocional. MOKKA traslada el momento del cafecito a un formato comestible.',
            },
            {
              t: 'Conveniencia',
              d: 'Listo para consumir, refrigerado, sin preparación. Apto para consumo en casa, oficina o pausa de estudio.',
            },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-5">
              <H3>{b.t}</H3>
              <P>{b.d}</P>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Insight y propuesta de valor">
        <P>
          El insight detrás del desarrollo es que el consumidor argentino tiene una relación
          afectiva intensa con el café y, simultáneamente, busca momentos de indulgencia
          controlada. Hoy esa necesidad se resuelve con productos separados (un café por un lado,
          un postre por el otro). MOKKA unifica ambos en una sola experiencia.
        </P>
        <Callout title="Propuesta de valor en una frase" variant="info">
          MOKKA es el postre que sabe a tu café favorito: cremoso, indulgente y listo para
          disfrutar en cualquier pausa del día.
        </Callout>
        <Figure
          src="/images/q01-concepto.png"
          alt="Concepto visual de MOKKA: vasito de postre de café y chocolate con cuchara"
          caption="Figura 1.1 — Moodboard del concepto: cruce entre el ritual del café y el postre indulgente de chocolate."
        />
      </Section>
    </>
  )
}

/* ============== 2 · TARGET MARKET ============== */
export function TargetContent() {
  return (
    <>
      <Section eyebrow="Punto 2 de la consigna" title="Target Market y estudio de mercado">
        <Lead>
          MOKKA apunta al segmento de jóvenes adultos urbanos (20–40 años) de NSE medio y
          medio-alto, consumidores habituales de café y de postres refrigerados de impulso, que
          valoran tanto la indulgencia como la practicidad. El estudio de mercado justifica el
          posicionamiento en la intersección de dos categorías en crecimiento: postres lácteos
          premium y productos derivados del café listos para consumir.
        </Lead>
        <StatGrid
          stats={[
            { value: '20–40', label: 'Rango etario objetivo (años)' },
            { value: 'Medio / Alto', label: 'Nivel socioeconómico' },
            { value: 'Urbano', label: 'Perfil de hábitat' },
            { value: 'RTE', label: 'Ready-to-eat refrigerado' },
          ]}
        />
      </Section>

      <Section title="Segmentación del consumidor">
        <DataTable
          head={['Criterio', 'Definición del target']}
          rows={[
            ['Demográfico', 'Mujeres y hombres de 20 a 40 años, principalmente trabajadores y estudiantes.'],
            ['Geográfico', 'Grandes centros urbanos y conurbano (CABA y GBA como mercado de lanzamiento).'],
            ['Socioeconómico', 'NSE C2, C3 y ABC1; con capacidad de gasto en indulgencias cotidianas.'],
            ['Psicográfico', 'Cafeteros, buscadores de placer accesible, valoran practicidad y experiencia sensorial.'],
            ['Conductual', 'Compra de impulso en kioscos, supermercados y tiendas de cercanía; consumo de media tarde.'],
          ]}
          caption="Tabla 2.1 — Matriz de segmentación del consumidor objetivo de MOKKA."
        />
      </Section>

      <Section title="Buyer persona">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <H3>&ldquo;Sofía, 28&rdquo;</H3>
            <P>
              Profesional, vive sola, toma 2–3 cafés por día. Busca darse un gusto sin
              &ldquo;arruinar la dieta&rdquo;. Compra postres individuales en el súper para tener
              en la heladera. Le importa la marca, el packaging y la experiencia.
            </P>
          </div>
          <div className="rounded-2xl border border-border bg-card p-5">
            <H3>&ldquo;Mateo, 22&rdquo;</H3>
            <P>
              Estudiante universitario. Consume café para estudiar y postres como recompensa.
              Sensible al precio pero dispuesto a pagar por un producto novedoso que combine sus
              dos gustos. Descubre productos por redes sociales.
            </P>
          </div>
        </div>
      </Section>

      <Section title="Tendencias de mercado que justifican el lanzamiento">
        <List
          items={[
            'Crecimiento sostenido de la categoría de café (cold brew, RTD coffee) entre jóvenes adultos.',
            'Auge de la indulgencia de porción controlada (single-serve) como forma de placer sin exceso.',
            'Expansión de los postres lácteos refrigerados premium con propuestas de sabor diferenciadas.',
            'Demanda de conveniencia: productos listos para consumir que se adaptan a la vida urbana acelerada.',
          ]}
        />
        <Callout title="Justificación del posicionamiento" variant="success">
          Al ubicarse en la intersección de dos tendencias robustas —café y postres indulgentes
          individuales— MOKKA reduce el riesgo de mercado: no crea una categoría desde cero, sino
          que combina dos hábitos de consumo ya consolidados.
        </Callout>
        <Figure
          src="/images/q02-target.png"
          alt="Estudio de mercado y consumidor objetivo de MOKKA"
          caption="Figura 2.1 — Mapa de posicionamiento: indulgencia vs. funcionalidad/practicidad."
        />
      </Section>
    </>
  )
}

/* ============== 3 · FORMULACIONES ============== */
export function FormulacionesContent() {
  return (
    <>
      <Section eyebrow="Punto 3 de la consigna" title="Formulaciones: inicial vs. final">
        <Lead>
          A continuación se presentan las dos formulaciones expresadas en porcentaje
          peso/peso (% p/p). La fórmula inicial fue el primer prototipo de prueba; la fórmula
          final es el resultado de las reformulaciones documentadas en la Consigna 5, donde se
          ajustó la dosis de gelificante, la carga de cacao y café, y el balance de dulzor.
        </Lead>
      </Section>

      <Section title="Tabla comparativa de formulaciones (% p/p)">
        <DataTable
          head={['Materia prima', 'Fórmula inicial', 'Fórmula final', 'Cambio']}
          rows={[
            ['Leche descremada', '34,0 %', '31,1 %', '↓'],
            ['Crema de leche', '28,0 %', '31,1 %', '↑'],
            ['Leche condensada', '28,0 %', '31,1 %', '↑'],
            ['Cacao en polvo', '3,0 %', '3,5 %', '↑'],
            ['Café (soluble/infusión)', '0,3 %', '0,4 %', '↑'],
            ['Azúcar', '2,6 %', '2,7 %', '≈'],
            ['Carragenina kappa', '0,10 %', '0,12 %', '↑'],
            ['Total', '100 %', '100 %', '—'],
          ]}
          caption="Tabla 3.1 — Formulación inicial vs. final expresada en % peso/peso. La fórmula final corresponde a la receta de 482,6 g de la Consigna 7."
        />
        <Callout title="Lectura de la tabla" variant="info">
          La fórmula final aumentó la proporción de crema y leche condensada para lograr mayor
          cremosidad y cuerpo, subió levemente cacao y café para intensificar el perfil
          sensorial, y ajustó la carragenina kappa al alza para corregir una textura inicial
          demasiado blanda.
        </Callout>
      </Section>

      <Section title="Justificación de los cambios principales">
        <List
          ordered
          items={[
            'Carragenina kappa 0,10 % → 0,12 %: el primer gel resultó débil y sinéresis visible; el incremento dio una textura firme pero cremosa, sin exceso de rigidez.',
            'Más crema y leche condensada: mejoraron la sensación grasa en boca (mouthfeel) y aportaron dulzor natural, reduciendo la necesidad de azúcar agregado.',
            'Cacao 3,0 % → 3,5 %: el prototipo inicial tenía sabor a café dominante; subir el cacao equilibró el perfil mocha buscado.',
            'Café 0,3 % → 0,4 %: ajuste fino para que el café fuera perceptible sin amargor excesivo.',
          ]}
        />
        <Figure
          src="/images/q03-formulaciones.png"
          alt="Comparación visual de las formulaciones inicial y final de MOKKA"
          caption="Figura 3.1 — Comparativa de prototipos: a la izquierda el gel inicial (más claro y blando), a la derecha la fórmula final (más oscura y firme)."
        />
      </Section>
    </>
  )
}

/* ============== 4 · MATERIAS PRIMAS ============== */
export function MateriasPrimasContent() {
  return (
    <>
      <Section eyebrow="Punto 4 de la consigna" title="Materias primas: función y justificación">
        <Lead>
          Se describe cada materia prima a nivel químico y funcional, con foco especial en las
          dos materias primas asignadas por sorteo —carragenina kappa y café—, su impacto sobre
          el producto y la comparativa contra una fórmula que prescinde de ellas.
        </Lead>
      </Section>

      <Section eyebrow="MP del sorteo" title="Carragenina kappa (gelificante)">
        <P>
          La carragenina kappa es un polisacárido sulfatado extraído de algas rojas
          (<em>Rhodophyceae</em>). Químicamente es un galactano lineal de unidades de
          D-galactosa y 3,6-anhidro-galactosa con un grupo sulfato por disacárido. En presencia
          de iones potasio (K⁺) y al enfriarse, sus cadenas adoptan una conformación de doble
          hélice que se agrega formando una red tridimensional: así gelifica el sistema en frío.
        </P>
        <H3>Función en MOKKA</H3>
        <List
          items={[
            'Gelifica el postre dando estructura firme y cohesiva sin necesidad de huevo ni horneado.',
            'Interactúa sinérgicamente con las proteínas y el calcio de la leche, reforzando el gel (gel lácteo).',
            'Controla la sinéresis (separación de suero) cuando se dosifica correctamente.',
            'Permite una textura termorreversible y de corte limpio, característica del kappa.',
          ]}
        />
        <Callout title="Comparativa: con vs. sin carragenina kappa" variant="warning">
          Sin carragenina, el sistema queda líquido o apenas espesado (tipo bebida o salsa), sin
          el cuerpo de postre buscado. Una alternativa sería gelatina o almidón, pero la gelatina
          no es apta vegetariana/halal/kosher de forma directa y el almidón da textura pastosa y
          opaca. El kappa logra un gel transparente, firme y de bajo dosaje (0,12 %).
        </Callout>
      </Section>

      <Section eyebrow="MP del sorteo" title="Café (saborizante funcional)">
        <P>
          El café aporta los compuestos responsables del aroma y sabor característicos
          (más de 800 volátiles, melanoidinas de la torrefacción) y cafeína como alcaloide
          funcional. Aunque su aporte nutricional es prácticamente nulo en la dosis usada
          (~0,4 %), es el ingrediente diferenciador del concepto.
        </P>
        <List
          items={[
            'Define el perfil sensorial mocha junto con el cacao.',
            'Aporta cafeína, lo que obliga a evaluar la leyenda precautoria de rotulado (ver Consigna 12).',
            'Sus compuestos amargos deben equilibrarse con el dulzor de la leche condensada y el azúcar.',
          ]}
        />
        <Callout title="Comparativa: con vs. sin café" variant="warning">
          Sin café, el producto sería un postre de chocolate convencional, sin diferenciación de
          mercado. El café es lo que convierte a MOKKA en un &ldquo;mocha gelificado&rdquo; y
          sostiene su propuesta de valor. Su contrapartida es la obligación regulatoria de
          declarar cafeína.
        </Callout>
      </Section>

      <Section title="Materias primas de base (matriz láctea y sabor)">
        <DataTable
          head={['Materia prima', 'Naturaleza química', 'Función tecnológica']}
          rows={[
            ['Leche descremada', 'Agua, lactosa, proteínas (caseína/suero), minerales (Ca).', 'Base acuosa; el calcio y la caseína refuerzan el gel de carragenina.'],
            ['Crema de leche', 'Emulsión de grasa láctea (~35 % materia grasa).', 'Cremosidad, cuerpo y vehículo de aromas; mouthfeel graso.'],
            ['Leche condensada', 'Leche concentrada con azúcar (sacarosa).', 'Dulzor, sólidos lácteos y viscosidad; reduce azúcar agregado.'],
            ['Cacao en polvo', 'Sólidos de cacao, fibra, polifenoles, almidón.', 'Sabor y color chocolate; aporta fibra y antioxidantes.'],
            ['Azúcar (sacarosa)', 'Disacárido glucosa-fructosa.', 'Ajuste fino de dulzor y balance del amargor del café/cacao.'],
          ]}
          caption="Tabla 4.1 — Materias primas de base, su química y su función tecnológica en el sistema."
        />
        <Figure
          src="/images/q04-materias-primas.png"
          alt="Materias primas de MOKKA dispuestas sobre mesada de laboratorio"
          caption="Figura 4.1 — Materias primas del desarrollo: matriz láctea, cacao, café y carragenina kappa (MP del sorteo)."
        />
      </Section>
    </>
  )
}

/* ============== 5 · DESARROLLO ============== */
export function DesarrolloContent() {
  return (
    <>
      <Section eyebrow="Punto 5 de la consigna" title="Desarrollo del producto y actividades realizadas">
        <Lead>
          El desarrollo siguió el calendario de R&amp;D de la materia: del sorteo de materias
          primas a la definición del producto, los primeros prototipos, el prototipo final y las
          pruebas de validación. A continuación se documenta la bitácora completa, incluyendo los
          ensayos fallidos, que son parte esencial del proceso.
        </Lead>
      </Section>

      <Section title="Línea de tiempo del proyecto">
        <DataTable
          head={['Fecha', 'Etapa', 'Actividad realizada']}
          rows={[
            ['13/3', 'Sorteo', 'Asignación de MP: carragenina kappa + café.'],
            ['20/3', 'Investigación', 'Funcionalidad de las MP. Brainstorming de ideas.'],
            ['27/3', 'Ideación', 'Listado de conceptos: bebida, gomita, postre, gel energético.'],
            ['10/4', 'Definición', 'Se elige el postre mocha gelificado (MOKKA).'],
            ['24/4', 'Prototipo 1', 'Primer gel: textura blanda y sabor café dominante.'],
            ['22/5', 'Prototipo final', 'Fórmula ajustada: firme, cremosa, perfil mocha balanceado.'],
            ['Junio', 'Validación', 'Pruebas microbiológicas y evaluación sensorial.'],
            ['Junio', 'Cierre', 'Ajustes finales y redacción del informe.'],
          ]}
          caption="Tabla 5.1 — Cronograma de desarrollo según el calendario sugerido del TPO."
        />
      </Section>

      <Section title="Bitácora de prototipos y reformulaciones">
        <div className="space-y-4">
          {[
            {
              n: 'P1',
              t: 'Prototipo 1 — Gel base (24/4)',
              d: 'Carragenina al 0,10 %. Resultado: gel demasiado blando, con sinéresis (suero separado) y sabor a café dominante sobre el cacao. Decisión: subir gelificante y rebalancear sabor.',
              v: 'warning' as const,
            },
            {
              n: 'P2',
              t: 'Prototipo 2 — Ajuste de textura',
              d: 'Carragenina a 0,12 % y más crema. Mejoró firmeza y cremosidad, desapareció la sinéresis. Persistía leve exceso de amargor.',
              v: 'info' as const,
            },
            {
              n: 'P3',
              t: 'Prototipo final — Balance mocha (22/5)',
              d: 'Se subió cacao a 3,5 % y se ajustó azúcar/leche condensada. Perfil mocha equilibrado, textura firme-cremosa de corte limpio. Aprobado para validación.',
              v: 'success' as const,
            },
          ].map((p) => (
            <Callout key={p.n} title={p.t} variant={p.v}>
              {p.d}
            </Callout>
          ))}
        </div>
      </Section>

      <Section title="Registro fotográfico de ensayos">
        <div className="grid gap-4 sm:grid-cols-2">
          <Figure
            src="/images/q05-desarrollo.png"
            alt="Prototipo inicial de MOKKA con sinéresis visible"
            ratio="aspect-[4/3]"
            caption="Figura 5.1 — Prototipo 1: gel blando con sinéresis."
          />
          <Figure
            src="/images/q05-ensayo-2.png"
            alt="Prototipo final de MOKKA con textura firme"
            ratio="aspect-[4/3]"
            caption="Figura 5.2 — Prototipo final: textura firme y cremosa, corte limpio."
          />
        </div>
        <Callout title="Lección del proceso" variant="info">
          Documentar los ensayos fallidos permitió aislar la variable crítica (dosis de
          carragenina) y entender la interacción gelificante–calcio lácteo, evitando sobredosar
          el sistema en iteraciones posteriores.
        </Callout>
      </Section>
    </>
  )
}

/* ============== 6 · VENTAJAS / DESVENTAJAS ============== */
export function VentajasContent() {
  return (
    <>
      <Section eyebrow="Punto 6 de la consigna" title="Ventajas y desventajas del uso de las MP">
        <Lead>
          Se contemplan las ventajas y desventajas de las materias primas en tres planos:
          nutricional, funcional y de proceso. El análisis se concentra en las MP del sorteo y en
          las decisiones de la matriz láctea.
        </Lead>
      </Section>

      <Section title="Carragenina kappa">
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Gelifica en frío a muy baja dosis (0,12 %), reduciendo costo y aporte calórico.',
              'Sinergia con el calcio y proteínas lácteas: gel firme y estable.',
              'Origen vegetal (algas): apto para perfiles vegetarianos.',
              'Gel termorreversible de corte limpio y buena apariencia.',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Sensible a la dosis: en exceso genera textura gomosa o quebradiza.',
              'Requiere control de iones (K⁺/Ca²⁺) para gelificar de forma reproducible.',
              'Sinéresis si la formulación o el enfriado no son adecuados.',
              'Debate regulatorio internacional sobre carragenina de bajo peso molecular.',
            ],
          }}
        />
      </Section>

      <Section title="Café">
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Diferenciación sensorial: es el corazón del concepto MOKKA.',
              'Aporta antioxidantes y un alcaloide funcional (cafeína).',
              'Bajísima dosis de uso: impacto de sabor alto a costo bajo.',
              'Sinergia de sabor con el cacao (perfil mocha).',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Obliga a declarar leyenda precautoria por cafeína (rotulado).',
              'Amargor que debe equilibrarse con dulzor adicional.',
              'No apto para niños/as por la cafeína (limita el target).',
              'Variabilidad de aroma según origen y torrefacción del café.',
            ],
          }}
        />
      </Section>

      <Section title="Matriz láctea (crema, leche condensada, leche)">
        <DataTable
          head={['Plano', 'Ventaja', 'Desventaja']}
          rows={[
            ['Nutricional', 'Aporta calcio, proteína y vitaminas (A, D, B).', 'Eleva grasas saturadas y azúcares (sellos de advertencia).'],
            ['Funcional', 'Cremosidad, cuerpo y dulzor natural; refuerza el gel.', 'La grasa puede enmascarar el aroma del café si es excesiva.'],
            ['Proceso', 'Ingredientes accesibles y de manejo simple en frío.', 'Producto perecedero: exige cadena de frío estricta.'],
          ]}
          caption="Tabla 6.1 — Balance de la matriz láctea en los tres planos de análisis."
        />
        <Figure
          src="/images/q06-ventajas.png"
          alt="Balanza conceptual de ventajas y desventajas de las materias primas"
          caption="Figura 6.1 — Síntesis del balance ventajas/desventajas de las materias primas clave."
        />
      </Section>
    </>
  )
}
