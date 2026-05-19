import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Înființare SRL', href: '/infiintare-srl' },
  { label: 'Calculator taxe', href: '/calculator-taxe' },
  { label: 'Verificare nume', href: '/verificare-nume' },
  { label: 'Coduri CAEN', href: '/coduri-caen' },
  { label: 'Blog', href: '/blog' },
]

export default function Nav() {
  return (
    <header>
      <nav className="ld-nav">
        <Link href="/" className="nav-logo">
          Bono<em>.</em>
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map(({ label, href }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </div>
        <div className="nav-cta">
          <Link href="/intra" className="btn ghost sm">Intră în cont</Link>
          <Link href="/incepe" className="btn primary sm">Încearcă gratuit</Link>
        </div>
      </nav>
    </header>
  )
}
