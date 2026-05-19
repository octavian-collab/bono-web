'use client'

export interface Testimonial {
  initials: string
  name: string
  role: string
  quote: string
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    initials: 'RN',
    name: 'Rareș N.',
    role: 'Client Bono',
    quote: 'Cei mai implicați oameni pe care i-am întâlnit. Servicii excelente, au explicat tot clar și prietenos.',
  },
  {
    initials: 'LB',
    name: 'Lidia B.',
    role: 'Client Bono',
    quote: 'A fost foarte ușor procesul de înfiintare a firmei. Am întâmpinat o problemă și Bono mi-a oferit suport și a rezolvat rapid.',
  },
  {
    initials: 'PM',
    name: 'Pana Marinela',
    role: 'Client Bono',
    quote: 'Cel mai bun serviciu din România pentru deschiderea unei firme!',
  },
]

interface TestimonialsProps {
  items?: Testimonial[]
}

export default function Testimonials({ items = DEFAULT_TESTIMONIALS }: TestimonialsProps) {
  return (
    <div className="ld-sec-wrap bg-dark">
      <section className="ld-sec">
        <div style={{ marginBottom: 48, maxWidth: 760 }}>
          <div className="t-eyebrow" style={{ marginBottom: 14 }}>
            <span className="dot" />
            Clienți
          </div>
          <h2 className="t-h1" style={{ color: '#fff' }}>
            Antreprenori care au scăpat de <em>panica</em> de final de lună.
          </h2>
        </div>
        <div className="ld-grid-3">
          {items.map((item) => (
            <div key={item.name} className="quote">
              <p className="quote-q">«{item.quote}»</p>
              <div className="quote-att">
                <div className="avatar">{item.initials}</div>
                <div>
                  <strong>{item.name}</strong>
                  <span className="quote-secondary">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
