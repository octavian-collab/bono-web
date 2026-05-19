const BENEFITS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M4 10L8 14L16 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: 'Înființare gratuită',
    body: 'Completezi de pe telefon și plătești doar taxa legală de 152 Lei. Firma ta e gata în 3–5 zile și primești actele pe email.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <rect x="3" y="3" width="14" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10h6M10 7v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: '100% online',
    body: 'Completezi formularul în 5–10 minute. Nu ai nevoie de semnătură electronică calificată. Fără drumuri, fără hârtii.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 3C6.686 3 4 5.686 4 9c0 4.5 6 9 6 9s6-4.5 6-9c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="10" cy="9" r="2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
    title: 'Sediu social gratuit',
    body: 'Îți găzduim gratuit sediul social în primul an. Fără abonament, fără costuri ascunse. Economisești 500–700 Lei.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
        <path d="M10 2a8 8 0 1 0 0 16A8 8 0 0 0 10 2z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M10 6v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
    title: 'Suport dedicat',
    body: 'Dacă ai orice întrebare în procesul de înființare, suntem aici. Răspundem în maximum 2 ore în zilele lucrătoare.',
  },
]

export default function InfiintareBenefits() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div className="ld-sec-hd">
          <div>
            <div className="t-eyebrow" style={{ marginBottom: 14 }}>
              <span className="dot" />
              De ce Bono
            </div>
            <h2 className="t-h2">
              Tot ce ai nevoie pentru <em>primul tău SRL</em>.
            </h2>
          </div>
          <p className="t-lead">
            Cel mai simplu mod de a înființa o firmă în România — de pe telefon, în 10 minute.
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
