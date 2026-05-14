'use client'
import { useState, useEffect } from 'react'
import { useLang } from '../lib/LangContext'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav__logo">MUI<span>.</span></a>
      <div className="nav__menu">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#testimonials">Reviews</a>
        <a href="#faq">FAQ</a>
        <div className="nav__lang">
          <button className={lang === 'en' ? 'active' : ''} onClick={() => lang !== 'en' && toggle()}>EN</button>
          {' / '}
          <button className={lang === 'th' ? 'active' : ''} onClick={() => lang !== 'th' && toggle()}>TH</button>
        </div>
        <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer" className="btn" style={{ padding: '12px 22px', fontSize: 13 }}>
          Book Now
        </a>
      </div>
      <button className="nav__burger" aria-label="Menu">
        <span /><span /><span />
      </button>
    </nav>
  )
}
