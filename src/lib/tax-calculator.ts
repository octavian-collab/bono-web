export const SALARIU_MINIM_H1 = 4050   // Jan–Jun 2026
export const SALARIU_MINIM_H2 = 4325   // Jul–Dec 2026
export const SALARIU_MINIM_MED = (SALARIU_MINIM_H1 + SALARIU_MINIM_H2) / 2  // 4187.5
export const CAM_RATE = 0.0225          // employer contribution
export const PRAG_MICRO_EUR = 100_000
export const EUR_RON = 5.0

export interface TaxResult {
  label: string
  venBrut: number
  breakdown: { label: string; value: number }[]
  totalTaxe: number
  baniInMana: number
  isBest: boolean
}

export function calcPFA(venBrut: number, cheltuieliRate: number): TaxResult {
  const venNet = venBrut * (1 - cheltuieliRate)
  const venNetAnual = venNet * 12

  // CAS 25% — dacă depășești 12 salarii minime, plafonat la 24
  const CAS_THRESHOLD = 12 * SALARIU_MINIM_H1
  const CAS_CAP = 24 * SALARIU_MINIM_H1
  const cas = venNetAnual > CAS_THRESHOLD
    ? Math.min(venNetAnual, CAS_CAP) * 0.25
    : 0
  const casLunar = cas / 12

  // CASS 10% — plafonat la 72 salarii minime
  const CASS_CAP = 72 * SALARIU_MINIM_H1
  const cass = Math.min(venNetAnual, CASS_CAP) * 0.10
  const cassLunar = cass / 12

  // Impozit venit 10% pe baza redusă
  const bazaImpozit = Math.max(0, venNetAnual - cas - cass)
  const impozit = bazaImpozit * 0.10
  const impozitLunar = impozit / 12

  const totalTaxe = casLunar + cassLunar + impozitLunar
  const baniInMana = venBrut - totalTaxe

  return {
    label: 'PFA',
    venBrut,
    breakdown: [
      { label: 'Suma facturată lunar', value: venBrut },
      { label: 'CAS (pensie 25%)', value: -casLunar },
      { label: 'CASS (sănătate 10%)', value: -cassLunar },
      { label: 'Impozit venit (10%)', value: -impozitLunar },
      { label: 'Total taxe', value: -totalTaxe },
    ],
    totalTaxe,
    baniInMana,
    isBest: false,
  }
}

export function calcSRLMicro(venBrut: number, cheltuieliRate: number): TaxResult {
  // Micro tax: 1% on revenue (cheltuieli don't affect micro tax)
  const impozitMicro = venBrut * 0.01

  // Mandatory minimum salary employee
  const salariuGross = SALARIU_MINIM_MED
  const cam = salariuGross * CAM_RATE
  const salariuCostTotal = salariuGross + cam  // full cost to company
  // Taxes on salary (CAS 25% + CASS 10% + CAM 2.25%) — min wage is income-tax exempt
  const taxeSalariale = salariuGross * (0.25 + 0.10 + CAM_RATE)

  // Distributable profit
  const profitBrut = venBrut - impozitMicro - salariuCostTotal
  const profitBrutAnual = profitBrut * 12

  // CASS on dividends — capped at 12 × salariu minim annual
  const CASS_DIV_CAP = 12 * SALARIU_MINIM_H1  // 48,600/year
  const cassDiv = profitBrutAnual >= CASS_DIV_CAP
    ? (CASS_DIV_CAP * 0.10) / 12
    : profitBrutAnual >= 6 * SALARIU_MINIM_H1
      ? (profitBrutAnual * 0.10) / 12
      : 0

  // Dividend tax 16% on gross profit (CASS computed separately)
  const impozitDiv = profitBrut * 0.16

  const totalTaxe = impozitMicro + taxeSalariale + cassDiv + impozitDiv
  const baniInMana = venBrut - totalTaxe

  return {
    label: 'SRL Micro',
    venBrut,
    breakdown: [
      { label: 'Suma facturată lunar', value: venBrut },
      { label: 'Impozit pe venit (1%)', value: -impozitMicro },
      { label: 'Impozit pe dividende (16%)', value: -impozitDiv },
      { label: 'CASS (dividende)', value: -cassDiv },
      { label: 'Taxe salariale', value: -taxeSalariale },
      { label: 'Total taxe', value: -totalTaxe },
    ],
    totalTaxe,
    baniInMana,
    isBest: false,
  }
}

export function calcSRLProfit(venBrut: number, cheltuieliRate: number): TaxResult {
  const venNetLunar = venBrut * (1 - cheltuieliRate)

  // Profit tax 16%
  const impozitProfit = venNetLunar * 0.16
  const profitDupaTax = venNetLunar - impozitProfit

  const profitAnual = profitDupaTax * 12

  // CASS on dividends — same cap logic
  const CASS_DIV_CAP = 12 * SALARIU_MINIM_H1
  const cassDiv = profitAnual >= CASS_DIV_CAP
    ? (CASS_DIV_CAP * 0.10) / 12
    : profitAnual >= 6 * SALARIU_MINIM_H1
      ? (profitAnual * 0.10) / 12
      : 0

  // Dividend tax 16% on profit after income tax
  const impozitDiv = profitDupaTax * 0.16

  const totalTaxe = impozitProfit + impozitDiv + cassDiv
  const baniInMana = venBrut - totalTaxe

  return {
    label: 'SRL Profit',
    venBrut,
    breakdown: [
      { label: 'Suma facturată lunar', value: venBrut },
      { label: 'Impozit pe profit (16%)', value: -impozitProfit },
      { label: 'Impozit pe dividende (16%)', value: -impozitDiv },
      { label: 'CASS (dividende)', value: -cassDiv },
      { label: 'Total taxe', value: -totalTaxe },
    ],
    totalTaxe,
    baniInMana,
    isBest: false,
  }
}

export function calcAll(venBrut: number, cheltuieliRate: number): TaxResult[] {
  const results = [
    calcPFA(venBrut, cheltuieliRate),
    calcSRLMicro(venBrut, cheltuieliRate),
    calcSRLProfit(venBrut, cheltuieliRate),
  ]
  const best = Math.max(...results.map(r => r.baniInMana))
  return results.map(r => ({ ...r, isBest: r.baniInMana === best }))
}
