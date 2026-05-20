'use client'

import { useState } from 'react'
import { calcAll, TaxResult } from '@/lib/tax-calculator'

const fmt = (n: number) =>
  new Intl.NumberFormat('ro-RO', { maximumFractionDigits: 0 }).format(Math.abs(n)) + ' Lei'

function ResultCard({ result }: { result: TaxResult }) {
  const rows = result.breakdown.filter(r => r.label !== 'Total taxe' && r.label !== 'Suma facturată lunar')
  const total = result.breakdown.find(r => r.label === 'Total taxe')

  const subLabel = result.label === 'SRL Micro'
    ? 'salariu + dividende'
    : result.label === 'SRL Profit'
      ? 'dividende'
      : null

  return (
    <div className={`card${result.isBest ? ' feat' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div>
          <div className="t-eyebrow" style={{ marginBottom: 8 }}>
            <span className="dot" />
            {result.isBest ? '🏆 ' : ''}{result.label}
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
              {row.value < 0 ? '− ' : ''}{fmt(row.value)}
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

      {/* PFA solo.ro link */}
      {result.label === 'PFA' && (
        <a href="https://solo.ro" target="_blank" rel="noopener" className="btn ghost" style={{ width: '100%', marginTop: 8 }}>
          Deschide PFA pe solo.ro →
        </a>
      )}

      {/* Footer — bani în mână */}
      <div className="calc-card-footer">
        <span className="t14">Bani în mână</span>
        <div style={{ textAlign: 'right' }}>
          <span
            className="t-h2"
            style={{
              fontVariantNumeric: 'tabular-nums',
              color: result.isBest ? 'var(--c-accent)' : 'var(--c-ink)',
              display: 'block',
            }}
          >
            {fmt(result.baniInMana)}
          </span>
          {subLabel && (
            <span className="t14" style={{ color: 'var(--c-fog)' }}>{subLabel}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function TaxCalculator() {
  const [venitRaw, setVenitRaw] = useState('10.000')
  const [venit, setVenit] = useState(10000)
  const [cheltuieli, setCheltuieli] = useState(0.20)
  const [showDetails, setShowDetails] = useState(false)

  const handleVenitChange = (val: string) => {
    setVenitRaw(val)
    const normalized = val.replace(/\./g, '').replace(',', '.')
    const parsed = parseFloat(normalized)
    if (!isNaN(parsed) && parsed > 0) {
      setVenit(parsed)
    }
  }

  const results = calcAll(venit, cheltuieli)
  const sorted = [...results].sort((a, b) => b.baniInMana - a.baniInMana)
  const winner = sorted[0]
  const second = sorted[1]
  const diff = winner.baniInMana - second.baniInMana

  const toggleDetails = () => setShowDetails(prev => !prev)

  return (
    <div>
      {/* Input card */}
      <div className="card tonal" style={{ marginBottom: 32 }}>
        <div className="calc-inputs">
          {/* Venit text input */}
          <div className="calc-slider-row">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="t-eyebrow" style={{ flex: '0 0 auto' }}>Venit lunar facturat</span>
              <div style={{
                flex: 1,
                border: '1px solid var(--c-rule-card)',
                borderRadius: 'var(--r-md)',
                padding: '8px 12px',
                background: 'var(--c-white)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="ex: 10.500"
                  value={venitRaw}
                  onChange={e => handleVenitChange(e.target.value)}
                  className="t16"
                  style={{ width: '100%', border: 'none', outline: 'none', background: 'transparent' }}
                  aria-label="Venit lunar facturat"
                />
                <span className="t16" style={{ color: 'var(--c-fog)', whiteSpace: 'nowrap' }}>Lei</span>
              </div>
            </div>
            <p className="t14" style={{ color: 'var(--c-fog)', marginTop: 4 }}>
              Introdu suma brută, facturată, înainte de taxe
            </p>
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

      {/* Concluzie block */}
      <div className="card tonal" style={{ marginTop: 32 }}>
        <div className="t-eyebrow" style={{ marginBottom: 12 }}>
          <span className="dot" />
          Concluzie
        </div>
        <p className="t16" style={{ marginBottom: 16 }}>
          La venitul de <span style={{ fontVariantNumeric: 'tabular-nums' }}>{fmt(venit)}</span>,{' '}
          <strong>{winner.label}</strong> este mai avantajos cu{' '}
          <span style={{ fontVariantNumeric: 'tabular-nums' }}>{fmt(diff)}</span> față de{' '}
          <strong>{second.label}</strong>.
        </p>
        <button className="btn ghost sm" onClick={toggleDetails}>
          Detalii despre calcule {showDetails ? '↑' : '↓'}
        </button>
        {showDetails && (
          <p className="t14" style={{ color: 'var(--c-fog)', marginTop: 12 }}>
            Calculele sunt bazate pe legislația fiscală în vigoare în 2026. PFA: CAS 25%, CASS 10%,
            impozit venit 10%. SRL Micro: impozit 1% pe venituri, dividende 16%, CASS plafonată.
            SRL Profit: impozit profit 16%, dividende 16%, CASS plafonată.
          </p>
        )}
      </div>
    </div>
  )
}
