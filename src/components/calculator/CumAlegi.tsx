import Link from 'next/link'

export default function CumAlegi() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 40 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Ghid de decizie
          </div>
          <h2 className="t-h2">
            Cum alegi între <em>PFA și SRL</em>?
          </h2>
          <p className="t-lead" style={{ marginBottom: 40, marginTop: 16 }}>
            Depinde ce vrei să construiești.
          </p>
        </div>

        <div className="ld-grid-2">
          {/* Card 1 — SRL */}
          <div className="card">
            <p className="t18" style={{ marginBottom: 20 }}>Alege un SRL dacă...</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li className="t16">vrei să separi banii tăi de banii firmei</li>
              <li className="t16">plănuiești să ai angajați sau să crești echipa</li>
              <li className="t16">lucrezi B2B și ai nevoie de credibilitate</li>
              <li className="t16">ai sau vei avea mai multe coduri CAEN</li>
              <li className="t16">te gândești la scalare și vrei să atragi investiții</li>
            </ul>
            <Link href="/incepe" className="btn secondary" style={{ marginTop: 24 }}>
              Înființează SRL gratuit
            </Link>
          </div>

          {/* Card 2 — PFA */}
          <div className="card">
            <p className="t18" style={{ marginBottom: 20 }}>Alege un PFA dacă...</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <li className="t16">lucrezi singur sau cu câțiva colaboratori</li>
              <li className="t16">vrei acces rapid la bani</li>
              <li className="t16">testezi o idee sau ești la început de drum</li>
              <li className="t16">nu plănuiești să angajezi mai mult de 2–3 persoane</li>
              <li className="t16">vrei să ai cel mult 5 coduri CAEN</li>
            </ul>
            <a
              href="https://solo.ro"
              target="_blank"
              rel="noopener"
              className="btn ghost"
              style={{ marginTop: 24 }}
            >
              Deschide PFA pe solo.ro →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
