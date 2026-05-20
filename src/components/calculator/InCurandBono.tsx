export default function InCurandBono() {
  const items = [
    {
      title: 'Contabilitate digitală',
      desc: 'Automatizată complet cu AI. Contabil dedicat de la 219 Lei + TVA/lună.',
    },
    {
      title: 'Prețuri accesibile',
      desc: 'Totul la 219 Lei + TVA pe lună, fără costuri ascunse.',
    },
    {
      title: 'Facturare simplă',
      desc: 'Emite facturi de pe telefon, sincronizate automat cu e-Factura.',
    },
    {
      title: 'Calcul automat al taxelor',
      desc: 'Platforma calculează impozitele și te notifică la scadențe.',
    },
    {
      title: 'Suport rapid',
      desc: 'Contabilii Bono sunt la un click distanță pentru orice întrebare.',
    },
    {
      title: 'Declarații automate',
      desc: 'Declarațiile ANAF completate automat, gata de depunere.',
    },
  ]

  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 48 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            De la Bono
          </div>
          <h2 className="t-h2">
            Tot ce ai nevoie pentru <em>SRL-ul tău</em>
          </h2>
        </div>

        <div className="ld-grid-3">
          {items.map((item) => (
            <div key={item.title} className="card">
              <p className="t18" style={{ marginBottom: 8 }}>{item.title}</p>
              <p className="t16" style={{ color: 'var(--c-fog)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
