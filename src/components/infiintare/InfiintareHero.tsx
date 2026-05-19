import Link from 'next/link'

export default function InfiintareHero() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-hero">
        <div className="t-eyebrow" style={{ marginBottom: 24 }}>
          <span className="dot" />
          Înființare SRL 2026
        </div>
        <div className="hero-display">
          <h1 className="t-h1">
            SRL gratuit, 100% online, cu <em>sediu social inclus</em>.
          </h1>
        </div>
        <p className="t-lead hero-lead">
          Completezi de pe telefon în 5–10 minute. Noi pregătim actele, depunem la ONRC
          și primești CUI-ul în 3–5 zile. Plătești doar taxa legală de{' '}
          <strong>152 Lei</strong>.
        </p>
        <div className="row lg" style={{ marginBottom: 48 }}>
          <Link href="/incepe" className="btn primary lg">Vreau SRL gratuit</Link>
          <span className="t14">100% gratuit · fără card · fără deplasări</span>
        </div>
        <div className="row lg">
          <div className="card-hairline" style={{ padding: '12px 20px', display: 'inline-flex', gap: 24, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span className="t-eyebrow" style={{ color: 'var(--c-fog)' }}>Înființare</span>
              <span className="t18">0 Lei</span>
            </div>
            <div style={{ width: 1, background: 'var(--c-rule-soft)', alignSelf: 'stretch' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span className="t-eyebrow" style={{ color: 'var(--c-fog)' }}>Taxă legală ONRC</span>
              <span className="t18" style={{ fontVariantNumeric: 'tabular-nums' }}>152 Lei</span>
            </div>
            <div style={{ width: 1, background: 'var(--c-rule-soft)', alignSelf: 'stretch' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <span className="t-eyebrow" style={{ color: 'var(--c-fog)' }}>Durată</span>
              <span className="t18">3–5 zile</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
