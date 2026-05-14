'use client'
import Image from 'next/image'
import { useLang } from '../lib/LangContext'

export default function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '140px var(--pad) 80px',
      overflow: 'hidden',
      background: 'radial-gradient(ellipse at 80% 50%, rgba(212,255,58,.08), transparent 60%), var(--bg)',
    }}>
      {/* Background photo */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image src="/MuiNew.jpg" alt="" fill style={{ objectFit: 'cover', objectPosition: 'center top' }} priority />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,.1) 0%, var(--bg) 90%)',
        }} />
      </div>

      {/* Grain */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        opacity: .04, mixBlendMode: 'overlay',
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='.9'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 'var(--max)', width: '100%', margin: '0 auto' }}>
        <div className="eyebrow" style={{ marginBottom: 32 }}>{h.label}</div>

        <h1 style={{ fontSize: 'clamp(56px, 11vw, 180px)', letterSpacing: '-.01em', fontFamily: 'var(--font-anton)' }}>
          {h.headline1}<br />
          <span style={{ color: 'var(--accent)' }}>{h.headline2}</span>
        </h1>

        <p style={{
          maxWidth: 560, marginTop: 40,
          fontSize: 'clamp(16px, 1.4vw, 19px)', color: 'var(--fg-dim)', lineHeight: 1.55,
          fontFamily: 'var(--font-archivo)',
        }}>
          {h.sub}
        </p>

        <div style={{ marginTop: 48, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a href="https://line.me/ti/p/~muitrainer" target="_blank" rel="noreferrer" className="btn btn--filled">
            {h.cta} →
          </a>
          <a href="#services" className="btn">Explore Programs</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 40, left: 'var(--pad)', zIndex: 2,
        fontSize: 11, letterSpacing: '.3em', textTransform: 'uppercase', color: 'var(--fg-dim)',
        display: 'flex', alignItems: 'center', gap: 14, fontFamily: 'var(--font-archivo)',
      }}>
        Scroll
        <span className="scroll-line" style={{ width: 1, height: 40, background: 'var(--fg-dim)', display: 'block' }} />
      </div>
    </section>
  )
}
