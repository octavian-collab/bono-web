const AI_FEATURES = [
  {
    title: 'Contabilitate digitală',
    body: 'Toate documentele clasificate și arhivate automat.',
  },
  {
    title: 'Calcul taxe automat',
    body: 'Impozit, TVA, contribuții — calculate corect în timp real.',
  },
  {
    title: 'Facturare inteligentă',
    body: 'Emite, trimite și înregistrează facturile cu un clic.',
  },
  {
    title: 'Suport pe chat',
    body: 'Răspuns în câteva minute, de la contabili reali.',
  },
  {
    title: 'Declarații automate',
    body: 'D100, D300, D112 — pregătite și depuse fără efort.',
  },
  {
    title: 'Notificări scadențe',
    body: 'Știi din timp ce vine, ca să nu ai surprize.',
  },
]

export default function FeaturesAI() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 48, maxWidth: 640 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            <span className="badge ai" style={{ marginLeft: 4 }}>Nou</span>
          </div>
          <h2 className="t-h1">
            Funcționalități <em>AI</em> incluse în orice plan.
          </h2>
        </div>
        <div className="feat-ai-grid">
          {AI_FEATURES.map(({ title, body }) => (
            <div key={title} className="card feat-ai-item">
              <h3 className="t18">{title}</h3>
              <p className="t16" style={{ color: 'var(--c-fog)' }}>{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
