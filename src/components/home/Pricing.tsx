import Link from 'next/link'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const SERVICES = [
  {
    label: 'Înființare SRL',
    cost: '0',
    per: ' Lei',
    note: 'doar taxa legală 152 Lei la ONRC',
    features: [
      'Documente generate automat',
      'Semnătură electronică inclusă',
      'Sediu social gratuit primul an',
      'Gata în 3–5 zile lucrătoare',
    ],
    cta: 'Înregistrează SRL gratuit',
    ctaHref: '/incepe',
    variant: 'secondary' as const,
    featured: false,
  },
  {
    label: 'Contabilitate digitală',
    cost: '219',
    per: ' Lei + TVA/lună',
    note: 'Bono Conta — în curând',
    features: [
      'Toate declarațiile fiscale',
      'Depunere automată la ANAF',
      'Contabil dedicat pe chat',
      'Salarizare și contracte incluse',
    ],
    cta: 'Vreau SRL gratuit',
    ctaHref: '/incepe',
    variant: 'primary' as const,
    featured: true,
  },
  {
    label: 'Facturare cu e-Factura',
    cost: '0',
    per: ' Lei',
    note: 'inclus în abonament',
    features: [
      'Facturi de pe telefon',
      'Sincronizare automată e-Factura',
      'Arhivare și trimitere automată',
      'Integrare directă cu ANAF',
    ],
    cta: 'Află mai multe',
    ctaHref: '/infiintare-srl',
    variant: 'secondary' as const,
    featured: false,
  },
]

export default function Pricing() {
  return (
    <div className="ld-sec-wrap bg-tonal">
      <section className="ld-sec" id="pret">
        <div className="ld-sec-hd">
          <div>
            <div className="t-eyebrow">
              <span className="dot" />
              Prețuri
            </div>
            <h2 className="t-h1" style={{ marginTop: 14 }}>
              Simplu și <em>transparent</em>.
            </h2>
          </div>
          <p className="t-lead">
            Înfiintare și facturare gratuite. Contabilitate digitală de la 219 Lei + TVA/lună.
          </p>
        </div>
        <div className="ld-grid-3">
          {SERVICES.map((s) => (
            <div key={s.label} className={`card price${s.featured ? ' feat' : ''}`}>
              <div className="price-lb">{s.label}</div>
              <div className="price-cost" style={{ marginTop: 12 }}>
                <span style={{ fontVariantNumeric: 'tabular-nums' }}>{s.cost}</span>
                <span className="per">{s.per}</span>
              </div>
              <p className="price-desc">{s.note}</p>
              {s.features.map((f) => (
                <div key={f} className="price-li">
                  <CheckIcon />
                  {f}
                </div>
              ))}
              <Link href={s.ctaHref} className={`btn ${s.variant} price-btn`} style={{ marginTop: 20 }}>
                {s.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
