import type { ComponentType } from 'react'
import {
  ConceptoContent,
  TargetContent,
  FormulacionesContent,
  MateriasPrimasContent,
  DesarrolloContent,
  VentajasContent,
} from './part-1'
import {
  TablaNutricionalContent,
  VidaUtilContent,
  AnalisisFisicoquimicosContent,
  EvaluacionSensorialContent,
  EstructuraCostosContent,
  MarcoRegulatorioContent,
} from './part-2'

export const contentRegistry: Record<string, ComponentType> = {
  concepto: ConceptoContent,
  'target-market': TargetContent,
  formulaciones: FormulacionesContent,
  'materias-primas': MateriasPrimasContent,
  desarrollo: DesarrolloContent,
  'ventajas-desventajas': VentajasContent,
  'tabla-nutricional': TablaNutricionalContent,
  'vida-util': VidaUtilContent,
  analisis: AnalisisFisicoquimicosContent,
  sensorial: EvaluacionSensorialContent,
  costos: EstructuraCostosContent,
  'marco-regulatorio': MarcoRegulatorioContent,
}
