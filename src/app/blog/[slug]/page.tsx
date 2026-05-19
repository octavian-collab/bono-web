import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import { BLOG_POSTS } from '@/data/blog-posts'
import BlogCard from '@/components/blog/BlogCard'

/*
  Conținutul articolelor va veni din Payload CMS.
  Deocamdată: un articol real (srl-vs-pfa) ca referință pentru template.
  Restul articolelor afișează un placeholder până la integrarea CMS.
*/

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} · Bono`,
    description: post.description,
  }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3)

  const isSrlVsPfa = slug === 'srl-vs-pfa'

  return (
    <>
      <Nav />
      <main>
        {/* Header articol */}
        <div className="ld-sec-wrap bg-page">
          <header className="bl-header">
            <div className="t-eyebrow bl-eyebrow">
              <span className="dot" />
              {post.categoryLabel}
            </div>
            <h1 className="t48">{post.title}</h1>
            <p className="t24 bl-chapeau">{post.description}</p>
            <div className="bl-meta">
              {isSrlVsPfa && (
                <>
                  <div className="avatar sm" style={{ background: 'var(--c-bej-1)', color: 'var(--c-fog)' }}>OE</div>
                  <div>
                    <span className="t14" style={{ color: 'var(--c-ink)', fontWeight: 600 }}>Otilia Eachimov</span>
                    <span className="t14" style={{ marginLeft: 6 }}>Contabil autorizat CECCAR</span>
                  </div>
                  <span className="bl-meta-sep t14">·</span>
                </>
              )}
              <span className="t14">{post.date}</span>
              {isSrlVsPfa && (
                <>
                  <span className="bl-meta-sep t14">·</span>
                  <span className="t14">7 minute</span>
                </>
              )}
            </div>
          </header>
        </div>

        {/* Corp articol */}
        <div className="bl-wrap">
          {isSrlVsPfa ? <SrlVsPfaContent /> : <PlaceholderContent title={post.title} />}
        </div>

        {/* Articole înrudite */}
        {related.length > 0 && (
          <div className="ld-sec-wrap bg-page">
            <section className="ld-sec" style={{ paddingBlockStart: 0 }}>
              <div style={{ marginBottom: 32 }}>
                <div className="t-eyebrow" style={{ marginBottom: 12 }}>
                  <span className="dot" />
                  {post.categoryLabel}
                </div>
                <h2 className="t-h3">Articole înrudite</h2>
              </div>
              <div className="ld-grid-3">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          </div>
        )}

        {/* CTA înregistrare */}
        <div className="ld-sec-wrap bg-tonal">
          <section className="ld-sec" style={{ paddingBlock: 'var(--sp-56)' }}>
            <div style={{ maxWidth: 560 }}>
              <div className="t-eyebrow" style={{ marginBottom: 16 }}>
                <span className="dot" />
                Înființare SRL
              </div>
              <h2 className="t-h2" style={{ marginBottom: 20 }}>
                Gata să îți deschizi <em>SRL-ul</em>?
              </h2>
              <p className="t-lead" style={{ marginBottom: 28 }}>
                Înființare gratuită, 100% online, cu sediu social inclus. Plătești doar taxa legală de 152 Lei.
              </p>
              <div className="row lg">
                <Link href="/incepe" className="btn primary lg">Vreau SRL gratuit</Link>
                <Link href="/infiintare-srl" className="btn secondary lg">Află mai multe</Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

function PlaceholderContent({ title }: { title: string }) {
  return (
    <div className="bl-body" style={{ paddingTop: 48 }}>
      <p>
        Conținutul articolului <strong>{title}</strong> va fi disponibil după integrarea Payload CMS.
        Acesta este template-ul de layout pentru articolele de blog.
      </p>
    </div>
  )
}

function SrlVsPfaContent() {
  return (
    <article className="bl-body" style={{ paddingTop: 48 }}>
      <p>
        Alegerea dintre PFA și SRL nu ține doar de taxe — influențează protecția bunurilor personale,
        accesul la finanțare, capacitatea de angajare și flexibilitatea în activitate.
        Legislația din 2026 a adus modificări importante: plafonul pentru microîntreprinderi a scăzut
        de la 250.000 euro la 100.000 euro, iar impozitul pe dividende a crescut de la 10% la 16%.
      </p>

      <h2>Care este diferența dintre PFA și SRL?</h2>

      <div className="bl-table-wrap">
        <table className="bl-table">
          <thead>
            <tr>
              <th>Aspect</th>
              <th>SRL</th>
              <th>PFA</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Personalitate juridică</td><td>Entitate separată de asociat</td><td>Identic cu persoana fizică</td></tr>
            <tr><td>Răspundere legală</td><td>Limitată la capitalul social</td><td>Nelimitată, cu bunurile personale</td></tr>
            <tr><td>Angajați</td><td>Nelimitat</td><td>Maximum 3</td></tr>
            <tr><td>Coduri CAEN</td><td>Nelimitate</td><td>Maximum 5</td></tr>
            <tr><td>Impozitare</td><td>1% venit (micro) / 16% profit + 16% dividende</td><td>10% venit, 25% CAS, 10% CASS</td></tr>
            <tr><td>Contabilitate</td><td>Partidă dublă</td><td>Partidă simplă</td></tr>
            <tr><td>Acces la bani</td><td>Salariu sau dividende</td><td>Direct, imediat</td></tr>
            <tr><td>Cerințe înființare</td><td>Fără cerințe speciale</td><td>Necesită studii sau experiență</td></tr>
            <tr><td>Acces la finanțare</td><td>Ușor — credite, fonduri, investitori</td><td>Limitat</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Cât se plătește impozit la PFA vs SRL în 2026?</h2>

      <h3>PFA</h3>
      <p>
        La PFA plătești <strong>10% impozit pe venit</strong> din venitul net. CASS (sănătate) se aplică
        în trei trepte: sub 6 salarii minime plătești un minim fix, iar peste 72 de salarii minime
        există un plafon maxim. CAS (pensie) este obligatoriu doar dacă depășești 12 salarii minime brute
        anual (48.600 lei în 2025).
      </p>

      <h3>SRL</h3>
      <p>
        SRL-ul cu regim micro plătește <strong>1% impozit pe venituri</strong> dacă veniturile sunt
        sub 100.000 euro și există cel puțin un angajat. Peste acest prag sau fără angajat, se aplică
        <strong> impozit pe profit de 16%</strong>. Distribuirea profitului sub formă de dividende
        atrage un <strong>impozit de 16%</strong> (de la 1 ianuarie 2026, majorat de la 10%).
      </p>

      <h2>Câți bani îți rămân efectiv? Exemple reale</h2>

      <div className="bl-table-wrap">
        <table className="bl-table">
          <thead>
            <tr>
              <th>Venit brut lunar</th>
              <th>PFA (Lei net)</th>
              <th>SRL micro (Lei net)</th>
              <th>SRL profit (Lei net)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="num">5.000 Lei</td>
              <td className="num">3.139 Lei</td>
              <td className="num">3.260 Lei</td>
              <td className="num">3.326 Lei ✓</td>
            </tr>
            <tr>
              <td className="num">10.000 Lei</td>
              <td className="num">6.278 Lei</td>
              <td className="num">7.014 Lei ✓</td>
              <td className="num">6.651 Lei</td>
            </tr>
            <tr>
              <td className="num">20.000 Lei</td>
              <td className="num">14.378 Lei</td>
              <td className="num">14.925 Lei ✓</td>
              <td className="num">13.302 Lei</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Ce a adus nou Ordonanța Trenuleț în 2026</h2>
      <ul>
        <li>Plafonul pentru microîntreprinderi a scăzut de la 250.000 euro la <strong>100.000 euro</strong>. Firmele care depășesc pragul trec automat la impozit pe profit (16%).</li>
        <li>Impozitul pe dividende a crescut de la 10% (2025) la <strong>16%</strong> (2026).</li>
      </ul>

      <h2>Când merită să alegi SRL față de PFA?</h2>
      <p>
        SRL-ul este mai avantajos când:
      </p>
      <ul>
        <li>Ai venituri constante, peste 5.000 Lei pe lună</li>
        <li>Vrei protecție a bunurilor personale — răspunzi doar cu capitalul social</li>
        <li>Vrei acces la credite bancare, fonduri europene sau investitori</li>
        <li>Planifici să angajezi mai mult de 3 persoane</li>
        <li>Activitatea ta nu impune studii sau diplome specifice (ca la PFA)</li>
      </ul>

      <h2>Pot transforma PFA-ul în SRL?</h2>
      <p>
        Da. Procesul este simplu și poți alege între transformarea directă sau menținerea ambelor
        forme juridice în paralel pentru o perioadă de tranziție.
      </p>

      <div className="bl-author">
        <div className="avatar lg" style={{ background: 'var(--c-bej-1)', color: 'var(--c-fog)', flexShrink: 0 }}>OE</div>
        <div className="bl-author-info">
          <span className="t18">Otilia Eachimov</span>
          <span className="t14">Contabil autorizat CECCAR, membră din 2015. 10+ ani experiență în contabilitate, salarizare și HR pentru IT, servicii, construcții și comerț.</span>
        </div>
      </div>
    </article>
  )
}
