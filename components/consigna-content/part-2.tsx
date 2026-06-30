import {
  Section,
  Lead,
  P,
  H3,
  H4,
  List,
  Callout,
  Figure,
  StatGrid,
  DataTable,
  SplitCards,
} from '@/components/content'
import { AnexoDrawer } from '@/components/anexo-drawer'

/* ============== 7 · TABLA NUTRICIONAL Y SELLOS ============== */
export function TablaNutricionalContent() {
  return (
    <>
      <Section eyebrow="Punto 7 de la consigna" title="Ingredientes utilizados y sus cantidades">
        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Leche (150 ml)</H3>
        <P>Para 100 ml de leche los valores de cada macro y micronutriente son:</P>
        <List items={[
          'Valor energético: 36 kcal/151 KJ',
          'Carbohidratos: 4,9 g',
          'Azúcares totales: 4,9 g',
          'Proteínas: 3,0 g',
          'Grasas totales: 0,5 g',
          'Grasas saturadas: 0,3 g',
          'Grasas trans: 0 g',
          'Sodio: 49 mg',
          'Calcio: 105 mg',
          'Vitamina A: 64 ug',
          'Vitamina D: 1 ug',
          'Vitamina B6: 0,1 mg',
          'Vitamina B9: 18 ug',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Crema de leche (150 ml)</H3>
        <P>Para 15 ml de crema de leche los valores de cada macro y micronutriente son:</P>
        <List items={[
          'Val. Energético: 51 kcal / 211 KJ',
          'Carbohidratos: 0 g',
          'Proteínas: 0 g',
          'Grasas totales: 5,4 g',
          'Grasas saturadas: 3,2 g',
          'Grasas trans: 0 g',
          'Sodio: 6,2 mg',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Leche condensada (150 g)</H3>
        <P>Para 20 g de leche condensada los valores de cada macro y micronutriente son:</P>
        <List items={[
          'Val. Energético: 54 kcal / 225 KJ',
          'Carbohidratos: 11 g',
          'Azúcares totales: 11 g',
          'Azúcares añadidos: 9 g',
          'Proteínas: 1,6 g',
          'Grasas totales: 0,8 g',
          'Grasas saturadas: 0,5 g',
          'Grasas trans: 0 g',
          'Grasas monoinsaturadas: 0,2 g',
          'Grasas poliinsaturadas: 0,02 g',
          'Colesterol: 3,4 mg',
          'Fibra alimentaria: 0 g',
          'Sodio: 23 mg',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Cacao (17 g)</H3>
        <P>Para 10 g de cacao los valores de cada macro y micronutriente son:</P>
        <List items={[
          'Val. Energético: 25 kcal/ 104 KJ',
          'Carbohidratos: 5,4 g',
          'Azúcares totales: 4,6 g',
          'Azúcares añadidos: 2,6 g',
          'Proteínas: 0,9 g',
          'Grasas totales: 0 g',
          'Grasas saturadas: 0 g',
          'Grasas trans: 0 g',
          'Fibra alimentaria: 3 g',
          'Sodio: 26 mg',
          'Vitamina D: 1,3 ug',
          'Vitamina C: 10 mg',
          'Vitamina B1: 0,18 mg',
          'Hierro: 2,1 mg',
          'Zinc: 1,1 mg',
          'Calcio: -',
          'Fósforo: 25 mg',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Café (5 g)</H3>
        <P>Para 1,5 g de café los valores de cada macro y micro nutriente:</P>
        <List items={[
          'No aporta cantidades significativas de Valor Energético, carbohidratos de los cuales, Azúcares totales, azúcares añadidos, proteínas, grasas totales, grasas saturadas, grasas trans, fibra alimentaria y sodio.',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Azúcar (13 g)</H3>
        <P>Para 5 g de azúcar los valores de cada macro y micronutriente son:</P>
        <List items={[
          'Val. Energético: 20 kcal',
          'Carbohidratos: 5 g',
          'Azúcares: 5 g',
          'Proteínas: 0 g',
          'Grasas totales: 0 g',
          'Fibra alimentaria: 0 g',
          'Sodio: 0 mg',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Carragenina (0,6 g)</H3>
        <P>La fibra alimentaria aporta aproximadamente 2 kcal por gramo.</P>
        <List items={[
          'Val. Energético: 1,2 kcal',
          'Fibra alimentaria: 0,6 g',
        ]} />
      </Section>

      <Section title="Receta y Tablas">
        <DataTable
          head={['Ingrediente', 'Cantidad usada']}
          rows={[
            ['Leche descremada', '150 ml'],
            ['Crema de leche', '150 ml'],
            ['Leche condensada', '150 g'],
            ['Cacao en polvo', '17 g'],
            ['Café', '5 g'],
            ['Azúcar', '13 g'],
            ['Carragenina kappa', '0,6 g'],
            [<strong key="1">Cantidad final de la preparación</strong>, <strong key="2">485,6 g</strong>],
          ]}
        />
        <Callout variant="info">
          Se considera una masa final teórica de 485,6 g, sin pérdidas significativas por evaporación.
        </Callout>
        <P>
          <strong>Ingredientes:</strong> leche descremada (leche descremada, vitaminas A, D, B6 y B9), crema de leche (crema de leche, estabilizante: celulosa microcristalina), leche condensada azucarada (leche semidescremada y leche semidescremada orgánica, azúcar, lactosa), preparado en polvo a base de cacao, azúcar, café torrado instantáneo con azúcar y carragenina kappa.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">TABLA DE REFERENCIA</H3>
        <DataTable
          head={['Nutriente', 'Se multiplica por', 'Porque aporta']}
          rows={[
            ['Azúcares / carbohidratos disponibles', '4', '4 kcal/g'],
            ['Proteínas', '4', '4 kcal/g'],
            ['Grasas totales', '9', '9 kcal/g'],
            ['Fibra alimentaria', '2', '2 kcal/g'],
          ]}
        />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">TABLA NUTRICIONAL - 90 GR</H3>
        <DataTable
          head={['Información nutricional', 'Cantidad por porción 90 g', '%VD (*)']}
          rows={[
            ['Valor energético', '197 kcal / 826 kJ', '10%'],
            ['Carbohidratos', '20,8 g', '7%'],
            ['Azúcares totales', '20,5 g', '-'],
            ['Azúcares añadidos', '15,7 g', '-'],
            ['Proteínas', '3,3 g', '4%'],
            ['Grasas totales', '11,3 g', '21%'],
            ['Grasas saturadas', '6,7 g', '30%'],
            ['Grasas trans', '0 g', '-'],
            ['Fibra alimentaria', '1,1 g', '4%'],
            ['Sodio', '65 mg', '3%'],
          ]}
        />
        <P className="text-sm text-muted-foreground mt-2">
          (*) % Valores Diarios con base en una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">TABLA NUTRICIONAL - 485,6 GR</H3>
        <DataTable
          head={['Información nutricional', 'Cantidad en la preparación total 485,6 g', '%VD (*)']}
          rows={[
            ['Valor energético', '1065 kcal / 4455 kJ', '53%'],
            ['Carbohidratos', '112,0 g', '37%'],
            ['Azúcares totales', '110,7 g', '-'],
            ['Azúcares añadidos', '84,9 g', '-'],
            ['Proteínas', '18,0 g', '24%'],
            ['Grasas totales', '60,8 g', '111%'],
            ['Grasas saturadas', '36,2 g', '165%'],
            ['Grasas trans', '0 g', '-'],
            ['Fibra alimentaria', '5,7 g', '23%'],
            ['Sodio', '352 mg', '15%'],
          ]}
        />
        <P className="text-sm text-muted-foreground mt-2">
          (*) % Valores Diarios con base en una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">TABLA NUTRICIONAL - 100 GR</H3>
        <DataTable
          head={['Información nutricional', 'Cantidad cada 100 g', '%VD (*)']}
          rows={[
            ['Valor energético', '219 kcal / 917 kJ', '11%'],
            ['Carbohidratos', '23,1 g', '8%'],
            ['Azúcares totales', '22,8 g', '-'],
            ['Azúcares añadidos', '17,5 g', '-'],
            ['Proteínas', '3,7 g', '5%'],
            ['Grasas totales', '12,5 g', '23%'],
            ['Grasas saturadas', '7,5 g', '34%'],
            ['Grasas trans', '0 g', '-'],
            ['Fibra alimentaria', '1,2 g', '5%'],
            ['Sodio', '73 mg', '3%'],
          ]}
        />
        <P className="text-sm text-muted-foreground mt-2">
          (*) % Valores Diarios con base en una dieta de 2.000 kcal u 8.400 kJ. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">SELLOS</H3>
        <DataTable
          head={['Criterio evaluado', 'Valor cada 100 g', 'Cálculo', 'Resultado', '¿Corresponde sello?']}
          rows={[
            ['Azúcares añadidos', '17,5 g', <span key="1" className="whitespace-pre-line">{'17,5 x 4 = 70 kcal\n70 ÷ 219 x 100'}</span>, '31,96%', 'SÍ: EXCESO EN AZÚCARES'],
            ['Grasas totales', '12,5 g', <span key="2" className="whitespace-pre-line">{'12,5 x 9 = 112,5 kcal\n112,5 ÷ 219 x 100'}</span>, '51,37%', 'SÍ: EXCESO EN GRASAS TOTALES'],
            ['Grasas saturadas', '7,5 g', <span key="3" className="whitespace-pre-line">{'7,5 x 9 = 67,5 kcal\n67,5 ÷ 219 x 100'}</span>, '30,82%', 'SÍ: EXCESO EN GRASAS SATURADAS'],
            ['Sodio', '73 mg', <span key="4" className="whitespace-pre-line">{'73 ÷ 219 = 0,33 mg/kcal\nAdemás: 73 mg/100 g < 300 mg/100 g'}</span>, 'No supera', 'No corresponde'],
            ['Calorías', '219 kcal', '219 kcal/100 g < 275 kcal/100 g', 'No supera', 'No corresponde'],
          ]}
        />
        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Justificación de Sellos</H3>
        <div className="space-y-4">
          <Callout title="1. Exceso en azúcares">
            El límite indica que corresponde sello cuando 10% o más de las calorías del alimento provienen de azúcares añadidos.<br />
            <strong>Cálculo:</strong> 17,5 g de azúcares añadidos × 4 kcal/g = 70 kcal<br />
            <strong>Porcentaje:</strong> 70 kcal ÷ 219 kcal × 100 = 31,96% (Supera el 10%, CORRESPONDE SELLO).
          </Callout>
          <Callout title="2. Exceso en grasas totales">
            El límite indica que corresponde sello cuando 30% o más de las calorías del alimento provienen de grasas totales.<br />
            <strong>Cálculo:</strong> 12,5 g de grasas totales × 9 kcal/g = 112,5 kcal<br />
            <strong>Porcentaje:</strong> 112,5 kcal ÷ 219 kcal × 100 = 51,37% (Supera el 30%, CORRESPONDE SELLO).
          </Callout>
          <Callout title="3. Exceso en grasas saturadas">
            El límite indica que corresponde sello cuando 10% o más de las calorías del alimento provienen de grasas saturadas.<br />
            <strong>Cálculo:</strong> 7,5 g de grasas saturadas × 9 kcal/g = 67,5 kcal<br />
            <strong>Porcentaje:</strong> 67,5 kcal ÷ 219 kcal × 100 = 30,82% (Supera el 10%, CORRESPONDE SELLO).
          </Callout>
          <Callout title="4. Exceso en sodio">
            Para sodio, corresponde sello si el alimento tiene 300 mg o más cada 100 g o si supera 1 mg de sodio por kcal.<br />
            <strong>Cálculo por kcal:</strong> 73 mg de sodio ÷ 219 kcal = 0,33 mg/kcal<br />
            No supera 1 mg/kcal ni los 300 mg/100g (NO CORRESPONDE SELLO).
          </Callout>
          <Callout title="5. Exceso en calorías">
            El producto aporta: 219 kcal cada 100 g. El límite es: 275 kcal cada 100 g.<br />
            Como no supera el límite, NO CORRESPONDE SELLO.
          </Callout>
        </div>

        <P className="mt-6">
          <strong>Leyenda de cafeína:</strong> La receta completa contiene 5 g de café instantáneo, aportando aprox. 125-175 mg de cafeína en la preparación. Para una porción de 90 g, el aporte estimado es de 23,2 - 32,4 mg de cafeína. Conviene evaluar la leyenda precautoria: "CONTIENE CAFEÍNA. EVITAR EN NIÑOS/AS".
        </P>
      </Section>
      <AnexoDrawer title="Ver Justificación Detallada">
        <h3>Cálculos para justificar tablas nutricionales</h3>
        <p>A continuación se exponen las tablas y cálculos exactos del trabajo original.</p>
        <div className="space-y-6 mt-6">
          <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">CUENTAS PARA JUSTIFICAR LA TABLA NUTRICIONAL DE 90 GR</H3>
          <DataTable
            head={['Nutriente', 'Total en receta completa, 485,6 g', 'Cuenta para porción de 90 g', 'Resultado exacto', 'Resultado declarado']}
            rows={[
              ['Valor energético', '1065 kcal', '1065 x 90 ÷ 485,6', '197,4 kcal', '197 kcal'],
              ['Valor energético', '4455 kJ', '4455 x 90 ÷ 485,6', '825,7 kJ', '826 kJ'],
              ['Carbohidratos', '112,0 g', '112,0 x 90 ÷ 485,6', '20,76 g', '20,8 g'],
              ['Azúcares totales', '110,7 g', '110,7 x 90 ÷ 485,6', '20,52 g', '20,5 g'],
              ['Azúcares añadidos', '84,9 g', '84,9 x 90 ÷ 485,6', '15,74 g', '15,7 g'],
              ['Proteínas', '18,0 g', '18,0 x 90 ÷ 485,6', '3,34 g', '3,3 g'],
              ['Grasas totales', '60,8 g', '60,8 x 90 ÷ 485,6', '11,27 g', '11,3 g'],
              ['Grasas saturadas', '36,2 g', '36,2 x 90 ÷ 485,6', '6,71 g', '6,7 g'],
              ['Grasas trans', '0 g', '0 x 90 ÷ 485,6', '0 g', '0 g'],
              ['Fibra alimentaria', '5,7 g', '5,7 x 90 ÷ 485,6', '1,06 g', '1,1 g'],
              ['Sodio', '352 mg', '352 x 90 ÷ 485,6', '65,24 mg', '65 mg'],
            ]}
          />
          <DataTable
            head={['Nutriente', 'Resultado por 90 g', 'Valor diario usado', 'Cuenta', '%VD declarado']}
            rows={[
              ['Valor energético', '197 kcal', '2000 kcal', '197 x 100 ÷ 2000 = 9,85%', '10%'],
              ['Valor energético', '826 kJ', '8400 kJ', '826 x 100 ÷ 8400 = 9,83%', '10%'],
              ['Carbohidratos', '20,8 g', '300 g', '20,8 x 100 ÷ 300 = 6,93%', '7%'],
              ['Azúcares totales', '20,5 g', 'No aplica', 'No se calcula %VD', '-'],
              ['Azúcares añadidos', '15,7 g', 'No aplica', 'No se calcula %VD', '-'],
              ['Proteínas', '3,3 g', '75 g', '3,3 x 100 ÷ 75 = 4,4%', '4%'],
              ['Grasas totales', '11,3 g', '55 g', '11,3 x 100 ÷ 55 = 20,54%', '21%'],
              ['Grasas saturadas', '6,7 g', '22 g', '6,7 x 100 ÷ 22 = 30,45%', '30%'],
              ['Grasas trans', '0 g', 'No aplica', 'No se calcula %VD', '-'],
              ['Fibra alimentaria', '1,1 g', '25 g', '1,1 x 100 ÷ 25 = 4,4%', '4%'],
              ['Sodio', '65 mg', '2400 mg', '65 x 100 ÷ 2400 = 2,70%', '3%'],
            ]}
          />
          
          <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">CUENTAS PARA JUSTIFICAR LA TABLA NUTRICIONAL DE TODA LA PREPARACIÓN</H3>
          <DataTable
            head={['Nutriente', 'Cuentas por ingrediente', 'Total en la preparación']}
            rows={[
              ['Valor energético', <span key="1" className="whitespace-pre-line">{'Leche: 150 x 36 / 100 = 54 kcal\nCrema: 150 x 51 / 15 = 510 kcal\nLeche condensada: 150 x 54 / 20 = 405 kcal\nCacao: 17 x 25 / 10 = 42,5 kcal\nAzúcar: 13 x 20 / 5 = 52 kcal\nCarragenina: 1,2 kcal\nCafé: no significativo'}</span>, '1064,7 kcal ≈ 1065 kcal'],
              ['Valor energético en kJ', <span key="2" className="whitespace-pre-line">{'Leche: 54 x 4,184 = 225,9 kJ\nCrema: 510 x 4,184 = 2133,8 kJ\nLeche condensada: 405 x 4,184 = 1694,5 kJ\nCacao: 42,5 x 4,184 = 177,8 kJ\nAzúcar: 52 x 4,184 = 217,6 kJ\nCarragenina: 1,2 x 4,184 = 5,0 kJ\nCafé: no significativo'}</span>, '4454,7 kJ ≈ 4455 kJ'],
              ['Carbohidratos', <span key="3" className="whitespace-pre-line">{'Leche: 150 x 4,9 / 100 = 7,35 g\nCrema: 0 g\nLeche condensada: 150 x 11 / 20 = 82,5 g\nCacao: 17 x 5,4 / 10 = 9,18 g\nAzúcar: 13 x 5 / 5 = 13 g\nCafé: no significativo'}</span>, '112,03 g ≈ 112,0 g'],
              ['Azúcares totales', <span key="4" className="whitespace-pre-line">{'Leche: 150 x 4,9 / 100 = 7,35 g\nCrema: 0 g\nLeche condensada: 150 x 11 / 20 = 82,5 g\nCacao: 17 x 4,6 / 10 = 7,82 g\nAzúcar: 13 x 5 / 5 = 13 g'}</span>, '110,67 g ≈ 110,7 g'],
              ['Azúcares añadidos', <span key="5" className="whitespace-pre-line">{'Leche condensada: 150 x 9 / 20 = 67,5 g\nCacao: 17 x 2,6 / 10 = 4,42 g\nAzúcar: 13 x 5 / 5 = 13 g'}</span>, '84,92 g ≈ 84,9 g'],
              ['Proteínas', <span key="6" className="whitespace-pre-line">{'Leche: 150 x 3,0 / 100 = 4,5 g\nCrema: 0 g\nLeche condensada: 150 x 1,6 / 20 = 12 g\nCacao: 17 x 0,9 / 10 = 1,53 g'}</span>, '18,03 g ≈ 18,0 g'],
              ['Grasas totales', <span key="7" className="whitespace-pre-line">{'Leche: 150 x 0,5 / 100 = 0,75 g\nCrema: 150 x 5,4 / 15 = 54 g\nLeche condensada: 150 x 0,8 / 20 = 6 g\nCacao: 0 g'}</span>, '60,75 g ≈ 60,8 g'],
              ['Grasas saturadas', <span key="8" className="whitespace-pre-line">{'Leche: 150 x 0,3 / 100 = 0,45 g\nCrema: 150 x 3,2 / 15 = 32 g\nLeche condensada: 150 x 0,5 / 20 = 3,75 g\nCacao: 0 g'}</span>, '36,2 g'],
              ['Grasas trans', 'Leche, crema, leche condensada, cacao, café, azúcar y carragenina: no aportan cantidades significativas', '0 g'],
              ['Fibra alimentaria', <span key="9" className="whitespace-pre-line">{'Cacao: 17 x 3 / 10 = 5,1 g\nCarragenina: 0,6 g'}</span>, '5,7 g'],
              ['Sodio', <span key="10" className="whitespace-pre-line">{'Leche: 150 x 49 / 100 = 73,5 mg\nCrema: 150 x 6,2 / 15 = 62 mg\nLeche condensada: 150 x 23 / 20 = 172,5 mg\nCacao: 17 x 26 / 10 = 44,2 mg\nAzúcar: 0 mg\nCafé: no significativo'}</span>, '352,2 mg ≈ 352 mg'],
            ]}
          />
          <DataTable
            head={['Nutriente', 'Cantidad en la preparación total', 'Valor diario de referencia', 'Cuenta', '%VD declarado']}
            rows={[
              ['Valor energético', '1065 kcal', '2000 kcal', '1065 x 100 ÷ 2000 = 53,25%', '53%'],
              ['Valor energético', '4455 kJ', '8400 kJ', '4455 x 100 ÷ 8400 = 53,04%', '53%'],
              ['Carbohidratos', '112,0 g', '300 g', '112,0 x 100 ÷ 300 = 37,33%', '37%'],
              ['Proteínas', '18,0 g', '75 g', '18,0 x 100 ÷ 75 = 24%', '24%'],
              ['Grasas totales', '60,8 g', '55 g', '60,8 x 100 ÷ 55 = 110,55%', '111%'],
              ['Grasas saturadas', '36,2 g', '22 g', '36,2 x 100 ÷ 22 = 164,5%', '165%'],
              ['Fibra alimentaria', '5,7 g', '25 g', '5,7 x 100 ÷ 25 = 22,8%', '23%'],
              ['Sodio', '352 mg', '2400 mg', '352 x 100 ÷ 2400 = 14,66%', '15%'],
            ]}
          />
          
          <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">JUSTIFICACIÓN TABLA 100 GR</H3>
          <DataTable
            head={['Información nutricional', 'Cantidad en receta total, 485,6 g', 'Cuenta para 100 g', 'Resultado exacto', 'Valor declarado cada 100 g']}
            rows={[
              ['Valor energético', '1065 kcal', '1065 x 100 ÷ 485,6', '219,3 kcal', '219 kcal'],
              ['Valor energético', '4455 kJ', '4455 x 100 ÷ 485,6', '917,4 kJ', '917 kJ'],
              ['Carbohidratos', '112,0 g', '112,0 x 100 ÷ 485,6', '23,06 g', '23,1 g'],
              ['Azúcares totales', '110,7 g', '110,7 x 100 ÷ 485,6', '22,80 g', '22,8 g'],
              ['Azúcares añadidos', '84,9 g', '84,9 x 100 ÷ 485,6', '17,48 g', '17,5 g'],
              ['Proteínas', '18,0 g', '18,0 x 100 ÷ 485,6', '3,71 g', '3,7 g'],
              ['Grasas totales', '60,8 g', '60,8 x 100 ÷ 485,6', '12,52 g', '12,5 g'],
              ['Grasas saturadas', '36,2 g', '36,2 x 100 ÷ 485,6', '7,45 g', '7,5 g'],
              ['Grasas trans', '0 g', '0 x 100 ÷ 485,6', '0 g', '0 g'],
              ['Fibra alimentaria', '5,7 g', '5,7 x 100 ÷ 485,6', '1,17 g', '1,2 g'],
              ['Sodio', '352 mg', '352 x 100 ÷ 485,6', '72,49 mg', '73 mg'],
            ]}
          />
          <DataTable
            head={['Nutriente', 'Valor cada 100 g', 'Valor diario de referencia', 'Cuenta', '%VD declarado']}
            rows={[
              ['Valor energético', '219 kcal', '2000 kcal', '219 x 100 ÷ 2000 = 10,95%', '11%'],
              ['Valor energético', '917 kJ', '8400 kJ', '917 x 100 ÷ 8400 = 10,92%', '11%'],
              ['Carbohidratos', '23,1 g', '300 g', '23,1 x 100 ÷ 300 = 7,7%', '8%'],
              ['Azúcares totales', '22,8 g', 'No aplica', 'No se calcula %VD', '-'],
              ['Azúcares añadidos', '17,5 g', 'No aplica', 'No se calcula %VD', '-'],
              ['Proteínas', '3,7 g', '75 g', '3,7 x 100 ÷ 75 = 4,93%', '5%'],
              ['Grasas totales', '12,5 g', '55 g', '12,5 x 100 ÷ 55 = 22,72%', '23%'],
              ['Grasas saturadas', '7,5 g', '22 g', '7,5 x 100 ÷ 22 = 34,09%', '34%'],
              ['Grasas trans', '0 g', 'No aplica', 'No se calcula %VD', '-'],
              ['Fibra alimentaria', '1,2 g', '25 g', '1,2 x 100 ÷ 25 = 4,8%', '6%'],
              ['Sodio', '73 mg', '2400 mg', '73 x 100 ÷ 2400 = 3,04%', '3%'],
            ]}
          />
          
          <H3 className="mt-6 mb-4 font-semibold text-lg text-foreground">JUSTIFICACIÓN SELLOS</H3>
          <DataTable
            head={['Nutriente', 'En receta total', 'Cada 100 g']}
            rows={[
              ['Valor energético', '1065 kcal', '219 kcal'],
              ['Azúcares añadidos', '84,9 g', '17,5 g'],
              ['Grasas totales', '60,8 g', '12,5 g'],
              ['Grasas saturadas', '36,2 g', '7,5 g'],
              ['Sodio', '352 mg', '73 mg'],
            ]}
          />
        </div>
      </AnexoDrawer>
    </>
  )
}

/* ============== 8 · VIDA ÚTIL ============== */
export function VidaUtilContent() {
  return (
    <>
      <Section eyebrow="Punto 8 de la consigna" title="Evaluación teórica de la vida útil">
        <Lead>
          La "vida útil" en el Código Alimentario Argentino (CAA) no tiene un plazo fijo predeterminado: la ley establece que debe ser fijada por el fabricante y justificada técnicamente.
        </Lead>
        <P>
          La vida útil de un alimento corresponde al periodo durante el cual mantiene sus características microbiológicas, fisicoquímicas y sensoriales dentro de los niveles aceptables para el consumo cuando se almacena bajo las condiciones recomendadas. En el caso de nuestro postre lácteo sabor café, la vida útil se estimó considerando la composición, el tratamiento térmico, la presencia de estabilizantes y las condiciones de almacenamiento refrigerado (4 ± 2ºC).
        </P>
        <P>
          El postre contiene elevada actividad de agua y es elaborado a partir de lácteos. Es susceptible al desarrollo de microorganismos si no se mantiene bajo la cadena de frío. Sin embargo, tiene factores que mejoran su estabilidad: el tratamiento térmico reduce la carga microbiana inicial, y el envasado inmediato bajo refrigeración limita el crecimiento de sobrevivientes.
        </P>
        <P>
          Desde el punto de vista fisicoquímico, la carragenina kappa favorece la estabilidad del producto, porque al interactuar con las micelas de la caseína forma una red que inmoviliza el agua y reduce la posibilidad de sinéresis durante el almacenamiento.
        </P>
        <P>
          La elevada concentración de sólidos aportados por la leche condensada y azúcar produce una leve disminución de la actividad del agua, logrando que se reduzca la velocidad de crecimiento microbiano. De todas formas, este efecto no es suficiente para actuar como método de conservación por sí solo.
        </P>
        <P>
          La crema aporta materia grasa que mejora la estabilidad sensorial al proteger parte de los compuestos aromáticos del café frente a pérdida durante el almacenamiento.
        </P>
        
        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Factores que limitan la vida útil</H3>
        <P>La principal limitación del postre es su elevada actividad de agua y su composición láctea. Entre los mecanismos de deterioro más probables se encuentran:</P>
        <List items={[
          'Crecimiento de bacterias',
          'Desarrollo de levaduras y mohos en caso de contaminación post proceso',
          'Pérdida gradual del aroma del café',
          'Ligera sinéresis (hacia el final de la vida útil)',
          'Cambios en textura, consistencia, viscosidad por reorganización parcial de la red estructural',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Estimación teórica de la actividad del agua</H3>
        <P>
          Puede estimarse que el producto presenta un actividad de agua comprendida entre: <strong>0,97 - 0,99</strong>.<br/>
          Nos da como referencia estos valores que el desarrollo microbiano que puede presentarse en el postre son: bacterias, levaduras y mohos. Por lo tanto, el control de temperatura es un principal factor para garantizar la inocuidad del producto.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Estimación de vida útil de MOKKA</H3>
        <P>Teniendo en cuenta:</P>
        <List items={[
          'Tratamiento térmico adecuado',
          'Buenas prácticas de manufactura (BPM)',
          'Envasado higiénico',
          'Almacenamiento continuo entre 2 y 4ºC',
          'Ausencia de contaminación posterior al procesamiento'
        ]} />
        <Callout variant="success" className="font-bold text-lg text-center my-6">
          Se estima una vida útil aproximada de: 20 a 25 días refrigerado
        </Callout>
        <P>
          El postre desarrollado presenta una adecuada estabilidad física gracias a la interacción entre la carragenina kappa y las proteínas de la leche, lo que permite mantener una textura cremosa y homogénea durante el almacenamiento refrigerado. Sin embargo, por su elevada actividad de agua y los productos lácteos, la estabilidad microbiológica depende del tratamiento térmico, cumplir y mantener el postre bajo la cadena de frío y la correcta higiene durante el proceso como en el envasado. Bajo estas condiciones estimamos que la vida útil del postre es de 20 a 25 días a 4ºC, conservando sus características organolépticas y microbiológicas dentro de parámetros aceptables.
        </P>
      </Section>
    </>
  )
}

/* ============== 9 · ANÁLISIS FISICOQUÍMICOS ============== */
export function AnalisisFisicoquimicosContent() {
  return (
    <>
      <Section eyebrow="Punto 9 de la consigna" title="Análisis fisicoquímicos y microbiológicos">
        <P>
          Se realizaron análisis fisicoquímicos y microbiológicos con el objetivo de caracterizar la formulación final y evaluar aspectos relacionados con su estabilidad, calidad e inocuidad.
        </P>
        <P>
          En primer lugar, se analizaron parámetros fisicoquímicos relacionados con las características del producto final, tales como la determinación del pH, el cálculo de la actividad de agua y el cálculo de humedad. Además, se evaluaron de manera cualitativa características como el color, la consistencia y la presencia o ausencia de sinéresis ya que estos aspectos permiten analizar la estabilidad del postre y su aceptación sensorial.
        </P>
        <P>
          Por otro lado, se realizaron análisis microbiológicos con la finalidad de obtener información sobre la inocuidad del producto y su posible comportamiento durante el almacenamiento. En este caso, se evaluó el recuento de aerobios mesófilos, hongos y levaduras y coliformes a 30°C. Estos análisis permiten identificar la presencia de microorganismos que indican contaminación, deterioro o fallas en las condiciones de elaboración y conservación del mismo.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Análisis Fisicoquímicos</H3>
        <P>
          Los análisis fisicoquímicos realizados permiten evaluar distintos aspectos relacionados con la estabilidad, la conservación y las características del postre.<br/>
          Los parámetros a analizar fueron: el cálculo de la actividad de agua, el cálculo de la humedad, la determinación del pH y la evaluación de características como color, consistencia y presencia/ausencia de sinéresis.<br/>
          Por un lado la actividad del agua y la humedad permiten obtener información acerca de la disponibilidad y proporción de agua en el alimento. Por otro lado el pH aporta permite obtener información sobre el grado de acidez del producto; y por último las características cualitativas permiten comparar visual y sensorialmente el comportamiento del postre con aditivo y sin aditivo durante el almacenamiento.<br/>
          A continuación, se presentan los resultados obtenidos para cada parámetro evaluado.
        </P>
        <P>
          <strong>Cálculo de la actividad de agua (aw) y humedad:</strong> COMPLETAR
        </P>
        <P>
          <strong>Determinación de pH:</strong> El pH del producto se determinó mediante una tira indicadora universal. A partir del color obtenido con la escala de referencia se estimó un pH aproximado entre 5 y 6 con mayor cercanía a pH 6.
        </P>
        <P>
          Este valor indica que MOKKA presenta un carácter levemente ácido a casi neutro, lo cual resulta coherente ya que es un postre con base láctea. Desde el punto de vista tecnológico, el pH no es lo suficientemente ácido como para inhibir el crecimiento microbiano y por eso, al ser un postre lácteo necesita refrigeración durante su almacenamiento si o si.
        </P>
        <P>
          Además, un pH cercano a 6 favorece la estabilidad de la base láctea ya que se encuentra alejado del punto isoeléctrico de las caseínas el cual es cercano a 4,6, donde podría producirse mayor desestabilización o precipitación de proteínas.
        </P>
        <P>
          La determinación se considera orientativa ya que la medición fue realizada mediante una tira reactiva y no con un pH-metro, por lo que el valor puede presentar cierto margen de error.
        </P>
        <Figure src="/images/real/9_image1.png" alt="Medición de pH" caption="Figura 1. Medición orientativa del pH del postre MOKKA mediante tira indicadora universal." />
        
        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Evaluación de características: Comparación entre postre con Carragenina Kappa vs sin Carragenina Kappa</H3>
        <P>
          Se realizó una comparación cualitativa entre el postre elaborado con carragenina kappa y una formulación control sin la carragenina kappa. Para ello se evaluaron características como color, consistencia, presencia/ausencia de sinéresis y aspecto general durante el almacenamiento refrigerado.
        </P>
        <P>
          En cuanto al color, ambas muestras presentaron un color marrón oscuro, brillante y homogéneo, característico del cacao y el café en la formulación. Por este motivo no se observaron diferencias visuales en cuanto al color del producto. 
        </P>
        <P>
          Con respecto a la consistencia, al momento de la elaboración ambas presentaban una fluidez similar. Sin embargo, luego de una semana de almacenamiento refrigerado, el postre con carragenina kappa presentó un leve aumento de consistencia, observándose una textura un poco más espesa en comparación con la muestra sin aditivo que se mantuvo igual desde aquel momento de su elaboración.
        </P>
        <P>
          Este comportamiento en el cambio de la consistencia puede deberse a la función tecnológica de la carragenina kappa, ya que este hidrocoloide puede hidratarse durante el proceso térmico y durante el enfriamiento y almacenamiento formar una red estructural que contribuye a la formación de una estructura más estable, y por ende más espesa. Además, al ser un sistema lácteo, la carragenina puede interactuar con las caseínas de la leche y contribuir a aportar un mayor cuerpo.
        </P>
        <P>
          En relación con la sinéresis, no se observó liberación visible de líquido en ninguna de las dos muestras luego de una semana de almacenamiento refrigerado. Durante el período evaluado, ambas formulaciones presentaron estabilidad y no hubo separación de la fase acuosa. La ausencia de sinéresis en la muestra sin aditivo puede deberse al corto tiempo de almacenamiento en el que se lo está evaluando. También puede deberse a la conservación en refrigeración y a la composición del producto, dado que este está compuesto por sólidos lácteos, azúcares, cacao y crema.
        </P>
        <P>
          Si bien no se observaron diferencias en cuanto a sinéresis durante la primera semana, no se descarta que puedan aparecer diferencias con un tiempo de almacenamiento más extendido. Se considera que la muestra que contiene carragenina presentará mayor estabilidad que la que no la tiene, debido a la capacidad que este hidrocoloide tiene para retener agua.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Análisis microbiológicos</H3>
        <P>
          A continuación se detallan los resultados obtenidos en los análisis microbiológicos realizados sobre la formulación final de MOKKA para poder obtener información para la estimación de su vida útil.
        </P>
        <P>
          Los ensayos seleccionados fueron: recuento de aerobias mesófilas, recuento de hongos y levaduras y determinación de coliformes a 30°C. Los aerobios mesófilos brindan información general sobre la carga microbiana total del producto; los hongos y levaduras brindan información sobre el deterioro durante el almacenamiento; y los coliformes a 30°C brindan información sobre la higiene durante la elaboración, manipulación o conservación.
        </P>
        <P>
          Dado que MOKKA no se encuentra definido como una categoría específica dentro del Código Alimentario Argentino, los resultados microbiológicos se interpretan como indicadores generales de calidad e higiene. Es decir, que los resultados obtenidos no son utilizados para establecer un cumplimiento legal directo, sino como una herramienta de evaluación microbiológica del producto.
        </P>
        <P>
          Estos análisis son fundamentales ya que MOKKA es un producto lácteo que es de alta humedad y que debe conservarse refrigerado, por lo que el control microbiológico permite evaluar si las condiciones de elaboración fueron las adecuadas y si el producto mantiene una calidad aceptable durante el período de almacenamiento estimado.
        </P>
        <H4 className="mt-4 mb-2 font-semibold">Criterios orientativos</H4>
        
        <DataTable
          head={['Microorganismo evaluado', 'Límite orientativo', 'Método de ensayo']}
          rows={[
            ['Aerobios mesófilos/g', 'm = 10.000 / M = 100.000', 'ISO 4833-1:2013'],
            ['Coliformes totales/g', 'm = 10 / M = 100', 'FIL 73A:1985'],
            ['Hongos y levaduras', 'm = 50 / M = 100', 'FIL 94B:1990'],
          ]}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <Figure src="/images/real/9_image2.png" alt="Preparación de agar PCA y caldos" caption="Figura 2. Preparación de agar PCA, tubos con caldo LBVB y Agua de peptona al 0,1% listos para ir al autoclave." />
          <Figure src="/images/real/9_image3.png" alt="Siembra de muestra" caption="Figura 3. Siembra de muestra en Agar YGC, Agar PCA y Caldo LBVB." />
          <Figure src="/images/real/9_image4.png" alt="Medios de cultivo sembrados listos para incubar" caption="Figura 4. Medios de cultivo sembrados listos para incubar." />
          <Figure src="/images/real/9_image5.png" alt="Placas PCA dilución 10-1" caption="Figura 5. Placas PCA luego de tiempo de incubación dilución 10-1." />
          <Figure src="/images/real/9_image6.png" alt="Placas PCA dilución 10-2" caption="Figura 6. Placas PCA luego de tiempo de incubación dilución 10-2." />
          <Figure src="/images/real/9_image7.png" alt="Placas PCA dilución 10-3" caption="Figura 7. Placas PCA luego del tiempo de incubación dilución 10-3." />
          <Figure src="/images/real/9_image8.png" alt="Placas YGC dilución 10-2" caption="Figura 8. Placas YGC luego de tiempo de incubación dilución 10-2." />
          <Figure src="/images/real/9_image9.png" alt="Placas YGC dilución 10-3" caption="Figura 9. Placas YGC luego de tiempo de incubación dilución 10-3." />
          <Figure src="/images/real/9_image10.png" alt="Placas de Agar ENDO" caption="Figura 10. Placas de Agar ENDO para confirmación de coliformes." className="sm:col-span-2" />
        </div>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Protocolo de análisis</H3>
        <P>
          A continuación se presenta el protocolo correspondiente a los análisis microbiológicos utilizado para la evaluación de la muestra de postre lácteo refrigerado sabor chocolate.
        </P>
        <List items={[
          'Número de orden: 1',
          'Identificación de la muestra: postre lácteo refrigerado sabor chocolate y café.',
          'Características y estado de la muestra: Producto semi sólido, color homogéneo, aroma característico, sin presencia visible de cuerpos extraños. Envase de PS 6 (poliestireno).',
          'Recepción de la muestra: 11/06/2026.',
          'Realización del ensayo: 11/06/2026.',
          'Fecha de finalización: 18/06/2026.',
        ]} />
        
        <H4 className="mt-4 mb-2 font-semibold">Análisis microbiológico:</H4>
        <List items={[
          'Metodología ISO 4833-1:2013',
          'Metodología FIL 73A:1985',
          'Metodología FIL 94B:1990'
        ]} />

        <DataTable
          head={['Determinación microbiológica', 'Resultado del análisis', 'Límite microbiológico']}
          rows={[
            ['Recuento de bacterias mesófilas aerobias UFC/g', '2,5 x 10^4 UFC/g', 'm = 10.000 / M = 100.000'],
            ['Recuento de coliformes UFC /g', '93 NMP/g', 'm = 10 / M = 100'],
            ['Recuento de hongos y levaduras UFC/g', '< 1000 UFC/g', 'm = 50 / M = 100'],
          ]}
        />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Conclusiones</H3>
        <P>
          Los resultados del recuento de aerobios mesófilos y coliformes no superaron los valores máximos orientativos utilizados como referencia. Sin embargo, para hongos y levaduras no se puede establecer una conclusión definitiva de cumplimiento, ya que el resultado quedó por debajo del rango contable pero con un límite de cuantificación demasiado superior al valor máximo de referencia. Debido a que este límite de cuantificación es superior al valor máximo de referencia, no es posible determinar con certeza si el producto cumple con dicho criterio (&lt;1000 es un rango demasiado amplio, pueden entrar valores que cumplen y valores que no cumplen).
        </P>
        <P>
          La muestra de “Postre lácteo refrigerado sabor chocolate y café” del lote 1 no puede considerarse conforme de manera concluyente con los límites microbiológicos establecidos por el estándar interno utilizado como referencia.
        </P>
        <P>
          Se concluye que la muestra presenta resultados aceptables para bacterias mesófilas aerobias y coliformes pero no permite establecer conformidad microbiológica total respecto del estándar interno, debido a la imposibilidad de confirmar el cumplimiento en el recuento de hongos y levaduras.
        </P>
        <Callout variant="info" className="mt-4">
          Nota: Los límites microbiológicos de este informe corresponden al estándar interno.
        </Callout>
        
        <AnexoDrawer title="Ver Cálculos Omitidos">
          <h3>Cálculos para Recuentos</h3>
          <div className="space-y-6 mt-6">
            <Figure src="/images/real/9_image11.png" alt="Cálculo Recuento 1" ratio="aspect-auto" />
            <Figure src="/images/real/9_image12.png" alt="Cálculo Recuento 2" ratio="aspect-auto" />
            <Figure src="/images/real/9_image13.png" alt="Cálculo Recuento 3" ratio="aspect-auto" />
          </div>
        </AnexoDrawer>
      </Section>
    </>
  )
}

/* ============== 10 · EVALUACIÓN SENSORIAL ============== */
export function EvaluacionSensorialContent() {
  return (
    <>
      <Section eyebrow="Punto 10 de la consigna" title="Evaluación sensorial del producto">
        <P>
          Se plantea mediante la implementación de una prueba hedónica de aceptación, aplicada a consumidores no entrenados en distintas etapas del desarrollo del producto. Esta metodología permite relevar el nivel de aceptabilidad de cada formulación y analizar la percepción de sus atributos organolépticos, tales como sabor, aroma, color, textura, cremosidad, dulzor, amargor e intensidad del café.
        </P>
        <P>
          Durante el proceso de desarrollo, las muestras evaluadas correspondieron a diversas instancias de formulación. De esta manera, la evaluación sensorial no se limitó únicamente al producto terminado, sino que funcionó como una herramienta de seguimiento para identificar aspectos a mejorar y orientar las decisiones de reformulación.
        </P>
        <P>
          El grado de aceptación será registrado a través de una escala estructurada de nueve puntos, cuyos extremos se encuentran representados por las categorías "me disgusta muchísimo" y "me gusta muchísimo". La cual permite cuantificar la respuesta afectiva del consumidor frente a cada muestra y establecer comparaciones entre las distintas versiones desarrolladas. Asimismo, se incorporará un apartado destinado al registro de observaciones cualitativas, en el que los participantes podrán expresar apreciaciones vinculadas con el balance de dulzor, la percepción del amargor, la intensidad aromática del café, la cremosidad, la firmeza, la apariencia visual o cualquier otro atributo sensorial considerado relevante.
        </P>
        <P>
          En conclusión, la evaluación sensorial constituye una herramienta bisagra para sustentar la selección de la formulación final, dado que permite vincular las decisiones tecnológicas adoptadas con la respuesta perceptiva del consumidor.
        </P>

        <H3 className="mt-8 mb-4 font-semibold text-lg text-primary">Comentarios - Primera Muestra</H3>
        <List items={[
          '“La textura no me resultó del todo homogénea, ya que durante la degustación se percibieron algunos grumos. Esto hizo que la sensación en boca no fuera tan cremosa como esperaba.”',
          '“El color me pareció demasiado claro y poco representativo del sabor café. Visualmente no anticipa un producto tipo moka o tiramisú.”',
          '“Me gustó que no fuera excesivamente dulce, pero le agregaría mayor intensidad de café para equilibrar mejor el perfil de sabor.”',
          '“La apariencia visual no me llamó demasiado la atención. Al tener un color tan pálido, no transmite la idea de un postre con café.”'
        ]} />

        <H3 className="mt-8 mb-4 font-semibold text-lg text-primary">Comentarios - Producto Final</H3>
        <List items={[
          '“El producto final me pareció mucho más equilibrado que la primera muestra. Se percibe claramente la combinación entre café y cacao, sin que ninguno resulte excesivamente invasivo.”',
          '“El color resulta mucho más atractivo y se relaciona mejor con el perfil de sabor del producto.”',
          '“La cremosidad es uno de los aspectos más destacados del producto final. La consistencia resulta firme pero no gelatinosa.”',
          '“El perfil sensorial está mejor definido que en las muestras anteriores. Ahora el producto se identifica claramente como un postre tipo moka.”',
          '“En general, el producto final me resultó atractivo y con buena aceptación.”'
        ]} />
        
        <div className="mt-8">
          <Figure src="/images/real/10_image1.png" alt="Gráfico de radar sensorial" caption="Figura 11. Gráfico de radar con los atributos evaluados en la prueba hedónica." ratio="aspect-square" className="max-w-md mx-auto" />
        </div>
      </Section>
    </>
  )
}

/* ============== 11 · ESTRUCTURA DE COSTOS ============== */
export function EstructuraCostosContent() {
  return (
    <>
      <Section eyebrow="Punto 11 de la consigna" title="Estructura de costos y precio de venta">
        <P>
          Para la estimación de costos se consideraron los precios minoristas de las materias primas adquiridas para la elaboración del producto. A partir de estos valores, se calculó el costo proporcional de cada ingrediente según la cantidad utilizada en la receta base de la formulación final.
        </P>
        <P>
          La receta base presentó un peso total aproximado de 485,6 g, lo que equivale a aproximadamente 5 porciones individuales de 90 g. El costo total de materias primas para esta receta fue de <strong>$5378,17</strong>. El costo estimado por unidad de 90 g es de aproximadamente <strong>$1075</strong>.
        </P>
        <P>
          Para estimar el precio de venta, se consideró que el costo de las materias primas no representa el costo total del producto, ya que también deben tenerse en cuenta otros gastos como el envase, la etiqueta, la energía utilizada en la producción, la mano de obra, el almacenamiento refrigerado y posibles pérdidas (costos de no calidad). Por este motivo, se aplicó un incremento estimado del 30% sobre el costo unitario de materias primas y luego un margen de ganancia del 40%. Como resultado de este cálculo, el precio de venta estimado para una unidad de 90 g fue de aproximadamente <strong>$2333</strong>.
        </P>
        <Callout variant="info">
          El valor del precio de venta corresponde a una estimación realizada con precios minoristas. En una producción a mayor escala, el costo unitario podría disminuir debido a la compra de materias primas a precios mayoristas y al acceso a proveedores industriales.
        </Callout>

        <AnexoDrawer title="Ver Cálculos de Costos">
          <h3>Cálculos de Estructura de Costos</h3>
          <div className="space-y-6 mt-6">
            <Figure src="/images/real/11_image1.png" alt="Estructura Costos 1" ratio="aspect-auto" />
            <Figure src="/images/real/11_image2.png" alt="Estructura Costos 2" ratio="aspect-auto" />
            <Figure src="/images/real/11_image3.png" alt="Estructura Costos 3" ratio="aspect-auto" />
          </div>
        </AnexoDrawer>
      </Section>
    </>
  )
}

/* ============== 12 · MARCO REGULATORIO ============== */
export function MarcoRegulatorioContent() {
  return (
    <>
      <Section eyebrow="Punto 12 de la consigna" title="Marco regulatorio">
        <P>
          De acuerdo a los valores nutricionales presentados y las normativas vigentes del Código Alimentario Argentino (CAA), "MOKKA" queda encuadrado bajo dos marcos normativos principales para su comercialización: el Capítulo V del CAA (Rotulado General y Nutricional Obligatorio) y la Ley 27.624 de Promoción de la Alimentación Saludable (Ley de Etiquetado Frontal).
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">1) Denominación de venta (Artículo 579, Cap VIII)</H3>
        <P>MOKKA se encuadra bajo el nuevo Artículo 579 del Capítulo VIII (Alimentos Lácteos), el cual regula de forma específica los postres lácteos.</P>
        <List items={[
          'Requisito legal: para usar este nombre, el contenido de ingredientes de origen lácteo (en este caso, leche descremada, crema y leche condensada) debe ser el mínimo del 51% (m/m) de la totalidad del postre listo para el consumo.',
          'Nombre comercial exacto en el rótulo: al contener agregados opcionales, la denominación de venta oficial (con igual tamaño de letra y visibilidad) deberá ser: “Postre lácteo con cacao y café” (o denominaciones similares aprobadas por la autoridad sanitaria)',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">2) Marco de la Ley 27.624: Sellos de Advertencia (Etiquetado Frontal)</H3>
        <P>
          MOKKA es un producto procesado con nutrientes añadidos (azúcares, grasas), se le debe aplicar el sistema de Perfil de Nutrientes de la Organización Panamericana de la Salud (OPS) adoptado por regulación de la ANMAT.
        </P>
        <P>
          Evaluando los valores cada 100 g (221 kcal), el producto supera los límites máximos permitidos: Sello <strong>“EXCESO EN AZÚCARES”</strong>, el límite exige que las calorías provenientes de azúcares añadidos sean menores al 10% del total de energía. En MOKKA, los 17,6 g de azúcar aportan 70,4 kcal (17,6 x 4 kcal) lo que representa el 31.8% de las calorías totales. Luego sello <strong>“EXCESO EN GRASAS TOTALES”</strong>, el límite es el 30% de las calorías totales. Los 12,6 g de grasas en MOKKA aportan 113,4 kcal (12,6 x 9 kcal), equivalentes al 51,3% del valor energético.
        </P>
        <P>
          Sello <strong>“EXCESO EN GRASAS SATURADAS”</strong>, el límite es el 10% de las calorías totales. Los 7,5 g de grasas saturadas aportan 67,5 kcal (7,5 x 9 kcal), representando el 30,5% de la energía del postre.
        </P>
        <P>
          El sello <strong>“EXCESO EN CALORÍAS”</strong>, para productos sólidos, se aplica si supera las 275 kcal cada 100 g, MOKKA tiene 221 kcal cada 100 g por lo que este sello NO lo lleva.
        </P>
        <P>
          Consecuencia legal: al tener tres sellos, la normativa prohíbe incluir en el envase personajes infantiles, animaciones, promesas de regalos o leyendas de declaraciones nutricionales complementarias (como “fuente de energía” o similares).
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">3) Marco del Capítulo V del CAA: Rotulado obligatorio</H3>
        <P>
          Se debe adaptar el cuadro técnico según las exigencias de la Dirección de Alimentos: Estructura del cuadro: es obligatorio declarar la información nutricional por porción en gramos y expresar el porcentaje de Valor Diario (%VD) en base a una dieta de 2000 kcal.
        </P>
        <P>
          Según el artículo 235 séptimo del CAA, se debe añadir la frase en negrita: “Contiene…/puede contener::” detallando si lleva derivados de leche, huevo, trigo, frutos secos o maní. En el caso del postre se añadió:
          <br/><strong>“CONTIENE DERIVADOS DE LECHE”</strong>
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">4) Lista de Ingredientes obligatoria (Capítulo V)</H3>
        <List items={[
          'Orden sugerido (según la formulación realizada): leche descremada pasteurizada, crema de leche, leche condensada azucarada, polvo para preparar bebida analcoholica a base de cacao y azúcar, azúcar, café soluble, INS 407 (Carragenina K)',
          'Declaración del aditivo: la carragenina kappa actúa como gelificante o espesante. El CAA obliga a colocar primero la función tecnológica principal seguida del nombre del aditivo o de su número internacional (INS 407)',
        ]} />

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">5) Marco de Definición del Producto (Capítulo de Alimentos Dulces)</H3>
        <P>
          MOKKA deberá clasificarse formalmente ante la autoridad sanitaria (como el INAL o bromatología provincial) bajo las denominaciones específicas del CAA: Si es base láctea y listo para consumir, se encuadra a las normativas específicas de Postres Lácteos. Si se comercializa congelado, le corresponden las exigencias de estabilidad del capítulo de Helados y Postres Congelados.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Resumen del marco aplicable</H3>
        <P>
          El postre lácteo MOKKA se esta comprendido dentro del código alimentario (CAA), principalmente en el Capítulo V, correspondiente al rotulado general y nutricional, y en la Ley Nº. 27.642 de promoción de la alimentación saludable (Etiquetado Frontal).
        </P>
        <P>
          En base a la tabla nutricional que obtuvimos, el producto supera los límites establecidos de azúcares añadidos, grasas totales y grasas saturadas, por esto debe incorporar los sellos de advertencia “Exceso en Azúcares”, “Exceso en Grasas Totales” y “Exceso en Grasas Saturadas”. En cambio, no corresponde el sello “Exceso en Calorías” ni “Exceso en Sodio”, ya que los valores obtenidos se encuentran por debajo de los límites fijados por la normativa.
        </P>
        <P>
          Como consecuencia de portar sellos de advertencia, el envase no podrá hacer regalos promocionales ni declaraciones complementarias que puedan incentivar al consumidor.
        </P>
        <P>
          En cuanto al rotulado nutricional, el CAA exige declarar la información por porción, incluyendo el porcentaje de Valor Diario (%VD), además de informar obligatoriamente el valor energético, carbohidratos, proteínas, grasas totales, grasas saturadas, grasas trans, fibra alimentaria y sodio. Asimismo, el rótulo deberá incluir la declaración de alérgenos correspondiente, indicando la presencia de derivados de leche, de acuerdo con la normativa vigente.
        </P>
        <P>
          Por su formulación y forma de consumo, el producto se clasifica como un “postre lácteo listo para consumir”, debiendo cumplir con los requisitos establecidos por el Código Alimentario Argentino para este tipo de alimentos.
        </P>

        <H3 className="mt-6 mb-4 font-semibold text-lg text-primary">Marco normativo "Libre de Gluten" (Capítulo XVII)</H3>
        <P>
          MOKKA, es Libre de Gluten, el marco normativo para los productos sin gluten en Argentina está establecido en el Capítulo XVII (Alimentos de Régimen Dietéticos) del Código Alimentario Argentino (CAA), específicamente en los Artículo 1383. Dispone un marco técnico obligatorio extremadamente estricto para evitar riesgos de salud:
        </P>
        <List items={[
          'Definición de Alimento Libre de Gluten (ALG): son aquellos preparados únicamente con ingredientes que naturalmente no contienen gluten o que han sido sometidos a un proceso tecnológico para removerlo.',
          '1) Límite legal de Gluten (Límite Máximo): la normativa argentina establece que para portar la declaración “Libre de Gluten”, el alimento listo para el consumo no debe superar el límite de 10 mg de gluten por kilogramo de producto.',
          '2) Clasificación de símbolos en góndola: Sello “Sin TACC”: se aplica en nuestro postre, ya que es exclusivo para alimentos elaborados con ingredientes que en su origen natural no contienen gluten.',
        ]} />
        <P className="mt-4 font-medium">3) Requisitos para el registro y aprobación:</P>
        <List items={[
          'Programa de Buenas Prácticas de Manufactura (BPM): un documento técnico detallado que describa cómo se manipula los ingredientes para asegurar que NO exista contaminación cruzada.',
          'Análisis oficial de laboratorio: se presenta un análisis cuantitativo (generalmente mediante el método ELISA) provistos por un organismo oficial o laboratorio incorporado a la Red Nacional de Laboratorios Oficiales de Alimentos (RENALOA).',
          'Materias primas certificadas: demostrar que la carragenina, el cacao, café y los productos lácteos están inscriptos previamente en el listado integrado de Alimentos Libres de Gluten (ALG) de ANMAT.',
        ]} />
        <P className="mt-4">
          Finalmente, para asegurar el cumplimiento de este marco, las empresas elaboradoras e importadoras deben inscribir sus productos y presentar análisis que avalen la condición de libre de gluten ante la autoridad sanitaria correspondiente.
        </P>
      </Section>
    </>
  )
}
