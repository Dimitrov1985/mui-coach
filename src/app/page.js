'use client'
import { LangProvider } from '../lib/LangContext'
import ClientScripts  from '../components/ClientScripts'
import Navbar         from '../components/Navbar'
import Hero           from '../components/Hero'
import Marquee        from '../components/Marquee'
import About          from '../components/About'
import Services       from '../components/Services'
import Testimonials   from '../components/Testimonials'
import FAQ            from '../components/FAQ'
import CTA            from '../components/CTA'
import Footer         from '../components/Footer'

export default function Page() {
  return (
    <LangProvider>
      <ClientScripts />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </LangProvider>
  )
}
