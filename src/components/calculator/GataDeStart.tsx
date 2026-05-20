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
        {/*
          Accent CTA card — background uses --c-accent token.
          No card variant covers pink bg, so background is set via token var().
          Text colors follow DS rule "Pe Dark: #fff heading + rgba(255,255,255,0.65) body".
          Border removed per DS rule "Card dark → FĂRĂ border".
        */}
        <div
          className="card gata-de-start-inner"
          style={{
            background: 'var(--c-accent)',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '48px',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Text content */}
          <div style={{ flex: '1 1 0', minWidth: 0 }}>
            <h2
              className="t-h1"
              style={{ color: '#fff', marginBottom: '20px' }}
            >
              Gata de start?
            </h2>
            <p
              className="t-lead"
              style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '40px', maxWidth: '520px' }}
            >
              Cu BONO îți înființezi firma gratuit, de pe telefon în doar câteva minute. Ai
              nevoie doar de buletin și nici nu trebuie să plătești vreun abonament la alte
              servicii.
            </p>

            {/* Feature items */}
            <div
              className="gata-de-start-features"
              style={{
                display: 'flex',
                gap: '32px',
                flexWrap: 'wrap',
                marginBottom: '40px',
                color: 'rgba(255,255,255,0.90)',
              }}
            >
              {FEATURES.map((f) => (
                <div
                  key={f.text}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    maxWidth: '120px',
                    textAlign: 'center',
                  }}
                >
                  {f.icon}
                  <span className="t14">{f.text}</span>
                </div>
              ))}
            </div>

            {/*
              Button on accent bg: DS has no built-in "white on accent" variant.
              Closest correct choice: .btn.lg with background: var(--c-white) and
              color: var(--c-ink) — both token-based, no hex.
            */}
            <Link
              href="/incepe"
              className="btn lg"
              style={{
                background: 'var(--c-white)',
                color: 'var(--c-ink)',
              }}
            >
              Vreau SRL gratuit →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
