import Nav from '@/components/shared/Nav'
import Footer from '@/components/shared/Footer'
import Faq from '@/components/shared/Faq'
import Testimonials from '@/components/shared/Testimonials'
import CtaStrip from '@/components/shared/CtaStrip'
import Hero from '@/components/home/Hero'
import Benefits from '@/components/home/Benefits'
import HowItWorks from '@/components/home/HowItWorks'
import Pricing from '@/components/home/Pricing'
import FeaturesAI from '@/components/home/FeaturesAI'
import Resources from '@/components/home/Resources'
import Team from '@/components/home/Team'
import { FAQ_HOME } from '@/data/faq-home'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FeaturesAI />
        <Faq items={FAQ_HOME} columns={2} />
        <Resources />
        <Team />
        <CtaStrip />
      </main>
      <Footer />
    </>
  )
}
