import Link from 'next/link'

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    text: '3–4 min pentru completarea dosarului',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    text: '100% online, fără hârtii, fără cozi',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
    text: 'Plătești doar taxa legală de 152 Lei',
  },
]

export default function GataDeStart() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec" style={{ paddingBlockStart: 0 }}>
        <div className="card dark" style={{ padding: '56px' }}>
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <h2 className="t-h1" style={{ color: '#fff', marginBottom: 20 }}>
              Gata de start?
            </h2>
            <p
              className="t-lead"
              style={{ color: '#fff', marginBottom: 40, maxWidth: 520 }}
            >
              Cu BONO îți înființezi firma gratuit, de pe telefon în doar câteva minute.
              Ai nevoie doar de buletin și nici nu trebuie să plătești vreun abonament
              la alte servicii.
            </p>

            <div
              className="gata-de-start-features"
              style={{
                display: 'flex',
                gap: 40,
                flexWrap: 'wrap',
                marginBottom: 40,
                color: '#fff',
              }}
            >
              {FEATURES.map((f) => (
                <div
                  key={f.text}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 12,
                    maxWidth: 120,
                    textAlign: 'center',
                  }}
                >
                  {f.icon}
                  <span className="t14">{f.text}</span>
                </div>
              ))}
            </div>

            <Link href="/incepe" className="btn primary lg">
              Vreau SRL gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
