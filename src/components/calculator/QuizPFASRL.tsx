'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  text: string
  options: { label: string; srl: number; pfa: number }[]
}

const QUESTIONS: Question[] = [
  {
    text: 'Câți angajați estimezi că vei avea în 12 luni?',
    options: [
      { label: 'Lucrez singur', srl: 0, pfa: 1 },
      { label: '1–3 angajați', srl: 0, pfa: 0 },
      { label: 'Mai mult de 3 angajați', srl: 2, pfa: 0 },
    ],
  },
  {
    text: 'Ce tip de clienți ai în principal?',
    options: [
      { label: 'Persoane fizice (B2C)', srl: 0, pfa: 1 },
      { label: 'Firme (B2B)', srl: 1, pfa: 0 },
      { label: 'Ambele', srl: 0, pfa: 0 },
    ],
  },
  {
    text: 'Cum vrei să accesezi banii câștigați?',
    options: [
      { label: 'Imediat, fără restricții', srl: 0, pfa: 2 },
      { label: 'Prin salariu și dividende', srl: 2, pfa: 0 },
      { label: 'Nu contează, vreau optimizare fiscală', srl: 1, pfa: 0 },
    ],
  },
  {
    text: 'Plănuiești să scalezi sau să atragi investiții?',
    options: [
      { label: 'Nu, rămân la scară mică', srl: 0, pfa: 1 },
      { label: 'Poate în viitor', srl: 0, pfa: 0 },
      { label: 'Da, vreau să cresc', srl: 2, pfa: 0 },
    ],
  },
  {
    text: 'Câte activități (coduri CAEN) ai sau vrei?',
    options: [
      { label: 'Una sau două', srl: 0, pfa: 1 },
      { label: 'Trei sau mai multe', srl: 1, pfa: 0 },
      { label: 'Nu știu încă', srl: 0, pfa: 0 },
    ],
  },
]

export default function QuizPFASRL() {
  const [step, setStep] = useState(0)
  const [scores, setScores] = useState({ srl: 0, pfa: 0 })
  const [done, setDone] = useState(false)

  const handleOption = (opt: { srl: number; pfa: number }) => {
    const newScores = { srl: scores.srl + opt.srl, pfa: scores.pfa + opt.pfa }
    setScores(newScores)
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1)
    } else {
      setDone(true)
    }
  }

  const reset = () => {
    setStep(0)
    setScores({ srl: 0, pfa: 0 })
    setDone(false)
  }

  const recommendation = scores.srl >= scores.pfa ? 'srl' : 'pfa'

  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 40 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Quiz
          </div>
          <h2 className="t-h2">
            SRL sau PFA: <em>ce ți se potrivește?</em>
          </h2>
          <p className="t-lead" style={{ marginBottom: 40, marginTop: 16 }}>
            Răspunde la 5 întrebări rapide și îți spunem ce formă juridică ți se potrivește.
          </p>
        </div>

        {!done ? (
          <div className="card tonal">
            {/* Progress */}
            <p className="t14" style={{ color: 'var(--c-fog)', marginBottom: 8 }}>
              Întrebarea {step + 1} din 5
            </p>
            <div style={{ background: 'var(--c-rule-soft)', borderRadius: 'var(--r-4)', height: 4, marginBottom: 20 }}>
              <div
                style={{
                  width: `${((step) / 5) * 100}%`,
                  background: 'var(--c-accent)',
                  height: 4,
                  borderRadius: 'var(--r-4)',
                  transition: 'width 200ms',
                }}
              />
            </div>

            <p className="t18" style={{ marginTop: 20, marginBottom: 16 }}>
              {QUESTIONS[step].text}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {QUESTIONS[step].options.map((opt) => (
                <button
                  key={opt.label}
                  className="btn secondary"
                  style={{ width: '100%', minHeight: 44, marginBottom: 0 }}
                  onClick={() => handleOption(opt)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className={recommendation === 'srl' ? 'card feat' : 'card'}>
              <div className="t-eyebrow" style={{ marginBottom: 12 }}>
                <span className="dot" />
                Recomandarea noastră
              </div>
              {recommendation === 'srl' ? (
                <>
                  <h3 className="t-h3" style={{ marginBottom: 16 }}>Îți recomandăm un SRL</h3>
                  <p className="t16" style={{ marginBottom: 24 }}>
                    Bazat pe răspunsurile tale, un SRL Micro ar fi mai potrivit. Separă banii personali de
                    cei ai firmei și beneficiezi de impozit de 1% pe venituri.
                  </p>
                  <Link href="/incepe" className="btn primary lg">
                    Înfiintează SRL gratuit
                  </Link>
                </>
              ) : (
                <>
                  <h3 className="t-h3" style={{ marginBottom: 16 }}>Îți recomandăm un PFA</h3>
                  <p className="t16" style={{ marginBottom: 24 }}>
                    Bazat pe răspunsurile tale, un PFA ar fi mai potrivit. Acces direct la bani și
                    birocrație minimă.
                  </p>
                  <a href="https://solo.ro" target="_blank" rel="noopener" className="btn secondary lg">
                    Deschide PFA pe solo.ro →
                  </a>
                </>
              )}
            </div>
            <button className="btn ghost" onClick={reset} style={{ marginTop: 16 }}>
              Ia-o de la capăt
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
