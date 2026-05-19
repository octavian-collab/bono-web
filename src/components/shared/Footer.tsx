import Link from 'next/link'

const FOOTER_COLS = [
  {
    title: 'Produs',
    links: [
      { label: 'Înființare SRL', href: '/infiintare-srl' },
      { label: 'Calculator taxe', href: '/calculator-taxe' },
      { label: 'Verificare nume', href: '/verificare-nume' },
      { label: 'Coduri CAEN', href: '/coduri-caen' },
    ],
  },
  {
    title: 'Companie',
    links: [
      { label: 'Despre noi', href: '/despre' },
      { label: 'Blog', href: '/blog' },
      { label: 'Cariere', href: '/cariere' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Termeni și condiții', href: '/termeni' },
      { label: 'Politica de confidențialitate', href: '/confidentialitate' },
      { label: 'GDPR', href: '/gdpr' },
    ],
  },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com/bono.ro' },
  { label: 'Instagram', href: 'https://instagram.com/bono.ro' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/bono-ro' },
]

export default function Footer() {
  return (
    <footer>
      <div className="ld-footer">
        <div className="footer-brand">
          <Link href="/" className="brand-logo">
            Bono<em>.</em>
          </Link>
          <p className="t14" style={{ maxWidth: 220 }}>
            Contabilitate simplă pentru antreprenori din România.
          </p>
          <div className="row sm">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="t14"
                style={{ color: 'var(--c-fog)' }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          {FOOTER_COLS.map(({ title, links }) => (
            <div key={title} className="footer-col">
              <span className="footer-col-title">{title}</span>
              {links.map(({ label, href }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span className="t14">© 2026 Bono SRL · CUI RO12345678</span>
        <div className="row sm">
          <Link href="/termeni" className="t14">Termeni</Link>
          <Link href="/confidentialitate" className="t14">Confidențialitate</Link>
        </div>
      </div>
    </footer>
  )
}
