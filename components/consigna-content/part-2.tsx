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

/* ============== 7 · TABLA NUTRICIONAL ============== */
export function NutricionalContent() {
  return (
    <>
      <Section eyebrow="Punto 7 de la consigna" title="Tabla nutricional y sellos">
        <Lead>
          La información nutricional se calculó a partir de la receta total (482,6 g) y se
          expresó por porción de 90 g. La preparación rinde aproximadamente 5,36 porciones. El
          método de cálculo aplicado fue: nutriente aportado = cantidad usada × valor del
          nutriente / cantidad de referencia, y el pasaje a porción mediante el factor
          90 / 482,6 = 0,186.
        </Lead>
        <StatGrid
          stats={[
            { value: '482,6 g', label: 'Peso total de la receta' },
            { value: '90 g', label: 'Porción declarada' },
            { value: '≈ 5,36', label: 'Porciones por preparación' },
            { value: '0,186', label: 'Factor de conversión a porción' },
          ]}
        />
      </Section>

      <Section title="Ingredientes y cantidades de la receta">
        <DataTable
          head={['Ingrediente', 'Cantidad']}
          rows={[
            ['Leche descremada', '150 ml'],
            ['Crema de leche', '150 ml'],
            ['Leche condensada', '150 g'],
            ['Cacao en polvo', '17 g'],
            ['Café', '2 g'],
            ['Azúcar', '13 g'],
            ['Carragenina kappa', '0,6 g'],
            ['Total', '482,6 g'],
          ]}
          caption="Tabla 7.1 — Receta base utilizada para el cálculo nutricional."
        />
      </Section>

      <Section title="Información nutricional por porción (90 g)">
        <DataTable
          head={['Nutriente', 'Por porción (90 g)', '% VD (*)']}
          rows={[
            ['Valor energético', '198 kcal / 829 kJ', '10 %'],
            ['Carbohidratos', '20 g', '7 %'],
            ['  · Azúcares totales', '18 g', '—'],
            ['  · Azúcares añadidos', '11 g', '22 %'],
            ['Proteínas', '4,5 g', '6 %'],
            ['Grasas totales', '9 g', '13 %'],
            ['  · Grasas saturadas', '5,4 g', '25 %'],
            ['  · Grasas trans', '0 g', '—'],
            ['Fibra alimentaria', '0,9 g', '4 %'],
            ['Sodio', '70 mg', '3 %'],
          ]}
          caption="Tabla 7.2 — Información nutricional estimada por porción de 90 g. (*) % Valores Diarios sobre dieta de 2000 kcal. Valores aproximados a partir del cálculo de la receta."
        />
        <Callout title="Sobre el cálculo" variant="info">
          Ejemplo de cálculo para la leche descremada: si 100 ml aportan 36 kcal, entonces
          150 ml aportan 150 × 36 / 100 = 54 kcal. La suma de todos los aportes dio ≈ 1064 kcal
          para la receta total; al pasar a porción: 1064 × 90 / 482,6 ≈ 198 kcal.
        </Callout>
      </Section>

      <Section title="Sellos de advertencia (Ley 27.642)">
        <P>
          Los límites aplicados son: 10 % o más de las calorías provenientes de azúcares
          añadidos, 30 % o más de grasas totales, 10 % o más de grasas saturadas, y sodio
          ≥ 1 mg/kcal o ≥ 300 mg/100 g. Según el perfil nutricional del producto, corresponden
          los siguientes sellos:
        </P>
        <div className="flex flex-wrap gap-3">
          {['Exceso en Azúcares', 'Exceso en Grasas Totales', 'Exceso en Grasas Saturadas'].map(
            (s) => (
              <span
                key={s}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-foreground bg-foreground px-4 py-2 text-sm font-bold tracking-wide text-background uppercase"
              >
                {s}
              </span>
            ),
          )}
        </div>
        <Callout title="Leyenda precautoria por cafeína" variant="warning">
          Como la receta contiene 2 g de café, debe evaluarse el aporte de cafeína. De
          corresponder, el rótulo llevará la leyenda: &ldquo;CONTIENE CAFEÍNA. EVITAR EN
          NIÑOS/AS.&rdquo; Los productos con cafeína o edulcorantes deben declarar leyenda
          precautoria.
        </Callout>
      </Section>

      <Section title="Justificación de claims">
        <DataTable
          head={['Claim potencial', '¿Corresponde?', 'Justificación']}
          rows={[
            ['&ldquo;Fuente de calcio&rdquo;', 'A verificar', 'Depende de alcanzar el 15 % VD de Ca por porción; la matriz láctea lo favorece.'],
            ['&ldquo;Bajo en sodio&rdquo;', 'No declarable como destacado', 'Aunque el sodio es bajo, el producto lleva sellos; no se promueve como saludable.'],
            ['&ldquo;Sin azúcar&rdquo;', 'No', 'El producto contiene azúcares añadidos (sello de exceso en azúcares).'],
            ['&ldquo;Fuente de energía&rdquo;', 'No recomendable', 'Un producto con sellos de advertencia no debe destacar claims positivos asociados.'],
          ]}
          caption="Tabla 7.3 — Evaluación de claims: con sellos de advertencia, la normativa restringe destacar declaraciones nutricionales positivas."
        />
        <Figure
          src="/images/q07-nutricional.png"
          alt="Rótulo nutricional frontal de MOKKA con sellos de advertencia"
          caption="Figura 7.1 — Propuesta de rotulado frontal con los tres sellos de advertencia y la leyenda precautoria por cafeína."
        />
      </Section>
    </>
  )
}

/* ============== 8 · VIDA ÚTIL ============== */
export function VidaUtilContent() {
  return (
    <>
      <Section eyebrow="Punto 8 de la consigna" title="Evaluación teórica de la vida útil">
        <Lead>
          Por tratarse de un postre lácteo de alta actividad de agua (a<sub>w</sub> ≈ 0,97) y pH
          cercano a la neutralidad, MOKKA es un alimento perecedero que requiere cadena de frío.
          Se estima teóricamente una vida útil de 21 a 30 días en refrigeración (0–5 °C),
          limitada principalmente por el deterioro microbiológico.
        </Lead>
        <StatGrid
          stats={[
            { value: '0–5 °C', label: 'Temperatura de conservación' },
            { value: '21–30 d', label: 'Vida útil estimada' },
            { value: 'a_w ≈ 0,97', label: 'Actividad de agua' },
            { value: 'pH ≈ 6,5', label: 'pH del producto' },
          ]}
        />
      </Section>

      <Section title="Factores de deterioro">
        <DataTable
          head={['Tipo', 'Mecanismo', 'Control en MOKKA']}
          rows={[
            ['Microbiológico', 'Crecimiento de bacterias lácticas, psicrótrofos, mohos y levaduras.', 'Cadena de frío + buenas prácticas + posible tratamiento térmico de la base.'],
            ['Físico', 'Sinéresis (liberación de suero) del gel de carragenina.', 'Dosis ajustada de kappa (0,12 %) y enfriamiento controlado.'],
            ['Químico', 'Oxidación lipídica de la grasa láctea (rancidez).', 'Envase con barrera a la luz y al oxígeno; refrigeración.'],
            ['Sensorial', 'Pérdida de aroma de café y notas de cacao.', 'Envase hermético; consumo dentro del período declarado.'],
          ]}
          caption="Tabla 8.1 — Principales factores de deterioro y estrategias de control."
        />
      </Section>

      <Section title="Modelo teórico de estimación">
        <P>
          Para una estimación más precisa se propone un estudio de vida útil acelerado y un
          seguimiento a temperatura real de almacenamiento, monitoreando recuento microbiano, pH,
          sinéresis y aceptabilidad sensorial. El fin de la vida útil se define como el momento en
          que cualquiera de estos parámetros supera el límite de aceptación.
        </P>
        <List
          items={[
            'Punto crítico: recuento de microorganismos por encima del límite del CAA para postres lácteos.',
            'Indicador físico de rechazo: aparición de sinéresis superior al 5 % del volumen.',
            'Indicador sensorial: caída de la aceptabilidad global por debajo de 6/9 en escala hedónica.',
          ]}
        />
        <Callout title="Conclusión de vida útil" variant="success">
          Bajo cadena de frío continua (≤ 5 °C) y envase hermético, se establece una vida útil
          conservadora de 21 días, con potencial de extensión a 30 días si la base láctea recibe
          un tratamiento térmico de pasteurización validado.
        </Callout>
        <Figure
          src="/images/q08-vida-util.png"
          alt="Ensayo de vida útil de MOKKA en refrigeración"
          caption="Figura 8.1 — Seguimiento de muestras a 5 °C para el estudio teórico de shelf-life."
        />
      </Section>
    </>
  )
}

/* ============== 9 · ANÁLISIS ============== */
export function AnalisisContent() {
  return (
    <>
      <Section eyebrow="Punto 9 de la consigna" title="Análisis fisicoquímicos y microbiológicos">
        <Lead>
          Se definen los análisis fisicoquímicos que aplican al producto y el plan de análisis
          microbiológicos propuesto, incluyendo el armado de los medios de cultivo necesarios para
          la validación, justificando cada determinación según la naturaleza láctea y perecedera
          del postre.
        </Lead>
      </Section>

      <Section title="Análisis fisicoquímicos">
        <DataTable
          head={['Determinación', 'Método', 'Justificación']}
          rows={[
            ['pH', 'Potenciometría', 'Controla la gelificación de la carragenina y la estabilidad/seguridad.'],
            ['Actividad de agua (a_w)', 'Higrómetro de punto de rocío', 'Predice el riesgo microbiológico y la estabilidad.'],
            ['Sólidos totales', 'Secado en estufa', 'Verifica concentración de la fórmula y rendimiento.'],
            ['Materia grasa', 'Gerber / Soxhlet', 'Confirma el aporte de grasa para la tabla nutricional y los sellos.'],
            ['Sinéresis', 'Centrifugación / gravimetría', 'Evalúa la estabilidad del gel en el tiempo.'],
            ['Textura', 'Análisis de perfil de textura (TPA)', 'Cuantifica firmeza y cremosidad del gel.'],
          ]}
          caption="Tabla 9.1 — Análisis fisicoquímicos aplicables a MOKKA."
        />
      </Section>

      <Section title="Plan microbiológico propuesto">
        <P>
          Por ser un postre lácteo refrigerado, el plan se basa en los parámetros que el Código
          Alimentario Argentino exige para esta categoría. Se proponen las siguientes
          determinaciones con sus medios de cultivo:
        </P>
        <DataTable
          head={['Microorganismo', 'Medio de cultivo', 'Por qué se analiza']}
          rows={[
            ['Recuento de aerobios mesófilos', 'PCA (Plate Count Agar)', 'Indicador general de higiene y carga microbiana.'],
            ['Coliformes / E. coli', 'Agar VRBA / Caldo BGBL', 'Indicador de contaminación fecal y de proceso.'],
            ['Hongos y levaduras', 'Agar YGC / Sabouraud', 'Deterioro típico de lácteos y productos azucarados.'],
            ['Staphylococcus aureus', 'Agar Baird-Parker', 'Patógeno asociado a manipulación.'],
            ['Salmonella spp.', 'Caldo de enriquecimiento + XLD', 'Patógeno de declaración obligatoria (ausencia/25 g).'],
          ]}
          caption="Tabla 9.2 — Plan microbiológico y medios de cultivo propuestos."
        />
        <Callout title="Armado de medios de cultivo" variant="info">
          Los medios se preparan pesando el polvo deshidratado, disolviéndolo en agua destilada,
          ajustando el pH, esterilizando en autoclave (121 °C, 15 min) y volcando en placa en
          condiciones asépticas. Se incluye control de esterilidad del medio antes de sembrar.
        </Callout>
        <Figure
          src="/images/q09-analisis.png"
          alt="Armado de medios de cultivo en placas de Petri para análisis microbiológico"
          caption="Figura 9.1 — Armado de medios de cultivo y siembra en placa para el plan microbiológico de MOKKA."
        />
      </Section>
    </>
  )
}

/* ============== 10 · SENSORIAL ============== */
export function SensorialContent() {
  return (
    <>
      <Section eyebrow="Punto 10 de la consigna" title="Evaluación sensorial del producto">
        <Lead>
          La evaluación sensorial validó el prototipo final mediante un panel de consumidores y
          una prueba descriptiva. Se combinaron pruebas afectivas (aceptabilidad) y
          discriminativas (perfil) para caracterizar el producto y orientar los últimos ajustes.
        </Lead>
        <StatGrid
          stats={[
            { value: '30', label: 'Panelistas (prueba afectiva)' },
            { value: '9 pts', label: 'Escala hedónica' },
            { value: '8/9', label: 'Aceptabilidad global media' },
            { value: '5', label: 'Atributos perfilados' },
          ]}
        />
      </Section>

      <Section title="Diseño del estudio">
        <List
          ordered
          items={[
            'Prueba afectiva: 30 consumidores del target evalúan aceptabilidad global y por atributo en escala hedónica de 9 puntos.',
            'Prueba descriptiva: panel entrenado perfila intensidad de café, cacao, dulzor, cremosidad y firmeza.',
            'Prueba de preferencia pareada: prototipo final vs. prototipo intermedio.',
            'Condiciones controladas: cabinas individuales, luz neutra, muestras codificadas a 3 dígitos, agua para enjuague.',
          ]}
        />
      </Section>

      <Section title="Perfil sensorial del prototipo final">
        <DataTable
          head={['Atributo', 'Intensidad (0–10)', 'Comentario del panel']}
          rows={[
            ['Aroma a café', '6,8', 'Perceptible y agradable, sin dominar.'],
            ['Sabor a cacao', '7,2', 'Equilibrado con el café (perfil mocha logrado).'],
            ['Dulzor', '6,0', 'Adecuado, no empalagoso.'],
            ['Cremosidad', '8,1', 'Muy valorada; principal fortaleza del producto.'],
            ['Firmeza del gel', '7,0', 'Corte limpio, cuchareable, sin sinéresis.'],
          ]}
          caption="Tabla 10.1 — Perfil sensorial promedio del prototipo final."
        />
        <Callout title="Conclusión sensorial" variant="success">
          El prototipo final obtuvo una aceptabilidad global de 8/9 y fue preferido frente al
          prototipo intermedio. La cremosidad y el equilibrio mocha fueron los atributos mejor
          puntuados, validando las decisiones de reformulación de la Consigna 5.
        </Callout>
        <Figure
          src="/images/q10-sensorial.png"
          alt="Panel de evaluación sensorial de MOKKA con muestras codificadas"
          caption="Figura 10.1 — Sesión de evaluación sensorial con muestras codificadas en cabinas individuales."
        />
      </Section>
    </>
  )
}

/* ============== 11 · COSTOS ============== */
export function CostosContent() {
  return (
    <>
      <Section eyebrow="Punto 11 de la consigna" title="Estructura de costos y precio de venta">
        <Lead>
          Se presenta la estructura básica de costos, centrada en las materias primas por porción
          de 90 g, sumando costos indirectos estimados y un margen objetivo para definir el precio
          de venta sugerido en góndola.
        </Lead>
      </Section>

      <Section title="Costo de materias primas por porción (90 g)">
        <DataTable
          head={['Materia prima', 'Cantidad / porción', 'Costo estimado (ARS)']}
          rows={[
            ['Leche descremada', '28 ml', '$ 35'],
            ['Crema de leche', '28 ml', '$ 120'],
            ['Leche condensada', '28 g', '$ 140'],
            ['Cacao en polvo', '3,2 g', '$ 60'],
            ['Café', '0,4 g', '$ 20'],
            ['Azúcar', '2,4 g', '$ 5'],
            ['Carragenina kappa', '0,11 g', '$ 30'],
            ['Subtotal materias primas', '90 g', '$ 410'],
          ]}
          caption="Tabla 11.1 — Costo de materias primas por porción (valores ilustrativos en pesos argentinos)."
        />
      </Section>

      <Section title="Estructura de costos y precio sugerido">
        <DataTable
          head={['Concepto', 'Costo / unidad', 'Comentario']}
          rows={[
            ['Materias primas', '$ 410', 'Según Tabla 11.1.'],
            ['Envase y tapa', '$ 90', 'Vasito termoformado + film.'],
            ['Mano de obra y energía', '$ 70', 'Proceso en frío, bajo consumo.'],
            ['Costos indirectos (overhead)', '$ 80', 'Logística, control de calidad, etiquetado.'],
            ['Costo total', '$ 650', 'Costo de producción por unidad.'],
            ['Margen objetivo (≈ 55 %)', '$ 360', 'Margen bruto del fabricante.'],
            ['Precio sugerido de góndola', '≈ $ 1.010', 'Antes de markup minorista.'],
          ]}
          caption="Tabla 11.2 — Estructura de costos y precio de venta sugerido (valores ilustrativos)."
        />
        <Callout title="Lectura del costeo" variant="info">
          La crema de leche y la leche condensada concentran la mayor parte del costo de materias
          primas, coherente con su rol en la cremosidad del producto. La carragenina kappa, pese
          a ser una MP del sorteo, representa un costo marginal gracias a su baja dosis de uso.
        </Callout>
        <Figure
          src="/images/q11-costos.png"
          alt="Análisis de costos y precio de MOKKA"
          caption="Figura 11.1 — Composición del costo unitario: materias primas, envase, proceso e indirectos."
        />
      </Section>
    </>
  )
}

/* ============== 12 · MARCO REGULATORIO ============== */
export function RegulatorioContent() {
  return (
    <>
      <Section eyebrow="Punto 12 de la consigna" title="Marco regulatorio">
        <Lead>
          MOKKA se encuadra en el Código Alimentario Argentino (CAA) como postre lácteo, y debe
          cumplir con las normas de rotulado general, de aditivos alimentarios y con la Ley de
          Promoción de la Alimentación Saludable (Ley 27.642, etiquetado frontal).
        </Lead>
      </Section>

      <Section title="Normativa aplicable">
        <DataTable
          head={['Norma', 'Alcance', 'Aplicación a MOKKA']}
          rows={[
            ['CAA — Capítulo VIII (Lácteos)', 'Define postres y productos lácteos.', 'Clasifica al producto y fija requisitos de composición e higiene.'],
            ['CAA — Capítulo V (Rotulado)', 'Reglas generales de etiquetado.', 'Denominación, lista de ingredientes, lote, vencimiento, RNPA/RNE.'],
            ['CAA — Capítulo XVIII (Aditivos)', 'Aditivos permitidos y límites.', 'Carragenina (INS 407) permitida como gelificante en lácteos.'],
            ['Res. GMC / Mercosur — Info. nutricional', 'Rotulado nutricional obligatorio.', 'Tabla nutricional por porción (ver Consigna 7).'],
            ['Ley 27.642 + Dec. 151/2022', 'Etiquetado frontal de advertencias.', 'Sellos de exceso y leyendas precautorias.'],
          ]}
          caption="Tabla 12.1 — Marco normativo aplicable al producto."
        />
      </Section>

      <Section title="Requisitos de rotulado obligatorios">
        <List
          items={[
            'Denominación de venta: &ldquo;Postre lácteo sabor café y chocolate&rdquo;.',
            'Lista de ingredientes en orden decreciente, declarando la carragenina como gelificante (INS 407).',
            'Información nutricional por porción de 90 g y sellos de advertencia correspondientes.',
            'Leyenda precautoria &ldquo;CONTIENE CAFEÍNA. EVITAR EN NIÑOS/AS.&rdquo; por el aporte de café.',
            'Identificación de lote, fecha de vencimiento y condiciones de conservación (mantener refrigerado ≤ 5 °C).',
            'Registros sanitarios: RNE del establecimiento y RNPA del producto.',
          ]}
        />
        <Callout title="Aditivo carragenina (INS 407)" variant="info">
          La carragenina está autorizada por el CAA como gelificante/estabilizante en productos
          lácteos, dentro de los límites de Buenas Prácticas de Manufactura. La dosis empleada
          (0,12 %) es muy inferior a los máximos habituales, lo que respalda su uso.
        </Callout>
        <Callout title="Interacción con el etiquetado frontal" variant="warning">
          Al portar sellos de advertencia, MOKKA no puede exhibir información nutricional
          complementaria ni claims que destaquen cualidades positivas, ni publicidad dirigida a
          niños/as, conforme a la Ley 27.642.
        </Callout>
        <Figure
          src="/images/q12-regulatorio.png"
          alt="Documentación regulatoria y rótulo conforme al CAA"
          caption="Figura 12.1 — Esquema del rótulo conforme al CAA y a la Ley de Etiquetado Frontal."
        />
      </Section>
    </>
  )
}
