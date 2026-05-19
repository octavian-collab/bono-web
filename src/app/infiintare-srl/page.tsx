import type { Metadata } from 'next'
import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import Faq from '@/components/shared/Faq'
import Testimonials from '@/components/shared/Testimonials'
import CtaStrip from '@/components/shared/CtaStrip'
import PressLogos from '@/components/shared/PressLogos'
import InfiintareHero from '@/components/infiintare/InfiintareHero'
import InfiintareBenefits from '@/components/infiintare/InfiintareBenefits'
import InfiintareSteps from '@/components/infiintare/InfiintareSteps'
import { FAQ_INFIINTARE } from '@/data/faq-infiintare'

export const metadata: Metadata = {
  title: 'Înființare SRL Gratuit 2026 · 100% Online · Bono',
  description: 'Înființează un SRL gratuit, 100% online, cu sediu social inclus. Plătești doar taxa legală de 152 Lei. Gata în 3–5 zile.',
}

export default function InfiintareSrlPage() {
  return (
    <>
      <Nav />
      <main>
        <InfiintareHero />
        <div className="ld-sec-wrap bg-page">
          <div className="ld-sec" style={{ paddingBlock: 'var(--sp-40)' }}>
            <PressLogos />
          </div>
        </div>
        <InfiintareBenefits />
        <InfiintareSteps />
        <Testimonials />
        <Faq
          items={FAQ_INFIINTARE}
          columns={2}
          eyebrow="Întrebări frecvente"
          title="Tot ce vrei să știi despre"
          titleEm="înființarea SRL"
        />
        <CtaStrip
          headline="Înregistrează-ți SRL-ul"
          headlineEm="gratuit azi"
          body="Primele 30 de zile de contabilitate sunt pe noi. Completezi în 10 minute, noi facem restul."
          primaryLabel="Vreau SRL gratuit"
          primaryHref="/incepe"
          secondaryLabel="Am o întrebare"
          secondaryHref="/contact"
          insightTitle="Sediu social"
          insightEm="inclus gratuit"
          insightBody="Nu ai nevoie să închiriezi un spațiu. Îți găzduim adresa legală în primul an fără niciun cost suplimentar."
          sigName="Echipa Bono"
          sigRole="Disponibili pe WhatsApp"
          sigInitials="B."
        />
      </main>
      <Footer />
    </>
  )
}
