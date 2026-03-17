import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Benefits from '@/components/sections/benefits'
import Contact from '@/components/sections/contact'
import CTABanner from '@/components/sections/cta-banner'
import FAQ from '@/components/sections/faq'
import Hero from '@/components/sections/hero'
import Operadoras from '@/components/sections/operadoras'
import Process from '@/components/sections/process'
import Testimonials from '@/components/sections/testimonials'
import TrustBar from '@/components/sections/trust-bar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Operadoras />
        <Benefits />
        <Process />
        <Testimonials />
        <CTABanner />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
