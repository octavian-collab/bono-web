import Link from 'next/link'

interface CtaStripProps {
  headline?: string
  headlineEm?: string
  body?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
  insightTitle?: string
  insightBody?: string
  insightEm?: string
  sigName?: string
  sigRole?: string
  sigInitials?: string
}

export default function CtaStrip({
  headline = 'Începe cu',
  headlineEm = 'zero fricțiune',
  body = 'Primele 30 de zile sunt pe noi. Dacă nu ți se pare că îți ia de pe umeri cel puțin două zile pe lună, nu mai plătești nimic.',
  primaryLabel = 'Încearcă gratuit',
  primaryHref = '/incepe',
  secondaryLabel = 'Vorbește cu cineva',
  secondaryHref = '/contact',
  insightTitle = 'Nu te lăsăm să',
  insightEm = 'ratezi o scadență',
  insightBody = 'Iar dacă totuși se întâmplă din vina noastră, plătim penalitatea. E scris în contract, nu e o figură de stil.',
  sigName = 'Andrei Popescu',
  sigRole = 'Fondator · Bono',
  sigInitials = 'AP',
}: CtaStripProps) {
  return (
    <div className="ld-sec-wrap bg-page">
      <section className="ld-sec">
        <div className="cta-grid">
          <div>
            <h2 className="t-h1">
              {headline} <em>{headlineEm}</em>.
            </h2>
            <p className="t-lead" style={{ margin: '20px 0 24px' }}>{body}</p>
            <div className="row lg">
              <Link href={primaryHref} className="btn primary lg">{primaryLabel}</Link>
              <Link href={secondaryHref} className="btn secondary lg">{secondaryLabel}</Link>
            </div>
          </div>
          <div className="insight">
            <div className="lb">Promisiunea Bono</div>
            <div className="h">
              {insightTitle} <em>{insightEm}</em>.
            </div>
            <p className="p">{insightBody}</p>
            <div className="sig">
              <div className="avatar dark">{sigInitials}</div>
              <div>
                <div className="nm">{sigName}</div>
                <div className="rl">{sigRole}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
