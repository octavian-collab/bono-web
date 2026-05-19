const STEPS = [
  {
    num: '01',
    title: 'Alegi numele firmei',
    body: 'Scrii numele dorit, iar noi verificăm instant disponibilitatea la Registrul Comerțului. Dacă e liber, îl rezervăm imediat.',
  },
  {
    num: '02',
    title: 'Selectezi activitatea',
    body: 'Alegi codul CAEN principal și activitățile secundare. Poți adăuga oricât de multe la înființare, fără niciun cost suplimentar.',
  },
  {
    num: '03',
    title: 'Alegi sistemul de impozitare',
    body: (
      <>
        Îți explicăm diferențele dintre impozitul micro și impozitul pe profit,
        și ce înseamnă să fii{' '}
        <span className="step-actor">plătitor sau neplătitor de TVA</span>,
        ca să iei o decizie informată.
      </>
    ),
  },
  {
    num: '04',
    title: 'Semnezi documentele online',
    body: 'Avocatul ales de tine pregătește toate actele (act constitutiv, contract de comodat). Tu le semnezi online — fără semnătură electronică calificată.',
  },
]

export default function InfiintareSteps() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 48, maxWidth: 720 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Cum funcționează
          </div>
          <h2 className="t-h2">
            Patru pași până la <em>CUI-ul tău</em>.
          </h2>
        </div>
        <div className="ld-grid-3" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
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
