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
  NutricionalContent,
  VidaUtilContent,
  AnalisisContent,
  SensorialContent,
  CostosContent,
  RegulatorioContent,
} from './part-2'

export const contentRegistry: Record<string, ComponentType> = {
  concepto: ConceptoContent,
  'target-market': TargetContent,
  formulaciones: FormulacionesContent,
  'materias-primas': MateriasPrimasContent,
  desarrollo: DesarrolloContent,
  'ventajas-desventajas': VentajasContent,
  'tabla-nutricional': NutricionalContent,
  'vida-util': VidaUtilContent,
  analisis: AnalisisContent,
  sensorial: SensorialContent,
  costos: CostosContent,
  'marco-regulatorio': RegulatorioContent,
}
