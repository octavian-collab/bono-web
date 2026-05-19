const STEPS = [
  {
    num: '01',
    title: 'Completezi online',
    body: 'Datele firmei, asociații, domeniul de activitate. Durează 10 minute, tot de pe telefon.',
  },
  {
    num: '02',
    title: 'Noi ne ocupăm de acte',
    body: (
      <>
        Depunem la Registrul Comerțului, ANAF, obținem CUI și sediu social.{' '}
        <span className="step-actor">Totul automat.</span>
      </>
    ),
  },
  {
    num: '03',
    title: 'SRL-ul tău e gata',
    body: 'Primești documentele în 3 zile. De acolo, Bono ține contabilitatea la zi lunar.',
  },
]

export default function HowItWorks() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Cum funcționează
          </div>
          <h2 className="t-h1">
            Trei pași până la <em>SRL-ul tău</em>.
          </h2>
        </div>
        <div className="ld-grid-3">
          {STEPS.map(({ num, title, body }) => (
            <div key={num} className="card step">
              <span className="step-num">{num}</span>
              <h3 className="step-h">{title}</h3>
              <p className="step-p">{body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
