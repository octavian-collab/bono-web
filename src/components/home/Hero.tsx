import Link from 'next/link'
import PressLogos from '@/components/shared/PressLogos'

export default function Hero() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-hero">
        <div className="t-eyebrow" style={{ marginBottom: 24 }}>
          <span className="dot" />
          Înființare · Facturare · Contabilitate
        </div>
        <div className="hero-display">
          <h1 className="t-display">
            Înființare, facturare și contabilitate pentru <em>SRL-ul tău</em>.
          </h1>
        </div>
        <p className="t-lead hero-lead">
          Tot ce ai nevoie pentru SRL-ul tău, de pe telefon. Înființare gratuită, facturare
          integrată cu e-Factura și contabilitate digitală de la{' '}
          <strong>219 Lei + TVA/lună</strong>.
        </p>
        <div className="row lg" style={{ marginBottom: 48 }}>
          <Link href="/incepe" className="btn primary lg">Vreau SRL gratuit</Link>
          <Link href="/calculator-taxe" className="btn secondary lg">Calculator taxe 2026</Link>
          <span className="t14" style={{ marginLeft: 8 }}>100% gratuit · fără card</span>
        </div>
        <PressLogos />
      </section>
    </div>
  )
}
