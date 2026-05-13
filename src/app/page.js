'use client'
import { useEffect } from 'react'
import { LangProvider } from '../lib/LangContext'
import Navbar   from '../components/Navbar'
import Hero     from '../components/Hero'
import About    from '../components/About'
import Services from '../components/Services'
import FAQ      from '../components/FAQ'
import Contact  from '../components/Contact'
import Footer   from '../components/Footer'

function ScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target) } })
    }, { threshold: 0.1 })
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  return null
}

export default function Page() {
  return (
    <LangProvider>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}
