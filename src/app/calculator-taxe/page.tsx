import type { Metadata } from 'next'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import Faq from '@/components/shared/Faq'
import TaxCalculator from '@/components/calculator/TaxCalculator'
import CumAlegi from '@/components/calculator/CumAlegi'
import DiferentePFASRL from '@/components/calculator/DiferentePFASRL'
import QuizPFASRL from '@/components/calculator/QuizPFASRL'
import InCurandBono from '@/components/calculator/InCurandBono'
import GataDeStart from '@/components/calculator/GataDeStart'
import { FAQ_CALCULATOR } from '@/data/faq-calculator'

export const metadata: Metadata = {
  title: 'Calculator Taxe PFA vs SRL 2026 · Bono',
  description:
    'Compară PFA, SRL Micro și SRL pe profit. Introdu venitul lunar și află instant cât plătești statului și cât îți rămâne în mână. Actualizat mai 2026.',
}

export default function CalculatorTaxePage() {
  return (
    <>
      <Nav />
      <main>
        {/* Hero */}
        <div className="ld-sec-wrap bg-page">
          <section className="ld-hero" style={{ paddingBottom: 48 }}>
            <div className="t-eyebrow" style={{ marginBottom: 24 }}>
              <span className="dot" />
              Calculator taxe 2026
            </div>
            <div className="hero-display">
              <h1 className="t-h1">
                PFA sau SRL: <em>cât îți rămâne</em> net?
              </h1>
            </div>
            <p className="t-lead hero-lead">
              Compară PFA, SRL Micro și SRL pe profit. Introdu venitul lunar și vezi instant cât
              plătești statului și cât îți rămâne. Actualizat mai 2026.
            </p>
          </section>
        </div>

        {/* Calculator tool */}
        <div className="ld-sec-wrap bg-page">
          <section className="ld-sec" style={{ paddingBlockStart: 0 }}>
            <TaxCalculator />
          </section>
        </div>

        {/* Cum alegi */}
        <CumAlegi />

        {/* Diferente PFA SRL */}
        <DiferentePFASRL />

        {/* Quiz */}
        <QuizPFASRL />

        {/* FAQ */}
        <Faq
          eyebrow="Întrebări frecvente"
          title="Taxe PFA și SRL în"
          titleEm="2026"
          items={FAQ_CALCULATOR}
          columns={2}
        />

        {/* Gata de start — CTA pink */}
        <GataDeStart />

        {/* In curând de la Bono */}
        <InCurandBono />
      </main>
      <Footer />
    </>
  )
}
