'use client'
import { useState, useEffect } from 'react'
import { useLang } from '../lib/LangContext'

export default function Navbar() {
  const { t, lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = [
    { href: '#about',    label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#faq',      label: t.nav.faq },
    { href: '#contact',  label: t.nav.contact },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#1f1f1f]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-[family-name:var(--font-anton)] text-2xl tracking-widest">
          <span className="text-red-600">M</span>UI
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[3px] uppercase text-[#888] hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <button onClick={toggle}
            className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[3px] uppercase border border-[#2a2a2a] px-3 py-1.5 text-[#888] hover:border-red-600 hover:text-red-600 transition-all">
            {lang === 'en' ? 'TH' : 'EN'}
          </button>
          <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
            className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[3px] uppercase bg-red-600 text-white px-5 py-2 hover:bg-red-700 transition-colors">
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile burger */}
        <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setOpen(o => !o)}>
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#080808] border-t border-[#1f1f1f] px-6 py-8 flex flex-col gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-barlow-c)] text-base font-bold tracking-[3px] uppercase text-white">
              {l.label}
            </a>
          ))}
          <div className="flex gap-4 pt-2">
            <button onClick={toggle}
              className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[3px] uppercase border border-[#333] px-4 py-2 text-[#888]">
              {lang === 'en' ? 'TH' : 'EN'}
            </button>
            <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer"
              className="font-[family-name:var(--font-barlow-c)] text-xs font-bold tracking-[3px] uppercase bg-red-600 text-white px-5 py-2">
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
