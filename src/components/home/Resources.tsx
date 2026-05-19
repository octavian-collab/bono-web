import Link from 'next/link'

const RESOURCES = [
  {
    eyebrow: 'Tool gratuit',
    title: 'Verificare nume firmă',
    body: 'Verifică disponibilitatea numelui înainte să înregistrezi.',
    href: '/verificare-nume',
  },
  {
    eyebrow: 'Calculator 2026',
    title: 'Calculator taxe',
    body: 'Compară PFA vs SRL și află cât plătești în 2026.',
    href: '/calculator-taxe',
  },
  {
    eyebrow: 'Baza de date',
    title: 'Coduri CAEN',
    body: 'Găsește codul CAEN potrivit activității tale.',
    href: '/coduri-caen',
  },
  {
    eyebrow: 'Articole',
    title: 'Blog pentru antreprenori',
    body: 'Ghiduri despre SRL, taxe și contabilitate în România.',
    href: '/blog',
  },
]

export default function Resources() {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div style={{ marginBottom: 48 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Resurse gratuite
          </div>
          <h2 className="t-h1">
            Tools pentru <em>antreprenori</em>.
          </h2>
        </div>
        <div className="resources-grid">
          {RESOURCES.map(({ eyebrow, title, body, href }) => (
            <Link key={href} href={href} className="card resource-card">
              <span className="t-eyebrow resource-eyebrow">{eyebrow}</span>
              <h3 className="t18 resource-title" style={{ transition: 'color 140ms' }}>{title}</h3>
              <p className="t16" style={{ color: 'var(--c-fog)' }}>{body}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
