import type { Metadata } from 'next'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import BlogFilters from '@/components/blog/BlogFilters'

export const metadata: Metadata = {
  title: 'Blog · Resurse pentru antreprenori · Bono',
  description: 'Sfaturi clare, idei utile și noutăți — de la înființarea unui SRL la contabilitate digitală.',
}

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="ld-sec-wrap bg-page">
          <section className="ld-hero">
            <div className="t-eyebrow" style={{ marginBottom: 24 }}>
              <span className="dot" />
              Blog
            </div>
            <div className="hero-display">
              <h1 className="t-h1">
                Resurse pentru <em>antreprenori</em>.
              </h1>
            </div>
            <p className="t-lead hero-lead">
              Sfaturi clare, idei utile și noutăți — de la înființarea unui SRL la contabilitate digitală.
            </p>
          </section>
        </div>
        <div className="ld-sec-wrap bg-page">
          <section className="ld-sec" style={{ paddingBlockStart: 0 }}>
            <BlogFilters />
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
