const BENEFITS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Înființare gratuită',
    body: 'Ai firma gata în câteva zile, totul de pe telefon. Plătești doar taxa legală de 152 Lei.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="5" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 5V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    title: 'Sediu social gratuit',
    body: 'Îți găzduim gratuit sediul social în primul an după înființarea firmei. Fără griji și fără bătăi de cap.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 7v3l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Facturare gratuită',
    body: 'Emiți facturi de pe telefon și sunt sincronizate automat cu e-Factura.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 3C6.686 3 4 5.686 4 9c0 4.5 6 9 6 9s6-4.5 6-9c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="10" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    title: 'Contabilitate digitală',
    body: 'Motor contabil integrat cu AI care face tot ce e nevoie pentru firma ta. Contabil dedicat.',
  },
]

export default function Benefits() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div className="ld-sec-hd">
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 14 }}>
              <span className="dot" />
              De ce Bono
            </div>
            <h2 className="t-h1">
              Tot ce ai nevoie, <em>la un loc</em>.
            </h2>
          </div>
          <p className="t-lead">
            Un singur abonament acoperă înființarea, contabilitatea, facturarea și sediul social.
          </p>
        </div>
        <div className="ld-grid-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {BENEFITS.map(({ icon, title, body }) => (
            <div key={title} className="card">
              <div className="benefit-icon">{icon}</div>
              <h3 className="t18" style={{ marginBottom: 8 }}>{title}</h3>
              <p className="t16" style={{ color: 'var(--c-fog)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
