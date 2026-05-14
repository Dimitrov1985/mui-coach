'use client'
import { useState, useEffect } from 'react'
import { useLang } from '../lib/LangContext'

export default function Navbar() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '16px var(--pad)' : '24px var(--pad)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(10,10,10,.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'all .3s var(--easing)',
    }}>
      <a href="#" style={{ fontFamily: 'var(--font-anton)', fontSize: 24, letterSpacing: '.15em' }}>
        MUI<span style={{ color: 'var(--accent)' }}>.</span>
      </a>

      {/* Desktop */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="nav-desktop">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            fontSize: 13, letterSpacing: '.15em', textTransform: 'uppercase',
            color: 'var(--fg-dim)', transition: 'color .2s', fontFamily: 'var(--font-archivo)',
          }}
            onMouseEnter={e => e.target.style.color = 'var(--fg)'}
            onMouseLeave={e => e.target.style.color = 'var(--fg-dim)'}>
            {l.label}
          </a>
        ))}
        <div style={{ border: '1px solid var(--border)', padding: '8px 14px', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
          <button onClick={toggle} style={{ padding: '0 4px', color: lang === 'en' ? 'var(--accent)' : 'var(--fg-dim)' }}>EN</button>
          {' / '}
          <button onClick={toggle} style={{ padding: '0 4px', color: lang === 'th' ? 'var(--accent)' : 'var(--fg-dim)' }}>TH</button>
        </div>
        <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
          className="btn" style={{ padding: '12px 22px', fontSize: 13 }}>
          Book Now
        </a>
      </div>

      {/* Mobile burger */}
      <button onClick={() => setOpen(o => !o)} style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }} className="nav-burger">
        <span style={{ display: 'block', width: 26, height: 2, background: 'var(--fg)' }} />
        <span style={{ display: 'block', width: 26, height: 2, background: 'var(--fg)' }} />
        <span style={{ display: 'block', width: 26, height: 2, background: 'var(--fg)' }} />
      </button>

      <style>{`
        @media (max-width: 880px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
