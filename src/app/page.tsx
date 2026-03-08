import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import Hero from '@/components/sections/hero'
import Operadoras from '@/components/sections/operadoras'
import TrustBar from '@/components/sections/trust-bar'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Operadoras />
      </main>
      <Footer />
    </>
  )
}
