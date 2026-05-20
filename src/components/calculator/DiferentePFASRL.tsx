export default function DiferentePFASRL() {
  const items = [
    {
      title: 'Răspunderea',
      pfa: 'Răspunzi personal cu bunurile tale',
      srl: 'Răspundere limitată la firmă',
    },
    {
      title: 'Administrarea',
      pfa: 'Simplă, puțină birocrație',
      srl: 'Cu Bono, la fel de simplă',
    },
    {
      title: 'Angajați',
      pfa: 'Maxim 3 angajați',
      srl: 'Oricâți angajați, fără limită',
    },
    {
      title: 'Acces la bani',
      pfa: 'Banii încasați sunt ai tăi imediat',
      srl: 'Prin salariu sau dividende',
    },
    {
      title: 'Credibilitate',
      pfa: 'Bun pentru freelancing și proiecte mici',
      srl: 'Mai multă încredere pentru clienți și bănci',
    },
    {
      title: 'Unde te ajutăm?',
      pfa: 'SOLO te ajută cu înregistrarea PFA',
      srl: 'Bono te ajută gratuit cu înființarea SRL',
    },
  ]

  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 40 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Comparație
          </div>
          <h2 className="t-h2">
            PFA vs SRL în <em>2026</em>
          </h2>
          <p className="t-lead" style={{ marginBottom: 40, marginTop: 16 }}>
            Care sunt diferențele principale?
          </p>
        </div>

        <div className="ld-grid-3">
          {items.map((item) => (
            <div key={item.title} className="card">
              <p className="t-eyebrow" style={{ marginBottom: 16 }}>{item.title}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div>
                  <p className="t14" style={{ color: 'var(--c-fog)', marginBottom: 2 }}>PFA</p>
                  <p className="t16">{item.pfa}</p>
                </div>
                <div>
                  <p className="t14" style={{ color: 'var(--c-fog)', marginBottom: 2 }}>SRL</p>
                  <p className="t16">{item.srl}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="t14" style={{ color: 'var(--c-fog)', marginTop: 32 }}>
          Nu există o variantă „corectă" pentru toată lumea. Ne poți scrie la one@bono.ro pentru sfaturi.
        </p>
      </section>
    </div>
  )
}
