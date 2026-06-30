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
import { AnexoDrawer } from '@/components/anexo-drawer'

/* ============== 1 · CONCEPTO ============== */
export function ConceptoContent() {
  return (
    <>
      <Section eyebrow="Punto 1 de la consigna" title="Enfoque / concepto detrás del producto desarrollado">
        <P>
          <strong>MOKKA</strong> surge como un postre lácteo refrigerado que integra dos ejes: chocolate cremoso y el ritual cotidiano del café, por lo que buscamos desarrollar una opción lista para consumir.
        </P>
        <P>
          La idea inicial fue desarrollar una preparación dulce inspirada en el tiramisú, con una base cremosa sabor vainilla, café y un agregado seco separado. Sin embargo, durante los ensayos se observaron problemas de textura, formación de grumos y un color poco atractivo, por lo que el concepto fue evolucionando hacia un postre más definido: una base cremosa de <strong>chocolate y café</strong>, sin agregados sólidos, con mejor homogeneidad, color y aceptación sensorial.
        </P>
        <P>
          Para lograrlo, se utilizó una matriz láctea compuesta por leche descremada, crema de leche y leche condensada, que aporta cuerpo y dulzor. A su vez, el cacao complementa el café, suaviza su amargor, mejora el color y refuerza la percepción de un postre indulgente. La formulación final en porción individual de aproximadamente 90 g mantiene esta lógica, combinando ingredientes lácteos, cacao, café, azúcar y carragenina kappa.
        </P>
        <P>
          El enfoque tecnológico se apoya en el uso de <strong>carragenina kappa</strong>. Su función es estabilizar, espesar y contribuir a la formación de una estructura cremosa y homogénea mediante su interacción con las proteínas lácteas, especialmente las caseínas. Lo cual permite mejorar la retención de agua, reducir el riesgo de sinéresis y obtener una textura estable durante el almacenamiento refrigerado. Por eso, MOKKA no se plantea sólo como un postre sabor café, sino como un producto donde la selección de ingredientes responde a una lógica química y funcional.
        </P>
      </Section>
    </>
  )
}

/* ============== 2 · TARGET MARKET ============== */
export function TargetContent() {
  return (
    <>
      <Section eyebrow="Punto 2 de la consigna" title="Target Market — Estudio de mercado y justificación">
        <P>
          MOKKA está dirigido a consumidores jóvenes y adultos que demandan un postre lácteo refrigerado, práctico y listo para consumir, pero que simultáneamente ofrezca una experiencia sensorial diferenciada. El producto se orienta a un segmento objetivo con estilos de vida dinámicos, como estudiantes o trabajadores, que valoran formatos individuales, de fácil conservación y adecuados para consumir en una pausa, merienda o como postre.
        </P>
        <P>
          La elección del perfil café-cacao se justifica por el lugar que ocupa el café en la actualidad. En Argentina, su ingesta se encuentra instalada como una práctica frecuente, con una estimación aproximada de 208 tazas anuales por persona.
        </P>
        <P>
          Asimismo, el desarrollo se enmarca dentro de una categoría con reconocimiento normativo específico. Desde 2025, el Código Alimentario Argentino incorporó la categoría de postres lácteos, lo que permite identificar y clasificar de manera más precisa este tipo de productos dentro del mercado.
        </P>
        <P>
          Por ende, la justificación del target se basa en la articulación de tres aspectos: la aceptación del café como hábito cotidiano, la demanda de productos listos para consumir y la oportunidad de ofrecer una propuesta diferenciada dentro de los postres lácteos refrigerados.
        </P>
        <P className="text-sm text-muted-foreground mt-4">
          Fuente: <a href="https://www.forbesargentina.com/negocios/dia-cafe-cuanto-consume-argentina-variedades-conquistan-mercado-n79122?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Forbes Argentina - Consumo de café</a>
        </P>
      </Section>
    </>
  )
}

/* ============== 3 · FORMULACIONES ============== */
export function FormulacionesContent() {
  return (
    <>
      <Section eyebrow="Punto 3 de la consigna" title="Formulaciones: inicial vs Final">
        <Lead>
          En esta sección se presentan las tablas correspondientes a cada una de las formulaciones desarrolladas.
          En primer lugar se detalla la receta base utilizada para cada prueba y luego la formulación ajustada a una porción individual aproximadamente de 90 g.
          Las cantidades fueron ajustadas proporcionalmente a partir de la receta base y luego redondeadas para facilitar su lectura. Si bien los valores expresados son aproximados, los porcentajes se mantienen iguales a los de la formulación base, ya que se conservan las mismas proporciones entre los ingredientes.
        </Lead>

        <div className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-xl mb-8 border border-border">
          <strong>Referencias de medidas caseras:</strong> 1 cucharadita ≈ 5 g &nbsp;|&nbsp; 1 cucharada ≈ 15 g &nbsp;|&nbsp; 1 taza ≈ 250 ml
        </div>
        <P>
          Las cantidades fueron ajustadas proporcionalmente a partir de la receta base y luego redondeadas para facilitar su lectura. Si bien los valores expresados son aproximados, los porcentajes se mantienen iguales a los de la formulación base, ya que se conservan las mismas proporciones entre los ingredientes.
        </P>

        <div className="mt-8 mb-4">
          <h4 className="font-display text-lg font-medium tracking-wide text-foreground mb-3">Formulación inicial de la base cremosa y su composición porcentual</h4>
          <DataTable
            head={['Ingredientes base cremosa', 'Cantidad', 'Medida casera Aproximada', 'Porcentaje (%)']}
            rows={[
              ['Leche descremada', '500 ml ≈ 500 g', '2 tazas', '92,32%'],
              ['Azúcar', '20 g', '4 cucharaditas', '3,69%'],
              ['Almidón de maíz', '15 g', '3 cucharaditas', '2,77%'],
              ['Café soluble', '5 g', '1 cucharadita', '0,92%'],
              ['Esencia de vainilla', '1 ml ≈ 1 g', 'unas gotas/1/5 cucharadita', '0,18%'],
              ['Carragenina Kappa', '0,6 g', 'pizca/puntita de cucharadita', '0,11%'],
              ['Total', '541,6 g', '-', '100%'],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">Anexo 1: Cálculo de la formulación inicial de la base cremosa y su composición porcentual.</p>
        </div>

        <div className="mt-8 mb-4">
          <h4 className="font-display text-lg font-medium tracking-wide text-foreground mb-3">Formulación inicial de la base cremosa ajustada a una porción 90 g</h4>
          <DataTable
            head={['Ingredientes base cremosa', 'Cantidad', 'Medida casera Aproximada', 'Porcentaje (%)']}
            rows={[
              ['Leche descremada', '83 ml ≈ 83 g', '⅓ taza', '92,32%'],
              ['Azúcar', '3,3 g', '⅔ cucharadita', '3,69%'],
              ['Almidón de maíz', '2,5 g', '½ cucharadita', '2,77%'],
              ['Café soluble', '0,8 g', '1 ⅙ cucharadita', '0,92%'],
              ['Esencia de vainilla', '0,17 ml ≈ 0,17 g', 'unas gotas', '0,18%'],
              ['Carragenina Kappa', '0,10 g', 'pizca mínima de cucharadita', '0,11%'],
              ['Total', '89,87 g ≈ 90 g', '-', '100%'],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">Anexo 2: Cálculo de la formulación inicial de la base cremosa ajustada a una porción de 90 g.</p>
        </div>

        <div className="mt-8 mb-4">
          <h4 className="font-display text-lg font-medium tracking-wide text-foreground mb-3">Primera reformulación de la base cremosa y su composición porcentual</h4>
          <DataTable
            head={['Ingredientes base cremosa', 'Cantidad', 'Medida casera Aproximada', 'Porcentaje (%)']}
            rows={[
              ['Leche descremada', '500 ml ≈ 500 g', '2 tazas', '89,67%'],
              ['Azúcar', '20 g', '4 cucharaditas', '3,59%'],
              ['Cacao en polvo', '17 g', '3 y 1/2 cucharaditas aprox', '3,05%'],
              ['Almidón pregelatinizado', '15 g', '3 cucharadita', '2,69%'],
              ['Café soluble', '5 g', '1 cucharadita', '0,90%'],
              ['Carragenina Kappa', '0,6 g', 'pizca/puntita de cucharadita', '0,11%'],
              ['Total', '557,6 g', '-', '100%'],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">Anexo 3: Cálculo de la primera reformulación de la base cremosa y su composición porcentual.</p>
        </div>

        <div className="mt-8 mb-4">
          <h4 className="font-display text-lg font-medium tracking-wide text-foreground mb-3">Primera reformulación de la base cremosa ajustada a una porción 90 g</h4>
          <DataTable
            head={['Ingredientes base cremosa', 'Cantidad', 'Medida casera Aproximada', 'Porcentaje (%)']}
            rows={[
              ['Leche descremada', '80 ≈ 80 g', '⅓ taza', '89,67%'],
              ['Azúcar', '3,2 g', '⅔ cucharaditas', '3,59%'],
              ['Cacao en polvo', '2,7 g', '1 cucharadita', '3,05%'],
              ['Almidón pregelatinizado', '2,4 g', '½ cucharadita', '2,69%'],
              ['Café soluble', '0,8 g', 'menos de ½ cucharadita', '0,90%'],
              ['Carragenina Kappa', '0,1 g', 'pizca/puntita de cucharadita', '0,11%'],
              ['Total', '89,2 g ≈ 90 g', '-', '100%'],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">Anexo 4: Cálculo de la primera reformulación de la base cremosa ajustada a una porción de 90 g.</p>
        </div>

        <div className="mt-8 mb-4">
          <h4 className="font-display text-lg font-medium tracking-wide text-foreground mb-3">Formulación final de la base cremosa y su composición porcentual</h4>
          <DataTable
            head={['Ingredientes base cremosa', 'Cantidad', 'Medida casera Aproximada', 'Porcentaje (%)']}
            rows={[
              ['Leche descremada', '150 ml ≈ 150 g', '¾ taza', '30,89%'],
              ['Crema de leche', '150 ml = 150 g', '¾ taza', '30,89%'],
              ['Leche condensada', '150 g', '10 cucharadas', '30,89%'],
              ['Cacao en polvo', '17 g', '3 y ½ cucharaditas', '3,50%'],
              ['Azúcar', '13 g', '2 cucharaditas y ½', '2,68%'],
              ['Café soluble', '5 g', '1 cucharadita', '1,03%'],
              ['Carragenina Kappa', '0,6 g', 'pizca/puntita de cucharadita', '0,12%'],
              ['Total', '485,6 g', '-', '100%'],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">Anexo 5: Cálculo de la Formulación final de la base cremosa y su composición porcentual.</p>
        </div>

        <div className="mt-8 mb-4">
          <h4 className="font-display text-lg font-medium tracking-wide text-foreground mb-3">Formulación final de la base cremosa ajustada a una porción de 90 g</h4>
          <DataTable
            head={['Ingredientes base cremosa', 'Cantidad', 'Medida casera Aproximada', 'Porcentaje (%)']}
            rows={[
              ['Leche descremada', '28 ml ≈ 28 g', '5 cucharaditas y media', '30,89%'],
              ['Crema de leche', '28 ml = 28 g', '5 cucharaditas y media', '30,89%'],
              ['Leche condensada', '28 g', '2 cucharadas', '30,89%'],
              ['Cacao en polvo', '3,2 g', '1 cucharadita', '3,50%'],
              ['Azúcar', '2,4 g', '½ cucharadita', '2,68%'],
              ['Café soluble', '0,9 g', '⅕ cucharadita', '1,03%'],
              ['Carragenina Kappa', '0,1 g', 'pizca mínima de cucharadita', '0,12%'],
              ['Total', '90,6 g ≈ 90 g', '-', '100%'],
            ]}
          />
          <p className="text-sm text-muted-foreground mt-2 italic">Anexo 6: Cálculo de la Formulación final de la base cremosa ajustada a una porción de 90 g.</p>
        </div>

        <AnexoDrawer title="Ver Anexos y Cálculos de Formulación">
          <div className="space-y-6 mt-6">
            <Figure src="/images/real/3_image1.png" alt="Anexo 1" caption="Anexo 1: Cálculo de la formulación inicial de la base cremosa y su composición porcentual." ratio="aspect-auto" />
            <Figure src="/images/real/3_image2.png" alt="Anexo 2" caption="Anexo 2: Cálculo de la formulación inicial de la base cremosa ajustada a una porción de 90 g." ratio="aspect-auto" />
            <Figure src="/images/real/3_image3.png" alt="Anexo 3" caption="Anexo 3: Cálculo de la primera reformulación de la base cremosa y su composición porcentual." ratio="aspect-auto" />
            <Figure src="/images/real/3_image4.png" alt="Anexo 4" caption="Anexo 4: Cálculo de la primera reformulación de la base cremosa ajustada a una porción de 90 g." ratio="aspect-auto" />
            <Figure src="/images/real/3_image5.png" alt="Anexo 5" caption="Anexo 5: Cálculo de la Formulación final de la base cremosa y su composición porcentual." ratio="aspect-auto" />
            <Figure src="/images/real/3_image6.png" alt="Anexo 6" caption="Anexo 6: Cálculo de la Formulación final de la base cremosa ajustada a una porción de 90 g." ratio="aspect-auto" />
          </div>
        </AnexoDrawer>
      </Section>
    </>
  )
}

/* ============== 4 · MATERIAS PRIMAS ============== */
export function MateriasPrimasContent() {
  return (
    <>
      <Section eyebrow="Punto 4 de la consigna" title="Materias primas: función y justificación">
        
        <H3>Café (café soluble)</H3>
        <P>
          En este caso, nos tocó por sorteo café y en base a eso decidimos hacer un postre lácteo refrigerado sabor café. El objetivo fue que esté presente y acompañe sin resultar invasivo. Para lograr un perfil sensorial equilibrado, se combinó con ingredientes lácteos y cacao, obteniendo un sabor suave, armónico y agradable.
        </P>

        <H3>Leche descremada (leche descremada pasteurizada)</H3>
        <P>
          Es la base acuosa del producto, aporta proteínas y minerales que tiene de por sí el alimento. La leche beneficia en cuanto a la estabilidad y textura gracias a que reacciona muy bien con la carragenina, dando una textura deseada. Además, al ser descremada reduce el contenido graso, permitiendo controlar el valor nutricional.
        </P>

        <H3>Leche condensada (Leche condensada azucarada)</H3>
        <P>
          Aporta grandes beneficios a nivel nutricional y tecnológico. Primero, por la parte láctea proteínas y lactosa. En el lado tecnológico aumenta la viscosidad, dándole cuerpo y cremosidad al postre. Además de aportar dulzor y disminuye la actividad del agua por su elevada concentración de azúcar.
        </P>

        <H3>Crema (crema de leche)</H3>
        <P>
          Es la principal fuente de grasa. Actúa como un potenciador del sabor, mejorando drásticamente la textura dándole mayor suavidad, cremosidad y cuerpo al postre. Desempeña un papel fundamental en la percepción sensorial del producto.
        </P>

        <H3>Azúcar</H3>
        <P>
          Genera y mejora el equilibrio del sabor, balanceado y compensando el amargor del café y del cacao.
        </P>

        <H3>Cacao (Polvo para preparar bebida analcohólica a base de cacao y azúcar)</H3>
        <P>
          Disminuye el amargor del café, y aporta color, aroma y sabor. También beneficia en el aspecto final del postre.
        </P>

        <H3>Carragenina Kappa (Espesante INS 407)</H3>
        <P>
          Es el principal y único hidrocoloide del postre. Cumple la función de estabilizar, gelificar y espesar el alimento. Aumentando la firmeza pero con una consistencia cremosa y viscosa, evitando la sinéresis durante el almacenamiento.
        </P>

        <Figure
          src="/images/real/4_image1.png"
          alt="Materias primas utilizadas"
          caption="Figura 1. Materias primas utilizadas."
        />

        <P className="mt-8">
          La formulación y elección de los ingredientes fue diseñada para lograr un postre lácteo refrigerado con textura cremosa, estable y homogénea. Cada ingrediente gracias a sus características aportaron funciones que lograron el resultado final deseado. Las proteínas lácteas aportan estructura y participan en la formación de la matriz del producto, la crema mejora la cremosidad y sensación en boca, mientras que el café y cacao definieron el perfil sensorial característico. La carragenina kappa es el principal agente estabilizante porque interactúa con las micelas de caseína formando una red tridimensional que incrementa la retención del agua, mejora la consistencia y evita que se genere sinéresis en el almacenamiento.
        </P>
        <P>
          En conclusión, la formulación nos permite obtener un postre de calidad, sabroso y cremoso.
        </P>
      </Section>
    </>
  )
}

/* ============== 5 · DESARROLLO ============== */
export function DesarrolloContent() {
  return (
    <>
      <Section eyebrow="Punto 5 de la consigna" title="Desarrollo de producto y ensayos">
        <Lead>
          El producto MOKKA atravesó distintas etapas de reformulación hasta llegar a su versión final.
        </Lead>
        <P>
          Inicialmente, se planteó una propuesta con un determinado enfoque, pero a partir de las pruebas realizadas se fueron identificando distintos aspectos a mejorar vinculados a la textura, el color y la aceptación del producto por parte de los consumidores. Es por este motivo que se realizaron modificaciones en los ingredientes y sobre el concepto general del mismo para así poder obtener una formulación final más adecuada y cercana a las características buscadas.
        </P>
        <P>
          A continuación, se detallan las formulaciones iniciales, los principales problemas observados durante el desarrollo y los cambios realizados hasta llegar al producto final.
        </P>
      </Section>

      <Section title="La Idea Inicial">
        <P>
          La idea del producto inicial consistía en elaborar un postre tipo tiramisú con una base cremosa sabor vainilla y café y un agregado seco separado.
        </P>
        <P>
          Esta primera formulación estaba compuesta por: leche descremada, azúcar, almidón de maíz, café soluble, esencia de vainilla y carragenina kappa. Además, se había pensado una presentación en envase dividido, donde en un compartimento se encontraría la base cremosa y en otro separado vainillas trozadas como agregado seco. El objetivo de esta presentación era que el consumidor pudiera incorporar las vainillas dentro del postre al momento de consumirlo simulando la estructura de un postre tiramisú.
        </P>
        <P>
          El objetivo era obtener un postre con sabor predominante a vainilla acompañado por un sutil toque a café, textura cremosa y con agregados de sólidos (los trozos de vainilla). Sin embargo, durante las primeras pruebas se observaron algunas dificultades tecnológicas. Por un lado, la textura obtenida no era la esperada ya que se formaban grumos por lo que el producto no presentaba una consistencia homogénea. Por otro lado, el color obtenido no era visualmente atractivo ni el deseado ya que resultaba demasiado claro.
        </P>
        <div className="max-w-lg w-full">
          <Figure
            src="/images/real/5_image1.png"
            alt="Formulación inicial"
            ratio="aspect-auto"
            caption="Figura 1. Formulación inicial."
          />
        </div>
      </Section>

      <Section title="Primera Reformulación">
        <P>
          A partir de estos resultados, se realizó una primera reformulación. Se decidió agregar cacao en polvo, ya que combina adecuadamente con el café y permite mejorar tanto el sabor como el aspecto/color del producto. Además, se reemplazó el almidón de maíz común por un almidón pregelatinizado con el objetivo de mejorar la textura y disminuir la formación de grumos.
        </P>
        <P>
          El almidón de maíz común requiere calentamiento y agitación adecuada para gelatinizar correctamente. Sí la dispersión no es uniforme, los gránulos pueden hidratarse de manera desigual y favorecer la aparición de grumos. Es por este motivo que se evaluó la incorporación de almidón pregelatinizado, debido a que este permite desarrollar viscosidad con menor requerimiento de cocción y puede contribuir a obtener una textura más homogénea y estable.
        </P>
        <P>
          A pesar de esta modificación, la textura obtenida continuó sin ser la esperada, por lo que se decidió avanzar con una nueva reformulación.
        </P>
        <div className="max-w-lg w-full">
          <Figure
            src="/images/real/5_image2.png"
            alt="Primera reformulación"
            ratio="aspect-auto"
            caption="Figura 2. Primera reformulación."
          />
        </div>
      </Section>

      <Section title="Formulación Final">
        <P>
          Finalmente, se decidió eliminar el uso de almidón y reformular el producto utilizando leche condensada y crema de leche, ingredientes los cuales permitieron obtener una textura más cremosa. A su vez, se eliminaron los trozos de vainilla de la formulación ya que el enfoque dejó de ser un postre tipo tiramisú y pasó a orientarse hacia un postre cremoso de chocolate y café. De esta manera la formulación final se definió en función de las mejoras buscadas en cuanto a la textura, color, sabor y aceptación del producto.
        </P>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Figure
            src="/images/real/5_image3.png"
            alt="Formulación final (1)"
            ratio="aspect-[4/3]"
            caption="Figura 3. Formulación final."
          />
          <Figure
            src="/images/real/5_image4.png"
            alt="Formulación final (2)"
            ratio="aspect-[4/3]"
            caption="Figura 3. Formulación final (cont.)."
          />
        </div>
      </Section>

      <Section title="Proceso de elaboración de MOKKA">
        <div className="space-y-4">
          <Callout title="Paso 1" variant="info">
            Se mezclan la leche descremada, la crema de leche y la leche condensada. Esta etapa permite formar la base líquida del producto. La leche aporta principalmente agua, proteínas y lactosa; la crema de leche contribuye con materia grasa aportando cremosidad y cuerpo; y la leche condensada aporta principalmente azúcares y viscosidad.
          </Callout>
          <Callout title="Paso 2" variant="info">
            Por separado, se mezclan los ingredientes secos: cacao en polvo, café soluble, azúcar y carragenina kappa. La carragenina kappa debe ser dispersada previamente junto con los otros sólidos para facilitar su incorporación en la fase líquida posteriormente. Este paso es muy importante desde el punto de vista químico, ya que los hidrocoloides pueden formar grumos si entran en contacto directo con una fase acuosa sin una dispersión adecuada. Si primero se mezclan los secos, se favorece una distribución de la carragenina más uniforme, reduciendo así el riesgo de que luego no se hidrate correctamente.
          </Callout>
          <Callout title="Paso 3" variant="info">
            A la mezcla de sólidos se le incorpora una pequeña porción de leche con el objetivo de facilitar su posterior integración con la base líquida. Este paso permite facilitar la dispersión de los sólidos reduciendo el riesgo de formación de grumos. Posteriormente, esta preparación se cuela y se incorpora al recipiente con la base líquida. El colado permite retener posibles partículas no disueltas o grumos, contribuyendo a una textura más lisa y homogénea en el producto final.
          </Callout>
          <Callout title="Paso 4" variant="info">
            La mezcla de líquidos y secos se lleva a cocción en una olla con agitación constante. Durante esta etapa el calentamiento cumple varias funciones tecnológicas: por un lado favorece la hidratación y activación de la carragenina kappa, mejora la dispersión del cacao en polvo y del café soluble y permite que todos los sólidos se integren de manera uniforme. La agitación constante es fundamental principalmente para evitar que se sedimenten partículas y no se formen grumos. La mezcla se calienta hasta alcanzar una temperatura aproximada de 70-85° para favorecer la hidratación de la carragenina kappa y permitir así el desarrollo de viscosidad. La cocción dura 30 minutos y se busca obtener una base cremosa, uniforme, con mayor cuerpo y estabilidad, favoreciendo la interacción entre los componentes lácteos, los sólidos y el hidrocoloide utilizado como estructurante.
          </Callout>
          <Callout title="Paso 5" variant="info">
            Al finalizar la cocción, la mezcla se retira del fuego y se deja reposar unos 15 minutos a temperatura ambiente para luego poder colocarla en los envases correspondientes y llevarla a refrigerar. Durante el enfriamiento, la carragenina kappa contribuye a la formación de una red estructural que ayuda a estabilizar el producto y a mantener una textura cremosa.
          </Callout>
        </div>
      </Section>
    </>
  )
}

/* ============== 6 · VENTAJAS / DESVENTAJAS ============== */
export function VentajasContent() {
  return (
    <>
      <Section eyebrow="Punto 6 de la consigna" title="Ventajas y desventajas de las materias primas seleccionadas">
        
        <H3>Café (Café soluble)</H3>
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Gran aporte de olor y sabor, ampliamente aceptado por los consumidores.',
              'Proporciona un color natural que evita el uso de colorantes artificiales.',
              'Contiene compuestos antioxidantes que aportan un valor agregado nutricional.',
              'Combina muy bien con ingredientes lácteos y con el cacao (perfil de sabor moka).',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Sabor naturalmente amargo, puede intensificarse y ser invasivo si su concentración es elevada.',
              'La presencia de cafeína puede restringir el consumo en niños.',
            ],
          }}
        />

        <H3>Leche descremada (Leche descremada pasteurizada)</H3>
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Aporta agua, proteínas de alto valor biológico, lactosa y minerales.',
              'Las caseínas interactúan con la carragenina kappa, favoreciendo una estructura estable y homogénea.',
              'Bajo porcentaje de grasa, reduce el contenido lipídico sin afectar la funcionalidad.',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Menor sensación de cremosidad frente a la leche entera; requiere complementarse con crema.',
              'Puede presentar separación de fases o sinéresis durante el almacenamiento sin un estabilizante adecuado.',
            ],
          }}
        />

        <H3>Leche condensada (Leche condensada azucarada)</H3>
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Aumenta el contenido de sólidos lácteos, aportando cuerpo, viscosidad y cremosidad.',
              'Aporta dulzor y disminuye la actividad de agua gracias a su alta concentración de azúcares (mejor conservación).',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Alto contenido de azúcares que incrementa el aporte calórico.',
              'Requiere cuidadoso equilibrio con otros ingredientes para evitar dulzor excesivo que opaque el café.',
            ],
          }}
        />

        <H3>Crema (Crema de leche)</H3>
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Papel fundamental en el desarrollo, textura y perfil sensorial (cremosidad, suavidad y cuerpo).',
              'Protege los compuestos aromáticos del café y cacao durante el almacenamiento, liberándolos en el consumo.',
              'Suaviza el amargor característico del café y cacao, generando un perfil más equilibrado.',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Incrementa el contenido de grasas y el valor energético del producto.',
              'Riesgo de corte durante el preparado, lo que puede deteriorar la mezcla y presentar grumos.',
              'Riesgo de separación de fases durante el almacenamiento.',
            ],
          }}
        />

        <H3>Cacao (Polvo a base de cacao y azúcar)</H3>
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Complementa el perfil sensorial del café, aportando color, aroma y un sabor equilibrado.',
              'Logra una apariencia más atractiva y una combinación de sabores ampliamente aceptada.',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Puede generar grumos en la preparación (tamizar es obligatorio).',
            ],
          }}
        />

        <H3>Azúcar</H3>
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Aporta dulzor, equilibra el amargor del café.',
              'Incrementa los sólidos solubles y mejora la textura.',
              'Contribuye a disminuir la actividad de agua, favoreciendo la estabilidad.',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Incrementa el contenido calórico del postre.',
              'Si se usa en exceso, enmascara el sabor a café y limita la aceptación según tendencias de mercado.',
            ],
          }}
        />

        <H3>Carragenina Kappa (Espesante INS 407)</H3>
        <SplitCards
          left={{
            title: 'Ventajas',
            variant: 'success',
            items: [
              'Forma una red tridimensional que inmoviliza el agua y mejora la consistencia.',
              'Interactúa con las micelas de caseína fortaleciendo el gel y reduciendo la sinéresis.',
              'Altamente eficiente: desarrolla estas funciones en proporciones muy bajas.',
            ],
          }}
          right={{
            title: 'Desventajas',
            variant: 'warning',
            items: [
              'Su uso excesivo puede lograr una textura no deseada (ej. muy gelatinosa o firme).',
              'Limita la viscosidad y cremosidad buscada si no se dosifica correctamente.',
            ],
          }}
        />

        <div className="mt-12 bg-muted/30 p-6 rounded-2xl border border-border">
          <h4 className="font-display text-lg font-medium text-foreground mb-4">Clasificación de Ingredientes</h4>
          <List
            items={[
              <span key="1"><strong>El cacao y nesquik:</strong> saborizantes, endulzantes y estimulantes</span>,
              <span key="2"><strong>Leche descremada, crema y leche condensada:</strong> ingredientes lácteos</span>,
              <span key="3"><strong>Carragenina kappa:</strong> aditivos alimentarios (estabilizantes)</span>,
            ]}
          />
        </div>
      </Section>
    </>
  )
}
