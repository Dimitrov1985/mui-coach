'use client'
import { useEffect } from 'react'
import { LangProvider } from '../lib/LangContext'
import Navbar       from '../components/Navbar'
import Hero         from '../components/Hero'
import Marquee      from '../components/Marquee'
import About        from '../components/About'
import Services     from '../components/Services'
import Testimonials from '../components/Testimonials'
import FAQ          from '../components/FAQ'
import CTA          from '../components/CTA'
import Footer       from '../components/Footer'

function Reveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.15 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}

export default function Page() {
  return (
    <LangProvider>
      <Reveal />
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
