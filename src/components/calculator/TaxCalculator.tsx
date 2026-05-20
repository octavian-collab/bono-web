'use client'

import { useState } from 'react'
import { calcAll, TaxResult } from '@/lib/tax-calculator'

const fmt = (n: number) =>
  new Intl.NumberFormat('ro-RO', { maximumFractionDigits: 0 }).format(Math.abs(n)) + ' Lei'

function ResultCard({ result }: { result: TaxResult }) {
  const rows = result.breakdown.filter(r => r.label !== 'Total taxe' && r.label !== 'Suma facturată lunar')
  const total = result.breakdown.find(r => r.label === 'Total taxe')

  return (
    <div className={`card${result.isBest ? ' feat' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div className="t-eyebrow" style={{ marginBottom: 8 }}>
            <span className="dot" />
            {result.label}
          </div>
          <p className="t18" style={{ fontVariantNumeric: 'tabular-nums' }}>
            {fmt(result.venBrut)}
          </p>
        </div>
        {result.isBest && (
          <span className="badge success">Cel mai avantajos</span>
        )}
      </div>

      {/* Breakdown rows */}
      <div style={{ flex: 1 }}>
        {rows.map((row) => (
          <div key={row.label} className="calc-row">
            <span className="t16" style={{ color: 'var(--c-fog)' }}>{row.label}</span>
            <span
              className="t16"
              style={{
                fontVariantNumeric: 'tabular-nums',
                color: row.value >= 0 ? 'var(--c-success)' : 'var(--c-ink)',
                whiteSpace: 'nowrap',
              }}
            >
              {row.value < 0 ? '− ' : ''}{fmt(row.value)}
            </span>
          </div>
        ))}

        {/* Total divider row */}
        {total && (
          <div className="calc-row" style={{ borderTop: '1px solid var(--c-rule)', borderBottom: 'none', marginTop: 4, paddingTop: 12 }}>
            <span className="t16" style={{ fontWeight: 600 }}>Total taxe</span>
            <span
              className="t16"
              style={{
                fontVariantNumeric: 'tabular-nums',
                fontWeight: 600,
                color: 'var(--c-ink)',
                whiteSpace: 'nowrap',
              }}
            >
              −{fmt(result.totalTaxe)}
            </span>
          </div>
        )}
      </div>

      {/* Footer — bani în mână */}
      <div className="calc-card-footer">
        <span className="t14">Bani în mână</span>
        <span
          className="t-h2"
          style={{
            fontVariantNumeric: 'tabular-nums',
            color: result.isBest ? 'var(--c-accent)' : 'var(--c-ink)',
          }}
        >
          {fmt(result.baniInMana)}
        </span>
      </div>
    </div>
  )
}

export default function TaxCalculator() {
  const [venit, setVenit] = useState(10000)
  const [cheltuieli, setCheltuieli] = useState(0.20)

  const results = calcAll(venit, cheltuieli)

  return (
    <div>
      {/* Input card */}
      <div className="card tonal" style={{ marginBottom: 32 }}>
        <div className="calc-inputs">
          {/* Venit slider */}
          <div className="calc-slider-row">
            <div className="calc-slider-val">
              <span className="t-eyebrow">Venit lunar facturat</span>
              <span className="t18" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {fmt(venit)}
              </span>
            </div>
            <div className="calc-slider">
              <input
                type="range"
                min={1000}
                max={80000}
                step={500}
                value={venit}
                onChange={(e) => setVenit(Number(e.target.value))}
                aria-label="Venit lunar facturat"
                style={{ accentColor: 'var(--c-accent)' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="t14">1.000 Lei</span>
              <span className="t14">80.000 Lei</span>
            </div>
          </div>

          {/* Cheltuieli slider */}
          <div className="calc-slider-row">
            <div className="calc-slider-val">
              <span className="t-eyebrow">Cheltuieli deductibile</span>
              <span className="t18" style={{ fontVariantNumeric: 'tabular-nums' }}>
                {Math.round(cheltuieli * 100)}%
              </span>
            </div>
            <div className="calc-slider">
              <input
                type="range"
                min={0}
                max={0.60}
                step={0.05}
                value={cheltuieli}
                onChange={(e) => setCheltuieli(Number(e.target.value))}
                aria-label="Cheltuieli deductibile"
                style={{ accentColor: 'var(--c-accent)' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span className="t14">0%</span>
              <span className="t14">60%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results grid */}
      <div className="ld-grid-3">
        {results.map((result) => (
          <ResultCard key={result.label} result={result} />
        ))}
      </div>
    </div>
  )
}
